import { $IGridNodeService, $IGridService } from "@package/appeng/api/networking";
import { $Actionable, $AccessRestriction, $PowerMultiplier_, $Actionable_, $PowerMultiplier } from "@package/appeng/api/config";

declare module "@package/appeng/api/networking/energy" {
    export class $IEnergySource {
        static empty(): $IEnergySource;
    }
    export interface $IEnergySource {
        extractAEPower(arg0: number, arg1: $Actionable_, arg2: $PowerMultiplier_): number;
    }
    /**
     * Values that may be interpreted as {@link $IEnergySource}.
     */
    export type $IEnergySource_ = ((arg0: number, arg1: $Actionable, arg2: $PowerMultiplier) => number);
    export class $IEnergyWatcher {
    }
    export interface $IEnergyWatcher {
        remove(arg0: number): boolean;
        reset(): void;
        add(arg0: number): boolean;
    }
    export class $IEnergyService {
    }
    export interface $IEnergyService extends $IGridService, $IEnergySource {
        getIdlePowerUsage(): number;
        getAvgPowerUsage(): number;
        getAvgPowerInjection(): number;
        isNetworkPowered(): boolean;
        injectPower(arg0: number, arg1: $Actionable_): number;
        getStoredPower(): number;
        getMaxStoredPower(): number;
        getEnergyDemand(arg0: number): number;
        getChannelPowerUsage(): number;
        get idlePowerUsage(): number;
        get avgPowerUsage(): number;
        get avgPowerInjection(): number;
        get networkPowered(): boolean;
        get storedPower(): number;
        get maxStoredPower(): number;
        get channelPowerUsage(): number;
    }
    export class $IPassiveEnergyGenerator {
    }
    export interface $IPassiveEnergyGenerator extends $IGridNodeService {
        setSuppressed(arg0: boolean): void;
        getRate(): number;
        isSuppressed(): boolean;
        get rate(): number;
    }
    export class $EmptyEnergySource implements $IEnergySource {
    }
    export class $IAEPowerStorage {
    }
    export interface $IAEPowerStorage extends $IEnergySource, $IGridNodeService {
        getAEMaxPower(): number;
        getPowerFlow(): $AccessRestriction;
        isAEPublicPowerStorage(): boolean;
        getAECurrentPower(): number;
        injectAEPower(arg0: number, arg1: $Actionable_): number;
        getPriority(): number;
        get AEMaxPower(): number;
        get powerFlow(): $AccessRestriction;
        get AEPublicPowerStorage(): boolean;
        get AECurrentPower(): number;
        get priority(): number;
    }
    export class $IEnergyWatcherNode {
    }
    export interface $IEnergyWatcherNode extends $IGridNodeService {
        updateWatcher(arg0: $IEnergyWatcher): void;
        onThresholdPass(arg0: $IEnergyService): void;
    }
}
