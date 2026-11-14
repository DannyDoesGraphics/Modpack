import { $Serializable } from "@package/java/io";
import { $Int2ByteFunction_, $Int2ShortFunction, $Int2ObjectFunction_, $Int2CharFunction, $Int2DoubleFunction_, $Int2ReferenceFunction_, $Int2IntFunction_, $Int2LongFunction_, $Int2CharFunction_, $Int2FloatFunction_, $Int2LongFunction, $Int2IntFunction, $Int2DoubleFunction, $Int2FloatFunction, $Int2ByteFunction, $Int2ObjectFunction, $Int2ReferenceFunction, $Int2BooleanFunction, $Int2ShortFunction_ } from "@package/it/unimi/dsi/fastutil/ints";
import { $Long2ReferenceFunction_, $Long2LongFunction, $Long2FloatFunction, $Long2ShortFunction, $Long2BooleanFunction, $Long2ObjectFunction, $Long2CharFunction_, $Long2ReferenceFunction, $Long2FloatFunction_, $Long2ByteFunction_, $Long2CharFunction, $Long2ObjectFunction_, $Long2ShortFunction_, $Long2IntFunction, $Long2LongFunction_, $Long2ByteFunction, $Long2IntFunction_, $Long2DoubleFunction, $Long2DoubleFunction_ } from "@package/it/unimi/dsi/fastutil/longs";
import { $Byte2ReferenceFunction, $Byte2LongFunction_, $Byte2DoubleFunction, $Byte2ShortFunction, $Byte2LongFunction, $Byte2ShortFunction_, $Byte2BooleanFunction, $Byte2ByteFunction, $Byte2IntFunction_, $Byte2ObjectFunction_, $Byte2FloatFunction, $Byte2DoubleFunction_, $Byte2CharFunction, $Byte2ObjectFunction, $Byte2ByteFunction_, $Byte2CharFunction_, $Byte2ReferenceFunction_, $Byte2IntFunction, $Byte2FloatFunction_ } from "@package/it/unimi/dsi/fastutil/bytes";
import { $Pair, $Stack, $Function } from "@package/it/unimi/dsi/fastutil";
import { $ListIterator, $Spliterator, $List, $SequencedCollection, $Collection_, $List_, $Collection, $Spliterator$OfDouble, $Comparator, $Iterator, $PrimitiveIterator$OfDouble, $AbstractCollection } from "@package/java/util";
import { $Float2LongFunction_, $Float2FloatFunction_, $Float2ShortFunction, $Float2BooleanFunction, $Float2ObjectFunction_, $Float2IntFunction, $Float2ObjectFunction, $Float2ShortFunction_, $Float2CharFunction, $Float2DoubleFunction, $Float2ReferenceFunction_, $Float2FloatFunction, $Float2IntFunction_, $Float2ReferenceFunction, $Float2CharFunction_, $Float2ByteFunction_, $Float2LongFunction, $Float2DoubleFunction_, $Float2ByteFunction } from "@package/it/unimi/dsi/fastutil/floats";
import { $DoublePredicate_ as $DoublePredicate_$1, $DoubleConsumer_ as $DoubleConsumer_$1, $DoubleUnaryOperator_ as $DoubleUnaryOperator_$1, $Function as $Function$1, $UnaryOperator, $DoubleToLongFunction, $DoubleFunction, $UnaryOperator_, $DoublePredicate as $DoublePredicate$1, $DoubleConsumer as $DoubleConsumer$1, $DoubleBinaryOperator as $DoubleBinaryOperator$1, $Consumer_, $BinaryOperator, $Predicate_, $Predicate, $DoubleToIntFunction, $DoubleUnaryOperator as $DoubleUnaryOperator$1, $Consumer, $Function_ } from "@package/java/util/function";
import { $Object2LongFunction_, $Reference2ShortFunction, $Reference2FloatFunction_, $Object2ShortFunction, $Object2ObjectFunction_, $Reference2IntFunction_, $Object2ShortFunction_, $Object2ByteFunction_, $Reference2ByteFunction_, $Object2BooleanFunction, $Object2ReferenceFunction_, $Reference2ReferenceFunction, $Reference2ObjectFunction_, $Object2CharFunction_, $Object2FloatFunction, $Reference2CharFunction, $Reference2FloatFunction, $Object2CharFunction, $Reference2DoubleFunction_, $Object2DoubleFunction, $Reference2IntFunction, $Object2IntFunction, $Object2IntFunction_, $Reference2CharFunction_, $Reference2BooleanFunction, $Object2DoubleFunction_, $Object2ReferenceFunction, $Reference2DoubleFunction, $Object2LongFunction, $Reference2LongFunction, $Reference2ShortFunction_, $Reference2ObjectFunction, $Object2FloatFunction_, $Object2ByteFunction, $Reference2ByteFunction, $Reference2ReferenceFunction_, $Reference2LongFunction_, $Object2ObjectFunction, $ObjectBidirectionalIterator } from "@package/it/unimi/dsi/fastutil/objects";
import { $Stream, $DoubleStream } from "@package/java/util/stream";
import { $Char2BooleanFunction, $Char2ObjectFunction_, $Char2LongFunction, $Char2ShortFunction_, $Char2FloatFunction, $Char2IntFunction_, $Char2DoubleFunction_, $Char2ObjectFunction, $Char2CharFunction_, $Char2IntFunction, $Char2FloatFunction_, $Char2ByteFunction_, $Char2CharFunction, $Char2ShortFunction, $Char2LongFunction_, $Char2ReferenceFunction_, $Char2DoubleFunction, $Char2ByteFunction, $Char2ReferenceFunction } from "@package/it/unimi/dsi/fastutil/chars";
import { $Boolean2FloatFunction_, $Boolean2ReferenceFunction_, $Boolean2LongFunction_, $Boolean2ShortFunction_, $Boolean2CharFunction_, $Boolean2IntFunction_, $Boolean2ObjectFunction_, $Boolean2ByteFunction_, $Boolean2DoubleFunction_ } from "@package/it/unimi/dsi/fastutil/booleans";
import { $Comparable, $Iterable, $Object } from "@package/java/lang";
import { $Short2IntFunction_, $Short2ReferenceFunction_, $Short2FloatFunction, $Short2ShortFunction, $Short2BooleanFunction, $Short2ByteFunction, $Short2ByteFunction_, $Short2CharFunction_, $Short2ObjectFunction, $Short2IntFunction, $Short2LongFunction, $Short2LongFunction_, $Short2FloatFunction_, $Short2DoubleFunction, $Short2ObjectFunction_, $Short2ReferenceFunction, $Short2ShortFunction_, $Short2DoubleFunction_, $Short2CharFunction } from "@package/it/unimi/dsi/fastutil/shorts";

declare module "@package/it/unimi/dsi/fastutil/doubles" {
    export class $DoubleStack {
    }
    export interface $DoubleStack extends $Stack<number> {
        popDouble(): number;
        topDouble(): number;
        peekDouble(arg0: number): number;
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
    export class $DoubleCollection {
    }
    export interface $DoubleCollection extends $Collection<number>, $DoubleIterable {
        /**
         * @deprecated
         */
        toDoubleArray(arg0: number[]): number[];
        toDoubleArray(): number[];
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
        iterator(): $DoubleIterator;
        /**
         * @deprecated
         */
        stream(): $Stream<number>;
        /**
         * @deprecated
         */
        contains(arg0: $Object): boolean;
        contains(arg0: number): boolean;
        addAll(arg0: $DoubleCollection): boolean;
        /**
         * @deprecated
         */
        removeIf(arg0: $Predicate_<number>): boolean;
        removeIf(arg0: $DoublePredicate_$1): boolean;
        removeIf(arg0: $DoublePredicate_): boolean;
        removeAll(arg0: $DoubleCollection): boolean;
        retainAll(arg0: $DoubleCollection): boolean;
        containsAll(arg0: $DoubleCollection): boolean;
        /**
         * @deprecated
         */
        parallelStream(): $Stream<number>;
        rem(arg0: number): boolean;
        doubleStream(): $DoubleStream;
        doubleParallelStream(): $DoubleStream;
        doubleIterator(): $DoubleIterator;
        doubleSpliterator(): $DoubleSpliterator;
        spliterator(): $Spliterator<number>;
    }
    export class $Double2IntFunction {
    }
    export interface $Double2IntFunction extends $Function<number, number>, $DoubleToIntFunction {
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
        andThenByte(arg0: $Int2ByteFunction_): $Double2ByteFunction;
        composeByte(arg0: $Byte2DoubleFunction_): $Byte2IntFunction;
        andThenShort(arg0: $Int2ShortFunction_): $Double2ShortFunction;
        composeShort(arg0: $Short2DoubleFunction_): $Short2IntFunction;
        andThenInt(arg0: $Int2IntFunction_): $Double2IntFunction;
        composeInt(arg0: $Int2DoubleFunction_): $Int2IntFunction;
        andThenLong(arg0: $Int2LongFunction_): $Double2LongFunction;
        composeLong(arg0: $Long2DoubleFunction_): $Long2IntFunction;
        andThenChar(arg0: $Int2CharFunction_): $Double2CharFunction;
        composeChar(arg0: $Char2DoubleFunction_): $Char2IntFunction;
        andThenFloat(arg0: $Int2FloatFunction_): $Double2FloatFunction;
        composeFloat(arg0: $Float2DoubleFunction_): $Float2IntFunction;
        andThenDouble(arg0: $Int2DoubleFunction_): $Double2DoubleFunction;
        composeDouble(arg0: $Double2DoubleFunction_): $Double2IntFunction;
        andThenObject<T>(arg0: $Int2ObjectFunction_<T>): $Double2ObjectFunction<T>;
        composeObject<T>(arg0: $Object2DoubleFunction_<T>): $Object2IntFunction<T>;
        andThenReference<T>(arg0: $Int2ReferenceFunction_<T>): $Double2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2DoubleFunction_<T>): $Reference2IntFunction<T>;
    }
    /**
     * Values that may be interpreted as {@link $Double2IntFunction}.
     */
    export type $Double2IntFunction_ = ((arg0: number) => number);
    export class $DoubleUnaryOperator {
        static identity(): $DoubleUnaryOperator;
        static negation(): $DoubleUnaryOperator;
    }
    export interface $DoubleUnaryOperator extends $UnaryOperator<number>, $DoubleUnaryOperator$1 {
        /**
         * @deprecated
         */
        apply(arg0: number): number;
        apply(arg0: number): number;
        /**
         * @deprecated
         */
        applyAsDouble(arg0: number): number;
    }
    /**
     * Values that may be interpreted as {@link $DoubleUnaryOperator}.
     */
    export type $DoubleUnaryOperator_ = ((arg0: number) => number);
    export class $DoubleDoubleImmutablePair implements $DoubleDoublePair, $Serializable {
        static of(arg0: number, arg1: number): $DoubleDoubleImmutablePair;
        leftDouble(): number;
        rightDouble(): number;
        firstDouble(): number;
        keyDouble(): number;
        secondDouble(): number;
        valueDouble(): number;
        /**
         * @deprecated
         */
        value(arg0: number): $DoubleDoublePair;
        value(arg0: number): $DoubleDoublePair;
        /**
         * @deprecated
         */
        first(): number;
        first(arg0: number): $DoubleDoublePair;
        /**
         * @deprecated
         */
        first(arg0: number): $DoubleDoublePair;
        second(arg0: number): $DoubleDoublePair;
        /**
         * @deprecated
         */
        second(arg0: number): $DoubleDoublePair;
        key(arg0: number): $DoubleDoublePair;
        /**
         * @deprecated
         */
        key(arg0: number): $DoubleDoublePair;
        /**
         * @deprecated
         */
        left(): number;
        left(arg0: number): $DoubleDoublePair;
        /**
         * @deprecated
         */
        left(arg0: number): $DoubleDoublePair;
        right(arg0: number): $DoubleDoublePair;
        /**
         * @deprecated
         */
        right(arg0: number): $DoubleDoublePair;
        value(): number;
        second(): number;
        key(): number;
        right(): number;
        constructor(arg0: number, arg1: number);
    }
    export class $DoubleComparator {
    }
    export interface $DoubleComparator extends $Comparator<number> {
        compare(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        compare(arg0: number, arg1: number): number;
        thenComparing(arg0: $Comparator<number>): $Comparator<number>;
        thenComparing(arg0: $DoubleComparator): $DoubleComparator;
        reversed(): $Comparator<number>;
    }
    export class $DoubleSpliterator {
    }
    export interface $DoubleSpliterator extends $Spliterator$OfDouble {
        /**
         * @deprecated
         */
        forEachRemaining(arg0: $Consumer_<number>): void;
        forEachRemaining(arg0: $DoubleConsumer_): void;
        skip(arg0: number): number;
        /**
         * @deprecated
         */
        tryAdvance(arg0: $Consumer_<number>): boolean;
        tryAdvance(arg0: $DoubleConsumer_): boolean;
        trySplit(): $Spliterator<number>;
        getComparator(): $Comparator<number>;
        get comparator(): $Comparator<number>;
    }
    export class $Double2ReferenceFunction<V> {
    }
    export interface $Double2ReferenceFunction<V> extends $Function<number, V>, $DoubleFunction<V> {
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
        andThenByte(arg0: $Reference2ByteFunction_<V>): $Double2ByteFunction;
        composeByte(arg0: $Byte2DoubleFunction_): $Byte2ReferenceFunction<V>;
        andThenShort(arg0: $Reference2ShortFunction_<V>): $Double2ShortFunction;
        composeShort(arg0: $Short2DoubleFunction_): $Short2ReferenceFunction<V>;
        andThenInt(arg0: $Reference2IntFunction_<V>): $Double2IntFunction;
        composeInt(arg0: $Int2DoubleFunction_): $Int2ReferenceFunction<V>;
        andThenLong(arg0: $Reference2LongFunction_<V>): $Double2LongFunction;
        composeLong(arg0: $Long2DoubleFunction_): $Long2ReferenceFunction<V>;
        andThenChar(arg0: $Reference2CharFunction_<V>): $Double2CharFunction;
        composeChar(arg0: $Char2DoubleFunction_): $Char2ReferenceFunction<V>;
        andThenFloat(arg0: $Reference2FloatFunction_<V>): $Double2FloatFunction;
        composeFloat(arg0: $Float2DoubleFunction_): $Float2ReferenceFunction<V>;
        andThenDouble(arg0: $Reference2DoubleFunction_<V>): $Double2DoubleFunction;
        composeDouble(arg0: $Double2DoubleFunction_): $Double2ReferenceFunction<V>;
        andThenObject<T>(arg0: $Reference2ObjectFunction_<V, T>): $Double2ObjectFunction<T>;
        composeObject<T>(arg0: $Object2DoubleFunction_<T>): $Object2ReferenceFunction<T, V>;
        andThenReference<T>(arg0: $Reference2ReferenceFunction_<V, T>): $Double2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2DoubleFunction_<T>): $Reference2ReferenceFunction<T, V>;
    }
    /**
     * Values that may be interpreted as {@link $Double2ReferenceFunction}.
     */
    export type $Double2ReferenceFunction_<V> = ((arg0: number) => V);
    export class $Double2DoubleFunction {
        static identity(): $Double2DoubleFunction;
    }
    export interface $Double2DoubleFunction extends $Function<number, number>, $DoubleUnaryOperator$1 {
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
        applyAsDouble(arg0: number): number;
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
        andThenByte(arg0: $Double2ByteFunction_): $Double2ByteFunction;
        composeByte(arg0: $Byte2DoubleFunction_): $Byte2DoubleFunction;
        andThenShort(arg0: $Double2ShortFunction_): $Double2ShortFunction;
        composeShort(arg0: $Short2DoubleFunction_): $Short2DoubleFunction;
        andThenInt(arg0: $Double2IntFunction_): $Double2IntFunction;
        composeInt(arg0: $Int2DoubleFunction_): $Int2DoubleFunction;
        andThenLong(arg0: $Double2LongFunction_): $Double2LongFunction;
        composeLong(arg0: $Long2DoubleFunction_): $Long2DoubleFunction;
        andThenChar(arg0: $Double2CharFunction_): $Double2CharFunction;
        composeChar(arg0: $Char2DoubleFunction_): $Char2DoubleFunction;
        andThenFloat(arg0: $Double2FloatFunction_): $Double2FloatFunction;
        composeFloat(arg0: $Float2DoubleFunction_): $Float2DoubleFunction;
        andThenDouble(arg0: $Double2DoubleFunction_): $Double2DoubleFunction;
        composeDouble(arg0: $Double2DoubleFunction_): $Double2DoubleFunction;
        andThenObject<T>(arg0: $Double2ObjectFunction_<T>): $Double2ObjectFunction<T>;
        composeObject<T>(arg0: $Object2DoubleFunction_<T>): $Object2DoubleFunction<T>;
        andThenReference<T>(arg0: $Double2ReferenceFunction_<T>): $Double2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2DoubleFunction_<T>): $Reference2DoubleFunction<T>;
    }
    /**
     * Values that may be interpreted as {@link $Double2DoubleFunction}.
     */
    export type $Double2DoubleFunction_ = ((arg0: number) => number);
    export class $AbstractDoubleList extends $AbstractDoubleCollection implements $DoubleList, $DoubleStack {
        popDouble(): number;
        topDouble(): number;
        peekDouble(arg0: number): number;
        removeDouble(arg0: number): number;
        getElements(arg0: number, arg1: number[], arg2: number, arg3: number): void;
        size(arg0: number): void;
        compareTo(arg0: $List_<number>): number;
        indexOf(arg0: number): number;
        lastIndexOf(arg0: number): number;
        replaceAll(arg0: $DoubleUnaryOperator_): void;
        add(arg0: number, arg1: number): void;
        subList(arg0: number, arg1: number): $DoubleList;
        iterator(): $DoubleListIterator;
        addAll(arg0: number, arg1: $Collection_<number>): boolean;
        addAll(arg0: number, arg1: $DoubleCollection): boolean;
        set(arg0: number, arg1: number): number;
        listIterator(): $DoubleListIterator;
        push(arg0: number): void;
        setElements(arg0: number, arg1: number[], arg2: number, arg3: number): void;
        removeElements(arg0: number, arg1: number): void;
        addElements(arg0: number, arg1: number[]): void;
        addElements(arg0: number, arg1: number[], arg2: number, arg3: number): void;
        /**
         * @deprecated
         */
        indexOf(arg0: $Object): number;
        /**
         * @deprecated
         */
        lastIndexOf(arg0: $Object): number;
        replaceAll(arg0: $DoubleUnaryOperator_$1): void;
        /**
         * @deprecated
         */
        replaceAll(arg0: $UnaryOperator_<number>): void;
        /**
         * @deprecated
         */
        add(arg0: number, arg1: number): void;
        addAll(arg0: number, arg1: $DoubleList): boolean;
        addAll(arg0: $DoubleList): boolean;
        /**
         * @deprecated
         */
        set(arg0: number, arg1: number): number;
        sort(arg0: $DoubleComparator): void;
        /**
         * @deprecated
         */
        sort(arg0: $Comparator<number>): void;
        /**
         * @deprecated
         */
        unstableSort(arg0: $Comparator<number>): void;
        unstableSort(arg0: $DoubleComparator): void;
        setElements(arg0: number, arg1: number[]): void;
        setElements(arg0: number[]): void;
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
        listIterator(arg0: number): $ListIterator<number>;
        /**
         * @deprecated
         */
        remove(arg0: $Object): boolean;
        get(arg0: number): number;
        top(): number;
        peek(arg0: number): number;
        reversed(): $SequencedCollection<number>;
        get first(): number;
        get last(): number;
    }
    export class $Double2BooleanFunction {
    }
    export interface $Double2BooleanFunction extends $Function<number, boolean>, $DoublePredicate$1 {
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
        andThenByte(arg0: $Boolean2ByteFunction_): $Double2ByteFunction;
        composeByte(arg0: $Byte2DoubleFunction_): $Byte2BooleanFunction;
        andThenShort(arg0: $Boolean2ShortFunction_): $Double2ShortFunction;
        composeShort(arg0: $Short2DoubleFunction_): $Short2BooleanFunction;
        andThenInt(arg0: $Boolean2IntFunction_): $Double2IntFunction;
        composeInt(arg0: $Int2DoubleFunction_): $Int2BooleanFunction;
        andThenLong(arg0: $Boolean2LongFunction_): $Double2LongFunction;
        composeLong(arg0: $Long2DoubleFunction_): $Long2BooleanFunction;
        andThenChar(arg0: $Boolean2CharFunction_): $Double2CharFunction;
        composeChar(arg0: $Char2DoubleFunction_): $Char2BooleanFunction;
        andThenFloat(arg0: $Boolean2FloatFunction_): $Double2FloatFunction;
        composeFloat(arg0: $Float2DoubleFunction_): $Float2BooleanFunction;
        andThenDouble(arg0: $Boolean2DoubleFunction_): $Double2DoubleFunction;
        composeDouble(arg0: $Double2DoubleFunction_): $Double2BooleanFunction;
        andThenObject<T>(arg0: $Boolean2ObjectFunction_<T>): $Double2ObjectFunction<T>;
        composeObject<T>(arg0: $Object2DoubleFunction_<T>): $Object2BooleanFunction<T>;
        andThenReference<T>(arg0: $Boolean2ReferenceFunction_<T>): $Double2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2DoubleFunction_<T>): $Reference2BooleanFunction<T>;
    }
    /**
     * Values that may be interpreted as {@link $Double2BooleanFunction}.
     */
    export type $Double2BooleanFunction_ = ((arg0: number) => boolean);
    export class $DoubleConsumer {
    }
    export interface $DoubleConsumer extends $Consumer<number>, $DoubleConsumer$1 {
        /**
         * @deprecated
         */
        accept(arg0: number): void;
        /**
         * @deprecated
         */
        andThen(arg0: $Consumer_<number>): $Consumer<number>;
        andThen(arg0: $DoubleConsumer_): $DoubleConsumer;
    }
    /**
     * Values that may be interpreted as {@link $DoubleConsumer}.
     */
    export type $DoubleConsumer_ = (() => void);
    export class $Double2ObjectFunction<V> {
    }
    export interface $Double2ObjectFunction<V> extends $Function<number, V>, $DoubleFunction<V> {
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
        andThenByte(arg0: $Object2ByteFunction_<V>): $Double2ByteFunction;
        composeByte(arg0: $Byte2DoubleFunction_): $Byte2ObjectFunction<V>;
        andThenShort(arg0: $Object2ShortFunction_<V>): $Double2ShortFunction;
        composeShort(arg0: $Short2DoubleFunction_): $Short2ObjectFunction<V>;
        andThenInt(arg0: $Object2IntFunction_<V>): $Double2IntFunction;
        composeInt(arg0: $Int2DoubleFunction_): $Int2ObjectFunction<V>;
        andThenLong(arg0: $Object2LongFunction_<V>): $Double2LongFunction;
        composeLong(arg0: $Long2DoubleFunction_): $Long2ObjectFunction<V>;
        andThenChar(arg0: $Object2CharFunction_<V>): $Double2CharFunction;
        composeChar(arg0: $Char2DoubleFunction_): $Char2ObjectFunction<V>;
        andThenFloat(arg0: $Object2FloatFunction_<V>): $Double2FloatFunction;
        composeFloat(arg0: $Float2DoubleFunction_): $Float2ObjectFunction<V>;
        andThenDouble(arg0: $Object2DoubleFunction_<V>): $Double2DoubleFunction;
        composeDouble(arg0: $Double2DoubleFunction_): $Double2ObjectFunction<V>;
        andThenObject<T>(arg0: $Object2ObjectFunction_<V, T>): $Double2ObjectFunction<T>;
        composeObject<T>(arg0: $Object2DoubleFunction_<T>): $Object2ObjectFunction<T, V>;
        andThenReference<T>(arg0: $Object2ReferenceFunction_<V, T>): $Double2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2DoubleFunction_<T>): $Reference2ObjectFunction<T, V>;
    }
    /**
     * Values that may be interpreted as {@link $Double2ObjectFunction}.
     */
    export type $Double2ObjectFunction_<V> = ((arg0: number) => V);
    export class $DoubleIterator {
    }
    export interface $DoubleIterator extends $PrimitiveIterator$OfDouble {
        /**
         * @deprecated
         */
        forEachRemaining(arg0: $Consumer_<number>): void;
        forEachRemaining(arg0: $DoubleConsumer_): void;
        skip(arg0: number): number;
        nextDouble(): number;
        next(): number;
    }
    export class $DoublePredicate {
    }
    export interface $DoublePredicate extends $Predicate<number>, $DoublePredicate$1 {
        /**
         * @deprecated
         */
        test(arg0: number): boolean;
        /**
         * @deprecated
         */
        or(arg0: $Predicate_<number>): $Predicate<number>;
        or(arg0: $DoublePredicate_$1): $DoublePredicate;
        or(arg0: $DoublePredicate_): $DoublePredicate;
        and(arg0: $DoublePredicate_): $DoublePredicate;
        /**
         * @deprecated
         */
        and(arg0: $Predicate_<number>): $Predicate<number>;
        negate(): $Predicate<number>;
    }
    /**
     * Values that may be interpreted as {@link $DoublePredicate}.
     */
    export type $DoublePredicate_ = (() => void);
    export class $AbstractDoubleCollection extends $AbstractCollection<number> implements $DoubleCollection {
        toDoubleArray(): number[];
        /**
         * @deprecated
         */
        toDoubleArray(arg0: number[]): number[];
        /**
         * @deprecated
         */
        add(arg0: number): boolean;
        add(arg0: number): boolean;
        toArray(arg0: number[]): number[];
        contains(arg0: number): boolean;
        addAll(arg0: $DoubleCollection): boolean;
        forEach(arg0: $DoubleConsumer_): void;
        removeIf(arg0: $DoublePredicate_): boolean;
        removeAll(arg0: $DoubleCollection): boolean;
        retainAll(arg0: $DoubleCollection): boolean;
        containsAll(arg0: $DoubleCollection): boolean;
        rem(arg0: number): boolean;
        removeIf(arg0: $DoublePredicate_$1): boolean;
        doubleStream(): $DoubleStream;
        doubleParallelStream(): $DoubleStream;
        doubleIterator(): $DoubleIterator;
        doubleSpliterator(): $DoubleSpliterator;
        forEach(arg0: $DoubleConsumer_$1): void;
    }
    export class $Double2FloatFunction {
    }
    export interface $Double2FloatFunction extends $Function<number, number>, $DoubleUnaryOperator$1 {
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
        andThenByte(arg0: $Float2ByteFunction_): $Double2ByteFunction;
        composeByte(arg0: $Byte2DoubleFunction_): $Byte2FloatFunction;
        andThenShort(arg0: $Float2ShortFunction_): $Double2ShortFunction;
        composeShort(arg0: $Short2DoubleFunction_): $Short2FloatFunction;
        andThenInt(arg0: $Float2IntFunction_): $Double2IntFunction;
        composeInt(arg0: $Int2DoubleFunction_): $Int2FloatFunction;
        andThenLong(arg0: $Float2LongFunction_): $Double2LongFunction;
        composeLong(arg0: $Long2DoubleFunction_): $Long2FloatFunction;
        andThenChar(arg0: $Float2CharFunction_): $Double2CharFunction;
        composeChar(arg0: $Char2DoubleFunction_): $Char2FloatFunction;
        andThenFloat(arg0: $Float2FloatFunction_): $Double2FloatFunction;
        composeFloat(arg0: $Float2DoubleFunction_): $Float2FloatFunction;
        andThenDouble(arg0: $Float2DoubleFunction_): $Double2DoubleFunction;
        composeDouble(arg0: $Double2DoubleFunction_): $Double2FloatFunction;
        andThenObject<T>(arg0: $Float2ObjectFunction_<T>): $Double2ObjectFunction<T>;
        composeObject<T>(arg0: $Object2DoubleFunction_<T>): $Object2FloatFunction<T>;
        andThenReference<T>(arg0: $Float2ReferenceFunction_<T>): $Double2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2DoubleFunction_<T>): $Reference2FloatFunction<T>;
    }
    /**
     * Values that may be interpreted as {@link $Double2FloatFunction}.
     */
    export type $Double2FloatFunction_ = ((arg0: number) => number);
    export class $DoubleDoublePair {
        static of(arg0: number, arg1: number): $DoubleDoublePair;
        static lexComparator(): $Comparator<$DoubleDoublePair>;
    }
    export interface $DoubleDoublePair extends $Pair<number, number> {
        firstDouble(): number;
        keyDouble(): number;
        secondDouble(): number;
        valueDouble(): number;
        /**
         * @deprecated
         */
        value(arg0: number): $DoubleDoublePair;
        value(arg0: number): $DoubleDoublePair;
        /**
         * @deprecated
         */
        first(): number;
        first(arg0: number): $DoubleDoublePair;
        /**
         * @deprecated
         */
        first(arg0: number): $DoubleDoublePair;
        second(arg0: number): $DoubleDoublePair;
        /**
         * @deprecated
         */
        second(arg0: number): $DoubleDoublePair;
        key(arg0: number): $DoubleDoublePair;
        /**
         * @deprecated
         */
        key(arg0: number): $DoubleDoublePair;
        /**
         * @deprecated
         */
        left(): number;
        left(arg0: number): $DoubleDoublePair;
        /**
         * @deprecated
         */
        left(arg0: number): $DoubleDoublePair;
        right(arg0: number): $DoubleDoublePair;
        /**
         * @deprecated
         */
        right(arg0: number): $DoubleDoublePair;
        leftDouble(): number;
        rightDouble(): number;
        value(): number;
        second(): number;
        key(): number;
        right(): number;
    }
    export class $DoubleListIterator {
    }
    export interface $DoubleListIterator extends $DoubleBidirectionalIterator, $ListIterator<number> {
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
        previous(): number;
    }
    export class $Double2ShortFunction {
    }
    export interface $Double2ShortFunction extends $Function<number, number>, $DoubleToIntFunction {
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
        andThenByte(arg0: $Short2ByteFunction_): $Double2ByteFunction;
        composeByte(arg0: $Byte2DoubleFunction_): $Byte2ShortFunction;
        andThenShort(arg0: $Short2ShortFunction_): $Double2ShortFunction;
        composeShort(arg0: $Short2DoubleFunction_): $Short2ShortFunction;
        andThenInt(arg0: $Short2IntFunction_): $Double2IntFunction;
        composeInt(arg0: $Int2DoubleFunction_): $Int2ShortFunction;
        andThenLong(arg0: $Short2LongFunction_): $Double2LongFunction;
        composeLong(arg0: $Long2DoubleFunction_): $Long2ShortFunction;
        andThenChar(arg0: $Short2CharFunction_): $Double2CharFunction;
        composeChar(arg0: $Char2DoubleFunction_): $Char2ShortFunction;
        andThenFloat(arg0: $Short2FloatFunction_): $Double2FloatFunction;
        composeFloat(arg0: $Float2DoubleFunction_): $Float2ShortFunction;
        andThenDouble(arg0: $Short2DoubleFunction_): $Double2DoubleFunction;
        composeDouble(arg0: $Double2DoubleFunction_): $Double2ShortFunction;
        andThenObject<T>(arg0: $Short2ObjectFunction_<T>): $Double2ObjectFunction<T>;
        composeObject<T>(arg0: $Object2DoubleFunction_<T>): $Object2ShortFunction<T>;
        andThenReference<T>(arg0: $Short2ReferenceFunction_<T>): $Double2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2DoubleFunction_<T>): $Reference2ShortFunction<T>;
    }
    /**
     * Values that may be interpreted as {@link $Double2ShortFunction}.
     */
    export type $Double2ShortFunction_ = ((arg0: number) => number);
    export class $DoubleBinaryOperator {
    }
    export interface $DoubleBinaryOperator extends $BinaryOperator<number>, $DoubleBinaryOperator$1 {
        /**
         * @deprecated
         */
        apply(arg0: number, arg1: number): number;
        apply(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        applyAsDouble(arg0: number, arg1: number): number;
    }
    /**
     * Values that may be interpreted as {@link $DoubleBinaryOperator}.
     */
    export type $DoubleBinaryOperator_ = ((arg0: number, arg1: number) => number);
    export class $Double2ByteFunction {
    }
    export interface $Double2ByteFunction extends $Function<number, number>, $DoubleToIntFunction {
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
        andThenByte(arg0: $Byte2ByteFunction_): $Double2ByteFunction;
        composeByte(arg0: $Byte2DoubleFunction_): $Byte2ByteFunction;
        andThenShort(arg0: $Byte2ShortFunction_): $Double2ShortFunction;
        composeShort(arg0: $Short2DoubleFunction_): $Short2ByteFunction;
        andThenInt(arg0: $Byte2IntFunction_): $Double2IntFunction;
        composeInt(arg0: $Int2DoubleFunction_): $Int2ByteFunction;
        andThenLong(arg0: $Byte2LongFunction_): $Double2LongFunction;
        composeLong(arg0: $Long2DoubleFunction_): $Long2ByteFunction;
        andThenChar(arg0: $Byte2CharFunction_): $Double2CharFunction;
        composeChar(arg0: $Char2DoubleFunction_): $Char2ByteFunction;
        andThenFloat(arg0: $Byte2FloatFunction_): $Double2FloatFunction;
        composeFloat(arg0: $Float2DoubleFunction_): $Float2ByteFunction;
        andThenDouble(arg0: $Byte2DoubleFunction_): $Double2DoubleFunction;
        composeDouble(arg0: $Double2DoubleFunction_): $Double2ByteFunction;
        andThenObject<T>(arg0: $Byte2ObjectFunction_<T>): $Double2ObjectFunction<T>;
        composeObject<T>(arg0: $Object2DoubleFunction_<T>): $Object2ByteFunction<T>;
        andThenReference<T>(arg0: $Byte2ReferenceFunction_<T>): $Double2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2DoubleFunction_<T>): $Reference2ByteFunction<T>;
    }
    /**
     * Values that may be interpreted as {@link $Double2ByteFunction}.
     */
    export type $Double2ByteFunction_ = ((arg0: number) => number);
    export class $DoubleList {
        static of(...arg0: number[]): $DoubleList;
        static of(): $DoubleList;
        static of(arg0: number, arg1: number): $DoubleList;
        static of(arg0: number): $DoubleList;
        static of(arg0: number, arg1: number, arg2: number): $DoubleList;
        [Symbol.iterator](): Iterator<number>
    }
    export interface $DoubleList extends $List<number>, $Comparable<$List<number>>, $DoubleCollection {
        removeDouble(arg0: number): number;
        getElements(arg0: number, arg1: number[], arg2: number, arg3: number): void;
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
        getDouble(arg0: number): number;
        /**
         * @deprecated
         */
        lastIndexOf(arg0: $Object): number;
        lastIndexOf(arg0: number): number;
        replaceAll(arg0: $DoubleUnaryOperator_): void;
        replaceAll(arg0: $DoubleUnaryOperator_$1): void;
        /**
         * @deprecated
         */
        replaceAll(arg0: $UnaryOperator_<number>): void;
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
        /**
         * @deprecated
         */
        contains(arg0: $Object): boolean;
        addAll(arg0: number, arg1: $DoubleCollection): boolean;
        addAll(arg0: number, arg1: $DoubleList): boolean;
        addAll(arg0: $DoubleList): boolean;
        set(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        set(arg0: number, arg1: number): number;
        sort(arg0: $DoubleComparator): void;
        /**
         * @deprecated
         */
        sort(arg0: $Comparator<number>): void;
        /**
         * @deprecated
         */
        unstableSort(arg0: $Comparator<number>): void;
        unstableSort(arg0: $DoubleComparator): void;
        setElements(arg0: number, arg1: number[]): void;
        setElements(arg0: number, arg1: number[], arg2: number, arg3: number): void;
        setElements(arg0: number[]): void;
        removeElements(arg0: number, arg1: number): void;
        addElements(arg0: number, arg1: number[], arg2: number, arg3: number): void;
        addElements(arg0: number, arg1: number[]): void;
        get(arg0: number): number;
        subList(arg0: number, arg1: number): $List<number>;
        iterator(): $Iterator<number>;
        spliterator(): $Spliterator<number>;
        listIterator(): $ListIterator<number>;
        listIterator(arg0: number): $ListIterator<number>;
        [Symbol.iterator](): Iterator<number>
    }
    export class $DoubleIterable {
        [Symbol.iterator](): Iterator<number>
    }
    export interface $DoubleIterable extends $Iterable<number> {
        forEach(arg0: $DoubleConsumer_$1): void;
        /**
         * @deprecated
         */
        forEach(arg0: $Consumer_<number>): void;
        forEach(arg0: $DoubleConsumer_): void;
        doubleIterator(): $DoubleIterator;
        doubleSpliterator(): $DoubleSpliterator;
        iterator(): $Iterator<number>;
        spliterator(): $Spliterator<number>;
        [Symbol.iterator](): Iterator<number>
    }
    /**
     * Values that may be interpreted as {@link $DoubleIterable}.
     */
    export type $DoubleIterable_ = (() => $Iterator<number>);
    export class $Double2CharFunction {
    }
    export interface $Double2CharFunction extends $Function<number, string>, $DoubleToIntFunction {
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
        andThenByte(arg0: $Char2ByteFunction_): $Double2ByteFunction;
        composeByte(arg0: $Byte2DoubleFunction_): $Byte2CharFunction;
        andThenShort(arg0: $Char2ShortFunction_): $Double2ShortFunction;
        composeShort(arg0: $Short2DoubleFunction_): $Short2CharFunction;
        andThenInt(arg0: $Char2IntFunction_): $Double2IntFunction;
        composeInt(arg0: $Int2DoubleFunction_): $Int2CharFunction;
        andThenLong(arg0: $Char2LongFunction_): $Double2LongFunction;
        composeLong(arg0: $Long2DoubleFunction_): $Long2CharFunction;
        andThenChar(arg0: $Char2CharFunction_): $Double2CharFunction;
        composeChar(arg0: $Char2DoubleFunction_): $Char2CharFunction;
        andThenFloat(arg0: $Char2FloatFunction_): $Double2FloatFunction;
        composeFloat(arg0: $Float2DoubleFunction_): $Float2CharFunction;
        andThenDouble(arg0: $Char2DoubleFunction_): $Double2DoubleFunction;
        composeDouble(arg0: $Double2DoubleFunction_): $Double2CharFunction;
        andThenObject<T>(arg0: $Char2ObjectFunction_<T>): $Double2ObjectFunction<T>;
        composeObject<T>(arg0: $Object2DoubleFunction_<T>): $Object2CharFunction<T>;
        andThenReference<T>(arg0: $Char2ReferenceFunction_<T>): $Double2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2DoubleFunction_<T>): $Reference2CharFunction<T>;
    }
    /**
     * Values that may be interpreted as {@link $Double2CharFunction}.
     */
    export type $Double2CharFunction_ = ((arg0: number) => string);
    export class $Double2LongFunction {
    }
    export interface $Double2LongFunction extends $Function<number, number>, $DoubleToLongFunction {
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
        andThenByte(arg0: $Long2ByteFunction_): $Double2ByteFunction;
        composeByte(arg0: $Byte2DoubleFunction_): $Byte2LongFunction;
        andThenShort(arg0: $Long2ShortFunction_): $Double2ShortFunction;
        composeShort(arg0: $Short2DoubleFunction_): $Short2LongFunction;
        andThenInt(arg0: $Long2IntFunction_): $Double2IntFunction;
        composeInt(arg0: $Int2DoubleFunction_): $Int2LongFunction;
        andThenLong(arg0: $Long2LongFunction_): $Double2LongFunction;
        composeLong(arg0: $Long2DoubleFunction_): $Long2LongFunction;
        andThenChar(arg0: $Long2CharFunction_): $Double2CharFunction;
        composeChar(arg0: $Char2DoubleFunction_): $Char2LongFunction;
        andThenFloat(arg0: $Long2FloatFunction_): $Double2FloatFunction;
        composeFloat(arg0: $Float2DoubleFunction_): $Float2LongFunction;
        andThenDouble(arg0: $Long2DoubleFunction_): $Double2DoubleFunction;
        composeDouble(arg0: $Double2DoubleFunction_): $Double2LongFunction;
        andThenObject<T>(arg0: $Long2ObjectFunction_<T>): $Double2ObjectFunction<T>;
        composeObject<T>(arg0: $Object2DoubleFunction_<T>): $Object2LongFunction<T>;
        andThenReference<T>(arg0: $Long2ReferenceFunction_<T>): $Double2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2DoubleFunction_<T>): $Reference2LongFunction<T>;
    }
    /**
     * Values that may be interpreted as {@link $Double2LongFunction}.
     */
    export type $Double2LongFunction_ = ((arg0: number) => number);
    export class $DoubleBidirectionalIterator {
    }
    export interface $DoubleBidirectionalIterator extends $DoubleIterator, $ObjectBidirectionalIterator<number> {
        previousDouble(): number;
        skip(arg0: number): number;
        back(arg0: number): number;
        previous(): number;
    }
}
