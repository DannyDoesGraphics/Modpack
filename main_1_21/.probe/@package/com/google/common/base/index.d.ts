import { $Duration } from "@package/java/time";
import { $Serializable } from "@package/java/io";
import { $Predicate as $Predicate$1, $Predicate_, $Supplier as $Supplier$1, $Function as $Function$1 } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $TimeUnit_ } from "@package/java/util/concurrent";
import { $Pattern } from "@package/java/util/regex";
import { $CharSequence, $Iterable_, $Object, $Iterable } from "@package/java/lang";
import { $List, $Map, $Set } from "@package/java/util";

declare module "@package/com/google/common/base" {
    export class $Optional<T> implements $Serializable {
        get(): T;
        static of<T>(reference: T): $Optional<T>;
        transform<V>(arg0: $Function<T, V>): $Optional<V>;
        isPresent(): boolean;
        or(secondChoice: $Optional<T>): $Optional<T>;
        or(supplier: $Supplier_<T>): T;
        or(defaultValue: T): T;
        asSet(): $Set<T>;
        static absent<T>(): $Optional<T>;
        static fromNullable<T>(nullableReference: T): $Optional<T>;
        static fromJavaUtil<T>(javaUtilOptional: (T) | undefined): $Optional<T>;
        static toJavaUtil<T>(googleOptional: $Optional<T>): (T) | undefined;
        toJavaUtil(): (T) | undefined;
        orNull(): T;
        static presentInstances<T>(optionals: $Iterable_<$Optional<T>>): $Iterable<T>;
        get present(): boolean;
    }
    export class $Supplier<T> {
    }
    export interface $Supplier<T> extends $Supplier$1<T> {
        get(): T;
    }
    /**
     * Values that may be interpreted as {@link $Supplier}.
     */
    export type $Supplier_<T> = (() => T);
    export class $Splitter$MapSplitter {
        split(sequence: $CharSequence): $Map<string, string>;
    }
    export class $Predicate<T> {
    }
    export interface $Predicate<T> extends $Predicate$1<T> {
        equals(object: $Object): boolean;
        test(input: T): boolean;
        apply(input: T): boolean;
    }
    export class $Splitter {
        split(sequence: $CharSequence): $Iterable<string>;
        limit(maxItems: number): $Splitter;
        static on(separatorPattern: $Pattern): $Splitter;
        static on(separatorMatcher: $CharMatcher): $Splitter;
        static on(separator: string): $Splitter;
        static on(separator: string): $Splitter;
        withKeyValueSeparator(keyValueSplitter: $Splitter): $Splitter$MapSplitter;
        withKeyValueSeparator(separator: string): $Splitter$MapSplitter;
        withKeyValueSeparator(separator: string): $Splitter$MapSplitter;
        splitToList(sequence: $CharSequence): $List<string>;
        omitEmptyStrings(): $Splitter;
        static onPattern(separatorPattern: string): $Splitter;
        static fixedLength(length: number): $Splitter;
        trimResults(trimmer: $CharMatcher): $Splitter;
        trimResults(): $Splitter;
        splitToStream(sequence: $CharSequence): $Stream<string>;
    }
    export class $Ticker {
        read(): number;
        static systemTicker(): $Ticker;
    }
    export class $Function<F, T> {
    }
    export interface $Function<F, T> extends $Function$1<F, T> {
        equals(object: $Object): boolean;
        apply(input: F): F;
    }
    export class $Stopwatch {
        reset(): $Stopwatch;
        start(): $Stopwatch;
        stop(): $Stopwatch;
        elapsed(): $Duration;
        elapsed(desiredUnit: $TimeUnit_): number;
        isRunning(): boolean;
        static createStarted(): $Stopwatch;
        static createStarted(ticker: $Ticker): $Stopwatch;
        static createUnstarted(): $Stopwatch;
        static createUnstarted(ticker: $Ticker): $Stopwatch;
        get running(): boolean;
    }
    export class $CharMatcher implements $Predicate<string> {
        static whitespace(): $CharMatcher;
        static anyOf(sequence: $CharSequence): $CharMatcher;
        matches(c: string): boolean;
        /**
         * @deprecated
         */
        apply(character: string): boolean;
        static ascii(): $CharMatcher;
        static noneOf(sequence: $CharSequence): $CharMatcher;
        static is(match: string): $CharMatcher;
        /**
         * @deprecated
         */
        static digit(): $CharMatcher;
        or(other: $CharMatcher): $CharMatcher;
        static inRange(startInclusive: string, endInclusive: string): $CharMatcher;
        and(other: $CharMatcher): $CharMatcher;
        /**
         * @deprecated
         */
        static javaLowerCase(): $CharMatcher;
        /**
         * @deprecated
         */
        static javaUpperCase(): $CharMatcher;
        /**
         * @deprecated
         */
        static javaDigit(): $CharMatcher;
        /**
         * @deprecated
         */
        static javaLetter(): $CharMatcher;
        /**
         * @deprecated
         */
        static javaLetterOrDigit(): $CharMatcher;
        static any(): $CharMatcher;
        static none(): $CharMatcher;
        retainFrom(sequence: $CharSequence): string;
        removeFrom(sequence: $CharSequence): string;
        /**
         * @deprecated
         */
        static invisible(): $CharMatcher;
        static breakingWhitespace(): $CharMatcher;
        static javaIsoControl(): $CharMatcher;
        /**
         * @deprecated
         */
        static singleWidth(): $CharMatcher;
        static isNot(match: string): $CharMatcher;
        static forPredicate(predicate: $Predicate<string>): $CharMatcher;
        precomputed(): $CharMatcher;
        matchesAnyOf(sequence: $CharSequence): boolean;
        matchesAllOf(sequence: $CharSequence): boolean;
        matchesNoneOf(sequence: $CharSequence): boolean;
        indexIn(sequence: $CharSequence, start: number): number;
        indexIn(sequence: $CharSequence): number;
        lastIndexIn(sequence: $CharSequence): number;
        countIn(sequence: $CharSequence): number;
        replaceFrom(sequence: $CharSequence, replacement: $CharSequence): string;
        replaceFrom(sequence: $CharSequence, replacement: string): string;
        trimFrom(sequence: $CharSequence): string;
        trimLeadingFrom(sequence: $CharSequence): string;
        trimTrailingFrom(sequence: $CharSequence): string;
        collapseFrom(sequence: $CharSequence, replacement: string): string;
        trimAndCollapseFrom(sequence: $CharSequence, replacement: string): string;
        test(input: string): boolean;
        or(arg0: $Predicate_<string>): $Predicate$1<string>;
        and(arg0: $Predicate_<string>): $Predicate$1<string>;
        negate(): $Predicate$1<string>;
    }
}
