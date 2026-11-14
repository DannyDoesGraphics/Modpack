import { $IGridNode, $IGridNodeService, $IGridService } from "@package/appeng/api/networking";
import { $Enum, $Record } from "@package/java/lang";
import { $TickRates_ } from "@package/appeng/core/settings";

declare module "@package/appeng/api/networking/ticking" {
    export class $IGridTickable {
    }
    export interface $IGridTickable extends $IGridNodeService {
        getTickingRequest(arg0: $IGridNode): $TickingRequest;
        tickingRequest(arg0: $IGridNode, arg1: number): $TickRateModulation;
    }
    export class $TickingRequest extends $Record {
        minTickRate(): number;
        maxTickRate(): number;
        initialTickRate(): number;
        isSleeping(): boolean;
        constructor(arg0: number, arg1: number, arg2: boolean);
        constructor(minTickRate: number, maxTickRate: number, isSleeping: boolean, initialTickRate: number);
        constructor(arg0: $TickRates_, arg1: boolean);
        get sleeping(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TickingRequest}.
     */
    export type $TickingRequest_ = { initialTickRate?: number, maxTickRate?: number, minTickRate?: number, isSleeping?: boolean,  } | [initialTickRate?: number, maxTickRate?: number, minTickRate?: number, isSleeping?: boolean, ];
    export class $TickRateModulation extends $Enum<$TickRateModulation> {
        static values(): $TickRateModulation[];
        static valueOf(arg0: string): $TickRateModulation;
        static SAME: $TickRateModulation;
        static URGENT: $TickRateModulation;
        static SLEEP: $TickRateModulation;
        static IDLE: $TickRateModulation;
        static FASTER: $TickRateModulation;
        static SLOWER: $TickRateModulation;
    }
    /**
     * Values that may be interpreted as {@link $TickRateModulation}.
     */
    export type $TickRateModulation_ = "sleep" | "idle" | "slower" | "same" | "faster" | "urgent";
    export class $ITickManager {
    }
    export interface $ITickManager extends $IGridService {
        alertDevice(arg0: $IGridNode): boolean;
        sleepDevice(arg0: $IGridNode): boolean;
        wakeDevice(arg0: $IGridNode): boolean;
    }
}
