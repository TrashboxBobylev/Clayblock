/** @type {typeof import("net.minecraft.stats.Stats").$Stats } */
let $Stats  = Java.loadClass("net.minecraft.stats.Stats")
/** @type {typeof import("net.minecraft.world.entity.player.Player").$Player } */
let $Player  = Java.loadClass("net.minecraft.world.entity.player.Player")
StartupEvents.registry("item", event => {
    event.create("pablo_radio").maxStackSize(1).useAnimation("block").use((player, level, hand) => true).useDuration((item, entity) => 1).finishUsing((item, level, entity) => {
        if (level.random.nextInt(0, 45) > 0){
            if (level.isClientSide()){
                entity.playSound("minecraft:block.sculk_sensor.clicking");
                if (entity.player){
                    /** @type {import("net.minecraft.world.entity.player.Player").$Player } */
                    let player = Java.cast($Player, entity);
                    let tip = entity.random.nextIntBetweenInclusive(1, 70);
                    player.tell({translate: "modpack.pablo_phone", with: [{translate: "modpack.pablo_chat", color: "#27FF1F"}, {translate: `modpack.tip_${tip}`}]});
                }
            }
        } else {
            if (level.isClientSide())
                entity.playSound("minecraft:entity.item.break");
            item.consume(1, entity);
        }
        if (entity.player){
            /** @type {import("net.minecraft.world.entity.player.Player").$Player } */
            let player = Java.cast($Player, entity);
            player["awardStat(net.minecraft.stats.Stat)"]($Stats.ITEM_USED.get(item.item));
        }
        return item;
    })
});