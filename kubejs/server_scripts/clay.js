ServerEvents.tags("block", event => {
    for (let clay of global.clays){
        event.add("minecraft:dirt", clay);
    }
    for (let clay of global.terracottas){
        event.add("minecraft:nether_carver_replaceables", clay);
    }
    event.add("minecraft:saplings", "kubejs:clay_sapling");
});

ServerEvents.tags("item", event => {
    event.add("minecraft:saplings", "kubejs:clay_sapling");
});