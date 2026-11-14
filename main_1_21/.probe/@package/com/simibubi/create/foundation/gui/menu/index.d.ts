import { $Rect2i } from "@package/net/minecraft/client/renderer";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $Minecraft } from "@package/net/minecraft/client";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $List } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $NonNullList } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $AbstractContainerScreen } from "@package/net/minecraft/client/gui/screens/inventory";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Slot, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Enum, $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $BasePacketPayload$PacketTypeProvider, $ServerboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/foundation/gui/menu" {
    export class $GhostItemMenu<T> extends $MenuBase<T> implements $IClearableMenu {
        clearContents(): void;
        sendClearPacket(): void;
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
        contentHolder: T;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
    }
    export class $IClearableMenu {
    }
    export interface $IClearableMenu {
        clearContents(): void;
        sendClearPacket(): void;
    }
    /**
     * Values that may be interpreted as {@link $IClearableMenu}.
     */
    export type $IClearableMenu_ = (() => void);
    export class $HeldItemGhostItemMenu extends $GhostItemMenu<$ItemStack> {
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
    }
    export class $MenuBase<T> extends $AbstractContainerMenu {
        playerInventory: $Inventory;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        contentHolder: T;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
    }
    export class $ClearMenuPacket extends $Enum<$ClearMenuPacket> implements $ServerboundPacketPayload {
        static values(): $ClearMenuPacket[];
        static valueOf(arg0: string): $ClearMenuPacket;
        handle(arg0: $ServerPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static INSTANCE: $ClearMenuPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ClearMenuPacket>;
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $ClearMenuPacket}.
     */
    export type $ClearMenuPacket_ = "instance";
    export class $AbstractSimiContainerScreen<T extends $AbstractContainerMenu> extends $AbstractContainerScreen<T> {
        getExtraAreas(): $List<$Rect2i>;
        getLeftOfCentered(arg0: number): number;
        renderPlayerInventory(arg0: $GuiGraphics, arg1: number, arg2: number): void;
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
        constructor(arg0: T, arg1: $Inventory, arg2: $Component_);
        get extraAreas(): $List<$Rect2i>;
    }
    export class $GhostItemSubmitPacket extends $Record implements $ServerboundPacketPayload {
        slot(): number;
        handle(arg0: $ServerPlayer): void;
        item(): $ItemStack;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $GhostItemSubmitPacket>;
        constructor(item: $ItemStack_, slot: number);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $GhostItemSubmitPacket}.
     */
    export type $GhostItemSubmitPacket_ = { item?: $ItemStack_, slot?: number,  } | [item?: $ItemStack_, slot?: number, ];
}
