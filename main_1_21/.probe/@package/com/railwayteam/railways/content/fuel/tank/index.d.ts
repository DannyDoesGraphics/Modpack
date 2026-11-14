import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $IMultiBlockEntityContainer$Fluid, $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $ActorVisual, $ContraptionMatrices } from "@package/com/simibubi/create/content/contraptions/render";
import { $FluidStack_, $FluidStack, $IFluidTank } from "@package/net/neoforged/neoforge/fluids";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $Map } from "@package/java/util";
import { $SyncedMountedStorage } from "@package/com/simibubi/create/api/contraption/storage";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $InteractionHand_, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $Contraption } from "@package/com/simibubi/create/content/contraptions";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $MountedFluidStorageType, $MountedFluidStorage, $WrapperMountedFluidStorage } from "@package/com/simibubi/create/api/contraption/storage/fluid";
import { $HolderLookup$Provider, $BlockPos, $Direction$Axis_, $BlockPos_, $Direction_, $Direction$Axis, $IdMapper } from "@package/net/minecraft/core";
import { $SmartFluidTank } from "@package/com/simibubi/create/foundation/fluid";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $DataGenContext, $RegistrateBlockstateProvider } from "@package/com/tterrag/registrate/providers";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Class, $Object } from "@package/java/lang";
import { $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $VirtualRenderWorld } from "@package/com/simibubi/create/foundation/virtualWorld";
import { $CTModel } from "@package/com/simibubi/create/foundation/block/connected";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $BlockItem, $Item, $ItemStack_, $ItemStack, $Item$Properties } from "@package/net/minecraft/world/item";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $MovementBehaviour } from "@package/com/simibubi/create/api/behaviour/movement";
import { $EnumProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $IHaveGoggleInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $MovementContext } from "@package/com/simibubi/create/content/contraptions/behaviour";
import { $Block_, $Rotation_, $Mirror_, $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $FluidTank } from "@package/net/neoforged/neoforge/fluids/capability/templates";
import { $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/railwayteam/railways/content/fuel/tank" {
    export class $FuelTankBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation, $IMultiBlockEntityContainer$Fluid {
        getFluid(arg0: number): $FluidStack;
        getMaxWidth(): number;
        static getMaxHeight(): number;
        getTotalTankSize(): number;
        getLastKnownPos(): $BlockPos;
        isController(): boolean;
        getController(): $BlockPos;
        setController(arg0: $BlockPos_): void;
        static getCapacityMultiplier(): number;
        sendDataImmediately(): void;
        getFillState(): number;
        toggleWindows(): void;
        removeController(arg0: boolean): void;
        applyFluidTankSize(arg0: number): void;
        setWindows(arg0: boolean): void;
        getTankInventory(): $FluidTank;
        getFluidLevel(): $LerpedFloat;
        setFluidLevel(arg0: $LerpedFloat): void;
        preventConnectivityUpdate(): void;
        notifyMultiUpdated(): void;
        setExtraData(arg0: $Object | null): void;
        getExtraData(): $Object;
        modifyExtraData(arg0: $Object): $Object;
        getMainConnectionAxis(): $Direction$Axis;
        hasTank(): boolean;
        getTankSize(arg0: number): number;
        setTankSize(arg0: number, arg1: number): void;
        getTank(arg0: number): $IFluidTank;
        static getMaxSize(): number;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        getMaxLength(arg0: $Direction$Axis_, arg1: number): number;
        setWidth(arg0: number): void;
        setHeight(arg0: number): void;
        getFluidHandler(arg0: $Direction_ | null): $IFluidHandler;
        getWidth(): number;
        getHeight(): number;
        getMainAxisOf(arg0: $BlockEntity): $Direction$Axis;
        getControllerBE<T extends $BlockEntity>(): T;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get maxWidth(): number;
        static get maxHeight(): number;
        get totalTankSize(): number;
        get lastKnownPos(): $BlockPos;
        static get capacityMultiplier(): number;
        get fillState(): number;
        set windows(value: boolean);
        get tankInventory(): $FluidTank;
        get mainConnectionAxis(): $Direction$Axis;
        static get maxSize(): number;
        get controllerBE(): T;
    }
    export class $FuelTankBlockEntity$FuelFluidHandler extends $SmartFluidTank {
        constructor(arg0: number, arg1: $Consumer_<$FluidStack>);
    }
    export class $FuelTankModel extends $CTModel {
        static standard(arg0: $BakedModel): $FuelTankModel;
    }
    export class $FuelTankGenerator {
        generate<T extends $Block>(arg0: $DataGenContext<$Block_, T>, arg1: $RegistrateBlockstateProvider): void;
        constructor();
    }
    export class $FuelTankMountedStorageType extends $MountedFluidStorageType<$FuelTankMountedStorage> {
        mount(arg0: $Level_, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockEntity): $FuelTankMountedStorage;
        codec: $MapCodec<$FuelTankMountedStorage>;
        static CODEC: $Codec<$MountedFluidStorageType<never>>;
        static REGISTRY: $SimpleRegistry<$Block, $MountedFluidStorageType<never>>;
        constructor();
    }
    export class $FuelTankMountedStorage$Handler extends $FluidTank {
        constructor(arg0: number, arg1: $FluidStack_);
    }
    export class $FuelTankMovementBehavior implements $MovementBehaviour {
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
    export class $FuelTankMountedStorage extends $WrapperMountedFluidStorage<$FuelTankMountedStorage$Handler> implements $SyncedMountedStorage {
        getFluid(): $FluidStack;
        afterSync(arg0: $Contraption, arg1: $BlockPos_): void;
        static fromLegacy(arg0: $CompoundTag_): $FuelTankMountedStorage;
        markClean(): void;
        static fromTank(arg0: $FuelTankBlockEntity): $FuelTankMountedStorage;
        getCapacity(): number;
        isDirty(): boolean;
        static CODEC: $MapCodec<$FuelTankMountedStorage>;
        type: $MountedFluidStorageType<$MountedFluidStorage>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MountedFluidStorage>;
        get fluid(): $FluidStack;
        get capacity(): number;
        get dirty(): boolean;
    }
    export class $FuelTankItem extends $BlockItem {
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
    export class $FuelTankModel$CullData {
    }
    export class $FuelTankBlock$Shape extends $Enum<$FuelTankBlock$Shape> implements $StringRepresentable {
        static values(): $FuelTankBlock$Shape[];
        static valueOf(arg0: string): $FuelTankBlock$Shape;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static PLAIN: $FuelTankBlock$Shape;
        static WINDOW_NW: $FuelTankBlock$Shape;
        static WINDOW_SE: $FuelTankBlock$Shape;
        static WINDOW_SW: $FuelTankBlock$Shape;
        static WINDOW: $FuelTankBlock$Shape;
        static WINDOW_NE: $FuelTankBlock$Shape;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $FuelTankBlock$Shape}.
     */
    export type $FuelTankBlock$Shape_ = "plain" | "window" | "window_nw" | "window_sw" | "window_ne" | "window_se";
    export class $FuelTankBlock extends $Block implements $IWrenchable, $IBE<$FuelTankBlockEntity> {
        hasAnalogOutputSignal(arg0: $BlockState_): boolean;
        getBlockSupportShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): $VoxelShape;
        getAnalogOutputSignal(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): number;
        onPlace(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        static isTank(arg0: $BlockState_): boolean;
        getBlockEntityType(): $BlockEntityType<$FuelTankBlockEntity>;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getBlockEntityClass(): $Class<$FuelTankBlockEntity>;
        rotate(arg0: $BlockState_, arg1: $Rotation_): $BlockState;
        mirror(arg0: $BlockState_, arg1: $Mirror_): $BlockState;
        useItemOn(arg0: $ItemStack_, arg1: $BlockState_, arg2: $Level_, arg3: $BlockPos_, arg4: $Player, arg5: $InteractionHand_, arg6: $BlockHitResult): $ItemInteractionResult;
        onRemove(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$FuelTankBlockEntity, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$FuelTankBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$FuelTankBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($FuelTankBlockEntity) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $FuelTankBlockEntity;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static SILENCED_METAL: $SoundType;
        static BOTTOM: $BooleanProperty;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static SHAPE: $EnumProperty<$FuelTankBlock$Shape>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static TOP: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$FuelTankBlockEntity>;
        get blockEntityClass(): $Class<$FuelTankBlockEntity>;
    }
    export class $FuelTankRenderer extends $SafeBlockEntityRenderer<$FuelTankBlockEntity> {
        shouldRenderOffScreen(arg0: $FuelTankBlockEntity): boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
}
