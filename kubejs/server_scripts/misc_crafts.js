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

    event.shaped("minecraft:breeze_rod", [
        " bb",
        "bsb",
        "bb "
    ], {
        "b": "kubejs:clay_4x",
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

    event.forEachRecipe({type: "minecraft:blasting"}, recipe => {
        event.recipes.modern_industrialization.mi_blast(4, 100)
            .itemIn(recipe.originalRecipeIngredients.getFirst())
            .itemOut(recipe.originalRecipeResult);
    });

    /**
     * 
     * @param {import("net.minecraft.world.item.crafting.Ingredient").$Ingredient$$Type} input 
     * @param {import("net.minecraft.world.item.ItemStack").$ItemStack$$Type} output 
     */
    function blasting(output, input){
        event.blasting(output, input, 0.75, 200);
        event.recipes.modern_industrialization.mi_blast(4, 200)
            .itemIn(input)
            .itemOut(output);
    }
    /**
     * 
     * @param {import("net.minecraft.world.item.crafting.Ingredient").$Ingredient$$Type} input 
     * @param {import("net.minecraft.world.item.ItemStack").$ItemStack$$Type} output 
     */
    function mega_blasting(output, input){
        event.blasting(output, input, 5, 400);
        event.recipes.modern_industrialization.mi_blast(8, 300)
            .itemIn(input)
            .itemOut(output);
    }

    blasting("minecraft:ancient_debris", "kubejs:terracotta_6x");
    blasting("minecraft:crying_obsidian", "minecraft:obsidian");
    blasting("minecraft:mangrove_log", "kubejs:terracotta_5x");
    blasting("minecraft:copper_ore", "kubejs:terracotta_4x");
    blasting("minecraft:leather", "kubejs:terracotta_3x");
    blasting("minecraft:blackstone", "kubejs:terracotta_2x");
    blasting("minecraft:gravel", "kubejs:clay_2x");
    blasting("minecraft:coal_ore", "kubejs:clay_3x");
    blasting("minecraft:iron_ore", "kubejs:clay_4x");
    blasting("minecraft:gold_ore", "kubejs:clay_5x");
    blasting("minecraft:diamond_ore", "kubejs:clay_6x");
    blasting("minecraft:black_dye", "minecraft:coal_block");
    blasting("minecraft:quartz", "minecraft:granite");
    blasting("5x rftoolsbase:dimensionalshard", "kubejs:clay_8x");

    mega_blasting("8x modern_industrialization:tin_ingot", "modern_industrialization:clayium_ingot");
    blasting("2x modern_industrialization:lead_tiny_dust", "kubejs:clay_glass");
    blasting("modern_industrialization:antimony_tiny_dust", "minecraft:end_stone");
    mega_blasting("12x modern_industrialization:raw_silver", "kubejs:clay_9x");
    mega_blasting("12x modern_industrialization:raw_nickel", "kubejs:terracotta_9x");
    mega_blasting("48x modern_industrialization:bauxite_dust", "kubejs:clay_10x");
    mega_blasting("24x modern_industrialization:salt_dust", "kubejs:terracotta_10x");

    event.forEachRecipe(/fastpipes:*./, recipe => {
        recipe.set("result", recipe.originalRecipeResult.withCount(recipe.originalRecipeResult.count*2));
    });

    event.replaceInput(/fastpipes:*./, {"match": "minecraft:quartz"}, "minecraft:amethyst_block");
    event.replaceInput(/fastpipes:*./, {"match": "minecraft:diamond"}, "minecraft:prismarine");
    event.replaceInput(/fastpipes:*./, {"match": "minecraft:emerald"}, "minecraft:magma_cream");
    event.replaceInput(/fastpipes:*./, {"match": "minecraft:popped_chorus_fruit"}, "minecraft:ender_pearl");

    event.shaped("minecraft:sculk", [
        "SSS",
        "SSS",
        "SSS"
    ], {
        "S": "minecraft:echo_shard"
    });

    event.shaped("minecraft:end_portal_frame", [
        " C ",
        "QSQ",
        "QTQ"
    ], {
        "C": "minecraft:ender_eye",
        "S": "minecraft:sculk",
        "T": "kubejs:terracotta_7x",
        "Q": "minecraft:quartz_block"
    });

    event.shaped("minecraft:end_crystal", [
        "GQG",
        "QEQ",
        "GQG"
    ], {
        "Q": "modern_industrialization:clayium_rod",
        "G": "kubejs:clay_glass",
        "E": "minecraft:ender_eye"
    });

    event.shaped("minecraft:sculk_sensor", [
        "C",
        "S"
    ], {
        "C": "minecraft:comparator",
        "S": "minecraft:sculk"
    });

    event.shaped("minecraft:sculk_shrieker", [
        "C",
        "S"
    ], {
        "C": "minecraft:repeater",
        "S": "minecraft:sculk_sensor"
    });

    event.shaped("minecraft:sculk_catalyst", [
        "C",
        "S"
    ], {
        "C": "minecraft:diamond",
        "S": "minecraft:sculk"
    });

    event.shaped("minecraft:wither_skeleton_skull", [
        "OOO",
        "OCO",
        "OOO"
    ], {
        "O": "minecraft:obsidian",
        "C": "kubejs:clay_7x"
    });

    event.shaped("minecraft:netherite_upgrade_smithing_template", [
        "OOO",
        "OCO",
        "OOO"
    ], {
        "O": "minecraft:nether_bricks",
        "C": "kubejs:terracotta_8x"
    });

    event.shaped("4x minecraft:ochre_froglight", [
        "BBB",
        "BPB",
        "BBB"
    ], {
        "B": "minecraft:glow_berries",
        "P": "minecraft:blaze_powder"
    });

    event.remove("storagedrawers:upgrade_template");
    event.shaped("4x storagedrawers:upgrade_template", [
        "SCS",
        "CDC",
        "SCS"
    ], {
        "S": "minecraft:stick",
        "C": "kubejs:clay_fruit",
        "D": "#storagedrawers:drawers"
    });

    event.remove("rehooked:blaze_hook");
    event.shaped("rehooked:blaze_hook", [
        "QBH",
        " BB",
        "B Q"
    ], {
        "Q": "minecraft:quartz_block",
        "B": "minecraft:blaze_rod",
        "H": "rehooked:diamond_hook"
    });

    event.remove("modern_industrialization:forge_hammer");
    event.shaped("modern_industrialization:forge_hammer", [
        "CEB",
        " E ",
        "EEE"
    ], {
        "C": "#c:storage_blocks/curium",
        "B": "#c:storage_blocks/basalt",
        "E": "#c:ingots/iron"
    });

    event.replaceInput({output: "rftoolsbuilder:builder"}, {match: "minecraft:ender_pearl"}, "kubejs:terracotta_7x");

    for (let quarry_type of ["", "_fortune", "_silk"]){
        event.remove(`rftoolsbuilder:shape_card_quarry${quarry_type}`);
        event.remove(`rftoolsbuilder:shape_card_quarry_clear${quarry_type}`);
        event.remove(`rftoolsbuilder:shape_card_quarry${quarry_type}_dirt`);
    }

    event.remove("rftoolsbuilder:shape_card_pump");
    event.remove("rftoolsbuilder:shape_card_pump_clear");
    event.remove("rftoolsbuilder:shape_card_pump_dirt");

    event.shaped("rftoolsbuilder:shape_card_quarry_clear", [
        "rPr",
        "iMi",
        "rSr"
    ], {
        "M": "rftoolsbuilder:shape_card_def",
        "P": "onlyhammersandexcavators:diamond_excavator",
        "S": "minecraft:redstone_block",
        "i": "#c:ingots/iron",
        "r": "minecraft:redstone"
    });

    event.shaped("rftoolsbuilder:shape_card_quarry_clear_fortune", [
        "nPn",
        "nMn",
        "nSn"
    ], {
        "M": "rftoolsbuilder:shape_card_quarry_clear",
        "P": "minecraft:end_portal_frame",
        "S": "rftoolsbase:infused_enderpearl",
        "n": "#c:ingots/netherite"
    });

    event.shaped("rftoolsbuilder:shape_card_quarry_clear_silk", [
        " P ",
        "nMn",
        " S "
    ], {
        "M": "rftoolsbuilder:shape_card_quarry_clear",
        "P": "minecraft:beacon",
        "S": "modern_industrialization:steam_quarry",
        "n": "#c:gears/clayium"
    });

    event.shaped("rftoolsbuilder:shape_card_pump_clear", [
        "rPr",
        "iMi",
        "rSr"
    ], {
        "M": "rftoolsbuilder:shape_card_def",
        "P": "minecraft:water_bucket",
        "S": "minecraft:lava_bucket",
        "i": "minecraft:bucket",
        "r": "minecraft:redstone"
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

    event.add("fastpipes:fluid_pipes", "fastpipes:basic_fluid_pipe", "fastpipes:improved_fluid_pipe", "fastpipes:advanced_fluid_pipe", "fastpipes:elite_fluid_pipe", "fastpipes:ultimate_fluid_pipe");
    event.add("fastpipes:energy_pipes", "fastpipes:basic_energy_pipe", "fastpipes:improved_energy_pipe", "fastpipes:advanced_energy_pipe", "fastpipes:elite_energy_pipe", "fastpipes:ultimate_energy_pipe");
    event.add("c:hidden_from_recipe_viewers", "rftoolsbuilder:shape_card_quarry", "rftoolsbuilder:shape_card_quarry_fortune",  "rftoolsbuilder:shape_card_quarry_silk");
});