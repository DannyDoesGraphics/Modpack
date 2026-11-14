import { $Level_ } from "@package/net/minecraft/world/level";
import { $IEnergySource_ } from "@package/appeng/api/networking/energy";
import { $MolecularAssemblerMenu } from "@package/appeng/menu/implementations";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $RecipeHolder_, $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $ClientReadOnlySlot } from "@package/appeng/client/gui/me/common";
import { $List, $List_ } from "@package/java/util";
import { $IActionSource } from "@package/appeng/api/networking/security";
import { $Point } from "@package/appeng/client";
import { $InternalInventory } from "@package/appeng/api/inventories";
import { $Container } from "@package/net/minecraft/world";
import { $MEStorage_ } from "@package/appeng/api/storage";
import { $Supplier_ } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Slot, $RecipeCraftingHolder } from "@package/net/minecraft/world/inventory";
import { $Enum } from "@package/java/lang";
import { $AEBaseMenu } from "@package/appeng/menu";
import { $InventoryAction_, $ICraftingGridMenu } from "@package/appeng/helpers";
import { $Icon, $Icon_ } from "@package/appeng/client/gui";

declare module "@package/appeng/menu/slot" {
    export class $AppEngCraftingSlot extends $AppEngSlot implements $RecipeCraftingHolder {
        setDisplayedCraftingOutput(arg0: $ItemStack_): void;
        setRecipeUsed(arg0: $RecipeHolder_<never>): void;
        getRecipeUsed(): $RecipeHolder<never>;
        setRecipeUsed(arg0: $Level_, arg1: $ServerPlayer, arg2: $RecipeHolder_<never>): boolean;
        awardUsedRecipes(arg0: $Player, arg1: $List_<$ItemStack_>): void;
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(arg0: $Player, arg1: $InternalInventory);
        set displayedCraftingOutput(value: $ItemStack_);
    }
    export class $OptionalFakeSlot extends $FakeSlot implements $IOptionalSlot {
        isRenderDisabled(): boolean;
        setRenderDisabled(arg0: boolean): void;
        getBackgroundPos(): $Point;
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(arg0: $InternalInventory, arg1: $IOptionalSlotHost_, arg2: number, arg3: number);
        get backgroundPos(): $Point;
    }
    export class $CraftingMatrixSlot extends $AppEngSlot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(arg0: $AEBaseMenu, arg1: $InternalInventory, arg2: number);
    }
    export class $IPartitionSlotHost {
    }
    export interface $IPartitionSlotHost {
        isPartitionSlotEnabled(arg0: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IPartitionSlotHost}.
     */
    export type $IPartitionSlotHost_ = ((arg0: number) => boolean);
    export class $PatternTermSlot extends $ClientReadOnlySlot {
        setResultItem(arg0: $ItemStack_): void;
        setActive(arg0: boolean): void;
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor();
        set resultItem(value: $ItemStack_);
        set active(value: boolean);
    }
    export class $MolecularAssemblerPatternSlot extends $AppEngSlot implements $IOptionalSlot {
        isRenderDisabled(): boolean;
        getBackgroundPos(): $Point;
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(arg0: $MolecularAssemblerMenu, arg1: $InternalInventory, arg2: number);
        get renderDisabled(): boolean;
        get backgroundPos(): $Point;
    }
    export class $CellPartitionSlot extends $FakeSlot implements $IOptionalSlot {
        isRenderDisabled(): boolean;
        getBackgroundPos(): $Point;
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(arg0: $InternalInventory, arg1: $IPartitionSlotHost_, arg2: number);
        get renderDisabled(): boolean;
        get backgroundPos(): $Point;
    }
    export class $DisabledSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(arg0: $Container, arg1: number);
    }
    export class $CraftingTermSlot extends $AppEngCraftingSlot {
        doClick(arg0: $InventoryAction_, arg1: $Player): void;
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(arg0: $Player, arg1: $IActionSource, arg2: $IEnergySource_, arg3: $MEStorage_, arg4: $InternalInventory, arg5: $InternalInventory, arg6: $ICraftingGridMenu);
    }
    export class $InaccessibleSlot extends $AppEngSlot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(arg0: $InternalInventory, arg1: number);
    }
    export class $FakeSlot extends $AppEngSlot {
        setFilterTo(arg0: $ItemStack_): void;
        canSetFilterTo(arg0: $ItemStack_): boolean;
        decrease(arg0: $ItemStack_): void;
        increase(arg0: $ItemStack_): void;
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(arg0: $InternalInventory, arg1: number);
        set filterTo(value: $ItemStack_);
    }
    export class $RestrictedInputSlot$PlacableItemType extends $Enum<$RestrictedInputSlot$PlacableItemType> {
        static values(): $RestrictedInputSlot$PlacableItemType[];
        static valueOf(arg0: string): $RestrictedInputSlot$PlacableItemType;
        static STORAGE_CELLS: $RestrictedInputSlot$PlacableItemType;
        static ORE: $RestrictedInputSlot$PlacableItemType;
        static RANGE_BOOSTER: $RestrictedInputSlot$PlacableItemType;
        static INSCRIBER_INPUT: $RestrictedInputSlot$PlacableItemType;
        static QE_SINGULARITY: $RestrictedInputSlot$PlacableItemType;
        static PROVIDER_PATTERN: $RestrictedInputSlot$PlacableItemType;
        static MOLECULAR_ASSEMBLER_PATTERN: $RestrictedInputSlot$PlacableItemType;
        icon: $Icon;
        static WORKBENCH_CELL: $RestrictedInputSlot$PlacableItemType;
        static POWERED_TOOL: $RestrictedInputSlot$PlacableItemType;
        static ENCODED_AE_PATTERN: $RestrictedInputSlot$PlacableItemType;
        static VIEW_CELL: $RestrictedInputSlot$PlacableItemType;
        static BLANK_PATTERN: $RestrictedInputSlot$PlacableItemType;
        static PATTERN: $RestrictedInputSlot$PlacableItemType;
        static GRID_LINKABLE_ITEM: $RestrictedInputSlot$PlacableItemType;
        static SPATIAL_STORAGE_CELLS_NO_SHADOW: $RestrictedInputSlot$PlacableItemType;
        static SPATIAL_STORAGE_CELLS: $RestrictedInputSlot$PlacableItemType;
        static INSCRIBER_PLATE: $RestrictedInputSlot$PlacableItemType;
        static FUEL: $RestrictedInputSlot$PlacableItemType;
        static UPGRADES: $RestrictedInputSlot$PlacableItemType;
        static METAL_INGOTS: $RestrictedInputSlot$PlacableItemType;
        static STORAGE_COMPONENT: $RestrictedInputSlot$PlacableItemType;
        static TRASH: $RestrictedInputSlot$PlacableItemType;
        static ENCODED_PATTERN: $RestrictedInputSlot$PlacableItemType;
    }
    /**
     * Values that may be interpreted as {@link $RestrictedInputSlot$PlacableItemType}.
     */
    export type $RestrictedInputSlot$PlacableItemType_ = "storage_cells" | "ore" | "storage_component" | "grid_linkable_item" | "trash" | "encoded_ae_pattern" | "molecular_assembler_pattern" | "provider_pattern" | "encoded_pattern" | "pattern" | "blank_pattern" | "powered_tool" | "range_booster" | "qe_singularity" | "spatial_storage_cells" | "spatial_storage_cells_no_shadow" | "fuel" | "upgrades" | "workbench_cell" | "view_cell" | "inscriber_plate" | "inscriber_input" | "metal_ingots";
    export class $PatternOutputsSlot extends $OptionalFakeSlot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(arg0: $InternalInventory, arg1: $IOptionalSlotHost_, arg2: number, arg3: number);
    }
    export class $OutputSlot extends $AppEngSlot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(arg0: $InternalInventory, arg1: number, arg2: $Icon_);
    }
    export class $RestrictedInputSlot extends $AppEngSlot {
        static isMetalIngot(arg0: $ItemStack_): boolean;
        setStackLimit(arg0: number): $Slot;
        setAllowEdit(arg0: boolean): void;
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(arg0: $RestrictedInputSlot$PlacableItemType_, arg1: $InternalInventory, arg2: number);
        set stackLimit(value: number);
        set allowEdit(value: boolean);
    }
    export class $OptionalRestrictedInputSlot extends $RestrictedInputSlot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(arg0: $RestrictedInputSlot$PlacableItemType_, arg1: $InternalInventory, arg2: $IOptionalSlotHost_, arg3: number, arg4: number, arg5: $Inventory);
    }
    export class $AppEngSlot extends $Slot {
        getCustomTooltip(arg0: $ItemStack_): $List<$Component>;
        getOpacityOfIcon(): number;
        renderIconWithItem(): boolean;
        resetCachedValidation(): void;
        isHideAmount(): boolean;
        setHideAmount(arg0: boolean): void;
        getSlotInv(): $InternalInventory;
        setNotDraggable(): $Slot;
        setMenu(arg0: $AEBaseMenu): void;
        setSlotEnabled(arg0: boolean): void;
        isDraggable(): boolean;
        isSlotEnabled(): boolean;
        initialize(arg0: $ItemStack_): void;
        isValid(): boolean;
        getIcon(): $Icon;
        clearStack(): void;
        setActive(arg0: boolean): void;
        setIcon(arg0: $Icon_): void;
        getInventory(): $InternalInventory;
        setEmptyTooltip(arg0: $Supplier_<$List<$Component>>): void;
        getDisplayStack(): $ItemStack;
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(arg0: $InternalInventory, arg1: number);
        get opacityOfIcon(): number;
        get slotInv(): $InternalInventory;
        set menu(value: $AEBaseMenu);
        get draggable(): boolean;
        get valid(): boolean;
        set active(value: boolean);
        get inventory(): $InternalInventory;
        set emptyTooltip(value: $Supplier_<$List<$Component>>);
        get displayStack(): $ItemStack;
    }
    export class $IOptionalSlot {
    }
    export interface $IOptionalSlot {
        isRenderDisabled(): boolean;
        getBackgroundPos(): $Point;
        isSlotEnabled(): boolean;
        get renderDisabled(): boolean;
        get backgroundPos(): $Point;
        get slotEnabled(): boolean;
    }
    export class $ResizableSlot extends $AppEngSlot {
        setWidth(arg0: number): void;
        setHeight(arg0: number): void;
        getStyleId(): string;
        getWidth(): number;
        getHeight(): number;
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(arg0: $InternalInventory, arg1: number, arg2: string);
        get styleId(): string;
    }
    export class $IOptionalSlotHost {
    }
    export interface $IOptionalSlotHost {
        isSlotEnabled(arg0: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IOptionalSlotHost}.
     */
    export type $IOptionalSlotHost_ = ((arg0: number) => boolean);
}
