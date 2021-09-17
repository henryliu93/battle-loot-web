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

const goerli_net_param = {
  chainId: '0x5',
  chainName: 'Goerli TestNet',
  nativeCurrency: {
    name: 'Eth',
    symbol: 'Eth',
    decimals: 18,
  },
  rpcUrls: ['https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
  blockExplorerUrls: ['https://goerli.etherscan.io']
}

const mumbai_net_param = {
  chainId: '0x13881',
  chainName: 'Mumbai TestNet',
  nativeCurrency: {
    name: 'Matic',
    symbol: 'Matic',
    decimals: 18,
  },
  rpcUrls: ['https://rpc-mumbai.maticvigil.com/'],
  blockExplorerUrls: ['https://mumbai.polygonscan.com/']
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

const config = {
    net_config: {
        eth_net_param: eth_net_param,
        polygon_net_param: polygon_net_param,
        goerli_net_param: goerli_net_param,
        mumbai_net_param: mumbai_net_param,
    },
    contract_config: {
        bloot_contract_address: '0x48CEDc686E9a368256Ee4344880556a5312Fdc24',
        mloot_contract_address: '0x50faeABdc3de25bDeAe18B30f0Fe82e4Bfd6B1ed',
    },
    loot_url_prefix: 'https://loot-bk.oss-ap-southeast-1.aliyuncs.com/loot/'
}

export default config;