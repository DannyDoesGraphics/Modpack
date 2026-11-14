import { $MountedStorageSyncPacket_ } from "@package/com/simibubi/create/content/contraptions";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Record } from "@package/java/lang";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/railwayteam/railways/compat/create" {
    export class $MountedFuelTankSyncDeferral$FuelTankApplier {
    }
    export interface $MountedFuelTankSyncDeferral$FuelTankApplier {
        tryApply(arg0: $BlockEntity, arg1: $FluidStack_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MountedFuelTankSyncDeferral$FuelTankApplier}.
     */
    export type $MountedFuelTankSyncDeferral$FuelTankApplier_ = ((arg0: $BlockEntity, arg1: $FluidStack) => boolean);
    export class $MountedFuelTankSyncDeferral$Key extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $MountedFuelTankSyncDeferral$Key}.
     */
    export type $MountedFuelTankSyncDeferral$Key_ = { entityId?: number, localPos?: $BlockPos_,  } | [entityId?: number, localPos?: $BlockPos_, ];
    export class $MountedFuelTankSyncDeferral {
        static defer(arg0: number, arg1: $BlockPos_, arg2: $FluidStack_): void;
        static clientTick(arg0: $Minecraft, arg1: $MountedFuelTankSyncDeferral$FuelTankApplier_): void;
    }
    export class $MountedStorageSyncDeferral {
        static defer(arg0: $MountedStorageSyncPacket_): void;
        static clientTick(arg0: $Minecraft): void;
    }
    export class $MountedStorageSyncDeferral$Pending {
    }
    export class $MountedFuelTankSyncDeferral$Pending {
    }
}
