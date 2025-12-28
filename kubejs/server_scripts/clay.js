ServerEvents.tags("block", event => {
    for (let clay of global.clays){
        event.add("minecraft:dirt", clay);
    }
});