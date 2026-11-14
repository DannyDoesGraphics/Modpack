import { $ConfigInventory, $LookDirection } from "@package/appeng/util";
import { $StorageTier_, $StorageTier } from "@package/appeng/items/storage";
import { $Map, $List_ } from "@package/java/util";
import { $AEKeyType, $AEKeyType_, $AEKey } from "@package/appeng/api/stacks";
import { $IBlockTool } from "@package/appeng/hooks";
import { $Consumer_, $Supplier_, $DoubleSupplier_ } from "@package/java/util/function";
import { $GlobalPos } from "@package/net/minecraft/core";
import { $MenuType_, $MenuType } from "@package/net/minecraft/world/inventory";
import { $IMenuItem } from "@package/appeng/api/implementations/menuobjects";
import { $IMouseWheelItem, $WirelessTerminalMenuHost } from "@package/appeng/helpers";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $Item$Properties, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $IGrid } from "@package/appeng/api/networking";
import { $FuzzyMode_, $FuzzyMode } from "@package/appeng/api/config";
import { $IUpgradeableItem, $IUpgradeInventory } from "@package/appeng/api/upgrades";
import { $ItemMenuHostLocator } from "@package/appeng/menu/locator";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $IConfigManager, $AEColor_, $AEColor } from "@package/appeng/api/util";
import { $AEBasePoweredItem } from "@package/appeng/items/tools/powered/powersink";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $TooltipComponent } from "@package/net/minecraft/world/inventory/tooltip";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $IBasicCellItem, $ICellWorkbenchItem } from "@package/appeng/api/storage/cells";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $IGridLinkableHandler } from "@package/appeng/api/features";
export * as powersink from "@package/appeng/items/tools/powered/powersink";

declare module "@package/appeng/items/tools/powered" {
    export class $BlockRecolorer$RecolorableBlockGroup {
    }
    export class $WirelessTerminalItem$LinkableHandler implements $IGridLinkableHandler {
    }
    export class $PortableCellItem extends $AbstractPortableCell implements $IBasicCellItem {
        getTier(): $StorageTier;
        getBytesPerType(arg0: $ItemStack_): number;
        getTotalTypes(arg0: $ItemStack_): number;
        getIdleDrain(): number;
        getBytes(arg0: $ItemStack_): number;
        getKeyType(): $AEKeyType;
        addCellInformationToTooltip(arg0: $ItemStack_, arg1: $List_<$Component_>): void;
        getCellTooltipImage(arg0: $ItemStack_): ($TooltipComponent) | undefined;
        isBlackListed(arg0: $ItemStack_, arg1: $AEKey): boolean;
        storableInStorageCell(): boolean;
        isStorageCell(arg0: $ItemStack_): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $AEKeyType_, arg1: number, arg2: $MenuType_<never>, arg3: $StorageTier_, arg4: $Item$Properties, arg5: number);
        get tier(): $StorageTier;
        get idleDrain(): number;
        get keyType(): $AEKeyType;
    }
    export class $WirelessCraftingTerminalItem extends $WirelessTerminalItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static LINKABLE_HANDLER: $IGridLinkableHandler;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $DoubleSupplier_, arg1: $Item$Properties);
    }
    export class $MatterCannonItem extends $AEBasePoweredItem implements $IBasicCellItem {
        getBytesPerType(arg0: $ItemStack_): number;
        getTotalTypes(arg0: $ItemStack_): number;
        isBlackListed(arg0: $ItemStack_, arg1: $AEKey): boolean;
        storableInStorageCell(): boolean;
        getIdleDrain(): number;
        getConfigInventory(arg0: $ItemStack_): $ConfigInventory;
        getFuzzyMode(arg0: $ItemStack_): $FuzzyMode;
        setFuzzyMode(arg0: $ItemStack_, arg1: $FuzzyMode_): void;
        fireCannon(arg0: $Level_, arg1: $ItemStack_, arg2: $Player, arg3: $LookDirection): boolean;
        static getDamageFromPenetration(arg0: number): number;
        getUpgrades(arg0: $ItemStack_): $IUpgradeInventory;
        getBytes(arg0: $ItemStack_): number;
        getKeyType(): $AEKeyType;
        addCellInformationToTooltip(arg0: $ItemStack_, arg1: $List_<$Component_>): void;
        getCellTooltipImage(arg0: $ItemStack_): ($TooltipComponent) | undefined;
        isStorageCell(arg0: $ItemStack_): boolean;
        isEditable(arg0: $ItemStack_): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
        get idleDrain(): number;
        get keyType(): $AEKeyType;
    }
    export class $AbstractPortableCell extends $PoweredContainerItem implements $ICellWorkbenchItem, $IMenuItem {
        openFromInventory(arg0: $Player, arg1: $ItemMenuHostLocator): boolean;
        onUpgradesChanged(arg0: $ItemStack_, arg1: $IUpgradeInventory): void;
        getRecipeId(): $ResourceLocation;
        getUpgrades(arg0: $ItemStack_): $IUpgradeInventory;
        static getColor(arg0: $ItemStack_, arg1: number): number;
        getColor(arg0: $ItemStack_): number;
        getConfigInventory(arg0: $ItemStack_): $ConfigInventory;
        isEditable(arg0: $ItemStack_): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $MenuType_<never>, arg1: $Item$Properties, arg2: number);
        get recipeId(): $ResourceLocation;
    }
    export class $EntropyManipulatorItem extends $AEBasePoweredItem implements $IBlockTool {
        static ENERGY_PER_USE: number;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $WirelessTerminalItem extends $PoweredContainerItem implements $IMenuItem, $IUpgradeableItem {
        getMenuType(): $MenuType<never>;
        hasPower(arg0: $Player, arg1: number, arg2: $ItemStack_): boolean;
        openFromInventory(arg0: $Player, arg1: $ItemMenuHostLocator): boolean;
        getLinkedPosition(arg0: $ItemStack_): $GlobalPos;
        getMenuHost(arg0: $Player, arg1: $ItemMenuHostLocator, arg2: $BlockHitResult): $WirelessTerminalMenuHost<never>;
        getLinkedGrid(arg0: $ItemStack_, arg1: $Level_, arg2: $Consumer_<$Component>): $IGrid;
        usePower(arg0: $Player, arg1: number, arg2: $ItemStack_): boolean;
        getConfigManager(arg0: $Supplier_<$ItemStack>): $IConfigManager;
        getUpgrades(arg0: $ItemStack_): $IUpgradeInventory;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static LINKABLE_HANDLER: $IGridLinkableHandler;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $DoubleSupplier_, arg1: $Item$Properties);
        get menuType(): $MenuType<never>;
    }
    export class $ChargedStaffItem extends $AEBasePoweredItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $PoweredContainerItem extends $AEBasePoweredItem implements $IMenuItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $DoubleSupplier_, arg1: $Item$Properties);
    }
    export class $BlockRecolorer {
        static recolor(arg0: $Block_, arg1: $AEColor_): $Block;
    }
    export class $ColorApplicatorItem extends $AEBasePoweredItem implements $IBasicCellItem, $IBlockTool, $IMouseWheelItem {
        getActiveColor(arg0: $ItemStack_): $AEColor;
        consumeColor(arg0: $ItemStack_, arg1: $AEColor_, arg2: boolean): boolean;
        cycleColors(arg0: $ItemStack_, arg1: $AEColor_, arg2: number): void;
        consumeItem(arg0: $ItemStack_, arg1: $AEKey, arg2: boolean): boolean;
        static createFullColorApplicator(): $ItemStack;
        getBytesPerType(arg0: $ItemStack_): number;
        getTotalTypes(arg0: $ItemStack_): number;
        isBlackListed(arg0: $ItemStack_, arg1: $AEKey): boolean;
        storableInStorageCell(): boolean;
        getIdleDrain(): number;
        getConfigInventory(arg0: $ItemStack_): $ConfigInventory;
        getFuzzyMode(arg0: $ItemStack_): $FuzzyMode;
        setFuzzyMode(arg0: $ItemStack_, arg1: $FuzzyMode_): void;
        onWheel(arg0: $ItemStack_, arg1: boolean): void;
        setActiveColor(arg0: $ItemStack_, arg1: $AEColor_): void;
        getUpgrades(arg0: $ItemStack_): $IUpgradeInventory;
        getBytes(arg0: $ItemStack_): number;
        getColor(arg0: $ItemStack_): $AEColor;
        getKeyType(): $AEKeyType;
        addCellInformationToTooltip(arg0: $ItemStack_, arg1: $List_<$Component_>): void;
        getCellTooltipImage(arg0: $ItemStack_): ($TooltipComponent) | undefined;
        isStorageCell(arg0: $ItemStack_): boolean;
        isEditable(arg0: $ItemStack_): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
        get idleDrain(): number;
        get keyType(): $AEKeyType;
    }
}
