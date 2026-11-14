import { $AEColor, $AEColor_, $INetworkToolAware, $AECableType } from "@package/appeng/api/util";
import { $Direction_ } from "@package/net/minecraft/core";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $EnumSet } from "@package/java/util";
import { $BusSupport, $IPart } from "@package/appeng/api/parts";
import { $AEKey } from "@package/appeng/api/stacks";

declare module "@package/appeng/api/implementations/parts" {
    export class $ICablePart {
    }
    export interface $ICablePart extends $IPart {
        setExposedOnSides(arg0: $EnumSet<$Direction_>): void;
        getCableConnectionType(): $AECableType;
        getCableColor(): $AEColor;
        changeColor(arg0: $AEColor_, arg1: $Player): boolean;
        supportsBuses(): $BusSupport;
        isConnected(arg0: $Direction_): boolean;
        set exposedOnSides(value: $EnumSet<$Direction_>);
        get cableConnectionType(): $AECableType;
        get cableColor(): $AEColor;
    }
    export class $IMonitorPart {
    }
    export interface $IMonitorPart extends $IPart {
        isPowered(): boolean;
        get powered(): boolean;
    }
    export class $IStorageMonitorPart {
    }
    export interface $IStorageMonitorPart extends $IMonitorPart, $IPart, $INetworkToolAware {
        getDisplayed(): $AEKey;
        isLocked(): boolean;
        getAmount(): number;
        get displayed(): $AEKey;
        get locked(): boolean;
        get amount(): number;
    }
}
