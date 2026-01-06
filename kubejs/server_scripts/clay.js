ServerEvents.tags("block", event => {
    for (let clay of global.clays){
        event.add("minecraft:dirt", clay);
    }
    event.add("minecraft:saplings", "kubejs:clay_sapling");
});

ServerEvents.tags("item", event => {
    event.add("minecraft:saplings", "kubejs:clay_sapling");
});