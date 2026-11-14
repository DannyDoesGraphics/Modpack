import { $Direction_ } from "@package/net/minecraft/core";

declare module "@package/net/caffeinemc/mods/lithium/common/block/entity/inventory_comparator_tracking" {
    export class $ComparatorTracker {
    }
    export interface $ComparatorTracker {
        lithium$onComparatorAdded(arg0: $Direction_, arg1: number): void;
        lithium$hasAnyComparatorNearby(): boolean;
    }
}
