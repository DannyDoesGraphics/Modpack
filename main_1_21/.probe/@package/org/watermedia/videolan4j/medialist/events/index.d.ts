import { $libvlc_event_t, $libvlc_instance_t } from "@package/org/watermedia/videolan4j/binding/internal";
import { $MediaListEventListener, $MediaList } from "@package/org/watermedia/videolan4j/medialist";
import { $BaseEvent } from "@package/org/watermedia/videolan4j/support/eventmanager";

declare module "@package/org/watermedia/videolan4j/medialist/events" {
    export class $MediaListWillAddItemEvent extends $MediaListEvent {
    }
    export class $MediaListEvent extends $BaseEvent<$MediaList, $MediaListEventListener> {
    }
    export class $MediaListItemDeletedEvent extends $MediaListEvent {
    }
    export class $MediaListEventFactory {
        static createEvent(arg0: $libvlc_instance_t, arg1: $MediaList, arg2: $libvlc_event_t): $MediaListEvent;
    }
    export class $MediaListWillDeleteItemEvent extends $MediaListEvent {
    }
    export class $MediaListItemAddedEvent extends $MediaListEvent {
    }
    export class $MediaListEndReachedEvent extends $MediaListEvent {
    }
}
