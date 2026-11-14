import { $LevelAccessor, $LevelReader, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $Item, $ItemStack } from "@package/net/minecraft/world/item";
import { $FluidState, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $EnumMap } from "@package/java/util";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";
import { $Supplier_ } from "@package/java/util/function";
import { $InteractionResult } from "@package/net/minecraft/world";
import { $EnumProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $ShapeWrapper } from "@package/com/railwayteam/railways/util";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction_, $IdMapper } from "@package/net/minecraft/core";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $StyledSmokeStackBlock } from "@package/com/railwayteam/railways/content/smokestack/block";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockStateBlockItemGroup } from "@package/com/railwayteam/railways/content/buffer";
import { $ProperWaterloggedBlock } from "@package/com/simibubi/create/foundation/block";
import { $Rotation_, $Mirror_, $Block } from "@package/net/minecraft/world/level/block";
import { $Enum } from "@package/java/lang";
import { $SmokeEmissionParams_, $RotationType, $SmokestackStyle, $SmokeEmissionParams, $SmokestackStyle$Context } from "@package/com/railwayteam/railways/content/smokestack";

declare module "@package/com/railwayteam/railways/content/smokestack/block/variable" {
    export class $VariableStackPart extends $Enum<$VariableStackPart> implements $StringRepresentable {
        isSegment(): boolean;
        isFullHeight(): boolean;
        generatedModelName(): string;
        static values(): $VariableStackPart[];
        static valueOf(arg0: string): $VariableStackPart;
        isTop(): boolean;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static SINGLE: $VariableStackPart;
        static SEGMENT: $VariableStackPart;
        static DOUBLE: $VariableStackPart;
        get segment(): boolean;
        get fullHeight(): boolean;
        get top(): boolean;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $VariableStackPart}.
     */
    export type $VariableStackPart_ = "single" | "double" | "segment";
    export class $SmokeStackExtenderBlock extends $Block implements $ProperWaterloggedBlock, $IWrenchable, $VariableStack {
        getInformationSource(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): $BlockPos;
        findRoot(arg0: $LevelAccessor, arg1: $BlockPos_): $BlockPos;
        updateShape(arg0: $BlockState_, arg1: $Direction_, arg2: $BlockState_, arg3: $LevelAccessor, arg4: $BlockPos_, arg5: $BlockPos_): $BlockState;
        onPlace(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        partProperty(): $EnumProperty<$VariableStackPart>;
        defaultPart(): $VariableStackPart;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        rotate(arg0: $BlockState_, arg1: $Rotation_): $BlockState;
        getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        mirror(arg0: $BlockState_, arg1: $Mirror_): $BlockState;
        getFluidState(arg0: $BlockState_): $FluidState;
        canSurvive(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): boolean;
        onRemove(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        baseBlock(): $VariableSmokeStackBlock;
        withWater(arg0: $BlockState_, arg1: $BlockPlaceContext): $BlockState;
        updateWater(arg0: $LevelAccessor, arg1: $BlockState_, arg2: $BlockPos_): void;
        fluidState(arg0: $BlockState_): $FluidState;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
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
        static STYLE: $EnumProperty<$SmokestackStyle>;
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
        constructor(arg0: $BlockBehaviour$Properties, arg1: $RotationType, arg2: $EnumMap<$VariableStackPart_, $ShapeWrapper>, arg3: $Supplier_<$BlockStateBlockItemGroup<$SmokestackStyle$Context, $SmokestackStyle>>, arg4: $Supplier_<$VariableSmokeStackBlock>, arg5: $EnumProperty<$VariableStackPart_>, arg6: $VariableStackPart_);
    }
    export class $VariableStackPart$Type extends $Enum<$VariableStackPart$Type> {
        static values(): $VariableStackPart$Type[];
        static valueOf(arg0: string): $VariableStackPart$Type;
        static NO_HALF: $VariableStackPart$Type;
        modelSuffix: string;
        defaultPart: $VariableStackPart;
        property: $EnumProperty<$VariableStackPart>;
        static STANDARD: $VariableStackPart$Type;
    }
    /**
     * Values that may be interpreted as {@link $VariableStackPart$Type}.
     */
    export type $VariableStackPart$Type_ = "standard" | "no_half";
    export class $VariableSmokeStackBlock extends $StyledSmokeStackBlock implements $VariableStack {
        static incrementSize(arg0: $LevelAccessor, arg1: $BlockPos_): void;
        onPlace(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        partProperty(): $EnumProperty<$VariableStackPart>;
        defaultPart(): $VariableStackPart;
        extenderBlock(): $SmokeStackExtenderBlock;
        static queueHeightUpdate(arg0: $LevelAccessor, arg1: $BlockPos_): void;
        tick(arg0: $BlockState_, arg1: $ServerLevel, arg2: $BlockPos_, arg3: $RandomSource): void;
        rotationType: $RotationType;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static UPDATE_ALL: number;
        static WATERLOGGED: $BooleanProperty;
        static PART_NO_HALF: $EnumProperty<$VariableStackPart>;
        static PART: $EnumProperty<$VariableStackPart>;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static STYLE: $EnumProperty<$SmokestackStyle>;
        createsStationarySmoke: boolean;
        static POWERED: $BooleanProperty;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static ENABLED: $BooleanProperty;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        emissionParams: $SmokeEmissionParams;
        constructor(arg0: $BlockBehaviour$Properties, arg1: $RotationType, arg2: $SmokeEmissionParams_, arg3: $EnumMap<$VariableStackPart_, $ShapeWrapper>, arg4: boolean, arg5: $Supplier_<$BlockStateBlockItemGroup<$SmokestackStyle$Context, $SmokestackStyle>>, arg6: $Supplier_<$SmokeStackExtenderBlock>, arg7: $EnumProperty<$VariableStackPart_>, arg8: $VariableStackPart_);
    }
    export class $VariableStack {
    }
    export interface $VariableStack {
        partProperty(): $EnumProperty<$VariableStackPart>;
        defaultPart(): $VariableStackPart;
    }
}
