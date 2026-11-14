import { $UnificationLookup } from "@package/com/almostreliable/unified/api/unification";
import { $LootTable, $LootPool } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/com/almostreliable/unified/unification/loot" {
    export class $LootUnificationHandler {
        static cast(table: $LootTable): $LootUnificationHandler;
        static cast(pool: $LootPool): $LootUnificationHandler;
    }
    export interface $LootUnificationHandler {
        almostunified$unify(arg0: $UnificationLookup): boolean;
    }
    /**
     * Values that may be interpreted as {@link $LootUnificationHandler}.
     */
    export type $LootUnificationHandler_ = ((arg0: $UnificationLookup) => boolean);
}
