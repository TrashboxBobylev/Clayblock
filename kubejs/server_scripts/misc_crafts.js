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

    event.shaped("minecraft:blaze_rod", [
        " bb",
        "bsb",
        "bb "
    ], {
        "b": "minecraft:blaze_powder",
        "s": "minecraft:stick"
    });

    event.shaped("minecraft:soul_sand", [
        "GS",
        "SG"
    ], {
        "G": "minecraft:granite",
        "S": "minecraft:red_sand"
    });

    event.remove("minecraft:blast_furnace");
    event.shaped("2x minecraft:blast_furnace", [
        "NNN",
        "MCM",
        "SSS"
    ], {
        "N": "minecraft:nether_bricks",
        "M": "minecraft:magma_block",
        "C": "clayworks:kiln",
        "S": "minecraft:soul_sand"
    });

    event.blasting("minecraft:ancient_debris", "kubejs:terracotta_6x", 0.75, 200);
    event.blasting("minecraft:crying_obsidian", "minecraft:obsidian", 0.75, 200);
    event.blasting("minecraft:mangrove_log", "kubejs:terracotta_5x", 0.75, 200);
    event.blasting("minecraft:copper_ore", "kubejs:terracotta_4x", 0.75, 200);
    event.blasting("minecraft:leather", "kubejs:terracotta_3x", 0.75, 200);
    event.blasting("minecraft:blackstone", "kubejs:terracotta_2x", 0.75, 200);
    event.blasting("minecraft:gravel", "kubejs:clay_2x", 0.75, 200);
    event.blasting("minecraft:coal_ore", "kubejs:clay_3x", 0.75, 200);
    event.blasting("minecraft:iron_ore", "kubejs:clay_4x", 0.75, 200);
    event.blasting("minecraft:gold_ore", "kubejs:clay_5x", 0.75, 200);
    event.blasting("minecraft:diamond_ore", "kubejs:clay_6x", 0.75, 200);
    event.blasting("minecraft:black_dye", "minecraft:coal_block", 0.75, 200);
});