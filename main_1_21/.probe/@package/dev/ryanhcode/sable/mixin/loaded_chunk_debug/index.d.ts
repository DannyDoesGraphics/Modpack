import { $AtomicReferenceArray } from "@package/java/util/concurrent/atomic";
import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";

declare module "@package/dev/ryanhcode/sable/mixin/loaded_chunk_debug" {
    export class $ClientChunkCacheStorageAccessor {
    }
    export interface $ClientChunkCacheStorageAccessor {
        getChunks(): $AtomicReferenceArray<$LevelChunk>;
        get chunks(): $AtomicReferenceArray<$LevelChunk>;
    }
    /**
     * Values that may be interpreted as {@link $ClientChunkCacheStorageAccessor}.
     */
    export type $ClientChunkCacheStorageAccessor_ = (() => $AtomicReferenceArray<$LevelChunk>);
}
