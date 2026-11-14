import { $MapCodec } from "@package/com/mojang/serialization";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $FluidTankBlockEntity } from "@package/com/simibubi/create/content/fluids/tank";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $WeakReference } from "@package/java/lang/ref";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $SpecialBlockStateGen } from "@package/com/simibubi/create/foundation/data";
import { $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $AbstractTickableSoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $Enum, $Class } from "@package/java/lang";
import { $LevelAccessor, $LevelReader, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $Item } from "@package/net/minecraft/world/item";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $DirectionProperty, $EnumProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $IHaveGoggleInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $Rotation_, $Block_, $Mirror_, $Block } from "@package/net/minecraft/world/level/block";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/content/decoration/steamWhistle" {
    export class $WhistleBlock$WhistleSize extends $Enum<$WhistleBlock$WhistleSize> implements $StringRepresentable {
        static values(): $WhistleBlock$WhistleSize[];
        static valueOf(arg0: string): $WhistleBlock$WhistleSize;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static SMALL: $WhistleBlock$WhistleSize;
        static MEDIUM: $WhistleBlock$WhistleSize;
        static LARGE: $WhistleBlock$WhistleSize;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $WhistleBlock$WhistleSize}.
     */
    export type $WhistleBlock$WhistleSize_ = "small" | "medium" | "large";
    export class $WhistleBlock extends $Block implements $IBE<$WhistleBlockEntity>, $IWrenchable {
        static getAttachedDirection(arg0: $BlockState_): $Direction;
        static incrementSize(arg0: $LevelAccessor, arg1: $BlockPos_): void;
        static queuePitchUpdate(arg0: $LevelAccessor, arg1: $BlockPos_): void;
        updateShape(arg0: $BlockState_, arg1: $Direction_, arg2: $BlockState_, arg3: $LevelAccessor, arg4: $BlockPos_, arg5: $BlockPos_): $BlockState;
        onPlace(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        neighborChanged(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Block_, arg4: $BlockPos_, arg5: boolean): void;
        getBlockEntityType(): $BlockEntityType<$WhistleBlockEntity>;
        getBlockEntityClass(): $Class<$WhistleBlockEntity>;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        rotate(arg0: $BlockState_, arg1: $Rotation_): $BlockState;
        tick(arg0: $BlockState_, arg1: $ServerLevel, arg2: $BlockPos_, arg3: $RandomSource): void;
        getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        mirror(arg0: $BlockState_, arg1: $Mirror_): $BlockState;
        canSurvive(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): boolean;
        onRemove(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$WhistleBlockEntity, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$WhistleBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$WhistleBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($WhistleBlockEntity) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $WhistleBlockEntity;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        static UPDATE_IMMEDIATE: number;
        static WALL: $BooleanProperty;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static SIZE: $EnumProperty<$WhistleBlock$WhistleSize>;
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
        get blockEntityType(): $BlockEntityType<$WhistleBlockEntity>;
        get blockEntityClass(): $Class<$WhistleBlockEntity>;
    }
    export class $WhistleGenerator extends $SpecialBlockStateGen {
        constructor();
    }
    export class $WhistleExtenderBlock extends $Block implements $IWrenchable {
        static findRoot(arg0: $LevelAccessor, arg1: $BlockPos_): $BlockPos;
        updateShape(arg0: $BlockState_, arg1: $Direction_, arg2: $BlockState_, arg3: $LevelAccessor, arg4: $BlockPos_, arg5: $BlockPos_): $BlockState;
        onPlace(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        canSurvive(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): boolean;
        onRemove(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static SIZE: $EnumProperty<$WhistleBlock$WhistleSize>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static SHAPE: $EnumProperty<$WhistleExtenderBlock$WhistleExtenderShape>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $WhistleRenderer extends $SafeBlockEntityRenderer<$WhistleBlockEntity> {
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $WhistleSoundInstance extends $AbstractTickableSoundInstance {
        getOctave(): $WhistleBlock$WhistleSize;
        setPitch(arg0: number): void;
        fadeOut(): void;
        keepAlive(): void;
        constructor(arg0: $WhistleBlock$WhistleSize_, arg1: $BlockPos_);
        get octave(): $WhistleBlock$WhistleSize;
        set pitch(value: number);
    }
    export class $WhistleBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation {
        updatePitch(): void;
        getTank(): $FluidTankBlockEntity;
        getPitchId(): number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        source: $WeakReference<$FluidTankBlockEntity>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        animation: $LerpedFloat;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get tank(): $FluidTankBlockEntity;
        get pitchId(): number;
    }
    export class $WhistleExtenderBlock$WhistleExtenderShape extends $Enum<$WhistleExtenderBlock$WhistleExtenderShape> implements $StringRepresentable {
        static values(): $WhistleExtenderBlock$WhistleExtenderShape[];
        static valueOf(arg0: string): $WhistleExtenderBlock$WhistleExtenderShape;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static SINGLE: $WhistleExtenderBlock$WhistleExtenderShape;
        static DOUBLE: $WhistleExtenderBlock$WhistleExtenderShape;
        static DOUBLE_CONNECTED: $WhistleExtenderBlock$WhistleExtenderShape;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $WhistleExtenderBlock$WhistleExtenderShape}.
     */
    export type $WhistleExtenderBlock$WhistleExtenderShape_ = "single" | "double" | "double_connected";
}
