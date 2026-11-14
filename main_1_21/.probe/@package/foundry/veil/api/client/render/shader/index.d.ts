import { $Consumer_ } from "@package/java/util/function";
import { $Codec } from "@package/com/mojang/serialization";
import { $Enum } from "@package/java/lang";
import { $GlslTree } from "@package/io/github/ocelot/glslprocessor/api/node";
import { $Map } from "@package/java/util";
export * as compiler from "@package/foundry/veil/api/client/render/shader/compiler";
export * as texture from "@package/foundry/veil/api/client/render/shader/texture";
export * as program from "@package/foundry/veil/api/client/render/shader/program";
export * as block from "@package/foundry/veil/api/client/render/shader/block";
export * as uniform from "@package/foundry/veil/api/client/render/shader/uniform";

declare module "@package/foundry/veil/api/client/render/shader" {
    export class $ShaderPreDefinitions {
        remove(arg0: string): void;
        set(arg0: string): void;
        set(arg0: string, arg1: string): void;
        getDefinition(arg0: string): string;
        addListener(arg0: $Consumer_<string>): void;
        getDefinitions(): $Map<string, string>;
        setStatic(arg0: string, arg1: string): void;
        setStatic(arg0: string): void;
        getStaticDefinitions(): $Map<string, string>;
        constructor();
        get definitions(): $Map<string, string>;
        get staticDefinitions(): $Map<string, string>;
    }
    export class $ShaderFeature extends $Enum<$ShaderFeature> {
        modifyShader(arg0: number, arg1: $GlslTree): void;
        getDefinitionName(): string;
        static values(): $ShaderFeature[];
        static valueOf(arg0: string): $ShaderFeature;
        isSupported(): boolean;
        static CODEC: $Codec<$ShaderFeature>;
        static COMPUTE: $ShaderFeature;
        static INT64: $ShaderFeature;
        static VERTEX_ATTRIBUTE64: $ShaderFeature;
        static BINDLESS_TEXTURE: $ShaderFeature;
        static CUBE_MAP_ARRAY: $ShaderFeature;
        static TESSELLATION: $ShaderFeature;
        static FLOAT64: $ShaderFeature;
        static SHADER_STORAGE: $ShaderFeature;
        static ATOMIC_COUNTER: $ShaderFeature;
        static FEATURES: $ShaderFeature[];
        get definitionName(): string;
        get supported(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ShaderFeature}.
     */
    export type $ShaderFeature_ = "compute" | "shader_storage" | "atomic_counter" | "bindless_texture" | "cube_map_array" | "float64" | "int64" | "vertex_attribute64" | "tessellation";
}
