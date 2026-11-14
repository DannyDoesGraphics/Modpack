import { $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $SingleBlockEntityEdgePoint, $TrackEdgePoint } from "@package/com/simibubi/create/content/trains/signal";
import { $TrackTargetingBlockItem, $TrackTargetingBehaviour } from "@package/com/simibubi/create/content/trains/track";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $UUID, $Map } from "@package/java/util";
import { $BehaviourType, $CenteredSideValueBoxTransform } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $Carriage, $Train } from "@package/com/simibubi/create/content/trains/entity";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";
import { $SmartBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $EdgePointType, $TrackNodeLocation } from "@package/com/simibubi/create/content/trains/graph";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $IdMapper } from "@package/net/minecraft/core";
import { $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Record, $Class } from "@package/java/lang";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";
import { $Couple } from "@package/net/createmod/catnip/data";
import { $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $Item, $Item$Properties } from "@package/net/minecraft/world/item";
import { $MutableComponent, $Component } from "@package/net/minecraft/network/chat";
import { $EnumProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $IHaveGoggleInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $TransformableBlockEntity } from "@package/com/simibubi/create/api/contraption/transformable";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as neoforge from "@package/com/railwayteam/railways/content/coupling/coupler/neoforge";

declare module "@package/com/railwayteam/railways/content/coupling/coupler" {
    export class $TrackCouplerBlockEntity$AllowedOperationMode extends $Enum<$TrackCouplerBlockEntity$AllowedOperationMode> implements $StringRepresentable {
        getTranslatedName(): $Component;
        static values(): $TrackCouplerBlockEntity$AllowedOperationMode[];
        static valueOf(arg0: string): $TrackCouplerBlockEntity$AllowedOperationMode;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        canDecouple: boolean;
        static DECOUPLING: $TrackCouplerBlockEntity$AllowedOperationMode;
        static COUPLING: $TrackCouplerBlockEntity$AllowedOperationMode;
        static BOTH: $TrackCouplerBlockEntity$AllowedOperationMode;
        canCouple: boolean;
        get translatedName(): $Component;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $TrackCouplerBlockEntity$AllowedOperationMode}.
     */
    export type $TrackCouplerBlockEntity$AllowedOperationMode_ = "both" | "coupling" | "decoupling";
    export class $TrackCouplerRenderer extends $SmartBlockEntityRenderer<$TrackCouplerBlockEntity> {
        static getCouplerOverlayModel(arg0: $TrackCouplerBlockEntity): $PartialModel;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $SecondaryTrackTargetingBehaviour<T extends $TrackEdgePoint> extends $TrackTargetingBehaviour<T> {
        blockEntity: $SmartBlockEntity;
        static TYPE: $BehaviourType<$SecondaryTrackTargetingBehaviour<never>>;
        constructor(arg0: $SmartBlockEntity, arg1: $EdgePointType<T>);
    }
    export class $TrackCouplerBlockEntity$ClientInfo {
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        mode: $TrackCouplerBlockEntity$OperationMode;
        trainName1: string;
        trainName2: string;
        static FALLBACK: $TrackCouplerBlockEntity$ClientInfo;
        edgePointsOk: boolean;
        error: $MutableComponent;
        error2: $MutableComponent;
        constructor(arg0: $CompoundTag_, arg1: $HolderLookup$Provider);
    }
    export class $TrackCouplerBlockEntity$OperationInfo extends $Record {
        frontCarriage(): $Carriage;
        backCarriage(): $Carriage;
        mode(): $TrackCouplerBlockEntity$OperationMode;
        static NONE: $TrackCouplerBlockEntity$OperationInfo;
        constructor(mode: $TrackCouplerBlockEntity$OperationMode_, frontCarriage: $Carriage, backCarriage: $Carriage);
    }
    /**
     * Values that may be interpreted as {@link $TrackCouplerBlockEntity$OperationInfo}.
     */
    export type $TrackCouplerBlockEntity$OperationInfo_ = { mode?: $TrackCouplerBlockEntity$OperationMode_, backCarriage?: $Carriage, frontCarriage?: $Carriage,  } | [mode?: $TrackCouplerBlockEntity$OperationMode_, backCarriage?: $Carriage, frontCarriage?: $Carriage, ];
    export class $TrackCouplerBlockItem extends $TrackTargetingBlockItem {
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
        constructor(arg0: $Block_, arg1: $Item$Properties, arg2: $EdgePointType<never>);
    }
    export class $TrackCouplerBlockEntity extends $SmartBlockEntity implements $TransformableBlockEntity, $IHaveGoggleInformation {
        getReportedPower(): boolean;
        getTargetAnalogOutput(): number;
        getOperationInfo(): $TrackCouplerBlockEntity$OperationInfo;
        getClientInfo(): $TrackCouplerBlockEntity$ClientInfo;
        getAllowedOperationMode(): $TrackCouplerBlockEntity$AllowedOperationMode;
        getSecondaryCoupler(): $TrackCoupler;
        getCoupler(): $TrackCoupler;
        getOperationMode(): $TrackCouplerBlockEntity$OperationMode;
        areEdgePointsOk(): boolean;
        setClientInfo(arg0: $TrackCouplerBlockEntity$ClientInfo): void;
        getEdgeSpacing(): number;
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
        level: $Level;
        secondEdgePoint: $TrackTargetingBehaviour<$TrackCoupler>;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        edgePoint: $TrackTargetingBehaviour<$TrackCoupler>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get reportedPower(): boolean;
        get targetAnalogOutput(): number;
        get operationInfo(): $TrackCouplerBlockEntity$OperationInfo;
        get allowedOperationMode(): $TrackCouplerBlockEntity$AllowedOperationMode;
        get secondaryCoupler(): $TrackCoupler;
        get coupler(): $TrackCoupler;
        get operationMode(): $TrackCouplerBlockEntity$OperationMode;
        get edgeSpacing(): number;
    }
    export class $TrackCouplerBlock extends $Block implements $IBE<$TrackCouplerBlockEntity>, $IWrenchable {
        /**
         * @deprecated
         */
        hasAnalogOutputSignal(arg0: $BlockState_): boolean;
        /**
         * @deprecated
         */
        getAnalogOutputSignal(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): number;
        neighborChanged(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Block_, arg4: $BlockPos_, arg5: boolean): void;
        getBlockEntityType(): $BlockEntityType<$TrackCouplerBlockEntity>;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getBlockEntityClass(): $Class<$TrackCouplerBlockEntity>;
        static create(arg0: $BlockBehaviour$Properties): $TrackCouplerBlock;
        tick(arg0: $BlockState_, arg1: $ServerLevel, arg2: $BlockPos_, arg3: $RandomSource): void;
        onRemove(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$TrackCouplerBlockEntity, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$TrackCouplerBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$TrackCouplerBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($TrackCouplerBlockEntity) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $TrackCouplerBlockEntity;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static MODE: $EnumProperty<$TrackCouplerBlockEntity$AllowedOperationMode>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static POWERED: $BooleanProperty;
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
        get blockEntityType(): $BlockEntityType<$TrackCouplerBlockEntity>;
        get blockEntityClass(): $Class<$TrackCouplerBlockEntity>;
    }
    export class $TrackCouplerBlockEntity$OperationMode extends $Enum<$TrackCouplerBlockEntity$OperationMode> {
        static values(): $TrackCouplerBlockEntity$OperationMode[];
        static valueOf(arg0: string): $TrackCouplerBlockEntity$OperationMode;
        permitted(arg0: $TrackCouplerBlockEntity$AllowedOperationMode_): boolean;
        static DECOUPLING: $TrackCouplerBlockEntity$OperationMode;
        static NONE: $TrackCouplerBlockEntity$OperationMode;
        static COUPLING: $TrackCouplerBlockEntity$OperationMode;
    }
    /**
     * Values that may be interpreted as {@link $TrackCouplerBlockEntity$OperationMode}.
     */
    export type $TrackCouplerBlockEntity$OperationMode_ = "none" | "coupling" | "decoupling";
    export class $TrackCouplerBlockEntity$TrackCouplerValueBoxTransform extends $CenteredSideValueBoxTransform {
    }
    export class $TrackCoupler extends $SingleBlockEntityEdgePoint {
        isActivated(): boolean;
        getCurrentTrain(): $UUID;
        getActivation(): number;
        keepAlive(arg0: $Train): void;
        edgeLocation: $Couple<$TrackNodeLocation>;
        blockEntityPos: $BlockPos;
        blockEntityDimension: $ResourceKey<$Level>;
        id: $UUID;
        position: number;
        constructor();
        get activated(): boolean;
        get currentTrain(): $UUID;
        get activation(): number;
    }
}
