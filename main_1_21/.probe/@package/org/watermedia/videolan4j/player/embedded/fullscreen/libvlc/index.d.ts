import { $libvlc_media_player_t } from "@package/org/watermedia/videolan4j/binding/internal";
import { $FullScreenStrategy } from "@package/org/watermedia/videolan4j/player/embedded/fullscreen";

declare module "@package/org/watermedia/videolan4j/player/embedded/fullscreen/libvlc" {
    export class $LibVlcNativeFullScreenStrategy implements $FullScreenStrategy {
        isFullScreenMode(): boolean;
        enterFullScreenMode(): void;
        exitFullScreenMode(): void;
        constructor(arg0: $libvlc_media_player_t);
        get fullScreenMode(): boolean;
    }
}
