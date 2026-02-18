AStages.customizeStage("MI")
    .setAddChatMessage(stageKey => Component.translatable("modpack.mi_unlocked").green())
    .setAddSubTitle(stageKey => Component.translatable("modpack.mi_title"));

AStages.addRestrictionForMod("mi_away", "MI", "modern_industrialization")
    .ignoreItems([
        "modern_industrialization:forge_hammer",
        "modern_industrialization:curium_block",
        "modern_industrialization:curium_ingot",
        "modern_industrialization:curium_dust",
        "modern_industrialization:basalt_block",
        "modern_industrialization:basalt_ingot",
        "modern_industrialization:basalt_dust"
    ]);

AStages.addRestrictionForMod("mi_away_2", "MI", "extended_industrialization");
AStages.addRestrictionForMod("mi_away_3", "MI", "industrialization_overdrive");

AStages.addRestrictionForModRecipe("mi_away_4", "MI", "modern_industrialization");
AStages.addRestrictionForModRecipe("mi_away_5", "MI", "extended_industrialization");
AStages.addRestrictionForModRecipe("mi_away_6", "MI", "industrialization_overdrive");

PlayerEvents.advancement("modern_industrialization:forge_hammer", event => {
    if (!AStages.playerHasStage("MI", event.player))
        AStages.addStageToPlayer("MI", event.player);
});