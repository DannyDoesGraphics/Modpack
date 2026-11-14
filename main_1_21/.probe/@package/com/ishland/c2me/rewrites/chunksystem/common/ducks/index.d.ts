import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Long2IntLinkedOpenHashMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $TheChunkSystem } from "@package/com/ishland/c2me/rewrites/chunksystem/common";

declare module "@package/com/ishland/c2me/rewrites/chunksystem/common/ducks" {
    export class $IPOIUnloading {
    }
    export interface $IPOIUnloading {
        c2me$shouldUnloadPoi(pos: $ChunkPos): boolean;
        c2me$unloadPoi(arg0: $ChunkPos): void;
    }
    /**
     * Values that may be interpreted as {@link $IPOIUnloading}.
     */
    export type $IPOIUnloading_ = ((arg0: $ChunkPos) => void);
    export class $TicketDistanceLevelPropagatorExtension {
    }
    export interface $TicketDistanceLevelPropagatorExtension {
        c2me$getTicketLevelUpdates(): $Long2IntLinkedOpenHashMap;
    }
    /**
     * Values that may be interpreted as {@link $TicketDistanceLevelPropagatorExtension}.
     */
    export type $TicketDistanceLevelPropagatorExtension_ = (() => $Long2IntLinkedOpenHashMap);
    export class $WorldChunkExtension {
    }
    export interface $WorldChunkExtension {
        c2me$isBlockTicking(): boolean;
        c2me$setBlockTicking(arg0: boolean): void;
    }
    export class $IChunkSystemAccess {
    }
    export interface $IChunkSystemAccess {
        c2me$getTheChunkSystem(): $TheChunkSystem;
    }
    /**
     * Values that may be interpreted as {@link $IChunkSystemAccess}.
     */
    export type $IChunkSystemAccess_ = (() => $TheChunkSystem);
}
