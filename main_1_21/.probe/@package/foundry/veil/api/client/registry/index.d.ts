import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $MapCodec_, $MapCodec } from "@package/com/mojang/serialization";
import { $GlslTypeSpecifier$BuiltinType_, $GlslTypeSpecifier$BuiltinType } from "@package/io/github/ocelot/glslprocessor/api/grammar";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $LightTypeRenderer } from "@package/foundry/veil/api/client/render/light/renderer";
import { $PropertyModifier } from "@package/foundry/veil/api/flare/modifier";
import { $LightData } from "@package/foundry/veil/api/client/render/light/data";
import { $PostPipeline } from "@package/foundry/veil/api/client/render/post";
import { $Camera } from "@package/net/minecraft/client";
import { $Record } from "@package/java/lang";
import { $Property } from "@package/foundry/veil/api/client/property";
import { $RenderTypeLayer } from "@package/foundry/veil/api/client/render/rendertype/layer";

declare module "@package/foundry/veil/api/client/registry" {
    export interface $PostPipelineStageRegistry$PipelineType<T> extends RegistryMarked<RegistryTypes.VeilPostPipelineStageTag, RegistryTypes.VeilPostPipelineStage> {}
    export class $LightTypeRegistry$RendererFactory<T extends $LightData> {
    }
    export interface $LightTypeRegistry$RendererFactory<T extends $LightData> {
        createRenderer(): $LightTypeRenderer<T>;
    }
    /**
     * Values that may be interpreted as {@link $LightTypeRegistry$RendererFactory}.
     */
    export type $LightTypeRegistry$RendererFactory_<T> = (() => $LightTypeRenderer<T>);
    export class $LightTypeRegistry$LightType<T extends $LightData> extends $Record {
        rendererFactory(): $LightTypeRegistry$RendererFactory<T>;
        debugLightFactory(): $LightTypeRegistry$DebugLightFactory;
        constructor(rendererFactory: $LightTypeRegistry$RendererFactory_<T>, debugLightFactory: $LightTypeRegistry$DebugLightFactory_);
    }
    /**
     * Values that may be interpreted as {@link $LightTypeRegistry$LightType}.
     */
    export type $LightTypeRegistry$LightType_<T> = RegistryTypes.VeilLightType | { debugLightFactory?: $LightTypeRegistry$DebugLightFactory_, rendererFactory?: $LightTypeRegistry$RendererFactory_<$LightData>,  } | [debugLightFactory?: $LightTypeRegistry$DebugLightFactory_, rendererFactory?: $LightTypeRegistry$RendererFactory_<$LightData>, ];
    export interface $PropertyModifierRegistry$PropertyModifierType<T, M> extends RegistryMarked<RegistryTypes.VeilPropertyModifierTag, RegistryTypes.VeilPropertyModifier> {}
    export interface $LightTypeRegistry$LightType<T> extends RegistryMarked<RegistryTypes.VeilLightTypeTag, RegistryTypes.VeilLightType> {}
    export class $LightTypeRegistry$DebugLightFactory {
    }
    export interface $LightTypeRegistry$DebugLightFactory {
        createDebugLight(arg0: $ClientLevel, arg1: $Camera): $LightData;
    }
    /**
     * Values that may be interpreted as {@link $LightTypeRegistry$DebugLightFactory}.
     */
    export type $LightTypeRegistry$DebugLightFactory_ = ((arg0: $ClientLevel, arg1: $Camera) => $LightData);
    export class $PropertyModifierRegistry$PropertyModifierType<T, M extends $PropertyModifier<T>> extends $Record {
        codec(): $MapCodec<M>;
        constructor(codec: $MapCodec_<M>);
    }
    /**
     * Values that may be interpreted as {@link $PropertyModifierRegistry$PropertyModifierType}.
     */
    export type $PropertyModifierRegistry$PropertyModifierType_<T, M> = RegistryTypes.VeilPropertyModifier | { codec?: $MapCodec_<$PropertyModifier<T>>,  } | [codec?: $MapCodec_<$PropertyModifier<T>>, ];
    export class $PostPipelineStageRegistry$PipelineType<T extends $PostPipeline> extends $Record {
        codec(): $MapCodec<T>;
        constructor(codec: $MapCodec_<T>);
    }
    /**
     * Values that may be interpreted as {@link $PostPipelineStageRegistry$PipelineType}.
     */
    export type $PostPipelineStageRegistry$PipelineType_<T> = RegistryTypes.VeilPostPipelineStage | { codec?: $MapCodec_<$PostPipeline>,  } | [codec?: $MapCodec_<$PostPipeline>, ];
    export interface $RenderTypeLayerRegistry$LayerType<T> extends RegistryMarked<RegistryTypes.VeilRenderTypeLayerTag, RegistryTypes.VeilRenderTypeLayer> {}
    export class $PropertyRegistry$PropertyType<T, M extends $Property<T>> extends $Record {
        glType(): $GlslTypeSpecifier$BuiltinType;
        codec(): $MapCodec<M>;
        constructor(codec: $MapCodec_<M>, glType: $GlslTypeSpecifier$BuiltinType_);
    }
    /**
     * Values that may be interpreted as {@link $PropertyRegistry$PropertyType}.
     */
    export type $PropertyRegistry$PropertyType_<T, M> = RegistryTypes.VeilProperty | { glType?: $GlslTypeSpecifier$BuiltinType_, codec?: $MapCodec_<$Property<T>>,  } | [glType?: $GlslTypeSpecifier$BuiltinType_, codec?: $MapCodec_<$Property<T>>, ];
    export class $RenderTypeLayerRegistry$LayerType<T extends $RenderTypeLayer> extends $Record {
        codec(): $MapCodec<T>;
        constructor(codec: $MapCodec_<T>);
    }
    /**
     * Values that may be interpreted as {@link $RenderTypeLayerRegistry$LayerType}.
     */
    export type $RenderTypeLayerRegistry$LayerType_<T> = RegistryTypes.VeilRenderTypeLayer | { codec?: $MapCodec_<$RenderTypeLayer>,  } | [codec?: $MapCodec_<$RenderTypeLayer>, ];
    export interface $PropertyRegistry$PropertyType<T, M> extends RegistryMarked<RegistryTypes.VeilPropertyTag, RegistryTypes.VeilProperty> {}
}
