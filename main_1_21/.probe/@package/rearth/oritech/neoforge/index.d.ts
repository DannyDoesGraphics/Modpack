import { $OritechPlatform } from "@package/rearth/oritech";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $FluidStack_, $FluidStack as $FluidStack$1 } from "@package/net/neoforged/neoforge/fluids";
import { $CustomPacketPayload_, $CustomPacketPayload$Type_, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $Queue, $List } from "@package/java/util";
import { $ModContainer } from "@package/net/neoforged/fml";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $AttachmentType } from "@package/net/neoforged/neoforge/attachment";
import { $IFluidHandler$FluidAction_, $IFluidHandlerItem, $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Container } from "@package/net/minecraft/world";
import { $Consumer, $Supplier_ } from "@package/java/util/function";
import { $BlockPos_, $Direction_, $RegistryAccess } from "@package/net/minecraft/core";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $PayloadRegistrar } from "@package/net/neoforged/neoforge/network/registration";
import { $SimpleInventoryStorage } from "@package/rearth/oritech/api/item/containers";
import { $BlockItemApi, $ItemApi$InventoryStorage } from "@package/rearth/oritech/api/item";
import { $TriConsumer_ } from "@package/org/apache/logging/log4j/util";
import { $DataComponentType } from "@package/net/minecraft/core/component";
import { $DeferredRegister } from "@package/net/neoforged/neoforge/registries";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $StackContext } from "@package/rearth/oritech/util";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $IEventBus } from "@package/net/neoforged/bus/api";
import { $DelegatingFluidStorage } from "@package/rearth/oritech/api/fluid/containers";
import { $IItemHandlerModifiable, $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ItemEnergyApi, $EnergyApi$EnergyStorage, $BlockEnergyApi } from "@package/rearth/oritech/api/energy";
import { $BlockLookupCache } from "@package/rearth/oritech/api/lookup";
import { $FluidStack } from "@package/dev/architectury/fluid";
import { $Attachment } from "@package/rearth/oritech/api/attachment";
import { $ItemFluidApi, $FluidApi$MultiSlotStorage, $FluidApi$FluidStorage, $BlockFluidApi, $FluidApi$SingleSlotStorage } from "@package/rearth/oritech/api/fluid";
import { $ILongEnergyStorage } from "@package/dev/technici4n/grandpower/api";
import { $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";
export * as client from "@package/rearth/oritech/neoforge/client";

declare module "@package/rearth/oritech/neoforge" {
    export class $NeoforgeFluidApiImpl$DelegatingContainerStorageWrapper implements $IFluidHandler {
        getTanks(): number;
        getFluidInTank(arg0: number): $FluidStack$1;
        getTankCapacity(arg0: number): number;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        static of(arg0: $DelegatingFluidStorage): $NeoforgeFluidApiImpl$DelegatingContainerStorageWrapper;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack$1;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack$1;
        get tanks(): number;
    }
    export class $NeoforgeFluidApiImpl$FluidContainerItemWrapper extends $NeoforgeFluidApiImpl$SingleSlotContainerStorageWrapper implements $IFluidHandlerItem {
        getContainer(): $ItemStack;
        static of(arg0: $FluidApi$SingleSlotStorage, arg1: $ItemStack_): $NeoforgeFluidApiImpl$FluidContainerItemWrapper;
        container: $FluidApi$SingleSlotStorage;
        constructor(arg0: $FluidApi$SingleSlotStorage, arg1: $ItemStack_);
    }
    export class $NeoforgeFluidApiImpl$MultiSlotStorageWrapper implements $IFluidHandler {
        getTanks(): number;
        getFluidInTank(arg0: number): $FluidStack$1;
        getTankCapacity(arg0: number): number;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        static of(arg0: $FluidApi$MultiSlotStorage): $NeoforgeFluidApiImpl$MultiSlotStorageWrapper;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack$1;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack$1;
        container: $FluidApi$MultiSlotStorage;
        constructor(arg0: $FluidApi$MultiSlotStorage);
        get tanks(): number;
    }
    export class $NeoforgeFluidApiImpl implements $BlockFluidApi, $ItemFluidApi {
        registerForItem(arg0: $Supplier_<$Item>): void;
        createCache(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_): $BlockLookupCache<$FluidApi$FluidStorage>;
        registerEvent(arg0: $RegisterCapabilitiesEvent): void;
        find(arg0: $StackContext): $FluidApi$FluidStorage;
        find(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockEntity, arg4: $Direction_): $FluidApi$FluidStorage;
        find(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_): $FluidApi$FluidStorage;
        registerBlockEntity(arg0: $Supplier_<$BlockEntityType<never>>): void;
        getFluidComponent(): $DataComponentType<$FluidStack>;
        constructor();
        get fluidComponent(): $DataComponentType<$FluidStack>;
    }
    export class $NeoforgeEnergyApiImpl implements $BlockEnergyApi, $ItemEnergyApi {
        getEnergyComponent(): $DataComponentType<number>;
        registerForItem(arg0: $Supplier_<$Item>): void;
        createCache(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_): $BlockLookupCache<$EnergyApi$EnergyStorage>;
        registerEvent(arg0: $RegisterCapabilitiesEvent): void;
        find(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_): $EnergyApi$EnergyStorage;
        find(arg0: $StackContext): $EnergyApi$EnergyStorage;
        find(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockEntity, arg4: $Direction_): $EnergyApi$EnergyStorage;
        registerBlockEntity(arg0: $Supplier_<$BlockEntityType<never>>): void;
        constructor();
        get energyComponent(): $DataComponentType<number>;
    }
    export class $OritechModNeoForge {
        constructor(arg0: $IEventBus, arg1: $ModContainer);
    }
    export class $NeoforgeFluidApiImpl$SingleSlotContainerStorageWrapper implements $IFluidHandler {
        getTanks(): number;
        getFluidInTank(arg0: number): $FluidStack$1;
        getTankCapacity(arg0: number): number;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        static of(arg0: $FluidApi$SingleSlotStorage): $NeoforgeFluidApiImpl$SingleSlotContainerStorageWrapper;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack$1;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack$1;
        container: $FluidApi$SingleSlotStorage;
        constructor(arg0: $FluidApi$SingleSlotStorage);
        get tanks(): number;
    }
    export class $NeoforgeFluidApiImpl$NeoforgeItemStorageWrapper extends $NeoforgeFluidApiImpl$NeoforgeStorageWrapper {
        constructor(arg0: $IFluidHandlerItem, arg1: $StackContext);
    }
    export class $NeoforgeItemApiImpl$NeoforgeStoragerWrapper implements $ItemApi$InventoryStorage {
        insertToSlot(arg0: $ItemStack_, arg1: number, arg2: boolean): number;
        extractFromSlot(arg0: $ItemStack_, arg1: number, arg2: boolean): number;
        getSlotCount(): number;
        update(): void;
        extract(arg0: $ItemStack_, arg1: boolean): number;
        insert(arg0: $ItemStack_, arg1: boolean): number;
        getStackInSlot(arg0: number): $ItemStack;
        getSlotLimit(arg0: number): number;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        supportsInsertion(): boolean;
        supportsExtraction(): boolean;
        constructor(arg0: $IItemHandler);
        get slotCount(): number;
    }
    export class $OritechPlatformNeoForge implements $OritechPlatform {
        removeAttachment<T>(arg0: $LivingEntity, arg1: $Attachment<T>): void;
        sendBlockHandle(arg0: $BlockEntity, arg1: $CustomPacketPayload_): void;
        sendPlayerHandle(arg0: $CustomPacketPayload_, arg1: $ServerPlayer): void;
        registerToClient<T extends $CustomPacketPayload>(arg0: $CustomPacketPayload$Type_<T>, arg1: $StreamCodec<$RegistryFriendlyByteBuf, T>, arg2: $TriConsumer_<T, $Level, $RegistryAccess>): void;
        registerToServer<T extends $CustomPacketPayload>(arg0: $CustomPacketPayload$Type_<T>, arg1: $StreamCodec<$RegistryFriendlyByteBuf, T>, arg2: $TriConsumer_<T, $Player, $RegistryAccess>): void;
        hasAttachment<T>(arg0: $LivingEntity, arg1: $Attachment<T>): boolean;
        getAttachmentValue<T>(arg0: $LivingEntity, arg1: $Attachment<T>): T;
        setAttachment<T>(arg0: $LivingEntity, arg1: $Attachment<T>, arg2: T): void;
        resetCapabilities(arg0: $ServerLevel, arg1: $BlockPos_): void;
        canPlayerBreakBlock(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Player): boolean;
        canAttackBeDone(arg0: $Level_, arg1: $LivingEntity, arg2: number, arg3: $DamageSource_): boolean;
        register<T>(arg0: $Attachment<T>): void;
        create(arg0: $ServerLevel, arg1: $GameProfile, arg2: $SimpleInventoryStorage): $ServerPlayer;
        sendToServer(arg0: $CustomPacketPayload_): void;
        static PENDING_C2S_INITS: $Queue<$Consumer<$PayloadRegistrar>>;
        static ATTACHMENT_TYPES: $DeferredRegister<$AttachmentType<never>>;
        static PENDING_S2C_INITS: $Queue<$Consumer<$PayloadRegistrar>>;
        constructor();
    }
    export class $NeoforgeFluidApiImpl$NeoforgeStorageWrapper extends $FluidApi$FluidStorage {
        constructor(arg0: $IFluidHandler);
    }
    export class $NeoforgeItemApiImpl implements $BlockItemApi {
        createCache(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_): $BlockLookupCache<$ItemApi$InventoryStorage>;
        registerEvent(arg0: $RegisterCapabilitiesEvent): void;
        find(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockEntity, arg4: $Direction_): $ItemApi$InventoryStorage;
        find(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_): $ItemApi$InventoryStorage;
        registerBlockEntity(arg0: $Supplier_<$BlockEntityType<never>>): void;
        constructor();
    }
    export class $NeoforgeItemApiImpl$ContainerStorageWrapper implements $IItemHandlerModifiable {
        static of(arg0: $ItemApi$InventoryStorage): $NeoforgeItemApiImpl$ContainerStorageWrapper;
        getSlots(): number;
        getStackInSlot(arg0: number): $ItemStack;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        getSlotLimit(arg0: number): number;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
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
        container: $ItemApi$InventoryStorage;
        constructor(arg0: $ItemApi$InventoryStorage);
        get empty(): boolean;
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $OritechModNeoForge$EventHandler {
    }
    export class $NeoforgeEnergyApiImpl$NeoforgeStorageWrapper extends $EnergyApi$EnergyStorage {
        storage: $ILongEnergyStorage;
        constructor(arg0: $ILongEnergyStorage);
    }
    export class $OritechModNeoForge$CustomEvents {
    }
    export class $NeoforgeEnergyApiImpl$ContainerStorageWrapper implements $ILongEnergyStorage {
        canExtract(): boolean;
        canReceive(): boolean;
        receive(arg0: number, arg1: boolean): number;
        getCapacity(): number;
        extract(arg0: number, arg1: boolean): number;
        static of(arg0: $EnergyApi$EnergyStorage): $NeoforgeEnergyApiImpl$ContainerStorageWrapper;
        getAmount(): number;
        /**
         * @deprecated
         */
        receiveEnergy(arg0: number, arg1: boolean): number;
        /**
         * @deprecated
         */
        extractEnergy(arg0: number, arg1: boolean): number;
        /**
         * @deprecated
         */
        getEnergyStored(): number;
        /**
         * @deprecated
         */
        getMaxEnergyStored(): number;
        container: $EnergyApi$EnergyStorage;
        constructor(arg0: $EnergyApi$EnergyStorage);
        get capacity(): number;
        get amount(): number;
        get energyStored(): number;
        get maxEnergyStored(): number;
    }
}
