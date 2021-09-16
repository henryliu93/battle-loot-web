import Web3 from 'web3';
import config from './config.js'

async function getAccount(){
    const web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await web3.eth.getAccounts();
        if (accounts){
            return accounts[0];
        }
}

async function switchNetWork(net_param, callback){
    const {ethereum} = window;
    try {
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: net_param.chainId }],
        }).then(callback);
      } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask.
        if (switchError.code === 4902) {
          try {
            await ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [net_param],
            });
          } catch (addError) {
            // handle "add" error
          }
        }
        // handle other "switch" errors
      }
}

export class wallet {
    
    //Created check function to see if the MetaMask extension is installed
    static isMetaMaskInstalled(){
        //Have to check the ethereum binding on the window object to see if it's installed
        const { ethereum } = window;
        return Boolean(ethereum && ethereum.isMetaMask);
    };

    static getConnectedAccount(e) {
        getAccount().then(e)
    };

    static switchToEthMainNet(callback){
        switchNetWork(config.net_config.eth_net_param, callback);
    };

    static switchToPolygonMainNet(callback){
        switchNetWork(config.net_config.polygon_net_param, callback);
    };

    static switchToMumbaiNet(callback){
      switchNetWork(config.net_config.mumbai_net_param, callback);
    };

    static switchToGoerliNet(callback){
      switchNetWork(config.net_config.goerli_net_param, callback);
    };
}

export default wallet;