/** @type {typeof import("net.minecraft.world.level.block.AnvilBlock").$AnvilBlock } */
let $AnvilBlock  = Java.loadClass("net.minecraft.world.level.block.AnvilBlock")
/** @type {typeof import("net.minecraft.world.level.block.piston.MovingPistonBlock").$MovingPistonBlock } */
let $MovingPistonBlock  = Java.loadClass("net.minecraft.world.level.block.piston.MovingPistonBlock")
/** @type {typeof import("net.minecraft.world.level.block.FenceGateBlock").$FenceGateBlock } */
let $FenceGateBlock  = Java.loadClass("net.minecraft.world.level.block.FenceGateBlock")
/** @type {typeof import("net.minecraft.core.BlockPos").$BlockPos } */
let $BlockPos  = Java.loadClass("net.minecraft.core.BlockPos")
/** @type {typeof import("java.lang.Integer").$Integer } */
let $Integer  = Java.loadClass("java.lang.Integer")
/** @type {typeof import("net.minecraft.world.level.block.state.properties.BlockStateProperties").$BlockStateProperties } */
let $BlockStateProperties  = Java.loadClass("net.minecraft.world.level.block.state.properties.BlockStateProperties")
/** @type {typeof import("net.minecraft.world.level.gameevent.GameEvent$Context").$GameEvent$Context } */
let $GameEvent$Context  = Java.loadClass("net.minecraft.world.level.gameevent.GameEvent$Context")
/** @type {typeof import("net.minecraft.world.level.gameevent.GameEvent").$GameEvent } */
let $GameEvent  = Java.loadClass("net.minecraft.world.level.gameevent.GameEvent")
/** @type {typeof import("net.minecraft.world.level.block.FarmBlock").$FarmBlock } */
let $FarmBlock  = Java.loadClass("net.minecraft.world.level.block.FarmBlock")
/** @type {typeof import("net.neoforged.neoforge.common.CommonHooks").$CommonHooks } */
let $CommonHooks = Java.loadClass("net.neoforged.neoforge.common.CommonHooks")
StartupEvents.registry("block", event => {
    event.create("clay_stalk", "kubejs:wall").texture("minecraft:block/verdant_froglight_side").copyPropertiesFrom("minecraft:tuff_brick_wall").tagBlock("minecraft:mineable/axe").hardness(10).requiresTool();

    event.create("clay_fruit").copyPropertiesFrom("minecraft:moss_block").tagItem("c:crops").tagBlock("minecraft:mineable/axe").notSolid();

    event.createCustom("clay_farmland", () => {
        return new JavaAdapter($FarmBlock, {
            /**
             * 
             * @param {import("net.minecraft.world.entity.Entity").$Entity} entity 
             * @param {import("net.minecraft.world.level.block.state.BlockState").$BlockState} state 
             * @param {import("net.minecraft.server.level.ServerLevel").$ServerLevel} level 
             * @param {import("net.minecraft.core.BlockPos").$BlockPos} pos 
             */
            turningToClay: function(entity, state, level, pos){
                let blockstate = $Block.pushEntitiesUp(state, "kubejs:clay_3x", level, pos);
                level.setBlockAndUpdate(pos, blockstate);
                level["gameEvent(net.minecraft.core.Holder,net.minecraft.core.BlockPos,net.minecraft.world.level.gameevent.GameEvent$Context)"]($GameEvent.BLOCK_CHANGE, pos, $GameEvent$Context.of(entity, blockstate));
            },
            /**
             * 
             * @param {import("net.minecraft.world.level.block.state.BlockState").$BlockState} state 
             * @param {import("net.minecraft.server.level.ServerLevel").$ServerLevel} level 
             * @param {import("net.minecraft.core.BlockPos").$BlockPos} pos 
             */
            turnToClay: function(state, level, pos){
                let blockstate = $Block.pushEntitiesUp(state, "kubejs:clay_3x", level, pos);
                level.setBlockAndUpdate(pos, blockstate);
                level["gameEvent(net.minecraft.core.Holder,net.minecraft.core.BlockPos,net.minecraft.world.level.gameevent.GameEvent$Context)"]($GameEvent.BLOCK_CHANGE, pos, $GameEvent$Context.of(blockstate));
            },
            /**
             * 
             * @param {import("net.minecraft.world.level.block.state.BlockState").$BlockState} state 
             * @param {import("net.minecraft.server.level.ServerLevel").$ServerLevel} level 
             * @param {import("net.minecraft.core.BlockPos").$BlockPos} pos 
             * @param {import("net.minecraft.util.RandomSource").$RandomSource} random 
             */
            tick: function(state, level, pos, random){
                if (!state.canSurvive(level, pos)){
                    this.turnToClay(state, level, pos);
                }
            },

            /**
             * 
             * @param {import("net.minecraft.world.level.LevelReader").$LevelReader} level 
             * @param {import("net.minecraft.core.BlockPos").$BlockPos} pos
             * @returns {boolean}
             */
            isNearWater: function(level, pos) {
                let state = level.getBlockState(pos);
                let success = false;
                $BlockPos.betweenClosed(pos.offset(-4, 0, -4), pos.offset(4, 1, 4)).forEach(blockpos => {
                    if (success != true){
                        if (state.canBeHydrated(level, pos, level.getFluidState(blockpos), blockpos)) {
                            success = true;
                        }
                    }
                });

                return success;
            },

            /**
             * 
             * @param {import("net.minecraft.world.level.block.state.BlockState").$BlockState} state 
             * @param {import("net.minecraft.server.level.ServerLevel").$ServerLevel} level 
             * @param {import("net.minecraft.core.BlockPos").$BlockPos} pos 
             * @param {import("net.minecraft.util.RandomSource").$RandomSource} random 
             */
            randomTick: function(state, level, pos, random){
                let MOISTURE = $BlockStateProperties.MOISTURE;
                let i = state.getValue(MOISTURE);
                if (!this.isNearWater(level, pos) && !level.isRainingAt(pos.above())) {
                    if (i > 0) {
                        level.setBlock(pos, state.setValue(MOISTURE, $Integer.valueOf(i - 1)), 2);
                    } else if (!level.getBlockState(pos.above())["is(net.minecraft.tags.TagKey)"]("minecraft:maintains_farmland")) {
                        this.turnToClay(state, level, pos);
                    }
                } else if (i < 7) {
                    level.setBlock(pos, state.setValue(MOISTURE, $Integer.valueOf(7)), 2);
                }
            },

            /**
             * 
             * @param {import("net.minecraft.world.level.Level").$Level} level 
             * @param {import("net.minecraft.world.level.block.state.BlockState").$BlockState} state 
             * @param {import("net.minecraft.core.BlockPos").$BlockPos} pos 
             * @param {import("net.minecraft.world.entity.Entity").$Entity} entity 
             * @param {float} fallDistance 
             */
            fallOn: function(level, state, pos, entity, fallDistance){
                if (!level.isClientSide()
                    && $CommonHooks.onFarmlandTrample(level, pos, Blocks.DIRT.defaultBlockState(), fallDistance, entity)) {
                    this.turningToClay(entity, state, level, pos);
                }

                entity.causeFallDamage(fallDistance, 1.0, entity.damageSources().fall());
            },

            /**
             * 
             * @param {import("net.minecraft.world.level.block.state.BlockState").$BlockState} state 
             * @param {import("net.minecraft.world.level.LevelReader").$LevelReader} level 
             * @param {import("net.minecraft.core.BlockPos").$BlockPos} pos 
             */
            canSurvive: function(state, level, pos){
                let blockstate = level.getBlockState(pos.above());
                return !blockstate.isSolid() || blockstate.getBlock() instanceof $FenceGateBlock || blockstate.getBlock() instanceof $MovingPistonBlock || blockstate.getBlock() instanceof $AnvilBlock;
            },

            /**
             * 
             * @param {import("net.minecraft.world.item.context.BlockPlaceContext").$BlockPlaceContext} context 
             */
            getStateForPlacement: function(context){
                return !this.defaultBlockState().canSurvive(context.getLevel(), context.getClickedPos())
                ? Block.getBlock("kubejs:clay_3x").defaultBlockState() : this.defaultBlockState();
            }
        }, $BlockBehaviour$Properties.ofFullCopy(Blocks.FARMLAND));
    });
});

BlockEvents.modification(event => {
    event.modify("kubejs:clay_stalk", handler => {
        handler.randomTickCallback = callback => {
            let side = callback.level.random.nextIntBetweenInclusive(1, 7);
            let offset = "empty";
            switch (side){
                case 1:
                    offset = "north";
                    break;
                case 2:
                    offset = "west";
                    break;
                case 3:
                    offset = "east";
                    break;
                case 4:
                    offset = "south";
                    break;
                case 5:
                    offset = "up";
                    break;
            }

            if (offset != "empty"){
                let target_block = callback.block.offset(offset);
                let success = false;

                if (target_block.getBlockState().isAir()){
                    target_block.setBlockState("kubejs:clay_fruit", 3);
                    success = true;
                } else if (target_block.getId() == "kubejs:clay_fruit" && callback.level.random.nextInt(9) == 0){
                    target_block.setBlockState("kubejs:clay_stalk", 3);
                    success = true;
                }
                        
                if (success)
                    callback.level.playLocalSound(target_block.getX(), target_block.getY(), target_block.getZ(), "minecraft:block.growing_plant.crop", "blocks", 1.0, 1.0, false);
            }
        }
    });
});

StartupEvents.registry("item", event => {
    event.createCustom("clay_farmland", () => {
        return new $BlockItem("kubejs:clay_farmland", new $Item$Properties());
    });
});