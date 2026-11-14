import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockSpoutingBehaviour } from "@package/com/simibubi/create/api/behaviour/spouting";
import { $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $Enum } from "@package/java/lang";
import { $SpoutBlockEntity } from "@package/com/simibubi/create/content/fluids/spout";

declare module "@package/com/simibubi/create/compat/tconstruct" {
    export class $SpoutCasting extends $Enum<$SpoutCasting> implements $BlockSpoutingBehaviour {
        fillBlock(arg0: $Level_, arg1: $BlockPos_, arg2: $SpoutBlockEntity, arg3: $FluidStack_, arg4: boolean): number;
        static values(): $SpoutCasting[];
        static valueOf(arg0: string): $SpoutCasting;
        static INSTANCE: $SpoutCasting;
    }
    /**
     * Values that may be interpreted as {@link $SpoutCasting}.
     */
    export type $SpoutCasting_ = "instance";
}
