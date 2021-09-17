import config from "./config.js";
export const getLootMapFromUrl = (tokenId) => {
    let key = 21081;
    if(tokenId > 21081){
        const offset = (tokenId - 21081) % 13080;
        key =  (Math.floor((tokenId - 21081) / 13080) + (offset > 0 ? 1 : 0)) * 13080 + 21081;
    }
    if (key >= 1329081){
        key = 1329081;
    }
    const url = config.loot_url_prefix + (key + '.json');
    console.log(url);
    return fetch(url, {
        method: 'GET',
        mode: "no-cors",
        headers:{
            'Accept': 'application/json'
        }
    });
}