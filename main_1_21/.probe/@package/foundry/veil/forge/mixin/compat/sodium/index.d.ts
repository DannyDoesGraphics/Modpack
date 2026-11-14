import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $RenderSectionManager, $RenderSection, $ChunkRenderer } from "@package/net/caffeinemc/mods/sodium/client/render/chunk";
import { $Long2ReferenceMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $ChunkRenderList, $SortedRenderLists } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/lists";

declare module "@package/foundry/veil/forge/mixin/compat/sodium" {
    export class $RenderSectionManagerAccessor {
    }
    export interface $RenderSectionManagerAccessor {
        getChunkRenderer(): $ChunkRenderer;
        getSectionByPosition(): $Long2ReferenceMap<$RenderSection>;
        get chunkRenderer(): $ChunkRenderer;
        get sectionByPosition(): $Long2ReferenceMap<$RenderSection>;
    }
    export class $SodiumWorldRendererAccessor {
    }
    export interface $SodiumWorldRendererAccessor {
        getRenderSectionManager(): $RenderSectionManager;
        get renderSectionManager(): $RenderSectionManager;
    }
    /**
     * Values that may be interpreted as {@link $SodiumWorldRendererAccessor}.
     */
    export type $SodiumWorldRendererAccessor_ = (() => $RenderSectionManager);
    export class $SortedRenderListsAccessor {
        static init(arg0: $ObjectArrayList<$ChunkRenderList>): $SortedRenderLists;
    }
    export interface $SortedRenderListsAccessor {
    }
}
