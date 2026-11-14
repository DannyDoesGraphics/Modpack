import { $Object } from "@package/java/lang";

declare module "@package/java/lang/ref" {
    export class $Reference<T> {
        get(): T;
        clear(): void;
        static reachabilityFence(arg0: $Object): void;
        enqueue(): boolean;
        refersTo(arg0: T): boolean;
        /**
         * @deprecated
         */
        isEnqueued(): boolean;
        get enqueued(): boolean;
    }
    export class $WeakReference<T> extends $Reference<T> {
        constructor(arg0: T);
        constructor(arg0: T, arg1: $ReferenceQueue<T>);
    }
    export class $ReferenceQueue<T> {
        remove(): $Reference<T>;
        remove(arg0: number): $Reference<T>;
        poll(): $Reference<T>;
        constructor();
    }
}
