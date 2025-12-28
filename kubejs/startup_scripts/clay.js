global.clays = [];
global.clays.push("minecraft:clay");

StartupEvents.registry("block", event => {
    for (let i = 1; i <= 20; i++){
        let clay_id = `kubejs:clay_${i}x`;
        global.clays.push(clay_id);
        event.create(clay_id).copyPropertiesFrom("minecraft:clay").hardness(0.6 + i*1);
    }
});