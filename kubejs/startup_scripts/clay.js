/** @type {typeof import("net.minecraft.world.level.block.Block").$Block } */
let $Block  = Java.loadClass("net.minecraft.world.level.block.Block")
global.clays = [];
global.clays.push("minecraft:clay");

StartupEvents.registry("block", event => {
    for (let i = 1; i <= 20; i++){
        let clay_id = `kubejs:clay_${i}x`;
        global.clays.push(clay_id);
        event.create(clay_id).copyPropertiesFrom("minecraft:clay").hardness(0.6 + i*1).tagBlock("minecraft:mineable/shovel").requiresTool();
    }

    event.create("clay_leaves").soundType("gravel").suffocating(false).randomTick(tickEvent => {
        let blocks_around = tickEvent.level.getBlockStates(AABB.of(tickEvent.block.getX() - 6, tickEvent.block.getY() - 6, tickEvent.block.getZ() - 6, tickEvent.block.getX() + 6, tickEvent.block.getY() + 6, tickEvent.block.getZ() + 6));
        let thingsFound = blocks_around.filter(blockstate => {
            return blockstate == "kubejs:clay_2x";
        }).findAny();
        if (thingsFound.isEmpty()){
            $Block.dropResources(tickEvent.block.getBlockState(), tickEvent.getLevel(),tickEvent.block.getPos());
            tickEvent.level.removeBlock(tickEvent.block.getPos(), false);
        }
    }).hardness(0.3).viewBlocking(false).transparent(true).tagBlock("minecraft:mineable/shovel");
});