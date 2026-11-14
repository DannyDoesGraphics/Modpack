import { $Predicate } from "@package/java/util/function";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";

declare module "@package/net/caffeinemc/mods/lithium/mixin/world/combined_heightmap_update" {
    export class $HeightmapAccessor {
    }
    export interface $HeightmapAccessor {
        callSet(arg0: number, arg1: number, arg2: number): void;
        getBlockPredicate(): $Predicate<$BlockState>;
        get blockPredicate(): $Predicate<$BlockState>;
    }
}
