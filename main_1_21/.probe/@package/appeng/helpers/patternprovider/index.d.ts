import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $List, $EnumSet, $Set_, $List_, $Set } from "@package/java/util";
import { $PatternContainerGroup } from "@package/appeng/api/implementations/blockentities";
import { $IActionSource } from "@package/appeng/api/networking/security";
import { $GenericStack, $KeyCounter, $AEItemKey, $AEKey } from "@package/appeng/api/stacks";
import { $Consumer_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $InternalInventoryHost, $AppEngInternalInventory } from "@package/appeng/util/inv";
import { $DataComponentMap_, $DataComponentMap$Builder } from "@package/net/minecraft/core/component";
import { $ISubMenu } from "@package/appeng/menu";
import { $Enum, $Record, $Runnable_ } from "@package/java/lang";
import { $IPriorityHost } from "@package/appeng/helpers";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $GenericStackInv } from "@package/appeng/helpers/externalstorage";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $IManagedGridNode, $IGrid } from "@package/appeng/api/networking";
import { $Actionable_, $LockCraftingMode } from "@package/appeng/api/config";
import { $MenuHostLocator_ } from "@package/appeng/menu/locator";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ICraftingProvider } from "@package/appeng/api/networking/crafting";
import { $InternalInventory } from "@package/appeng/api/inventories";
import { $IConfigManager, $IConfigurableObject } from "@package/appeng/api/util";
import { $IGridTickable } from "@package/appeng/api/networking/ticking";
import { $MEStorage_ } from "@package/appeng/api/storage";
import { $IPatternDetails } from "@package/appeng/api/crafting";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/appeng/helpers/patternprovider" {
    export class $PatternContainer {
    }
    export interface $PatternContainer {
        getGrid(): $IGrid;
        getTerminalGroup(): $PatternContainerGroup;
        isVisibleInTerminal(): boolean;
        getTerminalPatternInventory(): $InternalInventory;
        getTerminalSortOrder(): number;
        get grid(): $IGrid;
        get terminalGroup(): $PatternContainerGroup;
        get visibleInTerminal(): boolean;
        get terminalPatternInventory(): $InternalInventory;
        get terminalSortOrder(): number;
    }
    export class $PatternProviderLogic$1PushTarget extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PatternProviderLogic$1PushTarget}.
     */
    export type $PatternProviderLogic$1PushTarget_ = { direction?: $Direction_, target?: $PatternProviderTarget,  } | [direction?: $Direction_, target?: $PatternProviderTarget, ];
    export class $PatternProviderTarget {
        static get(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockEntity | null, arg3: $Direction_, arg4: $IActionSource): $PatternProviderTarget;
    }
    export interface $PatternProviderTarget {
        containsPatternInput(arg0: $Set_<$AEKey>): boolean;
        insert(arg0: $AEKey, arg1: number, arg2: $Actionable_): number;
    }
    export class $PatternProviderReturnInventory extends $GenericStackInv {
        addDrops(arg0: $List_<$ItemStack_>, arg1: $Level_, arg2: $BlockPos_): void;
        injectIntoNetwork(arg0: $MEStorage_, arg1: $IActionSource, arg2: $Consumer_<$GenericStack>): boolean;
        static NUMBER_OF_SLOTS: number;
        constructor(arg0: $Runnable_);
    }
    export class $PatternProviderLogic$Ticker implements $IGridTickable {
    }
    export class $UnlockCraftingEvent extends $Enum<$UnlockCraftingEvent> {
        static values(): $UnlockCraftingEvent[];
        static valueOf(arg0: string): $UnlockCraftingEvent;
        static REDSTONE_POWER: $UnlockCraftingEvent;
        static REDSTONE_PULSE: $UnlockCraftingEvent;
        static RESULT: $UnlockCraftingEvent;
    }
    /**
     * Values that may be interpreted as {@link $UnlockCraftingEvent}.
     */
    export type $UnlockCraftingEvent_ = "redstone_power" | "redstone_pulse" | "result";
    export class $PatternProviderLogicHost {
    }
    export interface $PatternProviderLogicHost extends $IConfigurableObject, $IPriorityHost, $PatternContainer {
        getGrid(): $IGrid;
        getConfigManager(): $IConfigManager;
        returnToMainMenu(arg0: $Player, arg1: $ISubMenu): void;
        getLogic(): $PatternProviderLogic;
        saveChanges(): void;
        getTerminalIcon(): $AEItemKey;
        getTerminalGroup(): $PatternContainerGroup;
        isVisibleInTerminal(): boolean;
        getTerminalPatternInventory(): $InternalInventory;
        getTerminalSortOrder(): number;
        setPriority(arg0: number): void;
        getPriority(): number;
        getTargets(): $EnumSet<$Direction>;
        getBlockEntity(): $BlockEntity;
        openMenu(arg0: $Player, arg1: $MenuHostLocator_): void;
        get grid(): $IGrid;
        get configManager(): $IConfigManager;
        get logic(): $PatternProviderLogic;
        get terminalIcon(): $AEItemKey;
        get terminalGroup(): $PatternContainerGroup;
        get visibleInTerminal(): boolean;
        get terminalPatternInventory(): $InternalInventory;
        get terminalSortOrder(): number;
        get targets(): $EnumSet<$Direction>;
        get blockEntity(): $BlockEntity;
    }
    export class $PatternProviderTargetCache {
    }
    export class $PatternProviderLogic implements $InternalInventoryHost, $ICraftingProvider {
        clearContent(): void;
        getGrid(): $IGrid;
        exportSettings(arg0: $DataComponentMap$Builder): void;
        importSettings(arg0: $DataComponentMap_, arg1: $Player): void;
        onMainNodeStateChanged(): void;
        isBusy(): boolean;
        getAvailablePatterns(): $List<$IPatternDetails>;
        getPatternPriority(): number;
        pushPattern(arg0: $IPatternDetails, arg1: $KeyCounter[]): boolean;
        addDrops(arg0: $List_<$ItemStack_>): void;
        getConfigManager(): $IConfigManager;
        updateRedstoneState(): void;
        saveChanges(): void;
        saveChangedInventory(arg0: $AppEngInternalInventory): void;
        onChangeInventory(arg0: $AppEngInternalInventory, arg1: number): void;
        resetCraftingLock(): void;
        getUnlockStack(): $GenericStack;
        getReturnInv(): $PatternProviderReturnInventory;
        updatePatterns(): void;
        getPatternInv(): $InternalInventory;
        getSortValue(): number;
        getTerminalGroup(): $PatternContainerGroup;
        getCraftingLockedReason(): $LockCraftingMode;
        writeToNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        readFromNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        setPriority(arg0: number): void;
        getPriority(): number;
        isClientSide(): boolean;
        isBlocking(): boolean;
        getEmitableItems(): $Set<$AEKey>;
        static NBT_PRIORITY: string;
        static NBT_RETURN_INV: string;
        static NBT_SEND_LIST: string;
        static NBT_MEMORY_CARD_PATTERNS: string;
        static NBT_UNLOCK_STACK: string;
        static NBT_SEND_DIRECTION: string;
        static NBT_UNLOCK_EVENT: string;
        constructor(arg0: $IManagedGridNode, arg1: $PatternProviderLogicHost);
        constructor(arg0: $IManagedGridNode, arg1: $PatternProviderLogicHost, arg2: number);
        get grid(): $IGrid;
        get busy(): boolean;
        get availablePatterns(): $List<$IPatternDetails>;
        get patternPriority(): number;
        get configManager(): $IConfigManager;
        get unlockStack(): $GenericStack;
        get returnInv(): $PatternProviderReturnInventory;
        get patternInv(): $InternalInventory;
        get sortValue(): number;
        get terminalGroup(): $PatternContainerGroup;
        get craftingLockedReason(): $LockCraftingMode;
        get clientSide(): boolean;
        get blocking(): boolean;
        get emitableItems(): $Set<$AEKey>;
    }
}
