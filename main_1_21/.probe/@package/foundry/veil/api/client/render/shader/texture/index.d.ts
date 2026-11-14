import { $Codec } from "@package/com/mojang/serialization";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $TextureFilter } from "@package/foundry/veil/api/client/render/texture";
import { $AdvancedFbo } from "@package/foundry/veil/api/client/render/framebuffer";

declare module "@package/foundry/veil/api/client/render/shader/texture" {
    export class $ShaderTextureSource {
        static CODEC: $Codec<$ShaderTextureSource>;
        static GLOBAL_CONTEXT: $ShaderTextureSource$Context;
    }
    export interface $ShaderTextureSource {
        type(): $ShaderTextureSource$Type;
        filter(): $TextureFilter;
        getId(arg0: $ShaderTextureSource$Context_): number;
        getTarget(arg0: $ShaderTextureSource$Context_): number;
    }
    export class $ShaderTextureSource$Context {
    }
    export interface $ShaderTextureSource$Context {
        getTexture(arg0: $ResourceLocation_): number;
        getTextureTarget(arg0: $ResourceLocation_): number;
        getFramebuffer(arg0: $ResourceLocation_): $AdvancedFbo;
    }
    /**
     * Values that may be interpreted as {@link $ShaderTextureSource$Context}.
     */
    export type $ShaderTextureSource$Context_ = ((arg0: $ResourceLocation) => $AdvancedFbo);
}
