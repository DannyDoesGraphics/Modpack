
declare module "@package/net/caffeinemc/mods/lithium/common/util/deduplication" {
    export class $LithiumInterner<T> {
        deleteCanonical(arg0: T): void;
        getCanonical<S extends T>(arg0: S): S;
        constructor();
    }
}
