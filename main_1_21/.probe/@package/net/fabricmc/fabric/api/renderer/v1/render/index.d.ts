import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Consumer } from "@package/java/util/function";
import { $Direction_ } from "@package/net/minecraft/core";
import { $ItemDisplayContext } from "@package/net/minecraft/world/item";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $TriState_, $TriState } from "@package/net/fabricmc/fabric/api/util";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $QuadEmitter, $MutableQuadView, $Mesh } from "@package/net/fabricmc/fabric/api/renderer/v1/mesh";

declare module "@package/net/fabricmc/fabric/api/renderer/v1/render" {
    export class $RenderContext$QuadTransform {
    }
    export interface $RenderContext$QuadTransform {
        transform(arg0: $MutableQuadView): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RenderContext$QuadTransform}.
     */
    export type $RenderContext$QuadTransform_ = ((arg0: $MutableQuadView) => boolean);
    export class $RenderContext {
    }
    export interface $RenderContext {
        getModelData(): $ModelData;
        getEmitter(): $QuadEmitter;
        getRenderType(): $RenderType;
        hasTransform(): boolean;
        isFaceCulled(arg0: $Direction_): boolean;
        itemTransformationMode(): $ItemDisplayContext;
        /**
         * @deprecated
         */
        bakedModelConsumer(): $RenderContext$BakedModelConsumer;
        /**
         * @deprecated
         */
        meshConsumer(): $Consumer<$Mesh>;
        pushTransform(arg0: $RenderContext$QuadTransform_): void;
        popTransform(): void;
        /**
         * @deprecated
         */
        fallbackConsumer(): $Consumer<$BakedModel>;
        pushModelData(arg0: $ModelData): void;
        popModelData(): void;
        usesAmbientOcclusion(): $TriState;
        setUsesAmbientOcclusion(arg0: $TriState_): void;
        get modelData(): $ModelData;
        get emitter(): $QuadEmitter;
        get renderType(): $RenderType;
    }
    /**
     * @deprecated
     */
    export class $RenderContext$BakedModelConsumer {
    }
    export interface $RenderContext$BakedModelConsumer extends $Consumer<$BakedModel> {
        accept(arg0: $BakedModel): void;
        accept(arg0: $BakedModel, arg1: $BlockState_): void;
    }
}
