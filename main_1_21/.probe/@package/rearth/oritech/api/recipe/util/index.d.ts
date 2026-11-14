import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Ingredient_, $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $Item, $Item_ } from "@package/net/minecraft/world/item";
import { $RecipeBuilder, $RecipeCategory_, $RecipeOutput } from "@package/net/minecraft/data/recipes";

declare module "@package/rearth/oritech/api/recipe/util" {
    export class $MetalProcessingChainBuilder {
        ingot(arg0: $Item_): $MetalProcessingChainBuilder;
        ingot(arg0: $TagKey_<$Item>, arg1: $Item_): $MetalProcessingChainBuilder;
        ingot(arg0: $Ingredient_, arg1: $Item_): $MetalProcessingChainBuilder;
        nugget(arg0: $Ingredient_, arg1: $Item_): $MetalProcessingChainBuilder;
        nugget(arg0: $Item_): $MetalProcessingChainBuilder;
        nugget(arg0: $TagKey_<$Item>, arg1: $Item_): $MetalProcessingChainBuilder;
        dust(arg0: $Item_): $MetalProcessingChainBuilder;
        ore(arg0: $ItemLike_): $MetalProcessingChainBuilder;
        ore(arg0: $TagKey_<$Item>): $MetalProcessingChainBuilder;
        ore(arg0: $Ingredient_): $MetalProcessingChainBuilder;
        timeMultiplier(arg0: number): $MetalProcessingChainBuilder;
        centrifugeResult(arg0: $Item_, arg1: number): $MetalProcessingChainBuilder;
        centrifugeResult(arg0: $Item_): $MetalProcessingChainBuilder;
        rawOre(arg0: $TagKey_<$Item>, arg1: $Item_): $MetalProcessingChainBuilder;
        rawOre(arg0: $Item_): $MetalProcessingChainBuilder;
        rawOre(arg0: $Ingredient_, arg1: $Item_): $MetalProcessingChainBuilder;
        rawOreByproduct(arg0: $Item_): $MetalProcessingChainBuilder;
        clump(arg0: $Ingredient_, arg1: $Item_): $MetalProcessingChainBuilder;
        clump(arg0: $TagKey_<$Item>, arg1: $Item_): $MetalProcessingChainBuilder;
        clump(arg0: $Item_): $MetalProcessingChainBuilder;
        smallClump(arg0: $Item_): $MetalProcessingChainBuilder;
        clumpByproduct(arg0: $Item_): $MetalProcessingChainBuilder;
        smallDust(arg0: $Item_): $MetalProcessingChainBuilder;
        dustByproduct(arg0: $Item_): $MetalProcessingChainBuilder;
        gem(arg0: $Ingredient_, arg1: $Item_): $MetalProcessingChainBuilder;
        gem(arg0: $Item_): $MetalProcessingChainBuilder;
        gem(arg0: $TagKey_<$Item>, arg1: $Item_): $MetalProcessingChainBuilder;
        gemCatalyst(arg0: $Ingredient_): $MetalProcessingChainBuilder;
        gemCatalyst(arg0: $Item_): $MetalProcessingChainBuilder;
        gemCatalyst(arg0: $TagKey_<$Item>): $MetalProcessingChainBuilder;
        vanillaProcessing(): $MetalProcessingChainBuilder;
        skipCompacting(): $MetalProcessingChainBuilder;
        byproductAmount(arg0: number): $MetalProcessingChainBuilder;
        static build(arg0: string): $MetalProcessingChainBuilder;
        "export"(arg0: $RecipeOutput): void;
        resourcePath(arg0: string): $MetalProcessingChainBuilder;
    }
    export class $RecipeHelpers {
        static addDustRecipe(arg0: $RecipeOutput, arg1: $Ingredient_, arg2: $Item_, arg3: $Item_, arg4: string): void;
        static addDustRecipe(arg0: $RecipeOutput, arg1: $Ingredient_, arg2: $Item_, arg3: string): void;
        static createInsulatedCableRecipe(arg0: $RecipeCategory_, arg1: $Item_, arg2: number, arg3: $Ingredient_, arg4: $Ingredient_): $RecipeBuilder;
        static createRotatedCableRecipe(arg0: $RecipeCategory_, arg1: $Item_, arg2: number, arg3: $Ingredient_, arg4: $Ingredient_): $RecipeBuilder;
        static of(arg0: $ItemLike_): $Ingredient;
        static of(arg0: $TagKey_<$Item>): $Ingredient;
        constructor();
    }
}
