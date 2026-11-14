import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $IMultiBlockEntityContainer$Fluid, $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $ActorVisual, $ContraptionMatrices } from "@package/com/simibubi/create/content/contraptions/render";
import { $FluidStack_, $FluidStack, $IFluidTank } from "@package/net/neoforged/neoforge/fluids";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $List_, $Map } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $IFluidHandler$FluidAction_, $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $ChatFormatting_ } from "@package/net/minecraft";
import { $HolderLookup$Provider, $BlockPos, $Direction$Axis_, $BlockPos_, $Direction_, $Direction$Axis, $Vec3i, $IdMapper } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $SpecialBlockStateGen } from "@package/com/simibubi/create/foundation/data";
import { $SmartFluidTank } from "@package/com/simibubi/create/foundation/fluid";
import { $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Class, $Object } from "@package/java/lang";
import { $LevelAccessor, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $VirtualRenderWorld } from "@package/com/simibubi/create/foundation/virtualWorld";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $HorizontalCTBehaviour, $CTSpriteShiftEntry, $CTModel } from "@package/com/simibubi/create/foundation/block/connected";
import { $BlockItem, $Item, $ItemStack_, $ItemStack, $Item$Properties } from "@package/net/minecraft/world/item";
import { $MutableComponent, $Component_ } from "@package/net/minecraft/network/chat";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $FluidTankBlockEntityAccessor } from "@package/com/drmangotea/tfmg/mixin/accessor";
import { $MovementBehaviour } from "@package/com/simibubi/create/api/behaviour/movement";
import { $EnumProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $IHaveGoggleInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $MovementContext } from "@package/com/simibubi/create/content/contraptions/behaviour";
import { $Block_, $Rotation_, $Mirror_, $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $FluidTank } from "@package/net/neoforged/neoforge/fluids/capability/templates";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";
export * as storage from "@package/com/simibubi/create/content/fluids/tank/storage";

declare module "@package/com/simibubi/create/content/fluids/tank" {
    export class $CreativeFluidTankBlockEntity extends $FluidTankBlockEntity {
        boiler: $BoilerData;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $FluidTankMovementBehavior implements $MovementBehaviour {
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
    export class $FluidTankModel$CullData {
    }
    export class $BoilerData$BoilerFluidHandler implements $IFluidHandler {
        getTanks(): number;
        getFluidInTank(arg0: number): $FluidStack;
        getTankCapacity(arg0: number): number;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        constructor(arg0: $BoilerData);
        get tanks(): number;
    }
    export class $FluidTankModel extends $CTModel {
        static standard(arg0: $BakedModel): $FluidTankModel;
        static creative(arg0: $BakedModel): $FluidTankModel;
    }
    export class $BoilerData {
        calcMinMaxForSize(arg0: number): void;
        getHeatLevelTextComponent(): $MutableComponent;
        getSizeComponent(arg0: boolean, arg1: boolean, ...arg2: $ChatFormatting_[]): $MutableComponent;
        getWaterComponent(arg0: boolean, arg1: boolean, ...arg2: $ChatFormatting_[]): $MutableComponent;
        getHeatComponent(arg0: boolean, arg1: boolean, ...arg2: $ChatFormatting_[]): $MutableComponent;
        wrapOperation$gbk000$sable$subLevelHeating(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Operation_<any>): number;
        updateOcclusion(arg0: $FluidTankBlockEntity): void;
        checkPipeOrganAdvancement(arg0: $FluidTankBlockEntity): void;
        createHandler(): $BoilerData$BoilerFluidHandler;
        updateTemperature(arg0: $FluidTankBlockEntity): boolean;
        addToGoggleTooltip(arg0: $List_<$Component_>, arg1: boolean, arg2: number): boolean;
        getMaxHeatLevelForBoilerSize(arg0: number): number;
        handler$gbk000$sable$forceUpdateHeatIfDisconnected(arg0: $FluidTankBlockEntity, arg1: $CallbackInfo): void;
        queueSoundOnSide(arg0: $BlockPos_, arg1: $Direction_): void;
        getTheoreticalHeatLevel(): number;
        isPassive(): boolean;
        isPassive(arg0: number): boolean;
        getEngineEfficiency(arg0: number): number;
        getMaxHeatLevelForWaterSupply(): number;
        clear(): void;
        write(): $CompoundTag;
        read(arg0: $CompoundTag_, arg1: number): void;
        isActive(): boolean;
        tick(arg0: $FluidTankBlockEntity): void;
        evaluate(arg0: $FluidTankBlockEntity): boolean;
        attachedEngines: number;
        gauge: $LerpedFloat;
        needsHeatLevelUpdate: boolean;
        passiveHeat: boolean;
        activeHeat: number;
        attachedWhistles: number;
        occludedDirections: boolean[];
        waterSupply: number;
        constructor();
        get heatLevelTextComponent(): $MutableComponent;
        get theoreticalHeatLevel(): number;
        get maxHeatLevelForWaterSupply(): number;
        get active(): boolean;
    }
    export class $FluidTankBlock$Shape extends $Enum<$FluidTankBlock$Shape> implements $StringRepresentable {
        static values(): $FluidTankBlock$Shape[];
        static valueOf(arg0: string): $FluidTankBlock$Shape;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static PLAIN: $FluidTankBlock$Shape;
        static WINDOW_NW: $FluidTankBlock$Shape;
        static WINDOW_SE: $FluidTankBlock$Shape;
        static WINDOW_SW: $FluidTankBlock$Shape;
        static WINDOW: $FluidTankBlock$Shape;
        static WINDOW_NE: $FluidTankBlock$Shape;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $FluidTankBlock$Shape}.
     */
    export type $FluidTankBlock$Shape_ = "plain" | "window" | "window_nw" | "window_sw" | "window_ne" | "window_se";
    export class $FluidTankCTBehaviour extends $HorizontalCTBehaviour {
        constructor(arg0: $CTSpriteShiftEntry, arg1: $CTSpriteShiftEntry, arg2: $CTSpriteShiftEntry);
    }
    export class $BoilerHeaters {
        static blazeBurner(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): number;
        static registerDefaults(): void;
        static passive(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): number;
        constructor();
    }
    export class $FluidTankGenerator extends $SpecialBlockStateGen {
        constructor();
        constructor(arg0: string);
    }
    export class $FluidTankRenderer extends $SafeBlockEntityRenderer<$FluidTankBlockEntity> {
        shouldRenderOffScreen(arg0: $FluidTankBlockEntity): boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $CreativeFluidTankBlockEntity$CreativeSmartFluidTank extends $SmartFluidTank {
        setContainedFluid(arg0: $FluidStack_): void;
        static CODEC: $Codec<$CreativeFluidTankBlockEntity$CreativeSmartFluidTank>;
        constructor(arg0: number, arg1: $Consumer_<$FluidStack>);
        set containedFluid(value: $FluidStack_);
    }
    export class $FluidTankBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation, $IMultiBlockEntityContainer$Fluid, $FluidTankBlockEntityAccessor {
        getFluid(arg0: number): $FluidStack;
        getMaxWidth(): number;
        static getMaxHeight(): number;
        getTotalTankSize(): number;
        getLastKnownPos(): $BlockPos;
        isController(): boolean;
        getController(): $BlockPos;
        setController(arg0: $BlockPos_): void;
        handler$eeb000$tfmg$setWindows(arg0: boolean, arg1: $CallbackInfo): void;
        getOtherFluidTankBlockEntity(arg0: $Direction_): $FluidTankBlockEntity;
        handler$eeb000$tfmg$toggleWindows(arg0: $CallbackInfo): void;
        getControllerBE(): $FluidTankBlockEntity;
        updateBoilerState(): void;
        static getCapacityMultiplier(): number;
        sendDataImmediately(): void;
        getFillState(): number;
        toggleWindows(): void;
        updateBoilerTemperature(): void;
        removeController(arg0: boolean): void;
        applyFluidTankSize(arg0: number): void;
        handler$eeb000$tfmg$removeController(arg0: boolean, arg1: $CallbackInfo): void;
        setWindows(arg0: boolean): void;
        getTankInventory(): $FluidTank;
        getFluidLevel(): $LerpedFloat;
        setFluidLevel(arg0: $LerpedFloat): void;
        preventConnectivityUpdate(): void;
        notifyMultiUpdated(): void;
        handler$eeb000$tfmg$notifyMultiUpdated(arg0: $CallbackInfo): void;
        setExtraData(arg0: $Object): void;
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
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        getWidth(): number;
        getHeight(): number;
        getMainAxisOf(arg0: $BlockEntity): $Direction$Axis;
        tfmg$getWindow(): boolean;
        tfmg$getLuminosity(): number;
        tfmg$getHeight(): number;
        tfmg$updateConnectivity(): void;
        tfmg$getWidth(): number;
        tfmg$getTankInventory(): $FluidTank;
        tfmg$getFluidCapability(): $IFluidHandler;
        tfmg$refreshCapability(): void;
        boiler: $BoilerData;
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
        get controllerBE(): $FluidTankBlockEntity;
        static get capacityMultiplier(): number;
        get fillState(): number;
        set windows(value: boolean);
        get tankInventory(): $FluidTank;
        get mainConnectionAxis(): $Direction$Axis;
        static get maxSize(): number;
    }
    export class $SoundPool$Sound {
    }
    export interface $SoundPool$Sound {
        playAt(arg0: $Level_, arg1: $Vec3i): void;
    }
    /**
     * Values that may be interpreted as {@link $SoundPool$Sound}.
     */
    export type $SoundPool$Sound_ = ((arg0: $Level, arg1: $Vec3i) => void);
    export class $FluidTankItem extends $BlockItem {
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
    export class $SoundPool {
        play(arg0: $Level_): void;
        queueAt(arg0: number): void;
        queueAt(arg0: $BlockPos_): void;
        constructor(arg0: number, arg1: number, arg2: $SoundPool$Sound_);
    }
    export class $FluidTankBlock extends $Block implements $IWrenchable, $IBE<$FluidTankBlockEntity> {
        hasAnalogOutputSignal(arg0: $BlockState_): boolean;
        getBlockSupportShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): $VoxelShape;
        getAnalogOutputSignal(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): number;
        updateShape(arg0: $BlockState_, arg1: $Direction_, arg2: $BlockState_, arg3: $LevelAccessor, arg4: $BlockPos_, arg5: $BlockPos_): $BlockState;
        onPlace(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        static updateBoilerState(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): void;
        static isTank(arg0: $BlockState_): boolean;
        getBlockEntityType(): $BlockEntityType<$FluidTankBlockEntity>;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getBlockEntityClass(): $Class<$FluidTankBlockEntity>;
        rotate(arg0: $BlockState_, arg1: $Rotation_): $BlockState;
        mirror(arg0: $BlockState_, arg1: $Mirror_): $BlockState;
        static regular(arg0: $BlockBehaviour$Properties): $FluidTankBlock;
        static creative(arg0: $BlockBehaviour$Properties): $FluidTankBlock;
        getCollisionShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        onRemove(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$FluidTankBlockEntity, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$FluidTankBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$FluidTankBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($FluidTankBlockEntity) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $FluidTankBlockEntity;
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
        static SHAPE: $EnumProperty<$FluidTankBlock$Shape>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static TOP: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        get blockEntityType(): $BlockEntityType<$FluidTankBlockEntity>;
        get blockEntityClass(): $Class<$FluidTankBlockEntity>;
    }
}
