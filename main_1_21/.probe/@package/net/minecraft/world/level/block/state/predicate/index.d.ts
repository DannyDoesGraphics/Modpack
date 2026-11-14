import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Comparable, $Object } from "@package/java/lang";

declare module "@package/net/minecraft/world/level/block/state/predicate" {
    export class $BlockPredicate implements $Predicate<$BlockState> {
        static forBlock(block: $Block_): $BlockPredicate;
        test(state: $BlockState_ | null): boolean;
        or(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        negate(): $Predicate<$BlockState>;
        and(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        constructor(block: $Block_);
    }
    export class $BlockStatePredicate implements $Predicate<$BlockState> {
        static forBlock(block: $Block_): $BlockStatePredicate;
        where<V extends $Comparable<V>>(property: $Property<V>, valuePredicate: $Predicate_<$Object>): $BlockStatePredicate;
        test(state: $BlockState_ | null): boolean;
        or(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        negate(): $Predicate<$BlockState>;
        and(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        static ANY: $Predicate<$BlockState>;
    }
}
