import { $Serializable } from "@package/java/io";
import { $libvlc_display_callback_t, $libvlc_video_cleanup_cb, $libvlc_unlock_callback_t, $libvlc_lock_callback_t, $libvlc_video_format_cb } from "@package/org/watermedia/videolan4j/binding/internal";
import { $MediaPlayer } from "@package/org/watermedia/videolan4j/player/base";
import { $Semaphore } from "@package/java/util/concurrent";
import { $BufferCleanupCallback_, $RenderCallback_, $BufferFormatCallback } from "@package/org/watermedia/videolan4j/player/embedded/videosurface/callback";
export * as callback from "@package/org/watermedia/videolan4j/player/embedded/videosurface/callback";

declare module "@package/org/watermedia/videolan4j/player/embedded/videosurface" {
    export class $CallbackVideoSurface extends $VideoSurface {
        constructor(arg0: $BufferFormatCallback, arg1: $RenderCallback_, arg2: boolean, arg3: $VideoSurfaceAdapter_, arg4: $BufferCleanupCallback_);
    }
    export class $CallbackVideoSurface$UnlockCallback implements $libvlc_unlock_callback_t {
    }
    export class $LinuxVideoSurfaceAdapter implements $VideoSurfaceAdapter {
        attach(arg0: $MediaPlayer, arg1: number): void;
        constructor();
    }
    export class $VideoSurface {
        setSemaphore(arg0: $Semaphore): void;
        attach(arg0: $MediaPlayer): void;
        getSemaphore(): $Semaphore;
    }
    export class $DeferredComponentIdVideoSurface extends $VideoSurface {
        constructor(arg0: $VideoSurfaceAdapter_);
    }
    export class $CallbackVideoSurface$LockCallback implements $libvlc_lock_callback_t {
    }
    export class $CallbackVideoSurface$CleanupCallback implements $libvlc_video_cleanup_cb {
    }
    export class $OsxVideoSurfaceAdapter implements $VideoSurfaceAdapter {
        attach(arg0: $MediaPlayer, arg1: number): void;
        constructor();
    }
    export class $CallbackVideoSurface$SetupCallback implements $libvlc_video_format_cb {
    }
    export class $CallbackVideoSurface$DisplayCallback implements $libvlc_display_callback_t {
    }
    export class $NativeBuffers {
    }
    export class $WindowsVideoSurfaceAdapter implements $VideoSurfaceAdapter {
        attach(arg0: $MediaPlayer, arg1: number): void;
        constructor();
    }
    export class $VideoSurfaceAdapter {
    }
    export interface $VideoSurfaceAdapter extends $Serializable {
        attach(arg0: $MediaPlayer, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $VideoSurfaceAdapter}.
     */
    export type $VideoSurfaceAdapter_ = ((arg0: $MediaPlayer, arg1: number) => void);
    export class $VideoSurfaceAdapters {
        static getVideoSurfaceAdapter(): $VideoSurfaceAdapter;
        static get videoSurfaceAdapter(): $VideoSurfaceAdapter;
    }
}
