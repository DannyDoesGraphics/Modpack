import { $Function as $Function$1 } from "@package/java/util/function";
import { $Object } from "@package/java/lang";
import { $Comparator, $Iterator } from "@package/java/util";
export * as doubles from "@package/it/unimi/dsi/fastutil/doubles";
export * as objects from "@package/it/unimi/dsi/fastutil/objects";
export * as bytes from "@package/it/unimi/dsi/fastutil/bytes";
export * as ints from "@package/it/unimi/dsi/fastutil/ints";
export * as longs from "@package/it/unimi/dsi/fastutil/longs";
export * as shorts from "@package/it/unimi/dsi/fastutil/shorts";
export * as floats from "@package/it/unimi/dsi/fastutil/floats";
export * as booleans from "@package/it/unimi/dsi/fastutil/booleans";
export * as chars from "@package/it/unimi/dsi/fastutil/chars";

declare module "@package/it/unimi/dsi/fastutil" {
    export class $BidirectionalIterator<K> {
    }
    export interface $BidirectionalIterator<K> extends $Iterator<K> {
        hasPrevious(): boolean;
        previous(): K;
    }
    export class $Function<K, V> {
    }
    export interface $Function<K, V> extends $Function$1<K, V> {
        remove(arg0: $Object): V;
        size(): number;
        get(arg0: $Object): V;
        put(arg0: K, arg1: V): V;
        clear(): void;
        apply(arg0: K): V;
        containsKey(arg0: $Object): boolean;
        getOrDefault(arg0: $Object, arg1: V): V;
    }
    /**
     * Values that may be interpreted as {@link $Function}.
     */
    export type $Function_<K, V> = ((arg0: $Object) => V);
    export class $Pair<L, R> {
        static of<L, R>(arg0: L, arg1: R): $Pair<L, R>;
        static lexComparator<L, R>(): $Comparator<$Pair<L, R>>;
    }
    export interface $Pair<L, R> {
        value(): R;
        value(arg0: R): $Pair<L, R>;
        first(arg0: L): $Pair<L, R>;
        first(): L;
        second(): R;
        second(arg0: R): $Pair<L, R>;
        key(): L;
        key(arg0: L): $Pair<L, R>;
        left(): L;
        left(arg0: L): $Pair<L, R>;
        right(): R;
        right(arg0: R): $Pair<L, R>;
    }
    export class $Hash$Strategy<K> {
    }
    export interface $Hash$Strategy<K> {
        equals(arg0: K, arg1: K): boolean;
        hashCode(arg0: K): number;
    }
    export class $Stack<K> {
    }
    export interface $Stack<K> {
        isEmpty(): boolean;
        top(): K;
        peek(arg0: number): K;
        push(arg0: K): void;
        pop(): K;
        get empty(): boolean;
    }
    export class $Hash {
        /**
         * @deprecated
         */
        static DEFAULT_GROWTH_FACTOR: number;
        static FAST_LOAD_FACTOR: number;
        static DEFAULT_INITIAL_SIZE: number;
        static DEFAULT_LOAD_FACTOR: number;
        /**
         * @deprecated
         */
        static OCCUPIED: number;
        static VERY_FAST_LOAD_FACTOR: number;
        /**
         * @deprecated
         */
        static FREE: number;
        /**
         * @deprecated
         */
        static PRIMES: number[];
        /**
         * @deprecated
         */
        static REMOVED: number;
    }
    export interface $Hash {
    }
}
