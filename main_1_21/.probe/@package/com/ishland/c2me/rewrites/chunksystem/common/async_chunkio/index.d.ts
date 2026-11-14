import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $BitSet, $List_ } from "@package/java/util";

declare module "@package/com/ishland/c2me/rewrites/chunksystem/common/async_chunkio" {
    export class $SerializingRegionBasedStorageExtension {
    }
    export interface $SerializingRegionBasedStorageExtension {
        update(arg0: $ChunkPos, arg1: $CompoundTag_): void;
    }
    /**
     * Values that may be interpreted as {@link $SerializingRegionBasedStorageExtension}.
     */
    export type $SerializingRegionBasedStorageExtension_ = ((arg0: $ChunkPos, arg1: $CompoundTag) => void);
    export class $ProtoChunkExtension {
    }
    export interface $ProtoChunkExtension {
        setBlendingInfo(arg0: $ChunkPos, arg1: $List_<$BitSet>): void;
        setBlendingComputeFuture(arg0: $CompletableFuture<void>): void;
        getNeedBlending(): boolean;
        getInitialMainThreadComputeFuture(): $CompletableFuture<void>;
        setInitialMainThreadComputeFuture(arg0: $CompletableFuture<void>): void;
        set blendingComputeFuture(value: $CompletableFuture<void>);
        get needBlending(): boolean;
    }
}
