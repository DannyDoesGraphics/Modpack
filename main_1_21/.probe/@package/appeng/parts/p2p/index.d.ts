import { $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $IGridNode } from "@package/appeng/api/networking";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $IEnergyStorage } from "@package/net/neoforged/neoforge/energy";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $List } from "@package/java/util";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $IPartItem, $IPartModel } from "@package/appeng/api/parts";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Container } from "@package/net/minecraft/world";
import { $IGridTickable, $TickRateModulation, $TickingRequest } from "@package/appeng/api/networking/ticking";
import { $Direction_ } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $AEBasePart } from "@package/appeng/parts";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum, $AutoCloseable } from "@package/java/lang";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/appeng/parts/p2p" {
    export class $FEP2PTunnelPart$InputEnergyStorage implements $IEnergyStorage {
    }
    export class $LightP2PTunnelPart extends $P2PTunnelPart<$LightP2PTunnelPart> implements $IGridTickable {
        static getModels(): $List<$IPartModel>;
        getTickingRequest(arg0: $IGridNode): $TickingRequest;
        tickingRequest(arg0: $IGridNode, arg1: number): $TickRateModulation;
        constructor(arg0: $IPartItem<never>);
        static get models(): $List<$IPartModel>;
    }
    export class $CapabilityP2PTunnelPart<P extends $CapabilityP2PTunnelPart<P, T>, T> extends $P2PTunnelPart<P> {
        getExposedApi(): P;
        constructor(arg0: $IPartItem<never>, arg1: $BlockCapability<P, $Direction_>);
        get exposedApi(): P;
    }
    export class $FEP2PTunnelPart$OutputEnergyStorage implements $IEnergyStorage {
    }
    export class $ItemP2PTunnelPart extends $CapabilityP2PTunnelPart<$ItemP2PTunnelPart, $IItemHandler> {
        static getModels(): $List<$IPartModel>;
        constructor(arg0: $IPartItem<never>);
        static get models(): $List<$IPartModel>;
    }
    export class $ItemP2PTunnelPart$NullItemHandler implements $IItemHandler {
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
        get empty(): boolean;
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
        get slots(): number;
    }
    export class $CapabilityP2PTunnelPart$CapabilityGuard implements $AutoCloseable {
    }
    export class $FluidP2PTunnelPart$OutputFluidHandler implements $IFluidHandler {
    }
    export class $FluidP2PTunnelPart extends $CapabilityP2PTunnelPart<$FluidP2PTunnelPart, $IFluidHandler> {
        static getModels(): $List<$IPartModel>;
        constructor(arg0: $IPartItem<never>);
        static get models(): $List<$IPartModel>;
    }
    export class $MEP2PTunnelPart$ConnectionUpdate extends $Enum<$MEP2PTunnelPart$ConnectionUpdate> {
    }
    /**
     * Values that may be interpreted as {@link $MEP2PTunnelPart$ConnectionUpdate}.
     */
    export type $MEP2PTunnelPart$ConnectionUpdate_ = "none" | "disconnect" | "connect";
    export class $CapabilityP2PTunnelPart$EmptyCapabilityGuard extends $CapabilityP2PTunnelPart$CapabilityGuard implements $AutoCloseable {
    }
    export class $RedstoneP2PTunnelPart extends $P2PTunnelPart<$RedstoneP2PTunnelPart> {
        static getModels(): $List<$IPartModel>;
        constructor(arg0: $IPartItem<never>);
        static get models(): $List<$IPartModel>;
    }
    export class $FEP2PTunnelPart extends $CapabilityP2PTunnelPart<$FEP2PTunnelPart, $IEnergyStorage> {
        static getModels(): $List<$IPartModel>;
        constructor(arg0: $IPartItem<never>);
        static get models(): $List<$IPartModel>;
    }
    export class $FluidP2PTunnelPart$NullFluidHandler implements $IFluidHandler {
    }
    export class $P2PModels {
        getModels(): $List<$IPartModel>;
        getModel(arg0: boolean, arg1: boolean): $IPartModel;
        static MODEL_STATUS_HAS_CHANNEL: $ResourceLocation;
        static MODEL_FREQUENCY: $ResourceLocation;
        static MODEL_STATUS_OFF: $ResourceLocation;
        static MODEL_STATUS_ON: $ResourceLocation;
        constructor(arg0: $ResourceLocation_);
        get models(): $List<$IPartModel>;
    }
    export class $ItemP2PTunnelPart$InputItemHandler implements $IItemHandler {
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
        get empty(): boolean;
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
        get slots(): number;
    }
    export class $MEP2PTunnelPart extends $P2PTunnelPart<$MEP2PTunnelPart> implements $IGridTickable {
        static getModels(): $List<$IPartModel>;
        getTickingRequest(arg0: $IGridNode): $TickingRequest;
        tickingRequest(arg0: $IGridNode, arg1: number): $TickRateModulation;
        constructor(arg0: $IPartItem<never>);
        static get models(): $List<$IPartModel>;
    }
    export class $FEP2PTunnelPart$NullEnergyStorage implements $IEnergyStorage {
    }
    export class $FluidP2PTunnelPart$InputFluidHandler implements $IFluidHandler {
    }
    export class $P2PTunnelPart<T extends $P2PTunnelPart<T>> extends $AEBasePart {
        isOutput(): boolean;
        onTunnelConfigChange(): void;
        onTunnelNetworkChange(): void;
        setFrequency(arg0: number): void;
        getOutputs(): $List<T>;
        getFrequency(): number;
        getOutputStream(): $Stream<T>;
        getInput(): T;
        constructor(arg0: $IPartItem<never>);
        get output(): boolean;
        get outputs(): $List<T>;
        get outputStream(): $Stream<T>;
        get input(): T;
    }
    export class $ItemP2PTunnelPart$OutputItemHandler implements $IItemHandler {
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
        get empty(): boolean;
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
        get slots(): number;
    }
}
