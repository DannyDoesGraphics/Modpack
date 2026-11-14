import { $MultiBufferSource_, $MultiBufferSource, $RenderType } from "@package/net/minecraft/client/renderer";
import { $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $BakedModel, $ModelResourceLocation_ } from "@package/net/minecraft/client/resources/model";
import { $ImmutableMap } from "@package/com/google/common/collect";
import { $List_ } from "@package/java/util";
import { $RandomSource, $Unit } from "@package/net/minecraft/util";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Record } from "@package/java/lang";
import { $Vector4f, $Matrix4f } from "@package/org/joml";

declare module "@package/net/neoforged/neoforge/client/model/renderable" {
    /**
     * A renderable object composed of a hierarchy of parts, each made up of a number of meshes.
     * 
     * Each mesh renders a set of quads using a different texture.
     */
    export class $CompositeRenderable implements $IRenderable<$CompositeRenderable$Transforms> {
        static builder(): $CompositeRenderable$Builder;
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: $ITextureRenderTypeLookup_, arg3: number, arg4: number, arg5: number, arg6: $CompositeRenderable$Transforms): void;
        withContext(arg0: $CompositeRenderable$Transforms): $IRenderable<$Unit>;
    }
    export class $CompositeRenderable$PartBuilder<T> {
        addMesh(arg0: $ResourceLocation_, arg1: $List_<$BakedQuad>): $CompositeRenderable$PartBuilder<T>;
        end(): T;
        child(arg0: string): $CompositeRenderable$PartBuilder<$CompositeRenderable$PartBuilder<T>>;
    }
    export class $BakedModelRenderable$Context extends $Record {
        faces(): $Direction[];
        tint(): $Vector4f;
        data(): $ModelData;
        state(): $BlockState;
        seed(): number;
        randomSource(): $RandomSource;
        constructor(arg0: $ModelData);
        constructor(state: $BlockState_, faces: $Direction_[], randomSource: $RandomSource, seed: number, data: $ModelData, tint: $Vector4f);
    }
    /**
     * Values that may be interpreted as {@link $BakedModelRenderable$Context}.
     */
    export type $BakedModelRenderable$Context_ = { tint?: $Vector4f, data?: $ModelData, faces?: $Direction_[], randomSource?: $RandomSource, seed?: number, state?: $BlockState_,  } | [tint?: $Vector4f, data?: $ModelData, faces?: $Direction_[], randomSource?: $RandomSource, seed?: number, state?: $BlockState_, ];
    export class $CompositeRenderable$Mesh {
    }
    /**
     * A standard interface for things that can be rendered to a `MultiBufferSource`.
     */
    export class $IRenderable<T> {
    }
    export interface $IRenderable<T> {
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: $ITextureRenderTypeLookup_, arg3: number, arg4: number, arg5: number, arg6: T): void;
        withContext(arg0: T): $IRenderable<$Unit>;
    }
    /**
     * Values that may be interpreted as {@link $IRenderable}.
     */
    export type $IRenderable_<T> = ((arg0: $PoseStack, arg1: $MultiBufferSource, arg2: $ITextureRenderTypeLookup, arg3: number, arg4: number, arg5: number, arg6: T) => void);
    export class $CompositeRenderable$Builder {
        get(): $CompositeRenderable;
        child(arg0: string): $CompositeRenderable$PartBuilder<$CompositeRenderable$Builder>;
    }
    /**
     * A context value that provides `Matrix4f` transforms for certain parts of the model.
     */
    export class $CompositeRenderable$Transforms {
        getTransform(part: string): $Matrix4f;
        static of(arg0: $ImmutableMap<string, $Matrix4f>): $CompositeRenderable$Transforms;
        static EMPTY: $CompositeRenderable$Transforms;
    }
    /**
     * Renderable wrapper for baked models.
     * 
     * The context can provide the `BlockState`, faces to be rendered, a `RandomSource` and seed,
     * a `ModelData` instance, and a tint.
     */
    export class $BakedModelRenderable implements $IRenderable<$BakedModelRenderable$Context> {
        withModelDataContext(): $IRenderable<$ModelData>;
        /**
         * Constructs a `BakedModelRenderable` from the given model location.
         * The model is expected to have been baked ahead of time.
         */
        static of(model: $ModelResourceLocation_): $BakedModelRenderable;
        /**
         * Constructs a `BakedModelRenderable` from the given baked model.
         */
        static of(model: $BakedModel): $BakedModelRenderable;
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: $ITextureRenderTypeLookup_, arg3: number, arg4: number, arg5: number, arg6: $BakedModelRenderable$Context_): void;
        withContext(modelData: $ModelData): $IRenderable<$Unit>;
        withContext(arg0: $BakedModelRenderable$Context_): $IRenderable<$Unit>;
    }
    export class $CompositeRenderable$Component {
    }
    /**
     * A generic lookup for `RenderType` implementations that use the specified texture.
     */
    export class $ITextureRenderTypeLookup {
    }
    export interface $ITextureRenderTypeLookup {
        get(name: $ResourceLocation_): $RenderType;
    }
    /**
     * Values that may be interpreted as {@link $ITextureRenderTypeLookup}.
     */
    export type $ITextureRenderTypeLookup_ = ((arg0: $ResourceLocation) => $RenderType);
}
