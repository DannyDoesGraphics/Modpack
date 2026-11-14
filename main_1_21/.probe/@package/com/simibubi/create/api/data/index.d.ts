import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $DataProvider, $CachedOutput_, $PackOutput } from "@package/net/minecraft/data";
export * as datamaps from "@package/com/simibubi/create/api/data/datamaps";
export * as recipe from "@package/com/simibubi/create/api/data/recipe";

declare module "@package/com/simibubi/create/api/data" {
    export class $TrainHatInfoProvider implements $DataProvider {
        getName(): string;
        run(arg0: $CachedOutput_): $CompletableFuture<never>;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
        get name(): string;
    }
}
