import { $libvlc_event_t, $libvlc_instance_t } from "@package/org/watermedia/videolan4j/binding/internal";
import { $BaseEvent } from "@package/org/watermedia/videolan4j/support/eventmanager";
import { $MediaEventListener, $Media } from "@package/org/watermedia/videolan4j/media";

declare module "@package/org/watermedia/videolan4j/media/events" {
    export class $MediaParsedChangedEvent extends $MediaEvent {
    }
    export class $MediaSubItemAddedEvent extends $MediaEvent {
    }
    export class $MediaEventFactory {
        static createEvent(arg0: $libvlc_instance_t, arg1: $Media, arg2: $libvlc_event_t): $MediaEvent;
    }
    export class $MediaThumbnailGeneratedEvent extends $MediaEvent {
    }
    export class $MediaStateChangedEvent extends $MediaEvent {
    }
    export class $MediaFreedEvent extends $MediaEvent {
    }
    export class $MediaMetaChangedEvent extends $MediaEvent {
    }
    export class $MediaEvent extends $BaseEvent<$Media, $MediaEventListener> {
    }
    export class $MediaSubItemTreeAddedEvent extends $MediaEvent {
    }
    export class $MediaDurationChangedEvent extends $MediaEvent {
    }
}
