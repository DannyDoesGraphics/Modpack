import { $Level_ } from "@package/net/minecraft/world/level";
import { $MEChestBlockEntity, $DriveBlockEntity, $SkyStoneTankBlockEntity, $SkyChestBlockEntity } from "@package/appeng/blockentity/storage";
import { $DelegateBakedModel } from "@package/appeng/client/render";
import { $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $Renderable_ } from "@package/appeng/client/render/renderable";
import { $ModelLayerLocation } from "@package/net/minecraft/client/model/geom";
import { $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $Material, $ModelResourceLocation } from "@package/net/minecraft/client/resources/model";
import { $IChestOrDrive } from "@package/appeng/api/implementations/blockentities";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $LayerDefinition } from "@package/net/minecraft/client/model/geom/builders";
import { $ChargerBlockEntity, $CrankBlockEntity, $InscriberBlockEntity } from "@package/appeng/blockentity/misc";
import { $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $BlockEntityRendererProvider, $BlockEntityRendererProvider$Context, $BlockEntityRenderer } from "@package/net/minecraft/client/renderer/blockentity";
import { $AEBaseBlockEntity } from "@package/appeng/blockentity";
import { $Vec3_, $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as spatial from "@package/appeng/client/render/tesr/spatial";

declare module "@package/appeng/client/render/tesr" {
    export class $SkyStoneTankBlockEntityRenderer implements $BlockEntityRenderer<$SkyStoneTankBlockEntity> {
        static drawFluidInTank(arg0: $BlockEntity, arg1: $PoseStack, arg2: $MultiBufferSource_, arg3: $FluidStack_, arg4: number): void;
        static drawFluidInTank(arg0: $Level_, arg1: $BlockPos_, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: $FluidStack_, arg5: number): void;
        render(arg0: $SkyStoneTankBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        getViewDistance(): number;
        shouldRenderOffScreen(arg0: $SkyStoneTankBlockEntity): boolean;
        shouldRender(arg0: $SkyStoneTankBlockEntity, arg1: $Vec3_): boolean;
        getRenderBoundingBox(arg0: $SkyStoneTankBlockEntity): $AABB;
        static FULL_LIGHT: number;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $ChestBlockEntityRenderer implements $BlockEntityRenderer<$MEChestBlockEntity> {
        render(arg0: $MEChestBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        getViewDistance(): number;
        shouldRenderOffScreen(arg0: $MEChestBlockEntity): boolean;
        shouldRender(arg0: $MEChestBlockEntity, arg1: $Vec3_): boolean;
        getRenderBoundingBox(arg0: $MEChestBlockEntity): $AABB;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $ChestBlockEntityRenderer$FaceRotatingModel extends $DelegateBakedModel {
    }
    export class $InscriberTESR implements $BlockEntityRenderer<$InscriberBlockEntity> {
        render(arg0: $InscriberBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        getViewDistance(): number;
        shouldRenderOffScreen(arg0: $InscriberBlockEntity): boolean;
        shouldRender(arg0: $InscriberBlockEntity, arg1: $Vec3_): boolean;
        getRenderBoundingBox(arg0: $InscriberBlockEntity): $AABB;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $DriveLedBlockEntityRenderer implements $BlockEntityRenderer<$DriveBlockEntity> {
        render(arg0: $DriveBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        getViewDistance(): number;
        shouldRenderOffScreen(arg0: $DriveBlockEntity): boolean;
        shouldRender(arg0: $DriveBlockEntity, arg1: $Vec3_): boolean;
        getRenderBoundingBox(arg0: $DriveBlockEntity): $AABB;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $CrankRenderer implements $BlockEntityRenderer<$CrankBlockEntity> {
        render(arg0: $CrankBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        getViewDistance(): number;
        shouldRenderOffScreen(arg0: $CrankBlockEntity): boolean;
        shouldRender(arg0: $CrankBlockEntity, arg1: $Vec3_): boolean;
        getRenderBoundingBox(arg0: $CrankBlockEntity): $AABB;
        static BASE_MODEL: $ModelResourceLocation;
        static HANDLE_MODEL: $ModelResourceLocation;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $ChargerBlockEntityRenderer {
        static FACTORY: $BlockEntityRendererProvider<$ChargerBlockEntity>;
    }
    export class $SkyChestTESR implements $BlockEntityRenderer<$SkyChestBlockEntity> {
        static createSingleBodyLayer(): $LayerDefinition;
        getRenderBoundingBox(arg0: $SkyChestBlockEntity): $AABB;
        render(arg0: $SkyChestBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        getViewDistance(): number;
        shouldRenderOffScreen(arg0: $SkyChestBlockEntity): boolean;
        shouldRender(arg0: $SkyChestBlockEntity, arg1: $Vec3_): boolean;
        static TEXTURE_STONE: $Material;
        static TEXTURE_BLOCK: $Material;
        static MODEL_LAYER: $ModelLayerLocation;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $ModularTESR<T extends $AEBaseBlockEntity> implements $BlockEntityRenderer<T> {
        render(arg0: T, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        getViewDistance(): number;
        shouldRenderOffScreen(arg0: T): boolean;
        shouldRender(arg0: T, arg1: $Vec3_): boolean;
        getRenderBoundingBox(arg0: T): $AABB;
        constructor(...arg0: $Renderable_<T>[]);
        get viewDistance(): number;
    }
    export class $CellLedRenderer {
        static renderLed(arg0: $IChestOrDrive, arg1: number, arg2: $VertexConsumer, arg3: $PoseStack, arg4: number): void;
        static RENDER_LAYER: $RenderType;
    }
}
