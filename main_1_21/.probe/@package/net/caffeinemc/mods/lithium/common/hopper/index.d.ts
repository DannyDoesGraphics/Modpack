import { $InventoryChangeTracker } from "@package/net/caffeinemc/mods/lithium/common/block/entity/inventory_change_tracking";
import { $Container } from "@package/net/minecraft/world";
import { $NonNullList, $Direction_ } from "@package/net/minecraft/core";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $LithiumDefaultedList } from "@package/net/caffeinemc/mods/lithium/api/inventory";
import { $SequencedCollection } from "@package/java/util";
import { $ChangeSubscriber$CountChangeSubscriber } from "@package/net/caffeinemc/mods/lithium/common/util/change_tracking";

declare module "@package/net/caffeinemc/mods/lithium/common/hopper" {
    export class $UpdateReceiver {
    }
    export interface $UpdateReceiver {
        lithium$invalidateCacheOnUndirectedNeighborUpdate(): void;
        lithium$invalidateCacheOnNeighborUpdate(arg0: boolean): void;
        lithium$invalidateCacheOnNeighborUpdate(arg0: $Direction_): void;
    }
    export class $LithiumStackList extends $NonNullList<$ItemStack> implements $LithiumDefaultedList, $ChangeSubscriber$CountChangeSubscriber<$ItemStack> {
        changedALot(): void;
        hasSignalStrengthOverride(): boolean;
        setReducedSignalStrengthOverride(): void;
        clearSignalStrengthOverride(): void;
        changedInteractionConditions(): void;
        getSignalStrength(arg0: $Container): number;
        getModCount(): number;
        getOccupiedSlots(): number;
        getFullSlots(): number;
        runComparatorUpdatePatternOnFailedExtract(arg0: $LithiumStackList, arg1: $Container): void;
        maybeSendsComparatorUpdatesOnFailedExtract(): boolean;
        removeInventoryModificationCallback(arg0: $InventoryChangeTracker): void;
        setNextInventoryModificationCallback(arg0: $InventoryChangeTracker): void;
        remove(arg0: number): $ItemStack;
        add(arg0: number, arg1: $ItemStack_): void;
        set(arg0: number, arg1: $ItemStack_): $ItemStack;
        changed(): void;
        lithium$notify(arg0: $ItemStack_, arg1: number): void;
        lithium$notifyCount(arg0: $ItemStack_, arg1: number, arg2: number): void;
        lithium$forceUnsubscribe(arg0: $ItemStack_, arg1: number): void;
        reversed(): $SequencedCollection<$ItemStack>;
        constructor(arg0: $NonNullList<$ItemStack_>, arg1: number);
        constructor(arg0: number);
        get modCount(): number;
        get occupiedSlots(): number;
        get fullSlots(): number;
        set nextInventoryModificationCallback(value: $InventoryChangeTracker);
    }
    export class $BlockStateOnlyInventory {
    }
    export interface $BlockStateOnlyInventory {
    }
}
