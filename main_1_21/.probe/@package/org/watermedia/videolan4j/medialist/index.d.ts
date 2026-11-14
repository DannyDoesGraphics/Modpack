import { $libvlc_media_list_t, $libvlc_instance_t } from "@package/org/watermedia/videolan4j/binding/internal";
import { $URI } from "@package/java/net";
import { $CallbackMedia } from "@package/org/watermedia/videolan4j/media/callback";
import { $List } from "@package/java/util";
import { $NativeEventManager } from "@package/org/watermedia/videolan4j/support/eventmanager";
import { $Media, $MediaRef } from "@package/org/watermedia/videolan4j/media";
export * as events from "@package/org/watermedia/videolan4j/medialist/events";

declare module "@package/org/watermedia/videolan4j/medialist" {
    export class $MediaApi extends $BaseApi {
        newMediaRef(arg0: number): $MediaRef;
        mrl(arg0: number): string;
        newMedia(arg0: number): $Media;
        newMediaListRef(): $MediaListRef;
        newMediaList(): $MediaList;
        mrls(): $List<string>;
        remove(arg0: number): boolean;
        insert(arg0: number, arg1: $URI, ...arg2: string[]): boolean;
        insert(arg0: number, arg1: $CallbackMedia, ...arg2: string[]): boolean;
        insert(arg0: number, arg1: $MediaRef, ...arg2: string[]): boolean;
        clear(): boolean;
        add(arg0: $CallbackMedia, ...arg1: string[]): boolean;
        add(arg0: $URI, ...arg1: string[]): boolean;
        add(arg0: $MediaRef, ...arg1: string[]): boolean;
        count(): number;
        isReadOnly(): boolean;
        get readOnly(): boolean;
    }
    export class $MediaListEventListener {
    }
    export interface $MediaListEventListener {
        mediaListWillDeleteItem(arg0: $MediaList, arg1: $MediaRef, arg2: number): void;
        mediaListEndReached(arg0: $MediaList): void;
        mediaListItemAdded(arg0: $MediaList, arg1: $MediaRef, arg2: number): void;
        mediaListItemDeleted(arg0: $MediaList, arg1: $MediaRef, arg2: number): void;
        mediaListWillAddItem(arg0: $MediaList, arg1: $MediaRef, arg2: number): void;
    }
    export class $MediaList {
        media(): $MediaApi;
        newMediaListRef(): $MediaListRef;
        newMediaList(): $MediaList;
        mediaListInstance(): $libvlc_media_list_t;
        release(): void;
        events(): $EventApi;
        constructor(arg0: $libvlc_instance_t, arg1: $libvlc_media_list_t);
    }
    export class $MediaListRef {
        newMediaListRef(): $MediaListRef;
        newMediaList(): $MediaList;
        mediaListInstance(): $libvlc_media_list_t;
        release(): void;
        constructor(arg0: $libvlc_instance_t, arg1: $libvlc_media_list_t);
    }
    export class $MediaListNativeEventManager extends $NativeEventManager<$MediaList, $MediaListEventListener> {
    }
    export class $MediaListEventAdapter implements $MediaListEventListener {
        mediaListWillDeleteItem(arg0: $MediaList, arg1: $MediaRef, arg2: number): void;
        mediaListEndReached(arg0: $MediaList): void;
        mediaListItemAdded(arg0: $MediaList, arg1: $MediaRef, arg2: number): void;
        mediaListItemDeleted(arg0: $MediaList, arg1: $MediaRef, arg2: number): void;
        mediaListWillAddItem(arg0: $MediaList, arg1: $MediaRef, arg2: number): void;
        constructor();
    }
    export class $BaseApi {
    }
    export class $EventApi extends $BaseApi {
        removeMediaListEventListener(arg0: $MediaListEventListener): void;
        addMediaListEventListener(arg0: $MediaListEventListener): void;
    }
    export class $MediaListFactory {
        static newMediaListRef(arg0: $libvlc_instance_t): $MediaListRef;
        static newMediaList(arg0: $libvlc_instance_t): $MediaList;
    }
}
