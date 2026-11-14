import { $libvlc_event_t } from "@package/org/watermedia/videolan4j/binding/internal";
import { $EventNotification } from "@package/org/watermedia/videolan4j/support/eventmanager";
import { $RendererDiscoverer, $RendererDiscovererEventListener } from "@package/org/watermedia/videolan4j/player/renderer";

declare module "@package/org/watermedia/videolan4j/player/renderer/events" {
    export class $RendererDiscovererEventFactory {
        static createEvent(arg0: $RendererDiscoverer, arg1: $libvlc_event_t): $RendererDiscovererEvent;
    }
    export class $RendererDiscovererEvent implements $EventNotification<$RendererDiscovererEventListener> {
    }
    export class $RendererDiscovererItemDeletedEvent extends $RendererDiscovererEvent {
    }
    export class $RendererDiscovererItemAddedEvent extends $RendererDiscovererEvent {
    }
}
