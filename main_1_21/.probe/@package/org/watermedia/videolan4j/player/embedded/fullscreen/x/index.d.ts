import { $FullScreenStrategy } from "@package/org/watermedia/videolan4j/player/embedded/fullscreen";
import { $Window } from "@package/java/awt";

declare module "@package/org/watermedia/videolan4j/player/embedded/fullscreen/x" {
    export class $XFullScreenStrategy implements $FullScreenStrategy {
        isFullScreenMode(): boolean;
        enterFullScreenMode(): void;
        exitFullScreenMode(): void;
        constructor(arg0: $Window);
        get fullScreenMode(): boolean;
    }
    export class $XFullScreenHandler {
    }
}
