import { $ModelQuadFacing } from "@package/net/caffeinemc/mods/sodium/client/model/quad/properties";
import { $Vector3fc } from "@package/org/joml";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/quad" {
    export class $TQuad {
        getExtents(): number[];
        getAccurateDotProduct(): number;
        getQuantizedNormal(): $Vector3fc;
        extentsEqual(arg0: number[]): boolean;
        static extentsEqual(arg0: number[], arg1: number[]): boolean;
        static extentsIntersect(arg0: number[], arg1: number[]): boolean;
        static extentsIntersect(arg0: $TQuad, arg1: $TQuad): boolean;
        getVertexPositions(): number[];
        useQuantizedFacing(): $ModelQuadFacing;
        getQuantizedDotProduct(): number;
        getPackedNormal(): number;
        getQuadHash(): number;
        getFacing(): $ModelQuadFacing;
        getAccurateNormal(): $Vector3fc;
        getCenter(): $Vector3fc;
        static VERTEX_EPSILON: number;
        static QUANTIZE_EPSILON: number;
        get extents(): number[];
        get accurateDotProduct(): number;
        get quantizedNormal(): $Vector3fc;
        get vertexPositions(): number[];
        get quantizedDotProduct(): number;
        get packedNormal(): number;
        get quadHash(): number;
        get facing(): $ModelQuadFacing;
        get accurateNormal(): $Vector3fc;
        get center(): $Vector3fc;
    }
}
