import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $PatternAccessTermMenu } from "@package/appeng/menu/implementations";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $AppEngSlot } from "@package/appeng/menu/slot";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $Minecraft } from "@package/net/minecraft/client";
import { $List } from "@package/java/util";
import { $PatternContainerGroup_, $PatternContainerGroup } from "@package/appeng/api/implementations/blockentities";
import { $ScreenStyle } from "@package/appeng/client/gui/style";
import { $Container } from "@package/net/minecraft/world";
import { $AppEngInternalInventory } from "@package/appeng/util/inv";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $Font } from "@package/net/minecraft/client/gui";
import { $Comparable, $Record } from "@package/java/lang";
import { $AEBaseScreen } from "@package/appeng/client/gui";

declare module "@package/appeng/client/gui/me/patternaccess" {
    export class $PatternContainerRecord implements $Comparable<$PatternContainerRecord> {
        compareTo(arg0: $PatternContainerRecord): number;
        getGroup(): $PatternContainerGroup;
        getInventory(): $AppEngInternalInventory;
        getServerId(): number;
        getSearchName(): string;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $PatternContainerGroup_);
        get group(): $PatternContainerGroup;
        get inventory(): $AppEngInternalInventory;
        get serverId(): number;
        get searchName(): string;
    }
    export class $PatternAccessTermScreen$Row {
    }
    export interface $PatternAccessTermScreen$Row {
    }
    export class $PatternAccessTermScreen$GroupHeaderRow extends $Record implements $PatternAccessTermScreen$Row {
    }
    /**
     * Values that may be interpreted as {@link $PatternAccessTermScreen$GroupHeaderRow}.
     */
    export type $PatternAccessTermScreen$GroupHeaderRow_ = { group?: $PatternContainerGroup_,  } | [group?: $PatternContainerGroup_, ];
    export class $PatternAccessTermScreen<C extends $PatternAccessTermMenu> extends $AEBaseScreen<C> {
        clear(): void;
        init(): void;
        updateBeforeRender(): void;
        postFullUpdate(arg0: number, arg1: number, arg2: $PatternContainerGroup_, arg3: number, arg4: $Int2ObjectMap<$ItemStack_>): void;
        postIncrementalUpdate(arg0: number, arg1: $Int2ObjectMap<$ItemStack_>): void;
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
    export class $PatternAccessTermScreen$SlotsRow extends $Record implements $PatternAccessTermScreen$Row {
    }
    /**
     * Values that may be interpreted as {@link $PatternAccessTermScreen$SlotsRow}.
     */
    export type $PatternAccessTermScreen$SlotsRow_ = { slots?: number, container?: $PatternContainerRecord, offset?: number,  } | [slots?: number, container?: $PatternContainerRecord, offset?: number, ];
    export class $PatternSlot extends $AppEngSlot {
        getMachineInv(): $PatternContainerRecord;
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(arg0: $PatternContainerRecord, arg1: number, arg2: number, arg3: number);
        get machineInv(): $PatternContainerRecord;
    }
}
