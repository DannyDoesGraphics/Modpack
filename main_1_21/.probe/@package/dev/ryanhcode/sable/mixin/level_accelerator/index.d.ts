import { $ChunkHolder } from "@package/net/minecraft/server/level";

declare module "@package/dev/ryanhcode/sable/mixin/level_accelerator" {
    export class $ServerChunkCacheAccessor {
    }
    export interface $ServerChunkCacheAccessor {
        invokeGetVisibleChunkIfPresent(arg0: number): $ChunkHolder;
    }
    /**
     * Values that may be interpreted as {@link $ServerChunkCacheAccessor}.
     */
    export type $ServerChunkCacheAccessor_ = ((arg0: number) => $ChunkHolder);
}
