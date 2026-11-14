import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CreateAdvancement } from "@package/com/simibubi/create/foundation/advancement";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $BaseFlowingFluid, $FluidStack_, $BaseFlowingFluid$Properties, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $List, $Map } from "@package/java/util";
import { $BehaviourType, $BlockEntityBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $PlayerInteractEvent$RightClickItem } from "@package/net/neoforged/neoforge/event/entity/player";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Supplier_, $Predicate_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Direction$Axis, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $BakedModelWrapperWithData } from "@package/com/simibubi/create/foundation/model";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Enum, $Record } from "@package/java/lang";
import { $WorldAttached, $Couple } from "@package/net/createmod/catnip/data";
import { $InstanceType, $InstanceHandle } from "@package/dev/engine_room/flywheel/api/instance";
import { $BlockAndTintGetter, $LevelAccessor, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $Item } from "@package/net/minecraft/world/item";
import { $FluidState, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $MutableVertexList } from "@package/dev/engine_room/flywheel/api/vertex";
import { $TransformedInstance } from "@package/dev/engine_room/flywheel/lib/instance";
import { $IntegerProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $PipeCollisionEvent$Spill, $PipeCollisionEvent$Flow } from "@package/com/simibubi/create/api/event";
import { $ICapabilityProvider } from "@package/com/simibubi/create/foundation";
import { $IndexSequence, $Model } from "@package/dev/engine_room/flywheel/api/model";
import { $BlockFace } from "@package/net/createmod/catnip/math";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $FluidTank } from "@package/net/neoforged/neoforge/fluids/capability/templates";
import { $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $QuadMesh } from "@package/dev/engine_room/flywheel/lib/model";
import { $Vector4fc, $Matrix4f } from "@package/org/joml";
export * as tank from "@package/com/simibubi/create/content/fluids/tank";
export * as transfer from "@package/com/simibubi/create/content/fluids/transfer";
export * as spout from "@package/com/simibubi/create/content/fluids/spout";
export * as pipes from "@package/com/simibubi/create/content/fluids/pipes";
export * as pump from "@package/com/simibubi/create/content/fluids/pump";
export * as particle from "@package/com/simibubi/create/content/fluids/particle";
export * as hosePulley from "@package/com/simibubi/create/content/fluids/hosePulley";
export * as potion from "@package/com/simibubi/create/content/fluids/potion";
export * as drain from "@package/com/simibubi/create/content/fluids/drain";

declare module "@package/com/simibubi/create/content/fluids" {
    export class $FluidMesh$FluidSurfaceMesh extends $Record implements $QuadMesh {
        boundingSphere(): $Vector4fc;
        texture(): $TextureAtlasSprite;
        write(arg0: $MutableVertexList): void;
        width(): number;
        vertexCount(): number;
        indexSequence(): $IndexSequence;
        indexCount(): number;
        constructor(texture: $TextureAtlasSprite, width: number);
    }
    /**
     * Values that may be interpreted as {@link $FluidMesh$FluidSurfaceMesh}.
     */
    export type $FluidMesh$FluidSurfaceMesh_ = { texture?: $TextureAtlasSprite, width?: number,  } | [texture?: $TextureAtlasSprite, width?: number, ];
    export class $FluidMesh$FluidStreamMesh extends $Record implements $QuadMesh {
        boundingSphere(): $Vector4fc;
        texture(): $TextureAtlasSprite;
        write(arg0: $MutableVertexList): void;
        vertexCount(): number;
        indexSequence(): $IndexSequence;
        indexCount(): number;
        constructor(texture: $TextureAtlasSprite);
    }
    /**
     * Values that may be interpreted as {@link $FluidMesh$FluidStreamMesh}.
     */
    export type $FluidMesh$FluidStreamMesh_ = { texture?: $TextureAtlasSprite,  } | [texture?: $TextureAtlasSprite, ];
    export class $FluidTransportBehaviour$AttachmentTypes$ComponentPartials extends $Enum<$FluidTransportBehaviour$AttachmentTypes$ComponentPartials> {
        static values(): $FluidTransportBehaviour$AttachmentTypes$ComponentPartials[];
        static valueOf(arg0: string): $FluidTransportBehaviour$AttachmentTypes$ComponentPartials;
        static CONNECTION: $FluidTransportBehaviour$AttachmentTypes$ComponentPartials;
        static RIM: $FluidTransportBehaviour$AttachmentTypes$ComponentPartials;
        static RIM_CONNECTOR: $FluidTransportBehaviour$AttachmentTypes$ComponentPartials;
        static DRAIN: $FluidTransportBehaviour$AttachmentTypes$ComponentPartials;
    }
    /**
     * Values that may be interpreted as {@link $FluidTransportBehaviour$AttachmentTypes$ComponentPartials}.
     */
    export type $FluidTransportBehaviour$AttachmentTypes$ComponentPartials_ = "connection" | "rim_connector" | "rim" | "drain";
    export class $FluidTransportBehaviour$UpdatePhase extends $Enum<$FluidTransportBehaviour$UpdatePhase> {
        static values(): $FluidTransportBehaviour$UpdatePhase[];
        static valueOf(arg0: string): $FluidTransportBehaviour$UpdatePhase;
        static IDLE: $FluidTransportBehaviour$UpdatePhase;
        static FLIP_FLOWS: $FluidTransportBehaviour$UpdatePhase;
        static WAIT_FOR_PUMPS: $FluidTransportBehaviour$UpdatePhase;
    }
    /**
     * Values that may be interpreted as {@link $FluidTransportBehaviour$UpdatePhase}.
     */
    export type $FluidTransportBehaviour$UpdatePhase_ = "wait_for_pumps" | "flip_flows" | "idle";
    export class $PipeAttachmentModel$PipeModelData {
    }
    export class $FluidFX {
        static getFluidParticle(arg0: $FluidStack_): $ParticleOptions;
        static splash(arg0: $BlockPos_, arg1: $FluidStack_): void;
        static spawnPouringLiquid(arg0: $Level_, arg1: $BlockPos_, arg2: number, arg3: $ParticleOptions_, arg4: number, arg5: $Vec3_, arg6: boolean): void;
        static spawnRimParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: number, arg4: $ParticleOptions_, arg5: number): void;
        static getDrippingParticle(arg0: $FluidStack_): $ParticleOptions;
        constructor();
    }
    export class $FlowSource$FluidHandler extends $FlowSource {
        constructor(arg0: $BlockFace);
    }
    export class $FluidTransportBehaviour extends $BlockEntityBehaviour {
        hasAnyPressure(): boolean;
        getProvidedOutwardFluid(arg0: $Direction_): $FluidStack;
        handler$chk004$createlazytick$tick(arg0: $CallbackInfo): void;
        canPullFluidFrom(arg0: $FluidStack_, arg1: $BlockState_, arg2: $Direction_): boolean;
        getRenderedRimAttachment(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_): $FluidTransportBehaviour$AttachmentTypes;
        canHaveFlowToward(arg0: $BlockState_, arg1: $Direction_): boolean;
        static cacheFlows(arg0: $LevelAccessor, arg1: $BlockPos_): void;
        static loadFlows(arg0: $LevelAccessor, arg1: $BlockPos_): void;
        addPressure(arg0: $Direction_, arg1: boolean, arg2: number): void;
        wipePressure(): void;
        getFlow(arg0: $Direction_): $PipeConnection$Flow;
        getConnection(arg0: $Direction_): $PipeConnection;
        phase: $FluidTransportBehaviour$UpdatePhase;
        interfaces: $Map<$Direction, $PipeConnection>;
        blockEntity: $SmartBlockEntity;
        static interfaceTransfer: $WorldAttached<$Map<$BlockPos, $Map<$Direction, $PipeConnection>>>;
        static TYPE: $BehaviourType<$FluidTransportBehaviour>;
        constructor(arg0: $SmartBlockEntity);
    }
    export class $PipeAttachmentModel extends $BakedModelWrapperWithData {
        static withAO(arg0: $BakedModel): $PipeAttachmentModel;
        static withoutAO(arg0: $BakedModel): $PipeAttachmentModel;
        constructor(arg0: $BakedModel, arg1: boolean);
    }
    export class $PipeConnection$Flow {
        inbound: boolean;
        progress: $LerpedFloat;
        fluid: $FluidStack;
        complete: boolean;
        constructor(arg0: $PipeConnection, arg1: boolean, arg2: $FluidStack_);
    }
    export class $OpenEndedPipe$OpenEndFluidHandler extends $FluidTank {
    }
    export class $FluidPropagator {
        static hasFluidCapability(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        static validateNeighbourChange(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Block_, arg4: $BlockPos_, arg5: boolean): $Direction;
        static propagateChangedPipe(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_): void;
        static getStraightPipeAxis(arg0: $BlockState_): $Direction$Axis;
        static getPipe(arg0: $BlockGetter, arg1: $BlockPos_): $FluidTransportBehaviour;
        static getSharedTriggers(): $CreateAdvancement[];
        static resetAffectedFluidNetworks(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_): void;
        static isOpenEnd(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        static getPumpRange(): number;
        static getPipeConnections(arg0: $BlockState_, arg1: $FluidTransportBehaviour): $List<$Direction>;
        constructor();
        static get sharedTriggers(): $CreateAdvancement[];
        static get pumpRange(): number;
    }
    export class $FluidNetwork {
        reset(): void;
        tick(): void;
        constructor(arg0: $Level_, arg1: $BlockFace, arg2: $Supplier_<$ICapabilityProvider<$IFluidHandler>>);
    }
    export class $VirtualFluid extends $BaseFlowingFluid {
        static createSource(arg0: $BaseFlowingFluid$Properties): $VirtualFluid;
        static createFlowing(arg0: $BaseFlowingFluid$Properties): $VirtualFluid;
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        constructor(arg0: $BaseFlowingFluid$Properties, arg1: boolean);
    }
    export class $FlowSource {
        manageSource(arg0: $Level_, arg1: $BlockEntity): void;
        isEndpoint(): boolean;
        provideHandler(): $ICapabilityProvider<$IFluidHandler>;
        provideFluid(arg0: $Predicate_<$FluidStack>): $FluidStack;
        whileFlowPresent(arg0: $Level_, arg1: boolean): void;
        keepAlive(): void;
        constructor(arg0: $BlockFace);
        get endpoint(): boolean;
    }
    export class $FluidReactions {
        static handlePipeFlowCollision(arg0: $Level_, arg1: $BlockPos_, arg2: $FluidStack_, arg3: $FluidStack_): void;
        static handlePipeSpillCollision(arg0: $Level_, arg1: $BlockPos_, arg2: $Fluid_, arg3: $FluidState): void;
        static handlePipeSpillCollisionFallback(arg0: $PipeCollisionEvent$Spill): void;
        static handlePipeFlowCollisionFallback(arg0: $PipeCollisionEvent$Flow): void;
        constructor();
    }
    export class $FluidMesh {
        static stream(arg0: $TextureAtlasSprite): $Model;
        static surface(arg0: $TextureAtlasSprite, arg1: number): $Model;
        static PIPE_RADIUS: number;
        constructor();
    }
    export class $FluidMesh$SurfaceKey extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $FluidMesh$SurfaceKey}.
     */
    export type $FluidMesh$SurfaceKey_ = { texture?: $TextureAtlasSprite, width?: number,  } | [texture?: $TextureAtlasSprite, width?: number, ];
    export class $FluidInstance extends $TransformedInstance {
        red: number;
        green: number;
        blue: number;
        pose: $Matrix4f;
        alpha: number;
        progress: number;
        v0: number;
        vScale: number;
        constructor(arg0: $InstanceType<$FluidInstance>, arg1: $InstanceHandle);
    }
    export class $FluidBottleItemHook extends $Item {
        static preventWaterBottlesFromCreatesFluids(arg0: $PlayerInteractEvent$RightClickItem): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
    }
    export class $FluidTransportBehaviour$AttachmentTypes extends $Enum<$FluidTransportBehaviour$AttachmentTypes> {
        withoutConnector(): $FluidTransportBehaviour$AttachmentTypes;
        static values(): $FluidTransportBehaviour$AttachmentTypes[];
        static valueOf(arg0: string): $FluidTransportBehaviour$AttachmentTypes;
        static CONNECTION: $FluidTransportBehaviour$AttachmentTypes;
        static PARTIAL_RIM: $FluidTransportBehaviour$AttachmentTypes;
        static RIM: $FluidTransportBehaviour$AttachmentTypes;
        static PARTIAL_DRAIN: $FluidTransportBehaviour$AttachmentTypes;
        static NONE: $FluidTransportBehaviour$AttachmentTypes;
        static DRAIN: $FluidTransportBehaviour$AttachmentTypes;
        static DETAILED_CONNECTION: $FluidTransportBehaviour$AttachmentTypes;
        partials: $FluidTransportBehaviour$AttachmentTypes$ComponentPartials[];
    }
    /**
     * Values that may be interpreted as {@link $FluidTransportBehaviour$AttachmentTypes}.
     */
    export type $FluidTransportBehaviour$AttachmentTypes_ = "none" | "connection" | "detailed_connection" | "rim" | "partial_rim" | "drain" | "partial_drain";
    export class $OpenEndedPipe extends $FlowSource {
        getPos(): $BlockPos;
        static fromNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: $BlockPos_): $OpenEndedPipe;
        getWorld(): $Level;
        getOutputPos(): $BlockPos;
        getAOE(): $AABB;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        constructor(arg0: $BlockFace);
        get pos(): $BlockPos;
        get world(): $Level;
        get outputPos(): $BlockPos;
        get AOE(): $AABB;
    }
    export class $FlowSource$OtherPipe extends $FlowSource {
        constructor(arg0: $BlockFace);
    }
    export class $FlowSource$Blocked extends $FlowSource {
        constructor(arg0: $BlockFace);
    }
    export class $PipeConnection {
        getPressure(): $Couple<number>;
        resetNetwork(): void;
        hasPressure(): boolean;
        manageFlows(arg0: $Level_, arg1: $BlockPos_, arg2: $FluidStack_, arg3: $Predicate_<$FluidStack>): boolean;
        tickFlowProgress(arg0: $Level_, arg1: $BlockPos_): void;
        provideOutboundFlow(): $FluidStack;
        manageSource(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockEntity): void;
        getProvidedFluid(): $FluidStack;
        hasFlow(): boolean;
        spawnParticles(arg0: $Level_, arg1: $BlockPos_, arg2: $FluidStack_): void;
        addPressure(arg0: boolean, arg1: number): void;
        wipePressure(): void;
        hasNetwork(): boolean;
        comparePressure(): number;
        determineSource(arg0: $Level_, arg1: $BlockPos_): boolean;
        spawnSplashOnRim(arg0: $Level_, arg1: $BlockPos_, arg2: $FluidStack_): void;
        static isRenderEntityWithinDistance(arg0: $BlockPos_): boolean;
        flipFlowsIfPressureReversed(): boolean;
        deserializeNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: $BlockPos_, arg3: boolean): void;
        serializeNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        side: $Direction;
        static SPLASH_PARTICLE_AMOUNT: number;
        static MAX_PARTICLE_RENDER_DISTANCE: number;
        static IDLE_PARTICLE_SPAWN_CHANCE: number;
        static RIM_RADIUS: number;
        constructor(arg0: $Direction_);
        get pressure(): $Couple<number>;
        get providedFluid(): $FluidStack;
    }
}
