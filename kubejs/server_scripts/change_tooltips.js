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
    "minecraft:anvil": [{translate: "modpack.anvil"}],
    "kubejs:clay_stalk": [{translate: "modpack.claysta"}],
    "minecraft:dragon_egg": [{translate: "modpack.dragon_egg_1"}, {translate: "modpack.dragon_egg_2"}],
    "onlyhammersandexcavators:emerald_hammer": [{translate: "modpack.emerald_tool"}],
    "onlyhammersandexcavators:emerald_excavator": [{translate: "modpack.emerald_tool"}],
    "onlyhammersandexcavators:obsidian_hammer": [{translate: "modpack.obsidian_tool"}],
    "onlyhammersandexcavators:obsidian_excavator": [{translate: "modpack.obsidian_tool"}],
    "storagedrawers:controller": [{translate: "modpack.storage_controller"}],
    "storagedrawers:copper_storage_upgrade": [{translate: "modpack.copper_upgrade"}],
    "storagedrawers:iron_storage_upgrade": [{translate: "modpack.copper_upgrade"}],
    "storagedrawers:emerald_storage_upgrade": [{translate: "modpack.emerald_upgrade"}],
    "storagedrawers:diamond_storage_upgrade": [{translate: "modpack.diamond_upgrade"}],
    "storagedrawers:netherite_storage_upgrade": [{translate: "modpack.netherite_upgrade"}],
    "storagedrawers:obsidian_storage_upgrade": [{translate: "modpack.obsidian_upgrade"}],
    "rftoolsbuilder:builder": [{translate: "modpack.rftoolsbuilder_1"}, {translate: "modpack.rftoolsbuilder_2"}],
    "rftoolsbuilder:shape_card_quarry_clear_fortune": [{translate: "modpack.quarryfortune"}],
    "rftoolsbuilder:shape_card_quarry_clear_silk": [{translate: "modpack.quarrysilk"}],
    "modern_industrialization:high_pressure_water_bucket": [{translate: "modpack.hpwater"}],
    "modern_industrialization:high_pressure_heavy_water_bucket": [{translate: "modpack.hpwater"}],
    "minecraft:redstone_torch": [{translate: "modpack.redstone_automation"}],
    "modern_industrialization:sugar_solution_bucket": [{translate: "modpack.sugar_solution"}],
    "modern_industrialization:raw_biodiesel_bucket": [{translate: "modpack.raw_biodiesel"}],
    "modern_industrialization:diethyl_ether_bucket": [{translate: "modpack.diethyl_ether"}]
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