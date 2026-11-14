import { RegistryTypes, RegistryMarked } from "@special/types";
import { $Component } from "@package/net/minecraft/network/chat";

declare module "@package/dev/eriksonn/aeronautics/content/blocks/hot_air/lifting_gas" {
    export interface $LiftingGasType extends RegistryMarked<RegistryTypes.AeronauticsLiftingGasTypeTag, RegistryTypes.AeronauticsLiftingGasType> {}
    export class $LiftingGasType {
    }
    export interface $LiftingGasType {
        getResponsivenessAdjustmentFactor(): number;
        getFillingTime(): number;
        getEmptyingTime(): number;
        getLiftStrength(): number;
        getResponsivenessAdjustmentRange(): number;
        getName(): $Component;
        get responsivenessAdjustmentFactor(): number;
        get fillingTime(): number;
        get emptyingTime(): number;
        get liftStrength(): number;
        get responsivenessAdjustmentRange(): number;
        get name(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $LiftingGasType}.
     */
    export type $LiftingGasType_ = RegistryTypes.AeronauticsLiftingGasType;
}
