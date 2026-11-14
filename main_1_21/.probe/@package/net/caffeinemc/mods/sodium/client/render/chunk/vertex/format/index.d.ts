import { $GlVertexFormat } from "@package/net/caffeinemc/mods/sodium/client/gl/attribute";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk/vertex/format" {
    export class $ChunkVertexType {
    }
    export interface $ChunkVertexType {
        getEncoder(): $ChunkVertexEncoder;
        getVertexFormat(): $GlVertexFormat;
        get encoder(): $ChunkVertexEncoder;
        get vertexFormat(): $GlVertexFormat;
    }
    export class $ChunkVertexEncoder {
    }
    export interface $ChunkVertexEncoder {
        write(arg0: number, arg1: number, arg2: $ChunkVertexEncoder$Vertex[], arg3: number): number;
    }
    /**
     * Values that may be interpreted as {@link $ChunkVertexEncoder}.
     */
    export type $ChunkVertexEncoder_ = ((arg0: number, arg1: number, arg2: $ChunkVertexEncoder$Vertex[], arg3: number) => number);
}
