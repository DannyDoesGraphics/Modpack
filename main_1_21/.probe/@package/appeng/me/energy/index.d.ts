import { $GridPowerStorageStateChanged$PowerEventType_, $GridPowerStorageStateChanged$PowerEventType } from "@package/appeng/api/networking/events";
import { $IEnergyWatcher, $IEnergyWatcherNode, $IAEPowerStorage } from "@package/appeng/api/networking/energy";
import { $EnergyService } from "@package/appeng/me/service";
import { $IGridNodeService, $IGrid } from "@package/appeng/api/networking";
import { $AccessRestriction, $PowerMultiplier_, $Actionable_ } from "@package/appeng/api/config";
import { $Collection_, $Collection } from "@package/java/util";
import { $Comparable } from "@package/java/lang";

declare module "@package/appeng/me/energy" {
    export class $StoredEnergyAmount {
        setStored(arg0: number): void;
        setMaximum(arg0: number): void;
        extract(arg0: number, arg1: boolean): number;
        insert(arg0: number, arg1: boolean): number;
        getMaximum(): number;
        remainingCapacity(): number;
        getAmount(): number;
        static MIN_AMOUNT: number;
        static MAX_MAXIMUM: number;
        constructor(arg0: number, arg1: number, arg2: $StoredEnergyAmount$EventEmitter_);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $StoredEnergyAmount$EventEmitter_);
        set stored(value: number);
        get amount(): number;
    }
    export class $EnergyWatcher implements $IEnergyWatcher {
        remove(arg0: number): boolean;
        reset(): void;
        add(arg0: number): boolean;
        getHost(): $IEnergyWatcherNode;
        post(arg0: $EnergyService): void;
        constructor(arg0: $EnergyService, arg1: $IEnergyWatcherNode);
        get host(): $IEnergyWatcherNode;
    }
    export class $EnergyThreshold implements $Comparable<$EnergyThreshold> {
        getEnergyWatcher(): $IEnergyWatcher;
        compareTo(arg0: $EnergyThreshold): number;
        constructor(arg0: number, arg1: $IEnergyWatcher);
        constructor(arg0: number, arg1: number);
        get energyWatcher(): $IEnergyWatcher;
    }
    export class $IEnergyOverlayGridConnection {
    }
    export interface $IEnergyOverlayGridConnection extends $IGridNodeService {
        connectedEnergyServices(): $Collection<$EnergyService>;
    }
    /**
     * Values that may be interpreted as {@link $IEnergyOverlayGridConnection}.
     */
    export type $IEnergyOverlayGridConnection_ = (() => $Collection_<$EnergyService>);
    export class $StoredEnergyAmount$EventEmitter {
    }
    export interface $StoredEnergyAmount$EventEmitter {
        emitEvent(arg0: $GridPowerStorageStateChanged$PowerEventType_): void;
    }
    /**
     * Values that may be interpreted as {@link $StoredEnergyAmount$EventEmitter}.
     */
    export type $StoredEnergyAmount$EventEmitter_ = ((arg0: $GridPowerStorageStateChanged$PowerEventType) => void);
    export class $GridEnergyStorage implements $IAEPowerStorage {
        getAEMaxPower(): number;
        getPowerFlow(): $AccessRestriction;
        extractAEPower(arg0: number, arg1: $Actionable_, arg2: $PowerMultiplier_): number;
        isAEPublicPowerStorage(): boolean;
        getAECurrentPower(): number;
        injectAEPower(arg0: number, arg1: $Actionable_): number;
        getNodeEnergyShare(): number;
        getPriority(): number;
        removeNode(): void;
        addNode(): void;
        constructor(arg0: $IGrid);
        get AEMaxPower(): number;
        get powerFlow(): $AccessRestriction;
        get AEPublicPowerStorage(): boolean;
        get AECurrentPower(): number;
        get nodeEnergyShare(): number;
        get priority(): number;
    }
}
