import { $MapCodec } from "@package/com/mojang/serialization";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $ParticleType_, $ParticleOptions_, $ParticleOptions, $ParticleType } from "@package/net/minecraft/core/particles";
import { $Camera } from "@package/net/minecraft/client";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $UUID, $List } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $RegisterParticleProvidersEvent } from "@package/net/neoforged/neoforge/client/event";
import { $RandomSource } from "@package/net/minecraft/util";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Record } from "@package/java/lang";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";
import { $BlockWithSubLevelCollisionCallback } from "@package/dev/ryanhcode/sable/api/block";
import { $ICustomParticleDataWithSprite } from "@package/com/simibubi/create/foundation/particle";
import { $IntAttached } from "@package/net/createmod/catnip/data";
import { $LevelAccessor, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $Item } from "@package/net/minecraft/world/item";
import { $ParticleProvider, $SimpleAnimatedParticle, $SpriteSet, $Particle, $ParticleEngine$SpriteParticleRegistration } from "@package/net/minecraft/client/particle";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Cache } from "@package/com/google/common/cache";
import { $PlayerTickEvent$Post } from "@package/net/neoforged/neoforge/event/tick";
import { $DirectionProperty, $BellAttachType, $EnumProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $Stream } from "@package/java/util/stream";
import { $AbstractBellBlockAccessor } from "@package/dev/ryanhcode/sable/neoforge/mixin/compatibility/create/impact";
import { $BellMovementBehaviour } from "@package/com/simibubi/create/content/contraptions/behaviour";
import { $Block_, $BellBlock } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $ClientboundPacketPayload, $BasePacketPayload$PacketTypeProvider } from "@package/net/createmod/catnip/net/base";
import { $BlockEntityType, $BlockEntityType_ } from "@package/net/minecraft/world/level/block/entity";
import { $Quaternionf } from "@package/org/joml";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/equipment/bell" {
    export class $SoulParticle$Data extends $BasicParticleData<$SoulParticle> {
        constructor();
    }
    export class $AbstractBellBlockEntity extends $SmartBlockEntity {
        ring(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_): boolean;
        getBellModel(): $PartialModel;
        level: $Level;
        ringDirection: $Direction;
        ringingTicks: number;
        static ATTACHMENTS_NBT_KEY: string;
        isRinging: boolean;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static RING_DURATION: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get bellModel(): $PartialModel;
    }
    export class $HauntedBellPulser {
        static sendPulse(arg0: $ServerLevel, arg1: $BlockPos_, arg2: number, arg3: boolean): void;
        static hauntedBellCreatesPulse(arg0: $PlayerTickEvent$Post): void;
        static WARMUP: $Cache<$UUID, $IntAttached<$Entity>>;
        static DISTANCE: number;
        static RECHARGE_TICKS: number;
        static WARMUP_TICKS: number;
        constructor();
    }
    export class $PeculiarBellBlockEntity extends $AbstractBellBlockEntity {
        level: $Level;
        ringDirection: $Direction;
        ringingTicks: number;
        static ATTACHMENTS_NBT_KEY: string;
        isRinging: boolean;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static RING_DURATION: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $SoulParticle extends $CustomRotationParticle {
        setFrame(arg0: number): void;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(arg0: $ClientLevel, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $SpriteSet, arg8: $ParticleOptions_);
        set frame(value: number);
    }
    export class $SoulParticle$ExpandingPerimeterData extends $SoulParticle$PerimeterData {
        constructor();
    }
    export class $AbstractBellBlock<BE extends $AbstractBellBlockEntity> extends $BellBlock implements $IBE<BE>, $AbstractBellBlockAccessor, $BlockWithSubLevelCollisionCallback {
        canRingFrom(arg0: $BlockState_, arg1: $Direction_, arg2: number): boolean;
        neighborChanged(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Block_, arg4: $BlockPos_, arg5: boolean): void;
        getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        playSound(arg0: $Level_, arg1: $BlockPos_): void;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<BE, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<BE, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<BE>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): (BE) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): BE;
        invokeRing(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $Player): boolean;
        static UPDATE_IMMEDIATE: number;
        static ATTACHMENT: $EnumProperty<$BellAttachType>;
        item: $Item;
        static CODEC: $MapCodec<$BellBlock>;
        static EVENT_BELL_RING: number;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static POWERED: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $SoulPulseEffectHandler {
        addPulse(arg0: $SoulPulseEffect): void;
        refresh(): void;
        tick(arg0: $Level_): void;
        constructor();
    }
    export class $BasicParticleData<T extends $Particle> implements $ParticleOptions, $ICustomParticleDataWithSprite<$BasicParticleData<T>> {
        getMetaFactory(): $ParticleEngine$SpriteParticleRegistration<$BasicParticleData<$BasicParticleData<T>>>;
        getStreamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $BasicParticleData<$BasicParticleData<T>>>;
        getBasicFactory(): $BasicParticleData$IBasicParticleFactory<$BasicParticleData<T>>;
        getCodec(arg0: $ParticleType_<$BasicParticleData<$BasicParticleData<T>>>): $MapCodec<$BasicParticleData<$BasicParticleData<T>>>;
        createType(): $ParticleType<$BasicParticleData<T>>;
        getFactory(): $ParticleProvider<$BasicParticleData<T>>;
        register(arg0: $ParticleType_<$BasicParticleData<T>>, arg1: $RegisterParticleProvidersEvent): void;
        constructor();
        get metaFactory(): $ParticleEngine$SpriteParticleRegistration<$BasicParticleData<$BasicParticleData<T>>>;
        get streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $BasicParticleData<$BasicParticleData<T>>>;
        get basicFactory(): $BasicParticleData$IBasicParticleFactory<$BasicParticleData<T>>;
        get factory(): $ParticleProvider<$BasicParticleData<T>>;
    }
    export class $SoulParticle$EndAnimation extends $SoulParticle$AnimationStage {
        constructor(arg0: $SoulParticle);
    }
    export class $SoulParticle$PerimeterData extends $BasicParticleData<$SoulParticle> {
        constructor();
    }
    export class $SoulParticle$StartAnimation extends $SoulParticle$AnimationStage {
        constructor(arg0: $SoulParticle);
    }
    export class $SoulPulseEffect {
        getPotentialSoulSpawns(arg0: $Level_): $List<$BlockPos>;
        currentLayerIdx(): number;
        static isDark(arg0: $Level_, arg1: $BlockPos_): boolean;
        static canSpawnSoulAt(arg0: $Level_, arg1: $BlockPos_, arg2: boolean): boolean;
        spawnParticles(arg0: $Level_, arg1: $BlockPos_): void;
        canOverlap(): boolean;
        static getLayer(arg0: number): $Stream<$BlockPos>;
        tick(arg0: $Level_): $List<$BlockPos>;
        finished(): boolean;
        static TICKS_PER_LAYER: number;
        distance: number;
        pos: $BlockPos;
        added: $List<$BlockPos>;
        static MAX_DISTANCE: number;
        constructor(arg0: $BlockPos_, arg1: number, arg2: boolean);
    }
    export class $PeculiarBellBlock extends $AbstractBellBlock<$PeculiarBellBlockEntity> {
        spawnConversionParticles(arg0: $LevelAccessor, arg1: $BlockPos_): void;
        updateShape(arg0: $BlockState_, arg1: $Direction_, arg2: $BlockState_, arg3: $LevelAccessor, arg4: $BlockPos_, arg5: $BlockPos_): $BlockState;
        static UPDATE_IMMEDIATE: number;
        static ATTACHMENT: $EnumProperty<$BellAttachType>;
        item: $Item;
        static CODEC: $MapCodec<$BellBlock>;
        static EVENT_BELL_RING: number;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static POWERED: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $SoulParticle$AnimationStage {
        getAnimAge(): number;
        getNext(): $SoulParticle$AnimationStage;
        tick(): void;
        constructor(arg0: $SoulParticle);
        get animAge(): number;
        get next(): $SoulParticle$AnimationStage;
    }
    export class $HauntedBellBlock extends $AbstractBellBlock<$HauntedBellBlockEntity> {
        onPlace(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        static UPDATE_IMMEDIATE: number;
        static ATTACHMENT: $EnumProperty<$BellAttachType>;
        item: $Item;
        static CODEC: $MapCodec<$BellBlock>;
        static EVENT_BELL_RING: number;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static POWERED: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $SoulPulseEffectPacket extends $Record implements $ClientboundPacketPayload {
        canOverlap(): boolean;
        pos(): $BlockPos;
        handle(arg0: $LocalPlayer): void;
        distance(): number;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $SoulPulseEffectPacket>;
        constructor(pos: $BlockPos_, distance: number, canOverlap: boolean);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $SoulPulseEffectPacket}.
     */
    export type $SoulPulseEffectPacket_ = { canOverlap?: boolean, distance?: number, pos?: $BlockPos_,  } | [canOverlap?: boolean, distance?: number, pos?: $BlockPos_, ];
    export class $HauntedBellMovementBehaviour extends $BellMovementBehaviour {
        static DISTANCE: number;
        constructor();
    }
    export class $HauntedBellBlockEntity extends $AbstractBellBlockEntity {
        static EFFECT_TICKS: number;
        effectTicks: number;
        static DISTANCE: number;
        static RECHARGE_TICKS: number;
        level: $Level;
        ringDirection: $Direction;
        ringingTicks: number;
        static ATTACHMENTS_NBT_KEY: string;
        isRinging: boolean;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static RING_DURATION: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $BasicParticleData$IBasicParticleFactory<U extends $Particle> {
    }
    export interface $BasicParticleData$IBasicParticleFactory<U extends $Particle> {
        makeParticle(arg0: $ClientLevel, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $SpriteSet): U;
    }
    /**
     * Values that may be interpreted as {@link $BasicParticleData$IBasicParticleFactory}.
     */
    export type $BasicParticleData$IBasicParticleFactory_<U> = ((arg0: $ClientLevel, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $SpriteSet) => U);
    export class $SoulParticle$LoopAnimation extends $SoulParticle$AnimationStage {
        constructor(arg0: $SoulParticle);
    }
    export class $BellRenderer<BE extends $AbstractBellBlockEntity> extends $SafeBlockEntityRenderer<BE> {
        static getSwingAngle(arg0: number): number;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $SoulBaseParticle$Data extends $BasicParticleData<$SoulBaseParticle> {
        constructor();
    }
    export class $CustomRotationParticle extends $SimpleAnimatedParticle {
        getCustomRotation(arg0: $Camera, arg1: number): $Quaternionf;
        selectSpriteLoopingWithAge(arg0: $SpriteSet): void;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(arg0: $ClientLevel, arg1: number, arg2: number, arg3: number, arg4: $SpriteSet, arg5: number);
    }
    export class $SoulParticle$PerimeterAnimation extends $SoulParticle$AnimationStage {
        constructor(arg0: $SoulParticle);
    }
    export class $SoulBaseParticle extends $CustomRotationParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(arg0: $ClientLevel, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $SpriteSet);
    }
}
