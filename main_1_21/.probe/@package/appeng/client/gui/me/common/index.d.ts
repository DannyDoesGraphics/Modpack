import { $IClientRepo, $GridInventoryEntry, $MEStorageMenu } from "@package/appeng/menu/me/common";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $Toast$Visibility, $Toast, $ToastComponent } from "@package/net/minecraft/client/gui/components/toasts";
import { $CraftingJobStatusPacket$Status_ } from "@package/appeng/core/network/clientbound";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $ViewItems, $SortOrder, $SortDir } from "@package/appeng/api/config";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Comparator, $List, $Set, $UUID_, $List_, $Collection } from "@package/java/util";
import { $ScreenStyle } from "@package/appeng/client/gui/style";
import { $AEKeyType, $GenericStack_, $AEKey } from "@package/appeng/api/stacks";
import { $Instant } from "@package/java/time";
import { $Container } from "@package/net/minecraft/world";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ISortSource, $IScrollSource_ } from "@package/appeng/client/gui/widgets";
import { $IPartitionList } from "@package/appeng/util/prioritylist";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $Runnable_, $Enum, $Record, $Object } from "@package/java/lang";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $AEBaseScreen, $AESubScreen } from "@package/appeng/client/gui";

declare module "@package/appeng/client/gui/me/common" {
    export class $RepoSlot extends $ClientReadOnlySlot {
        getStoredAmount(): number;
        isCraftable(): boolean;
        getRepoViewIndex(): number;
        getEntry(): $GridInventoryEntry;
        getRequestableAmount(): number;
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(arg0: $Repo, arg1: number, arg2: number, arg3: number);
        get storedAmount(): number;
        get craftable(): boolean;
        get repoViewIndex(): number;
        get entry(): $GridInventoryEntry;
        get requestableAmount(): number;
    }
    export class $PinnedKeys {
        static pinKey(arg0: $AEKey, arg1: $PinnedKeys$PinReason_): void;
        static getPinnedKeys(): $Set<$AEKey>;
        static prune(): void;
        static isEmpty(): boolean;
        static unpin(arg0: $AEKey): void;
        static isPinned(arg0: $AEKey): boolean;
        static clearPinnedKeys(): void;
        static getPinInfo(arg0: $AEKey): $PinnedKeys$PinInfo;
        static MAX_PINNED: number;
        static get pinnedKeys(): $Set<$AEKey>;
        static get empty(): boolean;
    }
    export class $TerminalSettingsScreen<C extends $MEStorageMenu> extends $AESubScreen<C, $MEStorageScreen<C>> {
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
        constructor(arg0: $MEStorageScreen<C>);
    }
    export class $PendingCraftingJobs {
        static jobStatus(arg0: $UUID_, arg1: $AEKey, arg2: number, arg3: number, arg4: $CraftingJobStatusPacket$Status_): void;
        static clearPendingJobs(): void;
        static hasPendingJob(arg0: $AEKey): boolean;
    }
    export class $MEStorageScreen<C extends $MEStorageMenu> extends $AEBaseScreen<C> implements $ISortSource {
        init(): void;
        storeState(): void;
        getSortBy(): $SortOrder;
        getSortDisplay(): $ViewItems;
        getSortDir(): $SortDir;
        getSortKeyTypes(): $Set<$AEKeyType>;
        onMenuReceivedClientUpdate(): void;
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
        get sortBy(): $SortOrder;
        get sortDisplay(): $ViewItems;
        get sortDir(): $SortDir;
        get sortKeyTypes(): $Set<$AEKeyType>;
    }
    export class $KeySorters {
    }
    export class $PinnedKeys$PinReason extends $Enum<$PinnedKeys$PinReason> {
        static values(): $PinnedKeys$PinReason[];
        static valueOf(arg0: string): $PinnedKeys$PinReason;
        static CRAFTING: $PinnedKeys$PinReason;
    }
    /**
     * Values that may be interpreted as {@link $PinnedKeys$PinReason}.
     */
    export type $PinnedKeys$PinReason_ = "crafting";
    export class $ClientReadOnlySlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(arg0: number, arg1: number);
        constructor();
    }
    export class $PinnedKeys$PinInfo {
        reason: $PinnedKeys$PinReason;
        canPrune: boolean;
        since: $Instant;
        constructor(arg0: $PinnedKeys$PinReason_);
    }
    export class $ClientDisplaySlot extends $ClientReadOnlySlot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(arg0: $GenericStack_);
    }
    export class $StackSizeRenderer {
        static renderSizeLabel(arg0: $GuiGraphics, arg1: $Font, arg2: number, arg3: number, arg4: string, arg5: boolean): void;
        static renderSizeLabel(arg0: $GuiGraphics, arg1: $Font, arg2: number, arg3: number, arg4: string): void;
        constructor();
    }
    export class $Repo implements $IClientRepo {
        setPaused(arg0: boolean): void;
        getAllEntries(): $Set<$GridInventoryEntry>;
        isCraftable(arg0: $AEKey): boolean;
        setPartitionList(arg0: $IPartitionList): void;
        getRowSize(): number;
        setRowSize(arg0: number): void;
        size(): number;
        get(arg0: number): $GridInventoryEntry;
        clear(): void;
        isEnabled(): boolean;
        setEnabled(arg0: boolean): void;
        isPaused(): boolean;
        setUpdateViewListener(arg0: $Runnable_): void;
        hasPinnedRow(): boolean;
        getSearchString(): string;
        handleUpdate(arg0: boolean, arg1: $List_<$GridInventoryEntry>): void;
        getPinnedEntries(): $List<$GridInventoryEntry>;
        updateView(): void;
        setSearchString(arg0: string): void;
        getByIngredient(arg0: $Ingredient_): $Collection<$GridInventoryEntry>;
        static AMOUNT_ASC: $Comparator<$GridInventoryEntry>;
        static AMOUNT_DESC: $Comparator<$GridInventoryEntry>;
        constructor(arg0: $IScrollSource_, arg1: $ISortSource);
        get allEntries(): $Set<$GridInventoryEntry>;
        set partitionList(value: $IPartitionList);
        set updateViewListener(value: $Runnable_);
        get pinnedEntries(): $List<$GridInventoryEntry>;
    }
    export class $PendingCraftingJobs$PendingJob extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PendingCraftingJobs$PendingJob}.
     */
    export type $PendingCraftingJobs$PendingJob_ = { jobId?: $UUID_, requestedAmount?: number, remainingAmount?: number, what?: $AEKey,  } | [jobId?: $UUID_, requestedAmount?: number, remainingAmount?: number, what?: $AEKey, ];
    export class $FinishedJobToast implements $Toast {
        height(): number;
        render(arg0: $GuiGraphics, arg1: $ToastComponent, arg2: number): $Toast$Visibility;
        width(): number;
        slotCount(): number;
        getToken(): $Object;
        constructor(arg0: $AEKey, arg1: number);
        get token(): $Object;
    }
}
