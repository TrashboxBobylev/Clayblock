/** @type {typeof import("net.minecraft.world.level.block.Blocks").$Blocks } */
let $Blocks  = Java.loadClass("net.minecraft.world.level.block.Blocks")
/** @type {typeof import("net.minecraft.world.level.block.AmethystBlock").$AmethystBlock } */
let $AmethystBlock  = Java.loadClass("net.minecraft.world.level.block.AmethystBlock")
StartupEvents.registry("block", event => {
    event.createCustom("otherworldy_crystal", event => {
        return new $AmethystBlock($BlockBehaviour$Properties.ofFullCopy($Blocks.AMETHYST_BLOCK).lightLevel(block => 12));
    });
});

StartupEvents.registry("item", event => {
    event.createCustom("otherworldy_crystal", () => {
        return new $BlockItem("kubejs:otherworldy_crystal", new $Item$Properties());
    });
});