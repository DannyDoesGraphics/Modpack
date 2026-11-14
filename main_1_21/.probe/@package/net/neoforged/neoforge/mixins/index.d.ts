import { $RegistrationInfo, $RegistrationInfo_ } from "@package/net/minecraft/core";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Map_, $Map, $Set_, $Set } from "@package/java/util";

declare module "@package/net/neoforged/neoforge/mixins" {
    export class $BlockEntityTypeAccessor {
    }
    export interface $BlockEntityTypeAccessor {
        neoforge$setValidBlocks(validBlocks: $Set_<$Block_>): void;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityTypeAccessor}.
     */
    export type $BlockEntityTypeAccessor_ = ((arg0: $Set<$Block>) => void);
    export class $MappedRegistryAccessor<T> {
    }
    export interface $MappedRegistryAccessor<T> {
        neoforge$getRegistrationInfos(): $Map<$ResourceKey<T>, $RegistrationInfo>;
    }
    /**
     * Values that may be interpreted as {@link $MappedRegistryAccessor}.
     */
    export type $MappedRegistryAccessor_<T> = (() => $Map_<$ResourceKey_<T>, $RegistrationInfo_>);
}
