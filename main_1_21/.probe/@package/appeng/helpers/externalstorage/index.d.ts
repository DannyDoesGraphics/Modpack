import { $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ListTag, $ListTag_, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Actionable_ } from "@package/appeng/api/config";
import { $ConfigMenuInventory } from "@package/appeng/util";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $List, $Set_, $List_ } from "@package/java/util";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $IActionSource } from "@package/appeng/api/networking/security";
import { $GenericStack, $AEKeyType_, $GenericStack_, $KeyCounter, $AEKey } from "@package/appeng/api/stacks";
import { $IFluidHandler$FluidAction_, $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Container } from "@package/net/minecraft/world";
import { $MEStorage, $AEKeySlotFilter } from "@package/appeng/api/storage";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $Runnable_, $Enum } from "@package/java/lang";
import { $GenericInternalInventory } from "@package/appeng/api/behaviors";

declare module "@package/appeng/helpers/externalstorage" {
    export class $GenericStackInv$Mode extends $Enum<$GenericStackInv$Mode> {
        static values(): $GenericStackInv$Mode[];
        static valueOf(arg0: string): $GenericStackInv$Mode;
        static STORAGE: $GenericStackInv$Mode;
        static CONFIG_TYPES: $GenericStackInv$Mode;
        static CONFIG_STACKS: $GenericStackInv$Mode;
    }
    /**
     * Values that may be interpreted as {@link $GenericStackInv$Mode}.
     */
    export type $GenericStackInv$Mode_ = "config_types" | "config_stacks" | "storage";
    export class $GenericStackFluidStorage implements $IFluidHandler {
        getTanks(): number;
        getFluidInTank(arg0: number): $FluidStack;
        getTankCapacity(arg0: number): number;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        constructor(arg0: $GenericInternalInventory);
        get tanks(): number;
    }
    export class $GenericStackInv implements $MEStorage, $GenericInternalInventory {
        canExtract(): boolean;
        setDescription(arg0: $Component_): void;
        getAvailableStacks(arg0: $KeyCounter): void;
        readFromList(arg0: $List_<$GenericStack_>): void;
        readFromChildTag(arg0: $CompoundTag_, arg1: string, arg2: $HolderLookup$Provider): void;
        writeToChildTag(arg0: $CompoundTag_, arg1: string, arg2: $HolderLookup$Provider): void;
        useRegisteredCapacities(): void;
        beginBatch(): void;
        endBatchSuppressed(): void;
        createMenuWrapper(): $ConfigMenuInventory;
        getMaxAmount(arg0: $AEKey): number;
        canInsert(): boolean;
        isAllowedIn(arg0: number, arg1: $AEKey): boolean;
        isSupportedType(arg0: $AEKeyType_): boolean;
        writeToTag(arg0: $HolderLookup$Provider): $ListTag;
        readFromTag(arg0: $ListTag_, arg1: $HolderLookup$Provider): void;
        setCapacity(arg0: $AEKeyType_, arg1: number): void;
        getDescription(): $Component;
        getCapacity(arg0: $AEKeyType_): number;
        getMode(): $GenericStackInv$Mode;
        size(): number;
        extract(arg0: $AEKey, arg1: number, arg2: $Actionable_, arg3: $IActionSource): number;
        extract(arg0: number, arg1: $AEKey, arg2: number, arg3: $Actionable_): number;
        insert(arg0: number, arg1: $AEKey, arg2: number, arg3: $Actionable_): number;
        insert(arg0: $AEKey, arg1: number, arg2: $Actionable_, arg3: $IActionSource): number;
        clear(): void;
        isEmpty(): boolean;
        toList(): $List<$GenericStack>;
        getKey(arg0: number): $AEKey;
        getStack(arg0: number): $GenericStack;
        getFilter(): $AEKeySlotFilter;
        onChange(): void;
        setStack(arg0: number, arg1: $GenericStack_): void;
        endBatch(): void;
        getAmount(arg0: number): number;
        getAvailableStacks(): $KeyCounter;
        isPreferredStorageFor(arg0: $AEKey, arg1: $IActionSource): boolean;
        isSupportedType(arg0: $AEKey): boolean;
        constructor(arg0: $Set_<$AEKeyType_>, arg1: $Runnable_, arg2: $GenericStackInv$Mode_, arg3: number);
        constructor(arg0: $Runnable_, arg1: number);
        constructor(arg0: $Runnable_, arg1: $GenericStackInv$Mode_, arg2: number);
        get mode(): $GenericStackInv$Mode;
        get empty(): boolean;
        get filter(): $AEKeySlotFilter;
    }
    export class $GenericStackItemStorage implements $IItemHandler {
        getSlots(): number;
        getStackInSlot(arg0: number): $ItemStack;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        getSlotLimit(arg0: number): number;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        kjs$self(): $IItemHandler;
        kjs$getBlock(level: $Level_): $LevelBlock;
        kjs$isMutable(): boolean;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        isEmpty(): boolean;
        clear(): void;
        clear(match: $ItemPredicate_): void;
        find(match: $ItemPredicate_): number;
        find(): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        getWidth(): number;
        getHeight(): number;
        setChanged(): void;
        getAllItems(): $List<$ItemStack>;
        asContainer(): $Container;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        constructor(arg0: $GenericInternalInventory);
        get empty(): boolean;
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
    }
}
