ClientEvents.generateAssets("after_mods", event => {
    let generator_config = [
        {voltage: "lv", name: "i"},
        {voltage: "mv", name: "ii"},
        {voltage: "hv", name: "iii"},
        {voltage: "ev", name: "iv"},
        {voltage: "superconductor", name: "v"}
    ];

    for (let thing of generator_config){
        event.json(`modern_industrialization:models/block/clay_generator_${thing.name}`, {
            casing: thing.voltage,
            default_overlays: {
                front: "modern_industrialization:block/machine/clay_generator/overlay_front",
                front_active: "modern_industrialization:block/machine/clay_generator/overlay_front_active",
                output: "modern_industrialization:block/overlays/output_energy",
                top: "modern_industrialization:block/machine/clay_generator/overlay_top"
            },
            loader: "modern_industrialization:machine"
        });
    }
});