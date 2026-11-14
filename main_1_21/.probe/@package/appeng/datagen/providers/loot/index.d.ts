import { $BiConsumer_ } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $LootTableSubProvider, $LootTableProvider, $BlockLootSubProvider } from "@package/net/minecraft/data/loot";
import { $LootItemCondition$Builder } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $LootTable$Builder, $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $PackOutput } from "@package/net/minecraft/data";

declare module "@package/appeng/datagen/providers/loot" {
    export class $RaidHeroGiftLootProvider implements $LootTableSubProvider {
        generate(arg0: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
        constructor(arg0: $HolderLookup$Provider);
    }
    export class $AE2LootTableProvider extends $LootTableProvider {
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $BlockDropProvider extends $BlockLootSubProvider {
        static HAS_SHEARS: $LootItemCondition$Builder;
        static NORMAL_LEAVES_STICK_CHANCES: number[];
        registries: $HolderLookup$Provider;
        static NORMAL_LEAVES_SAPLING_CHANCES: number[];
        constructor(arg0: $HolderLookup$Provider);
    }
}
