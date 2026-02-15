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