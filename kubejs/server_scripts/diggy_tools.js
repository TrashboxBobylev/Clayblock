ServerEvents.recipes(event => {
    event.remove("onlyhammersandexcavators:stone_hammer");
    event.shaped("onlyhammersandexcavators:stone_hammer", [
        "SCS",
        "CcC",
        " c "
    ], {
        "S": "#c:stones",
        "C": "#c:cobblestones",
        "c": "minecraft:stick"
    });

    event.remove("onlyhammersandexcavators:stone_excavator");
    event.shaped("onlyhammersandexcavators:stone_excavator", [
        "CCC",
        "ScS",
        " c "
    ], {
        "S": "#c:stones",
        "C": "#c:cobblestones",
        "c": "minecraft:stick"
    });

    /**
     * @param {string} material 
     */
    function material_retriever(material){
        switch (material){
            case "iron": case "gold":
                return `#c:ingots/${material}`;
            case "diamond": case "emerald": case "lapis":
                return `#c:gems/${material}`;
            case "redstone":
                return `#c:dusts/${material}`;
        }
        return "minecraft:air";
    }

    for (let material of ["iron", "gold", "diamond", "redstone", "emerald", "lapis"]) {
        event.remove(`onlyhammersandexcavators:${material}_hammer`);
        event.shaped(`onlyhammersandexcavators:${material}_hammer`, [
            "M",
            "c",
            "c"
        ], {
            "M": `#c:storage_blocks/${material}`,
            "c": "minecraft:stick"
        });

        event.remove(`onlyhammersandexcavators:${material}_excavator`);
        event.shaped(`onlyhammersandexcavators:${material}_excavator`, [
            "CCC",
            "CcC",
            " c "
        ], {
            "C": material_retriever(material),
            "c": "minecraft:stick"
        });
    }
});