import { $Ingredient, $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Record } from "@package/java/lang";
import { $List_, $List } from "@package/java/util";

declare module "@package/net/neoforged/neoforge/common/brewing" {
    /**
     * Interface for more flexible brewing recipes.
     * 
     * Register using `RegisterBrewingRecipesEvent` and `Builder#addRecipe(IBrewingRecipe)`.
     */
    export class $IBrewingRecipe {
    }
    export interface $IBrewingRecipe {
        /**
         * Returns true is the passed ItemStack is an input for this recipe. "Input"
         * being the item that goes in one of the three bottom slots of the brewing
         * stand (e.g: water bottle)
         */
        isIngredient(input: $ItemStack_): boolean;
        /**
         * Returns true is the passed ItemStack is an input for this recipe. "Input"
         * being the item that goes in one of the three bottom slots of the brewing
         * stand (e.g: water bottle)
         */
        isInput(input: $ItemStack_): boolean;
        /**
         * Returns the output when the passed input is brewed with the passed
         * ingredient. Empty if invalid input or ingredient.
         */
        getOutput(input: $ItemStack_, ingredient: $ItemStack_): $ItemStack;
    }
    export class $BrewingRecipeRegistry extends $Record {
        isValidInput(arg0: $ItemStack_): boolean;
        isValidIngredient(arg0: $ItemStack_): boolean;
        hasOutput(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        getOutput(arg0: $ItemStack_, arg1: $ItemStack_): $ItemStack;
        recipes(): $List<$IBrewingRecipe>;
        constructor(recipes: $List_<$IBrewingRecipe>);
    }
    /**
     * Values that may be interpreted as {@link $BrewingRecipeRegistry}.
     */
    export type $BrewingRecipeRegistry_ = { recipes?: $List_<$IBrewingRecipe>,  } | [recipes?: $List_<$IBrewingRecipe>, ];
    export class $BrewingRecipe implements $IBrewingRecipe {
        isIngredient(stack: $ItemStack_): boolean;
        isInput(stack: $ItemStack_): boolean;
        getIngredient(): $Ingredient;
        getOutput(): $ItemStack;
        getOutput(input: $ItemStack_, ingredient: $ItemStack_): $ItemStack;
        getInput(): $Ingredient;
        constructor(input: $Ingredient_, ingredient: $Ingredient_, output: $ItemStack_);
    }
}
