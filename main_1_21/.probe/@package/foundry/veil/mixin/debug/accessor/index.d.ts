import { $ShaderInstance, $PostPass, $PostChain } from "@package/net/minecraft/client/renderer";
import { $List_, $Map, $List } from "@package/java/util";

declare module "@package/foundry/veil/mixin/debug/accessor" {
    export class $DebugPostChainAccessor {
    }
    export interface $DebugPostChainAccessor {
        getPasses(): $List<$PostPass>;
        get passes(): $List<$PostPass>;
    }
    /**
     * Values that may be interpreted as {@link $DebugPostChainAccessor}.
     */
    export type $DebugPostChainAccessor_ = (() => $List_<$PostPass>);
    export class $DebugLevelRendererAccessor {
    }
    export interface $DebugLevelRendererAccessor {
        getEntityEffect(): $PostChain;
        getTransparencyChain(): $PostChain;
        get entityEffect(): $PostChain;
        get transparencyChain(): $PostChain;
    }
    export class $DebugGameRendererAccessor {
    }
    export interface $DebugGameRendererAccessor {
        getPostEffect(): $PostChain;
        getShaders(): $Map<string, $ShaderInstance>;
        getBlitShader(): $ShaderInstance;
        get postEffect(): $PostChain;
        get shaders(): $Map<string, $ShaderInstance>;
        get blitShader(): $ShaderInstance;
    }
}
