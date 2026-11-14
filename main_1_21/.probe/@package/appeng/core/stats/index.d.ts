import { $Criterion } from "@package/net/minecraft/advancements";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Enum } from "@package/java/lang";
import { $PlayerTrigger } from "@package/net/minecraft/advancements/critereon";

declare module "@package/appeng/core/stats" {
    export class $AeStats extends $Enum<$AeStats> {
        addToPlayer(arg0: $Player, arg1: number): void;
        getRegistryName(): $ResourceLocation;
        static values(): $AeStats[];
        static valueOf(arg0: string): $AeStats;
        static ItemsExtracted: $AeStats;
        static ItemsInserted: $AeStats;
        get registryName(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $AeStats}.
     */
    export type $AeStats_ = "itemsinserted" | "itemsextracted";
    export class $AdvancementTriggers {
        static networkApprenticeCriterion(): $Criterion<never>;
        static networkEngineerCriterion(): $Criterion<never>;
        static networkAdminCriterion(): $Criterion<never>;
        static spatialExplorerCriterion(): $Criterion<never>;
        static recursiveCriterion(): $Criterion<never>;
        static NETWORK_APPRENTICE: $PlayerTrigger;
        static RECURSIVE: $PlayerTrigger;
        static NETWORK_ENGINEER: $PlayerTrigger;
        static NETWORK_ADMIN: $PlayerTrigger;
        static SPATIAL_EXPLORER: $PlayerTrigger;
        constructor();
    }
}
