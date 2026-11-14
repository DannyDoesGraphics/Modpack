import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";

declare module "@package/net/fabricmc/fabric/api/event" {
    export class $Event<T> {
        register(arg0: $ResourceLocation_, arg1: T): void;
        register(arg0: T): void;
        invoker(): T;
        addPhaseOrdering(arg0: $ResourceLocation_, arg1: $ResourceLocation_): void;
        static DEFAULT_PHASE: $ResourceLocation;
        constructor();
    }
}
