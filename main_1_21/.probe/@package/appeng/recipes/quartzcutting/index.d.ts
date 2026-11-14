import { $Level_ } from "@package/net/minecraft/world/level";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $RecipeSerializer, $CraftingBookCategory, $CraftingInput, $Ingredient, $Ingredient_, $CraftingRecipe, $RecipeType } from "@package/net/minecraft/world/item/crafting";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/appeng/recipes/quartzcutting" {
    export class $QuartzCuttingRecipe implements $CraftingRecipe {
        getSerializer(): $RecipeSerializer<never>;
        assemble(arg0: $CraftingInput, arg1: $HolderLookup$Provider): $ItemStack;
        getRemainingItems(arg0: $CraftingInput): $NonNullList<$ItemStack>;
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        getIngredients(): $NonNullList<$Ingredient>;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        matches(arg0: $CraftingInput, arg1: $Level_): boolean;
        category(): $CraftingBookCategory;
        getType(): $RecipeType<never>;
        isSpecial(): boolean;
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        showNotification(): boolean;
        getGroup(): string;
        static CODEC: $MapCodec<$QuartzCuttingRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $QuartzCuttingRecipe>;
        constructor(arg0: $ItemStack_, arg1: $NonNullList<$Ingredient_>);
        get serializer(): $RecipeSerializer<never>;
        get ingredients(): $NonNullList<$Ingredient>;
        get type(): $RecipeType<never>;
        get special(): boolean;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
        get group(): string;
    }
    export class $QuartzCuttingRecipeSerializer implements $RecipeSerializer<$QuartzCuttingRecipe> {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $QuartzCuttingRecipe>;
        codec(): $MapCodec<$QuartzCuttingRecipe>;
        static INSTANCE: $QuartzCuttingRecipeSerializer;
        constructor();
    }
}
