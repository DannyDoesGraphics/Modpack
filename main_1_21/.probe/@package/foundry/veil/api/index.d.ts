import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Callable_, $CompletableFuture, $Executor, $ScheduledFuture } from "@package/java/util/concurrent";
import { $Runnable_ } from "@package/java/lang";
export * as quasar from "@package/foundry/veil/api/quasar";
export * as client from "@package/foundry/veil/api/client";
export * as resource from "@package/foundry/veil/api/resource";
export * as flare from "@package/foundry/veil/api/flare";
export * as network from "@package/foundry/veil/api/network";

declare module "@package/foundry/veil/api" {
    export class $TickTaskScheduler {
        static get(arg0: $MinecraftServer): $TickTaskScheduler;
    }
    export interface $TickTaskScheduler extends $Executor {
        execute(arg0: $Runnable_): void;
        schedule<V>(arg0: $Callable_<V>, arg1: number): $TickTaskScheduler$TickTask<V>;
        schedule(arg0: $Runnable_, arg1: number): $TickTaskScheduler$TickTask<never>;
        isShutdown(): boolean;
        scheduleAtFixedRate(arg0: $Runnable_, arg1: number, arg2: number): $TickTaskScheduler$TickTask<never>;
        get shutdown(): boolean;
    }
    export class $TickTaskScheduler$TickTask<V> {
    }
    export interface $TickTaskScheduler$TickTask<V> extends $ScheduledFuture<V> {
        getDelay(): number;
        toCompletableFuture(): $CompletableFuture<V>;
        get delay(): number;
    }
}
