LootJS.lootTables(event => {
    event.create("kubejs:blocks/otherworldy_crystal", LootType.BLOCK)
        .createPool(pool => {
            let full_entry = LootEntry.alternative(LootEntry.of("kubejs:otherworldy_crystal").matchTool(
                ItemFilter.hasEnchantment("minecraft:silk_touch", 1)
            ));
            let ores = [];
            for (let ore of ["antimony", "bauxite", "lead", "lignite_coal", "monazite", "nickel", "salt", "tin", "tungsten", "uranium"]){
                ores.push(LootEntry.of(`modern_industrialization:${ore}_dust`));
            }
            full_entry.addEntry(LootEntry.group(ores));
            pool.addEntry(full_entry);
        });
});

ServerEvents.tags("block", event => {
    event.add("minecraft:mineable/pickaxe", "kubejs:otherworldy_crystal");
    event.add("minecraft:needs_diamond_tool", "kubejs:otherworldy_crystal");
});