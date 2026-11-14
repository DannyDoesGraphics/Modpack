import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Enum } from "@package/java/lang";
import { $BlockEvent } from "@package/net/neoforged/neoforge/event/level";

declare module "@package/net/neoforged/neoforge/event/level/block" {
    /**
     * Fired when "growing age" blocks (for example cacti, chorus plants, or crops
     * in vanilla) have successfully grown. The block's original state is available,
     * in addition to its new state.
     * 
     * This event is only fired on the logical server.
     */
    export class $CropGrowEvent$Post extends $CropGrowEvent {
        /**
         * @return the original state of the crop before growing
         */
        getOriginalState(): $BlockState;
        constructor(level: $Level_, pos: $BlockPos_, original: $BlockState_, state: $BlockState_);
        get originalState(): $BlockState;
    }
    /**
     * Fired when any "growing age" blocks (for example cacti, chorus plants, or crops
     * in vanilla) attempt to advance to the next growth age state during a random tick.
     * 
     * This event is only fired on the logical server.
     */
    export class $CropGrowEvent$Pre extends $CropGrowEvent {
        setResult(arg0: $CropGrowEvent$Pre$Result_): void;
        getResult(): $CropGrowEvent$Pre$Result;
        constructor(level: $Level_, pos: $BlockPos_, state: $BlockState_);
    }
    /**
     * Parent of the two crop growth events.
     */
    export class $CropGrowEvent extends $BlockEvent {
        constructor(level: $Level_, pos: $BlockPos_, state: $BlockState_);
    }
    /**
     * Fired when a fluid checks if nearby blocks can convert it to a source block.
     * 
     * This can be used to manipulate if fluids are allowed to create sources dynamically.
     */
    export class $CreateFluidSourceEvent extends $BlockEvent {
        /**
         * Returns if the fluid would normally be converted to a source block.
         * 
         * This is computed by calling `IFluidStateExtension#canConvertToSource(Level, BlockPos)`.
         */
        getVanillaResult(): boolean;
        /**
         * Sets if the fluid will be converted to a source block.
         */
        setCanConvert(convert: boolean): void;
        /**
         * Returns if the fluid would normally be converted to a source block.
         * 
         * This is computed by calling `IFluidStateExtension#canConvertToSource(Level, BlockPos)`.
         */
        canConvert(): boolean;
        getFluidState(): $FluidState;
        constructor(level: $Level_, pos: $BlockPos_, state: $BlockState_);
        get vanillaResult(): boolean;
        get fluidState(): $FluidState;
    }
    export class $CropGrowEvent$Pre$Result extends $Enum<$CropGrowEvent$Pre$Result> {
        static values(): $CropGrowEvent$Pre$Result[];
        static valueOf(arg0: string): $CropGrowEvent$Pre$Result;
        static GROW: $CropGrowEvent$Pre$Result;
        static DO_NOT_GROW: $CropGrowEvent$Pre$Result;
        static DEFAULT: $CropGrowEvent$Pre$Result;
    }
    /**
     * Values that may be interpreted as {@link $CropGrowEvent$Pre$Result}.
     */
    export type $CropGrowEvent$Pre$Result_ = "grow" | "default" | "do_not_grow";
}
