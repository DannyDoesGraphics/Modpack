import { $Level_ } from "@package/net/minecraft/world/level";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $Supplier_ } from "@package/java/util/function";
import { $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $StackContext } from "@package/rearth/oritech/util";
import { $ItemStack, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $DataComponentType } from "@package/net/minecraft/core/component";
import { $BlockLookupCache } from "@package/rearth/oritech/api/lookup";
import { $List } from "@package/java/util";
import { $FluidStack } from "@package/dev/architectury/fluid";
import { $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as containers from "@package/rearth/oritech/api/fluid/containers";

declare module "@package/rearth/oritech/api/fluid" {
    export class $FluidApi$BlockProvider {
    }
    export interface $FluidApi$BlockProvider {
        getFluidStorage(arg0: $Direction_): $FluidApi$FluidStorage;
    }
    /**
     * Values that may be interpreted as {@link $FluidApi$BlockProvider}.
     */
    export type $FluidApi$BlockProvider_ = ((arg0: $Direction) => $FluidApi$FluidStorage);
    export class $FluidApi {
        static transferLastIncludingInputs(arg0: $FluidApi$FluidStorage, arg1: $FluidApi$FluidStorage, arg2: number, arg3: boolean): number;
        static transferLast(arg0: $FluidApi$FluidStorage, arg1: $FluidApi$FluidStorage, arg2: number, arg3: boolean): number;
        static transferFirst(arg0: $FluidApi$FluidStorage, arg1: $FluidApi$FluidStorage, arg2: number, arg3: boolean): number;
        static transfer(arg0: $FluidApi$FluidStorage, arg1: $FluidApi$FluidStorage, arg2: $FluidStack, arg3: boolean): number;
        static ITEM: $ItemFluidApi;
        static BLOCK: $BlockFluidApi;
        constructor();
    }
    export class $ItemFluidApi {
        static tryFluidBlockItemInteraction(arg0: $ItemStack_, arg1: $Level_, arg2: $BlockPos_, arg3: $Player, arg4: $InteractionHand_): boolean;
    }
    export interface $ItemFluidApi {
        registerForItem(arg0: $Supplier_<$Item>): void;
        getFluidComponent(): $DataComponentType<$FluidStack>;
        find(arg0: $StackContext): $FluidApi$FluidStorage;
        get fluidComponent(): $DataComponentType<$FluidStack>;
    }
    export class $FluidApi$FluidStorage {
        supportsInsertion(): boolean;
        supportsExtraction(): boolean;
        getCapacity(): number;
        update(): void;
        extract(arg0: $FluidStack, arg1: boolean): number;
        insert(arg0: $FluidStack, arg1: boolean): number;
        getContent(): $List<$FluidStack>;
        constructor();
        get capacity(): number;
        get content(): $List<$FluidStack>;
    }
    export class $BlockFluidApi {
    }
    export interface $BlockFluidApi {
        createCache(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_): $BlockLookupCache<$FluidApi$FluidStorage>;
        find(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_): $FluidApi$FluidStorage;
        find(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockEntity, arg4: $Direction_): $FluidApi$FluidStorage;
        registerBlockEntity(arg0: $Supplier_<$BlockEntityType<never>>): void;
    }
    export class $FluidApi$SingleSlotStorage extends $FluidApi$FluidStorage {
        getStack(): $FluidStack;
        setStack(arg0: $FluidStack): void;
        constructor();
    }
    export class $FluidApi$MultiSlotStorage extends $FluidApi$FluidStorage {
        getSlotCount(): number;
        getStorageForDirection(arg0: $Direction_): $FluidApi$FluidStorage;
        getStorageForSlot(arg0: number): $FluidApi$FluidStorage;
        getStack(arg0: number): $FluidStack;
        setStack(arg0: number, arg1: $FluidStack): void;
        constructor();
        get slotCount(): number;
    }
    export class $FluidApi$ItemProvider {
    }
    export interface $FluidApi$ItemProvider {
        getFluidStorage(arg0: $ItemStack_): $FluidApi$SingleSlotStorage;
    }
    /**
     * Values that may be interpreted as {@link $FluidApi$ItemProvider}.
     */
    export type $FluidApi$ItemProvider_ = ((arg0: $ItemStack) => $FluidApi$SingleSlotStorage);
}
