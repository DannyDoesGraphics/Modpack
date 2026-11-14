import { $Level_ } from "@package/net/minecraft/world/level";
import { $OpenPipeEffectHandler } from "@package/com/simibubi/create/api/effect";
import { $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $AABB_ } from "@package/net/minecraft/world/phys";

declare module "@package/com/simibubi/create/impl/effect" {
    export class $LavaEffectHandler implements $OpenPipeEffectHandler {
        apply(arg0: $Level_, arg1: $AABB_, arg2: $FluidStack_): void;
        constructor();
    }
    export class $TeaEffectHandler implements $OpenPipeEffectHandler {
        apply(arg0: $Level_, arg1: $AABB_, arg2: $FluidStack_): void;
        constructor();
    }
    export class $WaterEffectHandler implements $OpenPipeEffectHandler {
        apply(arg0: $Level_, arg1: $AABB_, arg2: $FluidStack_): void;
        constructor();
    }
    export class $MilkEffectHandler implements $OpenPipeEffectHandler {
        apply(arg0: $Level_, arg1: $AABB_, arg2: $FluidStack_): void;
        constructor();
    }
    export class $PotionEffectHandler implements $OpenPipeEffectHandler {
        apply(arg0: $Level_, arg1: $AABB_, arg2: $FluidStack_): void;
        constructor();
    }
}
