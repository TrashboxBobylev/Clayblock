ServerEvents.recipes(event => {
    for (let i = 1; i <= 20; i++){
        event.shaped(global.clays[i], [
            "CC",
            "CC"
        ], {
            "C": global.clays[i-1]
        });
        event.shapeless(Item.of(global.clays[i-1]).withCount(4), [global.clays[i]]);
    }

    event.shaped("6x kubejs:clay_planks", [
        "Cc",
        "cC"
    ], {
        "C": "kubejs:clay_2x",
        "c": "minecraft:clay_ball"
    });

    event.shaped("kubejs:clay_planks", [
        "Cc",
        "cC"
    ], {
        "C": "kubejs:clay_1x",
        "c": "minecraft:clay_ball"
    });

    event.campfireCooking('minecraft:brick', 'minecraft:clay', 0.35, 300);
    event.campfireCooking('minecraft:terracotta', 'kubejs:clay_1x', 0.35, 300);

    event.remove({output: "clayworks:kiln"});
    event.shaped("clayworks:kiln", [
        "TBT",
        "BCB",
        "TBT"
    ], {
        "C": "kubejs:clay_3x",
        "B": "minecraft:bricks",
        "T": "minecraft:terracotta"
    });
});

ItemEvents.modifyTooltips(event => {
    for (let i = 0; i <= 20; i++){
        event.add(global.clays[i], [{translate: "modpack.clay_amount", with: [Math.pow(4, i+1).toString()]}]);
    }
});