import { $MapCodec } from "@package/com/mojang/serialization";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $RenderHighlightEvent$Block } from "@package/net/neoforged/neoforge/client/event";
import { $WeakReference } from "@package/java/lang/ref";
import { $SuperByteBufferCache$Compartment } from "@package/net/createmod/catnip/render";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $Clearable, $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $BlockState_, $BlockState, $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $BlockSubLevelAssemblyListener } from "@package/dev/ryanhcode/sable/api/block";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockEntityConfigurationPacket } from "@package/com/simibubi/create/foundation/networking";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $SimpleDynamicVisual, $SimpleTickableVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $DynamicVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $MutableInt } from "@package/org/apache/commons/lang3/mutable";
import { $FrogportBlockEntity } from "@package/com/simibubi/create/content/logistics/packagePort/frogport";
import { $TransformableBlockEntity } from "@package/com/simibubi/create/api/contraption/transformable";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BasePacketPayload$PacketTypeProvider, $ClientboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $UUID_, $Map, $Map$Entry, $Set, $UUID, $List, $Collection_, $Collection } from "@package/java/util";
import { $ServerboundCustomPayloadPacket, $ClientboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $PlayerInteractEvent$RightClickBlock } from "@package/net/neoforged/neoforge/event/entity/player";
import { $Consumer_, $Function_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Object2IntMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos, $BlockPos_, $HolderLookup$Provider, $Position, $IdMapper } from "@package/net/minecraft/core";
import { $SingleAxisRotatingVisual, $KineticBlockEntityRenderer, $KineticBlockEntity, $KineticBlock } from "@package/com/simibubi/create/content/kinetics/base";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IHaveBigOutline, $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Record, $Class } from "@package/java/lang";
import { $WorldAttached } from "@package/net/createmod/catnip/data";
import { $LevelAccessor, $BlockGetter, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $Cache } from "@package/com/google/common/cache";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $BlockEntityType_, $BlockEntity, $BlockEntityTicker, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $ChainConveyorShapeAccessor } from "@package/dev/ryanhcode/sable/neoforge/mixin/compatibility/create/frogports";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/kinetics/chainConveyor" {
    export class $ChainPackageInteractionPacket extends $BlockEntityConfigurationPacket<$ChainConveyorBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ChainPackageInteractionPacket>;
        constructor(arg0: $BlockPos_, arg1: $BlockPos_, arg2: number, arg3: boolean);
    }
    export class $ChainPackageInteractionHandler {
        static onUse(): boolean;
        constructor();
    }
    export class $ChainConveyorShape implements $ChainConveyorShapeAccessor {
        getVec(arg0: $BlockPos_, arg1: number): $Vec3;
        getChainPosition(arg0: $Vec3_): number;
        intersect(arg0: $Vec3_, arg1: $Vec3_): $Vec3;
        invokeDrawOutline(arg0: $BlockPos_, arg1: $PoseStack, arg2: $VertexConsumer): void;
        constructor();
    }
    export class $ChainConveyorBlock extends $KineticBlock implements $IBE<$ChainConveyorBlockEntity>, $IHaveBigOutline, $BlockSubLevelAssemblyListener {
        getInteractionShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): $VoxelShape;
        beforeMove(arg0: $ServerLevel, arg1: $ServerLevel, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockPos_): void;
        afterMove(arg0: $ServerLevel, arg1: $ServerLevel, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockPos_): void;
        getBlockEntityType(): $BlockEntityType<$ChainConveyorBlockEntity>;
        getBlockEntityClass(): $Class<$ChainConveyorBlockEntity>;
        getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        getCollisionShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$ChainConveyorBlockEntity, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$ChainConveyorBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$ChainConveyorBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($ChainConveyorBlockEntity) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $ChainConveyorBlockEntity;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
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
        get blockEntityType(): $BlockEntityType<$ChainConveyorBlockEntity>;
        get blockEntityClass(): $Class<$ChainConveyorBlockEntity>;
    }
    export class $ChainConveyorPackage {
        physicsData(arg0: $LevelAccessor): $ChainConveyorPackage$ChainConveyorPackagePhysicsData;
        writeToClient(arg0: $HolderLookup$Provider): $CompoundTag;
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        static read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $ChainConveyorPackage;
        worldPosition: $Vec3;
        item: $ItemStack;
        justFlipped: boolean;
        netId: number;
        static physicsDataCache: $WorldAttached<$Cache<number, $ChainConveyorPackage$ChainConveyorPackagePhysicsData>>;
        chainPosition: number;
        static netIdGenerator: $AtomicInteger;
        yaw: number;
        constructor(arg0: number, arg1: $ItemStack_, arg2: number);
        constructor(arg0: number, arg1: $ItemStack_);
    }
    export class $ChainConveyorVisual extends $SingleAxisRotatingVisual<$ChainConveyorBlockEntity> implements $SimpleDynamicVisual, $SimpleTickableVisual {
        beginFrame(arg0: $DynamicVisual$Context): void;
        planFrame(): $Plan<$DynamicVisual$Context>;
        static rainbowMode: boolean;
        constructor(arg0: $VisualizationContext, arg1: $ChainConveyorBlockEntity, arg2: number);
    }
    export class $ChainConveyorConnectionPacket extends $BlockEntityConfigurationPacket<$ChainConveyorBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ChainConveyorConnectionPacket>;
        constructor(arg0: $BlockPos_, arg1: $BlockPos_, arg2: $ItemStack_, arg3: boolean);
    }
    export class $ServerChainConveyorHandler {
        static handleStopRidingPacket(arg0: $Player): void;
        static handleTTLPacket(arg0: $Player): void;
        static sync(): void;
        static tick(): void;
        static ticks: number;
        static hangingPlayers: $Object2IntMap<$UUID>;
        constructor();
    }
    export class $ChainConveyorRenderer extends $KineticBlockEntityRenderer<$ChainConveyorBlockEntity> {
        static renderChain(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        redirect$gfp000$sable$fixMipDistance(arg0: $Vec3_, arg1: $Position, arg2: number): boolean;
        shouldRenderOffScreen(arg0: $ChainConveyorBlockEntity): boolean;
        static CHAIN_LOCATION: $ResourceLocation;
        static MIP_DISTANCE: number;
        static KINETIC_BLOCK: $SuperByteBufferCache$Compartment<$BlockState>;
        static rainbowMode: boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $ServerboundChainConveyorRidingPacket extends $BlockEntityConfigurationPacket<$ChainConveyorBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerboundChainConveyorRidingPacket>;
        constructor(arg0: $BlockPos_, arg1: boolean);
    }
    export class $ChainConveyorRidingHandler {
        static embark(arg0: $BlockPos_, arg1: number, arg2: $BlockPos_): void;
        static clientTick(): void;
        static ridingConnection: $BlockPos;
        static flipped: boolean;
        static ridingChainConveyor: $BlockPos;
        static chainPosition: number;
        static catchingUp: number;
        constructor();
    }
    export class $ChainConveyorPackage$ChainConveyorPackagePhysicsData {
        shouldTick(): boolean;
        setBE(arg0: $ChainConveyorBlockEntity): void;
        targetPos: $Vec3;
        lastTick: number;
        flipped: boolean;
        motion: $Vec3;
        prevYaw: number;
        pos: $Vec3;
        prevTargetPos: $Vec3;
        prevPos: $Vec3;
        beReference: $WeakReference<$ChainConveyorBlockEntity>;
        yaw: number;
        modelKey: $ResourceLocation;
        constructor(arg0: $ChainConveyorPackage, arg1: $Vec3_);
        set BE(value: $ChainConveyorBlockEntity);
    }
    export class $ChainConveyorInteractionHandler {
        static drawCustomBlockSelection(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: $Vec3_): void;
        static hideVanillaBlockSelection(arg0: $RenderHighlightEvent$Block): void;
        static onUse(): boolean;
        static clientTick(): void;
        static selectedChainPosition: number;
        static selectedShape: $ChainConveyorShape;
        static selectedBakedPosition: $Vec3;
        static selectedConnection: $BlockPos;
        static loadedChains: $WorldAttached<$Cache<$BlockPos, $List<$ChainConveyorShape>>>;
        static selectedLift: $BlockPos;
        constructor();
    }
    export class $ChainConveyorBlockEntity$ConnectedPort extends $Record {
        chainPosition(): number;
        filter(): string;
        connection(): $BlockPos;
        constructor(chainPosition: number, connection: $BlockPos_, filter: string);
    }
    /**
     * Values that may be interpreted as {@link $ChainConveyorBlockEntity$ConnectedPort}.
     */
    export type $ChainConveyorBlockEntity$ConnectedPort_ = { chainPosition?: number, filter?: string, connection?: $BlockPos_,  } | [chainPosition?: number, filter?: string, connection?: $BlockPos_, ];
    export class $ChainConveyorRoutingTable {
        shouldAdvertise(): boolean;
        advertiseTo(arg0: $BlockPos_, arg1: $ChainConveyorRoutingTable): void;
        getExitFor(arg0: $ItemStack_): $BlockPos;
        receivePortInfo(arg0: string, arg1: $BlockPos_): void;
        createSummary(): $Collection<$Component>;
        tick(): void;
        static ENTRY_TIMEOUT: number;
        lastUpdate: number;
        static PORT_ENTRY_TIMEOUT: number;
        entriesByDistance: $List<$ChainConveyorRoutingTable$RoutingTableEntry>;
        changed: boolean;
        constructor();
    }
    export class $ChainConveyorRoutingTable$RoutingTableEntry extends $Record {
        nextConnection(): $BlockPos;
        endOfRoute(): boolean;
        copyForNeighbour(arg0: $BlockPos_): $ChainConveyorRoutingTable$RoutingTableEntry;
        port(): string;
        distance(): number;
        timeout(): $MutableInt;
        invalid(): boolean;
        tick(): void;
        constructor(port: string, distance: number, nextConnection: $BlockPos_, timeout: $MutableInt, endOfRoute: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ChainConveyorRoutingTable$RoutingTableEntry}.
     */
    export type $ChainConveyorRoutingTable$RoutingTableEntry_ = { endOfRoute?: boolean, nextConnection?: $BlockPos_, timeout?: $MutableInt, distance?: number, port?: string,  } | [endOfRoute?: boolean, nextConnection?: $BlockPos_, timeout?: $MutableInt, distance?: number, port?: string, ];
    export class $ChainConveyorShape$ChainConveyorOBB extends $ChainConveyorShape {
        drawOutline(arg0: $BlockPos_, arg1: $PoseStack, arg2: $VertexConsumer): void;
        constructor(arg0: $BlockPos_, arg1: $Vec3_, arg2: $Vec3_);
    }
    export class $ChainConveyorBlockEntity$ConnectionStats extends $Record {
        chainLength(): number;
        tangentAngle(): number;
        end(): $Vec3;
        start(): $Vec3;
        constructor(tangentAngle: number, chainLength: number, start: $Vec3_, end: $Vec3_);
    }
    /**
     * Values that may be interpreted as {@link $ChainConveyorBlockEntity$ConnectionStats}.
     */
    export type $ChainConveyorBlockEntity$ConnectionStats_ = { start?: $Vec3_, chainLength?: number, tangentAngle?: number, end?: $Vec3_,  } | [start?: $Vec3_, chainLength?: number, tangentAngle?: number, end?: $Vec3_, ];
    export class $ChainConveyorBlockEntity extends $KineticBlockEntity implements $TransformableBlockEntity, $Clearable {
        static getChainCost(arg0: $BlockPos_): number;
        clearContent(): void;
        notifyConnectedToValidate(): void;
        getLoopingPackages(): $List<$ChainConveyorPackage>;
        canAcceptMorePackages(): boolean;
        canAcceptPackagesFor(arg0: $BlockPos_): boolean;
        canAcceptMorePackagesFromOtherConveyor(): boolean;
        removeInvalidConnections(): void;
        prepareStats(): void;
        tickBoxVisuals(): void;
        updateBoxWorldPositions(): void;
        addTravellingPackage(arg0: $ChainConveyorPackage, arg1: $BlockPos_): boolean;
        wrapOperation$gbm000$sable$testSublevelDistance1$mixinextras$bridge$61(arg0: $ChainConveyorBlockEntity, arg1: $BlockPos_, arg2: $Operation_<any>, arg3: $LocalRef<any>, arg4: $LocalRef<any>): void;
        wrapAngle(arg0: number): number;
        addLoopingPackage(arg0: $ChainConveyorPackage): boolean;
        loopThresholdCrossed(arg0: number, arg1: number, arg2: number): boolean;
        handler$gak000$sable$dropInvalidPackages(arg0: $CallbackInfo, arg1: $BlockPos_): void;
        wrapOperation$gbm000$sable$testSublevelDistance$mixinextras$bridge$60(arg0: $FrogportBlockEntity, arg1: $Operation_<any>, arg2: $LocalRef<any>): boolean;
        getPackagePosition(arg0: number, arg1: $BlockPos_): $Vec3;
        addConnectionTo(arg0: $BlockPos_): boolean;
        chainDestroyed(arg0: $BlockPos_, arg1: boolean, arg2: boolean): void;
        forPointsAlongChains(arg0: $BlockPos_, arg1: number, arg2: $Consumer_<$Vec3>): boolean;
        removeConnectionTo(arg0: $BlockPos_): boolean;
        static getChainsFromInventory(arg0: $Player, arg1: $ItemStack_, arg2: number, arg3: boolean): boolean;
        getTravellingPackages(): $Map<$BlockPos, $List<$ChainConveyorPackage>>;
        wrapOperation$gbm000$sable$testSublevelDistance(arg0: $FrogportBlockEntity, arg1: $Operation_<any>, arg2: $ChainConveyorPackage): boolean;
        wrapOperation$gbm000$sable$testSublevelDistance1(arg0: $ChainConveyorBlockEntity, arg1: $BlockPos_, arg2: $Operation_<any>, arg3: $Map$Entry<any, any>, arg4: $ChainConveyorPackage): void;
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
        loopPorts: $Map<$BlockPos, $ChainConveyorBlockEntity$ConnectedPort>;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        network: number;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        travelPorts: $Map<$BlockPos, $ChainConveyorBlockEntity$ConnectedPort>;
        connectionStats: $Map<$BlockPos, $ChainConveyorBlockEntity$ConnectionStats>;
        updateSpeed: boolean;
        routingTable: $ChainConveyorRoutingTable;
        checkInvalid: boolean;
        preventSpeedUpdate: number;
        connections: $Set<$BlockPos>;
        reversed: boolean;
        cancelDrops: boolean;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get loopingPackages(): $List<$ChainConveyorPackage>;
        get travellingPackages(): $Map<$BlockPos, $List<$ChainConveyorPackage>>;
    }
    export class $ClientboundChainConveyorRidingPacket extends $Record implements $ClientboundPacketPayload {
        uuids(): $Collection<$UUID>;
        handle(arg0: $LocalPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ClientboundChainConveyorRidingPacket>;
        constructor(uuids: $Collection_<$UUID_>);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundChainConveyorRidingPacket}.
     */
    export type $ClientboundChainConveyorRidingPacket_ = { uuids?: $Collection_<$UUID_>,  } | [uuids?: $Collection_<$UUID_>, ];
    export class $ChainConveyorConnectionHandler {
        static onRightClick(): boolean;
        static validateAndConnect(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $Player, arg3: $ItemStack_, arg4: boolean): boolean;
        static onItemUsedOnBlock(arg0: $PlayerInteractEvent$RightClickBlock): void;
        static clientTick(): void;
        constructor();
    }
    export class $ChainConveyorShape$ChainConveyorBB extends $ChainConveyorShape {
        drawOutline(arg0: $BlockPos_, arg1: $PoseStack, arg2: $VertexConsumer): void;
        constructor(arg0: $Vec3_);
    }
}
