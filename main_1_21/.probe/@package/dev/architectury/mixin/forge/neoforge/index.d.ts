import { $FlowingFluid, $Fluid_, $Fluid } from "@package/net/minecraft/world/level/material";

declare module "@package/dev/architectury/mixin/forge/neoforge" {
    export class $LiquidBlockAccessor {
    }
    export interface $LiquidBlockAccessor {
        getFluid(): $FlowingFluid;
        get fluid(): $FlowingFluid;
    }
    /**
     * Values that may be interpreted as {@link $LiquidBlockAccessor}.
     */
    export type $LiquidBlockAccessor_ = (() => $FlowingFluid);
    export class $BucketItemAccessor {
    }
    export interface $BucketItemAccessor {
        getContent(): $Fluid;
        get content(): $Fluid;
    }
    /**
     * Values that may be interpreted as {@link $BucketItemAccessor}.
     */
    export type $BucketItemAccessor_ = (() => $Fluid_);
}
