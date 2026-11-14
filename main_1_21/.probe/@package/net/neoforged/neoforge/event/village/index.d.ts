import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $VillageSiege } from "@package/net/minecraft/world/entity/ai/village";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List, $List_ } from "@package/java/util";
import { $VillagerProfession, $VillagerTrades$ItemListing_, $VillagerTrades$ItemListing, $VillagerProfession_ } from "@package/net/minecraft/world/entity/npc";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/net/neoforged/neoforge/event/village" {
    /**
     * WandererTradesEvent is fired during reload by `TagsUpdatedEvent`. It is used to gather the trade lists for the wandering merchant.
     * It is fired on the `NeoForge#EVENT_BUS`.
     * The wandering merchant picks a few trades from `generic` and a single trade from `rare`.
     * To add trades to the merchant, simply add new trades to the list. `BasicItemListing` provides a default implementation.
     */
    export class $WandererTradesEvent extends $Event {
        getRareTrades(): $List<$VillagerTrades$ItemListing>;
        getGenericTrades(): $List<$VillagerTrades$ItemListing>;
        getRegistryAccess(): $RegistryAccess;
        /**
         * @deprecated
         */
        constructor(generic: $List_<$VillagerTrades$ItemListing_>, rare: $List_<$VillagerTrades$ItemListing_>);
        constructor(generic: $List_<$VillagerTrades$ItemListing_>, rare: $List_<$VillagerTrades$ItemListing_>, registryAccess: $RegistryAccess);
        get rareTrades(): $List<$VillagerTrades$ItemListing>;
        get genericTrades(): $List<$VillagerTrades$ItemListing>;
        get registryAccess(): $RegistryAccess;
    }
    /**
     * VillagerTradesEvent is fired during reload by `TagsUpdatedEvent`. It is used to gather the trade lists for each profession.
     * It is fired on the `NeoForge#EVENT_BUS`.
     * It is fired once for each registered villager profession.
     * Villagers pick two trades from their trade map, based on their level.
     * Villager level is increased by successful trades.
     * The map is populated for levels 1-5 (inclusive), so Map#get will never return null for those keys.
     * Levels outside of this range do nothing, as specified by `VillagerData#canLevelUp(int)` which is called before attempting to level up.
     * To add trades to the merchant, simply add new trades to the list. `BasicItemListing` provides a default implementation.
     */
    export class $VillagerTradesEvent extends $Event {
        getTrades(): $Int2ObjectMap<$List<$VillagerTrades$ItemListing>>;
        getType(): $VillagerProfession;
        getRegistryAccess(): $RegistryAccess;
        /**
         * @deprecated
         */
        constructor(trades: $Int2ObjectMap<$List_<$VillagerTrades$ItemListing_>>, type: $VillagerProfession_);
        constructor(trades: $Int2ObjectMap<$List_<$VillagerTrades$ItemListing_>>, type: $VillagerProfession_, registryAccess: $RegistryAccess);
        get trades(): $Int2ObjectMap<$List<$VillagerTrades$ItemListing>>;
        get type(): $VillagerProfession;
        get registryAccess(): $RegistryAccess;
    }
    /**
     * VillageSiegeEvent is fired just before a zombie siege finds a successful location in
     * `VillageSiege#tryToSetupSiege(ServerLevel)`, to give mods the chance to stop the siege.
     * 
     * This event is `ICancellableEvent`; canceling stops the siege.
     * 
     * This event does not have a result. `HasResult`
     * 
     * This event is fired on the `NeoForge#EVENT_BUS`.
     */
    export class $VillageSiegeEvent extends $Event implements $ICancellableEvent {
        getSiege(): $VillageSiege;
        getAttemptedSpawnPos(): $Vec3;
        getPlayer(): $Player;
        getLevel(): $Level;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(siege: $VillageSiege, level: $Level_, player: $Player, attemptedSpawnPos: $Vec3_);
        get siege(): $VillageSiege;
        get attemptedSpawnPos(): $Vec3;
        get player(): $Player;
        get level(): $Level;
    }
}
