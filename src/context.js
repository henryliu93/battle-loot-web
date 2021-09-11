import React from "react"
import wallet from "./wallet";

const createAccountStore = () => {
    let state = {
        address: null,
        chainId: window.ethereum ? window.ethereum.chainId : -1,
    };
    let getState = () => state;
    let listeners = [];
    let subscribe = (listener) => listeners.push(listener);
    let connect = function (address){
        state.address = address;
        state.chainId = window.ethereum ? window.ethereum.chainId : -1;
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
    return {subscribe, getState, connect, connectWallet}

}

export const accountStore = createAccountStore();
export const AccountContext = React.createContext({
    accountStore
});