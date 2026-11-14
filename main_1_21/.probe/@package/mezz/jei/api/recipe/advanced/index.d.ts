import { $ITypedIngredient } from "@package/mezz/jei/api/ingredients";
import { $RecipeType, $IFocus } from "@package/mezz/jei/api/recipe";
import { $IIconButtonController } from "@package/mezz/jei/api/gui/buttons";
import { $List } from "@package/java/util";
import { $IRecipeLayoutDrawable } from "@package/mezz/jei/api/gui";
import { $IRecipeCategory } from "@package/mezz/jei/api/recipe/category";

declare module "@package/mezz/jei/api/recipe/advanced" {
    export class $ISimpleRecipeManagerPlugin<T> {
    }
    export interface $ISimpleRecipeManagerPlugin<T> {
        isHandledInput(arg0: $ITypedIngredient<never>): boolean;
        isHandledOutput(arg0: $ITypedIngredient<never>): boolean;
        getRecipesForInput(arg0: $ITypedIngredient<never>): $List<T>;
        getRecipesForOutput(arg0: $ITypedIngredient<never>): $List<T>;
        getAllRecipes(): $List<T>;
        get allRecipes(): $List<T>;
    }
    export class $IRecipeButtonControllerFactory {
    }
    export interface $IRecipeButtonControllerFactory {
        createButtonController<T>(arg0: $IRecipeLayoutDrawable<T>): $IIconButtonController;
    }
    /**
     * Values that may be interpreted as {@link $IRecipeButtonControllerFactory}.
     */
    export type $IRecipeButtonControllerFactory_ = ((arg0: $IRecipeLayoutDrawable<any>) => $IIconButtonController);
    export class $IRecipeManagerPluginHelper {
    }
    export interface $IRecipeManagerPluginHelper {
        isRecipeCatalyst(arg0: $RecipeType<never>, arg1: $IFocus<never>): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IRecipeManagerPluginHelper}.
     */
    export type $IRecipeManagerPluginHelper_ = ((arg0: $RecipeType<never>, arg1: $IFocus<never>) => boolean);
    export class $IRecipeManagerPlugin {
    }
    export interface $IRecipeManagerPlugin {
        getRecipes<T, V>(arg0: $IRecipeCategory<T>, arg1: $IFocus<V>): $List<T>;
        getRecipes<T>(arg0: $IRecipeCategory<T>): $List<T>;
        getRecipeTypes<V>(arg0: $IFocus<V>): $List<$RecipeType<never>>;
    }
}
