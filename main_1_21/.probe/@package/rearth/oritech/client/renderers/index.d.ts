import { $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $BlackHoleBlockEntity, $AcceleratorControllerBlockEntity } from "@package/rearth/oritech/block/entity/accelerator";
import { $AutoGlowingGeoLayer, $GeoRenderLayer } from "@package/software/bernie/geckolib/renderer/layer";
import { $Camera } from "@package/net/minecraft/client";
import { $HangarDoorBlockEntity } from "@package/rearth/oritech/block/entity/decorative";
import { $List_ } from "@package/java/util";
import { $AnimationState } from "@package/software/bernie/geckolib/animation";
import { $DynamicGeoBlockRenderer } from "@package/software/bernie/geckolib/renderer/specialty";
import { $HumanoidModel$ArmPose } from "@package/net/minecraft/client/model";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $TaintedRefineryBlockEntity, $RefineryBlockEntity } from "@package/rearth/oritech/block/entity/processing";
import { $BigSolarPanelEntity } from "@package/rearth/oritech/block/entity/generators";
import { $IBlockEntityRendererExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $BlockEntityRenderer } from "@package/net/minecraft/client/renderer/blockentity";
import { $GeoBone, $BakedGeoModel_ } from "@package/software/bernie/geckolib/cache/object";
import { $FrameInteractionBlockEntity } from "@package/rearth/oritech/block/base/entity";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $LaserArmBlockEntity, $ChargerBlockEntity, $PowerPoleEntity, $ShrinkerBlockEntity } from "@package/rearth/oritech/block/entity/interaction";
import { $Record, $Object } from "@package/java/lang";
import { $ExoArmorItem } from "@package/rearth/oritech/item/tools/armor";
import { $SpawnerControllerBlockEntity } from "@package/rearth/oritech/block/entity/arcane";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $EntityRendererProvider$Context, $EntityRenderDispatcher } from "@package/net/minecraft/client/renderer/entity";
import { $PortalEntity } from "@package/rearth/oritech/util";
import { $ItemStack_, $ItemDisplayContext_ } from "@package/net/minecraft/world/item";
import { $DefaultedBlockGeoModel, $GeoModel, $DefaultedItemGeoModel } from "@package/software/bernie/geckolib/model";
import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $PromethiumPickaxeItem } from "@package/rearth/oritech/item/tools/harvesting";
import { $SmallTankEntity, $UnstableContainerBlockEntity } from "@package/rearth/oritech/block/entity/storage";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $VertexConsumer, $PoseStack, $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $GeoItemRenderer, $GeoBlockRenderer, $GeoRenderer, $GeoEntityRenderer, $GeoArmorRenderer } from "@package/software/bernie/geckolib/renderer";
import { $ItemPipeInterfaceEntity } from "@package/rearth/oritech/block/entity/pipes";
import { $Vec3, $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $PortableLaserItem } from "@package/rearth/oritech/item/tools";
import { $Vector2f, $Matrix4f } from "@package/org/joml";
export * as util from "@package/rearth/oritech/client/renderers/util";

declare module "@package/rearth/oritech/client/renderers" {
    export class $MachineGantryRenderer implements $BlockEntityRenderer<$FrameInteractionBlockEntity>, $IBlockEntityRendererExtension<any> {
        getViewDistance(): number;
        shouldRenderOffScreen(arg0: $FrameInteractionBlockEntity): boolean;
        getRenderBoundingBox(arg0: $BlockEntity): $AABB;
        render(arg0: $FrameInteractionBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shouldRender(arg0: $FrameInteractionBlockEntity, arg1: $Vec3_): boolean;
        constructor();
        get viewDistance(): number;
    }
    export class $HangarDoorRenderer extends $GeoBlockRenderer<$HangarDoorBlockEntity> {
        getRenderBoundingBox(arg0: $HangarDoorBlockEntity): $AABB;
        constructor(arg0: string);
    }
    export class $ChargerBlockRenderer implements $BlockEntityRenderer<$ChargerBlockEntity> {
        render(arg0: $ChargerBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        getViewDistance(): number;
        shouldRenderOffScreen(arg0: $ChargerBlockEntity): boolean;
        shouldRender(arg0: $ChargerBlockEntity, arg1: $Vec3_): boolean;
        getRenderBoundingBox(arg0: $ChargerBlockEntity): $AABB;
        constructor();
        get viewDistance(): number;
    }
    export class $SmallTankRenderer implements $BlockEntityRenderer<$SmallTankEntity> {
        render(arg0: $SmallTankEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        static drawQuad(arg0: $Direction_, arg1: $VertexConsumer, arg2: $Matrix4f, arg3: $PoseStack$Pose, arg4: $TextureAtlasSprite, arg5: number, arg6: number, arg7: number): void;
        getViewDistance(): number;
        shouldRenderOffScreen(arg0: $SmallTankEntity): boolean;
        shouldRender(arg0: $SmallTankEntity, arg1: $Vec3_): boolean;
        getRenderBoundingBox(arg0: $SmallTankEntity): $AABB;
        constructor();
        get viewDistance(): number;
    }
    export class $LaserArmRenderer<T extends $LaserArmBlockEntity> extends $GeoBlockRenderer<T> implements $IBlockEntityRendererExtension<any> {
        static idToOffset(arg0: $BlockPos_, arg1: number, arg2: $Level_, arg3: $BlockPos_): $Vec3;
        postRender(arg0: $PoseStack, arg1: $Object, arg2: $BakedGeoModel_, arg3: $MultiBufferSource_, arg4: $VertexConsumer, arg5: boolean, arg6: number, arg7: number, arg8: number, arg9: number): void;
        shouldRenderOffScreen(arg0: $Object): boolean;
        static lerp(arg0: $Vec3_, arg1: $Vec3_, arg2: number): $Vec3;
        static lerp(arg0: number, arg1: number, arg2: number): number;
        static GLOW_COLOR_START: number;
        static CORE_COLOR_START: number;
        static CORE_COLOR_END: number;
        static BEAM_TEXTURE: $ResourceLocation;
        static GLOW_COLOR_END: number;
        constructor(arg0: string);
    }
    export class $SolarPanelRenderer<T extends $BigSolarPanelEntity> extends $GeoBlockRenderer<T> {
        constructor(arg0: string);
    }
    export class $BlackHoleRenderer implements $BlockEntityRenderer<$BlackHoleBlockEntity> {
        render(arg0: $BlackHoleBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        getViewDistance(): number;
        shouldRenderOffScreen(arg0: $BlackHoleBlockEntity): boolean;
        shouldRender(arg0: $BlackHoleBlockEntity, arg1: $Vec3_): boolean;
        getRenderBoundingBox(arg0: $BlackHoleBlockEntity): $AABB;
        constructor();
        get viewDistance(): number;
    }
    export class $LaserArmModel<T extends $LaserArmBlockEntity> extends $MachineModel<T> {
        setCustomAnimations(arg0: T, arg1: number, arg2: $AnimationState<T>): void;
        static lerp(arg0: number, arg1: number, arg2: number): number;
        static determinant(arg0: $Vector2f, arg1: $Vector2f): number;
        constructor(arg0: string);
    }
    export class $LaserArmModel$ModelRenderData {
    }
    export class $RefineryRenderer$VisualTankHeights {
    }
    export class $PortalEntityRenderer$PortalRenderLayer extends $GeoRenderLayer<$PortalEntity> {
        renderForBone(arg0: $PoseStack, arg1: $PortalEntity, arg2: $GeoBone, arg3: $RenderType, arg4: $MultiBufferSource_, arg5: $VertexConsumer, arg6: number, arg7: number, arg8: number): void;
        constructor(arg0: $GeoRenderer<$PortalEntity>);
    }
    export class $PortalEntityRenderer extends $GeoEntityRenderer<$PortalEntity> {
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $MachineRenderer<T extends $BlockEntity> extends $GeoBlockRenderer<T> {
        constructor(arg0: string, arg1: boolean);
        constructor(arg0: string);
    }
    export class $PowerPoleCableRenderer implements $BlockEntityRenderer<$PowerPoleEntity>, $IBlockEntityRendererExtension<any> {
        getViewDistance(): number;
        shouldRenderOffScreen(arg0: $PowerPoleEntity): boolean;
        getRenderBoundingBox(arg0: $BlockEntity): $AABB;
        render(arg0: $PowerPoleEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shouldRender(arg0: $PowerPoleEntity, arg1: $Vec3_): boolean;
        static CABLE_SEGMENT_COUNT: number;
        static CABLE_TEXTURE: $ResourceLocation;
        constructor();
        get viewDistance(): number;
    }
    export class $PortableLaserRenderer extends $GeoItemRenderer<$PortableLaserItem> {
        postRender(arg0: $PoseStack, arg1: $PortableLaserItem, arg2: $BakedGeoModel_, arg3: $MultiBufferSource_, arg4: $VertexConsumer, arg5: boolean, arg6: number, arg7: number, arg8: number, arg9: number): void;
        constructor(arg0: string);
    }
    export class $TaintedRefineryRenderer<T extends $TaintedRefineryBlockEntity> extends $GeoBlockRenderer<T> {
        postRender(arg0: $PoseStack, arg1: T, arg2: $BakedGeoModel_, arg3: $MultiBufferSource_, arg4: $VertexConsumer, arg5: boolean, arg6: number, arg7: number, arg8: number, arg9: number): void;
        getRenderBoundingBox(arg0: T): $AABB;
        constructor(arg0: string);
    }
    export class $AcceleratorControllerRenderer implements $BlockEntityRenderer<$AcceleratorControllerBlockEntity>, $IBlockEntityRendererExtension<any> {
        getViewDistance(): number;
        shouldRenderOffScreen(arg0: $AcceleratorControllerBlockEntity): boolean;
        getRenderBoundingBox(arg0: $BlockEntity): $AABB;
        render(arg0: $AcceleratorControllerBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shouldRender(arg0: $AcceleratorControllerBlockEntity, arg1: $Vec3_): boolean;
        constructor();
        get viewDistance(): number;
    }
    export class $SmallTankItemRenderer {
        loadModels(): void;
        render(arg0: $ItemStack_, arg1: $ItemDisplayContext_, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        constructor(arg0: $ResourceLocation_);
    }
    export class $ShrinkerBlockRenderer extends $DynamicGeoBlockRenderer<$ShrinkerBlockEntity> implements $IBlockEntityRendererExtension<any> {
        updateAnimatedTextureFrame(arg0: $ShrinkerBlockEntity): void;
        constructor(arg0: string);
    }
    export class $RefineryRenderer<T extends $RefineryBlockEntity> extends $GeoBlockRenderer<T> {
        postRender(arg0: $PoseStack, arg1: T, arg2: $BakedGeoModel_, arg3: $MultiBufferSource_, arg4: $VertexConsumer, arg5: boolean, arg6: number, arg7: number, arg8: number, arg9: number): void;
        getRenderBoundingBox(arg0: T): $AABB;
        constructor(arg0: string);
    }
    export class $PortableLaserModel extends $DefaultedItemGeoModel<$PortableLaserItem> {
        constructor(arg0: $ResourceLocation_);
    }
    export class $PromethiumToolRenderer extends $GeoItemRenderer<$PromethiumPickaxeItem> {
        constructor(arg0: string);
        constructor(arg0: string, arg1: boolean);
    }
    export class $MachineModel<T extends $BlockEntity> extends $DefaultedBlockGeoModel<T> {
        getBaseTexturePath(arg0: T): $ResourceLocation;
        getTextureResource(arg0: T): $ResourceLocation;
        constructor(arg0: string);
    }
    export class $PromethiumToolModel extends $DefaultedItemGeoModel<$PromethiumPickaxeItem> {
        constructor(arg0: $ResourceLocation_);
    }
    export class $UnstableContainerRenderer extends $MachineRenderer<$UnstableContainerBlockEntity> {
        postRender(arg0: $PoseStack, arg1: $UnstableContainerBlockEntity, arg2: $BakedGeoModel_, arg3: $MultiBufferSource_, arg4: $VertexConsumer, arg5: boolean, arg6: number, arg7: number, arg8: number, arg9: number): void;
        constructor(arg0: string);
    }
    export class $SpawnerControllerRenderer implements $BlockEntityRenderer<$SpawnerControllerBlockEntity> {
        render(arg0: $SpawnerControllerBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        getViewDistance(): number;
        shouldRenderOffScreen(arg0: $SpawnerControllerBlockEntity): boolean;
        shouldRender(arg0: $SpawnerControllerBlockEntity, arg1: $Vec3_): boolean;
        getRenderBoundingBox(arg0: $SpawnerControllerBlockEntity): $AABB;
        constructor();
        get viewDistance(): number;
    }
    export class $ExosuitArmorRenderer extends $GeoArmorRenderer<$ExoArmorItem> {
        scaleHead: boolean;
        young: boolean;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        swimAmount: number;
        head: $ModelPart;
        leftArm: $ModelPart;
        babyYHeadOffset: number;
        static TOOT_HORN_YROT_BASE: number;
        hat: $ModelPart;
        bodyYOffset: number;
        static TOOT_HORN_XROT_BASE: number;
        leftArmPose: $HumanoidModel$ArmPose;
        attackTime: number;
        babyZHeadOffset: number;
        babyHeadScale: number;
        static LEGGINGS_OVERLAY_SCALE: number;
        static HAT_OVERLAY_SCALE: number;
        crouching: boolean;
        rightLeg: $ModelPart;
        babyBodyScale: number;
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_);
    }
    export class $ItemPipeTransferRenderer implements $BlockEntityRenderer<$ItemPipeInterfaceEntity> {
        getViewDistance(): number;
        shouldRenderOffScreen(arg0: $ItemPipeInterfaceEntity): boolean;
        render(arg0: $ItemPipeInterfaceEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        shouldRender(arg0: $ItemPipeInterfaceEntity, arg1: $Vec3_): boolean;
        getRenderBoundingBox(arg0: $ItemPipeInterfaceEntity): $AABB;
        constructor();
        get viewDistance(): number;
    }
    export class $BlockOutlineRenderer {
        static render(arg0: $ClientLevel, arg1: $Camera, arg2: $PoseStack, arg3: $MultiBufferSource_): void;
        constructor();
    }
    export class $MachineRenderer$CustomGlowingGeoLayer<T extends $BlockEntity> extends $AutoGlowingGeoLayer<T> {
        constructor(arg0: $GeoRenderer<T>);
    }
    export class $PortalEntityModel extends $GeoModel<$PortalEntity> {
        getAnimationResource(arg0: $PortalEntity): $ResourceLocation;
        getTextureResource(arg0: $PortalEntity): $ResourceLocation;
        getModelResource(arg0: $PortalEntity): $ResourceLocation;
        constructor();
    }
    export class $AcceleratorControllerRenderer$RenderedLine extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $AcceleratorControllerRenderer$RenderedLine}.
     */
    export type $AcceleratorControllerRenderer$RenderedLine_ = { startedAt?: number, positions?: $List_<$Vec3_>,  } | [startedAt?: number, positions?: $List_<$Vec3_>, ];
    export class $SolarPanelModel<T extends $BigSolarPanelEntity> extends $DefaultedBlockGeoModel<T> {
        setCustomAnimations(arg0: T, arg1: number, arg2: $AnimationState<T>): void;
        constructor(arg0: string);
    }
}
