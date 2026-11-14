import { $Waiter } from "@package/org/watermedia/videolan4j/waiter";
import { $State_ } from "@package/org/watermedia/videolan4j/player/base";
import { $Object } from "@package/java/lang";
import { $MediaEventAdapter, $MediaEventListener, $Meta_, $MediaParsedStatus_, $Media, $Picture, $MediaRef } from "@package/org/watermedia/videolan4j/media";

declare module "@package/org/watermedia/videolan4j/waiter/media" {
    export class $MediaWaiter<R> extends $Waiter<$Media, R> implements $MediaEventListener {
        mediaThumbnailGenerated(arg0: $Media, arg1: $Picture): void;
        mediaSubItemTreeAdded(arg0: $Media, arg1: $MediaRef): void;
        mediaStateChanged(arg0: $Media, arg1: $State_): void;
        mediaFreed(arg0: $Media, arg1: $MediaRef): void;
        mediaParsedChanged(arg0: $Media, arg1: $MediaParsedStatus_): void;
        mediaDurationChanged(arg0: $Media, arg1: number): void;
        mediaSubItemAdded(arg0: $Media, arg1: $MediaRef): void;
        mediaMetaChanged(arg0: $Media, arg1: $Meta_): void;
    }
    export class $ThumbnailGeneratedWaiter extends $MediaWaiter<$Picture> {
        constructor(arg0: $Media);
    }
    export class $ParsedWaiter extends $MediaWaiter<$Object> {
        constructor(arg0: $Media);
    }
    export class $MediaWaiter$InternalListener extends $MediaEventAdapter {
    }
}
