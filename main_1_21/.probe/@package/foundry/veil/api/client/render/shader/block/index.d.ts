import { $GlslTypeQualifier$LayoutId } from "@package/io/github/ocelot/glslprocessor/api/grammar";
import { $Enum } from "@package/java/lang";

declare module "@package/foundry/veil/api/client/render/shader/block" {
    export class $ShaderBlock$MemoryLayout extends $Enum<$ShaderBlock$MemoryLayout> {
        getLayoutId(): $GlslTypeQualifier$LayoutId;
        static values(): $ShaderBlock$MemoryLayout[];
        static valueOf(arg0: string): $ShaderBlock$MemoryLayout;
        static SHARED: $ShaderBlock$MemoryLayout;
        static STD140: $ShaderBlock$MemoryLayout;
        static PACKED: $ShaderBlock$MemoryLayout;
        static STD430: $ShaderBlock$MemoryLayout;
        get layoutId(): $GlslTypeQualifier$LayoutId;
    }
    /**
     * Values that may be interpreted as {@link $ShaderBlock$MemoryLayout}.
     */
    export type $ShaderBlock$MemoryLayout_ = "packed" | "shared" | "std140" | "std430";
    export class $ShaderBlock$BufferBinding extends $Enum<$ShaderBlock$BufferBinding> {
        static values(): $ShaderBlock$BufferBinding[];
        static valueOf(arg0: string): $ShaderBlock$BufferBinding;
        getGlType(): number;
        static UNIFORM: $ShaderBlock$BufferBinding;
        static SHADER_STORAGE: $ShaderBlock$BufferBinding;
        get glType(): number;
    }
    /**
     * Values that may be interpreted as {@link $ShaderBlock$BufferBinding}.
     */
    export type $ShaderBlock$BufferBinding_ = "uniform" | "shader_storage";
}
