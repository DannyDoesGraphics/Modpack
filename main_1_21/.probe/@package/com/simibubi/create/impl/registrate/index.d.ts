import { $Registry } from "@package/net/minecraft/core";
import { $CreateRegistrate } from "@package/com/simibubi/create/foundation/data";
import { $ResourceLocation_, $ResourceKey_ } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $NonNullConsumer_ } from "@package/com/tterrag/registrate/util/nullness";

declare module "@package/com/simibubi/create/impl/registrate" {
    export class $CreateRegistrateRegistrationCallbackImpl$CallbackImpl<R, T extends R> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $CreateRegistrateRegistrationCallbackImpl$CallbackImpl}.
     */
    export type $CreateRegistrateRegistrationCallbackImpl$CallbackImpl_<R, T> = { id?: $ResourceLocation_, callback?: $NonNullConsumer_<R>, registry?: $ResourceKey_<$Registry<any>>,  } | [id?: $ResourceLocation_, callback?: $NonNullConsumer_<R>, registry?: $ResourceKey_<$Registry<any>>, ];
    export class $CreateRegistrateRegistrationCallbackImpl {
        static provideRegistrate(arg0: $CreateRegistrate): void;
        static register<R, T extends R>(arg0: $ResourceKey_<$Registry<R>>, arg1: $ResourceLocation_, arg2: $NonNullConsumer_<T>): void;
        constructor();
    }
}
