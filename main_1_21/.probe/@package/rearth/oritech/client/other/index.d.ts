import { $BlockAndTintGetter } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $PoseStack, $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $Camera } from "@package/net/minecraft/client";
import { $List } from "@package/java/util";
import { $ModelBlockRenderer } from "@package/net/minecraft/client/renderer/block";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/rearth/oritech/client/other" {
    export class $OreFinderRenderer {
        static doRender(arg0: $PoseStack, arg1: $Camera, arg2: $MultiBufferSource_): void;
        static tesselateWithoutAO(arg0: $ModelBlockRenderer, arg1: $BlockAndTintGetter, arg2: $BakedModel, arg3: $BlockState_, arg4: $BlockPos_, arg5: $PoseStack, arg6: $VertexConsumer, arg7: boolean, arg8: $RandomSource, arg9: number, arg10: number): void;
        static renderedBlocks: $List<$BlockPos>;
        static receivedAt: number;
        constructor();
    }
}
