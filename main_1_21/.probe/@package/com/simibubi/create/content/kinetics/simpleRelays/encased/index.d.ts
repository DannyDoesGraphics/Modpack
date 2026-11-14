import { $MapCodec } from "@package/com/mojang/serialization";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $SuperByteBufferCache$Compartment } from "@package/net/createmod/catnip/render";
import { $Supplier_, $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $InteractionHand_, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $Direction$Axis_, $BlockPos_, $Direction_, $Direction$Axis, $IdMapper } from "@package/net/minecraft/core";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $KineticBlockEntityRenderer, $KineticBlockEntity, $RotatedPillarKineticBlock, $KineticBlockEntityVisual, $AbstractEncasedShaftBlock } from "@package/com/simibubi/create/content/kinetics/base";
import { $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Class } from "@package/java/lang";
import { $Couple } from "@package/net/createmod/catnip/data";
import { $ItemRequirement } from "@package/com/simibubi/create/content/schematics/requirement";
import { $LevelReader, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $SpecialBlockItemRequirement } from "@package/com/simibubi/create/api/schematic/requirement";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $CTSpriteShiftEntry } from "@package/com/simibubi/create/foundation/block/connected";
import { $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ICogWheel, $SimpleKineticBlockEntity } from "@package/com/simibubi/create/content/kinetics/simpleRelays";
import { $EncasedBlock, $EncasedCTBehaviour } from "@package/com/simibubi/create/content/decoration/encasing";
import { $EnumProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $Model } from "@package/dev/engine_room/flywheel/api/model";
import { $Rotation_, $Mirror_, $Block } from "@package/net/minecraft/world/level/block";
import { $TransformableBlock } from "@package/com/simibubi/create/api/contraption/transformable";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/content/kinetics/simpleRelays/encased" {
    export class $EncasedCogVisual extends $KineticBlockEntityVisual<$KineticBlockEntity> {
        static large(arg0: $VisualizationContext, arg1: $KineticBlockEntity, arg2: number): $EncasedCogVisual;
        static small(arg0: $VisualizationContext, arg1: $KineticBlockEntity, arg2: number): $EncasedCogVisual;
        constructor(arg0: $VisualizationContext, arg1: $KineticBlockEntity, arg2: boolean, arg3: number, arg4: $Model);
    }
    export class $EncasedCogwheelBlock extends $RotatedPillarKineticBlock implements $ICogWheel, $IBE<$SimpleKineticBlockEntity>, $SpecialBlockItemRequirement, $TransformableBlock, $EncasedBlock {
        swapShafts(arg0: $BlockState_): $BlockState;
        swapShaftsForRotation(arg0: $BlockState_, arg1: $Rotation_, arg2: $Direction$Axis_): $BlockState;
        skipRendering(arg0: $BlockState_, arg1: $BlockState_, arg2: $Direction_): boolean;
        getCasing(): $Block;
        handleEncasing(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $ItemStack_, arg4: $Player, arg5: $InteractionHand_, arg6: $BlockHitResult): void;
        getBlockEntityType(): $BlockEntityType<$SimpleKineticBlockEntity>;
        getRequiredItems(arg0: $BlockState_, arg1: $BlockEntity): $ItemRequirement;
        isLargeCog(): boolean;
        isSmallCog(): boolean;
        getBlockEntityClass(): $Class<$SimpleKineticBlockEntity>;
        transform(arg0: $BlockState_, arg1: $StructureTransform): $BlockState;
        mirror(arg0: $BlockState_, arg1: $Mirror_): $BlockState;
        canSurvive(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): boolean;
        isDedicatedCogWheel(): boolean;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$SimpleKineticBlockEntity, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$SimpleKineticBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$SimpleKineticBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($SimpleKineticBlockEntity) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $SimpleKineticBlockEntity;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static TOP_SHAFT: $BooleanProperty;
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
        static BOTTOM_SHAFT: $BooleanProperty;
        static AXIS: $EnumProperty<$Direction$Axis>;
        constructor(arg0: $BlockBehaviour$Properties, arg1: boolean, arg2: $Supplier_<$Block>);
        get casing(): $Block;
        get blockEntityType(): $BlockEntityType<$SimpleKineticBlockEntity>;
        get largeCog(): boolean;
        get smallCog(): boolean;
        get blockEntityClass(): $Class<$SimpleKineticBlockEntity>;
        get dedicatedCogWheel(): boolean;
    }
    export class $EncasedShaftBlock extends $AbstractEncasedShaftBlock implements $IBE<$KineticBlockEntity>, $SpecialBlockItemRequirement, $EncasedBlock {
        getCasing(): $Block;
        handleEncasing(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $ItemStack_, arg4: $Player, arg5: $InteractionHand_, arg6: $BlockHitResult): void;
        getBlockEntityType(): $BlockEntityType<$KineticBlockEntity>;
        getRequiredItems(arg0: $BlockState_, arg1: $BlockEntity): $ItemRequirement;
        getBlockEntityClass(): $Class<$KineticBlockEntity>;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$KineticBlockEntity, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$KineticBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$KineticBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($KineticBlockEntity) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $KineticBlockEntity;
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
        static AXIS: $EnumProperty<$Direction$Axis>;
        constructor(arg0: $BlockBehaviour$Properties, arg1: $Supplier_<$Block>);
        get casing(): $Block;
        get blockEntityType(): $BlockEntityType<$KineticBlockEntity>;
        get blockEntityClass(): $Class<$KineticBlockEntity>;
    }
    export class $EncasedCogCTBehaviour extends $EncasedCTBehaviour {
        constructor(arg0: $CTSpriteShiftEntry);
        constructor(arg0: $CTSpriteShiftEntry, arg1: $Couple<$CTSpriteShiftEntry>);
    }
    export class $EncasedCogRenderer extends $KineticBlockEntityRenderer<$SimpleKineticBlockEntity> {
        static large(arg0: $BlockEntityRendererProvider$Context): $EncasedCogRenderer;
        static small(arg0: $BlockEntityRendererProvider$Context): $EncasedCogRenderer;
        static KINETIC_BLOCK: $SuperByteBufferCache$Compartment<$BlockState>;
        static rainbowMode: boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context, arg1: boolean);
    }
}
