import { $ItemStack } from "@package/net/minecraft/world/item";
import { $SetStockAmountMenu } from "@package/appeng/menu/implementations";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $Minecraft } from "@package/net/minecraft/client";
import { $List, $List_ } from "@package/java/util";
import { $CraftingSubmitErrorCode_ } from "@package/appeng/api/networking/crafting";
import { $ScreenStyle } from "@package/appeng/client/gui/style";
import { $CraftAmountMenu, $CraftingStatusMenu, $CraftingPlanSummaryEntry, $CraftingStatusEntry, $CraftConfirmMenu, $CraftingCPUMenu, $CraftingStatus } from "@package/appeng/menu/me/crafting";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $Object } from "@package/java/lang";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $StackWithBounds, $AEBaseScreen, $AESubScreen } from "@package/appeng/client/gui";

declare module "@package/appeng/client/gui/me/crafting" {
    export class $CraftErrorScreen extends $AESubScreen<$CraftConfirmMenu, $CraftConfirmScreen> {
        imageWidth: number;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static TEXT_ID_DIALOG_TITLE: string;
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
        constructor(arg0: $CraftConfirmScreen, arg1: $CraftingSubmitErrorCode_, arg2: $Object);
    }
    export class $AbstractTableRenderer<T> {
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: $List_<T>, arg4: number): void;
        getScrollableRows(arg0: number): number;
        getHoveredStack(): $StackWithBounds;
        constructor(arg0: $AEBaseScreen<never>, arg1: number, arg2: number, arg3: number);
        get hoveredStack(): $StackWithBounds;
    }
    export class $CraftAmountScreen extends $AEBaseScreen<$CraftAmountMenu> {
        imageWidth: number;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static TEXT_ID_DIALOG_TITLE: string;
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
        constructor(arg0: $CraftAmountMenu, arg1: $Inventory, arg2: $Component_, arg3: $ScreenStyle);
    }
    export class $SetStockAmountScreen extends $AEBaseScreen<$SetStockAmountMenu> {
        imageWidth: number;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static TEXT_ID_DIALOG_TITLE: string;
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
        constructor(arg0: $SetStockAmountMenu, arg1: $Inventory, arg2: $Component_, arg3: $ScreenStyle);
    }
    export class $CraftConfirmTableRenderer extends $AbstractTableRenderer<$CraftingPlanSummaryEntry> {
        constructor(arg0: $AEBaseScreen<never>, arg1: number, arg2: number);
    }
    export class $CraftingStatusScreen extends $CraftingCPUScreen<$CraftingStatusMenu> {
        imageWidth: number;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static TEXT_ID_DIALOG_TITLE: string;
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
        constructor(arg0: $CraftingStatusMenu, arg1: $Inventory, arg2: $Component_, arg3: $ScreenStyle);
    }
    export class $CraftingCPUScreen<T extends $CraftingCPUMenu> extends $AEBaseScreen<T> {
        postUpdate(arg0: $CraftingStatus): void;
        imageWidth: number;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static TEXT_ID_DIALOG_TITLE: string;
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
        constructor(arg0: T, arg1: $Inventory, arg2: $Component_, arg3: $ScreenStyle);
    }
    export class $CraftConfirmScreen extends $AEBaseScreen<$CraftConfirmMenu> {
        imageWidth: number;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static TEXT_ID_DIALOG_TITLE: string;
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
        constructor(arg0: $CraftConfirmMenu, arg1: $Inventory, arg2: $Component_, arg3: $ScreenStyle);
    }
    export class $CraftingStatusTableRenderer extends $AbstractTableRenderer<$CraftingStatusEntry> {
        constructor(arg0: $AEBaseScreen<never>, arg1: number, arg2: number);
    }
}
