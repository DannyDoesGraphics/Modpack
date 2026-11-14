import { $AEColor_, $AEColor } from "@package/appeng/api/util";
import { $Predicate_ } from "@package/java/util/function";
import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ICablePart } from "@package/appeng/api/implementations/parts";
import { $ColoredPartItem } from "@package/appeng/items/parts";
import { $AEBasePart } from "@package/appeng/parts";
import { $AccessRestriction, $PowerMultiplier_, $Actionable_, $PowerUnit_ } from "@package/appeng/api/config";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $EnumSet } from "@package/java/util";
import { $IEnergyStorage } from "@package/net/neoforged/neoforge/energy";
import { $IPartItem, $IPartCollisionHelper, $IPart, $BusSupport } from "@package/appeng/api/parts";
import { $IExternalPowerSink } from "@package/appeng/blockentity/powersink";

declare module "@package/appeng/parts/networking" {
    export class $QuartzFiberPart extends $AEBasePart {
        constructor(arg0: $IPartItem<never>);
    }
    export class $SmartDenseCablePart extends $DenseCablePart implements $IUsedChannelProvider {
        getUsedChannelsInfo(): number;
        getMaxChannelsInfo(): number;
        constructor(arg0: $ColoredPartItem<never>);
        get usedChannelsInfo(): number;
        get maxChannelsInfo(): number;
    }
    export class $GlassCablePart extends $CablePart {
        constructor(arg0: $ColoredPartItem<never>);
    }
    export class $CoveredCablePart extends $CablePart {
        constructor(arg0: $ColoredPartItem<never>);
    }
    export class $CablePart extends $AEBasePart implements $ICablePart {
        getBoxes(arg0: $IPartCollisionHelper, arg1: $Predicate_<$Direction>): void;
        markForUpdate(): void;
        setExposedOnSides(arg0: $EnumSet<$Direction_>): void;
        getCableColor(): $AEColor;
        changeColor(arg0: $AEColor_, arg1: $Player): boolean;
        supportsBuses(): $BusSupport;
        getChannelsOnSide(arg0: $Direction_): number;
        isConnected(arg0: $Direction_): boolean;
        constructor(arg0: $ColoredPartItem<never>);
        set exposedOnSides(value: $EnumSet<$Direction_>);
        get cableColor(): $AEColor;
    }
    export class $DenseCablePart extends $CablePart {
        constructor(arg0: $ColoredPartItem<never>);
    }
    export class $CoveredDenseCablePart extends $DenseCablePart {
        constructor(arg0: $ColoredPartItem<never>);
    }
    export class $SmartCablePart extends $CablePart implements $IUsedChannelProvider {
        getUsedChannelsInfo(): number;
        getMaxChannelsInfo(): number;
        constructor(arg0: $ColoredPartItem<never>);
        get usedChannelsInfo(): number;
        get maxChannelsInfo(): number;
    }
    export class $IUsedChannelProvider {
    }
    export interface $IUsedChannelProvider extends $IPart {
        getUsedChannelsInfo(): number;
        getMaxChannelsInfo(): number;
        get usedChannelsInfo(): number;
        get maxChannelsInfo(): number;
    }
    export class $EnergyAcceptorPart extends $AEBasePart implements $IExternalPowerSink {
        getEnergyStorage(): $IEnergyStorage;
        getAEMaxPower(): number;
        getPowerFlow(): $AccessRestriction;
        extractAEPower(arg0: number, arg1: $Actionable_, arg2: $PowerMultiplier_): number;
        isAEPublicPowerStorage(): boolean;
        getAECurrentPower(): number;
        injectAEPower(arg0: number, arg1: $Actionable_): number;
        getExternalPowerDemand(arg0: $PowerUnit_, arg1: number): number;
        injectExternalPower(arg0: $PowerUnit_, arg1: number, arg2: $Actionable_): number;
        getPriority(): number;
        constructor(arg0: $IPartItem<never>);
        get energyStorage(): $IEnergyStorage;
        get AEMaxPower(): number;
        get powerFlow(): $AccessRestriction;
        get AEPublicPowerStorage(): boolean;
        get AECurrentPower(): number;
        get priority(): number;
    }
}
