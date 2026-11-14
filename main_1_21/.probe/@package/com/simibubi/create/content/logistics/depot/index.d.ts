import { $MapCodec } from "@package/com/mojang/serialization";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $Entity$RemovalReason, $PortalProcessor, $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $SuperByteBufferCache$Compartment } from "@package/net/createmod/catnip/render";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Clearable, $InteractionResult, $InteractionHand_, $ItemInteractionResult, $Container } from "@package/net/minecraft/world";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $BlockState_, $BlockState, $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";
import { $Item, $Item$Properties, $BlockItem, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $DirectBeltInputBehaviour } from "@package/com/simibubi/create/content/kinetics/belt/behaviour";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockEntityConfigurationPacket } from "@package/com/simibubi/create/foundation/networking";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IHaveGoggleInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $SimpleDynamicVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $DynamicVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BasePacketPayload$PacketTypeProvider, $ServerboundPacketPayload, $ClientboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $TransportedItemStack } from "@package/com/simibubi/create/content/kinetics/belt/transport";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $Random, $Map, $List, $List_ } from "@package/java/util";
import { $ServerboundCustomPayloadPacket, $ClientboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $BlockEntityBehaviour, $BehaviourType, $ValueBoxTransform$Sided } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $PlayerInteractEvent$RightClickBlock, $PlayerInteractEvent$LeftClickBlock } from "@package/net/neoforged/neoforge/event/entity/player";
import { $Consumer_, $Predicate_, $Function_ } from "@package/java/util/function";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $HolderLookup$Provider, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $KineticBlockEntity, $ShaftVisual, $HorizontalKineticBlock, $ShaftRenderer } from "@package/com/simibubi/create/content/kinetics/base";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE, $ProperWaterloggedBlock } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Record, $Class } from "@package/java/lang";
import { $LevelAccessor, $BlockGetter, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $FluidState, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $MovingInteractionBehaviour } from "@package/com/simibubi/create/api/behaviour/interaction";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $BlockEntityType_, $BlockEntity, $BlockEntityTicker, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as storage from "@package/com/simibubi/create/content/logistics/depot/storage";

declare module "@package/com/simibubi/create/content/logistics/depot" {
    export class $DepotBlock extends $Block implements $IBE<$DepotBlockEntity>, $IWrenchable, $ProperWaterloggedBlock {
        hasAnalogOutputSignal(arg0: $BlockState_): boolean;
        getAnalogOutputSignal(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): number;
        updateShape(arg0: $BlockState_, arg1: $Direction_, arg2: $BlockState_, arg3: $LevelAccessor, arg4: $BlockPos_, arg5: $BlockPos_): $BlockState;
        getBlockEntityType(): $BlockEntityType<$DepotBlockEntity>;
        getBlockEntityClass(): $Class<$DepotBlockEntity>;
        getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        getFluidState(arg0: $BlockState_): $FluidState;
        onRemove(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$DepotBlockEntity, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$DepotBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$DepotBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($DepotBlockEntity) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $DepotBlockEntity;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        withWater(arg0: $BlockState_, arg1: $BlockPlaceContext): $BlockState;
        updateWater(arg0: $LevelAccessor, arg1: $BlockState_, arg2: $BlockPos_): void;
        fluidState(arg0: $BlockState_): $FluidState;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        getPickupSound(): ($SoundEvent) | undefined;
        placeLiquid(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FluidState): boolean;
        canPlaceLiquid(arg0: $Player | null, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Fluid_): boolean;
        pickupBlock(arg0: $Player | null, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $BlockState_): $ItemStack;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$DepotBlockEntity>;
        get blockEntityClass(): $Class<$DepotBlockEntity>;
    }
    export class $EntityLauncher {
        getHorizontalDistance(): number;
        getGlobalVelocity(arg0: number, arg1: $Direction_, arg2: $BlockPos_): $Vec3;
        applyMotion(arg0: $Entity, arg1: $Direction_): void;
        getVerticalDistance(): number;
        getTotalFlyingTicks(): number;
        getGlobalPos(arg0: number, arg1: $Direction_, arg2: $BlockPos_): $Vec3;
        clamp(arg0: number): void;
        x(arg0: number): number;
        set(arg0: number, arg1: number): void;
        y(arg0: number): number;
        dx(arg0: number): number;
        dy(arg0: number): number;
        constructor(arg0: number, arg1: number);
        get horizontalDistance(): number;
        get verticalDistance(): number;
        get totalFlyingTicks(): number;
    }
    export class $EjectorBlockEntity$State extends $Enum<$EjectorBlockEntity$State> {
        static values(): $EjectorBlockEntity$State[];
        static valueOf(arg0: string): $EjectorBlockEntity$State;
        static LAUNCHING: $EjectorBlockEntity$State;
        static CHARGED: $EjectorBlockEntity$State;
        static RETRACTING: $EjectorBlockEntity$State;
    }
    /**
     * Values that may be interpreted as {@link $EjectorBlockEntity$State}.
     */
    export type $EjectorBlockEntity$State_ = "charged" | "launching" | "retracting";
    export class $EjectorBlockEntity$EjectorSlot extends $ValueBoxTransform$Sided {
    }
    export class $EjectorBlockEntity extends $KineticBlockEntity {
        updateSignal(): void;
        getTargetPosition(): $BlockPos;
        activateDeferred(): void;
        handler$gbb000$sable$launchSubLevels(arg0: $CallbackInfo): void;
        wrapOperation$gbb000$sable$setPos(arg0: $Entity, arg1: number, arg2: number, arg3: number, arg4: $Operation_<any>): void;
        deployElytra(arg0: $Player): void;
        handler$gbb008$sable$tick(arg0: $CallbackInfo): void;
        getWindUpSpeed(): number;
        getLaunchedItemLocation(arg0: number): $Vec3;
        getTargetOpenInv(): $DirectBeltInputBehaviour;
        getLaunchedItemMotion(arg0: number): $Vec3;
        dropFlyingItems(): void;
        getLidProgress(arg0: number): number;
        getState(): $EjectorBlockEntity$State;
        setTarget(arg0: number, arg1: number): void;
        activate(): void;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        level: $Level;
        updateSpeed: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        preventSpeedUpdate: number;
        network: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get targetPosition(): $BlockPos;
        get windUpSpeed(): number;
        get targetOpenInv(): $DirectBeltInputBehaviour;
        get state(): $EjectorBlockEntity$State;
    }
    export class $EjectorBlock extends $HorizontalKineticBlock implements $IBE<$EjectorBlockEntity>, $ProperWaterloggedBlock {
        redirect$gbc000$sable$distanceTo(arg0: $Vec3_, arg1: $Vec3_, arg2: $Entity): number;
        redirect$gbc000$sable$distanceTo$mixinextras$bridge$22(arg0: $Vec3_, arg1: $Vec3_, arg2: $LocalRef<any>): number;
        redirect$gbc000$sable$setPos$mixinextras$bridge$23(arg0: $Vec3_, arg1: $Vec3_, arg2: $LocalRef<any>): $Vec3;
        redirect$gbc000$sable$setPos(arg0: $Vec3_, arg1: $Vec3_, arg2: $Entity): $Vec3;
        hasAnalogOutputSignal(arg0: $BlockState_): boolean;
        getAnalogOutputSignal(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): number;
        updateShape(arg0: $BlockState_, arg1: $Direction_, arg2: $BlockState_, arg3: $LevelAccessor, arg4: $BlockPos_, arg5: $BlockPos_): $BlockState;
        neighborChanged(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Block_, arg4: $BlockPos_, arg5: boolean): void;
        getBlockEntityType(): $BlockEntityType<$EjectorBlockEntity>;
        getBlockEntityClass(): $Class<$EjectorBlockEntity>;
        getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        getFluidState(arg0: $BlockState_): $FluidState;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$EjectorBlockEntity, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$EjectorBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$EjectorBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($EjectorBlockEntity) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $EjectorBlockEntity;
        withWater(arg0: $BlockState_, arg1: $BlockPlaceContext): $BlockState;
        updateWater(arg0: $LevelAccessor, arg1: $BlockState_, arg2: $BlockPos_): void;
        fluidState(arg0: $BlockState_): $FluidState;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        getPickupSound(): ($SoundEvent) | undefined;
        placeLiquid(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FluidState): boolean;
        canPlaceLiquid(arg0: $Player | null, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Fluid_): boolean;
        pickupBlock(arg0: $Player | null, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $BlockState_): $ItemStack;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        static HORIZONTAL_FACING: $Property<$Direction>;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$EjectorBlockEntity>;
        get blockEntityClass(): $Class<$EjectorBlockEntity>;
    }
    export class $EjectorTriggerPacket extends $BlockEntityConfigurationPacket<$EjectorBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $EjectorTriggerPacket>;
        constructor(arg0: $BlockPos_);
    }
    export class $DepotBehaviour extends $BlockEntityBehaviour implements $Clearable {
        handler$chj003$createlazytick$tick(arg0: $CallbackInfo): void;
        setCenteredHeldItem(arg0: $TransportedItemStack): void;
        isOutputEmpty(): boolean;
        getRemainingSpace(): number;
        createLazyTick$getCurrentDelayTick(): number;
        createLazyTick$getDepotDelayTick(): number;
        setHeldItem(arg0: $TransportedItemStack): void;
        getHeldItemStack(): $ItemStack;
        removeHeldItem(): void;
        withCallback(arg0: $Consumer_<$ItemStack>): $DepotBehaviour;
        canMergeItems(): boolean;
        clearContent(): void;
        onlyAccepts(arg0: $Predicate_<$ItemStack>): $DepotBehaviour;
        addSubBehaviours(arg0: $List_<$BlockEntityBehaviour>): void;
        enableMerging(): void;
        getPresentStackSize(): number;
        insert(arg0: $TransportedItemStack, arg1: boolean): $ItemStack;
        isEmpty(): boolean;
        isItemValid(arg0: $ItemStack_): boolean;
        blockEntity: $SmartBlockEntity;
        static TYPE: $BehaviourType<$DepotBehaviour>;
        itemHandler: $DepotItemHandler;
        constructor(arg0: $SmartBlockEntity);
        set centeredHeldItem(value: $TransportedItemStack);
        get outputEmpty(): boolean;
        get remainingSpace(): number;
        set heldItem(value: $TransportedItemStack);
        get heldItemStack(): $ItemStack;
        get presentStackSize(): number;
        get empty(): boolean;
    }
    export class $EjectorRenderer extends $ShaftRenderer<$EjectorBlockEntity> {
        shouldRenderOffScreen(arg0: $EjectorBlockEntity): boolean;
        static KINETIC_BLOCK: $SuperByteBufferCache$Compartment<$BlockState>;
        static rainbowMode: boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $EjectorAwardPacket extends $BlockEntityConfigurationPacket<$EjectorBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $EjectorAwardPacket>;
        constructor(arg0: $BlockPos_);
    }
    export class $SharedDepotBlockMethods {
        static onLanded(arg0: $BlockGetter, arg1: $Entity): void;
        static getComparatorInputOverride(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): number;
        static onUse(arg0: $ItemStack_, arg1: $BlockState_, arg2: $Level_, arg3: $BlockPos_, arg4: $Player, arg5: $InteractionHand_, arg6: $BlockHitResult): $ItemInteractionResult;
        constructor();
    }
    export class $EjectorElytraPacket extends $Record implements $ServerboundPacketPayload {
        pos(): $BlockPos;
        handle(arg0: $ServerPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $EjectorElytraPacket>;
        constructor(pos: $BlockPos_);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $EjectorElytraPacket}.
     */
    export type $EjectorElytraPacket_ = { pos?: $BlockPos_,  } | [pos?: $BlockPos_, ];
    export class $DepotRenderer extends $SafeBlockEntityRenderer<$DepotBlockEntity> {
        static renderItemsOf(arg0: $SmartBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number, arg6: $DepotBehaviour): void;
        static renderItem(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: number, arg4: $ItemStack_, arg5: number, arg6: $Random, arg7: $Vec3_, arg8: boolean): void;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $EjectorBlockEntity$EntityHack extends $Entity {
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        hasImpulse: boolean;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        level: $Level;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        horizontalCollision: boolean;
    }
    export class $EjectorPlacementPacket$ClientBoundRequest extends $Record implements $ClientboundPacketPayload {
        pos(): $BlockPos;
        handle(arg0: $LocalPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $EjectorPlacementPacket$ClientBoundRequest>;
        constructor(pos: $BlockPos_);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $EjectorPlacementPacket$ClientBoundRequest}.
     */
    export type $EjectorPlacementPacket$ClientBoundRequest_ = { pos?: $BlockPos_,  } | [pos?: $BlockPos_, ];
    export class $EjectorVisual extends $ShaftVisual<$EjectorBlockEntity> implements $SimpleDynamicVisual {
        beginFrame(arg0: $DynamicVisual$Context): void;
        planFrame(): $Plan<$DynamicVisual$Context>;
        static rainbowMode: boolean;
        constructor(arg0: $VisualizationContext, arg1: $EjectorBlockEntity, arg2: number);
    }
    export class $MountedDepotInteractionBehaviour extends $MovingInteractionBehaviour {
        static REGISTRY: $SimpleRegistry<$Block, $MovingInteractionBehaviour>;
        constructor();
    }
    export class $DepotBlockEntity extends $SmartBlockEntity implements $Clearable, $IHaveGoggleInformation {
        setHeldItem(arg0: $ItemStack_): void;
        getHeldItem(): $ItemStack;
        clearContent(): void;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $DepotItemHandler implements $IItemHandler {
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
        constructor(arg0: $DepotBehaviour);
        get empty(): boolean;
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $EjectorPlacementPacket extends $Record implements $ServerboundPacketPayload {
        h(): number;
        v(): number;
        pos(): $BlockPos;
        handle(arg0: $ServerPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        facing(): $Direction;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $EjectorPlacementPacket>;
        constructor(h: number, v: number, pos: $BlockPos_, facing: $Direction_);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $EjectorPlacementPacket}.
     */
    export type $EjectorPlacementPacket_ = { facing?: $Direction_, h?: number, v?: number, pos?: $BlockPos_,  } | [facing?: $Direction_, h?: number, v?: number, pos?: $BlockPos_, ];
    export class $EjectorTargetHandler {
        static flushSettings(arg0: $BlockPos_): void;
        static getValidTargetDirection(arg0: $BlockPos_): $Direction;
        static drawOutline(arg0: $BlockPos_): void;
        static rightClickingBlocksSelectsThem(arg0: $PlayerInteractEvent$RightClickBlock): void;
        static leftClickingBlocksDeselectsThem(arg0: $PlayerInteractEvent$LeftClickBlock): void;
        static tick(): void;
        constructor();
    }
    export class $EjectorItem extends $BlockItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Block_, arg1: $Item$Properties);
    }
}
