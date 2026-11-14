import { $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ClientContraption, $ContraptionVisual, $ContraptionEntityRenderer } from "@package/com/simibubi/create/content/contraptions/render";
import { $EntityType_, $Entity$RemovalReason, $LivingEntity, $PortalProcessor, $Entity } from "@package/net/minecraft/world/entity";
import { $TrackEdgePoint } from "@package/com/simibubi/create/content/trains/signal";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $Frustum } from "@package/net/minecraft/client/renderer/culling";
import { $AccessorCarriageBogey, $AccessorTrain$AccessorPenalties, $AccessorTrainRelocator, $AccessorCarriage, $AccessorTrain, $AccessorCarriageContraptionEntity, $AccessorNavigation } from "@package/com/railwayteam/railways/mixin";
import { $InputEvent$InteractionKeyMappingTriggered } from "@package/net/neoforged/neoforge/client/event";
import { $WeakReference } from "@package/java/lang/ref";
import { $SuperByteBufferCache$Compartment } from "@package/net/createmod/catnip/render";
import { $AbstractContraptionEntity, $Contraption, $OrientedContraptionEntity, $MountedStorageManager } from "@package/com/simibubi/create/content/contraptions";
import { $DimensionPalette, $TrackNode, $TrackNodeLocation, $TrackEdge, $TrackGraph, $DiscoveredPath, $TrackGraphLocation } from "@package/com/simibubi/create/content/trains/graph";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $AbstractTickableSoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";
import { $TrainCargoManager } from "@package/com/simibubi/create/content/contraptions/minecart";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $StructureTemplate$StructureBlockInfo_ } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BogeySizes$BogeySize, $BogeyStyle, $AbstractBogeyBlock } from "@package/com/simibubi/create/content/trains/bogey";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $DynamicVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $EntityEvent$EnteringSection } from "@package/net/neoforged/neoforge/event/entity";
import { $MutableInt } from "@package/org/apache/commons/lang3/mutable";
import { $Vec3, $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BasePacketPayload$PacketTypeProvider, $ServerboundPacketPayload, $ClientboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $IShadowTrain, $IWaypointableNavigation, $IHandcarTrain, $ICarriageConductors, $ICrashAdvancement, $IUpdateCount, $IStrictSignalTrain, $IOccupiedCouplers, $IBufferBlockCheckableNavigation, $IIndexedSchedule, $IDistanceTravelled, $IBufferBlockedTrain, $ICarriageBufferDistanceTracker, $IGenerallySearchableNavigation, $IGenerallySearchableNavigation$PointTest_ } from "@package/com/railwayteam/railways/mixin_interfaces";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $BezierTrackPointLocation_, $BezierTrackPointLocation } from "@package/com/simibubi/create/content/trains/track";
import { $ScheduleRuntime } from "@package/com/simibubi/create/content/trains/schedule";
import { $UUID_, $ArrayList, $Map, $Map$Entry, $Set, $UUID, $List, $Map_, $List_, $BitSet } from "@package/java/util";
import { $ServerboundCustomPayloadPacket, $ClientboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $GlobalStation } from "@package/com/simibubi/create/content/trains/station";
import { $Consumer_, $BiFunction, $Predicate, $BiConsumer, $BiConsumer_, $BiPredicate } from "@package/java/util/function";
import { $Object2BooleanMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $HolderLookup$Provider, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Enum, $Comparable, $Record, $Object } from "@package/java/lang";
import { $TrainChunkLoader, $CPLTrain } from "@package/com/hlysine/create_power_loader/content/trains";
import { $Pair as $Pair$1, $Couple } from "@package/net/createmod/catnip/data";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $CollisionList } from "@package/com/simibubi/create/foundation/collision";
import { $EntityRenderDispatcher, $EntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/entity";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $EntityDataAccessor, $EntityDataSerializer } from "@package/net/minecraft/network/syncher";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/trains/entity" {
    export class $CarriageContraptionEntity extends $OrientedContraptionEntity implements $AccessorCarriageContraptionEntity, $IUpdateCount, $IDistanceTravelled {
        hasSchedule(): boolean;
        getCarriage(): $Carriage;
        syncCarriage(): void;
        getCarriageData(): $CarriageSyncData;
        setServerSidePrevPosition(): void;
        isLocalCoordWithin(arg0: $BlockPos_, arg1: number, arg2: number): boolean;
        checkConductors(): $Couple<boolean>;
        setCarriage(arg0: $Carriage): void;
        updateRenderedPortalCutoff(): void;
        railways$getUpdateCount(): number;
        railways$fromParent(arg0: $IUpdateCount): void;
        railways$markUpdate(): void;
        railways$getDistanceTravelled(): number;
        static create(arg0: $Level_, arg1: $CarriageContraption): $CarriageContraptionEntity;
        railways$getCarriage(): $Carriage;
        railways$setCarriage(arg0: $Carriage): void;
        railways$bindCarriage(): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        carriageIndex: number;
        hasImpulse: boolean;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        pitch: number;
        particles: $CarriageParticles;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        trainId: $UUID;
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
        movingBackwards: boolean;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        leftTickingChunks: boolean;
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
        sounds: $CarriageSounds;
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
        firstPositionUpdate: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        collidingEntities: $Map<$Entity, $MutableInt>;
        static BASE_SAFE_FALL_DISTANCE: number;
        validForRender: boolean;
        nonDamageTicks: number;
        targetYaw: number;
        horizontalCollision: boolean;
        constructor(arg0: $EntityType_<never>, arg1: $Level_);
        get carriageData(): $CarriageSyncData;
    }
    export class $CarriageContraptionVisual extends $ContraptionVisual<$CarriageContraptionEntity> implements $IUpdateCount {
        railways$getUpdateCount(): number;
        railways$fromParent(arg0: $IUpdateCount): void;
        railways$markUpdate(): void;
        _delete(): void;
        beginFrame(arg0: $DynamicVisual$Context): void;
        static MAX_NUM_BOGEYS: number;
        constructor(arg0: $VisualizationContext, arg1: $CarriageContraptionEntity, arg2: number);
    }
    export class $Navigation$StationTest {
    }
    export interface $Navigation$StationTest {
        test(arg0: number, arg1: number, arg2: $Map_<$TrackEdge, $Pair$1<boolean, $Couple<$TrackNode>>>, arg3: $Pair$1<$Couple<$TrackNode>, $TrackEdge>, arg4: $GlobalStation): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Navigation$StationTest}.
     */
    export type $Navigation$StationTest_ = ((arg0: number, arg1: number, arg2: $Map<$TrackEdge, $Pair$1<boolean, $Couple<$TrackNode>>>, arg3: $Pair$1<$Couple<$TrackNode>, $TrackEdge>, arg4: $GlobalStation) => boolean);
    export class $CarriageEntityHandler {
        static onEntityEnterSection(arg0: $EntityEvent$EnteringSection): void;
        static isActiveChunk(arg0: $Level_, arg1: $BlockPos_): boolean;
        static validateCarriageEntity(arg0: $CarriageContraptionEntity): void;
        constructor();
    }
    export class $CarriageCouplingRenderer {
        static renderAll(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: $Vec3_): void;
        static getPackedLightCoords(arg0: $Entity, arg1: number): number;
        constructor();
    }
    export class $CarriageSyncDataSerializer implements $EntityDataSerializer<$CarriageSyncData> {
        copy(arg0: $CarriageSyncData): $CarriageSyncData;
        codec(): $StreamCodec<$RegistryFriendlyByteBuf, $CarriageSyncData>;
        createAccessor(arg0: number): $EntityDataAccessor<$CarriageSyncData>;
        constructor();
    }
    export class $TrainPromptPacket extends $Record implements $ClientboundPacketPayload {
        handle(arg0: $LocalPlayer): void;
        text(): $Component;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        shadow(): boolean;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $TrainPromptPacket>;
        constructor(text: $Component_, shadow: boolean);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $TrainPromptPacket}.
     */
    export type $TrainPromptPacket_ = { shadow?: boolean, text?: $Component_,  } | [shadow?: boolean, text?: $Component_, ];
    export class $Carriage$DimensionalCarriageEntity {
        alignEntity(arg0: $CarriageContraptionEntity): void;
        updateRenderedCutoff(): void;
        leadingAnchor(): $Vec3;
        trailingAnchor(): $Vec3;
        discardPivot(): void;
        minAllowedLocalCoord(): number;
        maxAllowedLocalCoord(): number;
        updateCutoff(arg0: boolean): void;
        updatePassengerLoadout(): void;
        findPivot(arg0: $ResourceKey_<$Level>, arg1: boolean): $TrackNodeLocation;
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        pointsInitialised: boolean;
        pivot: $TrackNodeLocation;
        rotationAnchors: $Couple<$Vec3>;
        cutoff: number;
        positionAnchor: $Vec3;
        entity: $WeakReference<$CarriageContraptionEntity>;
        constructor(arg0: $Carriage);
    }
    export class $TrainRelocationPacket extends $Record implements $ServerboundPacketPayload {
        trainId(): $UUID;
        hoveredBezier(): $BezierTrackPointLocation;
        lookAngle(): $Vec3;
        pos(): $BlockPos;
        handle(arg0: $ServerPlayer): void;
        direction(): boolean;
        entityId(): number;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $TrainRelocationPacket>;
        constructor(trainId: $UUID_, pos: $BlockPos_, lookAngle: $Vec3_, entityId: number, direction: boolean, hoveredBezier: $BezierTrackPointLocation_);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $TrainRelocationPacket}.
     */
    export type $TrainRelocationPacket_ = { trainId?: $UUID_, direction?: boolean, hoveredBezier?: $BezierTrackPointLocation_, pos?: $BlockPos_, entityId?: number, lookAngle?: $Vec3_,  } | [trainId?: $UUID_, direction?: boolean, hoveredBezier?: $BezierTrackPointLocation_, pos?: $BlockPos_, entityId?: number, lookAngle?: $Vec3_, ];
    export class $TrainIconType {
        getIconOffset(arg0: number): number;
        static getDefault(): $TrainIconType;
        static register(arg0: $ResourceLocation_, arg1: $ResourceLocation_, arg2: number, arg3: number): void;
        getId(): $ResourceLocation;
        render(arg0: number, arg1: $GuiGraphics, arg2: number, arg3: number): number;
        static byId(arg0: $ResourceLocation_): $TrainIconType;
        getIconWidth(arg0: number): number;
        static FLIPPED_ENGINE: number;
        static ENGINE: number;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $TrainIconType>;
        static REGISTRY: $Map<$ResourceLocation, $TrainIconType>;
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_, arg2: number, arg3: number);
        static get default(): $TrainIconType;
        get id(): $ResourceLocation;
    }
    export class $TrainStatus {
        displayInformation(arg0: string, arg1: boolean, ...arg2: $Object[]): void;
        manualControls(): void;
        foundConductor(): void;
        missingConductor(): void;
        failedNavigation(): void;
        failedNavigationNoTarget(arg0: string): void;
        failedMigration(): void;
        successfulMigration(): void;
        endOfTrack(): void;
        highStress(): void;
        trackOK(): void;
        doublePortal(): void;
        failedPackageNoTarget(arg0: string): void;
        newSchedule(): void;
        successfulNavigation(): void;
        missingCorrectConductor(): void;
        tick(arg0: $Level_): void;
        crash(): void;
        addMessage(arg0: $TrainStatus$StatusMessage_): void;
        navigation: boolean;
        track: boolean;
        conductor: boolean;
        constructor(arg0: $Train);
    }
    export class $Carriage implements $AccessorCarriage, $ICarriageConductors, $ICarriageBufferDistanceTracker {
        anyAvailableEntity(): $CarriageContraptionEntity;
        forEachPresentEntity(arg0: $Consumer_<$CarriageContraptionEntity>): void;
        getDimensional(arg0: $ResourceKey_<$Level>): $Carriage$DimensionalCarriageEntity;
        getDimensional(arg0: $Level_): $Carriage$DimensionalCarriageEntity;
        updateContraptionAnchors(): void;
        alignEntity(arg0: $Level_): void;
        isOnTwoBogeys(): boolean;
        railways$getLeadingDistance(): number;
        railways$getTrailingDistance(): number;
        railways$setLeadingDistance(arg0: number): void;
        railways$setTrailingDistance(arg0: number): void;
        railways$getControllingConductors(): $List<any>;
        updateConductors(): void;
        setContraption(arg0: $Level_, arg1: $CarriageContraption): void;
        presentInMultipleDimensions(): boolean;
        getDimensionalIfPresent(arg0: $ResourceKey_<$Level>): $Carriage$DimensionalCarriageEntity;
        getAnchorDiff(): number;
        anyAvailableDimensionalCarriage(): $Pair$1<$ResourceKey<$Level>, $Carriage$DimensionalCarriageEntity>;
        getPresentDimensions(): $List<$ResourceKey<$Level>>;
        getPositionInDimension(arg0: $ResourceKey_<$Level>): ($BlockPos) | undefined;
        manageEntities(arg0: $Level_): void;
        isOnIncompatibleTrack(): boolean;
        getLeadingPoint(): $TravellingPoint;
        getTrailingPoint(): $TravellingPoint;
        leadingBogey(): $CarriageBogey;
        trailingBogey(): $CarriageBogey;
        setTrain(arg0: $Train): void;
        write(arg0: $DimensionPalette, arg1: $HolderLookup$Provider): $CompoundTag;
        static read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: $TrackGraph, arg3: $DimensionPalette): $Carriage;
        travel(arg0: $Level_, arg1: $TrackGraph, arg2: number, arg3: $TravellingPoint, arg4: $TravellingPoint, arg5: number): number;
        getSerialisedPassengers(): $Map<number, $CompoundTag>;
        presentConductors: $Couple<boolean>;
        bogeys: $Couple<$CarriageBogey>;
        blocked: boolean;
        stalled: boolean;
        static netIdGenerator: $AtomicInteger;
        id: number;
        bogeySpacing: number;
        storage: $TrainCargoManager;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Carriage>;
        train: $Train;
        constructor(arg0: $CarriageBogey, arg1: $CarriageBogey, arg2: number);
        get onTwoBogeys(): boolean;
        get anchorDiff(): number;
        get presentDimensions(): $List<$ResourceKey<$Level>>;
        get onIncompatibleTrack(): boolean;
        get leadingPoint(): $TravellingPoint;
        get trailingPoint(): $TravellingPoint;
        get serialisedPassengers(): $Map<number, $CompoundTag>;
    }
    export class $AddTrainPacket extends $Record implements $ClientboundPacketPayload {
        handle(arg0: $LocalPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        train(): $Train;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AddTrainPacket>;
        constructor(train: $Train);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $AddTrainPacket}.
     */
    export type $AddTrainPacket_ = { train?: $Train,  } | [train?: $Train, ];
    export class $RemoveTrainPacket extends $Record implements $ClientboundPacketPayload {
        id(): $UUID;
        handle(arg0: $LocalPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $RemoveTrainPacket>;
        constructor(arg0: $Train);
        constructor(id: $UUID_);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $RemoveTrainPacket}.
     */
    export type $RemoveTrainPacket_ = { id?: $UUID_,  } | [id?: $UUID_, ];
    export class $Train$Penalties implements $AccessorTrain$AccessorPenalties {
        static getRedSignal$railways_$md$5c91d2$0(): number;
        static getRedstoneRedSignal$railways_$md$5c91d2$1(): number;
        static getStationWithTrain$railways_$md$5c91d2$2(): number;
        static getStation$railways_$md$5c91d2$3(): number;
        constructor();
        static get redSignal$railways_$md$5c91d2$0(): number;
        static get redstoneRedSignal$railways_$md$5c91d2$1(): number;
        static get stationWithTrain$railways_$md$5c91d2$2(): number;
        static get station$railways_$md$5c91d2$3(): number;
    }
    export class $CarriageParticles {
        tick(arg0: $Carriage$DimensionalCarriageEntity): void;
        constructor(arg0: $CarriageContraptionEntity);
    }
    export class $ArrivalSoundQueue {
        static play(arg0: $CarriageContraptionEntity, arg1: $StructureTemplate$StructureBlockInfo_): void;
        static isPlayable(arg0: $BlockState_): boolean;
        getFirstWhistle(arg0: $CarriageContraptionEntity): $Pair$1<boolean, number>;
        lastTick(): number;
        add(arg0: number, arg1: $BlockPos_): void;
        tick(arg0: $CarriageContraptionEntity, arg1: number, arg2: boolean): boolean;
        deserialize(arg0: $CompoundTag_): void;
        serialize(arg0: $CompoundTag_): void;
        firstTick(): number;
        offset: number;
        constructor();
    }
    export class $Navigation implements $AccessorNavigation, $IGenerallySearchableNavigation, $IBufferBlockCheckableNavigation, $IWaypointableNavigation {
        cancelNavigation(): void;
        findNearestApproachable(arg0: boolean): $GlobalStation;
        findPathTo(arg0: $GlobalStation, arg1: number): $DiscoveredPath;
        findPathTo(arg0: $ArrayList<$GlobalStation>, arg1: number): $DiscoveredPath;
        startNavigation(arg0: $DiscoveredPath): number;
        railways$findNearestApproachableSwitch(arg0: boolean): $Pair$1<any, any>;
        railways$updateControlsBlock(arg0: boolean): void;
        railways$isWaypointMode(): boolean;
        railways$searchGeneral(arg0: number, arg1: boolean, arg2: $IGenerallySearchableNavigation$PointTest_): void;
        railways$searchGeneral(arg0: number, arg1: number, arg2: boolean, arg3: $IGenerallySearchableNavigation$PointTest_): void;
        controlSignalScout(): $TravellingPoint$ITrackSelector;
        write(arg0: $DimensionPalette): $CompoundTag;
        read(arg0: $CompoundTag_, arg1: $TrackGraph, arg2: $DimensionPalette): void;
        search(arg0: number, arg1: boolean, arg2: $ArrayList<$GlobalStation>, arg3: $Navigation$StationTest_): void;
        search(arg0: number, arg1: number, arg2: boolean, arg3: $ArrayList<$GlobalStation>, arg4: $Navigation$StationTest_): void;
        isActive(): boolean;
        tick(arg0: $Level_): void;
        control(arg0: $TravellingPoint): $TravellingPoint$ITrackSelector;
        getCurrentPath(): $List<$Couple<$TrackNode>>;
        distanceToDestination: number;
        destination: $GlobalStation;
        announceArrival: boolean;
        ticksWaitingForSignal: number;
        waitingForSignal: $Pair$1<$UUID, boolean>;
        distanceStartedAt: number;
        destinationBehindTrain: boolean;
        distanceToSignal: number;
        train: $Train;
        constructor(arg0: $Train);
        get active(): boolean;
        get currentPath(): $List<$Couple<$TrackNode>>;
    }
    export class $TravellingPoint$ITrackSelector {
    }
    export interface $TravellingPoint$ITrackSelector extends $BiFunction<$TrackGraph, $Pair$1<boolean, $List<$Map$Entry<$TrackNode, $TrackEdge>>>, $Map$Entry<$TrackNode, $TrackEdge>> {
    }
    /**
     * Values that may be interpreted as {@link $TravellingPoint$ITrackSelector}.
     */
    export type $TravellingPoint$ITrackSelector_ = (() => void);
    export class $TravellingPoint$SteerDirection extends $Enum<$TravellingPoint$SteerDirection> {
        static values(): $TravellingPoint$SteerDirection[];
        static valueOf(arg0: string): $TravellingPoint$SteerDirection;
        static LEFT: $TravellingPoint$SteerDirection;
        static RIGHT: $TravellingPoint$SteerDirection;
        static NONE: $TravellingPoint$SteerDirection;
    }
    /**
     * Values that may be interpreted as {@link $TravellingPoint$SteerDirection}.
     */
    export type $TravellingPoint$SteerDirection_ = "none" | "left" | "right";
    export class $CarriageSounds$LoopingSound extends $AbstractTickableSoundInstance {
    }
    export class $TrainMigration {
        tryMigratingTo(arg0: $TrackGraph): $TrackGraphLocation;
        write(arg0: $DimensionPalette): $CompoundTag;
        static read(arg0: $CompoundTag_, arg1: $DimensionPalette): $TrainMigration;
        constructor();
        constructor(arg0: $TravellingPoint);
    }
    export class $TrainStatus$StatusMessage extends $Record {
        displayToPlayer(arg0: $Player): void;
        messages(): $Component[];
        constructor(...messages: $Component_[]);
    }
    /**
     * Values that may be interpreted as {@link $TrainStatus$StatusMessage}.
     */
    export type $TrainStatus$StatusMessage_ = { messages?: $Component_[],  } | [messages?: $Component_[], ];
    export class $TravellingPoint$IEdgePointListener {
    }
    export interface $TravellingPoint$IEdgePointListener extends $BiPredicate<number, $Pair$1<$TrackEdgePoint, $Couple<$TrackNode>>> {
    }
    /**
     * Values that may be interpreted as {@link $TravellingPoint$IEdgePointListener}.
     */
    export type $TravellingPoint$IEdgePointListener_ = (() => void);
    export class $CarriageContraption extends $Contraption {
        getAssemblyDirection(): $Direction;
        inControl(arg0: $BlockPos_, arg1: $Direction_): boolean;
        notInPortal(): boolean;
        swapStorageAfterAssembly(arg0: $CarriageContraptionEntity): void;
        atSeam(arg0: $BlockPos_): boolean;
        atSeam(arg0: number): boolean;
        isHiddenInPortal(arg0: number): boolean;
        withinVisible(arg0: number): boolean;
        withinVisible(arg0: $BlockPos_): boolean;
        setSoundQueueOffset(arg0: number): void;
        returnStorageForDisassembly(arg0: $MountedStorageManager): void;
        hasForwardControls(): boolean;
        hasBackwardControls(): boolean;
        getSecondBogeyPos(): $BlockPos;
        hasUniversalCreativeCrate: boolean;
        isLegacy: $Object2BooleanMap<$BlockPos>;
        conductorSeats: $Map<$BlockPos, $Couple<boolean>>;
        portalCutoffMax: number;
        simplifiedEntityColliders: $CollisionList;
        soundQueue: $ArrivalSoundQueue;
        blockConductors: $Couple<boolean>;
        anchor: $BlockPos;
        stalled: boolean;
        bounds: $AABB;
        portalCutoffMin: number;
        disassembled: boolean;
        entity: $AbstractContraptionEntity;
        constructor(arg0: $Direction_);
        constructor();
        get assemblyDirection(): $Direction;
        set soundQueueOffset(value: number);
        get secondBogeyPos(): $BlockPos;
    }
    export class $CarriageBogey implements $AccessorCarriageBogey {
        updateAngles(arg0: $CarriageContraptionEntity, arg1: number): void;
        getAnchorPosition(arg0: boolean): $Vec3;
        getAnchorPosition(): $Vec3;
        updateCouplingAnchor(arg0: $Vec3_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): void;
        getStress(): number;
        isUpsideDown(): boolean;
        getDimension(): $ResourceKey<$Level>;
        trailing(): $TravellingPoint;
        write(arg0: $DimensionPalette): $CompoundTag;
        static read(arg0: $CompoundTag_, arg1: $TrackGraph, arg2: $DimensionPalette): $CarriageBogey;
        getSize(): $BogeySizes$BogeySize;
        leading(): $TravellingPoint;
        getStyle(): $BogeyStyle;
        getType(): $AbstractBogeyBlock<never>;
        bogeyData: $CompoundTag;
        carriage: $Carriage;
        static UPSIDE_DOWN_KEY: string;
        couplingAnchors: $Couple<$Vec3>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $CarriageBogey>;
        constructor(arg0: $AbstractBogeyBlock<never>, arg1: boolean, arg2: $CompoundTag_, arg3: $TravellingPoint, arg4: $TravellingPoint);
        constructor(arg0: $AbstractBogeyBlock<never>, arg1: boolean, arg2: $CompoundTag_);
        get stress(): number;
        get upsideDown(): boolean;
        get dimension(): $ResourceKey<$Level>;
        get size(): $BogeySizes$BogeySize;
        get style(): $BogeyStyle;
        get type(): $AbstractBogeyBlock<never>;
    }
    export class $CarriageContraption$CarriageClientContraption extends $ClientContraption {
        shouldRenderBlockEntities: $BitSet;
        renderedBlockEntityView: $List<$BlockEntity>;
        scratchBlockEntitiesOutsidePortal: $BitSet;
        scratchErroredBlockEntities: $BitSet;
        constructor(arg0: $CarriageContraption, arg1: $CarriageContraption);
    }
    export class $TrainRelocator implements $AccessorTrainRelocator {
        static visualise(arg0: $Train, arg1: number, arg2: $Vec3_, arg3: $Vec3_, arg4: boolean): void;
        static setRelocatingTrain$railways_$md$5c91d2$0(arg0: $UUID_): void;
        static setRelocatingOrigin$railways_$md$5c91d2$1(arg0: $BlockPos_): void;
        static setRelocatingEntityId$railways_$md$5c91d2$2(arg0: number): void;
        static isRelocating(): boolean;
        static relocateClient(arg0: $Train, arg1: boolean): boolean;
        static addToTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        static relocate(arg0: $Train, arg1: $Level_, arg2: $BlockPos_, arg3: $BezierTrackPointLocation_, arg4: boolean, arg5: $Vec3_, arg6: boolean): boolean;
        static carriageWrenched(arg0: $Vec3_, arg1: $CarriageContraptionEntity): boolean;
        static onClicked(arg0: $InputEvent$InteractionKeyMappingTriggered): void;
        static clientTick(): void;
        constructor();
        static set relocatingTrain$railways_$md$5c91d2$0(value: $UUID_);
        static set relocatingOrigin$railways_$md$5c91d2$1(value: $BlockPos_);
        static set relocatingEntityId$railways_$md$5c91d2$2(value: number);
        static get relocating(): boolean;
    }
    export class $TravellingPoint$IPortalListener {
    }
    export interface $TravellingPoint$IPortalListener extends $Predicate<$Couple<$TrackNodeLocation>> {
    }
    /**
     * Values that may be interpreted as {@link $TravellingPoint$IPortalListener}.
     */
    export type $TravellingPoint$IPortalListener_ = (() => void);
    export class $CarriageSyncData {
        setDirty(arg0: boolean): void;
        getDistanceTo(arg0: $TrackGraph, arg1: $TravellingPoint, arg2: $TravellingPoint, arg3: number, arg4: boolean): number;
        update(arg0: $CarriageContraptionEntity, arg1: $Carriage): void;
        apply(arg0: $CarriageContraptionEntity, arg1: $Carriage): void;
        write(arg0: $FriendlyByteBuf): void;
        read(arg0: $FriendlyByteBuf): void;
        copy(): $CarriageSyncData;
        isDirty(): boolean;
        approach(arg0: $CarriageContraptionEntity, arg1: $Carriage, arg2: number): void;
        distanceToDestination: number;
        leadingCarriage: boolean;
        wheelLocations: $List<$Pair$1<$Couple<number>, number>>;
        fallbackLocations: $Pair$1<$Vec3, $Couple<$Vec3>>;
        constructor();
        constructor(arg0: $FriendlyByteBuf);
    }
    export class $Train implements $AccessorTrain, $IStrictSignalTrain, $IIndexedSchedule, $IBufferBlockedTrain, $ICrashAdvancement, $IShadowTrain, $IHandcarTrain, $IOccupiedCouplers, $CPLTrain {
        railways$setIndex(arg0: number): void;
        shouldCarriageSyncThisTick(arg0: number, arg1: number): boolean;
        burnFuel(): void;
        maxTurnSpeed(): number;
        approachTargetSpeed(arg0: number): void;
        railways$isHandcar(): boolean;
        railways$isControlBlocked(): boolean;
        railways$getBlockedSign(): number;
        hasForwardConductor(): boolean;
        hasBackwardConductor(): boolean;
        setLoader(arg0: $TrainChunkLoader): void;
        earlyTick(arg0: $Level_): void;
        railways$getShadowKey(): $ResourceLocation;
        maxSpeed(): number;
        acceleration(): number;
        disassemble(arg0: $Direction_, arg1: $BlockPos_): boolean;
        cancelStall(): void;
        canDisassemble(): boolean;
        setCurrentStation(arg0: $GlobalStation): void;
        frontSignalListener(): $TravellingPoint$IEdgePointListener;
        backSignalListener(): $TravellingPoint$IEdgePointListener;
        findCollidingTrain(arg0: $Level_, arg1: $Vec3_, arg2: $Vec3_, arg3: $ResourceKey_<$Level>): $Pair$1<$Train, $Vec3>;
        isTravellingOn(arg0: $TrackNode): boolean;
        forEachTravellingPoint(arg0: $Consumer_<$TravellingPoint>): void;
        detachFromTracks(): void;
        forEachTravellingPointBackwards(arg0: $BiConsumer_<$TravellingPoint, number>): void;
        leaveStation(): void;
        arriveAt(arg0: $GlobalStation): void;
        getEndpointEdges(): $Couple<$Couple<$TrackNode>>;
        getNavigationPenalty(): number;
        handler$bii000$railways$maxSpeed(arg0: $CallbackInfoReturnable<any>): void;
        handler$bii000$railways$maxTurnSpeed(arg0: $CallbackInfoReturnable<any>): void;
        handler$bii000$railways$acceleration(arg0: $CallbackInfoReturnable<any>): void;
        reattachToTracks(arg0: $Level_): void;
        distanceToLocationSqr(arg0: $Level_, arg1: $Vec3_): number;
        getPresentDimensions(): $List<$ResourceKey<$Level>>;
        getPositionInDimension(arg0: $ResourceKey_<$Level>): ($BlockPos) | undefined;
        railways$setControlBlocked(arg0: boolean, arg1: boolean): void;
        railways$setStrictSignals(arg0: boolean): void;
        railways$getIndex(): number;
        railways$setShadow(arg0: $ResourceLocation_): void;
        railways$clearShadow(): void;
        railways$awardCrashAdvancements(): void;
        getCurrentStation(): $GlobalStation;
        railways$setHandcar(arg0: boolean): void;
        collectInitiallyOccupiedSignalBlocks(): void;
        railways$getOccupiedCouplers(): $Set<any>;
        determineHonk(arg0: $Level_): void;
        write(arg0: $DimensionPalette, arg1: $HolderLookup$Provider): $CompoundTag;
        static read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: $Map_<$UUID_, $TrackGraph>, arg3: $DimensionPalette): $Train;
        getOwner(arg0: $Level_): $LivingEntity;
        getLoader(): $TrainChunkLoader;
        tick(arg0: $Level_): void;
        crash(): void;
        getTotalLength(): number;
        countPlayerPassengers(): number;
        railways$isShadow(): boolean;
        railways$setStress(arg0: number[]): void;
        railways$getStress(): number[];
        throttle: number;
        lowHonk: boolean;
        speedBeforeStall: number;
        icon: $TrainIconType;
        doubleEnded: boolean;
        backwardsDriver: $Player;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Train>;
        speed: number;
        manualTick: boolean;
        currentlyBackwards: boolean;
        honkPitch: number;
        railways$occupiedCouplers: $Set<any>;
        navigation: $Navigation;
        carriages: $List<$Carriage>;
        currentStation: $UUID;
        honkTicks: number;
        id: $UUID;
        owner: $UUID;
        targetSpeed: number;
        occupiedSignalBlocks: $Map<$UUID, $UUID>;
        carriageWaitingForChunks: number;
        accumulatedSteamRelease: number;
        reservedSignalBlocks: $Set<$UUID>;
        updateSignalBlocks: boolean;
        migrationCooldown: number;
        runtime: $ScheduleRuntime;
        occupiedObservers: $Set<$UUID>;
        derailed: boolean;
        carriageSpacing: $List<number>;
        graph: $TrackGraph;
        cachedObserverFiltering: $Map<$UUID, $Pair$1<number, boolean>>;
        cpl$chunkLoader: $TrainChunkLoader;
        honk: boolean;
        mapColorIndex: number;
        name: $Component;
        invalid: boolean;
        status: $TrainStatus;
        manualSteer: $TravellingPoint$SteerDirection;
        fuelTicks: number;
        constructor(arg0: $UUID_, arg1: $UUID_, arg2: $TrackGraph, arg3: $List_<$Carriage>, arg4: $List_<number>, arg5: boolean, arg6: $Component_, arg7: $TrainIconType, arg8: number);
        constructor(arg0: $UUID_, arg1: $UUID_, arg2: $TrackGraph, arg3: $List_<$Carriage>, arg4: $List_<number>, arg5: boolean, arg6: number);
        get endpointEdges(): $Couple<$Couple<$TrackNode>>;
        get navigationPenalty(): number;
        get presentDimensions(): $List<$ResourceKey<$Level>>;
        get totalLength(): number;
    }
    export class $Navigation$FrontierEntry implements $Comparable<$Navigation$FrontierEntry> {
    }
    export class $CarriageSounds {
        submitSharedSoundVolume(arg0: $Vec3_, arg1: number): void;
        finalizeSharedVolume(arg0: number): void;
        stop(): void;
        tick(arg0: $Carriage$DimensionalCarriageEntity): void;
        constructor(arg0: $CarriageContraptionEntity);
    }
    export class $CarriageContraptionEntityRenderer extends $ContraptionEntityRenderer<$CarriageContraptionEntity> {
        static translateBogey(arg0: $PoseStack, arg1: $CarriageBogey, arg2: number, arg3: number, arg4: number, arg5: number): void;
        static getBogeyLightCoords(arg0: $CarriageContraptionEntity, arg1: $CarriageBogey, arg2: number): number;
        render(arg0: $CarriageContraptionEntity, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shouldRender(arg0: $CarriageContraptionEntity, arg1: $Frustum, arg2: number, arg3: number, arg4: number): boolean;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        static CONTRAPTION: $SuperByteBufferCache$Compartment<$Pair<$Contraption, $RenderType>>;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $TravellingPoint$ITurnListener {
    }
    export interface $TravellingPoint$ITurnListener extends $BiConsumer<number, $TrackEdge> {
    }
    /**
     * Values that may be interpreted as {@link $TravellingPoint$ITurnListener}.
     */
    export type $TravellingPoint$ITurnListener_ = (() => void);
    export class $TravellingPoint {
        steer(arg0: $TravellingPoint$SteerDirection_, arg1: $Vec3_): $TravellingPoint$ITrackSelector;
        ignoreEdgePoints(): $TravellingPoint$IEdgePointListener;
        ignoreTurns(): $TravellingPoint$ITurnListener;
        ignorePortals(): $TravellingPoint$IPortalListener;
        getPositionWithOffset(arg0: $TrackGraph, arg1: number, arg2: boolean): $Vec3;
        migrateTo(arg0: $List_<$TrackGraphLocation>): void;
        reverse(arg0: $TrackGraph): void;
        write(arg0: $DimensionPalette): $CompoundTag;
        static read(arg0: $CompoundTag_, arg1: $TrackGraph, arg2: $DimensionPalette): $TravellingPoint;
        random(): $TravellingPoint$ITrackSelector;
        follow(arg0: $TravellingPoint, arg1: $Consumer_<boolean>): $TravellingPoint$ITrackSelector;
        follow(arg0: $TravellingPoint): $TravellingPoint$ITrackSelector;
        travel(arg0: $TrackGraph, arg1: number, arg2: $TravellingPoint$ITrackSelector_): number;
        travel(arg0: $TrackGraph, arg1: number, arg2: $TravellingPoint$ITrackSelector_, arg3: $TravellingPoint$IEdgePointListener_, arg4: $TravellingPoint$ITurnListener_, arg5: $TravellingPoint$IPortalListener_): number;
        travel(arg0: $TrackGraph, arg1: number, arg2: $TravellingPoint$ITrackSelector_, arg3: $TravellingPoint$IEdgePointListener_, arg4: $TravellingPoint$ITurnListener_): number;
        travel(arg0: $TrackGraph, arg1: number, arg2: $TravellingPoint$ITrackSelector_, arg3: $TravellingPoint$IEdgePointListener_): number;
        getPosition(arg0: $TrackGraph): $Vec3;
        getPosition(arg0: $TrackGraph, arg1: boolean): $Vec3;
        node2: $TrackNode;
        edge: $TrackEdge;
        blocked: boolean;
        position: number;
        node1: $TrackNode;
        upsideDown: boolean;
        constructor(arg0: $TrackNode, arg1: $TrackNode, arg2: $TrackEdge, arg3: number, arg4: boolean);
        constructor();
    }
}
