import { $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $ParticleType_, $ParticleOptions_, $ParticleOptions, $ParticleType } from "@package/net/minecraft/core/particles";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $List, $EnumSet } from "@package/java/util";
import { $RegisterParticleProvidersEvent } from "@package/net/neoforged/neoforge/client/event";
import { $RandomSource } from "@package/net/minecraft/util";
import { $SuperByteBufferCache$Compartment } from "@package/net/createmod/catnip/render";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $NozzleBlockEntityExtension } from "@package/dev/ryanhcode/sable/neoforge/mixinterface/compatibility/create";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Vec3i, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $KineticBlockEntityRenderer, $KineticBlockEntity, $DirectionalKineticBlock, $KineticBlockEntityVisual } from "@package/com/simibubi/create/content/kinetics/base";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $NozzleBlockEntityAccessor } from "@package/dev/ryanhcode/sable/neoforge/mixin/compatibility/create/nozzle";
import { $BlockEntityPropeller, $BlockEntitySubLevelPropellerActor } from "@package/dev/ryanhcode/sable/api/block/propeller";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $LocalFloatRef, $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $IBE, $WrenchableDirectionalBlock } from "@package/com/simibubi/create/foundation/block";
import { $AbstractTickableSoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $BlockEntitySubLevelActor } from "@package/dev/ryanhcode/sable/api/block";
import { $FanProcessingType, $FanProcessingType$AirFlowParticleAccess } from "@package/com/simibubi/create/content/kinetics/fan/processing";
import { $Class, $Iterable } from "@package/java/lang";
import { $ICustomParticleDataWithSprite } from "@package/com/simibubi/create/foundation/particle";
import { $LevelReader, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Item } from "@package/net/minecraft/world/item";
import { $ParticleProvider, $SimpleAnimatedParticle, $SpriteSet, $Particle, $ParticleEngine$SpriteParticleRegistration } from "@package/net/minecraft/client/particle";
import { $RigidBodyHandle } from "@package/dev/ryanhcode/sable/api/physics/handle";
import { $ServerSubLevel, $SubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $DirectionProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $AABB_, $Vec3, $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as processing from "@package/com/simibubi/create/content/kinetics/fan/processing";

declare module "@package/com/simibubi/create/content/kinetics/fan" {
    export class $EncasedFanBlockEntity extends $KineticBlockEntity implements $IAirCurrentSource, $BlockEntityPropeller, $BlockEntitySubLevelPropellerActor {
        blockInFrontChanged(): void;
        getAirflowOriginSide(): $Direction;
        getBlockDirection(): $Direction;
        getThrust(): number;
        getAirflow(): number;
        getPropeller(): $BlockEntityPropeller;
        sable$tick(arg0: $ServerSubLevel): void;
        getAirCurrent(): $AirCurrent;
        getAirCurrentWorld(): $Level;
        getAirCurrentPos(): $BlockPos;
        getAirFlowDirection(): $Direction;
        updateChute(): void;
        isSourceRemoved(): boolean;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        isActive(): boolean;
        getMaxDistance(): number;
        getAirflowScaling(): number;
        getCurrentAirPressure(): number;
        getScaledThrust(): number;
        applyForces(arg0: $ServerSubLevel, arg1: $Vec3_, arg2: number): void;
        sable$physicsTick(arg0: $ServerSubLevel, arg1: $RigidBodyHandle, arg2: number): void;
        sable$getConnectionDependencies(): $Iterable<$SubLevel>;
        sable$getLoadingDependencies(): $Iterable<$SubLevel>;
        airCurrent: $AirCurrent;
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
        get airflowOriginSide(): $Direction;
        get blockDirection(): $Direction;
        get thrust(): number;
        get airflow(): number;
        get propeller(): $BlockEntityPropeller;
        get airCurrentWorld(): $Level;
        get airCurrentPos(): $BlockPos;
        get airFlowDirection(): $Direction;
        get sourceRemoved(): boolean;
        get active(): boolean;
        get maxDistance(): number;
        get airflowScaling(): number;
        get currentAirPressure(): number;
        get scaledThrust(): number;
    }
    export class $AirCurrent$Client {
        static tickClientPlayerSounds(): void;
        constructor();
    }
    export class $IAirCurrentSource {
    }
    export interface $IAirCurrentSource {
        getAirflowOriginSide(): $Direction;
        getAirCurrent(): $AirCurrent;
        getAirCurrentWorld(): $Level;
        getAirCurrentPos(): $BlockPos;
        getAirFlowDirection(): $Direction;
        isSourceRemoved(): boolean;
        getMaxDistance(): number;
        getSpeed(): number;
        get airflowOriginSide(): $Direction;
        get airCurrent(): $AirCurrent;
        get airCurrentWorld(): $Level;
        get airCurrentPos(): $BlockPos;
        get airFlowDirection(): $Direction;
        get sourceRemoved(): boolean;
        get maxDistance(): number;
        get speed(): number;
    }
    export class $NozzleBlock extends $WrenchableDirectionalBlock implements $IBE<$NozzleBlockEntity> {
        neighborChanged(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Block_, arg4: $BlockPos_, arg5: boolean): void;
        getBlockEntityType(): $BlockEntityType<$NozzleBlockEntity>;
        getBlockEntityClass(): $Class<$NozzleBlockEntity>;
        getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        canSurvive(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): boolean;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$NozzleBlockEntity, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$NozzleBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$NozzleBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($NozzleBlockEntity) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $NozzleBlockEntity;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$WrenchableDirectionalBlock>;
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
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$NozzleBlockEntity>;
        get blockEntityClass(): $Class<$NozzleBlockEntity>;
    }
    export class $NozzleBlockEntity extends $SmartBlockEntity implements $NozzleBlockEntityAccessor, $BlockEntitySubLevelActor, $NozzleBlockEntityExtension {
        sable$physicsTick(arg0: $ServerSubLevel, arg1: $RigidBodyHandle, arg2: number): void;
        setRange(arg0: number): void;
        handler$gcm000$sable$generateRays(arg0: $BlockEntityType_<any>, arg1: $BlockPos_, arg2: $BlockState_, arg3: $CallbackInfo): void;
        handler$gcn000$sable$updateValidDirections(arg0: $CallbackInfo): void;
        redirect$gcl000$sable$nozzlePosition(arg0: $Vec3i): $Vec3;
        wrapOperation$gcl000$sable$clampParticlesMore(arg0: number, arg1: number, arg2: number, arg3: $Operation_<any>): number;
        redirect$gcl000$sable$nozzlePositionLazy(arg0: $Vec3i): $Vec3;
        redirect$gcl000$sable$checkDirection(arg0: $Level_, arg1: $ParticleOptions_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: $Vec3_, arg9: $Vec3_): void;
        sable$getValidDirections(): $EnumSet<any>;
        redirect$gcl000$sable$checkDirection$mixinextras$bridge$20(arg0: $Level_, arg1: $ParticleOptions_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: $LocalRef<any>, arg9: $LocalRef<any>): void;
        sable$getConnectionDependencies(): $Iterable<$SubLevel>;
        sable$tick(arg0: $ServerSubLevel): void;
        sable$getLoadingDependencies(): $Iterable<$SubLevel>;
        getRange(): number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $EncasedFanBlock extends $DirectionalKineticBlock implements $IBE<$EncasedFanBlockEntity> {
        neighborChanged(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Block_, arg4: $BlockPos_, arg5: boolean): void;
        getBlockEntityType(): $BlockEntityType<$EncasedFanBlockEntity>;
        getBlockEntityClass(): $Class<$EncasedFanBlockEntity>;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$EncasedFanBlockEntity, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$EncasedFanBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$EncasedFanBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($EncasedFanBlockEntity) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $EncasedFanBlockEntity;
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
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$EncasedFanBlockEntity>;
        get blockEntityClass(): $Class<$EncasedFanBlockEntity>;
    }
    export class $AirCurrent$AirCurrentSegment {
    }
    export class $AirFlowParticle$Factory implements $ParticleProvider<$AirFlowParticleData> {
        createParticle(arg0: $AirFlowParticleData, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $AirCurrentSound extends $AbstractTickableSoundInstance {
        stopSound(): void;
        isFaded(): boolean;
        setPitch(arg0: number): void;
        fadeOut(): void;
        fadeIn(arg0: number): void;
        get faded(): boolean;
        set pitch(value: number);
    }
    export class $AirFlowParticle extends $SimpleAnimatedParticle {
        handler$gfk000$sable$fixAirflowParticle(arg0: $CallbackInfo): void;
        redirect$gfk000$sable$reverseProjectPos(arg0: $AABB_, arg1: number, arg2: number, arg3: number): boolean;
        handler$gfk000$sable$transformNormal(arg0: $CallbackInfo, arg1: $LocalRef<any>): void;
        redirect$gfk000$sable$reverseProjectPos2(arg0: number, arg1: number, arg2: number): $Vec3;
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
    }
    export class $AirCurrent {
        handler$fpn000$sable$updateSubLevel(arg0: $CallbackInfo): void;
        wrapOperation$fpn000$sable$transformFlowVector(arg0: $Entity, arg1: $Vec3_, arg2: $Operation_<any>, arg3: $Vec3i, arg4: number, arg5: $Vec3_, arg6: number): void;
        redirect$fpn000$sable$reverseProjectAllPositions(arg0: $Entity): $Vec3;
        wrapOperation$fpn000$sable$transformFlowVector$mixinextras$bridge$20(arg0: $Entity, arg1: $Vec3_, arg2: $Operation_<any>, arg3: $LocalRef<any>, arg4: $LocalFloatRef, arg5: $LocalRef<any>, arg6: $LocalFloatRef): void;
        findAffectedHandlers(): void;
        tickAffectedHandlers(): void;
        redirect$fpn000$sable$reverseProjectEntityBB(arg0: $Entity): $AABB;
        static isPlayerCreativeFlying(arg0: $Entity): boolean;
        findEntities(): void;
        static getFlowLimit(arg0: $Level_, arg1: $BlockPos_, arg2: number, arg3: $Direction_): number;
        tick(): void;
        rebuild(): void;
        getTypeAt(arg0: number): $FanProcessingType;
        bounds: $AABB;
        maxDistance: number;
        source: $IAirCurrentSource;
        pushing: boolean;
        segments: $List<$AirCurrent$AirCurrentSegment>;
        direction: $Direction;
        constructor(arg0: $IAirCurrentSource);
    }
    export class $AirFlowParticle$Access implements $FanProcessingType$AirFlowParticleAccess {
    }
    export class $AirFlowParticleData implements $ParticleOptions, $ICustomParticleDataWithSprite<$AirFlowParticleData> {
        getMetaFactory(): $ParticleEngine$SpriteParticleRegistration<$AirFlowParticleData>;
        getStreamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $AirFlowParticleData>;
        getType(): $ParticleType<never>;
        getCodec(arg0: $ParticleType_<$AirFlowParticleData>): $MapCodec<$AirFlowParticleData>;
        createType(): $ParticleType<$AirFlowParticleData>;
        getFactory(): $ParticleProvider<$AirFlowParticleData>;
        register(arg0: $ParticleType_<$AirFlowParticleData>, arg1: $RegisterParticleProvidersEvent): void;
        static CODEC: $MapCodec<$AirFlowParticleData>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AirFlowParticleData>;
        constructor(arg0: $Vec3i);
        constructor();
        constructor(arg0: number, arg1: number, arg2: number);
        get metaFactory(): $ParticleEngine$SpriteParticleRegistration<$AirFlowParticleData>;
        get streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $AirFlowParticleData>;
        get type(): $ParticleType<never>;
        get factory(): $ParticleProvider<$AirFlowParticleData>;
    }
    export class $FanVisual extends $KineticBlockEntityVisual<$EncasedFanBlockEntity> {
        constructor(arg0: $VisualizationContext, arg1: $EncasedFanBlockEntity, arg2: number);
    }
    export class $EncasedFanRenderer extends $KineticBlockEntityRenderer<$EncasedFanBlockEntity> {
        static KINETIC_BLOCK: $SuperByteBufferCache$Compartment<$BlockState>;
        static rainbowMode: boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
}
