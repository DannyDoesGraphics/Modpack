import { $AbstractSimiScreen } from "@package/net/createmod/catnip/gui";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $Minecraft } from "@package/net/minecraft/client";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $ItemCopyingRecipe$SupportsItemCopying } from "@package/com/simibubi/create/foundation/recipe";
import { $List, $List_, $Map } from "@package/java/util";
import { $ItemModelBuilder } from "@package/net/neoforged/neoforge/client/model/generators";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $PlayerInteractEvent$RightClickBlock, $PlayerInteractEvent$LeftClickBlock } from "@package/net/neoforged/neoforge/event/entity/player";
import { $RenderHighlightEvent$Block } from "@package/net/neoforged/neoforge/client/event";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $IdMapper } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistrateItemModelProvider, $DataGenContext } from "@package/com/tterrag/registrate/providers";
import { $ProperWaterloggedBlock, $IBE } from "@package/com/simibubi/create/foundation/block";
import { $DataComponentType, $DataComponentMap_ } from "@package/net/minecraft/core/component";
import { $Enum, $Record, $Class } from "@package/java/lang";
import { $LootParams$Builder } from "@package/net/minecraft/world/level/storage/loot";
import { $LevelAccessor, $LevelReader, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $Item_, $BlockItem, $Item, $ItemStack_, $ItemStack, $Item$Properties } from "@package/net/minecraft/world/item";
import { $FluidState, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $MutableComponent, $MutableComponent_ } from "@package/net/minecraft/network/chat";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $DirectionProperty, $AttachFace, $EnumProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_, $FaceAttachedHorizontalDirectionalBlock, $Block } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Font } from "@package/net/minecraft/client/gui";
import { $BasePacketPayload$PacketTypeProvider, $ServerboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/equipment/clipboard" {
    export class $ClipboardEntry {
        static getLastViewedEntries(arg0: $ItemStack_): $List<$ClipboardEntry>;
        static readAll(arg0: $ClipboardContent_): $List<$List<$ClipboardEntry>>;
        static readAll(arg0: $ItemStack_): $List<$List<$ClipboardEntry>>;
        static readAll(arg0: $DataComponentMap_): $List<$List<$ClipboardEntry>>;
        displayItem(arg0: $ItemStack_, arg1: number): $ClipboardEntry;
        static CODEC: $Codec<$ClipboardEntry>;
        itemAmount: number;
        icon: $ItemStack;
        checked: boolean;
        text: $MutableComponent;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClipboardEntry>;
        constructor(arg0: boolean, arg1: $MutableComponent_);
    }
    export class $ClipboardOverrides {
        static addOverrideModels(arg0: $DataGenContext<$Item_, $ClipboardBlockItem>, arg1: $RegistrateItemModelProvider): $ItemModelBuilder;
        static registerModelOverridesClient(arg0: $ClipboardBlockItem): void;
        constructor();
    }
    export class $ClipboardBlockItem extends $BlockItem implements $ItemCopyingRecipe$SupportsItemCopying {
        registerModelOverrides(): void;
        getComponentType(): $DataComponentType<never>;
        canCopyFromItem(arg0: $ItemStack_): boolean;
        canCopyToItem(arg0: $ItemStack_): boolean;
        createCopy(arg0: $ItemStack_, arg1: number): $ItemStack;
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
        get componentType(): $DataComponentType<never>;
    }
    export class $ClipboardScreen extends $AbstractSimiScreen {
        reopenWith(arg0: $ClipboardContent_): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static FOOTER_SEPARATOR: $ResourceLocation;
        content: $ClipboardContent;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        targetedBlock: $BlockPos;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: number, arg1: $DataComponentMap_, arg2: $BlockPos_);
    }
    export class $ClipboardScreen$LineInfo {
    }
    export class $ClipboardCloneable {
    }
    export interface $ClipboardCloneable {
        getClipboardKey(): string;
        writeToClipboard(arg0: $HolderLookup$Provider, arg1: $CompoundTag_, arg2: $Direction_): boolean;
        readFromClipboard(arg0: $HolderLookup$Provider, arg1: $CompoundTag_, arg2: $Player, arg3: $Direction_, arg4: boolean): boolean;
        get clipboardKey(): string;
    }
    export class $ClipboardBlockEntity extends $SmartBlockEntity {
        updateWrittenState(): void;
        onEditedBy(arg0: $Player): void;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $ClipboardContent extends $Record {
        previouslyOpenedPage(): number;
        setPages(arg0: $List_<$List_<$ClipboardEntry>>): $ClipboardContent;
        setCopiedValues(arg0: $CompoundTag_): $ClipboardContent;
        setPreviouslyOpenedPage(arg0: number): $ClipboardContent;
        copiedValues(): ($CompoundTag) | undefined;
        type(): $ClipboardOverrides$ClipboardType;
        setReadOnly(arg0: boolean): $ClipboardContent;
        readOnly(): boolean;
        pages(): $List<$List<$ClipboardEntry>>;
        setType(arg0: $ClipboardOverrides$ClipboardType_): $ClipboardContent;
        static PAGES_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $List<$List<$ClipboardEntry>>>;
        static CODEC: $Codec<$ClipboardContent>;
        static PAGES_CODEC: $Codec<$List<$List<$ClipboardEntry>>>;
        static EMPTY: $ClipboardContent;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClipboardContent>;
        constructor(arg0: $ClipboardOverrides$ClipboardType_, arg1: $List_<$List_<$ClipboardEntry>>, arg2: boolean);
        constructor(type: $ClipboardOverrides$ClipboardType_, pages: $List_<$List_<$ClipboardEntry>>, readOnly: boolean, previouslyOpenedPage: number, copiedValues: ($CompoundTag_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $ClipboardContent}.
     */
    export type $ClipboardContent_ = { copiedValues?: ($CompoundTag_) | undefined, previouslyOpenedPage?: number, type?: $ClipboardOverrides$ClipboardType_, readOnly?: boolean, pages?: $List_<$List_<$ClipboardEntry>>,  } | [copiedValues?: ($CompoundTag_) | undefined, previouslyOpenedPage?: number, type?: $ClipboardOverrides$ClipboardType_, readOnly?: boolean, pages?: $List_<$List_<$ClipboardEntry>>, ];
    export class $ClipboardValueSettingsHandler {
        static drawCustomBlockSelection(arg0: $RenderHighlightEvent$Block): void;
        static rightClickToCopy(arg0: $PlayerInteractEvent$RightClickBlock): void;
        static leftClickToPaste(arg0: $PlayerInteractEvent$LeftClickBlock): void;
        static clientTick(): void;
        constructor();
    }
    export class $ClipboardBlock extends $FaceAttachedHorizontalDirectionalBlock implements $IBE<$ClipboardBlockEntity>, $IWrenchable, $ProperWaterloggedBlock {
        updateShape(arg0: $BlockState_, arg1: $Direction_, arg2: $BlockState_, arg3: $LevelAccessor, arg4: $BlockPos_, arg5: $BlockPos_): $BlockState;
        getDrops(arg0: $BlockState_, arg1: $LootParams$Builder): $List<$ItemStack>;
        getBlockEntityType(): $BlockEntityType<$ClipboardBlockEntity>;
        getBlockEntityClass(): $Class<$ClipboardBlockEntity>;
        getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        attack(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Player): void;
        getFluidState(arg0: $BlockState_): $FluidState;
        canSurvive(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): boolean;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$ClipboardBlockEntity, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$ClipboardBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$ClipboardBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($ClipboardBlockEntity) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $ClipboardBlockEntity;
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
        static WRITTEN: $BooleanProperty;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$ClipboardBlock>;
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
        static FACE: $EnumProperty<$AttachFace>;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$ClipboardBlockEntity>;
        get blockEntityClass(): $Class<$ClipboardBlockEntity>;
    }
    export class $ClipboardScreen$DisplayCache {
    }
    export class $ClipboardScreen$Pos2i extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ClipboardScreen$Pos2i}.
     */
    export type $ClipboardScreen$Pos2i_ = { x?: number, y?: number,  } | [x?: number, y?: number, ];
    export class $ClipboardEditPacket extends $Record implements $ServerboundPacketPayload {
        targetedBlock(): $BlockPos;
        hotbarSlot(): number;
        clipboardContent(): $ClipboardContent;
        static clipboardProcessor(arg0: $ClipboardContent_): $ClipboardContent;
        handle(arg0: $ServerPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClipboardEditPacket>;
        constructor(hotbarSlot: number, clipboardContent: $ClipboardContent_, targetedBlock: $BlockPos_);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $ClipboardEditPacket}.
     */
    export type $ClipboardEditPacket_ = { targetedBlock?: $BlockPos_, hotbarSlot?: number, clipboardContent?: $ClipboardContent_,  } | [targetedBlock?: $BlockPos_, hotbarSlot?: number, clipboardContent?: $ClipboardContent_, ];
    export class $ClipboardOverrides$ClipboardType extends $Enum<$ClipboardOverrides$ClipboardType> implements $StringRepresentable {
        static values(): $ClipboardOverrides$ClipboardType[];
        static valueOf(arg0: string): $ClipboardOverrides$ClipboardType;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static WRITTEN: $ClipboardOverrides$ClipboardType;
        static CODEC: $Codec<$ClipboardOverrides$ClipboardType>;
        file: string;
        static EDITING: $ClipboardOverrides$ClipboardType;
        static ID: $ResourceLocation;
        static EMPTY: $ClipboardOverrides$ClipboardType;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ClipboardOverrides$ClipboardType>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ClipboardOverrides$ClipboardType}.
     */
    export type $ClipboardOverrides$ClipboardType_ = "empty" | "written" | "editing";
}
