import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ClientContraption } from "@package/com/simibubi/create/content/contraptions/render";
import { $EntityType_, $Entity$RemovalReason, $LivingEntity, $PortalProcessor, $Entity, $Entity$MoveFunction_, $EntityType$Builder } from "@package/net/minecraft/world/entity";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $AccessorContraption, $AccessorOrientedContraptionEntity, $AccessorAbstractContraptionEntity } from "@package/com/railwayteam/railways/mixin";
import { $InputEvent$InteractionKeyMappingTriggered } from "@package/net/neoforged/neoforge/client/event";
import { $WeakReference } from "@package/java/lang/ref";
import { $RandomSource } from "@package/net/minecraft/util";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $MountedFluidStorage, $MountedFluidStorageWrapper } from "@package/com/simibubi/create/api/contraption/storage/fluid";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $FloatingClusterContainer } from "@package/dev/ryanhcode/sable/physics/floating_block";
import { $MountedStorageAccessor } from "@package/dev/ryanhcode/offroad/mixin";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $IEntityWithComplexSpawn } from "@package/net/neoforged/neoforge/entity";
import { $ContraptionType } from "@package/com/simibubi/create/api/contraption";
import { $StructureTemplate$StructureBlockInfo_, $StructureTemplate$StructureBlockInfo } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $MinecartController } from "@package/com/simibubi/create/content/contraptions/minecart/capability";
import { $CombinedInvWrapper } from "@package/net/neoforged/neoforge/items/wrapper";
import { $INamedIconOptions } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/scrollValue";
import { $MutableInt } from "@package/org/apache/commons/lang3/mutable";
import { $Mirror_, $Mirror, $Rotation_, $Rotation } from "@package/net/minecraft/world/level/block";
import { $Vec3, $AABB, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BasePacketPayload$PacketTypeProvider, $ServerboundPacketPayload, $ClientboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $KinematicContraption } from "@package/dev/ryanhcode/sable/api/sublevel";
import { $Vector3dc, $Quaterniond } from "@package/org/joml";
import { $MassTracker } from "@package/dev/ryanhcode/sable/api/physics/mass";
import { $IFuelInventory, $IContraptionFuel } from "@package/com/railwayteam/railways/mixin_interfaces";
import { $MutablePair } from "@package/org/apache/commons/lang3/tuple";
import { $UUID_, $ArrayList, $Map, $Set, $UUID, $List, $Map_, $Collection_, $List_ } from "@package/java/util";
import { $ServerboundCustomPayloadPacket, $ClientboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $CenteredSideValueBoxTransform } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $BiConsumer_, $BiPredicate_ } from "@package/java/util/function";
import { $Object2BooleanMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $Direction$Axis_, $BlockPos_, $Vec3i, $HolderLookup$Provider, $Direction_, $Direction$Axis, $Direction } from "@package/net/minecraft/core";
import { $Enum, $Exception, $Iterable_, $Record, $Object } from "@package/java/lang";
import { $Couple, $WorldAttached } from "@package/net/createmod/catnip/data";
import { $BlockGetter, $EntityGetter, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $CollisionList, $Matrix3d } from "@package/com/simibubi/create/foundation/collision";
import { $BoundingBox3i, $Pose3d } from "@package/dev/ryanhcode/sable/companion/math";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $ImmutableMap } from "@package/com/google/common/collect";
import { $MovementBehaviour } from "@package/com/simibubi/create/api/behaviour/movement";
import { $MovingInteractionBehaviour } from "@package/com/simibubi/create/api/behaviour/interaction";
import { $PlayerTickEvent$Post } from "@package/net/neoforged/neoforge/event/tick";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $MovementContext } from "@package/com/simibubi/create/content/contraptions/behaviour";
import { $WrappedLevel } from "@package/net/createmod/catnip/levelWrappers";
import { $AllIcons } from "@package/com/simibubi/create/foundation/gui";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $ContraptionAccessor, $ControlledContraptionEntityAccessor } from "@package/dev/simulated_team/simulated/mixin/accessor";
import { $MountedItemStorageWrapper, $MountedItemStorage } from "@package/com/simibubi/create/api/contraption/storage/item";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as actors from "@package/com/simibubi/create/content/contraptions/actors";
export * as elevator from "@package/com/simibubi/create/content/contraptions/elevator";
export * as minecart from "@package/com/simibubi/create/content/contraptions/minecart";
export * as sync from "@package/com/simibubi/create/content/contraptions/sync";
export * as bearing from "@package/com/simibubi/create/content/contraptions/bearing";
export * as behaviour from "@package/com/simibubi/create/content/contraptions/behaviour";
export * as chassis from "@package/com/simibubi/create/content/contraptions/chassis";
export * as gantry from "@package/com/simibubi/create/content/contraptions/gantry";
export * as pulley from "@package/com/simibubi/create/content/contraptions/pulley";
export * as render from "@package/com/simibubi/create/content/contraptions/render";
export * as glue from "@package/com/simibubi/create/content/contraptions/glue";
export * as mounted from "@package/com/simibubi/create/content/contraptions/mounted";
export * as data from "@package/com/simibubi/create/content/contraptions/data";
export * as wrench from "@package/com/simibubi/create/content/contraptions/wrench";
export * as piston from "@package/com/simibubi/create/content/contraptions/piston";

declare module "@package/com/simibubi/create/content/contraptions" {
    export class $ContraptionBlockChangedPacket extends $Record implements $ClientboundPacketPayload {
        newState(): $BlockState;
        handle(arg0: $LocalPlayer): void;
        entityId(): number;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        localPos(): $BlockPos;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ContraptionBlockChangedPacket>;
        constructor(entityId: number, localPos: $BlockPos_, newState: $BlockState_);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $ContraptionBlockChangedPacket}.
     */
    export type $ContraptionBlockChangedPacket_ = { entityId?: number, newState?: $BlockState_, localPos?: $BlockPos_,  } | [entityId?: number, newState?: $BlockState_, localPos?: $BlockPos_, ];
    export class $ContraptionCollider$PlayerType extends $Enum<$ContraptionCollider$PlayerType> {
    }
    /**
     * Values that may be interpreted as {@link $ContraptionCollider$PlayerType}.
     */
    export type $ContraptionCollider$PlayerType_ = "none" | "client" | "remote" | "server";
    export class $StructureTransform {
        rotateFacing(arg0: $Direction_): $Direction;
        unapply(arg0: $BlockPos_): $BlockPos;
        mirrorFacing(arg0: $Direction_): $Direction;
        unapplyWithoutOffset(arg0: $Vec3_): $Vec3;
        unapplyWithoutOffset(arg0: $BlockPos_): $BlockPos;
        applyWithoutOffsetUncentered(arg0: $Vec3_): $Vec3;
        applyWithoutOffset(arg0: $Vec3_): $Vec3;
        applyWithoutOffset(arg0: $BlockPos_): $BlockPos;
        apply(arg0: $BlockState_): $BlockState;
        apply(arg0: $Vec3_): $Vec3;
        apply(arg0: $BlockEntity): void;
        apply(arg0: $BlockPos_): $BlockPos;
        rotateAxis(arg0: $Direction$Axis_): $Direction$Axis;
        mirror: $Mirror;
        offset: $BlockPos;
        rotationAxis: $Direction$Axis;
        rotation: $Rotation;
        angle: number;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $StructureTransform>;
        constructor(arg0: $BlockPos_, arg1: number, arg2: number, arg3: number);
        constructor(arg0: $BlockPos_, arg1: $Direction$Axis_, arg2: $Rotation_, arg3: $Mirror_);
    }
    export class $ContraptionRelocationPacket extends $Record implements $ClientboundPacketPayload {
        handle(arg0: $LocalPlayer): void;
        entityId(): number;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ContraptionRelocationPacket>;
        constructor(entityId: number);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $ContraptionRelocationPacket}.
     */
    export type $ContraptionRelocationPacket_ = { entityId?: number,  } | [entityId?: number, ];
    export class $ContraptionStallPacket extends $Record implements $ClientboundPacketPayload {
        x(): number;
        z(): number;
        handle(arg0: $LocalPlayer): void;
        y(): number;
        entityId(): number;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        angle(): number;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ContraptionStallPacket>;
        constructor(entityId: number, x: number, y: number, z: number, angle: number);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $ContraptionStallPacket}.
     */
    export type $ContraptionStallPacket_ = { z?: number, y?: number, x?: number, angle?: number, entityId?: number,  } | [z?: number, y?: number, x?: number, angle?: number, entityId?: number, ];
    export class $TranslatingContraption extends $Contraption {
        createColliders(arg0: $Level_, arg1: $Direction_): $Set<$BlockPos>;
        getOrCreateColliders(arg0: $Level_, arg1: $Direction_): $Set<$BlockPos>;
        hasUniversalCreativeCrate: boolean;
        isLegacy: $Object2BooleanMap<$BlockPos>;
        anchor: $BlockPos;
        stalled: boolean;
        bounds: $AABB;
        simplifiedEntityColliders: $CollisionList;
        disassembled: boolean;
        entity: $AbstractContraptionEntity;
        constructor();
    }
    export class $IDisplayAssemblyExceptions {
    }
    export interface $IDisplayAssemblyExceptions {
        addExceptionToTooltip(arg0: $List_<$Component_>): boolean;
        getLastAssemblyException(): $AssemblyException;
        get lastAssemblyException(): $AssemblyException;
    }
    /**
     * Values that may be interpreted as {@link $IDisplayAssemblyExceptions}.
     */
    export type $IDisplayAssemblyExceptions_ = (() => $AssemblyException);
    export class $AbstractContraptionEntity extends $Entity implements $IEntityWithComplexSpawn, $AccessorAbstractContraptionEntity, $KinematicContraption {
        handlePlayerInteraction(arg0: $Player, arg1: $BlockPos_, arg2: $Direction_, arg3: $InteractionHand_): boolean;
        addSittingPassenger(arg0: $Entity, arg1: number): void;
        toGlobalVector(arg0: $Vec3_, arg1: number): $Vec3;
        toGlobalVector(arg0: $Vec3_, arg1: number, arg2: boolean): $Vec3;
        getControllingPlayer(): ($UUID) | undefined;
        stopControlling(arg0: $BlockPos_): void;
        startControlling(arg0: $BlockPos_, arg1: $Player): boolean;
        setControllingPlayer(arg0: $UUID_): void;
        disassemble(): void;
        isStalled(): boolean;
        reverseRotation(arg0: $Vec3_, arg1: number): $Vec3;
        applyRotation(arg0: $Vec3_, arg1: number): $Vec3;
        handler$epj000$create_pattern_schematics$handlePlayerInteraction(arg0: $Player, arg1: $BlockPos_, arg2: $Direction_, arg3: $InteractionHand_, arg4: $CallbackInfoReturnable<any>): void;
        getPrevAnchorVec(): $Vec3;
        toLocalVector(arg0: $Vec3_, arg1: number): $Vec3;
        toLocalVector(arg0: $Vec3_, arg1: number, arg2: boolean): $Vec3;
        alignPassenger(arg0: $Entity): void;
        refreshPSIs(): void;
        getPrevPositionVec(): $Vec3;
        getYawOffset(): number;
        static yawFromVector(arg0: $Vec3_): number;
        static pitchFromVector(arg0: $Vec3_): number;
        getContactPointMotion(arg0: $Vec3_): $Vec3;
        getRotationState(): $AbstractContraptionEntity$ContraptionRotationState;
        tickActors(): void;
        getAnchorVec(): $Vec3;
        applyLocalTransforms(arg0: $PoseStack, arg1: number): void;
        supportsTerrainCollision(): boolean;
        collisionEnabled(): boolean;
        getPassengerPosition(arg0: $Entity, arg1: number): $Vec3;
        getContraptionName(): $Component;
        setContraptionMotion(arg0: $Vec3_): void;
        isReadyForRender(): boolean;
        isAliveOrStale(): boolean;
        isPrevPosInvalid(): boolean;
        sable$liftProviders(): $Map<any, any>;
        sable$blockGetter(): $BlockGetter;
        sable$getLocalBounds(arg0: $BoundingBox3i): void;
        sable$getMassTracker(): $MassTracker;
        sable$getPosition(arg0: number): $Vector3dc;
        sable$getOrientation(arg0: number): $Quaterniond;
        sable$isValid(): boolean;
        sable$shouldCollide(): boolean;
        sable$getFloatingClusterContainer(): $FloatingClusterContainer;
        writeSpawnData(arg0: $RegistryFriendlyByteBuf): void;
        readSpawnData(arg0: $RegistryFriendlyByteBuf): void;
        static build(arg0: $EntityType$Builder<never>): $EntityType$Builder<never>;
        move(arg0: number, arg1: number, arg2: number): void;
        control(arg0: $BlockPos_, arg1: $Collection_<number>, arg2: $Player): boolean;
        setBlock(arg0: $BlockPos_, arg1: $StructureTemplate$StructureBlockInfo_): void;
        canInteractWithBlock(arg0: $Player, arg1: $Vec3_, arg2: number): boolean;
        canInteractWithBlock(arg0: $Player, arg1: $BlockPos_, arg2: number): boolean;
        positionRider(arg0: $Entity, arg1: $Entity$MoveFunction_): void;
        getContraption(): $Contraption;
        registerColliding(arg0: $Entity): void;
        sable$getPosition(): $Vector3dc;
        sable$getOrientation(): $Quaterniond;
        sable$getLocalPose(arg0: $Pose3d, arg1: number): $Pose3d;
        railways$setSkipActorStop(arg0: boolean): void;
        railways$moveCollidedEntitiesOnDisassembly(arg0: $StructureTransform): void;
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
        staleTicks: number;
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
        collidingEntities: $Map<$Entity, $MutableInt>;
        static BASE_SAFE_FALL_DISTANCE: number;
        horizontalCollision: boolean;
        constructor(arg0: $EntityType_<never>, arg1: $Level_);
        get stalled(): boolean;
        get prevAnchorVec(): $Vec3;
        get prevPositionVec(): $Vec3;
        get yawOffset(): number;
        get rotationState(): $AbstractContraptionEntity$ContraptionRotationState;
        get anchorVec(): $Vec3;
        get contraptionName(): $Component;
        set contraptionMotion(value: $Vec3_);
        get readyForRender(): boolean;
        get aliveOrStale(): boolean;
        get prevPosInvalid(): boolean;
        get contraption(): $Contraption;
    }
    export class $ContraptionWorld extends $WrappedLevel {
        self(): $EntityGetter;
        restoringBlockSnapshots: boolean;
        oThunderLevel: number;
        static LONG_PARTICLE_CLIP_RANGE: number;
        static ATTACHMENTS_NBT_KEY: string;
        thunderLevel: number;
        random: $RandomSource;
        capturedBlockSnapshots: $ArrayList<$BlockSnapshot>;
        static OVERWORLD: $ResourceKey<$Level>;
        static TICKS_PER_DAY: number;
        static MAX_ENTITY_SPAWN_Y: number;
        static NETHER: $ResourceKey<$Level>;
        oRainLevel: number;
        static RESOURCE_KEY_CODEC: $Codec<$ResourceKey<$Level>>;
        static MAX_BRIGHTNESS: number;
        static END: $ResourceKey<$Level>;
        static MAX_LEVEL_SIZE: number;
        static SHORT_PARTICLE_CLIP_RANGE: number;
        static MIN_ENTITY_SPAWN_Y: number;
        rainLevel: number;
        captureBlockSnapshots: boolean;
        constructor(arg0: $Level_, arg1: $Contraption);
    }
    export class $ContraptionCollider {
        static collideBlocks(arg0: $AbstractContraptionEntity): boolean;
        static isCollidingWithWorld(arg0: $Level_, arg1: $TranslatingContraption, arg2: $BlockPos_, arg3: $Direction_): boolean;
        static lockPacketReceived(arg0: number, arg1: number, arg2: number): void;
        static getWorldToLocalTranslation(arg0: $Entity, arg1: $Vec3_, arg2: $Matrix3d, arg3: number): $Vec3;
        static worldToLocalPos(arg0: $Vec3_, arg1: $AbstractContraptionEntity): $Vec3;
        static worldToLocalPos(arg0: $Vec3_, arg1: $Vec3_, arg2: $Matrix3d, arg3: number): $Vec3;
        static worldToLocalPos(arg0: $Vec3_, arg1: $Vec3_, arg2: $AbstractContraptionEntity$ContraptionRotationState): $Vec3;
        constructor();
    }
    export class $OrientedContraptionEntity extends $AbstractContraptionEntity implements $AccessorOrientedContraptionEntity {
        setInitialOrientation(arg0: $Direction_): void;
        startAtInitialYaw(): void;
        static createAtYaw(arg0: $Level_, arg1: $Contraption, arg2: $Direction_, arg3: number): $OrientedContraptionEntity;
        startAtYaw(arg0: number): void;
        getInitialYaw(): number;
        setCouplingId(arg0: $UUID_): void;
        getCouplingId(): $UUID;
        getCoupledCartsIfPresent(): $Couple<$MinecartController>;
        static handleRelocationPacket(arg0: $ContraptionRelocationPacket_): void;
        isInitialOrientationPresent(): boolean;
        getInitialOrientation(): $Direction;
        static create(arg0: $Level_, arg1: $Contraption, arg2: $Direction_): $OrientedContraptionEntity;
        railways$makeStructureTransform(): $StructureTransform;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        hasImpulse: boolean;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        pitch: number;
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
        prevYaw: number;
        zo: number;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        staleTicks: number;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        prevPitch: number;
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
        yaw: number;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        collidingEntities: $Map<$Entity, $MutableInt>;
        static BASE_SAFE_FALL_DISTANCE: number;
        nonDamageTicks: number;
        targetYaw: number;
        horizontalCollision: boolean;
        constructor(arg0: $EntityType_<never>, arg1: $Level_);
        get initialYaw(): number;
        get coupledCartsIfPresent(): $Couple<$MinecartController>;
        get initialOrientationPresent(): boolean;
    }
    export class $Contraption implements $ContraptionAccessor, $AccessorContraption, $IContraptionFuel {
        getSeats(): $List<$BlockPos>;
        getActors(): $List<$MutablePair<$StructureTemplate$StructureBlockInfo, $MovementContext>>;
        invalidateClientContraptionChildren(): void;
        getActorAt(arg0: $BlockPos_): $MutablePair<$StructureTemplate$StructureBlockInfo, $MovementContext>;
        getBlockEntityClientSide(arg0: $BlockPos_): $BlockEntity;
        getDisabledActors(): $List<$ItemStack>;
        isActorTypeDisabled(arg0: $ItemStack_): boolean;
        setActorsActive(arg0: $ItemStack_, arg1: boolean): void;
        invalidateColliders(): void;
        static getRadius(arg0: $Iterable_<$Vec3i>, arg1: $Direction$Axis_): number;
        getStorage(): $MountedStorageManager;
        assemble(arg0: $Level_, arg1: $BlockPos_): boolean;
        startMoving(arg0: $Level_): void;
        onEntityCreated(arg0: $AbstractContraptionEntity): void;
        onEntityInitialize(arg0: $Level_, arg1: $AbstractContraptionEntity): void;
        removeBlocksFromWorld(arg0: $Level_, arg1: $BlockPos_): void;
        writeStorage(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        getSeatMapping(): $Map<$UUID, number>;
        resetClientContraption(): void;
        addBlocksToWorld(arg0: $Level_, arg1: $StructureTransform): void;
        addPassengersToWorld(arg0: $Level_, arg1: $StructureTransform, arg2: $List_<$Entity>): void;
        forEachActor(arg0: $Level_, arg1: $BiConsumer_<$MovementBehaviour, $MovementContext>): void;
        expandBoundsAroundAxis(arg0: $Direction$Axis_): void;
        getSeatOf(arg0: $UUID_): $BlockPos;
        getBearingPosOf(arg0: $UUID_): $BlockPos;
        setSeatMapping(arg0: $Map_<$UUID_, number>): void;
        getIsLegacy(): $Object2BooleanMap<$BlockPos>;
        getInteractors(): $Map<$BlockPos, $MovingInteractionBehaviour>;
        isHiddenInPortal(arg0: $BlockPos_): boolean;
        getSimplifiedEntityColliders(): $CollisionList;
        tickStorage(arg0: $AbstractContraptionEntity): void;
        getOrCreateClientContraptionLazy(): $ClientContraption;
        invalidateClientContraptionStructure(): void;
        getContraptionWorld(): $ContraptionWorld;
        canBeStabilized(arg0: $Direction_, arg1: $BlockPos_): boolean;
        searchMovedStructure(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_): boolean;
        containsBlockBreakers(): boolean;
        railways$getFluidFuels(): $MountedFluidStorageWrapper;
        static fromNBT(arg0: $Level_, arg1: $CompoundTag_, arg2: boolean): $Contraption;
        writeNBT(arg0: $HolderLookup$Provider, arg1: boolean): $CompoundTag;
        readNBT(arg0: $Level_, arg1: $CompoundTag_, arg2: boolean): void;
        stop(arg0: $Level_): void;
        getType(): $ContraptionType;
        getBlocks(): $Map<$BlockPos, $StructureTemplate$StructureBlockInfo>;
        getSuperGlue(): $List<$AABB>;
        railways$getEntity(): $AbstractContraptionEntity;
        hasUniversalCreativeCrate: boolean;
        isLegacy: $Object2BooleanMap<$BlockPos>;
        anchor: $BlockPos;
        stalled: boolean;
        bounds: $AABB;
        simplifiedEntityColliders: $CollisionList;
        disassembled: boolean;
        entity: $AbstractContraptionEntity;
        constructor();
        get seats(): $List<$BlockPos>;
        get actors(): $List<$MutablePair<$StructureTemplate$StructureBlockInfo, $MovementContext>>;
        get disabledActors(): $List<$ItemStack>;
        get storage(): $MountedStorageManager;
        get interactors(): $Map<$BlockPos, $MovingInteractionBehaviour>;
        get orCreateClientContraptionLazy(): $ClientContraption;
        get contraptionWorld(): $ContraptionWorld;
        get type(): $ContraptionType;
        get blocks(): $Map<$BlockPos, $StructureTemplate$StructureBlockInfo>;
        get superGlue(): $List<$AABB>;
    }
    export class $IControlContraption {
    }
    export interface $IControlContraption {
        onStall(): void;
        isAttachedTo(arg0: $AbstractContraptionEntity): boolean;
        getBlockPosition(): $BlockPos;
        attach(arg0: $ControlledContraptionEntity): void;
        isValid(): boolean;
        get blockPosition(): $BlockPos;
        get valid(): boolean;
    }
    export class $ContraptionColliderLockPacket$ContraptionColliderLockPacketRequest extends $Record implements $ServerboundPacketPayload {
        offset(): number;
        handle(arg0: $ServerPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        contraption(): number;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ContraptionColliderLockPacket$ContraptionColliderLockPacketRequest>;
        constructor(contraption: number, offset: number);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $ContraptionColliderLockPacket$ContraptionColliderLockPacketRequest}.
     */
    export type $ContraptionColliderLockPacket$ContraptionColliderLockPacketRequest_ = { contraption?: number, offset?: number,  } | [contraption?: number, offset?: number, ];
    export class $DirectionalExtenderScrollOptionSlot extends $CenteredSideValueBoxTransform {
        constructor(arg0: $BiPredicate_<$BlockState, $Direction>);
    }
    export class $AbstractContraptionEntity$ContraptionRotationState {
        getYawOffset(): number;
        asMatrix(): $Matrix3d;
        hasVerticalRotation(): boolean;
        xRotation: number;
        secondYRotation: number;
        zRotation: number;
        static NONE: $AbstractContraptionEntity$ContraptionRotationState;
        yRotation: number;
        constructor();
        get yawOffset(): number;
    }
    export class $ContraptionColliderLockPacket extends $Record implements $ClientboundPacketPayload {
        sender(): number;
        offset(): number;
        handle(arg0: $LocalPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        contraption(): number;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ContraptionColliderLockPacket>;
        constructor(contraption: number, offset: number, sender: number);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $ContraptionColliderLockPacket}.
     */
    export type $ContraptionColliderLockPacket_ = { offset?: number, contraption?: number, sender?: number,  } | [offset?: number, contraption?: number, sender?: number, ];
    export class $TrainCollisionPacket extends $Record implements $ServerboundPacketPayload {
        contraptionEntityId(): number;
        handle(arg0: $ServerPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        damage(): number;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $TrainCollisionPacket>;
        constructor(damage: number, contraptionEntityId: number);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $TrainCollisionPacket}.
     */
    export type $TrainCollisionPacket_ = { damage?: number, contraptionEntityId?: number,  } | [damage?: number, contraptionEntityId?: number, ];
    export class $AssemblyException extends $Exception {
        static structureTooLarge(): $AssemblyException;
        static tooManyPistonPoles(): $AssemblyException;
        static noPistonPoles(): $AssemblyException;
        static unloadedChunk(arg0: $BlockPos_): $AssemblyException;
        static notEnoughSails(arg0: number): $AssemblyException;
        static unmovableBlock(arg0: $BlockPos_, arg1: $BlockState_): $AssemblyException;
        static write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: $AssemblyException): void;
        static read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $AssemblyException;
        hasPosition(): boolean;
        getPosition(): $BlockPos;
        component: $Component;
        constructor(arg0: string, ...arg1: $Object[]);
        constructor(arg0: $Component_);
        get position(): $BlockPos;
    }
    export class $IControlContraption$RotationMode extends $Enum<$IControlContraption$RotationMode> implements $INamedIconOptions {
        getTranslationKey(): string;
        static values(): $IControlContraption$RotationMode[];
        static valueOf(arg0: string): $IControlContraption$RotationMode;
        getIcon(): $AllIcons;
        static ROTATE_PLACE: $IControlContraption$RotationMode;
        static ROTATE_PLACE_RETURNED: $IControlContraption$RotationMode;
        static ROTATE_NEVER_PLACE: $IControlContraption$RotationMode;
        get translationKey(): string;
        get icon(): $AllIcons;
    }
    /**
     * Values that may be interpreted as {@link $IControlContraption$RotationMode}.
     */
    export type $IControlContraption$RotationMode_ = "rotate_place" | "rotate_place_returned" | "rotate_never_place";
    export class $MountedStorageManager implements $IFuelInventory, $MountedStorageAccessor {
        getAllItemStorages(): $ImmutableMap<$BlockPos, $MountedItemStorage>;
        addBlock(arg0: $Level_, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockPos_, arg4: $BlockEntity): void;
        handleSync(arg0: $MountedStorageSyncPacket_, arg1: $AbstractContraptionEntity): void;
        getAllItems(): $CombinedInvWrapper;
        getMountedItems(): $MountedItemStorageWrapper;
        handlePlayerStorageInteraction(arg0: $Contraption, arg1: $Player, arg2: $BlockPos_): boolean;
        railways$getFluidFuels(): $MountedFluidStorageWrapper;
        getFuelItems(): $MountedItemStorageWrapper;
        attachExternal(arg0: $IItemHandlerModifiable): void;
        getFluids(): $MountedFluidStorageWrapper;
        initialize(): void;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean, arg3: $Contraption): void;
        unmount(arg0: $Level_, arg1: $StructureTemplate$StructureBlockInfo_, arg2: $BlockPos_, arg3: $BlockEntity): void;
        tick(arg0: $AbstractContraptionEntity): void;
        getItemsBuilder(): $Map<$BlockPos, $MountedItemStorage>;
        constructor();
        get allItemStorages(): $ImmutableMap<$BlockPos, $MountedItemStorage>;
        get allItems(): $CombinedInvWrapper;
        get mountedItems(): $MountedItemStorageWrapper;
        get fuelItems(): $MountedItemStorageWrapper;
        get fluids(): $MountedFluidStorageWrapper;
        get itemsBuilder(): $Map<$BlockPos, $MountedItemStorage>;
    }
    export class $IControlContraption$MovementMode extends $Enum<$IControlContraption$MovementMode> implements $INamedIconOptions {
        getTranslationKey(): string;
        static values(): $IControlContraption$MovementMode[];
        static valueOf(arg0: string): $IControlContraption$MovementMode;
        getIcon(): $AllIcons;
        static MOVE_PLACE_RETURNED: $IControlContraption$MovementMode;
        static MOVE_NEVER_PLACE: $IControlContraption$MovementMode;
        static MOVE_PLACE: $IControlContraption$MovementMode;
        get translationKey(): string;
        get icon(): $AllIcons;
    }
    /**
     * Values that may be interpreted as {@link $IControlContraption$MovementMode}.
     */
    export type $IControlContraption$MovementMode_ = "move_place" | "move_place_returned" | "move_never_place";
    export class $ControlledContraptionEntity extends $AbstractContraptionEntity implements $ControlledContraptionEntityAccessor {
        getRotationAxis(): $Direction$Axis;
        getAngle(arg0: number): number;
        setRotationAxis(arg0: $Direction$Axis_): void;
        setAngle(arg0: number): void;
        static create(arg0: $Level_, arg1: $IControlContraption, arg2: $Contraption): $ControlledContraptionEntity;
        getControllerPos(): $BlockPos;
        invokeMakeStructureTransform(): $StructureTransform;
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
        staleTicks: number;
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
        collidingEntities: $Map<$Entity, $MutableInt>;
        static BASE_SAFE_FALL_DISTANCE: number;
        horizontalCollision: boolean;
        constructor(arg0: $EntityType_<never>, arg1: $Level_);
        get controllerPos(): $BlockPos;
    }
    export class $MountedStorageSyncPacket extends $Record implements $ClientboundPacketPayload {
        contraptionId(): number;
        items(): $Map<$BlockPos, $MountedItemStorage>;
        handle(arg0: $LocalPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        fluids(): $Map<$BlockPos, $MountedFluidStorage>;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MountedStorageSyncPacket>;
        constructor(contraptionId: number, items: $Map_<$BlockPos_, $MountedItemStorage>, fluids: $Map_<$BlockPos_, $MountedFluidStorage>);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $MountedStorageSyncPacket}.
     */
    export type $MountedStorageSyncPacket_ = { fluids?: $Map_<$BlockPos_, $MountedFluidStorage>, items?: $Map_<$BlockPos_, $MountedItemStorage>, contraptionId?: number,  } | [fluids?: $Map_<$BlockPos_, $MountedFluidStorage>, items?: $Map_<$BlockPos_, $MountedItemStorage>, contraptionId?: number, ];
    export class $ContraptionDisassemblyPacket extends $Record implements $ClientboundPacketPayload {
        transform(): $StructureTransform;
        handle(arg0: $LocalPlayer): void;
        entityId(): number;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ContraptionDisassemblyPacket>;
        constructor(entityId: number, transform: $StructureTransform);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $ContraptionDisassemblyPacket}.
     */
    export type $ContraptionDisassemblyPacket_ = { transform?: $StructureTransform, entityId?: number,  } | [transform?: $StructureTransform, entityId?: number, ];
    export class $ContraptionHandlerClient {
        static preventRemotePlayersWalkingAnimations(arg0: $PlayerTickEvent$Post): void;
        static rightClickingOnContraptionsGetsHandledLocally(arg0: $InputEvent$InteractionKeyMappingTriggered): void;
        static getRayInputs(arg0: $LocalPlayer): $Couple<$Vec3>;
        static rayTraceContraption(arg0: $Vec3_, arg1: $Vec3_, arg2: $AbstractContraptionEntity): $BlockHitResult;
        constructor();
    }
    export class $ContraptionHandler {
        static entitiesWhoJustDismountedGetSentToTheRightLocation(arg0: $LivingEntity, arg1: $Level_): void;
        static addSpawnedContraptionsToCollisionList(arg0: $Entity, arg1: $Level_): void;
        static tick(arg0: $Level_): void;
        static loadedContraptions: $WorldAttached<$Map<number, $WeakReference<$AbstractContraptionEntity>>>;
        constructor();
    }
}
