import { $Predicate, $Predicate_, $BiPredicate, $BiPredicate_ } from "@package/java/util/function";
import { $BlockPos$MutableBlockPos } from "@package/net/minecraft/core";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ChunkAccess } from "@package/net/minecraft/world/level/chunk";

declare module "@package/net/caffeinemc/mods/lithium/common/ai/non_poi_block_search" {
    export class $LithiumMoveToBlockGoal {
    }
    export interface $LithiumMoveToBlockGoal {
        lithium$findNearestBlock(arg0: $Predicate_<$BlockState>, arg1: $BiPredicate_<$ChunkAccess, $BlockPos$MutableBlockPos>, arg2: boolean): boolean;
    }
    /**
     * Values that may be interpreted as {@link $LithiumMoveToBlockGoal}.
     */
    export type $LithiumMoveToBlockGoal_ = ((arg0: $Predicate<$BlockState>, arg1: $BiPredicate<$ChunkAccess, $BlockPos$MutableBlockPos>, arg2: boolean) => boolean);
}
