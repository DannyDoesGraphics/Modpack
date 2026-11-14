import { $Throwable, $Runnable_ } from "@package/java/lang";

declare module "@package/com/ishland/flowsched/executor" {
    export class $Task {
        run(arg0: $Runnable_): void;
        propagateException(arg0: $Throwable): void;
        lockTokens(): $LockToken[];
        static P_REMOVED: number;
        static TOMBSTONE: $Task;
        static P_UNINITIALIZED: number;
        constructor();
    }
    export class $LockToken {
    }
    export interface $LockToken {
    }
}
