import { $libvlc_instance_t, $libvlc_media_player_t } from "@package/org/watermedia/videolan4j/binding/internal";
import { $FullScreenStrategy } from "@package/org/watermedia/videolan4j/player/embedded/fullscreen";
import { $MediaPlayer } from "@package/org/watermedia/videolan4j/player/base";
import { $VideoSurface } from "@package/org/watermedia/videolan4j/player/embedded/videosurface";
export * as videosurface from "@package/org/watermedia/videolan4j/player/embedded/videosurface";
export * as fullscreen from "@package/org/watermedia/videolan4j/player/embedded/fullscreen";

declare module "@package/org/watermedia/videolan4j/player/embedded" {
    export class $EmbeddedMediaPlayer extends $MediaPlayer {
        videoSurface(): $VideoSurfaceApi;
        fullScreen(): $FullScreenApi;
        input(): $InputApi;
        constructor(arg0: $libvlc_instance_t);
        constructor(arg0: $libvlc_instance_t, arg1: $libvlc_media_player_t);
    }
    export class $VideoSurfaceApi extends $BaseApi {
        getVideoSurface(): $VideoSurface;
        attachVideoSurface(): void;
        set(arg0: $VideoSurface): void;
        get videoSurface(): $VideoSurface;
    }
    export class $BaseApi {
    }
    export class $FullScreenApi extends $BaseApi {
        toggle(): void;
        isFullScreen(): boolean;
        set(arg0: boolean): void;
        strategy(arg0: $FullScreenStrategy): void;
        get fullScreen(): boolean;
    }
    export class $InputApi extends $BaseApi {
        enableKeyInputHandling(arg0: boolean): void;
        enableMouseInputHandling(arg0: boolean): void;
    }
}
