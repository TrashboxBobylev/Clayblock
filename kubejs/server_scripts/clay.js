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
        if (element == "minecraft:clay" || Number.parseInt(/([0-9]+)/.exec(element)[1]) > 15)
            return;
        //get the item name out of ResourceLocation
        let mi_clay_name = `modern_industrialization:${/(?:[0-9a-z_]*):([0-9a-z_]*)/.exec(element)[1]}`;
        event.recipes.modern_industrialization.compressor(1, 20)
            .itemIn(element)
            .itemOut(mi_clay_name);
    });
    for (let i = 0; i < clay_fuels.length; i++){
        let base_power = 500;
        event.recipes.custommachinery.custom_machine(`custommachinery:clay_generator`, 10 * Math.pow(2, i))
            .requireItem(clay_fuels[i], "fuel")
            .produceEnergyPerTick(base_power*Math.pow(3, i) / (10 * Math.pow(2, i)));
    }
});

ServerEvents.generateData("before_mods", event => {
    for (let i = 1; i <= 8; i++){
        event.json(`modpack:advancement/clay_${i}.json`, {
            display: {
                icon: {id: `kubejs:clay_${i}x`},
                title: {translate: `modpack.advancement.clay_${i}.title`},
                description: {translate: `modpack.advancement.clay_${i}.desc`}
            },
            criteria: {
                clay: {
                    trigger: "minecraft:inventory_changed",
                    conditions: {
                        items: [
                            {items: `kubejs:clay_${i}x`}
                        ]
                    }
                }
            },
            parent: `modpack:clay_${i-1}`,
            rewards: {
                experience: 2*(i+1)
            }
        });
        event.json(`modpack:advancement/terracotta_${i}.json`, {
            display: {
                icon: {id: `kubejs:terracotta_${i}x`},
                title: {translate: `modpack.advancement.terracotta_${i}.title`},
                description: {translate: `modpack.advancement.terracotta_${i}.desc`}
            },
            criteria: {
                terracotta: {
                    trigger: "minecraft:inventory_changed",
                    conditions: {
                        items: [
                            {items: `kubejs:terracotta_${i}x`}
                        ]
                    }
                }
            },
            parent: `modpack:terracotta_${i-1}`,
            rewards: {
                experience: 4*(i+1)
            }
        });
    }
});