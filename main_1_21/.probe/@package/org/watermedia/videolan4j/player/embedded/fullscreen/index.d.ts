export * as windows from "@package/org/watermedia/videolan4j/player/embedded/fullscreen/windows";
export * as adaptive from "@package/org/watermedia/videolan4j/player/embedded/fullscreen/adaptive";
export * as x from "@package/org/watermedia/videolan4j/player/embedded/fullscreen/x";
export * as unsupported from "@package/org/watermedia/videolan4j/player/embedded/fullscreen/unsupported";
export * as libvlc from "@package/org/watermedia/videolan4j/player/embedded/fullscreen/libvlc";
export * as exclusivemode from "@package/org/watermedia/videolan4j/player/embedded/fullscreen/exclusivemode";

declare module "@package/org/watermedia/videolan4j/player/embedded/fullscreen" {
    export class $FullScreenStrategy {
    }
    export interface $FullScreenStrategy {
        isFullScreenMode(): boolean;
        enterFullScreenMode(): void;
        exitFullScreenMode(): void;
        get fullScreenMode(): boolean;
    }
}
