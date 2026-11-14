import { $MEStorage } from "@package/appeng/api/storage";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $TooltipComponent } from "@package/net/minecraft/world/inventory/tooltip";
import { $FuzzyMode_, $FuzzyMode } from "@package/appeng/api/config";
import { $IUpgradeableItem } from "@package/appeng/api/upgrades";
import { $ConfigInventory } from "@package/appeng/util";
import { $Enum } from "@package/java/lang";
import { $List_ } from "@package/java/util";
import { $AEKeyType, $AEKey } from "@package/appeng/api/stacks";

declare module "@package/appeng/api/storage/cells" {
    export class $ICellHandler {
    }
    export interface $ICellHandler {
        isCell(arg0: $ItemStack_): boolean;
        getCellInventory(arg0: $ItemStack_, arg1: $ISaveProvider_): $StorageCell;
    }
    export class $CellState extends $Enum<$CellState> {
        getStateColor(): number;
        static values(): $CellState[];
        static valueOf(arg0: string): $CellState;
        static TYPES_FULL: $CellState;
        static ABSENT: $CellState;
        static EMPTY: $CellState;
        static NOT_EMPTY: $CellState;
        static FULL: $CellState;
        get stateColor(): number;
    }
    /**
     * Values that may be interpreted as {@link $CellState}.
     */
    export type $CellState_ = "absent" | "empty" | "not_empty" | "types_full" | "full";
    export class $StorageCell {
    }
    export interface $StorageCell extends $MEStorage {
        canFitInsideCell(): boolean;
        persist(): void;
        getIdleDrain(): number;
        getStatus(): $CellState;
        get idleDrain(): number;
        get status(): $CellState;
    }
    export class $ISaveProvider {
    }
    export interface $ISaveProvider {
        saveChanges(): void;
    }
    /**
     * Values that may be interpreted as {@link $ISaveProvider}.
     */
    export type $ISaveProvider_ = (() => void);
    export class $IBasicCellItem {
    }
    export interface $IBasicCellItem extends $ICellWorkbenchItem {
        addCellInformationToTooltip(arg0: $ItemStack_, arg1: $List_<$Component_>): void;
        getCellTooltipImage(arg0: $ItemStack_): ($TooltipComponent) | undefined;
        getBytesPerType(arg0: $ItemStack_): number;
        getTotalTypes(arg0: $ItemStack_): number;
        isBlackListed(arg0: $ItemStack_, arg1: $AEKey): boolean;
        storableInStorageCell(): boolean;
        getIdleDrain(): number;
        isStorageCell(arg0: $ItemStack_): boolean;
        getBytes(arg0: $ItemStack_): number;
        getKeyType(): $AEKeyType;
        get idleDrain(): number;
        get keyType(): $AEKeyType;
    }
    export class $ICellWorkbenchItem {
    }
    export interface $ICellWorkbenchItem extends $IUpgradeableItem {
        getConfigInventory(arg0: $ItemStack_): $ConfigInventory;
        getFuzzyMode(arg0: $ItemStack_): $FuzzyMode;
        setFuzzyMode(arg0: $ItemStack_, arg1: $FuzzyMode_): void;
        isEditable(arg0: $ItemStack_): boolean;
    }
}
