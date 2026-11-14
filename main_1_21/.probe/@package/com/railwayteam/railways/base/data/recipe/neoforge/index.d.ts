import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $RecipeProvider } from "@package/net/minecraft/data/recipes";
import { $RailwaysMechanicalCraftingRecipeGen } from "@package/com/railwayteam/railways/base/data/recipe";
import { $PackOutput, $PackOutput$PathProvider } from "@package/net/minecraft/data";

declare module "@package/com/railwayteam/railways/base/data/recipe/neoforge" {
    export class $RailwaysMechanicalCraftingRecipeGenImpl extends $RailwaysMechanicalCraftingRecipeGen {
        static createImpl(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>): $RailwaysMechanicalCraftingRecipeGenImpl;
        static create(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>): $RecipeProvider;
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
    }
}
