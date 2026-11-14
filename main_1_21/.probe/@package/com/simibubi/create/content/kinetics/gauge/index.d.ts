import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $SuperByteBufferCache$Compartment } from "@package/net/createmod/catnip/render";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $IdMapper } from "@package/net/minecraft/core";
import { $DirectionalAxisBlockStateGen } from "@package/com/simibubi/create/foundation/data";
import { $DirectionalAxisKineticBlock, $KineticBlockEntity, $ShaftVisual, $ShaftRenderer } from "@package/com/simibubi/create/content/kinetics/base";
import { $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Class } from "@package/java/lang";
import { $Couple } from "@package/net/createmod/catnip/data";
import { $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Item } from "@package/net/minecraft/world/item";
import { $BlockEntityConfigurationPacket } from "@package/com/simibubi/create/foundation/networking";
import { $TransformedInstance } from "@package/dev/engine_room/flywheel/lib/instance";
import { $DirectionProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $IHaveGoggleInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $DynamicVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $SimpleDynamicVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $VoxelShaper } from "@package/net/createmod/catnip/math";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/content/kinetics/gauge" {
    export class $GaugeRenderer extends $ShaftRenderer<$GaugeBlockEntity> {
        static stress(arg0: $BlockEntityRendererProvider$Context): $GaugeRenderer;
        static speed(arg0: $BlockEntityRendererProvider$Context): $GaugeRenderer;
        static KINETIC_BLOCK: $SuperByteBufferCache$Compartment<$BlockState>;
        static rainbowMode: boolean;
    }
    export class $GaugeShaper extends $VoxelShaper {
        get(arg0: $Direction_, arg1: boolean): $VoxelShape;
        constructor();
    }
    export class $GaugeBlock$Type extends $Enum<$GaugeBlock$Type> implements $StringRepresentable {
        static values(): $GaugeBlock$Type[];
        static valueOf(arg0: string): $GaugeBlock$Type;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static SPEED: $GaugeBlock$Type;
        static STRESS: $GaugeBlock$Type;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $GaugeBlock$Type}.
     */
    export type $GaugeBlock$Type_ = "speed" | "stress";
    export class $GaugeObservedPacket extends $BlockEntityConfigurationPacket<$StressGaugeBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $GaugeObservedPacket>;
        constructor(arg0: $BlockPos_);
    }
    export class $StressGaugeBlockEntity extends $GaugeBlockEntity {
        onObserved(): void;
        getNetworkCapacity(): number;
        getNetworkStress(): number;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        color: number;
        level: $Level;
        dialState: number;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        computerBehaviour: $AbstractComputerBehaviour;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        network: number;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        prevDialState: number;
        updateSpeed: boolean;
        dialTarget: number;
        preventSpeedUpdate: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get networkCapacity(): number;
        get networkStress(): number;
    }
    export class $SpeedGaugeBlockEntity extends $GaugeBlockEntity {
        static getDialTarget(arg0: number): number;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        color: number;
        level: $Level;
        dialState: number;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        computerBehaviour: $AbstractComputerBehaviour;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        network: number;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        prevDialState: number;
        updateSpeed: boolean;
        dialTarget: number;
        preventSpeedUpdate: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $GaugeVisual extends $ShaftVisual<$GaugeBlockEntity> implements $SimpleDynamicVisual {
        beginFrame(arg0: $DynamicVisual$Context): void;
        planFrame(): $Plan<$DynamicVisual$Context>;
        static rainbowMode: boolean;
    }
    export class $GaugeVisual$Speed extends $GaugeVisual {
        static rainbowMode: boolean;
        constructor(arg0: $VisualizationContext, arg1: $GaugeBlockEntity, arg2: number);
    }
    export class $GaugeGenerator extends $DirectionalAxisBlockStateGen {
        constructor();
    }
    export class $GaugeVisual$DialFace extends $Couple<$TransformedInstance> {
    }
    export class $GaugeBlock extends $DirectionalAxisKineticBlock implements $IBE<$GaugeBlockEntity> {
        shouldRenderHeadOnFace(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_): boolean;
        hasAnalogOutputSignal(arg0: $BlockState_): boolean;
        getAnalogOutputSignal(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): number;
        static stress(arg0: $BlockBehaviour$Properties): $GaugeBlock;
        getBlockEntityType(): $BlockEntityType<$GaugeBlockEntity>;
        getBlockEntityClass(): $Class<$GaugeBlockEntity>;
        getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        static speed(arg0: $BlockBehaviour$Properties): $GaugeBlock;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$GaugeBlockEntity, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$GaugeBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$GaugeBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($GaugeBlockEntity) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $GaugeBlockEntity;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static UPDATE_MOVE_BY_PISTON: number;
        static AXIS_ALONG_FIRST_COORDINATE: $BooleanProperty;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        static GAUGE: $GaugeShaper;
        hasCollision: boolean;
        get blockEntityType(): $BlockEntityType<$GaugeBlockEntity>;
        get blockEntityClass(): $Class<$GaugeBlockEntity>;
    }
    export class $GaugeVisual$Stress extends $GaugeVisual {
        static rainbowMode: boolean;
        constructor(arg0: $VisualizationContext, arg1: $GaugeBlockEntity, arg2: number);
    }
    export class $GaugeBlockEntity extends $KineticBlockEntity implements $IHaveGoggleInformation {
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        color: number;
        level: $Level;
        dialState: number;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        network: number;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        prevDialState: number;
        updateSpeed: boolean;
        dialTarget: number;
        preventSpeedUpdate: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
}
