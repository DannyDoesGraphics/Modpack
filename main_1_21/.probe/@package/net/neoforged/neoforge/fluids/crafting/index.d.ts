import { $JsonElement } from "@package/com/google/gson";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Tag } from "@package/net/minecraft/nbt";
import { $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $List, $List_ } from "@package/java/util";
import { $RecipeScriptContext } from "@package/dev/latvian/mods/kubejs/recipe";
import { $Predicate, $Predicate_, $Supplier_ } from "@package/java/util/function";
import { $Holder_, $HolderSet, $HolderSet_, $Holder } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { SpecialTypes, RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $RecipeMatchContext } from "@package/dev/latvian/mods/kubejs/recipe/filter";
import { $DataComponentType, $DataComponentPredicate, $DataComponentMap_, $DataComponentType_ } from "@package/net/minecraft/core/component";
import { $Record, $Object } from "@package/java/lang";
import { $FluidIngredientKJS, $SizedFluidIngredientKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/neoforged/neoforge/fluids/crafting" {
    /**
     * Fluid ingredient that matches all fluids within the given tag.
     * 
     * Unlike with ingredients, this is an explicit "type" of fluid ingredient,
     * though it may still be written without a type field, see `FluidIngredient#MAP_CODEC_NONEMPTY`
     */
    export class $TagFluidIngredient extends $FluidIngredient {
        tag(): $TagKey<$Fluid>;
        static CODEC_NON_EMPTY: $Codec<$FluidIngredient>;
        static CODEC: $MapCodec<$TagFluidIngredient>;
        static LIST_CODEC: $Codec<$List<$FluidIngredient>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidIngredient>;
        static MAP_CODEC_NONEMPTY: $MapCodec<$FluidIngredient>;
        static LIST_CODEC_NON_EMPTY: $Codec<$List<$FluidIngredient>>;
        constructor(tag: $TagKey_<$Fluid>);
    }
    export interface $FluidIngredientType<T> extends RegistryMarked<RegistryTypes.NeoforgeFluidIngredientTypeTag, RegistryTypes.NeoforgeFluidIngredientType> {}
    export class $FluidIngredientType<T extends $FluidIngredient> extends $Record {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        codec(): $MapCodec<T>;
        constructor(arg0: $MapCodec_<T>);
        constructor(codec: $MapCodec_<T>, streamCodec: $StreamCodec<$RegistryFriendlyByteBuf, T>);
    }
    /**
     * Values that may be interpreted as {@link $FluidIngredientType}.
     */
    export type $FluidIngredientType_<T> = RegistryTypes.NeoforgeFluidIngredientType | { streamCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $FluidIngredient_>, codec?: $MapCodec_<$FluidIngredient_>,  } | [streamCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $FluidIngredient_>, codec?: $MapCodec_<$FluidIngredient_>, ];
    /**
     * Fluid ingredient that matches the given set of fluids, additionally performing either a
     * strict or partial test on the FluidStack's components.
     * 
     * Strict ingredients will only match fluid stacks that have **exactly** the provided components, while partial ones will
     * match if the stack's components contain all required components for the input predicate.
     */
    export class $DataComponentFluidIngredient extends $FluidIngredient {
        generateStacks(): $Stream<$FluidStack>;
        static of(arg0: boolean, arg1: $DataComponentMap_, ...arg2: $Holder_<$Fluid>[]): $FluidIngredient;
        static of(arg0: boolean, arg1: $DataComponentPredicate, ...arg2: $Holder_<$Fluid>[]): $FluidIngredient;
        static of<T>(arg0: boolean, arg1: $Supplier_<$DataComponentType<T>>, arg2: T, ...arg3: $Fluid_[]): $FluidIngredient;
        /**
         * Creates a new ingredient matching any fluid from the list, containing the given components
         */
        static of(strict: boolean, map: $DataComponentMap_, fluids: $HolderSet_<$Fluid>): $FluidIngredient;
        static of(arg0: boolean, arg1: $DataComponentPredicate, ...arg2: $Fluid_[]): $FluidIngredient;
        /**
         * Creates a new ingredient matching any fluid from the list, containing the given components
         */
        static of(strict: boolean, predicate: $DataComponentPredicate, fluids: $HolderSet_<$Fluid>): $FluidIngredient;
        static of(arg0: boolean, arg1: $DataComponentMap_, ...arg2: $Fluid_[]): $FluidIngredient;
        /**
         * Creates a new ingredient matching the given fluid, containing the given components
         */
        static of(strict: boolean, stack: $FluidStack_): $FluidIngredient;
        static of<T>(arg0: boolean, arg1: $DataComponentType_<T>, arg2: T, ...arg3: $Fluid_[]): $FluidIngredient;
        isStrict(): boolean;
        components(): $DataComponentPredicate;
        fluids(): $HolderSet<$Fluid>;
        static CODEC_NON_EMPTY: $Codec<$FluidIngredient>;
        static CODEC: $MapCodec<$DataComponentFluidIngredient>;
        static LIST_CODEC: $Codec<$List<$FluidIngredient>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidIngredient>;
        static MAP_CODEC_NONEMPTY: $MapCodec<$FluidIngredient>;
        static LIST_CODEC_NON_EMPTY: $Codec<$List<$FluidIngredient>>;
        constructor(fluids: $HolderSet_<$Fluid>, components: $DataComponentPredicate, strict: boolean);
        get strict(): boolean;
    }
    /**
     * Singleton that represents an empty fluid ingredient.
     * 
     * This is the only instance of an **explicitly** empty ingredient,
     * and may be used as a fallback in FluidIngredient convenience methods
     * (such as when trying to create an ingredient from an empty list).
     */
    export class $EmptyFluidIngredient extends $FluidIngredient {
        static CODEC_NON_EMPTY: $Codec<$FluidIngredient>;
        static CODEC: $MapCodec<$EmptyFluidIngredient>;
        static INSTANCE: $EmptyFluidIngredient;
        static LIST_CODEC: $Codec<$List<$FluidIngredient>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidIngredient>;
        static MAP_CODEC_NONEMPTY: $MapCodec<$FluidIngredient>;
        static LIST_CODEC_NON_EMPTY: $Codec<$List<$FluidIngredient>>;
    }
    /**
     * Standard implementation for a FluidIngredient with an amount.
     * 
     * `FluidIngredient`, like its item counterpart, explicitly does not perform count checks,
     * so this class is used to (a) wrap a standard FluidIngredient with an amount and (b) provide a
     * standard serialization format for mods to use.
     */
    export class $SizedFluidIngredient implements $SizedFluidIngredientKJS {
        ingredient(): $FluidIngredient;
        /**
         * Returns a list of the stacks from this `#ingredient`, with an updated `#amount`.
         */
        getFluids(): $FluidStack[];
        /**
         * Performs a size-sensitive test on the given stack.
         */
        test(stack: $FluidStack_): boolean;
        static of(fluid: $Fluid_, amount: number): $SizedFluidIngredient;
        /**
         * Helper method to create a simple sized ingredient that matches the given fluid stack
         */
        static of(stack: $FluidStack_): $SizedFluidIngredient;
        /**
         * Helper method to create a simple sized ingredient that matches fluids in a tag.
         */
        static of(tag: $TagKey_<$Fluid>, amount: number): $SizedFluidIngredient;
        amount(): number;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        toFlatJson(): $JsonElement;
        toNestedJson(): $JsonElement;
        matches(cx: $RecipeMatchContext, s: $FluidStack_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, arg1: $FluidIngredient_, exact: boolean): boolean;
        self(): $SizedFluidIngredient;
        static NESTED_CODEC: $Codec<$SizedFluidIngredient>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SizedFluidIngredient>;
        static FLAT_CODEC: $Codec<$SizedFluidIngredient>;
        constructor(ingredient: $FluidIngredient_, amount: number);
        get fluids(): $FluidStack[];
    }
    /**
     * This class serves as the fluid analogue of an item `Ingredient`,
     * that is, a representation of both a predicate to test
     * `FluidStack`s against, and a list of matching stacks
     * for e.g. display purposes.
     * 
     * The most common use for fluid ingredients is found in modded recipe inputs,
     * for example crafting mechanics accepting a list of different fluids;
     * since those mechanics even rely on a certain *amount* of a fluid being present,
     * and fluid ingredients inherently do not hold any information with respect to fluid amount;
     * you may also want to take a look at `SizedFluidIngredient`!
     */
    export class $FluidIngredient implements $Predicate<$FluidStack>, $FluidIngredientKJS {
        /**
         * Returns whether this fluid ingredient always requires direct stack testing.
         */
        hasNoFluids(): boolean;
        /**
         * Returns an array of fluid stacks that this ingredient accepts.
         * The fluid stacks within the returned array **must not** be modified by the caller!
         * @return an array of fluid stacks this ingredient accepts
         */
        getStacks(): $FluidStack[];
        /**
         * Checks if a given fluid stack matches this ingredient.
         * The stack **must not** be modified in any way.
         */
        test(fluidStack: $FluidStack_): boolean;
        /**
         * Returns whether this fluid ingredient always requires direct stack testing.
         */
        isEmpty(): boolean;
        static of(...arg0: $FluidStack_[]): $FluidIngredient;
        static of(): $FluidIngredient;
        static of(...arg0: $Fluid_[]): $FluidIngredient;
        static single(fluids: $Fluid_): $FluidIngredient;
        static single(holder: $Holder_<$Fluid>): $FluidIngredient;
        static single(fluids: $FluidStack_): $FluidIngredient;
        static empty(): $FluidIngredient;
        /**
         * @return The type of this fluid ingredient.
         * 
         * The type **must** be registered to `NeoForgeRegistries#FLUID_INGREDIENT_TYPES`.
         */
        getType(): $FluidIngredientType<never>;
        static tag(tag: $TagKey_<$Fluid>): $FluidIngredient;
        /**
         * Returns whether this fluid ingredient always requires direct stack testing.
         */
        isSimple(): boolean;
        self(): $FluidIngredient;
        or(arg0: $Predicate_<$FluidStack>): $Predicate<$FluidStack>;
        negate(): $Predicate<$FluidStack>;
        and(arg0: $Predicate_<$FluidStack>): $Predicate<$FluidStack>;
        withAmount(amount: number): $SizedFluidIngredient;
        matches(cx: $RecipeMatchContext, s: $FluidStack_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, arg1: $FluidIngredient_, exact: boolean): boolean;
        getCodec(): $Codec<never>;
        toJson(): $JsonElement;
        toNBT(): $Tag;
        static CODEC_NON_EMPTY: $Codec<$FluidIngredient>;
        static CODEC: $Codec<$FluidIngredient>;
        static LIST_CODEC: $Codec<$List<$FluidIngredient>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidIngredient>;
        static MAP_CODEC_NONEMPTY: $MapCodec<$FluidIngredient>;
        static LIST_CODEC_NON_EMPTY: $Codec<$List<$FluidIngredient>>;
        constructor();
        get stacks(): $FluidStack[];
        get type(): $FluidIngredientType<never>;
        get simple(): boolean;
        get codec(): $Codec<never>;
    }
    /**
     * Values that may be interpreted as {@link $FluidIngredient}.
     */
    export type $FluidIngredient_ = $Fluid_ | RegExp | `#${RegistryTypes.FluidTag}` | `@${SpecialTypes.ModId}`;
    /**
     * FluidIngredient that matches if all child ingredients match
     */
    export class $IntersectionFluidIngredient extends $FluidIngredient {
        generateStacks(): $Stream<$FluidStack>;
        static of(...arg0: $FluidIngredient_[]): $FluidIngredient;
        children(): $List<$FluidIngredient>;
        static CODEC_NON_EMPTY: $Codec<$FluidIngredient>;
        static CODEC: $MapCodec<$IntersectionFluidIngredient>;
        static LIST_CODEC: $Codec<$List<$FluidIngredient>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidIngredient>;
        static MAP_CODEC_NONEMPTY: $MapCodec<$FluidIngredient>;
        static LIST_CODEC_NON_EMPTY: $Codec<$List<$FluidIngredient>>;
        constructor(children: $List_<$FluidIngredient_>);
    }
    /**
     * Fluid ingredient that only matches the fluid of the given stack.
     * 
     * Unlike with ingredients, this is an explicit "type" of fluid ingredient,
     * though it may still be written without a type field, see `FluidIngredient#MAP_CODEC_NONEMPTY`
     */
    export class $SingleFluidIngredient extends $FluidIngredient {
        fluid(): $Holder<$Fluid>;
        static CODEC_NON_EMPTY: $Codec<$FluidIngredient>;
        static CODEC: $MapCodec<$SingleFluidIngredient>;
        static LIST_CODEC: $Codec<$List<$FluidIngredient>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidIngredient>;
        static MAP_CODEC_NONEMPTY: $MapCodec<$FluidIngredient>;
        static LIST_CODEC_NON_EMPTY: $Codec<$List<$FluidIngredient>>;
        constructor(fluid: $Holder_<$Fluid>);
    }
    /**
     * Fluid ingredient that matches if any of the child ingredients match.
     * This type additionally represents the array notation used in
     * FluidIngredient#CODEC internally.
     */
    export class $CompoundFluidIngredient extends $FluidIngredient {
        generateStacks(): $Stream<$FluidStack>;
        static of(stream: $Stream<$FluidIngredient_>): $FluidIngredient;
        static of(...arg0: $FluidIngredient_[]): $FluidIngredient;
        /**
         * Creates a compound ingredient from the given list of ingredients.
         */
        static of(children: $List_<$FluidIngredient_>): $FluidIngredient;
        children(): $List<$FluidIngredient>;
        static CODEC_NON_EMPTY: $Codec<$FluidIngredient>;
        static CODEC: $MapCodec<$CompoundFluidIngredient>;
        static LIST_CODEC: $Codec<$List<$FluidIngredient>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidIngredient>;
        static MAP_CODEC_NONEMPTY: $MapCodec<$FluidIngredient>;
        static LIST_CODEC_NON_EMPTY: $Codec<$List<$FluidIngredient>>;
        constructor(children: $List_<$FluidIngredient_>);
    }
    /**
     * Fluid ingredient that matches the difference of two provided fluid ingredients, i.e.
     * anything contained in `base` that is not in `subtracted`.
     */
    export class $DifferenceFluidIngredient extends $FluidIngredient {
        subtracted(): $FluidIngredient;
        generateStacks(): $Stream<$FluidStack>;
        base(): $FluidIngredient;
        /**
         * Gets the difference of the two fluid ingredients
         */
        static of(base: $FluidIngredient_, subtracted: $FluidIngredient_): $FluidIngredient;
        static CODEC_NON_EMPTY: $Codec<$FluidIngredient>;
        static CODEC: $MapCodec<$DifferenceFluidIngredient>;
        static LIST_CODEC: $Codec<$List<$FluidIngredient>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidIngredient>;
        static MAP_CODEC_NONEMPTY: $MapCodec<$FluidIngredient>;
        static LIST_CODEC_NON_EMPTY: $Codec<$List<$FluidIngredient>>;
        constructor(base: $FluidIngredient_, subtracted: $FluidIngredient_);
    }
}
