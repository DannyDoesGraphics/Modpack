import { $CriterionTrigger_ } from "@package/net/minecraft/advancements";
import { $PoiType, $PoiType_ } from "@package/net/minecraft/world/entity/ai/village/poi";
import { $Registry } from "@package/net/minecraft/core";
import { $VillagerTradesEvent } from "@package/net/neoforged/neoforge/event/village";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $MenuType_ } from "@package/net/minecraft/world/inventory";
import { $VillagerProfession, $VillagerProfession_ } from "@package/net/minecraft/world/entity/npc";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";
export * as worldgen from "@package/appeng/init/worldgen";
export * as client from "@package/appeng/init/client";
export * as internal from "@package/appeng/init/internal";

declare module "@package/appeng/init" {
    export class $InitCauldronInteraction {
        static init(): void;
        constructor();
    }
    export class $InitDispenserBehavior {
        static init(): void;
    }
    export class $InitStats {
        static init(arg0: $Registry<$ResourceLocation_>): void;
    }
    export class $InitAdvancementTriggers {
        static init(arg0: $Registry<$CriterionTrigger_<never>>): void;
        constructor();
    }
    export class $InitVillager {
        static initProfession(arg0: $Registry<$VillagerProfession_>): void;
        static initPointOfInterestType(arg0: $Registry<$PoiType_>): void;
        static initTrades(arg0: $VillagerTradesEvent): void;
        static POI_TYPE: $PoiType;
        static POI_KEY: $ResourceKey<$PoiType>;
        static PROFESSION: $VillagerProfession;
        static ID: $ResourceLocation;
        static LOOT_TABLE_KEY: $ResourceKey<$LootTable>;
    }
    export class $InitMenuTypes {
        static queueRegistration(arg0: $ResourceLocation_, arg1: $MenuType_<never>): void;
        static init(arg0: $Registry<$MenuType_<never>>): void;
    }
    export class $InitCapabilityProviders {
        static register(arg0: $RegisterCapabilitiesEvent): void;
        static markProxyableCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        static registerGenericAdapters(arg0: $RegisterCapabilitiesEvent): void;
    }
}
