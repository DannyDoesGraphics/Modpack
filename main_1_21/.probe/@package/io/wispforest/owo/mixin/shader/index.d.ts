import { $Uniform } from "@package/com/mojang/blaze3d/shaders";
import { $Map_, $Map } from "@package/java/util";

declare module "@package/io/wispforest/owo/mixin/shader" {
    export class $ShaderProgramAccessor {
    }
    export interface $ShaderProgramAccessor {
        owo$getLoadedUniforms(): $Map<string, $Uniform>;
    }
    /**
     * Values that may be interpreted as {@link $ShaderProgramAccessor}.
     */
    export type $ShaderProgramAccessor_ = (() => $Map_<string, $Uniform>);
}
