import { $Consumer_, $Function_ } from "@package/java/util/function";
import { $List } from "@package/java/util";
import { $Runnable_ } from "@package/java/lang";
export * as pond from "@package/io/wispforest/owo/util/pond";

declare module "@package/io/wispforest/owo/util" {
    export class $EventStream<T> {
        source(): $EventSource<T>;
        sink(): T;
        constructor(sinkFactory: $Function_<$List<T>, T>);
    }
    export class $EventSource<T> {
        subscribe(subscriber: T): $EventSource$Subscription;
    }
    export class $Observable<T> {
        get(): T;
        static of<T>(initial: T): $Observable<T>;
        set(newValue: T): void;
        observe(observer: $Consumer_<T>): void;
        static observeAll(observer: $Runnable_, ...observables: $Observable<never>[]): void;
        static observeAll<T>(observer: $Consumer_<T>, ...observables: $Observable<T>[]): void;
    }
    export class $EventSource$Subscription {
        cancel(): void;
    }
}
