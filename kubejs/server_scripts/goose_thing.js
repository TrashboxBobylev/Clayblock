/** @type {typeof import("net.neoforged.neoforge.event.entity.living.LivingBreatheEvent").$LivingBreatheEvent } */
let $LivingBreatheEvent  = Java.loadClass("net.neoforged.neoforge.event.entity.living.LivingBreatheEvent")


NativeEvents.onEvent($LivingBreatheEvent, event => {
    if (event.entity.type == "untitledduckmod:goose"){
        let goose = event.entity;
        let level = event.entity.level;
        if (level.isDay() && !level.clientSide){
            let blockPos = BlockPos.containing(goose.getX(), goose.getEyeY(), goose.getZ());
            if (level.canSeeSky(blockPos) && goose.getLightLevelDependentMagicValue() > 0.5){
                goose.igniteForSeconds(5);
            }
        }

        let distance = 0;
        for (let player of level.players){
            if (player.distanceToEntity(goose) > 32){
                if (distance == 0 || player.distanceToEntity(goose) < distance){
                    distance = player.distanceToEntity(goose);
                }
            }
        }

        if (distance != 0){
            if (level.random.nextInt(400) == 0){
                goose.remove("discarded");
            }
        }
    }
});