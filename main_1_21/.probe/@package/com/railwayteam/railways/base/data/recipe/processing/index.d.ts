import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ItemApplicationRecipeGen, $MixingRecipeGen } from "@package/com/simibubi/create/api/data/recipe";
import { $PackOutput, $PackOutput$PathProvider } from "@package/net/minecraft/data";

declare module "@package/com/railwayteam/railways/base/data/recipe/processing" {
    export class $RailwaysItemApplicationRecipeGen extends $ItemApplicationRecipeGen {
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $RailwaysMixingRecipeGen extends $MixingRecipeGen {
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
}
