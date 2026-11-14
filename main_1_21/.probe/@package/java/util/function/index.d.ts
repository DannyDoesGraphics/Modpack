import { $Object } from "@package/java/lang";
import { $Comparator } from "@package/java/util";

declare module "@package/java/util/function" {
    export class $IntPredicate {
    }
    export interface $IntPredicate {
        test(arg0: number): boolean;
        or(arg0: $IntPredicate_): $IntPredicate;
        negate(): $IntPredicate;
        and(arg0: $IntPredicate_): $IntPredicate;
    }
    /**
     * Values that may be interpreted as {@link $IntPredicate}.
     */
    export type $IntPredicate_ = ((arg0: number) => boolean);
    export class $IntToDoubleFunction {
    }
    export interface $IntToDoubleFunction {
        applyAsDouble(arg0: number): number;
    }
    /**
     * Values that may be interpreted as {@link $IntToDoubleFunction}.
     */
    export type $IntToDoubleFunction_ = ((arg0: number) => number);
    export class $ToIntBiFunction<T, U> {
    }
    export interface $ToIntBiFunction<T, U> {
        applyAsInt(arg0: T, arg1: U): number;
    }
    /**
     * Values that may be interpreted as {@link $ToIntBiFunction}.
     */
    export type $ToIntBiFunction_<T, U> = ((arg0: T, arg1: U) => number);
    export class $DoubleUnaryOperator {
        static identity(): $DoubleUnaryOperator;
    }
    export interface $DoubleUnaryOperator {
        applyAsDouble(arg0: number): number;
        compose(arg0: $DoubleUnaryOperator_): $DoubleUnaryOperator;
        andThen(arg0: $DoubleUnaryOperator_): $DoubleUnaryOperator;
    }
    /**
     * Values that may be interpreted as {@link $DoubleUnaryOperator}.
     */
    export type $DoubleUnaryOperator_ = ((arg0: number) => number);
    export class $LongConsumer {
    }
    export interface $LongConsumer {
        accept(arg0: number): void;
        andThen(arg0: $LongConsumer_): $LongConsumer;
    }
    /**
     * Values that may be interpreted as {@link $LongConsumer}.
     */
    export type $LongConsumer_ = ((arg0: number) => void);
    export class $LongUnaryOperator {
        static identity(): $LongUnaryOperator;
    }
    export interface $LongUnaryOperator {
        applyAsLong(arg0: number): number;
        compose(arg0: $LongUnaryOperator_): $LongUnaryOperator;
        andThen(arg0: $LongUnaryOperator_): $LongUnaryOperator;
    }
    /**
     * Values that may be interpreted as {@link $LongUnaryOperator}.
     */
    export type $LongUnaryOperator_ = ((arg0: number) => number);
    export class $Supplier<T> {
    }
    export interface $Supplier<T> {
        get(): T;
    }
    /**
     * Values that may be interpreted as {@link $Supplier}.
     */
    export type $Supplier_<T> = (() => T);
    export class $DoubleToLongFunction {
    }
    export interface $DoubleToLongFunction {
        applyAsLong(arg0: number): number;
    }
    /**
     * Values that may be interpreted as {@link $DoubleToLongFunction}.
     */
    export type $DoubleToLongFunction_ = ((arg0: number) => number);
    export class $IntFunction<R> {
    }
    export interface $IntFunction<R> {
        apply(arg0: number): R;
    }
    /**
     * Values that may be interpreted as {@link $IntFunction}.
     */
    export type $IntFunction_<R> = ((arg0: number) => R);
    export class $DoubleBinaryOperator {
    }
    export interface $DoubleBinaryOperator {
        applyAsDouble(arg0: number, arg1: number): number;
    }
    /**
     * Values that may be interpreted as {@link $DoubleBinaryOperator}.
     */
    export type $DoubleBinaryOperator_ = ((arg0: number, arg1: number) => number);
    export class $LongBinaryOperator {
    }
    export interface $LongBinaryOperator {
        applyAsLong(arg0: number, arg1: number): number;
    }
    /**
     * Values that may be interpreted as {@link $LongBinaryOperator}.
     */
    export type $LongBinaryOperator_ = ((arg0: number, arg1: number) => number);
    export class $ToDoubleFunction<T> {
    }
    export interface $ToDoubleFunction<T> {
        applyAsDouble(arg0: T): number;
    }
    /**
     * Values that may be interpreted as {@link $ToDoubleFunction}.
     */
    export type $ToDoubleFunction_<T> = ((arg0: T) => number);
    export class $LongFunction<R> {
    }
    export interface $LongFunction<R> {
        apply(arg0: number): R;
    }
    /**
     * Values that may be interpreted as {@link $LongFunction}.
     */
    export type $LongFunction_<R> = ((arg0: number) => R);
    export class $LongPredicate {
    }
    export interface $LongPredicate {
        test(arg0: number): boolean;
        or(arg0: $LongPredicate_): $LongPredicate;
        negate(): $LongPredicate;
        and(arg0: $LongPredicate_): $LongPredicate;
    }
    /**
     * Values that may be interpreted as {@link $LongPredicate}.
     */
    export type $LongPredicate_ = ((arg0: number) => boolean);
    export class $DoubleSupplier {
    }
    export interface $DoubleSupplier {
        getAsDouble(): number;
        get asDouble(): number;
    }
    /**
     * Values that may be interpreted as {@link $DoubleSupplier}.
     */
    export type $DoubleSupplier_ = (() => number);
    export class $BinaryOperator<T> {
        static minBy<T>(arg0: $Comparator<T>): $BinaryOperator<T>;
        static maxBy<T>(arg0: $Comparator<T>): $BinaryOperator<T>;
    }
    export interface $BinaryOperator<T> extends $BiFunction<T, T, T> {
    }
    /**
     * Values that may be interpreted as {@link $BinaryOperator}.
     */
    export type $BinaryOperator_<T> = (() => void);
    export class $ObjLongConsumer<T> {
    }
    export interface $ObjLongConsumer<T> {
        accept(arg0: T, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ObjLongConsumer}.
     */
    export type $ObjLongConsumer_<T> = ((arg0: T, arg1: number) => void);
    export class $BiConsumer<T, U> {
    }
    export interface $BiConsumer<T, U> {
        accept(arg0: T, arg1: U): void;
        andThen(arg0: $BiConsumer_<T, U>): $BiConsumer<T, U>;
    }
    /**
     * Values that may be interpreted as {@link $BiConsumer}.
     */
    export type $BiConsumer_<T, U> = ((arg0: T, arg1: U) => void);
    export class $DoublePredicate {
    }
    export interface $DoublePredicate {
        test(arg0: number): boolean;
        or(arg0: $DoublePredicate_): $DoublePredicate;
        negate(): $DoublePredicate;
        and(arg0: $DoublePredicate_): $DoublePredicate;
    }
    /**
     * Values that may be interpreted as {@link $DoublePredicate}.
     */
    export type $DoublePredicate_ = ((arg0: number) => boolean);
    export class $ToIntFunction<T> {
    }
    export interface $ToIntFunction<T> {
        applyAsInt(arg0: T): number;
    }
    /**
     * Values that may be interpreted as {@link $ToIntFunction}.
     */
    export type $ToIntFunction_<T> = ((arg0: T) => number);
    export class $IntBinaryOperator {
    }
    export interface $IntBinaryOperator {
        applyAsInt(arg0: number, arg1: number): number;
    }
    /**
     * Values that may be interpreted as {@link $IntBinaryOperator}.
     */
    export type $IntBinaryOperator_ = ((arg0: number, arg1: number) => number);
    export class $ObjDoubleConsumer<T> {
    }
    export interface $ObjDoubleConsumer<T> {
        accept(arg0: T, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ObjDoubleConsumer}.
     */
    export type $ObjDoubleConsumer_<T> = ((arg0: T, arg1: number) => void);
    export class $IntToLongFunction {
    }
    export interface $IntToLongFunction {
        applyAsLong(arg0: number): number;
    }
    /**
     * Values that may be interpreted as {@link $IntToLongFunction}.
     */
    export type $IntToLongFunction_ = ((arg0: number) => number);
    export class $ObjIntConsumer<T> {
    }
    export interface $ObjIntConsumer<T> {
        accept(arg0: T, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ObjIntConsumer}.
     */
    export type $ObjIntConsumer_<T> = ((arg0: T, arg1: number) => void);
    export class $BiFunction<T, U, R> {
    }
    export interface $BiFunction<T, U, R> {
        apply(arg0: T, arg1: U): R;
        andThen<V>(arg0: $Function_<R, V>): $BiFunction<T, U, V>;
    }
    /**
     * Values that may be interpreted as {@link $BiFunction}.
     */
    export type $BiFunction_<T, U, R> = ((arg0: T, arg1: U) => R);
    export class $IntSupplier {
    }
    export interface $IntSupplier {
        getAsInt(): number;
        get asInt(): number;
    }
    /**
     * Values that may be interpreted as {@link $IntSupplier}.
     */
    export type $IntSupplier_ = (() => number);
    export class $ToLongFunction<T> {
    }
    export interface $ToLongFunction<T> {
        applyAsLong(arg0: T): number;
    }
    /**
     * Values that may be interpreted as {@link $ToLongFunction}.
     */
    export type $ToLongFunction_<T> = ((arg0: T) => number);
    export class $BiPredicate<T, U> {
    }
    export interface $BiPredicate<T, U> {
        test(arg0: T, arg1: U): boolean;
        or(arg0: $BiPredicate_<T, U>): $BiPredicate<T, U>;
        negate(): $BiPredicate<T, U>;
        and(arg0: $BiPredicate_<T, U>): $BiPredicate<T, U>;
    }
    /**
     * Values that may be interpreted as {@link $BiPredicate}.
     */
    export type $BiPredicate_<T, U> = ((arg0: T, arg1: U) => boolean);
    export class $UnaryOperator<T> {
        static identity<T>(): $UnaryOperator<T>;
    }
    export interface $UnaryOperator<T> extends $Function<T, T> {
    }
    /**
     * Values that may be interpreted as {@link $UnaryOperator}.
     */
    export type $UnaryOperator_<T> = (() => void);
    export class $DoubleFunction<R> {
    }
    export interface $DoubleFunction<R> {
        apply(arg0: number): R;
    }
    /**
     * Values that may be interpreted as {@link $DoubleFunction}.
     */
    export type $DoubleFunction_<R> = ((arg0: number) => R);
    export class $LongToDoubleFunction {
    }
    export interface $LongToDoubleFunction {
        applyAsDouble(arg0: number): number;
    }
    /**
     * Values that may be interpreted as {@link $LongToDoubleFunction}.
     */
    export type $LongToDoubleFunction_ = ((arg0: number) => number);
    export class $LongSupplier {
    }
    export interface $LongSupplier {
        getAsLong(): number;
        get asLong(): number;
    }
    /**
     * Values that may be interpreted as {@link $LongSupplier}.
     */
    export type $LongSupplier_ = (() => number);
    export class $IntConsumer {
    }
    export interface $IntConsumer {
        accept(arg0: number): void;
        andThen(arg0: $IntConsumer_): $IntConsumer;
    }
    /**
     * Values that may be interpreted as {@link $IntConsumer}.
     */
    export type $IntConsumer_ = ((arg0: number) => void);
    export class $Function<T, R> {
        static identity<T>(): $Function<T, T>;
    }
    export interface $Function<T, R> {
        apply(arg0: T): R;
        compose<V>(arg0: $Function_<V, T>): $Function<V, R>;
        andThen<V>(arg0: $Function_<R, V>): $Function<T, V>;
    }
    /**
     * Values that may be interpreted as {@link $Function}.
     */
    export type $Function_<T, R> = ((arg0: T) => R);
    export class $DoubleConsumer {
    }
    export interface $DoubleConsumer {
        accept(arg0: number): void;
        andThen(arg0: $DoubleConsumer_): $DoubleConsumer;
    }
    /**
     * Values that may be interpreted as {@link $DoubleConsumer}.
     */
    export type $DoubleConsumer_ = ((arg0: number) => void);
    export class $Consumer<T> {
    }
    export interface $Consumer<T> {
        accept(arg0: T): void;
        andThen(arg0: $Consumer_<T>): $Consumer<T>;
    }
    /**
     * Values that may be interpreted as {@link $Consumer}.
     */
    export type $Consumer_<T> = ((arg0: T) => void);
    export class $BooleanSupplier {
    }
    export interface $BooleanSupplier {
        getAsBoolean(): boolean;
        get asBoolean(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BooleanSupplier}.
     */
    export type $BooleanSupplier_ = (() => boolean);
    export class $Predicate<T> {
        static not<T>(arg0: $Predicate_<T>): $Predicate<T>;
        static isEqual<T>(arg0: $Object): $Predicate<T>;
    }
    export interface $Predicate<T> {
        test(arg0: T): boolean;
        or(arg0: $Predicate_<T>): $Predicate<T>;
        negate(): $Predicate<T>;
        and(arg0: $Predicate_<T>): $Predicate<T>;
    }
    /**
     * Values that may be interpreted as {@link $Predicate}.
     */
    export type $Predicate_<T> = ((arg0: T) => boolean);
    export class $LongToIntFunction {
    }
    export interface $LongToIntFunction {
        applyAsInt(arg0: number): number;
    }
    /**
     * Values that may be interpreted as {@link $LongToIntFunction}.
     */
    export type $LongToIntFunction_ = ((arg0: number) => number);
    export class $IntUnaryOperator {
        static identity(): $IntUnaryOperator;
    }
    export interface $IntUnaryOperator {
        applyAsInt(arg0: number): number;
        compose(arg0: $IntUnaryOperator_): $IntUnaryOperator;
        andThen(arg0: $IntUnaryOperator_): $IntUnaryOperator;
    }
    /**
     * Values that may be interpreted as {@link $IntUnaryOperator}.
     */
    export type $IntUnaryOperator_ = ((arg0: number) => number);
    export class $DoubleToIntFunction {
    }
    export interface $DoubleToIntFunction {
        applyAsInt(arg0: number): number;
    }
    /**
     * Values that may be interpreted as {@link $DoubleToIntFunction}.
     */
    export type $DoubleToIntFunction_ = ((arg0: number) => number);
}
