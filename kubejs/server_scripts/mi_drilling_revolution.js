ServerEvents.recipes(event => {
    event.shaped("4x modern_industrialization:clayium_drill", [
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
        .itemOut("4x modern_industrialization:clayium_drill");

    event.shaped("4x modern_industrialization:terracotta_drill", [
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
        .itemOut("4x modern_industrialization:terracotta_drill");

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
});

ServerEvents.recipes(event => {
    event.remove("modern_industrialization:quarry/copper");
    event.remove("modern_industrialization:quarry/gold");
    event.remove("modern_industrialization:quarry/bronze");
});