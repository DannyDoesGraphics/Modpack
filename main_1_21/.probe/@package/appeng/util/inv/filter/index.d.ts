import { $InternalInventory } from "@package/appeng/api/inventories";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ItemDefinition } from "@package/appeng/core/definitions";

declare module "@package/appeng/util/inv/filter" {
    export class $AEItemFilters$ExtractOnlyFilter implements $IAEItemFilter {
        allowExtract(arg0: $InternalInventory, arg1: number, arg2: number): boolean;
        allowInsert(arg0: $InternalInventory, arg1: number, arg2: $ItemStack_): boolean;
    }
    export class $IAEItemFilter {
    }
    export interface $IAEItemFilter {
        allowExtract(arg0: $InternalInventory, arg1: number, arg2: number): boolean;
        allowInsert(arg0: $InternalInventory, arg1: number, arg2: $ItemStack_): boolean;
    }
    export class $AEItemDefinitionFilter implements $IAEItemFilter {
        allowExtract(arg0: $InternalInventory, arg1: number, arg2: number): boolean;
        allowInsert(arg0: $InternalInventory, arg1: number, arg2: $ItemStack_): boolean;
        constructor(arg0: $ItemDefinition<never>);
    }
    export class $AEItemFilters {
        static EXTRACT_ONLY: $IAEItemFilter;
        static INSERT_ONLY: $IAEItemFilter;
    }
    export class $AEItemFilters$InsertOnlyFilter implements $IAEItemFilter {
        allowExtract(arg0: $InternalInventory, arg1: number, arg2: number): boolean;
        allowInsert(arg0: $InternalInventory, arg1: number, arg2: $ItemStack_): boolean;
    }
}
