import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/compat/thresholdSwitch" {
    export class $StorageDrawers implements $ThresholdSwitchCompat {
        getSpaceInSlot(arg0: $IItemHandler, arg1: number): number;
        isFromThisMod(arg0: $BlockEntity): boolean;
        constructor();
    }
    export class $SophisticatedStorage implements $ThresholdSwitchCompat {
        getSpaceInSlot(arg0: $IItemHandler, arg1: number): number;
        isFromThisMod(arg0: $BlockEntity): boolean;
        constructor();
    }
    export class $ThresholdSwitchCompat {
    }
    export interface $ThresholdSwitchCompat {
        getSpaceInSlot(arg0: $IItemHandler, arg1: number): number;
        isFromThisMod(arg0: $BlockEntity): boolean;
    }
    export class $FunctionalStorage implements $ThresholdSwitchCompat {
        getSpaceInSlot(arg0: $IItemHandler, arg1: number): number;
        isFromThisMod(arg0: $BlockEntity): boolean;
        constructor();
    }
}
