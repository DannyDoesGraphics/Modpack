import { $ConcurrentMap, $Callable_, $Executor_ } from "@package/java/util/concurrent";
import { $ImmutableMap } from "@package/com/google/common/collect";
import { $ListenableFuture } from "@package/com/google/common/util/concurrent";
import { $Map_, $Map } from "@package/java/util";
import { $Function, $Supplier_ } from "@package/com/google/common/base";
import { $Object, $Iterable_ } from "@package/java/lang";

declare module "@package/com/google/common/cache" {
    export class $CacheLoader<K, V> {
        static asyncReloading<K, V>(loader: $CacheLoader<K, V>, executor: $Executor_): $CacheLoader<K, V>;
        load(key: K): V;
        static from<K, V>(arg0: $Function<K, V>): $CacheLoader<K, V>;
        static from<V>(supplier: $Supplier_<V>): $CacheLoader<$Object, V>;
        reload(key: K, oldValue: V): $ListenableFuture<V>;
        loadAll(keys: $Iterable_<K>): $Map<K, V>;
    }
    export class $LoadingCache<K, V> {
    }
    export interface $LoadingCache<K, V> extends $Cache<K, V>, $Function<K, V> {
        refresh(key: K): void;
        get(key: K): V;
        /**
         * @deprecated
         */
        apply(key: K): V;
        getAll(keys: $Iterable_<K>): $ImmutableMap<K, V>;
        getUnchecked(key: K): V;
        asMap(): $ConcurrentMap<K, V>;
    }
    export class $CacheStats {
        hitCount(): number;
        missCount(): number;
        loadSuccessCount(): number;
        loadExceptionCount(): number;
        totalLoadTime(): number;
        evictionCount(): number;
        requestCount(): number;
        hitRate(): number;
        missRate(): number;
        loadCount(): number;
        loadExceptionRate(): number;
        averageLoadPenalty(): number;
        minus(other: $CacheStats): $CacheStats;
        plus(other: $CacheStats): $CacheStats;
        constructor(hitCount: number, missCount: number, loadSuccessCount: number, loadExceptionCount: number, totalLoadTime: number, evictionCount: number);
    }
    export class $Cache<K, V> {
    }
    export interface $Cache<K, V> {
        cleanUp(): void;
        getIfPresent(key: $Object): V;
        getAllPresent(keys: $Iterable_<never>): $ImmutableMap<K, V>;
        invalidateAll(keys: $Iterable_<never>): void;
        invalidateAll(): void;
        size(): number;
        get(key: K, loader: $Callable_<V>): V;
        put(key: K, value: V): void;
        putAll(m: $Map_<K, V>): void;
        asMap(): $ConcurrentMap<K, V>;
        stats(): $CacheStats;
        invalidate(key: $Object): void;
    }
}
