import { $Component } from "@package/net/minecraft/network/chat";
import { $Actionable_, $IncludeExclude_ } from "@package/appeng/api/config";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $Map_, $Set_ } from "@package/java/util";
import { $IActionSource } from "@package/appeng/api/networking/security";
import { $AEKeyType, $GenericStack, $AEKeyType_, $KeyCounter, $AEKey } from "@package/appeng/api/stacks";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Supplier_ } from "@package/java/util/function";
import { $TickRateModulation, $TickRateModulation_ } from "@package/appeng/api/networking/ticking";
import { $MEStorage, $ILinkStatus, $MEStorage_ } from "@package/appeng/api/storage";
import { $IPartitionList } from "@package/appeng/util/prioritylist";
import { $Runnable_, $Record } from "@package/java/lang";
import { $CellState, $StorageCell } from "@package/appeng/api/storage/cells";

declare module "@package/appeng/me/storage" {
    export class $CompositeStorage implements $MEStorage, $ITickingMonitor {
        getAvailableStacks(arg0: $KeyCounter): void;
        isPreferredStorageFor(arg0: $AEKey, arg1: $IActionSource): boolean;
        setStorages(arg0: $Map_<$AEKeyType_, $MEStorage_>): void;
        getDescription(): $Component;
        extract(arg0: $AEKey, arg1: number, arg2: $Actionable_, arg3: $IActionSource): number;
        insert(arg0: $AEKey, arg1: number, arg2: $Actionable_, arg3: $IActionSource): number;
        onTick(): $TickRateModulation;
        getAvailableStacks(): $KeyCounter;
        constructor(arg0: $Map_<$AEKeyType_, $MEStorage_>);
        set storages(value: $Map_<$AEKeyType_, $MEStorage_>);
        get description(): $Component;
    }
    export class $MEInventoryHandler extends $DelegatingMEInventory {
        setWhitelist(arg0: $IncludeExclude_): void;
        setPartitionList(arg0: $IPartitionList): void;
        setVoidOverflow(arg0: boolean): void;
        setExtractFiltering(arg0: boolean, arg1: boolean): void;
        setAllowExtraction(arg0: boolean): void;
        setAllowInsertion(arg0: boolean): void;
        constructor(arg0: $MEStorage_);
        set whitelist(value: $IncludeExclude_);
        set partitionList(value: $IPartitionList);
        set voidOverflow(value: boolean);
        set allowExtraction(value: boolean);
        set allowInsertion(value: boolean);
    }
    export class $LinkStatusRespectingInventory extends $DelegatingMEInventory {
        constructor(arg0: $MEStorage_, arg1: $Supplier_<$ILinkStatus>);
    }
    export class $NetworkStorage$UnmountOperation extends $Record implements $NetworkStorage$QueuedOperation {
    }
    /**
     * Values that may be interpreted as {@link $NetworkStorage$UnmountOperation}.
     */
    export type $NetworkStorage$UnmountOperation_ = { storage?: $MEStorage_,  } | [storage?: $MEStorage_, ];
    export class $ExternalStorageFacade$FluidHandlerFacade extends $ExternalStorageFacade {
    }
    export class $ExternalStorageFacade$ItemHandlerFacade extends $ExternalStorageFacade {
    }
    export class $DriveWatcher extends $MEInventoryHandler {
        getCell(): $StorageCell;
        getStatus(): $CellState;
        constructor(arg0: $StorageCell, arg1: $Runnable_);
        get cell(): $StorageCell;
        get status(): $CellState;
    }
    export class $ITickingMonitor {
    }
    export interface $ITickingMonitor {
        onTick(): $TickRateModulation;
    }
    /**
     * Values that may be interpreted as {@link $ITickingMonitor}.
     */
    export type $ITickingMonitor_ = (() => $TickRateModulation_);
    export class $NetworkStorage$QueuedOperation {
    }
    export interface $NetworkStorage$QueuedOperation {
    }
    export class $DelegatingMEInventory implements $MEStorage {
        getAvailableStacks(arg0: $KeyCounter): void;
        getAvailableStacks(): $KeyCounter;
        isPreferredStorageFor(arg0: $AEKey, arg1: $IActionSource): boolean;
        getDescription(): $Component;
        extract(arg0: $AEKey, arg1: number, arg2: $Actionable_, arg3: $IActionSource): number;
        insert(arg0: $AEKey, arg1: number, arg2: $Actionable_, arg3: $IActionSource): number;
        constructor(arg0: $MEStorage_);
        get description(): $Component;
    }
    export class $ExternalStorageFacade implements $MEStorage {
        setChangeListener(arg0: $Runnable_ | null): void;
        containsAnyFuzzy(arg0: $Set_<$AEKey>): boolean;
        setExtractableOnly(arg0: boolean): void;
        getDescription(): $Component;
        extract(arg0: $AEKey, arg1: number, arg2: $Actionable_, arg3: $IActionSource): number;
        insert(arg0: $AEKey, arg1: number, arg2: $Actionable_, arg3: $IActionSource): number;
        static of(arg0: $IFluidHandler): $ExternalStorageFacade;
        static of(arg0: $IItemHandler): $ExternalStorageFacade;
        getKeyType(): $AEKeyType;
        getSlots(): number;
        getStackInSlot(arg0: number): $GenericStack;
        getAvailableStacks(arg0: $KeyCounter): void;
        getAvailableStacks(): $KeyCounter;
        isPreferredStorageFor(arg0: $AEKey, arg1: $IActionSource): boolean;
        constructor();
        set changeListener(value: $Runnable_ | null);
        set extractableOnly(value: boolean);
        get description(): $Component;
        get keyType(): $AEKeyType;
        get slots(): number;
    }
    export class $CompositeStorage$InventoryCache {
    }
    export class $NullInventory implements $MEStorage {
        getAvailableStacks(arg0: $KeyCounter): void;
        getDescription(): $Component;
        static of(): $MEStorage;
        getAvailableStacks(): $KeyCounter;
        isPreferredStorageFor(arg0: $AEKey, arg1: $IActionSource): boolean;
        extract(arg0: $AEKey, arg1: number, arg2: $Actionable_, arg3: $IActionSource): number;
        insert(arg0: $AEKey, arg1: number, arg2: $Actionable_, arg3: $IActionSource): number;
        constructor();
        get description(): $Component;
    }
    export class $ExternalInventoryCache {
    }
    export class $NetworkStorage$MountOperation extends $Record implements $NetworkStorage$QueuedOperation {
    }
    /**
     * Values that may be interpreted as {@link $NetworkStorage$MountOperation}.
     */
    export type $NetworkStorage$MountOperation_ = { priority?: number, storage?: $MEStorage_,  } | [priority?: number, storage?: $MEStorage_, ];
    export class $NetworkStorage implements $MEStorage {
        getAvailableStacks(arg0: $KeyCounter): void;
        getDescription(): $Component;
        extract(arg0: $AEKey, arg1: number, arg2: $Actionable_, arg3: $IActionSource): number;
        insert(arg0: $AEKey, arg1: number, arg2: $Actionable_, arg3: $IActionSource): number;
        mount(arg0: number, arg1: $MEStorage_): void;
        unmount(arg0: $MEStorage_): void;
        getAvailableStacks(): $KeyCounter;
        isPreferredStorageFor(arg0: $AEKey, arg1: $IActionSource): boolean;
        constructor();
        get description(): $Component;
    }
}
