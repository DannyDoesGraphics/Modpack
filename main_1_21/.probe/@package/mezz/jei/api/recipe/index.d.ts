import { $ItemStack } from "@package/net/minecraft/world/item";
import { $RecipeType_, $Recipe, $RecipeHolder, $RecipeType as $RecipeType$1 } from "@package/net/minecraft/world/item/crafting";
import { $IScalableDrawable_ } from "@package/mezz/jei/api/gui/drawable";
import { $IRecipeSlotDrawable } from "@package/mezz/jei/api/gui/ingredient";
import { $List, $Set_, $Collection_, $List_ } from "@package/java/util";
import { $IRecipeCategory } from "@package/mezz/jei/api/recipe/category";
import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $IIngredientType_, $IIngredientSupplier, $ITypedIngredient } from "@package/mezz/jei/api/ingredients";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $IRecipeButtonControllerFactory } from "@package/mezz/jei/api/recipe/advanced";
import { $Enum, $Class } from "@package/java/lang";
import { $IRecipeLayoutDrawable } from "@package/mezz/jei/api/gui";
export * as vanilla from "@package/mezz/jei/api/recipe/vanilla";
export * as transfer from "@package/mezz/jei/api/recipe/transfer";
export * as category from "@package/mezz/jei/api/recipe/category";
export * as advanced from "@package/mezz/jei/api/recipe/advanced";

declare module "@package/mezz/jei/api/recipe" {
    export class $IFocusFactory {
    }
    export interface $IFocusFactory {
        getEmptyFocusGroup(): $IFocusGroup;
        createFocus<V>(arg0: $RecipeIngredientRole_, arg1: $IIngredientType_<V>, arg2: V): $IFocus<V>;
        createFocus<V>(arg0: $RecipeIngredientRole_, arg1: $ITypedIngredient<V>): $IFocus<V>;
        createFocusGroup(arg0: $Collection_<$IFocus<never>>): $IFocusGroup;
        get emptyFocusGroup(): $IFocusGroup;
    }
    export class $IRecipeCatalystLookup {
    }
    export interface $IRecipeCatalystLookup {
        includeHidden(): $IRecipeCatalystLookup;
        get<S>(arg0: $IIngredientType_<S>): $Stream<S>;
        get(): $Stream<$ITypedIngredient<never>>;
        getItemStack(): $Stream<$ItemStack>;
        get itemStack(): $Stream<$ItemStack>;
    }
    export class $IRecipeLookup<R> {
    }
    export interface $IRecipeLookup<R> {
        limitFocus(arg0: $Collection_<$IFocus<never>>): $IRecipeLookup<R>;
        includeHidden(): $IRecipeLookup<R>;
        get(): $Stream<R>;
    }
    export class $IRecipeManager {
    }
    export interface $IRecipeManager {
        addRecipes<T>(arg0: $RecipeType<T>, arg1: $List_<T>): void;
        createRecipeCategoryLookup(): $IRecipeCategoriesLookup;
        createRecipeCatalystLookup(arg0: $RecipeType<never>): $IRecipeCatalystLookup;
        createRecipeLookup<R>(arg0: $RecipeType<R>): $IRecipeLookup<R>;
        getRecipeCategory<T>(arg0: $RecipeType<T>): $IRecipeCategory<T>;
        getRecipeType(arg0: $ResourceLocation_): ($RecipeType<never>) | undefined;
        getRecipeType<T>(arg0: $ResourceLocation_, arg1: $Class<T>): ($RecipeType<T>) | undefined;
        hideRecipeCategory(arg0: $RecipeType<never>): void;
        hideRecipes<T>(arg0: $RecipeType<T>, arg1: $Collection_<T>): void;
        unhideRecipes<T>(arg0: $RecipeType<T>, arg1: $Collection_<T>): void;
        unhideRecipeCategory(arg0: $RecipeType<never>): void;
        createRecipeLayoutDrawableOrShowError<T>(arg0: $IRecipeCategory<T>, arg1: T, arg2: $IFocusGroup): $IRecipeLayoutDrawable<T>;
        createRecipeLayoutDrawable<T>(arg0: $IRecipeCategory<T>, arg1: T, arg2: $IFocusGroup): ($IRecipeLayoutDrawable<T>) | undefined;
        createRecipeLayoutDrawable<T>(arg0: $IRecipeCategory<T>, arg1: T, arg2: $IFocusGroup, arg3: $IScalableDrawable_, arg4: number): ($IRecipeLayoutDrawable<T>) | undefined;
        createRecipeSlotDrawable(arg0: $RecipeIngredientRole_, arg1: $List_<($ITypedIngredient<never>) | undefined>, arg2: $Set_<number>, arg3: number): $IRecipeSlotDrawable;
        /**
         * @deprecated
         */
        createRecipeSlotDrawable(arg0: $RecipeIngredientRole_, arg1: $List_<($ITypedIngredient<never>) | undefined>, arg2: $Set_<number>, arg3: number, arg4: number, arg5: number): $IRecipeSlotDrawable;
        getRecipeIngredients<T>(arg0: $IRecipeCategory<T>, arg1: T): $IIngredientSupplier;
        getRecipeButtonControllerFactories(): $List<$IRecipeButtonControllerFactory>;
        get recipeButtonControllerFactories(): $List<$IRecipeButtonControllerFactory>;
    }
    export class $RecipeType<T> {
        getUid(): $ResourceLocation;
        getRecipeClass(): $Class<T>;
        static createRecipeHolderType<R extends $Recipe<never>>(arg0: $ResourceLocation_): $RecipeType<$RecipeHolder<R>>;
        static createFromDeferredVanilla<R extends $Recipe<never>>(arg0: $Supplier_<$RecipeType$1<R>>): $Supplier<$RecipeType<$RecipeHolder<R>>>;
        static createFromVanilla<R extends $Recipe<never>>(arg0: $RecipeType_<R>): $RecipeType<$RecipeHolder<R>>;
        static create<T>(arg0: string, arg1: string, arg2: $Class<T>): $RecipeType<T>;
        constructor(arg0: $ResourceLocation_, arg1: $Class<T>);
        get uid(): $ResourceLocation;
        get recipeClass(): $Class<T>;
    }
    export class $IFocusGroup {
    }
    export interface $IFocusGroup {
        getAllFocuses(): $List<$IFocus<never>>;
        getFocuses<T>(arg0: $IIngredientType_<T>, arg1: $RecipeIngredientRole_): $Stream<$IFocus<T>>;
        getFocuses(arg0: $RecipeIngredientRole_): $Stream<$IFocus<never>>;
        getFocuses<T>(arg0: $IIngredientType_<T>): $Stream<$IFocus<T>>;
        getItemStackFocuses(): $Stream<$IFocus<$ItemStack>>;
        getItemStackFocuses(arg0: $RecipeIngredientRole_): $Stream<$IFocus<$ItemStack>>;
        isEmpty(): boolean;
        get allFocuses(): $List<$IFocus<never>>;
        get empty(): boolean;
    }
    export class $RecipeIngredientRole extends $Enum<$RecipeIngredientRole> {
        static values(): $RecipeIngredientRole[];
        static valueOf(arg0: string): $RecipeIngredientRole;
        static INPUT: $RecipeIngredientRole;
        static RENDER_ONLY: $RecipeIngredientRole;
        static OUTPUT: $RecipeIngredientRole;
        static CATALYST: $RecipeIngredientRole;
    }
    /**
     * Values that may be interpreted as {@link $RecipeIngredientRole}.
     */
    export type $RecipeIngredientRole_ = "input" | "output" | "catalyst" | "render_only";
    export class $IFocus<V> {
    }
    export interface $IFocus<V> {
        getTypedValue(): $ITypedIngredient<V>;
        getRole(): $RecipeIngredientRole;
        checkedCast<T>(arg0: $IIngredientType_<T>): ($IFocus<T>) | undefined;
        get typedValue(): $ITypedIngredient<V>;
        get role(): $RecipeIngredientRole;
    }
    export class $IRecipeCategoriesLookup {
    }
    export interface $IRecipeCategoriesLookup {
        limitTypes(arg0: $Collection_<$RecipeType<never>>): $IRecipeCategoriesLookup;
        limitFocus(arg0: $Collection_<$IFocus<never>>): $IRecipeCategoriesLookup;
        includeHidden(): $IRecipeCategoriesLookup;
        get(): $Stream<$IRecipeCategory<never>>;
    }
}
