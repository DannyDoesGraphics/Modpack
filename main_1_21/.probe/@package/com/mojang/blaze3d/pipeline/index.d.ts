import { $FramebufferRenderTargetAccessor } from "@package/foundry/veil/mixin/framebuffer/accessor";
import { $ConcurrentLinkedQueue } from "@package/java/util/concurrent";
import { $AccessoriesFrameBufferExtension } from "@package/io/wispforest/accessories/pond";
import { $CallbackInfoReturnable, $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $AdvancedFbo } from "@package/foundry/veil/api/client/render/framebuffer";
import { $Blaze3dRenderTargetExt } from "@package/net/irisshaders/iris/targets";
import { $Enum } from "@package/java/lang";
import { $RenderTargetExtension, $PerformanceRenderTargetExtension } from "@package/foundry/veil/ext";

declare module "@package/com/mojang/blaze3d/pipeline" {
    export class $MainTarget$AttachmentState extends $Enum<$MainTarget$AttachmentState> {
    }
    /**
     * Values that may be interpreted as {@link $MainTarget$AttachmentState}.
     */
    export type $MainTarget$AttachmentState_ = "none" | "color" | "depth" | "color_depth";
    export class $RenderCall {
    }
    export interface $RenderCall {
        execute(): void;
    }
    /**
     * Values that may be interpreted as {@link $RenderCall}.
     */
    export type $RenderCall_ = (() => void);
    export class $RenderTarget implements $Blaze3dRenderTargetExt, $FramebufferRenderTargetAccessor, $PerformanceRenderTargetExtension, $RenderTargetExtension, $AccessoriesFrameBufferExtension {
        clear(useDepth: boolean): void;
        resize(width: number, height: number, disableBlend: boolean): void;
        createBuffers(width: number, height: number, disableBlend: boolean): void;
        unbindRead(): void;
        copyDepthFrom(otherTarget: $RenderTarget): void;
        setFilterMode(filterMode: number): void;
        handler$zof000$veil$createBuffers(arg0: $CallbackInfo): void;
        bindRead(): void;
        handler$zof000$veil$bindRead(arg0: $CallbackInfo): void;
        handler$zof000$veil$bindWrite(arg0: boolean, arg1: $CallbackInfo): void;
        handler$ebb000$sodium$blitToScreen(arg0: number, arg1: number, arg2: boolean, arg3: $CallbackInfo): void;
        handler$znm000$veil$clear(arg0: boolean, arg1: $CallbackInfo): void;
        handler$znm000$veil$copyDepthFrom(arg0: $RenderTarget, arg1: $CallbackInfo): void;
        handler$zof000$veil$destroyBuffers(arg0: $CallbackInfo): void;
        setClearColor(red: number, green: number, blue: number, alpha: number): void;
        checkStatus(): void;
        bindWrite(useDepth: boolean): void;
        unbindWrite(): void;
        blitToScreen(width: number, height: number): void;
        blitToScreen(width: number, height: number, disableBlend: boolean): void;
        destroyBuffers(): void;
        getColorTextureId(): number;
        handler$zof000$veil$getColorTextureId(arg0: $CallbackInfoReturnable<any>): void;
        getDepthTextureId(): number;
        handler$zof000$veil$getDepthTextureId(arg0: $CallbackInfoReturnable<any>): void;
        enableStencil(): void;
        isStencilEnabled(): boolean;
        iris$getDepthBufferVersion(): number;
        iris$getColorBufferVersion(): number;
        veil$clearColorBuffer(useDepth: boolean): void;
        veil$setWrapper(arg0: $AdvancedFbo): void;
        veil$getTexture(arg0: number): number;
        accessories$setUseHighlightShader(useDepth: boolean): void;
        getClearChannels(): number[];
        useDepth: boolean;
        filterMode: number;
        viewWidth: number;
        frameBufferId: number;
        width: number;
        viewHeight: number;
        height: number;
        constructor(useDepth: boolean);
        get colorTextureId(): number;
        get depthTextureId(): number;
        get stencilEnabled(): boolean;
        get clearChannels(): number[];
    }
    export class $MainTarget extends $RenderTarget {
        useDepth: boolean;
        filterMode: number;
        static DEFAULT_HEIGHT: number;
        viewWidth: number;
        frameBufferId: number;
        width: number;
        viewHeight: number;
        static DEFAULT_WIDTH: number;
        height: number;
        constructor(width: number, height: number);
    }
    export class $RenderPipeline {
        getRecordingQueue(): $ConcurrentLinkedQueue<$RenderCall>;
        getProcessedQueue(): $ConcurrentLinkedQueue<$RenderCall>;
        canBeginRecording(): boolean;
        canBeginProcessing(): boolean;
        beginProcessing(): boolean;
        processRecordedQueue(): void;
        endProcessing(): void;
        startRendering(): $ConcurrentLinkedQueue<$RenderCall>;
        beginRecording(): boolean;
        endRecording(): void;
        recordRenderCall(renderCall: $RenderCall_): void;
        constructor();
        get recordingQueue(): $ConcurrentLinkedQueue<$RenderCall>;
        get processedQueue(): $ConcurrentLinkedQueue<$RenderCall>;
    }
    export class $MainTarget$Dimension {
    }
    export class $TextureTarget extends $RenderTarget {
        useDepth: boolean;
        filterMode: number;
        viewWidth: number;
        frameBufferId: number;
        width: number;
        viewHeight: number;
        height: number;
        constructor(width: number, height: number, useDepth: boolean, clearError: boolean);
    }
}
