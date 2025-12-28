ServerEvents.recipes(event => {
    for (let i = 1; i <= 20; i++){
        event.shaped(global.clays[i], [
            "CC",
            "CC"
        ], {
            "C": global.clays[i-1]
        });
        event.shapeless(Item.of(global.clays[i-1]).withCount(4), [global.clays[i]]);
    }
});

ItemEvents.modifyTooltips(event => {
    for (let i = 0; i <= 20; i++){
        event.add(global.clays[i], [{translate: "modpack.clay_amount", with: [Math.pow(4, i+1).toString()]}]);
    }
});