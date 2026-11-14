import { $Float2LongFunction_, $Float2FloatFunction_, $Float2ShortFunction, $Float2ObjectFunction_, $Float2BooleanFunction_, $Float2IntFunction, $Float2ObjectFunction, $Float2ShortFunction_, $Float2CharFunction, $Float2DoubleFunction, $Float2ReferenceFunction_, $Float2FloatFunction, $Float2IntFunction_, $Float2ReferenceFunction, $Float2CharFunction_, $Float2ByteFunction_, $Float2LongFunction, $Float2DoubleFunction_, $Float2ByteFunction } from "@package/it/unimi/dsi/fastutil/floats";
import { $Int2ByteFunction_, $Int2ShortFunction, $Int2ObjectFunction_, $Int2CharFunction, $Int2DoubleFunction_, $Int2ReferenceFunction_, $Int2IntFunction_, $Int2LongFunction_, $Int2CharFunction_, $Int2FloatFunction_, $Int2LongFunction, $Int2IntFunction, $Int2DoubleFunction, $Int2FloatFunction, $Int2ByteFunction, $Int2ObjectFunction, $Int2ReferenceFunction, $Int2BooleanFunction_, $Int2ShortFunction_ } from "@package/it/unimi/dsi/fastutil/ints";
import { $Function as $Function$1, $Consumer_, $Predicate_, $Predicate, $Consumer, $Function_ } from "@package/java/util/function";
import { $Object2LongFunction_, $Reference2ShortFunction, $Reference2FloatFunction_, $Object2ShortFunction, $Object2ObjectFunction_, $Reference2IntFunction_, $Object2ShortFunction_, $Object2ByteFunction_, $Reference2ByteFunction_, $Object2ReferenceFunction_, $Reference2ReferenceFunction, $Reference2ObjectFunction_, $Object2CharFunction_, $Object2FloatFunction, $Reference2CharFunction, $Reference2FloatFunction, $Object2CharFunction, $Reference2DoubleFunction_, $Object2DoubleFunction, $Reference2IntFunction, $Object2IntFunction, $Object2IntFunction_, $Reference2CharFunction_, $Object2DoubleFunction_, $Object2ReferenceFunction, $Reference2DoubleFunction, $Reference2BooleanFunction_, $Object2LongFunction, $Reference2LongFunction, $Reference2ShortFunction_, $Reference2ObjectFunction, $Object2FloatFunction_, $Object2BooleanFunction_, $Object2ByteFunction, $Reference2ByteFunction, $Reference2ReferenceFunction_, $Reference2LongFunction_, $Object2ObjectFunction } from "@package/it/unimi/dsi/fastutil/objects";
import { $Long2BooleanFunction_, $Long2ReferenceFunction_, $Long2LongFunction, $Long2FloatFunction, $Long2ShortFunction, $Long2ObjectFunction, $Long2CharFunction_, $Long2ReferenceFunction, $Long2FloatFunction_, $Long2ByteFunction_, $Long2CharFunction, $Long2ObjectFunction_, $Long2ShortFunction_, $Long2IntFunction, $Long2LongFunction_, $Long2ByteFunction, $Long2IntFunction_, $Long2DoubleFunction, $Long2DoubleFunction_ } from "@package/it/unimi/dsi/fastutil/longs";
import { $Byte2ReferenceFunction, $Byte2LongFunction_, $Byte2BooleanFunction_, $Byte2DoubleFunction, $Byte2ShortFunction, $Byte2LongFunction, $Byte2ShortFunction_, $Byte2ByteFunction, $Byte2IntFunction_, $Byte2ObjectFunction_, $Byte2FloatFunction, $Byte2DoubleFunction_, $Byte2CharFunction, $Byte2ObjectFunction, $Byte2ByteFunction_, $Byte2CharFunction_, $Byte2ReferenceFunction_, $Byte2IntFunction, $Byte2FloatFunction_ } from "@package/it/unimi/dsi/fastutil/bytes";
import { $Double2FloatFunction, $Double2IntFunction, $Double2IntFunction_, $Double2ByteFunction_, $Double2ByteFunction, $Double2ReferenceFunction, $Double2ObjectFunction_, $Double2ShortFunction, $Double2FloatFunction_, $Double2LongFunction_, $Double2DoubleFunction_, $Double2LongFunction, $Double2DoubleFunction, $Double2ObjectFunction, $Double2BooleanFunction_, $Double2CharFunction_, $Double2CharFunction, $Double2ReferenceFunction_, $Double2ShortFunction_ } from "@package/it/unimi/dsi/fastutil/doubles";
import { $Char2ObjectFunction_, $Char2LongFunction, $Char2ShortFunction_, $Char2FloatFunction, $Char2IntFunction_, $Char2DoubleFunction_, $Char2BooleanFunction_, $Char2ObjectFunction, $Char2CharFunction_, $Char2IntFunction, $Char2FloatFunction_, $Char2ByteFunction_, $Char2CharFunction, $Char2ShortFunction, $Char2LongFunction_, $Char2ReferenceFunction_, $Char2DoubleFunction, $Char2ByteFunction, $Char2ReferenceFunction } from "@package/it/unimi/dsi/fastutil/chars";
import { $Iterable, $Object } from "@package/java/lang";
import { $Function } from "@package/it/unimi/dsi/fastutil";
import { $Spliterator, $Collection, $Iterator } from "@package/java/util";
import { $Short2IntFunction_, $Short2BooleanFunction_, $Short2ReferenceFunction_, $Short2FloatFunction, $Short2ShortFunction, $Short2ByteFunction, $Short2ByteFunction_, $Short2CharFunction_, $Short2ObjectFunction, $Short2IntFunction, $Short2LongFunction, $Short2LongFunction_, $Short2FloatFunction_, $Short2DoubleFunction, $Short2ObjectFunction_, $Short2ReferenceFunction, $Short2ShortFunction_, $Short2DoubleFunction_, $Short2CharFunction } from "@package/it/unimi/dsi/fastutil/shorts";

declare module "@package/it/unimi/dsi/fastutil/booleans" {
    export class $BooleanCollection {
        [Symbol.iterator](): Iterator<boolean>
    }
    export interface $BooleanCollection extends $Collection<boolean>, $BooleanIterable {
        /**
         * @deprecated
         */
        toBooleanArray(arg0: boolean[]): boolean[];
        toBooleanArray(): boolean[];
        /**
         * @deprecated
         */
        remove(arg0: $Object): boolean;
        /**
         * @deprecated
         */
        add(arg0: boolean): boolean;
        add(arg0: boolean): boolean;
        toArray(arg0: boolean[]): boolean[];
        contains(arg0: boolean): boolean;
        /**
         * @deprecated
         */
        contains(arg0: $Object): boolean;
        addAll(arg0: $BooleanCollection): boolean;
        removeIf(arg0: $BooleanPredicate_): boolean;
        /**
         * @deprecated
         */
        removeIf(arg0: $Predicate_<boolean>): boolean;
        removeAll(arg0: $BooleanCollection): boolean;
        retainAll(arg0: $BooleanCollection): boolean;
        containsAll(arg0: $BooleanCollection): boolean;
        rem(arg0: boolean): boolean;
        iterator(): $Iterator<boolean>;
        spliterator(): $Spliterator<boolean>;
        [Symbol.iterator](): Iterator<boolean>
    }
    export class $Boolean2DoubleFunction {
    }
    export interface $Boolean2DoubleFunction extends $Function<boolean, number> {
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        remove(arg0: boolean): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        get(arg0: boolean): number;
        put(arg0: boolean, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: boolean, arg1: number): number;
        containsKey(arg0: boolean): boolean;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        getOrDefault(arg0: boolean, arg1: number): number;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, boolean>): $Function$1<T, number>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<boolean, T>;
        defaultReturnValue(): number;
        defaultReturnValue(arg0: number): void;
        andThenByte(arg0: $Double2ByteFunction_): $Boolean2ByteFunction;
        composeByte(arg0: $Byte2BooleanFunction_): $Byte2DoubleFunction;
        andThenShort(arg0: $Double2ShortFunction_): $Boolean2ShortFunction;
        composeShort(arg0: $Short2BooleanFunction_): $Short2DoubleFunction;
        andThenInt(arg0: $Double2IntFunction_): $Boolean2IntFunction;
        composeInt(arg0: $Int2BooleanFunction_): $Int2DoubleFunction;
        andThenLong(arg0: $Double2LongFunction_): $Boolean2LongFunction;
        composeLong(arg0: $Long2BooleanFunction_): $Long2DoubleFunction;
        andThenChar(arg0: $Double2CharFunction_): $Boolean2CharFunction;
        composeChar(arg0: $Char2BooleanFunction_): $Char2DoubleFunction;
        andThenFloat(arg0: $Double2FloatFunction_): $Boolean2FloatFunction;
        composeFloat(arg0: $Float2BooleanFunction_): $Float2DoubleFunction;
        andThenDouble(arg0: $Double2DoubleFunction_): $Boolean2DoubleFunction;
        composeDouble(arg0: $Double2BooleanFunction_): $Double2DoubleFunction;
        andThenObject<T>(arg0: $Double2ObjectFunction_<T>): $Boolean2ObjectFunction<T>;
        composeObject<T>(arg0: $Object2BooleanFunction_<T>): $Object2DoubleFunction<T>;
        andThenReference<T>(arg0: $Double2ReferenceFunction_<T>): $Boolean2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2BooleanFunction_<T>): $Reference2DoubleFunction<T>;
    }
    /**
     * Values that may be interpreted as {@link $Boolean2DoubleFunction}.
     */
    export type $Boolean2DoubleFunction_ = ((arg0: boolean) => number);
    export class $Boolean2LongFunction {
    }
    export interface $Boolean2LongFunction extends $Function<boolean, number> {
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        remove(arg0: boolean): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        get(arg0: boolean): number;
        put(arg0: boolean, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: boolean, arg1: number): number;
        containsKey(arg0: boolean): boolean;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        getOrDefault(arg0: boolean, arg1: number): number;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, boolean>): $Function$1<T, number>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<boolean, T>;
        defaultReturnValue(): number;
        defaultReturnValue(arg0: number): void;
        andThenByte(arg0: $Long2ByteFunction_): $Boolean2ByteFunction;
        composeByte(arg0: $Byte2BooleanFunction_): $Byte2LongFunction;
        andThenShort(arg0: $Long2ShortFunction_): $Boolean2ShortFunction;
        composeShort(arg0: $Short2BooleanFunction_): $Short2LongFunction;
        andThenInt(arg0: $Long2IntFunction_): $Boolean2IntFunction;
        composeInt(arg0: $Int2BooleanFunction_): $Int2LongFunction;
        andThenLong(arg0: $Long2LongFunction_): $Boolean2LongFunction;
        composeLong(arg0: $Long2BooleanFunction_): $Long2LongFunction;
        andThenChar(arg0: $Long2CharFunction_): $Boolean2CharFunction;
        composeChar(arg0: $Char2BooleanFunction_): $Char2LongFunction;
        andThenFloat(arg0: $Long2FloatFunction_): $Boolean2FloatFunction;
        composeFloat(arg0: $Float2BooleanFunction_): $Float2LongFunction;
        andThenDouble(arg0: $Long2DoubleFunction_): $Boolean2DoubleFunction;
        composeDouble(arg0: $Double2BooleanFunction_): $Double2LongFunction;
        andThenObject<T>(arg0: $Long2ObjectFunction_<T>): $Boolean2ObjectFunction<T>;
        composeObject<T>(arg0: $Object2BooleanFunction_<T>): $Object2LongFunction<T>;
        andThenReference<T>(arg0: $Long2ReferenceFunction_<T>): $Boolean2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2BooleanFunction_<T>): $Reference2LongFunction<T>;
    }
    /**
     * Values that may be interpreted as {@link $Boolean2LongFunction}.
     */
    export type $Boolean2LongFunction_ = ((arg0: boolean) => number);
    export class $Boolean2FloatFunction {
    }
    export interface $Boolean2FloatFunction extends $Function<boolean, number> {
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        remove(arg0: boolean): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        get(arg0: boolean): number;
        put(arg0: boolean, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: boolean, arg1: number): number;
        containsKey(arg0: boolean): boolean;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        getOrDefault(arg0: boolean, arg1: number): number;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, boolean>): $Function$1<T, number>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<boolean, T>;
        defaultReturnValue(): number;
        defaultReturnValue(arg0: number): void;
        andThenByte(arg0: $Float2ByteFunction_): $Boolean2ByteFunction;
        composeByte(arg0: $Byte2BooleanFunction_): $Byte2FloatFunction;
        andThenShort(arg0: $Float2ShortFunction_): $Boolean2ShortFunction;
        composeShort(arg0: $Short2BooleanFunction_): $Short2FloatFunction;
        andThenInt(arg0: $Float2IntFunction_): $Boolean2IntFunction;
        composeInt(arg0: $Int2BooleanFunction_): $Int2FloatFunction;
        andThenLong(arg0: $Float2LongFunction_): $Boolean2LongFunction;
        composeLong(arg0: $Long2BooleanFunction_): $Long2FloatFunction;
        andThenChar(arg0: $Float2CharFunction_): $Boolean2CharFunction;
        composeChar(arg0: $Char2BooleanFunction_): $Char2FloatFunction;
        andThenFloat(arg0: $Float2FloatFunction_): $Boolean2FloatFunction;
        composeFloat(arg0: $Float2BooleanFunction_): $Float2FloatFunction;
        andThenDouble(arg0: $Float2DoubleFunction_): $Boolean2DoubleFunction;
        composeDouble(arg0: $Double2BooleanFunction_): $Double2FloatFunction;
        andThenObject<T>(arg0: $Float2ObjectFunction_<T>): $Boolean2ObjectFunction<T>;
        composeObject<T>(arg0: $Object2BooleanFunction_<T>): $Object2FloatFunction<T>;
        andThenReference<T>(arg0: $Float2ReferenceFunction_<T>): $Boolean2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2BooleanFunction_<T>): $Reference2FloatFunction<T>;
    }
    /**
     * Values that may be interpreted as {@link $Boolean2FloatFunction}.
     */
    export type $Boolean2FloatFunction_ = ((arg0: boolean) => number);
    export class $Boolean2IntFunction {
    }
    export interface $Boolean2IntFunction extends $Function<boolean, number> {
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        remove(arg0: boolean): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        get(arg0: boolean): number;
        put(arg0: boolean, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: boolean, arg1: number): number;
        containsKey(arg0: boolean): boolean;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        getOrDefault(arg0: boolean, arg1: number): number;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, boolean>): $Function$1<T, number>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<boolean, T>;
        defaultReturnValue(): number;
        defaultReturnValue(arg0: number): void;
        andThenByte(arg0: $Int2ByteFunction_): $Boolean2ByteFunction;
        composeByte(arg0: $Byte2BooleanFunction_): $Byte2IntFunction;
        andThenShort(arg0: $Int2ShortFunction_): $Boolean2ShortFunction;
        composeShort(arg0: $Short2BooleanFunction_): $Short2IntFunction;
        andThenInt(arg0: $Int2IntFunction_): $Boolean2IntFunction;
        composeInt(arg0: $Int2BooleanFunction_): $Int2IntFunction;
        andThenLong(arg0: $Int2LongFunction_): $Boolean2LongFunction;
        composeLong(arg0: $Long2BooleanFunction_): $Long2IntFunction;
        andThenChar(arg0: $Int2CharFunction_): $Boolean2CharFunction;
        composeChar(arg0: $Char2BooleanFunction_): $Char2IntFunction;
        andThenFloat(arg0: $Int2FloatFunction_): $Boolean2FloatFunction;
        composeFloat(arg0: $Float2BooleanFunction_): $Float2IntFunction;
        andThenDouble(arg0: $Int2DoubleFunction_): $Boolean2DoubleFunction;
        composeDouble(arg0: $Double2BooleanFunction_): $Double2IntFunction;
        andThenObject<T>(arg0: $Int2ObjectFunction_<T>): $Boolean2ObjectFunction<T>;
        composeObject<T>(arg0: $Object2BooleanFunction_<T>): $Object2IntFunction<T>;
        andThenReference<T>(arg0: $Int2ReferenceFunction_<T>): $Boolean2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2BooleanFunction_<T>): $Reference2IntFunction<T>;
    }
    /**
     * Values that may be interpreted as {@link $Boolean2IntFunction}.
     */
    export type $Boolean2IntFunction_ = ((arg0: boolean) => number);
    export class $Boolean2ShortFunction {
    }
    export interface $Boolean2ShortFunction extends $Function<boolean, number> {
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        remove(arg0: boolean): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        get(arg0: boolean): number;
        put(arg0: boolean, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: boolean, arg1: number): number;
        containsKey(arg0: boolean): boolean;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        getOrDefault(arg0: boolean, arg1: number): number;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, boolean>): $Function$1<T, number>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<boolean, T>;
        defaultReturnValue(): number;
        defaultReturnValue(arg0: number): void;
        andThenByte(arg0: $Short2ByteFunction_): $Boolean2ByteFunction;
        composeByte(arg0: $Byte2BooleanFunction_): $Byte2ShortFunction;
        andThenShort(arg0: $Short2ShortFunction_): $Boolean2ShortFunction;
        composeShort(arg0: $Short2BooleanFunction_): $Short2ShortFunction;
        andThenInt(arg0: $Short2IntFunction_): $Boolean2IntFunction;
        composeInt(arg0: $Int2BooleanFunction_): $Int2ShortFunction;
        andThenLong(arg0: $Short2LongFunction_): $Boolean2LongFunction;
        composeLong(arg0: $Long2BooleanFunction_): $Long2ShortFunction;
        andThenChar(arg0: $Short2CharFunction_): $Boolean2CharFunction;
        composeChar(arg0: $Char2BooleanFunction_): $Char2ShortFunction;
        andThenFloat(arg0: $Short2FloatFunction_): $Boolean2FloatFunction;
        composeFloat(arg0: $Float2BooleanFunction_): $Float2ShortFunction;
        andThenDouble(arg0: $Short2DoubleFunction_): $Boolean2DoubleFunction;
        composeDouble(arg0: $Double2BooleanFunction_): $Double2ShortFunction;
        andThenObject<T>(arg0: $Short2ObjectFunction_<T>): $Boolean2ObjectFunction<T>;
        composeObject<T>(arg0: $Object2BooleanFunction_<T>): $Object2ShortFunction<T>;
        andThenReference<T>(arg0: $Short2ReferenceFunction_<T>): $Boolean2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2BooleanFunction_<T>): $Reference2ShortFunction<T>;
    }
    /**
     * Values that may be interpreted as {@link $Boolean2ShortFunction}.
     */
    export type $Boolean2ShortFunction_ = ((arg0: boolean) => number);
    export class $Boolean2CharFunction {
    }
    export interface $Boolean2CharFunction extends $Function<boolean, string> {
        /**
         * @deprecated
         */
        remove(arg0: $Object): string;
        remove(arg0: boolean): string;
        /**
         * @deprecated
         */
        get(arg0: $Object): string;
        get(arg0: boolean): string;
        put(arg0: boolean, arg1: string): string;
        /**
         * @deprecated
         */
        put(arg0: boolean, arg1: string): string;
        containsKey(arg0: boolean): boolean;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        getOrDefault(arg0: boolean, arg1: string): string;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: string): string;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, boolean>): $Function$1<T, string>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<string, T>): $Function$1<boolean, T>;
        defaultReturnValue(): string;
        defaultReturnValue(arg0: string): void;
        andThenByte(arg0: $Char2ByteFunction_): $Boolean2ByteFunction;
        composeByte(arg0: $Byte2BooleanFunction_): $Byte2CharFunction;
        andThenShort(arg0: $Char2ShortFunction_): $Boolean2ShortFunction;
        composeShort(arg0: $Short2BooleanFunction_): $Short2CharFunction;
        andThenInt(arg0: $Char2IntFunction_): $Boolean2IntFunction;
        composeInt(arg0: $Int2BooleanFunction_): $Int2CharFunction;
        andThenLong(arg0: $Char2LongFunction_): $Boolean2LongFunction;
        composeLong(arg0: $Long2BooleanFunction_): $Long2CharFunction;
        andThenChar(arg0: $Char2CharFunction_): $Boolean2CharFunction;
        composeChar(arg0: $Char2BooleanFunction_): $Char2CharFunction;
        andThenFloat(arg0: $Char2FloatFunction_): $Boolean2FloatFunction;
        composeFloat(arg0: $Float2BooleanFunction_): $Float2CharFunction;
        andThenDouble(arg0: $Char2DoubleFunction_): $Boolean2DoubleFunction;
        composeDouble(arg0: $Double2BooleanFunction_): $Double2CharFunction;
        andThenObject<T>(arg0: $Char2ObjectFunction_<T>): $Boolean2ObjectFunction<T>;
        composeObject<T>(arg0: $Object2BooleanFunction_<T>): $Object2CharFunction<T>;
        andThenReference<T>(arg0: $Char2ReferenceFunction_<T>): $Boolean2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2BooleanFunction_<T>): $Reference2CharFunction<T>;
    }
    /**
     * Values that may be interpreted as {@link $Boolean2CharFunction}.
     */
    export type $Boolean2CharFunction_ = ((arg0: boolean) => string);
    export class $Boolean2ByteFunction {
    }
    export interface $Boolean2ByteFunction extends $Function<boolean, number> {
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        remove(arg0: boolean): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        get(arg0: boolean): number;
        put(arg0: boolean, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: boolean, arg1: number): number;
        containsKey(arg0: boolean): boolean;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        getOrDefault(arg0: boolean, arg1: number): number;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, boolean>): $Function$1<T, number>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<boolean, T>;
        defaultReturnValue(): number;
        defaultReturnValue(arg0: number): void;
        andThenByte(arg0: $Byte2ByteFunction_): $Boolean2ByteFunction;
        composeByte(arg0: $Byte2BooleanFunction_): $Byte2ByteFunction;
        andThenShort(arg0: $Byte2ShortFunction_): $Boolean2ShortFunction;
        composeShort(arg0: $Short2BooleanFunction_): $Short2ByteFunction;
        andThenInt(arg0: $Byte2IntFunction_): $Boolean2IntFunction;
        composeInt(arg0: $Int2BooleanFunction_): $Int2ByteFunction;
        andThenLong(arg0: $Byte2LongFunction_): $Boolean2LongFunction;
        composeLong(arg0: $Long2BooleanFunction_): $Long2ByteFunction;
        andThenChar(arg0: $Byte2CharFunction_): $Boolean2CharFunction;
        composeChar(arg0: $Char2BooleanFunction_): $Char2ByteFunction;
        andThenFloat(arg0: $Byte2FloatFunction_): $Boolean2FloatFunction;
        composeFloat(arg0: $Float2BooleanFunction_): $Float2ByteFunction;
        andThenDouble(arg0: $Byte2DoubleFunction_): $Boolean2DoubleFunction;
        composeDouble(arg0: $Double2BooleanFunction_): $Double2ByteFunction;
        andThenObject<T>(arg0: $Byte2ObjectFunction_<T>): $Boolean2ObjectFunction<T>;
        composeObject<T>(arg0: $Object2BooleanFunction_<T>): $Object2ByteFunction<T>;
        andThenReference<T>(arg0: $Byte2ReferenceFunction_<T>): $Boolean2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2BooleanFunction_<T>): $Reference2ByteFunction<T>;
    }
    /**
     * Values that may be interpreted as {@link $Boolean2ByteFunction}.
     */
    export type $Boolean2ByteFunction_ = ((arg0: boolean) => number);
    export class $BooleanIterable {
        [Symbol.iterator](): Iterator<boolean>
    }
    export interface $BooleanIterable extends $Iterable<boolean> {
        forEach(arg0: $BooleanConsumer_): void;
        /**
         * @deprecated
         */
        forEach(arg0: $Consumer_<boolean>): void;
        iterator(): $Iterator<boolean>;
        spliterator(): $Spliterator<boolean>;
        [Symbol.iterator](): Iterator<boolean>
    }
    /**
     * Values that may be interpreted as {@link $BooleanIterable}.
     */
    export type $BooleanIterable_ = (() => $Iterator<boolean>);
    export class $BooleanConsumer {
    }
    export interface $BooleanConsumer extends $Consumer<boolean> {
        /**
         * @deprecated
         */
        accept(arg0: boolean): void;
        accept(arg0: boolean): void;
        /**
         * @deprecated
         */
        andThen(arg0: $Consumer_<boolean>): $Consumer<boolean>;
        andThen(arg0: $BooleanConsumer_): $BooleanConsumer;
    }
    /**
     * Values that may be interpreted as {@link $BooleanConsumer}.
     */
    export type $BooleanConsumer_ = ((arg0: boolean) => void);
    export class $Boolean2ReferenceFunction<V> {
    }
    export interface $Boolean2ReferenceFunction<V> extends $Function<boolean, V> {
        /**
         * @deprecated
         */
        remove(arg0: $Object): V;
        remove(arg0: boolean): V;
        /**
         * @deprecated
         */
        get(arg0: $Object): V;
        get(arg0: boolean): V;
        /**
         * @deprecated
         */
        put(arg0: boolean, arg1: V): V;
        put(arg0: boolean, arg1: V): V;
        containsKey(arg0: boolean): boolean;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        getOrDefault(arg0: boolean, arg1: V): V;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: V): V;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, boolean>): $Function$1<T, V>;
        defaultReturnValue(): V;
        defaultReturnValue(arg0: V): void;
        andThenByte(arg0: $Reference2ByteFunction_<V>): $Boolean2ByteFunction;
        composeByte(arg0: $Byte2BooleanFunction_): $Byte2ReferenceFunction<V>;
        andThenShort(arg0: $Reference2ShortFunction_<V>): $Boolean2ShortFunction;
        composeShort(arg0: $Short2BooleanFunction_): $Short2ReferenceFunction<V>;
        andThenInt(arg0: $Reference2IntFunction_<V>): $Boolean2IntFunction;
        composeInt(arg0: $Int2BooleanFunction_): $Int2ReferenceFunction<V>;
        andThenLong(arg0: $Reference2LongFunction_<V>): $Boolean2LongFunction;
        composeLong(arg0: $Long2BooleanFunction_): $Long2ReferenceFunction<V>;
        andThenChar(arg0: $Reference2CharFunction_<V>): $Boolean2CharFunction;
        composeChar(arg0: $Char2BooleanFunction_): $Char2ReferenceFunction<V>;
        andThenFloat(arg0: $Reference2FloatFunction_<V>): $Boolean2FloatFunction;
        composeFloat(arg0: $Float2BooleanFunction_): $Float2ReferenceFunction<V>;
        andThenDouble(arg0: $Reference2DoubleFunction_<V>): $Boolean2DoubleFunction;
        composeDouble(arg0: $Double2BooleanFunction_): $Double2ReferenceFunction<V>;
        andThenObject<T>(arg0: $Reference2ObjectFunction_<V, T>): $Boolean2ObjectFunction<T>;
        composeObject<T>(arg0: $Object2BooleanFunction_<T>): $Object2ReferenceFunction<T, V>;
        andThenReference<T>(arg0: $Reference2ReferenceFunction_<V, T>): $Boolean2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2BooleanFunction_<T>): $Reference2ReferenceFunction<T, V>;
    }
    /**
     * Values that may be interpreted as {@link $Boolean2ReferenceFunction}.
     */
    export type $Boolean2ReferenceFunction_<V> = ((arg0: boolean) => V);
    export class $BooleanPredicate {
        static identity(): $BooleanPredicate;
        static negation(): $BooleanPredicate;
    }
    export interface $BooleanPredicate extends $Predicate<boolean> {
        test(arg0: boolean): boolean;
        /**
         * @deprecated
         */
        test(arg0: boolean): boolean;
        /**
         * @deprecated
         */
        or(arg0: $Predicate_<boolean>): $Predicate<boolean>;
        or(arg0: $BooleanPredicate_): $BooleanPredicate;
        negate(): $BooleanPredicate;
        /**
         * @deprecated
         */
        and(arg0: $Predicate_<boolean>): $Predicate<boolean>;
        and(arg0: $BooleanPredicate_): $BooleanPredicate;
    }
    /**
     * Values that may be interpreted as {@link $BooleanPredicate}.
     */
    export type $BooleanPredicate_ = ((arg0: boolean) => boolean);
    export class $Boolean2ObjectFunction<V> {
    }
    export interface $Boolean2ObjectFunction<V> extends $Function<boolean, V> {
        /**
         * @deprecated
         */
        remove(arg0: $Object): V;
        remove(arg0: boolean): V;
        /**
         * @deprecated
         */
        get(arg0: $Object): V;
        get(arg0: boolean): V;
        /**
         * @deprecated
         */
        put(arg0: boolean, arg1: V): V;
        put(arg0: boolean, arg1: V): V;
        containsKey(arg0: boolean): boolean;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        getOrDefault(arg0: boolean, arg1: V): V;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: V): V;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, boolean>): $Function$1<T, V>;
        defaultReturnValue(): V;
        defaultReturnValue(arg0: V): void;
        andThenByte(arg0: $Object2ByteFunction_<V>): $Boolean2ByteFunction;
        composeByte(arg0: $Byte2BooleanFunction_): $Byte2ObjectFunction<V>;
        andThenShort(arg0: $Object2ShortFunction_<V>): $Boolean2ShortFunction;
        composeShort(arg0: $Short2BooleanFunction_): $Short2ObjectFunction<V>;
        andThenInt(arg0: $Object2IntFunction_<V>): $Boolean2IntFunction;
        composeInt(arg0: $Int2BooleanFunction_): $Int2ObjectFunction<V>;
        andThenLong(arg0: $Object2LongFunction_<V>): $Boolean2LongFunction;
        composeLong(arg0: $Long2BooleanFunction_): $Long2ObjectFunction<V>;
        andThenChar(arg0: $Object2CharFunction_<V>): $Boolean2CharFunction;
        composeChar(arg0: $Char2BooleanFunction_): $Char2ObjectFunction<V>;
        andThenFloat(arg0: $Object2FloatFunction_<V>): $Boolean2FloatFunction;
        composeFloat(arg0: $Float2BooleanFunction_): $Float2ObjectFunction<V>;
        andThenDouble(arg0: $Object2DoubleFunction_<V>): $Boolean2DoubleFunction;
        composeDouble(arg0: $Double2BooleanFunction_): $Double2ObjectFunction<V>;
        andThenObject<T>(arg0: $Object2ObjectFunction_<V, T>): $Boolean2ObjectFunction<T>;
        composeObject<T>(arg0: $Object2BooleanFunction_<T>): $Object2ObjectFunction<T, V>;
        andThenReference<T>(arg0: $Object2ReferenceFunction_<V, T>): $Boolean2ReferenceFunction<T>;
        composeReference<T>(arg0: $Reference2BooleanFunction_<T>): $Reference2ObjectFunction<T, V>;
    }
    /**
     * Values that may be interpreted as {@link $Boolean2ObjectFunction}.
     */
    export type $Boolean2ObjectFunction_<V> = ((arg0: boolean) => V);
}
