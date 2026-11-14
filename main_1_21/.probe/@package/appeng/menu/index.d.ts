import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $MenuHostLocator_, $MenuHostLocator } from "@package/appeng/menu/locator";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $List } from "@package/java/util";
import { $IAutoCraftingMenu } from "@package/appeng/api/implementations/menus";
import { $IActionSource } from "@package/appeng/api/networking/security";
import { $ISubMenuHost } from "@package/appeng/api/storage";
import { $NonNullList } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Slot, $MenuType_, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Record, $Object } from "@package/java/lang";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $InventoryAction_ } from "@package/appeng/helpers";
import { $ShortSet } from "@package/it/unimi/dsi/fastutil/shorts";
export * as slot from "@package/appeng/menu/slot";
export * as guisync from "@package/appeng/menu/guisync";
export * as implementations from "@package/appeng/menu/implementations";
export * as me from "@package/appeng/menu/me";
export * as interfaces from "@package/appeng/menu/interfaces";
export * as locator from "@package/appeng/menu/locator";

declare module "@package/appeng/menu" {
    export class $AEBaseMenu extends $AbstractContainerMenu {
        getPlayer(): $Player;
        getActionSource(): $IActionSource;
        addClientSideSlot(arg0: $Slot, arg1: $SlotSemantic_): $Slot;
        removeClientSideSlot(arg0: $Slot): void;
        isClientSideSlot(arg0: $Slot): boolean;
        hideSlot(arg0: string): void;
        doAction(arg0: $ServerPlayer, arg1: $InventoryAction_, arg2: number, arg3: number): void;
        swapSlotContents(arg0: number, arg1: number): void;
        onSlotChange(arg0: $Slot): void;
        isValidForSlot(arg0: $Slot, arg1: $ItemStack_): boolean;
        receiveServerSyncData(arg0: $RegistryFriendlyByteBuf): void;
        receiveClientAction(arg0: string, arg1: string): void;
        isReturnedFromSubScreen(): boolean;
        setReturnedFromSubScreen(arg0: boolean): void;
        lockPlayerInventorySlot(arg0: number): void;
        getPlayerInventory(): $Inventory;
        isPlayerInventorySlotLocked(arg0: number): boolean;
        isValidMenu(): boolean;
        setValidMenu(arg0: boolean): void;
        getSlotSemantic(arg0: $Slot): $SlotSemantic;
        isPlayerSideSlot(arg0: $Slot): boolean;
        onServerDataSync(arg0: $ShortSet): void;
        setLocator(arg0: $MenuHostLocator_): void;
        getLocator(): $MenuHostLocator;
        getTarget(): $Object;
        setFilter(arg0: number, arg1: $ItemStack_): void;
        getBlockEntity(): $BlockEntity;
        getSlots(arg0: $SlotSemantic_): $List<$Slot>;
        isClientSide(): boolean;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $Object);
        get actionSource(): $IActionSource;
        get playerInventory(): $Inventory;
        get target(): $Object;
        get blockEntity(): $BlockEntity;
        get clientSide(): boolean;
    }
    export class $AEBaseMenu$FillingSource {
    }
    export interface $AEBaseMenu$FillingSource {
    }
    /**
     * Values that may be interpreted as {@link $AEBaseMenu$FillingSource}.
     */
    export type $AEBaseMenu$FillingSource_ = (() => void);
    export class $ContainerTarget {
        constructor();
    }
    export class $ISubMenu {
    }
    export interface $ISubMenu {
        getLocator(): $MenuHostLocator;
        getHost(): $ISubMenuHost;
        get locator(): $MenuHostLocator;
        get host(): $ISubMenuHost;
    }
    export class $AEBaseMenu$ClientAction<T> {
    }
    export class $ToolboxMenu {
        getName(): $Component;
        isPresent(): boolean;
        tick(): void;
        constructor(arg0: $AEBaseMenu);
        get name(): $Component;
        get present(): boolean;
    }
    export class $AEBaseMenu$EmptyingSink {
    }
    export interface $AEBaseMenu$EmptyingSink {
    }
    /**
     * Values that may be interpreted as {@link $AEBaseMenu$EmptyingSink}.
     */
    export type $AEBaseMenu$EmptyingSink_ = (() => void);
    export class $MenuOpener$Opener {
    }
    export interface $MenuOpener$Opener {
        open(arg0: $Player, arg1: $MenuHostLocator_, arg2: boolean): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MenuOpener$Opener}.
     */
    export type $MenuOpener$Opener_ = ((arg0: $Player, arg1: $MenuHostLocator, arg2: boolean) => boolean);
    export class $SlotSemantics {
        static get(arg0: string): $SlotSemantic;
        static register(arg0: string, arg1: boolean, arg2: number): $SlotSemantic;
        static register(arg0: string, arg1: boolean): $SlotSemantic;
        static getOrThrow(arg0: string): $SlotSemantic;
        static MACHINE_OUTPUT: $SlotSemantic;
        static MISSING_INGREDIENT: $SlotSemantic;
        static TOOLBOX: $SlotSemantic;
        static PROCESSING_INPUTS: $SlotSemantic;
        static SMITHING_TABLE_ADDITION: $SlotSemantic;
        static INSCRIBER_PLATE_TOP: $SlotSemantic;
        static PROCESSING_OUTPUTS: $SlotSemantic;
        static STONECUTTING_INPUT: $SlotSemantic;
        static CRAFTING_GRID: $SlotSemantic;
        static CONFIG: $SlotSemantic;
        static SMITHING_TABLE_TEMPLATE: $SlotSemantic;
        static BLANK_PATTERN: $SlotSemantic;
        static CRAFTING_RESULT: $SlotSemantic;
        static STORAGE_CELL: $SlotSemantic;
        static ENCODED_PATTERN: $SlotSemantic;
        static STORAGE: $SlotSemantic;
        static SMITHING_TABLE_BASE: $SlotSemantic;
        static MACHINE_INPUT: $SlotSemantic;
        static PLAYER_HOTBAR: $SlotSemantic;
        static VIEW_CELL: $SlotSemantic;
        static MACHINE_CRAFTING_GRID: $SlotSemantic;
        static INSCRIBER_PLATE_BOTTOM: $SlotSemantic;
        static UPGRADE: $SlotSemantic;
        static PLAYER_INVENTORY: $SlotSemantic;
        static SMITHING_TABLE_RESULT: $SlotSemantic;
    }
    export class $AutoCraftingMenu extends $AbstractContainerMenu implements $IAutoCraftingMenu {
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor();
    }
    export class $SlotSemantic extends $Record {
        quickMovePriority(): number;
        playerSide(): boolean;
        id(): string;
        constructor(id: string, playerSide: boolean, quickMovePriority: number);
    }
    /**
     * Values that may be interpreted as {@link $SlotSemantic}.
     */
    export type $SlotSemantic_ = { id?: string, quickMovePriority?: number, playerSide?: boolean,  } | [id?: string, quickMovePriority?: number, playerSide?: boolean, ];
    export class $MenuOpener {
        static returnTo(arg0: $MenuType_<never>, arg1: $Player, arg2: $MenuHostLocator_): boolean;
        static open(arg0: $MenuType_<never>, arg1: $Player, arg2: $MenuHostLocator_, arg3: boolean): boolean;
        static open(arg0: $MenuType_<never>, arg1: $Player, arg2: $MenuHostLocator_): boolean;
        static addOpener<T extends $AEBaseMenu>(arg0: $MenuType_<T>, arg1: $MenuOpener$Opener_): void;
    }
}
