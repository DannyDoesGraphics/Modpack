import { $ClipContext$Fluid, $ClipContext$Fluid_ } from "@package/net/minecraft/world/level";

declare module "@package/net/caffeinemc/mods/lithium/mixin/world/raycast" {
    export class $ClipContextAccessor {
    }
    export interface $ClipContextAccessor {
        getFluidHandling(): $ClipContext$Fluid;
        get fluidHandling(): $ClipContext$Fluid;
    }
    /**
     * Values that may be interpreted as {@link $ClipContextAccessor}.
     */
    export type $ClipContextAccessor_ = (() => $ClipContext$Fluid_);
}
