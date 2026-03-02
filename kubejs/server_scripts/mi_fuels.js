
let fuel_data = {
    "biodiesel": 250,
    "boosted_diesel": 800,
    "creosote": 160,
    "diesel": 400,
    "heavy_fuel": 240,
    "light_fuel": 160,
    "naphtha": 80
};
const MULTIPLIER = 10;

ServerEvents.tags("item", event => {
    event.add("modpack:fuel_improvement_parts", "modern_industrialization:terracotta_tiny_dust", "modern_industrialization:terracotta_nugget")
});

ServerEvents.recipes(event => {
    for (let fuel of ["biodiesel", "boosted_diesel", "creosote", "diesel", "heavy_fuel", "light_fuel", "naphtha"]){
        event.recipes.modern_industrialization.chemical_reactor(8, 200)
            .fluidIn(`2000x modern_industrialization:${fuel}`)
            .itemIn("#modpack:fuel_improvement_parts")
            .fluidOut(`2000x modern_industrialization:infused_${fuel}`);
    }
});

ServerEvents.generateData("after_mods", event => {
    for (let fuel in fuel_data){
        fuel_data[`infused_${fuel}`] = fuel_data[fuel] * MULTIPLIER;
    }
    let json = {
        values: {}
    };
    for (let fuel in fuel_data){
        json.values[`modern_industrialization:${fuel}`] = {eu_per_mb: fuel_data[fuel]};
    }
    event.json("modern_industrialization:data_maps/fluid/fluid_fuels.json", json);
});