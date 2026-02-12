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

    event.createMaterial("Basalted", "basalt", 0x31303d, material => {
        material.materialSet("stone")
            .hardness("hard")
            .addParts("dust", "ingot", "plate", "large_plate", "rod", "ring", "bolt", "gear")
            .barrel(128)
            .machineCasing(16.0)
            .tank(16)
            .block("lapis")
            .defaultRecipes()
            .forgeHammerRecipes()
    });

    event.createMaterial("Primed Clayium", "clayium", 0xb3bfd2, material => {
        material.materialSet("shiny")
            .addParts("dust", "ingot", "plate", "rod", "rod_magnetic")
            .barrel(256)
            .tank(32)
            .block("diamond")
            .cable("lv")
            .defaultRecipes()
            .forgeHammerRecipes()
    });
});