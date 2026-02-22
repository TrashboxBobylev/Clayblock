ServerEvents.recipes(event => {
    event.shapeless("modern_industrialization:curium_dust", [
        "kubejs:clay_glass", "minecraft:dead_horn_coral_block", "minecraft:dead_horn_coral_block", "minecraft:dead_fire_coral_block", "minecraft:dead_fire_coral_block", "minecraft:dead_bubble_coral_block", "minecraft:dead_bubble_coral_block", "minecraft:dead_tube_coral_block", "minecraft:dead_tube_coral_block"
    ]);

    event.shapeless("modern_industrialization:basalt_dust", [
        "#c:obsidians", "minecraft:smooth_basalt", "minecraft:smooth_basalt", "minecraft:smooth_basalt", "minecraft:blackstone", "minecraft:blackstone", "minecraft:blackstone"
    ]);

    event.recipes.modern_industrialization.mixer(2, 100)
        .itemIn("2x minecraft:dead_horn_coral_block")
        .itemIn("2x minecraft:dead_fire_coral_block")
        .itemIn("2x minecraft:dead_bubble_coral_block")
        .itemIn("2x minecraft:dead_tube_coral_block")
        .itemOut("modern_industrialization:curium_dust");

    event.recipes.modern_industrialization.mixer(2, 200)
        .itemIn("4x minecraft:smooth_basalt")
        .itemIn("4x minecraft:blackstone")
        .itemOut("modern_industrialization:basalt_dust");

    event.shaped("3x modern_industrialization:curium_cable", [
        "RRR",
        "CCC",
        "RRR"
    ], {
        "R": "#c:plates/basalt",
        "C": "#c:ingots/curium"
    });

    for (let cable_type of ["copper", "silver", "tin", "electrum", "platinum", "kanthal", "cupronickel", "annealed_copper"]){
        event.shaped(`8x modern_industrialization:${cable_type}_cable`, [
            "CCC",
            "CMC",
            "CCC"
        ], {
            "M": `#c:storage_blocks/${cable_type}`,
            "C": "modern_industrialization:curium_cable"
        });
    }

    for (let ingot_type of ["aluminum", "battery_alloy", "blastproof_alloy", "bronze", "copper", "gold", "iridium", "stainless_steel", "steel", "tin", "titanium"]){
        event.custom({
            type: "lychee:block_crushing",
            item_in: `modern_industrialization:${ingot_type}_plate`,
            post: [{
                type: "drop_item",
                id: `modern_industrialization:${ingot_type}_curved_plate`
            }]
        });
    }

    for (let cable_type of ["copper", "electrum", "platinum"]){
        event.shaped(`20x modern_industrialization:${cable_type}_fine_wire`, [
            "CCC",
            "CMC",
            "CCC"
        ], {
            "C": `modern_industrialization:${cable_type}_wire`,
            "M": "rftoolsbase:dimensionalshard"
        });
    }

    event.shaped("modern_industrialization:analog_circuit_board", [
        " O ",
        "OCO",
        " O "
    ], {
        "C": "minecraft:copper_block",
        "O": "#c:plates/basalt"
    });

    event.shaped("modern_industrialization:battery_alloy_dust", [
        "CL",
        "AC"
    ], {
        "C": "kubejs:clay_glass",
        "L": "#c:ingots/lead",
        "A": "#c:ingots/antimony"
    });

    event.shaped("modern_industrialization:capacitor", [
        "EBE",
        "ECE"
    ], {
        "E": "minecraft:end_stone",
        "C": "kubejs:clay_glass",
        "B": "minecraft:blaze_rod"
    });

    event.shaped("modern_industrialization:basalt_machine_casing", [
        "PPP",
        "PGP",
        "PPP"
    ], {
        "P": "#c:plates/basalt",
        "G": "#c:gears/basalt"
    });

    event.replaceInput({output: "modern_industrialization:basic_machine_hull"}, "modern_industrialization:steel_machine_casing", "#modpack:basic_casings");

    event.shaped("modern_industrialization:clayium_rod_magnetic", [
        " RR",
        "RCR",
        "RR "
    ], {
        "R": "#c:dusts/redstone",
        "C": "#c:ingots/clayium"
    });

    event.shaped("kubejs:clayium_rotary_blade", [
        "DCD",
        "CBC",
        "DCD"
    ], {
        "D": "#c:plates/diamond",
        "C": "#c:plates/clayium",
        "B": "#c:gears/basalt"
    });

    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn("4x #c:plates/diamond")
        .itemIn("4x #c:plates/clayium")
        .itemIn("#c:gears/basalt")
        .itemOut("kubejs:clayium_rotary_blade");

    event.replaceInput({input: "modern_industrialization:invar_rotary_blade"}, "modern_industrialization:invar_rotary_blade", "#modpack:basic_rotary_blades");

    event.remove(/modern_industrialization:materials\/(.*)\/craft\/barrel/);

    event.forEachRecipe(/modern_industrialization:materials\/(.*)\/assembler\/barrel/, recipe => {
        /**
         * @type {import("aztech.modern_industrialization.machines.recipe.MachineRecipe$ItemOutput").$MachineRecipe$ItemOutput$$Original}
         */
        let output = recipe.get("item_outputs")[0];
        recipe.set("item_outputs", [{id: output.variant().toStack().id, count: 3}]);
    });
});

ServerEvents.tags("item", event => {
    event.add("modpack:basic_casings", "modern_industrialization:steel_machine_casing");
    event.add("modpack:basic_casings", "modern_industrialization:basalt_machine_casing");

    event.add("modpack:basic_rotary_blades", "modern_industrialization:invar_rotary_blade");
    event.add("modpack:basic_rotary_blades", "kubejs:clayium_rotary_blade");
});