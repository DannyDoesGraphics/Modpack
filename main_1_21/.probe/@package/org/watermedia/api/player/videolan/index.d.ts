import { $MediaPlayer, $EmbededMediaPlayerEventListener } from "@package/org/watermedia/videolan4j/player/base";
import { $URI } from "@package/java/net";
import { $Executor_ } from "@package/java/util/concurrent";
import { $CallbackMediaPlayerComponent } from "@package/org/watermedia/videolan4j/player/component";
import { $BufferFormat, $RenderCallback, $BufferCleanupCallback, $BufferFormatCallback } from "@package/org/watermedia/videolan4j/player/embedded/videosurface/callback";
import { $Dimension } from "@package/java/awt";
import { $ByteBuffer } from "@package/java/nio";
import { $MediaPlayerFactory } from "@package/org/watermedia/videolan4j/factory";

declare module "@package/org/watermedia/api/player/videolan" {
    export class $VideoPlayer extends $BasePlayer implements $RenderCallback, $BufferFormatCallback, $BufferCleanupCallback {
        /**
         * @deprecated
         */
        preRender(): number;
        texture(): number;
        allocatedBuffers(arg0: $ByteBuffer[]): void;
        cleanupBuffers(arg0: $ByteBuffer[]): void;
        getBufferFormat(arg0: number, arg1: number): $BufferFormat;
        dimension(): $Dimension;
        size(): number;
        display(arg0: $MediaPlayer, arg1: $ByteBuffer[], arg2: $BufferFormat): void;
        width(): number;
        height(): number;
        constructor(arg0: $Executor_);
        constructor(arg0: $MediaPlayerFactory, arg1: $Executor_);
    }
    export class $BasePlayer {
        isPlaying(): boolean;
        isWaiting(): boolean;
        play(): void;
        isMuted(): boolean;
        setPauseMode(arg0: boolean): void;
        isSafeUse(): boolean;
        isEnded(): boolean;
        setMuteMode(arg0: boolean): void;
        setVolume(arg0: number): void;
        setRepeatMode(arg0: boolean): void;
        seekTo(arg0: number): void;
        getRepeatMode(): boolean;
        isSeekAble(): boolean;
        getMediaInfoDuration(): number;
        isBuffering(): boolean;
        mute(): void;
        startPaused(arg0: $URI): void;
        startPaused(arg0: $URI, arg1: string[]): void;
        togglePlayback(): void;
        getStateName(): string;
        seekFastTo(arg0: number): void;
        foward(): void;
        unmute(): void;
        isBroken(): boolean;
        start(arg0: $URI): void;
        start(arg0: $URI, arg1: string[]): void;
        stop(): void;
        resume(): void;
        release(): void;
        rewind(): void;
        /**
         * @deprecated
         */
        raw(): $CallbackMediaPlayerComponent;
        getTime(): number;
        getDuration(): number;
        isValid(): boolean;
        isLoading(): boolean;
        isLive(): boolean;
        isStopped(): boolean;
        pause(): void;
        isReady(): boolean;
        isPaused(): boolean;
        setSpeed(arg0: number): void;
        getVolume(): number;
        get playing(): boolean;
        get waiting(): boolean;
        get muted(): boolean;
        set pauseMode(value: boolean);
        get safeUse(): boolean;
        get ended(): boolean;
        set muteMode(value: boolean);
        get seekAble(): boolean;
        get mediaInfoDuration(): number;
        get buffering(): boolean;
        get stateName(): string;
        get broken(): boolean;
        get time(): number;
        get duration(): number;
        get valid(): boolean;
        get loading(): boolean;
        get live(): boolean;
        get stopped(): boolean;
        get ready(): boolean;
        get paused(): boolean;
        set speed(value: number);
    }
    export class $BasePlayer$WaterMediaPlayerEventListener extends $EmbededMediaPlayerEventListener {
    }
    export class $MusicPlayer extends $BasePlayer {
        constructor(arg0: $MediaPlayerFactory);
        constructor();
    }
}
