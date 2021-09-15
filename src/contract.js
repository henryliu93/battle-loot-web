import Web3 from "web3";
export const getWeb3 = () => {
    return new Promise((resolve, reject) => {
      window.addEventListener("load", async () => {
        if (window.ethereum) {
          const web3 = new Web3(window.ethereum);
          try {
            // ask user permission to access his accounts
            await window.ethereum.request({ method: "eth_requestAccounts" });
            resolve(web3);
          } catch (error) {
            reject(error);
          }
        } else {
          reject("Must install MetaMask");
        }
      });
    });
  };

export const getContract = async (web3) => {
    const data = require("./abi/bloot.json");
    const netId = await web3.eth.net.getId();
    const deployedNetwork = data.networks[netId];
    console.log(deployedNetwork.address);
    const bloot = new web3.eth.Contract(
      data.abi,
      deployedNetwork.address
    );
    return bloot;
  };

export const getNftContract = async (web3) => {
  const data = require("./abi/nft.json");
    const netId = await web3.eth.net.getId();
    const deployedNetwork = data.networks[netId];
    console.log(deployedNetwork.address);
    const nft = new web3.eth.Contract(
      data.abi,
      deployedNetwork.address
    );
    return nft;
}