import { $IEventBus } from "@package/net/neoforged/bus/api";
import { $ResourceLocation } from "@package/net/minecraft/resources";

declare module "@package/com/simibubi/create/compat/sodium" {
    export class $SodiumCompat {
        static init(arg0: $IEventBus, arg1: $IEventBus): void;
        static FACTORY_PANEL_TEXTURE: $ResourceLocation;
        static SAW_TEXTURE: $ResourceLocation;
        constructor();
    }
}
