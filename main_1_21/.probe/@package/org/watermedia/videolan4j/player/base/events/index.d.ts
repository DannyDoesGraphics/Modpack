import { $libvlc_event_t, $libvlc_instance_t } from "@package/org/watermedia/videolan4j/binding/internal";
import { $MediaPlayerEventListener, $MediaPlayer } from "@package/org/watermedia/videolan4j/player/base";
import { $EventNotification } from "@package/org/watermedia/videolan4j/support/eventmanager";

declare module "@package/org/watermedia/videolan4j/player/base/events" {
    export class $MediaPlayerPausedEvent extends $MediaPlayerEvent {
    }
    export class $MediaPlayerEncounteredErrorEvent extends $MediaPlayerEvent {
    }
    export class $MediaPlayerStoppedEvent extends $MediaPlayerEvent {
    }
    export class $MediaPlayerPositionChangedEvent extends $MediaPlayerEvent {
    }
    export class $MediaPlayerESAddedEvent extends $MediaPlayerEvent {
    }
    export class $MediaPlayerPausableChangedEvent extends $MediaPlayerEvent {
    }
    export class $MediaPlayerForwardEvent extends $MediaPlayerEvent {
    }
    export class $MediaPlayerTimeChangedEvent extends $MediaPlayerEvent {
    }
    export class $MediaPlayerSnapshotTakenEvent extends $MediaPlayerEvent {
    }
    export class $MediaPlayerBackwardEvent extends $MediaPlayerEvent {
    }
    export class $MediaPlayerAudioVolumeEvent extends $MediaPlayerEvent {
    }
    export class $MediaPlayerMutedEvent extends $MediaPlayerEvent {
    }
    export class $MediaPlayerSeekableChangedEvent extends $MediaPlayerEvent {
    }
    export class $MediaPlayerEvent implements $EventNotification<$MediaPlayerEventListener> {
    }
    export class $MediaPlayerMediaChangedEvent extends $MediaPlayerEvent {
    }
    export class $MediaPlayerEndReachedEvent extends $MediaPlayerEvent {
    }
    export class $MediaPlayerUncorkedEvent extends $MediaPlayerEvent {
    }
    export class $MediaPlayerOpeningEvent extends $MediaPlayerEvent {
    }
    export class $MediaPlayerTitleChangedEvent extends $MediaPlayerEvent {
    }
    export class $MediaPlayerESDeletedEvent extends $MediaPlayerEvent {
    }
    export class $MediaPlayerBufferingEvent extends $MediaPlayerEvent {
    }
    export class $MediaPlayerVoutEvent extends $MediaPlayerEvent {
    }
    export class $MediaPlayerLengthChangedEvent extends $MediaPlayerEvent {
    }
    export class $MediaPlayerUnmutedEvent extends $MediaPlayerEvent {
    }
    export class $MediaPlayerCorkedEvent extends $MediaPlayerEvent {
    }
    export class $MediaPlayerAudioDeviceEvent extends $MediaPlayerEvent {
    }
    export class $MediaPlayerPlayingEvent extends $MediaPlayerEvent {
    }
    export class $MediaPlayerChapterChangedEvent extends $MediaPlayerEvent {
    }
    export class $MediaPlayerESSelectedEvent extends $MediaPlayerEvent {
    }
    export class $MediaPlayerNothingSpecialEvent extends $MediaPlayerEvent {
    }
    export class $MediaPlayerReadyEvent extends $MediaPlayerEvent {
    }
    export class $MediaPlayerScrambledChangedEvent extends $MediaPlayerEvent {
    }
    export class $MediaPlayerEventFactory {
        static createMediaPlayerReadyEvent(arg0: $MediaPlayer): $MediaPlayerEvent;
        static createEvent(arg0: $libvlc_instance_t, arg1: $MediaPlayer, arg2: $libvlc_event_t): $MediaPlayerEvent;
    }
}
