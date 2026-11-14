import { $ItemLike, $ItemLike_ } from "@package/net/minecraft/world/level";
import { $Item_, $Item$Properties, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $FuzzyMode_ } from "@package/appeng/api/config";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $IAEItemFilter } from "@package/appeng/util/inv/filter";
import { $Spliterator, $Iterator, $List, $Map, $Set } from "@package/java/util";
import { $InternalInventory } from "@package/appeng/api/inventories";
import { $Container } from "@package/net/minecraft/world";
import { $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $InternalInventoryHost, $AppEngInternalInventory } from "@package/appeng/util/inv";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";

declare module "@package/appeng/api/upgrades" {
    export class $MachineUpgradesChanged {
    }
    export interface $MachineUpgradesChanged {
        onUpgradesChanged(): void;
    }
    /**
     * Values that may be interpreted as {@link $MachineUpgradesChanged}.
     */
    export type $MachineUpgradesChanged_ = (() => void);
    export class $EmptyUpgradeInventory implements $IUpgradeInventory {
        isInstalled(arg0: $ItemLike_): boolean;
        getRedstoneSignal(): number;
        addItems(arg0: $ItemStack_): $ItemStack;
        addItems(arg0: $ItemStack_, arg1: boolean): $ItemStack;
        getSubInventory(arg0: number, arg1: number): $InternalInventory;
        toItemHandler(): $IItemHandler;
        toContainer(): $Container;
        getSlotInv(arg0: number): $InternalInventory;
        simulateAdd(arg0: $ItemStack_): $ItemStack;
        removeItems(arg0: number, arg1: $ItemStack_, arg2: $Predicate_<$ItemStack>): $ItemStack;
        simulateRemove(arg0: number, arg1: $ItemStack_, arg2: $Predicate_<$ItemStack>): $ItemStack;
        removeSimilarItems(arg0: number, arg1: $ItemStack_, arg2: $FuzzyMode_, arg3: $Predicate_<$ItemStack>): $ItemStack;
        simulateSimilarRemove(arg0: number, arg1: $ItemStack_, arg2: $FuzzyMode_, arg3: $Predicate_<$ItemStack>): $ItemStack;
        sendChangeNotification(arg0: number): void;
        clear(): void;
        isEmpty(): boolean;
        iterator(): $Iterator<$ItemStack>;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        getSlotLimit(arg0: number): number;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        spliterator(): $Spliterator<$ItemStack>;
        forEach(arg0: $Consumer_<$ItemStack>): void;
        [Symbol.iterator](): Iterator<$ItemStack>
        get redstoneSignal(): number;
    }
    export class $IUpgradeableObject {
    }
    export interface $IUpgradeableObject {
        getInstalledUpgrades(arg0: $ItemLike_): number;
        isUpgradedWith(arg0: $ItemLike_): boolean;
        getUpgrades(): $IUpgradeInventory;
        get upgrades(): $IUpgradeInventory;
    }
    export class $UpgradeInventories {
        static forItem(arg0: $ItemStack_, arg1: number, arg2: $ItemUpgradesChanged_): $IUpgradeInventory;
        static forItem(arg0: $ItemStack_, arg1: number): $IUpgradeInventory;
        static forMachine(arg0: $ItemLike_, arg1: number, arg2: $MachineUpgradesChanged_): $IUpgradeInventory;
        static empty(): $IUpgradeInventory;
    }
    export class $IUpgradeableItem {
    }
    export interface $IUpgradeableItem extends $ItemLike {
        getUpgrades(arg0: $ItemStack_): $IUpgradeInventory;
    }
    /**
     * Values that may be interpreted as {@link $IUpgradeableItem}.
     */
    export type $IUpgradeableItem_ = (() => void);
    export class $Upgrades$Association extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $Upgrades$Association}.
     */
    export type $Upgrades$Association_ = { tooltipGroup?: $Component_, upgradableItem?: $Item_, upgradableBlock?: $Block_, upgradeCard?: $Item_, maxCount?: number,  } | [tooltipGroup?: $Component_, upgradableItem?: $Item_, upgradableBlock?: $Block_, upgradeCard?: $Item_, maxCount?: number, ];
    export class $UpgradeInventory extends $AppEngInternalInventory implements $InternalInventoryHost, $IUpgradeInventory {
        onChangeInventory(arg0: $AppEngInternalInventory, arg1: number): void;
        isInstalled(arg0: $ItemLike_): boolean;
    }
    export class $IUpgradeInventory {
    }
    export interface $IUpgradeInventory extends $InternalInventory {
        getInstalledUpgrades(arg0: $ItemLike_): number;
        getMaxInstalled(arg0: $ItemLike_): number;
        getUpgradableItem(): $ItemLike;
        writeToNBT(arg0: $CompoundTag_, arg1: string, arg2: $HolderLookup$Provider): void;
        readFromNBT(arg0: $CompoundTag_, arg1: string, arg2: $HolderLookup$Provider): void;
        isInstalled(arg0: $ItemLike_): boolean;
        get upgradableItem(): $ItemLike;
    }
    export class $ItemUpgradeInventory extends $UpgradeInventory {
    }
    export class $UpgradeInventory$UpgradeInvFilter implements $IAEItemFilter {
        allowExtract(arg0: $InternalInventory, arg1: number, arg2: number): boolean;
        allowInsert(arg0: $InternalInventory, arg1: number, arg2: $ItemStack_): boolean;
    }
    export class $Upgrades {
        static getEnergyCardMultiplier(arg0: $IUpgradeInventory): number;
        static createUpgradeCardItem(arg0: $Item$Properties): $Item;
        static getMaxInstallable(arg0: $ItemLike_, arg1: $ItemLike_): number;
        static getUpgradableItems(): $Map<$IUpgradeableItem, $Set<$Item>>;
        static isUpgradeCardItem(arg0: $ItemStack_): boolean;
        static isUpgradeCardItem(arg0: $ItemLike_): boolean;
        static getTooltipLinesForCard(arg0: $ItemLike_): $List<$Component>;
        static getTooltipLinesForMachine(arg0: $ItemLike_): $List<$Component>;
        static add(arg0: $ItemLike_, arg1: $ItemLike_, arg2: number, arg3: string): void;
        static add(arg0: $ItemLike_, arg1: $ItemLike_, arg2: number): void;
        static get upgradableItems(): $Map<$IUpgradeableItem, $Set<$Item>>;
    }
    export class $ItemUpgradesChanged {
    }
    export interface $ItemUpgradesChanged {
        onUpgradesChanged(arg0: $ItemStack_, arg1: $IUpgradeInventory): void;
    }
    /**
     * Values that may be interpreted as {@link $ItemUpgradesChanged}.
     */
    export type $ItemUpgradesChanged_ = ((arg0: $ItemStack, arg1: $IUpgradeInventory) => void);
    export class $MachineUpgradeInventory extends $UpgradeInventory {
    }
}
