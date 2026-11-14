import { $IAEPowerStorage } from "@package/appeng/api/networking/energy";
import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $IGridNode } from "@package/appeng/api/networking";
import { $Enum } from "@package/java/lang";
export * as statistics from "@package/appeng/api/networking/events/statistics";

declare module "@package/appeng/api/networking/events" {
    export class $GridPowerStatusChange extends $GridEvent {
        constructor();
    }
    export class $GridCraftingCpuChange extends $GridEvent {
        node: $IGridNode;
        constructor(arg0: $IGridNode);
    }
    export class $GridControllerChange extends $GridEvent {
        constructor();
    }
    export class $GridPowerIdleChange extends $GridEvent {
        node: $IGridNode;
        constructor(arg0: $IGridNode);
    }
    export class $GridPowerStorageStateChanged$PowerEventType extends $Enum<$GridPowerStorageStateChanged$PowerEventType> {
        static values(): $GridPowerStorageStateChanged$PowerEventType[];
        static valueOf(arg0: string): $GridPowerStorageStateChanged$PowerEventType;
        static PROVIDE_POWER: $GridPowerStorageStateChanged$PowerEventType;
        static RECEIVE_POWER: $GridPowerStorageStateChanged$PowerEventType;
    }
    /**
     * Values that may be interpreted as {@link $GridPowerStorageStateChanged$PowerEventType}.
     */
    export type $GridPowerStorageStateChanged$PowerEventType_ = "receive_power" | "provide_power";
    export class $GridBootingStatusChange extends $GridEvent {
        isBooting(): boolean;
        constructor(arg0: boolean);
        get booting(): boolean;
    }
    export class $GridChannelRequirementChanged extends $GridEvent {
        node: $IGridNode;
        constructor(arg0: $IGridNode);
    }
    export class $GridSpatialEvent extends $GridEvent {
        isTransitionPrevented(): boolean;
        preventTransition(): void;
        spatialIoPos: $BlockPos;
        spatialEnergyUsage: number;
        spatialIoLevel: $Level;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: number);
        get transitionPrevented(): boolean;
    }
    export class $GridEvent {
        constructor();
    }
    export class $GridPowerStorageStateChanged extends $GridEvent {
        storage: $IAEPowerStorage;
        type: $GridPowerStorageStateChanged$PowerEventType;
        constructor(arg0: $IAEPowerStorage, arg1: $GridPowerStorageStateChanged$PowerEventType_);
    }
}
