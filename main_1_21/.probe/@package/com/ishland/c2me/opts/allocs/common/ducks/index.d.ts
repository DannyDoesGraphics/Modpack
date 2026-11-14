import { $BlockPredicate } from "@package/net/minecraft/world/level/levelgen/blockpredicates";

declare module "@package/com/ishland/c2me/opts/allocs/common/ducks" {
    export class $CombinedBlockPredicateExtension {
    }
    export interface $CombinedBlockPredicateExtension {
        c2me$getPredicatesArray(): $BlockPredicate[];
    }
    /**
     * Values that may be interpreted as {@link $CombinedBlockPredicateExtension}.
     */
    export type $CombinedBlockPredicateExtension_ = (() => $BlockPredicate[]);
}
