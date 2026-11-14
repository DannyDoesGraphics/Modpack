import { $Level_, $ItemLike_ } from "@package/net/minecraft/world/level";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $ItemStack, $Item } from "@package/net/minecraft/world/item";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $RecipeSerializer, $Ingredient_, $Ingredient, $RecipeType, $RecipeInput, $Recipe } from "@package/net/minecraft/world/item/crafting";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $RecipeOutput } from "@package/net/minecraft/data/recipes";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/appeng/recipes/mattercannon" {
    export class $MatterCannonAmmo implements $Recipe<$RecipeInput> {
        static ammo(arg0: $RecipeOutput, arg1: $ResourceLocation_, arg2: $Ingredient_, arg3: number): void;
        static ammo(arg0: $RecipeOutput, arg1: $ResourceLocation_, arg2: $ItemLike_, arg3: number): void;
        static ammo(arg0: $RecipeOutput, arg1: $ResourceLocation_, arg2: $TagKey_<$Item>, arg3: number): void;
        getSerializer(): $RecipeSerializer<never>;
        getWeight(): number;
        assemble(arg0: $RecipeInput, arg1: $HolderLookup$Provider): $ItemStack;
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        getIngredients(): $NonNullList<$Ingredient>;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        getAmmo(): $Ingredient;
        matches(arg0: $RecipeInput, arg1: $Level_): boolean;
        getType(): $RecipeType<never>;
        getRemainingItems(arg0: $RecipeInput): $NonNullList<$ItemStack>;
        isSpecial(): boolean;
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        showNotification(): boolean;
        getGroup(): string;
        /**
         * @deprecated
         */
        static TYPE_ID: $ResourceLocation;
        static CODEC: $MapCodec<$MatterCannonAmmo>;
        /**
         * @deprecated
         */
        static TYPE: $RecipeType<$MatterCannonAmmo>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MatterCannonAmmo>;
        constructor(arg0: $Ingredient_, arg1: number);
        get serializer(): $RecipeSerializer<never>;
        get weight(): number;
        get ingredients(): $NonNullList<$Ingredient>;
        get type(): $RecipeType<never>;
        get special(): boolean;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
        get group(): string;
    }
    export class $MatterCannonAmmoSerializer implements $RecipeSerializer<$MatterCannonAmmo> {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $MatterCannonAmmo>;
        codec(): $MapCodec<$MatterCannonAmmo>;
        static INSTANCE: $MatterCannonAmmoSerializer;
    }
}
