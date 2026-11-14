import { $ItemStack } from "@package/net/minecraft/world/item";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $Enum } from "@package/java/lang";
export * as templates from "@package/net/neoforged/neoforge/fluids/capability/templates";
export * as wrappers from "@package/net/neoforged/neoforge/fluids/capability/wrappers";

declare module "@package/net/neoforged/neoforge/fluids/capability" {
    /**
     * Implement this interface as a capability which should handle fluids, generally storing them in
     * one or more internal `IFluidTank` objects.
     * 
     * A reference implementation is provided `TileFluidHandler`.
     */
    export class $IFluidHandler {
    }
    export interface $IFluidHandler {
        /**
         * Returns the number of fluid storage units ("tanks") available
         */
        getTanks(): number;
        /**
         * Returns the FluidStack in a given tank.
         * 
         * **IMPORTANT:** This FluidStack *MUST NOT* be modified. This method is not for
         * altering internal contents. Any implementers who are able to detect modification via this method
         * should throw an exception. It is ENTIRELY reasonable and likely that the stack returned here will be a copy.
         * 
         * ***SERIOUSLY: DO NOT MODIFY THE RETURNED FLUIDSTACK***
         */
        getFluidInTank(tank: number): $FluidStack;
        /**
         * Retrieves the maximum fluid amount for a given tank.
         */
        getTankCapacity(tank: number): number;
        /**
         * This function is a way to determine which fluids can exist inside a given handler. General purpose tanks will
         * basically always return TRUE for this.
         */
        isFluidValid(tank: number, stack: $FluidStack_): boolean;
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        get tanks(): number;
    }
    export class $IFluidHandler$FluidAction extends $Enum<$IFluidHandler$FluidAction> {
        static values(): $IFluidHandler$FluidAction[];
        static valueOf(arg0: string): $IFluidHandler$FluidAction;
        execute(): boolean;
        simulate(): boolean;
        static EXECUTE: $IFluidHandler$FluidAction;
        static SIMULATE: $IFluidHandler$FluidAction;
    }
    /**
     * Values that may be interpreted as {@link $IFluidHandler$FluidAction}.
     */
    export type $IFluidHandler$FluidAction_ = "execute" | "simulate";
    /**
     * ItemStacks handled by an `IFluidHandler` may change, so this class allows
     * users of the fluid handler to get the container after it has been used.
     */
    export class $IFluidHandlerItem {
    }
    export interface $IFluidHandlerItem extends $IFluidHandler {
        /**
         * Get the container currently acted on by this fluid handler.
         * The ItemStack may be different from its initial state, in the case of fluid containers that have different items
         * for their filled and empty states.
         * May be an empty item if the container was drained and is consumable.
         */
        getContainer(): $ItemStack;
        get container(): $ItemStack;
    }
}
