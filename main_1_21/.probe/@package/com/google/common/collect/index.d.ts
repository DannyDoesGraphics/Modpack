import { $Serializable } from "@package/java/io";
import { $BiConsumer_, $ObjIntConsumer_, $Function_, $BinaryOperator_, $Consumer_, $UnaryOperator_, $BiFunction_, $ToIntFunction_ } from "@package/java/util/function";
import { $Collector, $Stream } from "@package/java/util/stream";
import { $Iterable_, $Comparable, $Object } from "@package/java/lang";
import { $Spliterator, $Iterator, $List, $SequencedCollection, $Map_, $Collection_, $Collection, $Comparator, $Map, $Map$Entry, $Set, $ListIterator, $AbstractCollection, $RandomAccess } from "@package/java/util";

declare module "@package/com/google/common/collect" {
    export class $ImmutableMultimap$Builder<K, V> {
        put(entry: $Map$Entry<K, V>): $ImmutableMultimap$Builder<K, V>;
        put(key: K, value: V): $ImmutableMultimap$Builder<K, V>;
        putAll(multimap: $Multimap<K, V>): $ImmutableMultimap$Builder<K, V>;
        putAll(key: K, ...values: V[]): $ImmutableMultimap$Builder<K, V>;
        putAll(key: K, values: $Iterable_<V>): $ImmutableMultimap$Builder<K, V>;
        putAll(entries: $Iterable_<$Map$Entry<K, V>>): $ImmutableMultimap$Builder<K, V>;
        build(): $ImmutableMultimap<K, V>;
        orderKeysBy(keyComparator: $Comparator<K>): $ImmutableMultimap$Builder<K, V>;
        orderValuesBy(valueComparator: $Comparator<V>): $ImmutableMultimap$Builder<K, V>;
        constructor();
    }
    export class $AbstractIterator<T> extends $UnmodifiableIterator<T> {
        peek(): T;
    }
    export class $ImmutableMultiset<E> extends $ImmutableMultisetGwtSerializationDependencies<E> implements $Multiset<E> {
        /**
         * @deprecated
         */
        remove(element: $Object, occurrences: number): number;
        static copyOf<E>(elements: $Iterator<E>): $ImmutableMultiset<E>;
        static copyOf<E>(elements: E[]): $ImmutableMultiset<E>;
        static copyOf<E>(elements: $Iterable_<E>): $ImmutableMultiset<E>;
        /**
         * @deprecated
         */
        add(element: E, occurrences: number): number;
        static of<E>(e1: E, e2: E, e3: E): $ImmutableMultiset<E>;
        static of<E>(element: E): $ImmutableMultiset<E>;
        static of<E>(e1: E, e2: E): $ImmutableMultiset<E>;
        static of<E>(): $ImmutableMultiset<E>;
        static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, ...others: E[]): $ImmutableMultiset<E>;
        static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E): $ImmutableMultiset<E>;
        static of<E>(e1: E, e2: E, e3: E, e4: E): $ImmutableMultiset<E>;
        static builder<E>(): $ImmutableMultiset$Builder<E>;
        static toImmutableMultiset<T, E>(elementFunction: $Function_<T, E>, countFunction: $ToIntFunction_<T>): $Collector<T, never, $ImmutableMultiset<E>>;
        static toImmutableMultiset<E>(): $Collector<E, never, $ImmutableMultiset<E>>;
        /**
         * @deprecated
         */
        setCount(element: E, count: number): number;
        /**
         * @deprecated
         */
        setCount(element: E, oldCount: number, newCount: number): boolean;
        forEachEntry(action: $ObjIntConsumer_<E>): void;
        entrySet(): $Set<$Multiset$Entry<E>>;
        elementSet(): $Set<E>;
    }
    export class $ImmutableMap$Builder<K, V> {
        put(key: K, value: V): $ImmutableMap$Builder<K, V>;
        put(entry: $Map$Entry<K, V>): $ImmutableMap$Builder<K, V>;
        putAll(entries: $Iterable_<$Map$Entry<K, V>>): $ImmutableMap$Builder<K, V>;
        putAll(map: $Map_<K, V>): $ImmutableMap$Builder<K, V>;
        build(): $ImmutableMap<K, V>;
        buildOrThrow(): $ImmutableMap<K, V>;
        buildKeepingLast(): $ImmutableMap<K, V>;
        orderEntriesByValue(valueComparator: $Comparator<V>): $ImmutableMap$Builder<K, V>;
        constructor();
    }
    export class $ImmutableSet<E> extends $ImmutableCollection<E> implements $Set<E> {
        static copyOf<E>(elements: $Iterator<E>): $ImmutableSet<E>;
        static copyOf<E>(elements: $Iterable_<E>): $ImmutableSet<E>;
        static copyOf<E>(elements: $Collection_<E>): $ImmutableSet<E>;
        static copyOf<E>(elements: E[]): $ImmutableSet<E>;
        static of<E>(e1: E, e2: E, e3: E, e4: E): $ImmutableSet<E>;
        static of<E>(element: E): $ImmutableSet<E>;
        static of<E>(e1: E, e2: E, e3: E): $ImmutableSet<E>;
        static of<E>(): $ImmutableSet<E>;
        static of<E>(e1: E, e2: E): $ImmutableSet<E>;
        static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, ...others: E[]): $ImmutableSet<E>;
        static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E): $ImmutableSet<E>;
        static builder<E>(): $ImmutableSet$Builder<E>;
        static builderWithExpectedSize<E>(expectedSize: number): $ImmutableSet$Builder<E>;
        static toImmutableSet<E>(): $Collector<E, never, $ImmutableSet<E>>;
    }
    export class $ImmutableCollection$Builder<E> {
        add(element: E): $ImmutableCollection$Builder<E>;
        add(...elements: E[]): $ImmutableCollection$Builder<E>;
        addAll(elements: $Iterator<E>): $ImmutableCollection$Builder<E>;
        addAll(elements: $Iterable_<E>): $ImmutableCollection$Builder<E>;
        build(): $ImmutableCollection<E>;
    }
    export class $ImmutableList$Builder<E> extends $ImmutableCollection$Builder<E> {
        addAll(elements: $Iterator<E>): $ImmutableList$Builder<E>;
        constructor();
    }
    export class $Multiset$Entry<E> {
    }
    export interface $Multiset$Entry<E> {
        equals(o: $Object): boolean;
        toString(): string;
        hashCode(): number;
        getCount(): number;
        getElement(): E;
        get count(): number;
        get element(): E;
    }
    export class $ImmutableSetMultimap$Builder<K, V> extends $ImmutableMultimap$Builder<K, V> {
        put(entry: $Map$Entry<K, V>): $ImmutableSetMultimap$Builder<K, V>;
        orderKeysBy(keyComparator: $Comparator<K>): $ImmutableSetMultimap$Builder<K, V>;
        orderValuesBy(valueComparator: $Comparator<V>): $ImmutableSetMultimap$Builder<K, V>;
        constructor();
    }
    export class $ForwardingMultimap<K, V> extends $ForwardingObject implements $Multimap<K, V> {
        remove(key: $Object, value: $Object): boolean;
        size(): number;
        get(key: K): $Collection<V>;
        put(key: K, value: V): boolean;
        values(): $Collection<V>;
        clear(): void;
        isEmpty(): boolean;
        putAll(multimap: $Multimap<K, V>): boolean;
        putAll(key: K, values: $Iterable_<V>): boolean;
        containsKey(key: $Object): boolean;
        keys(): $Multiset<K>;
        keySet(): $Set<K>;
        containsValue(value: $Object): boolean;
        entries(): $Collection<$Map$Entry<K, V>>;
        removeAll(key: $Object): $Collection<V>;
        asMap(): $Map<K, $Collection<V>>;
        containsEntry(key: $Object, value: $Object): boolean;
        replaceValues(key: K, values: $Iterable_<V>): $Collection<V>;
        forEach(action: $BiConsumer_<K, V>): void;
        get empty(): boolean;
    }
    export class $ImmutableMultisetGwtSerializationDependencies<E> extends $ImmutableCollection<E> {
    }
    export class $ForwardingObject {
    }
    export class $Multimap<K, V> {
    }
    export interface $Multimap<K, V> {
        remove(key: $Object, value: $Object): boolean;
        size(): number;
        get(key: K): $Collection<V>;
        put(key: K, value: V): boolean;
        equals(obj: $Object): boolean;
        values(): $Collection<V>;
        hashCode(): number;
        clear(): void;
        isEmpty(): boolean;
        putAll(key: K, values: $Iterable_<V>): boolean;
        putAll(multimap: $Multimap<K, V>): boolean;
        forEach(action: $BiConsumer_<K, V>): void;
        containsKey(key: $Object): boolean;
        keys(): $Multiset<K>;
        keySet(): $Set<K>;
        containsValue(value: $Object): boolean;
        entries(): $Collection<$Map$Entry<K, V>>;
        removeAll(key: $Object): $Collection<V>;
        asMap(): $Map<K, $Collection<V>>;
        containsEntry(key: $Object, value: $Object): boolean;
        replaceValues(key: K, values: $Iterable_<V>): $Collection<V>;
        get empty(): boolean;
    }
    export class $ImmutableMap<K, V> implements $Map<K, V>, $Serializable {
        /**
         * @deprecated
         */
        remove(key: $Object, value: $Object): boolean;
        /**
         * @deprecated
         */
        remove(o: $Object): V;
        get(key: $Object): V;
        /**
         * @deprecated
         */
        put(k: K, v: V): V;
        static copyOf<K, V>(entries: $Iterable_<$Map$Entry<K, V>>): $ImmutableMap<K, V>;
        static copyOf<K, V>(map: $Map_<K, V>): $ImmutableMap<K, V>;
        /**
         * @deprecated
         */
        clear(): void;
        isEmpty(): boolean;
        /**
         * @deprecated
         */
        replace(key: K, oldValue: V, newValue: V): boolean;
        /**
         * @deprecated
         */
        replace(key: K, value: V): V;
        /**
         * @deprecated
         */
        replaceAll(arg0: $BiFunction_<K, V, V>): void;
        static of<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V): $ImmutableMap<K, V>;
        static of<K, V>(): $ImmutableMap<K, V>;
        static of<K, V>(k1: K, v1: V, k2: K, v2: V): $ImmutableMap<K, V>;
        static of<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V): $ImmutableMap<K, V>;
        static of<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V, k5: K, v5: V, k6: K, v6: V, k7: K, v7: V): $ImmutableMap<K, V>;
        static of<K, V>(k1: K, v1: V): $ImmutableMap<K, V>;
        static of<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V, k5: K, v5: V, k6: K, v6: V, k7: K, v7: V, k8: K, v8: V): $ImmutableMap<K, V>;
        static of<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V, k5: K, v5: V, k6: K, v6: V, k7: K, v7: V, k8: K, v8: V, k9: K, v9: V, k10: K, v10: V): $ImmutableMap<K, V>;
        static of<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V, k5: K, v5: V, k6: K, v6: V): $ImmutableMap<K, V>;
        static of<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V, k5: K, v5: V): $ImmutableMap<K, V>;
        static of<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V, k5: K, v5: V, k6: K, v6: V, k7: K, v7: V, k8: K, v8: V, k9: K, v9: V): $ImmutableMap<K, V>;
        static builder<K, V>(): $ImmutableMap$Builder<K, V>;
        /**
         * @deprecated
         */
        merge(key: K, value: V, arg2: $BiFunction_<V, V, V>): V;
        /**
         * @deprecated
         */
        putAll(map: $Map_<K, V>): void;
        /**
         * @deprecated
         */
        putIfAbsent(key: K, value: V): V;
        /**
         * @deprecated
         */
        compute(key: K, remappingFunction: $BiFunction_<K, V, V>): V;
        containsKey(key: $Object): boolean;
        /**
         * @deprecated
         */
        computeIfAbsent(key: K, mappingFunction: $Function_<K, V>): V;
        keySet(): $ImmutableSet<K>;
        containsValue(value: $Object): boolean;
        getOrDefault(key: $Object, defaultValue: V): V;
        /**
         * @deprecated
         */
        computeIfPresent(key: K, remappingFunction: $BiFunction_<K, V, V>): V;
        static ofEntries<K, V>(...entries: $Map$Entry<K, V>[]): $ImmutableMap<K, V>;
        static builderWithExpectedSize<K, V>(expectedSize: number): $ImmutableMap$Builder<K, V>;
        static toImmutableMap<T, K, V>(keyFunction: $Function_<T, K>, valueFunction: $Function_<T, V>): $Collector<T, never, $ImmutableMap<K, V>>;
        static toImmutableMap<T, K, V>(keyFunction: $Function_<T, K>, valueFunction: $Function_<T, V>, mergeFunction: $BinaryOperator_<V>): $Collector<T, never, $ImmutableMap<K, V>>;
        asMultimap(): $ImmutableSetMultimap<K, V>;
        forEach(arg0: $BiConsumer_<K, V>): void;
        values(): $Collection<V>;
        entrySet(): $Set<$Map$Entry<K, V>>;
        get empty(): boolean;
    }
    export class $SetMultimap<K, V> {
    }
    export interface $SetMultimap<K, V> extends $Multimap<K, V> {
        get(key: K): $Set<V>;
        equals(obj: $Object): boolean;
        removeAll(key: $Object): $Set<V>;
        asMap(): $Map<K, $Collection<V>>;
        replaceValues(key: K, values: $Iterable_<V>): $Set<V>;
        entries(): $Collection<$Map$Entry<K, V>>;
    }
    export class $ImmutableList<E> extends $ImmutableCollection<E> implements $List<E>, $RandomAccess {
        /**
         * @deprecated
         */
        remove(index: number): E;
        reverse(): $ImmutableList<E>;
        static copyOf<E>(elements: E[]): $ImmutableList<E>;
        static copyOf<E>(elements: $Collection_<E>): $ImmutableList<E>;
        static copyOf<E>(elements: $Iterable_<E>): $ImmutableList<E>;
        static copyOf<E>(elements: $Iterator<E>): $ImmutableList<E>;
        indexOf(object: $Object): number;
        lastIndexOf(object: $Object): number;
        /**
         * @deprecated
         */
        replaceAll(operator: $UnaryOperator_<E>): void;
        /**
         * @deprecated
         */
        add(index: number, element: E): void;
        static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E): $ImmutableList<E>;
        static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $ImmutableList<E>;
        static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $ImmutableList<E>;
        static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $ImmutableList<E>;
        static of<E>(e1: E, e2: E): $ImmutableList<E>;
        static of<E>(e1: E, e2: E, e3: E, e4: E): $ImmutableList<E>;
        static of<E>(e1: E, e2: E, e3: E): $ImmutableList<E>;
        static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E, e10: E, e11: E, e12: E, ...others: E[]): $ImmutableList<E>;
        static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E, e10: E, e11: E): $ImmutableList<E>;
        static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E, e10: E): $ImmutableList<E>;
        static of<E>(): $ImmutableList<E>;
        static of<E>(element: E): $ImmutableList<E>;
        static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $ImmutableList<E>;
        static builder<E>(): $ImmutableList$Builder<E>;
        /**
         * @deprecated
         */
        addAll(index: number, newElements: $Collection_<E>): boolean;
        /**
         * @deprecated
         */
        set(index: number, element: E): E;
        /**
         * @deprecated
         */
        sort(c: $Comparator<E>): void;
        static toImmutableList<E>(): $Collector<E, never, $ImmutableList<E>>;
        static sortedCopyOf<E extends $Comparable<E>>(elements: $Iterable_<E>): $ImmutableList<E>;
        static sortedCopyOf<E>(comparator: $Comparator<E>, elements: $Iterable_<E>): $ImmutableList<E>;
        static builderWithExpectedSize<E>(expectedSize: number): $ImmutableList$Builder<E>;
        getFirst(): E;
        getLast(): E;
        addFirst(arg0: E): void;
        addLast(arg0: E): void;
        removeFirst(): E;
        removeLast(): E;
        subList(arg0: number, arg1: number): $List<E>;
        listIterator(arg0: number): $ListIterator<E>;
        listIterator(): $ListIterator<E>;
        reversed(): $SequencedCollection<E>;
        get first(): E;
        get last(): E;
    }
    export class $ImmutableCollection<E> extends $AbstractCollection<E> implements $Serializable {
        iterator(): $UnmodifiableIterator<E>;
        asList(): $ImmutableList<E>;
    }
    export class $ImmutableSetMultimap<K, V> extends $ImmutableMultimap<K, V> implements $SetMultimap<K, V> {
        static copyOf<K, V>(multimap: $Multimap<K, V>): $ImmutableSetMultimap<K, V>;
        static copyOf<K, V>(entries: $Iterable_<$Map$Entry<K, V>>): $ImmutableSetMultimap<K, V>;
        static of<K, V>(): $ImmutableSetMultimap<K, V>;
        static of<K, V>(k1: K, v1: V, k2: K, v2: V): $ImmutableSetMultimap<K, V>;
        static of<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V): $ImmutableSetMultimap<K, V>;
        static of<K, V>(k1: K, v1: V): $ImmutableSetMultimap<K, V>;
        static of<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V, k5: K, v5: V): $ImmutableSetMultimap<K, V>;
        static of<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V): $ImmutableSetMultimap<K, V>;
        static builder<K, V>(): $ImmutableSetMultimap$Builder<K, V>;
        inverse(): $ImmutableSetMultimap<V, K>;
        /**
         * @deprecated
         */
        replaceValues(key: K, values: $Iterable_<V>): $ImmutableSet<V>;
        static toImmutableSetMultimap<T, K, V>(keyFunction: $Function_<T, K>, valueFunction: $Function_<T, V>): $Collector<T, never, $ImmutableSetMultimap<K, V>>;
        static flatteningToImmutableSetMultimap<T, K, V>(keyFunction: $Function_<T, K>, valuesFunction: $Function_<T, $Stream<V>>): $Collector<T, never, $ImmutableSetMultimap<K, V>>;
        get(key: K): $Set<V>;
    }
    export class $ImmutableSet$Builder<E> extends $ImmutableCollection$Builder<E> {
        add(element: E): $ImmutableSet$Builder<E>;
        add(...elements: E[]): $ImmutableSet$Builder<E>;
        constructor();
    }
    export class $ImmutableMultimap<K, V> extends $BaseImmutableMultimap<K, V> implements $Serializable {
        static copyOf<K, V>(entries: $Iterable_<$Map$Entry<K, V>>): $ImmutableMultimap<K, V>;
        static copyOf<K, V>(multimap: $Multimap<K, V>): $ImmutableMultimap<K, V>;
        static of<K, V>(): $ImmutableMultimap<K, V>;
        static of<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V): $ImmutableMultimap<K, V>;
        static of<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V): $ImmutableMultimap<K, V>;
        static of<K, V>(k1: K, v1: V, k2: K, v2: V): $ImmutableMultimap<K, V>;
        static of<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V, k5: K, v5: V): $ImmutableMultimap<K, V>;
        static of<K, V>(k1: K, v1: V): $ImmutableMultimap<K, V>;
        static builder<K, V>(): $ImmutableMultimap$Builder<K, V>;
        keys(): $ImmutableMultiset<K>;
        keySet(): $ImmutableSet<K>;
        entries(): $ImmutableCollection<$Map$Entry<K, V>>;
        inverse(): $ImmutableMultimap<V, K>;
        /**
         * @deprecated
         */
        replaceValues(key: K, values: $Iterable_<V>): $ImmutableCollection<V>;
    }
    export class $AbstractMultimap<K, V> implements $Multimap<K, V> {
        forEach(action: $BiConsumer_<K, V>): void;
    }
    export class $BiMap<K, V> {
    }
    export interface $BiMap<K, V> extends $Map<K, V> {
        put(key: K, value: V): V;
        putAll(map: $Map_<K, V>): void;
        inverse(): $BiMap<V, K>;
        forcePut(key: K, value: V): V;
        values(): $Collection<V>;
    }
    export class $BaseImmutableMultimap<K, V> extends $AbstractMultimap<K, V> {
    }
    export class $Multiset<E> {
        [Symbol.iterator](): Iterator<E>
    }
    export interface $Multiset<E> extends $Collection<E> {
        remove(element: $Object, occurrences: number): number;
        remove(element: $Object): boolean;
        size(): number;
        equals(object: $Object): boolean;
        toString(): string;
        hashCode(): number;
        add(element: E): boolean;
        add(element: E, occurrences: number): number;
        iterator(): $Iterator<E>;
        count(element: $Object): number;
        contains(element: $Object): boolean;
        spliterator(): $Spliterator<E>;
        entrySet(): $Set<$Multiset$Entry<E>>;
        forEach(action: $Consumer_<E>): void;
        forEachEntry(action: $ObjIntConsumer_<E>): void;
        removeAll(c: $Collection_<never>): boolean;
        retainAll(c: $Collection_<never>): boolean;
        containsAll(elements: $Collection_<never>): boolean;
        elementSet(): $Set<E>;
        setCount(element: E, count: number): number;
        setCount(element: E, oldCount: number, newCount: number): boolean;
        [Symbol.iterator](): Iterator<E>
    }
    export class $UnmodifiableIterator<E> implements $Iterator<E> {
        /**
         * @deprecated
         */
        remove(): void;
        forEachRemaining(arg0: $Consumer_<E>): void;
    }
    export class $ImmutableMultiset$Builder<E> extends $ImmutableCollection$Builder<E> {
        addCopies(element: E, occurrences: number): $ImmutableMultiset$Builder<E>;
        build(): $ImmutableMultiset<E>;
        setCount(element: E, count: number): $ImmutableMultiset$Builder<E>;
        constructor();
    }
    export class $ForwardingSet<E> extends $ForwardingCollection<E> implements $Set<E> {
    }
    export class $Interner<E> {
    }
    export interface $Interner<E> {
        intern(sample: E): E;
    }
    /**
     * Values that may be interpreted as {@link $Interner}.
     */
    export type $Interner_<E> = ((sample: E) => E);
}
