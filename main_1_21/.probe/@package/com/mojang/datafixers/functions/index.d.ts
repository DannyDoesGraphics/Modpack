import { $Function } from "@package/java/util/function";
import { $DynamicOps } from "@package/com/mojang/serialization";
import { $Type } from "@package/com/mojang/datafixers/types";

declare module "@package/com/mojang/datafixers/functions" {
    export class $PointFree<T> {
        type(): $Type<T>;
        toString(arg0: number): string;
        static indent(arg0: number): string;
        "eval"(): $Function<$DynamicOps<never>, T>;
        evalCached(): $Function<$DynamicOps<never>, T>;
        constructor();
    }
    export class $PointFreeRule {
        static seq(...arg0: $PointFreeRule_[]): $PointFreeRule;
        static all(arg0: $PointFreeRule_): $PointFreeRule;
        static choice(...arg0: $PointFreeRule_[]): $PointFreeRule;
        static nop(): $PointFreeRule;
        static everywhere(arg0: $PointFreeRule_, arg1: $PointFreeRule_): $PointFreeRule;
        static once(arg0: $PointFreeRule_): $PointFreeRule;
        static many(arg0: $PointFreeRule_): $PointFreeRule;
        static one(arg0: $PointFreeRule_): $PointFreeRule;
    }
    export interface $PointFreeRule {
        rewrite<A>(arg0: $PointFree<A>): ($PointFree<A>) | undefined;
        rewriteOrNop<A>(arg0: $PointFree<A>): $PointFree<A>;
    }
    /**
     * Values that may be interpreted as {@link $PointFreeRule}.
     */
    export type $PointFreeRule_ = ((arg0: $PointFree<any>) => ($PointFree<A>) | undefined);
}
