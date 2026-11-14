import { $Level } from "@package/net/minecraft/world/level";
import { $AbstractSimiContainerScreen } from "@package/com/simibubi/create/foundation/gui/menu";
import { $DyeColor_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $Minecraft } from "@package/net/minecraft/client";
import { $List } from "@package/java/util";
import { $ConductorEntity } from "@package/com/railwayteam/railways/content/conductor";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $C2SPacket } from "@package/com/railwayteam/railways/multiloader";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ToolboxInventory, $ToolboxBlockEntity, $ToolboxMenu, $ToolboxScreen } from "@package/com/simibubi/create/content/equipment/toolbox";
import { $Slot, $MenuType_ } from "@package/net/minecraft/world/inventory";
import { $Font } from "@package/net/minecraft/client/gui";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
export * as neoforge from "@package/com/railwayteam/railways/content/conductor/toolbox/neoforge";

declare module "@package/com/railwayteam/railways/content/conductor/toolbox" {
    export class $MountedToolboxContainer extends $ToolboxMenu {
        static create(arg0: number, arg1: $Inventory, arg2: $MountedToolbox): $MountedToolboxContainer;
        playerInventory: $Inventory;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        renderPass: boolean;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        contentHolder: $ToolboxBlockEntity;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $RegistryFriendlyByteBuf);
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $MountedToolbox);
    }
    export class $MountedToolbox extends $ToolboxBlockEntity {
        readFromItem(arg0: $ItemStack_): void;
        getConnectedPlayers(): $List<$Player>;
        getParent(): $ConductorEntity;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        static read(arg0: $ConductorEntity, arg1: $CompoundTag_): $MountedToolbox;
        read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        getCloneItemStack(): $ItemStack;
        static openMenu(arg0: $ServerPlayer, arg1: $MountedToolbox): void;
        getDisplayStack(): $ItemStack;
        drawers: $LerpedFloat;
        level: $Level;
        lid: $LerpedFloat;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $ConductorEntity, arg1: $DyeColor_);
        get connectedPlayers(): $List<$Player>;
        get parent(): $ConductorEntity;
        get cloneItemStack(): $ItemStack;
        get displayStack(): $ItemStack;
    }
    export class $MountedToolboxEquipPacket implements $C2SPacket {
        static doEquip(arg0: $ServerPlayer, arg1: number, arg2: $ItemStack_, arg3: $ToolboxInventory): void;
        write(arg0: $FriendlyByteBuf): void;
        handle(arg0: $ServerPlayer): void;
        constructor(arg0: $ConductorEntity, arg1: number, arg2: number);
        constructor(arg0: $FriendlyByteBuf);
    }
    export class $MountedToolboxScreen extends $ToolboxScreen {
        static create(arg0: $MountedToolboxContainer, arg1: $Inventory, arg2: $Component_): $AbstractSimiContainerScreen<$MountedToolboxContainer>;
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
        constructor(arg0: $MountedToolboxContainer, arg1: $Inventory, arg2: $Component_);
    }
    export class $MountedToolboxDisposeAllPacket implements $C2SPacket {
        static doDisposal(arg0: $MountedToolbox, arg1: $ServerPlayer, arg2: $ConductorEntity): boolean;
        write(arg0: $FriendlyByteBuf): void;
        handle(arg0: $ServerPlayer): void;
        constructor(arg0: $ConductorEntity);
        constructor(arg0: $FriendlyByteBuf);
    }
}
