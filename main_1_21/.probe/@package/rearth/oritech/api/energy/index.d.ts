import { $Level_ } from "@package/net/minecraft/world/level";
import { $Supplier_ } from "@package/java/util/function";
import { $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $StackContext } from "@package/rearth/oritech/util";
import { $ItemStack, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $DataComponentType } from "@package/net/minecraft/core/component";
import { $BlockLookupCache } from "@package/rearth/oritech/api/lookup";
import { $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as containers from "@package/rearth/oritech/api/energy/containers";

declare module "@package/rearth/oritech/api/energy" {
    export class $EnergyApi$EnergyStorage {
        setAmount(arg0: number): void;
        supportsInsertion(): boolean;
        supportsExtraction(): boolean;
        getCapacity(): number;
        update(): void;
        extract(arg0: number, arg1: boolean): number;
        insert(arg0: number, arg1: boolean): number;
        getAmount(): number;
        constructor();
        get capacity(): number;
    }
    export class $EnergyApi {
        static transfer(arg0: $EnergyApi$EnergyStorage, arg1: $EnergyApi$EnergyStorage, arg2: number, arg3: boolean): number;
        static ITEM: $ItemEnergyApi;
        static BLOCK: $BlockEnergyApi;
        constructor();
    }
    export class $EnergyApi$BlockProvider {
    }
    export interface $EnergyApi$BlockProvider {
        getEnergyStorage(arg0: $Direction_): $EnergyApi$EnergyStorage;
    }
    /**
     * Values that may be interpreted as {@link $EnergyApi$BlockProvider}.
     */
    export type $EnergyApi$BlockProvider_ = ((arg0: $Direction) => $EnergyApi$EnergyStorage);
    export class $BlockEnergyApi {
    }
    export interface $BlockEnergyApi {
        createCache(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_): $BlockLookupCache<$EnergyApi$EnergyStorage>;
        find(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_): $EnergyApi$EnergyStorage;
        find(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockEntity, arg4: $Direction_): $EnergyApi$EnergyStorage;
        registerBlockEntity(arg0: $Supplier_<$BlockEntityType<never>>): void;
    }
    export class $EnergyApi$ItemProvider {
    }
    export interface $EnergyApi$ItemProvider {
        getEnergyStorage(arg0: $ItemStack_): $EnergyApi$EnergyStorage;
    }
    /**
     * Values that may be interpreted as {@link $EnergyApi$ItemProvider}.
     */
    export type $EnergyApi$ItemProvider_ = ((arg0: $ItemStack) => $EnergyApi$EnergyStorage);
    export class $ItemEnergyApi {
    }
    export interface $ItemEnergyApi {
        getEnergyComponent(): $DataComponentType<number>;
        registerForItem(arg0: $Supplier_<$Item>): void;
        find(arg0: $StackContext): $EnergyApi$EnergyStorage;
        get energyComponent(): $DataComponentType<number>;
    }
}
