import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $PackagePortTarget, $PackagePortBlockEntity } from "@package/com/simibubi/create/content/logistics/packagePort";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $List_ } from "@package/java/util";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $SmartBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $BlockPos_, $Direction_, $IdMapper } from "@package/net/minecraft/core";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Class } from "@package/java/lang";
import { $LevelAccessor, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $SmartInventory } from "@package/com/simibubi/create/foundation/item";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $IHaveHoveringInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $DynamicVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $SimpleDynamicVisual, $AbstractBlockEntityVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/content/logistics/packagePort/frogport" {
    export class $FrogportVisual extends $AbstractBlockEntityVisual<$FrogportBlockEntity> implements $SimpleDynamicVisual {
        updateGoggles(): void;
        wrapOperation$gfi002$sable$getExactTargetLocation(arg0: $PackagePortTarget, arg1: $PackagePortBlockEntity, arg2: $LevelAccessor, arg3: $BlockPos_, arg4: $Operation_<any>): $Vec3;
        beginFrame(arg0: $DynamicVisual$Context): void;
        planFrame(): $Plan<$DynamicVisual$Context>;
        constructor(arg0: $VisualizationContext, arg1: $FrogportBlockEntity, arg2: number);
    }
    export class $FrogportBlockEntity extends $PackagePortBlockEntity implements $IHaveHoveringInformation {
        sendAnticipate(): void;
        isAnimationInProgress(): boolean;
        tryPullingFromOwnAndAdjacentInventories(): void;
        anticipate(): void;
        startAnimation(arg0: $ItemStack_, arg1: boolean): void;
        tryPullingFrom(arg0: $IItemHandler): boolean;
        wrapOperation$gbp000$sable$getExactTargetLocation(arg0: $PackagePortTarget, arg1: $PackagePortBlockEntity, arg2: $LevelAccessor, arg3: $BlockPos_, arg4: $Operation_<any>): $Vec3;
        getYaw(): number;
        addToTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        acceptsPackages: boolean;
        anticipationProgress: $LerpedFloat;
        level: $Level;
        animationProgress: $LerpedFloat;
        static ATTACHMENTS_NBT_KEY: string;
        computerBehaviour: $AbstractComputerBehaviour;
        inventory: $SmartInventory;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        manualOpenAnimationProgress: $LerpedFloat;
        currentlyDepositing: boolean;
        target: $PackagePortTarget;
        animatedPackage: $ItemStack;
        goggles: boolean;
        passiveYaw: number;
        addressFilter: string;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get animationInProgress(): boolean;
        get yaw(): number;
    }
    export class $FrogportBlock extends $Block implements $IBE<$FrogportBlockEntity>, $IWrenchable {
        hasAnalogOutputSignal(arg0: $BlockState_): boolean;
        getAnalogOutputSignal(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): number;
        getBlockEntityType(): $BlockEntityType<$FrogportBlockEntity>;
        getBlockEntityClass(): $Class<$FrogportBlockEntity>;
        getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        onRemove(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$FrogportBlockEntity, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$FrogportBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$FrogportBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($FrogportBlockEntity) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $FrogportBlockEntity;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
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
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$FrogportBlockEntity>;
        get blockEntityClass(): $Class<$FrogportBlockEntity>;
    }
    export class $FrogportSounds {
        depositPackage(arg0: $Level_, arg1: $BlockPos_): void;
        catchPackage(arg0: $Level_, arg1: $BlockPos_): void;
        close(arg0: $Level_, arg1: $BlockPos_): void;
        open(arg0: $Level_, arg1: $BlockPos_): void;
        constructor();
    }
    export class $FrogportRenderer extends $SmartBlockEntityRenderer<$FrogportBlockEntity> {
        wrapOperation$gfh001$sable$getExactTargetLocation(arg0: $PackagePortTarget, arg1: $PackagePortBlockEntity, arg2: $LevelAccessor, arg3: $BlockPos_, arg4: $Operation_<any>): $Vec3;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
}
