/** @type {typeof import("net.minecraft.world.level.block.Blocks").$Blocks } */
let $Blocks  = Java.loadClass("net.minecraft.world.level.block.Blocks")
/** @type {typeof import("net.minecraft.world.level.block.AmethystBlock").$AmethystBlock } */
let $AmethystBlock  = Java.loadClass("net.minecraft.world.level.block.AmethystBlock")
StartupEvents.registry("block", event => {
    for (let block of ["otherworldy_crystal", "otherglassy_crystal"])
        event.createCustom(block, event => {
            return new $AmethystBlock($BlockBehaviour$Properties.ofFullCopy($Blocks.AMETHYST_BLOCK).lightLevel(block => 12));
        });
});

StartupEvents.registry("item", event => {
    event.createCustom("otherworldy_crystal", () => {
        return new $BlockItem("kubejs:otherworldy_crystal", new $Item$Properties());
    });
    event.createCustom("otherglassy_crystal", () => {
        return new $BlockItem("kubejs:otherglassy_crystal", new $Item$Properties());
    });
});