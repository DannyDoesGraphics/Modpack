import { $JsonElement } from "@package/com/google/gson";
import { $ItemLike_, $ItemLike } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Recipe, $Ingredient, $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $RecipeOutput } from "@package/net/minecraft/data/recipes";
import { $List, $List_, $Set } from "@package/java/util";
import { $ItemStackSet } from "@package/dev/latvian/mods/kubejs/item";
import { $AdvancementHolder_, $Advancement$Builder } from "@package/net/minecraft/advancements";
import { $RecipeScriptContext } from "@package/dev/latvian/mods/kubejs/recipe";
import { $Predicate, $Supplier_, $Predicate_ } from "@package/java/util/function";
import { $Holder_, $HolderSet, $HolderSet_ } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ICondition } from "@package/net/neoforged/neoforge/common/conditions";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $CraftingContainer, $ResultContainer } from "@package/net/minecraft/world/inventory";
import { $RecipeMatchContext } from "@package/dev/latvian/mods/kubejs/recipe/filter";
import { $DataComponentType, $DataComponentPredicate, $DataComponentType_, $DataComponentMap_ } from "@package/net/minecraft/core/component";
import { $SizedIngredientKJS, $CustomIngredientKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Iterable_, $Record, $Object } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/neoforged/neoforge/common/crafting" {
    export class $DifferenceIngredient extends $Record implements $ICustomIngredient, $CustomIngredientKJS {
        getItems(): $Stream<$ItemStack>;
        kjs$canBeUsedForMatching(): boolean;
        subtracted(): $Ingredient;
        base(): $Ingredient;
        test(arg0: $ItemStack_): boolean;
        static of(arg0: $Ingredient_, arg1: $Ingredient_): $Ingredient;
        getType(): $IngredientType<never>;
        isSimple(): boolean;
        toVanilla(): $Ingredient;
        kjs$asIngredient(): $Ingredient;
        kjs$getStackArray(): $ItemStack[];
        kjs$getDisplayStacks(): $ItemStackSet;
        getStacks(): $ItemStackSet;
        testItem(item: $Item_): boolean;
        getItemStream(): $Stream<$Item>;
        getItemTypes(): $Set<$Item>;
        getItemIds(): $Set<string>;
        getFirst(): $ItemStack;
        isWildcard(): boolean;
        or(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        negate(): $Predicate<$ItemStack>;
        and(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        static CODEC: $MapCodec<$DifferenceIngredient>;
        constructor(base: $Ingredient_, subtracted: $Ingredient_);
        get items(): $Stream<$ItemStack>;
        get type(): $IngredientType<never>;
        get simple(): boolean;
        get stacks(): $ItemStackSet;
        get itemStream(): $Stream<$Item>;
        get itemTypes(): $Set<$Item>;
        get itemIds(): $Set<string>;
        get first(): $ItemStack;
        get wildcard(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $DifferenceIngredient}.
     */
    export type $DifferenceIngredient_ = { subtracted?: $Ingredient_, base?: $Ingredient_,  } | [subtracted?: $Ingredient_, base?: $Ingredient_, ];
    export class $CraftingHelper {
        static makeIngredientCodec(allowEmpty: boolean): $Codec<$Ingredient>;
        static makeIngredientMapCodec(): $MapCodec<$Ingredient>;
        constructor();
    }
    /**
     * Wrapper around a `RecipeOutput` that adds conditions to all received recipes.
     * Do not use directly, obtain via `)`.
     */
    export class $ConditionalRecipeOutput implements $RecipeOutput {
        advancement(): $Advancement$Builder;
        accept(arg0: $ResourceLocation_, arg1: $Recipe<never>, arg2: $AdvancementHolder_, ...arg3: $ICondition[]): void;
        accept(location: $ResourceLocation_, recipe: $Recipe<never>, advancement: $AdvancementHolder_ | null): void;
        withConditions(...arg0: $ICondition[]): $RecipeOutput;
        constructor(inner: $RecipeOutput, conditions: $ICondition[]);
    }
    /**
     * `Ingredient` that matches `ItemStack`s of `Block`s from a `TagKey`, useful in cases
     * like `"minecraft:convertable_to_mud"` where there isn't an accompanying item tag
     * 
     * Notice: This should not be used as a replacement for the normal `Ingredient#of(TagKey)`,
     * This should only be used when there is no way an item tag can be used in your use case
     */
    export class $BlockTagIngredient implements $ICustomIngredient {
        getItems(): $Stream<$ItemStack>;
        test(stack: $ItemStack_): boolean;
        getType(): $IngredientType<never>;
        getTag(): $TagKey<$Block>;
        isSimple(): boolean;
        /**
         * @return a new `Ingredient` behaving as defined by this custom ingredient
         */
        toVanilla(): $Ingredient;
        /**
         * @return a new `Ingredient` behaving as defined by this custom ingredient
         */
        kjs$asIngredient(): $Ingredient;
        kjs$canBeUsedForMatching(): boolean;
        kjs$getStackArray(): $ItemStack[];
        kjs$getDisplayStacks(): $ItemStackSet;
        getStacks(): $ItemStackSet;
        testItem(item: $Item_): boolean;
        getItemStream(): $Stream<$Item>;
        getItemTypes(): $Set<$Item>;
        getItemIds(): $Set<string>;
        getFirst(): $ItemStack;
        isWildcard(): boolean;
        or(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        negate(): $Predicate<$ItemStack>;
        and(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        static CODEC: $MapCodec<$BlockTagIngredient>;
        constructor(tag: $TagKey_<$Block>);
        get items(): $Stream<$ItemStack>;
        get type(): $IngredientType<never>;
        get tag(): $TagKey<$Block>;
        get simple(): boolean;
        get stacks(): $ItemStackSet;
        get itemStream(): $Stream<$Item>;
        get itemTypes(): $Set<$Item>;
        get itemIds(): $Set<string>;
        get first(): $ItemStack;
        get wildcard(): boolean;
    }
    export class $IntersectionIngredient extends $Record implements $ICustomIngredient, $CustomIngredientKJS {
        getItems(): $Stream<$ItemStack>;
        kjs$canBeUsedForMatching(): boolean;
        test(arg0: $ItemStack_): boolean;
        static of(...arg0: $Ingredient_[]): $Ingredient;
        getType(): $IngredientType<never>;
        children(): $List<$Ingredient>;
        isSimple(): boolean;
        toVanilla(): $Ingredient;
        kjs$asIngredient(): $Ingredient;
        kjs$getStackArray(): $ItemStack[];
        kjs$getDisplayStacks(): $ItemStackSet;
        getStacks(): $ItemStackSet;
        testItem(item: $Item_): boolean;
        getItemStream(): $Stream<$Item>;
        getItemTypes(): $Set<$Item>;
        getItemIds(): $Set<string>;
        getFirst(): $ItemStack;
        isWildcard(): boolean;
        or(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        negate(): $Predicate<$ItemStack>;
        and(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        static CODEC: $MapCodec<$IntersectionIngredient>;
        constructor(children: $List_<$Ingredient_>);
        get items(): $Stream<$ItemStack>;
        get type(): $IngredientType<never>;
        get simple(): boolean;
        get stacks(): $ItemStackSet;
        get itemStream(): $Stream<$Item>;
        get itemTypes(): $Set<$Item>;
        get itemIds(): $Set<string>;
        get first(): $ItemStack;
        get wildcard(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IntersectionIngredient}.
     */
    export type $IntersectionIngredient_ = { children?: $List_<$Ingredient_>,  } | [children?: $List_<$Ingredient_>, ];
    /**
     * Ingredient that matches the given items, performing either a strict or a partial NBT test.
     * 
     * Strict NBT ingredients will only match items that have **exactly** the provided tag, while partial ones will
     * match if the item's tags contain all of the elements of the provided one, while allowing for additional elements to exist.
     */
    export class $DataComponentIngredient implements $ICustomIngredient {
        getItems(): $Stream<$ItemStack>;
        items(): $HolderSet<$Item>;
        test(stack: $ItemStack_): boolean;
        static of<T>(arg0: boolean, arg1: $Supplier_<$DataComponentType<T>>, arg2: T, ...arg3: $ItemLike_[]): $Ingredient;
        static of(arg0: boolean, arg1: $DataComponentMap_, ...arg2: $ItemLike_[]): $Ingredient;
        /**
         * Creates a new ingredient matching any item from the list, containing the given components
         */
        static of(strict: boolean, predicate: $DataComponentPredicate, items: $HolderSet_<$Item>): $Ingredient;
        /**
         * Creates a new ingredient matching any item from the list, containing the given components
         */
        static of(strict: boolean, map: $DataComponentMap_, items: $HolderSet_<$Item>): $Ingredient;
        static of(arg0: boolean, arg1: $DataComponentPredicate, ...arg2: $Holder_<$Item>[]): $Ingredient;
        static of(arg0: boolean, arg1: $DataComponentPredicate, ...arg2: $ItemLike_[]): $Ingredient;
        static of(arg0: boolean, arg1: $DataComponentMap_, ...arg2: $Holder_<$Item>[]): $Ingredient;
        /**
         * Creates a new ingredient matching the given item, containing the given components
         */
        static of(strict: boolean, stack: $ItemStack_): $Ingredient;
        static of<T>(arg0: boolean, arg1: $DataComponentType_<T>, arg2: T, ...arg3: $ItemLike_[]): $Ingredient;
        getType(): $IngredientType<never>;
        isStrict(): boolean;
        isSimple(): boolean;
        components(): $DataComponentPredicate;
        /**
         * @return a new `Ingredient` behaving as defined by this custom ingredient
         */
        toVanilla(): $Ingredient;
        /**
         * @return a new `Ingredient` behaving as defined by this custom ingredient
         */
        kjs$asIngredient(): $Ingredient;
        kjs$canBeUsedForMatching(): boolean;
        kjs$getStackArray(): $ItemStack[];
        kjs$getDisplayStacks(): $ItemStackSet;
        getStacks(): $ItemStackSet;
        testItem(item: $Item_): boolean;
        getItemStream(): $Stream<$Item>;
        getItemTypes(): $Set<$Item>;
        getItemIds(): $Set<string>;
        getFirst(): $ItemStack;
        isWildcard(): boolean;
        or(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        negate(): $Predicate<$ItemStack>;
        and(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        static CODEC: $MapCodec<$DataComponentIngredient>;
        constructor(items: $HolderSet_<$Item>, components: $DataComponentPredicate, strict: boolean);
        get type(): $IngredientType<never>;
        get strict(): boolean;
        get simple(): boolean;
        get stacks(): $ItemStackSet;
        get itemStream(): $Stream<$Item>;
        get itemTypes(): $Set<$Item>;
        get itemIds(): $Set<string>;
        get first(): $ItemStack;
        get wildcard(): boolean;
    }
    export class $CompoundIngredient extends $Record implements $ICustomIngredient, $CustomIngredientKJS {
        getItems(): $Stream<$ItemStack>;
        kjs$canBeUsedForMatching(): boolean;
        test(arg0: $ItemStack_): boolean;
        static of(...arg0: $Ingredient_[]): $Ingredient;
        getType(): $IngredientType<never>;
        children(): $List<$Ingredient>;
        isSimple(): boolean;
        toVanilla(): $Ingredient;
        kjs$asIngredient(): $Ingredient;
        kjs$getStackArray(): $ItemStack[];
        kjs$getDisplayStacks(): $ItemStackSet;
        getStacks(): $ItemStackSet;
        testItem(item: $Item_): boolean;
        getItemStream(): $Stream<$Item>;
        getItemTypes(): $Set<$Item>;
        getItemIds(): $Set<string>;
        getFirst(): $ItemStack;
        isWildcard(): boolean;
        or(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        negate(): $Predicate<$ItemStack>;
        and(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        static CODEC: $MapCodec<$CompoundIngredient>;
        constructor(children: $List_<$Ingredient_>);
        get items(): $Stream<$ItemStack>;
        get type(): $IngredientType<never>;
        get simple(): boolean;
        get stacks(): $ItemStackSet;
        get itemStream(): $Stream<$Item>;
        get itemTypes(): $Set<$Item>;
        get itemIds(): $Set<string>;
        get first(): $ItemStack;
        get wildcard(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $CompoundIngredient}.
     */
    export type $CompoundIngredient_ = { children?: $List_<$Ingredient_>,  } | [children?: $List_<$Ingredient_>, ];
    /**
     * Interface that modders can implement to create new behaviors for `Ingredient`s.
     * 
     * This is not directly implemented on vanilla `Ingredient`s, but conversions are possible:
     * 
     * - `#toVanilla()` converts a custom ingredient to a vanilla `Ingredient`.
     * - `Ingredient#getCustomIngredient()` retrieves the custom ingredient inside a vanilla `Ingredient`.
     * 
     * Implementations of this interface **must implement `Object#equals` and `Object#hashCode`**
     * to ensure that the ingredient also supports them.
     */
    export class $ICustomIngredient {
    }
    export interface $ICustomIngredient extends $CustomIngredientKJS {
        /**
         * @return the list of stacks that this ingredient accepts
         * 
         * The following guidelines should be followed for good compatibility:
         * 
         * - These stacks are generally used for display purposes, and need not be exhaustive or perfectly accurate.
         * - An exception is ingredients that are simple,
         * for which it is important that the returned stacks correspond exactly to all the accepted `Item`s.
         * - At least one stack must be returned for the ingredient not to be considered accidentally empty.
         * - The ingredient should try to return at least one stack with each accepted `Item`.
         * This allows mods that inspect the ingredient to figure out which stacks it might accept.
         * 
         * Note: no caching needs to be done by the implementation, this is already handled by the ingredient itself.
         */
        getItems(): $Stream<$ItemStack>;
        /**
         * @return a new `Ingredient` behaving as defined by this custom ingredient
         */
        toVanilla(): $Ingredient;
        /**
         * Checks if a stack matches this ingredient.
         * The stack **must not** be modified in any way.
         */
        test(stack: $ItemStack_): boolean;
        /**
         * @return the type of this ingredient
         * 
         * The type must be registered to `NeoForgeRegistries#INGREDIENT_TYPES`.
         */
        getType(): $IngredientType<never>;
        /**
         * Returns whether this ingredient always requires direct stack testing.
         */
        isSimple(): boolean;
        get items(): $Stream<$ItemStack>;
        get type(): $IngredientType<never>;
        get simple(): boolean;
    }
    /**
     * Standard implementation for an ingredient and a count.
     * 
     * `Ingredient` does not perform count checks, so this class is used to wrap an ingredient with a count,
     * and provide a standard serialization format.
     */
    export class $SizedIngredient implements $SizedIngredientKJS {
        /**
         * Returns a list of the stacks from this `#ingredient`, with an updated `#count`.
         */
        getItems(): $ItemStack[];
        ingredient(): $Ingredient;
        /**
         * Performs a size-sensitive test on the given stack.
         */
        test(stack: $ItemStack_): boolean;
        /**
         * Helper method to create a simple sized ingredient that matches a single item.
         */
        static of(item: $ItemLike_, count: number): $SizedIngredient;
        /**
         * Helper method to create a simple sized ingredient that matches items in a tag.
         */
        static of(tag: $TagKey_<$Item>, count: number): $SizedIngredient;
        count(): number;
        kjs$asIngredient(): $Ingredient;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        kjs$toFlatJson(): $JsonElement;
        kjs$toNestedJson(): $JsonElement;
        matches(cx: $RecipeMatchContext, arg1: $Ingredient_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, item: $ItemStack_, exact: boolean): boolean;
        kjs$self(): $SizedIngredient;
        matchesAny(cx: $RecipeMatchContext, itemLikes: $Iterable_<$ItemLike>, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, itemLike: $ItemLike_, exact: boolean): boolean;
        static NESTED_CODEC: $Codec<$SizedIngredient>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SizedIngredient>;
        static FLAT_CODEC: $Codec<$SizedIngredient>;
        constructor(ingredient: $Ingredient_, count: number);
        get items(): $ItemStack[];
    }
    /**
     * Values that may be interpreted as {@link $SizedIngredient}.
     */
    export type $SizedIngredient_ = $ItemStack_ | $Ingredient_;
    export class $IngredientType<T extends $ICustomIngredient> extends $Record {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        codec(): $MapCodec<T>;
        constructor(arg0: $MapCodec_<T>);
        constructor(codec: $MapCodec_<T>, streamCodec: $StreamCodec<$RegistryFriendlyByteBuf, T>);
    }
    /**
     * Values that may be interpreted as {@link $IngredientType}.
     */
    export type $IngredientType_<T> = RegistryTypes.NeoforgeIngredientSerializer | { streamCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $ICustomIngredient>, codec?: $MapCodec_<$ICustomIngredient>,  } | [streamCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $ICustomIngredient>, codec?: $MapCodec_<$ICustomIngredient>, ];
    export interface $IngredientType<T> extends RegistryMarked<RegistryTypes.NeoforgeIngredientSerializerTag, RegistryTypes.NeoforgeIngredientSerializer> {}
    /**
     * This interface is to be implemented on Container objects.
     * For GUIs with recipe books, this allows their containers to have
     * recipe completion and ghost recipes in their craft matrices.
     */
    export class $IRecipeContainer {
    }
    export interface $IRecipeContainer {
        /**
         * The crafting result slot of your container, where you take out the crafted item.
         * The equivalent for `CraftingMenu` is `CraftingMenu#resultSlots`.
         * The equivalent for `InventoryMenu` is `InventoryMenu#resultSlots`.
         */
        getCraftResult(): $ResultContainer;
        /**
         * The crafting matrix of your container, where ingredients go for crafting.
         * The equivalent for `CraftingMenu` is `CraftingMenu#craftSlots`.
         * The equivalent for `InventoryMenu` is `InventoryMenu#craftSlots`.
         */
        getCraftMatrix(): $CraftingContainer;
        get craftResult(): $ResultContainer;
        get craftMatrix(): $CraftingContainer;
    }
}
