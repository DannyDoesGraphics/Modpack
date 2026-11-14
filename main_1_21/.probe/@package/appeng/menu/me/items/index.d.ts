import { $KeyTypeSelectionMenu$SyncedKeyTypes } from "@package/appeng/menu/interfaces";
import { $MEStorageMenu } from "@package/appeng/menu/me/common";
import { $IEnergySource } from "@package/appeng/api/networking/energy";
import { $IntSet } from "@package/it/unimi/dsi/fastutil/ints";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Ingredient_, $RecipeHolder, $StonecutterRecipe, $CraftingRecipe } from "@package/net/minecraft/world/item/crafting";
import { $FakeSlot } from "@package/appeng/menu/slot";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $List, $Map_, $Set, $Set_, $List_ } from "@package/java/util";
import { $InternalInventory } from "@package/appeng/api/inventories";
import { $ITerminalHost } from "@package/appeng/api/storage";
import { $NonNullList } from "@package/net/minecraft/core";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Slot, $MenuType_, $MenuType } from "@package/net/minecraft/world/inventory";
import { $Record } from "@package/java/lang";
import { $IPatternTerminalMenuHost, $ICraftingGridMenu$AutoCraftEntry_, $WirelessCraftingTerminalMenuHost, $ICraftingGridMenu } from "@package/appeng/helpers";
import { $EncodingMode_, $EncodingMode } from "@package/appeng/parts/encoding";

declare module "@package/appeng/menu/me/items" {
    export class $PatternEncodingTermMenu extends $MEStorageMenu {
        cycleProcessingOutput(): void;
        isSubstitute(): boolean;
        isSubstituteFluids(): boolean;
        isProcessingPatternSlot(arg0: $Slot): boolean;
        getProcessingOutputSlots(): $FakeSlot[];
        setSubstitute(arg0: boolean): void;
        setSubstituteFluids(arg0: boolean): void;
        canModifyAmountForSlot(arg0: $Slot): boolean;
        getCraftingGridSlots(): $FakeSlot[];
        getProcessingInputSlots(): $FakeSlot[];
        getSmithingTableTemplateSlot(): $FakeSlot;
        getSmithingTableBaseSlot(): $FakeSlot;
        getSmithingTableAdditionSlot(): $FakeSlot;
        canCycleProcessingOutputs(): boolean;
        getStonecuttingRecipes(): $List<$RecipeHolder<$StonecutterRecipe>>;
        getStonecuttingRecipeId(): $ResourceLocation;
        setStonecuttingRecipeId(arg0: $ResourceLocation_): void;
        setMode(arg0: $EncodingMode_): void;
        getMode(): $EncodingMode;
        clear(): void;
        encode(): void;
        slotsSupportingFluidSubstitution: $IntSet;
        substituteFluids: boolean;
        stateId: number;
        static PORTABLE_FLUID_CELL_TYPE: $MenuType<$MEStorageMenu>;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        searchKeyTypes: $KeyTypeSelectionMenu$SyncedKeyTypes;
        substitute: boolean;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        mode: $EncodingMode;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        stonecuttingRecipeId: $ResourceLocation;
        static PORTABLE_ITEM_CELL_TYPE: $MenuType<$MEStorageMenu>;
        static WIRELESS_TYPE: $MenuType<$MEStorageMenu>;
        containerId: number;
        static TYPE: $MenuType<$PatternEncodingTermMenu>;
        activeCraftingJobs: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $IPatternTerminalMenuHost);
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $IPatternTerminalMenuHost, arg4: boolean);
        get processingOutputSlots(): $FakeSlot[];
        get craftingGridSlots(): $FakeSlot[];
        get processingInputSlots(): $FakeSlot[];
        get smithingTableTemplateSlot(): $FakeSlot;
        get smithingTableBaseSlot(): $FakeSlot;
        get smithingTableAdditionSlot(): $FakeSlot;
        get stonecuttingRecipes(): $List<$RecipeHolder<$StonecutterRecipe>>;
    }
    export class $CraftingTermMenu$MissingIngredientSlots extends $Record {
        anyCraftable(): boolean;
        anyMissingOrCraftable(): boolean;
        missingSlots(): $Set<number>;
        craftableSlots(): $Set<number>;
        anyMissing(): boolean;
        totalSize(): number;
        constructor(missingSlots: $Set_<number>, craftableSlots: $Set_<number>);
    }
    /**
     * Values that may be interpreted as {@link $CraftingTermMenu$MissingIngredientSlots}.
     */
    export type $CraftingTermMenu$MissingIngredientSlots_ = { craftableSlots?: $Set_<number>, missingSlots?: $Set_<number>,  } | [craftableSlots?: $Set_<number>, missingSlots?: $Set_<number>, ];
    export class $CraftingTermMenu extends $MEStorageMenu implements $ICraftingGridMenu {
        getCraftingMatrix(): $InternalInventory;
        startAutoCrafting(arg0: $List_<$ICraftingGridMenu$AutoCraftEntry_>): void;
        clearCraftingGrid(): void;
        findMissingIngredients(arg0: $Map_<number, $Ingredient_>): $CraftingTermMenu$MissingIngredientSlots;
        clearToPlayerInventory(): void;
        getCurrentRecipe(): $RecipeHolder<$CraftingRecipe>;
        getEnergySource(): $IEnergySource;
        stateId: number;
        static PORTABLE_FLUID_CELL_TYPE: $MenuType<$MEStorageMenu>;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        searchKeyTypes: $KeyTypeSelectionMenu$SyncedKeyTypes;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static PORTABLE_ITEM_CELL_TYPE: $MenuType<$MEStorageMenu>;
        static WIRELESS_TYPE: $MenuType<$MEStorageMenu>;
        containerId: number;
        static TYPE: $MenuType<$CraftingTermMenu>;
        activeCraftingJobs: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $ITerminalHost);
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $ITerminalHost, arg4: boolean);
        get craftingMatrix(): $InternalInventory;
        get currentRecipe(): $RecipeHolder<$CraftingRecipe>;
        get energySource(): $IEnergySource;
    }
    export class $WirelessCraftingTermMenu extends $CraftingTermMenu {
        stateId: number;
        static PORTABLE_FLUID_CELL_TYPE: $MenuType<$MEStorageMenu>;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        searchKeyTypes: $KeyTypeSelectionMenu$SyncedKeyTypes;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static PORTABLE_ITEM_CELL_TYPE: $MenuType<$MEStorageMenu>;
        static WIRELESS_TYPE: $MenuType<$MEStorageMenu>;
        containerId: number;
        static TYPE: $MenuType<$WirelessCraftingTermMenu>;
        activeCraftingJobs: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $WirelessCraftingTerminalMenuHost<any>);
    }
    export class $BasicCellChestMenu extends $MEStorageMenu {
        stateId: number;
        static PORTABLE_FLUID_CELL_TYPE: $MenuType<$MEStorageMenu>;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        searchKeyTypes: $KeyTypeSelectionMenu$SyncedKeyTypes;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static PORTABLE_ITEM_CELL_TYPE: $MenuType<$MEStorageMenu>;
        static WIRELESS_TYPE: $MenuType<$MEStorageMenu>;
        containerId: number;
        static TYPE: $MenuType<$MEStorageMenu>;
        activeCraftingJobs: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $ITerminalHost);
    }
}
