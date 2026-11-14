import { $Duration_ } from "@package/java/time";
import { $Consumer_ } from "@package/java/util/function";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $Callable_, $TimeUnit_, $Executor_ } from "@package/java/util/concurrent";
import { $Record, $Exception } from "@package/java/lang";
import { $TimeSource_ } from "@package/net/minecraft/util";

declare module "@package/com/mojang/realmsclient/gui/task" {
    export class $DataFetcher$Subscription {
        forceUpdate(): void;
        reset(): void;
        tick(): void;
        subscribe<T>(task: $DataFetcher$Task<T>, output: $Consumer_<T>): void;
        constructor(arg0: $DataFetcher);
    }
    export class $DataFetcher {
        createTask<T>(id: string, updater: $Callable_<T>, period: $Duration_, repeatStrategy: $RepeatedDelayStrategy): $DataFetcher$Task<T>;
        createSubscription(): $DataFetcher$Subscription;
        constructor(executor: $Executor_, resolution: $TimeUnit_, timeSource: $TimeSource_);
    }
    export class $DataFetcher$SuccessfulComputationResult<T> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $DataFetcher$SuccessfulComputationResult}.
     */
    export type $DataFetcher$SuccessfulComputationResult_<T> = { value?: any, time?: number,  } | [value?: any, time?: number, ];
    export class $DataFetcher$ComputationResult<T> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $DataFetcher$ComputationResult}.
     */
    export type $DataFetcher$ComputationResult_<T> = { value?: $Either<any, $Exception>, time?: number,  } | [value?: $Either<any, $Exception>, time?: number, ];
    export class $DataFetcher$SubscribedTask<T> {
    }
    export class $RepeatedDelayStrategy {
        static exponentialBackoff(maxFailureDelay: number): $RepeatedDelayStrategy;
        static CONSTANT: $RepeatedDelayStrategy;
    }
    export interface $RepeatedDelayStrategy {
        delayCyclesAfterSuccess(): number;
        delayCyclesAfterFailure(): number;
    }
    export class $DataFetcher$Task<T> {
        reset(): void;
    }
}
