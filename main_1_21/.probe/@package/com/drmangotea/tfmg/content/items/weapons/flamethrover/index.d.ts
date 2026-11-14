import { $RegistryAccess, $Holder$Reference, $HolderSet, $HolderSet_ } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $Fluid_, $Fluid } from "@package/net/minecraft/world/level/material";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $Record } from "@package/java/lang";

declare module "@package/com/drmangotea/tfmg/content/items/weapons/flamethrover" {
    export class $FlamethrowerFuelType extends $Record {
        isCold(): boolean;
        hellfire(): boolean;
        static getTypeForFluid(arg0: $RegistryAccess, arg1: $Fluid_): ($Holder$Reference<$FlamethrowerFuelType>) | undefined;
        spread(): number;
        color(): number;
        amount(): number;
        speed(): number;
        fluids(): $HolderSet<$Fluid>;
        static CODEC: $Codec<$FlamethrowerFuelType>;
        constructor(fluids: $HolderSet_<$Fluid>, spread: number, speed: number, amount: number, isCold: boolean, hellfire: boolean, color: number);
        get cold(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $FlamethrowerFuelType}.
     */
    export type $FlamethrowerFuelType_ = RegistryTypes.TfmgFlamethrowerFuelType | { hellfire?: boolean, color?: number, amount?: number, speed?: number, fluids?: $HolderSet_<$Fluid>, spread?: number, isCold?: boolean,  } | [hellfire?: boolean, color?: number, amount?: number, speed?: number, fluids?: $HolderSet_<$Fluid>, spread?: number, isCold?: boolean, ];
    export interface $FlamethrowerFuelType extends RegistryMarked<RegistryTypes.TfmgFlamethrowerFuelTypeTag, RegistryTypes.TfmgFlamethrowerFuelType> {}
}
