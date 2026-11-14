import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $SignalBlockEntity, $SignalBlockEntity$SignalState, $SignalBlockEntity$SignalState_ } from "@package/com/simibubi/create/content/trains/signal";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $Optional } from "@package/java/util";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $BiConsumer_, $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $SpecialBlockStateGen } from "@package/com/simibubi/create/foundation/data";
import { $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Class } from "@package/java/lang";
import { $Couple } from "@package/net/createmod/catnip/data";
import { $ItemRequirement } from "@package/com/simibubi/create/content/schematics/requirement";
import { $LevelAccessor, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $SpecialBlockItemRequirement } from "@package/com/simibubi/create/api/schematic/requirement";
import { $DyeColor_, $Item, $ItemStack, $DyeColor } from "@package/net/minecraft/world/item";
import { $FluidState, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $DirectionProperty, $EnumProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $IOverridableSignal } from "@package/com/railwayteam/railways/content/distant_signals";
import { $HorizontalDirectionalBlock, $Block_, $SimpleWaterloggedBlock } from "@package/net/minecraft/world/level/block";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/content/redstone/nixieTube" {
    export class $NixieTubeGenerator extends $SpecialBlockStateGen {
        constructor();
    }
    export class $NixieTubeBlockEntity extends $SmartBlockEntity implements $IOverridableSignal {
        updateRedstoneStrength(arg0: number): void;
        displayEmptyText(arg0: number): void;
        displayCustomText(arg0: string, arg1: number): void;
        reactsToRedstone(): boolean;
        clearCustomText(): void;
        getRedstoneStrength(): number;
        getFullText(): $MutableComponent;
        railways$getOverriddenState(): $Optional<any>;
        railways$refresh(arg0: $SignalBlockEntity, arg1: $SignalBlockEntity$SignalState_, arg2: number, arg3: boolean): void;
        getDisplayedStrings(): $Couple<string>;
        updateDisplayedStrings(): void;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        railways$refresh(arg0: $SignalBlockEntity, arg1: $SignalBlockEntity$SignalState_, arg2: number): void;
        computerSignal: $NixieTubeBlockEntity$ComputerSignal;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        computerBehaviour: $AbstractComputerBehaviour;
        signalState: $SignalBlockEntity$SignalState;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get redstoneStrength(): number;
        get fullText(): $MutableComponent;
        get displayedStrings(): $Couple<string>;
    }
    export class $NixieTubeBlockEntity$ComputerSignal$TubeDisplay {
        decode(arg0: number[], arg1: number): void;
        encode(arg0: number[], arg1: number): void;
        blinkOffTime: number;
        r: number;
        b: number;
        blinkPeriod: number;
        glowHeight: number;
        g: number;
        static ENCODED_SIZE: number;
        glowWidth: number;
        constructor();
    }
    export class $NixieTubeBlock extends $DoubleFaceAttachedBlock implements $IBE<$NixieTubeBlockEntity>, $IWrenchable, $SimpleWaterloggedBlock, $SpecialBlockItemRequirement {
        static getLeftNixieDirection(arg0: $BlockState_): $Direction;
        static getRightNixieDirection(arg0: $BlockState_): $Direction;
        static areNixieBlocksEqual(arg0: $BlockState_, arg1: $BlockState_): boolean;
        static isInComputerControlledRow(arg0: $LevelAccessor, arg1: $BlockPos_): boolean;
        static walkNixies(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: boolean, arg3: $BiConsumer_<$BlockPos, number>): boolean;
        static updateDisplayedRedstoneValue(arg0: $NixieTubeBlockEntity, arg1: $BlockState_, arg2: boolean): void;
        updateShape(arg0: $BlockState_, arg1: $Direction_, arg2: $BlockState_, arg3: $LevelAccessor, arg4: $BlockPos_, arg5: $BlockPos_): $BlockState;
        onPlace(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        neighborChanged(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Block_, arg4: $BlockPos_, arg5: boolean): void;
        static getFacing(arg0: $BlockState_): $Direction;
        getBlockEntityType(): $BlockEntityType<$NixieTubeBlockEntity>;
        getRequiredItems(arg0: $BlockState_, arg1: $BlockEntity): $ItemRequirement;
        getBlockEntityClass(): $Class<$NixieTubeBlockEntity>;
        tick(arg0: $BlockState_, arg1: $ServerLevel, arg2: $BlockPos_, arg3: $RandomSource): void;
        static colorOf(arg0: $BlockState_): $DyeColor;
        getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        getColor(): $DyeColor;
        static withColor(arg0: $BlockState_, arg1: $DyeColor_): $BlockState;
        getFluidState(arg0: $BlockState_): $FluidState;
        onRemove(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$NixieTubeBlockEntity, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$NixieTubeBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$NixieTubeBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($NixieTubeBlockEntity) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $NixieTubeBlockEntity;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        getPickupSound(): ($SoundEvent) | undefined;
        placeLiquid(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FluidState): boolean;
        canPlaceLiquid(arg0: $Player | null, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Fluid_): boolean;
        pickupBlock(arg0: $Player | null, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $BlockState_): $ItemStack;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$DoubleFaceAttachedBlock>;
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
        static FACE: $EnumProperty<$DoubleFaceAttachedBlock$DoubleAttachFace>;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties, arg1: $DyeColor_);
        get blockEntityType(): $BlockEntityType<$NixieTubeBlockEntity>;
        get blockEntityClass(): $Class<$NixieTubeBlockEntity>;
        get color(): $DyeColor;
    }
    export class $NixieTubeRenderer extends $SafeBlockEntityRenderer<$NixieTubeBlockEntity> {
        static drawInWorldString(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: string, arg3: number): void;
        static drawTube(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: string, arg3: number, arg4: $DyeColor_, arg5: $RandomSource): void;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $DoubleFaceAttachedBlock$DoubleAttachFace extends $Enum<$DoubleFaceAttachedBlock$DoubleAttachFace> implements $StringRepresentable {
        static values(): $DoubleFaceAttachedBlock$DoubleAttachFace[];
        static valueOf(arg0: string): $DoubleFaceAttachedBlock$DoubleAttachFace;
        getSerializedName(): string;
        xRot(): number;
        getRemappedEnumConstantName(): string;
        static FLOOR: $DoubleFaceAttachedBlock$DoubleAttachFace;
        static WALL: $DoubleFaceAttachedBlock$DoubleAttachFace;
        static CEILING: $DoubleFaceAttachedBlock$DoubleAttachFace;
        static WALL_REVERSED: $DoubleFaceAttachedBlock$DoubleAttachFace;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $DoubleFaceAttachedBlock$DoubleAttachFace}.
     */
    export type $DoubleFaceAttachedBlock$DoubleAttachFace_ = "floor" | "wall" | "wall_reversed" | "ceiling";
    export class $DoubleFaceAttachedBlock extends $HorizontalDirectionalBlock {
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$DoubleFaceAttachedBlock>;
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
        static FACE: $EnumProperty<$DoubleFaceAttachedBlock$DoubleAttachFace>;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $NixieTubeBlockEntity$ComputerSignal {
        decode(arg0: number[]): void;
        encode(): number[];
        first: $NixieTubeBlockEntity$ComputerSignal$TubeDisplay;
        second: $NixieTubeBlockEntity$ComputerSignal$TubeDisplay;
        constructor();
    }
}
