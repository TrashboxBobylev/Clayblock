ServerEvents.recipes(event => {
    event.shapeless("modern_industrialization:curium_dust", [
        "kubejs:clay_glass", "minecraft:dead_horn_coral_block", "minecraft:dead_horn_coral_block", "minecraft:dead_fire_coral_block", "minecraft:dead_fire_coral_block", "minecraft:dead_bubble_coral_block", "minecraft:dead_bubble_coral_block", "minecraft:dead_tube_coral_block", "minecraft:dead_tube_coral_block"
    ]);

    event.recipes.modern_industrialization.mixer(2, 100)
        .itemIn("2x minecraft:dead_horn_coral_block")
        .itemIn("2x minecraft:dead_fire_coral_block")
        .itemIn("2x minecraft:dead_bubble_coral_block")
        .itemIn("2x minecraft:dead_tube_coral_block")
        .itemOut("modern_industrialization:curium_dust");

    event.shaped("2x modern_industrialization:curium_cable", [
        "RRR",
        "CCC",
        "RRR"
    ], {
        "R": "minecraft:smooth_basalt",
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
        "OOO",
        "OCO",
        "OOO"
    ], {
        "C": "minecraft:copper_block",
        "O": "#c:obsidians"
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
});