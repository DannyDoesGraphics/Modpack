import { $Executor_, $Future } from "@package/java/util/concurrent";
import { $Runnable_ } from "@package/java/lang";

declare module "@package/com/google/common/util/concurrent" {
    export class $ListenableFuture<V> {
    }
    export interface $ListenableFuture<V> extends $Future<V> {
        addListener(listener: $Runnable_, executor: $Executor_): void;
    }
}
