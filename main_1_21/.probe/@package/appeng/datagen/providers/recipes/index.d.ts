import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $IAE2DataProvider } from "@package/appeng/datagen/providers";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ItemDefinition, $BlockDefinition } from "@package/appeng/core/definitions";
import { $RecipeProvider } from "@package/net/minecraft/data/recipes";
import { $Record } from "@package/java/lang";
import { $PackOutput, $PackOutput$PathProvider } from "@package/net/minecraft/data";

declare module "@package/appeng/datagen/providers/recipes" {
    export class $UpgradeRecipes extends $AE2RecipeProvider {
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $ChargerRecipes extends $AE2RecipeProvider {
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $AE2RecipeProvider extends $RecipeProvider implements $IAE2DataProvider {
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $SmithingRecipes extends $AE2RecipeProvider {
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $UpgradeRecipes$CellUpgradeTier extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $UpgradeRecipes$CellUpgradeTier}.
     */
    export type $UpgradeRecipes$CellUpgradeTier_ = { component?: $ItemLike_, suffix?: string, cell?: $ItemDefinition<never>,  } | [component?: $ItemLike_, suffix?: string, cell?: $ItemDefinition<never>, ];
    export class $InscriberRecipes extends $AE2RecipeProvider {
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $SmeltingRecipes extends $AE2RecipeProvider {
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $DecorationRecipes extends $AE2RecipeProvider {
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $TransformRecipes extends $AE2RecipeProvider {
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $MatterCannonAmmoProvider extends $AE2RecipeProvider {
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $DecorationBlockRecipes extends $AE2RecipeProvider {
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $UpgradeRecipes$CellDisassemblyTier extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $UpgradeRecipes$CellDisassemblyTier}.
     */
    export type $UpgradeRecipes$CellDisassemblyTier_ = { cell?: $ItemDefinition<never>, component?: $ItemDefinition<never>,  } | [cell?: $ItemDefinition<never>, component?: $ItemDefinition<never>, ];
    export class $EntropyRecipes extends $AE2RecipeProvider {
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $UpgradeRecipes$UnitTransformTier extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $UpgradeRecipes$UnitTransformTier}.
     */
    export type $UpgradeRecipes$UnitTransformTier_ = { baseBlock?: $BlockDefinition<never>, upgradeItem?: $ItemDefinition<never>,  } | [baseBlock?: $BlockDefinition<never>, upgradeItem?: $ItemDefinition<never>, ];
    export class $RecipeCriteria {
    }
    export class $QuartzCuttingRecipesProvider extends $AE2RecipeProvider {
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $CraftingRecipes extends $AE2RecipeProvider {
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
}
