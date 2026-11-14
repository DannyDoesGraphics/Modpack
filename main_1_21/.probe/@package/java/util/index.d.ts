import { $Instant, $ZoneId } from "@package/java/time";
import { $PrintStream, $Reader, $InputStream, $Writer, $PrintWriter, $Serializable, $OutputStream } from "@package/java/io";
import { $IntFunction_, $LongConsumer_, $Supplier_, $DoubleConsumer_, $LongSupplier_, $Consumer_, $Predicate_, $DoubleSupplier_, $IntSupplier_, $IntConsumer, $BiConsumer_, $ToDoubleFunction_, $LongConsumer, $Function_, $IntConsumer_, $UnaryOperator_, $BiFunction_, $Supplier, $DoubleConsumer, $ToLongFunction_, $ToIntFunction_ } from "@package/java/util/function";
import { $LongStream, $Stream, $IntStream, $DoubleStream } from "@package/java/util/stream";
import { $Charset } from "@package/java/nio/charset";
import { $RandomGenerator, $RandomGenerator_ } from "@package/java/util/random";
import { $Enum, $Cloneable, $ModuleLayer, $Comparable, $Iterable, $Module, $ClassLoader, $Throwable, $Class, $Runnable_, $Object, $Runnable } from "@package/java/lang";
import { $ByteBuffer, $LongBuffer } from "@package/java/nio";
export * as function from "@package/java/util/function";
export * as concurrent from "@package/java/util/concurrent";
export * as logging from "@package/java/util/logging";
export * as jar from "@package/java/util/jar";
export * as stream from "@package/java/util/stream";
export * as regex from "@package/java/util/regex";
export * as zip from "@package/java/util/zip";
export * as random from "@package/java/util/random";

declare module "@package/java/util" {
    export class $UUID implements $Serializable, $Comparable<$UUID> {
        version(): number;
        compareTo(arg0: $UUID_): number;
        timestamp(): number;
        node(): number;
        variant(): number;
        static fromString(arg0: string): $UUID;
        static randomUUID(): $UUID;
        static nameUUIDFromBytes(arg0: number[]): $UUID;
        getLeastSignificantBits(): number;
        getMostSignificantBits(): number;
        clockSequence(): number;
        constructor(arg0: number, arg1: number);
        get leastSignificantBits(): number;
        get mostSignificantBits(): number;
    }
    /**
     * Values that may be interpreted as {@link $UUID}.
     */
    export type $UUID_ = string;
    export class $EnumMap<K extends $Enum<K>, V> extends $AbstractMap<K, V> implements $Serializable, $Cloneable {
        put(arg0: K, arg1: V): V;
        clone(): $Object;
        constructor(arg0: $EnumMap<K, V>);
        constructor(arg0: $Map_<K, V>);
        constructor(arg0: $Class<K>);
    }
    export class $TimerTask implements $Runnable {
        scheduledExecutionTime(): number;
        run(): void;
        cancel(): boolean;
    }
    export class $Collection<E> {
        [Symbol.iterator](): Iterator<E>
    }
    export interface $Collection<E> extends $Iterable<E> {
        remove(arg0: $Object): boolean;
        size(): number;
        equals(arg0: $Object): boolean;
        hashCode(): number;
        clear(): void;
        isEmpty(): boolean;
        add(arg0: E): boolean;
        toArray<T>(arg0: T[]): T[];
        toArray<T>(arg0: $IntFunction_<T[]>): T[];
        toArray(): $Object[];
        iterator(): $Iterator<E>;
        stream(): $Stream<E>;
        contains(arg0: $Object): boolean;
        spliterator(): $Spliterator<E>;
        addAll(arg0: $Collection_<E>): boolean;
        removeIf(arg0: $Predicate_<E>): boolean;
        removeAll(arg0: $Collection_<never>): boolean;
        retainAll(arg0: $Collection_<never>): boolean;
        containsAll(arg0: $Collection_<never>): boolean;
        parallelStream(): $Stream<E>;
        [Symbol.iterator](): Iterator<E>
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Collection}.
     */
    export type $Collection_<E> = E[];
    export class $PrimitiveIterator$OfInt {
    }
    export interface $PrimitiveIterator$OfInt extends $PrimitiveIterator<number, $IntConsumer> {
        forEachRemaining(arg0: $IntConsumer_): void;
        forEachRemaining(arg0: $Consumer_<number>): void;
        nextInt(): number;
        next(): number;
    }
    export class $IntSummaryStatistics implements $IntConsumer {
        accept(arg0: number): void;
        combine(arg0: $IntSummaryStatistics): void;
        getCount(): number;
        getSum(): number;
        getMin(): number;
        getAverage(): number;
        getMax(): number;
        andThen(arg0: $IntConsumer_): $IntConsumer;
        constructor();
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        get count(): number;
        get sum(): number;
        get min(): number;
        get average(): number;
        get max(): number;
    }
    export class $ImmutableCollections$MapN<K, V> extends $ImmutableCollections$AbstractImmutableMap<K, V> {
    }
    export class $Calendar implements $Serializable, $Cloneable, $Comparable<$Calendar> {
        get(arg0: number): number;
        clone(): $Object;
        compareTo(arg0: $Calendar): number;
        clear(arg0: number): void;
        clear(): void;
        add(arg0: number, arg1: number): void;
        static getInstance(): $Calendar;
        static getInstance(arg0: $TimeZone, arg1: $Locale): $Calendar;
        static getInstance(arg0: $TimeZone): $Calendar;
        static getInstance(arg0: $Locale): $Calendar;
        set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        set(arg0: number, arg1: number, arg2: number): void;
        set(arg0: number, arg1: number): void;
        isSet(arg0: number): boolean;
        before(arg0: $Object): boolean;
        after(arg0: $Object): boolean;
        getTime(): $Date;
        getDisplayName(arg0: number, arg1: number, arg2: $Locale): string;
        toInstant(): $Instant;
        static getAvailableLocales(): $Locale[];
        setTimeZone(arg0: $TimeZone): void;
        getTimeZone(): $TimeZone;
        setLenient(arg0: boolean): void;
        isLenient(): boolean;
        getFirstDayOfWeek(): number;
        getMinimalDaysInFirstWeek(): number;
        setTimeInMillis(arg0: number): void;
        setTime(arg0: $Date): void;
        isWeekDateSupported(): boolean;
        getWeekYear(): number;
        getMaximum(arg0: number): number;
        getLeastMaximum(arg0: number): number;
        getDisplayNames(arg0: number, arg1: number, arg2: $Locale): $Map<string, number>;
        getCalendarType(): string;
        getMinimum(arg0: number): number;
        getTimeInMillis(): number;
        roll(arg0: number, arg1: number): void;
        roll(arg0: number, arg1: boolean): void;
        getGreatestMinimum(arg0: number): number;
        static getAvailableCalendarTypes(): $Set<string>;
        setFirstDayOfWeek(arg0: number): void;
        setMinimalDaysInFirstWeek(arg0: number): void;
        setWeekDate(arg0: number, arg1: number, arg2: number): void;
        getWeeksInWeekYear(): number;
        getActualMinimum(arg0: number): number;
        getActualMaximum(arg0: number): number;
        static MONTH: number;
        static THURSDAY: number;
        static WEEK_OF_MONTH: number;
        static DECEMBER: number;
        static NARROW_STANDALONE: number;
        static DAY_OF_WEEK_IN_MONTH: number;
        static NARROW_FORMAT: number;
        static WEDNESDAY: number;
        static LONG_STANDALONE: number;
        static YEAR: number;
        static WEEK_OF_YEAR: number;
        static FIELD_COUNT: number;
        static SATURDAY: number;
        static MINUTE: number;
        static JANUARY: number;
        static DST_OFFSET: number;
        static SUNDAY: number;
        static LONG_FORMAT: number;
        static TUESDAY: number;
        static SEPTEMBER: number;
        static AM: number;
        static DATE: number;
        static ERA: number;
        static AUGUST: number;
        static JULY: number;
        static DAY_OF_WEEK: number;
        static DAY_OF_YEAR: number;
        static MAY: number;
        static DAY_OF_MONTH: number;
        static HOUR: number;
        static FRIDAY: number;
        static AM_PM: number;
        static FEBRUARY: number;
        static ALL_STYLES: number;
        static ZONE_OFFSET: number;
        static HOUR_OF_DAY: number;
        static UNDECIMBER: number;
        static APRIL: number;
        static LONG: number;
        static JUNE: number;
        static SHORT_STANDALONE: number;
        static OCTOBER: number;
        static NOVEMBER: number;
        static SHORT: number;
        static MONDAY: number;
        static MARCH: number;
        static SECOND: number;
        static MILLISECOND: number;
        static PM: number;
        static SHORT_FORMAT: number;
        static get availableLocales(): $Locale[];
        get weekDateSupported(): boolean;
        get weekYear(): number;
        get calendarType(): string;
        static get availableCalendarTypes(): $Set<string>;
        get weeksInWeekYear(): number;
    }
    export class $SequencedMap<K, V> {
    }
    export interface $SequencedMap<K, V> extends $Map<K, V> {
        reversed(): $SequencedMap<K, V>;
        sequencedKeySet(): $SequencedSet<K>;
        sequencedValues(): $SequencedCollection<V>;
        sequencedEntrySet(): $SequencedSet<$Map$Entry<K, V>>;
        putFirst(arg0: K, arg1: V): V;
        putLast(arg0: K, arg1: V): V;
        firstEntry(): $Map$Entry<K, V>;
        lastEntry(): $Map$Entry<K, V>;
        pollFirstEntry(): $Map$Entry<K, V>;
        pollLastEntry(): $Map$Entry<K, V>;
    }
    export class $Set<E> {
        static copyOf<E>(arg0: $Collection_<E>): $Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): $Set<E>;
        static of<E>(): $Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $Set<E>;
        static of<E>(...arg0: E[]): $Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E): $Set<E>;
        static of<E>(arg0: E): $Set<E>;
        static of<E>(arg0: E, arg1: E): $Set<E>;
        [Symbol.iterator](): Iterator<E>
    }
    export interface $Set<E> extends $Collection<E> {
        remove(arg0: $Object): boolean;
        size(): number;
        equals(arg0: $Object): boolean;
        hashCode(): number;
        clear(): void;
        isEmpty(): boolean;
        add(arg0: E): boolean;
        toArray(): $Object[];
        toArray<T>(arg0: T[]): T[];
        iterator(): $Iterator<E>;
        contains(arg0: $Object): boolean;
        spliterator(): $Spliterator<E>;
        addAll(arg0: $Collection_<E>): boolean;
        removeAll(arg0: $Collection_<never>): boolean;
        retainAll(arg0: $Collection_<never>): boolean;
        containsAll(arg0: $Collection_<never>): boolean;
        [Symbol.iterator](): Iterator<E>
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Set}.
     */
    export type $Set_<E> = E[];
    export class $Locale$FilteringMode extends $Enum<$Locale$FilteringMode> {
        static values(): $Locale$FilteringMode[];
        static valueOf(arg0: string): $Locale$FilteringMode;
        static IGNORE_EXTENDED_RANGES: $Locale$FilteringMode;
        static MAP_EXTENDED_RANGES: $Locale$FilteringMode;
        static AUTOSELECT_FILTERING: $Locale$FilteringMode;
        static REJECT_EXTENDED_RANGES: $Locale$FilteringMode;
        static EXTENDED_FILTERING: $Locale$FilteringMode;
    }
    /**
     * Values that may be interpreted as {@link $Locale$FilteringMode}.
     */
    export type $Locale$FilteringMode_ = "autoselect_filtering" | "extended_filtering" | "ignore_extended_ranges" | "map_extended_ranges" | "reject_extended_ranges";
    export class $SequencedCollection<E> {
    }
    export interface $SequencedCollection<E> extends $Collection<E> {
        getFirst(): E;
        getLast(): E;
        addFirst(arg0: E): void;
        addLast(arg0: E): void;
        removeFirst(): E;
        removeLast(): E;
        reversed(): $SequencedCollection<E>;
        get first(): E;
        get last(): E;
    }
    export class $ResourceBundle$Control {
        static getControl(arg0: $List_<string>): $ResourceBundle$Control;
        getFormats(arg0: string): $List<string>;
        getCandidateLocales(arg0: string, arg1: $Locale): $List<$Locale>;
        getFallbackLocale(arg0: string, arg1: $Locale): $Locale;
        newBundle(arg0: string, arg1: $Locale, arg2: string, arg3: $ClassLoader, arg4: boolean): $ResourceBundle;
        needsReload(arg0: string, arg1: $Locale, arg2: string, arg3: $ClassLoader, arg4: $ResourceBundle, arg5: number): boolean;
        getTimeToLive(arg0: string, arg1: $Locale): number;
        toBundleName(arg0: string, arg1: $Locale): string;
        toResourceName(arg0: string, arg1: string): string;
        static getNoFallbackControl(arg0: $List_<string>): $ResourceBundle$Control;
        static FORMAT_PROPERTIES: $List<string>;
        static TTL_DONT_CACHE: number;
        static FORMAT_DEFAULT: $List<string>;
        static TTL_NO_EXPIRATION_CONTROL: number;
        static FORMAT_CLASS: $List<string>;
    }
    export class $PrimitiveIterator$OfDouble {
    }
    export interface $PrimitiveIterator$OfDouble extends $PrimitiveIterator<number, $DoubleConsumer> {
        forEachRemaining(arg0: $DoubleConsumer_): void;
        forEachRemaining(arg0: $Consumer_<number>): void;
        nextDouble(): number;
        next(): number;
    }
    export class $ServiceLoader$Provider<S> {
    }
    export interface $ServiceLoader$Provider<S> extends $Supplier<S> {
        get(): S;
        type(): $Class<S>;
    }
    export class $Comparator<T> {
        static reverseOrder<T extends $Comparable<T>>(): $Comparator<T>;
        static comparing<T, U extends $Comparable<U>>(arg0: $Function_<T, U>): $Comparator<T>;
        static comparing<T, U>(arg0: $Function_<T, U>, arg1: $Comparator<U>): $Comparator<T>;
        static comparingInt<T>(arg0: $ToIntFunction_<T>): $Comparator<T>;
        static comparingLong<T>(arg0: $ToLongFunction_<T>): $Comparator<T>;
        static comparingDouble<T>(arg0: $ToDoubleFunction_<T>): $Comparator<T>;
        static naturalOrder<T extends $Comparable<T>>(): $Comparator<T>;
        static nullsFirst<T>(arg0: $Comparator<T>): $Comparator<T>;
        static nullsLast<T>(arg0: $Comparator<T>): $Comparator<T>;
    }
    export interface $Comparator<T> {
        equals(arg0: $Object): boolean;
        compare(arg0: T, arg1: T): number;
        reversed(): $Comparator<T>;
        thenComparing<U>(arg0: $Function_<T, U>, arg1: $Comparator<U>): $Comparator<T>;
        thenComparing(arg0: $Comparator<T>): $Comparator<T>;
        thenComparing<U extends $Comparable<U>>(arg0: $Function_<T, U>): $Comparator<T>;
        thenComparingInt(arg0: $ToIntFunction_<T>): $Comparator<T>;
        thenComparingLong(arg0: $ToLongFunction_<T>): $Comparator<T>;
        thenComparingDouble(arg0: $ToDoubleFunction_<T>): $Comparator<T>;
    }
    export class $EventObject implements $Serializable {
        getSource(): $Object;
        constructor(arg0: $Object);
        get source(): $Object;
    }
    export class $OptionalLong {
        isEmpty(): boolean;
        stream(): $LongStream;
        static of(arg0: number): $OptionalLong;
        static empty(): $OptionalLong;
        isPresent(): boolean;
        orElse(arg0: number): number;
        orElseThrow<X extends $Throwable>(arg0: $Supplier_<X>): number;
        orElseThrow(): number;
        ifPresent(arg0: $LongConsumer_): void;
        ifPresentOrElse(arg0: $LongConsumer_, arg1: $Runnable_): void;
        orElseGet(arg0: $LongSupplier_): number;
        getAsLong(): number;
        get present(): boolean;
        get asLong(): number;
    }
    export class $LongSummaryStatistics implements $LongConsumer, $IntConsumer {
        accept(arg0: number): void;
        accept(arg0: number): void;
        combine(arg0: $LongSummaryStatistics): void;
        getCount(): number;
        getSum(): number;
        getMin(): number;
        getAverage(): number;
        getMax(): number;
        andThen(arg0: $LongConsumer_): $LongConsumer;
        andThen(arg0: $IntConsumer_): $IntConsumer;
        constructor();
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        get count(): number;
        get sum(): number;
        get min(): number;
        get average(): number;
        get max(): number;
    }
    export class $Hashtable<K, V> extends $Dictionary<K, V> implements $Map<K, V>, $Cloneable, $Serializable {
        remove(arg0: $Object, arg1: $Object): boolean;
        values(): $Collection<V>;
        clone(): $Object;
        clear(): void;
        replace(arg0: K, arg1: V, arg2: V): boolean;
        replace(arg0: K, arg1: V): V;
        replaceAll(arg0: $BiFunction_<K, V, V>): void;
        contains(arg0: $Object): boolean;
        merge(arg0: K, arg1: V, arg2: $BiFunction_<V, V, V>): V;
        entrySet(): $Set<$Map$Entry<K, V>>;
        putAll(arg0: $Map_<K, V>): void;
        putIfAbsent(arg0: K, arg1: V): V;
        compute(arg0: K, arg1: $BiFunction_<K, V, V>): V;
        forEach(arg0: $BiConsumer_<K, V>): void;
        containsKey(arg0: $Object): boolean;
        computeIfAbsent(arg0: K, arg1: $Function_<K, V>): V;
        keySet(): $Set<K>;
        containsValue(arg0: $Object): boolean;
        getOrDefault(arg0: $Object, arg1: V): V;
        computeIfPresent(arg0: K, arg1: $BiFunction_<K, V, V>): V;
        constructor(arg0: $Map_<K, V>);
        constructor();
        constructor(arg0: number);
        constructor(arg0: number, arg1: number);
    }
    export class $Queue<E> {
    }
    export interface $Queue<E> extends $Collection<E> {
        remove(): E;
        add(arg0: E): boolean;
        peek(): E;
        element(): E;
        poll(): E;
        offer(arg0: E): boolean;
    }
    export class $PrimitiveIterator$OfLong {
    }
    export interface $PrimitiveIterator$OfLong extends $PrimitiveIterator<number, $LongConsumer> {
        forEachRemaining(arg0: $LongConsumer_): void;
        forEachRemaining(arg0: $Consumer_<number>): void;
        nextLong(): number;
        next(): number;
    }
    export class $OptionalInt {
        isEmpty(): boolean;
        stream(): $IntStream;
        static of(arg0: number): $OptionalInt;
        static empty(): $OptionalInt;
        isPresent(): boolean;
        orElse(arg0: number): number;
        orElseThrow<X extends $Throwable>(arg0: $Supplier_<X>): number;
        orElseThrow(): number;
        ifPresent(arg0: $IntConsumer_): void;
        ifPresentOrElse(arg0: $IntConsumer_, arg1: $Runnable_): void;
        orElseGet(arg0: $IntSupplier_): number;
        getAsInt(): number;
        get present(): boolean;
        get asInt(): number;
    }
    export class $OptionalDouble {
        isEmpty(): boolean;
        stream(): $DoubleStream;
        static of(arg0: number): $OptionalDouble;
        static empty(): $OptionalDouble;
        isPresent(): boolean;
        orElse(arg0: number): number;
        orElseThrow<X extends $Throwable>(arg0: $Supplier_<X>): number;
        orElseThrow(): number;
        ifPresent(arg0: $DoubleConsumer_): void;
        ifPresentOrElse(arg0: $DoubleConsumer_, arg1: $Runnable_): void;
        orElseGet(arg0: $DoubleSupplier_): number;
        getAsDouble(): number;
        get present(): boolean;
        get asDouble(): number;
    }
    export class $AbstractMap<K, V> implements $Map<K, V> {
        remove(arg0: $Object): V;
        size(): number;
        get(arg0: $Object): V;
        put(arg0: K, arg1: V): V;
        values(): $Collection<V>;
        clear(): void;
        isEmpty(): boolean;
        entrySet(): $Set<$Map$Entry<K, V>>;
        putAll(arg0: $Map_<K, V>): void;
        containsKey(arg0: $Object): boolean;
        keySet(): $Set<K>;
        containsValue(arg0: $Object): boolean;
        remove(arg0: $Object, arg1: $Object): boolean;
        replace(arg0: K, arg1: V, arg2: V): boolean;
        replace(arg0: K, arg1: V): V;
        replaceAll(arg0: $BiFunction_<K, V, V>): void;
        merge(arg0: K, arg1: V, arg2: $BiFunction_<V, V, V>): V;
        putIfAbsent(arg0: K, arg1: V): V;
        compute(arg0: K, arg1: $BiFunction_<K, V, V>): V;
        forEach(arg0: $BiConsumer_<K, V>): void;
        computeIfAbsent(arg0: K, arg1: $Function_<K, V>): V;
        getOrDefault(arg0: $Object, arg1: V): V;
        computeIfPresent(arg0: K, arg1: $BiFunction_<K, V, V>): V;
        get empty(): boolean;
    }
    export class $Spliterator$OfInt {
    }
    export interface $Spliterator$OfInt extends $Spliterator$OfPrimitive<number, $IntConsumer, $Spliterator$OfInt> {
        forEachRemaining(arg0: $IntConsumer_): void;
        forEachRemaining(arg0: $Consumer_<number>): void;
        tryAdvance(arg0: $IntConsumer_): boolean;
        tryAdvance(arg0: $Consumer_<number>): boolean;
        trySplit(): $Spliterator<number>;
    }
    export class $Map<K, V> {
        static copyOf<K, V>(arg0: $Map_<K, V>): $Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<K, V>;
        static of<K, V>(): $Map<K, V>;
        static of<K, V>(arg0: K, arg1: V): $Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<K, V>;
        static entry<K, V>(arg0: K, arg1: V): $Map$Entry<K, V>;
        static ofEntries<K, V>(...arg0: $Map$Entry<K, V>[]): $Map<K, V>;
    }
    export interface $Map<K, V> {
        remove(arg0: $Object, arg1: $Object): boolean;
        remove(arg0: $Object): V;
        size(): number;
        get(arg0: $Object): V;
        put(arg0: K, arg1: V): V;
        equals(arg0: $Object): boolean;
        values(): $Collection<V>;
        hashCode(): number;
        clear(): void;
        isEmpty(): boolean;
        replace(arg0: K, arg1: V, arg2: V): boolean;
        replace(arg0: K, arg1: V): V;
        replaceAll(arg0: $BiFunction_<K, V, V>): void;
        merge(arg0: K, arg1: V, arg2: $BiFunction_<V, V, V>): V;
        entrySet(): $Set<$Map$Entry<K, V>>;
        putAll(arg0: $Map_<K, V>): void;
        putIfAbsent(arg0: K, arg1: V): V;
        compute(arg0: K, arg1: $BiFunction_<K, V, V>): V;
        forEach(arg0: $BiConsumer_<K, V>): void;
        containsKey(arg0: $Object): boolean;
        computeIfAbsent(arg0: K, arg1: $Function_<K, V>): V;
        keySet(): $Set<K>;
        containsValue(arg0: $Object): boolean;
        getOrDefault(arg0: $Object, arg1: V): V;
        computeIfPresent(arg0: K, arg1: $BiFunction_<K, V, V>): V;
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Map}.
     */
    export type $Map_<K, V> = {[key: string]: V};
    export class $EnumSet<E extends $Enum<E>> extends $AbstractSet<E> implements $Cloneable, $Serializable {
        clone(): $EnumSet<E>;
        static copyOf<E extends $Enum<E>>(arg0: $Collection_<E>): $EnumSet<E>;
        static copyOf<E extends $Enum<E>>(arg0: $EnumSet<E>): $EnumSet<E>;
        static of<E extends $Enum<E>>(arg0: E, arg1: E, arg2: E): $EnumSet<E>;
        static of<E extends $Enum<E>>(arg0: E, arg1: E): $EnumSet<E>;
        static of<E extends $Enum<E>>(arg0: E, arg1: E, arg2: E, arg3: E): $EnumSet<E>;
        static of<E extends $Enum<E>>(arg0: E, ...arg1: E[]): $EnumSet<E>;
        static of<E extends $Enum<E>>(arg0: E): $EnumSet<E>;
        static of<E extends $Enum<E>>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $EnumSet<E>;
        static noneOf<E extends $Enum<E>>(arg0: $Class<E>): $EnumSet<E>;
        static range<E extends $Enum<E>>(arg0: E, arg1: E): $EnumSet<E>;
        static allOf<E extends $Enum<E>>(arg0: $Class<E>): $EnumSet<E>;
        static complementOf<E extends $Enum<E>>(arg0: $EnumSet<E>): $EnumSet<E>;
    }
    export class $SequencedSet<E> {
    }
    export interface $SequencedSet<E> extends $SequencedCollection<E>, $Set<E> {
        reversed(): $SequencedSet<E>;
    }
    export class $AbstractSet<E> extends $AbstractCollection<E> implements $Set<E> {
    }
    export class $Dictionary<K, V> {
        remove(arg0: $Object): V;
        size(): number;
        get(arg0: $Object): V;
        put(arg0: K, arg1: V): V;
        isEmpty(): boolean;
        elements(): $Enumeration<V>;
        keys(): $Enumeration<K>;
        constructor();
        get empty(): boolean;
    }
    export class $AbstractQueue<E> extends $AbstractCollection<E> implements $Queue<E> {
        remove(): E;
        element(): E;
    }
    export class $List<E> {
        static copyOf<E>(arg0: $Collection_<E>): $List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E): $List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<E>;
        static of<E>(): $List<E>;
        static of<E>(arg0: E): $List<E>;
        static of<E>(arg0: E, arg1: E): $List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<E>;
        static of<E>(...arg0: E[]): $List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<E>;
        [Symbol.iterator](): Iterator<E>
    }
    export interface $List<E> extends $SequencedCollection<E> {
        remove(arg0: $Object): boolean;
        remove(arg0: number): E;
        size(): number;
        get(arg0: number): E;
        equals(arg0: $Object): boolean;
        hashCode(): number;
        indexOf(arg0: $Object): number;
        clear(): void;
        lastIndexOf(arg0: $Object): number;
        isEmpty(): boolean;
        replaceAll(arg0: $UnaryOperator_<E>): void;
        add(arg0: E): boolean;
        add(arg0: number, arg1: E): void;
        subList(arg0: number, arg1: number): $List<E>;
        toArray(): $Object[];
        toArray<T>(arg0: T[]): T[];
        iterator(): $Iterator<E>;
        contains(arg0: $Object): boolean;
        spliterator(): $Spliterator<E>;
        addAll(arg0: $Collection_<E>): boolean;
        addAll(arg0: number, arg1: $Collection_<E>): boolean;
        set(arg0: number, arg1: E): E;
        sort(arg0: $Comparator<E>): void;
        getFirst(): E;
        getLast(): E;
        addFirst(arg0: E): void;
        addLast(arg0: E): void;
        removeFirst(): E;
        removeLast(): E;
        removeAll(arg0: $Collection_<never>): boolean;
        retainAll(arg0: $Collection_<never>): boolean;
        listIterator(): $ListIterator<E>;
        listIterator(arg0: number): $ListIterator<E>;
        containsAll(arg0: $Collection_<never>): boolean;
        reversed(): $SequencedCollection<E>;
        [Symbol.iterator](): Iterator<E>
        get empty(): boolean;
        get first(): E;
        get last(): E;
    }
    /**
     * Values that may be interpreted as {@link $List}.
     */
    export type $List_<E> = E[];
    export class $Map$Entry<K, V> {
        static copyOf<K, V>(arg0: $Map$Entry<K, V>): $Map$Entry<K, V>;
        static comparingByKey<K, V>(arg0: $Comparator<K>): $Comparator<$Map$Entry<K, V>>;
        static comparingByKey<K extends $Comparable<K>, V>(): $Comparator<$Map$Entry<K, V>>;
        static comparingByValue<K, V extends $Comparable<V>>(): $Comparator<$Map$Entry<K, V>>;
        static comparingByValue<K, V>(arg0: $Comparator<V>): $Comparator<$Map$Entry<K, V>>;
    }
    export interface $Map$Entry<K, V> {
        equals(arg0: $Object): boolean;
        hashCode(): number;
        getValue(): V;
        getKey(): K;
        setValue(arg0: V): V;
        get key(): K;
    }
    export class $ListIterator<E> {
    }
    export interface $ListIterator<E> extends $Iterator<E> {
        remove(): void;
        add(arg0: E): void;
        hasNext(): boolean;
        next(): E;
        set(arg0: E): void;
        nextIndex(): number;
        previousIndex(): number;
        hasPrevious(): boolean;
        previous(): E;
    }
    export class $Locale$LanguageRange {
        getWeight(): number;
        static mapEquivalents(arg0: $List_<$Locale$LanguageRange>, arg1: $Map_<string, $List_<string>>): $List<$Locale$LanguageRange>;
        getRange(): string;
        static parse(arg0: string): $List<$Locale$LanguageRange>;
        static parse(arg0: string, arg1: $Map_<string, $List_<string>>): $List<$Locale$LanguageRange>;
        static MAX_WEIGHT: number;
        static MIN_WEIGHT: number;
        constructor(arg0: string, arg1: number);
        constructor(arg0: string);
        get weight(): number;
        get range(): string;
    }
    export class $SortedMap<K, V> {
    }
    export interface $SortedMap<K, V> extends $SequencedMap<K, V> {
        values(): $Collection<V>;
        entrySet(): $Set<$Map$Entry<K, V>>;
        keySet(): $Set<K>;
        reversed(): $SortedMap<K, V>;
        comparator(): $Comparator<K>;
        firstKey(): K;
        putFirst(arg0: K, arg1: V): V;
        putLast(arg0: K, arg1: V): V;
        subMap(arg0: K, arg1: K): $SortedMap<K, V>;
        headMap(arg0: K): $SortedMap<K, V>;
        tailMap(arg0: K): $SortedMap<K, V>;
        lastKey(): K;
    }
    export class $Optional<T> {
        get(): T;
        isEmpty(): boolean;
        map<U>(arg0: $Function_<T, U>): (U) | undefined;
        stream(): $Stream<T>;
        static of<T>(arg0: T): (T) | undefined;
        filter(arg0: $Predicate_<T>): (T) | undefined;
        static empty<T>(): (T) | undefined;
        flatMap<U>(arg0: $Function_<T, (U) | undefined>): (U) | undefined;
        isPresent(): boolean;
        orElse(arg0: T): T;
        orElseThrow<X extends $Throwable>(arg0: $Supplier_<X>): T;
        orElseThrow(): T;
        static ofNullable<T>(arg0: T): (T) | undefined;
        ifPresent(arg0: $Consumer_<T>): void;
        ifPresentOrElse(arg0: $Consumer_<T>, arg1: $Runnable_): void;
        or(arg0: $Supplier_<(T) | undefined>): (T) | undefined;
        orElseGet(arg0: $Supplier_<T>): T;
        get present(): boolean;
    }
    export class $AbstractSequentialList<E> extends $AbstractList<E> {
        reversed(): $SequencedCollection<E>;
    }
    export class $Spliterator$OfDouble {
    }
    export interface $Spliterator$OfDouble extends $Spliterator$OfPrimitive<number, $DoubleConsumer, $Spliterator$OfDouble> {
        forEachRemaining(arg0: $DoubleConsumer_): void;
        forEachRemaining(arg0: $Consumer_<number>): void;
        tryAdvance(arg0: $DoubleConsumer_): boolean;
        tryAdvance(arg0: $Consumer_<number>): boolean;
        trySplit(): $Spliterator<number>;
    }
    export class $LinkedHashSet<E> extends $HashSet<E> implements $SequencedSet<E>, $Cloneable, $Serializable {
        getFirst(): E;
        getLast(): E;
        addFirst(arg0: E): void;
        addLast(arg0: E): void;
        removeFirst(): E;
        removeLast(): E;
        static newLinkedHashSet<T>(arg0: number): $LinkedHashSet<T>;
        reversed(): $SequencedSet<E>;
        constructor(arg0: $Collection_<E>);
        constructor();
        constructor(arg0: number);
        constructor(arg0: number, arg1: number);
        get first(): E;
        get last(): E;
    }
    export class $HashSet<E> extends $AbstractSet<E> implements $Set<E>, $Cloneable, $Serializable {
        clone(): $Object;
        static newHashSet<T>(arg0: number): $HashSet<T>;
        constructor(arg0: number);
        constructor(arg0: number, arg1: number);
        constructor(arg0: $Collection_<E>);
        constructor();
    }
    export class $Currency implements $Serializable {
        static getInstance(arg0: $Locale): $Currency;
        static getInstance(arg0: string): $Currency;
        getDisplayName(): string;
        getDisplayName(arg0: $Locale): string;
        getSymbol(): string;
        getSymbol(arg0: $Locale): string;
        getCurrencyCode(): string;
        getDefaultFractionDigits(): number;
        static getAvailableCurrencies(): $Set<$Currency>;
        getNumericCode(): number;
        getNumericCodeAsString(): string;
        get currencyCode(): string;
        get defaultFractionDigits(): number;
        static get availableCurrencies(): $Set<$Currency>;
        get numericCode(): number;
        get numericCodeAsString(): string;
    }
    export class $WeakHashMap<K, V> extends $AbstractMap<K, V> implements $Map<K, V> {
        static newWeakHashMap<K, V>(arg0: number): $WeakHashMap<K, V>;
        constructor(arg0: $Map_<K, V>);
        constructor(arg0: number);
        constructor(arg0: number, arg1: number);
        constructor();
    }
    export class $Locale$IsoCountryCode extends $Enum<$Locale$IsoCountryCode> {
        static values(): $Locale$IsoCountryCode[];
        static valueOf(arg0: string): $Locale$IsoCountryCode;
        static PART3: $Locale$IsoCountryCode;
        static PART1_ALPHA2: $Locale$IsoCountryCode;
        static PART1_ALPHA3: $Locale$IsoCountryCode;
    }
    /**
     * Values that may be interpreted as {@link $Locale$IsoCountryCode}.
     */
    export type $Locale$IsoCountryCode_ = "part1_alpha2" | "part1_alpha3" | "part3";
    export class $AbstractCollection<E> implements $Collection<E> {
        remove(arg0: $Object): boolean;
        size(): number;
        clear(): void;
        isEmpty(): boolean;
        add(arg0: E): boolean;
        toArray<T>(arg0: T[]): T[];
        toArray(): $Object[];
        iterator(): $Iterator<E>;
        contains(arg0: $Object): boolean;
        addAll(arg0: $Collection_<E>): boolean;
        removeAll(arg0: $Collection_<never>): boolean;
        retainAll(arg0: $Collection_<never>): boolean;
        containsAll(arg0: $Collection_<never>): boolean;
        toArray<T>(arg0: $IntFunction_<T[]>): T[];
        stream(): $Stream<E>;
        spliterator(): $Spliterator<E>;
        removeIf(arg0: $Predicate_<E>): boolean;
        parallelStream(): $Stream<E>;
        forEach(arg0: $Consumer_<E>): void;
        [Symbol.iterator](): Iterator<E>
        get empty(): boolean;
    }
    export class $DoubleSummaryStatistics implements $DoubleConsumer {
        accept(arg0: number): void;
        combine(arg0: $DoubleSummaryStatistics): void;
        getCount(): number;
        getSum(): number;
        getMin(): number;
        getAverage(): number;
        getMax(): number;
        andThen(arg0: $DoubleConsumer_): $DoubleConsumer;
        constructor();
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        get count(): number;
        get sum(): number;
        get min(): number;
        get average(): number;
        get max(): number;
    }
    export class $Spliterator$OfPrimitive<T, T_CONS, T_SPLITR extends $Spliterator$OfPrimitive<T, T_CONS, T_SPLITR>> {
    }
    export interface $Spliterator$OfPrimitive<T, T_CONS, T_SPLITR extends $Spliterator$OfPrimitive<T, T_CONS, T_SPLITR>> extends $Spliterator<T> {
        forEachRemaining(arg0: T_CONS): void;
        tryAdvance(arg0: T_CONS): boolean;
        trySplit(): $Spliterator<T>;
    }
    export class $Spliterator<T> {
        static NONNULL: number;
        static SUBSIZED: number;
        static ORDERED: number;
        static DISTINCT: number;
        static SIZED: number;
        static IMMUTABLE: number;
        static CONCURRENT: number;
        static SORTED: number;
    }
    export interface $Spliterator<T> {
        forEachRemaining(arg0: $Consumer_<T>): void;
        characteristics(): number;
        trySplit(): $Spliterator<T>;
        tryAdvance(arg0: $Consumer_<T>): boolean;
        estimateSize(): number;
        getExactSizeIfKnown(): number;
        hasCharacteristics(arg0: number): boolean;
        getComparator(): $Comparator<T>;
        get exactSizeIfKnown(): number;
        get comparator(): $Comparator<T>;
    }
    export class $Deque<E> {
        [Symbol.iterator](): Iterator<E>
    }
    export interface $Deque<E> extends $Queue<E>, $SequencedCollection<E> {
        remove(arg0: $Object): boolean;
        remove(): E;
        size(): number;
        add(arg0: E): boolean;
        iterator(): $Iterator<E>;
        contains(arg0: $Object): boolean;
        addAll(arg0: $Collection_<E>): boolean;
        peek(): E;
        getFirst(): E;
        getLast(): E;
        element(): E;
        addFirst(arg0: E): void;
        addLast(arg0: E): void;
        removeFirst(): E;
        removeLast(): E;
        reversed(): $Deque<E>;
        poll(): E;
        push(arg0: E): void;
        pop(): E;
        pollFirst(): E;
        pollLast(): E;
        offerLast(arg0: E): boolean;
        peekFirst(): E;
        removeFirstOccurrence(arg0: $Object): boolean;
        offerFirst(arg0: E): boolean;
        peekLast(): E;
        removeLastOccurrence(arg0: $Object): boolean;
        offer(arg0: E): boolean;
        descendingIterator(): $Iterator<E>;
        [Symbol.iterator](): Iterator<E>
        get first(): E;
        get last(): E;
    }
    export class $ArrayDeque<E> extends $AbstractCollection<E> implements $Deque<E>, $Cloneable, $Serializable {
        remove(): E;
        clone(): $ArrayDeque<E>;
        peek(): E;
        getFirst(): E;
        getLast(): E;
        element(): E;
        addFirst(arg0: E): void;
        addLast(arg0: E): void;
        removeFirst(): E;
        removeLast(): E;
        poll(): E;
        push(arg0: E): void;
        pop(): E;
        pollFirst(): E;
        pollLast(): E;
        offerLast(arg0: E): boolean;
        peekFirst(): E;
        removeFirstOccurrence(arg0: $Object): boolean;
        offerFirst(arg0: E): boolean;
        peekLast(): E;
        removeLastOccurrence(arg0: $Object): boolean;
        offer(arg0: E): boolean;
        descendingIterator(): $Iterator<E>;
        reversed(): $Deque<E>;
        constructor(arg0: number);
        constructor();
        constructor(arg0: $Collection_<E>);
        get first(): E;
        get last(): E;
    }
    export class $AbstractList<E> extends $AbstractCollection<E> implements $List<E> {
        remove(arg0: number): E;
        get(arg0: number): E;
        indexOf(arg0: $Object): number;
        lastIndexOf(arg0: $Object): number;
        add(arg0: number, arg1: E): void;
        subList(arg0: number, arg1: number): $List<E>;
        addAll(arg0: number, arg1: $Collection_<E>): boolean;
        set(arg0: number, arg1: E): E;
        listIterator(): $ListIterator<E>;
        listIterator(arg0: number): $ListIterator<E>;
        replaceAll(arg0: $UnaryOperator_<E>): void;
        sort(arg0: $Comparator<E>): void;
        getFirst(): E;
        getLast(): E;
        addFirst(arg0: E): void;
        addLast(arg0: E): void;
        removeFirst(): E;
        removeLast(): E;
        reversed(): $SequencedCollection<E>;
        get first(): E;
        get last(): E;
    }
    export class $Locale implements $Cloneable, $Serializable {
        clone(): $Object;
        static getDefault(): $Locale;
        static getDefault(arg0: $Locale$Category_): $Locale;
        static of(arg0: string, arg1: string): $Locale;
        static of(arg0: string, arg1: string, arg2: string): $Locale;
        static of(arg0: string): $Locale;
        static lookup(arg0: $List_<$Locale$LanguageRange>, arg1: $Collection_<$Locale>): $Locale;
        static filter(arg0: $List_<$Locale$LanguageRange>, arg1: $Collection_<$Locale>): $List<$Locale>;
        static filter(arg0: $List_<$Locale$LanguageRange>, arg1: $Collection_<$Locale>, arg2: $Locale$FilteringMode_): $List<$Locale>;
        getLanguage(): string;
        getDisplayName(): string;
        getDisplayName(arg0: $Locale): string;
        static getAvailableLocales(): $Locale[];
        getUnicodeLocaleType(arg0: string): string;
        getCountry(): string;
        stripExtensions(): $Locale;
        hasExtensions(): boolean;
        getVariant(): string;
        static setDefault(arg0: $Locale$Category_, arg1: $Locale): void;
        static setDefault(arg0: $Locale): void;
        getScript(): string;
        getUnicodeLocaleAttributes(): $Set<string>;
        getUnicodeLocaleKeys(): $Set<string>;
        getDisplayLanguage(): string;
        getDisplayLanguage(arg0: $Locale): string;
        getDisplayScript(arg0: $Locale): string;
        getDisplayScript(): string;
        getDisplayCountry(arg0: $Locale): string;
        getDisplayCountry(): string;
        getDisplayVariant(arg0: $Locale): string;
        getDisplayVariant(): string;
        static filterTags(arg0: $List_<$Locale$LanguageRange>, arg1: $Collection_<string>): $List<string>;
        static filterTags(arg0: $List_<$Locale$LanguageRange>, arg1: $Collection_<string>, arg2: $Locale$FilteringMode_): $List<string>;
        static lookupTag(arg0: $List_<$Locale$LanguageRange>, arg1: $Collection_<string>): string;
        static availableLocales(): $Stream<$Locale>;
        static getISOCountries(arg0: $Locale$IsoCountryCode_): $Set<string>;
        static getISOCountries(): string[];
        static getISOLanguages(): string[];
        getExtension(arg0: string): string;
        getExtensionKeys(): $Set<string>;
        toLanguageTag(): string;
        static caseFoldLanguageTag(arg0: string): string;
        static forLanguageTag(arg0: string): $Locale;
        getISO3Language(): string;
        getISO3Country(): string;
        static PRC: $Locale;
        static CANADA: $Locale;
        static ENGLISH: $Locale;
        static ROOT: $Locale;
        static TAIWAN: $Locale;
        static CHINA: $Locale;
        static ITALY: $Locale;
        static CHINESE: $Locale;
        static KOREA: $Locale;
        static FRENCH: $Locale;
        static FRANCE: $Locale;
        static TRADITIONAL_CHINESE: $Locale;
        static CANADA_FRENCH: $Locale;
        static GERMANY: $Locale;
        static ITALIAN: $Locale;
        static PRIVATE_USE_EXTENSION: string;
        static UK: $Locale;
        static JAPAN: $Locale;
        static JAPANESE: $Locale;
        static UNICODE_LOCALE_EXTENSION: string;
        static SIMPLIFIED_CHINESE: $Locale;
        static GERMAN: $Locale;
        static US: $Locale;
        static KOREAN: $Locale;
        /**
         * @deprecated
         */
        constructor(arg0: string);
        /**
         * @deprecated
         */
        constructor(arg0: string, arg1: string, arg2: string);
        /**
         * @deprecated
         */
        constructor(arg0: string, arg1: string);
        get language(): string;
        get country(): string;
        get variant(): string;
        get script(): string;
        get unicodeLocaleAttributes(): $Set<string>;
        get unicodeLocaleKeys(): $Set<string>;
        static get ISOLanguages(): string[];
        get extensionKeys(): $Set<string>;
        get ISO3Language(): string;
        get ISO3Country(): string;
    }
    export class $PrimitiveIterator<T, T_CONS> {
    }
    export interface $PrimitiveIterator<T, T_CONS> extends $Iterator<T> {
        forEachRemaining(arg0: T_CONS): void;
    }
    export class $EventListener {
    }
    export interface $EventListener {
    }
    export class $TimeZone implements $Serializable, $Cloneable {
        clone(): $Object;
        static getDefault(): $TimeZone;
        getOffset(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
        getOffset(arg0: number): number;
        getDisplayName(): string;
        getDisplayName(arg0: boolean, arg1: number): string;
        getDisplayName(arg0: boolean, arg1: number, arg2: $Locale): string;
        getDisplayName(arg0: $Locale): string;
        static getTimeZone(arg0: $ZoneId): $TimeZone;
        static getTimeZone(arg0: string): $TimeZone;
        getID(): string;
        getDSTSavings(): number;
        hasSameRules(arg0: $TimeZone): boolean;
        toZoneId(): $ZoneId;
        getRawOffset(): number;
        static setDefault(arg0: $TimeZone): void;
        inDaylightTime(arg0: $Date): boolean;
        useDaylightTime(): boolean;
        static getAvailableIDs(): string[];
        static getAvailableIDs(arg0: number): string[];
        setID(arg0: string): void;
        setRawOffset(arg0: number): void;
        observesDaylightTime(): boolean;
        static SHORT: number;
        static LONG: number;
        constructor();
        get DSTSavings(): number;
    }
    export class $LinkedHashMap<K, V> extends $HashMap<K, V> implements $SequencedMap<K, V> {
        static newLinkedHashMap<K, V>(arg0: number): $LinkedHashMap<K, V>;
        reversed(): $SequencedMap<K, V>;
        sequencedKeySet(): $SequencedSet<K>;
        sequencedValues(): $SequencedCollection<V>;
        sequencedEntrySet(): $SequencedSet<$Map$Entry<K, V>>;
        putFirst(arg0: K, arg1: V): V;
        putLast(arg0: K, arg1: V): V;
        firstEntry(): $Map$Entry<K, V>;
        lastEntry(): $Map$Entry<K, V>;
        pollFirstEntry(): $Map$Entry<K, V>;
        pollLastEntry(): $Map$Entry<K, V>;
        constructor(arg0: $Map_<K, V>);
        constructor(arg0: number);
        constructor(arg0: number, arg1: number);
        constructor(arg0: number, arg1: number, arg2: boolean);
        constructor();
    }
    export class $ResourceBundle {
        containsKey(arg0: string): boolean;
        keySet(): $Set<string>;
        getObject(arg0: string): $Object;
        getStringArray(arg0: string): string[];
        getString(arg0: string): string;
        getLocale(): $Locale;
        getKeys(): $Enumeration<string>;
        getBaseBundleName(): string;
        static getBundle(arg0: string, arg1: $Locale): $ResourceBundle;
        static getBundle(arg0: string, arg1: $ResourceBundle$Control): $ResourceBundle;
        static getBundle(arg0: string): $ResourceBundle;
        static getBundle(arg0: string, arg1: $Locale, arg2: $ClassLoader): $ResourceBundle;
        static getBundle(arg0: string, arg1: $Locale, arg2: $ClassLoader, arg3: $ResourceBundle$Control): $ResourceBundle;
        static getBundle(arg0: string, arg1: $Locale, arg2: $ResourceBundle$Control): $ResourceBundle;
        static getBundle(arg0: string, arg1: $Locale, arg2: $Module): $ResourceBundle;
        static getBundle(arg0: string, arg1: $Module): $ResourceBundle;
        static clearCache(): void;
        static clearCache(arg0: $ClassLoader): void;
        constructor();
        get locale(): $Locale;
        get keys(): $Enumeration<string>;
        get baseBundleName(): string;
    }
    export class $Enumeration<E> {
    }
    export interface $Enumeration<E> {
        asIterator(): $Iterator<E>;
        hasMoreElements(): boolean;
        nextElement(): E;
    }
    export class $LinkedList<E> extends $AbstractSequentialList<E> implements $List<E>, $Deque<E>, $Cloneable, $Serializable {
        remove(): E;
        clone(): $Object;
        peek(): E;
        element(): E;
        poll(): E;
        push(arg0: E): void;
        pop(): E;
        pollFirst(): E;
        pollLast(): E;
        offerLast(arg0: E): boolean;
        peekFirst(): E;
        removeFirstOccurrence(arg0: $Object): boolean;
        offerFirst(arg0: E): boolean;
        peekLast(): E;
        removeLastOccurrence(arg0: $Object): boolean;
        offer(arg0: E): boolean;
        descendingIterator(): $Iterator<E>;
        reversed(): $SequencedCollection<E>;
        constructor();
        constructor(arg0: $Collection_<E>);
    }
    export class $ArrayList<E> extends $AbstractList<E> implements $List<E>, $RandomAccess, $Cloneable, $Serializable {
        clone(): $Object;
        ensureCapacity(arg0: number): void;
        trimToSize(): void;
        reversed(): $SequencedCollection<E>;
        constructor(arg0: $Collection_<E>);
        constructor();
        constructor(arg0: number);
    }
    export class $Locale$Category extends $Enum<$Locale$Category> {
        static values(): $Locale$Category[];
        static valueOf(arg0: string): $Locale$Category;
        static DISPLAY: $Locale$Category;
        static FORMAT: $Locale$Category;
    }
    /**
     * Values that may be interpreted as {@link $Locale$Category}.
     */
    export type $Locale$Category_ = "display" | "format";
    export class $Random implements $RandomGenerator, $Serializable {
        static from(arg0: $RandomGenerator_): $Random;
        nextDouble(): number;
        nextInt(): number;
        nextInt(arg0: number): number;
        nextBytes(arg0: number[]): void;
        setSeed(arg0: number): void;
        ints(arg0: number): $IntStream;
        ints(): $IntStream;
        ints(arg0: number, arg1: number, arg2: number): $IntStream;
        ints(arg0: number, arg1: number): $IntStream;
        longs(arg0: number): $LongStream;
        longs(arg0: number, arg1: number): $LongStream;
        longs(arg0: number, arg1: number, arg2: number): $LongStream;
        longs(): $LongStream;
        doubles(arg0: number): $DoubleStream;
        doubles(arg0: number, arg1: number, arg2: number): $DoubleStream;
        doubles(arg0: number, arg1: number): $DoubleStream;
        doubles(): $DoubleStream;
        nextLong(): number;
        nextBoolean(): boolean;
        nextFloat(): number;
        nextGaussian(): number;
        nextDouble(arg0: number): number;
        nextDouble(arg0: number, arg1: number): number;
        nextInt(arg0: number, arg1: number): number;
        nextLong(arg0: number, arg1: number): number;
        nextLong(arg0: number): number;
        nextFloat(arg0: number): number;
        nextFloat(arg0: number, arg1: number): number;
        nextGaussian(arg0: number, arg1: number): number;
        isDeprecated(): boolean;
        nextExponential(): number;
        constructor(arg0: number);
        constructor();
        set seed(value: number);
        get deprecated(): boolean;
    }
    export class $Iterator<E> {
    }
    export interface $Iterator<E> {
        remove(): void;
        forEachRemaining(arg0: $Consumer_<E>): void;
        hasNext(): boolean;
        next(): E;
    }
    export class $Vector<E> extends $AbstractList<E> implements $List<E>, $RandomAccess, $Cloneable, $Serializable {
        clone(): $Object;
        indexOf(arg0: $Object, arg1: number): number;
        lastIndexOf(arg0: $Object, arg1: number): number;
        elements(): $Enumeration<E>;
        capacity(): number;
        ensureCapacity(arg0: number): void;
        trimToSize(): void;
        elementAt(arg0: number): E;
        setSize(arg0: number): void;
        copyInto(arg0: $Object[]): void;
        removeElementAt(arg0: number): void;
        removeElement(arg0: $Object): boolean;
        insertElementAt(arg0: E, arg1: number): void;
        removeAllElements(): void;
        firstElement(): E;
        lastElement(): E;
        setElementAt(arg0: E, arg1: number): void;
        addElement(arg0: E): void;
        reversed(): $SequencedCollection<E>;
        constructor(arg0: $Collection_<E>);
        constructor();
        constructor(arg0: number);
        constructor(arg0: number, arg1: number);
    }
    export class $Spliterator$OfLong {
    }
    export interface $Spliterator$OfLong extends $Spliterator$OfPrimitive<number, $LongConsumer, $Spliterator$OfLong> {
        forEachRemaining(arg0: $LongConsumer_): void;
        forEachRemaining(arg0: $Consumer_<number>): void;
        tryAdvance(arg0: $LongConsumer_): boolean;
        tryAdvance(arg0: $Consumer_<number>): boolean;
        trySplit(): $Spliterator<number>;
    }
    export class $HashMap<K, V> extends $AbstractMap<K, V> implements $Map<K, V>, $Cloneable, $Serializable {
        clone(): $Object;
        static newHashMap<K, V>(arg0: number): $HashMap<K, V>;
        constructor(arg0: number);
        constructor(arg0: number, arg1: number);
        constructor();
        constructor(arg0: $Map_<K, V>);
    }
    export class $ImmutableCollections$AbstractImmutableMap<K, V> extends $AbstractMap<K, V> implements $Serializable {
    }
    export class $ServiceLoader<S> implements $Iterable<S> {
        static load<S>(arg0: $Class<S>, arg1: $ClassLoader): $ServiceLoader<S>;
        static load<S>(arg0: $Class<S>): $ServiceLoader<S>;
        static load<S>(arg0: $ModuleLayer, arg1: $Class<S>): $ServiceLoader<S>;
        iterator(): $Iterator<S>;
        stream(): $Stream<$ServiceLoader$Provider<S>>;
        findFirst(): (S) | undefined;
        reload(): void;
        static loadInstalled<S>(arg0: $Class<S>): $ServiceLoader<S>;
        spliterator(): $Spliterator<S>;
        forEach(arg0: $Consumer_<S>): void;
        [Symbol.iterator](): Iterator<S>
    }
    export class $Date implements $Serializable, $Cloneable, $Comparable<$Date> {
        clone(): $Object;
        compareTo(arg0: $Date): number;
        static from(arg0: $Instant): $Date;
        /**
         * @deprecated
         */
        static parse(arg0: string): number;
        before(arg0: $Date): boolean;
        after(arg0: $Date): boolean;
        getTime(): number;
        toInstant(): $Instant;
        /**
         * @deprecated
         */
        static UTC(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
        /**
         * @deprecated
         */
        getYear(): number;
        setTime(arg0: number): void;
        /**
         * @deprecated
         */
        getSeconds(): number;
        /**
         * @deprecated
         */
        getMonth(): number;
        /**
         * @deprecated
         */
        setDate(arg0: number): void;
        /**
         * @deprecated
         */
        setMonth(arg0: number): void;
        /**
         * @deprecated
         */
        getHours(): number;
        /**
         * @deprecated
         */
        setHours(arg0: number): void;
        /**
         * @deprecated
         */
        getMinutes(): number;
        /**
         * @deprecated
         */
        setMinutes(arg0: number): void;
        /**
         * @deprecated
         */
        setSeconds(arg0: number): void;
        /**
         * @deprecated
         */
        setYear(arg0: number): void;
        /**
         * @deprecated
         */
        getDate(): number;
        /**
         * @deprecated
         */
        getDay(): number;
        /**
         * @deprecated
         */
        toLocaleString(): string;
        /**
         * @deprecated
         */
        toGMTString(): string;
        /**
         * @deprecated
         */
        getTimezoneOffset(): number;
        /**
         * @deprecated
         */
        constructor(arg0: string);
        /**
         * @deprecated
         */
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
        /**
         * @deprecated
         */
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number);
        constructor();
        constructor(arg0: number);
        /**
         * @deprecated
         */
        constructor(arg0: number, arg1: number, arg2: number);
        get day(): number;
        get timezoneOffset(): number;
    }
    export class $Base64$Encoder {
        encodeToString(arg0: number[]): string;
        withoutPadding(): $Base64$Encoder;
        wrap(arg0: $OutputStream): $OutputStream;
        encode(arg0: number[], arg1: number[]): number;
        encode(arg0: number[]): number[];
        encode(arg0: $ByteBuffer): $ByteBuffer;
    }
    export class $SortedSet<E> {
    }
    export interface $SortedSet<E> extends $Set<E>, $SequencedSet<E> {
        last(): E;
        spliterator(): $Spliterator<E>;
        first(): E;
        getFirst(): E;
        getLast(): E;
        addFirst(arg0: E): void;
        addLast(arg0: E): void;
        removeFirst(): E;
        removeLast(): E;
        comparator(): $Comparator<E>;
        subSet(arg0: E, arg1: E): $SortedSet<E>;
        headSet(arg0: E): $SortedSet<E>;
        tailSet(arg0: E): $SortedSet<E>;
        reversed(): $SequencedSet<E>;
    }
    export class $Properties extends $Hashtable<$Object, $Object> {
        getProperty(arg0: string): string;
        getProperty(arg0: string, arg1: string): string;
        load(arg0: $Reader): void;
        load(arg0: $InputStream): void;
        store(arg0: $OutputStream, arg1: string): void;
        store(arg0: $Writer, arg1: string): void;
        list(arg0: $PrintStream): void;
        list(arg0: $PrintWriter): void;
        setProperty(arg0: string, arg1: string): $Object;
        storeToXML(arg0: $OutputStream, arg1: string, arg2: string): void;
        storeToXML(arg0: $OutputStream, arg1: string, arg2: $Charset): void;
        storeToXML(arg0: $OutputStream, arg1: string): void;
        /**
         * @deprecated
         */
        save(arg0: $OutputStream, arg1: string): void;
        loadFromXML(arg0: $InputStream): void;
        propertyNames(): $Enumeration<never>;
        stringPropertyNames(): $Set<string>;
        constructor(arg0: $Properties);
        constructor(arg0: number);
        constructor();
    }
    export class $BitSet implements $Cloneable, $Serializable {
        size(): number;
        get(arg0: number): boolean;
        get(arg0: number, arg1: number): $BitSet;
        length(): number;
        clone(): $Object;
        static valueOf(arg0: number[]): $BitSet;
        static valueOf(arg0: number[]): $BitSet;
        static valueOf(arg0: $LongBuffer): $BitSet;
        static valueOf(arg0: $ByteBuffer): $BitSet;
        clear(arg0: number, arg1: number): void;
        clear(): void;
        clear(arg0: number): void;
        isEmpty(): boolean;
        stream(): $IntStream;
        set(arg0: number, arg1: boolean): void;
        set(arg0: number): void;
        set(arg0: number, arg1: number): void;
        set(arg0: number, arg1: number, arg2: boolean): void;
        flip(arg0: number, arg1: number): void;
        flip(arg0: number): void;
        nextClearBit(arg0: number): number;
        or(arg0: $BitSet): void;
        toByteArray(): number[];
        and(arg0: $BitSet): void;
        xor(arg0: $BitSet): void;
        andNot(arg0: $BitSet): void;
        cardinality(): number;
        nextSetBit(arg0: number): number;
        toLongArray(): number[];
        previousSetBit(arg0: number): number;
        previousClearBit(arg0: number): number;
        intersects(arg0: $BitSet): boolean;
        constructor(arg0: number);
        constructor();
        get empty(): boolean;
    }
    export class $RandomAccess {
    }
    export interface $RandomAccess {
    }
}
