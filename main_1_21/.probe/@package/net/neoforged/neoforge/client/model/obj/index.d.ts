import { $JsonDeserializationContext_, $JsonObject_ } from "@package/com/google/gson";
import { $InputStream } from "@package/java/io";
import { $IGeometryBakingContext, $SimpleUnbakedGeometry, $IGeometryLoader } from "@package/net/neoforged/neoforge/client/model/geometry";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $Material, $UnbakedModel, $ModelState, $ModelBaker } from "@package/net/minecraft/client/resources/model";
import { $ResourceManager, $ResourceManagerReloadListener, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $Set, $Set_, $Collection } from "@package/java/util";
import { $Function_ } from "@package/java/util/function";
import { $CompositeRenderable$PartBuilder, $CompositeRenderable } from "@package/net/neoforged/neoforge/client/model/renderable";
import { $IModelBuilder } from "@package/net/neoforged/neoforge/client/model";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Record, $AutoCloseable } from "@package/java/lang";
import { $Vector4f } from "@package/org/joml";

declare module "@package/net/neoforged/neoforge/client/model/obj" {
    export class $ObjModel$ModelMesh {
    }
    /**
     * A model loaded from an OBJ file.
     * 
     * Supports positions, texture coordinates, normals and colors. The material library
     * has support for numerous features, including support for `ResourceLocation` textures (non-standard).
     */
    export class $ObjModel extends $SimpleUnbakedGeometry<$ObjModel> {
        getRootComponentNames(): $Set<string>;
        bakeRenderable(configuration: $IGeometryBakingContext): $CompositeRenderable;
        static parse(arg0: $ObjTokenizer, arg1: $ObjModel$ModelSettings_): $ObjModel;
        emissiveAmbient: boolean;
        automaticCulling: boolean;
        mtlOverride: string;
        modelLocation: $ResourceLocation;
        flipV: boolean;
        shadeQuads: boolean;
        get rootComponentNames(): $Set<string>;
    }
    /**
     * An OBJ material library (MTL), composed of named materials.
     */
    export class $ObjMaterialLibrary {
        getMaterial(arg0: string): $ObjMaterialLibrary$Material;
        static EMPTY: $ObjMaterialLibrary;
        constructor(reader: $ObjTokenizer);
    }
    /**
     * A tokenizer for OBJ and MTL files.
     * 
     * Joins split lines and ignores comments.
     */
    export class $ObjTokenizer implements $AutoCloseable {
        readAndSplitLine(ignoreEmptyLines: boolean): string[];
        close(): void;
        constructor(inputStream: $InputStream);
    }
    export class $ObjModel$ModelObject {
        addQuads(owner: $IGeometryBakingContext, modelBuilder: $IModelBuilder<never>, baker: $ModelBaker, spriteGetter: $Function_<$Material, $TextureAtlasSprite>, modelTransform: $ModelState): void;
        name(): string;
        bake(builder: $CompositeRenderable$PartBuilder<never>, configuration: $IGeometryBakingContext): void;
        getTextures(owner: $IGeometryBakingContext, modelGetter: $Function_<$ResourceLocation, $UnbakedModel>, missingTextureErrors: $Set_<$Pair<string, string>>): $Collection<$Material>;
    }
    export class $ObjModel$ModelGroup extends $ObjModel$ModelObject {
    }
    /**
     * A loader for OBJ models.
     * 
     * Allows the user to enable automatic face culling, toggle quad shading, flip UVs, render emissively and specify a
     * material library override.
     */
    export class $ObjLoader implements $IGeometryLoader<$ObjModel>, $ResourceManagerReloadListener {
        onResourceManagerReload(resourceManager: $ResourceManager): void;
        loadModel(settings: $ObjModel$ModelSettings_): $ObjModel;
        read(jsonObject: $JsonObject_, deserializationContext: $JsonDeserializationContext_): $ObjModel;
        loadMaterialLibrary(materialLocation: $ResourceLocation_): $ObjMaterialLibrary;
        reload(preparationBarrier: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        getName(): string;
        static INSTANCE: $ObjLoader;
        constructor();
        get name(): string;
    }
    export class $ObjModel$ModelSettings extends $Record {
        modelLocation(): $ResourceLocation;
        flipV(): boolean;
        automaticCulling(): boolean;
        shadeQuads(): boolean;
        emissiveAmbient(): boolean;
        mtlOverride(): string;
        constructor(modelLocation: $ResourceLocation_, automaticCulling: boolean, shadeQuads: boolean, flipV: boolean, emissiveAmbient: boolean, mtlOverride: string);
    }
    /**
     * Values that may be interpreted as {@link $ObjModel$ModelSettings}.
     */
    export type $ObjModel$ModelSettings_ = { automaticCulling?: boolean, emissiveAmbient?: boolean, shadeQuads?: boolean, flipV?: boolean, modelLocation?: $ResourceLocation_, mtlOverride?: string,  } | [automaticCulling?: boolean, emissiveAmbient?: boolean, shadeQuads?: boolean, flipV?: boolean, modelLocation?: $ResourceLocation_, mtlOverride?: string, ];
    export class $ObjMaterialLibrary$Material {
        ambientColorMap: string;
        ambientColor: $Vector4f;
        specularColor: $Vector4f;
        specularColorMap: string;
        diffuseColorMap: string;
        transparency: number;
        name: string;
        dissolve: number;
        diffuseColor: $Vector4f;
        specularHighlight: number;
        diffuseTintIndex: number;
        constructor(name: string);
    }
}
