import { $InputStream } from "@package/java/io";
import { $RenderType, $RenderStateShard } from "@package/net/minecraft/client/renderer";
import { $Executor_, $CompletableFuture, $Executor } from "@package/java/util/concurrent";
import { $IoSupplier } from "@package/net/minecraft/server/packs/resources";
import { $List, $Collection_, $Collection } from "@package/java/util";
import { $Stream } from "@package/java/util/stream";
import { $CullFrustum } from "@package/foundry/veil/api/client/render";
import { $Path_, $Path } from "@package/java/nio/file";
import { $ParticleEmitter } from "@package/foundry/veil/api/quasar/particle";
import { $PackType, $PackResources, $PackType_ } from "@package/net/minecraft/server/packs";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $TickTaskSchedulerImpl } from "@package/foundry/veil/impl";
import { $AbstractTexture } from "@package/net/minecraft/client/renderer/texture";
import { $AdvancedFbo } from "@package/foundry/veil/api/client/render/framebuffer";
import { $Matrix4fc } from "@package/org/joml";

declare module "@package/foundry/veil/ext" {
    export class $EntityExtension {
    }
    export interface $EntityExtension {
        veil$getEmitters(): $List<$ParticleEmitter>;
        veil$addEmitter(arg0: $ParticleEmitter): void;
    }
    export class $RenderTargetExtension {
    }
    export interface $RenderTargetExtension {
        veil$setWrapper(arg0: $AdvancedFbo): void;
        veil$getTexture(arg0: number): number;
    }
    export class $VertexBufferExtension {
    }
    export interface $VertexBufferExtension {
        veil$drawInstanced(arg0: number): void;
        veil$drawIndirect(arg0: number, arg1: number, arg2: number): void;
        veil$getIndexCount(): number;
    }
    export class $PerformanceRenderTargetExtension {
    }
    export interface $PerformanceRenderTargetExtension {
        veil$clearColorBuffer(arg0: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $PerformanceRenderTargetExtension}.
     */
    export type $PerformanceRenderTargetExtension_ = ((arg0: boolean) => void);
    export class $MinecraftServerExtension {
    }
    export interface $MinecraftServerExtension {
        veil$getScheduler(): $TickTaskSchedulerImpl;
        veil$getOrCreateScheduler(): $TickTaskSchedulerImpl;
    }
    export class $VeilClientSuggestionProvider {
    }
    export interface $VeilClientSuggestionProvider {
        veil$getPostPipelineNames(): $Stream<$ResourceLocation>;
    }
    /**
     * Values that may be interpreted as {@link $VeilClientSuggestionProvider}.
     */
    export type $VeilClientSuggestionProvider_ = (() => $Stream<$ResourceLocation_>);
    export class $AutoStorageIndexBufferExtension {
    }
    export interface $AutoStorageIndexBufferExtension {
        veil$ensureStorage(arg0: number): void;
        veil$getBuffer(): number;
    }
    export class $PackResourcesExtension {
        static findDevPath(arg0: $Path_, arg1: $Path_): $Path;
        static findDevPaths(arg0: $Path_, arg1: $Path_): $List<$Path>;
        static BUILD_RESOURCES_NAME: string;
    }
    export interface $PackResourcesExtension {
        veil$listResources(arg0: $PackResourcesExtension$PackResourceConsumer_): void;
        veil$isStatic(): boolean;
        veil$getRawResourceRoots(): $List<$Path>;
        veil$getIcon(): $IoSupplier<$InputStream>;
        veil$blurIcon(): boolean;
        veil$listPacks(): $Stream<$PackResources>;
    }
    export class $FrustumExtension {
    }
    export interface $FrustumExtension {
        veil$setupFrustum(arg0: $Matrix4fc, arg1: $Matrix4fc): void;
    }
    /**
     * Values that may be interpreted as {@link $FrustumExtension}.
     */
    export type $FrustumExtension_ = ((arg0: $Matrix4fc, arg1: $Matrix4fc) => void);
    export class $TextureAtlasExtension {
    }
    export interface $TextureAtlasExtension {
        veil$hasTexture(arg0: $ResourceLocation_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TextureAtlasExtension}.
     */
    export type $TextureAtlasExtension_ = ((arg0: $ResourceLocation) => boolean);
    export class $CompositeStateExtension {
    }
    export interface $CompositeStateExtension {
        veil$addShards(arg0: $Collection_<$RenderStateShard>): void;
    }
    /**
     * Values that may be interpreted as {@link $CompositeStateExtension}.
     */
    export type $CompositeStateExtension_ = ((arg0: $Collection<$RenderStateShard>) => void);
    export class $LevelRendererExtension {
    }
    export interface $LevelRendererExtension extends $LevelRendererBlockLayerExtension {
        veil$getCullFrustum(): $CullFrustum;
        veil$markChunksDirty(): void;
    }
    export class $DebugVertexBufferExt {
    }
    export interface $DebugVertexBufferExt {
        veil$setName(arg0: string): void;
    }
    /**
     * Values that may be interpreted as {@link $DebugVertexBufferExt}.
     */
    export type $DebugVertexBufferExt_ = ((arg0: string) => void);
    export class $TextureManagerExtension {
    }
    export interface $TextureManagerExtension {
        veil$registerPreloadedTexture<T extends $AbstractTexture>(arg0: $ResourceLocation_, arg1: T, arg2: $Executor_): $CompletableFuture<never>;
    }
    /**
     * Values that may be interpreted as {@link $TextureManagerExtension}.
     */
    export type $TextureManagerExtension_ = ((arg0: $ResourceLocation, arg1: any, arg2: $Executor) => $CompletableFuture<never>);
    export class $LevelRendererBlockLayerExtension {
    }
    export interface $LevelRendererBlockLayerExtension {
        veil$drawBlockLayer(arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: $Matrix4fc, arg5: $Matrix4fc): void;
    }
    /**
     * Values that may be interpreted as {@link $LevelRendererBlockLayerExtension}.
     */
    export type $LevelRendererBlockLayerExtension_ = ((arg0: $RenderType, arg1: number, arg2: number, arg3: number, arg4: $Matrix4fc, arg5: $Matrix4fc) => void);
    export class $PackResourcesExtension$PackResourceConsumer {
    }
    export interface $PackResourcesExtension$PackResourceConsumer {
        accept(arg0: $PackType_, arg1: $ResourceLocation_, arg2: $Path_, arg3: $Path_, arg4: $Path_): void;
    }
    /**
     * Values that may be interpreted as {@link $PackResourcesExtension$PackResourceConsumer}.
     */
    export type $PackResourcesExtension$PackResourceConsumer_ = ((arg0: $PackType, arg1: $ResourceLocation, arg2: $Path, arg3: $Path, arg4: $Path) => void);
    export class $AbstractTextureExtension {
    }
    export interface $AbstractTextureExtension {
        getTextureTarget(): number;
        get textureTarget(): number;
    }
}
