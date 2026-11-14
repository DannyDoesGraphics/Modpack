import { $HolderLookup$Provider, $RegistrySetBuilder, $RegistrySetBuilder$PatchedRegistries, $HolderLookup, $HolderGetter, $Registry } from "@package/net/minecraft/core";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Biome_ } from "@package/net/minecraft/world/level/biome";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $ICondition } from "@package/net/neoforged/neoforge/common/conditions";
import { $Set_, $List, $List_, $Map_ } from "@package/java/util";
import { $PlacedFeature_ } from "@package/net/minecraft/world/level/levelgen/placement";
import { $DataProvider, $CachedOutput_, $PackOutput } from "@package/net/minecraft/data";

declare module "@package/net/minecraft/data/registries" {
    export class $VanillaRegistries {
        static validateThatAllBiomeFeaturesHaveBiomeFilter(features: $HolderGetter<$PlacedFeature_>, biomes: $HolderLookup<$Biome_>): void;
        static createLookup(): $HolderLookup$Provider;
        static DATAPACK_REGISTRY_KEYS: $List<$ResourceKey<$Registry<never>>>;
        constructor();
    }
    export class $TradeRebalanceRegistries {
        static createLookup(provider: $CompletableFuture<$HolderLookup$Provider>): $CompletableFuture<$RegistrySetBuilder$PatchedRegistries>;
        constructor();
    }
    /**
     * @deprecated
     */
    export class $RegistriesDatapackGenerator implements $DataProvider {
        /**
         * Gets a name for this provider, to use in logging.
         */
        getName(): string;
        run(output: $CachedOutput_): $CompletableFuture<never>;
        registries: $CompletableFuture<$HolderLookup$Provider>;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: $Set_<string>);
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: $Set_<string>, arg3: $Map_<$ResourceKey_<never>, $List_<$ICondition>>);
        /**
         * @deprecated
         */
        constructor(output: $PackOutput, registries: $CompletableFuture<$HolderLookup$Provider>);
        get name(): string;
    }
    export class $RegistryPatchGenerator {
        static createLookup(lookup: $CompletableFuture<$HolderLookup$Provider>, registrySetBuilder: $RegistrySetBuilder): $CompletableFuture<$RegistrySetBuilder$PatchedRegistries>;
        constructor();
    }
}
