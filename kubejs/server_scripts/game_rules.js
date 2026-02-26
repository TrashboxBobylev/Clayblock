ServerEvents.loaded(event => {
    let {server} = event;
    if (!AStages.serverHasStage("first_load", server)){
        AStages.addStageToServer("first_load", server);
        server.scheduleInTicks(100, callback => {
            server.runCommandSilent("gamerule doVillagerSummoning false");
            server.runCommandSilent("gamerule doInsomnia false");
            server.runCommandSilent("gamerule doTraderSpawning false");
        });
    }
});

AStages.customizeStage("first_load").setServerOnly(true);