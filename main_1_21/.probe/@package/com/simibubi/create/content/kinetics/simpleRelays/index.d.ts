import { $MapCodec } from "@package/com/mojang/serialization";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $Map } from "@package/java/util";
import { $SuperByteBufferCache$Compartment } from "@package/net/createmod/catnip/render";
import { $InteractionResult, $InteractionHand_, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $Predicate, $Function_, $Consumer_ } from "@package/java/util/function";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $Direction$Axis_, $BlockPos_, $Direction_, $Direction$Axis, $IdMapper } from "@package/net/minecraft/core";
import { $SingleAxisRotatingVisual, $KineticBlockEntityRenderer, $IRotate, $KineticBlockEntity, $RotatedPillarKineticBlock } from "@package/com/simibubi/create/content/kinetics/base";
import { $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $ProperWaterloggedBlock, $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Class } from "@package/java/lang";
import { $LevelAccessor, $LevelReader, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $BlockItem, $Item, $ItemStack_, $ItemStack, $Item$Properties } from "@package/net/minecraft/world/item";
import { $FluidState, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $EncasableBlock } from "@package/com/simibubi/create/content/decoration/encasing";
import { $EnumProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $IWrenchableWithBracket } from "@package/com/simibubi/create/content/equipment/wrench";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $BakedModelWrapper } from "@package/net/neoforged/neoforge/client/model";
import { $PlacementOffset, $IPlacementHelper } from "@package/net/createmod/catnip/placement";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoleHelper } from "@package/com/simibubi/create/foundation/placement";
import { $BlockEntityVisual } from "@package/dev/engine_room/flywheel/api/visual";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $TransformableBlockEntity } from "@package/com/simibubi/create/api/contraption/transformable";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as encased from "@package/com/simibubi/create/content/kinetics/simpleRelays/encased";

declare module "@package/com/simibubi/create/content/kinetics/simpleRelays" {
    export class $BracketedKineticBlockEntityVisual$LargeCogVisual extends $SingleAxisRotatingVisual<$BracketedKineticBlockEntity> {
        static rainbowMode: boolean;
    }
    export class $CogwheelBlockItem$SmallCogHelper extends $CogwheelBlockItem$DiagonalCogHelper {
    }
    export class $ShaftBlock$PlacementHelper extends $PoleHelper<$Direction$Axis> {
    }
    export class $BracketedKineticBlockEntity extends $SimpleKineticBlockEntity implements $TransformableBlockEntity {
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
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
    }
    export class $CogwheelBlockItem$LargeCogHelper extends $CogwheelBlockItem$DiagonalCogHelper {
    }
    export class $ICogWheel {
        static isLargeCog(arg0: $BlockState_): boolean;
        static isLargeCog(arg0: $Block_): boolean;
        static isDedicatedCogWheel(arg0: $Block_): boolean;
        static isDedicatedCogItem(arg0: $ItemStack_): boolean;
        static isSmallCogItem(arg0: $ItemStack_): boolean;
        static isLargeCogItem(arg0: $ItemStack_): boolean;
        static isSmallCog(arg0: $BlockState_): boolean;
        static isSmallCog(arg0: $Block_): boolean;
    }
    export interface $ICogWheel extends $IRotate {
        isLargeCog(): boolean;
        isDedicatedCogWheel(): boolean;
        isSmallCog(): boolean;
    }
    export class $AbstractShaftBlock extends $RotatedPillarKineticBlock implements $IBE<$KineticBlockEntity>, $ProperWaterloggedBlock {
        updateShape(arg0: $BlockState_, arg1: $Direction_, arg2: $BlockState_, arg3: $LevelAccessor, arg4: $BlockPos_, arg5: $BlockPos_): $BlockState;
        getBlockEntityClass(): $Class<$KineticBlockEntity>;
        getFluidState(arg0: $BlockState_): $FluidState;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$KineticBlockEntity, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$KineticBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$KineticBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($KineticBlockEntity) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $KineticBlockEntity;
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
        static AXIS: $EnumProperty<$Direction$Axis>;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityClass(): $Class<$KineticBlockEntity>;
    }
    export class $SimpleKineticBlockEntity extends $KineticBlockEntity {
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
    }
    export class $CogwheelBlockItem$IntegratedLargeCogHelper implements $IPlacementHelper {
        getItemPredicate(): $Predicate<$ItemStack>;
        getStatePredicate(): $Predicate<$BlockState>;
        getOffset(arg0: $Player, arg1: $Level_, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockHitResult): $PlacementOffset;
        matchesState(arg0: $BlockState_): boolean;
        renderAt(arg0: $BlockPos_, arg1: $BlockState_, arg2: $BlockHitResult, arg3: $PlacementOffset): void;
        displayGhost(arg0: $PlacementOffset): void;
        matchesItem(arg0: $ItemStack_): boolean;
        getOffset(arg0: $Player, arg1: $Level_, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockHitResult, arg5: $ItemStack_): $PlacementOffset;
        constructor();
        get itemPredicate(): $Predicate<$ItemStack>;
        get statePredicate(): $Predicate<$BlockState>;
    }
    export class $CogwheelBlockItem$DiagonalCogHelper implements $IPlacementHelper {
        getStatePredicate(): $Predicate<$BlockState>;
        getOffset(arg0: $Player, arg1: $Level_, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockHitResult): $PlacementOffset;
        matchesState(arg0: $BlockState_): boolean;
        renderAt(arg0: $BlockPos_, arg1: $BlockState_, arg2: $BlockHitResult, arg3: $PlacementOffset): void;
        displayGhost(arg0: $PlacementOffset): void;
        matchesItem(arg0: $ItemStack_): boolean;
        getOffset(arg0: $Player, arg1: $Level_, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockHitResult, arg5: $ItemStack_): $PlacementOffset;
        constructor();
        get statePredicate(): $Predicate<$BlockState>;
    }
    export class $CogwheelBlockItem extends $BlockItem {
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
        constructor(arg0: $CogWheelBlock, arg1: $Item$Properties);
    }
    export class $BracketedKineticBlockModel extends $BakedModelWrapper<$BakedModel> {
        constructor(arg0: $BakedModel);
    }
    export class $ShaftBlock extends $AbstractSimpleShaftBlock implements $EncasableBlock {
        static pickCorrectShaftType(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): $BlockState;
        static isShaft(arg0: $BlockState_): boolean;
        getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        tryEncase(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $ItemStack_, arg4: $Player, arg5: $InteractionHand_, arg6: $BlockHitResult): $ItemInteractionResult;
        playEncaseSound(arg0: $Level_, arg1: $BlockPos_): void;
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
        static placementHelperId: number;
        hasCollision: boolean;
        static AXIS: $EnumProperty<$Direction$Axis>;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $CogWheelBlock extends $AbstractSimpleShaftBlock implements $ICogWheel, $EncasableBlock {
        static isValidCogwheelPosition(arg0: boolean, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Direction$Axis_): boolean;
        static large(arg0: $BlockBehaviour$Properties): $CogWheelBlock;
        isLargeCog(): boolean;
        isDedicatedCogWheel(): boolean;
        isSmallCog(): boolean;
        getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        static small(arg0: $BlockBehaviour$Properties): $CogWheelBlock;
        canSurvive(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): boolean;
        tryEncase(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $ItemStack_, arg4: $Player, arg5: $InteractionHand_, arg6: $BlockHitResult): $ItemInteractionResult;
        playEncaseSound(arg0: $Level_, arg1: $BlockPos_): void;
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
        static AXIS: $EnumProperty<$Direction$Axis>;
        get largeCog(): boolean;
        get dedicatedCogWheel(): boolean;
        get smallCog(): boolean;
    }
    export class $CogwheelBlockItem$IntegratedSmallCogHelper implements $IPlacementHelper {
        getItemPredicate(): $Predicate<$ItemStack>;
        getStatePredicate(): $Predicate<$BlockState>;
        getOffset(arg0: $Player, arg1: $Level_, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockHitResult): $PlacementOffset;
        matchesState(arg0: $BlockState_): boolean;
        renderAt(arg0: $BlockPos_, arg1: $BlockState_, arg2: $BlockHitResult, arg3: $PlacementOffset): void;
        displayGhost(arg0: $PlacementOffset): void;
        matchesItem(arg0: $ItemStack_): boolean;
        getOffset(arg0: $Player, arg1: $Level_, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockHitResult, arg5: $ItemStack_): $PlacementOffset;
        constructor();
        get itemPredicate(): $Predicate<$ItemStack>;
        get statePredicate(): $Predicate<$BlockState>;
    }
    export class $BracketedKineticBlockEntityRenderer extends $KineticBlockEntityRenderer<$BracketedKineticBlockEntity> {
        static getShaftAngleOffset(arg0: $Direction$Axis_, arg1: $BlockPos_): number;
        static getAngleForLargeCogShaft(arg0: $SimpleKineticBlockEntity, arg1: $Direction$Axis_): number;
        static KINETIC_BLOCK: $SuperByteBufferCache$Compartment<$BlockState>;
        static rainbowMode: boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $BracketedKineticBlockEntityVisual {
        static create(arg0: $VisualizationContext, arg1: $BracketedKineticBlockEntity, arg2: number): $BlockEntityVisual<$BracketedKineticBlockEntity>;
        constructor();
    }
    export class $AbstractSimpleShaftBlock extends $AbstractShaftBlock implements $IWrenchableWithBracket {
        removeBracket(arg0: $BlockGetter, arg1: $BlockPos_, arg2: boolean): ($ItemStack) | undefined;
        tryRemoveBracket(arg0: $UseOnContext): boolean;
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
        static AXIS: $EnumProperty<$Direction$Axis>;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $BracketedKineticBlockModel$BracketedModelData {
    }
}
