import { $libvlc_event_t, $libvlc_instance_t } from "@package/org/watermedia/videolan4j/binding/internal";
import { $MediaListPlayerEventListener, $MediaListPlayer } from "@package/org/watermedia/videolan4j/player/list";
import { $BaseEvent } from "@package/org/watermedia/videolan4j/support/eventmanager";

declare module "@package/org/watermedia/videolan4j/player/list/events" {
    export class $MediaListPlayerEventFactory {
        static createEvent(arg0: $libvlc_instance_t, arg1: $MediaListPlayer, arg2: $libvlc_event_t): $MediaListPlayerEvent;
    }
    export class $MediaListPlayerPlayedEvent extends $MediaListPlayerEvent {
    }
    export class $MediaListPlayerNextItemSetEvent extends $MediaListPlayerEvent {
    }
    export class $MediaListPlayerEvent extends $BaseEvent<$MediaListPlayer, $MediaListPlayerEventListener> {
    }
    export class $MediaListPlayerStoppedEvent extends $MediaListPlayerEvent {
    }
}
