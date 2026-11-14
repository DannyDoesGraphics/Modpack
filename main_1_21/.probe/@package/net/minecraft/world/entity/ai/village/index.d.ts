import { $CustomSpawner } from "@package/net/minecraft/world/level";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Enum } from "@package/java/lang";
export * as poi from "@package/net/minecraft/world/entity/ai/village/poi";

declare module "@package/net/minecraft/world/entity/ai/village" {
    export class $VillageSiege implements $CustomSpawner {
        tick(level: $ServerLevel, spawnHostiles: boolean, spawnPassives: boolean): number;
        constructor();
    }
    export class $ReputationEventType {
        static register(key: string): $ReputationEventType;
        static TRADE: $ReputationEventType;
        static VILLAGER_HURT: $ReputationEventType;
        static GOLEM_KILLED: $ReputationEventType;
        static ZOMBIE_VILLAGER_CURED: $ReputationEventType;
        static VILLAGER_KILLED: $ReputationEventType;
    }
    export interface $ReputationEventType {
    }
    export class $VillageSiege$State extends $Enum<$VillageSiege$State> {
    }
    /**
     * Values that may be interpreted as {@link $VillageSiege$State}.
     */
    export type $VillageSiege$State_ = "siege_can_activate" | "siege_tonight" | "siege_done";
}
