import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $PoseStack, $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";

declare module "@package/dev/ryanhcode/sable/neoforge/mixin/compatibility/create/frogports" {
    export class $ChainConveyorShapeAccessor {
    }
    export interface $ChainConveyorShapeAccessor {
        invokeDrawOutline(arg0: $BlockPos_, arg1: $PoseStack, arg2: $VertexConsumer): void;
    }
    /**
     * Values that may be interpreted as {@link $ChainConveyorShapeAccessor}.
     */
    export type $ChainConveyorShapeAccessor_ = ((arg0: $BlockPos, arg1: $PoseStack, arg2: $VertexConsumer) => void);
}
