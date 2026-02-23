MIMaterialEvents.addMaterials(event => {
    event.createMaterial("Curium", "curium", 0x867b77, material => {
        material.materialSet("stone")
            .addParts("dust", "ingot", "plate", "large_plate", "curved_plate", "drill_head", "drill")
            .customRegularPart("Energized %s Drill", "drill_energized")
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
            .addParts("dust", "ingot", "plate", "rod", "rod_magnetic", "ring", "bolt", "gear", "curved_plate", "drill_head", "drill")
            .customRegularPart("Energized %s Drill", "drill_energized")
            .barrel(256)
            .tank(32)
            .block("diamond")
            .cable("lv")
            .defaultRecipes()
            .forgeHammerRecipes()
    });

    event.createMaterial("Stained Nethercotta", "terracotta", 0xaf3200, material => {
        material.materialSet("shiny")
            .addParts("dust", "ingot", "plate", "rod", "ring", "bolt", "gear", "curved_plate", "drill_head", "drill")
            .customRegularPart("Energized %s Drill", "drill_energized")
            .barrel(256)
            .tank(32)
            .block("copper")
            .cable("lv")
            .defaultRecipes()
            .forgeHammerRecipes()
    });

    event.createMaterial("Clay", "clay", 0xb3bfd2, material => {
        material.addParts("dust");
        for (let i = 1; i <= 15; i++){
            material.customRegularPart(`x${i} Fuel`, `${i}x`);
        }
        material.defaultRecipes();
    })
});

for (let material of ["copper", "steel", "titanium", "stainless_steel", "aluminum"]){
    MIMaterialEvents.modifyMaterial(material, event => {
        event.builder.customRegularPart("Energized %s Drill", "drill_energized");
    });
}


MIMachineEvents.registerCasings(event => {
    event.registerNamed("basalt", "Basalt");
});

MIMachineEvents.registerHatches(event => {
    event.fluid("Basalted", "basalt", "basalt", 16);
    event.item("Basalted", "basalt", "basalt", 2, 1, 80, 30);
});


/**
 * @author https://stackoverflow.com/a/37723879
 */
var romanMatrix = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
];

/**
 * @author https://stackoverflow.com/a/37723879
 * @param {number} num
 * @returns {string} 
 */
function convertToRoman(num) {
  if (num === 0) {
    return '';
  }
  for (var i = 0; i < romanMatrix.length; i++) {
    if (num >= romanMatrix[i][0]) {
      return romanMatrix[i][1] + convertToRoman(num - romanMatrix[i][0]);
    }
  }
}

MIMachineEvents.registerMachines(event => {
    let clay_fuels = [];
    clay_fuels.push({item:"minecraft:clay_ball", power: 150});
    clay_fuels.push({item:"minecraft:clay", power: 150*3});
    for (let i = 1; i <= 15; i++){
        clay_fuels.push({item: `modern_industrialization:clay_${i}x`, power: 150*Math.pow(3, i+1)});
    }
    let generator_config = [
        {voltage: "lv", mult: 1},
        {voltage: "mv", mult: 2},
        {voltage: "hv", mult: 4},
        {voltage: "ev", mult: 6}
    ];
    for (let i = 1; i < generator_config.length+1; i++){
        event.simpleGeneratorSingleBlock(
            "Clay Energizer MK." + convertToRoman(i),
            "clay_generator_" + convertToRoman(i).toLowerCase(),
            generator_config[i-1].voltage,
            16 * Math.pow(5, i),
            1000 * Math.pow(5, i),
            builder => {
                clay_fuels.forEach(clay => {
                    console.log(clay.item);
                    builder.item(clay.item, clay.power*generator_config[i-1].mult);
                });
            },
            generator_config[i-1].voltage,
            "clay_generator_" + convertToRoman(i).toLowerCase(),
            true, true, true
        );
    }
});