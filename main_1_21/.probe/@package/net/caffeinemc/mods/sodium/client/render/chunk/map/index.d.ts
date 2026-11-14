import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $LongCollection } from "@package/it/unimi/dsi/fastutil/longs";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk/map" {
    export class $ChunkTrackerHolder {
        static get(arg0: $ClientLevel): $ChunkTracker;
    }
    export interface $ChunkTrackerHolder {
        sodium$getTracker(): $ChunkTracker;
    }
    /**
     * Values that may be interpreted as {@link $ChunkTrackerHolder}.
     */
    export type $ChunkTrackerHolder_ = (() => $ChunkTracker);
    export class $ClientChunkEventListener {
    }
    export interface $ClientChunkEventListener {
        updateMapCenter(arg0: number, arg1: number): void;
        updateLoadDistance(arg0: number): void;
        onChunkStatusAdded(arg0: number, arg1: number, arg2: number): void;
        onChunkStatusRemoved(arg0: number, arg1: number, arg2: number): void;
    }
    export class $ChunkTracker$ChunkEventHandler {
    }
    export interface $ChunkTracker$ChunkEventHandler {
        apply(arg0: number, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ChunkTracker$ChunkEventHandler}.
     */
    export type $ChunkTracker$ChunkEventHandler_ = ((arg0: number, arg1: number) => void);
    export class $ChunkTracker implements $ClientChunkEventListener {
        updateMapCenter(arg0: number, arg1: number): void;
        updateLoadDistance(arg0: number): void;
        onChunkStatusAdded(arg0: number, arg1: number, arg2: number): void;
        onChunkStatusRemoved(arg0: number, arg1: number, arg2: number): void;
        forEachEvent(arg0: $ChunkTracker$ChunkEventHandler_, arg1: $ChunkTracker$ChunkEventHandler_): void;
        getReadyChunks(): $LongCollection;
        static forEachChunk(arg0: $LongCollection, arg1: $ChunkTracker$ChunkEventHandler_): void;
        constructor();
        get readyChunks(): $LongCollection;
    }
}
