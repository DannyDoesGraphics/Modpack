import { $Level_ } from "@package/net/minecraft/world/level";
import { $SuperByteBuffer } from "@package/net/createmod/catnip/render";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $BlockEntityRenderer, $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $AABB, $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/foundation/blockEntity/renderer" {
    export class $ColoredOverlayBlockEntityRenderer<T extends $BlockEntity> extends $SafeBlockEntityRenderer<T> {
        static render(arg0: $SuperByteBuffer, arg1: number, arg2: number): $SuperByteBuffer;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $SmartBlockEntityRenderer<T extends $SmartBlockEntity> extends $SafeBlockEntityRenderer<T> {
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $SafeBlockEntityRenderer<T extends $BlockEntity> implements $BlockEntityRenderer<T> {
        shouldCullItem(arg0: $Vec3_, arg1: $Level_): boolean;
        localvar$ggg000$sable$projectItemPos(arg0: $Vec3_): $Vec3;
        getRenderBoundingBox(arg0: T): $AABB;
        isInvalid(arg0: T): boolean;
        render(arg0: T, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        getViewDistance(): number;
        shouldRenderOffScreen(arg0: T): boolean;
        shouldRender(arg0: T, arg1: $Vec3_): boolean;
        constructor();
        get viewDistance(): number;
    }
}
