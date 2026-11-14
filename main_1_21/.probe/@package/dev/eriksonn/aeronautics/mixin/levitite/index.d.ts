import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $BitSet, $List_ } from "@package/java/util";

declare module "@package/dev/eriksonn/aeronautics/mixin/levitite" {
    export class $ChunkRenderTypeSetAccessor {
        static setChunkRenderTypesList(arg0: $List_<$RenderType>): void;
        static setChunkRenderTypes(arg0: $RenderType[]): void;
        static set chunkRenderTypesList(value: $List_<$RenderType>);
        static set chunkRenderTypes(value: $RenderType[]);
    }
    export interface $ChunkRenderTypeSetAccessor {
        getBits(): $BitSet;
        get bits(): $BitSet;
    }
    /**
     * Values that may be interpreted as {@link $ChunkRenderTypeSetAccessor}.
     */
    export type $ChunkRenderTypeSetAccessor_ = (() => $BitSet);
}
