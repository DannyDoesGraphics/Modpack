import { $Level_ } from "@package/net/minecraft/world/level";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $RecipeSerializer, $Recipe, $RecipeType, $Ingredient, $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $Fluid, $FluidState, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $RecipeOutput } from "@package/net/minecraft/data/recipes";
import { $List, $Map_, $List_, $Map } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $BlockState_, $StateHolder, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Enum, $Record, $Comparable_, $Comparable } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/appeng/recipes/entropy" {
    export class $EntropyRecipe$Input extends $Record {
        fluid(): ($EntropyRecipe$FluidInput) | undefined;
        matches(arg0: $BlockState_, arg1: $FluidState): boolean;
        block(): ($EntropyRecipe$BlockInput) | undefined;
        static CODEC: $Codec<$EntropyRecipe$Input>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $EntropyRecipe$Input>;
        constructor(block: ($EntropyRecipe$BlockInput_) | undefined, fluid: ($EntropyRecipe$FluidInput_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $EntropyRecipe$Input}.
     */
    export type $EntropyRecipe$Input_ = { fluid?: ($EntropyRecipe$FluidInput_) | undefined, block?: ($EntropyRecipe$BlockInput_) | undefined,  } | [fluid?: ($EntropyRecipe$FluidInput_) | undefined, block?: ($EntropyRecipe$BlockInput_) | undefined, ];
    export class $PropertyValueMatcher$SingleValue extends $Record implements $PropertyValueMatcher {
        toNetwork(arg0: $FriendlyByteBuf): void;
        value(): string;
        matches<T extends $Comparable<T>>(arg0: $Property<T>, arg1: $StateHolder<never, never>): boolean;
        validate(arg0: $Property<$Comparable_<never>>): void;
        constructor(value: string);
    }
    /**
     * Values that may be interpreted as {@link $PropertyValueMatcher$SingleValue}.
     */
    export type $PropertyValueMatcher$SingleValue_ = { value?: string,  } | [value?: string, ];
    export class $PropertyUtils {
    }
    export class $EntropyRecipe$Output extends $Record {
        fluid(): ($EntropyRecipe$FluidOutput) | undefined;
        block(): ($EntropyRecipe$BlockOutput) | undefined;
        drops(): $List<$ItemStack>;
        static CODEC: $Codec<$EntropyRecipe$Output>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $EntropyRecipe$Output>;
        constructor(block: ($EntropyRecipe$BlockOutput_) | undefined, fluid: ($EntropyRecipe$FluidOutput_) | undefined, drops: $List_<$ItemStack_>);
    }
    /**
     * Values that may be interpreted as {@link $EntropyRecipe$Output}.
     */
    export type $EntropyRecipe$Output_ = { block?: ($EntropyRecipe$BlockOutput_) | undefined, drops?: $List_<$ItemStack_>, fluid?: ($EntropyRecipe$FluidOutput_) | undefined,  } | [block?: ($EntropyRecipe$BlockOutput_) | undefined, drops?: $List_<$ItemStack_>, fluid?: ($EntropyRecipe$FluidOutput_) | undefined, ];
    export class $EntropyRecipe$FluidInput extends $Record {
        fluid(): $Fluid;
        properties(): $Map<string, $PropertyValueMatcher>;
        static CODEC: $Codec<$EntropyRecipe$FluidInput>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $EntropyRecipe$FluidInput>;
        constructor(fluid: $Fluid_, properties: $Map_<string, $PropertyValueMatcher>);
    }
    /**
     * Values that may be interpreted as {@link $EntropyRecipe$FluidInput}.
     */
    export type $EntropyRecipe$FluidInput_ = { properties?: $Map_<string, $PropertyValueMatcher>, fluid?: $Fluid_,  } | [properties?: $Map_<string, $PropertyValueMatcher>, fluid?: $Fluid_, ];
    export class $EntropyRecipe implements $Recipe<$RecipeInput> {
        getSerializer(): $RecipeSerializer<never>;
        getDrops(): $List<$ItemStack>;
        assemble(arg0: $RecipeInput, arg1: $HolderLookup$Provider): $ItemStack;
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        getIngredients(): $NonNullList<$Ingredient>;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        getOutputBlockState(arg0: $BlockState_): $BlockState;
        getOutputFluidState(arg0: $FluidState): $FluidState;
        getOutput(): $EntropyRecipe$Output;
        getMode(): $EntropyMode;
        matches(arg0: $RecipeInput, arg1: $Level_): boolean;
        matches(arg0: $EntropyMode_, arg1: $BlockState_, arg2: $FluidState): boolean;
        getType(): $RecipeType<never>;
        getInput(): $EntropyRecipe$Input;
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
        static CODEC: $MapCodec<$EntropyRecipe>;
        /**
         * @deprecated
         */
        static TYPE: $RecipeType<$EntropyRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $EntropyRecipe>;
        get serializer(): $RecipeSerializer<never>;
        get drops(): $List<$ItemStack>;
        get ingredients(): $NonNullList<$Ingredient>;
        get output(): $EntropyRecipe$Output;
        get mode(): $EntropyMode;
        get type(): $RecipeType<never>;
        get input(): $EntropyRecipe$Input;
        get special(): boolean;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
        get group(): string;
    }
    export class $EntropyRecipe$BlockOutput extends $Record {
        keepProperties(): boolean;
        apply(arg0: $BlockState_): $BlockState;
        properties(): $Map<string, string>;
        block(): $Block;
        static CODEC: $Codec<$EntropyRecipe$BlockOutput>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $EntropyRecipe$BlockOutput>;
        constructor(block: $Block_, keepProperties: boolean, properties: $Map_<string, string>);
    }
    /**
     * Values that may be interpreted as {@link $EntropyRecipe$BlockOutput}.
     */
    export type $EntropyRecipe$BlockOutput_ = { block?: $Block_, properties?: $Map_<string, string>, keepProperties?: boolean,  } | [block?: $Block_, properties?: $Map_<string, string>, keepProperties?: boolean, ];
    export class $EntropyMode extends $Enum<$EntropyMode> implements $StringRepresentable {
        static values(): $EntropyMode[];
        static valueOf(arg0: string): $EntropyMode;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static HEAT: $EntropyMode;
        static CODEC: $Codec<$EntropyMode>;
        static COOL: $EntropyMode;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $EntropyMode}.
     */
    export type $EntropyMode_ = "heat" | "cool";
    export class $EntropyRecipe$FluidOutput extends $Record {
        keepProperties(): boolean;
        fluid(): $Fluid;
        static fromNetwork(arg0: $FriendlyByteBuf): $EntropyRecipe$FluidOutput;
        static toNetwork(arg0: $FriendlyByteBuf, arg1: $EntropyRecipe$FluidOutput_): void;
        apply(arg0: $FluidState): $FluidState;
        properties(): $Map<string, string>;
        static CODEC: $Codec<$EntropyRecipe$FluidOutput>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $EntropyRecipe$FluidOutput>;
        constructor(fluid: $Fluid_, keepProperties: boolean, properties: $Map_<string, string>);
    }
    /**
     * Values that may be interpreted as {@link $EntropyRecipe$FluidOutput}.
     */
    export type $EntropyRecipe$FluidOutput_ = { properties?: $Map_<string, string>, fluid?: $Fluid_, keepProperties?: boolean,  } | [properties?: $Map_<string, string>, fluid?: $Fluid_, keepProperties?: boolean, ];
    export class $EntropyRecipeSerializer implements $RecipeSerializer<$EntropyRecipe> {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $EntropyRecipe>;
        codec(): $MapCodec<$EntropyRecipe>;
        static INSTANCE: $EntropyRecipeSerializer;
    }
    export class $PropertyValueMatcher {
        static CODEC: $Codec<$PropertyValueMatcher>;
        static MAP_CODEC: $Codec<$Map<string, $PropertyValueMatcher>>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $PropertyValueMatcher>;
    }
    export interface $PropertyValueMatcher {
        toNetwork(arg0: $FriendlyByteBuf): void;
        matches<T extends $Comparable<T>>(arg0: $Property<T>, arg1: $StateHolder<never, never>): boolean;
        validate(arg0: $Property<$Comparable_<never>>): void;
    }
    export class $PropertyValueMatcher$MultiValue extends $Record implements $PropertyValueMatcher {
        toNetwork(arg0: $FriendlyByteBuf): void;
        values(): $List<string>;
        matches<T extends $Comparable<T>>(arg0: $Property<T>, arg1: $StateHolder<never, never>): boolean;
        validate(arg0: $Property<$Comparable_<never>>): void;
        constructor(values: $List_<string>);
    }
    /**
     * Values that may be interpreted as {@link $PropertyValueMatcher$MultiValue}.
     */
    export type $PropertyValueMatcher$MultiValue_ = { values?: $List_<string>,  } | [values?: $List_<string>, ];
    export class $PropertyValueMatcher$Range extends $Record implements $PropertyValueMatcher {
        toNetwork(arg0: $FriendlyByteBuf): void;
        min(): string;
        max(): string;
        matches<T extends $Comparable<T>>(arg0: $Property<T>, arg1: $StateHolder<never, never>): boolean;
        validate(arg0: $Property<$Comparable_<never>>): void;
        constructor(min: string, max: string);
    }
    /**
     * Values that may be interpreted as {@link $PropertyValueMatcher$Range}.
     */
    export type $PropertyValueMatcher$Range_ = { max?: string, min?: string,  } | [max?: string, min?: string, ];
    export class $EntropyRecipe$BlockInput extends $Record {
        properties(): $Map<string, $PropertyValueMatcher>;
        block(): $Block;
        static CODEC: $Codec<$EntropyRecipe$BlockInput>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $EntropyRecipe$BlockInput>;
        constructor(block: $Block_, properties: $Map_<string, $PropertyValueMatcher>);
    }
    /**
     * Values that may be interpreted as {@link $EntropyRecipe$BlockInput}.
     */
    export type $EntropyRecipe$BlockInput_ = { properties?: $Map_<string, $PropertyValueMatcher>, block?: $Block_,  } | [properties?: $Map_<string, $PropertyValueMatcher>, block?: $Block_, ];
    export class $EntropyRecipeBuilder {
        static cool(): $EntropyRecipeBuilder;
        static heat(): $EntropyRecipeBuilder;
        setDrops(arg0: $List_<$ItemStack_>): $EntropyRecipeBuilder;
        setDrops(...arg0: $ItemStack_[]): $EntropyRecipeBuilder;
        setInputBlock(arg0: $Block_): $EntropyRecipeBuilder;
        setInputFluid(arg0: $Fluid_): $EntropyRecipeBuilder;
        setOutputBlock(arg0: $Block_): $EntropyRecipeBuilder;
        setOutputBlockKeep(arg0: boolean): $EntropyRecipeBuilder;
        setOutputFluid(arg0: $Fluid_): $EntropyRecipeBuilder;
        setOutputFluidKeep(arg0: boolean): $EntropyRecipeBuilder;
        addBlockStateMatcher(arg0: string, arg1: $PropertyValueMatcher): $EntropyRecipeBuilder;
        setBlockStateMatchers(arg0: $Map_<string, $PropertyValueMatcher>): $EntropyRecipeBuilder;
        addFluidStateMatcher(arg0: string, arg1: $PropertyValueMatcher): $EntropyRecipeBuilder;
        setFluidStateMatchers(arg0: $Map_<string, $PropertyValueMatcher>): $EntropyRecipeBuilder;
        addBlockStateAppliers(arg0: string, arg1: string): $EntropyRecipeBuilder;
        setBlockStateAppliers(arg0: $Map_<string, string>): $EntropyRecipeBuilder;
        addFluidStateAppliers(arg0: string, arg1: string): $EntropyRecipeBuilder;
        setFluidStateAppliers(arg0: $Map_<string, string>): $EntropyRecipeBuilder;
        setMode(arg0: $EntropyMode_): $EntropyRecipeBuilder;
        save(arg0: $RecipeOutput, arg1: $ResourceLocation_): void;
        build(): $EntropyRecipe;
        constructor();
        set inputBlock(value: $Block_);
        set inputFluid(value: $Fluid_);
        set outputBlock(value: $Block_);
        set outputBlockKeep(value: boolean);
        set outputFluid(value: $Fluid_);
        set outputFluidKeep(value: boolean);
        set blockStateMatchers(value: $Map_<string, $PropertyValueMatcher>);
        set fluidStateMatchers(value: $Map_<string, $PropertyValueMatcher>);
        set blockStateAppliers(value: $Map_<string, string>);
        set fluidStateAppliers(value: $Map_<string, string>);
        set mode(value: $EntropyMode_);
    }
}
