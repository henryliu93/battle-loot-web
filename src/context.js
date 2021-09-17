import React from "react"
import {wallet} from "./wallet";
import config from "./config.js"
import {getContract, getNftContract} from "./contract.js"
import {getLootMapFromUrl} from "./loot.js"
import Web3 from "web3";
import { MaticPOSClient} from "@maticnetwork/maticjs"

const lootMap = new Map();
const getLootRarityInfo =  async (tokenId) => {
    if(tokenId >= 8001 && tokenId <= 1329081){
        let lootInfo = lootMap.get(tokenId);
        if (lootInfo){
            return lootInfo;
        }
        const data = await (await getLootMapFromUrl(tokenId)).json;
        console.log(data);
        data.forEach(e => {
            lootMap.set(e.lootId, e);
        });
        return lootMap.get(tokenId);
    }
    
}

const createAccountStore = () => {
    let state = {
        address: null,
        chainId: window.ethereum.chainId || '0x0',
        web3: null,
        maticProvider: null,
        maticPosClient: null,
        bagld_to_claim: 0,
        bagld_own: 0,
        totalWarriors: 0,
        battleInfo: null,
        stakeTokens: null,
    };
    let getState = () => state;
    let listeners = [];
    let subscribe = (listener) => listeners.push(listener);
    let connect = function (address){
        state.address = address;
        state.chainId = window.ethereum ? window.ethereum.chainId : -1;
        state.web3 = new Web3(window.ethereum);
        listeners.forEach(listener => listener())
    }
    let disconnect = () => {
        state.address = null;
        state.chainId = -1;
        listeners.forEach(listener => listener())
    }
    let connectWallet = () => {
        wallet.getConnectedAccount(connect);

    }
    let stake = () => {
        if(state.web3){
            const tokenId = document.getElementById("tokenInput").value;
            getLootRarityInfo(Number(tokenId)).then(loot => {
                if (loot){
                    const rarityRank = loot.rarest;
                    const rarityIndex = Math.trunc(loot.score * 1000000);
                    wallet.switchToMumbaiNet(() => {
                        getNftContract(state.web3).then(nftContract => {
                            nftContract.methods.getApproved(tokenId)
                                .call()
                                .then(ownAddress => {
                                    if(ownAddress === state.address){
                                        getContract(state.web3).then(contract => {
                                            contract.methods.registerRole(tokenId, rarityRank, rarityIndex)
                                             .send({from: state.address})
                                             .then(e => console.log(e));
                                        });
                                    }else{
                                        getNftContract(state.web3).then(nftContract => {
                                            nftContract.methods.approve(config.contract_config.bloot_contract_address, tokenId).send({from: state.address})
                                            .then(ts => {
                                                getContract(state.web3).then(contract => {
                                                    contract.methods.registerRole(tokenId, rarityRank, rarityIndex)
                                                     .send({from: state.address})
                                                     .then(e => console.log(e));
                                                });
                                            });
                                        });
                                    }
                                });
                        })
                        
                    });
                    
                }
            });
            
        }
        
    }
    let deposit = () => {
        wallet.switchToGoerliNet(() => {
            const rootErc721Address = document.getElementById("rootErc721Input").value;
            const erc721TokenId = document.getElementById("erc721TokenInput").value;
            state.maticProvider = state.maticProvider || new Web3('https://rpc-mumbai.matic.today');
            const maticPosClient = new MaticPOSClient({
                network: "testnet",
                version: "mumbai",
                parentProvider: window.ethereum,
                maticProvider: state.maticProvider
            })
            maticPosClient.approveERC721ForDeposit(rootErc721Address, erc721TokenId, {from: state.address})
                          .then(tx => {
                              maticPosClient.depositERC721ForUser(rootErc721Address, state.address, erc721TokenId, {
                                  from: state.address
                              }).then(rs => console.log(rs));
                          });
        });
    }

    let battle = () => {
        wallet.switchToMumbaiNet(() => {
            const tokenId = document.getElementById("battleInput").value;
            getContract(state.web3).then(contract => {
                contract.methods.pvpBattleByRanking(tokenId)
                 .send({from: state.address})
                 .then(e => {
                     contract.methods.battleDetailsByRanking(state.address)
                     .call({from: state.address})
                     .then(bt => {
                        state.battleInfo = bt;
                        listeners.forEach(listener => listener());
                     });
                 });
            });
        });
    }

    let claimReward = () => {
        if(state.bagld_to_claim > 0){
            wallet.switchToMumbaiNet(() => {
                getContract(state.web3).then(contract => {
                    contract.methods.claim()
                     .send({from: state.address})
                     .then(e => console.log(e));
                });
            });
        } 
    }

    let withdraw = () => {
        wallet.switchToMumbaiNet(() => {
            const tokenId = document.getElementById("withdrawInput").value;
            getContract(state.web3).then(contract => {
                contract.methods.quitFromGame(tokenId)
                 .send({from: state.address})
                 .then(e => console.log(e));
            });
        });
    }

    // timer
    setInterval(() => {
        if(config.net_config.mumbai_net_param.chainId === state.chainId && state.address){
            getContract(state.web3).then(contract => {
                contract.methods.totalWarriors()
                        .call()
                        .then(num => {
                            state.totalWarriors = num;
                            listeners.forEach(listener => listener());
                        });
                contract.methods.getClaimableReward(state.address)
                        .call({from: state.address})
                        .then(rw => {
                            state.bagld_to_claim = rw;
                            listeners.forEach(listener => listener());
                        });
                contract.methods.getYourStakedToken(state.address)
                        .call({from: state.address})
                        .then(rs => {
                            state.stakeTokens = rs;
                            listeners.forEach(listener => listener());
                        });
            });
        }
    },10000);
    
    return {subscribe, getState, connect, connectWallet, stake, deposit, battle, claimReward, withdraw}
}

export const accountStore = createAccountStore();
export const AccountContext = React.createContext({
    accountStore
});