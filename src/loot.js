export const getTopLootMap = () => {
    const json = require('./loot/top-10k.json');
    const map = new Map();
    json.forEach(e => {
        map.set(e.lootId, e);
    });
    return map;
}