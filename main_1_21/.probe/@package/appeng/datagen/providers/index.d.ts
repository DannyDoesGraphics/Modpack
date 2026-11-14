import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $DataProvider, $CachedOutput_, $PackOutput } from "@package/net/minecraft/data";
export * as tags from "@package/appeng/datagen/providers/tags";
export * as recipes from "@package/appeng/datagen/providers/recipes";
export * as loot from "@package/appeng/datagen/providers/loot";
export * as models from "@package/appeng/datagen/providers/models";
export * as localization from "@package/appeng/datagen/providers/localization";
export * as advancements from "@package/appeng/datagen/providers/advancements";
export * as datamaps from "@package/appeng/datagen/providers/datamaps";

declare module "@package/appeng/datagen/providers" {
    export class $WorldGenProvider implements $DataProvider {
        getName(): string;
        run(arg0: $CachedOutput_): $CompletableFuture<never>;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
        get name(): string;
    }
    export class $IAE2DataProvider {
    }
    export interface $IAE2DataProvider extends $DataProvider {
    }
}
