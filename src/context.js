import React from "react"
import {wallet, mumbai_net_param} from "./wallet";
import {getWeb3, getContract, getNftContract} from "./contract.js"
import {getTopLootMap} from "./loot.js"
import Web3 from "web3";
import { MaticPOSClient} from "@maticnetwork/maticjs"

const lootMap = getTopLootMap();

const createAccountStore = () => {
    let state = {
        address: null,
        chainId: window.ethereum ? window.ethereum.chainId : -1,
        web3: null,
        maticProvider: null,
        maticPosClient: null,
        bagld_to_claim: 0,
        bagld_own: 0,
        totalWarriors: 0,
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
            const loot = lootMap.get(Number(tokenId));
            console.log(loot);
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
                                        //contract.methods.warriorsIndex(state.address).send({from: state.address}).then(e => console.log(e));
                                        contract.methods.registerRole(tokenId, rarityRank, rarityIndex)
                                         .send({from: state.address})
                                         .then(e => console.log(e));
                                    });
                                }else{
                                    getNftContract(state.web3).then(nftContract => {
                                        nftContract.methods.approve('0x005d8f25c238c7093056788Ed3302e709736120D', tokenId).send({from: state.address})
                                        .then(ts => {
                                            getContract(state.web3).then(contract => {
                                                //contract.methods.warriorsIndex(state.address).send({from: state.address}).then(e => console.log(e));
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
                //contract.methods.warriorsIndex(state.address).send({from: state.address}).then(e => console.log(e));
                contract.methods.pvpBattleByRanking(tokenId)
                 .send({from: state.address})
                 .then(e => console.log(e));
            });
        });
    }

    // timer
    setInterval(() => {
        if(mumbai_net_param.chainId === state.chainId && state.address){
            getContract(state.web3).then(contract => {
                contract.methods.totalWarriors()
                        .call()
                        .then(num => {
                            console.log("totalWarriors :" + num);
                            state.totalWarriors = num;
                        });
                contract.methods.getClaimableReward(state.address)
                        .call({from: state.address})
                        .then(rw => {
                            console.log("getClaimableReward :" + rw);
                            state.bagld_to_claim = rw;
                        });
            });
        }
    },10000);
    

    return {subscribe, getState, connect, connectWallet, stake, deposit, battle}
}

export const accountStore = createAccountStore();
export const AccountContext = React.createContext({
    accountStore
});