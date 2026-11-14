import { $ItemStack } from "@package/net/minecraft/world/item";
import { $IIngredientType_ } from "@package/mezz/jei/api/ingredients";
import { $Rect2i } from "@package/net/minecraft/client/renderer";
import { $RecipeSlotUnderMouse, $IJeiInputHandler } from "@package/mezz/jei/api/gui/inputs";
import { $IRecipeSlotDrawable, $IRecipeSlotsView } from "@package/mezz/jei/api/gui/ingredient";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $IRecipeCategory } from "@package/mezz/jei/api/recipe/category";
export * as drawable from "@package/mezz/jei/api/gui/drawable";
export * as builder from "@package/mezz/jei/api/gui/builder";
export * as handlers from "@package/mezz/jei/api/gui/handlers";
export * as widgets from "@package/mezz/jei/api/gui/widgets";
export * as buttons from "@package/mezz/jei/api/gui/buttons";
export * as inputs from "@package/mezz/jei/api/gui/inputs";
export * as ingredient from "@package/mezz/jei/api/gui/ingredient";
export * as placement from "@package/mezz/jei/api/gui/placement";

declare module "@package/mezz/jei/api/gui" {
    export class $IRecipeLayoutDrawable<R> {
    }
    export interface $IRecipeLayoutDrawable<R> {
        getRecipeSlotsView(): $IRecipeSlotsView;
        getRect(): $Rect2i;
        drawRecipe(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        drawOverlays(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        getRecipeTransferButtonArea(): $Rect2i;
        /**
         * @deprecated
         */
        getRecipeSlotUnderMouse(arg0: number, arg1: number): ($IRecipeSlotDrawable) | undefined;
        getRectWithBorder(): $Rect2i;
        getSideButtonArea(arg0: number): $Rect2i;
        getRecipeBookmarkButtonArea(): $Rect2i;
        getInputHandler(): $IJeiInputHandler;
        getRecipe(): R;
        getIngredientUnderMouse<T>(arg0: number, arg1: number, arg2: $IIngredientType_<T>): (T) | undefined;
        getRecipeCategory(): $IRecipeCategory<R>;
        getItemStackUnderMouse(arg0: number, arg1: number): ($ItemStack) | undefined;
        tick(): void;
        setPosition(arg0: number, arg1: number): void;
        isMouseOver(arg0: number, arg1: number): boolean;
        getSlotUnderMouse(arg0: number, arg1: number): ($RecipeSlotUnderMouse) | undefined;
        get recipeSlotsView(): $IRecipeSlotsView;
        get rect(): $Rect2i;
        get recipeTransferButtonArea(): $Rect2i;
        get rectWithBorder(): $Rect2i;
        get recipeBookmarkButtonArea(): $Rect2i;
        get inputHandler(): $IJeiInputHandler;
        get recipe(): R;
        get recipeCategory(): $IRecipeCategory<R>;
    }
    export class $ITickTimer {
    }
    export interface $ITickTimer {
        getMaxValue(): number;
        getValue(): number;
        get maxValue(): number;
        get value(): number;
    }
}
