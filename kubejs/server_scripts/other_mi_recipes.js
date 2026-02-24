ServerEvents.recipes(event => {
    event.recipes.modern_industrialization.mixer(4, 200)
        .itemIn("2x kubejs:clay_farmland")
        .fluidIn("4000x minecraft:water")
        .itemOut("minecraft:dirt");
});