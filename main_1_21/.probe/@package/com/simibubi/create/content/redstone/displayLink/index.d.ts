import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $AbstractSimiScreen } from "@package/net/createmod/catnip/gui";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $Minecraft } from "@package/net/minecraft/client";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $List, $Map } from "@package/java/util";
import { $PlayerInteractEvent$RightClickBlock } from "@package/net/neoforged/neoforge/event/entity/player";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $BiConsumer_, $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Vec3i, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $IBE, $WrenchableDirectionalBlock } from "@package/com/simibubi/create/foundation/block";
import { $BlockSubLevelAssemblyListener } from "@package/dev/ryanhcode/sable/api/block";
import { $Record, $Class, $Object } from "@package/java/lang";
import { $LevelAccessor, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $BlockItem, $Item, $Item$Properties } from "@package/net/minecraft/world/item";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $BlockEntityConfigurationPacket } from "@package/com/simibubi/create/foundation/networking";
import { $FactoryPanelSupportBehaviour } from "@package/com/simibubi/create/content/logistics/factoryBoard";
import { $DirectionProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $DisplayTarget, $DisplaySource } from "@package/com/simibubi/create/api/behaviour/display";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $TransformableBlockEntity } from "@package/com/simibubi/create/api/contraption/transformable";
import { $Font } from "@package/net/minecraft/client/gui";
import { $Vec3, $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";
export * as source from "@package/com/simibubi/create/content/redstone/displayLink/source";
export * as target from "@package/com/simibubi/create/content/redstone/displayLink/target";

declare module "@package/com/simibubi/create/content/redstone/displayLink" {
    export class $DisplayLinkContext {
        blockEntity(): $DisplayLinkBlockEntity;
        getTargetPos(): $BlockPos;
        getSourcePos(): $BlockPos;
        getTargetBlockEntity(): $BlockEntity;
        sourceConfig(): $CompoundTag;
        getSourceBlockEntity(): $BlockEntity;
        level(): $Level;
        flapDisplayContext: $Object;
        constructor(arg0: $Level_, arg1: $DisplayLinkBlockEntity);
        get targetPos(): $BlockPos;
        get sourcePos(): $BlockPos;
        get targetBlockEntity(): $BlockEntity;
        get sourceBlockEntity(): $BlockEntity;
    }
    export class $DisplayLinkConfigurationPacket extends $BlockEntityConfigurationPacket<$DisplayLinkBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $DisplayLinkConfigurationPacket>;
        constructor(arg0: $BlockPos_, arg1: $CompoundTag_, arg2: number);
    }
    export class $DisplayLinkBlockEntity extends $LinkWithBulbBlockEntity implements $TransformableBlockEntity {
        onNoLongerPowered(): void;
        tickSource(): void;
        getTargetPosition(): $BlockPos;
        getSourceConfig(): $CompoundTag;
        updateGatheredData(): void;
        setSourceConfig(arg0: $CompoundTag_): void;
        handler$gba001$sable$accountForSubLevels(arg0: $CallbackInfoReturnable<any>): void;
        target(arg0: $BlockPos_): void;
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
        getDirection(): $Direction;
        getSourcePosition(): $BlockPos;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        refreshTicks: number;
        level: $Level;
        targetLine: number;
        static ATTACHMENTS_NBT_KEY: string;
        activeTarget: $DisplayTarget;
        computerBehaviour: $AbstractComputerBehaviour;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        factoryPanelSupport: $FactoryPanelSupportBehaviour;
        activeSource: $DisplaySource;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get targetPosition(): $BlockPos;
        get direction(): $Direction;
        get sourcePosition(): $BlockPos;
    }
    export class $ClickToLinkBlockItem extends $BlockItem {
        getSelectionBounds(arg0: $BlockPos_): $AABB;
        getMessageTranslationKey(): string;
        static linkableItemAlwaysPlacesWhenUsed(arg0: $PlayerInteractEvent$RightClickBlock): void;
        placeWhenInvalid(): boolean;
        wrapOperation$gap000$sable$accountForSubLevels$mixinextras$bridge$11(arg0: $BlockPos_, arg1: $Vec3i, arg2: number, arg3: $Operation_<any>, arg4: $LocalRef<any>): boolean;
        wrapOperation$gap000$sable$accountForSubLevels(arg0: $BlockPos_, arg1: $Vec3i, arg2: number, arg3: $Operation_<any>, arg4: $Level_): boolean;
        getMaxDistanceFromSelection(): number;
        isValidTarget(arg0: $LevelAccessor, arg1: $BlockPos_): boolean;
        static clientTick(): void;
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
        get messageTranslationKey(): string;
        get maxDistanceFromSelection(): number;
    }
    export class $DisplayLinkScreen extends $AbstractSimiScreen {
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
        constructor(arg0: $DisplayLinkBlockEntity);
    }
    export class $ClickToLinkBlockItem$ClickToLinkData extends $Record {
        selectedDim(): $ResourceLocation;
        selectedPos(): $BlockPos;
        static CODEC: $Codec<$ClickToLinkBlockItem$ClickToLinkData>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ClickToLinkBlockItem$ClickToLinkData>;
        constructor(selectedPos: $BlockPos_, selectedDim: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $ClickToLinkBlockItem$ClickToLinkData}.
     */
    export type $ClickToLinkBlockItem$ClickToLinkData_ = { selectedPos?: $BlockPos_, selectedDim?: $ResourceLocation_,  } | [selectedPos?: $BlockPos_, selectedDim?: $ResourceLocation_, ];
    export class $DisplayLinkBlockItem extends $ClickToLinkBlockItem {
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
    export class $LinkWithBulbBlockEntity extends $SmartBlockEntity {
        getBulbFacing(arg0: $BlockState_): $Direction;
        getBulbOffset(arg0: $BlockState_): $Vec3;
        getGlow(arg0: number): number;
        sendPulseNextSync(): void;
        pulse(): void;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $DisplayLinkBlock extends $WrenchableDirectionalBlock implements $IBE<$DisplayLinkBlockEntity>, $BlockSubLevelAssemblyListener {
        neighborChanged(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Block_, arg4: $BlockPos_, arg5: boolean): void;
        afterMove(arg0: $ServerLevel, arg1: $ServerLevel, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockPos_): void;
        static sendToGatherers<T extends $DisplaySource>(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BiConsumer_<$DisplayLinkBlockEntity, T>, arg3: $Class<T>): void;
        static notifyGatherers(arg0: $LevelAccessor, arg1: $BlockPos_): void;
        getBlockEntityType(): $BlockEntityType<$DisplayLinkBlockEntity>;
        getBlockEntityClass(): $Class<$DisplayLinkBlockEntity>;
        getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        onRemove(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$DisplayLinkBlockEntity, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$DisplayLinkBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$DisplayLinkBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($DisplayLinkBlockEntity) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $DisplayLinkBlockEntity;
        beforeMove(arg0: $ServerLevel, arg1: $ServerLevel, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockPos_): void;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$DisplayLinkBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
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
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$DisplayLinkBlockEntity>;
        get blockEntityClass(): $Class<$DisplayLinkBlockEntity>;
    }
    export class $LinkBulbRenderer extends $SafeBlockEntityRenderer<$LinkWithBulbBlockEntity> {
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
}
