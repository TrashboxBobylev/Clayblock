/** @type {typeof import("net.minecraft.world.level.block.TintedGlassBlock").$TintedGlassBlock } */
let $TintedGlassBlock  = Java.loadClass("net.minecraft.world.level.block.TintedGlassBlock")
/** @type {typeof import("net.minecraft.world.item.Item$Properties").$Item$Properties } */
let $Item$Properties  = Java.loadClass("net.minecraft.world.item.Item$Properties")
/** @type {typeof import("net.minecraft.world.item.BlockItem").$BlockItem } */
let $BlockItem  = Java.loadClass("net.minecraft.world.item.BlockItem")
/** @type {typeof import("net.minecraft.world.level.material.PushReaction").$PushReaction } */
let $PushReaction  = Java.loadClass("net.minecraft.world.level.material.PushReaction")
/** @type {typeof import("net.minecraft.world.level.material.MapColor").$MapColor } */
let $MapColor  = Java.loadClass("net.minecraft.world.level.material.MapColor")
/** @type {typeof import("net.minecraft.world.level.block.state.BlockBehaviour$Properties").$BlockBehaviour$Properties } */
let $BlockBehaviour$Properties  = Java.loadClass("net.minecraft.world.level.block.state.BlockBehaviour$Properties")
/** @type {typeof import("net.minecraft.world.level.block.grower.TreeGrower").$TreeGrower } */
let $TreeGrower  = Java.loadClass("net.minecraft.world.level.block.grower.TreeGrower")
/** @type {typeof import("net.minecraft.world.level.block.SaplingBlock").$SaplingBlock } */
let $SaplingBlock  = Java.loadClass("net.minecraft.world.level.block.SaplingBlock")
/** @type {typeof import("net.minecraft.world.level.block.Block").$Block } */
let $Block  = Java.loadClass("net.minecraft.world.level.block.Block")
global.clays = [];
global.clays.push("minecraft:clay");
global.terracottas = [];
global.terracottas.push("minecraft:terracotta");

StartupEvents.registry("block", event => {
    for (let i = 1; i <= 20; i++){
        let clay_id = `kubejs:clay_${i}x`;
        global.clays.push(clay_id);
        event.create(clay_id).copyPropertiesFrom("minecraft:clay").hardness(0.6 + i*1).tagBlock("minecraft:mineable/shovel").requiresTool();

        let terracotta_id = `kubejs:terracotta_${i}x`;
        global.terracottas.push(terracotta_id);
        event.create(terracotta_id).copyPropertiesFrom("minecraft:terracotta").hardness(1.25 + i*2.25).tagBlock("minecraft:mineable/pickaxe").tagBoth("minecraft:terracotta").requiresTool();
    }

    event.create("clay_leaves").soundType("gravel").suffocating(false).randomTick(tickEvent => {
        let blocks_around = tickEvent.level.getBlockStates(AABB.of(tickEvent.block.getX() - 6, tickEvent.block.getY() - 6, tickEvent.block.getZ() - 6, tickEvent.block.getX() + 6, tickEvent.block.getY() + 6, tickEvent.block.getZ() + 6));
        let thingsFound = blocks_around.filter(blockstate => {
            return blockstate == "kubejs:clay_2x" || blockstate == "kubejs:clay_4x";
        }).findAny();
        if (thingsFound.isEmpty()){
            $Block.dropResources(tickEvent.block.getBlockState(), tickEvent.getLevel(),tickEvent.block.getPos());
            tickEvent.level.removeBlock(tickEvent.block.getPos(), false);
        }
    }).hardness(0.3).viewBlocking(false).transparent(true).tagBlock("minecraft:mineable/shovel").tagBoth("minecraft:leaves").renderType("cutout_mipped").notSolid();

    event.createCustom("clay_glass", () => {
        return new $TintedGlassBlock($BlockBehaviour$Properties.ofFullCopy(Block.getBlock("minecraft:tinted_glass").getBlock()));
    });

    event.createCustom("clay_sapling", () => {
        return new $SaplingBlock(new $TreeGrower("clay", "modpack:clay_tree", "modpack:clay_tree", "modpack:clay_tree"), $BlockBehaviour$Properties.of()["mapColor(net.minecraft.world.level.material.MapColor)"]($MapColor.PLANT).noCollission().randomTicks().instabreak().sound("grass").pushReaction($PushReaction.DESTROY));
    });

    event.create("clay_planks").copyPropertiesFrom("minecraft:oak_planks").tagBoth("minecraft:planks").tagBlock("minecraft:mineable/axe");

    event.create("clay_slab", "kubejs:slab").copyPropertiesFrom("minecraft:oak_slab").tagBoth(["minecraft:wooden_slabs", "minecraft:slab"]).tagBlock("minecraft:mineable/axe").texture("kubejs:block/clay_planks");

    event.create("clay_stairs", "kubejs:stairs").copyPropertiesFrom("minecraft:oak_stairs").tagBoth(["minecraft:wooden_stairs", "minecraft:stairs"]).tagBlock("minecraft:mineable/axe").texture("kubejs:block/clay_planks");
});

StartupEvents.registry("item", event => {
    event.createCustom("clay_sapling", () => {
        return new $BlockItem("kubejs:clay_sapling", new $Item$Properties());
    });

    event.createCustom("clay_glass", () => {
        return new $BlockItem("kubejs:clay_glass", new $Item$Properties());
    });

    event.create("clay_snack").food(food => {
        food.saturation(0.6).nutrition(3).fastToEat().usingConvertsTo("minecraft:clay")
    });

    event.create("clayium_rotary_blade");
});