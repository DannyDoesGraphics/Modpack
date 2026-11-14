import { $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $List, $List_, $Map, $Set } from "@package/java/util";
import { $ValueBoxTransform$Sided, $CenteredSideValueBoxTransform } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $SmartBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult, $Container } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos_, $Direction_, $Direction$Axis, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Class } from "@package/java/lang";
import { $LevelAccessor, $LevelReader, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $ConnectedTextureBehaviour$Base } from "@package/com/simibubi/create/foundation/block/connected";
import { $BlockItem, $Item, $ItemStack_, $ItemStack, $Item$Properties } from "@package/net/minecraft/world/item";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $BlockEntityDataPacket } from "@package/com/simibubi/create/foundation/networking";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $IHaveGoggleInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $DynamicVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $SimpleDynamicVisual, $AbstractBlockEntityVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $INamedIconOptions } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/scrollValue";
import { $AllIcons } from "@package/com/simibubi/create/foundation/gui";
import { $Block_, $Rotation_, $Block } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/content/logistics/tunnel" {
    export class $BeltTunnelItem extends $BlockItem {
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
    export class $BeltTunnelRenderer extends $SmartBlockEntityRenderer<$BeltTunnelBlockEntity> {
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $BrassTunnelCTBehaviour extends $ConnectedTextureBehaviour$Base {
        constructor();
    }
    export class $BrassTunnelFilterSlot extends $ValueBoxTransform$Sided {
        constructor();
    }
    export class $BrassTunnelBlockEntity$SelectionMode extends $Enum<$BrassTunnelBlockEntity$SelectionMode> implements $INamedIconOptions {
        getTranslationKey(): string;
        static values(): $BrassTunnelBlockEntity$SelectionMode[];
        static valueOf(arg0: string): $BrassTunnelBlockEntity$SelectionMode;
        getIcon(): $AllIcons;
        static FORCED_ROUND_ROBIN: $BrassTunnelBlockEntity$SelectionMode;
        static SYNCHRONIZE: $BrassTunnelBlockEntity$SelectionMode;
        static ROUND_ROBIN: $BrassTunnelBlockEntity$SelectionMode;
        static RANDOMIZE: $BrassTunnelBlockEntity$SelectionMode;
        static FORCED_SPLIT: $BrassTunnelBlockEntity$SelectionMode;
        static PREFER_NEAREST: $BrassTunnelBlockEntity$SelectionMode;
        static SPLIT: $BrassTunnelBlockEntity$SelectionMode;
        get translationKey(): string;
        get icon(): $AllIcons;
    }
    /**
     * Values that may be interpreted as {@link $BrassTunnelBlockEntity$SelectionMode}.
     */
    export type $BrassTunnelBlockEntity$SelectionMode_ = "split" | "forced_split" | "round_robin" | "forced_round_robin" | "prefer_nearest" | "randomize" | "synchronize";
    export class $BeltTunnelBlockEntity extends $SmartBlockEntity {
        updateTunnelConnections(): void;
        flap(arg0: $Direction_, arg1: boolean): void;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        flaps: $Map<$Direction, $LerpedFloat>;
        level: $Level;
        sides: $Set<$Direction>;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $BrassTunnelModeSlot extends $CenteredSideValueBoxTransform {
        constructor();
    }
    export class $BeltTunnelVisual extends $AbstractBlockEntityVisual<$BeltTunnelBlockEntity> implements $SimpleDynamicVisual {
        beginFrame(arg0: $DynamicVisual$Context): void;
        planFrame(): $Plan<$DynamicVisual$Context>;
        constructor(arg0: $VisualizationContext, arg1: $BeltTunnelBlockEntity, arg2: number);
    }
    export class $BrassTunnelBlockEntity extends $BeltTunnelBlockEntity implements $IHaveGoggleInformation {
        hasDistributionBehaviour(): boolean;
        getStackToDistribute(): $ItemStack;
        testFlapFilter(arg0: $Direction_, arg1: $ItemStack_): boolean;
        setStackToDistribute(arg0: $ItemStack_, arg1: $Direction_): void;
        grabAllStacksOfGroup(arg0: boolean): $List<$ItemStack>;
        flapFilterEmpty(arg0: $Direction_): boolean;
        getBeltCapability(): $IItemHandler;
        canTakeItems(): boolean;
        canInsert(arg0: $Direction_, arg1: $ItemStack_): boolean;
        isConnected(arg0: boolean): boolean;
        flaps: $Map<$Direction, $LerpedFloat>;
        level: $Level;
        sides: $Set<$Direction>;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get beltCapability(): $IItemHandler;
    }
    export class $BrassTunnelBlock extends $BeltTunnelBlock {
        onRemove(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static HORIZONTAL_AXIS: $Property<$Direction$Axis>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static SHAPE: $Property<$BeltTunnelBlock$Shape>;
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
    export class $TunnelFlapPacket extends $BlockEntityDataPacket<$BeltTunnelBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $TunnelFlapPacket>;
        constructor(arg0: $BeltTunnelBlockEntity, arg1: $List_<$Pair<$Direction_, boolean>>);
    }
    export class $BeltTunnelShapes {
        static getShape(arg0: $BlockState_): $VoxelShape;
        constructor();
    }
    export class $BeltTunnelBlock$Shape extends $Enum<$BeltTunnelBlock$Shape> implements $StringRepresentable {
        static values(): $BeltTunnelBlock$Shape[];
        static valueOf(arg0: string): $BeltTunnelBlock$Shape;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CLOSED: $BeltTunnelBlock$Shape;
        static CROSS: $BeltTunnelBlock$Shape;
        static T_LEFT: $BeltTunnelBlock$Shape;
        static STRAIGHT: $BeltTunnelBlock$Shape;
        static T_RIGHT: $BeltTunnelBlock$Shape;
        static WINDOW: $BeltTunnelBlock$Shape;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $BeltTunnelBlock$Shape}.
     */
    export type $BeltTunnelBlock$Shape_ = "straight" | "window" | "closed" | "t_left" | "t_right" | "cross";
    export class $BrassTunnelItemHandler implements $IItemHandler {
        getSlots(): number;
        getStackInSlot(arg0: number): $ItemStack;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        getSlotLimit(arg0: number): number;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        kjs$self(): $IItemHandler;
        kjs$getBlock(level: $Level_): $LevelBlock;
        kjs$isMutable(): boolean;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        isEmpty(): boolean;
        clear(): void;
        clear(match: $ItemPredicate_): void;
        find(match: $ItemPredicate_): number;
        find(): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        getWidth(): number;
        getHeight(): number;
        setChanged(): void;
        getAllItems(): $List<$ItemStack>;
        asContainer(): $Container;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        constructor(arg0: $BrassTunnelBlockEntity);
        get empty(): boolean;
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $BeltTunnelBlock extends $Block implements $IBE<$BeltTunnelBlockEntity>, $IWrenchable {
        isValidPositionForPlacement(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): boolean;
        static isStraight(arg0: $BlockState_): boolean;
        updateShape(arg0: $BlockState_, arg1: $Direction_, arg2: $BlockState_, arg3: $LevelAccessor, arg4: $BlockPos_, arg5: $BlockPos_): $BlockState;
        onPlace(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        neighborChanged(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Block_, arg4: $BlockPos_, arg5: boolean): void;
        updateTunnel(arg0: $LevelAccessor, arg1: $BlockPos_): void;
        getBlockEntityType(): $BlockEntityType<$BeltTunnelBlockEntity>;
        static isJunction(arg0: $BlockState_): boolean;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getBlockEntityClass(): $Class<$BeltTunnelBlockEntity>;
        static hasWindow(arg0: $BlockState_): boolean;
        rotate(arg0: $BlockState_, arg1: $Rotation_): $BlockState;
        getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        canSurvive(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): boolean;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$BeltTunnelBlockEntity, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$BeltTunnelBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$BeltTunnelBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($BeltTunnelBlockEntity) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $BeltTunnelBlockEntity;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static HORIZONTAL_AXIS: $Property<$Direction$Axis>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static SHAPE: $Property<$BeltTunnelBlock$Shape>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$BeltTunnelBlockEntity>;
        get blockEntityClass(): $Class<$BeltTunnelBlockEntity>;
    }
}
