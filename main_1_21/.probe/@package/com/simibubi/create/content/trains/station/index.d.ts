import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $AbstractSimiScreen } from "@package/net/createmod/catnip/gui";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $PackagePortBlockEntity } from "@package/com/simibubi/create/content/logistics/packagePort";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $SingleBlockEntityEdgePoint } from "@package/com/simibubi/create/content/trains/signal";
import { $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $Minecraft } from "@package/net/minecraft/client";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $WeakReference } from "@package/java/lang/ref";
import { $RandomSource } from "@package/net/minecraft/util";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $InteractionResult, $InteractionHand_, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $TrackNode, $TrackNodeLocation } from "@package/com/simibubi/create/content/trains/graph";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $BlockState_, $BlockState, $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $DoorControl_, $DoorControlBehaviour } from "@package/com/simibubi/create/content/decoration/slidingDoor";
import { $Color } from "@package/net/createmod/catnip/theme";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $Item, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockEntityConfigurationPacket } from "@package/com/simibubi/create/foundation/networking";
import { $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $ScreenElement_ } from "@package/net/createmod/catnip/gui/element";
import { $TransformableBlockEntity } from "@package/com/simibubi/create/api/contraption/transformable";
import { $BasePacketPayload$PacketTypeProvider, $ServerboundPacketPayload, $ClientboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";
import { $ILimitedGlobalStation, $ILimited } from "@package/com/railwayteam/railways/mixin_interfaces";
import { $Transform } from "@package/dev/engine_room/flywheel/lib/transform";
import { $ITrackBlock, $TrackTargetingBehaviour } from "@package/com/simibubi/create/content/trains/track";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $UUID_, $Map, $UUID, $List } from "@package/java/util";
import { $ServerboundCustomPayloadPacket, $ClientboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $Train } from "@package/com/simibubi/create/content/trains/entity";
import { $Consumer_, $Function_ } from "@package/java/util/function";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $HolderLookup$Provider, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE, $ProperWaterloggedBlock } from "@package/com/simibubi/create/foundation/block";
import { $MapDecoration } from "@package/net/minecraft/world/level/saveddata/maps";
import { $Class } from "@package/java/lang";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";
import { $CPLGlobalStation, $StationChunkLoader } from "@package/com/hlysine/create_power_loader/content/trains";
import { $Couple, $WorldAttached } from "@package/net/createmod/catnip/data";
import { $LevelAccessor, $BlockGetter, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $FluidState, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $IItemHandlerModifiable, $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $IconButton } from "@package/com/simibubi/create/foundation/gui/widget";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Font } from "@package/net/minecraft/client/gui";
import { $BlockEntityType_, $BlockEntity, $BlockEntityTicker, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/trains/station" {
    export class $TrainEditPacket implements $CustomPacketPayload {
        handleSided(arg0: $Player): void;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
    }
    export class $TrainEditPacket$Serverbound extends $TrainEditPacket implements $ServerboundPacketPayload {
        handle(arg0: $ServerPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $TrainEditPacket$Serverbound>;
        constructor(arg0: $UUID_, arg1: string, arg2: $ResourceLocation_, arg3: number);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    export class $StationBlockEntity extends $SmartBlockEntity implements $TransformableBlockEntity {
        getAssemblyDirection(): $Direction;
        getAutoSchedule(): $ItemStack;
        dropSchedule(arg0: $ServerPlayer, arg1: $Train): void;
        resolveFlagAngle(): boolean;
        isAssembling(): boolean;
        tryEnterAssemblyMode(): boolean;
        refreshAssemblyInfo(): void;
        assemble(arg0: $UUID_): void;
        getStation(): $GlobalStation;
        cancelAssembly(): void;
        isValidBogeyOffset(arg0: number): boolean;
        attachPackagePort(arg0: $PackagePortBlockEntity): void;
        removePackagePort(arg0: $PackagePortBlockEntity): void;
        enterAssemblyMode(arg0: $ServerPlayer): boolean;
        tryDisassembleTrain(arg0: $ServerPlayer): boolean;
        exitAssemblyMode(): boolean;
        updateMapColor(arg0: number): void;
        updateName(arg0: string): boolean;
        trackClicked(arg0: $Player, arg1: $InteractionHand_, arg2: $ITrackBlock, arg3: $BlockState_, arg4: $BlockPos_): boolean;
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        lastDisassembledTrainName: $Component;
        flag: $LerpedFloat;
        static assemblyAreas: $WorldAttached<$Map<$BlockPos, $BoundingBox>>;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        doorControls: $DoorControlBehaviour;
        lastDisassembledMapColorIndex: number;
        computerBehaviour: $AbstractComputerBehaviour;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        edgePoint: $TrackTargetingBehaviour<$GlobalStation>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get assemblyDirection(): $Direction;
        get autoSchedule(): $ItemStack;
        get assembling(): boolean;
        get station(): $GlobalStation;
    }
    export class $NoShadowFontWrapper extends $Font {
        random: $RandomSource;
        static ALPHA_CUTOFF: number;
        lineHeight: number;
        constructor(arg0: $Font);
    }
    export class $StationBlock extends $Block implements $IBE<$StationBlockEntity>, $IWrenchable, $ProperWaterloggedBlock {
        hasAnalogOutputSignal(arg0: $BlockState_): boolean;
        getAnalogOutputSignal(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): number;
        updateShape(arg0: $BlockState_, arg1: $Direction_, arg2: $BlockState_, arg3: $LevelAccessor, arg4: $BlockPos_, arg5: $BlockPos_): $BlockState;
        getBlockEntityType(): $BlockEntityType<$StationBlockEntity>;
        getBlockEntityClass(): $Class<$StationBlockEntity>;
        getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        getFluidState(arg0: $BlockState_): $FluidState;
        onRemove(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$StationBlockEntity, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$StationBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$StationBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($StationBlockEntity) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $StationBlockEntity;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        withWater(arg0: $BlockState_, arg1: $BlockPlaceContext): $BlockState;
        updateWater(arg0: $LevelAccessor, arg1: $BlockState_, arg2: $BlockPos_): void;
        fluidState(arg0: $BlockState_): $FluidState;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
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
        static ASSEMBLING: $BooleanProperty;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$StationBlockEntity>;
        get blockEntityClass(): $Class<$StationBlockEntity>;
    }
    export class $GlobalStation extends $SingleBlockEntityEdgePoint implements $ILimitedGlobalStation, $CPLGlobalStation {
        isLimitEnabled(): boolean;
        canApproachFrom(arg0: $TrackNode): boolean;
        reserveFor(arg0: $Train): void;
        getNearestTrain(): $Train;
        cancelReservation(arg0: $Train): void;
        trainDeparted(arg0: $Train): void;
        getImminentTrain(): $Train;
        runMailTransfer(): void;
        isStationEnabled(): boolean;
        getDisablingTrain(): $Train;
        orDisablingTrain(arg0: $Train, arg1: $Train): $Train;
        setLimitEnabled(arg0: boolean): void;
        setLoader(arg0: $StationChunkLoader): void;
        getPresentTrain(): $Train;
        getLoader(): $StationChunkLoader;
        edgeLocation: $Couple<$TrackNodeLocation>;
        blockEntityPos: $BlockPos;
        cpl$chunkLoader: $StationChunkLoader;
        connectedPorts: $Map<$BlockPos, $GlobalPackagePort>;
        blockEntityDimension: $ResourceKey<$Level>;
        name: string;
        assembling: boolean;
        id: $UUID;
        position: number;
        nearestTrain: $WeakReference<$Train>;
        constructor();
        get imminentTrain(): $Train;
        get stationEnabled(): boolean;
        get disablingTrain(): $Train;
        get presentTrain(): $Train;
    }
    export class $GlobalPackagePort {
        saveOfflineBuffer(arg0: $IItemHandlerModifiable): void;
        restoreOfflineBuffer(arg0: $IItemHandlerModifiable): void;
        address: string;
        primed: boolean;
        offlineBuffer: $ItemStackHandler;
        constructor();
    }
    export class $TrainEditPacket$TrainEditReturnPacket extends $TrainEditPacket implements $ClientboundPacketPayload {
        handle(arg0: $LocalPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        handleInternal(arg0: $Player): void;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $TrainEditPacket$TrainEditReturnPacket>;
        constructor(arg0: $UUID_, arg1: string, arg2: $ResourceLocation_, arg3: number);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    export class $AssemblyScreen extends $AbstractStationScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $StationBlockEntity, arg1: $GlobalStation);
    }
    export class $StationMarker {
        static createStationDecoration(arg0: number, arg1: number, arg2: ($Component_) | undefined): $MapDecoration;
        static fromWorld(arg0: $BlockGetter, arg1: $BlockPos_): $StationMarker;
        getName(): $Component;
        static load(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $StationMarker;
        getId(): string;
        save(arg0: $HolderLookup$Provider): $CompoundTag;
        getTarget(): $BlockPos;
        getSource(): $BlockPos;
        constructor(arg0: $BlockPos_, arg1: $BlockPos_, arg2: $Component_);
        get name(): $Component;
        get id(): string;
        get target(): $BlockPos;
        get source(): $BlockPos;
    }
    export class $WideIconButton extends $IconButton {
        static COLOR_SUCCESS: $Couple<$Color>;
        green: boolean;
        visible: boolean;
        static HEADER_RGB: $Color;
        lockedTooltipY: number;
        static COLOR_HOVER: $Couple<$Color>;
        active: boolean;
        static COLOR_CLICK: $Couple<$Color>;
        static UNSET_FG_COLOR: number;
        static HINT_RGB: $Color;
        static COLOR_IDLE: $Couple<$Color>;
        lockedTooltipX: number;
        static COLOR_DISABLED: $Couple<$Color>;
        static COLOR_FAIL: $Couple<$Color>;
        constructor(arg0: number, arg1: number, arg2: $ScreenElement_);
    }
    export class $StationRenderer extends $SafeBlockEntityRenderer<$StationBlockEntity> {
        static renderFlag(arg0: $PartialModel, arg1: $StationBlockEntity, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number, arg6: number): void;
        static transformFlag(arg0: $Transform<never>, arg1: $StationBlockEntity, arg2: number, arg3: number, arg4: boolean): void;
        shouldRenderOffScreen(arg0: $StationBlockEntity): boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $AbstractStationScreen extends $AbstractSimiScreen {
        getTrainIconWidth(arg0: $Train): number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $StationBlockEntity, arg1: $GlobalStation);
    }
    export class $StationMapData {
    }
    export interface $StationMapData {
        addStationMarker(arg0: $StationMarker): void;
        toggleStation(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $StationBlockEntity): boolean;
    }
    export class $StationScreen extends $AbstractStationScreen {
        mapModsPresent(): boolean;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $StationBlockEntity, arg1: $GlobalStation);
    }
    export class $StationEditPacket extends $BlockEntityConfigurationPacket<$StationBlockEntity> implements $ILimited {
        static dropSchedule(arg0: $BlockPos_): $StationEditPacket;
        isLimitEnabled(): boolean;
        static tryAssemble(arg0: $BlockPos_): $StationEditPacket;
        setLimitEnabled(arg0: boolean): void;
        static tryDisassemble(arg0: $BlockPos_): $StationEditPacket;
        static configure(arg0: $BlockPos_, arg1: boolean, arg2: string, arg3: $DoorControl_): $StationEditPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $StationEditPacket>;
    }
}
