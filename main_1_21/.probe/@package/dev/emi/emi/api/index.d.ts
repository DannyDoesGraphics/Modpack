import { $EmiRegistryAdapter, $Comparison, $EmiStackInteraction, $EmiStack, $EmiIngredient } from "@package/dev/emi/emi/api/stack";
import { $RecipeManager } from "@package/net/minecraft/world/item/crafting";
import { $Bounds_, $Bounds } from "@package/dev/emi/emi/api/widget";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $EmiIngredientSerializer } from "@package/dev/emi/emi/api/stack/serializer";
import { $GlobalMixin } from "@package/dev/emi/emi/mixin";
import { $Consumer_, $Consumer, $Predicate_, $Function_ } from "@package/java/util/function";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $EmiRecipeHandler } from "@package/dev/emi/emi/api/recipe/handler";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $MenuType_, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $EmiRecipe, $EmiRecipeDecorator_, $EmiRecipeCategory } from "@package/dev/emi/emi/api/recipe";
import { $Object, $Class } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
export * as widget from "@package/dev/emi/emi/api/widget";
export * as stack from "@package/dev/emi/emi/api/stack";
export * as recipe from "@package/dev/emi/emi/api/recipe";
export * as render from "@package/dev/emi/emi/api/render";

declare module "@package/dev/emi/emi/api" {
    export class $EmiExclusionArea<T extends $Screen> {
    }
    export interface $EmiExclusionArea<T extends $Screen> extends $GlobalMixin {
        addExclusionArea(arg0: T, arg1: $Consumer_<$Bounds>): void;
    }
    /**
     * Values that may be interpreted as {@link $EmiExclusionArea}.
     */
    export type $EmiExclusionArea_<T> = ((arg0: T, arg1: $Consumer<$Bounds>) => void);
    export class $EmiDragDropHandler<T extends $Screen> {
    }
    export interface $EmiDragDropHandler<T extends $Screen> extends $GlobalMixin {
        dropStack(arg0: T, arg1: $EmiIngredient, arg2: number, arg3: number): boolean;
        render(screen: T, dragged: $EmiIngredient, draw: $GuiGraphics, mouseX: number, mouseY: number, delta: number): void;
    }
    /**
     * Values that may be interpreted as {@link $EmiDragDropHandler}.
     */
    export type $EmiDragDropHandler_<T> = ((arg0: T, arg1: $EmiIngredient, arg2: number, arg3: number) => boolean);
    export class $EmiRegistry {
    }
    export interface $EmiRegistry extends $GlobalMixin {
        addScreenBoundsProvider<T extends $Screen>(arg0: $Class<T>, arg1: $EmiScreenBoundsProvider_<T>): void;
        isStackDisabled(arg0: $EmiIngredient): boolean;
        addDeferredRecipes(arg0: $Consumer_<$Consumer<$EmiRecipe>>): void;
        addEmiStackAfter(stack: $EmiStack, other: $EmiStack): void;
        addEmiStackAfter(arg0: $EmiStack, arg1: $Predicate_<$EmiStack>): void;
        addDragDropHandler<T extends $Screen>(arg0: $Class<T>, arg1: $EmiDragDropHandler_<T>): void;
        addStackProvider<T extends $Screen>(arg0: $Class<T>, arg1: $EmiStackProvider_<T>): void;
        addRecipeHandler<T extends $AbstractContainerMenu>(arg0: $MenuType_<T>, arg1: $EmiRecipeHandler<T>): void;
        addRecipeDecorator(arg0: $EmiRecipeDecorator_): void;
        addRecipeDecorator(category: $EmiRecipeCategory, decorator: $EmiRecipeDecorator_): void;
        addGenericScreenBoundsProvider(arg0: $EmiScreenBoundsProvider_<$Screen>): void;
        removeRecipes(id: $ResourceLocation_): void;
        removeRecipes(arg0: $Predicate_<$EmiRecipe>): void;
        addGenericExclusionArea(arg0: $EmiExclusionArea_<$Screen>): void;
        addGenericStackProvider(arg0: $EmiStackProvider_<$Screen>): void;
        addGenericDragDropHandler(arg0: $EmiDragDropHandler_<$Screen>): void;
        /**
         * @deprecated
         */
        addIngredientSerializer<T extends $EmiIngredient>(arg0: $Class<T>, arg1: $EmiIngredientSerializer<T>): void;
        removeEmiStacks(stack: $EmiStack): void;
        removeEmiStacks(arg0: $Predicate_<$EmiStack>): void;
        addWorkstation(arg0: $EmiRecipeCategory, arg1: $EmiIngredient): void;
        addRecipe(arg0: $EmiRecipe): void;
        addExclusionArea<T extends $Screen>(arg0: $Class<T>, arg1: $EmiExclusionArea_<T>): void;
        addEmiStack(arg0: $EmiStack): void;
        setDefaultComparison(key: $Object, comparison: $Comparison): void;
        setDefaultComparison(stack: $EmiStack, comparison: $Function_<$Comparison, $Comparison>): void;
        setDefaultComparison(stack: $EmiStack, comparison: $Comparison): void;
        setDefaultComparison(arg0: $Object, arg1: $Function_<$Comparison, $Comparison>): void;
        addAlias(arg0: $EmiIngredient, arg1: $Component_): void;
        addCategory(arg0: $EmiRecipeCategory): void;
        getRecipeManager(): $RecipeManager;
        get recipeManager(): $RecipeManager;
    }
    export class $EmiStackProvider<T extends $Screen> {
    }
    export interface $EmiStackProvider<T extends $Screen> extends $GlobalMixin {
        getStackAt(arg0: T, arg1: number, arg2: number): $EmiStackInteraction;
    }
    /**
     * Values that may be interpreted as {@link $EmiStackProvider}.
     */
    export type $EmiStackProvider_<T> = ((arg0: T, arg1: number, arg2: number) => $EmiStackInteraction);
    export class $EmiPlugin {
    }
    export interface $EmiPlugin extends $GlobalMixin {
        initialize(registry: $EmiInitRegistry): void;
        register(arg0: $EmiRegistry): void;
    }
    /**
     * Values that may be interpreted as {@link $EmiPlugin}.
     */
    export type $EmiPlugin_ = ((arg0: $EmiRegistry) => void);
    export class $EmiScreenBoundsProvider<T extends $Screen> {
    }
    export interface $EmiScreenBoundsProvider<T extends $Screen> extends $GlobalMixin {
        getBounds(arg0: T): $Bounds;
    }
    /**
     * Values that may be interpreted as {@link $EmiScreenBoundsProvider}.
     */
    export type $EmiScreenBoundsProvider_<T> = ((arg0: T) => $Bounds_);
    export class $EmiInitRegistry {
    }
    export interface $EmiInitRegistry extends $GlobalMixin {
        disableStack(arg0: $EmiStack): void;
        disableStacks(arg0: $Predicate_<$EmiStack>): void;
        addRegistryAdapter(arg0: $EmiRegistryAdapter<never>): void;
        addIngredientSerializer<T extends $EmiIngredient>(arg0: $Class<T>, arg1: $EmiIngredientSerializer<T>): void;
    }
}
