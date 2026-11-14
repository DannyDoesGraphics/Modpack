import { $IGuiHandlerRegistration, $IVanillaCategoryExtensionRegistration, $IAdvancedRegistration, $IRecipeCategoryRegistration, $IIngredientAliasRegistration, $IAdvancedSearchRegistration, $IModIngredientRegistration, $IRecipeRegistration, $IRuntimeRegistration, $ISubtypeRegistration, $IModInfoRegistration_, $IRecipeCatalystRegistration, $IRecipeTransferRegistration, $IExtraIngredientRegistration_ } from "@package/mezz/jei/api/registration";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $IPlatformFluidHelper } from "@package/mezz/jei/api/helpers";
import { $IJeiConfigManager_ } from "@package/mezz/jei/api/runtime/config";
import { $IJeiRuntime, $IJeiFeatures } from "@package/mezz/jei/api/runtime";
export * as ingredients from "@package/mezz/jei/api/ingredients";
export * as recipe from "@package/mezz/jei/api/recipe";
export * as gui from "@package/mezz/jei/api/gui";
export * as registration from "@package/mezz/jei/api/registration";
export * as helpers from "@package/mezz/jei/api/helpers";
export * as runtime from "@package/mezz/jei/api/runtime";
export * as search from "@package/mezz/jei/api/search";

declare module "@package/mezz/jei/api" {
    export class $IModPlugin {
    }
    export interface $IModPlugin {
        registerModInfo(arg0: $IModInfoRegistration_): void;
        registerCategories(arg0: $IRecipeCategoryRegistration): void;
        registerRecipes(arg0: $IRecipeRegistration): void;
        registerRecipeCatalysts(arg0: $IRecipeCatalystRegistration): void;
        registerGuiHandlers(arg0: $IGuiHandlerRegistration): void;
        registerAdvanced(arg0: $IAdvancedRegistration): void;
        registerRuntime(arg0: $IRuntimeRegistration): void;
        onRuntimeAvailable(arg0: $IJeiRuntime): void;
        onRuntimeUnavailable(): void;
        onConfigManagerAvailable(arg0: $IJeiConfigManager_): void;
        registerVanillaCategoryExtensions(arg0: $IVanillaCategoryExtensionRegistration): void;
        registerRecipeTransferHandlers(arg0: $IRecipeTransferRegistration): void;
        getPluginUid(): $ResourceLocation;
        configureJei(arg0: $IJeiFeatures): void;
        registerItemSubtypes(arg0: $ISubtypeRegistration): void;
        registerFluidSubtypes<T>(arg0: $ISubtypeRegistration, arg1: $IPlatformFluidHelper<T>): void;
        registerIngredients(arg0: $IModIngredientRegistration): void;
        registerExtraIngredients(arg0: $IExtraIngredientRegistration_): void;
        registerIngredientAliases(arg0: $IIngredientAliasRegistration): void;
        registerAdvancedSearch(arg0: $IAdvancedSearchRegistration): void;
        get pluginUid(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $IModPlugin}.
     */
    export type $IModPlugin_ = (() => $ResourceLocation_);
}
