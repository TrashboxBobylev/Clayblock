/**
 * @type {import("aztech.modern_industrialization.machines.recipe.MachineRecipeType").$MachineRecipeType$$Original}
 */
let MI_KILN;
/**
 * @type {import("aztech.modern_industrialization.machines.recipe.MachineRecipeType").$MachineRecipeType$$Original}
 */
let MI_BLAST_FURNACE;

MIMachineEvents.registerRecipeTypes(event => {
    MI_KILN = event.register("mi_kiln").withItemInputs().withItemOutputs();
    MI_BLAST_FURNACE = event.register("mi_blast").withItemInputs().withItemOutputs();
});

MIMachineEvents.registerMachines(event => {
    let machine_props = {
        "mi_kiln": {
            name: "Cleansing Blazer",
            recipe: MI_KILN
        },
        "mi_blast": {
            name: "Pristine Infuriator",
            recipe: MI_BLAST_FURNACE
        }
    };
    for (let machine in machine_props){
        let props = machine_props[machine];
        event.craftingSingleBlock(props.name, machine, props.recipe, ["electric"],
            -1, event.progressBar(77, 33, "arrow"), event.efficiencyBar(38, 62), event.energyBar(18, 30),
            1, 1, 0, 0, 16,
            items => items.addSlot(56, 35).addSlot(102, 35), fluids => {},
            true, true, true
        );
    }
});