import { $VertexBufferWriter } from "@package/net/caffeinemc/mods/sodium/api/vertex/buffer";
import { $VertexFormat } from "@package/com/mojang/blaze3d/vertex";

declare module "@package/net/caffeinemc/mods/sodium/client/render/vertex/buffer" {
    export class $BufferBuilderExtension {
    }
    export interface $BufferBuilderExtension extends $VertexBufferWriter {
        sodium$duplicateVertex(): void;
        sodium$getVertexFormat(): $VertexFormat;
        canUseIntrinsics(arg0: $VertexFormat): boolean;
    }
}
