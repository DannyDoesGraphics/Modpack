import { $IAEPowerStorage } from "@package/appeng/api/networking/energy";
import { $Level } from "@package/net/minecraft/world/level";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $AccessRestriction, $PowerMultiplier_, $Actionable_, $PowerUnit_, $AccessRestriction_ } from "@package/appeng/api/config";
import { $IEnergyStorage } from "@package/net/neoforged/neoforge/energy";
import { $AEBaseInvBlockEntity } from "@package/appeng/blockentity";
import { $BlockEntityType_, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/appeng/blockentity/powersink" {
    export class $IExternalPowerSink {
    }
    export interface $IExternalPowerSink extends $IAEPowerStorage {
        getExternalPowerDemand(arg0: $PowerUnit_, arg1: number): number;
        injectExternalPower(arg0: $PowerUnit_, arg1: number, arg2: $Actionable_): number;
    }
    export class $AEBasePoweredBlockEntity extends $AEBaseInvBlockEntity implements $IAEPowerStorage, $IExternalPowerSink {
        getEnergyStorage(arg0: $Direction_): $IEnergyStorage;
        getAEMaxPower(): number;
        getPowerFlow(): $AccessRestriction;
        setInternalMaxPower(arg0: number): void;
        getInternalCurrentPower(): number;
        setInternalCurrentPower(arg0: number): void;
        getInternalMaxPower(): number;
        setInternalPublicPowerStorage(arg0: boolean): void;
        setInternalPowerFlow(arg0: $AccessRestriction_): void;
        extractAEPower(arg0: number, arg1: $Actionable_, arg2: $PowerMultiplier_): number;
        isAEPublicPowerStorage(): boolean;
        getAECurrentPower(): number;
        injectAEPower(arg0: number, arg1: $Actionable_): number;
        getExternalPowerDemand(arg0: $PowerUnit_, arg1: number): number;
        injectExternalPower(arg0: $PowerUnit_, arg1: number, arg2: $Actionable_): number;
        getPriority(): number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get AEMaxPower(): number;
        get powerFlow(): $AccessRestriction;
        set internalPublicPowerStorage(value: boolean);
        set internalPowerFlow(value: $AccessRestriction_);
        get AEPublicPowerStorage(): boolean;
        get AECurrentPower(): number;
        get priority(): number;
    }
}
