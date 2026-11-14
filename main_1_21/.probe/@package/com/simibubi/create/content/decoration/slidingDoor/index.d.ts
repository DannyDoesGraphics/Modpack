import { $MapCodec } from "@package/com/mojang/serialization";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $ActorVisual, $ContraptionMatrices } from "@package/com/simibubi/create/content/contraptions/render";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $BehaviourType, $BlockEntityBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Function_, $Consumer_, $Supplier } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $BlockPos_, $Direction_, $IdMapper } from "@package/net/minecraft/core";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IHaveBigOutline, $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Class } from "@package/java/lang";
import { $Pair } from "@package/net/createmod/catnip/data";
import { $LevelAccessor, $LevelReader, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $VirtualRenderWorld } from "@package/com/simibubi/create/foundation/virtualWorld";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $SlidingDoorBlockEntityAccessor } from "@package/com/drmangotea/tfmg/mixin/accessor";
import { $MovementBehaviour } from "@package/com/simibubi/create/api/behaviour/movement";
import { $ScrollInput, $Label } from "@package/com/simibubi/create/foundation/gui/widget";
import { $DirectionProperty, $BlockSetType, $BlockSetType_, $DoorHingeSide_, $DoorHingeSide, $EnumProperty, $BooleanProperty, $DoubleBlockHalf } from "@package/net/minecraft/world/level/block/state/properties";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $SlidingDoorMode$IHasDoorMode, $SlidingDoorMode } from "@package/com/railwayteam/railways/content/extended_sliding_doors";
import { $MovementContext } from "@package/com/simibubi/create/content/contraptions/behaviour";
import { $Block_, $RenderShape, $DoorBlock } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/decoration/slidingDoor" {
    export class $SlidingDoorRenderer extends $SafeBlockEntityRenderer<$SlidingDoorBlockEntity> {
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $SlidingDoorMovementBehaviour implements $MovementBehaviour {
        mustTickWhileDisabled(): boolean;
        tick(arg0: $MovementContext): void;
        /**
         * @deprecated
         */
        dropItem(arg0: $MovementContext, arg1: $ItemStack_): void;
        startMoving(arg0: $MovementContext): void;
        visitNewPosition(arg0: $MovementContext, arg1: $BlockPos_): void;
        canBeDisabledVia(arg0: $MovementContext): $ItemStack;
        onDisabledByControls(arg0: $MovementContext): void;
        onSpeedChanged(arg0: $MovementContext, arg1: $Vec3_, arg2: $Vec3_): void;
        cancelStall(arg0: $MovementContext): void;
        collectOrDropItem(arg0: $MovementContext, arg1: $ItemStack_): void;
        getActiveAreaOffset(arg0: $MovementContext): $Vec3;
        disableBlockEntityRendering(): boolean;
        stopMoving(arg0: $MovementContext): void;
        writeExtraData(arg0: $MovementContext): void;
        renderInContraption(arg0: $MovementContext, arg1: $VirtualRenderWorld, arg2: $ContraptionMatrices, arg3: $MultiBufferSource_): void;
        createVisual(arg0: $VisualizationContext, arg1: $VirtualRenderWorld, arg2: $MovementContext): $ActorVisual;
        isActive(arg0: $MovementContext): boolean;
        constructor();
    }
    export class $SlidingDoorShapes {
        static get(arg0: $Direction_, arg1: boolean, arg2: boolean): $VoxelShape;
        constructor();
    }
    export class $DoorControlBehaviour extends $BlockEntityBehaviour {
        set(arg0: $DoorControl_): void;
        mode: $DoorControl;
        blockEntity: $SmartBlockEntity;
        static TYPE: $BehaviourType<$DoorControlBehaviour>;
        constructor(arg0: $SmartBlockEntity);
    }
    export class $SlidingDoorBlockEntity extends $SmartBlockEntity implements $SlidingDoorMode$IHasDoorMode, $SlidingDoorBlockEntityAccessor {
        railways$getSlidingDoorMode(): $SlidingDoorMode;
        static isOpen(arg0: $BlockState_): boolean;
        i_architecture$shouldRenderSpecial(arg0: $BlockState_): boolean;
        i_architecture$getAnimation(): $LerpedFloat;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $DoorControl extends $Enum<$DoorControl> {
        static createWidget(arg0: number, arg1: number, arg2: $Consumer_<$DoorControl>, arg3: $DoorControl_): $Pair<$ScrollInput, $Label>;
        static values(): $DoorControl[];
        static valueOf(arg0: string): $DoorControl;
        matches(arg0: $Direction_): boolean;
        static ALL: $DoorControl;
        static NORTH: $DoorControl;
        static WEST: $DoorControl;
        static SOUTH: $DoorControl;
        static NONE: $DoorControl;
        static EAST: $DoorControl;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $DoorControl>;
    }
    /**
     * Values that may be interpreted as {@link $DoorControl}.
     */
    export type $DoorControl_ = "all" | "north" | "east" | "south" | "west" | "none";
    export class $SlidingDoorBlock extends $DoorBlock implements $IWrenchable, $IBE<$SlidingDoorBlockEntity>, $IHaveBigOutline {
        static isDoubleDoor(arg0: $BlockState_, arg1: $DoorHingeSide_, arg2: $Direction_, arg3: $BlockState_): boolean;
        isFoldingDoor(): boolean;
        deferUpdate(arg0: $LevelAccessor, arg1: $BlockPos_): void;
        static isDoorPowered(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        getInteractionShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): $VoxelShape;
        static glass(arg0: $BlockBehaviour$Properties, arg1: boolean): $SlidingDoorBlock;
        updateShape(arg0: $BlockState_, arg1: $Direction_, arg2: $BlockState_, arg3: $LevelAccessor, arg4: $BlockPos_, arg5: $BlockPos_): $BlockState;
        static stone(arg0: $BlockBehaviour$Properties, arg1: boolean): $SlidingDoorBlock;
        onPlace(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        neighborChanged(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Block_, arg4: $BlockPos_, arg5: boolean): void;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntityType(): $BlockEntityType<$SlidingDoorBlockEntity>;
        static metal(arg0: $BlockBehaviour$Properties, arg1: boolean): $SlidingDoorBlock;
        getBlockEntityClass(): $Class<$SlidingDoorBlockEntity>;
        getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        getRenderShape(arg0: $BlockState_): $RenderShape;
        canSurvive(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): boolean;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$SlidingDoorBlockEntity, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$SlidingDoorBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$SlidingDoorBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($SlidingDoorBlockEntity) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $SlidingDoorBlockEntity;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static VISIBLE: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static TRAIN_SET_TYPE: $Supplier<$BlockSetType>;
        static UPDATE_LIMIT: number;
        static HALF: $EnumProperty<$DoubleBlockHalf>;
        static UPDATE_ALL: number;
        static HINGE: $EnumProperty<$DoorHingeSide>;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$DoorBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OPEN: $BooleanProperty;
        static POWERED: $BooleanProperty;
        static STONE_SET_TYPE: $Supplier<$BlockSetType>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        static GLASS_SET_TYPE: $Supplier<$BlockSetType>;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties, arg1: $BlockSetType_, arg2: boolean);
        get foldingDoor(): boolean;
        get blockEntityType(): $BlockEntityType<$SlidingDoorBlockEntity>;
        get blockEntityClass(): $Class<$SlidingDoorBlockEntity>;
    }
}
