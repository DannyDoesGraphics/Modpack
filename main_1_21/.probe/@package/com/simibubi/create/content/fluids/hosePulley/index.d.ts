import { $MapCodec } from "@package/com/mojang/serialization";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $IFluidHandler$FluidAction_, $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $SuperByteBufferCache$Compartment } from "@package/net/createmod/catnip/render";
import { $Consumer_, $Supplier_, $Function_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $HorizontalKineticBlock, $KineticBlockEntity } from "@package/com/simibubi/create/content/kinetics/base";
import { $BlockState_, $BlockBehaviour$Properties, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $SmartFluidTank } from "@package/com/simibubi/create/foundation/fluid";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Class } from "@package/java/lang";
import { $Level, $BlockGetter, $Level_, $LevelReader } from "@package/net/minecraft/world/level";
import { $Item } from "@package/net/minecraft/world/item";
import { $AbstractPulleyRenderer } from "@package/com/simibubi/create/content/contraptions/pulley";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $FluidDrainingBehaviour, $FluidFillingBehaviour } from "@package/com/simibubi/create/content/fluids/transfer";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $BlockEntityType, $BlockEntityTicker, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/content/fluids/hosePulley" {
    export class $HosePulleyRenderer extends $AbstractPulleyRenderer<$HosePulleyBlockEntity> {
        static KINETIC_BLOCK: $SuperByteBufferCache$Compartment<$BlockState>;
        static rainbowMode: boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $HosePulleyBlockEntity extends $KineticBlockEntity {
        getMovementSpeed(): number;
        wrapOperation$gce000$sable$checkForCollisions3(arg0: $Level_, arg1: $BlockPos_, arg2: $Operation_<any>): $BlockState;
        wrapOperation$gce000$sable$checkForCollisions2(arg0: $Level_, arg1: $BlockPos_, arg2: $Operation_<any>): $BlockState;
        wrapOperation$gce000$sable$checkForCollisions1(arg0: $Level_, arg1: $BlockPos_, arg2: $Operation_<any>): $BlockState;
        getInterpolatedOffset(arg0: number): number;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        level: $Level;
        updateSpeed: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        preventSpeedUpdate: number;
        network: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get movementSpeed(): number;
    }
    export class $HosePulleyFluidHandler implements $IFluidHandler {
        getTanks(): number;
        getInternalTank(): $SmartFluidTank;
        getFluidInTank(arg0: number): $FluidStack;
        getTankCapacity(arg0: number): number;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        wrapOperation$gcf000$sable$modifyGetFluidInTank(arg0: $FluidDrainingBehaviour, arg1: $BlockPos_, arg2: $Operation_<any>): $FluidStack;
        handler$gcf000$sable$updateLastValidPos(arg0: number, arg1: $FluidStack_, arg2: $IFluidHandler$FluidAction_, arg3: $CallbackInfoReturnable<any>): void;
        wrapOperation$gcf000$sable$modifyGetDrainableFluid(arg0: $FluidDrainingBehaviour, arg1: $BlockPos_, arg2: $Operation_<any>): $FluidStack;
        wrapOperation$gcf000$sable$modifyPullNext(arg0: $FluidDrainingBehaviour, arg1: $BlockPos_, arg2: boolean, arg3: $Operation_<any>): boolean;
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        constructor(arg0: $SmartFluidTank, arg1: $FluidFillingBehaviour, arg2: $FluidDrainingBehaviour, arg3: $Supplier_<$BlockPos>, arg4: $Supplier_<boolean>);
        get tanks(): number;
        get internalTank(): $SmartFluidTank;
    }
    export class $HosePulleyBlock extends $HorizontalKineticBlock implements $IBE<$HosePulleyBlockEntity> {
        static hasPipeTowards(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_): boolean;
        getBlockEntityType(): $BlockEntityType<$HosePulleyBlockEntity>;
        getBlockEntityClass(): $Class<$HosePulleyBlockEntity>;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$HosePulleyBlockEntity, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$HosePulleyBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$HosePulleyBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($HosePulleyBlockEntity) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $HosePulleyBlockEntity;
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
        static HORIZONTAL_FACING: $Property<$Direction>;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$HosePulleyBlockEntity>;
        get blockEntityClass(): $Class<$HosePulleyBlockEntity>;
    }
}
