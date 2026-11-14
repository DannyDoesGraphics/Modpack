import { $Level_, $ItemLike_ } from "@package/net/minecraft/world/level";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $RecipeSerializer, $Ingredient_, $Ingredient, $Recipe, $RecipeInput, $RecipeType } from "@package/net/minecraft/world/item/crafting";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $RecipeOutput } from "@package/net/minecraft/data/recipes";
import { $Enum, $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/appeng/recipes/handlers" {
    export class $ChargerRecipeSerializer implements $RecipeSerializer<$ChargerRecipe> {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $ChargerRecipe>;
        codec(): $MapCodec<$ChargerRecipe>;
        static INSTANCE: $ChargerRecipeSerializer;
        constructor();
    }
    export class $InscriberRecipeBuilder {
        static inscribe(arg0: $TagKey_<$Item>, arg1: $ItemLike_, arg2: number): $InscriberRecipeBuilder;
        static inscribe(arg0: $ItemLike_, arg1: $ItemLike_, arg2: number): $InscriberRecipeBuilder;
        static inscribe(arg0: $Ingredient_, arg1: $ItemLike_, arg2: number): $InscriberRecipeBuilder;
        setTop(arg0: $Ingredient_): $InscriberRecipeBuilder;
        setBottom(arg0: $Ingredient_): $InscriberRecipeBuilder;
        setMode(arg0: $InscriberProcessType_): $InscriberRecipeBuilder;
        save(arg0: $RecipeOutput, arg1: $ResourceLocation_): void;
        constructor(arg0: $Ingredient_, arg1: $ItemLike_, arg2: number);
        set top(value: $Ingredient_);
        set bottom(value: $Ingredient_);
        set mode(value: $InscriberProcessType_);
    }
    export class $ChargerRecipe implements $Recipe<$RecipeInput> {
        getSerializer(): $RecipeSerializer<never>;
        assemble(arg0: $RecipeInput, arg1: $HolderLookup$Provider): $ItemStack;
        isSpecial(): boolean;
        getResultItem(): $ItemStack;
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        getIngredients(): $NonNullList<$Ingredient>;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        getIngredient(): $Ingredient;
        matches(arg0: $RecipeInput, arg1: $Level_): boolean;
        getType(): $RecipeType<never>;
        getRemainingItems(arg0: $RecipeInput): $NonNullList<$ItemStack>;
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        showNotification(): boolean;
        getGroup(): string;
        result: $ItemStack;
        /**
         * @deprecated
         */
        static TYPE_ID: $ResourceLocation;
        ingredient: $Ingredient;
        static CODEC: $MapCodec<$ChargerRecipe>;
        ingredients: $NonNullList<$Ingredient>;
        /**
         * @deprecated
         */
        static TYPE: $RecipeType<$ChargerRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ChargerRecipe>;
        constructor(arg0: $Ingredient_, arg1: $ItemStack_);
        get serializer(): $RecipeSerializer<never>;
        get special(): boolean;
        get type(): $RecipeType<never>;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
        get group(): string;
    }
    export class $ChargerRecipeBuilder {
        static charge(arg0: $RecipeOutput, arg1: $ResourceLocation_, arg2: $Ingredient_, arg3: $ItemLike_): void;
        static charge(arg0: $RecipeOutput, arg1: $ResourceLocation_, arg2: $ItemLike_, arg3: $ItemLike_): void;
        static charge(arg0: $RecipeOutput, arg1: $ResourceLocation_, arg2: $TagKey_<$Item>, arg3: $ItemLike_): void;
        constructor();
    }
    export class $InscriberRecipe implements $Recipe<$RecipeInput> {
        getMiddleInput(): $Ingredient;
        getTopOptional(): $Ingredient;
        getBottomOptional(): $Ingredient;
        getSerializer(): $RecipeSerializer<never>;
        assemble(arg0: $RecipeInput, arg1: $HolderLookup$Provider): $ItemStack;
        isSpecial(): boolean;
        getResultItem(): $ItemStack;
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        getIngredients(): $NonNullList<$Ingredient>;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        getProcessType(): $InscriberProcessType;
        matches(arg0: $RecipeInput, arg1: $Level_): boolean;
        getType(): $RecipeType<never>;
        getRemainingItems(arg0: $RecipeInput): $NonNullList<$ItemStack>;
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        showNotification(): boolean;
        getGroup(): string;
        /**
         * @deprecated
         */
        static TYPE_ID: $ResourceLocation;
        static CODEC: $MapCodec<$InscriberRecipe>;
        /**
         * @deprecated
         */
        static TYPE: $RecipeType<$InscriberRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $InscriberRecipe>;
        constructor(arg0: $Ingredient_, arg1: $ItemStack_, arg2: $Ingredient_, arg3: $Ingredient_, arg4: $InscriberProcessType_);
        get middleInput(): $Ingredient;
        get topOptional(): $Ingredient;
        get bottomOptional(): $Ingredient;
        get serializer(): $RecipeSerializer<never>;
        get special(): boolean;
        get ingredients(): $NonNullList<$Ingredient>;
        get processType(): $InscriberProcessType;
        get type(): $RecipeType<never>;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
        get group(): string;
    }
    export class $InscriberRecipe$Ingredients extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $InscriberRecipe$Ingredients}.
     */
    export type $InscriberRecipe$Ingredients_ = { middle?: $Ingredient_, bottom?: $Ingredient_, top?: $Ingredient_,  } | [middle?: $Ingredient_, bottom?: $Ingredient_, top?: $Ingredient_, ];
    export class $InscriberProcessType extends $Enum<$InscriberProcessType> {
        static values(): $InscriberProcessType[];
        static valueOf(arg0: string): $InscriberProcessType;
        static INSCRIBE: $InscriberProcessType;
        static PRESS: $InscriberProcessType;
    }
    /**
     * Values that may be interpreted as {@link $InscriberProcessType}.
     */
    export type $InscriberProcessType_ = "inscribe" | "press";
    export class $InscriberRecipeSerializer implements $RecipeSerializer<$InscriberRecipe> {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $InscriberRecipe>;
        codec(): $MapCodec<$InscriberRecipe>;
        static INSTANCE: $InscriberRecipeSerializer;
    }
}
