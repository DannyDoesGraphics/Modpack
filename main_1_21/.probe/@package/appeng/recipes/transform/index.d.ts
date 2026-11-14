import { $Level_, $ItemLike_ } from "@package/net/minecraft/world/level";
import { $JsonObject } from "@package/com/google/gson";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $RecipeSerializer, $Ingredient_, $Ingredient, $Recipe, $RecipeType, $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $Fluid, $FluidState, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $AddReloadListenerEvent } from "@package/net/neoforged/neoforge/event";
import { $RecipeOutput } from "@package/net/minecraft/data/recipes";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $List, $List_ } from "@package/java/util";
import { $RecipesUpdatedEvent } from "@package/net/neoforged/neoforge/client/event";
import { $Predicate_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $SlotFilter_ } from "@package/dev/latvian/mods/kubejs/util";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $ServerStartedEvent } from "@package/net/neoforged/neoforge/event/server";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/appeng/recipes/transform" {
    export class $TransformRecipe implements $Recipe<$TransformRecipeInput> {
        getCircumstance(): $TransformCircumstance;
        getSerializer(): $RecipeSerializer<never>;
        assemble(arg0: $TransformRecipeInput_, arg1: $HolderLookup$Provider): $ItemStack;
        isSpecial(): boolean;
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        getResultItem(): $ItemStack;
        getIngredients(): $NonNullList<$Ingredient>;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        matches(arg0: $TransformRecipeInput_, arg1: $Level_): boolean;
        getType(): $RecipeType<never>;
        getRemainingItems(arg0: $TransformRecipeInput_): $NonNullList<$ItemStack>;
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        showNotification(): boolean;
        getGroup(): string;
        output: $ItemStack;
        /**
         * @deprecated
         */
        static TYPE_ID: $ResourceLocation;
        static CODEC: $MapCodec<$TransformRecipe>;
        circumstance: $TransformCircumstance;
        ingredients: $NonNullList<$Ingredient>;
        /**
         * @deprecated
         */
        static TYPE: $RecipeType<$TransformRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $TransformRecipe>;
        constructor(arg0: $NonNullList<$Ingredient_>, arg1: $ItemStack_, arg2: $TransformCircumstance);
        get serializer(): $RecipeSerializer<never>;
        get special(): boolean;
        get type(): $RecipeType<never>;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
        get group(): string;
    }
    export class $TransformCircumstance$FluidType extends $TransformCircumstance {
        static CODEC: $Codec<$TransformCircumstance>;
        static EXPLOSION: $TransformCircumstance;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $TransformCircumstance>;
    }
    export class $TransformLogic {
        static onReloadServerResources(arg0: $AddReloadListenerEvent): void;
        static onClientRecipesUpdated(arg0: $RecipesUpdatedEvent): void;
        static canTransformInExplosion(arg0: $ItemEntity): boolean;
        static tryTransform(arg0: $ItemEntity, arg1: $Predicate_<$TransformCircumstance>): boolean;
        static canTransformInAnyFluid(arg0: $ItemEntity): boolean;
        static canTransformInFluid(arg0: $ItemEntity, arg1: $FluidState): boolean;
        static onServerStarted(arg0: $ServerStartedEvent): void;
    }
    export class $TransformRecipeBuilder {
        static transform(arg0: $RecipeOutput, arg1: $ResourceLocation_, arg2: $ItemLike_, arg3: number, arg4: $TransformCircumstance, ...arg5: $ItemLike_[]): void;
        static transform(arg0: $RecipeOutput, arg1: $ResourceLocation_, arg2: $ItemLike_, arg3: number, arg4: $TransformCircumstance, ...arg5: $Ingredient_[]): void;
        constructor();
    }
    export class $TransformCircumstance {
        isFluidTag(arg0: $TagKey_<$Fluid>): boolean;
        getFluidsForRendering(): $List<$Fluid>;
        static fluid(arg0: $TagKey_<$Fluid>): $TransformCircumstance;
        static explosion(): $TransformCircumstance;
        isFluid(arg0: $FluidState): boolean;
        isFluid(): boolean;
        isFluid(arg0: $Fluid_): boolean;
        isExplosion(): boolean;
        toJson(): $JsonObject;
        static CODEC: $Codec<$TransformCircumstance>;
        static EXPLOSION: $TransformCircumstance;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $TransformCircumstance>;
        constructor(arg0: string);
        get fluidsForRendering(): $List<$Fluid>;
    }
    export class $TransformRecipeInput extends $Record implements $RecipeInput {
        items(): $List<$ItemStack>;
        size(): number;
        getItem(arg0: number): $ItemStack;
        isEmpty(): boolean;
        findAll(): $List<$ItemStack>;
        findAll(filter: $SlotFilter_): $List<$ItemStack>;
        find(filter: $SlotFilter_, skip: number): $ItemStack;
        find(filter: $SlotFilter_): $ItemStack;
        self(): $RecipeInput;
        constructor(items: $List_<$ItemStack_>);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TransformRecipeInput}.
     */
    export type $TransformRecipeInput_ = { items?: $List_<$ItemStack_>,  } | [items?: $List_<$ItemStack_>, ];
    export class $TransformRecipeSerializer implements $RecipeSerializer<$TransformRecipe> {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $TransformRecipe>;
        codec(): $MapCodec<$TransformRecipe>;
        static INSTANCE: $TransformRecipeSerializer;
    }
}
