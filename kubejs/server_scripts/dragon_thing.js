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