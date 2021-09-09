import Web3 from 'web3';

async function getEthAccount(){
    const web3 = new Web3(window.ethereum);
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const accounts = await web3.eth.getAccounts();
    if (accounts){
        return accounts[0];
    }
}

class wallet {

    constructor(){
    }
    
    //Created check function to see if the MetaMask extension is installed
    static isMetaMaskInstalled() {
        //Have to check the ethereum binding on the window object to see if it's installed
        const { ethereum } = window;
        return Boolean(ethereum && ethereum.isMetaMask);
    }

    static getAccount(e){
        getEthAccount().then(account => {
            e.updateState(account);
        });
    }

    static getConnectStatus() {
        return Boolean(getEthAccount());
    }

    static disconnect(e){
        new Web3(window.ethereum).disconnect()
        e.updateState();
    }
}

export default wallet;