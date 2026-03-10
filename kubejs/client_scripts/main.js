// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded client example script)')

ClientEvents.generateAssets("before_mods", event => {
    for (let i = 1; i <= 75; i++){
        event.json(`modpack:tips/tip_${i}.json`, {
            type: "tipsmod:simple",
            text: {
                translate: `modpack.tip_${i}`
            }
        });
    }
});