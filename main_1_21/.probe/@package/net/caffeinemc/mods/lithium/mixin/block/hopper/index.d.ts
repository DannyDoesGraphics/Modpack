import { $Container } from "@package/net/minecraft/world";
import { $LithiumCooldownReceivingInventory, $LithiumTransferConditionInventory } from "@package/net/caffeinemc/mods/lithium/api/inventory";
import { $List_, $List } from "@package/java/util";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";
import { $ClassInstanceMultiMap } from "@package/net/minecraft/util";

declare module "@package/net/caffeinemc/mods/lithium/mixin/block/hopper" {
    export class $CompoundContainerAccessor {
    }
    export interface $CompoundContainerAccessor {
        getFirst(): $Container;
        getSecond(): $Container;
        get first(): $Container;
        get second(): $Container;
    }
    export class $EntityAccessor {
    }
    export interface $EntityAccessor {
        getChangeListener(): $EntityInLevelCallback;
        get changeListener(): $EntityInLevelCallback;
    }
    /**
     * Values that may be interpreted as {@link $EntityAccessor}.
     */
    export type $EntityAccessor_ = (() => $EntityInLevelCallback);
    export class $ContainerMixin {
    }
    export interface $ContainerMixin extends $LithiumCooldownReceivingInventory, $LithiumTransferConditionInventory {
    }
    export class $EntitySectionAccessor<T> {
    }
    export interface $EntitySectionAccessor<T> {
        getCollection(): $ClassInstanceMultiMap<T>;
        get collection(): $ClassInstanceMultiMap<T>;
    }
    /**
     * Values that may be interpreted as {@link $EntitySectionAccessor}.
     */
    export type $EntitySectionAccessor_<T> = (() => $ClassInstanceMultiMap<T>);
    export class $NonNullListAccessor<T> {
    }
    export interface $NonNullListAccessor<T> {
        getDelegate(): $List<T>;
        get delegate(): $List<T>;
    }
    /**
     * Values that may be interpreted as {@link $NonNullListAccessor}.
     */
    export type $NonNullListAccessor_<T> = (() => $List_<T>);
}
