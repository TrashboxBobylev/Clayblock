LootJS.lootTables(event => {
    event.create("kubejs:blocks/otherworldy_crystal", LootType.BLOCK)
        .createPool(pool => {
            let full_entry = LootEntry.alternative(LootEntry.of("kubejs:otherworldy_crystal").matchTool(
                ItemFilter.hasEnchantment("minecraft:silk_touch", 1)
            ));
            let ores = [];
            for (let ore of ["antimony", "bauxite", "lead", "lignite_coal", "nickel", "salt", "tin", "silver"]){
                ores.push(LootEntry.of(`modern_industrialization:${ore}_dust`).applyOreBonus("minecraft:fortune"));
            }
            full_entry.addEntry(LootEntry.group(ores));
            pool.addEntry(full_entry);
        });
});

ServerEvents.tags("block", event => {
    event.add("minecraft:mineable/pickaxe", "kubejs:otherworldy_crystal", "kubejs:otherglassy_crystal");
    event.add("minecraft:needs_diamond_tool", "kubejs:otherworldy_crystal", "kubejs:otherglassy_crystal");
});

ServerEvents.recipes(event => {
    event.recipes.modern_industrialization.mixer(8, 200)
        .itemIn("kubejs:otherworldy_crystal")
        .itemIn("4x kubejs:clay_glass")
        .fluidIn("100x extended_industrialization:blazing_essence")
        .itemOut("kubejs:otherglassy_crystal");

    event.recipes.modern_industrialization.mixer(8, 75)
        .itemIn("kubejs:otherworldy_crystal")
        .itemIn("2x kubejs:clay_glass")
        .fluidIn("50x modern_industrialization:diethyl_ether")
        .itemOut("kubejs:otherglassy_crystal");
});