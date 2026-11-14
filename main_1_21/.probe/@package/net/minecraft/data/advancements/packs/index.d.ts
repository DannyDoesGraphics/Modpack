import { $AdvancementHolder, $AdvancementHolder_, $Advancement$Builder } from "@package/net/minecraft/advancements";
import { $Consumer_ } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $Item } from "@package/net/minecraft/world/item";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $EntityType, $EntityType_ } from "@package/net/minecraft/world/entity";
import { $List, $List_ } from "@package/java/util";
import { $PackOutput } from "@package/net/minecraft/data";
import { $AdvancementSubProvider, $AdvancementProvider } from "@package/net/minecraft/data/advancements";

declare module "@package/net/minecraft/data/advancements/packs" {
    export class $VanillaAdventureAdvancements implements $AdvancementSubProvider {
        static addBiomes(builder: $Advancement$Builder, levelRegistry: $HolderLookup$Provider, biomes: $List_<$ResourceKey_<$Biome>>): $Advancement$Builder;
        static createMonsterHunterAdvancement(advancement: $AdvancementHolder_, output: $Consumer_<$AdvancementHolder>, typesRequired: $List_<$EntityType_<never>>): $AdvancementHolder;
        generate(registries: $HolderLookup$Provider, writer: $Consumer_<$AdvancementHolder>): void;
        constructor();
    }
    export class $VanillaAdvancementProvider {
        static create(output: $PackOutput, registries: $CompletableFuture<$HolderLookup$Provider>): $AdvancementProvider;
        constructor();
    }
    export class $VanillaHusbandryAdvancements implements $AdvancementSubProvider {
        static createBreedAllAnimalsAdvancement(parent: $AdvancementHolder_, writer: $Consumer_<$AdvancementHolder>, breedableAnimals: $Stream<$EntityType_<never>>, indirectlyBreedableAnimals: $Stream<$EntityType_<never>>): $AdvancementHolder;
        generate(registries: $HolderLookup$Provider, writer: $Consumer_<$AdvancementHolder>): void;
        static WAX_SCRAPING_TOOLS: $Item[];
        static BREEDABLE_ANIMALS: $List<$EntityType<never>>;
        static INDIRECTLY_BREEDABLE_ANIMALS: $List<$EntityType<never>>;
        constructor();
    }
    export class $VanillaNetherAdvancements implements $AdvancementSubProvider {
        generate(arg0: $HolderLookup$Provider, arg1: $Consumer_<$AdvancementHolder>): void;
        constructor();
    }
    export class $VanillaTheEndAdvancements implements $AdvancementSubProvider {
        generate(arg0: $HolderLookup$Provider, arg1: $Consumer_<$AdvancementHolder>): void;
        constructor();
    }
    export class $VanillaStoryAdvancements implements $AdvancementSubProvider {
        generate(arg0: $HolderLookup$Provider, arg1: $Consumer_<$AdvancementHolder>): void;
        constructor();
    }
}
