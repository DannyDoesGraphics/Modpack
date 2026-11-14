import { $FullTQuad } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/quad";
import { $ReferenceArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $SequencedCollection } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $ChunkMeshBufferBuilder } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/vertex/builder";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/bsp_tree" {
    export class $UpdatedQuadsList extends $ReferenceArrayList<$FullTQuad> {
        setQuadCounts(arg0: number, arg1: number): void;
        getMeshQuadCount(): number;
        applyBufferUpdates(arg0: $ChunkMeshBufferBuilder, arg1: $ByteBuffer): void;
        getIndexQuadCount(): number;
        reversed(): $SequencedCollection<$FullTQuad>;
        static DEFAULT_INITIAL_CAPACITY: number;
        constructor();
        get meshQuadCount(): number;
        get indexQuadCount(): number;
    }
}
