import { $FullScreenStrategy } from "@package/org/watermedia/videolan4j/player/embedded/fullscreen";
import { $Window } from "@package/java/awt";

declare module "@package/org/watermedia/videolan4j/player/embedded/fullscreen/exclusivemode" {
    export class $ExclusiveModeFullScreenStrategy implements $FullScreenStrategy {
        isFullScreenMode(): boolean;
        enterFullScreenMode(): void;
        exitFullScreenMode(): void;
        constructor(arg0: $Window);
        get fullScreenMode(): boolean;
    }
}
