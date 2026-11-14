import { $ItemLike_, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Decoder, $Decoder$Simple, $Codec$ResultFunction, $DataResult, $MapEncoder, $DynamicOps, $Codec, $Decoder$Boxed, $Lifecycle, $Dynamic, $MapCodec, $Encoder, $Decoder$Terminal } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $FuzzyMode_ } from "@package/appeng/api/config";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $Spliterator, $Iterator, $List, $List_, $Collection, $Comparator, $Map$Entry, $Set } from "@package/java/util";
import { $ToDoubleFunction_, $Supplier_, $Function_, $Consumer_, $UnaryOperator_, $ToLongFunction_, $ToIntFunction_ } from "@package/java/util/function";
import { $AEKeyFilter } from "@package/appeng/api/storage";
import { $Object2LongAVLTreeMap, $Object2LongMap, $Object2LongMap$Entry, $Object2LongOpenHashMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $HolderLookup$Provider, $BlockPos_, $Registry } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $DataComponentType_ } from "@package/net/minecraft/core/component";
import { $Enum, $Record, $Class, $Comparable, $Object, $Iterable } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/appeng/api/stacks" {
    export class $AEKeyType {
        getTagNames(): $Stream<$TagKey<never>>;
        tryCast(arg0: $AEKey): $AEKey;
        getAmountPerOperation(): number;
        getRawId(): number;
        static fromRawId(arg0: number): $AEKeyType;
        readFromPacket(arg0: $RegistryFriendlyByteBuf): $AEKey;
        getAmountPerUnit(): number;
        getUnitSymbol(): string;
        getAmountPerByte(): number;
        formatAmount(arg0: number, arg1: $AmountFormat_): string;
        supportsFuzzyRangeSearch(): boolean;
        loadKeyFromTag(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $AEKey;
        static items(): $AEKeyType;
        getDescription(): $Component;
        contains(arg0: $AEKey): boolean;
        filter(): $AEKeyFilter;
        getId(): $ResourceLocation;
        codec(): $MapCodec<$AEKey>;
        static fluids(): $AEKeyType;
        getKeyClass(): $Class<$AEKey>;
        static CODEC: $Codec<$AEKeyType>;
        static REGISTRY_KEY: $ResourceKey<$Registry<$AEKeyType>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AEKeyType>;
        constructor(arg0: $ResourceLocation_, arg1: $Class<$AEKey>, arg2: $Component_);
        get tagNames(): $Stream<$TagKey<never>>;
        get amountPerOperation(): number;
        get rawId(): number;
        get amountPerUnit(): number;
        get unitSymbol(): string;
        get amountPerByte(): number;
        get description(): $Component;
        get id(): $ResourceLocation;
        get keyClass(): $Class<$AEKey>;
    }
    /**
     * Values that may be interpreted as {@link $AEKeyType}.
     */
    export type $AEKeyType_ = RegistryTypes.Ae2Keytypes;
    export class $KeyCounter implements $Iterable<$Object2LongMap$Entry<$AEKey>> {
        removeEmptySubmaps(): void;
        findFuzzy(arg0: $AEKey, arg1: $FuzzyMode_): $Collection<$Object2LongMap$Entry<$AEKey>>;
        removeZeros(): void;
        getFirstKey(): $AEKey;
        getFirstKey<T extends $AEKey>(arg0: $Class<T>): T;
        remove(arg0: $AEKey, arg1: number): void;
        remove(arg0: $AEKey): number;
        size(): number;
        reset(): void;
        get(arg0: $AEKey): number;
        clear(): void;
        isEmpty(): boolean;
        add(arg0: $AEKey, arg1: number): void;
        iterator(): $Iterator<$Object2LongMap$Entry<$AEKey>>;
        addAll(arg0: $KeyCounter): void;
        set(arg0: $AEKey, arg1: number): void;
        keySet(): $Set<$AEKey>;
        removeAll(arg0: $KeyCounter): void;
        getFirstEntry<T extends $AEKey>(arg0: $Class<T>): $Object2LongMap$Entry<$AEKey>;
        getFirstEntry(): $Object2LongMap$Entry<$AEKey>;
        spliterator(): $Spliterator<$Object2LongMap$Entry<$AEKey>>;
        forEach(arg0: $Consumer_<$Object2LongMap$Entry<$AEKey>>): void;
        constructor();
        [Symbol.iterator](): Iterator<$Object2LongMap$Entry<$AEKey>>
        get empty(): boolean;
    }
    export class $AEFluidKey extends $AEKey {
        getFluid(): $Fluid;
        dropSecondary(): $AEFluidKey;
        toStack(arg0: number): $FluidStack;
        static fromPacket(arg0: $RegistryFriendlyByteBuf): $AEFluidKey;
        static matches(arg0: $AEKey, arg1: $FluidStack_): boolean;
        matches(arg0: $FluidStack_): boolean;
        static of(arg0: $FluidStack_): $AEFluidKey;
        static of(arg0: $Fluid_): $AEFluidKey;
        static filter(): $AEKeyFilter;
        static is(arg0: $AEKey): boolean;
        static is(arg0: $GenericStack_): boolean;
        static fromTag(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $AEFluidKey;
        static CODEC: $Codec<$AEFluidKey>;
        static AMOUNT_BUCKET: number;
        static MAP_CODEC: $MapCodec<$AEFluidKey>;
        static AMOUNT_BLOCK: number;
        static TYPE_FIELD: string;
        static OPTIONAL_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AEKey>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AEKey>;
        get fluid(): $Fluid;
    }
    export class $GenericStack extends $Record {
        static writeTag(arg0: $HolderLookup$Provider, arg1: $GenericStack_): $CompoundTag;
        static readTag(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $GenericStack;
        static wrapInItemStack(arg0: $AEKey, arg1: number): $ItemStack;
        static wrapInItemStack(arg0: $GenericStack_): $ItemStack;
        static fromItemStack(arg0: $ItemStack_): $GenericStack;
        static fromFluidStack(arg0: $FluidStack_): $GenericStack;
        static getStackSizeOrZero(arg0: $GenericStack_): number;
        static isWrapped(arg0: $ItemStack_): boolean;
        static sum(arg0: $GenericStack_, arg1: $GenericStack_): $GenericStack;
        static writeBuffer(arg0: $GenericStack_, arg1: $RegistryFriendlyByteBuf): void;
        what(): $AEKey;
        static readBuffer(arg0: $RegistryFriendlyByteBuf): $GenericStack;
        amount(): number;
        static unwrapItemStack(arg0: $ItemStack_): $GenericStack;
        static FAULT_TOLERANT_LIST_CODEC: $Codec<$List<$GenericStack>>;
        static CODEC: $Codec<$GenericStack>;
        static AMOUNT_FIELD: string;
        static FAULT_TOLERANT_NULLABLE_LIST_CODEC: $Codec<$List<$GenericStack>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $GenericStack>;
        constructor(what: $AEKey, amount: number);
    }
    /**
     * Values that may be interpreted as {@link $GenericStack}.
     */
    export type $GenericStack_ = { amount?: number, what?: $AEKey,  } | [amount?: number, what?: $AEKey, ];
    export class $FuzzySearch$FuzzyBound extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $FuzzySearch$FuzzyBound}.
     */
    export type $FuzzySearch$FuzzyBound_ = { itemDamage?: number,  } | [itemDamage?: number, ];
    export class $AEItemKey extends $AEKey {
        isDamaged(): boolean;
        dropSecondary(): $AEItemKey;
        getReadOnlyStack(): $ItemStack;
        toStack(arg0: number): $ItemStack;
        toStack(): $ItemStack;
        static fromPacket(arg0: $RegistryFriendlyByteBuf): $AEItemKey;
        static matches(arg0: $AEKey, arg1: $ItemStack_): boolean;
        matches(arg0: $ItemStack_): boolean;
        matches(arg0: $Ingredient_): boolean;
        static of(arg0: $ItemStack_): $AEItemKey;
        static of(arg0: $ItemLike_): $AEItemKey;
        static filter(): $AEKeyFilter;
        static is(arg0: $AEKey): boolean;
        is(arg0: $ItemLike_): boolean;
        getItem(): $Item;
        getMaxStackSize(): number;
        static fromTag(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $AEItemKey;
        static CODEC: $Codec<$AEItemKey>;
        static MAP_CODEC: $MapCodec<$AEItemKey>;
        static TYPE_FIELD: string;
        static OPTIONAL_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AEKey>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AEKey>;
        get damaged(): boolean;
        get readOnlyStack(): $ItemStack;
        get item(): $Item;
        get maxStackSize(): number;
    }
    export class $AEKeyTypes {
        static get(arg0: $ResourceLocation_): $AEKeyType;
        static register(arg0: $AEKeyType_): void;
        static getAll(): $Set<$AEKeyType>;
        static get all(): $Set<$AEKeyType>;
    }
    export class $FuzzySearch {
    }
    export interface $AEKeyType extends RegistryMarked<RegistryTypes.Ae2KeytypesTag, RegistryTypes.Ae2Keytypes> {}
    export class $AEKey2LongMap {
    }
    export interface $AEKey2LongMap extends $Object2LongMap<$AEKey> {
    }
    export class $AEKey {
        fuzzyEquals(arg0: $AEKey, arg1: $FuzzyMode_): boolean;
        toTagGeneric(arg0: $HolderLookup$Provider): $CompoundTag;
        getPrimaryKey(): $Object;
        getFuzzySearchMaxValue(): number;
        getAmountPerOperation(): number;
        writeToPacket(arg0: $RegistryFriendlyByteBuf): void;
        getAmountPerUnit(): number;
        getUnitSymbol(): string;
        getAmountPerByte(): number;
        formatAmount(arg0: number, arg1: $AmountFormat_): string;
        supportsFuzzyRangeSearch(): boolean;
        getFuzzySearchValue(): number;
        static writeOptionalKey(arg0: $RegistryFriendlyByteBuf, arg1: $AEKey): void;
        static readOptionalKey(arg0: $RegistryFriendlyByteBuf): $AEKey;
        static fromTagGeneric(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $AEKey;
        dropSecondary(): $AEKey;
        wrapForDisplayOrFilter(): $ItemStack;
        addDrops(arg0: number, arg1: $List_<$ItemStack_>, arg2: $Level_, arg3: $BlockPos_): void;
        isTagged(arg0: $TagKey_<never>): boolean;
        hasComponents(): boolean;
        toTag(arg0: $HolderLookup$Provider): $CompoundTag;
        get<T>(arg0: $DataComponentType_<T>): T;
        matches(arg0: $GenericStack_): boolean;
        getId(): $ResourceLocation;
        getType(): $AEKeyType;
        getDisplayName(): $Component;
        static writeKey(arg0: $RegistryFriendlyByteBuf, arg1: $AEKey): void;
        getModId(): string;
        static readKey(arg0: $RegistryFriendlyByteBuf): $AEKey;
        static CODEC: $Codec<$AEKey>;
        static MAP_CODEC: $MapCodec<$AEKey>;
        static TYPE_FIELD: string;
        static OPTIONAL_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AEKey>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AEKey>;
        constructor();
        get primaryKey(): $Object;
        get fuzzySearchMaxValue(): number;
        get amountPerOperation(): number;
        get amountPerUnit(): number;
        get unitSymbol(): string;
        get amountPerByte(): number;
        get fuzzySearchValue(): number;
        get id(): $ResourceLocation;
        get type(): $AEKeyType;
        get displayName(): $Component;
        get modId(): string;
    }
    export class $AEFluidKeys extends $AEKeyType {
        static CODEC: $Codec<$AEKeyType>;
        static REGISTRY_KEY: $ResourceKey<$Registry<$AEKeyType>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AEKeyType>;
    }
    export class $GenericStackListCodec implements $Codec<$List<$GenericStack>> {
        dispatch<E>(arg0: string, arg1: $Function_<E, $List<$GenericStack>>, arg2: $Function_<$List<$GenericStack>, $MapCodec<E>>): $Codec<E>;
        dispatch<E>(arg0: $Function_<E, $List<$GenericStack>>, arg1: $Function_<$List<$GenericStack>, $MapCodec<E>>): $Codec<E>;
        validate(arg0: $Function_<$List<$GenericStack>, $DataResult<$List<$GenericStack>>>): $Codec<$List<$GenericStack>>;
        orElse(arg0: $UnaryOperator_<string>, arg1: $List_<$GenericStack_>): $Codec<$List<$GenericStack>>;
        orElse(arg0: $List_<$GenericStack_>): $Codec<$List<$GenericStack>>;
        orElse(arg0: $Consumer_<string>, arg1: $List_<$GenericStack_>): $Codec<$List<$GenericStack>>;
        orElseGet(arg0: $Consumer_<string>, arg1: $Supplier_<$List<$GenericStack>>): $Codec<$List<$GenericStack>>;
        orElseGet(arg0: $Supplier_<$List<$GenericStack>>): $Codec<$List<$GenericStack>>;
        orElseGet(arg0: $UnaryOperator_<string>, arg1: $Supplier_<$List<$GenericStack>>): $Codec<$List<$GenericStack>>;
        deprecated(arg0: number): $Codec<$List<$GenericStack>>;
        stable(): $Codec<$List<$GenericStack>>;
        listOf(arg0: number, arg1: number): $Codec<$List<$List<$GenericStack>>>;
        listOf(): $Codec<$List<$List<$GenericStack>>>;
        flatXmap<S>(arg0: $Function_<$List<$GenericStack>, $DataResult<S>>, arg1: $Function_<S, $DataResult<$List<$GenericStack>>>): $Codec<S>;
        optionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: $List_<$GenericStack_>, arg3: $Lifecycle): $MapCodec<$List<$GenericStack>>;
        optionalFieldOf(arg0: string, arg1: $List_<$GenericStack_>, arg2: $Lifecycle): $MapCodec<$List<$GenericStack>>;
        optionalFieldOf(arg0: string, arg1: $List_<$GenericStack_>): $MapCodec<$List<$GenericStack>>;
        optionalFieldOf(arg0: string): $MapCodec<($List<$GenericStack>) | undefined>;
        lenientOptionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: $List_<$GenericStack_>, arg3: $Lifecycle): $MapCodec<$List<$GenericStack>>;
        lenientOptionalFieldOf(arg0: string): $MapCodec<($List<$GenericStack>) | undefined>;
        lenientOptionalFieldOf(arg0: string, arg1: $List_<$GenericStack_>): $MapCodec<$List<$GenericStack>>;
        lenientOptionalFieldOf(arg0: string, arg1: $List_<$GenericStack_>, arg2: $Lifecycle): $MapCodec<$List<$GenericStack>>;
        mapResult(arg0: $Codec$ResultFunction<$List_<$GenericStack_>>): $Codec<$List<$GenericStack>>;
        promotePartial(arg0: $Consumer_<string>): $Codec<$List<$GenericStack>>;
        partialDispatch<E>(arg0: string, arg1: $Function_<E, $DataResult<$List<$GenericStack>>>, arg2: $Function_<$List<$GenericStack>, $DataResult<$MapCodec<E>>>): $Codec<E>;
        dispatchMap<E>(arg0: string, arg1: $Function_<E, $List<$GenericStack>>, arg2: $Function_<$List<$GenericStack>, $MapCodec<E>>): $MapCodec<E>;
        dispatchMap<E>(arg0: $Function_<E, $List<$GenericStack>>, arg1: $Function_<$List<$GenericStack>, $MapCodec<E>>): $MapCodec<E>;
        xmap<S>(arg0: $Function_<$List<$GenericStack>, S>, arg1: $Function_<S, $List<$GenericStack>>): $Codec<S>;
        sizeLimitedListOf(arg0: number): $Codec<$List<$List<$GenericStack>>>;
        comapFlatMap<S>(arg0: $Function_<$List<$GenericStack>, $DataResult<S>>, arg1: $Function_<S, $List<$GenericStack>>): $Codec<S>;
        flatComapMap<S>(arg0: $Function_<$List<$GenericStack>, S>, arg1: $Function_<S, $DataResult<$List<$GenericStack>>>): $Codec<S>;
        dispatchStable<E>(arg0: $Function_<E, $List<$GenericStack>>, arg1: $Function_<$List<$GenericStack>, $MapCodec<E>>): $Codec<E>;
        comap<B>(arg0: $Function_<B, $List<$GenericStack>>): $Encoder<B>;
        flatComap<B>(arg0: $Function_<B, $DataResult<$List<$GenericStack>>>): $Encoder<B>;
        encodeStart<T>(arg0: $DynamicOps<T>, arg1: $List_<$GenericStack_>): $DataResult<T>;
        decode<T>(arg0: $Dynamic<T>): $DataResult<$Pair<$List<$GenericStack>, T>>;
        map<B>(arg0: $Function_<$List<$GenericStack>, B>): $Decoder<B>;
        flatMap<B>(arg0: $Function_<$List<$GenericStack>, $DataResult<B>>): $Decoder<B>;
        parse<T>(arg0: $DynamicOps<T>, arg1: T): $DataResult<$List<$GenericStack>>;
        parse<T>(arg0: $Dynamic<T>): $DataResult<$List<$GenericStack>>;
        boxed(): $Decoder$Boxed<$List<$GenericStack>>;
        terminal(): $Decoder$Terminal<$List<$GenericStack>>;
        simple(): $Decoder$Simple<$List<$GenericStack>>;
        withLifecycle(arg0: $Lifecycle): $Encoder<$List<$GenericStack>>;
        fieldOf(arg0: string): $MapEncoder<$List<$GenericStack>>;
    }
    export class $AEKey2LongMap$AVLTreeMap extends $Object2LongAVLTreeMap<$AEKey> implements $AEKey2LongMap {
        addTo(arg0: $AEKey, arg1: number): number;
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        entrySet(): $Set<$Map$Entry<$AEKey, number>>;
        constructor(arg0: $Comparator<$AEKey>);
    }
    export class $VariantCounter implements $Iterable<$Object2LongMap$Entry<$AEKey>> {
        spliterator(): $Spliterator<$Object2LongMap$Entry<$AEKey>>;
        forEach(arg0: $Consumer_<$Object2LongMap$Entry<$AEKey>>): void;
    }
    export class $FuzzySearch$KeyComparator implements $Comparator<$Object> {
        reversed(): $Comparator<$Object>;
        thenComparing<U>(arg0: $Function_<$Object, U>, arg1: $Comparator<U>): $Comparator<$Object>;
        thenComparing(arg0: $Comparator<$Object>): $Comparator<$Object>;
        thenComparing<U extends $Comparable<U>>(arg0: $Function_<$Object, U>): $Comparator<$Object>;
        thenComparingInt(arg0: $ToIntFunction_<$Object>): $Comparator<$Object>;
        thenComparingLong(arg0: $ToLongFunction_<$Object>): $Comparator<$Object>;
        thenComparingDouble(arg0: $ToDoubleFunction_<$Object>): $Comparator<$Object>;
    }
    export class $VariantCounter$NonDefaultIterator implements $Iterator<$Object2LongMap$Entry<$AEKey>> {
        remove(): void;
        forEachRemaining(arg0: $Consumer_<$Object2LongMap$Entry<$AEKey>>): void;
    }
    export class $AmountFormat extends $Enum<$AmountFormat> {
        static values(): $AmountFormat[];
        static valueOf(arg0: string): $AmountFormat;
        static SLOT_LARGE_FONT: $AmountFormat;
        static SLOT: $AmountFormat;
        static FULL: $AmountFormat;
    }
    /**
     * Values that may be interpreted as {@link $AmountFormat}.
     */
    export type $AmountFormat_ = "full" | "slot" | "slot_large_font";
    export class $AEItemKeys extends $AEKeyType {
        static CODEC: $Codec<$AEKeyType>;
        static REGISTRY_KEY: $ResourceKey<$Registry<$AEKeyType>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AEKeyType>;
    }
    export class $VariantCounter$UnorderedVariantMap extends $VariantCounter {
    }
    export class $AEKeyTypesInternal {
        static getAllTypes(): $Set<$AEKeyType>;
        static register(arg0: $AEKeyType_): void;
        static getRegistry(): $Registry<$AEKeyType>;
        static setRegistry(arg0: $Registry<$AEKeyType_>): void;
        static get allTypes(): $Set<$AEKeyType>;
    }
    export class $VariantCounter$FuzzyVariantMap extends $VariantCounter {
    }
    export class $AEKey2LongMap$OpenHashMap extends $Object2LongOpenHashMap<$AEKey> implements $AEKey2LongMap {
        addTo(arg0: $AEKey, arg1: number): number;
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        entrySet(): $Set<$Map$Entry<$AEKey, number>>;
        constructor();
    }
}
