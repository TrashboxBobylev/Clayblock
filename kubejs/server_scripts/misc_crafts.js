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

    event.remove("rftoolsbase:machine_base");
    event.shaped("2x rftoolsbase:machine_base", [
        "LLL",
        "CCC"
    ], {
        "L": "minecraft:lapis_lazuli",
        "C": "kubejs:clay_4x"
    });

    event.remove("rftoolsbase:machine_frame");
    event.shaped("2x rftoolsbase:machine_frame", [
        "CCC",
        "C C",
        "CCC"
    ], {
        "C": "kubejs:clay_5x"
    });

    event.remove("rftoolspower:coalgenerator");

    event.shaped("3x minecraft:ender_pearl", [
        "ECE",
        "CTC",
        "ECE"
    ], {
        "T": "#modpack:ender_pearl_core",
        "C": "minecraft:echo_shard",
        "E": "kubejs:clay_5x"
    });

    event.shaped("minecraft:blaze_rod", [
        " bb",
        "bsb",
        "bb "
    ], {
        "b": "minecraft:blaze_powder",
        "s": "mowziesmobs:bluff_rod"
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

    event.remove("rftoolsbase:dimensionalshard");

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
    event.blasting("minecraft:quartz", "minecraft:granite", 0.75, 200);
    event.blasting("5x rftoolsbase:dimensionalshard", "kubejs:clay_8x", 0.75, 200);

    event.blasting("8x modern_industrialization:tin_ingot", "modern_industrialization:clayium_ingot", 5, 400);
    event.blasting("2x modern_industrialization:lead_tiny_dust", "kubejs:clay_glass", 0.75, 200);
    event.blasting("modern_industrialization:antimony_tiny_dust", "minecraft:end_stone", 0.75, 200);
    event.blasting("12x modern_industrialization:raw_silver", "kubejs:clay_9x", 5, 400);
    event.blasting("12x modern_industrialization:raw_nickel", "kubejs:terracotta_9x", 5, 400);

    event.replaceInput(/fastpipes:*./, {"match": "minecraft:quartz"}, "minecraft:amethyst_block");
    event.replaceInput(/fastpipes:*./, {"match": "minecraft:diamond"}, "minecraft:prismarine");
    event.replaceInput(/fastpipes:*./, {"match": "minecraft:emerald"}, "minecraft:magma_cream");
    event.replaceInput(/fastpipes:*./, {"match": "minecraft:popped_chorus_fruit"}, "minecraft:ender_pearl");

    event.shaped("minecraft:end_portal_frame", [
        "C",
        "S",
        "T"
    ], {
        "C": "minecraft:end_crystal",
        "S": "minecraft:sculk",
        "T": "kubejs:terracotta_7x"
    });

    event.shaped("minecraft:end_crystal", [
        "GQG",
        "QEQ",
        "GQG"
    ], {
        "Q": "minecraft:quartz_block",
        "G": "minecraft:glass",
        "E": "minecraft:ender_eye"
    });
});

ServerEvents.tags("item", event => {
    event.add("modpack:ender_pearl_core", "rftoolsbase:dimensionalshard");
    event.add("modpack:ender_pearl_core", "mowziesmobs:umvuthana_mask_faith");
    event.add("modpack:ender_pearl_core", "mowziesmobs:umvuthana_mask_rage");
    event.add("modpack:ender_pearl_core", "mowziesmobs:umvuthana_mask_misery");
    event.add("modpack:ender_pearl_core", "mowziesmobs:umvuthana_mask_fear");
    event.add("modpack:ender_pearl_core", "mowziesmobs:umvuthana_mask_bliss");
    event.add("modpack:ender_pearl_core", "mowziesmobs:umvuthana_mask_fury");
});