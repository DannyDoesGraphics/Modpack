import { $Item_ } from "@package/net/minecraft/world/item";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $EntityType } from "@package/net/minecraft/world/entity";
import { $Map } from "@package/java/util";
import { $PackOutput } from "@package/net/minecraft/data";
import { $BiConsumer_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $HolderLookup$RegistryLookup } from "@package/net/minecraft/core";
import { $Enchantment_ } from "@package/net/minecraft/world/item/enchantment";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $LootTableSubProvider, $LootTableProvider, $BlockLootSubProvider, $EntityLootSubProvider } from "@package/net/minecraft/data/loot";
import { $LootItemCondition$Builder } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $Record } from "@package/java/lang";
import { $ArmorTrim } from "@package/net/minecraft/world/item/armortrim";
import { $LootTable$Builder, $LootTable } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/minecraft/data/loot/packs" {
    export class $VanillaEntityLoot extends $EntityLootSubProvider {
        elderGuardianLootTable(): $LootTable$Builder;
        registries: $HolderLookup$Provider;
        map: $Map<$EntityType<never>, $Map<$ResourceKey<$LootTable>, $LootTable$Builder>>;
        constructor(registries: $HolderLookup$Provider);
    }
    export class $VanillaLootTableProvider {
        static create(output: $PackOutput, registries: $CompletableFuture<$HolderLookup$Provider>): $LootTableProvider;
        constructor();
    }
    export class $VanillaPiglinBarterLoot extends $Record implements $LootTableSubProvider {
        generate(arg0: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
        registries(): $HolderLookup$Provider;
        constructor(arg0: $HolderLookup$Provider);
    }
    /**
     * Values that may be interpreted as {@link $VanillaPiglinBarterLoot}.
     */
    export type $VanillaPiglinBarterLoot_ = { registries?: $HolderLookup$Provider,  } | [registries?: $HolderLookup$Provider, ];
    export class $VanillaEquipmentLoot extends $Record implements $LootTableSubProvider {
        static trialChamberEquipment(helmet: $Item_, chestplate: $Item_, trim: $ArmorTrim, enchantments: $HolderLookup$RegistryLookup<$Enchantment_>): $LootTable$Builder;
        generate(output: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
        registries(): $HolderLookup$Provider;
        constructor(arg0: $HolderLookup$Provider);
    }
    /**
     * Values that may be interpreted as {@link $VanillaEquipmentLoot}.
     */
    export type $VanillaEquipmentLoot_ = { registries?: $HolderLookup$Provider,  } | [registries?: $HolderLookup$Provider, ];
    export class $TradeRebalanceLootTableProvider {
        static create(output: $PackOutput, registries: $CompletableFuture<$HolderLookup$Provider>): $LootTableProvider;
        constructor();
    }
    export class $VanillaArchaeologyLoot extends $Record implements $LootTableSubProvider {
        generate(arg0: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
        registries(): $HolderLookup$Provider;
        constructor(arg0: $HolderLookup$Provider);
    }
    /**
     * Values that may be interpreted as {@link $VanillaArchaeologyLoot}.
     */
    export type $VanillaArchaeologyLoot_ = { registries?: $HolderLookup$Provider,  } | [registries?: $HolderLookup$Provider, ];
    export class $VanillaBlockLoot extends $BlockLootSubProvider {
        static HAS_SHEARS: $LootItemCondition$Builder;
        static NORMAL_LEAVES_STICK_CHANCES: number[];
        registries: $HolderLookup$Provider;
        static NORMAL_LEAVES_SAPLING_CHANCES: number[];
        constructor(registries: $HolderLookup$Provider);
    }
    export class $VanillaShearingLoot extends $Record implements $LootTableSubProvider {
        generate(arg0: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
        registries(): $HolderLookup$Provider;
        constructor(arg0: $HolderLookup$Provider);
    }
    /**
     * Values that may be interpreted as {@link $VanillaShearingLoot}.
     */
    export type $VanillaShearingLoot_ = { registries?: $HolderLookup$Provider,  } | [registries?: $HolderLookup$Provider, ];
    export class $VanillaFishingLoot extends $Record implements $LootTableSubProvider {
        static fishingFishLootTable(): $LootTable$Builder;
        generate(arg0: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
        registries(): $HolderLookup$Provider;
        constructor(arg0: $HolderLookup$Provider);
    }
    /**
     * Values that may be interpreted as {@link $VanillaFishingLoot}.
     */
    export type $VanillaFishingLoot_ = { registries?: $HolderLookup$Provider,  } | [registries?: $HolderLookup$Provider, ];
    export class $VanillaChestLoot extends $Record implements $LootTableSubProvider {
        bastionHoglinStableLootTable(): $LootTable$Builder;
        bastionBridgeLootTable(): $LootTable$Builder;
        bastionOtherLootTable(): $LootTable$Builder;
        bastionTreasureLootTable(): $LootTable$Builder;
        ancientCityLootTable(): $LootTable$Builder;
        desertPyramidLootTable(): $LootTable$Builder;
        endCityTreasureLootTable(): $LootTable$Builder;
        jungleTempleLootTable(): $LootTable$Builder;
        netherBridgeLootTable(): $LootTable$Builder;
        pillagerOutpostLootTable(): $LootTable$Builder;
        shipwreckMapLootTable(): $LootTable$Builder;
        shipwreckSupplyLootTable(): $LootTable$Builder;
        shipwreckTreasureLootTable(): $LootTable$Builder;
        strongholdCorridorLootTable(): $LootTable$Builder;
        strongholdLibraryLootTable(): $LootTable$Builder;
        woodlandMansionLootTable(): $LootTable$Builder;
        spawnerLootTables(output: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
        generate(output: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
        registries(): $HolderLookup$Provider;
        constructor(arg0: $HolderLookup$Provider);
    }
    /**
     * Values that may be interpreted as {@link $VanillaChestLoot}.
     */
    export type $VanillaChestLoot_ = { registries?: $HolderLookup$Provider,  } | [registries?: $HolderLookup$Provider, ];
    export class $TradeRebalanceChestLoot extends $Record implements $LootTableSubProvider {
        ancientCityLootTable(): $LootTable$Builder;
        desertPyramidLootTable(): $LootTable$Builder;
        jungleTempleLootTable(): $LootTable$Builder;
        pillagerOutpostLootTable(): $LootTable$Builder;
        generate(arg0: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
        registries(): $HolderLookup$Provider;
        constructor(arg0: $HolderLookup$Provider);
    }
    /**
     * Values that may be interpreted as {@link $TradeRebalanceChestLoot}.
     */
    export type $TradeRebalanceChestLoot_ = { registries?: $HolderLookup$Provider,  } | [registries?: $HolderLookup$Provider, ];
    export class $VanillaGiftLoot extends $Record implements $LootTableSubProvider {
        generate(arg0: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
        registries(): $HolderLookup$Provider;
        constructor(arg0: $HolderLookup$Provider);
    }
    /**
     * Values that may be interpreted as {@link $VanillaGiftLoot}.
     */
    export type $VanillaGiftLoot_ = { registries?: $HolderLookup$Provider,  } | [registries?: $HolderLookup$Provider, ];
}
