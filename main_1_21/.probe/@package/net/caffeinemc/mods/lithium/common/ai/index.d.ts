import { $ShufflingList } from "@package/net/minecraft/world/entity/ai/behavior";
import { $Iterator } from "@package/java/util";
import { $Iterable } from "@package/java/lang";
export * as non_poi_block_search from "@package/net/caffeinemc/mods/lithium/common/ai/non_poi_block_search";

declare module "@package/net/caffeinemc/mods/lithium/common/ai" {
    export class $WeightedListIterable<U> {
        static cast<T>(arg0: $ShufflingList<T>): $Iterable<T>;
        [Symbol.iterator](): Iterator<U>
    }
    export interface $WeightedListIterable<U> extends $Iterable<U> {
        iterator(): $Iterator<U>;
        [Symbol.iterator](): Iterator<U>
    }
    /**
     * Values that may be interpreted as {@link $WeightedListIterable}.
     */
    export type $WeightedListIterable_<U> = (() => $Iterator<U>);
    export class $MemoryModificationCounter {
    }
    export interface $MemoryModificationCounter {
        lithium$getModCount(): number;
    }
    /**
     * Values that may be interpreted as {@link $MemoryModificationCounter}.
     */
    export type $MemoryModificationCounter_ = (() => number);
}
