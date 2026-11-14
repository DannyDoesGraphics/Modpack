import { $BaseInternalInventory, $InternalInventory } from "@package/appeng/api/inventories";
import { $Container } from "@package/net/minecraft/world";
import { $Predicate_, $Supplier_, $Consumer_ } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ItemContainerContents } from "@package/net/minecraft/world/item/component";
import { $FuzzyMode_ } from "@package/appeng/api/config";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $IAEItemFilter } from "@package/appeng/util/inv/filter";
import { $Spliterator, $Iterator } from "@package/java/util";
export * as filter from "@package/appeng/util/inv/filter";

declare module "@package/appeng/util/inv" {
    export class $CarriedItemInventory implements $InternalInventory {
        setItemDirect(arg0: number, arg1: $ItemStack_): void;
        size(): number;
        getStackInSlot(arg0: number): $ItemStack;
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
        constructor(arg0: $AbstractContainerMenu);
        [Symbol.iterator](): Iterator<$ItemStack>
        get redstoneSignal(): number;
    }
    export class $AppEngInternalInventory extends $BaseInternalInventory {
        setEnableClientEvents(arg0: boolean): void;
        fromItemContainerContents(arg0: $ItemContainerContents): void;
        setMaxStackSize(arg0: number, arg1: number): void;
        toItemContainerContents(): $ItemContainerContents;
        writeToNBT(arg0: $CompoundTag_, arg1: string, arg2: $HolderLookup$Provider): void;
        readFromNBT(arg0: $CompoundTag_, arg1: string, arg2: $HolderLookup$Provider): void;
        getHost(): $InternalInventoryHost;
        setFilter(arg0: $IAEItemFilter): void;
        constructor(arg0: $InternalInventoryHost, arg1: number, arg2: number, arg3: $IAEItemFilter);
        constructor(arg0: number);
        constructor(arg0: $InternalInventoryHost, arg1: number, arg2: number);
        constructor(arg0: $InternalInventoryHost, arg1: number);
        set enableClientEvents(value: boolean);
        get host(): $InternalInventoryHost;
        set filter(value: $IAEItemFilter);
    }
    export class $FilteredInternalInventory extends $BaseInternalInventory {
        constructor(arg0: $InternalInventory, arg1: $IAEItemFilter);
    }
    export class $CombinedInternalInventory extends $BaseInternalInventory {
        constructor(...arg0: $InternalInventory[]);
    }
    export class $SupplierInternalInventory<T extends $InternalInventory> implements $InternalInventory {
        getRedstoneSignal(): number;
        addItems(arg0: $ItemStack_): $ItemStack;
        addItems(arg0: $ItemStack_, arg1: boolean): $ItemStack;
        getSubInventory(arg0: number, arg1: number): $InternalInventory;
        setItemDirect(arg0: number, arg1: $ItemStack_): void;
        toItemHandler(): $IItemHandler;
        toContainer(): $Container;
        getSlotInv(arg0: number): $InternalInventory;
        sendChangeNotification(arg0: number): void;
        size(): number;
        isEmpty(): boolean;
        iterator(): $Iterator<$ItemStack>;
        getStackInSlot(arg0: number): $ItemStack;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        getSlotLimit(arg0: number): number;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        simulateAdd(arg0: $ItemStack_): $ItemStack;
        removeItems(arg0: number, arg1: $ItemStack_, arg2: $Predicate_<$ItemStack>): $ItemStack;
        simulateRemove(arg0: number, arg1: $ItemStack_, arg2: $Predicate_<$ItemStack>): $ItemStack;
        removeSimilarItems(arg0: number, arg1: $ItemStack_, arg2: $FuzzyMode_, arg3: $Predicate_<$ItemStack>): $ItemStack;
        simulateSimilarRemove(arg0: number, arg1: $ItemStack_, arg2: $FuzzyMode_, arg3: $Predicate_<$ItemStack>): $ItemStack;
        clear(): void;
        spliterator(): $Spliterator<$ItemStack>;
        forEach(arg0: $Consumer_<$ItemStack>): void;
        constructor(arg0: $Supplier_<$ItemStack>);
        [Symbol.iterator](): Iterator<$ItemStack>
        get redstoneSignal(): number;
    }
    export class $PlayerInternalInventory implements $InternalInventory {
        setItemDirect(arg0: number, arg1: $ItemStack_): void;
        size(): number;
        getStackInSlot(arg0: number): $ItemStack;
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
        constructor(arg0: $Inventory);
        [Symbol.iterator](): Iterator<$ItemStack>
        get redstoneSignal(): number;
    }
    export class $InternalInventoryHost {
    }
    export interface $InternalInventoryHost {
        saveChangedInventory(arg0: $AppEngInternalInventory): void;
        onChangeInventory(arg0: $AppEngInternalInventory, arg1: number): void;
        isClientSide(): boolean;
        get clientSide(): boolean;
    }
}
