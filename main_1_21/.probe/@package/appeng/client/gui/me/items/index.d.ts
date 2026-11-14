import { $Rect2i } from "@package/net/minecraft/client/renderer";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $AbstractWidget, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $MEStorageScreen } from "@package/appeng/client/gui/me/common";
import { $CraftingTermMenu, $PatternEncodingTermMenu } from "@package/appeng/menu/me/items";
import { $Minecraft } from "@package/net/minecraft/client";
import { $List, $List_ } from "@package/java/util";
import { $ScreenStyle } from "@package/appeng/client/gui/style";
import { $GenericStack, $GenericStack_ } from "@package/appeng/api/stacks";
import { $Point } from "@package/appeng/client";
import { $Consumer_ } from "@package/java/util/function";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Tooltip, $WidgetContainer, $AEBaseScreen, $ICompositeWidget, $AESubScreen } from "@package/appeng/client/gui";

declare module "@package/appeng/client/gui/me/items" {
    export class $CraftingTermScreen<C extends $CraftingTermMenu> extends $MEStorageScreen<C> {
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
        constructor(arg0: C, arg1: $Inventory, arg2: $Component_, arg3: $ScreenStyle);
    }
    export class $PatternEncodingTermScreen<C extends $PatternEncodingTermMenu> extends $MEStorageScreen<C> {
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
        constructor(arg0: C, arg1: $Inventory, arg2: $Component_, arg3: $ScreenStyle);
    }
    export class $StonecuttingEncodingPanel extends $EncodingModePanel {
        getTabTooltip(): $Component;
        constructor(arg0: $PatternEncodingTermScreen<never>, arg1: $WidgetContainer);
        get tabTooltip(): $Component;
    }
    export class $EncodingModePanel implements $ICompositeWidget {
        getBounds(): $Rect2i;
        setSize(arg0: number, arg1: number): void;
        setPosition(arg0: $Point): void;
        setVisible(arg0: boolean): void;
        isVisible(): boolean;
        tick(): void;
        getTooltip(arg0: number, arg1: number): $Tooltip;
        onMouseDown(arg0: $Point, arg1: number): boolean;
        onMouseUp(arg0: $Point, arg1: number): boolean;
        onMouseDrag(arg0: $Point, arg1: number): boolean;
        populateScreen(arg0: $Consumer_<$AbstractWidget>, arg1: $Rect2i, arg2: $AEBaseScreen<never>): void;
        updateBeforeRender(): void;
        drawForegroundLayer(arg0: $GuiGraphics, arg1: $Rect2i, arg2: $Point): void;
        drawBackgroundLayer(arg0: $GuiGraphics, arg1: $Rect2i, arg2: $Point): void;
        onMouseWheel(arg0: $Point, arg1: number): boolean;
        addExclusionZones(arg0: $List_<$Rect2i>, arg1: $Rect2i): void;
        wantsAllMouseDownEvents(): boolean;
        wantsAllMouseUpEvents(): boolean;
        wantsAllMouseWheelEvents(): boolean;
        constructor(arg0: $PatternEncodingTermScreen<never>, arg1: $WidgetContainer);
        get bounds(): $Rect2i;
        set position(value: $Point);
    }
    export class $CraftingEncodingPanel extends $EncodingModePanel {
        getTabTooltip(): $Component;
        constructor(arg0: $PatternEncodingTermScreen<never>, arg1: $WidgetContainer);
        get tabTooltip(): $Component;
    }
    export class $ProcessingEncodingPanel extends $EncodingModePanel {
        getTabTooltip(): $Component;
        constructor(arg0: $PatternEncodingTermScreen<never>, arg1: $WidgetContainer);
        get tabTooltip(): $Component;
    }
    export class $SmithingTableEncodingPanel extends $EncodingModePanel {
        getTabTooltip(): $Component;
        constructor(arg0: $PatternEncodingTermScreen<never>, arg1: $WidgetContainer);
        get tabTooltip(): $Component;
    }
    export class $SetProcessingPatternAmountScreen<C extends $PatternEncodingTermMenu> extends $AESubScreen<C, $PatternEncodingTermScreen<C>> {
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
        constructor(arg0: $PatternEncodingTermScreen<C>, arg1: $GenericStack_, arg2: $Consumer_<$GenericStack>);
    }
}
