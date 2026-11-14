import { $FullScreenStrategy } from "@package/org/watermedia/videolan4j/player/embedded/fullscreen";

declare module "@package/org/watermedia/videolan4j/player/embedded/fullscreen/unsupported" {
    export class $UnsupportedFullScreenStrategy implements $FullScreenStrategy {
        isFullScreenMode(): boolean;
        enterFullScreenMode(): void;
        exitFullScreenMode(): void;
        constructor();
        get fullScreenMode(): boolean;
    }
}
