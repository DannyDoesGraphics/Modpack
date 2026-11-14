import { $JsonDeserializationContext_, $JsonObject_, $JsonObject, $JsonDeserializationContext } from "@package/com/google/gson";
import { $Function_, $Function } from "@package/java/util/function";
import { $Object2BooleanMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $RenderTypeGroup } from "@package/net/neoforged/neoforge/client";
import { $Direction_ } from "@package/net/minecraft/core";
import { $ExtraFaceData_, $IModelBuilder, $IQuadTransformer } from "@package/net/neoforged/neoforge/client/model";
import { $BlockModel, $BlockElement, $ItemTransforms, $BlockElementFace_, $ItemOverrides, $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Material, $UnbakedModel, $ModelState, $BakedModel, $ModelBaker } from "@package/net/minecraft/client/resources/model";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $List, $Map_, $Set, $List_ } from "@package/java/util";
import { $Transformation } from "@package/com/mojang/math";

declare module "@package/net/neoforged/neoforge/client/model/geometry" {
    /**
     * A geometry baking context that is bound to a `BlockModel`.
     * 
     * Users should not be instantiating this themselves.
     */
    export class $BlockGeometryBakingContext implements $IGeometryBakingContext {
        getMaterial(name: string): $Material;
        getTransforms(): $ItemTransforms;
        copyFrom(other: $BlockGeometryBakingContext): void;
        isGui3d(): boolean;
        useAmbientOcclusion(): boolean;
        bake(baker: $ModelBaker, bakedTextureGetter: $Function_<$Material, $TextureAtlasSprite>, modelTransform: $ModelState, overrides: $ItemOverrides): $BakedModel;
        getModelName(): string;
        hasMaterial(name: string): boolean;
        useBlockLight(): boolean;
        getRootTransform(): $Transformation;
        getRenderTypeHint(): $ResourceLocation;
        isComponentVisible(part: string, fallback: boolean): boolean;
        hasCustomGeometry(): boolean;
        getCustomGeometry(): $IUnbakedGeometry<never>;
        setCustomGeometry(geometry: $IUnbakedGeometry_<never>): void;
        setRootTransform(rootTransform: $Transformation): void;
        setRenderTypeHint(renderTypeHint: $ResourceLocation_): void;
        setGui3d(gui3d: boolean): void;
        /**
         * @return a `RenderTypeGroup` with the given name, or the empty group if not found.
         */
        getRenderType(name: $ResourceLocation_): $RenderTypeGroup;
        owner: $BlockModel;
        visibilityData: $BlockGeometryBakingContext$VisibilityData;
        constructor(owner: $BlockModel);
        get transforms(): $ItemTransforms;
        get modelName(): string;
    }
    /**
     * Helper for dealing with unbaked models and geometries.
     */
    export class $UnbakedGeometryHelper {
        static createUnbakedItemMaskElements(layerIndex: number, sprite: $TextureAtlasSprite): $List<$BlockElement>;
        /**
         * Creates a list of block elements in the shape of the specified sprite contents.
         * These can later be baked using the same, or another texture.
         * 
         * The `Direction#NORTH` and `Direction#SOUTH` faces take up the whole surface.
         */
        static createUnbakedItemMaskElements(layerIndex: number, sprite: $TextureAtlasSprite, faceData: $ExtraFaceData_): $List<$BlockElement>;
        static createUnbakedItemElements(layerIndex: number, sprite: $TextureAtlasSprite): $List<$BlockElement>;
        /**
         * Creates a list of block elements in the shape of the specified sprite contents.
         * These can later be baked using the same, or another texture.
         * 
         * The `Direction#NORTH` and `Direction#SOUTH` faces take up the whole surface.
         */
        static createUnbakedItemElements(layerIndex: number, sprite: $TextureAtlasSprite, faceData: $ExtraFaceData_): $List<$BlockElement>;
        /**
         * Bakes a list of block elements and feeds the baked quads to a model builder.
         */
        static bakeElements(builder: $IModelBuilder<never>, elements: $List_<$BlockElement>, spriteGetter: $Function_<$Material, $TextureAtlasSprite>, modelState: $ModelState): void;
        /**
         * Bakes a list of block elements and returns the list of baked quads.
         */
        static bakeElements(elements: $List_<$BlockElement>, spriteGetter: $Function_<$Material, $TextureAtlasSprite>, modelState: $ModelState): $List<$BakedQuad>;
        /**
         * Turns a single `BlockElementFace` into a `BakedQuad`.
         */
        static bakeElementFace(element: $BlockElement, face: $BlockElementFace_, sprite: $TextureAtlasSprite, direction: $Direction_, state: $ModelState): $BakedQuad;
        /**
         * Create an `IQuadTransformer` to apply a `Transformation` that undoes the `ModelState`
         * transform (blockstate transform), applies the given root transform and then re-applies the
         * blockstate transform.
         */
        static applyRootTransform(modelState: $ModelState, rootTransform: $Transformation): $IQuadTransformer;
        /**
         * @return a `ModelState` that combines the existing model state and the root transform
         */
        static composeRootTransformIntoModelState(modelState: $ModelState, rootTransform: $Transformation): $ModelState;
        /**
         * Resolves a material that may have been defined with a filesystem path instead of a proper `ResourceLocation`.
         * 
         * The target atlas will always be `TextureAtlas#LOCATION_BLOCKS`.
         */
        static resolveDirtyMaterial(tex: string, owner: $IGeometryBakingContext): $Material;
        /**
         * Helper for baking `BlockModel` instances. Handles baking custom geometries and deferring item model baking.
         */
        static bake(blockModel: $BlockModel, modelBaker: $ModelBaker, owner: $BlockModel, spriteGetter: $Function_<$Material, $TextureAtlasSprite>, modelState: $ModelState, guiLight3d: boolean): $BakedModel;
        constructor();
    }
    /**
     * Base class for implementations of `IUnbakedGeometry` which do not wish to handle model creation themselves,
     * instead supplying baked quads through a builder.
     */
    export class $SimpleUnbakedGeometry<T extends $SimpleUnbakedGeometry<T>> implements $IUnbakedGeometry<T> {
        bake(context: $IGeometryBakingContext, baker: $ModelBaker, spriteGetter: $Function_<$Material, $TextureAtlasSprite>, modelState: $ModelState, overrides: $ItemOverrides): $BakedModel;
        /**
         * Resolve parents of nested `BlockModel`s which are later used in
         * `IUnbakedGeometry#bake(IGeometryBakingContext, ModelBaker, Function, ModelState, ItemOverrides)`
         * via `BlockModel#resolveParents(Function)`
         */
        resolveParents(modelGetter: $Function_<$ResourceLocation, $UnbakedModel>, context: $IGeometryBakingContext): void;
        /**
         * @return a set of all the components whose visibility may be configured via `IGeometryBakingContext`
         */
        getConfigurableComponentNames(): $Set<string>;
        constructor();
        get configurableComponentNames(): $Set<string>;
    }
    /**
     * The context in which a geometry is being baked, providing information such as lighting and
     * transforms, and allowing the user to create materials and query
     * render types.
     */
    export class $IGeometryBakingContext {
    }
    export interface $IGeometryBakingContext {
        /**
         * Resolves the final texture name, taking into account texture aliases and replacements.
         */
        getMaterial(name: string): $Material;
        /**
         * @return the transforms for display in item form.
         */
        getTransforms(): $ItemTransforms;
        /**
         * @return true if this model should render in 3D in a GUI, false otherwise
         */
        isGui3d(): boolean;
        /**
         * @return true if this model should render in 3D in a GUI, false otherwise
         */
        useAmbientOcclusion(): boolean;
        /**
         * @return a `RenderTypeGroup` with the given name, or the empty group if not found.
         */
        getRenderType(name: $ResourceLocation_): $RenderTypeGroup;
        /**
         * @return the name of the model being baked for logging and caching purposes.
         */
        getModelName(): string;
        /**
         * Checks if a material is present in the model.
         */
        hasMaterial(name: string): boolean;
        /**
         * @return true if this model should render in 3D in a GUI, false otherwise
         */
        useBlockLight(): boolean;
        /**
         * @return the root transformation to be applied to all variants of this model, regardless of item transforms.
         */
        getRootTransform(): $Transformation;
        /**
         * @return a hint of the render type this model should use. Custom loaders may ignore this.
         */
        getRenderTypeHint(): $ResourceLocation;
        /**
         * Queries the visibility of a component of this model.
         */
        isComponentVisible(component: string, fallback: boolean): boolean;
        get transforms(): $ItemTransforms;
        get gui3d(): boolean;
        get modelName(): string;
        get rootTransform(): $Transformation;
        get renderTypeHint(): $ResourceLocation;
    }
    /**
     * A geometry baking context that is not bound to block/item model loading.
     */
    export class $StandaloneGeometryBakingContext implements $IGeometryBakingContext {
        getMaterial(name: string): $Material;
        getTransforms(): $ItemTransforms;
        static builder(): $StandaloneGeometryBakingContext$Builder;
        static builder(arg0: $IGeometryBakingContext): $StandaloneGeometryBakingContext$Builder;
        static create(modelName: $ResourceLocation_): $StandaloneGeometryBakingContext;
        static create(modelName: $ResourceLocation_, textures: $Map_<string, $ResourceLocation_>): $StandaloneGeometryBakingContext;
        static create(textures: $Map_<string, $ResourceLocation_>): $StandaloneGeometryBakingContext;
        isGui3d(): boolean;
        useAmbientOcclusion(): boolean;
        getModelName(): string;
        hasMaterial(name: string): boolean;
        useBlockLight(): boolean;
        getRootTransform(): $Transformation;
        getRenderTypeHint(): $ResourceLocation;
        isComponentVisible(component: string, fallback: boolean): boolean;
        /**
         * @return a `RenderTypeGroup` with the given name, or the empty group if not found.
         */
        getRenderType(name: $ResourceLocation_): $RenderTypeGroup;
        static LOCATION: $ResourceLocation;
        static INSTANCE: $StandaloneGeometryBakingContext;
        get transforms(): $ItemTransforms;
        get gui3d(): boolean;
        get modelName(): string;
        get rootTransform(): $Transformation;
        get renderTypeHint(): $ResourceLocation;
    }
    export class $BlockGeometryBakingContext$VisibilityData {
        copyFrom(arg0: $BlockGeometryBakingContext$VisibilityData): void;
        isVisible(part: string, fallback: boolean): boolean;
        setVisibilityState(partName: string, type: boolean): void;
        hasCustomVisibility(part: string): boolean;
        constructor();
    }
    /**
     * Manager for geometry loaders.
     * 
     * Provides a lookup.
     */
    export class $GeometryLoaderManager {
        /**
         * Finds the `IGeometryLoader` for a given name, or null if not found.
         */
        static get(name: $ResourceLocation_): $IGeometryLoader<never>;
        static init(): void;
        /**
         * Retrieves a comma-separated list of all active loaders, for use in error messages.
         */
        static getLoaderList(): string;
        static get loaderList(): string;
    }
    /**
     * General interface for any model that can be baked, superset of vanilla `UnbakedModel`.
     * 
     * Instances of this class ar usually created via `IGeometryLoader`.
     */
    export class $IUnbakedGeometry<T extends $IUnbakedGeometry<T>> {
    }
    export interface $IUnbakedGeometry<T extends $IUnbakedGeometry<T>> {
        /**
         * Resolve parents of nested `BlockModel`s which are later used in
         * `IUnbakedGeometry#bake(IGeometryBakingContext, ModelBaker, Function, ModelState, ItemOverrides)`
         * via `BlockModel#resolveParents(Function)`
         */
        resolveParents(modelGetter: $Function_<$ResourceLocation, $UnbakedModel>, context: $IGeometryBakingContext): void;
        bake(context: $IGeometryBakingContext, baker: $ModelBaker, spriteGetter: $Function_<$Material, $TextureAtlasSprite>, modelState: $ModelState, overrides: $ItemOverrides): $BakedModel;
        /**
         * @return a set of all the components whose visibility may be configured via `IGeometryBakingContext`
         */
        getConfigurableComponentNames(): $Set<string>;
        get configurableComponentNames(): $Set<string>;
    }
    /**
     * Values that may be interpreted as {@link $IUnbakedGeometry}.
     */
    export type $IUnbakedGeometry_<T> = ((arg0: $IGeometryBakingContext, arg1: $ModelBaker, arg2: $Function<$Material, $TextureAtlasSprite>, arg3: $ModelState, arg4: $ItemOverrides) => $BakedModel);
    /**
     * A loader for custom model geometries.
     * 
     * If you do any caching, you should implement `ResourceManagerReloadListener` and register it with
     * `RegisterClientReloadListenersEvent`.
     */
    export class $IGeometryLoader<T extends $IUnbakedGeometry<T>> {
    }
    export interface $IGeometryLoader<T extends $IUnbakedGeometry<T>> {
        read(arg0: $JsonObject_, arg1: $JsonDeserializationContext_): T;
    }
    /**
     * Values that may be interpreted as {@link $IGeometryLoader}.
     */
    export type $IGeometryLoader_<T> = ((arg0: $JsonObject, arg1: $JsonDeserializationContext) => T);
    export class $StandaloneGeometryBakingContext$Builder {
        withTextures(arg0: $Map_<string, $ResourceLocation_>, arg1: $ResourceLocation_): $StandaloneGeometryBakingContext$Builder;
        withTextures(arg0: $ResourceLocation_, arg1: $Map_<string, $ResourceLocation_>, arg2: $ResourceLocation_): $StandaloneGeometryBakingContext$Builder;
        withMaterials(arg0: $Map_<string, $Material>, arg1: $Material): $StandaloneGeometryBakingContext$Builder;
        withGui3d(arg0: boolean): $StandaloneGeometryBakingContext$Builder;
        withUseBlockLight(arg0: boolean): $StandaloneGeometryBakingContext$Builder;
        withUseAmbientOcclusion(arg0: boolean): $StandaloneGeometryBakingContext$Builder;
        withTransforms(arg0: $ItemTransforms): $StandaloneGeometryBakingContext$Builder;
        withRootTransform(arg0: $Transformation): $StandaloneGeometryBakingContext$Builder;
        withRenderTypeHint(arg0: $ResourceLocation_): $StandaloneGeometryBakingContext$Builder;
        withVisibleComponents(arg0: $Object2BooleanMap<string>): $StandaloneGeometryBakingContext$Builder;
        build(modelName: $ResourceLocation_): $StandaloneGeometryBakingContext;
    }
}
