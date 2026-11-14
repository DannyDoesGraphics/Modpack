import { $NoisePosVanillaInterface } from "@package/com/ishland/c2me/opts/dfc/common/gen/jvm/vif";
import { $EvalType_ } from "@package/com/ishland/c2me/opts/dfc/common/ast";

declare module "@package/com/ishland/c2me/opts/dfc/common/gen/jvm/util" {
    export class $DfcObjectCache {
        static GET_NOISE_POS_VANILLA_INTERFACE_DESC: string;
    }
    export interface $DfcObjectCache {
        getNoisePosVanillaInterface(arg0: number, arg1: number, arg2: number, arg3: $EvalType_, arg4: $DfcObjectCache): $NoisePosVanillaInterface;
        recycle(arg0: number[]): void;
        recycle(arg0: number[]): void;
        recycle(arg0: $NoisePosVanillaInterface): void;
        getIntArray(arg0: number, arg1: boolean): number[];
        getDoubleArray(arg0: number, arg1: boolean): number[];
    }
}
