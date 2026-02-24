ServerEvents.recipes(event => {
    for (let drill of ["copper", "steel", "clayium", "terracotta", "curium", "aluminum", "stainless_steel", "titanium"]){
        let original_recipe = {
            input_energy: 0,
            input_probability: 0,
            input_time: 0,
            fluidOutputs: {},
            itemOutputs: []
        };
        event.forEachRecipe({input: `modern_industrialization:${drill}_drill`}, recipe => {
            let json = JSON.parse(recipe.json.toString());
            original_recipe.input_energy = json.eu;
            original_recipe.input_probability = json.item_inputs.probability;
            original_recipe.input_time = json.duration;
            if (json.type == "modern_industrialization:quarry"){
                original_recipe.itemOutputs = json.item_outputs;
            } else {
                original_recipe.fluidOutputs = json.fluid_outputs;
            }
        });

        event.recipes.modern_industrialization.chemical_reactor(16, 300)
            .itemInputs([`4x modern_industrialization:${drill}_drill`, "minecraft:pearlescent_froglight"])
            .itemOut(`4x modern_industrialization:${drill}_drill_energized`);

        if (original_recipe.itemOutputs.length > 0){
            event.custom({
                type: "modern_industrialization:quarry",
                eu: original_recipe.input_energy * 3,
                duration: original_recipe.input_time / 4,
                item_inputs: {
                    item: `modern_industrialization:${drill}_drill_energized`,
                    amount: 1,
                    probability: original_recipe.input_probability / 4
                },
                item_outputs: original_recipe.itemOutputs
            });
        } else {
            event.custom({
                type: "modern_industrialization:oil_drilling_rig",
                eu: original_recipe.input_energy * 3,
                duration: original_recipe.input_time / 4,
                item_inputs: {
                    item: `modern_industrialization:${drill}_drill_energized`,
                    amount: 1,
                    probability: original_recipe.input_probability / 4
                },
                fluid_outputs: original_recipe.fluidOutputs
            });
        }
    }
});
