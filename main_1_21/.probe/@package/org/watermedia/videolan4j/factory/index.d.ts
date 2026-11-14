import { $EmbeddedMediaPlayer } from "@package/org/watermedia/videolan4j/player/embedded";
import { $CallbackVideoSurface } from "@package/org/watermedia/videolan4j/player/embedded/videosurface";
import { $BufferCleanupCallback_, $BufferFormatCallback, $RenderCallback_ } from "@package/org/watermedia/videolan4j/player/embedded/videosurface/callback";
import { $MediaListPlayer } from "@package/org/watermedia/videolan4j/player/list";
import { $Spliterator, $Iterator, $List, $Collection_, $List_, $Map } from "@package/java/util";
import { $TrackType_, $MediaRef, $Media } from "@package/org/watermedia/videolan4j/media";
import { $Consumer_ } from "@package/java/util/function";
import { $libvlc_dialog_cancel_cb, $libvlc_dialog_display_question_cb, $libvlc_dialog_display_login_cb, $libvlc_dialog_display_progress_cb, $libvlc_dialog_update_progress_cb, $libvlc_dialog_display_error_cb } from "@package/org/watermedia/videolan4j/binding/internal";
import { $Equalizer, $MediaPlayer, $AudioDevice } from "@package/org/watermedia/videolan4j/player/base";
import { $URI } from "@package/java/net";
import { $CallbackMedia } from "@package/org/watermedia/videolan4j/media/callback";
import { $NativeLog } from "@package/org/watermedia/videolan4j/log";
import { $MediaListRef, $MediaList } from "@package/org/watermedia/videolan4j/medialist";
import { $MediaDiscoverer, $MediaDiscovererCategory_, $MediaDiscovererDescription } from "@package/org/watermedia/videolan4j/media/discoverer";
import { $Throwable, $Enum, $RuntimeException, $Runnable_, $Iterable } from "@package/java/lang";
import { $RendererDiscoverer, $RendererDiscovererDescription } from "@package/org/watermedia/videolan4j/player/renderer";

declare module "@package/org/watermedia/videolan4j/factory" {
    export class $MediaApi extends $BaseApi {
        newMediaRef(arg0: $Media, ...arg1: string[]): $MediaRef;
        newMediaRef(arg0: $CallbackMedia, ...arg1: string[]): $MediaRef;
        newMediaRef(arg0: $URI, ...arg1: string[]): $MediaRef;
        newMediaRef(arg0: $MediaRef, ...arg1: string[]): $MediaRef;
        newMedia(arg0: $MediaRef, ...arg1: string[]): $Media;
        newMedia(arg0: $CallbackMedia, ...arg1: string[]): $Media;
        newMedia(arg0: $Media, ...arg1: string[]): $Media;
        newMedia(arg0: $URI, ...arg1: string[]): $Media;
        newMediaListRef(): $MediaListRef;
        newMediaList(): $MediaList;
    }
    export class $VideoSurfaceApi extends $BaseApi {
        newVideoSurface(arg0: $BufferFormatCallback, arg1: $RenderCallback_, arg2: boolean, arg3: $BufferCleanupCallback_): $CallbackVideoSurface;
    }
    export class $Dialogs {
        addDialogHandler(arg0: $DialogHandler): void;
        removeDialogHandler(arg0: $DialogHandler): void;
    }
    export class $Dialogs$DisplayLogin implements $libvlc_dialog_display_login_cb {
    }
    export class $DialogHandlerAdapter implements $DialogHandler {
        displayError(arg0: number, arg1: string, arg2: string): void;
        displayLogin(arg0: number, arg1: $DialogId, arg2: string, arg3: string, arg4: string, arg5: boolean): void;
        displayQuestion(arg0: number, arg1: $DialogId, arg2: string, arg3: string, arg4: $DialogQuestionType_, arg5: string, arg6: string, arg7: string): void;
        displayProgress(arg0: number, arg1: $DialogId, arg2: string, arg3: string, arg4: number, arg5: number, arg6: string): void;
        cancel(arg0: number, arg1: $DialogId): void;
        updateProgress(arg0: number, arg1: $DialogId, arg2: number, arg3: string): void;
        constructor();
    }
    export class $AudioApi extends $BaseApi {
        audioOutputs(): $List<$AudioOutput>;
    }
    export class $RendererApi extends $BaseApi {
        discoverers(): $List<$RendererDiscovererDescription>;
        discoverer(arg0: string): $RendererDiscoverer;
    }
    export class $NativeLibraryPath {
    }
    export class $BaseApi {
    }
    export class $MediaPlayerApi extends $BaseApi {
        newMediaPlayer(arg0: $MediaListPlayer): $MediaPlayer;
        newMediaPlayer(): $MediaPlayer;
        newEmbeddedMediaPlayer(arg0: $MediaListPlayer): $EmbeddedMediaPlayer;
        newEmbeddedMediaPlayer(): $EmbeddedMediaPlayer;
        newMediaListPlayer(): $MediaListPlayer;
    }
    export class $AudioOutput implements $Iterable<$AudioDevice> {
        getDevices(): $List<$AudioDevice>;
        getDescription(): string;
        getName(): string;
        iterator(): $Iterator<$AudioDevice>;
        spliterator(): $Spliterator<$AudioDevice>;
        forEach(arg0: $Consumer_<$AudioDevice>): void;
        constructor(arg0: string, arg1: string, arg2: $List_<$AudioDevice>);
        [Symbol.iterator](): Iterator<$AudioDevice>
        get devices(): $List<$AudioDevice>;
        get description(): string;
        get name(): string;
    }
    export class $Dialogs$Cancel implements $libvlc_dialog_cancel_cb {
    }
    export class $DialogHandler {
    }
    export interface $DialogHandler {
        displayError(arg0: number, arg1: string, arg2: string): void;
        displayLogin(arg0: number, arg1: $DialogId, arg2: string, arg3: string, arg4: string, arg5: boolean): void;
        displayQuestion(arg0: number, arg1: $DialogId, arg2: string, arg3: string, arg4: $DialogQuestionType_, arg5: string, arg6: string, arg7: string): void;
        displayProgress(arg0: number, arg1: $DialogId, arg2: string, arg3: string, arg4: number, arg5: number, arg6: string): void;
        cancel(arg0: number, arg1: $DialogId): void;
        updateProgress(arg0: number, arg1: $DialogId, arg2: number, arg3: string): void;
    }
    export class $Dialogs$DisplayError implements $libvlc_dialog_display_error_cb {
    }
    export class $DialogId {
    }
    export class $DialogType extends $Enum<$DialogType> {
        static values(): $DialogType[];
        static valueOf(arg0: string): $DialogType;
        static PROGRESS: $DialogType;
        static ERROR: $DialogType;
        static LOGIN: $DialogType;
        static QUESTION: $DialogType;
    }
    /**
     * Values that may be interpreted as {@link $DialogType}.
     */
    export type $DialogType_ = "error" | "login" | "question" | "progress";
    export class $EqualizerApi extends $BaseApi {
        presets(): $List<string>;
        bands(): $List<number>;
        newEqualizer(arg0: string): $Equalizer;
        newEqualizer(): $Equalizer;
        allPresetEqualizers(): $Map<string, $Equalizer>;
    }
    export class $Dialogs$DisplayQuestion implements $libvlc_dialog_display_question_cb {
    }
    export class $ModuleDescription {
        longName(): string;
        name(): string;
        shortName(): string;
        help(): string;
        constructor(arg0: string, arg1: string, arg2: string, arg3: string);
    }
    export class $ApplicationApi extends $BaseApi {
        setApplicationId(arg0: string, arg1: string, arg2: string): void;
        changeset(): string;
        newLog(): $NativeLog;
        codecDescription(arg0: $TrackType_, arg1: number): string;
        audioFilters(): $List<$ModuleDescription>;
        videoFilters(): $List<$ModuleDescription>;
        setUserAgent(arg0: string, arg1: string): void;
        setUserAgent(arg0: string): void;
        version(): string;
        clock(): number;
        compiler(): string;
    }
    export class $Dialogs$UpdateProgress implements $libvlc_dialog_update_progress_cb {
    }
    export class $DialogsApi extends $BaseApi {
        newDialogs(...arg0: $DialogType_[]): $Dialogs;
        postLogin(arg0: $DialogId, arg1: string, arg2: string, arg3: boolean): boolean;
        postAction(arg0: $DialogId, arg1: number): boolean;
        dismiss(arg0: $DialogId): boolean;
        enable(arg0: $Dialogs): void;
        enable(arg0: $Dialogs, arg1: number): void;
        disable(): void;
        disable(arg0: number): void;
    }
    export class $NativeLibraryMappingException extends $RuntimeException {
        constructor(arg0: string, arg1: $Throwable);
    }
    export class $MediaPlayerFactory {
        renderers(): $RendererApi;
        media(): $MediaApi;
        audio(): $AudioApi;
        equalizer(): $EqualizerApi;
        dialogs(): $DialogsApi;
        mediaDiscoverers(): $MediaDiscovererApi;
        mediaPlayers(): $MediaPlayerApi;
        videoSurfaces(): $VideoSurfaceApi;
        release(): void;
        submit(arg0: $Runnable_): void;
        application(): $ApplicationApi;
        constructor(arg0: $Collection_<string>);
        constructor(...arg0: string[]);
    }
    export class $DialogQuestionType extends $Enum<$DialogQuestionType> {
        static questionType(arg0: number): $DialogQuestionType;
        static values(): $DialogQuestionType[];
        intValue(): number;
        static valueOf(arg0: string): $DialogQuestionType;
        static WARNING: $DialogQuestionType;
        static NORMAL: $DialogQuestionType;
        static CRITICAL: $DialogQuestionType;
    }
    /**
     * Values that may be interpreted as {@link $DialogQuestionType}.
     */
    export type $DialogQuestionType_ = "normal" | "warning" | "critical";
    export class $MediaDiscovererApi extends $BaseApi {
        discoverers(arg0: $MediaDiscovererCategory_): $List<$MediaDiscovererDescription>;
        discoverer(arg0: string): $MediaDiscoverer;
    }
    export class $Dialogs$DisplayProgress implements $libvlc_dialog_display_progress_cb {
    }
}
