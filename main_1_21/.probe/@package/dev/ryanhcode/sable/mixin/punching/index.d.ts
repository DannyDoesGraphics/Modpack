import { $Level_, $ClipContext$Fluid_ } from "@package/net/minecraft/world/level";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/dev/ryanhcode/sable/mixin/punching" {
    export class $ItemInvoker {
        static sable$getPlayerPOVHitResult(arg0: $Level_, arg1: $Player, arg2: $ClipContext$Fluid_): $BlockHitResult;
    }
    export interface $ItemInvoker {
    }
}
