import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $Block } from "@package/net/minecraft/world/level/block";

declare module "@package/com/simibubi/create/api/boiler" {
    export class $BoilerHeater {
        static findHeat(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): number;
        static PASSIVE: $BoilerHeater;
        static BLAZE_BURNER: $BoilerHeater;
        static PASSIVE_HEAT: number;
        static NO_HEAT: number;
        static REGISTRY: $SimpleRegistry<$Block, $BoilerHeater>;
    }
    export interface $BoilerHeater {
        getHeat(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): number;
    }
    /**
     * Values that may be interpreted as {@link $BoilerHeater}.
     */
    export type $BoilerHeater_ = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState) => number);
}
