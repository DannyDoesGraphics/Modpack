import { $Supplier_ } from "@package/java/util/function";

declare module "@package/rearth/oritech/api/lookup" {
    export class $BlockLookupCache<T> {
        static of<T>(arg0: $Supplier_<T>): $BlockLookupCache<T>;
    }
    export interface $BlockLookupCache<T> {
        find(): T;
        invalidate(): void;
    }
    /**
     * Values that may be interpreted as {@link $BlockLookupCache}.
     */
    export type $BlockLookupCache_<T> = (() => T);
}
