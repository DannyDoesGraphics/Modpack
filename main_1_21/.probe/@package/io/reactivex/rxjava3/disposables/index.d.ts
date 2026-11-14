import { $Action_ } from "@package/io/reactivex/rxjava3/functions";
import { $Subscription } from "@package/org/reactivestreams";
import { $Future } from "@package/java/util/concurrent";
import { $Runnable_, $AutoCloseable_, $AutoCloseable } from "@package/java/lang";

declare module "@package/io/reactivex/rxjava3/disposables" {
    export class $DisposableContainer {
    }
    export interface $DisposableContainer {
        remove(d: $Disposable): boolean;
        add(d: $Disposable): boolean;
        "delete"(d: $Disposable): boolean;
    }
    export class $Disposable {
        static fromRunnable(run: $Runnable_): $Disposable;
        static fromAction(action: $Action_): $Disposable;
        static fromFuture(future: $Future<never>): $Disposable;
        static fromFuture(future: $Future<never>, allowInterrupt: boolean): $Disposable;
        static fromSubscription(subscription: $Subscription): $Disposable;
        static fromAutoCloseable(autoCloseable: $AutoCloseable_): $Disposable;
        static toAutoCloseable(disposable: $Disposable): $AutoCloseable;
        static empty(): $Disposable;
        static disposed(): $Disposable;
    }
    export interface $Disposable {
        isDisposed(): boolean;
        dispose(): void;
    }
}
