import { $MapCodec } from "@package/com/mojang/serialization";
import { $AbstractSimiContainerScreen, $HeldItemGhostItemMenu } from "@package/com/simibubi/create/foundation/gui/menu";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $CustomRenderedItemModelRenderer, $PartialItemModelRenderer, $CustomRenderedItemModel } from "@package/com/simibubi/create/foundation/item/render";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $Minecraft, $DeltaTracker } from "@package/net/minecraft/client";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $UUID, $List, $UUID_, $Collection_, $List_, $Collection, $Map } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $LecternControllerBlockEntityExtension } from "@package/dev/ryanhcode/sable/neoforge/mixinterface/compatibility/create";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $MenuProvider, $InteractionHand_, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $NonNullList, $IdMapper } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $MenuType_, $AbstractContainerMenu, $Slot } from "@package/net/minecraft/world/inventory";
import { $BlockSubLevelAssemblyListener } from "@package/dev/ryanhcode/sable/api/block";
import { $Enum, $Class } from "@package/java/lang";
import { $IRedstoneLinkable, $RedstoneLinkNetworkHandler$Frequency } from "@package/com/simibubi/create/content/redstone/link";
import { $WorldAttached, $Couple, $IntAttached } from "@package/net/createmod/catnip/data";
import { $ItemRequirement } from "@package/com/simibubi/create/content/schematics/requirement";
import { $LevelAccessor, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $SpecialBlockItemRequirement } from "@package/com/simibubi/create/api/schematic/requirement";
import { $Item, $ItemStack_, $ItemStack, $ItemDisplayContext_, $Item$Properties } from "@package/net/minecraft/world/item";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $DirectionProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $LecternBlock, $Block } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Font, $LayeredDraw$Layer, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $ServerboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/redstone/link/controller" {
    export class $LinkedControllerServerHandler {
        static receivePressed(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $UUID_, arg3: $List_<$Couple<$RedstoneLinkNetworkHandler$Frequency>>, arg4: boolean): void;
        static tick(arg0: $LevelAccessor): void;
        static receivedInputs: $WorldAttached<$Map<$UUID, $Collection<$LinkedControllerServerHandler$ManualFrequencyEntry>>>;
        constructor();
    }
    export class $LinkedControllerInputPacket extends $LinkedControllerPacketBase {
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $LinkedControllerInputPacket>;
        constructor(arg0: $Collection_<number>, arg1: boolean, arg2: $BlockPos_);
        constructor(arg0: $Collection_<number>, arg1: boolean);
    }
    export class $LinkedControllerServerHandler$ManualFrequencyEntry extends $IntAttached<$Couple<$RedstoneLinkNetworkHandler$Frequency>> implements $IRedstoneLinkable {
    }
    export class $LinkedControllerItemRenderer$RenderType extends $Enum<$LinkedControllerItemRenderer$RenderType> {
    }
    /**
     * Values that may be interpreted as {@link $LinkedControllerItemRenderer$RenderType}.
     */
    export type $LinkedControllerItemRenderer$RenderType_ = "normal" | "lectern";
    export class $LecternControllerBlockEntity extends $SmartBlockEntity implements $LecternControllerBlockEntityExtension {
        static playerInRange(arg0: $Player, arg1: $Level_, arg2: $BlockPos_): boolean;
        dropController(arg0: $BlockState_): void;
        tryStartUsing(arg0: $Player): void;
        sable$setNoDrop(): void;
        swapControllers(arg0: $ItemStack_, arg1: $Player, arg2: $InteractionHand_, arg3: $BlockState_): void;
        static playerIsUsingLectern(arg0: $Player): boolean;
        handler$gci000$sable$dropController(arg0: $BlockState_, arg1: $CallbackInfo): void;
        getController(): $ItemStack;
        setController(arg0: $ItemStack_): void;
        isUsedBy(arg0: $Player): boolean;
        tryStopUsing(arg0: $Player): void;
        hasUser(): boolean;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $LinkedControllerClientHandler$Mode extends $Enum<$LinkedControllerClientHandler$Mode> {
        static values(): $LinkedControllerClientHandler$Mode[];
        static valueOf(arg0: string): $LinkedControllerClientHandler$Mode;
        static BIND: $LinkedControllerClientHandler$Mode;
        static ACTIVE: $LinkedControllerClientHandler$Mode;
        static IDLE: $LinkedControllerClientHandler$Mode;
    }
    /**
     * Values that may be interpreted as {@link $LinkedControllerClientHandler$Mode}.
     */
    export type $LinkedControllerClientHandler$Mode_ = "idle" | "active" | "bind";
    export class $LinkedControllerItemRenderer extends $CustomRenderedItemModelRenderer {
        static renderInLectern(arg0: $ItemStack_, arg1: $CustomRenderedItemModel, arg2: $PartialItemModelRenderer, arg3: $ItemDisplayContext_, arg4: $PoseStack, arg5: number, arg6: boolean, arg7: boolean): void;
        constructor();
    }
    export class $LinkedControllerMenu extends $HeldItemGhostItemMenu {
        static create(arg0: number, arg1: $Inventory, arg2: $ItemStack_): $LinkedControllerMenu;
        playerInventory: $Inventory;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        ghostInventory: $ItemStackHandler;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        contentHolder: $ItemStack;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $RegistryFriendlyByteBuf);
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $ItemStack_);
    }
    export class $LecternControllerRenderer extends $SafeBlockEntityRenderer<$LecternControllerBlockEntity> {
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $LinkedControllerClientHandler {
        static inLectern(): boolean;
        static toggleBindMode(arg0: $BlockPos_): void;
        static toggle(): void;
        static deactivateInLectern(): void;
        static activateInLectern(arg0: $BlockPos_): void;
        static renderOverlay(arg0: $GuiGraphics, arg1: $DeltaTracker): void;
        static tick(): void;
        static currentlyPressed: $Collection<number>;
        static PACKET_RATE: number;
        static MODE: $LinkedControllerClientHandler$Mode;
        static OVERLAY: $LayeredDraw$Layer;
        constructor();
    }
    export class $LinkedControllerBindPacket extends $LinkedControllerPacketBase {
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $LinkedControllerBindPacket>;
        constructor(arg0: number, arg1: $BlockPos_);
    }
    export class $LinkedControllerScreen extends $AbstractSimiContainerScreen<$LinkedControllerMenu> {
        imageWidth: number;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        narratables: $List<$NarratableEntry>;
        width: number;
        topPos: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $LinkedControllerMenu, arg1: $Inventory, arg2: $Component_);
    }
    export class $LinkedControllerItem extends $Item implements $MenuProvider {
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        static toFrequency(arg0: $ItemStack_, arg1: number): $Couple<$RedstoneLinkNetworkHandler$Frequency>;
        static getFrequencyItems(arg0: $ItemStack_): $ItemStackHandler;
        getDisplayName(): $Component;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
        get displayName(): $Component;
    }
    export class $LecternControllerBlock extends $LecternBlock implements $IBE<$LecternControllerBlockEntity>, $SpecialBlockItemRequirement, $BlockSubLevelAssemblyListener {
        replaceWithLectern(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): void;
        replaceLectern(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $ItemStack_): void;
        getAnalogOutputSignal(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): number;
        afterMove(arg0: $ServerLevel, arg1: $ServerLevel, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockPos_): void;
        getBlockEntityType(): $BlockEntityType<$LecternControllerBlockEntity>;
        getRequiredItems(arg0: $BlockState_, arg1: $BlockEntity): $ItemRequirement;
        getBlockEntityClass(): $Class<$LecternControllerBlockEntity>;
        onRemove(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$LecternControllerBlockEntity, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$LecternControllerBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$LecternControllerBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($LecternControllerBlockEntity) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $LecternControllerBlockEntity;
        beforeMove(arg0: $ServerLevel, arg1: $ServerLevel, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockPos_): void;
        static SHAPE_NORTH: $VoxelShape;
        static SHAPE_SOUTH: $VoxelShape;
        static SHAPE_BASE: $VoxelShape;
        static HAS_BOOK: $BooleanProperty;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static SHAPE_COMMON: $VoxelShape;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static SHAPE_POST: $VoxelShape;
        static SHAPE_TOP_PLATE: $VoxelShape;
        static UPDATE_ALL: number;
        static UPDATE_KNOWN_SHAPE: number;
        static SHAPE_COLLISION: $VoxelShape;
        static UPDATE_SUPPRESS_DROPS: number;
        static UPDATE_IMMEDIATE: number;
        static SHAPE_WEST: $VoxelShape;
        item: $Item;
        static CODEC: $MapCodec<$LecternBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static POWERED: $BooleanProperty;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        static SHAPE_EAST: $VoxelShape;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$LecternControllerBlockEntity>;
        get blockEntityClass(): $Class<$LecternControllerBlockEntity>;
    }
    export class $LinkedControllerStopLecternPacket extends $LinkedControllerPacketBase {
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $LinkedControllerStopLecternPacket>;
        constructor(arg0: $BlockPos_);
    }
    export class $LinkedControllerPacketBase implements $ServerboundPacketPayload {
        getLecternPos(): $BlockPos;
        handle(arg0: $ServerPlayer): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor(arg0: $BlockPos_);
        get lecternPos(): $BlockPos;
    }
}
