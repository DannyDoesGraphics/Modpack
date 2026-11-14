import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/caffeinemc/mods/lithium/common/world/blockentity" {
    export class $SupportCache {
    }
    export interface $SupportCache {
        lithium$isSupported(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SupportCache}.
     */
    export type $SupportCache_ = (() => boolean);
    export class $BlockEntityGetter {
    }
    export interface $BlockEntityGetter {
        lithium$getLoadedExistingBlockEntity(arg0: $BlockPos_): $BlockEntity;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityGetter}.
     */
    export type $BlockEntityGetter_ = ((arg0: $BlockPos) => $BlockEntity);
}
