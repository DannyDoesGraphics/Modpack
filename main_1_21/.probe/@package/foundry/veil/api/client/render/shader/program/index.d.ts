import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $Codec } from "@package/com/mojang/serialization";
import { $ShaderInstance } from "@package/net/minecraft/client/renderer";
import { $ShaderTextureSource, $ShaderTextureSource$Context_ } from "@package/foundry/veil/api/client/render/shader/texture";
import { $Map_, $Map, $Set, $Set_ } from "@package/java/util";
import { $GlStateManager$DestFactor, $GlStateManager$SourceFactor_, $GlStateManager$DestFactor_, $GlStateManager$SourceFactor } from "@package/com/mojang/blaze3d/platform";
import { $ShaderFeature, $ShaderPreDefinitions, $ShaderFeature_ } from "@package/foundry/veil/api/client/render/shader";
import { $ShaderUniformAccess } from "@package/foundry/veil/api/client/render/shader/uniform";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $VertexFormat, $VertexFormat$Mode_ } from "@package/com/mojang/blaze3d/vertex";
import { $AbstractTexture } from "@package/net/minecraft/client/renderer/texture";
import { $AdvancedFbo } from "@package/foundry/veil/api/client/render/framebuffer";
import { $CharSequence, $Record } from "@package/java/lang";
import { $NativeResource } from "@package/org/lwjgl/system";
import { $CompiledShader } from "@package/foundry/veil/api/client/render/shader/compiler";
import { $Matrix4fc } from "@package/org/joml";

declare module "@package/foundry/veil/api/client/render/shader/program" {
    export class $TextureUniformAccess {
        static setFramebufferSamplers(arg0: $ShaderInstance, arg1: $AdvancedFbo): void;
    }
    export interface $TextureUniformAccess {
        setTexture(arg0: $CharSequence, arg1: number, arg2: number): void;
        setTexture(arg0: $CharSequence, arg1: $AbstractTexture, arg2: number): void;
        setTexture(arg0: $CharSequence, arg1: $AbstractTexture): void;
        setTexture(arg0: $CharSequence, arg1: number, arg2: number, arg3: number): void;
        setTexture(arg0: $CharSequence, arg1: $ResourceLocation_): void;
        setTexture(arg0: $CharSequence, arg1: $ResourceLocation_, arg2: number): void;
        removeTexture(arg0: $CharSequence): void;
        clearSamplers(): void;
        setFramebufferSamplers(arg0: $AdvancedFbo): void;
        bindSamplers(arg0: number): void;
        bindSamplers(arg0: $ShaderTextureSource$Context_, arg1: number): void;
    }
    export class $ProgramDefinition extends $Record {
        definitionDefaults(): $Map<string, string>;
        blendMode(): $ShaderBlendMode;
        tesselationControl(): $ResourceLocation;
        tesselationEvaluation(): $ResourceLocation;
        geometry(): $ResourceLocation;
        getMacros(arg0: $Set_<string>, arg1: $ShaderPreDefinitions): $Map<string, string>;
        shaders(): $Int2ObjectMap<$ResourceLocation>;
        compute(): $ResourceLocation;
        fragment(): $ResourceLocation;
        definitions(): string[];
        requiredFeatures(): $ShaderFeature[];
        vertex(): $ResourceLocation;
        samplers(): $Map<string, $ShaderTextureSource>;
        constructor(vertex: $ResourceLocation_, tesselationControl: $ResourceLocation_, tesselationEvaluation: $ResourceLocation_, geometry: $ResourceLocation_, fragment: $ResourceLocation_, compute: $ResourceLocation_, definitions: string[], definitionDefaults: $Map_<string, string>, samplers: $Map_<string, $ShaderTextureSource>, shaders: $Int2ObjectMap<$ResourceLocation_>, requiredFeatures: $ShaderFeature_[], blendMode: $ShaderBlendMode_);
    }
    /**
     * Values that may be interpreted as {@link $ProgramDefinition}.
     */
    export type $ProgramDefinition_ = { blendMode?: $ShaderBlendMode_, definitionDefaults?: $Map_<string, string>, requiredFeatures?: $ShaderFeature_[], samplers?: $Map_<string, $ShaderTextureSource>, fragment?: $ResourceLocation_, geometry?: $ResourceLocation_, definitions?: string[], tesselationControl?: $ResourceLocation_, compute?: $ResourceLocation_, shaders?: $Int2ObjectMap<$ResourceLocation_>, vertex?: $ResourceLocation_, tesselationEvaluation?: $ResourceLocation_,  } | [blendMode?: $ShaderBlendMode_, definitionDefaults?: $Map_<string, string>, requiredFeatures?: $ShaderFeature_[], samplers?: $Map_<string, $ShaderTextureSource>, fragment?: $ResourceLocation_, geometry?: $ResourceLocation_, definitions?: string[], tesselationControl?: $ResourceLocation_, compute?: $ResourceLocation_, shaders?: $Int2ObjectMap<$ResourceLocation_>, vertex?: $ResourceLocation_, tesselationEvaluation?: $ResourceLocation_, ];
    export class $ShaderProgram {
        static unbind(): void;
    }
    export interface $ShaderProgram extends $NativeResource, $UniformAccess, $TextureUniformAccess {
        getDefinitionDependencies(): $Set<string>;
        getName(): $ResourceLocation;
        getDefinition(): $ProgramDefinition;
        bind(): void;
        isValid(): boolean;
        getFormat(): $VertexFormat;
        /**
         * @deprecated
         */
        toShaderInstance(): $ShaderInstance;
        setDefaultUniforms(arg0: $VertexFormat$Mode_, arg1: $Matrix4fc, arg2: $Matrix4fc): void;
        setDefaultUniforms(arg0: $VertexFormat$Mode_): void;
        setUniformBlock(arg0: $CharSequence, arg1: number): void;
        setStorageBlock(arg0: $CharSequence, arg1: number): void;
        getShaders(): $Int2ObjectMap<$CompiledShader>;
        hasTesselation(): boolean;
        getProgram(): number;
        getRequiredFeatures(): $Set<$ShaderFeature>;
        getVertexShader(): $CompiledShader;
        getGeometryShader(): $CompiledShader;
        getTessellationControlShader(): $CompiledShader;
        getTessellationEvaluationShader(): $CompiledShader;
        getFragmentShader(): $CompiledShader;
        getComputeShader(): $CompiledShader;
        hasVertex(): boolean;
        hasGeometry(): boolean;
        hasFragment(): boolean;
        isCompute(): boolean;
        getActiveDynamicBuffers(): number;
        getUniform(arg0: $CharSequence): $ShaderUniformAccess;
        get definitionDependencies(): $Set<string>;
        get name(): $ResourceLocation;
        get definition(): $ProgramDefinition;
        get valid(): boolean;
        get format(): $VertexFormat;
        get shaders(): $Int2ObjectMap<$CompiledShader>;
        get program(): number;
        get requiredFeatures(): $Set<$ShaderFeature>;
        get vertexShader(): $CompiledShader;
        get geometryShader(): $CompiledShader;
        get tessellationControlShader(): $CompiledShader;
        get tessellationEvaluationShader(): $CompiledShader;
        get fragmentShader(): $CompiledShader;
        get computeShader(): $CompiledShader;
        get compute(): boolean;
        get activeDynamicBuffers(): number;
    }
    export class $UniformAccess {
    }
    export interface $UniformAccess {
        hasUniform(arg0: $CharSequence): boolean;
        hasUniformBlock(arg0: $CharSequence): boolean;
        hasStorageBlock(arg0: $CharSequence): boolean;
        getUniformSafe(arg0: $CharSequence): $ShaderUniformAccess;
        getUniformLocation(arg0: $CharSequence): number;
        getUniform(arg0: $CharSequence): $ShaderUniformAccess;
        setUniformBlock(arg0: $CharSequence, arg1: number): void;
        setStorageBlock(arg0: $CharSequence, arg1: number): void;
        getUniformBlock(arg0: $CharSequence): number;
        getStorageBlock(arg0: $CharSequence): number;
    }
    export class $ShaderBlendMode extends $Record {
        colorEquation(): $ShaderBlendMode$BlendEquation;
        alphaEquation(): $ShaderBlendMode$BlendEquation;
        srcColorFactor(): $GlStateManager$SourceFactor;
        dstColorFactor(): $GlStateManager$DestFactor;
        srcAlphaFactor(): $GlStateManager$SourceFactor;
        dstAlphaFactor(): $GlStateManager$DestFactor;
        hasEquation(): boolean;
        apply(): void;
        static CODEC: $Codec<$ShaderBlendMode>;
        static DESTINATION_FACTOR_CODEC: $Codec<$GlStateManager$DestFactor>;
        static SOURCE_FACTOR_CODEC: $Codec<$GlStateManager$SourceFactor>;
        constructor(colorEquation: $ShaderBlendMode$BlendEquation, alphaEquation: $ShaderBlendMode$BlendEquation, srcColorFactor: $GlStateManager$SourceFactor_, dstColorFactor: $GlStateManager$DestFactor_, srcAlphaFactor: $GlStateManager$SourceFactor_, dstAlphaFactor: $GlStateManager$DestFactor_);
    }
    /**
     * Values that may be interpreted as {@link $ShaderBlendMode}.
     */
    export type $ShaderBlendMode_ = { colorEquation?: $ShaderBlendMode$BlendEquation, srcColorFactor?: $GlStateManager$SourceFactor_, dstAlphaFactor?: $GlStateManager$DestFactor_, dstColorFactor?: $GlStateManager$DestFactor_, alphaEquation?: $ShaderBlendMode$BlendEquation, srcAlphaFactor?: $GlStateManager$SourceFactor_,  } | [colorEquation?: $ShaderBlendMode$BlendEquation, srcColorFactor?: $GlStateManager$SourceFactor_, dstAlphaFactor?: $GlStateManager$DestFactor_, dstColorFactor?: $GlStateManager$DestFactor_, alphaEquation?: $ShaderBlendMode$BlendEquation, srcAlphaFactor?: $GlStateManager$SourceFactor_, ];
}
