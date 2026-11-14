import { $Serializable } from "@package/java/io";
import { $Long2ReferenceFunction_, $Long2LongFunction, $Long2FloatFunction, $Long2ShortFunction, $Long2BooleanFunction, $Long2ObjectFunction, $Long2CharFunction_, $Long2ReferenceFunction, $Long2FloatFunction_, $Long2ByteFunction_, $Long2CharFunction, $Long2ObjectFunction_, $Long2ShortFunction_, $Long2IntFunction, $Long2LongFunction_, $Long2ByteFunction, $Long2IntFunction_, $Long2DoubleFunction, $Long2DoubleFunction_ } from "@package/it/unimi/dsi/fastutil/longs";
import { $Byte2ReferenceFunction, $Byte2LongFunction_, $Byte2DoubleFunction, $Byte2ShortFunction, $Byte2LongFunction, $Byte2ShortFunction_, $Byte2BooleanFunction, $Byte2ByteFunction, $Byte2IntFunction_, $Byte2ObjectFunction_, $Byte2FloatFunction, $Byte2DoubleFunction_, $Byte2CharFunction, $Byte2ObjectFunction, $Byte2ByteFunction_, $Byte2CharFunction_, $Byte2ReferenceFunction_, $Byte2IntFunction, $Byte2FloatFunction_ } from "@package/it/unimi/dsi/fastutil/bytes";
import { $Hash, $Stack, $Function } from "@package/it/unimi/dsi/fastutil";
import { $Spliterator$OfInt, $SortedMap, $Map, $Map$Entry, $ListIterator, $Spliterator, $List, $SequencedCollection, $Collection_, $List_, $Collection, $SortedSet, $Comparator, $Set, $RandomAccess, $Iterator, $PrimitiveIterator$OfInt, $AbstractCollection } from "@package/java/util";
import { $Float2LongFunction_, $Float2FloatFunction_, $Float2ShortFunction, $Float2BooleanFunction, $Float2ObjectFunction_, $Float2IntFunction, $Float2ObjectFunction, $Float2ShortFunction_, $Float2CharFunction, $Float2DoubleFunction, $Float2ReferenceFunction_, $Float2FloatFunction, $Float2IntFunction_, $Float2ReferenceFunction, $Float2CharFunction_, $Float2ByteFunction_, $Float2LongFunction, $Float2DoubleFunction_, $Float2ByteFunction } from "@package/it/unimi/dsi/fastutil/floats";
import { $IntPredicate as $IntPredicate$1, $IntFunction_, $IntBinaryOperator as $IntBinaryOperator$1, $IntToDoubleFunction, $Function as $Function$1, $UnaryOperator, $BiConsumer_, $IntConsumer_ as $IntConsumer_$1, $IntToLongFunction, $IntUnaryOperator as $IntUnaryOperator$1, $UnaryOperator_, $IntToDoubleFunction_, $IntFunction, $Consumer_, $BinaryOperator, $Predicate_, $Predicate, $Consumer, $IntConsumer as $IntConsumer$1, $IntPredicate_ as $IntPredicate_$1, $Function_, $IntUnaryOperator_ as $IntUnaryOperator_$1, $DoubleBinaryOperator_ as $DoubleBinaryOperator_$1, $IntBinaryOperator_ as $IntBinaryOperator_$1, $BiFunction_ } from "@package/java/util/function";
import { $Object2LongFunction_, $Reference2ShortFunction, $Reference2FloatFunction_, $Object2ShortFunction, $Object2ObjectFunction_, $Reference2IntFunction_, $Object2ShortFunction_, $ObjectCollection, $Object2ByteFunction_, $Reference2ByteFunction_, $Object2BooleanFunction, $Object2ReferenceFunction_, $Reference2ReferenceFunction, $Reference2ObjectFunction_, $Object2CharFunction_, $Object2FloatFunction, $Reference2CharFunction, $Reference2FloatFunction, $Object2CharFunction, $Reference2DoubleFunction_, $Object2DoubleFunction, $Reference2IntFunction, $Object2IntFunction, $Object2IntFunction_, $Reference2CharFunction_, $Reference2BooleanFunction, $ObjectSortedSet, $Object2DoubleFunction_, $Object2ReferenceFunction, $Reference2DoubleFunction, $Object2LongFunction, $Reference2LongFunction, $Reference2ShortFunction_, $Reference2ObjectFunction, $Object2FloatFunction_, $Object2ByteFunction, $Reference2ByteFunction, $Reference2ReferenceFunction_, $Reference2LongFunction_, $Object2ObjectFunction, $ObjectBidirectionalIterator, $ObjectSet } from "@package/it/unimi/dsi/fastutil/objects";
import { $Stream, $IntStream } from "@package/java/util/stream";
import { $Double2FloatFunction, $Double2IntFunction, $Double2IntFunction_, $Double2ByteFunction_, $DoubleBinaryOperator_, $Double2ByteFunction, $Double2ReferenceFunction, $Double2ObjectFunction_, $Double2ShortFunction, $Double2FloatFunction_, $Double2LongFunction_, $Double2DoubleFunction_, $DoubleCollection, $Double2LongFunction, $Double2DoubleFunction, $Double2ObjectFunction, $Double2BooleanFunction, $Double2CharFunction_, $Double2CharFunction, $Double2ReferenceFunction_, $Double2ShortFunction_ } from "@package/it/unimi/dsi/fastutil/doubles";
import { $Char2BooleanFunction, $Char2ObjectFunction_, $Char2LongFunction, $Char2ShortFunction_, $Char2FloatFunction, $Char2IntFunction_, $Char2DoubleFunction_, $Char2ObjectFunction, $Char2CharFunction_, $Char2IntFunction, $Char2FloatFunction_, $Char2ByteFunction_, $Char2CharFunction, $Char2ShortFunction, $Char2LongFunction_, $Char2ReferenceFunction_, $Char2ByteFunction, $Char2DoubleFunction, $Char2ReferenceFunction } from "@package/it/unimi/dsi/fastutil/chars";
import { $Boolean2FloatFunction_, $Boolean2ReferenceFunction_, $Boolean2LongFunction_, $Boolean2ShortFunction_, $Boolean2CharFunction_, $Boolean2IntFunction_, $Boolean2ObjectFunction_, $Boolean2ByteFunction_, $Boolean2DoubleFunction_ } from "@package/it/unimi/dsi/fastutil/booleans";
import { $Cloneable, $Comparable, $Iterable, $Object } from "@package/java/lang";
import { $Short2IntFunction_, $Short2ReferenceFunction_, $Short2FloatFunction, $Short2ShortFunction, $Short2BooleanFunction, $Short2ByteFunction, $Short2ByteFunction_, $Short2CharFunction_, $Short2ObjectFunction, $Short2IntFunction, $Short2LongFunction, $Short2LongFunction_, $Short2FloatFunction_, $Short2DoubleFunction, $Short2ObjectFunction_, $Short2ReferenceFunction, $Short2ShortFunction_, $Short2DoubleFunction_, $Short2CharFunction } from "@package/it/unimi/dsi/fastutil/shorts";

declare module "@package/it/unimi/dsi/fastutil/ints" {
    export class $IntUnaryOperator {
        static identity(): $IntUnaryOperator;
        static negation(): $IntUnaryOperator;
    }
    export interface $IntUnaryOperator extends $UnaryOperator<number>, $IntUnaryOperator$1 {
        /**
         * @deprecated
         */
        apply(arg0: number): number;
        apply(arg0: number): number;
        /**
         * @deprecated
         */
        applyAsInt(arg0: number): number;
    }
    /**
     * Values that may be interpreted as {@link $IntUnaryOperator}.
     */
    export type $IntUnaryOperator_ = ((arg0: number) => number);
    export class $Int2BooleanFunction {
    }
    export interface $Int2BooleanFunction extends $Function<number, boolean>, $IntPredicate$1 {
        remove(arg0: number): boolean;
        /**
         * @deprecated
         */
        remove(arg0: $Object): boolean;
        /**
         * @deprecated
         */
        get(arg0: $Object): boolean;
        get(arg0: number): boolean;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: boolean): boolean;
        put(arg0: number, arg1: boolean): boolean;
        test(arg0: number): boolean;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        getOrDefault(arg0: number, arg1: boolean): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: boolean): boolean;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, number>): $Function$1<T, boolean>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<boolean, T>): $Function$1<number, T>;
        defaultReturnValue(arg0: boolean): void;
        defaultReturnValue(): boolean;
        andThenByte(arg0: $Boolean2ByteFunction_): $Int2ByteFunction;
        composeByte(arg0: $Byte2IntFunction_): $Byte2BooleanFunction;
        andThenShort(arg0: $Boolean2ShortFunction_): $Int2ShortFunction;
        composeShort(arg0: $Short2IntFunction_): $Short2BooleanFunction;
        andThenInt(arg0: $Boolean2IntFunction_): $Int2IntFunction;
        composeInt(arg0: $Int2IntFunction_): $Int2BooleanFunction;
        andThenLong(arg0: $Boolean2LongFunction_): $Int2LongFunction;
        composeLong(arg0: $Long2IntFunction_): $Long2BooleanFunction;
        andThenChar(arg0: $Boolean2CharFunction_): $Int2CharFunction;
        composeChar(arg0: $Char2IntFunction_): $Char2BooleanFunction;
        andThenFloat(arg0: $Boolean2FloatFunction_): $Int2FloatFunction;
        composeFloat(arg0: $Float2IntFunction_): $Float2BooleanFunction;
        andThenDouble(arg0: $Boolean2DoubleFunction_): $Int2DoubleFunction;
        composeDouble(arg0: $Double2IntFunction_): $Double2BooleanFunction;
        andThenObject<T>(arg0: $Boolean2ObjectFunction_<T>): $Int2ObjectFunction<T>;
        composeObject<T>(arg0: $Object2IntFunction_<T>): $Object2BooleanFunction<T>;
        andThenReference<T>(arg0: $Boolean2ReferenceFunction_<T>): $Int2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2IntFunction_<T>): $Reference2BooleanFunction<T>;
    }
    /**
     * Values that may be interpreted as {@link $Int2BooleanFunction}.
     */
    export type $Int2BooleanFunction_ = ((arg0: number) => boolean);
    export class $Int2FloatFunction {
    }
    export interface $Int2FloatFunction extends $Function<number, number>, $IntToDoubleFunction {
        remove(arg0: number): number;
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        get(arg0: number): number;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        getOrDefault(arg0: number, arg1: number): number;
        applyAsDouble(arg0: number): number;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, number>): $Function$1<T, number>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<number, T>;
        defaultReturnValue(): number;
        defaultReturnValue(arg0: number): void;
        andThenByte(arg0: $Float2ByteFunction_): $Int2ByteFunction;
        composeByte(arg0: $Byte2IntFunction_): $Byte2FloatFunction;
        andThenShort(arg0: $Float2ShortFunction_): $Int2ShortFunction;
        composeShort(arg0: $Short2IntFunction_): $Short2FloatFunction;
        andThenInt(arg0: $Float2IntFunction_): $Int2IntFunction;
        composeInt(arg0: $Int2IntFunction_): $Int2FloatFunction;
        andThenLong(arg0: $Float2LongFunction_): $Int2LongFunction;
        composeLong(arg0: $Long2IntFunction_): $Long2FloatFunction;
        andThenChar(arg0: $Float2CharFunction_): $Int2CharFunction;
        composeChar(arg0: $Char2IntFunction_): $Char2FloatFunction;
        andThenFloat(arg0: $Float2FloatFunction_): $Int2FloatFunction;
        composeFloat(arg0: $Float2IntFunction_): $Float2FloatFunction;
        andThenDouble(arg0: $Float2DoubleFunction_): $Int2DoubleFunction;
        composeDouble(arg0: $Double2IntFunction_): $Double2FloatFunction;
        andThenObject<T>(arg0: $Float2ObjectFunction_<T>): $Int2ObjectFunction<T>;
        composeObject<T>(arg0: $Object2IntFunction_<T>): $Object2FloatFunction<T>;
        andThenReference<T>(arg0: $Float2ReferenceFunction_<T>): $Int2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2IntFunction_<T>): $Reference2FloatFunction<T>;
    }
    /**
     * Values that may be interpreted as {@link $Int2FloatFunction}.
     */
    export type $Int2FloatFunction_ = ((arg0: number) => number);
    export class $Int2ShortFunction {
    }
    export interface $Int2ShortFunction extends $Function<number, number>, $IntUnaryOperator$1 {
        remove(arg0: number): number;
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        get(arg0: number): number;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        getOrDefault(arg0: number, arg1: number): number;
        applyAsInt(arg0: number): number;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, number>): $Function$1<T, number>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<number, T>;
        defaultReturnValue(): number;
        defaultReturnValue(arg0: number): void;
        andThenByte(arg0: $Short2ByteFunction_): $Int2ByteFunction;
        composeByte(arg0: $Byte2IntFunction_): $Byte2ShortFunction;
        andThenShort(arg0: $Short2ShortFunction_): $Int2ShortFunction;
        composeShort(arg0: $Short2IntFunction_): $Short2ShortFunction;
        andThenInt(arg0: $Short2IntFunction_): $Int2IntFunction;
        composeInt(arg0: $Int2IntFunction_): $Int2ShortFunction;
        andThenLong(arg0: $Short2LongFunction_): $Int2LongFunction;
        composeLong(arg0: $Long2IntFunction_): $Long2ShortFunction;
        andThenChar(arg0: $Short2CharFunction_): $Int2CharFunction;
        composeChar(arg0: $Char2IntFunction_): $Char2ShortFunction;
        andThenFloat(arg0: $Short2FloatFunction_): $Int2FloatFunction;
        composeFloat(arg0: $Float2IntFunction_): $Float2ShortFunction;
        andThenDouble(arg0: $Short2DoubleFunction_): $Int2DoubleFunction;
        composeDouble(arg0: $Double2IntFunction_): $Double2ShortFunction;
        andThenObject<T>(arg0: $Short2ObjectFunction_<T>): $Int2ObjectFunction<T>;
        composeObject<T>(arg0: $Object2IntFunction_<T>): $Object2ShortFunction<T>;
        andThenReference<T>(arg0: $Short2ReferenceFunction_<T>): $Int2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2IntFunction_<T>): $Reference2ShortFunction<T>;
    }
    /**
     * Values that may be interpreted as {@link $Int2ShortFunction}.
     */
    export type $Int2ShortFunction_ = ((arg0: number) => number);
    export class $IntBinaryOperator {
    }
    export interface $IntBinaryOperator extends $BinaryOperator<number>, $IntBinaryOperator$1 {
        /**
         * @deprecated
         */
        apply(arg0: number, arg1: number): number;
        apply(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        applyAsInt(arg0: number, arg1: number): number;
    }
    /**
     * Values that may be interpreted as {@link $IntBinaryOperator}.
     */
    export type $IntBinaryOperator_ = ((arg0: number, arg1: number) => number);
    export class $Int2IntMap {
    }
    export interface $Int2IntMap extends $Int2IntFunction, $Map<number, number> {
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        remove(arg0: number, arg1: number): boolean;
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
        put(arg0: number, arg1: number): number;
        values(): $IntCollection;
        clear(): void;
        replace(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        replace(arg0: number, arg1: number): number;
        replace(arg0: number, arg1: number, arg2: number): boolean;
        /**
         * @deprecated
         */
        replace(arg0: number, arg1: number, arg2: number): boolean;
        merge(arg0: number, arg1: number, arg2: $BiFunction_<number, number, number>): number;
        /**
         * @deprecated
         */
        merge(arg0: number, arg1: number, arg2: $BiFunction_<number, number, number>): number;
        /**
         * @deprecated
         */
        entrySet(): $ObjectSet<$Map$Entry<number, number>>;
        /**
         * @deprecated
         */
        putIfAbsent(arg0: number, arg1: number): number;
        putIfAbsent(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        compute(arg0: number, arg1: $BiFunction_<number, number, number>): number;
        compute(arg0: number, arg1: $BiFunction_<number, number, number>): number;
        forEach(arg0: $BiConsumer_<number, number>): void;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        computeIfAbsent(arg0: number, arg1: $IntUnaryOperator_$1): number;
        /**
         * @deprecated
         */
        computeIfAbsent(arg0: number, arg1: $Function_<number, number>): number;
        computeIfAbsent(arg0: number, arg1: $Int2IntFunction_): number;
        containsValue(arg0: number): boolean;
        /**
         * @deprecated
         */
        containsValue(arg0: $Object): boolean;
        getOrDefault(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        computeIfPresent(arg0: number, arg1: $BiFunction_<number, number, number>): number;
        /**
         * @deprecated
         */
        computeIfPresent(arg0: number, arg1: $BiFunction_<number, number, number>): number;
        defaultReturnValue(arg0: number): void;
        defaultReturnValue(): number;
        /**
         * @deprecated
         */
        computeIfAbsentPartial(arg0: number, arg1: $Int2IntFunction_): number;
        mergeInt(arg0: number, arg1: number, arg2: $IntBinaryOperator_): number;
        mergeInt(arg0: number, arg1: number, arg2: $IntBinaryOperator_$1): number;
        int2IntEntrySet(): $ObjectSet<$Int2IntMap$Entry>;
        computeIfAbsentNullable(arg0: number, arg1: $IntFunction_<number>): number;
        keySet(): $Set<number>;
    }
    export class $AbstractIntSet extends $AbstractIntCollection implements $Cloneable, $IntSet {
        remove(arg0: number): boolean;
    }
    export class $IntArrayList extends $AbstractIntList implements $RandomAccess, $Cloneable, $Serializable {
        equals(arg0: $IntArrayList): boolean;
        clone(): $IntArrayList;
        compareTo(arg0: $IntArrayList): number;
        static wrap(arg0: number[], arg1: number): $IntArrayList;
        static wrap(arg0: number[]): $IntArrayList;
        trim(arg0: number): void;
        trim(): void;
        static toList(arg0: $IntStream): $IntArrayList;
        static of(): $IntArrayList;
        static of(...arg0: number[]): $IntArrayList;
        elements(): number[];
        ensureCapacity(arg0: number): void;
        static toListWithExpectedSize(arg0: $IntStream, arg1: number): $IntArrayList;
        get(arg0: number): number;
        top(): number;
        peek(arg0: number): number;
        reversed(): $SequencedCollection<number>;
        static DEFAULT_INITIAL_CAPACITY: number;
        constructor(arg0: $IntList);
        constructor(arg0: $Iterator<number>);
        constructor(arg0: $Collection_<number>);
        constructor(arg0: number[]);
        constructor(arg0: number[], arg1: number, arg2: number);
        constructor(arg0: $IntCollection);
        constructor(arg0: $IntIterator);
        constructor(arg0: number);
        constructor();
    }
    export class $IntListIterator {
    }
    export interface $IntListIterator extends $IntBidirectionalIterator, $ListIterator<number> {
        remove(): void;
        /**
         * @deprecated
         */
        add(arg0: number): void;
        add(arg0: number): void;
        /**
         * @deprecated
         */
        set(arg0: number): void;
        set(arg0: number): void;
        next(): number;
        /**
         * @deprecated
         */
        previous(): number;
    }
    export class $IntList {
        static of(...arg0: number[]): $IntList;
        static of(): $IntList;
        static of(arg0: number, arg1: number): $IntList;
        static of(arg0: number): $IntList;
        static of(arg0: number, arg1: number, arg2: number): $IntList;
    }
    export interface $IntList extends $List<number>, $Comparable<$List<number>>, $IntCollection {
        getElements(arg0: number, arg1: number[], arg2: number, arg3: number): void;
        /**
         * @deprecated
         */
        remove(arg0: number): number;
        /**
         * @deprecated
         */
        remove(arg0: $Object): boolean;
        size(arg0: number): void;
        /**
         * @deprecated
         */
        indexOf(arg0: $Object): number;
        indexOf(arg0: number): number;
        getInt(arg0: number): number;
        lastIndexOf(arg0: number): number;
        /**
         * @deprecated
         */
        lastIndexOf(arg0: $Object): number;
        replaceAll(arg0: $IntUnaryOperator_$1): void;
        /**
         * @deprecated
         */
        replaceAll(arg0: $UnaryOperator_<number>): void;
        replaceAll(arg0: $IntUnaryOperator_): void;
        add(arg0: number): boolean;
        add(arg0: number, arg1: number): void;
        /**
         * @deprecated
         */
        add(arg0: number, arg1: number): void;
        /**
         * @deprecated
         */
        add(arg0: number): boolean;
        iterator(): $IntListIterator;
        /**
         * @deprecated
         */
        contains(arg0: $Object): boolean;
        addAll(arg0: number, arg1: $IntCollection): boolean;
        addAll(arg0: number, arg1: $IntList): boolean;
        addAll(arg0: $IntList): boolean;
        set(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        set(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        sort(arg0: $Comparator<number>): void;
        sort(arg0: $IntComparator): void;
        unstableSort(arg0: $IntComparator): void;
        /**
         * @deprecated
         */
        unstableSort(arg0: $Comparator<number>): void;
        removeInt(arg0: number): number;
        setElements(arg0: number, arg1: number[], arg2: number, arg3: number): void;
        setElements(arg0: number[]): void;
        setElements(arg0: number, arg1: number[]): void;
        removeElements(arg0: number, arg1: number): void;
        addElements(arg0: number, arg1: number[], arg2: number, arg3: number): void;
        addElements(arg0: number, arg1: number[]): void;
        get(arg0: number): number;
        subList(arg0: number, arg1: number): $List<number>;
        spliterator(): $Spliterator<number>;
        listIterator(): $ListIterator<number>;
        listIterator(arg0: number): $ListIterator<number>;
    }
    export class $IntIterator {
    }
    export interface $IntIterator extends $PrimitiveIterator$OfInt {
        /**
         * @deprecated
         */
        forEachRemaining(arg0: $Consumer_<number>): void;
        forEachRemaining(arg0: $IntConsumer_): void;
        skip(arg0: number): number;
        nextInt(): number;
        next(): number;
    }
    export class $IntBidirectionalIterable {
    }
    export interface $IntBidirectionalIterable extends $IntIterable {
        iterator(): $IntBidirectionalIterator;
    }
    /**
     * Values that may be interpreted as {@link $IntBidirectionalIterable}.
     */
    export type $IntBidirectionalIterable_ = (() => $IntBidirectionalIterator);
    export class $Int2IntMap$Entry {
    }
    export interface $Int2IntMap$Entry extends $Map$Entry<number, number> {
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
        getIntKey(): number;
        getKey(): number;
        get intValue(): number;
        get intKey(): number;
        get key(): number;
    }
    export class $Int2CharFunction {
    }
    export interface $Int2CharFunction extends $Function<number, string>, $IntUnaryOperator$1 {
        remove(arg0: number): string;
        /**
         * @deprecated
         */
        remove(arg0: $Object): string;
        /**
         * @deprecated
         */
        get(arg0: $Object): string;
        get(arg0: number): string;
        put(arg0: number, arg1: string): string;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: string): string;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: string): string;
        getOrDefault(arg0: number, arg1: string): string;
        applyAsInt(arg0: number): number;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, number>): $Function$1<T, string>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<string, T>): $Function$1<number, T>;
        defaultReturnValue(): string;
        defaultReturnValue(arg0: string): void;
        andThenByte(arg0: $Char2ByteFunction_): $Int2ByteFunction;
        composeByte(arg0: $Byte2IntFunction_): $Byte2CharFunction;
        andThenShort(arg0: $Char2ShortFunction_): $Int2ShortFunction;
        composeShort(arg0: $Short2IntFunction_): $Short2CharFunction;
        andThenInt(arg0: $Char2IntFunction_): $Int2IntFunction;
        composeInt(arg0: $Int2IntFunction_): $Int2CharFunction;
        andThenLong(arg0: $Char2LongFunction_): $Int2LongFunction;
        composeLong(arg0: $Long2IntFunction_): $Long2CharFunction;
        andThenChar(arg0: $Char2CharFunction_): $Int2CharFunction;
        composeChar(arg0: $Char2IntFunction_): $Char2CharFunction;
        andThenFloat(arg0: $Char2FloatFunction_): $Int2FloatFunction;
        composeFloat(arg0: $Float2IntFunction_): $Float2CharFunction;
        andThenDouble(arg0: $Char2DoubleFunction_): $Int2DoubleFunction;
        composeDouble(arg0: $Double2IntFunction_): $Double2CharFunction;
        andThenObject<T>(arg0: $Char2ObjectFunction_<T>): $Int2ObjectFunction<T>;
        composeObject<T>(arg0: $Object2IntFunction_<T>): $Object2CharFunction<T>;
        andThenReference<T>(arg0: $Char2ReferenceFunction_<T>): $Int2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2IntFunction_<T>): $Reference2CharFunction<T>;
    }
    /**
     * Values that may be interpreted as {@link $Int2CharFunction}.
     */
    export type $Int2CharFunction_ = ((arg0: number) => string);
    export class $Int2ObjectFunction<V> {
    }
    export interface $Int2ObjectFunction<V> extends $Function<number, V>, $IntFunction<V> {
        /**
         * @deprecated
         */
        remove(arg0: $Object): V;
        remove(arg0: number): V;
        /**
         * @deprecated
         */
        get(arg0: $Object): V;
        get(arg0: number): V;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: V): V;
        put(arg0: number, arg1: V): V;
        apply(arg0: number): V;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: number): boolean;
        getOrDefault(arg0: number, arg1: V): V;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: V): V;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, number>): $Function$1<T, V>;
        defaultReturnValue(arg0: V): void;
        defaultReturnValue(): V;
        andThenByte(arg0: $Object2ByteFunction_<V>): $Int2ByteFunction;
        composeByte(arg0: $Byte2IntFunction_): $Byte2ObjectFunction<V>;
        andThenShort(arg0: $Object2ShortFunction_<V>): $Int2ShortFunction;
        composeShort(arg0: $Short2IntFunction_): $Short2ObjectFunction<V>;
        andThenInt(arg0: $Object2IntFunction_<V>): $Int2IntFunction;
        composeInt(arg0: $Int2IntFunction_): $Int2ObjectFunction<V>;
        andThenLong(arg0: $Object2LongFunction_<V>): $Int2LongFunction;
        composeLong(arg0: $Long2IntFunction_): $Long2ObjectFunction<V>;
        andThenChar(arg0: $Object2CharFunction_<V>): $Int2CharFunction;
        composeChar(arg0: $Char2IntFunction_): $Char2ObjectFunction<V>;
        andThenFloat(arg0: $Object2FloatFunction_<V>): $Int2FloatFunction;
        composeFloat(arg0: $Float2IntFunction_): $Float2ObjectFunction<V>;
        andThenDouble(arg0: $Object2DoubleFunction_<V>): $Int2DoubleFunction;
        composeDouble(arg0: $Double2IntFunction_): $Double2ObjectFunction<V>;
        andThenObject<T>(arg0: $Object2ObjectFunction_<V, T>): $Int2ObjectFunction<T>;
        composeObject<T>(arg0: $Object2IntFunction_<T>): $Object2ObjectFunction<T, V>;
        andThenReference<T>(arg0: $Object2ReferenceFunction_<V, T>): $Int2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2IntFunction_<T>): $Reference2ObjectFunction<T, V>;
    }
    /**
     * Values that may be interpreted as {@link $Int2ObjectFunction}.
     */
    export type $Int2ObjectFunction_<V> = ((arg0: number) => V);
    export class $Int2IntFunction {
        static identity(): $Int2IntFunction;
    }
    export interface $Int2IntFunction extends $Function<number, number>, $IntUnaryOperator$1 {
        remove(arg0: number): number;
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        get(arg0: number): number;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: number): number;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: number): boolean;
        getOrDefault(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        applyAsInt(arg0: number): number;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, number>): $Function$1<T, number>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<number, T>;
        defaultReturnValue(arg0: number): void;
        defaultReturnValue(): number;
        andThenByte(arg0: $Int2ByteFunction_): $Int2ByteFunction;
        composeByte(arg0: $Byte2IntFunction_): $Byte2IntFunction;
        andThenShort(arg0: $Int2ShortFunction_): $Int2ShortFunction;
        composeShort(arg0: $Short2IntFunction_): $Short2IntFunction;
        andThenInt(arg0: $Int2IntFunction_): $Int2IntFunction;
        composeInt(arg0: $Int2IntFunction_): $Int2IntFunction;
        andThenLong(arg0: $Int2LongFunction_): $Int2LongFunction;
        composeLong(arg0: $Long2IntFunction_): $Long2IntFunction;
        andThenChar(arg0: $Int2CharFunction_): $Int2CharFunction;
        composeChar(arg0: $Char2IntFunction_): $Char2IntFunction;
        andThenFloat(arg0: $Int2FloatFunction_): $Int2FloatFunction;
        composeFloat(arg0: $Float2IntFunction_): $Float2IntFunction;
        andThenDouble(arg0: $Int2DoubleFunction_): $Int2DoubleFunction;
        composeDouble(arg0: $Double2IntFunction_): $Double2IntFunction;
        andThenObject<T>(arg0: $Int2ObjectFunction_<T>): $Int2ObjectFunction<T>;
        composeObject<T>(arg0: $Object2IntFunction_<T>): $Object2IntFunction<T>;
        andThenReference<T>(arg0: $Int2ReferenceFunction_<T>): $Int2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2IntFunction_<T>): $Reference2IntFunction<T>;
    }
    /**
     * Values that may be interpreted as {@link $Int2IntFunction}.
     */
    export type $Int2IntFunction_ = ((arg0: number) => number);
    export class $Int2ByteFunction {
    }
    export interface $Int2ByteFunction extends $Function<number, number>, $IntUnaryOperator$1 {
        remove(arg0: number): number;
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        get(arg0: number): number;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        getOrDefault(arg0: number, arg1: number): number;
        applyAsInt(arg0: number): number;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, number>): $Function$1<T, number>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<number, T>;
        defaultReturnValue(): number;
        defaultReturnValue(arg0: number): void;
        andThenByte(arg0: $Byte2ByteFunction_): $Int2ByteFunction;
        composeByte(arg0: $Byte2IntFunction_): $Byte2ByteFunction;
        andThenShort(arg0: $Byte2ShortFunction_): $Int2ShortFunction;
        composeShort(arg0: $Short2IntFunction_): $Short2ByteFunction;
        andThenInt(arg0: $Byte2IntFunction_): $Int2IntFunction;
        composeInt(arg0: $Int2IntFunction_): $Int2ByteFunction;
        andThenLong(arg0: $Byte2LongFunction_): $Int2LongFunction;
        composeLong(arg0: $Long2IntFunction_): $Long2ByteFunction;
        andThenChar(arg0: $Byte2CharFunction_): $Int2CharFunction;
        composeChar(arg0: $Char2IntFunction_): $Char2ByteFunction;
        andThenFloat(arg0: $Byte2FloatFunction_): $Int2FloatFunction;
        composeFloat(arg0: $Float2IntFunction_): $Float2ByteFunction;
        andThenDouble(arg0: $Byte2DoubleFunction_): $Int2DoubleFunction;
        composeDouble(arg0: $Double2IntFunction_): $Double2ByteFunction;
        andThenObject<T>(arg0: $Byte2ObjectFunction_<T>): $Int2ObjectFunction<T>;
        composeObject<T>(arg0: $Object2IntFunction_<T>): $Object2ByteFunction<T>;
        andThenReference<T>(arg0: $Byte2ReferenceFunction_<T>): $Int2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2IntFunction_<T>): $Reference2ByteFunction<T>;
    }
    /**
     * Values that may be interpreted as {@link $Int2ByteFunction}.
     */
    export type $Int2ByteFunction_ = ((arg0: number) => number);
    export class $Int2LongFunction {
    }
    export interface $Int2LongFunction extends $Function<number, number>, $IntToLongFunction {
        remove(arg0: number): number;
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        get(arg0: number): number;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        getOrDefault(arg0: number, arg1: number): number;
        applyAsLong(arg0: number): number;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, number>): $Function$1<T, number>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<number, T>;
        defaultReturnValue(): number;
        defaultReturnValue(arg0: number): void;
        andThenByte(arg0: $Long2ByteFunction_): $Int2ByteFunction;
        composeByte(arg0: $Byte2IntFunction_): $Byte2LongFunction;
        andThenShort(arg0: $Long2ShortFunction_): $Int2ShortFunction;
        composeShort(arg0: $Short2IntFunction_): $Short2LongFunction;
        andThenInt(arg0: $Long2IntFunction_): $Int2IntFunction;
        composeInt(arg0: $Int2IntFunction_): $Int2LongFunction;
        andThenLong(arg0: $Long2LongFunction_): $Int2LongFunction;
        composeLong(arg0: $Long2IntFunction_): $Long2LongFunction;
        andThenChar(arg0: $Long2CharFunction_): $Int2CharFunction;
        composeChar(arg0: $Char2IntFunction_): $Char2LongFunction;
        andThenFloat(arg0: $Long2FloatFunction_): $Int2FloatFunction;
        composeFloat(arg0: $Float2IntFunction_): $Float2LongFunction;
        andThenDouble(arg0: $Long2DoubleFunction_): $Int2DoubleFunction;
        composeDouble(arg0: $Double2IntFunction_): $Double2LongFunction;
        andThenObject<T>(arg0: $Long2ObjectFunction_<T>): $Int2ObjectFunction<T>;
        composeObject<T>(arg0: $Object2IntFunction_<T>): $Object2LongFunction<T>;
        andThenReference<T>(arg0: $Long2ReferenceFunction_<T>): $Int2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2IntFunction_<T>): $Reference2LongFunction<T>;
    }
    /**
     * Values that may be interpreted as {@link $Int2LongFunction}.
     */
    export type $Int2LongFunction_ = ((arg0: number) => number);
    export class $Int2DoubleFunction {
    }
    export interface $Int2DoubleFunction extends $Function<number, number>, $IntToDoubleFunction {
        remove(arg0: number): number;
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        get(arg0: number): number;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        getOrDefault(arg0: number, arg1: number): number;
        applyAsDouble(arg0: number): number;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, number>): $Function$1<T, number>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<number, T>;
        defaultReturnValue(): number;
        defaultReturnValue(arg0: number): void;
        andThenByte(arg0: $Double2ByteFunction_): $Int2ByteFunction;
        composeByte(arg0: $Byte2IntFunction_): $Byte2DoubleFunction;
        andThenShort(arg0: $Double2ShortFunction_): $Int2ShortFunction;
        composeShort(arg0: $Short2IntFunction_): $Short2DoubleFunction;
        andThenInt(arg0: $Double2IntFunction_): $Int2IntFunction;
        composeInt(arg0: $Int2IntFunction_): $Int2DoubleFunction;
        andThenLong(arg0: $Double2LongFunction_): $Int2LongFunction;
        composeLong(arg0: $Long2IntFunction_): $Long2DoubleFunction;
        andThenChar(arg0: $Double2CharFunction_): $Int2CharFunction;
        composeChar(arg0: $Char2IntFunction_): $Char2DoubleFunction;
        andThenFloat(arg0: $Double2FloatFunction_): $Int2FloatFunction;
        composeFloat(arg0: $Float2IntFunction_): $Float2DoubleFunction;
        andThenDouble(arg0: $Double2DoubleFunction_): $Int2DoubleFunction;
        composeDouble(arg0: $Double2IntFunction_): $Double2DoubleFunction;
        andThenObject<T>(arg0: $Double2ObjectFunction_<T>): $Int2ObjectFunction<T>;
        composeObject<T>(arg0: $Object2IntFunction_<T>): $Object2DoubleFunction<T>;
        andThenReference<T>(arg0: $Double2ReferenceFunction_<T>): $Int2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2IntFunction_<T>): $Reference2DoubleFunction<T>;
    }
    /**
     * Values that may be interpreted as {@link $Int2DoubleFunction}.
     */
    export type $Int2DoubleFunction_ = ((arg0: number) => number);
    export class $IntSpliterator {
    }
    export interface $IntSpliterator extends $Spliterator$OfInt {
        /**
         * @deprecated
         */
        forEachRemaining(arg0: $Consumer_<number>): void;
        forEachRemaining(arg0: $IntConsumer_): void;
        skip(arg0: number): number;
        /**
         * @deprecated
         */
        tryAdvance(arg0: $Consumer_<number>): boolean;
        tryAdvance(arg0: $IntConsumer_): boolean;
        trySplit(): $Spliterator<number>;
        getComparator(): $Comparator<number>;
        get comparator(): $Comparator<number>;
    }
    export class $IntPredicate {
    }
    export interface $IntPredicate extends $Predicate<number>, $IntPredicate$1 {
        /**
         * @deprecated
         */
        test(arg0: number): boolean;
        /**
         * @deprecated
         */
        or(arg0: $Predicate_<number>): $Predicate<number>;
        or(arg0: $IntPredicate_$1): $IntPredicate;
        or(arg0: $IntPredicate_): $IntPredicate;
        and(arg0: $IntPredicate_): $IntPredicate;
        /**
         * @deprecated
         */
        and(arg0: $Predicate_<number>): $Predicate<number>;
        negate(): $Predicate<number>;
    }
    /**
     * Values that may be interpreted as {@link $IntPredicate}.
     */
    export type $IntPredicate_ = (() => void);
    export class $AbstractIntList extends $AbstractIntCollection implements $IntList, $IntStack {
        popInt(): number;
        topInt(): number;
        peekInt(arg0: number): number;
        getElements(arg0: number, arg1: number[], arg2: number, arg3: number): void;
        size(arg0: number): void;
        compareTo(arg0: $List_<number>): number;
        indexOf(arg0: number): number;
        lastIndexOf(arg0: number): number;
        replaceAll(arg0: $IntUnaryOperator_): void;
        add(arg0: number, arg1: number): void;
        addAll(arg0: number, arg1: $IntCollection): boolean;
        addAll(arg0: number, arg1: $Collection_<number>): boolean;
        set(arg0: number, arg1: number): number;
        listIterator(): $IntListIterator;
        listIterator(arg0: number): $IntListIterator;
        push(arg0: number): void;
        removeInt(arg0: number): number;
        setElements(arg0: number, arg1: number[], arg2: number, arg3: number): void;
        removeElements(arg0: number, arg1: number): void;
        addElements(arg0: number, arg1: number[], arg2: number, arg3: number): void;
        addElements(arg0: number, arg1: number[]): void;
        /**
         * @deprecated
         */
        remove(arg0: number): number;
        /**
         * @deprecated
         */
        indexOf(arg0: $Object): number;
        /**
         * @deprecated
         */
        lastIndexOf(arg0: $Object): number;
        replaceAll(arg0: $IntUnaryOperator_$1): void;
        /**
         * @deprecated
         */
        replaceAll(arg0: $UnaryOperator_<number>): void;
        /**
         * @deprecated
         */
        add(arg0: number, arg1: number): void;
        addAll(arg0: number, arg1: $IntList): boolean;
        addAll(arg0: $IntList): boolean;
        /**
         * @deprecated
         */
        set(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        sort(arg0: $Comparator<number>): void;
        sort(arg0: $IntComparator): void;
        unstableSort(arg0: $IntComparator): void;
        /**
         * @deprecated
         */
        unstableSort(arg0: $Comparator<number>): void;
        setElements(arg0: number[]): void;
        setElements(arg0: number, arg1: number[]): void;
        /**
         * @deprecated
         */
        push(arg0: number): void;
        /**
         * @deprecated
         */
        pop(): number;
        getFirst(): number;
        getLast(): number;
        addFirst(arg0: number): void;
        addLast(arg0: number): void;
        removeFirst(): number;
        removeLast(): number;
        subList(arg0: number, arg1: number): $List<number>;
        get(arg0: number): number;
        top(): number;
        peek(arg0: number): number;
        reversed(): $SequencedCollection<number>;
        get first(): number;
        get last(): number;
    }
    export class $IntCollection {
    }
    export interface $IntCollection extends $Collection<number>, $IntIterable {
        /**
         * @deprecated
         */
        remove(arg0: $Object): boolean;
        add(arg0: number): boolean;
        /**
         * @deprecated
         */
        add(arg0: number): boolean;
        toArray(arg0: number[]): number[];
        iterator(): $IntIterator;
        /**
         * @deprecated
         */
        stream(): $Stream<number>;
        intStream(): $IntStream;
        /**
         * @deprecated
         */
        contains(arg0: $Object): boolean;
        contains(arg0: number): boolean;
        addAll(arg0: $IntCollection): boolean;
        /**
         * @deprecated
         */
        removeIf(arg0: $Predicate_<number>): boolean;
        removeIf(arg0: $IntPredicate_$1): boolean;
        removeIf(arg0: $IntPredicate_): boolean;
        removeAll(arg0: $IntCollection): boolean;
        retainAll(arg0: $IntCollection): boolean;
        containsAll(arg0: $IntCollection): boolean;
        /**
         * @deprecated
         */
        parallelStream(): $Stream<number>;
        rem(arg0: number): boolean;
        /**
         * @deprecated
         */
        toIntArray(arg0: number[]): number[];
        toIntArray(): number[];
        intSpliterator(): $IntSpliterator;
        intIterator(): $IntIterator;
        intParallelStream(): $IntStream;
        spliterator(): $Spliterator<number>;
    }
    export class $AbstractIntCollection extends $AbstractCollection<number> implements $IntCollection {
        /**
         * @deprecated
         */
        add(arg0: number): boolean;
        add(arg0: number): boolean;
        toArray(arg0: number[]): number[];
        contains(arg0: number): boolean;
        addAll(arg0: $IntCollection): boolean;
        forEach(arg0: $IntConsumer_): void;
        removeIf(arg0: $IntPredicate_): boolean;
        removeAll(arg0: $IntCollection): boolean;
        retainAll(arg0: $IntCollection): boolean;
        containsAll(arg0: $IntCollection): boolean;
        rem(arg0: number): boolean;
        /**
         * @deprecated
         */
        toIntArray(arg0: number[]): number[];
        toIntArray(): number[];
        intStream(): $IntStream;
        removeIf(arg0: $IntPredicate_$1): boolean;
        intSpliterator(): $IntSpliterator;
        intIterator(): $IntIterator;
        intParallelStream(): $IntStream;
        forEach(arg0: $IntConsumer_$1): void;
    }
    export class $Int2ObjectSortedMap<V> {
    }
    export interface $Int2ObjectSortedMap<V> extends $Int2ObjectMap<V>, $SortedMap<number, V> {
        /**
         * @deprecated
         */
        entrySet(): $ObjectSortedSet<$Map$Entry<number, V>>;
        keySet(): $IntSortedSet;
        comparator(): $IntComparator;
        /**
         * @deprecated
         */
        subMap(arg0: number, arg1: number): $Int2ObjectSortedMap<V>;
        subMap(arg0: number, arg1: number): $Int2ObjectSortedMap<V>;
        headMap(arg0: number): $Int2ObjectSortedMap<V>;
        /**
         * @deprecated
         */
        headMap(arg0: number): $Int2ObjectSortedMap<V>;
        /**
         * @deprecated
         */
        tailMap(arg0: number): $Int2ObjectSortedMap<V>;
        tailMap(arg0: number): $Int2ObjectSortedMap<V>;
        firstIntKey(): number;
        lastIntKey(): number;
        values(): $ObjectCollection<V>;
        firstKey(): number;
        lastKey(): number;
        int2ObjectEntrySet(): $ObjectSet<$Int2ObjectMap$Entry<V>>;
    }
    export class $IntIterable {
        [Symbol.iterator](): Iterator<number>
    }
    export interface $IntIterable extends $Iterable<number> {
        forEach(arg0: $IntConsumer_$1): void;
        /**
         * @deprecated
         */
        forEach(arg0: $Consumer_<number>): void;
        forEach(arg0: $IntConsumer_): void;
        intSpliterator(): $IntSpliterator;
        intIterator(): $IntIterator;
        iterator(): $Iterator<number>;
        spliterator(): $Spliterator<number>;
        [Symbol.iterator](): Iterator<number>
    }
    /**
     * Values that may be interpreted as {@link $IntIterable}.
     */
    export type $IntIterable_ = (() => $Iterator<number>);
    export class $Int2ReferenceFunction<V> {
    }
    export interface $Int2ReferenceFunction<V> extends $Function<number, V>, $IntFunction<V> {
        /**
         * @deprecated
         */
        remove(arg0: $Object): V;
        remove(arg0: number): V;
        /**
         * @deprecated
         */
        get(arg0: $Object): V;
        get(arg0: number): V;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: V): V;
        put(arg0: number, arg1: V): V;
        apply(arg0: number): V;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: number): boolean;
        getOrDefault(arg0: number, arg1: V): V;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: V): V;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, number>): $Function$1<T, V>;
        defaultReturnValue(arg0: V): void;
        defaultReturnValue(): V;
        andThenByte(arg0: $Reference2ByteFunction_<V>): $Int2ByteFunction;
        composeByte(arg0: $Byte2IntFunction_): $Byte2ReferenceFunction<V>;
        andThenShort(arg0: $Reference2ShortFunction_<V>): $Int2ShortFunction;
        composeShort(arg0: $Short2IntFunction_): $Short2ReferenceFunction<V>;
        andThenInt(arg0: $Reference2IntFunction_<V>): $Int2IntFunction;
        composeInt(arg0: $Int2IntFunction_): $Int2ReferenceFunction<V>;
        andThenLong(arg0: $Reference2LongFunction_<V>): $Int2LongFunction;
        composeLong(arg0: $Long2IntFunction_): $Long2ReferenceFunction<V>;
        andThenChar(arg0: $Reference2CharFunction_<V>): $Int2CharFunction;
        composeChar(arg0: $Char2IntFunction_): $Char2ReferenceFunction<V>;
        andThenFloat(arg0: $Reference2FloatFunction_<V>): $Int2FloatFunction;
        composeFloat(arg0: $Float2IntFunction_): $Float2ReferenceFunction<V>;
        andThenDouble(arg0: $Reference2DoubleFunction_<V>): $Int2DoubleFunction;
        composeDouble(arg0: $Double2IntFunction_): $Double2ReferenceFunction<V>;
        andThenObject<T>(arg0: $Reference2ObjectFunction_<V, T>): $Int2ObjectFunction<T>;
        composeObject<T>(arg0: $Object2IntFunction_<T>): $Object2ReferenceFunction<T, V>;
        andThenReference<T>(arg0: $Reference2ReferenceFunction_<V, T>): $Int2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2IntFunction_<T>): $Reference2ReferenceFunction<T, V>;
    }
    /**
     * Values that may be interpreted as {@link $Int2ReferenceFunction}.
     */
    export type $Int2ReferenceFunction_<V> = ((arg0: number) => V);
    export class $Int2DoubleMap {
    }
    export interface $Int2DoubleMap extends $Int2DoubleFunction, $Map<number, number> {
        int2DoubleEntrySet(): $ObjectSet<$Int2DoubleMap$Entry>;
        mergeDouble(arg0: number, arg1: number, arg2: $DoubleBinaryOperator_): number;
        mergeDouble(arg0: number, arg1: number, arg2: $DoubleBinaryOperator_$1): number;
        remove(arg0: number, arg1: number): boolean;
        /**
         * @deprecated
         */
        remove(arg0: $Object, arg1: $Object): boolean;
        size(): number;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: number): number;
        values(): $DoubleCollection;
        clear(): void;
        replace(arg0: number, arg1: number): number;
        replace(arg0: number, arg1: number, arg2: number): boolean;
        /**
         * @deprecated
         */
        replace(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        replace(arg0: number, arg1: number, arg2: number): boolean;
        /**
         * @deprecated
         */
        merge(arg0: number, arg1: number, arg2: $BiFunction_<number, number, number>): number;
        merge(arg0: number, arg1: number, arg2: $BiFunction_<number, number, number>): number;
        putIfAbsent(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        putIfAbsent(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        compute(arg0: number, arg1: $BiFunction_<number, number, number>): number;
        compute(arg0: number, arg1: $BiFunction_<number, number, number>): number;
        forEach(arg0: $BiConsumer_<number, number>): void;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: number): boolean;
        computeIfAbsent(arg0: number, arg1: $IntToDoubleFunction_): number;
        /**
         * @deprecated
         */
        computeIfAbsent(arg0: number, arg1: $Function_<number, number>): number;
        computeIfAbsent(arg0: number, arg1: $Int2DoubleFunction_): number;
        keySet(): $IntSet;
        containsValue(arg0: number): boolean;
        /**
         * @deprecated
         */
        containsValue(arg0: $Object): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        getOrDefault(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        computeIfPresent(arg0: number, arg1: $BiFunction_<number, number, number>): number;
        computeIfPresent(arg0: number, arg1: $BiFunction_<number, number, number>): number;
        defaultReturnValue(arg0: number): void;
        defaultReturnValue(): number;
        /**
         * @deprecated
         */
        computeIfAbsentPartial(arg0: number, arg1: $Int2DoubleFunction_): number;
        computeIfAbsentNullable(arg0: number, arg1: $IntFunction_<number>): number;
        remove(arg0: number): number;
        get(arg0: number): number;
        entrySet(): $Set<$Map$Entry<number, number>>;
    }
    export class $IntSortedSet {
    }
    export interface $IntSortedSet extends $IntSet, $SortedSet<number>, $IntBidirectionalIterable {
        iterator(arg0: number): $IntBidirectionalIterator;
        /**
         * @deprecated
         */
        first(): number;
        subSet(arg0: number, arg1: number): $IntSortedSet;
        /**
         * @deprecated
         */
        subSet(arg0: number, arg1: number): $IntSortedSet;
        headSet(arg0: number): $IntSortedSet;
        /**
         * @deprecated
         */
        headSet(arg0: number): $IntSortedSet;
        /**
         * @deprecated
         */
        tailSet(arg0: number): $IntSortedSet;
        tailSet(arg0: number): $IntSortedSet;
        lastInt(): number;
        firstInt(): number;
        iterator(): $IntIterator;
        last(): number;
        spliterator(): $IntSpliterator;
        comparator(): $Comparator<number>;
    }
    export class $Int2DoubleMap$Entry {
    }
    export interface $Int2DoubleMap$Entry extends $Map$Entry<number, number> {
        getDoubleValue(): number;
        /**
         * @deprecated
         */
        getValue(): number;
        /**
         * @deprecated
         */
        setValue(arg0: number): number;
        setValue(arg0: number): number;
        getIntKey(): number;
        getKey(): number;
        get doubleValue(): number;
        get intKey(): number;
        get key(): number;
    }
    export class $IntBidirectionalIterator {
    }
    export interface $IntBidirectionalIterator extends $IntIterator, $ObjectBidirectionalIterator<number> {
        skip(arg0: number): number;
        /**
         * @deprecated
         */
        previous(): number;
        back(arg0: number): number;
        previousInt(): number;
    }
    export class $IntStack {
    }
    export interface $IntStack extends $Stack<number> {
        popInt(): number;
        topInt(): number;
        peekInt(arg0: number): number;
        /**
         * @deprecated
         */
        push(arg0: number): void;
        push(arg0: number): void;
        /**
         * @deprecated
         */
        pop(): number;
        top(): number;
        peek(arg0: number): number;
    }
    export class $Int2ObjectMap<V> {
    }
    export interface $Int2ObjectMap<V> extends $Int2ObjectFunction<V>, $Map<number, V> {
        /**
         * @deprecated
         */
        remove(arg0: $Object): V;
        remove(arg0: number, arg1: $Object): boolean;
        size(): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): V;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: V): V;
        values(): $ObjectCollection<V>;
        clear(): void;
        replace(arg0: number, arg1: V, arg2: V): boolean;
        replace(arg0: number, arg1: V): V;
        merge(arg0: number, arg1: V, arg2: $BiFunction_<V, V, V>): V;
        putIfAbsent(arg0: number, arg1: V): V;
        compute(arg0: number, arg1: $BiFunction_<number, V, V>): V;
        forEach(arg0: $BiConsumer_<number, V>): void;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        computeIfAbsent(arg0: number, arg1: $Int2ObjectFunction_<V>): V;
        computeIfAbsent(arg0: number, arg1: $IntFunction_<V>): V;
        getOrDefault(arg0: number, arg1: V): V;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: V): V;
        computeIfPresent(arg0: number, arg1: $BiFunction_<number, V, V>): V;
        defaultReturnValue(arg0: V): void;
        defaultReturnValue(): V;
        /**
         * @deprecated
         */
        computeIfAbsentPartial(arg0: number, arg1: $Int2ObjectFunction_<V>): V;
        int2ObjectEntrySet(): $ObjectSet<$Int2ObjectMap$Entry<V>>;
        entrySet(): $Set<$Map$Entry<number, V>>;
        keySet(): $Set<number>;
    }
    export class $IntConsumer {
    }
    export interface $IntConsumer extends $Consumer<number>, $IntConsumer$1 {
        /**
         * @deprecated
         */
        accept(arg0: number): void;
        /**
         * @deprecated
         */
        andThen(arg0: $Consumer_<number>): $Consumer<number>;
        andThen(arg0: $IntConsumer_): $IntConsumer;
    }
    /**
     * Values that may be interpreted as {@link $IntConsumer}.
     */
    export type $IntConsumer_ = (() => void);
    export class $IntOpenHashSet extends $AbstractIntSet implements $Serializable, $Cloneable, $Hash {
        clone(): $IntOpenHashSet;
        trim(): boolean;
        trim(arg0: number): boolean;
        static of(arg0: number, arg1: number): $IntOpenHashSet;
        static of(): $IntOpenHashSet;
        static of(...arg0: number[]): $IntOpenHashSet;
        static of(arg0: number): $IntOpenHashSet;
        static of(arg0: number, arg1: number, arg2: number): $IntOpenHashSet;
        static toSet(arg0: $IntStream): $IntOpenHashSet;
        ensureCapacity(arg0: number): void;
        static toSetWithExpectedSize(arg0: $IntStream, arg1: number): $IntOpenHashSet;
        constructor(arg0: $Iterator<never>);
        constructor(arg0: $Iterator<never>, arg1: number);
        constructor(arg0: $IntIterator);
        constructor(arg0: $IntIterator, arg1: number);
        constructor(arg0: number[]);
        constructor(arg0: number[], arg1: number);
        constructor(arg0: number[], arg1: number, arg2: number);
        constructor(arg0: number[], arg1: number, arg2: number, arg3: number);
        constructor(arg0: $Collection_<number>, arg1: number);
        constructor();
        constructor(arg0: number);
        constructor(arg0: number, arg1: number);
        constructor(arg0: $IntCollection);
        constructor(arg0: $IntCollection, arg1: number);
        constructor(arg0: $Collection_<number>);
    }
    export class $IntComparator {
    }
    export interface $IntComparator extends $Comparator<number> {
        /**
         * @deprecated
         */
        compare(arg0: number, arg1: number): number;
        compare(arg0: number, arg1: number): number;
        reversed(): $IntComparator;
        thenComparing(arg0: $Comparator<number>): $Comparator<number>;
        thenComparing(arg0: $IntComparator): $IntComparator;
    }
    export class $IntSet {
        static of(arg0: number, arg1: number): $IntSet;
        static of(): $IntSet;
        static of(...arg0: number[]): $IntSet;
        static of(arg0: number): $IntSet;
        static of(arg0: number, arg1: number, arg2: number): $IntSet;
    }
    export interface $IntSet extends $IntCollection, $Set<number> {
        remove(arg0: number): boolean;
        /**
         * @deprecated
         */
        remove(arg0: $Object): boolean;
        /**
         * @deprecated
         */
        add(arg0: number): boolean;
        /**
         * @deprecated
         */
        contains(arg0: $Object): boolean;
        spliterator(): $IntSpliterator;
        /**
         * @deprecated
         */
        rem(arg0: number): boolean;
        iterator(): $IntIterator;
    }
    export class $Int2ObjectMap$Entry<V> {
    }
    export interface $Int2ObjectMap$Entry<V> extends $Map$Entry<number, V> {
        /**
         * @deprecated
         */
        getKey(): number;
        getIntKey(): number;
        get key(): number;
        get intKey(): number;
    }
}
