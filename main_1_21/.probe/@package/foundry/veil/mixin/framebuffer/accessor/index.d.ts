
declare module "@package/foundry/veil/mixin/framebuffer/accessor" {
    export class $FramebufferRenderTargetAccessor {
    }
    export interface $FramebufferRenderTargetAccessor {
        getClearChannels(): number[];
        get clearChannels(): number[];
    }
    /**
     * Values that may be interpreted as {@link $FramebufferRenderTargetAccessor}.
     */
    export type $FramebufferRenderTargetAccessor_ = (() => number[]);
}
