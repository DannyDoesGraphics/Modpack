import { $Supplier_, $BiConsumer, $Consumer, $Supplier, $Function, $BiFunction } from "@package/java/util/function";

declare module "@package/com/tterrag/registrate/util/nullness" {
    export class $NonNullBiFunction<T, U, R> {
    }
    export interface $NonNullBiFunction<T, U, R> extends $BiFunction<T, U, R> {
        apply(arg0: T, arg1: U): R;
    }
    /**
     * Values that may be interpreted as {@link $NonNullBiFunction}.
     */
    export type $NonNullBiFunction_<T, U, R> = ((arg0: T, arg1: U) => R);
    export class $NonNullSupplier<T> {
        static of<T>(arg0: $Supplier_<T>, arg1: $NonNullSupplier_<string>): $NonNullSupplier<T>;
        static of<T>(arg0: $Supplier_<T>): $NonNullSupplier<T>;
        static lazy<T>(arg0: $Supplier_<T>): $NonNullSupplier<T>;
    }
    export interface $NonNullSupplier<T> extends $Supplier<T> {
        get(): T;
        lazy(): $NonNullSupplier<T>;
    }
    /**
     * Values that may be interpreted as {@link $NonNullSupplier}.
     */
    export type $NonNullSupplier_<T> = (() => T);
    export class $NonNullConsumer<T> {
        static noop<T>(): $NonNullConsumer<T>;
    }
    export interface $NonNullConsumer<T> extends $Consumer<T> {
        accept(arg0: T): void;
        andThen(arg0: $NonNullConsumer_<T>): $NonNullConsumer<T>;
    }
    /**
     * Values that may be interpreted as {@link $NonNullConsumer}.
     */
    export type $NonNullConsumer_<T> = ((arg0: T) => void);
    export class $NonNullFunction<T, R> {
    }
    export interface $NonNullFunction<T, R> extends $Function<T, R> {
        apply(arg0: T): R;
        andThen<V>(arg0: $NonNullFunction_<R, V>): $NonNullFunction<T, V>;
    }
    /**
     * Values that may be interpreted as {@link $NonNullFunction}.
     */
    export type $NonNullFunction_<T, R> = ((arg0: T) => R);
    export class $NonNullBiConsumer<T, U> {
        static noop<T, U>(): $NonNullBiConsumer<T, U>;
    }
    export interface $NonNullBiConsumer<T, U> extends $BiConsumer<T, U> {
        accept(arg0: T, arg1: U): void;
    }
    /**
     * Values that may be interpreted as {@link $NonNullBiConsumer}.
     */
    export type $NonNullBiConsumer_<T, U> = ((arg0: T, arg1: U) => void);
    export class $NonNullUnaryOperator<T> {
        static identity<T>(): $NonNullUnaryOperator<T>;
    }
    export interface $NonNullUnaryOperator<T> extends $NonNullFunction<T, T> {
        andThen<V>(arg0: $NonNullUnaryOperator_<T>): $NonNullUnaryOperator<T>;
    }
    /**
     * Values that may be interpreted as {@link $NonNullUnaryOperator}.
     */
    export type $NonNullUnaryOperator_<T> = (() => void);
}
