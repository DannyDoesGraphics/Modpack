import { $Function_ } from "@package/java/util/function";
import { $Throwable } from "@package/java/lang";

declare module "@package/org/apache/commons/lang3/function" {
    export class $FailableBiConsumer<T, U, E extends $Throwable> {
        static nop<T, U, E extends $Throwable>(): $FailableBiConsumer<T, U, E>;
        static NOP: $FailableBiConsumer<any, any, any>;
    }
    export interface $FailableBiConsumer<T, U, E extends $Throwable> {
        accept(arg0: T, arg1: U): void;
        andThen(arg0: $FailableBiConsumer_<T, U, E>): $FailableBiConsumer<T, U, E>;
    }
    /**
     * Values that may be interpreted as {@link $FailableBiConsumer}.
     */
    export type $FailableBiConsumer_<T, U, E> = ((arg0: T, arg1: U) => void);
    export class $TriConsumer<T, U, V> {
    }
    export interface $TriConsumer<T, U, V> {
        accept(arg0: T, arg1: U, arg2: V): void;
        andThen(arg0: $TriConsumer_<T, U, V>): $TriConsumer<T, U, V>;
    }
    /**
     * Values that may be interpreted as {@link $TriConsumer}.
     */
    export type $TriConsumer_<T, U, V> = ((arg0: T, arg1: U, arg2: V) => void);
    export class $TriFunction<T, U, V, R> {
    }
    export interface $TriFunction<T, U, V, R> {
        apply(arg0: T, arg1: U, arg2: V): R;
        andThen<W>(arg0: $Function_<R, W>): $TriFunction<T, U, V, W>;
    }
    /**
     * Values that may be interpreted as {@link $TriFunction}.
     */
    export type $TriFunction_<T, U, V, R> = ((arg0: T, arg1: U, arg2: V) => R);
    export class $FailableFunction<T, R, E extends $Throwable> {
        static identity<T, E extends $Throwable>(): $FailableFunction<T, T, E>;
        static "function"<T, R, E extends $Throwable>(arg0: $FailableFunction_<T, R, E>): $FailableFunction<T, R, E>;
        static nop<T, R, E extends $Throwable>(): $FailableFunction<T, R, E>;
        static NOP: $FailableFunction<any, any, any>;
    }
    export interface $FailableFunction<T, R, E extends $Throwable> {
        apply(arg0: T): R;
        compose<V>(arg0: $FailableFunction_<V, T, E>): $FailableFunction<V, R, E>;
        andThen<V>(arg0: $FailableFunction_<R, V, E>): $FailableFunction<T, V, E>;
    }
    /**
     * Values that may be interpreted as {@link $FailableFunction}.
     */
    export type $FailableFunction_<T, R, E> = ((arg0: T) => R);
    export class $FailableBiFunction<T, U, R, E extends $Throwable> {
        static nop<T, U, R, E extends $Throwable>(): $FailableBiFunction<T, U, R, E>;
        static NOP: $FailableBiFunction<any, any, any, any>;
    }
    export interface $FailableBiFunction<T, U, R, E extends $Throwable> {
        apply(arg0: T, arg1: U): R;
        andThen<V>(arg0: $FailableFunction_<R, V, E>): $FailableBiFunction<T, U, V, E>;
    }
    /**
     * Values that may be interpreted as {@link $FailableBiFunction}.
     */
    export type $FailableBiFunction_<T, U, R, E> = ((arg0: T, arg1: U) => R);
}
