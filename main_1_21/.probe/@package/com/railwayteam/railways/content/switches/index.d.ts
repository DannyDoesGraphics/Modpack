import { $MapCodec } from "@package/com/mojang/serialization";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $SingleBlockEntityEdgePoint } from "@package/com/simibubi/create/content/trains/signal";
import { $TrackTargetingBlockItem, $TrackTargetingBehaviour } from "@package/com/simibubi/create/content/trains/track";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $UUID, $List, $Map } from "@package/java/util";
import { $TravellingPoint$SteerDirection_ } from "@package/com/simibubi/create/content/trains/entity";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $SmartBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $TrackGraph, $EdgePointType, $TrackNodeLocation } from "@package/com/simibubi/create/content/trains/graph";
import { $BlockPos, $BlockPos_, $Direction_, $IdMapper } from "@package/net/minecraft/core";
import { $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Record, $Class } from "@package/java/lang";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";
import { $Couple } from "@package/net/createmod/catnip/data";
import { $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $Item, $Item$Properties } from "@package/net/minecraft/world/item";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $SimpleRegistry$Multi } from "@package/com/simibubi/create/api/registry";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Projectile } from "@package/net/minecraft/world/entity/projectile";
import { $DirectionProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $IHaveGoggleInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $INamedIconOptions } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/scrollValue";
import { $DisplaySource } from "@package/com/simibubi/create/api/behaviour/display";
import { $HorizontalDirectionalBlock, $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $TransformableBlockEntity } from "@package/com/simibubi/create/api/contraption/transformable";
import { $SingleLineDisplaySource } from "@package/com/simibubi/create/content/redstone/displayLink/source";
import { $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as neoforge from "@package/com/railwayteam/railways/content/switches/neoforge";

declare module "@package/com/railwayteam/railways/content/switches" {
    export class $TrackSwitchBlockItem extends $TrackTargetingBlockItem {
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
        constructor(arg0: $Block_, arg1: $Item$Properties, arg2: $EdgePointType<never>);
    }
    export class $TrackSwitchBlockEntity extends $SmartBlockEntity implements $TransformableBlockEntity, $IHaveGoggleInformation {
        getTargetAnalogOutput(): number;
        getSwitch(): $TrackSwitch;
        isReverseLeft(): boolean;
        isReverseRight(): boolean;
        clientLazyTick(): void;
        setStatePonder(arg0: $TrackSwitchBlock$SwitchState_): void;
        hasExit(arg0: $TrackSwitchBlock$SwitchState_): boolean;
        getOverlayModel(): $PartialModel;
        isNormal(): boolean;
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
        getState(): $TrackSwitchBlock$SwitchState;
        isAutomatic(): boolean;
        isLocked(): boolean;
        ponderData: $TrackSwitchBlockEntity$PonderData;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        edgePoint: $TrackTargetingBehaviour<$TrackSwitch>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get targetAnalogOutput(): number;
        get switch(): $TrackSwitch;
        get reverseLeft(): boolean;
        get reverseRight(): boolean;
        set statePonder(value: $TrackSwitchBlock$SwitchState_);
        get overlayModel(): $PartialModel;
        get normal(): boolean;
        get state(): $TrackSwitchBlock$SwitchState;
        get automatic(): boolean;
        get locked(): boolean;
    }
    export class $TrackSwitchBlock$SwitchConstraint extends $Enum<$TrackSwitchBlock$SwitchConstraint> {
        canGoRight(): boolean;
        canGoLeft(): boolean;
        static values(): $TrackSwitchBlock$SwitchConstraint[];
        static valueOf(arg0: string): $TrackSwitchBlock$SwitchConstraint;
        static TO_LEFT: $TrackSwitchBlock$SwitchConstraint;
        static TO_RIGHT: $TrackSwitchBlock$SwitchConstraint;
        static NONE: $TrackSwitchBlock$SwitchConstraint;
    }
    /**
     * Values that may be interpreted as {@link $TrackSwitchBlock$SwitchConstraint}.
     */
    export type $TrackSwitchBlock$SwitchConstraint_ = "none" | "to_right" | "to_left";
    export class $SwitchDisplaySource extends $SingleLineDisplaySource {
        static BY_BLOCK_ENTITY: $SimpleRegistry$Multi<$BlockEntityType<never>, $DisplaySource>;
        static WHITESPACE: $MutableComponent;
        static EMPTY: $List<$MutableComponent>;
        static EMPTY_LINE: $MutableComponent;
        static BY_BLOCK: $SimpleRegistry$Multi<$Block, $DisplaySource>;
        constructor();
    }
    export class $TrackSwitchDebugVisualizer {
        static visualizePotentialLocations(): void;
        static visualizeSwitchExits(arg0: $TrackSwitch): void;
        constructor();
    }
    export class $TrackSwitch extends $SingleBlockEntityEdgePoint {
        trySetSwitchState(arg0: $TrackSwitchBlock$SwitchState_): boolean;
        getSwitchState(): $TrackSwitchBlock$SwitchState;
        static getSelectionPriority(): number;
        hasStraightExit(): boolean;
        hasRightExit(): boolean;
        hasLeftExit(): boolean;
        setSwitchState(arg0: $TrackSwitchBlock$SwitchState_): boolean;
        updateEdges(arg0: $TrackGraph): void;
        getSwitchTarget(): $TrackNodeLocation;
        shouldAutoTrainsSwitch(): boolean;
        getTargetState(arg0: $TrackNodeLocation): $TrackSwitchBlock$SwitchState;
        setEdgesActive(arg0: $TrackGraph): void;
        isAutomatic(): boolean;
        isLocked(): boolean;
        edgeLocation: $Couple<$TrackNodeLocation>;
        blockEntityPos: $BlockPos;
        blockEntityDimension: $ResourceKey<$Level>;
        id: $UUID;
        position: number;
        constructor();
        static get selectionPriority(): number;
        get switchTarget(): $TrackNodeLocation;
        set edgesActive(value: $TrackGraph);
        get automatic(): boolean;
        get locked(): boolean;
    }
    export class $TrackSwitchBlock extends $HorizontalDirectionalBlock implements $IBE<$TrackSwitchBlockEntity>, $IWrenchable {
        /**
         * @deprecated
         */
        hasAnalogOutputSignal(arg0: $BlockState_): boolean;
        /**
         * @deprecated
         */
        getAnalogOutputSignal(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): number;
        onProjectileHit(arg0: $Level_, arg1: $BlockState_, arg2: $BlockHitResult, arg3: $Projectile): void;
        neighborChanged(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Block_, arg4: $BlockPos_, arg5: boolean): void;
        useWithoutItem(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Player, arg4: $BlockHitResult): $InteractionResult;
        getBlockEntityType(): $BlockEntityType<$TrackSwitchBlockEntity>;
        static manual(arg0: $BlockBehaviour$Properties): $TrackSwitchBlock;
        getBlockEntityClass(): $Class<$TrackSwitchBlockEntity>;
        static automatic(arg0: $BlockBehaviour$Properties): $TrackSwitchBlock;
        getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        getCollisionShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        onRemove(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$TrackSwitchBlockEntity, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$TrackSwitchBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$TrackSwitchBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($TrackSwitchBlockEntity) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $TrackSwitchBlockEntity;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static LOCKED: $BooleanProperty;
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
        get blockEntityType(): $BlockEntityType<$TrackSwitchBlockEntity>;
        get blockEntityClass(): $Class<$TrackSwitchBlockEntity>;
    }
    export class $TrackSwitchBlockEntity$PonderData extends $Record {
        basePos(): $Vec3;
        leftBranch(): $Vec3;
        straightBranch(): $Vec3;
        rightBranch(): $Vec3;
        constructor(basePos: $Vec3_, leftBranch: $Vec3_, straightBranch: $Vec3_, rightBranch: $Vec3_);
    }
    /**
     * Values that may be interpreted as {@link $TrackSwitchBlockEntity$PonderData}.
     */
    export type $TrackSwitchBlockEntity$PonderData_ = { leftBranch?: $Vec3_, rightBranch?: $Vec3_, straightBranch?: $Vec3_, basePos?: $Vec3_,  } | [leftBranch?: $Vec3_, rightBranch?: $Vec3_, straightBranch?: $Vec3_, basePos?: $Vec3_, ];
    export class $TrackSwitchRenderer extends $SmartBlockEntityRenderer<$TrackSwitchBlockEntity> {
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $TrainHUDSwitchExtension {
        static renderOverlay(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        static tick(): void;
        static isAutomaticSwitch: boolean;
        static isLocked: boolean;
        static isWrong: boolean;
        static switchState: $TrackSwitchBlock$SwitchState;
        constructor();
    }
    export class $TrackSwitchBlock$SwitchState extends $Enum<$TrackSwitchBlock$SwitchState> implements $StringRepresentable {
        nextStateForPonder(arg0: $TrackSwitchBlock$SwitchConstraint_): $TrackSwitchBlock$SwitchState;
        static fromSteerDirection(arg0: $TravellingPoint$SteerDirection_, arg1: boolean): $TrackSwitchBlock$SwitchState;
        nextStateFor(arg0: $TrackSwitch, arg1: $TrackSwitchBlock$SwitchConstraint_): $TrackSwitchBlock$SwitchState;
        canSwitchTo(arg0: $TrackSwitchBlock$SwitchState_, arg1: $TrackSwitchBlock$SwitchConstraint_): boolean;
        static values(): $TrackSwitchBlock$SwitchState[];
        static valueOf(arg0: string): $TrackSwitchBlock$SwitchState;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static REVERSE_RIGHT: $TrackSwitchBlock$SwitchState;
        static NORMAL: $TrackSwitchBlock$SwitchState;
        static REVERSE_LEFT: $TrackSwitchBlock$SwitchState;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $TrackSwitchBlock$SwitchState}.
     */
    export type $TrackSwitchBlock$SwitchState_ = "normal" | "reverse_left" | "reverse_right";
    export class $TrackSwitchBlockEntity$AutoMode extends $Enum<$TrackSwitchBlockEntity$AutoMode> implements $INamedIconOptions {
    }
    /**
     * Values that may be interpreted as {@link $TrackSwitchBlockEntity$AutoMode}.
     */
    export type $TrackSwitchBlockEntity$AutoMode_ = "manual_only" | "auto";
}
