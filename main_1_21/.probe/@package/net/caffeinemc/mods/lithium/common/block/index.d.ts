import { $Level_ } from "@package/net/minecraft/world/level";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $AtomicBoolean } from "@package/java/util/concurrent/atomic";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $SectionedBlockChangeTracker } from "@package/net/caffeinemc/mods/lithium/common/tracking/block";
export * as entity from "@package/net/caffeinemc/mods/lithium/common/block/entity";

declare module "@package/net/caffeinemc/mods/lithium/common/block" {
    export class $ListeningBlockStatePredicate extends $TrackedBlockStatePredicate {
        static FULLY_INITIALIZED: $AtomicBoolean;
        static LISTENING_MASK: number;
    }
    export class $BlockListeningSection {
    }
    export interface $BlockListeningSection {
        lithium$removeFromCallback(arg0: $ListeningBlockStatePredicate, arg1: $SectionedBlockChangeTracker): void;
        lithium$addToCallback(arg0: $ListeningBlockStatePredicate, arg1: $SectionedBlockChangeTracker, arg2: number, arg3: $Level_): void;
    }
    export class $TrackedBlockStatePredicate implements $Predicate<$BlockState> {
        getIndex(): number;
        or(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        negate(): $Predicate<$BlockState>;
        and(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        static FULLY_INITIALIZED: $AtomicBoolean;
        constructor(arg0: number);
        get index(): number;
    }
}
