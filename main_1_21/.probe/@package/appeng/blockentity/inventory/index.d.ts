import { $BaseInternalInventory } from "@package/appeng/api/inventories";
import { $InternalInventoryHost } from "@package/appeng/util/inv";
import { $IAEItemFilter } from "@package/appeng/util/inv/filter";
import { $StorageCell } from "@package/appeng/api/storage/cells";

declare module "@package/appeng/blockentity/inventory" {
    export class $AppEngCellInventory extends $BaseInternalInventory {
        persist(): void;
        setFilter(arg0: $IAEItemFilter): void;
        setHandler(arg0: number, arg1: $StorageCell): void;
        constructor(arg0: $InternalInventoryHost, arg1: number);
        set filter(value: $IAEItemFilter);
    }
}
