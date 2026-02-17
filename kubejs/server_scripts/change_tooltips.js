//priority: -100

let tooltip_changes = {
    "#untitledduckmod:duck_taming_food": [{translate: "modpack.tame_scrimblows"}],
    "#untitledduckmod:duck_breeding_food": [{translate: "modpack.breed_scrimblows"}],
    "minecraft:crying_obsidian": [{translate: "modpack.dripping_crying_1"}, {translate: "modpack.dripping_crying_2"}],
    "minecraft:tnt": [{translate: "modpack.tnt_tip"}]
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