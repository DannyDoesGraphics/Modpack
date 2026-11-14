import { $ShaderInstance } from "@package/net/minecraft/client/renderer";
import { $Map_, $Map } from "@package/java/util";

declare module "@package/dev/ryanhcode/sable/mixin/config" {
    export class $GameRendererAccessor {
    }
    export interface $GameRendererAccessor {
        getShaders(): $Map<string, $ShaderInstance>;
        get shaders(): $Map<string, $ShaderInstance>;
    }
    /**
     * Values that may be interpreted as {@link $GameRendererAccessor}.
     */
    export type $GameRendererAccessor_ = (() => $Map_<string, $ShaderInstance>);
}
