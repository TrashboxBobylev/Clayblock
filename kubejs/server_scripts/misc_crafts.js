ServerEvents.recipes(event => {
    event.shapeless("2x minecraft:yellow_dye", ["#c:dyes/red", "#c:dyes/green"]);
    event.shapeless("2x minecraft:brown_dye", ["#c:dyes/red", "#c:dyes/orange"]);

    let crop_table = {
        "orange" :"minecraft:carrot",
        "yellow" :"minecraft:potato",
        "brown"  :"minecraft:pumpkin_seeds",
        "lime"   :"minecraft:melon_seeds",
        "gray"   :"minecraft:bamboo",
        "red"    :"minecraft:nether_wart",
        "green"  :"minecraft:cactus",
        "cyan"   :"minecraft:sugar_cane",
        "blue"   :"minecraft:kelp",
        "purple" :"minecraft:chorus_flower"
    };

    Object.keys(crop_table).forEach((value, index, array) => {
        event.shaped(crop_table[value], [
            "COC",
            "CWC",
            "COC"
        ], {
            "C": "kubejs:clay_fruit",
            "W": "#c:crops/wheat",
            "O": `minecraft:${value}_glazed_terracotta`
        });
    });
});