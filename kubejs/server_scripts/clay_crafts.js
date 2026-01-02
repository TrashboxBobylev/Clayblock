/** @type {typeof import("net.minecraft.world.item.crafting.Ingredient").$Ingredient } */
let $Ingredient  = Java.loadClass("net.minecraft.world.item.crafting.Ingredient")

/**
 * 
 * @param {import("net.minecraft.world.item.crafting.Ingredient").$Ingredient$$Original} thing 
 */
function properJsonConvert(thing){
    return thing.containsAnyTag() ? thing.toJson() : thing.getStackArray()[0].toJson();
}

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

    /**
     * 
     * @param {import("net.minecraft.world.item.crafting.Ingredient").$Ingredient$$Type} input 
     * @param {import("net.minecraft.world.item.crafting.Ingredient").$Ingredient$$Type} output 
     */
    function baking(input, output){
        let finalInput = Ingredient.of(input);
        let finalOutput = Ingredient.of(output);
        event.custom({
            type: "clayworks:baking",
            category: "misc",
            cookingtime: 200,
            experience: 0.3,
            ingredient: finalInput.toJson(),
            result: properJsonConvert(finalOutput)
        });
    }

    baking("kubejs:clay_3x", "minecraft:coal");
    baking("kubejs:clay_2x", "minecraft:cobblestone");
    baking("kubejs:clay_4x", "minecraft:raw_iron");
    baking("kubejs:clay_5x", "minecraft:raw_gold");
    baking("kubejs:clay_6x", "minecraft:diamond");
    baking("untitledduckmod:duck_egg", "kubejs:clay_3x");
    baking("untitledduckmod:goose_egg", "kubejs:clay_4x");
});

ItemEvents.modifyTooltips(event => {
    for (let i = 0; i <= 20; i++){
        event.add(global.clays[i], [{translate: "modpack.clay_amount", with: [Math.pow(4, i+1).toString()]}]);
    }
});