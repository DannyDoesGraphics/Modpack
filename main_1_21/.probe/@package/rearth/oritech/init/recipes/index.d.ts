import { $Level_ } from "@package/net/minecraft/world/level";
import { $FluidIngredient_, $SizedIngredient, $SizedIngredient_, $FluidIngredient } from "@package/rearth/oritech/util";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $RecipeSerializer, $Ingredient, $Ingredient_, $RecipeType_, $Recipe, $RecipeType, $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $Augment } from "@package/rearth/oritech/block/entity/augmenter/api";
import { $RegistrySupplier } from "@package/dev/architectury/registry/registries";
import { $List, $List_ } from "@package/java/util";
import { $FluidStack } from "@package/dev/architectury/fluid";
import { $HolderLookup$Provider, $Registry, $NonNullList } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Field } from "@package/java/lang/reflect";
import { $Record, $Class } from "@package/java/lang";
import { $ArchitecturyRecipeRegistryContainer } from "@package/rearth/oritech/util/registry";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/rearth/oritech/init/recipes" {
    export class $AugmentDataRecipeType implements $RecipeSerializer<$AugmentDataRecipe>, $RecipeType<$AugmentDataRecipe> {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $AugmentDataRecipe>;
        codec(): $MapCodec<$AugmentDataRecipe>;
        getIdentifier(): $ResourceLocation;
        static PACKET_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AugmentDataRecipe>;
        static AUGMENT_DATA_RECIPE_CODEC: $MapCodec<$AugmentDataRecipe>;
        constructor(arg0: $ResourceLocation_);
        get identifier(): $ResourceLocation;
    }
    export class $AugmentDataRecipe$EffectDefinition extends $Record {
        effectStrength(): number;
        potionEffectId(): $ResourceLocation;
        static CODEC: $Codec<$AugmentDataRecipe$EffectDefinition>;
        constructor(potionEffectId: $ResourceLocation_, effectStrength: number);
    }
    /**
     * Values that may be interpreted as {@link $AugmentDataRecipe$EffectDefinition}.
     */
    export type $AugmentDataRecipe$EffectDefinition_ = { potionEffectId?: $ResourceLocation_, effectStrength?: number,  } | [potionEffectId?: $ResourceLocation_, effectStrength?: number, ];
    export class $OritechRecipe implements $Recipe<$RecipeInput> {
        getSerializer(): $RecipeSerializer<never>;
        assemble(arg0: $RecipeInput, arg1: $HolderLookup$Provider): $ItemStack;
        isSpecial(): boolean;
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        getIngredients(): $NonNullList<$Ingredient>;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        getOriType(): $OritechRecipeType;
        getFluidInput(): $FluidIngredient;
        getFluidOutputs(): $List<$FluidStack>;
        getInputs(): $List<$Ingredient>;
        matches(arg0: $RecipeInput, arg1: $Level_): boolean;
        getType(): $RecipeType<never>;
        getTime(): number;
        getResults(): $List<$ItemStack>;
        getRemainingItems(arg0: $RecipeInput): $NonNullList<$ItemStack>;
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        showNotification(): boolean;
        getGroup(): string;
        static DUMMY: $OritechRecipe;
        constructor(arg0: number, arg1: $List_<$Ingredient_>, arg2: $List_<$ItemStack_>, arg3: $OritechRecipeType, arg4: $FluidIngredient_, arg5: $List_<$FluidStack>);
        constructor(arg0: number, arg1: $List_<$Ingredient_>, arg2: $List_<$ItemStack_>, arg3: $OritechRecipeType, arg4: $FluidIngredient_, arg5: $FluidStack);
        constructor(arg0: number, arg1: $List_<$Ingredient_>, arg2: $List_<$ItemStack_>, arg3: $OritechRecipeType, arg4: $FluidIngredient_, arg5: $Fluid_, arg6: number);
        constructor(arg0: number, arg1: $List_<$Ingredient_>, arg2: $List_<$ItemStack_>, arg3: $OritechRecipeType, arg4: $Fluid_, arg5: number, arg6: $Fluid_, arg7: number);
        get serializer(): $RecipeSerializer<never>;
        get special(): boolean;
        get ingredients(): $NonNullList<$Ingredient>;
        get oriType(): $OritechRecipeType;
        get fluidInput(): $FluidIngredient;
        get fluidOutputs(): $List<$FluidStack>;
        get inputs(): $List<$Ingredient>;
        get type(): $RecipeType<never>;
        get time(): number;
        get results(): $List<$ItemStack>;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
        get group(): string;
    }
    export class $RecipeContent implements $ArchitecturyRecipeRegistryContainer {
        postProcessField(arg0: string, arg1: $RecipeType_<never>, arg2: string, arg3: $Field, arg4: $RegistrySupplier<$RecipeType_<never>>): void;
        getRegistryType(): $ResourceKey<$Registry<$RecipeType<never>>>;
        getTargetFieldType(): $Class<$RecipeType<never>>;
        shouldProcessField(arg0: $RecipeType_<never>, arg1: string, arg2: $Field): boolean;
        afterFieldProcessing(): void;
        static ASSEMBLER: $OritechRecipeType;
        static COOLER: $OritechRecipeType;
        static LASER: $OritechRecipeType;
        static CENTRIFUGE: $OritechRecipeType;
        static BIO_GENERATOR: $OritechRecipeType;
        static FUEL_GENERATOR: $OritechRecipeType;
        static ATOMIC_FORGE: $OritechRecipeType;
        static PARTICLE_COLLISION: $OritechRecipeType;
        static GRINDER: $OritechRecipeType;
        static DEEP_DRILL: $OritechRecipeType;
        static REACTOR: $OritechRecipeType;
        static STEAM_ENGINE: $OritechRecipeType;
        static PULVERIZER: $OritechRecipeType;
        static LAVA_GENERATOR: $OritechRecipeType;
        static FOUNDRY: $OritechRecipeType;
        static CENTRIFUGE_FLUID: $OritechRecipeType;
        static REFINERY: $OritechRecipeType;
        static AUGMENT_DATA: $AugmentDataRecipeType;
        constructor();
        get registryType(): $ResourceKey<$Registry<$RecipeType<never>>>;
        get targetFieldType(): $Class<$RecipeType<never>>;
    }
    export class $AugmentDataRecipe$CustomAugmentDefinition extends $Record {
        customAugmentId(): $ResourceLocation;
        static CODEC: $Codec<$AugmentDataRecipe$CustomAugmentDefinition>;
        constructor(customAugmentId: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $AugmentDataRecipe$CustomAugmentDefinition}.
     */
    export type $AugmentDataRecipe$CustomAugmentDefinition_ = { customAugmentId?: $ResourceLocation_,  } | [customAugmentId?: $ResourceLocation_, ];
    export class $AugmentDataRecipe$ModifierDefinition extends $Record {
        attributeOperationType(): number;
        entityAttributeId(): $ResourceLocation;
        amount(): number;
        static CODEC: $Codec<$AugmentDataRecipe$ModifierDefinition>;
        constructor(entityAttributeId: $ResourceLocation_, attributeOperationType: number, amount: number);
    }
    /**
     * Values that may be interpreted as {@link $AugmentDataRecipe$ModifierDefinition}.
     */
    export type $AugmentDataRecipe$ModifierDefinition_ = { entityAttributeId?: $ResourceLocation_, attributeOperationType?: number, amount?: number,  } | [entityAttributeId?: $ResourceLocation_, attributeOperationType?: number, amount?: number, ];
    export class $AugmentDataRecipe implements $Recipe<$RecipeInput> {
        isToggleable(): boolean;
        getEffectDefinition(): $AugmentDataRecipe$EffectDefinition;
        getCustomAugmentDefinition(): $AugmentDataRecipe$CustomAugmentDefinition;
        getModifierDefinition(): $AugmentDataRecipe$ModifierDefinition;
        getSerializer(): $RecipeSerializer<never>;
        assemble(arg0: $RecipeInput, arg1: $HolderLookup$Provider): $ItemStack;
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        getOriType(): $AugmentDataRecipeType;
        getRfCost(): number;
        getResearchCost(): $List<$SizedIngredient>;
        getRequiredStation(): $ResourceLocation;
        getApplyCost(): $List<$SizedIngredient>;
        createAugment(arg0: $ResourceLocation_): $Augment;
        getUiX(): number;
        getUiY(): number;
        getRequirements(): $List<$ResourceLocation>;
        matches(arg0: $RecipeInput, arg1: $Level_): boolean;
        getType(): $RecipeType<never>;
        getDefinition(): $Either<$Either<$AugmentDataRecipe$EffectDefinition, $AugmentDataRecipe$ModifierDefinition>, $AugmentDataRecipe$CustomAugmentDefinition>;
        getTime(): number;
        getRemainingItems(arg0: $RecipeInput): $NonNullList<$ItemStack>;
        isSpecial(): boolean;
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        getIngredients(): $NonNullList<$Ingredient>;
        showNotification(): boolean;
        getGroup(): string;
        constructor(arg0: $AugmentDataRecipeType, arg1: boolean, arg2: $List_<$SizedIngredient_>, arg3: $List_<$SizedIngredient_>, arg4: $List_<$ResourceLocation_>, arg5: $ResourceLocation_, arg6: number, arg7: number, arg8: number, arg9: number, arg10: $AugmentDataRecipe$EffectDefinition_, arg11: $AugmentDataRecipe$ModifierDefinition_, arg12: $AugmentDataRecipe$CustomAugmentDefinition_);
        constructor(arg0: $AugmentDataRecipeType, arg1: boolean, arg2: $List_<$SizedIngredient_>, arg3: $List_<$SizedIngredient_>, arg4: $List_<$ResourceLocation_>, arg5: $ResourceLocation_, arg6: number, arg7: number, arg8: number, arg9: number, arg10: $Either<$Either<$AugmentDataRecipe$EffectDefinition_, $AugmentDataRecipe$ModifierDefinition_>, $AugmentDataRecipe$CustomAugmentDefinition_>);
        get toggleable(): boolean;
        get effectDefinition(): $AugmentDataRecipe$EffectDefinition;
        get customAugmentDefinition(): $AugmentDataRecipe$CustomAugmentDefinition;
        get modifierDefinition(): $AugmentDataRecipe$ModifierDefinition;
        get serializer(): $RecipeSerializer<never>;
        get oriType(): $AugmentDataRecipeType;
        get rfCost(): number;
        get researchCost(): $List<$SizedIngredient>;
        get requiredStation(): $ResourceLocation;
        get applyCost(): $List<$SizedIngredient>;
        get uiX(): number;
        get uiY(): number;
        get requirements(): $List<$ResourceLocation>;
        get type(): $RecipeType<never>;
        get definition(): $Either<$Either<$AugmentDataRecipe$EffectDefinition, $AugmentDataRecipe$ModifierDefinition>, $AugmentDataRecipe$CustomAugmentDefinition>;
        get time(): number;
        get special(): boolean;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
        get ingredients(): $NonNullList<$Ingredient>;
        get group(): string;
    }
    export class $OritechRecipeType implements $RecipeSerializer<$OritechRecipe>, $RecipeType<$OritechRecipe> {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $OritechRecipe>;
        codec(): $MapCodec<$OritechRecipe>;
        getIdentifier(): $ResourceLocation;
        static ORI_RECIPE_CODEC: $MapCodec<$OritechRecipe>;
        static PACKET_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $OritechRecipe>;
        static FLUID_STACK_CODEC: $Codec<$FluidStack>;
        constructor(arg0: $ResourceLocation_);
        get identifier(): $ResourceLocation;
    }
}
