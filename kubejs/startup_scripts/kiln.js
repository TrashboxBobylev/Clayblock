/** @type {typeof import("net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent").$RegisterCapabilitiesEvent } */
let $RegisterCapabilitiesEvent  = Java.loadClass("net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent")
/** @type {typeof import("net.neoforged.neoforge.capabilities.Capabilities$ItemHandler").$Capabilities$ItemHandler } */
let $Capabilities$ItemHandler  = Java.loadClass("net.neoforged.neoforge.capabilities.Capabilities$ItemHandler")
/** @type {typeof import("com.teamabnormals.clayworks.core.registry.ClayworksBlockEntityTypes").$ClayworksBlockEntityTypes } */
let $ClayworksBlockEntityTypes  = Java.loadClass("com.teamabnormals.clayworks.core.registry.ClayworksBlockEntityTypes")
/** @type {typeof import("net.neoforged.neoforge.items.wrapper.SidedInvWrapper").$SidedInvWrapper } */
let $SidedInvWrapper = Java.loadClass("net.neoforged.neoforge.items.wrapper.SidedInvWrapper")

NativeEvents.onEvent($RegisterCapabilitiesEvent, event => {
    event.registerBlockEntity($Capabilities$ItemHandler.BLOCK, $ClayworksBlockEntityTypes.KILN.get(), (obj, ctx) => {
        return new $SidedInvWrapper(obj, ctx);
    })
});