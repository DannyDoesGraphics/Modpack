import { $MapCodec } from "@package/com/mojang/serialization";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $ActorVisual, $ContraptionMatrices } from "@package/com/simibubi/create/content/contraptions/render";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $AccessorPortableStorageInterfaceBlockEntity } from "@package/com/railwayteam/railways/mixin";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $IFluidHandler$FluidAction_, $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $Contraption } from "@package/com/simibubi/create/content/contraptions";
import { $BlockPos_, $IdMapper } from "@package/net/minecraft/core";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE, $WrenchableDirectionalBlock } from "@package/com/simibubi/create/foundation/block";
import { $Class } from "@package/java/lang";
import { $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $Instance, $InstancerProvider_ } from "@package/dev/engine_room/flywheel/api/instance";
import { $VirtualRenderWorld } from "@package/com/simibubi/create/foundation/virtualWorld";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $MovementBehaviour } from "@package/com/simibubi/create/api/behaviour/movement";
import { $DirectionProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $ItemHandlerWrapper } from "@package/com/simibubi/create/foundation/item";
import { $SimpleDynamicVisual, $AbstractBlockEntityVisual, $SimpleTickableVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $MovementContext } from "@package/com/simibubi/create/content/contraptions/behaviour";
import { $TickableVisual$Context, $DynamicVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/content/contraptions/actors/psi" {
    export class $PortableStorageInterfaceBlockEntity extends $SmartBlockEntity implements $AccessorPortableStorageInterfaceBlockEntity {
        startTransferringTo(arg0: $Contraption, arg1: number): void;
        isPowered(): boolean;
        isTransferring(): boolean;
        canTransfer(): boolean;
        onContentTransferred(): void;
        neighbourChanged(): void;
        startConnecting(): void;
        railways$isConnected(): boolean;
        keepAlive: number;
        level: $Level;
        static ANIMATION: number;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get powered(): boolean;
        get transferring(): boolean;
    }
    export class $PSIVisual extends $AbstractBlockEntityVisual<$PortableStorageInterfaceBlockEntity> implements $SimpleDynamicVisual, $SimpleTickableVisual {
        tick(arg0: $TickableVisual$Context): void;
        beginFrame(arg0: $DynamicVisual$Context): void;
        planFrame(): $Plan<$DynamicVisual$Context>;
        planTick(): $Plan<$TickableVisual$Context>;
        constructor(arg0: $VisualizationContext, arg1: $PortableStorageInterfaceBlockEntity, arg2: number);
    }
    export class $PortableStorageInterfaceBlock extends $WrenchableDirectionalBlock implements $IBE<$PortableStorageInterfaceBlockEntity> {
        static forFluids(arg0: $BlockBehaviour$Properties): $PortableStorageInterfaceBlock;
        static forItems(arg0: $BlockBehaviour$Properties): $PortableStorageInterfaceBlock;
        hasAnalogOutputSignal(arg0: $BlockState_): boolean;
        getAnalogOutputSignal(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): number;
        neighborChanged(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Block_, arg4: $BlockPos_, arg5: boolean): void;
        getBlockEntityType(): $BlockEntityType<$PortableStorageInterfaceBlockEntity>;
        getBlockEntityClass(): $Class<$PortableStorageInterfaceBlockEntity>;
        getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$PortableStorageInterfaceBlockEntity, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$PortableStorageInterfaceBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$PortableStorageInterfaceBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($PortableStorageInterfaceBlockEntity) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $PortableStorageInterfaceBlockEntity;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$WrenchableDirectionalBlock>;
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
        get blockEntityType(): $BlockEntityType<$PortableStorageInterfaceBlockEntity>;
        get blockEntityClass(): $Class<$PortableStorageInterfaceBlockEntity>;
    }
    export class $PIInstance {
        collectCrumblingInstances(arg0: $Consumer_<$Instance>): void;
        remove(): void;
        tick(arg0: boolean): void;
        beginFrame(arg0: number): void;
        constructor(arg0: $InstancerProvider_, arg1: $BlockState_, arg2: $BlockPos_, arg3: boolean);
    }
    export class $PortableFluidInterfaceBlockEntity$InterfaceFluidHandler implements $IFluidHandler {
        getTanks(): number;
        getFluidInTank(arg0: number): $FluidStack;
        getTankCapacity(arg0: number): number;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        keepAlive(): void;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        constructor(arg0: $PortableFluidInterfaceBlockEntity, arg1: $IFluidHandler);
        get tanks(): number;
    }
    export class $PSIActorVisual extends $ActorVisual {
        constructor(arg0: $VisualizationContext, arg1: $VirtualRenderWorld, arg2: $MovementContext);
    }
    export class $PortableStorageInterfaceRenderer extends $SafeBlockEntityRenderer<$PortableStorageInterfaceBlockEntity> {
        static renderInContraption(arg0: $MovementContext, arg1: $VirtualRenderWorld, arg2: $ContraptionMatrices, arg3: $MultiBufferSource_): void;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $PortableItemInterfaceBlockEntity$InterfaceItemHandler extends $ItemHandlerWrapper {
    }
    export class $PortableStorageInterfaceMovement implements $MovementBehaviour {
        static getAnimation(arg0: $MovementContext): $LerpedFloat;
        visitNewPosition(arg0: $MovementContext, arg1: $BlockPos_): void;
        cancelStall(arg0: $MovementContext): void;
        getActiveAreaOffset(arg0: $MovementContext): $Vec3;
        disableBlockEntityRendering(): boolean;
        stopMoving(arg0: $MovementContext): void;
        renderInContraption(arg0: $MovementContext, arg1: $VirtualRenderWorld, arg2: $ContraptionMatrices, arg3: $MultiBufferSource_): void;
        createVisual(arg0: $VisualizationContext, arg1: $VirtualRenderWorld, arg2: $MovementContext): $ActorVisual;
        reset(arg0: $MovementContext): void;
        tick(arg0: $MovementContext): void;
        /**
         * @deprecated
         */
        dropItem(arg0: $MovementContext, arg1: $ItemStack_): void;
        startMoving(arg0: $MovementContext): void;
        canBeDisabledVia(arg0: $MovementContext): $ItemStack;
        onDisabledByControls(arg0: $MovementContext): void;
        mustTickWhileDisabled(): boolean;
        onSpeedChanged(arg0: $MovementContext, arg1: $Vec3_, arg2: $Vec3_): void;
        collectOrDropItem(arg0: $MovementContext, arg1: $ItemStack_): void;
        writeExtraData(arg0: $MovementContext): void;
        isActive(arg0: $MovementContext): boolean;
        constructor();
    }
    export class $PortableFluidInterfaceBlockEntity extends $PortableStorageInterfaceBlockEntity {
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        keepAlive: number;
        level: $Level;
        static ANIMATION: number;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $PortableItemInterfaceBlockEntity extends $PortableStorageInterfaceBlockEntity {
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        keepAlive: number;
        level: $Level;
        static ANIMATION: number;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
}
