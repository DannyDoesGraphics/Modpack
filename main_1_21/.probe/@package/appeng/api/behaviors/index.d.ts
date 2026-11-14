import { $IEnergySource_, $IEnergySource } from "@package/appeng/api/networking/energy";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $IStorageService } from "@package/appeng/api/networking/storage";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Actionable_, $Actionable } from "@package/appeng/api/config";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $UUID, $UUID_, $Map, $Set } from "@package/java/util";
import { $IActionSource } from "@package/appeng/api/networking/security";
import { $GenericStack, $AEKeyType, $AEKeyType_, $GenericStack_, $AEFluidKey, $AEItemKey, $AEKey } from "@package/appeng/api/stacks";
import { $MEStorage_, $MEStorage } from "@package/appeng/api/storage";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ItemEnchantments_, $ItemEnchantments } from "@package/net/minecraft/world/item/enchantment";
import { $IPartitionList } from "@package/appeng/util/prioritylist";
import { $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Enum, $Record, $Class, $Runnable_, $Runnable } from "@package/java/lang";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/appeng/api/behaviors" {
    export class $FluidContainerItemStrategy implements $ContainerItemStrategy<$AEFluidKey, $FluidContainerItemStrategy$Context> {
        findPlayerSlotContext(arg0: $Player, arg1: number): $FluidContainerItemStrategy$Context;
    }
    export class $StackTransferContext {
    }
    export interface $StackTransferContext {
        getActionSource(): $IActionSource;
        canInsert(arg0: $AEItemKey, arg1: number): boolean;
        getEnergySource(): $IEnergySource;
        getOperationsRemaining(): number;
        setOperationsRemaining(arg0: number): void;
        hasOperationsLeft(): boolean;
        isKeyTypeEnabled(arg0: $AEKeyType_): boolean;
        isInFilter(arg0: $AEKey): boolean;
        reduceOperationsRemaining(arg0: number): void;
        setInverted(arg0: boolean): void;
        hasDoneWork(): boolean;
        isInverted(): boolean;
        getFilter(): $IPartitionList;
        getInternalStorage(): $IStorageService;
        get actionSource(): $IActionSource;
        get energySource(): $IEnergySource;
        get filter(): $IPartitionList;
        get internalStorage(): $IStorageService;
    }
    export class $PlacementStrategy {
        static register(arg0: $AEKeyType_, arg1: $PlacementStrategy$Factory_): void;
        static noop(): $PlacementStrategy;
    }
    export interface $PlacementStrategy {
        placeInWorld(arg0: $AEKey, arg1: number, arg2: $Actionable_, arg3: boolean): number;
        clearBlocked(): void;
    }
    export class $PickupStrategy$Factory {
    }
    export interface $PickupStrategy$Factory {
        create(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $Direction_, arg3: $BlockEntity, arg4: $ItemEnchantments_, arg5: $UUID_): $PickupStrategy;
    }
    /**
     * Values that may be interpreted as {@link $PickupStrategy$Factory}.
     */
    export type $PickupStrategy$Factory_ = ((arg0: $ServerLevel, arg1: $BlockPos, arg2: $Direction, arg3: $BlockEntity, arg4: $ItemEnchantments, arg5: $UUID) => $PickupStrategy);
    export class $PlacementStrategy$Factory {
    }
    export interface $PlacementStrategy$Factory {
        create(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $Direction_, arg3: $BlockEntity, arg4: $UUID_): $PlacementStrategy;
    }
    /**
     * Values that may be interpreted as {@link $PlacementStrategy$Factory}.
     */
    export type $PlacementStrategy$Factory_ = ((arg0: $ServerLevel, arg1: $BlockPos, arg2: $Direction, arg3: $BlockEntity, arg4: $UUID) => $PlacementStrategy);
    export class $StackImportStrategy {
        static register(arg0: $AEKeyType_, arg1: $StackImportStrategy$Factory_): void;
    }
    export interface $StackImportStrategy {
        transfer(arg0: $StackTransferContext): boolean;
    }
    /**
     * Values that may be interpreted as {@link $StackImportStrategy}.
     */
    export type $StackImportStrategy_ = ((arg0: $StackTransferContext) => boolean);
    export class $FluidContainerItemStrategy$PlayerInvContext extends $Record implements $FluidContainerItemStrategy$Context {
    }
    /**
     * Values that may be interpreted as {@link $FluidContainerItemStrategy$PlayerInvContext}.
     */
    export type $FluidContainerItemStrategy$PlayerInvContext_ = { slot?: number, player?: $Player,  } | [slot?: number, player?: $Player, ];
    export class $ContainerItemStrategy<T extends $AEKey, C> {
        static register<T extends $AEKey>(arg0: $AEKeyType_, arg1: $Class<T>, arg2: $ContainerItemStrategy<T, never>): void;
    }
    export interface $ContainerItemStrategy<T extends $AEKey, C> {
        playEmptySound(arg0: $Player, arg1: T): void;
        getExtractableContent(arg0: C): $GenericStack;
        playFillSound(arg0: $Player, arg1: T): void;
        getContainedStack(arg0: $ItemStack_): $GenericStack;
        findCarriedContext(arg0: $Player, arg1: $AbstractContainerMenu): C;
        findPlayerSlotContext(arg0: $Player, arg1: number): C;
        extract(arg0: C, arg1: T, arg2: number, arg3: $Actionable_): number;
        insert(arg0: C, arg1: T, arg2: number, arg3: $Actionable_): number;
    }
    export class $StackImportStrategy$Factory {
    }
    export interface $StackImportStrategy$Factory {
        create(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $Direction_): $StackImportStrategy;
    }
    /**
     * Values that may be interpreted as {@link $StackImportStrategy$Factory}.
     */
    export type $StackImportStrategy$Factory_ = ((arg0: $ServerLevel, arg1: $BlockPos, arg2: $Direction) => $StackImportStrategy_);
    export class $ContainerItemStrategies {
        static getSupportedKeyTypes(): $Set<$AEKeyType>;
        static findOwnedItemContext(arg0: $AEKeyType_, arg1: $Player, arg2: $ItemStack_): $ContainerItemContext;
        static findCarriedContextForKey(arg0: $AEKey, arg1: $Player, arg2: $AbstractContainerMenu): $ContainerItemContext;
        static getContainedStack(arg0: $ItemStack_, arg1: $AEKeyType_): $GenericStack;
        static getContainedStack(arg0: $ItemStack_): $GenericStack;
        static findCarriedContext(arg0: $AEKeyType_, arg1: $Player, arg2: $AbstractContainerMenu): $ContainerItemContext;
        static getEmptyingAction(arg0: $ItemStack_): $EmptyingAction;
        static isTypeSupported(arg0: $AEKeyType_): boolean;
        static register<T extends $AEKey>(arg0: $AEKeyType_, arg1: $Class<T>, arg2: $ContainerItemStrategy<T, never>): void;
        static isKeySupported(arg0: $AEKey): boolean;
        constructor();
        static get supportedKeyTypes(): $Set<$AEKeyType>;
    }
    export class $EmptyingAction extends $Record {
        maxAmount(): number;
        what(): $AEKey;
        description(): $Component;
        constructor(description: $Component_, what: $AEKey, maxAmount: number);
    }
    /**
     * Values that may be interpreted as {@link $EmptyingAction}.
     */
    export type $EmptyingAction_ = { description?: $Component_, maxAmount?: number, what?: $AEKey,  } | [description?: $Component_, maxAmount?: number, what?: $AEKey, ];
    export class $PickupStrategy$Result extends $Enum<$PickupStrategy$Result> {
        static values(): $PickupStrategy$Result[];
        static valueOf(arg0: string): $PickupStrategy$Result;
        static CANT_PICKUP: $PickupStrategy$Result;
        static CANT_STORE: $PickupStrategy$Result;
        static PICKED_UP: $PickupStrategy$Result;
    }
    /**
     * Values that may be interpreted as {@link $PickupStrategy$Result}.
     */
    export type $PickupStrategy$Result_ = "cant_pickup" | "cant_store" | "picked_up";
    export class $PickupSink {
    }
    export interface $PickupSink {
        insert(arg0: $AEKey, arg1: number, arg2: $Actionable_): number;
    }
    /**
     * Values that may be interpreted as {@link $PickupSink}.
     */
    export type $PickupSink_ = ((arg0: $AEKey, arg1: number, arg2: $Actionable) => number);
    export class $FluidContainerItemStrategy$CarriedContext extends $Record implements $FluidContainerItemStrategy$Context {
    }
    /**
     * Values that may be interpreted as {@link $FluidContainerItemStrategy$CarriedContext}.
     */
    export type $FluidContainerItemStrategy$CarriedContext_ = { menu?: $AbstractContainerMenu, player?: $Player,  } | [menu?: $AbstractContainerMenu, player?: $Player, ];
    export class $NoopPlacementStrategy implements $PlacementStrategy {
    }
    export class $StackExportStrategy$Factory {
    }
    export interface $StackExportStrategy$Factory {
        create(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $Direction_): $StackExportStrategy;
    }
    /**
     * Values that may be interpreted as {@link $StackExportStrategy$Factory}.
     */
    export type $StackExportStrategy$Factory_ = ((arg0: $ServerLevel, arg1: $BlockPos, arg2: $Direction) => $StackExportStrategy);
    export class $FluidContainerItemStrategy$Context {
    }
    export interface $FluidContainerItemStrategy$Context {
    }
    export class $PickupStrategy {
        static register(arg0: $AEKeyType_, arg1: $PickupStrategy$Factory_): void;
    }
    export interface $PickupStrategy {
        tryPickup(arg0: $IEnergySource_, arg1: $PickupSink_): $PickupStrategy$Result;
        canPickUpEntity(arg0: $Entity): boolean;
        pickUpEntity(arg0: $IEnergySource_, arg1: $PickupSink_, arg2: $Entity): boolean;
        reset(): void;
    }
    export class $ExternalStorageStrategy {
        static register(arg0: $AEKeyType_, arg1: $ExternalStorageStrategy$Factory_): void;
    }
    export interface $ExternalStorageStrategy {
        createWrapper(arg0: boolean, arg1: $Runnable_): $MEStorage;
    }
    /**
     * Values that may be interpreted as {@link $ExternalStorageStrategy}.
     */
    export type $ExternalStorageStrategy_ = ((arg0: boolean, arg1: $Runnable) => $MEStorage_);
    export class $StackExportStrategy {
        static register(arg0: $AEKeyType_, arg1: $StackExportStrategy$Factory_): void;
    }
    export interface $StackExportStrategy {
        transfer(arg0: $StackTransferContext, arg1: $AEKey, arg2: number): number;
        push(arg0: $AEKey, arg1: number, arg2: $Actionable_): number;
    }
    export class $ExternalStorageStrategy$Factory {
    }
    export interface $ExternalStorageStrategy$Factory {
        create(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $Direction_): $ExternalStorageStrategy;
    }
    /**
     * Values that may be interpreted as {@link $ExternalStorageStrategy$Factory}.
     */
    export type $ExternalStorageStrategy$Factory_ = ((arg0: $ServerLevel, arg1: $BlockPos, arg2: $Direction) => $ExternalStorageStrategy_);
    export class $ContainerItemContext {
        playEmptySound(arg0: $Player, arg1: $AEKey): void;
        getExtractableContent(): $GenericStack;
        playFillSound(arg0: $Player, arg1: $AEKey): void;
        extract(arg0: $AEKey, arg1: number, arg2: $Actionable_): number;
        insert(arg0: $AEKey, arg1: number, arg2: $Actionable_): number;
        get extractableContent(): $GenericStack;
    }
    export class $ContainerItemContext$Entry<C> {
    }
    export class $GenericSlotCapacities {
        static register(arg0: $AEKeyType_, arg1: number): void;
        static getMap(): $Map<$AEKeyType, number>;
        static get map(): $Map<$AEKeyType, number>;
    }
    export class $GenericInternalInventory {
    }
    export interface $GenericInternalInventory {
        canExtract(): boolean;
        beginBatch(): void;
        endBatchSuppressed(): void;
        getMaxAmount(arg0: $AEKey): number;
        canInsert(): boolean;
        isAllowedIn(arg0: number, arg1: $AEKey): boolean;
        isSupportedType(arg0: $AEKey): boolean;
        isSupportedType(arg0: $AEKeyType_): boolean;
        getCapacity(arg0: $AEKeyType_): number;
        size(): number;
        extract(arg0: number, arg1: $AEKey, arg2: number, arg3: $Actionable_): number;
        insert(arg0: number, arg1: $AEKey, arg2: number, arg3: $Actionable_): number;
        getKey(arg0: number): $AEKey;
        getStack(arg0: number): $GenericStack;
        onChange(): void;
        setStack(arg0: number, arg1: $GenericStack_): void;
        endBatch(): void;
        getAmount(arg0: number): number;
    }
}
