import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $BasicUnbakedModel } from "@package/appeng/client/render";
import { $BlockOrientation_ } from "@package/appeng/api/orientation";
import { $ModelState, $BakedModel, $ModelBaker, $Material, $UnbakedModel } from "@package/net/minecraft/client/resources/model";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $List, $EnumSet, $EnumMap, $List_, $Collection } from "@package/java/util";
import { $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $RandomSource } from "@package/net/minecraft/util";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Supplier_, $Function_ } from "@package/java/util/function";
import { $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $ChunkRenderTypeSet } from "@package/net/neoforged/neoforge/client";
import { $BlockPos, $Holder, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $MutableQuadView, $RenderContext$QuadTransform, $Mesh } from "@package/appeng/thirdparty/fabric";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Enum, $Record, $Object } from "@package/java/lang";
import { $BlockAndTintGetter, $ClipContext, $ClipBlockStateContext, $LightLayer_, $ChunkPos, $ColorResolver_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemDisplayContext_ } from "@package/net/minecraft/world/item";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $ItemOverrides, $BakedQuad, $ItemTransforms } from "@package/net/minecraft/client/renderer/block/model";
import { $TextureSheetParticle } from "@package/net/minecraft/client/particle";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $IPartModel } from "@package/appeng/api/parts";
import { $AEColor_, $AECableType_, $AEColor, $AECableType } from "@package/appeng/api/util";
import { $ModelData, $ModelProperty } from "@package/net/neoforged/neoforge/client/model/data";
import { $IDynamicBakedModel } from "@package/net/neoforged/neoforge/client/model";
import { $Stream } from "@package/java/util/stream";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $RenderContext } from "@package/net/fabricmc/fabric/api/renderer/v1/render";
import { $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $AABB_, $AABB, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/appeng/client/render/cablebus" {
    export class $P2PTunnelFrequencyModel implements $BasicUnbakedModel {
        bake(arg0: $ModelBaker, arg1: $Function_<$Material, $TextureAtlasSprite>, arg2: $ModelState): $BakedModel;
        resolveParents(arg0: $Function_<$ResourceLocation, $UnbakedModel>): void;
        getDependencies(): $Collection<$ResourceLocation>;
        constructor();
        get dependencies(): $Collection<$ResourceLocation>;
    }
    export class $CableBusModel implements $BasicUnbakedModel {
        resolveParents(arg0: $Function_<$ResourceLocation, $UnbakedModel>): void;
        getDependencies(): $Collection<$ResourceLocation>;
        bake(arg0: $ModelBaker, arg1: $Function_<$Material, $TextureAtlasSprite>, arg2: $ModelState): $BakedModel;
        static TRANSLUCENT_FACADE_MODEL: $ResourceLocation;
        constructor();
        get dependencies(): $Collection<$ResourceLocation>;
    }
    export class $CableBusBakedModel$FacadeModelData extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $CableBusBakedModel$FacadeModelData}.
     */
    export type $CableBusBakedModel$FacadeModelData_ = { facadeData?: $EnumMap<$Direction_, $ModelData>, level?: $BlockAndTintGetter,  } | [facadeData?: $EnumMap<$Direction_, $ModelData>, level?: $BlockAndTintGetter, ];
    export class $QuadRotator implements $RenderContext$QuadTransform {
        static get(arg0: $BlockOrientation_): $RenderContext$QuadTransform;
        static get(arg0: $Direction_, arg1: number): $RenderContext$QuadTransform;
        transform(arg0: $MutableQuadView): boolean;
        static NULL_TRANSFORM: $RenderContext$QuadTransform;
    }
    export class $SmartCableTextures {
        getOddTextureForChannels(arg0: number): $TextureAtlasSprite;
        getEvenTextureForChannels(arg0: number): $TextureAtlasSprite;
        getOddTextureForDenseChannels(arg0: number): $TextureAtlasSprite;
        getEvenTextureForDenseChannels(arg0: number): $TextureAtlasSprite;
        static SMART_CHANNELS_TEXTURES: $Material[];
        static DENSE_SMART_CHANNELS_TEXTURES: $Material[];
        constructor(arg0: $Function_<$Material, $TextureAtlasSprite>);
    }
    export class $CableBusBakedModel implements $IDynamicBakedModel {
        getParticleTextures(arg0: $CableBusRenderState): $List<$TextureAtlasSprite>;
        getModelData(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ModelData): $ModelData;
        getRenderTypes(arg0: $BlockState_, arg1: $RandomSource, arg2: $ModelData): $ChunkRenderTypeSet;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource, arg3: $ModelData, arg4: $RenderType): $List<$BakedQuad>;
        isCustomRenderer(): boolean;
        getTransforms(): $ItemTransforms;
        getOverrides(): $ItemOverrides;
        isGui3d(): boolean;
        usesBlockLight(): boolean;
        getParticleIcon(): $TextureAtlasSprite;
        useAmbientOcclusion(): boolean;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource): $List<$BakedQuad>;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        getRenderTypes(arg0: $ItemStack_, arg1: boolean): $List<$RenderType>;
        getRenderPasses(arg0: $ItemStack_, arg1: boolean): $List<$BakedModel>;
        applyTransform(arg0: $ItemDisplayContext_, arg1: $PoseStack, arg2: boolean): $BakedModel;
        getParticleIcon(arg0: $ModelData): $TextureAtlasSprite;
        useAmbientOcclusion(arg0: $BlockState_, arg1: $ModelData, arg2: $RenderType): $TriState;
        isVanillaAdapter(): boolean;
        get customRenderer(): boolean;
        get transforms(): $ItemTransforms;
        get overrides(): $ItemOverrides;
        get gui3d(): boolean;
        get vanillaAdapter(): boolean;
    }
    export class $P2PTunnelFrequencyModelData {
        static FREQUENCY: $ModelProperty<number>;
        constructor();
    }
    export class $CableBuilder {
    }
    export class $FacadeBlockAccess implements $BlockAndTintGetter {
        getBlockTint(arg0: $BlockPos_, arg1: $ColorResolver_): number;
        getShade(arg0: $Direction_, arg1: boolean): number;
        getLightEngine(): $LevelLightEngine;
        getBlockState(arg0: $BlockPos_): $BlockState;
        getBlockEntity(arg0: $BlockPos_): $BlockEntity;
        getFluidState(arg0: $BlockPos_): $FluidState;
        getMinBuildHeight(): number;
        getHeight(): number;
        canSeeSky(arg0: $BlockPos_): boolean;
        getRawBrightness(arg0: $BlockPos_, arg1: number): number;
        getBrightness(arg0: $LightLayer_, arg1: $BlockPos_): number;
        isBlockInLine(arg0: $ClipBlockStateContext): $BlockHitResult;
        clipWithInteractionOverride(arg0: $Vec3_, arg1: $Vec3_, arg2: $BlockPos_, arg3: $VoxelShape, arg4: $BlockState_): $BlockHitResult;
        getMaxLightLevel(): number;
        getBlockStates(arg0: $AABB_): $Stream<$BlockState>;
        getLightEmission(arg0: $BlockPos_): number;
        getBlockFloorHeight(arg0: $VoxelShape, arg1: $Supplier_<$VoxelShape>): number;
        getBlockFloorHeight(arg0: $BlockPos_): number;
        getBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $BlockEntityType_<T>): (T) | undefined;
        clip(arg0: $ClipContext): $BlockHitResult;
        getShade(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
        getMaxBuildHeight(): number;
        getSectionsCount(): number;
        getMaxSection(): number;
        getMinSection(): number;
        isOutsideBuildHeight(arg0: number): boolean;
        isOutsideBuildHeight(arg0: $BlockPos_): boolean;
        getSectionIndex(arg0: number): number;
        getSectionIndexFromSectionY(arg0: number): number;
        getSectionYFromSectionIndex(arg0: number): number;
        getModelData(arg0: $BlockPos_): $ModelData;
        getAuxLightManager(arg0: $ChunkPos): $AuxiliaryLightManager;
        getAuxLightManager(arg0: $BlockPos_): $AuxiliaryLightManager;
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        hasBiomes(): boolean;
        getBiomeFabric(arg0: $BlockPos_): $Holder<$Biome>;
        constructor(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $Direction_, arg3: $BlockState_);
        get lightEngine(): $LevelLightEngine;
        get minBuildHeight(): number;
        get height(): number;
        get maxLightLevel(): number;
        get maxBuildHeight(): number;
        get sectionsCount(): number;
        get maxSection(): number;
        get minSection(): number;
    }
    export class $FacadeBuilder {
        getFacadeMesh(arg0: $CableBusRenderState, arg1: $Supplier_<$RandomSource>, arg2: $BlockAndTintGetter, arg3: $EnumMap<$Direction_, $ModelData>, arg4: $RenderType): $Mesh;
        buildFacadeItemQuads(arg0: $ItemStack_, arg1: $Direction_): $Mesh;
        static THIN_FACADE_BOXES: $AABB[];
        static THIN_THICKNESS: number;
        constructor(arg0: $ModelBaker, arg1: $BakedModel);
    }
    export class $FacadeRenderState {
        getSourceBlock(): $BlockState;
        isTransparent(): boolean;
        constructor(arg0: $BlockState_, arg1: boolean);
        get sourceBlock(): $BlockState;
        get transparent(): boolean;
    }
    export class $CubeBuilder$UvVector {
    }
    export class $CubeBuilder {
        setTextures(arg0: $TextureAtlasSprite, arg1: $TextureAtlasSprite, arg2: $TextureAtlasSprite, arg3: $TextureAtlasSprite, arg4: $TextureAtlasSprite, arg5: $TextureAtlasSprite): void;
        setColorRGB(arg0: number, arg1: number, arg2: number): void;
        setColorRGB(arg0: number): void;
        setFlipU(arg0: $Direction_, arg1: boolean): void;
        setFlipV(arg0: $Direction_, arg1: boolean): void;
        setDrawFaces(arg0: $EnumSet<$Direction_>): void;
        setEmissiveMaterial(arg0: boolean): void;
        setCustomUv(arg0: $Direction_, arg1: number, arg2: number, arg3: number, arg4: number): void;
        setUvRotation(arg0: $Direction_, arg1: number): void;
        addCube(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        setTexture(arg0: $Direction_, arg1: $TextureAtlasSprite): void;
        setTexture(arg0: $TextureAtlasSprite): void;
        getOutput(): $List<$BakedQuad>;
        setColor(arg0: number): void;
        addQuad(arg0: $Direction_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        constructor(arg0: $List_<$BakedQuad>);
        constructor();
        set drawFaces(value: $EnumSet<$Direction_>);
        set emissiveMaterial(value: boolean);
        get output(): $List<$BakedQuad>;
        set color(value: number);
    }
    export class $CableBusRenderState {
        getBoundingBoxes(): $List<$AABB>;
        getAttachmentConnections(): $EnumMap<$Direction, number>;
        getPartModelData(): $EnumMap<$Direction, $ModelData>;
        getConnectionTypes(): $EnumMap<$Direction, $AECableType>;
        getCoreType(): $CableCoreType;
        getCableBusAdjacent(): $EnumSet<$Direction>;
        setCoreType(arg0: $CableCoreType_): void;
        setCableType(arg0: $AECableType_): void;
        setCableColor(arg0: $AEColor_): void;
        setConnectionTypes(arg0: $EnumMap<$Direction_, $AECableType_>): void;
        setCableBusAdjacent(arg0: $EnumSet<$Direction_>): void;
        getPos(): $BlockPos;
        getCableColor(): $AEColor;
        setChannelsOnSide(arg0: $EnumMap<$Direction_, number>): void;
        getChannelsOnSide(): $EnumMap<$Direction, number>;
        getFacades(): $EnumMap<$Direction, $FacadeRenderState>;
        getCableType(): $AECableType;
        setPos(arg0: $BlockPos_): void;
        getAttachments(): $EnumMap<$Direction, $IPartModel>;
        static PROPERTY: $ModelProperty<$CableBusRenderState>;
        constructor();
        get boundingBoxes(): $List<$AABB>;
        get attachmentConnections(): $EnumMap<$Direction, number>;
        get partModelData(): $EnumMap<$Direction, $ModelData>;
        get facades(): $EnumMap<$Direction, $FacadeRenderState>;
        get attachments(): $EnumMap<$Direction, $IPartModel>;
    }
    export class $CableBusBreakingParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(arg0: $ClientLevel, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $TextureAtlasSprite);
        constructor(arg0: $ClientLevel, arg1: number, arg2: number, arg3: number, arg4: $TextureAtlasSprite);
    }
    export class $CableCoreType extends $Enum<$CableCoreType> {
        static fromCableType(arg0: $AECableType_): $CableCoreType;
        static values(): $CableCoreType[];
        static valueOf(arg0: string): $CableCoreType;
        getTexture(arg0: $AEColor_): $Material;
        static GLASS: $CableCoreType;
        static DENSE: $CableCoreType;
        static COVERED: $CableCoreType;
    }
    /**
     * Values that may be interpreted as {@link $CableCoreType}.
     */
    export type $CableCoreType_ = "glass" | "covered" | "dense";
    export class $P2PTunnelFrequencyBakedModel implements $IDynamicBakedModel {
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource, arg3: $ModelData, arg4: $RenderType): $List<$BakedQuad>;
        isCustomRenderer(): boolean;
        getOverrides(): $ItemOverrides;
        isGui3d(): boolean;
        usesBlockLight(): boolean;
        getParticleIcon(): $TextureAtlasSprite;
        useAmbientOcclusion(): boolean;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource): $List<$BakedQuad>;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        /**
         * @deprecated
         */
        getTransforms(): $ItemTransforms;
        getModelData(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ModelData): $ModelData;
        getRenderTypes(arg0: $BlockState_, arg1: $RandomSource, arg2: $ModelData): $ChunkRenderTypeSet;
        getRenderTypes(arg0: $ItemStack_, arg1: boolean): $List<$RenderType>;
        getRenderPasses(arg0: $ItemStack_, arg1: boolean): $List<$BakedModel>;
        applyTransform(arg0: $ItemDisplayContext_, arg1: $PoseStack, arg2: boolean): $BakedModel;
        getParticleIcon(arg0: $ModelData): $TextureAtlasSprite;
        useAmbientOcclusion(arg0: $BlockState_, arg1: $ModelData, arg2: $RenderType): $TriState;
        isVanillaAdapter(): boolean;
        constructor(arg0: $TextureAtlasSprite);
        get customRenderer(): boolean;
        get overrides(): $ItemOverrides;
        get gui3d(): boolean;
        get transforms(): $ItemTransforms;
        get vanillaAdapter(): boolean;
    }
}
