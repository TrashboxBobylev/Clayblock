ServerEvents.recipes(event => {
    let recipes = {
        "minecraft:red_terracotta": "minecraft:redstone",
        "minecraft:blue_terracotta": "minecraft:lapis_lazuli",
        "minecraft:purple_terracotta": "minecraft:amethyst_shard",
        "minecraft:yellow_terracotta": "minecraft:glowstone_dust" 
    };

    for (let recipe of Object.entries(recipes)){
        event.custom({
            type: "lychee:block_exploding",
            block_in: recipe[0],
            post: [
                {
                    type: "drop_item",
                    if: {type: "chance", chance: 0.5},
                    id: recipe[1]
                },
                {
                    type: "prevent_default"
                }
            ]
        });
    }
});