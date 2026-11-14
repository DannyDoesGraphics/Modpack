import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $AABB, $AABB_ } from "@package/net/minecraft/world/phys";

declare module "@package/com/simibubi/create/api/effect" {
    export class $OpenPipeEffectHandler {
        static REGISTRY: $SimpleRegistry<$Fluid, $OpenPipeEffectHandler>;
    }
    export interface $OpenPipeEffectHandler {
        apply(arg0: $Level_, arg1: $AABB_, arg2: $FluidStack_): void;
    }
    /**
     * Values that may be interpreted as {@link $OpenPipeEffectHandler}.
     */
    export type $OpenPipeEffectHandler_ = ((arg0: $Level, arg1: $AABB, arg2: $FluidStack) => void);
}
