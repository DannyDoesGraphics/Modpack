import { $Level_ } from "@package/net/minecraft/world/level";
import { $IFluidHandler$FluidAction_, $IFluidHandlerItem, $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BucketPickup, $LiquidBlockContainer } from "@package/net/minecraft/world/level/block";
import { $VoidFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability/templates";

declare module "@package/net/neoforged/neoforge/fluids/capability/wrappers" {
    /**
     * Wrapper for vanilla and forge buckets.
     * Swaps between empty bucket and filled bucket of the correct type.
     */
    export class $FluidBucketWrapper implements $IFluidHandlerItem {
        canFillFluidType(fluid: $FluidStack_): boolean;
        getFluid(): $FluidStack;
        getTanks(): number;
        getFluidInTank(tank: number): $FluidStack;
        getTankCapacity(tank: number): number;
        isFluidValid(tank: number, stack: $FluidStack_): boolean;
        getContainer(): $ItemStack;
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        constructor(container: $ItemStack_);
        get fluid(): $FluidStack;
        get tanks(): number;
        get container(): $ItemStack;
    }
    export class $CauldronWrapper implements $IFluidHandler {
        getTanks(): number;
        getFluidInTank(tank: number): $FluidStack;
        getTankCapacity(tank: number): number;
        isFluidValid(tank: number, stack: $FluidStack_): boolean;
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        constructor(level: $Level_, pos: $BlockPos_);
        get tanks(): number;
    }
    export class $BlockWrapper$LiquidContainerBlockWrapper extends $VoidFluidHandler {
        static INSTANCE: $VoidFluidHandler;
        constructor(liquidContainer: $LiquidBlockContainer, world: $Level_, blockPos: $BlockPos_);
    }
    /**
     * Wrapper around any block, only accounts for fluid placement, otherwise the block acts a void.
     */
    export class $BlockWrapper extends $VoidFluidHandler {
        static INSTANCE: $VoidFluidHandler;
        constructor(state: $BlockState_, world: $Level_, blockPos: $BlockPos_);
    }
    export class $BucketPickupHandlerWrapper implements $IFluidHandler {
        getTanks(): number;
        getFluidInTank(tank: number): $FluidStack;
        getTankCapacity(tank: number): number;
        isFluidValid(tank: number, stack: $FluidStack_): boolean;
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        constructor(player: $Player, bucketPickupHandler: $BucketPickup, world: $Level_, blockPos: $BlockPos_);
        get tanks(): number;
    }
}
