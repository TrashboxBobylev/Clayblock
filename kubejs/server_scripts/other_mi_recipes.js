ServerEvents.recipes(event => {
    event.recipes.modern_industrialization.mixer(4, 200)
        .itemIn("2x kubejs:clay_farmland")
        .fluidIn("4000x minecraft:water")
        .itemOut("minecraft:dirt");

    event.shaped("2x modern_industrialization:mi_kiln", [
        "TFT",
        "KGK",
        "TFT"
    ], {
        "T": "modern_industrialization:steel_large_plate",
        "F": "modern_industrialization:electric_furnace",
        "G": "#c:gears/clayium",
        "K": "clayworks:kiln"
    });

    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn("2x modern_industrialization:electric_furnace")
        .itemIn("2x clayworks:kiln")
        .itemIn("4x modern_industrialization:steel_large_plate")
        .itemIn("#c:gears/clayium")
        .itemOut("2x modern_industrialization:mi_kiln");

    event.shaped("2x modern_industrialization:mi_blast", [
        "TFT",
        "KGK",
        "TFT"
    ], {
        "T": "modern_industrialization:steel_large_plate",
        "F": "modern_industrialization:electric_furnace",
        "G": "#c:gears/terracotta",
        "K": "minecraft:blast_furnace"
    });

    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn("2x modern_industrialization:electric_furnace")
        .itemIn("2x minecraft:blast_furnace")
        .itemIn("4x modern_industrialization:steel_large_plate")
        .itemIn("#c:gears/terracotta")
        .itemOut("2x modern_industrialization:mi_blast");
});