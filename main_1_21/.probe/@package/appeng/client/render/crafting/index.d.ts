import { $BlockAndTintGetter } from "@package/net/minecraft/world/level";
import { $BasicUnbakedModel } from "@package/appeng/client/render";
import { $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $ItemDisplayContext_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ItemTransforms, $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $Material, $UnbakedModel, $ModelState, $BakedModel, $ModelResourceLocation, $ModelBaker } from "@package/net/minecraft/client/resources/model";
import { $List, $Collection } from "@package/java/util";
import { $CraftingUnitType_, $CraftingUnitType, $ICraftingUnitType } from "@package/appeng/block/crafting";
import { $CraftingMonitorBlockEntity, $MolecularAssemblerBlockEntity } from "@package/appeng/blockentity/crafting";
import { $RandomSource } from "@package/net/minecraft/util";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Supplier_, $Function_ } from "@package/java/util/function";
import { $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $ChunkRenderTypeSet } from "@package/net/neoforged/neoforge/client";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $IDynamicBakedModel } from "@package/net/neoforged/neoforge/client/model";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $BlockEntityRendererProvider$Context, $BlockEntityRenderer } from "@package/net/minecraft/client/renderer/blockentity";
import { $RenderContext } from "@package/net/fabricmc/fabric/api/renderer/v1/render";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Vec3_, $AABB } from "@package/net/minecraft/world/phys";

declare module "@package/appeng/client/render/crafting" {
    export class $AbstractCraftingUnitModelProvider<T extends $ICraftingUnitType> {
        getBakedModel(arg0: $Function_<$Material, $TextureAtlasSprite>): $BakedModel;
        getMaterials(): $List<$Material>;
        constructor(arg0: T);
        get materials(): $List<$Material>;
    }
    export class $CraftingCubeModel implements $BasicUnbakedModel {
        resolveParents(arg0: $Function_<$ResourceLocation, $UnbakedModel>): void;
        bake(arg0: $ModelBaker, arg1: $Function_<$Material, $TextureAtlasSprite>, arg2: $ModelState): $BakedModel;
        getDependencies(): $Collection<$ResourceLocation>;
        constructor(arg0: $AbstractCraftingUnitModelProvider<never>);
        get dependencies(): $Collection<$ResourceLocation>;
    }
    export class $UnitBakedModel extends $CraftingCubeBakedModel {
        constructor(arg0: $TextureAtlasSprite, arg1: $TextureAtlasSprite, arg2: $TextureAtlasSprite, arg3: $TextureAtlasSprite);
    }
    export class $MolecularAssemblerRenderer implements $BlockEntityRenderer<$MolecularAssemblerBlockEntity> {
        render(arg0: $MolecularAssemblerBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        getViewDistance(): number;
        shouldRenderOffScreen(arg0: $MolecularAssemblerBlockEntity): boolean;
        shouldRender(arg0: $MolecularAssemblerBlockEntity, arg1: $Vec3_): boolean;
        getRenderBoundingBox(arg0: $MolecularAssemblerBlockEntity): $AABB;
        static LIGHTS_MODEL: $ModelResourceLocation;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $LightBakedModel extends $CraftingCubeBakedModel {
        constructor(arg0: $TextureAtlasSprite, arg1: $TextureAtlasSprite, arg2: $TextureAtlasSprite, arg3: $TextureAtlasSprite, arg4: $TextureAtlasSprite);
    }
    export class $CraftingMonitorRenderer implements $BlockEntityRenderer<$CraftingMonitorBlockEntity> {
        render(arg0: $CraftingMonitorBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        getViewDistance(): number;
        shouldRenderOffScreen(arg0: $CraftingMonitorBlockEntity): boolean;
        shouldRender(arg0: $CraftingMonitorBlockEntity, arg1: $Vec3_): boolean;
        getRenderBoundingBox(arg0: $CraftingMonitorBlockEntity): $AABB;
        constructor(arg0: $BlockEntityRendererProvider$Context);
        get viewDistance(): number;
    }
    export class $AssemblerAnimationStatus {
        getIs(): $ItemStack;
        getAccumulatedTicks(): number;
        setAccumulatedTicks(arg0: number): void;
        getTicksUntilParticles(): number;
        setTicksUntilParticles(arg0: number): void;
        isExpired(): boolean;
        getSpeed(): number;
        constructor(arg0: number, arg1: $ItemStack_);
        get is(): $ItemStack;
        get expired(): boolean;
        get speed(): number;
    }
    export class $CraftingUnitModelProvider extends $AbstractCraftingUnitModelProvider<$CraftingUnitType> {
        getLightMaterial(arg0: $Function_<$Material, $TextureAtlasSprite>): $TextureAtlasSprite;
        constructor(arg0: $CraftingUnitType_);
    }
    export class $CraftingCubeBakedModel implements $IDynamicBakedModel {
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
        get transforms(): $ItemTransforms;
        get vanillaAdapter(): boolean;
    }
    export class $MonitorBakedModel extends $CraftingCubeBakedModel {
        constructor(arg0: $TextureAtlasSprite, arg1: $TextureAtlasSprite, arg2: $TextureAtlasSprite, arg3: $TextureAtlasSprite, arg4: $TextureAtlasSprite, arg5: $TextureAtlasSprite, arg6: $TextureAtlasSprite, arg7: $TextureAtlasSprite);
    }
}
