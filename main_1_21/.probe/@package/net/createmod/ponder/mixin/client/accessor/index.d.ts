import { $RenderType$CompositeState, $RenderType$CompositeRenderType } from "@package/net/minecraft/client/renderer";
import { $ParticleProvider } from "@package/net/minecraft/client/particle";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $VertexFormat$Mode_, $VertexFormat } from "@package/com/mojang/blaze3d/vertex";
import { $Renderable_, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $TextureManager } from "@package/net/minecraft/client/renderer/texture";
import { $Camera } from "@package/net/minecraft/client";
import { $List, $List_, $Map_, $Map } from "@package/java/util";
import { $Vector3f } from "@package/org/joml";

declare module "@package/net/createmod/ponder/mixin/client/accessor" {
    export class $RenderTypeAccessor {
        static catnip$create(arg0: string, arg1: $VertexFormat, arg2: $VertexFormat$Mode_, arg3: number, arg4: boolean, arg5: boolean, arg6: $RenderType$CompositeState): $RenderType$CompositeRenderType;
    }
    export interface $RenderTypeAccessor {
    }
    export class $ItemRendererAccessor {
    }
    export interface $ItemRendererAccessor {
        catnip$getTextureManager(): $TextureManager;
    }
    /**
     * Values that may be interpreted as {@link $ItemRendererAccessor}.
     */
    export type $ItemRendererAccessor_ = (() => $TextureManager);
    export class $ParticleEngineAccessor {
    }
    export interface $ParticleEngineAccessor {
        ponder$getProviders(): $Map<$ResourceLocation, $ParticleProvider<never>>;
    }
    /**
     * Values that may be interpreted as {@link $ParticleEngineAccessor}.
     */
    export type $ParticleEngineAccessor_ = (() => $Map_<$ResourceLocation_, $ParticleProvider<never>>);
    export class $BufferBuilderAccessor {
    }
    export interface $BufferBuilderAccessor {
        catnip$getVertices(): number;
    }
    /**
     * Values that may be interpreted as {@link $BufferBuilderAccessor}.
     */
    export type $BufferBuilderAccessor_ = (() => number);
    export class $ClientPacketListenerAccessor {
    }
    export interface $ClientPacketListenerAccessor {
        catnip$getServerChunkRadius(): number;
    }
    /**
     * Values that may be interpreted as {@link $ClientPacketListenerAccessor}.
     */
    export type $ClientPacketListenerAccessor_ = (() => number);
    export class $RenderSystemAccessor {
        static catnip$getShaderLightDirections(): $Vector3f[];
    }
    export interface $RenderSystemAccessor {
    }
    export class $GameRendererAccessor {
    }
    export interface $GameRendererAccessor {
        catnip$callGetFov(arg0: $Camera, arg1: number, arg2: boolean): number;
    }
    /**
     * Values that may be interpreted as {@link $GameRendererAccessor}.
     */
    export type $GameRendererAccessor_ = ((arg0: $Camera, arg1: number, arg2: boolean) => number);
    export class $ScreenAccessor {
    }
    export interface $ScreenAccessor {
        catnip$getRenderables(): $List<$Renderable>;
    }
    /**
     * Values that may be interpreted as {@link $ScreenAccessor}.
     */
    export type $ScreenAccessor_ = (() => $List_<$Renderable_>);
}
