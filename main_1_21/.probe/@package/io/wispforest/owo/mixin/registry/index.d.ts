import { $ResourceKey_ } from "@package/net/minecraft/resources";

declare module "@package/io/wispforest/owo/mixin/registry" {
    export class $ReferenceAccessor<T> {
    }
    export interface $ReferenceAccessor<T> {
        owo$setRegistryKey(arg0: $ResourceKey_<T>): void;
        owo$setValue(arg0: T): void;
    }
}
