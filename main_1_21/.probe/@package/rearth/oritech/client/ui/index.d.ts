import { $Rect2i } from "@package/net/minecraft/client/renderer";
import { $UIComponent } from "@package/rearth/oritech/api/screen";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $Minecraft } from "@package/net/minecraft/client";
import { $List, $Collection } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $Container } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_, $RegistryAccess, $NonNullList } from "@package/net/minecraft/core";
import { $DynamicStatisticEnergyStorage$EnergyStatistics } from "@package/rearth/oritech/api/energy/containers";
import { $OverlayWidget, $LabelWidget } from "@package/rearth/oritech/api/screen/widgets";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $AbstractContainerMenu, $Slot } from "@package/net/minecraft/world/inventory";
import { $Record } from "@package/java/lang";
import { $DisplayDataSource } from "@package/rearth/oritech/api/screen/data";
import { $EnchantmentCatalystBlockEntity } from "@package/rearth/oritech/block/entity/arcane";
import { $Level } from "@package/net/minecraft/world/level";
import { $ReactorControllerBlockEntity, $ReactorControllerBlockEntity$ComponentStatistics } from "@package/rearth/oritech/block/entity/reactor";
import { $ScreenProvider, $MachineAddonController } from "@package/rearth/oritech/util";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $AugmentApplicationEntity } from "@package/rearth/oritech/block/entity/augmenter";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $FluidApi$SingleSlotStorage } from "@package/rearth/oritech/api/fluid";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $AbstractContainerScreen } from "@package/net/minecraft/client/gui/screens/inventory";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Font } from "@package/net/minecraft/client/gui";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/rearth/oritech/client/ui" {
    export class $AugmentSelectionScreen$SelectionEntry extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $AugmentSelectionScreen$SelectionEntry}.
     */
    export type $AugmentSelectionScreen$SelectionEntry_ = { id?: $ResourceLocation_, texture?: $ResourceLocation_, centerX?: number, centerY?: number, size?: number,  } | [id?: $ResourceLocation_, texture?: $ResourceLocation_, centerX?: number, centerY?: number, size?: number, ];
    export class $ReactorScreen$PreviewEntry extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ReactorScreen$PreviewEntry}.
     */
    export type $ReactorScreen$PreviewEntry_ = { zIndex?: number, pos?: $BlockPos_, drawY?: number, drawX?: number, blockEntity?: $BlockEntity,  } | [zIndex?: number, pos?: $BlockPos_, drawY?: number, drawX?: number, blockEntity?: $BlockEntity, ];
    export class $EnergyStorageScreen<T extends $UpgradableOritechScreenHandler> extends $UpgradableOritechScreen<T> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static BACKGROUND_TALL: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static SEPARATOR_COLOR: number;
        clickedSlot: $Slot;
        burstLabel: $LabelWidget;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        addonOverlay: $OverlayWidget;
        static INVENTORY_LOCATION: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        steamProductionLabel: $LabelWidget;
        static BACKGROUND: $ResourceLocation;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        static GUI_COMPONENTS: $ResourceLocation;
        speedLabel: $LabelWidget;
        narratables: $List<$NarratableEntry>;
        width: number;
        efficiencyLabel: $LabelWidget;
        topPos: number;
        font: $Font;
        constructor(arg0: T, arg1: $Inventory, arg2: $Component_);
    }
    export class $PlayerModifierScreen$DependencyLineWidget extends $UIComponent {
    }
    export class $UpgradableOritechScreen<T extends $UpgradableOritechScreenHandler> extends $OritechMachineScreen<T> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static BACKGROUND_TALL: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static SEPARATOR_COLOR: number;
        clickedSlot: $Slot;
        burstLabel: $LabelWidget;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        addonOverlay: $OverlayWidget;
        static INVENTORY_LOCATION: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        steamProductionLabel: $LabelWidget;
        static BACKGROUND: $ResourceLocation;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        static GUI_COMPONENTS: $ResourceLocation;
        speedLabel: $LabelWidget;
        narratables: $List<$NarratableEntry>;
        width: number;
        efficiencyLabel: $LabelWidget;
        topPos: number;
        font: $Font;
        constructor(arg0: T, arg1: $Inventory, arg2: $Component_);
    }
    export class $CatalystScreenHandler extends $OritechScreenHandler {
        blockPos: $BlockPos;
        playerInventory: $Inventory;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        inventory: $Container;
        screenData: $ScreenProvider;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        machineBlock: $BlockState;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        catalyst: $EnchantmentCatalystBlockEntity;
        blockEntity: $BlockEntity;
        fluidStorages: $List<$FluidApi$SingleSlotStorage>;
        armorSlots: $List<number>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $BlockEntity);
        constructor(arg0: number, arg1: $Inventory, arg2: $FriendlyByteBuf);
    }
    export class $ShrinkerScreen extends $UpgradableOritechScreen<$UpgradableOritechScreenHandler> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static BACKGROUND_TALL: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static SEPARATOR_COLOR: number;
        clickedSlot: $Slot;
        burstLabel: $LabelWidget;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        addonOverlay: $OverlayWidget;
        static INVENTORY_LOCATION: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        steamProductionLabel: $LabelWidget;
        static BACKGROUND: $ResourceLocation;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        static GUI_COMPONENTS: $ResourceLocation;
        speedLabel: $LabelWidget;
        narratables: $List<$NarratableEntry>;
        width: number;
        efficiencyLabel: $LabelWidget;
        topPos: number;
        font: $Font;
        constructor(arg0: $UpgradableOritechScreenHandler, arg1: $Inventory, arg2: $Component_);
    }
    export class $UnstableContainerScreen extends $EnergyStorageScreen<$UpgradableOritechScreenHandler> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static BACKGROUND_TALL: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static SEPARATOR_COLOR: number;
        clickedSlot: $Slot;
        burstLabel: $LabelWidget;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        addonOverlay: $OverlayWidget;
        static INVENTORY_LOCATION: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        steamProductionLabel: $LabelWidget;
        static BACKGROUND: $ResourceLocation;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        static GUI_COMPONENTS: $ResourceLocation;
        speedLabel: $LabelWidget;
        narratables: $List<$NarratableEntry>;
        width: number;
        efficiencyLabel: $LabelWidget;
        topPos: number;
        font: $Font;
        constructor(arg0: $UpgradableOritechScreenHandler, arg1: $Inventory, arg2: $Component_);
    }
    export class $RefineryScreenHandler extends $OritechScreenHandler {
        blockPos: $BlockPos;
        playerInventory: $Inventory;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        inventory: $Container;
        screenData: $ScreenProvider;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        machineBlock: $BlockState;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        blockEntity: $BlockEntity;
        fluidStorages: $List<$FluidApi$SingleSlotStorage>;
        armorSlots: $List<number>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $FriendlyByteBuf);
        constructor(arg0: number, arg1: $Inventory, arg2: $BlockEntity);
    }
    export class $RefineryScreen extends $OritechMachineScreen<$RefineryScreenHandler> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static BACKGROUND_TALL: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static SEPARATOR_COLOR: number;
        clickedSlot: $Slot;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        static INVENTORY_LOCATION: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        static BACKGROUND: $ResourceLocation;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        static GUI_COMPONENTS: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        topPos: number;
        font: $Font;
        constructor(arg0: $RefineryScreenHandler, arg1: $Inventory, arg2: $Component_);
    }
    export class $InventoryProxyScreenHandler extends $AbstractContainerMenu {
        getBlockPos(): $BlockPos;
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
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $FriendlyByteBuf);
        constructor(arg0: number, arg1: $Inventory, arg2: $BlockEntity, arg3: $ScreenProvider, arg4: number);
        constructor(arg0: number, arg1: $Inventory, arg2: $InventoryProxyScreenHandler$InvProxyData_);
        get blockPos(): $BlockPos;
    }
    export class $InventoryProxyScreen extends $OritechWidgetScreen<$InventoryProxyScreenHandler> {
        imageWidth: number;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static SEPARATOR_COLOR: number;
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
        constructor(arg0: $InventoryProxyScreenHandler, arg1: $Inventory, arg2: $Component_);
    }
    export class $SteamEngineScreen extends $UpgradableOritechScreen<$SteamEngineScreenHandler> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static BACKGROUND_TALL: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static SEPARATOR_COLOR: number;
        clickedSlot: $Slot;
        burstLabel: $LabelWidget;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        addonOverlay: $OverlayWidget;
        static INVENTORY_LOCATION: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        steamProductionLabel: $LabelWidget;
        static BACKGROUND: $ResourceLocation;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        static GUI_COMPONENTS: $ResourceLocation;
        speedLabel: $LabelWidget;
        narratables: $List<$NarratableEntry>;
        width: number;
        efficiencyLabel: $LabelWidget;
        topPos: number;
        font: $Font;
        constructor(arg0: $SteamEngineScreenHandler, arg1: $Inventory, arg2: $Component_);
    }
    export class $InventoryProxyScreenHandler$InvProxyData extends $Record {
        controllerPos(): $BlockPos;
        ownPos(): $BlockPos;
        slot(): number;
        static PACKET_CODEC: $StreamCodec<$FriendlyByteBuf, $InventoryProxyScreenHandler$InvProxyData>;
        constructor(ownPos: $BlockPos_, controllerPos: $BlockPos_, slot: number);
    }
    /**
     * Values that may be interpreted as {@link $InventoryProxyScreenHandler$InvProxyData}.
     */
    export type $InventoryProxyScreenHandler$InvProxyData_ = { slot?: number, ownPos?: $BlockPos_, controllerPos?: $BlockPos_,  } | [slot?: number, ownPos?: $BlockPos_, controllerPos?: $BlockPos_, ];
    export class $PlayerModifierScreenHandler extends $AbstractContainerMenu {
        getBlockPos(): $BlockPos;
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
        blockEntity: $AugmentApplicationEntity;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $FriendlyByteBuf);
        constructor(arg0: number, arg1: $Inventory, arg2: $BlockEntity);
        get blockPos(): $BlockPos;
    }
    export class $ReactorScreen extends $OritechWidgetScreen<$ReactorScreenHandler> {
        getStatsAtPosition(arg0: $BlockPos_): $ReactorControllerBlockEntity$ComponentStatistics;
        imageWidth: number;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static SEPARATOR_COLOR: number;
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
        constructor(arg0: $ReactorScreenHandler, arg1: $Inventory, arg2: $Component_);
    }
    export class $EnchanterScreenHandler extends $OritechScreenHandler {
        blockPos: $BlockPos;
        playerInventory: $Inventory;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        inventory: $Container;
        screenData: $ScreenProvider;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        machineBlock: $BlockState;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        blockEntity: $BlockEntity;
        fluidStorages: $List<$FluidApi$SingleSlotStorage>;
        armorSlots: $List<number>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $FriendlyByteBuf);
        constructor(arg0: number, arg1: $Inventory, arg2: $BlockEntity);
    }
    export class $RedstoneAddonScreenHandler extends $AbstractContainerMenu {
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
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $FriendlyByteBuf);
        constructor(arg0: number, arg1: $Inventory, arg2: $BlockEntity);
    }
    export class $ItemFilterScreen extends $OritechWidgetScreen<$ItemFilterScreenHandler> {
        updateItemFilters(): void;
        acceptItemStack(arg0: $ItemStack_, arg1: number): boolean;
        getItemContainer(arg0: number): $ItemFilterScreen$FilterSlotBounds;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static SEPARATOR_COLOR: number;
        clickedSlot: $Slot;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        static INVENTORY_LOCATION: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        static FILTER_SIZE: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        topPos: number;
        font: $Font;
        constructor(arg0: $ItemFilterScreenHandler, arg1: $Inventory, arg2: $Component_);
    }
    export class $PlayerModifierScreen$DependencyLine extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PlayerModifierScreen$DependencyLine}.
     */
    export type $PlayerModifierScreen$DependencyLine_ = { toY?: number, fromY?: number, fromX?: number, toX?: number,  } | [toY?: number, fromY?: number, fromX?: number, toX?: number, ];
    export class $UpgradableOritechScreenHandler extends $OritechScreenHandler {
        blockPos: $BlockPos;
        playerInventory: $Inventory;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        addonController: $MachineAddonController;
        inventory: $Container;
        worldAccess: $Level;
        screenData: $ScreenProvider;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        machineBlock: $BlockState;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        blockEntity: $BlockEntity;
        fluidStorages: $List<$FluidApi$SingleSlotStorage>;
        armorSlots: $List<number>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $BlockEntity);
        constructor(arg0: number, arg1: $Inventory, arg2: $FriendlyByteBuf);
    }
    export class $DroneScreen extends $UpgradableOritechScreen<$DroneScreenHandler> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static BACKGROUND_TALL: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static SEPARATOR_COLOR: number;
        clickedSlot: $Slot;
        burstLabel: $LabelWidget;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        addonOverlay: $OverlayWidget;
        static INVENTORY_LOCATION: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        steamProductionLabel: $LabelWidget;
        static BACKGROUND: $ResourceLocation;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        static CARD_SLOT: $ResourceLocation;
        static GUI_COMPONENTS: $ResourceLocation;
        speedLabel: $LabelWidget;
        narratables: $List<$NarratableEntry>;
        width: number;
        efficiencyLabel: $LabelWidget;
        topPos: number;
        font: $Font;
        constructor(arg0: $DroneScreenHandler, arg1: $Inventory, arg2: $Component_);
    }
    export class $CentrifugeScreenHandler extends $UpgradableOritechScreenHandler {
        blockPos: $BlockPos;
        playerInventory: $Inventory;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        addonController: $MachineAddonController;
        inventory: $Container;
        worldAccess: $Level;
        screenData: $ScreenProvider;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        machineBlock: $BlockState;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        blockEntity: $BlockEntity;
        fluidStorages: $List<$FluidApi$SingleSlotStorage>;
        armorSlots: $List<number>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $BlockEntity);
        constructor(arg0: number, arg1: $Inventory, arg2: $FriendlyByteBuf);
    }
    export class $ItemFilterScreenHandler extends $AbstractContainerMenu {
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
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $FriendlyByteBuf);
        constructor(arg0: number, arg1: $Inventory, arg2: $BlockEntity);
    }
    export class $MachineMenuHandler {
    }
    export interface $MachineMenuHandler {
        getMachineInvStartSlot(arg0: $ItemStack_): number;
        getMachineInvEndSlot(arg0: $ItemStack_): number;
        getBlockEntity(): $BlockEntity;
        get blockEntity(): $BlockEntity;
    }
    export class $SteamEngineScreenHandler extends $UpgradableOritechScreenHandler {
        blockPos: $BlockPos;
        playerInventory: $Inventory;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        addonController: $MachineAddonController;
        inventory: $Container;
        worldAccess: $Level;
        screenData: $ScreenProvider;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        machineBlock: $BlockState;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        blockEntity: $BlockEntity;
        fluidStorages: $List<$FluidApi$SingleSlotStorage>;
        armorSlots: $List<number>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $BlockEntity);
        constructor(arg0: number, arg1: $Inventory, arg2: $FriendlyByteBuf);
    }
    export class $RedstoneAddonScreen extends $OritechWidgetScreen<$RedstoneAddonScreenHandler> {
        imageWidth: number;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static SEPARATOR_COLOR: number;
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
        constructor(arg0: $RedstoneAddonScreenHandler, arg1: $Inventory, arg2: $Component_);
    }
    export class $PlayerModifierScreen extends $OritechWidgetScreen<$PlayerModifierScreenHandler> {
        static augmentKey(arg0: $ResourceLocation_): string;
        imageWidth: number;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static SEPARATOR_COLOR: number;
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
        constructor(arg0: $PlayerModifierScreenHandler, arg1: $Inventory, arg2: $Component_);
    }
    export class $OritechScreenHandler extends $AbstractContainerMenu implements $MachineMenuHandler {
        isTall(): boolean;
        static handleFluidContainerInteraction(arg0: $OritechScreenHandler$FluidContainerInteractionPacket_, arg1: $Player, arg2: $RegistryAccess): void;
        getMachineInvStartSlot(arg0: $ItemStack_): number;
        getMachineInvEndSlot(arg0: $ItemStack_): number;
        addFluidDisplay(): void;
        getDataDisplays(): $Collection<$DisplayDataSource>;
        showRedstoneAddon(): boolean;
        addMachineSlot(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
        getPlayerInvStartSlot(arg0: $ItemStack_): number;
        getPlayerInvEndSlot(arg0: $ItemStack_): number;
        getBlockEntity(): $BlockEntity;
        blockPos: $BlockPos;
        playerInventory: $Inventory;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        inventory: $Container;
        screenData: $ScreenProvider;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        machineBlock: $BlockState;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        blockEntity: $BlockEntity;
        fluidStorages: $List<$FluidApi$SingleSlotStorage>;
        armorSlots: $List<number>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $BlockEntity);
        constructor(arg0: number, arg1: $Inventory, arg2: $FriendlyByteBuf);
        get tall(): boolean;
        get dataDisplays(): $Collection<$DisplayDataSource>;
    }
    export class $AcceleratorScreenHandler extends $OritechScreenHandler {
        blockPos: $BlockPos;
        playerInventory: $Inventory;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        inventory: $Container;
        screenData: $ScreenProvider;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        machineBlock: $BlockState;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        blockEntity: $BlockEntity;
        fluidStorages: $List<$FluidApi$SingleSlotStorage>;
        armorSlots: $List<number>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $FriendlyByteBuf);
        constructor(arg0: number, arg1: $Inventory, arg2: $BlockEntity);
    }
    export class $ReactorScreenHandler extends $AbstractContainerMenu {
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        reactorEntity: $ReactorControllerBlockEntity;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        world: $Level;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $FriendlyByteBuf);
        constructor(arg0: number, arg1: $Inventory, arg2: $BlockEntity);
    }
    export class $OritechScreenHandler$FluidContainerInteractionPacket extends $Record implements $CustomPacketPayload {
        tankIndex(): number;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        extract(): boolean;
        position(): $BlockPos;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static PACKET_ID: $CustomPacketPayload$Type<$OritechScreenHandler$FluidContainerInteractionPacket>;
        constructor(position: $BlockPos_, tankIndex: number, extract: boolean);
    }
    /**
     * Values that may be interpreted as {@link $OritechScreenHandler$FluidContainerInteractionPacket}.
     */
    export type $OritechScreenHandler$FluidContainerInteractionPacket_ = { tankIndex?: number, position?: $BlockPos_, extract?: boolean,  } | [tankIndex?: number, position?: $BlockPos_, extract?: boolean, ];
    export class $AcceleratorScreen extends $OritechMachineScreen<$AcceleratorScreenHandler> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static BACKGROUND_TALL: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static SEPARATOR_COLOR: number;
        clickedSlot: $Slot;
        static PARTICLE_OVERLAY: $ResourceLocation;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        static INVENTORY_LOCATION: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        static BACKGROUND: $ResourceLocation;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        static GUI_COMPONENTS: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        topPos: number;
        font: $Font;
        constructor(arg0: $AcceleratorScreenHandler, arg1: $Inventory, arg2: $Component_);
    }
    export class $AugmentSelectionScreen extends $Screen {
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
        constructor();
    }
    export class $PlayerModifierScreen$AugmentNodeWidget extends $UIComponent {
    }
    export class $OritechMachineScreen<T extends $OritechScreenHandler> extends $OritechWidgetScreen<T> {
        showExtensionPanel(): boolean;
        getGuiComponents(): $ResourceLocation;
        getBackground(): $ResourceLocation;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static BACKGROUND_TALL: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static SEPARATOR_COLOR: number;
        clickedSlot: $Slot;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        static INVENTORY_LOCATION: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        static BACKGROUND: $ResourceLocation;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        static GUI_COMPONENTS: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        topPos: number;
        font: $Font;
        constructor(arg0: T, arg1: $Inventory, arg2: $Component_);
        get guiComponents(): $ResourceLocation;
        get background(): $ResourceLocation;
    }
    export class $TaintedRefineryScreen extends $OritechMachineScreen<$TaintedRefineryScreenHandler> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static BACKGROUND_TALL: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static SEPARATOR_COLOR: number;
        clickedSlot: $Slot;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        static INVENTORY_LOCATION: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        static BACKGROUND: $ResourceLocation;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        static GUI_COMPONENTS: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        topPos: number;
        font: $Font;
        constructor(arg0: $TaintedRefineryScreenHandler, arg1: $Inventory, arg2: $Component_);
    }
    export class $PowerPoleScreen extends $EnergyStorageScreen<$UpgradableOritechScreenHandler> {
        getStatistics(arg0: $BlockEntity): $DynamicStatisticEnergyStorage$EnergyStatistics;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static BACKGROUND_TALL: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static SEPARATOR_COLOR: number;
        clickedSlot: $Slot;
        burstLabel: $LabelWidget;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        addonOverlay: $OverlayWidget;
        static INVENTORY_LOCATION: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        steamProductionLabel: $LabelWidget;
        static BACKGROUND: $ResourceLocation;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        static GUI_COMPONENTS: $ResourceLocation;
        speedLabel: $LabelWidget;
        narratables: $List<$NarratableEntry>;
        width: number;
        efficiencyLabel: $LabelWidget;
        topPos: number;
        font: $Font;
        constructor(arg0: $UpgradableOritechScreenHandler, arg1: $Inventory, arg2: $Component_);
    }
    export class $CatalystScreen extends $OritechMachineScreen<$CatalystScreenHandler> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static BACKGROUND_TALL: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static SEPARATOR_COLOR: number;
        clickedSlot: $Slot;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        static BOOK_SLOT: $ResourceLocation;
        static INVENTORY_LOCATION: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        static BACKGROUND: $ResourceLocation;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        static GUI_COMPONENTS: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        topPos: number;
        font: $Font;
        constructor(arg0: $CatalystScreenHandler, arg1: $Inventory, arg2: $Component_);
    }
    export class $ReactorScreen$ReactorPreviewWidget extends $UIComponent {
    }
    export class $OritechWidgetScreen<T extends $AbstractContainerMenu> extends $AbstractContainerScreen<T> {
        getTitleState(): $BlockState;
        shouldCreateTitle(): boolean;
        getTitleIcon(): $ItemStack;
        getTitleY(): number;
        getExclusionZones(): $List<$Rect2i>;
        imageWidth: number;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static SEPARATOR_COLOR: number;
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
        get titleState(): $BlockState;
        get titleIcon(): $ItemStack;
        get titleY(): number;
        get exclusionZones(): $List<$Rect2i>;
    }
    export class $ItemFilterScreen$FilterSlotBounds extends $Record {
        x(): number;
        y(): number;
        width(): number;
        height(): number;
        isInBoundingBox(arg0: number, arg1: number): boolean;
        constructor(x: number, y: number, width: number, height: number);
    }
    /**
     * Values that may be interpreted as {@link $ItemFilterScreen$FilterSlotBounds}.
     */
    export type $ItemFilterScreen$FilterSlotBounds_ = { y?: number, x?: number, height?: number, width?: number,  } | [y?: number, x?: number, height?: number, width?: number, ];
    export class $ItemFilterScreen$FilterSlotWidget extends $UIComponent {
    }
    export class $EnchanterScreen extends $OritechMachineScreen<$EnchanterScreenHandler> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static BACKGROUND_TALL: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static SEPARATOR_COLOR: number;
        clickedSlot: $Slot;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        static INVENTORY_LOCATION: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        static BACKGROUND: $ResourceLocation;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        static GUI_COMPONENTS: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        topPos: number;
        font: $Font;
        constructor(arg0: $EnchanterScreenHandler, arg1: $Inventory, arg2: $Component_);
    }
    export class $LimitedEnergyStorageScreenHandler extends $UpgradableOritechScreenHandler {
        blockPos: $BlockPos;
        playerInventory: $Inventory;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        addonController: $MachineAddonController;
        inventory: $Container;
        worldAccess: $Level;
        screenData: $ScreenProvider;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        machineBlock: $BlockState;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        blockEntity: $BlockEntity;
        fluidStorages: $List<$FluidApi$SingleSlotStorage>;
        armorSlots: $List<number>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $BlockEntity);
        constructor(arg0: number, arg1: $Inventory, arg2: $FriendlyByteBuf);
    }
    export class $LimitedEnergyStorageScreen extends $EnergyStorageScreen<$LimitedEnergyStorageScreenHandler> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static BACKGROUND_TALL: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static SEPARATOR_COLOR: number;
        clickedSlot: $Slot;
        burstLabel: $LabelWidget;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        addonOverlay: $OverlayWidget;
        static INVENTORY_LOCATION: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        steamProductionLabel: $LabelWidget;
        static BACKGROUND: $ResourceLocation;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        static GUI_COMPONENTS: $ResourceLocation;
        speedLabel: $LabelWidget;
        narratables: $List<$NarratableEntry>;
        width: number;
        efficiencyLabel: $LabelWidget;
        topPos: number;
        font: $Font;
        constructor(arg0: $LimitedEnergyStorageScreenHandler, arg1: $Inventory, arg2: $Component_);
    }
    export class $DroneScreenHandler extends $UpgradableOritechScreenHandler {
        blockPos: $BlockPos;
        playerInventory: $Inventory;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        addonController: $MachineAddonController;
        inventory: $Container;
        worldAccess: $Level;
        screenData: $ScreenProvider;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        machineBlock: $BlockState;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        blockEntity: $BlockEntity;
        fluidStorages: $List<$FluidApi$SingleSlotStorage>;
        armorSlots: $List<number>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $BlockEntity);
        constructor(arg0: number, arg1: $Inventory, arg2: $FriendlyByteBuf);
    }
    export class $TankScreen extends $OritechMachineScreen<$OritechScreenHandler> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static BACKGROUND_TALL: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static SEPARATOR_COLOR: number;
        clickedSlot: $Slot;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        static INVENTORY_LOCATION: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        static BACKGROUND: $ResourceLocation;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        static GUI_COMPONENTS: $ResourceLocation;
        static TANK_ARROWS: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        topPos: number;
        font: $Font;
        constructor(arg0: $OritechScreenHandler, arg1: $Inventory, arg2: $Component_);
    }
    export class $BasicMachineOutputSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(arg0: $Container, arg1: number, arg2: number, arg3: number);
    }
    export class $TaintedRefineryScreenHandler extends $OritechScreenHandler {
        blockPos: $BlockPos;
        playerInventory: $Inventory;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        inventory: $Container;
        screenData: $ScreenProvider;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        machineBlock: $BlockState;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        blockEntity: $BlockEntity;
        fluidStorages: $List<$FluidApi$SingleSlotStorage>;
        armorSlots: $List<number>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $BlockEntity);
        constructor(arg0: number, arg1: $Inventory, arg2: $FriendlyByteBuf);
    }
}
