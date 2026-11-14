import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $NetworkToolMenu, $NetworkStatusMenu, $NetworkStatus } from "@package/appeng/menu/me/networktool";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $List } from "@package/java/util";
import { $Font } from "@package/net/minecraft/client/gui";
import { $ScreenStyle } from "@package/appeng/client/gui/style";
import { $AEBaseScreen } from "@package/appeng/client/gui";

declare module "@package/appeng/client/gui/me/networktool" {
    export class $NetworkStatusScreen extends $AEBaseScreen<$NetworkStatusMenu> {
        processServerUpdate(arg0: $NetworkStatus): void;
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
        constructor(arg0: $NetworkStatusMenu, arg1: $Inventory, arg2: $Component_, arg3: $ScreenStyle);
    }
    export class $NetworkToolScreen extends $AEBaseScreen<$NetworkToolMenu> {
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
        constructor(arg0: $NetworkToolMenu, arg1: $Inventory, arg2: $Component_, arg3: $ScreenStyle);
    }
}
