import { $libvlc_instance_t, $libvlc_media_list_player_t } from "@package/org/watermedia/videolan4j/binding/internal";
import { $State, $MediaPlayer } from "@package/org/watermedia/videolan4j/player/base";
import { $MediaApi, $EventApi as $EventApi$1, $MediaListRef, $MediaList } from "@package/org/watermedia/videolan4j/medialist";
import { $Object, $Runnable_, $Enum } from "@package/java/lang";
import { $NativeEventManager } from "@package/org/watermedia/videolan4j/support/eventmanager";
import { $MediaRef } from "@package/org/watermedia/videolan4j/media";
export * as events from "@package/org/watermedia/videolan4j/player/list/events";

declare module "@package/org/watermedia/videolan4j/player/list" {
    export class $MediaListPlayerEventListener {
    }
    export interface $MediaListPlayerEventListener {
        mediaListPlayerFinished(arg0: $MediaListPlayer): void;
        nextItem(arg0: $MediaListPlayer, arg1: $MediaRef): void;
        stopped(arg0: $MediaListPlayer): void;
    }
    export class $MediaListPlayerNativeEventManager extends $NativeEventManager<$MediaListPlayer, $MediaListPlayerEventListener> {
    }
    export class $PlaybackMode extends $Enum<$PlaybackMode> {
        static playbackMode(arg0: number): $PlaybackMode;
        static values(): $PlaybackMode[];
        intValue(): number;
        static valueOf(arg0: string): $PlaybackMode;
        static REPEAT: $PlaybackMode;
        static LOOP: $PlaybackMode;
        static DEFAULT: $PlaybackMode;
    }
    /**
     * Values that may be interpreted as {@link $PlaybackMode}.
     */
    export type $PlaybackMode_ = "default" | "loop" | "repeat";
    export class $MediaListPlayerEventAdapter implements $MediaListPlayerEventListener {
        mediaListPlayerFinished(arg0: $MediaListPlayer): void;
        nextItem(arg0: $MediaListPlayer, arg1: $MediaRef): void;
        stopped(arg0: $MediaListPlayer): void;
        constructor();
    }
    export class $MediaPlayerApi extends $BaseApi {
        mediaPlayer(): $MediaPlayer;
        setMediaPlayer(arg0: $MediaPlayer): void;
    }
    export class $EventApi extends $BaseApi {
        removeMediaListPlayerEventListener(arg0: $MediaListPlayerEventListener): void;
        addMediaListPlayerEventListener(arg0: $MediaListPlayerEventListener): void;
    }
    export class $StatusApi extends $BaseApi {
        isPlaying(): boolean;
        getMediaListPlayerState(): $State;
        get playing(): boolean;
        get mediaListPlayerState(): $State;
    }
    export class $ListApi extends $BaseApi {
        media(): $MediaApi;
        newMediaListRef(): $MediaListRef;
        newMediaList(): $MediaList;
        setMediaList(arg0: $MediaListRef): void;
        events(): $EventApi$1;
        isValid(): boolean;
        set mediaList(value: $MediaListRef);
        get valid(): boolean;
    }
    export class $ControlsApi extends $BaseApi {
        play(arg0: number): boolean;
        play(): void;
        playNext(): boolean;
        playPrevious(): boolean;
        setMode(arg0: $PlaybackMode_): boolean;
        stop(): void;
        pause(): void;
        setPause(arg0: boolean): void;
        set mode(value: $PlaybackMode_);
    }
    export class $MediaListPlayer {
        mediaPlayer(): $MediaPlayerApi;
        mediaListPlayerInstance(): $libvlc_media_list_player_t;
        userData(arg0: $Object): void;
        userData(): $Object;
        list(): $ListApi;
        status(): $StatusApi;
        release(): void;
        events(): $EventApi;
        submit(arg0: $Runnable_): void;
        controls(): $ControlsApi;
        constructor(arg0: $libvlc_instance_t);
    }
    export class $BaseApi {
    }
}
