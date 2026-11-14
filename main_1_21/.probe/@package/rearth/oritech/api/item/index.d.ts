import { $Level_ } from "@package/net/minecraft/world/level";
import { $Supplier_ } from "@package/java/util/function";
import { $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $BlockLookupCache } from "@package/rearth/oritech/api/lookup";
import { $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as containers from "@package/rearth/oritech/api/item/containers";

declare module "@package/rearth/oritech/api/item" {
    export class $ItemApi$BlockProvider {
    }
    export interface $ItemApi$BlockProvider {
        getInventoryStorage(arg0: $Direction_): $ItemApi$InventoryStorage;
    }
    /**
     * Values that may be interpreted as {@link $ItemApi$BlockProvider}.
     */
    export type $ItemApi$BlockProvider_ = ((arg0: $Direction) => $ItemApi$InventoryStorage);
    export class $ItemApi {
        static BLOCK: $BlockItemApi;
        constructor();
    }
    export class $ItemApi$InventoryStorage {
    }
    export interface $ItemApi$InventoryStorage {
        supportsInsertion(): boolean;
        supportsExtraction(): boolean;
        insertToSlot(arg0: $ItemStack_, arg1: number, arg2: boolean): number;
        extractFromSlot(arg0: $ItemStack_, arg1: number, arg2: boolean): number;
        getSlotCount(): number;
        update(): void;
        extract(arg0: $ItemStack_, arg1: boolean): number;
        insert(arg0: $ItemStack_, arg1: boolean): number;
        getStackInSlot(arg0: number): $ItemStack;
        getSlotLimit(arg0: number): number;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        get slotCount(): number;
    }
    export class $BlockItemApi {
    }
    export interface $BlockItemApi {
        createCache(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_): $BlockLookupCache<$ItemApi$InventoryStorage>;
        find(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_): $ItemApi$InventoryStorage;
        find(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockEntity, arg4: $Direction_): $ItemApi$InventoryStorage;
        registerBlockEntity(arg0: $Supplier_<$BlockEntityType<never>>): void;
    }
}
