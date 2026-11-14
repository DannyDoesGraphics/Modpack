import { $Registry } from "@package/net/minecraft/core";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";

declare module "@package/net/neoforged/neoforge/registries/callback" {
    export class $RegistryCallback<T> {
    }
    export interface $RegistryCallback<T> {
    }
    export class $AddCallback<T> {
    }
    export interface $AddCallback<T> extends $RegistryCallback<T> {
        onAdd(arg0: $Registry<T>, arg1: number, arg2: $ResourceKey_<T>, arg3: T): void;
    }
    /**
     * Values that may be interpreted as {@link $AddCallback}.
     */
    export type $AddCallback_<T> = ((arg0: $Registry<T>, arg1: number, arg2: $ResourceKey<T>, arg3: T) => void);
    export class $ClearCallback<T> {
    }
    export interface $ClearCallback<T> extends $RegistryCallback<T> {
        onClear(arg0: $Registry<T>, arg1: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $ClearCallback}.
     */
    export type $ClearCallback_<T> = ((arg0: $Registry<T>, arg1: boolean) => void);
    export class $BakeCallback<T> {
    }
    export interface $BakeCallback<T> extends $RegistryCallback<T> {
        onBake(arg0: $Registry<T>): void;
    }
    /**
     * Values that may be interpreted as {@link $BakeCallback}.
     */
    export type $BakeCallback_<T> = ((arg0: $Registry<T>) => void);
}
