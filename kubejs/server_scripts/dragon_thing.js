/** @type {typeof import("net.minecraft.server.level.ServerLevel").$ServerLevel } */
let $ServerLevel  = Java.loadClass("net.minecraft.server.level.ServerLevel")
EntityEvents.spawned(event => {
    if (event.entity.type == "minecraft:ender_dragon" && !event.server.persistentData.contains("first_dragon")){
        event.server.persistentData.putBoolean("first_dragon", true);
        event.server.tell(Component.translate("modpack.dragon_message").color("#aebbdf"));
        event.server.scheduleInTicks(2, callback => {
            event.entity.kill();
            event.level.setBlock(new BlockPos(0, 66, 0), "minecraft:air", 2);
        });
    }
});

EntityEvents.death("minecraft:player", event => {
    if (event.level.dimension == "minecraft:the_end"){
        /**
         * @type {import("net.minecraft.server.level.ServerLevel").$ServerLevel$$Original}
         */
        let server_level = Java.cast($ServerLevel, event.level);
        let dragon_info = server_level.getDragonFight();

        if (dragon_info != null){
            let are_players_alive = false;
            for (let player of event.level.getPlayers()){
                if (player.alive && player.distanceToSqr(new BlockPos(0, 128, 0)) <= 192*192){
                    are_players_alive = true;
                }
            }
            if (!are_players_alive){
                event.server.scheduleInTicks(2, callback => {
                    event.server.runCommandSilent("kill @e[type=minecraft:ender_dragon]");
                    event.server.scheduleInTicks(1, callback => {
                        event.level.setBlock(new BlockPos(0, 66, 0), "minecraft:air", 2);
                    });
                });
            }
        }
    }
});

LootJS.lootTables(event => {
    event.create("modpack:ender_dragon_loot", LootType.CHEST).createPool(pool => {
        pool.rolls([4, 8]);
        pool.addEntry(LootEntry.of("modern_industrialization:curium_block", [4, 6]));
        pool.addEntry(LootEntry.of("modern_industrialization:basalt_block", [4, 6]));
        pool.addEntry(LootEntry.of("modern_industrialization:clayium_ingot", [4, 6]));
        pool.addEntry(LootEntry.of("rftoolsbase:dimensionalshard", [5, 8]));
    }).createPool(pool => {
        pool.rolls([4, 8]);
        pool.addEntry(LootEntry.of("kubejs:clay_glass", [30, 50]));
        pool.addEntry(LootEntry.of("kubejs:otherworldy_crystal", [30, 50]));
        pool.addEntry(LootEntry.of("minecraft:tnt", [8, 16]));
    }).createPool(pool => {
        pool.rolls([2, 4]);
        pool.addEntry(LootEntry.of("modern_industrialization:item_pipe", [40, 60]));
        pool.addEntry(LootEntry.of("modern_industrialization:fluid_pipe", [40, 60]));
    }).createPool(pool => {
        pool.addEntry(LootEntry.of("rehooked:ender_hook"));
    });
});

ServerEvents.recipes(event => {
    event.remove("rehooked:ender_hook");

    let treasure_bag = Item.of("minecraft:black_shulker_box");
    treasure_bag.setItemName(Component.translatable("modpack.dragon_treasure.name"));
    treasure_bag.setContainerLootTable("modpack:ender_dragon_loot");
    treasure_bag.setLore([Component.translatable("modpack.dragon_treasure.desc").italic(false)]);

    event.shapeless(treasure_bag, ["minecraft:dragon_egg"]);
});