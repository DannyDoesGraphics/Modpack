import { $Registry } from "@package/net/minecraft/core";
import { $CreateRegistrate } from "@package/com/simibubi/create/foundation/data";
import { $ResourceLocation_, $ResourceKey_ } from "@package/net/minecraft/resources";
import { $NonNullConsumer_ } from "@package/com/tterrag/registrate/util/nullness";

declare module "@package/com/simibubi/create/api/registrate" {
    export class $CreateRegistrateRegistrationCallback {
        static provideRegistrate(arg0: $CreateRegistrate): void;
        static register<R, T extends R>(arg0: $ResourceKey_<$Registry<R>>, arg1: $ResourceLocation_, arg2: $NonNullConsumer_<T>): void;
    }
}
