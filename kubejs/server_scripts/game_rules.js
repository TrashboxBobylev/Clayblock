ServerEvents.loaded(event => {
    let {server} = event;
    if (!AStages.serverHasStage("first_load", server)){
        AStages.addStageToServer("first_load", server);
        server.scheduleInTicks(20, callback => {
            let gameRules = server.gameRules;
            gameRules.set("doVillagerSummoning", "false");
            gameRules.set("doInsomnia", "false");
            gameRules.set("doTraderSpawning", "false");
        });
    }
});

AStages.customizeStage("first_load").setServerOnly(true);