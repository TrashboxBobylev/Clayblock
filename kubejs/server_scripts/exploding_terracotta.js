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
                    type: "prevent_default"
                }
            ]
        });
    }
});