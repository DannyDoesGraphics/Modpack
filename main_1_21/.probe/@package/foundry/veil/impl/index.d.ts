import { $TickTaskScheduler$TickTask, $TickTaskScheduler } from "@package/foundry/veil/api";
import { $Callable_ } from "@package/java/util/concurrent";
import { $Runnable_ } from "@package/java/lang";

declare module "@package/foundry/veil/impl" {
    export class $TickTaskSchedulerImpl implements $TickTaskScheduler {
        run(): void;
        shutdown(): void;
        execute(arg0: $Runnable_): void;
        schedule<V>(arg0: $Callable_<V>, arg1: number): $TickTaskScheduler$TickTask<V>;
        schedule(arg0: $Runnable_, arg1: number): $TickTaskScheduler$TickTask<never>;
        isShutdown(): boolean;
        scheduleAtFixedRate(arg0: $Runnable_, arg1: number, arg2: number): $TickTaskScheduler$TickTask<never>;
        constructor();
    }
}
