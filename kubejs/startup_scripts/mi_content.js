MIMaterialEvents.addMaterials(event => {
    event.createMaterial("Curium", "curium", 0x867b77, material => {
        material.materialSet("stone")
            .addParts("dust", "ingot", "plate")
            .barrel(196)
            .tank(24)
            .block("coal")
            .cable("lv")
            .ore({
                "ore_set": "coal", 
                "generate": false
            })
            .rawMetal("copper")
            .defaultRecipes()
            .forgeHammerRecipes()
    });
});