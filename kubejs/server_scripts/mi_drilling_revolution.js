ServerEvents.recipes(event => {
    event.shaped("6x modern_industrialization:clayium_drill", [
        "G D",
        "GI ",
        "FGG"
    ], {
        "D": "modern_industrialization:clayium_drill_head",
        "G": "#c:gears/bronze",
        "I": "#modern_industrialization:item_pipes",
        "F": "#modern_industrialization:fluid_pipes"
    });

    event.recipes.modern_industrialization.assembler(8, 200)
        .itemInputs(["modern_industrialization:clayium_drill_head", "4x #c:gears/bronze", "#modern_industrialization:item_pipes", "#modern_industrialization:fluid_pipes"])
        .itemOut("12x modern_industrialization:clayium_drill");

    event.recipes.modern_industrialization.quarry(4, 600)
        .itemIn("modern_industrialization:clayium_drill", 0.04)
        .itemOut("kubejs:clay_3x", 1)
        .itemOut("kubejs:clay_4x", 0.5)
        .itemOut("kubejs:clay_5x", 0.25)
        .itemOut("kubejs:clay_6x", 0.125)
        .itemOut("kubejs:clay_7x", 0.0625)
        .itemOut("kubejs:clay_8x", 0.03125)
        .itemOut("kubejs:clay_9x", 0.015625)
        .itemOut("kubejs:clay_10x", 0.0078125);

    event.shaped("6x modern_industrialization:terracotta_drill", [
        "GID",
        "MAI",
        "FMG"
    ], {
        "D": "modern_industrialization:terracotta_drill_head",
        "G": "#c:gears/bronze",
        "I": "#modern_industrialization:item_pipes",
        "F": "modern_industrialization:tin_cable",
        "A": "modern_industrialization:analog_circuit",
        "M": "modern_industrialization:motor"
    });

    event.recipes.modern_industrialization.assembler(8, 200)
        .itemInputs(["modern_industrialization:terracotta_drill_head", "2x #c:gears/bronze", "2x #modern_industrialization:item_pipes", "2x modern_industrialization:motor", "modern_industrialization:tin_cable", "modern_industrialization:analog_circuit"])
        .itemOut("6x modern_industrialization:terracotta_drill");

    event.recipes.modern_industrialization.quarry(8, 600)
        .itemIn("modern_industrialization:terracotta_drill", 0.04)
        .itemOut("kubejs:terracotta_4x", 1)
        .itemOut("kubejs:terracotta_5x", 0.5)
        .itemOut("kubejs:terracotta_6x", 0.25)
        .itemOut("kubejs:terracotta_7x", 0.125)
        .itemOut("minecraft:ochre_froglight", 0.25)
        .itemOut("minecraft:granite", 0.25)
        .itemOut("minecraft:red_nether_bricks", 0.25)
        .itemOut("mowziesmobs:bluff_rod", 0.15)

    event.shaped("4x modern_industrialization:curium_drill", [
        "GID",
        "MAI",
        "FMG"
    ], {
        "D": "modern_industrialization:curium_drill_head",
        "G": "#c:gears/bronze",
        "I": "#modern_industrialization:item_pipes",
        "F": "modern_industrialization:tin_cable",
        "A": "modern_industrialization:analog_circuit",
        "M": "modern_industrialization:motor"
    });

    event.recipes.modern_industrialization.assembler(8, 200)
        .itemInputs(["modern_industrialization:curium_drill_head", "2x #c:gears/bronze", "2x #modern_industrialization:item_pipes", "2x modern_industrialization:motor", "modern_industrialization:tin_cable", "modern_industrialization:analog_circuit"])
        .itemOut("4x modern_industrialization:curium_drill");

    event.recipes.modern_industrialization.quarry(8, 600)
        .itemIn("modern_industrialization:curium_drill", 0.04)
        .itemOut("kubejs:clay_glass", 0.4)
        .itemOut("kubejs:otherworldy_crystal", 0.2)
        .itemOut("rftoolsbase:dimensionalshard", 0.025)
        .itemOut("modern_industrialization:curium_ore", 0.25)
        .itemOut("minecraft:smooth_basalt", 0.4)
        .itemOut("minecraft:blackstone", 0.4)
        .itemOut("minecraft:deepslate", 0.25)
        .itemOut("minecraft:pearlescent_froglight", 0.0125)
        .itemOut("minecraft:end_crystal", 0.0125);
});