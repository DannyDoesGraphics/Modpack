import { $GlobalMixin } from "@package/dev/emi/emi/mixin";
import { $EmiStack, $EmiIngredient } from "@package/dev/emi/emi/api/stack";
import { $Predicate } from "@package/java/util/function";
import { $WidgetHolder } from "@package/dev/emi/emi/api/widget";
import { $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $EmiRenderable_, $EmiRenderable } from "@package/dev/emi/emi/api/render";
import { $ClientTooltipComponent } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Comparator, $List, $List_, $Map } from "@package/java/util";
export * as handler from "@package/dev/emi/emi/api/recipe/handler";

declare module "@package/dev/emi/emi/api/recipe" {
    export class $EmiPlayerInventory implements $GlobalMixin {
        getCraftAvailability(recipe: $EmiRecipe): $List<boolean>;
        canCraft(recipe: $EmiRecipe, amount: number): boolean;
        canCraft(recipe: $EmiRecipe): boolean;
        getCraftables(): $List<$EmiIngredient>;
        static of(entity: $Player): $EmiPlayerInventory;
        isEqual(other: $EmiPlayerInventory): boolean;
        getPredicate(): $Predicate<$EmiRecipe>;
        inventory: $Map<$EmiStack, $EmiStack>;
        constructor(stacks: $List_<$EmiStack>);
        /**
         * @deprecated
         */
        constructor(entity: $Player);
        get craftables(): $List<$EmiIngredient>;
        get predicate(): $Predicate<$EmiRecipe>;
    }
    export class $EmiRecipe {
    }
    export interface $EmiRecipe extends $GlobalMixin {
        getCatalysts(): $List<$EmiIngredient>;
        getDisplayWidth(): number;
        getDisplayHeight(): number;
        supportsRecipeTree(): boolean;
        hideCraftable(): boolean;
        getBackingRecipe(): $RecipeHolder<never>;
        getInputs(): $List<$EmiIngredient>;
        getId(): $ResourceLocation;
        getOutputs(): $List<$EmiStack>;
        getCategory(): $EmiRecipeCategory;
        addWidgets(arg0: $WidgetHolder): void;
        get catalysts(): $List<$EmiIngredient>;
        get displayWidth(): number;
        get displayHeight(): number;
        get backingRecipe(): $RecipeHolder<never>;
        get inputs(): $List<$EmiIngredient>;
        get id(): $ResourceLocation;
        get outputs(): $List<$EmiStack>;
        get category(): $EmiRecipeCategory;
    }
    export class $EmiRecipeCategory implements $EmiRenderable, $GlobalMixin {
        renderSimplified(draw: $GuiGraphics, x: number, y: number, delta: number): void;
        getName(): $Component;
        getId(): $ResourceLocation;
        getSort(): $Comparator<$EmiRecipe>;
        render(draw: $GuiGraphics, x: number, y: number, delta: number): void;
        getTooltip(): $List<$ClientTooltipComponent>;
        simplified: $EmiRenderable;
        sorter: $Comparator<$EmiRecipe>;
        icon: $EmiRenderable;
        id: $ResourceLocation;
        constructor(id: $ResourceLocation_, icon: $EmiRenderable_);
        constructor(id: $ResourceLocation_, icon: $EmiRenderable_, simplified: $EmiRenderable_, sorter: $Comparator<$EmiRecipe>);
        constructor(id: $ResourceLocation_, icon: $EmiRenderable_, simplified: $EmiRenderable_);
        get name(): $Component;
        get sort(): $Comparator<$EmiRecipe>;
        get tooltip(): $List<$ClientTooltipComponent>;
    }
    export class $EmiCraftingRecipe implements $EmiRecipe, $GlobalMixin {
        getDisplayWidth(): number;
        getDisplayHeight(): number;
        canFit(width: number, height: number): boolean;
        getInputs(): $List<$EmiIngredient>;
        getId(): $ResourceLocation;
        getOutputs(): $List<$EmiStack>;
        getCategory(): $EmiRecipeCategory;
        addWidgets(widgets: $WidgetHolder): void;
        getCatalysts(): $List<$EmiIngredient>;
        supportsRecipeTree(): boolean;
        hideCraftable(): boolean;
        getBackingRecipe(): $RecipeHolder<never>;
        shapeless: boolean;
        constructor(input: $List_<$EmiIngredient>, output: $EmiStack, id: $ResourceLocation_);
        constructor(input: $List_<$EmiIngredient>, output: $EmiStack, id: $ResourceLocation_, shapeless: boolean);
        get displayWidth(): number;
        get displayHeight(): number;
        get inputs(): $List<$EmiIngredient>;
        get id(): $ResourceLocation;
        get outputs(): $List<$EmiStack>;
        get category(): $EmiRecipeCategory;
        get catalysts(): $List<$EmiIngredient>;
        get backingRecipe(): $RecipeHolder<never>;
    }
    export class $BasicEmiRecipe implements $EmiRecipe, $GlobalMixin {
        getCatalysts(): $List<$EmiIngredient>;
        getDisplayWidth(): number;
        getDisplayHeight(): number;
        getInputs(): $List<$EmiIngredient>;
        getId(): $ResourceLocation;
        getOutputs(): $List<$EmiStack>;
        getCategory(): $EmiRecipeCategory;
        supportsRecipeTree(): boolean;
        hideCraftable(): boolean;
        getBackingRecipe(): $RecipeHolder<never>;
        constructor(category: $EmiRecipeCategory, id: $ResourceLocation_, width: number, height: number);
        get catalysts(): $List<$EmiIngredient>;
        get displayWidth(): number;
        get displayHeight(): number;
        get inputs(): $List<$EmiIngredient>;
        get id(): $ResourceLocation;
        get outputs(): $List<$EmiStack>;
        get category(): $EmiRecipeCategory;
        get backingRecipe(): $RecipeHolder<never>;
    }
    export class $EmiRecipeDecorator {
    }
    export interface $EmiRecipeDecorator extends $GlobalMixin {
        decorateRecipe(arg0: $EmiRecipe, arg1: $WidgetHolder): void;
    }
    /**
     * Values that may be interpreted as {@link $EmiRecipeDecorator}.
     */
    export type $EmiRecipeDecorator_ = ((arg0: $EmiRecipe, arg1: $WidgetHolder) => void);
}
