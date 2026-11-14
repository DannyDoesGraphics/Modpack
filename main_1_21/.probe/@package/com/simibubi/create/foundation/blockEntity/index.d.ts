import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CreateAdvancement } from "@package/com/simibubi/create/foundation/advancement";
import { $FluidStack, $IFluidTank } from "@package/net/neoforged/neoforge/fluids";
import { $IInteractionChecker } from "@package/com/simibubi/create/foundation/utility";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $PartialSafeNBT } from "@package/com/simibubi/create/api/schematic/nbt";
import { $UUID, $List, $UUID_, $Set_, $List_, $Collection } from "@package/java/util";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $BehaviourType, $BlockEntityBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Container } from "@package/net/minecraft/world";
import { $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos, $Direction$Axis_, $BlockPos_, $Direction$Axis, $HolderGetter } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Object } from "@package/java/lang";
import { $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemRequirement } from "@package/com/simibubi/create/content/schematics/requirement";
import { $SpecialBlockEntityItemRequirement } from "@package/com/simibubi/create/api/schematic/requirement";
import { $VirtualBlockEntity } from "@package/net/createmod/ponder/api";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockEntityDataPacket } from "@package/com/simibubi/create/foundation/networking";
import { $ClientboundBlockEntityDataPacket } from "@package/net/minecraft/network/protocol/game";
import { $ISmartBlockEntityControl } from "@package/net/pinkcats/createlazytick/bridge/Create";
import { $IHaveGoggleInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $LazyTickTier } from "@package/net/pinkcats/createlazytick/helper/tooltip";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as behaviour from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
export * as renderer from "@package/com/simibubi/create/foundation/blockEntity/renderer";

declare module "@package/com/simibubi/create/foundation/blockEntity" {
    export class $ComparatorUtil {
        static levelOfSmartFluidTank(arg0: $BlockGetter, arg1: $BlockPos_): number;
        static fractionToRedstoneLevel(arg0: number): number;
        constructor();
    }
    export class $RemoveBlockEntityPacket extends $BlockEntityDataPacket<$SyncedBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $RemoveBlockEntityPacket>;
        constructor(arg0: $BlockPos_);
    }
    export class $SyncedBlockEntity extends $BlockEntity {
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        writeClient(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $CompoundTag;
        readClient(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        notifyUpdate(): void;
        blockHolderGetter(): $HolderGetter<$Block>;
        sendData(): void;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $ItemHandlerContainer implements $Container {
        setItem(arg0: number, arg1: $ItemStack_): void;
        clearContent(): void;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        removeItem(arg0: number, arg1: number): $ItemStack;
        isEmpty(): boolean;
        getItem(arg0: number): $ItemStack;
        getMaxStackSize(): number;
        stillValid(arg0: $Player): boolean;
        getContainerSize(): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        setChanged(): void;
        countItem(arg0: $Item_): number;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        getMaxStackSize(arg0: $ItemStack_): number;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        setTransferCooldown(arg0: number): void;
        canReceiveTransferCooldown(): boolean;
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        self(): $Container;
        getBlock(level: $Level_): $LevelBlock;
        clear(): void;
        isMutable(): boolean;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getWidth(): number;
        getHeight(): number;
        setChanged(): void;
        asContainer(): $Container;
        isEmpty(): boolean;
        clear(match: $ItemPredicate_): void;
        find(match: $ItemPredicate_): number;
        find(): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        getAllItems(): $List<$ItemStack>;
        constructor(arg0: $IItemHandlerModifiable);
        get containerSize(): number;
        set transferCooldown(value: number);
        get mutable(): boolean;
        get slots(): number;
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $CachedRenderBBBlockEntity extends $SyncedBlockEntity {
        getRenderBoundingBox(): $AABB;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get renderBoundingBox(): $AABB;
    }
    export class $IMultiBlockEntityContainer$Fluid {
    }
    export interface $IMultiBlockEntityContainer$Fluid extends $IMultiBlockEntityContainer {
        getFluid(arg0: number): $FluidStack;
        hasTank(): boolean;
        getTankSize(arg0: number): number;
        setTankSize(arg0: number, arg1: number): void;
        getTank(arg0: number): $IFluidTank;
    }
    export class $SmartBlockEntity extends $CachedRenderBBBlockEntity implements $PartialSafeNBT, $IInteractionChecker, $SpecialBlockEntityItemRequirement, $VirtualBlockEntity, $ISmartBlockEntityControl, $IHaveGoggleInformation {
        saveAdditional(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        markVirtual(): void;
        getBehaviour<T extends $BlockEntityBehaviour>(arg0: $BehaviourType<T>): T;
        createLazyTick$setOwnerName(arg0: string): void;
        createLazyTick$setOwnerUUID(arg0: $UUID_): void;
        createLazyTick$sendBlockUpdated(): void;
        createLazyTick$getDynamicValue(): number;
        createLazyTick$getForcedValue(): number;
        createLazyTick$getOwnerName(): string;
        setLazyTickRate(arg0: number): void;
        addBehavioursDeferred(arg0: $List_<$BlockEntityBehaviour>): void;
        forEachBehaviour(arg0: $Consumer_<$BlockEntityBehaviour>): void;
        lazyTick(): void;
        writeSafe(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getAllBehaviours(): $Collection<$BlockEntityBehaviour>;
        attachBehaviourLate(arg0: $BlockEntityBehaviour): void;
        removeBehaviour(arg0: $BehaviourType<never>): void;
        isChunkUnloaded(): boolean;
        canPlayerUse(arg0: $Player): boolean;
        sendToMenu(arg0: $RegistryFriendlyByteBuf): void;
        refreshBlockState(): void;
        registerAwardables(arg0: $List_<$BlockEntityBehaviour>, ...arg1: $CreateAdvancement[]): void;
        awardIfNear(arg0: $CreateAdvancement, arg1: number): void;
        lazytick$isDefaultState(): boolean;
        lazytick$getSyncedTier(): $LazyTickTier;
        lazytick$setSyncedTier(arg0: number, arg1: number): void;
        lazytick$getExtraData(): number;
        lazytick$setExtraData(arg0: number): void;
        createLazyTick$getOwnerUUID(): $UUID;
        CLT$getPos(): $BlockPos;
        CLT$getDimension(): $ResourceKey<any>;
        createLazyTick$setCurrentSuperTick(arg0: number): void;
        createLazyTick$getCurrentSuperTick(): number;
        createLazyTick$setDelayForced(arg0: boolean): void;
        createLazyTick$isDelayForced(): boolean;
        createLazyTick$setDynamicValue(arg0: number): void;
        createLazyTick$setForcedValue(arg0: number): void;
        addBehaviours(arg0: $List_<$BlockEntityBehaviour>): void;
        addToGoggleTooltip(arg0: $List_<any>, arg1: boolean): boolean;
        getRequiredItems(arg0: $BlockState_): $ItemRequirement;
        remove(): void;
        isVirtual(): boolean;
        initialize(): void;
        destroy(): void;
        tick(): void;
        award(arg0: $CreateAdvancement): void;
        invalidate(): void;
        createLazyTick$shouldRenderTier(): boolean;
        createLazyTick$getCustomTooltipInfo(): $List<$Component>;
        createLazyTick$shouldRenderMode(): boolean;
        CLT$onClientRequest(arg0: number): void;
        containedFluidTooltip(arg0: $List_<$Component_>, arg1: boolean, arg2: $IFluidHandler): boolean;
        getIcon(arg0: boolean): $ItemStack;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        set lazyTickRate(value: number);
        get allBehaviours(): $Collection<$BlockEntityBehaviour>;
        get chunkUnloaded(): boolean;
        get virtual(): boolean;
    }
    export class $IMultiBlockEntityContainer {
    }
    export interface $IMultiBlockEntityContainer {
        getMaxWidth(): number;
        getLastKnownPos(): $BlockPos;
        isController(): boolean;
        getController(): $BlockPos;
        setController(arg0: $BlockPos_): void;
        getControllerBE<T extends $BlockEntity>(): T;
        removeController(arg0: boolean): void;
        preventConnectivityUpdate(): void;
        notifyMultiUpdated(): void;
        setExtraData(arg0: $Object): void;
        getExtraData(): $Object;
        modifyExtraData(arg0: $Object): $Object;
        getMainConnectionAxis(): $Direction$Axis;
        getMainAxisOf(arg0: $BlockEntity): $Direction$Axis;
        getMaxLength(arg0: $Direction$Axis_, arg1: number): number;
        setWidth(arg0: number): void;
        setHeight(arg0: number): void;
        getWidth(): number;
        getHeight(): number;
        get maxWidth(): number;
        get lastKnownPos(): $BlockPos;
        get controllerBE(): T;
        get mainConnectionAxis(): $Direction$Axis;
    }
    export class $SmartBlockEntityTicker<T extends $BlockEntity> implements $BlockEntityTicker<T> {
        tick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: T): void;
        constructor();
    }
    export class $IMultiBlockEntityContainer$Inventory {
    }
    export interface $IMultiBlockEntityContainer$Inventory extends $IMultiBlockEntityContainer {
        hasInventory(): boolean;
    }
    export class $IMergeableBE {
    }
    export interface $IMergeableBE {
        accept(arg0: $BlockEntity): void;
    }
    /**
     * Values that may be interpreted as {@link $IMergeableBE}.
     */
    export type $IMergeableBE_ = ((arg0: $BlockEntity) => void);
}
