import { $BlockAndTintGetter, $LevelAccessor, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $DyeColor_, $Item, $ItemStack_, $ItemStack, $Item$Properties } from "@package/net/minecraft/world/item";
import { $FluidState, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $AEBaseBlockItem, $AEBaseEntityBlock } from "@package/appeng/block";
import { $IAEFacade } from "@package/appeng/integration/abstraction";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $AccessRestriction, $Actionable_ } from "@package/appeng/api/config";
import { $IAEItemPowerStorage } from "@package/appeng/api/implementations/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $WirelessAccessPointBlockEntity, $CableBusBlockEntity, $CrystalResonanceGeneratorBlockEntity, $CreativeEnergyCellBlockEntity, $EnergyCellBlockEntity, $ControllerBlockEntity, $EnergyAcceptorBlockEntity } from "@package/appeng/blockentity/networking";
import { $Map } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $EnumProperty, $IntegerProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPos_, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $BlockPlaceContext } from "@package/net/minecraft/world/item/context";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $BlockColor } from "@package/net/minecraft/client/color/block";
import { $Block_, $SimpleWaterloggedBlock, $Block } from "@package/net/minecraft/world/level/block";
import { $Enum, $ThreadLocal } from "@package/java/lang";

declare module "@package/appeng/block/networking" {
    export class $EnergyCellBlockItem extends $AEBaseBlockItem implements $IAEItemPowerStorage {
        getAEMaxPower(arg0: $ItemStack_): number;
        getPowerFlow(arg0: $ItemStack_): $AccessRestriction;
        extractAEPower(arg0: $ItemStack_, arg1: number, arg2: $Actionable_): number;
        getAECurrentPower(arg0: $ItemStack_): number;
        injectAEPower(arg0: $ItemStack_, arg1: number, arg2: $Actionable_): number;
        getChargeRate(arg0: $ItemStack_): number;
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
        constructor(arg0: $Block_, arg1: $Item$Properties);
    }
    export class $ControllerBlock$ControllerBlockState extends $Enum<$ControllerBlock$ControllerBlockState> implements $StringRepresentable {
        static values(): $ControllerBlock$ControllerBlockState[];
        static valueOf(arg0: string): $ControllerBlock$ControllerBlockState;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static conflicted: $ControllerBlock$ControllerBlockState;
        static offline: $ControllerBlock$ControllerBlockState;
        static online: $ControllerBlock$ControllerBlockState;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ControllerBlock$ControllerBlockState}.
     */
    export type $ControllerBlock$ControllerBlockState_ = "offline" | "online" | "conflicted";
    export class $WirelessAccessPointBlock$State extends $Enum<$WirelessAccessPointBlock$State> implements $StringRepresentable {
        static values(): $WirelessAccessPointBlock$State[];
        static valueOf(arg0: string): $WirelessAccessPointBlock$State;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static HAS_CHANNEL: $WirelessAccessPointBlock$State;
        static OFF: $WirelessAccessPointBlock$State;
        static ON: $WirelessAccessPointBlock$State;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $WirelessAccessPointBlock$State}.
     */
    export type $WirelessAccessPointBlock$State_ = "off" | "on" | "has_channel";
    export class $ControllerBlock extends $AEBaseEntityBlock<$ControllerBlockEntity> {
        updateShape(arg0: $BlockState_, arg1: $Direction_, arg2: $BlockState_, arg3: $LevelAccessor, arg4: $BlockPos_, arg5: $BlockPos_): $BlockState;
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
        static CONTROLLER_TYPE: $EnumProperty<$ControllerBlock$ControllerRenderType>;
        static UPDATE_CLIENTS: number;
        static CONTROLLER_STATE: $EnumProperty<$ControllerBlock$ControllerBlockState>;
        hasCollision: boolean;
        constructor();
    }
    export class $WirelessAccessPointBlock extends $AEBaseEntityBlock<$WirelessAccessPointBlockEntity> implements $SimpleWaterloggedBlock {
        propagatesSkylightDown(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
        updateShape(arg0: $BlockState_, arg1: $Direction_, arg2: $BlockState_, arg3: $LevelAccessor, arg4: $BlockPos_, arg5: $BlockPos_): $BlockState;
        getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        getFluidState(arg0: $BlockState_): $FluidState;
        getCollisionShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
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
        static STATE: $EnumProperty<$WirelessAccessPointBlock$State>;
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
        constructor();
    }
    export class $CrystalResonanceGeneratorBlock$State extends $Enum<$CrystalResonanceGeneratorBlock$State> implements $StringRepresentable {
        static values(): $CrystalResonanceGeneratorBlock$State[];
        static valueOf(arg0: string): $CrystalResonanceGeneratorBlock$State;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static HAS_CHANNEL: $CrystalResonanceGeneratorBlock$State;
        static OFF: $CrystalResonanceGeneratorBlock$State;
        static ON: $CrystalResonanceGeneratorBlock$State;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CrystalResonanceGeneratorBlock$State}.
     */
    export type $CrystalResonanceGeneratorBlock$State_ = "off" | "on" | "has_channel";
    export class $CrystalResonanceGeneratorBlock extends $AEBaseEntityBlock<$CrystalResonanceGeneratorBlockEntity> implements $SimpleWaterloggedBlock {
        propagatesSkylightDown(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
        updateShape(arg0: $BlockState_, arg1: $Direction_, arg2: $BlockState_, arg3: $LevelAccessor, arg4: $BlockPos_, arg5: $BlockPos_): $BlockState;
        getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        getFluidState(arg0: $BlockState_): $FluidState;
        getCollisionShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
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
        constructor();
    }
    export class $CableBusBlock extends $AEBaseEntityBlock<$CableBusBlockEntity> implements $IAEFacade, $SimpleWaterloggedBlock {
        propagatesSkylightDown(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
        getSignal(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): number;
        getDirectSignal(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): number;
        getStateForPlacement(arg0: $Level_, arg1: $BlockPos_): $BlockState;
        updateShape(arg0: $BlockState_, arg1: $Direction_, arg2: $BlockState_, arg3: $LevelAccessor, arg4: $BlockPos_, arg5: $BlockPos_): $BlockState;
        neighborChanged(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Block_, arg4: $BlockPos_, arg5: boolean): void;
        isSignalSource(arg0: $BlockState_): boolean;
        canBeReplaced(arg0: $BlockState_, arg1: $BlockPlaceContext): boolean;
        recolorBlock(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_, arg3: $DyeColor_, arg4: $Player): boolean;
        getFacadeState(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): $BlockState;
        getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        getFluidState(arg0: $BlockState_): $FluidState;
        getCollisionShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        entityInside(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Entity): void;
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
        static RENDERING_FACADE_DIRECTION: $ThreadLocal<$Direction>;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor();
    }
    export class $EnergyAcceptorBlock extends $AEBaseEntityBlock<$EnergyAcceptorBlockEntity> {
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
        constructor();
    }
    export class $CreativeEnergyCellBlock extends $AEBaseEntityBlock<$CreativeEnergyCellBlockEntity> {
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
        constructor();
    }
    export class $ControllerBlock$ControllerRenderType extends $Enum<$ControllerBlock$ControllerRenderType> implements $StringRepresentable {
        static values(): $ControllerBlock$ControllerRenderType[];
        static valueOf(arg0: string): $ControllerBlock$ControllerRenderType;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static inside_a: $ControllerBlock$ControllerRenderType;
        static inside_b: $ControllerBlock$ControllerRenderType;
        static column_z: $ControllerBlock$ControllerRenderType;
        static column_y: $ControllerBlock$ControllerRenderType;
        static column_x: $ControllerBlock$ControllerRenderType;
        static block: $ControllerBlock$ControllerRenderType;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ControllerBlock$ControllerRenderType}.
     */
    export type $ControllerBlock$ControllerRenderType_ = "block" | "column_x" | "column_y" | "column_z" | "inside_a" | "inside_b";
    export class $EnergyCellBlock extends $AEBaseEntityBlock<$EnergyCellBlockEntity> {
        getChargeRate(): number;
        getMaxPower(): number;
        getPriority(): number;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static MAX_FULLNESS: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static ENERGY_STORAGE: $IntegerProperty;
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
        constructor(arg0: number, arg1: number, arg2: number);
        get chargeRate(): number;
        get maxPower(): number;
        get priority(): number;
    }
    export class $CableBusColor implements $BlockColor {
        getColor(arg0: $BlockState_, arg1: $BlockAndTintGetter, arg2: $BlockPos_, arg3: number): number;
        constructor();
    }
}
