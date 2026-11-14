import { $KeyTypeSelectionMenu, $KeyTypeSelectionMenu$SyncedKeyTypes } from "@package/appeng/menu/interfaces";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $IGridNode } from "@package/appeng/api/networking";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $Spliterator, $Iterator, $List, $Set, $List_, $Collection } from "@package/java/util";
import { $AEKeyType_, $AEKey } from "@package/appeng/api/stacks";
import { $LinkStatusAwareMenu } from "@package/appeng/menu/guisync";
import { $IConfigManager, $KeyTypeSelection, $IConfigurableObject } from "@package/appeng/api/util";
import { $ITerminalHost, $ILinkStatus } from "@package/appeng/api/storage";
import { $Consumer_ } from "@package/java/util/function";
import { $NonNullList } from "@package/net/minecraft/core";
import { $Object2IntOpenHashMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $Slot, $MenuType_, $MenuType } from "@package/net/minecraft/world/inventory";
import { $Runnable_, $Object, $Iterable } from "@package/java/lang";
import { $AEBaseMenu, $ToolboxMenu } from "@package/appeng/menu";
import { $InventoryAction, $InventoryAction_ } from "@package/appeng/helpers";

declare module "@package/appeng/menu/me/common" {
    export class $IClientRepo {
    }
    export interface $IClientRepo {
        getByIngredient(arg0: $Ingredient_): $Collection<$GridInventoryEntry>;
        getAllEntries(): $Set<$GridInventoryEntry>;
        handleUpdate(arg0: boolean, arg1: $List_<$GridInventoryEntry>): void;
        get allEntries(): $Set<$GridInventoryEntry>;
    }
    export class $MEStorageMenu extends $AEBaseMenu implements $IConfigurableObject, $IMEInteractionHandler, $LinkStatusAwareMenu, $KeyTypeSelectionMenu {
        isKeyVisible(arg0: $AEKey): boolean;
        getClientRepo(): $IClientRepo;
        getViewCells(): $List<$ItemStack>;
        setGui(arg0: $Runnable_): void;
        setClientRepo(arg0: $IClientRepo): void;
        hasIngredient(arg0: $Ingredient_, arg1: $Object2IntOpenHashMap<$Object>): boolean;
        canConfigureTypeFilter(): boolean;
        setLinkStatus(arg0: $ILinkStatus): void;
        getServerKeyTypeSelection(): $KeyTypeSelection;
        getClientKeyTypeSelection(): $KeyTypeSelectionMenu$SyncedKeyTypes;
        handleInteraction(arg0: number, arg1: $InventoryAction_): void;
        getGridNode(): $IGridNode;
        getConfigManager(): $IConfigManager;
        getLinkStatus(): $ILinkStatus;
        getToolbox(): $ToolboxMenu;
        getHost(): $ITerminalHost;
        selectKeyType(arg0: $AEKeyType_, arg1: boolean): void;
        stateId: number;
        static PORTABLE_FLUID_CELL_TYPE: $MenuType<$MEStorageMenu>;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        searchKeyTypes: $KeyTypeSelectionMenu$SyncedKeyTypes;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static PORTABLE_ITEM_CELL_TYPE: $MenuType<$MEStorageMenu>;
        static WIRELESS_TYPE: $MenuType<$MEStorageMenu>;
        containerId: number;
        static TYPE: $MenuType<$MEStorageMenu>;
        activeCraftingJobs: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $ITerminalHost);
        get viewCells(): $List<$ItemStack>;
        set gui(value: $Runnable_);
        get serverKeyTypeSelection(): $KeyTypeSelection;
        get clientKeyTypeSelection(): $KeyTypeSelectionMenu$SyncedKeyTypes;
        get gridNode(): $IGridNode;
        get configManager(): $IConfigManager;
        get toolbox(): $ToolboxMenu;
        get host(): $ITerminalHost;
    }
    export class $IncrementalUpdateHelper implements $Iterable<$AEKey> {
        getBySerial(arg0: number): $AEKey;
        addChange(arg0: $AEKey): void;
        isFullUpdate(): boolean;
        hasChanges(): boolean;
        getOrAssignSerial(arg0: $AEKey): number;
        removeSerial(arg0: $AEKey): void;
        getSerial(arg0: $AEKey): number;
        reset(): void;
        clear(): void;
        iterator(): $Iterator<$AEKey>;
        spliterator(): $Spliterator<$AEKey>;
        forEach(arg0: $Consumer_<$AEKey>): void;
        commitChanges(): void;
        constructor();
        [Symbol.iterator](): Iterator<$AEKey>
        get fullUpdate(): boolean;
    }
    export class $IMEInteractionHandler {
    }
    export interface $IMEInteractionHandler {
        handleInteraction(arg0: number, arg1: $InventoryAction_): void;
    }
    /**
     * Values that may be interpreted as {@link $IMEInteractionHandler}.
     */
    export type $IMEInteractionHandler_ = ((arg0: number, arg1: $InventoryAction) => void);
    export class $GridInventoryEntry {
        getStoredAmount(): number;
        getWhat(): $AEKey;
        isCraftable(): boolean;
        isMeaningful(): boolean;
        getSerial(): number;
        getRequestableAmount(): number;
        constructor(arg0: number, arg1: $AEKey, arg2: number, arg3: number, arg4: boolean);
        get storedAmount(): number;
        get what(): $AEKey;
        get craftable(): boolean;
        get meaningful(): boolean;
        get serial(): number;
        get requestableAmount(): number;
    }
}
