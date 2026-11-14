
declare module "@package/io/reactivex/rxjava3/functions" {
    export class $Supplier<T> {
    }
    export interface $Supplier<T> {
        get(): T;
    }
    /**
     * Values that may be interpreted as {@link $Supplier}.
     */
    export type $Supplier_<T> = (() => T);
    export class $BiPredicate<T1, T2> {
    }
    export interface $BiPredicate<T1, T2> {
        test(t1: T1, t2: T2): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BiPredicate}.
     */
    export type $BiPredicate_<T1, T2> = ((t1: T1, t2: T2) => boolean);
    export class $Function<T, R> {
    }
    export interface $Function<T, R> {
        apply(t: T): R;
    }
    /**
     * Values that may be interpreted as {@link $Function}.
     */
    export type $Function_<T, R> = ((t: T) => R);
    export class $Consumer<T> {
    }
    export interface $Consumer<T> {
        accept(t: T): void;
    }
    /**
     * Values that may be interpreted as {@link $Consumer}.
     */
    export type $Consumer_<T> = ((t: T) => void);
    export class $Action {
    }
    export interface $Action {
        run(): void;
    }
    /**
     * Values that may be interpreted as {@link $Action}.
     */
    export type $Action_ = (() => void);
    export class $Predicate<T> {
    }
    export interface $Predicate<T> {
        test(t: T): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Predicate}.
     */
    export type $Predicate_<T> = ((t: T) => boolean);
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
}
