import { $Serializable } from "@package/java/io";
import { $Int2ByteFunction_, $Int2ShortFunction, $Int2ObjectFunction_, $Int2CharFunction, $Int2DoubleFunction_, $Int2ReferenceFunction_, $Int2IntFunction_, $Int2LongFunction_, $IntBinaryOperator_ as $IntBinaryOperator_$1, $Int2CharFunction_, $Int2FloatFunction_, $Int2LongFunction, $Int2IntFunction, $Int2DoubleFunction, $Int2FloatFunction, $Int2ByteFunction, $Int2ObjectFunction, $Int2ReferenceFunction, $Int2BooleanFunction, $Int2ShortFunction_ } from "@package/it/unimi/dsi/fastutil/ints";
import { $Long2ReferenceFunction_, $LongCollection, $Long2LongFunction, $LongBinaryOperator_, $Long2FloatFunction, $Long2ShortFunction, $Long2BooleanFunction, $Long2ObjectFunction, $Long2CharFunction_, $Long2ReferenceFunction, $Long2FloatFunction_, $Long2ByteFunction_, $Long2CharFunction, $Long2ObjectFunction_, $Long2ShortFunction_, $Long2IntFunction, $Long2LongFunction_, $Long2ByteFunction, $Long2IntFunction_, $Long2DoubleFunction, $Long2DoubleFunction_ } from "@package/it/unimi/dsi/fastutil/longs";
import { $Byte2ReferenceFunction, $Byte2LongFunction_, $Byte2DoubleFunction, $Byte2ShortFunction, $Byte2LongFunction, $Byte2ShortFunction_, $Byte2BooleanFunction, $Byte2ByteFunction, $Byte2IntFunction_, $Byte2ObjectFunction_, $Byte2FloatFunction, $Byte2DoubleFunction_, $Byte2CharFunction, $Byte2ObjectFunction, $Byte2ByteFunction_, $Byte2CharFunction_, $Byte2ReferenceFunction_, $Byte2IntFunction, $Byte2FloatFunction_ } from "@package/it/unimi/dsi/fastutil/bytes";
import { $BidirectionalIterator, $Hash, $Hash$Strategy, $Stack, $Function } from "@package/it/unimi/dsi/fastutil";
import { $SortedMap, $Map, $Map$Entry, $ListIterator, $Spliterator, $List, $SequencedCollection, $Map_, $Collection_, $List_, $Collection, $SequencedSet, $SortedSet, $Comparator, $Set, $RandomAccess, $Iterator, $AbstractCollection } from "@package/java/util";
import { $Float2LongFunction_, $Float2FloatFunction_, $Float2ShortFunction, $Float2BooleanFunction, $Float2ObjectFunction_, $Float2IntFunction, $Float2ObjectFunction, $Float2ShortFunction_, $Float2CharFunction, $Float2DoubleFunction, $Float2ReferenceFunction_, $FloatCollection, $Float2FloatFunction, $Float2IntFunction_, $Float2ReferenceFunction, $Float2CharFunction_, $Float2ByteFunction_, $Float2LongFunction, $Float2DoubleFunction_, $Float2ByteFunction, $FloatBinaryOperator_ } from "@package/it/unimi/dsi/fastutil/floats";
import { $Function as $Function$1, $BiConsumer_, $UnaryOperator_, $ToLongFunction_, $ToIntFunction_, $LongBinaryOperator_ as $LongBinaryOperator_$1, $Consumer_, $Predicate_, $ToDoubleFunction, $Predicate, $ToIntFunction, $ToDoubleFunction_, $Function_, $DoubleBinaryOperator_, $IntBinaryOperator_, $BiFunction_, $ToLongFunction } from "@package/java/util/function";
import { $Collector } from "@package/java/util/stream";
import { $Double2FloatFunction, $Double2IntFunction, $Double2IntFunction_, $Double2ByteFunction_, $Double2ByteFunction, $Double2ReferenceFunction, $Double2ObjectFunction_, $Double2ShortFunction, $Double2FloatFunction_, $Double2LongFunction_, $Double2DoubleFunction_, $Double2LongFunction, $Double2DoubleFunction, $Double2ObjectFunction, $Double2BooleanFunction, $Double2CharFunction_, $Double2CharFunction, $Double2ReferenceFunction_, $Double2ShortFunction_ } from "@package/it/unimi/dsi/fastutil/doubles";
import { $Char2BooleanFunction, $Char2ObjectFunction_, $Char2LongFunction, $Char2ShortFunction_, $Char2FloatFunction, $Char2IntFunction_, $Char2DoubleFunction_, $Char2ObjectFunction, $Char2CharFunction_, $Char2IntFunction, $Char2FloatFunction_, $Char2ByteFunction_, $Char2CharFunction, $Char2ShortFunction, $Char2LongFunction_, $Char2ReferenceFunction_, $Char2DoubleFunction, $Char2ByteFunction, $Char2ReferenceFunction } from "@package/it/unimi/dsi/fastutil/chars";
import { $Boolean2FloatFunction_, $Boolean2ReferenceFunction_, $BooleanCollection, $Boolean2LongFunction_, $Boolean2ShortFunction_, $Boolean2CharFunction_, $Boolean2IntFunction_, $Boolean2ObjectFunction_, $Boolean2ByteFunction_, $Boolean2DoubleFunction_ } from "@package/it/unimi/dsi/fastutil/booleans";
import { $Cloneable, $Comparable, $Iterable, $Object } from "@package/java/lang";
import { $Short2IntFunction_, $Short2ReferenceFunction_, $Short2FloatFunction, $Short2ShortFunction, $Short2BooleanFunction, $Short2ByteFunction, $Short2ByteFunction_, $Short2CharFunction_, $Short2ObjectFunction, $Short2IntFunction, $Short2LongFunction, $Short2LongFunction_, $Short2FloatFunction_, $Short2DoubleFunction, $Short2ObjectFunction_, $Short2ReferenceFunction, $Short2ShortFunction_, $Short2DoubleFunction_, $Short2CharFunction } from "@package/it/unimi/dsi/fastutil/shorts";

declare module "@package/it/unimi/dsi/fastutil/objects" {
    export class $Object2IntOpenHashMap<K> extends $AbstractObject2IntMap<K> implements $Serializable, $Cloneable, $Hash {
        clone(): $Object2IntOpenHashMap<K>;
        trim(arg0: number): boolean;
        trim(): boolean;
        ensureCapacity(arg0: number): void;
        addTo(arg0: K, arg1: number): number;
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        constructor(arg0: $Map_<K, number>);
        constructor(arg0: $Object2IntMap<K>, arg1: number);
        constructor(arg0: $Object2IntMap<K>);
        constructor(arg0: K[], arg1: number[], arg2: number);
        constructor(arg0: K[], arg1: number[]);
        constructor(arg0: number, arg1: number);
        constructor(arg0: number);
        constructor();
        constructor(arg0: $Map_<K, number>, arg1: number);
    }
    export class $Object2ReferenceFunction<K, V> {
    }
    export interface $Object2ReferenceFunction<K, V> extends $Function<K, V> {
        remove(arg0: $Object): V;
        get(arg0: $Object): V;
        put(arg0: K, arg1: V): V;
        getOrDefault(arg0: $Object, arg1: V): V;
        defaultReturnValue(): V;
        defaultReturnValue(arg0: V): void;
        andThenByte(arg0: $Reference2ByteFunction_<V>): $Object2ByteFunction<K>;
        composeByte(arg0: $Byte2ObjectFunction_<K>): $Byte2ReferenceFunction<V>;
        andThenShort(arg0: $Reference2ShortFunction_<V>): $Object2ShortFunction<K>;
        composeShort(arg0: $Short2ObjectFunction_<K>): $Short2ReferenceFunction<V>;
        andThenInt(arg0: $Reference2IntFunction_<V>): $Object2IntFunction<K>;
        composeInt(arg0: $Int2ObjectFunction_<K>): $Int2ReferenceFunction<V>;
        andThenLong(arg0: $Reference2LongFunction_<V>): $Object2LongFunction<K>;
        composeLong(arg0: $Long2ObjectFunction_<K>): $Long2ReferenceFunction<V>;
        andThenChar(arg0: $Reference2CharFunction_<V>): $Object2CharFunction<K>;
        composeChar(arg0: $Char2ObjectFunction_<K>): $Char2ReferenceFunction<V>;
        andThenFloat(arg0: $Reference2FloatFunction_<V>): $Object2FloatFunction<K>;
        composeFloat(arg0: $Float2ObjectFunction_<K>): $Float2ReferenceFunction<V>;
        andThenDouble(arg0: $Reference2DoubleFunction_<V>): $Object2DoubleFunction<K>;
        composeDouble(arg0: $Double2ObjectFunction_<K>): $Double2ReferenceFunction<V>;
        andThenObject<T>(arg0: $Reference2ObjectFunction_<V, T>): $Object2ObjectFunction<K, T>;
        composeObject<T>(arg0: $Object2ObjectFunction_<T, K>): $Object2ReferenceFunction<T, V>;
        andThenReference<T>(arg0: $Reference2ReferenceFunction_<V, T>): $Object2ReferenceFunction<K, T>;
        composeReference<T>(arg0: $Reference2ObjectFunction_<T, K>): $Reference2ReferenceFunction<T, V>;
    }
    /**
     * Values that may be interpreted as {@link $Object2ReferenceFunction}.
     */
    export type $Object2ReferenceFunction_<K, V> = ((arg0: $Object) => V);
    export class $AbstractReferenceSet<K> extends $AbstractReferenceCollection<K> implements $Cloneable, $ReferenceSet<K> {
    }
    export class $ObjectBidirectionalIterator<K> {
    }
    export interface $ObjectBidirectionalIterator<K> extends $ObjectIterator<K>, $BidirectionalIterator<K> {
        skip(arg0: number): number;
        back(arg0: number): number;
    }
    export class $Object2LongMap$FastEntrySet<K> {
    }
    export interface $Object2LongMap$FastEntrySet<K> extends $ObjectSet<$Object2LongMap$Entry<K>> {
        fastIterator(): $ObjectIterator<$Object2LongMap$Entry<$Object2LongMap$Entry<K>>>;
        fastForEach(arg0: $Consumer_<$Object2LongMap$Entry<$Object2LongMap$Entry<K>>>): void;
    }
    export class $Reference2ReferenceMap<K, V> {
    }
    export interface $Reference2ReferenceMap<K, V> extends $Reference2ReferenceFunction<K, V>, $Map<K, V> {
        /**
         * @deprecated
         */
        computeReferenceIfAbsentPartial(arg0: K, arg1: $Reference2ReferenceFunction_<K, V>): V;
        remove(arg0: $Object): V;
        remove(arg0: $Object, arg1: $Object): boolean;
        size(): number;
        put(arg0: K, arg1: V): V;
        clear(): void;
        replace(arg0: K, arg1: V): V;
        replace(arg0: K, arg1: V, arg2: V): boolean;
        merge(arg0: K, arg1: V, arg2: $BiFunction_<V, V, V>): V;
        entrySet(): $ObjectSet<$Map$Entry<K, V>>;
        putIfAbsent(arg0: K, arg1: V): V;
        compute(arg0: K, arg1: $BiFunction_<K, V, V>): V;
        forEach(arg0: $BiConsumer_<K, V>): void;
        containsKey(arg0: $Object): boolean;
        computeIfAbsent(arg0: K, arg1: $Reference2ReferenceFunction_<K, V>): V;
        keySet(): $ReferenceSet<K>;
        getOrDefault(arg0: $Object, arg1: V): V;
        computeIfPresent(arg0: K, arg1: $BiFunction_<K, V, V>): V;
        defaultReturnValue(arg0: V): void;
        defaultReturnValue(): V;
        reference2ReferenceEntrySet(): $ObjectSet<$Reference2ReferenceMap$Entry<K, V>>;
        values(): $Collection<V>;
    }
    export class $Object2LongMap<K> {
    }
    export interface $Object2LongMap<K> extends $Object2LongFunction<K>, $Map<K, number> {
        mergeLong(arg0: K, arg1: number, arg2: $LongBinaryOperator_): number;
        /**
         * @deprecated
         */
        mergeLong(arg0: K, arg1: number, arg2: $BiFunction_<number, number, number>): number;
        mergeLong(arg0: K, arg1: number, arg2: $LongBinaryOperator_$1): number;
        object2LongEntrySet(): $ObjectSet<$Object2LongMap$Entry<K>>;
        /**
         * @deprecated
         */
        computeLongIfAbsent(arg0: K, arg1: $ToLongFunction_<K>): number;
        /**
         * @deprecated
         */
        computeLongIfAbsentPartial(arg0: K, arg1: $Object2LongFunction_<K>): number;
        computeLongIfPresent(arg0: K, arg1: $BiFunction_<K, number, number>): number;
        computeLong(arg0: K, arg1: $BiFunction_<K, number, number>): number;
        remove(arg0: $Object, arg1: number): boolean;
        /**
         * @deprecated
         */
        remove(arg0: $Object, arg1: $Object): boolean;
        size(): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        /**
         * @deprecated
         */
        put(arg0: K, arg1: number): number;
        values(): $LongCollection;
        clear(): void;
        /**
         * @deprecated
         */
        replace(arg0: K, arg1: number): number;
        /**
         * @deprecated
         */
        replace(arg0: K, arg1: number, arg2: number): boolean;
        replace(arg0: K, arg1: number): number;
        replace(arg0: K, arg1: number, arg2: number): boolean;
        merge(arg0: K, arg1: number, arg2: $BiFunction_<number, number, number>): number;
        /**
         * @deprecated
         */
        merge(arg0: K, arg1: number, arg2: $BiFunction_<number, number, number>): number;
        putIfAbsent(arg0: K, arg1: number): number;
        /**
         * @deprecated
         */
        putIfAbsent(arg0: K, arg1: number): number;
        forEach(arg0: $BiConsumer_<K, number>): void;
        containsKey(arg0: $Object): boolean;
        computeIfAbsent(arg0: K, arg1: $ToLongFunction_<K>): number;
        computeIfAbsent(arg0: K, arg1: $Object2LongFunction_<K>): number;
        /**
         * @deprecated
         */
        containsValue(arg0: $Object): boolean;
        containsValue(arg0: number): boolean;
        getOrDefault(arg0: $Object, arg1: number): number;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        defaultReturnValue(arg0: number): void;
        defaultReturnValue(): number;
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        entrySet(): $Set<$Map$Entry<K, number>>;
        keySet(): $Set<K>;
    }
    export class $Reference2FloatFunction<K> {
    }
    export interface $Reference2FloatFunction<K> extends $Function<K, number>, $ToDoubleFunction<K> {
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        put(arg0: K, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: K, arg1: number): number;
        getFloat(arg0: $Object): number;
        getOrDefault(arg0: $Object, arg1: number): number;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        applyAsDouble(arg0: K): number;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<K, T>;
        defaultReturnValue(arg0: number): void;
        defaultReturnValue(): number;
        andThenByte(arg0: $Float2ByteFunction_): $Reference2ByteFunction<K>;
        composeByte(arg0: $Byte2ReferenceFunction_<K>): $Byte2FloatFunction;
        andThenShort(arg0: $Float2ShortFunction_): $Reference2ShortFunction<K>;
        composeShort(arg0: $Short2ReferenceFunction_<K>): $Short2FloatFunction;
        andThenInt(arg0: $Float2IntFunction_): $Reference2IntFunction<K>;
        composeInt(arg0: $Int2ReferenceFunction_<K>): $Int2FloatFunction;
        andThenLong(arg0: $Float2LongFunction_): $Reference2LongFunction<K>;
        composeLong(arg0: $Long2ReferenceFunction_<K>): $Long2FloatFunction;
        andThenChar(arg0: $Float2CharFunction_): $Reference2CharFunction<K>;
        composeChar(arg0: $Char2ReferenceFunction_<K>): $Char2FloatFunction;
        andThenFloat(arg0: $Float2FloatFunction_): $Reference2FloatFunction<K>;
        composeFloat(arg0: $Float2ReferenceFunction_<K>): $Float2FloatFunction;
        andThenDouble(arg0: $Float2DoubleFunction_): $Reference2DoubleFunction<K>;
        composeDouble(arg0: $Double2ReferenceFunction_<K>): $Double2FloatFunction;
        andThenObject<T>(arg0: $Float2ObjectFunction_<T>): $Reference2ObjectFunction<K, T>;
        composeObject<T>(arg0: $Object2ReferenceFunction_<T, K>): $Object2FloatFunction<T>;
        andThenReference<T>(arg0: $Float2ReferenceFunction_<T>): $Reference2ReferenceFunction<K, T>;
        composeReference<T>(arg0: $Reference2ReferenceFunction_<T, K>): $Reference2FloatFunction<T>;
        removeFloat(arg0: $Object): number;
        get(arg0: $Object): number;
    }
    /**
     * Values that may be interpreted as {@link $Reference2FloatFunction}.
     */
    export type $Reference2FloatFunction_<K> = ((arg0: $Object) => number);
    export class $ObjectIterator<K> {
    }
    export interface $ObjectIterator<K> extends $Iterator<K> {
        skip(arg0: number): number;
    }
    export class $Object2LongFunction<K> {
    }
    export interface $Object2LongFunction<K> extends $Function<K, number>, $ToLongFunction<K> {
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        put(arg0: K, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: K, arg1: number): number;
        getLong(arg0: $Object): number;
        getOrDefault(arg0: $Object, arg1: number): number;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        applyAsLong(arg0: K): number;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<K, T>;
        defaultReturnValue(arg0: number): void;
        defaultReturnValue(): number;
        andThenByte(arg0: $Long2ByteFunction_): $Object2ByteFunction<K>;
        composeByte(arg0: $Byte2ObjectFunction_<K>): $Byte2LongFunction;
        andThenShort(arg0: $Long2ShortFunction_): $Object2ShortFunction<K>;
        composeShort(arg0: $Short2ObjectFunction_<K>): $Short2LongFunction;
        andThenInt(arg0: $Long2IntFunction_): $Object2IntFunction<K>;
        composeInt(arg0: $Int2ObjectFunction_<K>): $Int2LongFunction;
        andThenLong(arg0: $Long2LongFunction_): $Object2LongFunction<K>;
        composeLong(arg0: $Long2ObjectFunction_<K>): $Long2LongFunction;
        andThenChar(arg0: $Long2CharFunction_): $Object2CharFunction<K>;
        composeChar(arg0: $Char2ObjectFunction_<K>): $Char2LongFunction;
        andThenFloat(arg0: $Long2FloatFunction_): $Object2FloatFunction<K>;
        composeFloat(arg0: $Float2ObjectFunction_<K>): $Float2LongFunction;
        andThenDouble(arg0: $Long2DoubleFunction_): $Object2DoubleFunction<K>;
        composeDouble(arg0: $Double2ObjectFunction_<K>): $Double2LongFunction;
        andThenObject<T>(arg0: $Long2ObjectFunction_<T>): $Object2ObjectFunction<K, T>;
        composeObject<T>(arg0: $Object2ObjectFunction_<T, K>): $Object2LongFunction<T>;
        andThenReference<T>(arg0: $Long2ReferenceFunction_<T>): $Object2ReferenceFunction<K, T>;
        composeReference<T>(arg0: $Reference2ObjectFunction_<T, K>): $Reference2LongFunction<T>;
        removeLong(arg0: $Object): number;
        get(arg0: $Object): number;
    }
    /**
     * Values that may be interpreted as {@link $Object2LongFunction}.
     */
    export type $Object2LongFunction_<K> = ((arg0: $Object) => number);
    export class $Object2BooleanMap<K> {
    }
    export interface $Object2BooleanMap<K> extends $Object2BooleanFunction<K>, $Map<K, boolean> {
        /**
         * @deprecated
         */
        remove(arg0: $Object): boolean;
        remove(arg0: $Object, arg1: boolean): boolean;
        size(): number;
        /**
         * @deprecated
         */
        put(arg0: K, arg1: boolean): boolean;
        values(): $BooleanCollection;
        clear(): void;
        replace(arg0: K, arg1: boolean, arg2: boolean): boolean;
        replace(arg0: K, arg1: boolean): boolean;
        merge(arg0: K, arg1: boolean, arg2: $BiFunction_<boolean, boolean, boolean>): boolean;
        putIfAbsent(arg0: K, arg1: boolean): boolean;
        forEach(arg0: $BiConsumer_<K, boolean>): void;
        containsKey(arg0: $Object): boolean;
        computeIfAbsent(arg0: K, arg1: $Predicate_<K>): boolean;
        computeIfAbsent(arg0: K, arg1: $Object2BooleanFunction_<K>): boolean;
        containsValue(arg0: boolean): boolean;
        /**
         * @deprecated
         */
        containsValue(arg0: $Object): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: boolean): boolean;
        getOrDefault(arg0: $Object, arg1: boolean): boolean;
        defaultReturnValue(arg0: boolean): void;
        defaultReturnValue(): boolean;
        object2BooleanEntrySet(): $ObjectSet<$Object2BooleanMap$Entry<K>>;
        computeBooleanIfPresent(arg0: K, arg1: $BiFunction_<K, boolean, boolean>): boolean;
        computeBoolean(arg0: K, arg1: $BiFunction_<K, boolean, boolean>): boolean;
        /**
         * @deprecated
         */
        computeBooleanIfAbsent(arg0: K, arg1: $Predicate_<K>): boolean;
        /**
         * @deprecated
         */
        computeBooleanIfAbsentPartial(arg0: K, arg1: $Object2BooleanFunction_<K>): boolean;
        get(arg0: $Object): boolean;
        entrySet(): $Set<$Map$Entry<K, boolean>>;
        keySet(): $Set<K>;
    }
    export class $Object2IntFunction<K> {
    }
    export interface $Object2IntFunction<K> extends $Function<K, number>, $ToIntFunction<K> {
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        put(arg0: K, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: K, arg1: number): number;
        getInt(arg0: $Object): number;
        getOrDefault(arg0: $Object, arg1: number): number;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        applyAsInt(arg0: K): number;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<K, T>;
        defaultReturnValue(arg0: number): void;
        defaultReturnValue(): number;
        andThenByte(arg0: $Int2ByteFunction_): $Object2ByteFunction<K>;
        composeByte(arg0: $Byte2ObjectFunction_<K>): $Byte2IntFunction;
        andThenShort(arg0: $Int2ShortFunction_): $Object2ShortFunction<K>;
        composeShort(arg0: $Short2ObjectFunction_<K>): $Short2IntFunction;
        andThenInt(arg0: $Int2IntFunction_): $Object2IntFunction<K>;
        composeInt(arg0: $Int2ObjectFunction_<K>): $Int2IntFunction;
        andThenLong(arg0: $Int2LongFunction_): $Object2LongFunction<K>;
        composeLong(arg0: $Long2ObjectFunction_<K>): $Long2IntFunction;
        andThenChar(arg0: $Int2CharFunction_): $Object2CharFunction<K>;
        composeChar(arg0: $Char2ObjectFunction_<K>): $Char2IntFunction;
        andThenFloat(arg0: $Int2FloatFunction_): $Object2FloatFunction<K>;
        composeFloat(arg0: $Float2ObjectFunction_<K>): $Float2IntFunction;
        andThenDouble(arg0: $Int2DoubleFunction_): $Object2DoubleFunction<K>;
        composeDouble(arg0: $Double2ObjectFunction_<K>): $Double2IntFunction;
        andThenObject<T>(arg0: $Int2ObjectFunction_<T>): $Object2ObjectFunction<K, T>;
        composeObject<T>(arg0: $Object2ObjectFunction_<T, K>): $Object2IntFunction<T>;
        andThenReference<T>(arg0: $Int2ReferenceFunction_<T>): $Object2ReferenceFunction<K, T>;
        composeReference<T>(arg0: $Reference2ObjectFunction_<T, K>): $Reference2IntFunction<T>;
        removeInt(arg0: $Object): number;
        get(arg0: $Object): number;
    }
    /**
     * Values that may be interpreted as {@link $Object2IntFunction}.
     */
    export type $Object2IntFunction_<K> = ((arg0: $Object) => number);
    export class $Object2LongAVLTreeMap<K> extends $AbstractObject2LongSortedMap<K> implements $Serializable, $Cloneable {
        clone(): $Object2LongAVLTreeMap<K>;
        addTo(arg0: K, arg1: number): number;
        subMap(arg0: K, arg1: K): $SortedMap<K, number>;
        tailMap(arg0: K): $Object2LongSortedMap<K>;
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        constructor(arg0: $Object2LongSortedMap<K>);
        constructor(arg0: $Object2LongMap<K>);
        constructor(arg0: K[], arg1: number[], arg2: $Comparator<K>);
        constructor(arg0: K[], arg1: number[]);
        constructor();
        constructor(arg0: $Comparator<K>);
        constructor(arg0: $Map_<K, number>);
        constructor(arg0: $SortedMap<K, number>);
    }
    export class $AbstractReference2ObjectFunction<K, V> implements $Reference2ObjectFunction<K, V>, $Serializable {
        defaultReturnValue(arg0: V): void;
        defaultReturnValue(): V;
        remove(arg0: $Object): V;
        put(arg0: K, arg1: V): V;
        getOrDefault(arg0: $Object, arg1: V): V;
        andThenByte(arg0: $Object2ByteFunction_<V>): $Reference2ByteFunction<K>;
        composeByte(arg0: $Byte2ReferenceFunction_<K>): $Byte2ObjectFunction<V>;
        andThenShort(arg0: $Object2ShortFunction_<V>): $Reference2ShortFunction<K>;
        composeShort(arg0: $Short2ReferenceFunction_<K>): $Short2ObjectFunction<V>;
        andThenInt(arg0: $Object2IntFunction_<V>): $Reference2IntFunction<K>;
        composeInt(arg0: $Int2ReferenceFunction_<K>): $Int2ObjectFunction<V>;
        andThenLong(arg0: $Object2LongFunction_<V>): $Reference2LongFunction<K>;
        composeLong(arg0: $Long2ReferenceFunction_<K>): $Long2ObjectFunction<V>;
        andThenChar(arg0: $Object2CharFunction_<V>): $Reference2CharFunction<K>;
        composeChar(arg0: $Char2ReferenceFunction_<K>): $Char2ObjectFunction<V>;
        andThenFloat(arg0: $Object2FloatFunction_<V>): $Reference2FloatFunction<K>;
        composeFloat(arg0: $Float2ReferenceFunction_<K>): $Float2ObjectFunction<V>;
        andThenDouble(arg0: $Object2DoubleFunction_<V>): $Reference2DoubleFunction<K>;
        composeDouble(arg0: $Double2ReferenceFunction_<K>): $Double2ObjectFunction<V>;
        andThenObject<T>(arg0: $Object2ObjectFunction_<V, T>): $Reference2ObjectFunction<K, T>;
        composeObject<T>(arg0: $Object2ReferenceFunction_<T, K>): $Object2ObjectFunction<T, V>;
        andThenReference<T>(arg0: $Object2ReferenceFunction_<V, T>): $Reference2ReferenceFunction<K, T>;
        composeReference<T>(arg0: $Reference2ReferenceFunction_<T, K>): $Reference2ObjectFunction<T, V>;
        size(): number;
        clear(): void;
        apply(arg0: K): V;
        containsKey(arg0: $Object): boolean;
        compose<V>(arg0: $Function_<V, K>): $Function$1<V, V>;
        andThen<V>(arg0: $Function_<V, V>): $Function$1<K, V>;
    }
    export class $Reference2ObjectMap<K, V> {
    }
    export interface $Reference2ObjectMap<K, V> extends $Reference2ObjectFunction<K, V>, $Map<K, V> {
        remove(arg0: $Object): V;
        remove(arg0: $Object, arg1: $Object): boolean;
        size(): number;
        put(arg0: K, arg1: V): V;
        clear(): void;
        replace(arg0: K, arg1: V): V;
        replace(arg0: K, arg1: V, arg2: V): boolean;
        merge(arg0: K, arg1: V, arg2: $BiFunction_<V, V, V>): V;
        entrySet(): $ObjectSet<$Map$Entry<K, V>>;
        putIfAbsent(arg0: K, arg1: V): V;
        compute(arg0: K, arg1: $BiFunction_<K, V, V>): V;
        forEach(arg0: $BiConsumer_<K, V>): void;
        containsKey(arg0: $Object): boolean;
        computeIfAbsent(arg0: K, arg1: $Reference2ObjectFunction_<K, V>): V;
        getOrDefault(arg0: $Object, arg1: V): V;
        computeIfPresent(arg0: K, arg1: $BiFunction_<K, V, V>): V;
        defaultReturnValue(arg0: V): void;
        defaultReturnValue(): V;
        /**
         * @deprecated
         */
        computeObjectIfAbsentPartial(arg0: K, arg1: $Reference2ObjectFunction_<K, V>): V;
        reference2ObjectEntrySet(): $ObjectSet<$Reference2ObjectMap$Entry<K, V>>;
        values(): $Collection<V>;
        keySet(): $Set<K>;
    }
    export class $Object2ObjectMap<K, V> {
    }
    export interface $Object2ObjectMap<K, V> extends $Object2ObjectFunction<K, V>, $Map<K, V> {
        remove(arg0: $Object): V;
        remove(arg0: $Object, arg1: $Object): boolean;
        size(): number;
        put(arg0: K, arg1: V): V;
        clear(): void;
        replace(arg0: K, arg1: V): V;
        replace(arg0: K, arg1: V, arg2: V): boolean;
        merge(arg0: K, arg1: V, arg2: $BiFunction_<V, V, V>): V;
        entrySet(): $ObjectSet<$Map$Entry<K, V>>;
        putIfAbsent(arg0: K, arg1: V): V;
        compute(arg0: K, arg1: $BiFunction_<K, V, V>): V;
        forEach(arg0: $BiConsumer_<K, V>): void;
        containsKey(arg0: $Object): boolean;
        computeIfAbsent(arg0: K, arg1: $Object2ObjectFunction_<K, V>): V;
        getOrDefault(arg0: $Object, arg1: V): V;
        computeIfPresent(arg0: K, arg1: $BiFunction_<K, V, V>): V;
        defaultReturnValue(arg0: V): void;
        defaultReturnValue(): V;
        object2ObjectEntrySet(): $ObjectSet<$Object2ObjectMap$Entry<K, V>>;
        /**
         * @deprecated
         */
        computeObjectIfAbsentPartial(arg0: K, arg1: $Object2ObjectFunction_<K, V>): V;
        values(): $Collection<V>;
        keySet(): $Set<K>;
    }
    export class $ReferenceOpenHashSet<K> extends $AbstractReferenceSet<K> implements $Serializable, $Cloneable, $Hash {
        clone(): $Object;
        trim(): boolean;
        trim(arg0: number): boolean;
        static of<K>(arg0: K, arg1: K, arg2: K): $ReferenceOpenHashSet<K>;
        static of<K>(arg0: K): $ReferenceOpenHashSet<K>;
        static of<K>(...arg0: K[]): $ReferenceOpenHashSet<K>;
        static of<K>(arg0: K, arg1: K): $ReferenceOpenHashSet<K>;
        static of<K>(): $ReferenceOpenHashSet<K>;
        static toSet<K>(): $Collector<K, never, $ReferenceOpenHashSet<K>>;
        ensureCapacity(arg0: number): void;
        static toSetWithExpectedSize<K>(arg0: number): $Collector<K, never, $ReferenceOpenHashSet<K>>;
        constructor(arg0: K[], arg1: number, arg2: number, arg3: number);
        constructor(arg0: $Iterator<K>);
        constructor(arg0: $Iterator<K>, arg1: number);
        constructor(arg0: $ReferenceCollection<K>);
        constructor(arg0: K[], arg1: number, arg2: number);
        constructor(arg0: K[], arg1: number);
        constructor(arg0: K[]);
        constructor(arg0: number, arg1: number);
        constructor(arg0: number);
        constructor();
        constructor(arg0: $ReferenceCollection<K>, arg1: number);
        constructor(arg0: $Collection_<K>);
        constructor(arg0: $Collection_<K>, arg1: number);
    }
    export class $Reference2ReferenceFunction<K, V> {
    }
    export interface $Reference2ReferenceFunction<K, V> extends $Function<K, V> {
        remove(arg0: $Object): V;
        get(arg0: $Object): V;
        put(arg0: K, arg1: V): V;
        getOrDefault(arg0: $Object, arg1: V): V;
        defaultReturnValue(): V;
        defaultReturnValue(arg0: V): void;
        andThenByte(arg0: $Reference2ByteFunction_<V>): $Reference2ByteFunction<K>;
        composeByte(arg0: $Byte2ReferenceFunction_<K>): $Byte2ReferenceFunction<V>;
        andThenShort(arg0: $Reference2ShortFunction_<V>): $Reference2ShortFunction<K>;
        composeShort(arg0: $Short2ReferenceFunction_<K>): $Short2ReferenceFunction<V>;
        andThenInt(arg0: $Reference2IntFunction_<V>): $Reference2IntFunction<K>;
        composeInt(arg0: $Int2ReferenceFunction_<K>): $Int2ReferenceFunction<V>;
        andThenLong(arg0: $Reference2LongFunction_<V>): $Reference2LongFunction<K>;
        composeLong(arg0: $Long2ReferenceFunction_<K>): $Long2ReferenceFunction<V>;
        andThenChar(arg0: $Reference2CharFunction_<V>): $Reference2CharFunction<K>;
        composeChar(arg0: $Char2ReferenceFunction_<K>): $Char2ReferenceFunction<V>;
        andThenFloat(arg0: $Reference2FloatFunction_<V>): $Reference2FloatFunction<K>;
        composeFloat(arg0: $Float2ReferenceFunction_<K>): $Float2ReferenceFunction<V>;
        andThenDouble(arg0: $Reference2DoubleFunction_<V>): $Reference2DoubleFunction<K>;
        composeDouble(arg0: $Double2ReferenceFunction_<K>): $Double2ReferenceFunction<V>;
        andThenObject<T>(arg0: $Reference2ObjectFunction_<V, T>): $Reference2ObjectFunction<K, T>;
        composeObject<T>(arg0: $Object2ReferenceFunction_<T, K>): $Object2ReferenceFunction<T, V>;
        andThenReference<T>(arg0: $Reference2ReferenceFunction_<V, T>): $Reference2ReferenceFunction<K, T>;
        composeReference<T>(arg0: $Reference2ReferenceFunction_<T, K>): $Reference2ReferenceFunction<T, V>;
    }
    /**
     * Values that may be interpreted as {@link $Reference2ReferenceFunction}.
     */
    export type $Reference2ReferenceFunction_<K, V> = ((arg0: $Object) => V);
    export class $Reference2CharFunction<K> {
    }
    export interface $Reference2CharFunction<K> extends $Function<K, string>, $ToIntFunction<K> {
        removeChar(arg0: $Object): string;
        /**
         * @deprecated
         */
        get(arg0: $Object): string;
        put(arg0: K, arg1: string): string;
        /**
         * @deprecated
         */
        put(arg0: K, arg1: string): string;
        getChar(arg0: $Object): string;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: string): string;
        getOrDefault(arg0: $Object, arg1: string): string;
        applyAsInt(arg0: K): number;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<string, T>): $Function$1<K, T>;
        defaultReturnValue(): string;
        defaultReturnValue(arg0: string): void;
        andThenByte(arg0: $Char2ByteFunction_): $Reference2ByteFunction<K>;
        composeByte(arg0: $Byte2ReferenceFunction_<K>): $Byte2CharFunction;
        andThenShort(arg0: $Char2ShortFunction_): $Reference2ShortFunction<K>;
        composeShort(arg0: $Short2ReferenceFunction_<K>): $Short2CharFunction;
        andThenInt(arg0: $Char2IntFunction_): $Reference2IntFunction<K>;
        composeInt(arg0: $Int2ReferenceFunction_<K>): $Int2CharFunction;
        andThenLong(arg0: $Char2LongFunction_): $Reference2LongFunction<K>;
        composeLong(arg0: $Long2ReferenceFunction_<K>): $Long2CharFunction;
        andThenChar(arg0: $Char2CharFunction_): $Reference2CharFunction<K>;
        composeChar(arg0: $Char2ReferenceFunction_<K>): $Char2CharFunction;
        andThenFloat(arg0: $Char2FloatFunction_): $Reference2FloatFunction<K>;
        composeFloat(arg0: $Float2ReferenceFunction_<K>): $Float2CharFunction;
        andThenDouble(arg0: $Char2DoubleFunction_): $Reference2DoubleFunction<K>;
        composeDouble(arg0: $Double2ReferenceFunction_<K>): $Double2CharFunction;
        andThenObject<T>(arg0: $Char2ObjectFunction_<T>): $Reference2ObjectFunction<K, T>;
        composeObject<T>(arg0: $Object2ReferenceFunction_<T, K>): $Object2CharFunction<T>;
        andThenReference<T>(arg0: $Char2ReferenceFunction_<T>): $Reference2ReferenceFunction<K, T>;
        composeReference<T>(arg0: $Reference2ReferenceFunction_<T, K>): $Reference2CharFunction<T>;
        remove(arg0: $Object): string;
    }
    /**
     * Values that may be interpreted as {@link $Reference2CharFunction}.
     */
    export type $Reference2CharFunction_<K> = ((arg0: $Object) => string);
    export class $Object2DoubleFunction<K> {
    }
    export interface $Object2DoubleFunction<K> extends $Function<K, number>, $ToDoubleFunction<K> {
        removeDouble(arg0: $Object): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        put(arg0: K, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: K, arg1: number): number;
        getDouble(arg0: $Object): number;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        getOrDefault(arg0: $Object, arg1: number): number;
        applyAsDouble(arg0: K): number;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<K, T>;
        defaultReturnValue(): number;
        defaultReturnValue(arg0: number): void;
        andThenByte(arg0: $Double2ByteFunction_): $Object2ByteFunction<K>;
        composeByte(arg0: $Byte2ObjectFunction_<K>): $Byte2DoubleFunction;
        andThenShort(arg0: $Double2ShortFunction_): $Object2ShortFunction<K>;
        composeShort(arg0: $Short2ObjectFunction_<K>): $Short2DoubleFunction;
        andThenInt(arg0: $Double2IntFunction_): $Object2IntFunction<K>;
        composeInt(arg0: $Int2ObjectFunction_<K>): $Int2DoubleFunction;
        andThenLong(arg0: $Double2LongFunction_): $Object2LongFunction<K>;
        composeLong(arg0: $Long2ObjectFunction_<K>): $Long2DoubleFunction;
        andThenChar(arg0: $Double2CharFunction_): $Object2CharFunction<K>;
        composeChar(arg0: $Char2ObjectFunction_<K>): $Char2DoubleFunction;
        andThenFloat(arg0: $Double2FloatFunction_): $Object2FloatFunction<K>;
        composeFloat(arg0: $Float2ObjectFunction_<K>): $Float2DoubleFunction;
        andThenDouble(arg0: $Double2DoubleFunction_): $Object2DoubleFunction<K>;
        composeDouble(arg0: $Double2ObjectFunction_<K>): $Double2DoubleFunction;
        andThenObject<T>(arg0: $Double2ObjectFunction_<T>): $Object2ObjectFunction<K, T>;
        composeObject<T>(arg0: $Object2ObjectFunction_<T, K>): $Object2DoubleFunction<T>;
        andThenReference<T>(arg0: $Double2ReferenceFunction_<T>): $Object2ReferenceFunction<K, T>;
        composeReference<T>(arg0: $Reference2ObjectFunction_<T, K>): $Reference2DoubleFunction<T>;
        remove(arg0: $Object): number;
    }
    /**
     * Values that may be interpreted as {@link $Object2DoubleFunction}.
     */
    export type $Object2DoubleFunction_<K> = ((arg0: $Object) => number);
    export class $Reference2ShortFunction<K> {
    }
    export interface $Reference2ShortFunction<K> extends $Function<K, number>, $ToIntFunction<K> {
        removeShort(arg0: $Object): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        put(arg0: K, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: K, arg1: number): number;
        getShort(arg0: $Object): number;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        getOrDefault(arg0: $Object, arg1: number): number;
        applyAsInt(arg0: K): number;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<K, T>;
        defaultReturnValue(): number;
        defaultReturnValue(arg0: number): void;
        andThenByte(arg0: $Short2ByteFunction_): $Reference2ByteFunction<K>;
        composeByte(arg0: $Byte2ReferenceFunction_<K>): $Byte2ShortFunction;
        andThenShort(arg0: $Short2ShortFunction_): $Reference2ShortFunction<K>;
        composeShort(arg0: $Short2ReferenceFunction_<K>): $Short2ShortFunction;
        andThenInt(arg0: $Short2IntFunction_): $Reference2IntFunction<K>;
        composeInt(arg0: $Int2ReferenceFunction_<K>): $Int2ShortFunction;
        andThenLong(arg0: $Short2LongFunction_): $Reference2LongFunction<K>;
        composeLong(arg0: $Long2ReferenceFunction_<K>): $Long2ShortFunction;
        andThenChar(arg0: $Short2CharFunction_): $Reference2CharFunction<K>;
        composeChar(arg0: $Char2ReferenceFunction_<K>): $Char2ShortFunction;
        andThenFloat(arg0: $Short2FloatFunction_): $Reference2FloatFunction<K>;
        composeFloat(arg0: $Float2ReferenceFunction_<K>): $Float2ShortFunction;
        andThenDouble(arg0: $Short2DoubleFunction_): $Reference2DoubleFunction<K>;
        composeDouble(arg0: $Double2ReferenceFunction_<K>): $Double2ShortFunction;
        andThenObject<T>(arg0: $Short2ObjectFunction_<T>): $Reference2ObjectFunction<K, T>;
        composeObject<T>(arg0: $Object2ReferenceFunction_<T, K>): $Object2ShortFunction<T>;
        andThenReference<T>(arg0: $Short2ReferenceFunction_<T>): $Reference2ReferenceFunction<K, T>;
        composeReference<T>(arg0: $Reference2ReferenceFunction_<T, K>): $Reference2ShortFunction<T>;
        remove(arg0: $Object): number;
    }
    /**
     * Values that may be interpreted as {@link $Reference2ShortFunction}.
     */
    export type $Reference2ShortFunction_<K> = ((arg0: $Object) => number);
    export class $AbstractObjectSortedSet<K> extends $AbstractObjectSet<K> implements $ObjectSortedSet<K> {
        getFirst(): K;
        getLast(): K;
        addFirst(arg0: K): void;
        addLast(arg0: K): void;
        removeFirst(): K;
        removeLast(): K;
        subSet(arg0: K, arg1: K): $SortedSet<K>;
        headSet(arg0: K): $SortedSet<K>;
        tailSet(arg0: K): $SortedSet<K>;
        reversed(): $SequencedSet<K>;
    }
    export class $ObjectSet<K> {
        static of<K>(arg0: K, arg1: K): $ObjectSet<K>;
        static of<K>(...arg0: K[]): $ObjectSet<K>;
        static of<K>(arg0: K, arg1: K, arg2: K): $ObjectSet<K>;
        static of<K>(): $ObjectSet<K>;
        static of<K>(arg0: K): $ObjectSet<K>;
        [Symbol.iterator](): Iterator<K>
    }
    export interface $ObjectSet<K> extends $ObjectCollection<K>, $Set<K> {
        iterator(): $Iterator<K>;
        spliterator(): $ObjectSpliterator<K>;
        [Symbol.iterator](): Iterator<K>
    }
    export class $AbstractObjectSet<K> extends $AbstractObjectCollection<K> implements $Cloneable, $ObjectSet<K> {
    }
    export class $AbstractObject2IntFunction<K> implements $Object2IntFunction<K>, $Serializable {
        defaultReturnValue(arg0: number): void;
        defaultReturnValue(): number;
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        put(arg0: K, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: K, arg1: number): number;
        getOrDefault(arg0: $Object, arg1: number): number;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        applyAsInt(arg0: K): number;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<K, T>;
        andThenByte(arg0: $Int2ByteFunction_): $Object2ByteFunction<K>;
        composeByte(arg0: $Byte2ObjectFunction_<K>): $Byte2IntFunction;
        andThenShort(arg0: $Int2ShortFunction_): $Object2ShortFunction<K>;
        composeShort(arg0: $Short2ObjectFunction_<K>): $Short2IntFunction;
        andThenInt(arg0: $Int2IntFunction_): $Object2IntFunction<K>;
        composeInt(arg0: $Int2ObjectFunction_<K>): $Int2IntFunction;
        andThenLong(arg0: $Int2LongFunction_): $Object2LongFunction<K>;
        composeLong(arg0: $Long2ObjectFunction_<K>): $Long2IntFunction;
        andThenChar(arg0: $Int2CharFunction_): $Object2CharFunction<K>;
        composeChar(arg0: $Char2ObjectFunction_<K>): $Char2IntFunction;
        andThenFloat(arg0: $Int2FloatFunction_): $Object2FloatFunction<K>;
        composeFloat(arg0: $Float2ObjectFunction_<K>): $Float2IntFunction;
        andThenDouble(arg0: $Int2DoubleFunction_): $Object2DoubleFunction<K>;
        composeDouble(arg0: $Double2ObjectFunction_<K>): $Double2IntFunction;
        andThenObject<T>(arg0: $Int2ObjectFunction_<T>): $Object2ObjectFunction<K, T>;
        composeObject<T>(arg0: $Object2ObjectFunction_<T, K>): $Object2IntFunction<T>;
        andThenReference<T>(arg0: $Int2ReferenceFunction_<T>): $Object2ReferenceFunction<K, T>;
        composeReference<T>(arg0: $Reference2ObjectFunction_<T, K>): $Reference2IntFunction<T>;
        removeInt(arg0: $Object): number;
        size(): number;
        clear(): void;
        apply(arg0: K): number;
        containsKey(arg0: $Object): boolean;
        compose<V>(arg0: $Function_<V, K>): $Function$1<V, number>;
        get(arg0: $Object): number;
    }
    export class $Reference2LongFunction<K> {
    }
    export interface $Reference2LongFunction<K> extends $Function<K, number>, $ToLongFunction<K> {
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        put(arg0: K, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: K, arg1: number): number;
        getLong(arg0: $Object): number;
        getOrDefault(arg0: $Object, arg1: number): number;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        applyAsLong(arg0: K): number;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<K, T>;
        defaultReturnValue(arg0: number): void;
        defaultReturnValue(): number;
        andThenByte(arg0: $Long2ByteFunction_): $Reference2ByteFunction<K>;
        composeByte(arg0: $Byte2ReferenceFunction_<K>): $Byte2LongFunction;
        andThenShort(arg0: $Long2ShortFunction_): $Reference2ShortFunction<K>;
        composeShort(arg0: $Short2ReferenceFunction_<K>): $Short2LongFunction;
        andThenInt(arg0: $Long2IntFunction_): $Reference2IntFunction<K>;
        composeInt(arg0: $Int2ReferenceFunction_<K>): $Int2LongFunction;
        andThenLong(arg0: $Long2LongFunction_): $Reference2LongFunction<K>;
        composeLong(arg0: $Long2ReferenceFunction_<K>): $Long2LongFunction;
        andThenChar(arg0: $Long2CharFunction_): $Reference2CharFunction<K>;
        composeChar(arg0: $Char2ReferenceFunction_<K>): $Char2LongFunction;
        andThenFloat(arg0: $Long2FloatFunction_): $Reference2FloatFunction<K>;
        composeFloat(arg0: $Float2ReferenceFunction_<K>): $Float2LongFunction;
        andThenDouble(arg0: $Long2DoubleFunction_): $Reference2DoubleFunction<K>;
        composeDouble(arg0: $Double2ReferenceFunction_<K>): $Double2LongFunction;
        andThenObject<T>(arg0: $Long2ObjectFunction_<T>): $Reference2ObjectFunction<K, T>;
        composeObject<T>(arg0: $Object2ReferenceFunction_<T, K>): $Object2LongFunction<T>;
        andThenReference<T>(arg0: $Long2ReferenceFunction_<T>): $Reference2ReferenceFunction<K, T>;
        composeReference<T>(arg0: $Reference2ReferenceFunction_<T, K>): $Reference2LongFunction<T>;
        removeLong(arg0: $Object): number;
        get(arg0: $Object): number;
    }
    /**
     * Values that may be interpreted as {@link $Reference2LongFunction}.
     */
    export type $Reference2LongFunction_<K> = ((arg0: $Object) => number);
    export class $AbstractObjectList<K> extends $AbstractObjectCollection<K> implements $ObjectList<K>, $Stack<K> {
        getElements(arg0: number, arg1: $Object[], arg2: number, arg3: number): void;
        remove(arg0: number): K;
        size(arg0: number): void;
        compareTo(arg0: $List_<K>): number;
        indexOf(arg0: $Object): number;
        lastIndexOf(arg0: $Object): number;
        add(arg0: number, arg1: K): void;
        subList(arg0: number, arg1: number): $ObjectList<K>;
        addAll(arg0: number, arg1: $Collection_<K>): boolean;
        set(arg0: number, arg1: K): K;
        top(): K;
        peek(arg0: number): K;
        listIterator(arg0: number): $ObjectListIterator<K>;
        push(arg0: K): void;
        pop(): K;
        setElements(arg0: number, arg1: K[], arg2: number, arg3: number): void;
        removeElements(arg0: number, arg1: number): void;
        addElements(arg0: number, arg1: K[], arg2: number, arg3: number): void;
        addElements(arg0: number, arg1: K[]): void;
        addAll(arg0: $ObjectList<K>): boolean;
        addAll(arg0: number, arg1: $ObjectList<K>): boolean;
        sort(arg0: $Comparator<K>): void;
        unstableSort(arg0: $Comparator<K>): void;
        setElements(arg0: K[]): void;
        setElements(arg0: number, arg1: K[]): void;
        replaceAll(arg0: $UnaryOperator_<K>): void;
        getFirst(): K;
        getLast(): K;
        addFirst(arg0: K): void;
        addLast(arg0: K): void;
        removeFirst(): K;
        removeLast(): K;
        listIterator(): $ListIterator<K>;
        reversed(): $SequencedCollection<K>;
        get first(): K;
        get last(): K;
    }
    export class $Reference2BooleanFunction<K> {
    }
    export interface $Reference2BooleanFunction<K> extends $Function<K, boolean>, $Predicate<K> {
        /**
         * @deprecated
         */
        remove(arg0: $Object): boolean;
        /**
         * @deprecated
         */
        put(arg0: K, arg1: boolean): boolean;
        put(arg0: K, arg1: boolean): boolean;
        getBoolean(arg0: $Object): boolean;
        test(arg0: K): boolean;
        getOrDefault(arg0: $Object, arg1: boolean): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: boolean): boolean;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<boolean, T>): $Function$1<K, T>;
        defaultReturnValue(arg0: boolean): void;
        defaultReturnValue(): boolean;
        andThenByte(arg0: $Boolean2ByteFunction_): $Reference2ByteFunction<K>;
        composeByte(arg0: $Byte2ReferenceFunction_<K>): $Byte2BooleanFunction;
        andThenShort(arg0: $Boolean2ShortFunction_): $Reference2ShortFunction<K>;
        composeShort(arg0: $Short2ReferenceFunction_<K>): $Short2BooleanFunction;
        andThenInt(arg0: $Boolean2IntFunction_): $Reference2IntFunction<K>;
        composeInt(arg0: $Int2ReferenceFunction_<K>): $Int2BooleanFunction;
        andThenLong(arg0: $Boolean2LongFunction_): $Reference2LongFunction<K>;
        composeLong(arg0: $Long2ReferenceFunction_<K>): $Long2BooleanFunction;
        andThenChar(arg0: $Boolean2CharFunction_): $Reference2CharFunction<K>;
        composeChar(arg0: $Char2ReferenceFunction_<K>): $Char2BooleanFunction;
        andThenFloat(arg0: $Boolean2FloatFunction_): $Reference2FloatFunction<K>;
        composeFloat(arg0: $Float2ReferenceFunction_<K>): $Float2BooleanFunction;
        andThenDouble(arg0: $Boolean2DoubleFunction_): $Reference2DoubleFunction<K>;
        composeDouble(arg0: $Double2ReferenceFunction_<K>): $Double2BooleanFunction;
        andThenObject<T>(arg0: $Boolean2ObjectFunction_<T>): $Reference2ObjectFunction<K, T>;
        composeObject<T>(arg0: $Object2ReferenceFunction_<T, K>): $Object2BooleanFunction<T>;
        andThenReference<T>(arg0: $Boolean2ReferenceFunction_<T>): $Reference2ReferenceFunction<K, T>;
        composeReference<T>(arg0: $Reference2ReferenceFunction_<T, K>): $Reference2BooleanFunction<T>;
        removeBoolean(arg0: $Object): boolean;
        get(arg0: $Object): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Reference2BooleanFunction}.
     */
    export type $Reference2BooleanFunction_<K> = ((arg0: $Object) => boolean);
    export class $Object2ObjectMap$Entry<K, V> {
    }
    export interface $Object2ObjectMap$Entry<K, V> extends $Map$Entry<K, V> {
    }
    export class $ObjectCollection<K> {
        [Symbol.iterator](): Iterator<K>
    }
    export interface $ObjectCollection<K> extends $Collection<K>, $ObjectIterable<K> {
        spliterator(): $ObjectSpliterator<K>;
        iterator(): $Iterator<K>;
        [Symbol.iterator](): Iterator<K>
    }
    export class $Object2LongMap$Entry<K> {
    }
    export interface $Object2LongMap$Entry<K> extends $Map$Entry<K, number> {
        getLongValue(): number;
        setValue(arg0: number): number;
        /**
         * @deprecated
         */
        setValue(arg0: number): number;
        getValue(): number;
        get longValue(): number;
    }
    export class $Object2ObjectFunction<K, V> {
    }
    export interface $Object2ObjectFunction<K, V> extends $Function<K, V> {
        remove(arg0: $Object): V;
        get(arg0: $Object): V;
        put(arg0: K, arg1: V): V;
        getOrDefault(arg0: $Object, arg1: V): V;
        defaultReturnValue(): V;
        defaultReturnValue(arg0: V): void;
        andThenByte(arg0: $Object2ByteFunction_<V>): $Object2ByteFunction<K>;
        composeByte(arg0: $Byte2ObjectFunction_<K>): $Byte2ObjectFunction<V>;
        andThenShort(arg0: $Object2ShortFunction_<V>): $Object2ShortFunction<K>;
        composeShort(arg0: $Short2ObjectFunction_<K>): $Short2ObjectFunction<V>;
        andThenInt(arg0: $Object2IntFunction_<V>): $Object2IntFunction<K>;
        composeInt(arg0: $Int2ObjectFunction_<K>): $Int2ObjectFunction<V>;
        andThenLong(arg0: $Object2LongFunction_<V>): $Object2LongFunction<K>;
        composeLong(arg0: $Long2ObjectFunction_<K>): $Long2ObjectFunction<V>;
        andThenChar(arg0: $Object2CharFunction_<V>): $Object2CharFunction<K>;
        composeChar(arg0: $Char2ObjectFunction_<K>): $Char2ObjectFunction<V>;
        andThenFloat(arg0: $Object2FloatFunction_<V>): $Object2FloatFunction<K>;
        composeFloat(arg0: $Float2ObjectFunction_<K>): $Float2ObjectFunction<V>;
        andThenDouble(arg0: $Object2DoubleFunction_<V>): $Object2DoubleFunction<K>;
        composeDouble(arg0: $Double2ObjectFunction_<K>): $Double2ObjectFunction<V>;
        andThenObject<T>(arg0: $Object2ObjectFunction_<V, T>): $Object2ObjectFunction<K, T>;
        composeObject<T>(arg0: $Object2ObjectFunction_<T, K>): $Object2ObjectFunction<T, V>;
        andThenReference<T>(arg0: $Object2ReferenceFunction_<V, T>): $Object2ReferenceFunction<K, T>;
        composeReference<T>(arg0: $Reference2ObjectFunction_<T, K>): $Reference2ObjectFunction<T, V>;
    }
    /**
     * Values that may be interpreted as {@link $Object2ObjectFunction}.
     */
    export type $Object2ObjectFunction_<K, V> = ((arg0: $Object) => V);
    export class $AbstractObject2IntMap<K> extends $AbstractObject2IntFunction<K> implements $Object2IntMap<K>, $Serializable {
        isEmpty(): boolean;
        putAll(arg0: $Map_<K, number>): void;
        containsValue(arg0: number): boolean;
        mergeInt(arg0: K, arg1: number, arg2: $IntBinaryOperator_$1): number;
        /**
         * @deprecated
         */
        remove(arg0: $Object, arg1: $Object): boolean;
        remove(arg0: $Object, arg1: number): boolean;
        replace(arg0: K, arg1: number): number;
        replace(arg0: K, arg1: number, arg2: number): boolean;
        /**
         * @deprecated
         */
        replace(arg0: K, arg1: number): number;
        /**
         * @deprecated
         */
        replace(arg0: K, arg1: number, arg2: number): boolean;
        /**
         * @deprecated
         */
        merge(arg0: K, arg1: number, arg2: $BiFunction_<number, number, number>): number;
        merge(arg0: K, arg1: number, arg2: $BiFunction_<number, number, number>): number;
        /**
         * @deprecated
         */
        entrySet(): $ObjectSet<$Map$Entry<K, number>>;
        putIfAbsent(arg0: K, arg1: number): number;
        /**
         * @deprecated
         */
        putIfAbsent(arg0: K, arg1: number): number;
        forEach(arg0: $BiConsumer_<K, number>): void;
        computeIfAbsent(arg0: K, arg1: $ToIntFunction_<K>): number;
        computeIfAbsent(arg0: K, arg1: $Object2IntFunction_<K>): number;
        /**
         * @deprecated
         */
        containsValue(arg0: $Object): boolean;
        /**
         * @deprecated
         */
        mergeInt(arg0: K, arg1: number, arg2: $BiFunction_<number, number, number>): number;
        mergeInt(arg0: K, arg1: number, arg2: $IntBinaryOperator_): number;
        /**
         * @deprecated
         */
        computeIntIfAbsent(arg0: K, arg1: $ToIntFunction_<K>): number;
        /**
         * @deprecated
         */
        computeIntIfAbsentPartial(arg0: K, arg1: $Object2IntFunction_<K>): number;
        computeIntIfPresent(arg0: K, arg1: $BiFunction_<K, number, number>): number;
        computeInt(arg0: K, arg1: $BiFunction_<K, number, number>): number;
        replaceAll(arg0: $BiFunction_<K, number, number>): void;
        compute(arg0: K, arg1: $BiFunction_<K, number, number>): number;
        computeIfAbsent(arg0: K, arg1: $Function_<K, number>): number;
        computeIfPresent(arg0: K, arg1: $BiFunction_<K, number, number>): number;
        values(): $Collection<number>;
        keySet(): $ObjectSet<K>;
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        get empty(): boolean;
    }
    export class $ObjectArrayList<K> extends $AbstractObjectList<K> implements $RandomAccess, $Cloneable, $Serializable {
        equals(arg0: $ObjectArrayList<K>): boolean;
        clone(): $Object;
        compareTo(arg0: $ObjectArrayList<K>): number;
        static wrap<K>(arg0: K[], arg1: number): $ObjectArrayList<K>;
        static wrap<K>(arg0: K[]): $ObjectArrayList<K>;
        trim(arg0: number): void;
        trim(): void;
        static toList<K>(): $Collector<K, never, $ObjectArrayList<K>>;
        static of<K>(...arg0: K[]): $ObjectArrayList<K>;
        static of<K>(): $ObjectArrayList<K>;
        elements(): K[];
        ensureCapacity(arg0: number): void;
        static toListWithExpectedSize<K>(arg0: number): $Collector<K, never, $ObjectArrayList<K>>;
        subList(arg0: number, arg1: number): $ObjectList<K>;
        listIterator(arg0: number): $ObjectListIterator<K>;
        reversed(): $SequencedCollection<K>;
        static DEFAULT_INITIAL_CAPACITY: number;
        constructor(arg0: $Iterator<K>);
        constructor(arg0: $ObjectCollection<K>);
        constructor(arg0: $Collection_<K>);
        constructor(arg0: K[]);
        constructor(arg0: K[], arg1: number, arg2: number);
        constructor(arg0: $ObjectList<K>);
        constructor(arg0: $ObjectIterator<K>);
        constructor(arg0: number);
        constructor();
    }
    export class $ObjectSpliterator<K> {
    }
    export interface $ObjectSpliterator<K> extends $Spliterator<K> {
        skip(arg0: number): number;
        trySplit(): $Spliterator<K>;
    }
    export class $ReferenceSet<K> {
        static of<K>(arg0: K, arg1: K): $ReferenceSet<K>;
        static of<K>(...arg0: K[]): $ReferenceSet<K>;
        static of<K>(arg0: K, arg1: K, arg2: K): $ReferenceSet<K>;
        static of<K>(): $ReferenceSet<K>;
        static of<K>(arg0: K): $ReferenceSet<K>;
        [Symbol.iterator](): Iterator<K>
    }
    export interface $ReferenceSet<K> extends $ReferenceCollection<K>, $Set<K> {
        iterator(): $Iterator<K>;
        spliterator(): $ObjectSpliterator<K>;
        [Symbol.iterator](): Iterator<K>
    }
    export class $Reference2ReferenceMap$Entry<K, V> {
    }
    export interface $Reference2ReferenceMap$Entry<K, V> extends $Map$Entry<K, V> {
    }
    export class $ObjectSortedSet<K> {
        [Symbol.iterator](): Iterator<K>
    }
    export interface $ObjectSortedSet<K> extends $ObjectSet<K>, $SortedSet<K>, $ObjectBidirectionalIterable<K> {
        iterator(arg0: K): $ObjectBidirectionalIterator<K>;
        iterator(): $Iterator<K>;
        spliterator(): $ObjectSpliterator<K>;
        subSet(arg0: K, arg1: K): $SortedSet<K>;
        headSet(arg0: K): $SortedSet<K>;
        tailSet(arg0: K): $SortedSet<K>;
        [Symbol.iterator](): Iterator<K>
    }
    export class $AbstractObject2LongMap<K> extends $AbstractObject2LongFunction<K> implements $Object2LongMap<K>, $Serializable {
        mergeLong(arg0: K, arg1: number, arg2: $LongBinaryOperator_): number;
        isEmpty(): boolean;
        putAll(arg0: $Map_<K, number>): void;
        containsValue(arg0: number): boolean;
        /**
         * @deprecated
         */
        mergeLong(arg0: K, arg1: number, arg2: $BiFunction_<number, number, number>): number;
        mergeLong(arg0: K, arg1: number, arg2: $LongBinaryOperator_$1): number;
        /**
         * @deprecated
         */
        computeLongIfAbsent(arg0: K, arg1: $ToLongFunction_<K>): number;
        /**
         * @deprecated
         */
        computeLongIfAbsentPartial(arg0: K, arg1: $Object2LongFunction_<K>): number;
        computeLongIfPresent(arg0: K, arg1: $BiFunction_<K, number, number>): number;
        computeLong(arg0: K, arg1: $BiFunction_<K, number, number>): number;
        remove(arg0: $Object, arg1: number): boolean;
        /**
         * @deprecated
         */
        remove(arg0: $Object, arg1: $Object): boolean;
        /**
         * @deprecated
         */
        replace(arg0: K, arg1: number): number;
        /**
         * @deprecated
         */
        replace(arg0: K, arg1: number, arg2: number): boolean;
        replace(arg0: K, arg1: number): number;
        replace(arg0: K, arg1: number, arg2: number): boolean;
        merge(arg0: K, arg1: number, arg2: $BiFunction_<number, number, number>): number;
        /**
         * @deprecated
         */
        merge(arg0: K, arg1: number, arg2: $BiFunction_<number, number, number>): number;
        putIfAbsent(arg0: K, arg1: number): number;
        /**
         * @deprecated
         */
        putIfAbsent(arg0: K, arg1: number): number;
        forEach(arg0: $BiConsumer_<K, number>): void;
        computeIfAbsent(arg0: K, arg1: $ToLongFunction_<K>): number;
        computeIfAbsent(arg0: K, arg1: $Object2LongFunction_<K>): number;
        /**
         * @deprecated
         */
        containsValue(arg0: $Object): boolean;
        replaceAll(arg0: $BiFunction_<K, number, number>): void;
        compute(arg0: K, arg1: $BiFunction_<K, number, number>): number;
        computeIfAbsent(arg0: K, arg1: $Function_<K, number>): number;
        computeIfPresent(arg0: K, arg1: $BiFunction_<K, number, number>): number;
        values(): $LongCollection;
        keySet(): $Set<K>;
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        entrySet(): $Set<$Map$Entry<K, number>>;
        get empty(): boolean;
    }
    export class $Reference2IntFunction<K> {
    }
    export interface $Reference2IntFunction<K> extends $Function<K, number>, $ToIntFunction<K> {
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        put(arg0: K, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: K, arg1: number): number;
        getInt(arg0: $Object): number;
        getOrDefault(arg0: $Object, arg1: number): number;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        applyAsInt(arg0: K): number;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<K, T>;
        defaultReturnValue(arg0: number): void;
        defaultReturnValue(): number;
        andThenByte(arg0: $Int2ByteFunction_): $Reference2ByteFunction<K>;
        composeByte(arg0: $Byte2ReferenceFunction_<K>): $Byte2IntFunction;
        andThenShort(arg0: $Int2ShortFunction_): $Reference2ShortFunction<K>;
        composeShort(arg0: $Short2ReferenceFunction_<K>): $Short2IntFunction;
        andThenInt(arg0: $Int2IntFunction_): $Reference2IntFunction<K>;
        composeInt(arg0: $Int2ReferenceFunction_<K>): $Int2IntFunction;
        andThenLong(arg0: $Int2LongFunction_): $Reference2LongFunction<K>;
        composeLong(arg0: $Long2ReferenceFunction_<K>): $Long2IntFunction;
        andThenChar(arg0: $Int2CharFunction_): $Reference2CharFunction<K>;
        composeChar(arg0: $Char2ReferenceFunction_<K>): $Char2IntFunction;
        andThenFloat(arg0: $Int2FloatFunction_): $Reference2FloatFunction<K>;
        composeFloat(arg0: $Float2ReferenceFunction_<K>): $Float2IntFunction;
        andThenDouble(arg0: $Int2DoubleFunction_): $Reference2DoubleFunction<K>;
        composeDouble(arg0: $Double2ReferenceFunction_<K>): $Double2IntFunction;
        andThenObject<T>(arg0: $Int2ObjectFunction_<T>): $Reference2ObjectFunction<K, T>;
        composeObject<T>(arg0: $Object2ReferenceFunction_<T, K>): $Object2IntFunction<T>;
        andThenReference<T>(arg0: $Int2ReferenceFunction_<T>): $Reference2ReferenceFunction<K, T>;
        composeReference<T>(arg0: $Reference2ReferenceFunction_<T, K>): $Reference2IntFunction<T>;
        removeInt(arg0: $Object): number;
        get(arg0: $Object): number;
    }
    /**
     * Values that may be interpreted as {@link $Reference2IntFunction}.
     */
    export type $Reference2IntFunction_<K> = ((arg0: $Object) => number);
    export class $AbstractObjectCollection<K> extends $AbstractCollection<K> implements $ObjectCollection<K> {
        iterator(): $ObjectIterator<K>;
        spliterator(): $ObjectSpliterator<K>;
    }
    export class $ObjectListIterator<K> {
    }
    export interface $ObjectListIterator<K> extends $ObjectBidirectionalIterator<K>, $ListIterator<K> {
        remove(): void;
        add(arg0: K): void;
        set(arg0: K): void;
    }
    export class $ObjectBidirectionalIterable<K> {
    }
    export interface $ObjectBidirectionalIterable<K> extends $ObjectIterable<K> {
        iterator(): $ObjectBidirectionalIterator<K>;
    }
    /**
     * Values that may be interpreted as {@link $ObjectBidirectionalIterable}.
     */
    export type $ObjectBidirectionalIterable_<K> = (() => $ObjectBidirectionalIterator<K>);
    export class $Object2FloatFunction<K> {
    }
    export interface $Object2FloatFunction<K> extends $Function<K, number>, $ToDoubleFunction<K> {
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        put(arg0: K, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: K, arg1: number): number;
        getFloat(arg0: $Object): number;
        getOrDefault(arg0: $Object, arg1: number): number;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        applyAsDouble(arg0: K): number;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<K, T>;
        defaultReturnValue(arg0: number): void;
        defaultReturnValue(): number;
        andThenByte(arg0: $Float2ByteFunction_): $Object2ByteFunction<K>;
        composeByte(arg0: $Byte2ObjectFunction_<K>): $Byte2FloatFunction;
        andThenShort(arg0: $Float2ShortFunction_): $Object2ShortFunction<K>;
        composeShort(arg0: $Short2ObjectFunction_<K>): $Short2FloatFunction;
        andThenInt(arg0: $Float2IntFunction_): $Object2IntFunction<K>;
        composeInt(arg0: $Int2ObjectFunction_<K>): $Int2FloatFunction;
        andThenLong(arg0: $Float2LongFunction_): $Object2LongFunction<K>;
        composeLong(arg0: $Long2ObjectFunction_<K>): $Long2FloatFunction;
        andThenChar(arg0: $Float2CharFunction_): $Object2CharFunction<K>;
        composeChar(arg0: $Char2ObjectFunction_<K>): $Char2FloatFunction;
        andThenFloat(arg0: $Float2FloatFunction_): $Object2FloatFunction<K>;
        composeFloat(arg0: $Float2ObjectFunction_<K>): $Float2FloatFunction;
        andThenDouble(arg0: $Float2DoubleFunction_): $Object2DoubleFunction<K>;
        composeDouble(arg0: $Double2ObjectFunction_<K>): $Double2FloatFunction;
        andThenObject<T>(arg0: $Float2ObjectFunction_<T>): $Object2ObjectFunction<K, T>;
        composeObject<T>(arg0: $Object2ObjectFunction_<T, K>): $Object2FloatFunction<T>;
        andThenReference<T>(arg0: $Float2ReferenceFunction_<T>): $Object2ReferenceFunction<K, T>;
        composeReference<T>(arg0: $Reference2ObjectFunction_<T, K>): $Reference2FloatFunction<T>;
        removeFloat(arg0: $Object): number;
        get(arg0: $Object): number;
    }
    /**
     * Values that may be interpreted as {@link $Object2FloatFunction}.
     */
    export type $Object2FloatFunction_<K> = ((arg0: $Object) => number);
    export class $Object2ByteFunction<K> {
    }
    export interface $Object2ByteFunction<K> extends $Function<K, number>, $ToIntFunction<K> {
        removeByte(arg0: $Object): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        put(arg0: K, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: K, arg1: number): number;
        getByte(arg0: $Object): number;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        getOrDefault(arg0: $Object, arg1: number): number;
        applyAsInt(arg0: K): number;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<K, T>;
        defaultReturnValue(): number;
        defaultReturnValue(arg0: number): void;
        andThenByte(arg0: $Byte2ByteFunction_): $Object2ByteFunction<K>;
        composeByte(arg0: $Byte2ObjectFunction_<K>): $Byte2ByteFunction;
        andThenShort(arg0: $Byte2ShortFunction_): $Object2ShortFunction<K>;
        composeShort(arg0: $Short2ObjectFunction_<K>): $Short2ByteFunction;
        andThenInt(arg0: $Byte2IntFunction_): $Object2IntFunction<K>;
        composeInt(arg0: $Int2ObjectFunction_<K>): $Int2ByteFunction;
        andThenLong(arg0: $Byte2LongFunction_): $Object2LongFunction<K>;
        composeLong(arg0: $Long2ObjectFunction_<K>): $Long2ByteFunction;
        andThenChar(arg0: $Byte2CharFunction_): $Object2CharFunction<K>;
        composeChar(arg0: $Char2ObjectFunction_<K>): $Char2ByteFunction;
        andThenFloat(arg0: $Byte2FloatFunction_): $Object2FloatFunction<K>;
        composeFloat(arg0: $Float2ObjectFunction_<K>): $Float2ByteFunction;
        andThenDouble(arg0: $Byte2DoubleFunction_): $Object2DoubleFunction<K>;
        composeDouble(arg0: $Double2ObjectFunction_<K>): $Double2ByteFunction;
        andThenObject<T>(arg0: $Byte2ObjectFunction_<T>): $Object2ObjectFunction<K, T>;
        composeObject<T>(arg0: $Object2ObjectFunction_<T, K>): $Object2ByteFunction<T>;
        andThenReference<T>(arg0: $Byte2ReferenceFunction_<T>): $Object2ReferenceFunction<K, T>;
        composeReference<T>(arg0: $Reference2ObjectFunction_<T, K>): $Reference2ByteFunction<T>;
        remove(arg0: $Object): number;
    }
    /**
     * Values that may be interpreted as {@link $Object2ByteFunction}.
     */
    export type $Object2ByteFunction_<K> = ((arg0: $Object) => number);
    export class $Object2IntMap<K> {
    }
    export interface $Object2IntMap<K> extends $Object2IntFunction<K>, $Map<K, number> {
        /**
         * @deprecated
         */
        remove(arg0: $Object, arg1: $Object): boolean;
        remove(arg0: $Object, arg1: number): boolean;
        size(): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        /**
         * @deprecated
         */
        put(arg0: K, arg1: number): number;
        clear(): void;
        replace(arg0: K, arg1: number): number;
        replace(arg0: K, arg1: number, arg2: number): boolean;
        /**
         * @deprecated
         */
        replace(arg0: K, arg1: number): number;
        /**
         * @deprecated
         */
        replace(arg0: K, arg1: number, arg2: number): boolean;
        /**
         * @deprecated
         */
        merge(arg0: K, arg1: number, arg2: $BiFunction_<number, number, number>): number;
        merge(arg0: K, arg1: number, arg2: $BiFunction_<number, number, number>): number;
        /**
         * @deprecated
         */
        entrySet(): $ObjectSet<$Map$Entry<K, number>>;
        putIfAbsent(arg0: K, arg1: number): number;
        /**
         * @deprecated
         */
        putIfAbsent(arg0: K, arg1: number): number;
        forEach(arg0: $BiConsumer_<K, number>): void;
        containsKey(arg0: $Object): boolean;
        computeIfAbsent(arg0: K, arg1: $ToIntFunction_<K>): number;
        computeIfAbsent(arg0: K, arg1: $Object2IntFunction_<K>): number;
        keySet(): $ObjectSet<K>;
        /**
         * @deprecated
         */
        containsValue(arg0: $Object): boolean;
        containsValue(arg0: number): boolean;
        getOrDefault(arg0: $Object, arg1: number): number;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        defaultReturnValue(): number;
        defaultReturnValue(arg0: number): void;
        object2IntEntrySet(): $ObjectSet<$Object2IntMap$Entry<K>>;
        /**
         * @deprecated
         */
        mergeInt(arg0: K, arg1: number, arg2: $BiFunction_<number, number, number>): number;
        mergeInt(arg0: K, arg1: number, arg2: $IntBinaryOperator_$1): number;
        mergeInt(arg0: K, arg1: number, arg2: $IntBinaryOperator_): number;
        /**
         * @deprecated
         */
        computeIntIfAbsent(arg0: K, arg1: $ToIntFunction_<K>): number;
        /**
         * @deprecated
         */
        computeIntIfAbsentPartial(arg0: K, arg1: $Object2IntFunction_<K>): number;
        computeIntIfPresent(arg0: K, arg1: $BiFunction_<K, number, number>): number;
        computeInt(arg0: K, arg1: $BiFunction_<K, number, number>): number;
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        values(): $Collection<number>;
    }
    export class $ObjectIterable<K> {
        [Symbol.iterator](): Iterator<K>
    }
    export interface $ObjectIterable<K> extends $Iterable<K> {
        spliterator(): $ObjectSpliterator<K>;
        iterator(): $Iterator<K>;
        [Symbol.iterator](): Iterator<K>
    }
    /**
     * Values that may be interpreted as {@link $ObjectIterable}.
     */
    export type $ObjectIterable_<K> = (() => $Iterator<K>);
    export class $Object2CharFunction<K> {
    }
    export interface $Object2CharFunction<K> extends $Function<K, string>, $ToIntFunction<K> {
        removeChar(arg0: $Object): string;
        /**
         * @deprecated
         */
        get(arg0: $Object): string;
        put(arg0: K, arg1: string): string;
        /**
         * @deprecated
         */
        put(arg0: K, arg1: string): string;
        getChar(arg0: $Object): string;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: string): string;
        getOrDefault(arg0: $Object, arg1: string): string;
        applyAsInt(arg0: K): number;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<string, T>): $Function$1<K, T>;
        defaultReturnValue(): string;
        defaultReturnValue(arg0: string): void;
        andThenByte(arg0: $Char2ByteFunction_): $Object2ByteFunction<K>;
        composeByte(arg0: $Byte2ObjectFunction_<K>): $Byte2CharFunction;
        andThenShort(arg0: $Char2ShortFunction_): $Object2ShortFunction<K>;
        composeShort(arg0: $Short2ObjectFunction_<K>): $Short2CharFunction;
        andThenInt(arg0: $Char2IntFunction_): $Object2IntFunction<K>;
        composeInt(arg0: $Int2ObjectFunction_<K>): $Int2CharFunction;
        andThenLong(arg0: $Char2LongFunction_): $Object2LongFunction<K>;
        composeLong(arg0: $Long2ObjectFunction_<K>): $Long2CharFunction;
        andThenChar(arg0: $Char2CharFunction_): $Object2CharFunction<K>;
        composeChar(arg0: $Char2ObjectFunction_<K>): $Char2CharFunction;
        andThenFloat(arg0: $Char2FloatFunction_): $Object2FloatFunction<K>;
        composeFloat(arg0: $Float2ObjectFunction_<K>): $Float2CharFunction;
        andThenDouble(arg0: $Char2DoubleFunction_): $Object2DoubleFunction<K>;
        composeDouble(arg0: $Double2ObjectFunction_<K>): $Double2CharFunction;
        andThenObject<T>(arg0: $Char2ObjectFunction_<T>): $Object2ObjectFunction<K, T>;
        composeObject<T>(arg0: $Object2ObjectFunction_<T, K>): $Object2CharFunction<T>;
        andThenReference<T>(arg0: $Char2ReferenceFunction_<T>): $Object2ReferenceFunction<K, T>;
        composeReference<T>(arg0: $Reference2ObjectFunction_<T, K>): $Reference2CharFunction<T>;
        remove(arg0: $Object): string;
    }
    /**
     * Values that may be interpreted as {@link $Object2CharFunction}.
     */
    export type $Object2CharFunction_<K> = ((arg0: $Object) => string);
    export class $Object2BooleanMap$Entry<K> {
    }
    export interface $Object2BooleanMap$Entry<K> extends $Map$Entry<K, boolean> {
        /**
         * @deprecated
         */
        getValue(): boolean;
        /**
         * @deprecated
         */
        setValue(arg0: boolean): boolean;
        setValue(arg0: boolean): boolean;
        getBooleanValue(): boolean;
        get booleanValue(): boolean;
    }
    export class $Object2LongSortedMap<K> {
    }
    export interface $Object2LongSortedMap<K> extends $Object2LongMap<K>, $SortedMap<K, number> {
        object2LongEntrySet(): $ObjectSortedSet<$Object2LongMap$Entry<K>>;
        comparator(): $Comparator<K>;
        tailMap(arg0: K): $Object2LongSortedMap<K>;
        values(): $LongCollection;
        entrySet(): $Set<$Map$Entry<K, number>>;
        keySet(): $Set<K>;
        subMap(arg0: K, arg1: K): $SortedMap<K, number>;
        headMap(arg0: K): $SortedMap<K, number>;
    }
    export class $Reference2ObjectMap$Entry<K, V> {
    }
    export interface $Reference2ObjectMap$Entry<K, V> extends $Map$Entry<K, V> {
    }
    export class $Object2ShortFunction<K> {
    }
    export interface $Object2ShortFunction<K> extends $Function<K, number>, $ToIntFunction<K> {
        removeShort(arg0: $Object): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        put(arg0: K, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: K, arg1: number): number;
        getShort(arg0: $Object): number;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        getOrDefault(arg0: $Object, arg1: number): number;
        applyAsInt(arg0: K): number;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<K, T>;
        defaultReturnValue(): number;
        defaultReturnValue(arg0: number): void;
        andThenByte(arg0: $Short2ByteFunction_): $Object2ByteFunction<K>;
        composeByte(arg0: $Byte2ObjectFunction_<K>): $Byte2ShortFunction;
        andThenShort(arg0: $Short2ShortFunction_): $Object2ShortFunction<K>;
        composeShort(arg0: $Short2ObjectFunction_<K>): $Short2ShortFunction;
        andThenInt(arg0: $Short2IntFunction_): $Object2IntFunction<K>;
        composeInt(arg0: $Int2ObjectFunction_<K>): $Int2ShortFunction;
        andThenLong(arg0: $Short2LongFunction_): $Object2LongFunction<K>;
        composeLong(arg0: $Long2ObjectFunction_<K>): $Long2ShortFunction;
        andThenChar(arg0: $Short2CharFunction_): $Object2CharFunction<K>;
        composeChar(arg0: $Char2ObjectFunction_<K>): $Char2ShortFunction;
        andThenFloat(arg0: $Short2FloatFunction_): $Object2FloatFunction<K>;
        composeFloat(arg0: $Float2ObjectFunction_<K>): $Float2ShortFunction;
        andThenDouble(arg0: $Short2DoubleFunction_): $Object2DoubleFunction<K>;
        composeDouble(arg0: $Double2ObjectFunction_<K>): $Double2ShortFunction;
        andThenObject<T>(arg0: $Short2ObjectFunction_<T>): $Object2ObjectFunction<K, T>;
        composeObject<T>(arg0: $Object2ObjectFunction_<T, K>): $Object2ShortFunction<T>;
        andThenReference<T>(arg0: $Short2ReferenceFunction_<T>): $Object2ReferenceFunction<K, T>;
        composeReference<T>(arg0: $Reference2ObjectFunction_<T, K>): $Reference2ShortFunction<T>;
        remove(arg0: $Object): number;
    }
    /**
     * Values that may be interpreted as {@link $Object2ShortFunction}.
     */
    export type $Object2ShortFunction_<K> = ((arg0: $Object) => number);
    export class $AbstractReference2ObjectMap<K, V> extends $AbstractReference2ObjectFunction<K, V> implements $Reference2ObjectMap<K, V>, $Serializable {
        values(): $ObjectCollection<V>;
        isEmpty(): boolean;
        putAll(arg0: $Map_<K, V>): void;
        containsValue(arg0: $Object): boolean;
        remove(arg0: $Object, arg1: $Object): boolean;
        replace(arg0: K, arg1: V): V;
        replace(arg0: K, arg1: V, arg2: V): boolean;
        merge(arg0: K, arg1: V, arg2: $BiFunction_<V, V, V>): V;
        entrySet(): $ObjectSet<$Map$Entry<K, V>>;
        putIfAbsent(arg0: K, arg1: V): V;
        compute(arg0: K, arg1: $BiFunction_<K, V, V>): V;
        forEach(arg0: $BiConsumer_<K, V>): void;
        computeIfAbsent(arg0: K, arg1: $Reference2ObjectFunction_<K, V>): V;
        computeIfPresent(arg0: K, arg1: $BiFunction_<K, V, V>): V;
        /**
         * @deprecated
         */
        computeObjectIfAbsentPartial(arg0: K, arg1: $Reference2ObjectFunction_<K, V>): V;
        replaceAll(arg0: $BiFunction_<K, V, V>): void;
        computeIfAbsent(arg0: K, arg1: $Function_<K, V>): V;
        keySet(): $Set<K>;
        get empty(): boolean;
    }
    export class $Object2FloatMap<K> {
    }
    export interface $Object2FloatMap<K> extends $Object2FloatFunction<K>, $Map<K, number> {
        /**
         * @deprecated
         */
        computeFloatIfAbsentPartial(arg0: K, arg1: $Object2FloatFunction_<K>): number;
        /**
         * @deprecated
         */
        computeFloatIfAbsent(arg0: K, arg1: $ToDoubleFunction_<K>): number;
        computeFloatIfPresent(arg0: K, arg1: $BiFunction_<K, number, number>): number;
        object2FloatEntrySet(): $ObjectSet<$Object2FloatMap$Entry<K>>;
        mergeFloat(arg0: K, arg1: number, arg2: $DoubleBinaryOperator_): number;
        mergeFloat(arg0: K, arg1: number, arg2: $FloatBinaryOperator_): number;
        /**
         * @deprecated
         */
        mergeFloat(arg0: K, arg1: number, arg2: $BiFunction_<number, number, number>): number;
        computeFloat(arg0: K, arg1: $BiFunction_<K, number, number>): number;
        remove(arg0: $Object, arg1: number): boolean;
        /**
         * @deprecated
         */
        remove(arg0: $Object, arg1: $Object): boolean;
        size(): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        /**
         * @deprecated
         */
        put(arg0: K, arg1: number): number;
        values(): $FloatCollection;
        clear(): void;
        /**
         * @deprecated
         */
        replace(arg0: K, arg1: number): number;
        /**
         * @deprecated
         */
        replace(arg0: K, arg1: number, arg2: number): boolean;
        replace(arg0: K, arg1: number, arg2: number): boolean;
        replace(arg0: K, arg1: number): number;
        /**
         * @deprecated
         */
        merge(arg0: K, arg1: number, arg2: $BiFunction_<number, number, number>): number;
        merge(arg0: K, arg1: number, arg2: $BiFunction_<number, number, number>): number;
        putIfAbsent(arg0: K, arg1: number): number;
        /**
         * @deprecated
         */
        putIfAbsent(arg0: K, arg1: number): number;
        forEach(arg0: $BiConsumer_<K, number>): void;
        containsKey(arg0: $Object): boolean;
        computeIfAbsent(arg0: K, arg1: $Object2FloatFunction_<K>): number;
        computeIfAbsent(arg0: K, arg1: $ToDoubleFunction_<K>): number;
        keySet(): $ObjectSet<K>;
        /**
         * @deprecated
         */
        containsValue(arg0: $Object): boolean;
        containsValue(arg0: number): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        getOrDefault(arg0: $Object, arg1: number): number;
        defaultReturnValue(arg0: number): void;
        defaultReturnValue(): number;
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        entrySet(): $Set<$Map$Entry<K, number>>;
    }
    export class $Reference2ObjectArrayMap<K, V> extends $AbstractReference2ObjectMap<K, V> implements $Serializable, $Cloneable {
        clone(): $Reference2ObjectArrayMap<K, V>;
        values(): $ObjectCollection<V>;
        constructor(arg0: $Object[], arg1: $Object[], arg2: number);
        constructor(arg0: $Map_<K, V>);
        constructor(arg0: $Reference2ObjectMap<K, V>);
        constructor(arg0: $Object[], arg1: $Object[]);
        constructor();
        constructor(arg0: number);
    }
    export class $Reference2DoubleFunction<K> {
    }
    export interface $Reference2DoubleFunction<K> extends $Function<K, number>, $ToDoubleFunction<K> {
        removeDouble(arg0: $Object): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        put(arg0: K, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: K, arg1: number): number;
        getDouble(arg0: $Object): number;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        getOrDefault(arg0: $Object, arg1: number): number;
        applyAsDouble(arg0: K): number;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<K, T>;
        defaultReturnValue(): number;
        defaultReturnValue(arg0: number): void;
        andThenByte(arg0: $Double2ByteFunction_): $Reference2ByteFunction<K>;
        composeByte(arg0: $Byte2ReferenceFunction_<K>): $Byte2DoubleFunction;
        andThenShort(arg0: $Double2ShortFunction_): $Reference2ShortFunction<K>;
        composeShort(arg0: $Short2ReferenceFunction_<K>): $Short2DoubleFunction;
        andThenInt(arg0: $Double2IntFunction_): $Reference2IntFunction<K>;
        composeInt(arg0: $Int2ReferenceFunction_<K>): $Int2DoubleFunction;
        andThenLong(arg0: $Double2LongFunction_): $Reference2LongFunction<K>;
        composeLong(arg0: $Long2ReferenceFunction_<K>): $Long2DoubleFunction;
        andThenChar(arg0: $Double2CharFunction_): $Reference2CharFunction<K>;
        composeChar(arg0: $Char2ReferenceFunction_<K>): $Char2DoubleFunction;
        andThenFloat(arg0: $Double2FloatFunction_): $Reference2FloatFunction<K>;
        composeFloat(arg0: $Float2ReferenceFunction_<K>): $Float2DoubleFunction;
        andThenDouble(arg0: $Double2DoubleFunction_): $Reference2DoubleFunction<K>;
        composeDouble(arg0: $Double2ReferenceFunction_<K>): $Double2DoubleFunction;
        andThenObject<T>(arg0: $Double2ObjectFunction_<T>): $Reference2ObjectFunction<K, T>;
        composeObject<T>(arg0: $Object2ReferenceFunction_<T, K>): $Object2DoubleFunction<T>;
        andThenReference<T>(arg0: $Double2ReferenceFunction_<T>): $Reference2ReferenceFunction<K, T>;
        composeReference<T>(arg0: $Reference2ReferenceFunction_<T, K>): $Reference2DoubleFunction<T>;
        remove(arg0: $Object): number;
    }
    /**
     * Values that may be interpreted as {@link $Reference2DoubleFunction}.
     */
    export type $Reference2DoubleFunction_<K> = ((arg0: $Object) => number);
    export class $ReferenceCollection<K> {
        [Symbol.iterator](): Iterator<K>
    }
    export interface $ReferenceCollection<K> extends $Collection<K>, $ObjectIterable<K> {
        spliterator(): $ObjectSpliterator<K>;
        iterator(): $Iterator<K>;
        [Symbol.iterator](): Iterator<K>
    }
    export class $Reference2ObjectOpenHashMap<K, V> extends $AbstractReference2ObjectMap<K, V> implements $Serializable, $Cloneable, $Hash {
        clone(): $Reference2ObjectOpenHashMap<K, V>;
        trim(): boolean;
        trim(arg0: number): boolean;
        ensureCapacity(arg0: number): void;
        constructor(arg0: $Map_<K, V>);
        constructor(arg0: $Reference2ObjectMap<K, V>, arg1: number);
        constructor(arg0: $Reference2ObjectMap<K, V>);
        constructor(arg0: K[], arg1: V[], arg2: number);
        constructor(arg0: K[], arg1: V[]);
        constructor(arg0: number, arg1: number);
        constructor(arg0: number);
        constructor();
        constructor(arg0: $Map_<K, V>, arg1: number);
    }
    export class $ObjectLinkedOpenCustomHashSet<K> extends $AbstractObjectSortedSet<K> implements $Serializable, $Cloneable, $Hash {
        get(arg0: $Object): K;
        clone(): $ObjectLinkedOpenCustomHashSet<K>;
        trim(arg0: number): boolean;
        trim(): boolean;
        ensureCapacity(arg0: number): void;
        strategy(): $Hash$Strategy<K>;
        addAndMoveToFirst(arg0: K): boolean;
        addOrGet(arg0: K): K;
        addAndMoveToLast(arg0: K): boolean;
        subSet(arg0: K, arg1: K): $SortedSet<K>;
        headSet(arg0: K): $SortedSet<K>;
        tailSet(arg0: K): $SortedSet<K>;
        reversed(): $SequencedSet<K>;
        constructor(arg0: K[], arg1: number, arg2: number, arg3: number, arg4: $Hash$Strategy<K>);
        constructor(arg0: $Iterator<K>, arg1: $Hash$Strategy<K>);
        constructor(arg0: $Iterator<K>, arg1: number, arg2: $Hash$Strategy<K>);
        constructor(arg0: $ObjectCollection<K>, arg1: $Hash$Strategy<K>);
        constructor(arg0: K[], arg1: number, arg2: number, arg3: $Hash$Strategy<K>);
        constructor(arg0: K[], arg1: number, arg2: $Hash$Strategy<K>);
        constructor(arg0: K[], arg1: $Hash$Strategy<K>);
        constructor(arg0: number, arg1: number, arg2: $Hash$Strategy<K>);
        constructor(arg0: number, arg1: $Hash$Strategy<K>);
        constructor(arg0: $Hash$Strategy<K>);
        constructor(arg0: $ObjectCollection<K>, arg1: number, arg2: $Hash$Strategy<K>);
        constructor(arg0: $Collection_<K>, arg1: $Hash$Strategy<K>);
        constructor(arg0: $Collection_<K>, arg1: number, arg2: $Hash$Strategy<K>);
    }
    export class $Reference2ByteFunction<K> {
    }
    export interface $Reference2ByteFunction<K> extends $Function<K, number>, $ToIntFunction<K> {
        removeByte(arg0: $Object): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        put(arg0: K, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: K, arg1: number): number;
        getByte(arg0: $Object): number;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        getOrDefault(arg0: $Object, arg1: number): number;
        applyAsInt(arg0: K): number;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<K, T>;
        defaultReturnValue(): number;
        defaultReturnValue(arg0: number): void;
        andThenByte(arg0: $Byte2ByteFunction_): $Reference2ByteFunction<K>;
        composeByte(arg0: $Byte2ReferenceFunction_<K>): $Byte2ByteFunction;
        andThenShort(arg0: $Byte2ShortFunction_): $Reference2ShortFunction<K>;
        composeShort(arg0: $Short2ReferenceFunction_<K>): $Short2ByteFunction;
        andThenInt(arg0: $Byte2IntFunction_): $Reference2IntFunction<K>;
        composeInt(arg0: $Int2ReferenceFunction_<K>): $Int2ByteFunction;
        andThenLong(arg0: $Byte2LongFunction_): $Reference2LongFunction<K>;
        composeLong(arg0: $Long2ReferenceFunction_<K>): $Long2ByteFunction;
        andThenChar(arg0: $Byte2CharFunction_): $Reference2CharFunction<K>;
        composeChar(arg0: $Char2ReferenceFunction_<K>): $Char2ByteFunction;
        andThenFloat(arg0: $Byte2FloatFunction_): $Reference2FloatFunction<K>;
        composeFloat(arg0: $Float2ReferenceFunction_<K>): $Float2ByteFunction;
        andThenDouble(arg0: $Byte2DoubleFunction_): $Reference2DoubleFunction<K>;
        composeDouble(arg0: $Double2ReferenceFunction_<K>): $Double2ByteFunction;
        andThenObject<T>(arg0: $Byte2ObjectFunction_<T>): $Reference2ObjectFunction<K, T>;
        composeObject<T>(arg0: $Object2ReferenceFunction_<T, K>): $Object2ByteFunction<T>;
        andThenReference<T>(arg0: $Byte2ReferenceFunction_<T>): $Reference2ReferenceFunction<K, T>;
        composeReference<T>(arg0: $Reference2ReferenceFunction_<T, K>): $Reference2ByteFunction<T>;
        remove(arg0: $Object): number;
    }
    /**
     * Values that may be interpreted as {@link $Reference2ByteFunction}.
     */
    export type $Reference2ByteFunction_<K> = ((arg0: $Object) => number);
    export class $Object2LongOpenHashMap<K> extends $AbstractObject2LongMap<K> implements $Serializable, $Cloneable, $Hash {
        object2LongEntrySet(): $Object2LongMap$FastEntrySet<K>;
        clone(): $Object;
        trim(): boolean;
        trim(arg0: number): boolean;
        ensureCapacity(arg0: number): void;
        addTo(arg0: K, arg1: number): number;
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        entrySet(): $Set<$Map$Entry<K, number>>;
        constructor(arg0: $Object2LongMap<K>);
        constructor(arg0: K[], arg1: number[], arg2: number);
        constructor(arg0: K[], arg1: number[]);
        constructor(arg0: number, arg1: number);
        constructor(arg0: number);
        constructor();
        constructor(arg0: $Object2LongMap<K>, arg1: number);
        constructor(arg0: $Map_<K, number>);
        constructor(arg0: $Map_<K, number>, arg1: number);
    }
    export class $Reference2IntMap<K> {
    }
    export interface $Reference2IntMap<K> extends $Reference2IntFunction<K>, $Map<K, number> {
        /**
         * @deprecated
         */
        remove(arg0: $Object, arg1: $Object): boolean;
        remove(arg0: $Object, arg1: number): boolean;
        size(): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        /**
         * @deprecated
         */
        put(arg0: K, arg1: number): number;
        clear(): void;
        replace(arg0: K, arg1: number): number;
        replace(arg0: K, arg1: number, arg2: number): boolean;
        /**
         * @deprecated
         */
        replace(arg0: K, arg1: number): number;
        /**
         * @deprecated
         */
        replace(arg0: K, arg1: number, arg2: number): boolean;
        /**
         * @deprecated
         */
        merge(arg0: K, arg1: number, arg2: $BiFunction_<number, number, number>): number;
        merge(arg0: K, arg1: number, arg2: $BiFunction_<number, number, number>): number;
        /**
         * @deprecated
         */
        entrySet(): $ObjectSet<$Map$Entry<K, number>>;
        putIfAbsent(arg0: K, arg1: number): number;
        /**
         * @deprecated
         */
        putIfAbsent(arg0: K, arg1: number): number;
        forEach(arg0: $BiConsumer_<K, number>): void;
        containsKey(arg0: $Object): boolean;
        computeIfAbsent(arg0: K, arg1: $ToIntFunction_<K>): number;
        computeIfAbsent(arg0: K, arg1: $Reference2IntFunction_<K>): number;
        keySet(): $ReferenceSet<K>;
        /**
         * @deprecated
         */
        containsValue(arg0: $Object): boolean;
        containsValue(arg0: number): boolean;
        getOrDefault(arg0: $Object, arg1: number): number;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        defaultReturnValue(): number;
        defaultReturnValue(arg0: number): void;
        /**
         * @deprecated
         */
        mergeInt(arg0: K, arg1: number, arg2: $BiFunction_<number, number, number>): number;
        mergeInt(arg0: K, arg1: number, arg2: $IntBinaryOperator_): number;
        mergeInt(arg0: K, arg1: number, arg2: $IntBinaryOperator_$1): number;
        /**
         * @deprecated
         */
        computeIntIfAbsent(arg0: K, arg1: $ToIntFunction_<K>): number;
        /**
         * @deprecated
         */
        computeIntIfAbsentPartial(arg0: K, arg1: $Reference2IntFunction_<K>): number;
        computeIntIfPresent(arg0: K, arg1: $BiFunction_<K, number, number>): number;
        computeInt(arg0: K, arg1: $BiFunction_<K, number, number>): number;
        reference2IntEntrySet(): $ObjectSet<$Reference2IntMap$Entry<K>>;
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        values(): $Collection<number>;
    }
    export class $Reference2IntMap$Entry<K> {
    }
    export interface $Reference2IntMap$Entry<K> extends $Map$Entry<K, number> {
        /**
         * @deprecated
         */
        getValue(): number;
        /**
         * @deprecated
         */
        setValue(arg0: number): number;
        setValue(arg0: number): number;
        getIntValue(): number;
        get intValue(): number;
    }
    export class $AbstractReferenceCollection<K> extends $AbstractCollection<K> implements $ReferenceCollection<K> {
        iterator(): $ObjectIterator<K>;
        spliterator(): $ObjectSpliterator<K>;
    }
    export class $AbstractObject2LongSortedMap<K> extends $AbstractObject2LongMap<K> implements $Object2LongSortedMap<K> {
        reversed(): $SortedMap<K, number>;
        putFirst(arg0: K, arg1: number): number;
        putLast(arg0: K, arg1: number): number;
        sequencedKeySet(): $SequencedSet<K>;
        sequencedValues(): $SequencedCollection<number>;
        sequencedEntrySet(): $SequencedSet<$Map$Entry<K, number>>;
        firstEntry(): $Map$Entry<K, number>;
        lastEntry(): $Map$Entry<K, number>;
        pollFirstEntry(): $Map$Entry<K, number>;
        pollLastEntry(): $Map$Entry<K, number>;
        values(): $LongCollection;
        keySet(): $Set<K>;
        subMap(arg0: K, arg1: K): $SortedMap<K, number>;
        headMap(arg0: K): $SortedMap<K, number>;
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
    }
    export class $Object2FloatMap$Entry<K> {
    }
    export interface $Object2FloatMap$Entry<K> extends $Map$Entry<K, number> {
        /**
         * @deprecated
         */
        getValue(): number;
        /**
         * @deprecated
         */
        setValue(arg0: number): number;
        setValue(arg0: number): number;
        getFloatValue(): number;
        get floatValue(): number;
    }
    export class $Reference2ObjectFunction<K, V> {
    }
    export interface $Reference2ObjectFunction<K, V> extends $Function<K, V> {
        remove(arg0: $Object): V;
        get(arg0: $Object): V;
        put(arg0: K, arg1: V): V;
        getOrDefault(arg0: $Object, arg1: V): V;
        defaultReturnValue(): V;
        defaultReturnValue(arg0: V): void;
        andThenByte(arg0: $Object2ByteFunction_<V>): $Reference2ByteFunction<K>;
        composeByte(arg0: $Byte2ReferenceFunction_<K>): $Byte2ObjectFunction<V>;
        andThenShort(arg0: $Object2ShortFunction_<V>): $Reference2ShortFunction<K>;
        composeShort(arg0: $Short2ReferenceFunction_<K>): $Short2ObjectFunction<V>;
        andThenInt(arg0: $Object2IntFunction_<V>): $Reference2IntFunction<K>;
        composeInt(arg0: $Int2ReferenceFunction_<K>): $Int2ObjectFunction<V>;
        andThenLong(arg0: $Object2LongFunction_<V>): $Reference2LongFunction<K>;
        composeLong(arg0: $Long2ReferenceFunction_<K>): $Long2ObjectFunction<V>;
        andThenChar(arg0: $Object2CharFunction_<V>): $Reference2CharFunction<K>;
        composeChar(arg0: $Char2ReferenceFunction_<K>): $Char2ObjectFunction<V>;
        andThenFloat(arg0: $Object2FloatFunction_<V>): $Reference2FloatFunction<K>;
        composeFloat(arg0: $Float2ReferenceFunction_<K>): $Float2ObjectFunction<V>;
        andThenDouble(arg0: $Object2DoubleFunction_<V>): $Reference2DoubleFunction<K>;
        composeDouble(arg0: $Double2ReferenceFunction_<K>): $Double2ObjectFunction<V>;
        andThenObject<T>(arg0: $Object2ObjectFunction_<V, T>): $Reference2ObjectFunction<K, T>;
        composeObject<T>(arg0: $Object2ReferenceFunction_<T, K>): $Object2ObjectFunction<T, V>;
        andThenReference<T>(arg0: $Object2ReferenceFunction_<V, T>): $Reference2ReferenceFunction<K, T>;
        composeReference<T>(arg0: $Reference2ReferenceFunction_<T, K>): $Reference2ObjectFunction<T, V>;
    }
    /**
     * Values that may be interpreted as {@link $Reference2ObjectFunction}.
     */
    export type $Reference2ObjectFunction_<K, V> = ((arg0: $Object) => V);
    export class $Object2IntMap$Entry<K> {
    }
    export interface $Object2IntMap$Entry<K> extends $Map$Entry<K, number> {
        /**
         * @deprecated
         */
        getValue(): number;
        /**
         * @deprecated
         */
        setValue(arg0: number): number;
        setValue(arg0: number): number;
        getIntValue(): number;
        get intValue(): number;
    }
    export class $AbstractObject2LongFunction<K> implements $Object2LongFunction<K>, $Serializable {
        defaultReturnValue(arg0: number): void;
        defaultReturnValue(): number;
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        put(arg0: K, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: K, arg1: number): number;
        getOrDefault(arg0: $Object, arg1: number): number;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        applyAsLong(arg0: K): number;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<K, T>;
        andThenByte(arg0: $Long2ByteFunction_): $Object2ByteFunction<K>;
        composeByte(arg0: $Byte2ObjectFunction_<K>): $Byte2LongFunction;
        andThenShort(arg0: $Long2ShortFunction_): $Object2ShortFunction<K>;
        composeShort(arg0: $Short2ObjectFunction_<K>): $Short2LongFunction;
        andThenInt(arg0: $Long2IntFunction_): $Object2IntFunction<K>;
        composeInt(arg0: $Int2ObjectFunction_<K>): $Int2LongFunction;
        andThenLong(arg0: $Long2LongFunction_): $Object2LongFunction<K>;
        composeLong(arg0: $Long2ObjectFunction_<K>): $Long2LongFunction;
        andThenChar(arg0: $Long2CharFunction_): $Object2CharFunction<K>;
        composeChar(arg0: $Char2ObjectFunction_<K>): $Char2LongFunction;
        andThenFloat(arg0: $Long2FloatFunction_): $Object2FloatFunction<K>;
        composeFloat(arg0: $Float2ObjectFunction_<K>): $Float2LongFunction;
        andThenDouble(arg0: $Long2DoubleFunction_): $Object2DoubleFunction<K>;
        composeDouble(arg0: $Double2ObjectFunction_<K>): $Double2LongFunction;
        andThenObject<T>(arg0: $Long2ObjectFunction_<T>): $Object2ObjectFunction<K, T>;
        composeObject<T>(arg0: $Object2ObjectFunction_<T, K>): $Object2LongFunction<T>;
        andThenReference<T>(arg0: $Long2ReferenceFunction_<T>): $Object2ReferenceFunction<K, T>;
        composeReference<T>(arg0: $Reference2ObjectFunction_<T, K>): $Reference2LongFunction<T>;
        removeLong(arg0: $Object): number;
        size(): number;
        clear(): void;
        apply(arg0: K): number;
        containsKey(arg0: $Object): boolean;
        compose<V>(arg0: $Function_<V, K>): $Function$1<V, number>;
        get(arg0: $Object): number;
    }
    export class $ObjectList<K> {
        static of<K>(...arg0: K[]): $ObjectList<K>;
        static of<K>(arg0: K, arg1: K, arg2: K): $ObjectList<K>;
        static of<K>(arg0: K): $ObjectList<K>;
        static of<K>(): $ObjectList<K>;
        static of<K>(arg0: K, arg1: K): $ObjectList<K>;
        [Symbol.iterator](): Iterator<K>
    }
    export interface $ObjectList<K> extends $List<K>, $Comparable<$List<K>>, $ObjectCollection<K> {
        getElements(arg0: number, arg1: $Object[], arg2: number, arg3: number): void;
        size(arg0: number): void;
        subList(arg0: number, arg1: number): $ObjectList<K>;
        addAll(arg0: $ObjectList<K>): boolean;
        addAll(arg0: number, arg1: $ObjectList<K>): boolean;
        sort(arg0: $Comparator<K>): void;
        listIterator(arg0: number): $ObjectListIterator<K>;
        unstableSort(arg0: $Comparator<K>): void;
        setElements(arg0: K[]): void;
        setElements(arg0: number, arg1: K[], arg2: number, arg3: number): void;
        setElements(arg0: number, arg1: K[]): void;
        removeElements(arg0: number, arg1: number): void;
        addElements(arg0: number, arg1: K[], arg2: number, arg3: number): void;
        addElements(arg0: number, arg1: K[]): void;
        iterator(): $Iterator<K>;
        spliterator(): $Spliterator<K>;
        listIterator(): $ListIterator<K>;
        [Symbol.iterator](): Iterator<K>
    }
    export class $Object2BooleanFunction<K> {
    }
    export interface $Object2BooleanFunction<K> extends $Function<K, boolean>, $Predicate<K> {
        /**
         * @deprecated
         */
        remove(arg0: $Object): boolean;
        /**
         * @deprecated
         */
        put(arg0: K, arg1: boolean): boolean;
        put(arg0: K, arg1: boolean): boolean;
        getBoolean(arg0: $Object): boolean;
        test(arg0: K): boolean;
        getOrDefault(arg0: $Object, arg1: boolean): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: boolean): boolean;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<boolean, T>): $Function$1<K, T>;
        defaultReturnValue(arg0: boolean): void;
        defaultReturnValue(): boolean;
        andThenByte(arg0: $Boolean2ByteFunction_): $Object2ByteFunction<K>;
        composeByte(arg0: $Byte2ObjectFunction_<K>): $Byte2BooleanFunction;
        andThenShort(arg0: $Boolean2ShortFunction_): $Object2ShortFunction<K>;
        composeShort(arg0: $Short2ObjectFunction_<K>): $Short2BooleanFunction;
        andThenInt(arg0: $Boolean2IntFunction_): $Object2IntFunction<K>;
        composeInt(arg0: $Int2ObjectFunction_<K>): $Int2BooleanFunction;
        andThenLong(arg0: $Boolean2LongFunction_): $Object2LongFunction<K>;
        composeLong(arg0: $Long2ObjectFunction_<K>): $Long2BooleanFunction;
        andThenChar(arg0: $Boolean2CharFunction_): $Object2CharFunction<K>;
        composeChar(arg0: $Char2ObjectFunction_<K>): $Char2BooleanFunction;
        andThenFloat(arg0: $Boolean2FloatFunction_): $Object2FloatFunction<K>;
        composeFloat(arg0: $Float2ObjectFunction_<K>): $Float2BooleanFunction;
        andThenDouble(arg0: $Boolean2DoubleFunction_): $Object2DoubleFunction<K>;
        composeDouble(arg0: $Double2ObjectFunction_<K>): $Double2BooleanFunction;
        andThenObject<T>(arg0: $Boolean2ObjectFunction_<T>): $Object2ObjectFunction<K, T>;
        composeObject<T>(arg0: $Object2ObjectFunction_<T, K>): $Object2BooleanFunction<T>;
        andThenReference<T>(arg0: $Boolean2ReferenceFunction_<T>): $Object2ReferenceFunction<K, T>;
        composeReference<T>(arg0: $Reference2ObjectFunction_<T, K>): $Reference2BooleanFunction<T>;
        removeBoolean(arg0: $Object): boolean;
        get(arg0: $Object): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Object2BooleanFunction}.
     */
    export type $Object2BooleanFunction_<K> = ((arg0: $Object) => boolean);
}
