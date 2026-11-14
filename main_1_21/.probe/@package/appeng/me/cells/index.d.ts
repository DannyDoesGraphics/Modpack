import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $TooltipComponent } from "@package/net/minecraft/world/inventory/tooltip";
import { $IUpgradeInventory } from "@package/appeng/api/upgrades";
import { $Actionable_, $FuzzyMode, $IncludeExclude } from "@package/appeng/api/config";
import { $ConfigInventory } from "@package/appeng/util";
import { $List_ } from "@package/java/util";
import { $CellState, $ISaveProvider_, $StorageCell, $ICellHandler } from "@package/appeng/api/storage/cells";
import { $IActionSource } from "@package/appeng/api/networking/security";
import { $KeyCounter, $AEKey } from "@package/appeng/api/stacks";

declare module "@package/appeng/me/cells" {
    export class $BasicCellHandler implements $ICellHandler {
        isCell(arg0: $ItemStack_): boolean;
        addCellInformationToTooltip(arg0: $ItemStack_, arg1: $List_<$Component_>): void;
        getTooltipImage(arg0: $ItemStack_): ($TooltipComponent) | undefined;
        getCellInventory(arg0: $ItemStack_, arg1: $ISaveProvider_): $StorageCell;
        static INSTANCE: $BasicCellHandler;
        constructor();
    }
    export class $BasicCellInventory implements $StorageCell {
        static isCell(arg0: $ItemStack_): boolean;
        getTotalBytes(): number;
        getStoredItemTypes(): number;
        getTotalItemTypes(): number;
        isPreformatted(): boolean;
        getPartitionListMode(): $IncludeExclude;
        getUpgradesInventory(): $IUpgradeInventory;
        getFreeBytes(): number;
        getUnusedItemCount(): number;
        getRemainingItemTypes(): number;
        getStoredItemCount(): number;
        canHoldNewItem(): boolean;
        getUsedBytes(): number;
        canFitInsideCell(): boolean;
        static createInventory(arg0: $ItemStack_, arg1: $ISaveProvider_): $BasicCellInventory;
        persist(): void;
        getAvailableStacks(arg0: $KeyCounter): void;
        getBytesPerType(): number;
        getIdleDrain(): number;
        getConfigInventory(): $ConfigInventory;
        getFuzzyMode(): $FuzzyMode;
        getDescription(): $Component;
        extract(arg0: $AEKey, arg1: number, arg2: $Actionable_, arg3: $IActionSource): number;
        insert(arg0: $AEKey, arg1: number, arg2: $Actionable_, arg3: $IActionSource): number;
        getStatus(): $CellState;
        isFuzzy(): boolean;
        getRemainingItemCount(): number;
        getAvailableStacks(): $KeyCounter;
        isPreferredStorageFor(arg0: $AEKey, arg1: $IActionSource): boolean;
        get totalBytes(): number;
        get storedItemTypes(): number;
        get totalItemTypes(): number;
        get preformatted(): boolean;
        get partitionListMode(): $IncludeExclude;
        get upgradesInventory(): $IUpgradeInventory;
        get freeBytes(): number;
        get unusedItemCount(): number;
        get remainingItemTypes(): number;
        get storedItemCount(): number;
        get usedBytes(): number;
        get bytesPerType(): number;
        get idleDrain(): number;
        get configInventory(): $ConfigInventory;
        get fuzzyMode(): $FuzzyMode;
        get description(): $Component;
        get status(): $CellState;
        get fuzzy(): boolean;
        get remainingItemCount(): number;
    }
    export class $CreativeCellInventory implements $StorageCell {
        canFitInsideCell(): boolean;
        getAvailableStacks(arg0: $KeyCounter): void;
        getAvailableStacks(): $KeyCounter;
        isPreferredStorageFor(arg0: $AEKey, arg1: $IActionSource): boolean;
        extract(arg0: $AEKey, arg1: number, arg2: $Actionable_, arg3: $IActionSource): number;
        insert(arg0: $AEKey, arg1: number, arg2: $Actionable_, arg3: $IActionSource): number;
    }
    export class $CreativeCellHandler implements $ICellHandler {
        isCell(arg0: $ItemStack_): boolean;
        getCellInventory(arg0: $ItemStack_, arg1: $ISaveProvider_): $StorageCell;
        getTooltipImage(arg0: $ItemStack_): ($TooltipComponent) | undefined;
        static INSTANCE: $CreativeCellHandler;
        constructor();
    }
}
