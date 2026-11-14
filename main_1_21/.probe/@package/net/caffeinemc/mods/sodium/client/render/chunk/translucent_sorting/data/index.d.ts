import { $IntConsumer_, $IntConsumer } from "@package/java/util/function";
import { $SectionPos } from "@package/net/minecraft/core";
import { $TQuad } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/quad";
import { $NativeBuffer } from "@package/net/caffeinemc/mods/sodium/client/util";
import { $UpdatedQuadsList } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/bsp_tree";
import { $SortType_, $TranslucentGeometryCollector, $SortType } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting";
import { $IntBuffer } from "@package/java/nio";
import { $Vector3dc, $Vector3fc } from "@package/org/joml";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data" {
    export class $TranslucentData {
        prepareTrigger(arg0: boolean): void;
        meshesWereModified(): boolean;
        getUpdatedQuads(): $UpdatedQuadsList;
        static writeQuadVertexIndexes(arg0: $IntBuffer, arg1: number): void;
        static writeQuadVertexIndexes(arg0: $IntBuffer, arg1: number[]): void;
        getSortType(): $SortType;
        static vertexCountToQuadCount(arg0: number): number;
        static quadCountToIndexBytes(arg0: number): number;
        static quadCountToVertexCount(arg0: number): number;
        oldDataMatches(arg0: $TranslucentGeometryCollector, arg1: $SortType_, arg2: $TQuad[]): boolean;
        static VERTICES_PER_QUAD: number;
        static BYTES_PER_QUAD: number;
        static BYTES_PER_INDEX: number;
        static INDICES_PER_QUAD: number;
        sectionPos: $SectionPos;
        get updatedQuads(): $UpdatedQuadsList;
        get sortType(): $SortType;
    }
    export class $CombinedCameraPos {
    }
    export interface $CombinedCameraPos {
        getRelativeCameraPos(): $Vector3fc;
        getAbsoluteCameraPos(): $Vector3dc;
        get relativeCameraPos(): $Vector3fc;
        get absoluteCameraPos(): $Vector3dc;
    }
    export class $DynamicSorter extends $PresentSorter {
        getQuadCount(): number;
        getResultSize(): number;
        get quadCount(): number;
        get resultSize(): number;
    }
    export class $PresentSorter implements $Sorter {
        getIndexBuffer(): $NativeBuffer;
        destroy(): void;
        getIntBuffer(): $IntBuffer;
        constructor();
        get indexBuffer(): $NativeBuffer;
        get intBuffer(): $IntBuffer;
    }
    export class $DynamicTopoData$DynamicTopoSorter extends $DynamicSorter implements $IntConsumer {
        accept(arg0: number): void;
        andThen(arg0: $IntConsumer_): $IntConsumer;
    }
    export class $Sorter {
    }
    export interface $Sorter extends $PresentSortData {
        writeIndexBuffer(arg0: $CombinedCameraPos, arg1: boolean): void;
        destroy(): void;
    }
}
