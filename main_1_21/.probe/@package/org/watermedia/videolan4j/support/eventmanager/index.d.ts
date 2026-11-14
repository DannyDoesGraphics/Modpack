import { $libvlc_callback_t } from "@package/org/watermedia/videolan4j/binding/internal";
import { $Runnable_ } from "@package/java/lang";

declare module "@package/org/watermedia/videolan4j/support/eventmanager" {
    export class $TaskExecutor {
        release(arg0: number): void;
        release(): void;
        submit(arg0: $Runnable_): void;
        constructor();
    }
    export class $BaseEvent<C, L> implements $EventNotification<L> {
    }
    export class $NativeEventManager$EventCallback implements $libvlc_callback_t {
    }
    export class $NativeEventManager<E, L> {
        raiseEvent(arg0: $EventNotification_<L>): void;
        removeEventListener(arg0: L): void;
        addEventListener(arg0: L): void;
        release(): void;
    }
    export class $EventNotification<L> {
    }
    export interface $EventNotification<L> {
        notify(arg0: L): void;
    }
    /**
     * Values that may be interpreted as {@link $EventNotification}.
     */
    export type $EventNotification_<L> = ((arg0: L) => void);
}
