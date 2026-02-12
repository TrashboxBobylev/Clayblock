/** @type {typeof import("java.util.List").$List } */
let $List  = Java.loadClass("java.util.List")
/** @type {typeof import("net.minecraft.world.level.levelgen.LegacyRandomSource").$LegacyRandomSource } */
let $LegacyRandomSource  = Java.loadClass("net.minecraft.world.level.levelgen.LegacyRandomSource")
/** @type {typeof import("net.minecraft.world.level.levelgen.synth.PerlinSimplexNoise").$PerlinSimplexNoise } */
let $PerlinSimplexNoise  = Java.loadClass("net.minecraft.world.level.levelgen.synth.PerlinSimplexNoise")
/** @type {typeof import("java.util.Random").$Random } */
let $Random  = Java.loadClass("java.util.Random")
/** @type {typeof import("net.neoforged.neoforge.client.event.RegisterColorHandlersEvent$Block").$RegisterColorHandlersEvent$Block } */
let $RegisterColorHandlersEvent$Block  = Java.loadClass("net.neoforged.neoforge.client.event.RegisterColorHandlersEvent$Block")

let noise_thing = new $PerlinSimplexNoise($LegacyRandomSource(22222222), $List.of(-3, -2, -1, 0, 1, 2, 3));

NativeEvents.onEvent($RegisterColorHandlersEvent$Block, event => {
    event.register((state, level, pos, tintIndex) => {
        if (pos == null)
            pos = BlockPos.ZERO;

        let posHash = Math.abs(noise_thing.getValue(pos.x * pos.z, pos.y*pos.y, false));

        return Color.rgba(145 + 110 * posHash, 180 * posHash, 205 + 50 * posHash, 180).getRgb();
    }, Block.getBlock("kubejs:otherworldy_crystal"));
});