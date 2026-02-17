/** @type {typeof import("net.minecraft.world.item.crafting.Ingredient").$Ingredient } */
let $Ingredient  = Java.loadClass("net.minecraft.world.item.crafting.Ingredient")

ServerEvents.recipes(event => {
    for (let i = 1; i <= 20; i++){
        event.shaped(global.clays[i], [
            "CC",
            "CC"
        ], {
            "C": global.clays[i-1]
        });
        event.shapeless(Item.of(global.clays[i-1]).withCount(4), [global.clays[i]]);

        event.smelting(Item.of(global.terracottas[i]), Item.of(global.clays[i]), 0.35);
        event.shapeless(Item.of(global.terracottas[i-1]).withCount(4), [global.terracottas[i]]);
        if (i > 1){
            event.shaped(global.terracottas[i], [
                "CC",
                "CC"
            ], {
                "C": global.terracottas[i-1]
            });
        }
    }

    event.shapeless("4x minecraft:clay_ball", ["minecraft:clay"]);

    event.shaped("4x kubejs:clay_snack", [
        "CcC",
        "c c",
        "CcC"
    ], {
        "C": "kubejs:clay_2x",
        "c": "kubejs:clay_1x"    
    });

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

    event.shaped("4x kubejs:clay_stairs", [
        "C  ",
        "CC ",
        "CCC"
    ], {
        "C": "kubejs:clay_planks"
    });

    event.shaped("6x kubejs:clay_slab", [
        "CCC"
    ], {
        "C": "kubejs:clay_planks"
    });

    event.shaped("2x minecraft:moss_block", [
        "CCC",
        "CCC",
        "CCC"
    ], {
        "C": "kubejs:clay_fruit"
    });

    event.campfireCooking('minecraft:brick', 'minecraft:clay', 0.35, 300);
    event.campfireCooking('minecraft:terracotta', 'kubejs:clay_1x', 0.35, 300);

    event.smelting("minecraft:pointed_dripstone", "kubejs:clay_snack", 0.35);
    event.campfireCooking("minecraft:pointed_dripstone", "kubejs:clay_snack", 0.35, 600);

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

    event.shaped('custommachinery:custom_machine_item[custommachinery:machine="custommachinery:clay_generator"]', [
        "TCT",
        "TFT",
        "TCT"
    ], {
        "T": "kubejs:clay_4x",
        "F": "clayworks:kiln",
        "C": "minecraft:copper_block"
    });
    
    event.shaped("2x modern_industrialization:clay_generator_i", [
        "GGG",
        "UHU",
        "CCC"
    ], {
        "C": "modern_industrialization:curium_cable",
        "G": 'custommachinery:custom_machine_item[custommachinery:machine="custommachinery:clay_generator"]',
        "U": "#c:gears/clayium",
        "H": "modern_industrialization:basic_machine_hull"
    });

    event.recipes.modern_industrialization.assembler(8, 200).
        itemIn("modern_industrialization:basic_machine_hull").
        itemIn('3x custommachinery:custom_machine_item[custommachinery:machine="custommachinery:clay_generator"]').
        itemIn('2x #c:gears/clayium').
        itemIn("3x modern_industrialization:curium_cable").
        itemOut("2x modern_industrialization:clay_generator_i");

    event.shaped("2x modern_industrialization:clay_generator_ii", [
        "GGG",
        "UHU",
        "CCC"
    ], {
        "C": "modern_industrialization:aluminum_cable",
        "G": "modern_industrialization:clay_generator_i",
        "U": "#c:gears/clayium",
        "H": "modern_industrialization:advanced_machine_hull"
    });

    event.recipes.modern_industrialization.assembler(8, 200).
        itemIn("modern_industrialization:advanced_machine_hull").
        itemIn('3x modern_industrialization:clay_generator_i').
        itemIn('2x #c:gears/clayium').
        itemIn("3x modern_industrialization:aluminum_cable").
        itemOut("2x modern_industrialization:clay_generator_ii");

    event.shaped("2x modern_industrialization:clay_generator_iii", [
        "GGG",
        "UHU",
        "CCC"
    ], {
        "C": "modern_industrialization:annealed_copper_cable",
        "G": "modern_industrialization:clay_generator_ii",
        "U": "#c:gears/clayium",
        "H": "modern_industrialization:turbo_machine_hull"
    });

    event.recipes.modern_industrialization.assembler(8, 200).
        itemIn("modern_industrialization:turbo_machine_hull").
        itemIn('3x modern_industrialization:clay_generator_ii').
        itemIn('2x #c:gears/clayium').
        itemIn("3x modern_industrialization:annealed_copper_cable").
        itemOut("2x modern_industrialization:clay_generator_iii");

    event.shaped("2x modern_industrialization:clay_generator_iv", [
        "GGG",
        "UHU",
        "CCC"
    ], {
        "C": "modern_industrialization:platinum_cable",
        "G": "modern_industrialization:clay_generator_iii",
        "U": "#c:storage_blocks/clayium",
        "H": "modern_industrialization:highly_advanced_machine_hull"
    });

    event.recipes.modern_industrialization.assembler(8, 200).
        itemIn("modern_industrialization:highly_advanced_machine_hull").
        itemIn('3x modern_industrialization:clay_generator_iii').
        itemIn('2x #c:storage_blocks/clayium').
        itemIn("3x modern_industrialization:platinum_cable").
        itemOut("2x modern_industrialization:clay_generator_iv");

    /**
     * 
     * @param {import("net.minecraft.world.item.crafting.Ingredient").$Ingredient$$Type} input 
     * @param {import("net.minecraft.world.item.ItemStack").$ItemStack$$Type} output 
     */
    function baking(input, output){
        let finalInput = Ingredient.of(input);
        let finalOutput = Item.of(output);
        event.custom({
            type: "clayworks:baking",
            category: "misc",
            cookingtime: 200,
            experience: 0.3,
            ingredient: finalInput.toJson(),
            result: finalOutput.toJson()
        });
    }

    baking("kubejs:clay_3x", "minecraft:coal");
    baking("kubejs:clay_2x", "minecraft:cobblestone");
    baking("kubejs:clay_4x", "minecraft:raw_iron");
    baking("kubejs:clay_5x", "minecraft:raw_gold");
    baking("kubejs:clay_6x", "minecraft:diamond");
    baking("untitledduckmod:duck_egg", "kubejs:clay_3x");
    baking("untitledduckmod:goose_egg", "kubejs:clay_4x");

    baking("clayworks:cyan_terracotta_bricks", "minecraft:gravel");
    baking("minecraft:gray_glazed_terracotta", "minecraft:gunpowder");
    baking("kubejs:terracotta_2x", "minecraft:red_sand");
    baking("kubejs:terracotta_3x", "minecraft:raw_copper");

    baking("untitledduckmod:duck_feather", "minecraft:blue_dye");
    baking("untitledduckmod:goose_foot", "minecraft:red_dye");
    baking("minecraft:dripstone_block", "minecraft:beef");

    baking("kubejs:clay_fruit", "minecraft:short_grass");
    baking("minecraft:mangrove_roots", "8x minecraft:stick");
    baking("minecraft:granite", "minecraft:quartz");
    baking("minecraft:brown_mushroom_block", "3x minecraft:torch");
});

ItemEvents.modifyTooltips(event => {
    for (let i = 0; i <= 20; i++){
        event.add(global.clays[i], [{translate: "modpack.clay_amount", with: [Math.pow(4, i+1).toString()]}]);
        event.add(global.terracottas[i], [{translate: "modpack.terracotta_amount", with: [Math.pow(4, i).toString()]}]);
    }
});