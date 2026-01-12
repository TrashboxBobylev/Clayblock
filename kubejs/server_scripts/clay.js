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

ServerEvents.recipes(event => {
    let clay_fuels = [];
    clay_fuels.push("minecraft:clay_ball");
    global.clays.forEach(element => {
        clay_fuels.push(element);
    });
    for (let i = 0; i < clay_fuels.length; i++){
        let base_power = 500;
        event.recipes.custommachinery.custom_machine(`custommachinery:clay_generator`, 10 * Math.pow(2, i))
            .requireItem(clay_fuels[i], "fuel")
            .produceEnergyPerTick(base_power*Math.pow(3, i) / (10 * Math.pow(2, i)));
    }
});