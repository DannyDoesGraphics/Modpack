import { $MapCodec } from "@package/com/mojang/serialization";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $CachedRenderBBBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $ActorVisual, $ContraptionMatrices } from "@package/com/simibubi/create/content/contraptions/render";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $SuperByteBuffer } from "@package/net/createmod/catnip/render";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $BlockPos_, $Direction_, $IdMapper } from "@package/net/minecraft/core";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $LocalFloatRef, $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $BlockEntitySubLevelActor } from "@package/dev/ryanhcode/sable/api/block";
import { $Class, $Iterable } from "@package/java/lang";
import { $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $BlockHarvester } from "@package/dev/simulated_team/simulated/content/blocks/auger_shaft";
import { $VirtualRenderWorld } from "@package/com/simibubi/create/foundation/virtualWorld";
import { $AttachedActorBlock } from "@package/com/simibubi/create/content/contraptions/actors";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $HarvesterLerpedSpeed } from "@package/dev/ryanhcode/sable/neoforge/mixinhelper/compatibility/create/harvester";
import { $RigidBodyHandle } from "@package/dev/ryanhcode/sable/api/physics/handle";
import { $MovementBehaviour } from "@package/com/simibubi/create/api/behaviour/movement";
import { $ServerSubLevel, $SubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $AugerDistributor, $AugerDistributor_ } from "@package/dev/simulated_team/simulated/content/blocks/auger_shaft/auger_groups";
import { $DirectionProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $MovementContext } from "@package/com/simibubi/create/content/contraptions/behaviour";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/content/contraptions/actors/harvester" {
    export class $HarvesterRenderer extends $SafeBlockEntityRenderer<$HarvesterBlockEntity> {
        wrapOperation$gem000$sable$smoothSpeed$mixinextras$bridge$7(arg0: $Level_, arg1: $Direction_, arg2: $SuperByteBuffer, arg3: number, arg4: $Vec3_, arg5: $Operation_<any>, arg6: $LocalRef<any>, arg7: $LocalFloatRef): void;
        wrapOperation$gem000$sable$smoothSpeed(arg0: $Level_, arg1: $Direction_, arg2: $SuperByteBuffer, arg3: number, arg4: $Vec3_, arg5: $Operation_<any>, arg6: $HarvesterBlockEntity, arg7: number): void;
        static renderInContraption(arg0: $MovementContext, arg1: $VirtualRenderWorld, arg2: $ContraptionMatrices, arg3: $MultiBufferSource_): void;
        static transform(arg0: $Level_, arg1: $Direction_, arg2: $SuperByteBuffer, arg3: number, arg4: $Vec3_): void;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $HarvesterBlockEntity extends $CachedRenderBBBlockEntity implements $BlockHarvester, $BlockEntitySubLevelActor, $HarvesterLerpedSpeed {
        simulated$getAssociatedDistributor(): $AugerDistributor;
        sable$tick(arg0: $ServerSubLevel): void;
        getAnimatedSpeed(): number;
        setAnimatedSpeed(arg0: number): void;
        simulated$setDistributor(arg0: $AugerDistributor_): void;
        sable$clientTick(): void;
        sable$getLerpedFloat(): $LerpedFloat;
        depositItemStack(arg0: $BlockPos_, arg1: $ItemStack_): $ItemStack;
        sable$physicsTick(arg0: $ServerSubLevel, arg1: $RigidBodyHandle, arg2: number): void;
        sable$getConnectionDependencies(): $Iterable<$SubLevel>;
        sable$getLoadingDependencies(): $Iterable<$SubLevel>;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $HarvesterBlock extends $AttachedActorBlock implements $IBE<$HarvesterBlockEntity> {
        getTicker(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<any>): $BlockEntityTicker<any>;
        getBlockEntityType(): $BlockEntityType<$HarvesterBlockEntity>;
        getBlockEntityClass(): $Class<$HarvesterBlockEntity>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$HarvesterBlockEntity, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$HarvesterBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$HarvesterBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($HarvesterBlockEntity) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $HarvesterBlockEntity;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$HarvesterBlock>;
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
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$HarvesterBlockEntity>;
        get blockEntityClass(): $Class<$HarvesterBlockEntity>;
    }
    export class $HarvesterMovementBehaviour implements $MovementBehaviour {
        wrapMethod$gae000$sable$checkAllPositions(arg0: $MovementContext, arg1: $BlockPos_, arg2: $Operation_<any>): void;
        isValidCrop(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        isValidOther(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        wrapOperation$gaf000$sable$replaceDropItem(arg0: $HarvesterMovementBehaviour, arg1: $MovementContext, arg2: $ItemStack_, arg3: $Operation_<any>): void;
        visitNewPosition(arg0: $MovementContext, arg1: $BlockPos_): void;
        getActiveAreaOffset(arg0: $MovementContext): $Vec3;
        disableBlockEntityRendering(): boolean;
        renderInContraption(arg0: $MovementContext, arg1: $VirtualRenderWorld, arg2: $ContraptionMatrices, arg3: $MultiBufferSource_): void;
        createVisual(arg0: $VisualizationContext, arg1: $VirtualRenderWorld, arg2: $MovementContext): $ActorVisual;
        isActive(arg0: $MovementContext): boolean;
        /**
         * @deprecated
         */
        dropItem(arg0: $MovementContext, arg1: $ItemStack_): void;
        startMoving(arg0: $MovementContext): void;
        canBeDisabledVia(arg0: $MovementContext): $ItemStack;
        onDisabledByControls(arg0: $MovementContext): void;
        mustTickWhileDisabled(): boolean;
        onSpeedChanged(arg0: $MovementContext, arg1: $Vec3_, arg2: $Vec3_): void;
        cancelStall(arg0: $MovementContext): void;
        collectOrDropItem(arg0: $MovementContext, arg1: $ItemStack_): void;
        stopMoving(arg0: $MovementContext): void;
        writeExtraData(arg0: $MovementContext): void;
        tick(arg0: $MovementContext): void;
        constructor();
    }
    export class $HarvesterActorVisual extends $ActorVisual {
        constructor(arg0: $VisualizationContext, arg1: $VirtualRenderWorld, arg2: $MovementContext);
    }
}
