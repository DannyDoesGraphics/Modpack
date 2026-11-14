
declare module "@package/org/reactivestreams" {
    export class $Publisher<T> {
    }
    export interface $Publisher<T> {
        subscribe(arg0: $Subscriber<T>): void;
    }
    /**
     * Values that may be interpreted as {@link $Publisher}.
     */
    export type $Publisher_<T> = ((arg0: $Subscriber<T>) => void);
}
