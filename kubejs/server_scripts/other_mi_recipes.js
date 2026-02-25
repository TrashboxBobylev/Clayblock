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

    event.remove("modern_industrialization:materials/pressurizer/up/water");
    event.recipes.modern_industrialization.pressurizer(64, 800)
        .fluidIn("1000x minecraft:water")
        .fluidOut("125x modern_industrialization:high_pressure_water");
    event.remove("modern_industrialization:materials/pressurizer/up/heavy_water");
    event.recipes.modern_industrialization.pressurizer(64, 800)
        .fluidIn("1000x modern_industrialization:heavy_water")
        .fluidOut("125x modern_industrialization:high_pressure_heavy_water");

    event.remove("modern_industrialization:oil/mixer/sugar_solution");
    event.recipes.modern_industrialization.mixer(2, 200)
        .fluidIn("1000x minecraft:water")
        .itemIn("3x minecraft:sugar")
        .fluidOut("1000x modern_industrialization:sugar_solution");

    event.remove("modern_industrialization:oil/chemical_reactor/plant_oil_to_raw_biodiesel");
    event.recipes.modern_industrialization.chemical_reactor(12, 300)
        .fluidIn("6000x modern_industrialization:plant_oil")
        .fluidIn("400x modern_industrialization:ethanol")
        .fluidIn("100x modern_industrialization:sodium_hydroxide")
        .fluidOut("2000x modern_industrialization:raw_biodiesel");

    event.remove("modern_industrialization:oil/chemical_reactor/ethanol_to_diethyl_ether");
    event.recipes.modern_industrialization.chemical_reactor(20, 300)
        .fluidIn("500x modern_industrialization:ethanol")
        .fluidIn("25x modern_industrialization:acrylic_acid")
        .fluidOut("400x modern_industrialization:diethyl_ether");
});