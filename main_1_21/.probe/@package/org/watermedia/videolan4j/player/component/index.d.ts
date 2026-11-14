import { $EmbeddedMediaPlayer } from "@package/org/watermedia/videolan4j/player/embedded";
import { $FullScreenStrategy } from "@package/org/watermedia/videolan4j/player/embedded/fullscreen";
import { $MediaPlayer, $MediaPlayerEventListener } from "@package/org/watermedia/videolan4j/player/base";
import { $BufferCleanupCallback_, $RenderCallback_, $RenderCallbackAdapter, $BufferFormatCallbackAdapter, $BufferFormatCallback } from "@package/org/watermedia/videolan4j/player/embedded/videosurface/callback";
import { $MediaListPlayerEventListener, $MediaListPlayer } from "@package/org/watermedia/videolan4j/player/list";
import { $MediaList, $MediaListEventListener } from "@package/org/watermedia/videolan4j/medialist";
import { $KeyListener, $MouseWheelListener, $MouseMotionListener, $MouseListener } from "@package/java/awt/event";
import { $Window } from "@package/java/awt";
import { $Enum } from "@package/java/lang";
import { $CallbackImagePainter } from "@package/org/watermedia/videolan4j/player/component/callback";
import { $MediaPlayerFactory } from "@package/org/watermedia/videolan4j/factory";
import { $MediaEventListener, $MediaRef } from "@package/org/watermedia/videolan4j/media";
export * as callback from "@package/org/watermedia/videolan4j/player/component/callback";
export * as overlay from "@package/org/watermedia/videolan4j/player/component/overlay";

declare module "@package/org/watermedia/videolan4j/player/component" {
    export class $CallbackMediaListPlayerComponent extends $CallbackMediaListPlayerComponentBase {
        mediaListPlayer(): $MediaListPlayer;
        constructor(arg0: $MediaPlayerFactory, arg1: $FullScreenStrategy, arg2: $InputEvents_, arg3: boolean, arg4: $CallbackImagePainter, arg5: $RenderCallback_, arg6: $BufferFormatCallback, arg7: $BufferCleanupCallback_);
        constructor();
        constructor(arg0: $MediaPlayerFactory, arg1: $FullScreenStrategy, arg2: $InputEvents_, arg3: boolean, arg4: $CallbackImagePainter);
        constructor(arg0: $MediaPlayerFactory, arg1: $FullScreenStrategy, arg2: $InputEvents_, arg3: boolean, arg4: $RenderCallback_, arg5: $BufferFormatCallback, arg6: $BufferCleanupCallback_);
        constructor(arg0: $MediaPlayerSpecs$CallbackMediaPlayerSpec);
        constructor(...arg0: string[]);
    }
    export class $CallbackMediaListPlayerComponentBase extends $CallbackMediaPlayerComponent implements $MediaListPlayerEventListener, $MediaListEventListener {
        mediaListWillDeleteItem(arg0: $MediaList, arg1: $MediaRef, arg2: number): void;
        mediaListEndReached(arg0: $MediaList): void;
        mediaListItemAdded(arg0: $MediaList, arg1: $MediaRef, arg2: number): void;
        mediaListItemDeleted(arg0: $MediaList, arg1: $MediaRef, arg2: number): void;
        mediaListWillAddItem(arg0: $MediaList, arg1: $MediaRef, arg2: number): void;
        mediaListPlayerFinished(arg0: $MediaListPlayer): void;
        nextItem(arg0: $MediaListPlayer, arg1: $MediaRef): void;
        stopped(arg0: $MediaListPlayer): void;
        constructor(arg0: $MediaPlayerFactory, arg1: $FullScreenStrategy, arg2: $InputEvents_, arg3: $BufferFormatCallback, arg4: boolean, arg5: $CallbackImagePainter, arg6: $BufferCleanupCallback_, arg7: $RenderCallback_);
    }
    export class $AudioListPlayerComponentBase extends $AudioPlayerComponent implements $MediaListPlayerEventListener, $MediaListEventListener {
    }
    export class $CallbackMediaPlayerComponent$DefaultBufferFormatCallback extends $BufferFormatCallbackAdapter {
    }
    export class $MediaPlayerSpecs {
        static callbackMediaPlayerSpec(): $MediaPlayerSpecs$CallbackMediaPlayerSpec;
        static audioPlayerSpec(): $MediaPlayerSpecs$AudioPlayerSpec;
        constructor();
    }
    export class $MediaPlayerComponentBase implements $MediaPlayerEventListener, $MediaEventListener, $MouseListener, $MouseMotionListener, $MouseWheelListener, $KeyListener {
    }
    export class $CallbackMediaPlayerComponent$DefaultRenderCallback extends $RenderCallbackAdapter {
    }
    export class $InputEvents extends $Enum<$InputEvents> {
        static values(): $InputEvents[];
        static valueOf(arg0: string): $InputEvents;
        static DISABLE_NATIVE: $InputEvents;
        static NONE: $InputEvents;
        static DEFAULT: $InputEvents;
    }
    /**
     * Values that may be interpreted as {@link $InputEvents}.
     */
    export type $InputEvents_ = "none" | "default" | "disable_native";
    export class $MediaPlayerSpecs$AudioPlayerSpec {
        audioPlayer(): $AudioPlayerComponent;
        audioListPlayer(): $AudioListPlayerComponent;
        withFactory(arg0: $MediaPlayerFactory): $MediaPlayerSpecs$AudioPlayerSpec;
    }
    export class $AudioPlayerComponentBase implements $MediaPlayerEventListener, $MediaEventListener {
    }
    export class $MediaPlayerComponentDefaults {
    }
    export class $CallbackMediaPlayerComponent extends $MediaPlayerComponentBase implements $MediaPlayerComponent {
        mediaPlayerFactory(): $MediaPlayerFactory;
        mediaPlayer(): $EmbeddedMediaPlayer;
        setImagePainter(arg0: $CallbackImagePainter): void;
        release(): void;
        constructor();
        constructor(arg0: $MediaPlayerSpecs$CallbackMediaPlayerSpec);
        constructor(arg0: $MediaPlayerFactory, arg1: boolean, arg2: $RenderCallback_, arg3: $BufferFormatCallback, arg4: $BufferCleanupCallback_);
        constructor(arg0: $MediaPlayerFactory, arg1: $FullScreenStrategy, arg2: $InputEvents_, arg3: boolean, arg4: $CallbackImagePainter);
        constructor(arg0: $MediaPlayerFactory, arg1: $FullScreenStrategy, arg2: $InputEvents_, arg3: boolean, arg4: $RenderCallback_, arg5: $BufferFormatCallback, arg6: $BufferCleanupCallback_);
        constructor(...arg0: string[]);
        constructor(arg0: $MediaPlayerFactory, arg1: $FullScreenStrategy, arg2: $InputEvents_, arg3: boolean, arg4: $CallbackImagePainter, arg5: $RenderCallback_, arg6: $BufferFormatCallback, arg7: $BufferCleanupCallback_);
        set imagePainter(value: $CallbackImagePainter);
    }
    export class $MediaPlayerComponent {
    }
    export interface $MediaPlayerComponent {
        mediaPlayerFactory(): $MediaPlayerFactory;
    }
    /**
     * Values that may be interpreted as {@link $MediaPlayerComponent}.
     */
    export type $MediaPlayerComponent_ = (() => $MediaPlayerFactory);
    export class $AudioPlayerComponent extends $AudioPlayerComponentBase implements $MediaPlayerComponent {
        mediaPlayerFactory(): $MediaPlayerFactory;
        mediaPlayer(): $MediaPlayer;
        release(): void;
        constructor(arg0: $MediaPlayerFactory);
        constructor(arg0: $MediaPlayerSpecs$AudioPlayerSpec);
        constructor();
    }
    export class $MediaPlayerSpecs$CallbackMediaPlayerSpec {
        withFullScreenStrategy(arg0: $FullScreenStrategy): $MediaPlayerSpecs$CallbackMediaPlayerSpec;
        withUnsupportedFullScreenStrategy(): $MediaPlayerSpecs$CallbackMediaPlayerSpec;
        withLockedBuffers(arg0: boolean): $MediaPlayerSpecs$CallbackMediaPlayerSpec;
        withLockedBuffers(): $MediaPlayerSpecs$CallbackMediaPlayerSpec;
        withDefaultFullScreenStrategy(arg0: $Window): $MediaPlayerSpecs$CallbackMediaPlayerSpec;
        withInputEvents(arg0: $InputEvents_): $MediaPlayerSpecs$CallbackMediaPlayerSpec;
        withFactory(arg0: $MediaPlayerFactory): $MediaPlayerSpecs$CallbackMediaPlayerSpec;
        withImagePainter(arg0: $CallbackImagePainter): $MediaPlayerSpecs$CallbackMediaPlayerSpec;
        withRenderCallback(arg0: $RenderCallback_): $MediaPlayerSpecs$CallbackMediaPlayerSpec;
        withBufferFormatCallback(arg0: $BufferFormatCallback): $MediaPlayerSpecs$CallbackMediaPlayerSpec;
        callbackMediaPlayer(): $CallbackMediaPlayerComponent;
        callbackMediaListPlayer(): $CallbackMediaListPlayerComponent;
    }
    export class $AudioListPlayerComponent extends $AudioListPlayerComponentBase {
        mediaListPlayer(): $MediaListPlayer;
        constructor(arg0: $MediaPlayerFactory);
        constructor(arg0: $MediaPlayerSpecs$AudioPlayerSpec);
        constructor();
    }
}
