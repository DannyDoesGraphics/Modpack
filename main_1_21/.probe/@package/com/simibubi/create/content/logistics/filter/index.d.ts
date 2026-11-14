import { $Codec } from "@package/com/mojang/serialization";
import { $AbstractSimiContainerScreen, $HeldItemGhostItemMenu } from "@package/com/simibubi/create/foundation/gui/menu";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $Minecraft } from "@package/net/minecraft/client";
import { $ItemCopyingRecipe$SupportsItemCopying } from "@package/com/simibubi/create/foundation/recipe";
import { $List, $Map } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $MenuProvider } from "@package/net/minecraft/world";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $MenuType_, $AbstractContainerMenu, $Slot } from "@package/net/minecraft/world/inventory";
import { $DataComponentType } from "@package/net/minecraft/core/component";
import { $Enum, $Record } from "@package/java/lang";
import { $Pair } from "@package/net/createmod/catnip/data";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $Item, $ItemStack_, $ItemStack, $Item$Properties } from "@package/net/minecraft/world/item";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $ItemAttribute } from "@package/com/simibubi/create/content/logistics/item/filter/attribute";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $BasePacketPayload$PacketTypeProvider, $ServerboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/logistics/filter" {
    export class $PackageFilterScreen extends $AbstractFilterScreen<$PackageFilterMenu> {
        onAddressEdited(arg0: string): void;
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
        constructor(arg0: $PackageFilterMenu, arg1: $Inventory, arg2: $Component_);
    }
    export class $FilterItemStack$PackageFilterItemStack extends $FilterItemStack {
        filterString: string;
        constructor(arg0: $ItemStack_);
    }
    export class $FilterItemStack {
        fluid(arg0: $Level_): $FluidStack;
        isFilterItem(): boolean;
        test(arg0: $Level_, arg1: $ItemStack_, arg2: boolean): boolean;
        test(arg0: $Level_, arg1: $ItemStack_): boolean;
        test(arg0: $Level_, arg1: $FluidStack_, arg2: boolean): boolean;
        test(arg0: $Level_, arg1: $FluidStack_): boolean;
        isEmpty(): boolean;
        static of(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $FilterItemStack;
        static of(arg0: $ItemStack_): $FilterItemStack;
        static empty(): $FilterItemStack;
        item(): $ItemStack;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        get filterItem(): boolean;
    }
    export class $PackageFilterItem extends $FilterItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
    }
    export class $AbstractFilterScreen<F extends $AbstractFilterMenu> extends $AbstractSimiContainerScreen<F> {
        handleIndicators(): void;
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
    }
    export class $AttributeFilterScreen extends $AbstractFilterScreen<$AttributeFilterMenu> {
        renderForeground(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
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
        constructor(arg0: $AttributeFilterMenu, arg1: $Inventory, arg2: $Component_);
    }
    export class $FilterScreenPacket$Option extends $Enum<$FilterScreenPacket$Option> {
        static values(): $FilterScreenPacket$Option[];
        static valueOf(arg0: string): $FilterScreenPacket$Option;
        static BLACKLIST: $FilterScreenPacket$Option;
        static RESPECT_DATA: $FilterScreenPacket$Option;
        static WHITELIST: $FilterScreenPacket$Option;
        static IGNORE_DATA: $FilterScreenPacket$Option;
        static ADD_TAG: $FilterScreenPacket$Option;
        static UPDATE_FILTER_ITEM: $FilterScreenPacket$Option;
        static UPDATE_ADDRESS: $FilterScreenPacket$Option;
        static ADD_INVERTED_TAG: $FilterScreenPacket$Option;
        static WHITELIST2: $FilterScreenPacket$Option;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $FilterScreenPacket$Option>;
    }
    /**
     * Values that may be interpreted as {@link $FilterScreenPacket$Option}.
     */
    export type $FilterScreenPacket$Option_ = "whitelist" | "whitelist2" | "blacklist" | "respect_data" | "ignore_data" | "update_filter_item" | "add_tag" | "add_inverted_tag" | "update_address";
    export class $ListFilterItem extends $FilterItem {
        getFilterItemHandler(arg0: $ItemStack_): $ItemStackHandler;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
    }
    export class $FilterMenu extends $AbstractFilterMenu {
        static create(arg0: number, arg1: $Inventory, arg2: $ItemStack_): $FilterMenu;
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
    export class $AbstractFilterMenu extends $HeldItemGhostItemMenu {
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
    export class $AttributeFilterItem extends $FilterItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
    }
    export class $AttributeFilterWhitelistMode extends $Enum<$AttributeFilterWhitelistMode> implements $StringRepresentable {
        static values(): $AttributeFilterWhitelistMode[];
        static valueOf(arg0: string): $AttributeFilterWhitelistMode;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static WHITELIST_DISJ: $AttributeFilterWhitelistMode;
        static BLACKLIST: $AttributeFilterWhitelistMode;
        static CODEC: $Codec<$AttributeFilterWhitelistMode>;
        static WHITELIST_CONJ: $AttributeFilterWhitelistMode;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $AttributeFilterWhitelistMode>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $AttributeFilterWhitelistMode}.
     */
    export type $AttributeFilterWhitelistMode_ = "whitelist_disj" | "whitelist_conj" | "blacklist";
    export class $FilterItemStack$AttributeFilterItemStack extends $FilterItemStack {
        attributeTests: $List<$Pair<$ItemAttribute, boolean>>;
        whitelistMode: $AttributeFilterWhitelistMode;
        constructor(arg0: $ItemStack_);
    }
    export class $FilterScreen extends $AbstractFilterScreen<$FilterMenu> {
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
        constructor(arg0: $FilterMenu, arg1: $Inventory, arg2: $Component_);
    }
    export class $FilterItem extends $Item implements $MenuProvider, $ItemCopyingRecipe$SupportsItemCopying {
        makeSummary(arg0: $ItemStack_): $List<$Component>;
        static testDirect(arg0: $ItemStack_, arg1: $ItemStack_, arg2: boolean): boolean;
        static doPackagesHaveSameData(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        makeStackWrapper(arg0: $ItemStack_): $FilterItemStack;
        getFilterItems(arg0: $ItemStack_): $ItemStack[];
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        getComponentType(): $DataComponentType<never>;
        static address(arg0: $Item$Properties): $PackageFilterItem;
        static attribute(arg0: $Item$Properties): $AttributeFilterItem;
        getDisplayName(): $Component;
        static regular(arg0: $Item$Properties): $ListFilterItem;
        canCopyFromItem(arg0: $ItemStack_): boolean;
        canCopyToItem(arg0: $ItemStack_): boolean;
        createCopy(arg0: $ItemStack_, arg1: number): $ItemStack;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        get componentType(): $DataComponentType<never>;
        get displayName(): $Component;
    }
    export class $AttributeFilterMenu extends $AbstractFilterMenu {
        appendSelectedAttribute(arg0: $ItemAttribute, arg1: boolean): void;
        static create(arg0: number, arg1: $Inventory, arg2: $ItemStack_): $AttributeFilterMenu;
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
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $ItemStack_);
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $RegistryFriendlyByteBuf);
    }
    export class $FilterScreenPacket extends $Record implements $ServerboundPacketPayload {
        data(): $CompoundTag;
        handle(arg0: $ServerPlayer): void;
        option(): $FilterScreenPacket$Option;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $FilterScreenPacket>;
        constructor(arg0: $FilterScreenPacket$Option_);
        constructor(option: $FilterScreenPacket$Option_, data: $CompoundTag_);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $FilterScreenPacket}.
     */
    export type $FilterScreenPacket_ = { data?: $CompoundTag_, option?: $FilterScreenPacket$Option_,  } | [data?: $CompoundTag_, option?: $FilterScreenPacket$Option_, ];
    export class $PackageFilterMenu extends $AbstractFilterMenu {
        static create(arg0: number, arg1: $Inventory, arg2: $ItemStack_): $PackageFilterMenu;
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
    export class $FilterItemStack$ListFilterItemStack extends $FilterItemStack {
        isBlacklist: boolean;
        shouldRespectNBT: boolean;
        containedItems: $List<$FilterItemStack>;
        constructor(arg0: $ItemStack_);
    }
}
