import { $IEnergySource_ } from "@package/appeng/api/networking/energy";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $IGridNodeService, $IManagedGridNode, $IGridNode } from "@package/appeng/api/networking";
import { $Actionable_ } from "@package/appeng/api/config";
import { $IUpgradeableObject } from "@package/appeng/api/upgrades";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ICraftingRequester, $ICraftingLink } from "@package/appeng/api/networking/crafting";
import { $IActionSource } from "@package/appeng/api/networking/security";
import { $KeyCounter, $AEKey } from "@package/appeng/api/stacks";
import { $IConfigurableObject } from "@package/appeng/api/util";
import { $Supplier_ } from "@package/java/util/function";
import { $ISubMenu } from "@package/appeng/menu";
import { $Record } from "@package/java/lang";
import { $ICellHandler, $ISaveProvider_, $StorageCell } from "@package/appeng/api/storage/cells";
export * as cells from "@package/appeng/api/storage/cells";

declare module "@package/appeng/api/storage" {
    export class $ISubMenuHost {
    }
    export interface $ISubMenuHost {
        returnToMainMenu(arg0: $Player, arg1: $ISubMenu): void;
        getMainMenuIcon(): $ItemStack;
        get mainMenuIcon(): $ItemStack;
    }
    export class $IStorageMounts {
        static DEFAULT_PRIORITY: number;
    }
    export interface $IStorageMounts {
        mount(arg0: $MEStorage_): void;
        mount(arg0: $MEStorage_, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $IStorageMounts}.
     */
    export type $IStorageMounts_ = ((arg0: $MEStorage, arg1: number) => void);
    export class $NoOpKeyFilter implements $AEKeyFilter {
    }
    export class $LinkStatus extends $Record implements $ILinkStatus {
        statusDescription(): $Component;
        connected(): boolean;
        constructor(connected: boolean, statusDescription: $Component_);
    }
    /**
     * Values that may be interpreted as {@link $LinkStatus}.
     */
    export type $LinkStatus_ = { statusDescription?: $Component_, connected?: boolean,  } | [statusDescription?: $Component_, connected?: boolean, ];
    export class $SupplierStorage implements $MEStorage {
        getAvailableStacks(): $KeyCounter;
        getAvailableStacks(arg0: $KeyCounter): void;
        isPreferredStorageFor(arg0: $AEKey, arg1: $IActionSource): boolean;
        getDescription(): $Component;
        extract(arg0: $AEKey, arg1: number, arg2: $Actionable_, arg3: $IActionSource): number;
        insert(arg0: $AEKey, arg1: number, arg2: $Actionable_, arg3: $IActionSource): number;
        constructor(arg0: $Supplier_<$MEStorage>);
        get description(): $Component;
    }
    export class $IPatternAccessTermMenuHost {
    }
    export interface $IPatternAccessTermMenuHost extends $IConfigurableObject {
        getGridNode(): $IGridNode;
        getLinkStatus(): $ILinkStatus;
        get gridNode(): $IGridNode;
        get linkStatus(): $ILinkStatus;
    }
    export class $StorageHelper {
        static loadCraftingLink(arg0: $CompoundTag_, arg1: $ICraftingRequester): $ICraftingLink;
        static poweredInsert(arg0: $IEnergySource_, arg1: $MEStorage_, arg2: $AEKey, arg3: number, arg4: $IActionSource, arg5: $Actionable_): number;
        static poweredInsert(arg0: $IEnergySource_, arg1: $MEStorage_, arg2: $AEKey, arg3: number, arg4: $IActionSource): number;
        static poweredExtraction(arg0: $IEnergySource_, arg1: $MEStorage_, arg2: $AEKey, arg3: number, arg4: $IActionSource, arg5: $Actionable_): number;
        static poweredExtraction(arg0: $IEnergySource_, arg1: $MEStorage_, arg2: $AEKey, arg3: number, arg4: $IActionSource): number;
    }
    export class $MEStorage {
        static checkPreconditions(arg0: $AEKey, arg1: number, arg2: $Actionable_, arg3: $IActionSource): void;
    }
    export interface $MEStorage {
        getAvailableStacks(arg0: $KeyCounter): void;
        getAvailableStacks(): $KeyCounter;
        isPreferredStorageFor(arg0: $AEKey, arg1: $IActionSource): boolean;
        getDescription(): $Component;
        extract(arg0: $AEKey, arg1: number, arg2: $Actionable_, arg3: $IActionSource): number;
        insert(arg0: $AEKey, arg1: number, arg2: $Actionable_, arg3: $IActionSource): number;
        get description(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $MEStorage}.
     */
    export type $MEStorage_ = (() => $Component_);
    export class $IStorageProvider {
        static requestUpdate(arg0: $IManagedGridNode): void;
    }
    export interface $IStorageProvider extends $IGridNodeService {
        mountInventories(arg0: $IStorageMounts_): void;
    }
    /**
     * Values that may be interpreted as {@link $IStorageProvider}.
     */
    export type $IStorageProvider_ = ((arg0: $IStorageMounts) => void);
    export class $AEKeySlotFilter {
    }
    export interface $AEKeySlotFilter {
        isAllowed(arg0: number, arg1: $AEKey): boolean;
    }
    /**
     * Values that may be interpreted as {@link $AEKeySlotFilter}.
     */
    export type $AEKeySlotFilter_ = ((arg0: number, arg1: $AEKey) => boolean);
    export class $ILinkStatus {
        static ofConnected(): $ILinkStatus;
        static ofDisconnected(arg0: $Component_): $ILinkStatus;
        static ofDisconnected(): $ILinkStatus;
        static ofManagedNode(arg0: $IManagedGridNode): $ILinkStatus;
    }
    export interface $ILinkStatus {
        statusDescription(): $Component;
        connected(): boolean;
    }
    export class $ITerminalHost {
    }
    export interface $ITerminalHost extends $IUpgradeableObject, $IConfigurableObject, $ISubMenuHost {
        getLinkStatus(): $ILinkStatus;
        getCloseHotkey(): string;
        getInventory(): $MEStorage;
        get linkStatus(): $ILinkStatus;
        get closeHotkey(): string;
        get inventory(): $MEStorage;
    }
    export class $AEKeyFilter {
        static none(): $AEKeyFilter;
    }
    export interface $AEKeyFilter {
        matches(arg0: $AEKey): boolean;
    }
    /**
     * Values that may be interpreted as {@link $AEKeyFilter}.
     */
    export type $AEKeyFilter_ = ((arg0: $AEKey) => boolean);
    export class $StorageCells {
        static addCellHandler(arg0: $ICellHandler): void;
        static isCellHandled(arg0: $ItemStack_): boolean;
        static getCellInventory(arg0: $ItemStack_, arg1: $ISaveProvider_): $StorageCell;
        static getHandler(arg0: $ItemStack_): $ICellHandler;
    }
}
