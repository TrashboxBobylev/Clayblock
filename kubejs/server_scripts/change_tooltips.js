//priority: -100

let tooltip_changes = {
    "#untitledduckmod:duck_taming_food": [{translate: "modpack.tame_scrimblows"}],
    "#untitledduckmod:duck_breeding_food": [{translate: "modpack.breed_scrimblows"}],
    "minecraft:crying_obsidian": [{translate: "modpack.dripping_crying_1"}, {translate: "modpack.dripping_crying_2"}],
    "minecraft:tnt": [{translate: "modpack.tnt_tip"}],
    "modern_industrialization:forge_hammer": [{translate: "modpack.mi_how_to_unlock"}],
    "rehooked:blaze_hook": [{translate: "modpack.hook_changes_1"}],
    "rehooked:ender_hook": [{translate: "modpack.hook_changes_1"}, {translate: "modpack.hook_changes_2"}],
    "fastpipes:improved_item_pipe": [{translate: "modpack.item_pipe_improved"}],
    "fastpipes:advanced_item_pipe": [{translate: "modpack.item_pipe_advanced"}],
    "#fastpipes:fluid_pipes": [{translate: "modpack.fluid_pipe"}],
    "#fastpipes:energy_pipes": [{translate: "modpack.fluid_pipe"}],
};

ItemEvents.modifyTooltips(event => {
    for (let item in tooltip_changes){
        let formatted_tooltips = [];
        tooltip_changes[item].forEach(element => {
            let actual_element = Component.of(element);
            formatted_tooltips.push(Component.join(Component.literal("Clayblock: ").color("#aebbdf"), actual_element));
        });
        event.add(item, formatted_tooltips);
    }
});