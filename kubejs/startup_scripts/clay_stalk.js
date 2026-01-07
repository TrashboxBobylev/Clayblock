StartupEvents.registry("block", event => {
    event.create("clay_stalk", "kubejs:wall").texture("minecraft:block/verdant_froglight_side").copyPropertiesFrom("minecraft:tuff_brick_wall").tagBlock("minecraft:mineable/axe").hardness(10).requiresTool();

    event.create("clay_fruit").copyPropertiesFrom("minecraft:moss_block").tagItem("c:crops");
});

BlockEvents.modification(event => {
    event.modify("kubejs:clay_stalk", handler => {
        handler.randomTickCallback = callback => {
            let side = callback.level.random.nextIntBetweenInclusive(1, 8);
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
                } else if (target_block.getId() == "kubejs:clay_fruit" && callback.level.random.nextBoolean()){
                    target_block.setBlockState("kubejs:clay_stalk", 3);
                    success = true;
                }
                        
                if (success)
                    callback.level.playLocalSound(target_block.getX(), target_block.getY(), target_block.getZ(), "minecraft:block.growing_plant.crop", "blocks", 1.0, 1.0, false);
            }
        }
    });
});