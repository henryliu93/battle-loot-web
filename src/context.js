import React from "react"
import wallet from "./wallet";
import {getWeb3, getContract} from "./contract.js"
import {getTopLootMap} from "./loot.js"
import Web3 from "web3";

const lootMap = getTopLootMap();

const createAccountStore = () => {
    let state = {
        address: null,
        chainId: window.ethereum ? window.ethereum.chainId : -1,
        web3: null,
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
                const rarityIndex = loot.score;
                getContract(state.web3).then(contract => console.log(contract));
            }
        }
        
    }
    return {subscribe, getState, connect, connectWallet, stake}

}

export const accountStore = createAccountStore();
export const AccountContext = React.createContext({
    accountStore
});