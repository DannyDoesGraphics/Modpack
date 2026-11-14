import { $LerpedFloat } from "@package/net/createmod/catnip/animation";

declare module "@package/com/hlysine/create_connected/mixin/linkedtransmitter" {
    export class $AnalogLeverBlockEntityAccessor {
    }
    export interface $AnalogLeverBlockEntityAccessor {
        getClientState(): $LerpedFloat;
        getLastChange(): number;
        get clientState(): $LerpedFloat;
        get lastChange(): number;
    }
}
