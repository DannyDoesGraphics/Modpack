import { $VertexFormat, $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $MemoryStack } from "@package/org/lwjgl/system";

declare module "@package/net/caffeinemc/mods/sodium/api/vertex/buffer" {
    export class $VertexBufferWriter {
        static of(arg0: $VertexConsumer): $VertexBufferWriter;
        static copyInto(arg0: $VertexBufferWriter_, arg1: $MemoryStack, arg2: number, arg3: number, arg4: $VertexFormat): void;
        static tryOf(arg0: $VertexConsumer): $VertexBufferWriter;
        static tryOf(arg0: $VertexConsumer, arg1: $VertexFormat): $VertexBufferWriter;
    }
    export interface $VertexBufferWriter {
        push(arg0: $MemoryStack, arg1: number, arg2: number, arg3: $VertexFormat): void;
        canUseIntrinsics(arg0: $VertexFormat): boolean;
        canUseIntrinsics(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $VertexBufferWriter}.
     */
    export type $VertexBufferWriter_ = ((arg0: $MemoryStack, arg1: number, arg2: number, arg3: $VertexFormat) => void);
}
