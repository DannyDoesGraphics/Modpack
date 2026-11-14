import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";

declare module "@package/com/ishland/c2me/base/common/theinterface" {
    export class $IFastChunkHolder {
    }
    export interface $IFastChunkHolder {
        c2me$immediateWorldChunk(): $LevelChunk;
    }
    /**
     * Values that may be interpreted as {@link $IFastChunkHolder}.
     */
    export type $IFastChunkHolder_ = (() => $LevelChunk);
    export class $IDirectStorage {
    }
    export interface $IDirectStorage {
        setRawChunkData(arg0: $ChunkPos, arg1: number[]): $CompletableFuture<void>;
        setRawChunkData(arg0: $ChunkPos, arg1: $CompletableFuture<number[]>): $CompletableFuture<void>;
    }
}
