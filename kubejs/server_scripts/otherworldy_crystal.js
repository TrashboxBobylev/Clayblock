LootJS.lootTables(event => {
    event.create("kubejs:blocks/otherworldy_crystal", LootType.BLOCK)
        .createPool(pool => {
            pool.rolls([1, 2]);
            for (let ore of ["antimony", "bauxite", "lead", "lignite_coal", "monazite", "nickel", "salt", "tin", "tungsten", "uranium"]){
                pool.addEntry(LootEntry.of(`modern_industrialization:${ore}_dust`));
            }
        });
});