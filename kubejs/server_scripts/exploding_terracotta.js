/** @type {typeof import("net.neoforged.neoforge.event.level.ExplosionEvent$Start").$ExplosionEvent$Start } */
let $ExplosionEvent$Start  = Java.loadClass("net.neoforged.neoforge.event.level.ExplosionEvent$Start")
ServerEvents.recipes(event => {
    let recipes = {
        "minecraft:red_terracotta": "minecraft:redstone",
        "minecraft:blue_terracotta": "minecraft:lapis_lazuli",
        "minecraft:purple_terracotta": "minecraft:amethyst_shard",
        "minecraft:yellow_terracotta": "minecraft:glowstone_dust",
        "minecraft:green_terracotta": "minecraft:emerald",
        "minecraft:cyan_terracotta": "minecraft:string",
        "minecraft:white_terracotta": {item: "minecraft:snowball", chance: 0.75},
        "minecraft:lime_terracotta": "minecraft:slime_ball",
        "minecraft:magenta_terracotta": "minecraft:popped_chorus_fruit",
        "minecraft:orange_terracotta": "minecraft:honey_bottle",
        "minecraft:brown_terracotta": "minecraft:leather",
        "minecraft:light_blue_terracotta": "minecraft:prismarine_shard",
        "minecraft:black_terracotta": "minecraft:echo_shard",
        "minecraft:pink_terracotta": "minecraft:spider_eye",
        "minecraft:light_gray_terracotta": "minecraft:brown_mushroom",

        "minecraft:gray_concrete_powder": "minecraft:gunpowder",
        "minecraft:red_nether_bricks": "minecraft:nether_brick",
        "minecraft:ochre_froglight": {item: "minecraft:blaze_powder", chance: 0.33}
    };

    for (let cable_type of ["copper", "silver", "tin", "electrum", "platinum", "kanthal", "cupronickel", "annealed_copper"]){
        event.custom({
            type: "lychee:item_exploding",
            item_in: `modern_industrialization:${cable_type}_cable`,
            post: [
                {
                    type: "drop_item",
                    if: {type: "chance", chance: 0.5 },
                    id: `modern_industrialization:${cable_type}_wire`
                },
                {
                    type: "drop_item",
                    if: [
                        {type: "chance", chance: 0.33 },
                        {type: "location", predicate: {dimension: "minecraft:the_nether"}}
                    ],
                    id: `modern_industrialization:${cable_type}_wire`
                }
            ]
        });
    }

    for (let recipe of Object.entries(recipes)){
        event.custom({
            type: "lychee:block_exploding",
            block_in: recipe[0],
            post: [
                {
                    type: "drop_item",
                    if: {type: "chance", chance: typeof(recipe[1]) == "string" ? 0.5 : recipe[1].chance },
                    id: typeof(recipe[1]) == "string" ? recipe[1] : recipe[1].item
                },
                {
                    type: "drop_item",
                    if: [
                        {type: "chance", chance: typeof(recipe[1]) == "string" ? 0.33 : recipe[1].chance*0.66 },
                        {type: "location", predicate: {dimension: "minecraft:the_nether"}}
                    ],
                    id: typeof(recipe[1]) == "string" ? recipe[1] : recipe[1].item
                },
                {
                    type: "prevent_default"
                }
            ]
        });
    }
});

NativeEvents.onEvent($ExplosionEvent$Start, event => {
    if (event.getLevel().dimension == "minecraft:the_nether"){
        let explosion = event.getExplosion();
        if (explosion.radius() < 6.5){
            event.setCanceled(true);
            event.getLevel().explode(explosion.directSourceEntity, explosion.damageSource, explosion.damageCalculator, explosion.center().x(), explosion.center().y(), explosion.center().z(), 6.5, false, 'tnt');
        }
    }
});