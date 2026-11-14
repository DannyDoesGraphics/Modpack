import { $IEnergySource } from "@package/appeng/api/networking/energy";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ConfigInventory } from "@package/appeng/util";
import { $IEnergyStorage } from "@package/net/neoforged/neoforge/energy";
import { $Iterator, $List, $List_ } from "@package/java/util";
import { $IColorableBlockEntity } from "@package/appeng/api/implementations/blockentities";
import { $IActionSource, $IActionHost } from "@package/appeng/api/networking/security";
import { $AEItemKey, $AEKey } from "@package/appeng/api/stacks";
import { $BiConsumer_, $Consumer_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ISubMenu } from "@package/appeng/menu";
import { $WirelessCraftingTerminalItem, $WirelessTerminalItem } from "@package/appeng/items/tools/powered";
import { $Enum, $Record } from "@package/java/lang";
import { $IPortableTerminal, $ItemMenuHost } from "@package/appeng/api/implementations/menuobjects";
import { $IExternalPowerSink } from "@package/appeng/blockentity/powersink";
import { $PatternEncodingLogic } from "@package/appeng/parts/encoding";
import { $ItemLike_, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $GenericStackInv } from "@package/appeng/helpers/externalstorage";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $DelegatingMEInventory } from "@package/appeng/me/storage";
import { $IInWorldGridNodeHost, $IManagedGridNode, $IGridNode } from "@package/appeng/api/networking";
import { $Actionable_, $PowerMultiplier_ } from "@package/appeng/api/config";
import { $IUpgradeInventory, $IUpgradeableObject } from "@package/appeng/api/upgrades";
import { $ItemMenuHostLocator, $MenuHostLocator_ } from "@package/appeng/menu/locator";
import { $ImmutableSet } from "@package/com/google/common/collect";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ICraftingLink, $ICraftingService, $ICraftingRequester } from "@package/appeng/api/networking/crafting";
import { $IPartHost } from "@package/appeng/api/parts";
import { $MachineSource } from "@package/appeng/me/helpers";
import { $ISegmentedInventory, $InternalInventory } from "@package/appeng/api/inventories";
import { $IConfigManager, $AEColor_, $KeyTypeSelection, $AEColor, $KeyTypeSelectionHost, $AECableType, $IConfigurableObject, $DimensionalBlockPos } from "@package/appeng/api/util";
import { $IGridTickable } from "@package/appeng/api/networking/ticking";
import { $ISubMenuHost, $ITerminalHost, $ILinkStatus, $MEStorage } from "@package/appeng/api/storage";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as patternprovider from "@package/appeng/helpers/patternprovider";
export * as externalstorage from "@package/appeng/helpers/externalstorage";

declare module "@package/appeng/helpers" {
    export class $Splotch {
        writeToStream(arg0: $FriendlyByteBuf): void;
        isLumen(): boolean;
        x(): number;
        y(): number;
        getSeed(): number;
        getSide(): $Direction;
        getColor(): $AEColor;
        constructor(arg0: $AEColor_, arg1: boolean, arg2: $Direction_, arg3: $Vec3_);
        constructor(arg0: $FriendlyByteBuf);
        get lumen(): boolean;
        get seed(): number;
        get side(): $Direction;
        get color(): $AEColor;
    }
    export class $InterfaceLogic$Ticker implements $IGridTickable {
    }
    export class $InventoryAction extends $Enum<$InventoryAction> {
        static values(): $InventoryAction[];
        static valueOf(arg0: string): $InventoryAction;
        static PICKUP_SINGLE: $InventoryAction;
        static FILL_ENTIRE_ITEM: $InventoryAction;
        static EMPTY_ITEM: $InventoryAction;
        static PLACE_SINGLE: $InventoryAction;
        static SET_FILTER: $InventoryAction;
        static PICKUP_OR_SET_DOWN: $InventoryAction;
        static FILL_ITEM_MOVE_TO_PLAYER: $InventoryAction;
        static ROLL_DOWN: $InventoryAction;
        static CRAFT_ITEM: $InventoryAction;
        static SPLIT_OR_PLACE_SINGLE: $InventoryAction;
        static CRAFT_SHIFT: $InventoryAction;
        static EMPTY_ENTIRE_ITEM: $InventoryAction;
        static MOVE_REGION: $InventoryAction;
        static AUTO_CRAFT: $InventoryAction;
        static FILL_ENTIRE_ITEM_MOVE_TO_PLAYER: $InventoryAction;
        static SHIFT_CLICK: $InventoryAction;
        static CREATIVE_DUPLICATE: $InventoryAction;
        static FILL_ITEM: $InventoryAction;
        static CRAFT_STACK: $InventoryAction;
        static ROLL_UP: $InventoryAction;
        static CRAFT_ALL: $InventoryAction;
    }
    /**
     * Values that may be interpreted as {@link $InventoryAction}.
     */
    export type $InventoryAction_ = "pickup_or_set_down" | "split_or_place_single" | "creative_duplicate" | "shift_click" | "craft_stack" | "craft_item" | "craft_shift" | "craft_all" | "fill_item" | "fill_item_move_to_player" | "fill_entire_item" | "fill_entire_item_move_to_player" | "empty_item" | "empty_entire_item" | "move_region" | "pickup_single" | "roll_up" | "roll_down" | "auto_craft" | "place_single" | "set_filter";
    export class $NonNullArrayIterator<E> implements $Iterator<E> {
        remove(): void;
        hasNext(): boolean;
        next(): E;
        forEachRemaining(arg0: $Consumer_<E>): void;
        constructor(arg0: E[]);
    }
    export class $IConfigInvHost {
    }
    export interface $IConfigInvHost {
        getConfig(): $GenericStackInv;
        get config(): $GenericStackInv;
    }
    /**
     * Values that may be interpreted as {@link $IConfigInvHost}.
     */
    export type $IConfigInvHost_ = (() => $GenericStackInv);
    export class $InterfaceLogic$InterfaceInventory extends $DelegatingMEInventory {
    }
    export class $ForgeEnergyAdapter implements $IEnergyStorage {
        receiveEnergy(arg0: number, arg1: boolean): number;
        extractEnergy(arg0: number, arg1: boolean): number;
        getEnergyStored(): number;
        getMaxEnergyStored(): number;
        canExtract(): boolean;
        canReceive(): boolean;
        constructor(arg0: $IExternalPowerSink);
        get energyStored(): number;
        get maxEnergyStored(): number;
    }
    export class $AEMultiBlockEntity {
    }
    export interface $AEMultiBlockEntity extends $IInWorldGridNodeHost, $IPartHost, $IColorableBlockEntity {
    }
    export class $IPatternTerminalLogicHost {
    }
    export interface $IPatternTerminalLogicHost {
        markForSave(): void;
        getLogic(): $PatternEncodingLogic;
        getLevel(): $Level;
        get logic(): $PatternEncodingLogic;
        get level(): $Level;
    }
    export class $ICraftingGridMenu$AutoCraftEntry extends $Record {
        slots(): $List<number>;
        what(): $AEItemKey;
        constructor(what: $AEItemKey, slots: $List_<number>);
    }
    /**
     * Values that may be interpreted as {@link $ICraftingGridMenu$AutoCraftEntry}.
     */
    export type $ICraftingGridMenu$AutoCraftEntry_ = { what?: $AEItemKey, slots?: $List_<number>,  } | [what?: $AEItemKey, slots?: $List_<number>, ];
    export class $MultiCraftingTracker {
        getRequestedJobs(): $ImmutableSet<$ICraftingLink>;
        jobStateChange(arg0: $ICraftingLink): void;
        handleCrafting(arg0: number, arg1: $AEKey, arg2: number, arg3: $Level_, arg4: $ICraftingService, arg5: $IActionSource): boolean;
        writeToNBT(arg0: $CompoundTag_): void;
        readFromNBT(arg0: $CompoundTag_): void;
        constructor(arg0: $ICraftingRequester, arg1: number);
        get requestedJobs(): $ImmutableSet<$ICraftingLink>;
    }
    export class $ICraftingGridMenu {
    }
    export interface $ICraftingGridMenu {
        getViewCells(): $List<$ItemStack>;
        getCraftingMatrix(): $InternalInventory;
        startAutoCrafting(arg0: $List_<$ICraftingGridMenu$AutoCraftEntry_>): void;
        getGridNode(): $IGridNode;
        getActionSource(): $IActionSource;
        getEnergySource(): $IEnergySource;
        getLinkStatus(): $ILinkStatus;
        isPlayerInventorySlotLocked(arg0: number): boolean;
        get viewCells(): $List<$ItemStack>;
        get craftingMatrix(): $InternalInventory;
        get gridNode(): $IGridNode;
        get actionSource(): $IActionSource;
        get energySource(): $IEnergySource;
        get linkStatus(): $ILinkStatus;
    }
    export class $WirelessTerminalMenuHost$AccessPointSignal extends $Record {
        remainingRangeSquared(): number;
        distanceSquared(): number;
        constructor(distanceSquared: number, remainingRangeSquared: number);
    }
    /**
     * Values that may be interpreted as {@link $WirelessTerminalMenuHost$AccessPointSignal}.
     */
    export type $WirelessTerminalMenuHost$AccessPointSignal_ = { remainingRangeSquared?: number, distanceSquared?: number,  } | [remainingRangeSquared?: number, distanceSquared?: number, ];
    export class $InterfaceLogic$InterfaceRequestContext {
    }
    export class $InterfaceLogicHost {
    }
    export interface $InterfaceLogicHost extends $IConfigurableObject, $IUpgradeableObject, $IPriorityHost, $IConfigInvHost {
        getStorage(): $GenericStackInv;
        getInterfaceLogic(): $InterfaceLogic;
        getConfigManager(): $IConfigManager;
        returnToMainMenu(arg0: $Player, arg1: $ISubMenu): void;
        saveChanges(): void;
        getUpgrades(): $IUpgradeInventory;
        setPriority(arg0: number): void;
        getPriority(): number;
        getConfig(): $GenericStackInv;
        getBlockEntity(): $BlockEntity;
        openMenu(arg0: $Player, arg1: $MenuHostLocator_): void;
        get storage(): $GenericStackInv;
        get interfaceLogic(): $InterfaceLogic;
        get configManager(): $IConfigManager;
        get upgrades(): $IUpgradeInventory;
        get config(): $GenericStackInv;
        get blockEntity(): $BlockEntity;
    }
    export class $WirelessTerminalMenuHost<T extends $WirelessTerminalItem> extends $ItemMenuHost<T> implements $IPortableTerminal, $IActionHost, $KeyTypeSelectionHost {
        extractAEPower(arg0: number, arg1: $Actionable_, arg2: $PowerMultiplier_): number;
        getActionableNode(): $IGridNode;
        getConfigManager(): $IConfigManager;
        returnToMainMenu(arg0: $Player, arg1: $ISubMenu): void;
        getMainMenuIcon(): $ItemStack;
        getKeyTypeSelection(): $KeyTypeSelection;
        getLinkStatus(): $ILinkStatus;
        getCloseHotkey(): string;
        getInventory(): $MEStorage;
        constructor(arg0: T, arg1: $Player, arg2: $ItemMenuHostLocator, arg3: $BiConsumer_<$Player, $ISubMenu>);
        get actionableNode(): $IGridNode;
        get configManager(): $IConfigManager;
        get mainMenuIcon(): $ItemStack;
        get keyTypeSelection(): $KeyTypeSelection;
        get linkStatus(): $ILinkStatus;
        get closeHotkey(): string;
        get inventory(): $MEStorage;
    }
    export class $InterfaceLogic$InterfaceRequestSource extends $MachineSource {
    }
    export class $WirelessCraftingTerminalMenuHost<T extends $WirelessCraftingTerminalItem> extends $WirelessTerminalMenuHost<T> implements $ISegmentedInventory {
        getSubInventory(arg0: $ResourceLocation_): $InternalInventory;
        constructor(arg0: T, arg1: $Player, arg2: $ItemMenuHostLocator, arg3: $BiConsumer_<$Player, $ISubMenu>);
    }
    export class $IPriorityHost {
    }
    export interface $IPriorityHost extends $ISubMenuHost {
        setPriority(arg0: number): void;
        getPriority(): number;
    }
    export class $IMouseWheelItem {
    }
    export interface $IMouseWheelItem {
        onWheel(arg0: $ItemStack_, arg1: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $IMouseWheelItem}.
     */
    export type $IMouseWheelItem_ = ((arg0: $ItemStack, arg1: boolean) => void);
    export class $InterfaceLogic implements $ICraftingRequester, $IUpgradeableObject, $IConfigurableObject {
        getStorage(): $ConfigInventory;
        notifyNeighbors(): void;
        clearContent(): void;
        getActionableNode(): $IGridNode;
        getRequestedJobs(): $ImmutableSet<$ICraftingLink>;
        insertCraftedItems(arg0: $ICraftingLink, arg1: $AEKey, arg2: number, arg3: $Actionable_): number;
        addDrops(arg0: $List_<$ItemStack_>): void;
        jobStateChange(arg0: $ICraftingLink): void;
        getCableConnectionType(arg0: $Direction_): $AECableType;
        gridChanged(): void;
        getConfigManager(): $IConfigManager;
        getUpgrades(): $IUpgradeInventory;
        writeToNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        readFromNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getLocation(): $DimensionalBlockPos;
        setPriority(arg0: number): void;
        getPriority(): number;
        getConfig(): $ConfigInventory;
        getInventory(): $MEStorage;
        getInstalledUpgrades(arg0: $ItemLike_): number;
        isUpgradedWith(arg0: $ItemLike_): boolean;
        constructor(arg0: $IManagedGridNode, arg1: $InterfaceLogicHost, arg2: $Item_, arg3: number);
        constructor(arg0: $IManagedGridNode, arg1: $InterfaceLogicHost, arg2: $Item_);
        get storage(): $ConfigInventory;
        get actionableNode(): $IGridNode;
        get requestedJobs(): $ImmutableSet<$ICraftingLink>;
        get configManager(): $IConfigManager;
        get upgrades(): $IUpgradeInventory;
        get location(): $DimensionalBlockPos;
        get config(): $ConfigInventory;
        get inventory(): $MEStorage;
    }
    export class $IPatternTerminalMenuHost {
    }
    export interface $IPatternTerminalMenuHost extends $ITerminalHost {
        getLogic(): $PatternEncodingLogic;
        get logic(): $PatternEncodingLogic;
    }
}
