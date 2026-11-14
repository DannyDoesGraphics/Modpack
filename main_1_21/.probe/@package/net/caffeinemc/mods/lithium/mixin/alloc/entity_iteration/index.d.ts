import { $List_, $List } from "@package/java/util";

declare module "@package/net/caffeinemc/mods/lithium/mixin/alloc/entity_iteration" {
    export class $ClassInstanceMultiMapAccessor<T> {
    }
    export interface $ClassInstanceMultiMapAccessor<T> {
        getAllInstances(): $List<T>;
        get allInstances(): $List<T>;
    }
    /**
     * Values that may be interpreted as {@link $ClassInstanceMultiMapAccessor}.
     */
    export type $ClassInstanceMultiMapAccessor_<T> = (() => $List_<T>);
}
