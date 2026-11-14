import { $DoublePredicate_, $IntToDoubleFunction_, $LongPredicate_, $LongToIntFunction_, $BiConsumer, $Consumer, $IntConsumer, $BiConsumer_, $IntPredicate_, $DoubleFunction_, $IntFunction_, $ToDoubleFunction_, $LongConsumer_, $IntToLongFunction_, $LongFunction_, $LongConsumer, $Supplier_, $IntUnaryOperator_, $ObjIntConsumer_, $Function_, $DoubleConsumer_, $BinaryOperator_, $LongSupplier_, $DoubleBinaryOperator_, $ObjDoubleConsumer_, $ObjLongConsumer_, $IntConsumer_, $LongBinaryOperator_, $Consumer_, $BinaryOperator, $DoubleToLongFunction_, $UnaryOperator_, $DoubleUnaryOperator_, $IntBinaryOperator_, $Predicate_, $BiFunction_, $DoubleSupplier_, $IntSupplier_, $LongToDoubleFunction_, $Function, $Supplier, $DoubleConsumer, $ToLongFunction_, $LongUnaryOperator_, $ToIntFunction_, $DoubleToIntFunction_ } from "@package/java/util/function";
import { $Enum, $AutoCloseable, $Runnable_, $Object } from "@package/java/lang";
import { $Spliterator$OfInt, $Spliterator, $Iterator, $List, $Spliterator$OfDouble, $LongSummaryStatistics, $PrimitiveIterator$OfLong, $OptionalDouble, $PrimitiveIterator$OfInt, $IntSummaryStatistics, $OptionalLong, $Comparator, $PrimitiveIterator$OfDouble, $DoubleSummaryStatistics, $Set, $OptionalInt } from "@package/java/util";

declare module "@package/java/util/stream" {
    export class $BaseStream<T, S extends $BaseStream<T, S>> {
    }
    export interface $BaseStream<T, S extends $BaseStream<T, S>> extends $AutoCloseable {
        iterator(): $Iterator<T>;
        spliterator(): $Spliterator<T>;
        close(): void;
        parallel(): S;
        onClose(arg0: $Runnable_): S;
        sequential(): S;
        isParallel(): boolean;
        unordered(): S;
    }
    export class $IntStream$IntMapMultiConsumer {
    }
    export interface $IntStream$IntMapMultiConsumer {
        accept(arg0: number, arg1: $IntConsumer_): void;
    }
    /**
     * Values that may be interpreted as {@link $IntStream$IntMapMultiConsumer}.
     */
    export type $IntStream$IntMapMultiConsumer_ = ((arg0: number, arg1: $IntConsumer) => void);
    export class $LongStream$LongMapMultiConsumer {
    }
    export interface $LongStream$LongMapMultiConsumer {
        accept(arg0: number, arg1: $LongConsumer_): void;
    }
    /**
     * Values that may be interpreted as {@link $LongStream$LongMapMultiConsumer}.
     */
    export type $LongStream$LongMapMultiConsumer_ = ((arg0: number, arg1: $LongConsumer) => void);
    export class $DoubleStream$DoubleMapMultiConsumer {
    }
    export interface $DoubleStream$DoubleMapMultiConsumer {
        accept(arg0: number, arg1: $DoubleConsumer_): void;
    }
    /**
     * Values that may be interpreted as {@link $DoubleStream$DoubleMapMultiConsumer}.
     */
    export type $DoubleStream$DoubleMapMultiConsumer_ = ((arg0: number, arg1: $DoubleConsumer) => void);
    export class $IntStream {
        static of(...arg0: number[]): $IntStream;
        static of(arg0: number): $IntStream;
        static builder(): $IntStream$Builder;
        static concat(arg0: $IntStream, arg1: $IntStream): $IntStream;
        static empty(): $IntStream;
        static range(arg0: number, arg1: number): $IntStream;
        static iterate(arg0: number, arg1: $IntUnaryOperator_): $IntStream;
        static iterate(arg0: number, arg1: $IntPredicate_, arg2: $IntUnaryOperator_): $IntStream;
        static generate(arg0: $IntSupplier_): $IntStream;
        static rangeClosed(arg0: number, arg1: number): $IntStream;
    }
    export interface $IntStream extends $BaseStream<number, $IntStream> {
        average(): $OptionalDouble;
        summaryStatistics(): $IntSummaryStatistics;
        asLongStream(): $LongStream;
        asDoubleStream(): $DoubleStream;
        min(): $OptionalInt;
        max(): $OptionalInt;
        toArray(): number[];
        iterator(): $PrimitiveIterator$OfInt;
        map(arg0: $IntUnaryOperator_): $IntStream;
        collect<R>(arg0: $Supplier_<R>, arg1: $ObjIntConsumer_<R>, arg2: $BiConsumer_<R, R>): R;
        count(): number;
        limit(arg0: number): $IntStream;
        spliterator(): $Spliterator$OfInt;
        filter(arg0: $IntPredicate_): $IntStream;
        anyMatch(arg0: $IntPredicate_): boolean;
        flatMap(arg0: $IntFunction_<$IntStream>): $IntStream;
        forEach(arg0: $IntConsumer_): void;
        findAny(): $OptionalInt;
        skip(arg0: number): $IntStream;
        peek(arg0: $IntConsumer_): $IntStream;
        sum(): number;
        reduce(arg0: $IntBinaryOperator_): $OptionalInt;
        reduce(arg0: number, arg1: $IntBinaryOperator_): number;
        distinct(): $IntStream;
        findFirst(): $OptionalInt;
        allMatch(arg0: $IntPredicate_): boolean;
        noneMatch(arg0: $IntPredicate_): boolean;
        sorted(): $IntStream;
        mapToObj<U>(arg0: $IntFunction_<U>): $Stream<U>;
        forEachOrdered(arg0: $IntConsumer_): void;
        boxed(): $Stream<number>;
        mapToLong(arg0: $IntToLongFunction_): $LongStream;
        mapToDouble(arg0: $IntToDoubleFunction_): $DoubleStream;
        mapMulti(arg0: $IntStream$IntMapMultiConsumer_): $IntStream;
        takeWhile(arg0: $IntPredicate_): $IntStream;
        dropWhile(arg0: $IntPredicate_): $IntStream;
        parallel(): $IntStream;
        sequential(): $IntStream;
    }
    export class $Stream$Builder<T> {
    }
    export interface $Stream$Builder<T> extends $Consumer<T> {
        add(arg0: T): $Stream$Builder<T>;
        accept(arg0: T): void;
        build(): $Stream<T>;
    }
    export class $LongStream$Builder {
    }
    export interface $LongStream$Builder extends $LongConsumer {
        add(arg0: number): $LongStream$Builder;
        accept(arg0: number): void;
        build(): $LongStream;
    }
    export class $DoubleStream$Builder {
    }
    export interface $DoubleStream$Builder extends $DoubleConsumer {
        add(arg0: number): $DoubleStream$Builder;
        accept(arg0: number): void;
        build(): $DoubleStream;
    }
    export class $Collector<T, A, R> {
        static of<T, A, R>(arg0: $Supplier_<A>, arg1: $BiConsumer_<A, T>, arg2: $BinaryOperator_<A>, arg3: $Function_<A, R>, ...arg4: $Collector$Characteristics_[]): $Collector<T, A, R>;
        static of<T, R>(arg0: $Supplier_<R>, arg1: $BiConsumer_<R, T>, arg2: $BinaryOperator_<R>, ...arg3: $Collector$Characteristics_[]): $Collector<T, R, R>;
    }
    export interface $Collector<T, A, R> {
        characteristics(): $Set<$Collector$Characteristics>;
        combiner(): $BinaryOperator<A>;
        supplier(): $Supplier<A>;
        accumulator(): $BiConsumer<A, T>;
        finisher(): $Function<A, R>;
    }
    export class $Stream<T> {
        static of<T>(...arg0: T[]): $Stream<T>;
        static of<T>(arg0: T): $Stream<T>;
        static builder<T>(): $Stream$Builder<T>;
        static concat<T>(arg0: $Stream<T>, arg1: $Stream<T>): $Stream<T>;
        static empty<T>(): $Stream<T>;
        static iterate<T>(arg0: T, arg1: $UnaryOperator_<T>): $Stream<T>;
        static iterate<T>(arg0: T, arg1: $Predicate_<T>, arg2: $UnaryOperator_<T>): $Stream<T>;
        static ofNullable<T>(arg0: T): $Stream<T>;
        static generate<T>(arg0: $Supplier_<T>): $Stream<T>;
    }
    export interface $Stream<T> extends $BaseStream<T, $Stream<T>> {
        min(arg0: $Comparator<T>): (T) | undefined;
        max(arg0: $Comparator<T>): (T) | undefined;
        toArray(): $Object[];
        toArray<A>(arg0: $IntFunction_<A[]>): A[];
        map<R>(arg0: $Function_<T, R>): $Stream<R>;
        collect<R>(arg0: $Supplier_<R>, arg1: $BiConsumer_<R, T>, arg2: $BiConsumer_<R, R>): R;
        collect<R, A>(arg0: $Collector<T, A, R>): R;
        toList(): $List<T>;
        count(): number;
        limit(arg0: number): $Stream<T>;
        filter(arg0: $Predicate_<T>): $Stream<T>;
        anyMatch(arg0: $Predicate_<T>): boolean;
        flatMap<R>(arg0: $Function_<T, $Stream<R>>): $Stream<R>;
        forEach(arg0: $Consumer_<T>): void;
        findAny(): (T) | undefined;
        skip(arg0: number): $Stream<T>;
        peek(arg0: $Consumer_<T>): $Stream<T>;
        reduce<U>(arg0: U, arg1: $BiFunction_<U, T, U>, arg2: $BinaryOperator_<U>): U;
        reduce(arg0: T, arg1: $BinaryOperator_<T>): T;
        reduce(arg0: $BinaryOperator_<T>): (T) | undefined;
        distinct(): $Stream<T>;
        findFirst(): (T) | undefined;
        allMatch(arg0: $Predicate_<T>): boolean;
        noneMatch(arg0: $Predicate_<T>): boolean;
        sorted(arg0: $Comparator<T>): $Stream<T>;
        sorted(): $Stream<T>;
        forEachOrdered(arg0: $Consumer_<T>): void;
        mapToInt(arg0: $ToIntFunction_<T>): $IntStream;
        mapToLong(arg0: $ToLongFunction_<T>): $LongStream;
        mapToDouble(arg0: $ToDoubleFunction_<T>): $DoubleStream;
        flatMapToInt(arg0: $Function_<T, $IntStream>): $IntStream;
        flatMapToDouble(arg0: $Function_<T, $DoubleStream>): $DoubleStream;
        flatMapToLong(arg0: $Function_<T, $LongStream>): $LongStream;
        mapMulti<R>(arg0: $BiConsumer_<T, $Consumer<R>>): $Stream<R>;
        mapMultiToInt(arg0: $BiConsumer_<T, $IntConsumer>): $IntStream;
        mapMultiToLong(arg0: $BiConsumer_<T, $LongConsumer>): $LongStream;
        mapMultiToDouble(arg0: $BiConsumer_<T, $DoubleConsumer>): $DoubleStream;
        takeWhile(arg0: $Predicate_<T>): $Stream<T>;
        dropWhile(arg0: $Predicate_<T>): $Stream<T>;
    }
    export class $DoubleStream {
        static of(arg0: number): $DoubleStream;
        static of(...arg0: number[]): $DoubleStream;
        static builder(): $DoubleStream$Builder;
        static concat(arg0: $DoubleStream, arg1: $DoubleStream): $DoubleStream;
        static empty(): $DoubleStream;
        static iterate(arg0: number, arg1: $DoubleUnaryOperator_): $DoubleStream;
        static iterate(arg0: number, arg1: $DoublePredicate_, arg2: $DoubleUnaryOperator_): $DoubleStream;
        static generate(arg0: $DoubleSupplier_): $DoubleStream;
    }
    export interface $DoubleStream extends $BaseStream<number, $DoubleStream> {
        average(): $OptionalDouble;
        summaryStatistics(): $DoubleSummaryStatistics;
        min(): $OptionalDouble;
        max(): $OptionalDouble;
        toArray(): number[];
        iterator(): $PrimitiveIterator$OfDouble;
        map(arg0: $DoubleUnaryOperator_): $DoubleStream;
        collect<R>(arg0: $Supplier_<R>, arg1: $ObjDoubleConsumer_<R>, arg2: $BiConsumer_<R, R>): R;
        count(): number;
        limit(arg0: number): $DoubleStream;
        spliterator(): $Spliterator$OfDouble;
        filter(arg0: $DoublePredicate_): $DoubleStream;
        anyMatch(arg0: $DoublePredicate_): boolean;
        flatMap(arg0: $DoubleFunction_<$DoubleStream>): $DoubleStream;
        forEach(arg0: $DoubleConsumer_): void;
        findAny(): $OptionalDouble;
        skip(arg0: number): $DoubleStream;
        peek(arg0: $DoubleConsumer_): $DoubleStream;
        sum(): number;
        reduce(arg0: $DoubleBinaryOperator_): $OptionalDouble;
        reduce(arg0: number, arg1: $DoubleBinaryOperator_): number;
        parallel(): $DoubleStream;
        distinct(): $DoubleStream;
        findFirst(): $OptionalDouble;
        allMatch(arg0: $DoublePredicate_): boolean;
        noneMatch(arg0: $DoublePredicate_): boolean;
        sorted(): $DoubleStream;
        mapToObj<U>(arg0: $DoubleFunction_<U>): $Stream<U>;
        sequential(): $DoubleStream;
        forEachOrdered(arg0: $DoubleConsumer_): void;
        boxed(): $Stream<number>;
        mapToInt(arg0: $DoubleToIntFunction_): $IntStream;
        mapToLong(arg0: $DoubleToLongFunction_): $LongStream;
        mapMulti(arg0: $DoubleStream$DoubleMapMultiConsumer_): $DoubleStream;
        takeWhile(arg0: $DoublePredicate_): $DoubleStream;
        dropWhile(arg0: $DoublePredicate_): $DoubleStream;
    }
    export class $LongStream {
        static of(arg0: number): $LongStream;
        static of(...arg0: number[]): $LongStream;
        static builder(): $LongStream$Builder;
        static concat(arg0: $LongStream, arg1: $LongStream): $LongStream;
        static empty(): $LongStream;
        static range(arg0: number, arg1: number): $LongStream;
        static iterate(arg0: number, arg1: $LongPredicate_, arg2: $LongUnaryOperator_): $LongStream;
        static iterate(arg0: number, arg1: $LongUnaryOperator_): $LongStream;
        static generate(arg0: $LongSupplier_): $LongStream;
        static rangeClosed(arg0: number, arg1: number): $LongStream;
    }
    export interface $LongStream extends $BaseStream<number, $LongStream> {
        average(): $OptionalDouble;
        summaryStatistics(): $LongSummaryStatistics;
        asDoubleStream(): $DoubleStream;
        min(): $OptionalLong;
        max(): $OptionalLong;
        toArray(): number[];
        iterator(): $PrimitiveIterator$OfLong;
        map(arg0: $LongUnaryOperator_): $LongStream;
        collect<R>(arg0: $Supplier_<R>, arg1: $ObjLongConsumer_<R>, arg2: $BiConsumer_<R, R>): R;
        count(): number;
        limit(arg0: number): $LongStream;
        filter(arg0: $LongPredicate_): $LongStream;
        anyMatch(arg0: $LongPredicate_): boolean;
        flatMap(arg0: $LongFunction_<$LongStream>): $LongStream;
        forEach(arg0: $LongConsumer_): void;
        findAny(): $OptionalLong;
        skip(arg0: number): $LongStream;
        peek(arg0: $LongConsumer_): $LongStream;
        sum(): number;
        reduce(arg0: number, arg1: $LongBinaryOperator_): number;
        reduce(arg0: $LongBinaryOperator_): $OptionalLong;
        distinct(): $LongStream;
        findFirst(): $OptionalLong;
        allMatch(arg0: $LongPredicate_): boolean;
        noneMatch(arg0: $LongPredicate_): boolean;
        sorted(): $LongStream;
        mapToObj<U>(arg0: $LongFunction_<U>): $Stream<U>;
        forEachOrdered(arg0: $LongConsumer_): void;
        boxed(): $Stream<number>;
        mapToInt(arg0: $LongToIntFunction_): $IntStream;
        mapToDouble(arg0: $LongToDoubleFunction_): $DoubleStream;
        mapMulti(arg0: $LongStream$LongMapMultiConsumer_): $LongStream;
        takeWhile(arg0: $LongPredicate_): $LongStream;
        dropWhile(arg0: $LongPredicate_): $LongStream;
        spliterator(): $Spliterator<number>;
        parallel(): $LongStream;
        sequential(): $LongStream;
    }
    export class $Collector$Characteristics extends $Enum<$Collector$Characteristics> {
        static values(): $Collector$Characteristics[];
        static valueOf(arg0: string): $Collector$Characteristics;
        static IDENTITY_FINISH: $Collector$Characteristics;
        static UNORDERED: $Collector$Characteristics;
        static CONCURRENT: $Collector$Characteristics;
    }
    /**
     * Values that may be interpreted as {@link $Collector$Characteristics}.
     */
    export type $Collector$Characteristics_ = "concurrent" | "unordered" | "identity_finish";
    export class $IntStream$Builder {
    }
    export interface $IntStream$Builder extends $IntConsumer {
        add(arg0: number): $IntStream$Builder;
        accept(arg0: number): void;
        build(): $IntStream;
    }
}
