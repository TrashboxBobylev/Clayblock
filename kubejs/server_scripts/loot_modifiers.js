LootJS.lootTables(event => {
    event.create("modpack:end_city_plain_ingots").createPool(pool => {
        for (let ore of ["antimony", "lead", "nickel", "tin", "silver", "curium", "basalt"]){
            pool.addEntry(LootEntry.of(`modern_industrialization:${ore}_ingot`).setCount([6, 12]));
        }
    });
    event.create("modpack:end_city_good_ingots").createPool(pool => {
        for (let ore of ["battery_alloy", "bronze", "cupronickel", "invar", "tungsten", "electrum"]){
            pool.addEntry(LootEntry.of(`modern_industrialization:${ore}_ingot`).setCount([3, 6]));
        }
    });
    event.create("modpack:end_city_other_stuff").createPool(pool => {
        for (let item of ["coal_dust", "lapis_dust", "soldering_alloy_dust", "salt_dust", "sulfur_dust", "quartz_dust", "monazite_dust", "brick_dust"]){
            pool.addEntry(LootEntry.of(`modern_industrialization:${item}`).setCount([16, 32]));
        }
    });
    event.getLootTable("minecraft:chests/end_city_treasure").firstPool(pool => {
        pool.rolls([4, 9]);
        pool.modifyItemEntry(entry => {
            let new_entry = null;
            let items = [];
            if (entry.item.id == "minecraft:gold_ingot"){
                new_entry = LootEntry.reference("modpack:end_city_plain_ingots");
            }
            if (entry.item.id == "minecraft:iron_ingot"){
                new_entry = LootEntry.reference("modpack:end_city_good_ingots");
            }
            if (entry.item.id == "minecraft:diamond"){
                new_entry = LootEntry.reference("modpack:end_city_other_stuff");
            }
            if (new_entry != null){
                new_entry.weight = entry.weight * 2;
                console.log(new_entry);
                return new_entry;
            }

            return entry;
        });
        pool.replaceItem(ItemFilter.item("minecraft:emerald", true), "kubejs:clay_8x");
        pool.replaceItem(ItemFilter.item("minecraft:iron_helmet", false), "onlyhammersandexcavators:emerald_excavator");
        pool.replaceItem(ItemFilter.item("minecraft:iron_chestplate", false), "onlyhammersandexcavators:emerald_hammer");
        pool.replaceItem(ItemFilter.item("minecraft:iron_leggings", false), "onlyhammersandexcavators:diamond_excavator");
        pool.replaceItem(ItemFilter.item("minecraft:iron_boots", false), "onlyhammersandexcavators:diamond_hammer");
        pool.removeItem("minecraft:iron_horse_armor");
        pool.removeItem("minecraft:golden_horse_armor");
        pool.removeItem("minecraft:diamond_horse_armor");
        pool.removeItem("minecraft:saddle");
        pool.removeItem("minecraft:beetroot_seeds");
    });
});

LootJS.lootTables(event => {
    for (let entity of ["minecraft:pillager", "minecraft:vindicator"]){
        event.getEntityTable(entity).createPool(pool => {
            pool.rolls([2, 3]);
            pool.addEntry(LootEntry.reference("modpack:end_city_plain_ingots").randomChanceWithEnchantment("minecraft:looting", [1/30, 0, 1/26, 1/20, 1/14]));
        }).createPool(pool => {
            pool.rolls([2, 3]);
            pool.addEntry(LootEntry.reference("modpack:end_city_good_ingots").randomChanceWithEnchantment("minecraft:looting", [1/40, 0, 1/34, 1/26, 1/18]));
        }).removeItem("minecraft:emerald");
    }
    event.getEntityTable("minecraft:evoker").firstPool(pool => {
        pool.removeItem("minecraft:totem_of_undying");
        pool.addEntry(LootEntry.of("minecraft:totem_of_undying").randomChanceWithEnchantment("minecraft:looting", [1/12, 0, 1/10, 1/8, 1/6]));
    }).createPool(pool => {
        pool.rolls([2, 4]);
        pool.addEntry(LootEntry.reference("modpack:end_city_plain_ingots").randomChanceWithEnchantment("minecraft:looting", [1/24, 0, 1/20, 1/15, 1/10]));
    }).createPool(pool => {
        pool.rolls([2, 4]);
        pool.addEntry(LootEntry.reference("modpack:end_city_good_ingots").randomChanceWithEnchantment("minecraft:looting", [1/30, 0, 1/24, 1/18, 1/13]));
    }).createPool(pool => {
        pool.rolls([2, 4]);
        pool.addEntry(LootEntry.reference("modpack:end_city_other_stuff").randomChanceWithEnchantment("minecraft:looting", [1/45, 0, 1/36, 1/27, 1/20]));
    }).removeItem("minecraft:emerald");
});