import { $BlockAndTintGetter } from "@package/net/minecraft/world/level";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $BasicUnbakedModel, $DelegateBakedModel } from "@package/appeng/client/render";
import { $ItemDisplayContext_, $Item_, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ItemTransforms, $ItemOverrides, $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $Material, $UnbakedModel, $ModelState, $BakedModel, $ModelBaker } from "@package/net/minecraft/client/resources/model";
import { $List, $Map_, $Collection } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $ModelData, $ModelData$Builder, $ModelProperty } from "@package/net/neoforged/neoforge/client/model/data";
import { $Supplier_, $Function_ } from "@package/java/util/function";
import { $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $ChunkRenderTypeSet } from "@package/net/neoforged/neoforge/client";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $BakedModelWrapper, $IDynamicBakedModel } from "@package/net/neoforged/neoforge/client/model";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $RenderContext } from "@package/net/fabricmc/fabric/api/renderer/v1/render";
import { $RenderContext$QuadTransform } from "@package/appeng/thirdparty/fabric";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Transformation } from "@package/com/mojang/math";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $Vector3f } from "@package/org/joml";
import { $GlassState } from "@package/appeng/decorative/solid";

declare module "@package/appeng/client/render/model" {
    export class $MemoryCardBakedModel implements $BakedModel {
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
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource, arg3: $ModelData, arg4: $RenderType): $List<$BakedQuad>;
        applyTransform(arg0: $ItemDisplayContext_, arg1: $PoseStack, arg2: boolean): $BakedModel;
        getParticleIcon(arg0: $ModelData): $TextureAtlasSprite;
        useAmbientOcclusion(arg0: $BlockState_, arg1: $ModelData, arg2: $RenderType): $TriState;
        isVanillaAdapter(): boolean;
        get transforms(): $ItemTransforms;
        get vanillaAdapter(): boolean;
    }
    export class $MemoryCardModel implements $BasicUnbakedModel {
        getDependencies(): $Collection<$ResourceLocation>;
        bake(arg0: $ModelBaker, arg1: $Function_<$Material, $TextureAtlasSprite>, arg2: $ModelState): $BakedModel;
        resolveParents(arg0: $Function_<$ResourceLocation, $UnbakedModel>): void;
        static MODEL_BASE: $ResourceLocation;
        constructor();
        get dependencies(): $Collection<$ResourceLocation>;
    }
    export class $DriveModelData {
        static builder(arg0: $Item_[]): $ModelData$Builder;
        static create(arg0: $Item_[]): $ModelData;
        static STATE: $ModelProperty<$Item[]>;
    }
    export class $DriveBakedModel$QuadTranslator implements $RenderContext$QuadTransform {
    }
    export class $DriveModel implements $BasicUnbakedModel {
        getDependencies(): $Collection<$ResourceLocation>;
        bake(arg0: $ModelBaker, arg1: $Function_<$Material, $TextureAtlasSprite>, arg2: $ModelState): $BakedModel;
        resolveParents(arg0: $Function_<$ResourceLocation, $UnbakedModel>): void;
        constructor();
        get dependencies(): $Collection<$ResourceLocation>;
    }
    export class $AEModelData {
        static builder(): $ModelData$Builder;
        static create(): $ModelData;
        static SPIN: $ModelProperty<number>;
        static SKIP_CACHE: $ModelProperty<boolean>;
        constructor();
    }
    export class $GlassModel implements $BasicUnbakedModel {
        bake(arg0: $ModelBaker, arg1: $Function_<$Material, $TextureAtlasSprite>, arg2: $ModelState): $BakedModel;
        resolveParents(arg0: $Function_<$ResourceLocation, $UnbakedModel>): void;
        getDependencies(): $Collection<$ResourceLocation>;
        constructor();
        get dependencies(): $Collection<$ResourceLocation>;
    }
    export class $MeteoriteCompassBakedModel implements $IDynamicBakedModel {
        static getAnimatedRotation(arg0: $Vec3_, arg1: boolean, arg2: number): number;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource, arg3: $ModelData, arg4: $RenderType): $List<$BakedQuad>;
        isCustomRenderer(): boolean;
        getTransforms(): $ItemTransforms;
        getOverrides(): $ItemOverrides;
        getPointer(): $BakedModel;
        isGui3d(): boolean;
        usesBlockLight(): boolean;
        getParticleIcon(): $TextureAtlasSprite;
        useAmbientOcclusion(): boolean;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource): $List<$BakedQuad>;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        getModelData(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ModelData): $ModelData;
        getRenderTypes(arg0: $BlockState_, arg1: $RandomSource, arg2: $ModelData): $ChunkRenderTypeSet;
        getRenderTypes(arg0: $ItemStack_, arg1: boolean): $List<$RenderType>;
        getRenderPasses(arg0: $ItemStack_, arg1: boolean): $List<$BakedModel>;
        applyTransform(arg0: $ItemDisplayContext_, arg1: $PoseStack, arg2: boolean): $BakedModel;
        getParticleIcon(arg0: $ModelData): $TextureAtlasSprite;
        useAmbientOcclusion(arg0: $BlockState_, arg1: $ModelData, arg2: $RenderType): $TriState;
        isVanillaAdapter(): boolean;
        static ROTATION: $ModelProperty<number>;
        constructor(arg0: $BakedModel, arg1: $BakedModel);
        get customRenderer(): boolean;
        get transforms(): $ItemTransforms;
        get overrides(): $ItemOverrides;
        get pointer(): $BakedModel;
        get gui3d(): boolean;
        get vanillaAdapter(): boolean;
    }
    export class $ColorApplicatorBakedModel implements $BakedModel {
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
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource, arg3: $ModelData, arg4: $RenderType): $List<$BakedQuad>;
        applyTransform(arg0: $ItemDisplayContext_, arg1: $PoseStack, arg2: boolean): $BakedModel;
        getParticleIcon(arg0: $ModelData): $TextureAtlasSprite;
        useAmbientOcclusion(arg0: $BlockState_, arg1: $ModelData, arg2: $RenderType): $TriState;
        isVanillaAdapter(): boolean;
        get transforms(): $ItemTransforms;
        get vanillaAdapter(): boolean;
    }
    export class $MeteoriteCompassModel implements $BasicUnbakedModel {
        getDependencies(): $Collection<$ResourceLocation>;
        bake(arg0: $ModelBaker, arg1: $Function_<$Material, $TextureAtlasSprite>, arg2: $ModelState): $BakedModel;
        resolveParents(arg0: $Function_<$ResourceLocation, $UnbakedModel>): void;
        constructor();
        get dependencies(): $Collection<$ResourceLocation>;
    }
    export class $GlassBakedModel implements $IDynamicBakedModel {
        getModelData(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ModelData): $ModelData;
        getRenderTypes(arg0: $BlockState_, arg1: $RandomSource, arg2: $ModelData): $ChunkRenderTypeSet;
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
        getRenderTypes(arg0: $ItemStack_, arg1: boolean): $List<$RenderType>;
        getRenderPasses(arg0: $ItemStack_, arg1: boolean): $List<$BakedModel>;
        applyTransform(arg0: $ItemDisplayContext_, arg1: $PoseStack, arg2: boolean): $BakedModel;
        getParticleIcon(arg0: $ModelData): $TextureAtlasSprite;
        useAmbientOcclusion(arg0: $BlockState_, arg1: $ModelData, arg2: $RenderType): $TriState;
        isVanillaAdapter(): boolean;
        static GLASS_STATE: $ModelProperty<$GlassState>;
        constructor(arg0: $Function_<$Material, $TextureAtlasSprite>);
        get customRenderer(): boolean;
        get overrides(): $ItemOverrides;
        get gui3d(): boolean;
        get transforms(): $ItemTransforms;
        get vanillaAdapter(): boolean;
    }
    export class $ColorApplicatorModel implements $BasicUnbakedModel {
        getDependencies(): $Collection<$ResourceLocation>;
        bake(arg0: $ModelBaker, arg1: $Function_<$Material, $TextureAtlasSprite>, arg2: $ModelState): $BakedModel;
        resolveParents(arg0: $Function_<$ResourceLocation, $UnbakedModel>): void;
        constructor();
        get dependencies(): $Collection<$ResourceLocation>;
    }
    export class $RenderHelper {
    }
    export class $AutoRotatingCacheKey {
    }
    export class $MeteoriteCompassBakedModel$FixedRotationModel extends $BakedModelWrapper<$MeteoriteCompassBakedModel> {
    }
    export class $DriveBakedModel extends $DelegateBakedModel {
        getCellChassisModel(arg0: $Item_): $BakedModel;
        static getSlotOrigin(arg0: number, arg1: number, arg2: $Vector3f): void;
        constructor(arg0: $Transformation, arg1: $BakedModel, arg2: $Map_<$Item_, $BakedModel>, arg3: $BakedModel);
    }
}
