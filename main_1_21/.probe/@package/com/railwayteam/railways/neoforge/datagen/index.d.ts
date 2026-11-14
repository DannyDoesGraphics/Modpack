import { $TagBuilder } from "@package/net/minecraft/tags";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $DatapackBuiltinEntriesProvider } from "@package/net/neoforged/neoforge/common/data";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $Item } from "@package/net/minecraft/world/item";
import { $GatherDataEvent } from "@package/net/neoforged/neoforge/data/event";
import { $TagsProvider } from "@package/net/minecraft/data/tags";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Map } from "@package/java/util";
import { $PotatoCannonProjectileType_ } from "@package/com/simibubi/create/api/equipment/potatoCannon";
import { $DataProvider, $CachedOutput_, $PackOutput } from "@package/net/minecraft/data";

declare module "@package/com/railwayteam/railways/neoforge/datagen" {
    export class $CompatTrackLootTableProvider implements $DataProvider {
        getName(): string;
        run(arg0: $CachedOutput_): $CompletableFuture<never>;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
        get name(): string;
    }
    export class $RailwaysPotatoProjectileTypes {
        static bootstrap(arg0: $BootstrapContext<$PotatoCannonProjectileType_>): void;
        constructor();
    }
    export class $CompatTrackRecipeProvider implements $DataProvider {
        getName(): string;
        run(arg0: $CachedOutput_): $CompletableFuture<never>;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
        get name(): string;
    }
    export class $CompatTrackTagProvider extends $TagsProvider<$Item> {
        builders: $Map<$ResourceLocation, $TagBuilder>;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $DataGenerators {
        static onGatherData(arg0: $GatherDataEvent): void;
        constructor();
    }
    export class $RailwaysGeneratedEntriesProvider extends $DatapackBuiltinEntriesProvider {
        registries: $CompletableFuture<$HolderLookup$Provider>;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $CompatLootTableProvider {
        static getCompatModForTrackName(arg0: string): string;
        constructor();
    }
}
