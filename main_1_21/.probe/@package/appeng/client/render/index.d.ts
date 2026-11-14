import { $MultiBufferSource_, $MultiBufferSource$BufferSource, $RenderType } from "@package/net/minecraft/client/renderer";
import { $BlockOrientation_ } from "@package/appeng/api/orientation";
import { $ItemColor } from "@package/net/minecraft/client/color/item";
import { $StorageCellTooltipComponent_ } from "@package/appeng/items/storage";
import { $Material, $UnbakedModel, $ModelState, $BakedModel, $ModelBaker } from "@package/net/minecraft/client/resources/model";
import { $FacadeBuilder } from "@package/appeng/client/render/cablebus";
import { $List, $Collection } from "@package/java/util";
import { $AEKey } from "@package/appeng/api/stacks";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Supplier_, $Function_ } from "@package/java/util/function";
import { $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $ChunkRenderTypeSet } from "@package/net/neoforged/neoforge/client";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $BlockColor } from "@package/net/minecraft/client/color/block";
import { $ClientTooltipComponent } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Class } from "@package/java/lang";
import { $BlockAndTintGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemDisplayContext_, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ItemTransforms, $ItemOverrides, $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $AEColor_ } from "@package/appeng/api/util";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $RenderContext } from "@package/net/fabricmc/fabric/api/renderer/v1/render";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Matrix4f } from "@package/org/joml";
export * as effects from "@package/appeng/client/render/effects";
export * as cablebus from "@package/appeng/client/render/cablebus";
export * as model from "@package/appeng/client/render/model";
export * as tesr from "@package/appeng/client/render/tesr";
export * as crafting from "@package/appeng/client/render/crafting";
export * as overlay from "@package/appeng/client/render/overlay";
export * as renderable from "@package/appeng/client/render/renderable";

declare module "@package/appeng/client/render" {
    export class $StaticBlockColor implements $BlockColor {
        getColor(arg0: $BlockState_, arg1: $BlockAndTintGetter, arg2: $BlockPos_, arg3: number): number;
        constructor(arg0: $AEColor_);
    }
    export class $FacadeItemModel implements $BasicUnbakedModel {
        getDependencies(): $Collection<$ResourceLocation>;
        bake(arg0: $ModelBaker, arg1: $Function_<$Material, $TextureAtlasSprite>, arg2: $ModelState): $BakedModel;
        resolveParents(arg0: $Function_<$ResourceLocation, $UnbakedModel>): void;
        constructor();
        get dependencies(): $Collection<$ResourceLocation>;
    }
    export class $ColorableBlockEntityBlockColor implements $BlockColor {
        getColor(arg0: $BlockState_, arg1: $BlockAndTintGetter, arg2: $BlockPos_, arg3: number): number;
        static INSTANCE: $ColorableBlockEntityBlockColor;
        constructor();
    }
    export class $DelegateBakedModel implements $BakedModel {
        getBaseModel(): $BakedModel;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource, arg3: $ModelData, arg4: $RenderType): $List<$BakedQuad>;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource): $List<$BakedQuad>;
        isCustomRenderer(): boolean;
        getTransforms(): $ItemTransforms;
        getOverrides(): $ItemOverrides;
        applyTransform(arg0: $ItemDisplayContext_, arg1: $PoseStack, arg2: boolean): $BakedModel;
        isGui3d(): boolean;
        usesBlockLight(): boolean;
        getParticleIcon(): $TextureAtlasSprite;
        useAmbientOcclusion(): boolean;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        getModelData(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ModelData): $ModelData;
        getRenderTypes(arg0: $BlockState_, arg1: $RandomSource, arg2: $ModelData): $ChunkRenderTypeSet;
        getRenderTypes(arg0: $ItemStack_, arg1: boolean): $List<$RenderType>;
        getRenderPasses(arg0: $ItemStack_, arg1: boolean): $List<$BakedModel>;
        getParticleIcon(arg0: $ModelData): $TextureAtlasSprite;
        useAmbientOcclusion(arg0: $BlockState_, arg1: $ModelData, arg2: $RenderType): $TriState;
        isVanillaAdapter(): boolean;
        get baseModel(): $BakedModel;
        get customRenderer(): boolean;
        get transforms(): $ItemTransforms;
        get overrides(): $ItemOverrides;
        get gui3d(): boolean;
        get vanillaAdapter(): boolean;
    }
    export class $StaticItemColor implements $ItemColor {
        getColor(arg0: $ItemStack_, arg1: number): number;
        constructor(arg0: $AEColor_);
    }
    export class $SpatialSkyRender {
        static getInstance(): $SpatialSkyRender;
        render(arg0: $Matrix4f, arg1: $Matrix4f): void;
        constructor();
        static get instance(): $SpatialSkyRender;
    }
    export class $BlockEntityRenderHelper {
        static renderItem2dWithAmount(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: $AEKey, arg3: number, arg4: boolean, arg5: number, arg6: number, arg7: number, arg8: $Level_): void;
        static rotateToFace(arg0: $PoseStack, arg1: $BlockOrientation_): void;
        static renderItem2d(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: $AEKey, arg3: number, arg4: number, arg5: $Level_): void;
    }
    export class $StorageCellClientTooltipComponent implements $ClientTooltipComponent {
        renderText(arg0: $Font, arg1: number, arg2: number, arg3: $Matrix4f, arg4: $MultiBufferSource$BufferSource): void;
        renderImage(arg0: $Font, arg1: number, arg2: number, arg3: $GuiGraphics): void;
        getWidth(arg0: $Font): number;
        getHeight(): number;
        constructor(arg0: $StorageCellTooltipComponent_);
        get height(): number;
    }
    export class $BasicUnbakedModel {
    }
    export interface $BasicUnbakedModel extends $UnbakedModel {
        resolveParents(arg0: $Function_<$ResourceLocation, $UnbakedModel>): void;
        getDependencies(): $Collection<$ResourceLocation>;
        get dependencies(): $Collection<$ResourceLocation>;
    }
    /**
     * Values that may be interpreted as {@link $BasicUnbakedModel}.
     */
    export type $BasicUnbakedModel_ = (() => void);
    export class $FacadeBakedItemModel extends $DelegateBakedModel {
    }
    export class $BakedModelUnwrapper {
        static unwrap<T>(arg0: $BakedModel, arg1: $Class<T>): T;
    }
    export class $FacadeDispatcherBakedModel extends $DelegateBakedModel {
        constructor(arg0: $BakedModel, arg1: $FacadeBuilder);
    }
}
