import Web3 from 'web3';

const eth_net_param = {
    chainId: '0x1',
    chainName: 'Ethereum MainNet',
    nativeCurrency: {
        name: 'Eth',
        symbol: 'Eth',
        decimals: 18,
    },
    rpcUrls: ['https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
    blockExplorerUrls: ['https://etherscan.io']
}


const polygon_net_param = {
    chainId: '0x89',
    chainName: 'Polygon MainNet',
    nativeCurrency: {
        name: 'Matic',
        symbol: 'Matic',
        decimals: 18,
    },
    rpcUrls: [
        'https://rpc-mainnet.matic.network',
        'https://matic-mainnet.chainstacklabs.com',
        'https://rpc-mainnet.maticvigil.com',
        'https://rpc-mainnet.matic.quiknode.pro',
        'https://matic-mainnet-full-rpc.bwarelabs.com'
    ],
    blockExplorerUrls: ['https://polygonscan.com/']
}

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

class wallet {
    
    //Created check function to see if the MetaMask extension is installed
    static isMetaMaskInstalled(){
        //Have to check the ethereum binding on the window object to see if it's installed
        const { ethereum } = window;
        return Boolean(ethereum && ethereum.isMetaMask);
    };

    static getConnectedAccount(e) {
        getAccount().then(e)
    }

    static switchToEthMainNet(callback){
        switchNetWork(eth_net_param, callback);
    }

    static switchToPolygonMainNet(callback){
        switchNetWork(polygon_net_param, callback);
    }
}

export default wallet;