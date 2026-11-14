import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $IUpgradeInventory } from "@package/appeng/api/upgrades";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $IPartItem, $IPartModel } from "@package/appeng/api/parts";
import { $IViewCellStorage } from "@package/appeng/api/implementations/blockentities";
import { $AEKey } from "@package/appeng/api/stacks";
import { $InternalInventory } from "@package/appeng/api/inventories";
import { $KeyTypeSelectionHost, $IConfigManager, $KeyTypeSelection } from "@package/appeng/api/util";
import { $ISubMenuHost, $MEStorage, $ITerminalHost, $ILinkStatus, $IPatternAccessTermMenuHost } from "@package/appeng/api/storage";
import { $IMonitorPart, $IStorageMonitorPart } from "@package/appeng/api/implementations/parts";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $InternalInventoryHost, $AppEngInternalInventory } from "@package/appeng/util/inv";
import { $AEBasePart, $PartModel } from "@package/appeng/parts";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $MenuType } from "@package/net/minecraft/world/inventory";
import { $ISubMenu } from "@package/appeng/menu";

declare module "@package/appeng/parts/reporting" {
    export class $SemiDarkPanelPart extends $AbstractPanelPart {
        static MODEL_ON: $ResourceLocation;
        static MODEL_OFF: $ResourceLocation;
        static MODELS_ON: $IPartModel;
        static MODEL_BASE: $ResourceLocation;
        static MODELS_OFF: $PartModel;
        constructor(arg0: $IPartItem<never>);
    }
    export class $CraftingTerminalPart extends $AbstractTerminalPart {
        static INV_CRAFTING: $ResourceLocation;
        static MODELS_HAS_CHANNEL: $IPartModel;
        static MODEL_ON: $ResourceLocation;
        static MODEL_OFF: $ResourceLocation;
        static MODELS_ON: $IPartModel;
        static MODELS_OFF: $IPartModel;
        constructor(arg0: $IPartItem<never>);
    }
    export class $AbstractMonitorPart extends $AbstractDisplayPart implements $IStorageMonitorPart {
        canCraft(): boolean;
        showNetworkInfo(arg0: $UseOnContext): boolean;
        getDisplayed(): $AEKey;
        setConfiguredItem(arg0: $AEKey): void;
        setLocked(arg0: boolean): void;
        isLocked(): boolean;
        getAmount(): number;
        constructor(arg0: $IPartItem<never>, arg1: boolean);
        get displayed(): $AEKey;
        set configuredItem(value: $AEKey);
        get amount(): number;
    }
    export class $ItemTerminalPart extends $AbstractTerminalPart {
        static MODELS_HAS_CHANNEL: $IPartModel;
        static MODEL_ON: $ResourceLocation;
        static MODEL_OFF: $ResourceLocation;
        static MODELS_ON: $IPartModel;
        static MODELS_OFF: $IPartModel;
        constructor(arg0: $IPartItem<never>);
    }
    export class $DarkPanelPart extends $AbstractPanelPart {
        static MODEL_ON: $ResourceLocation;
        static MODEL_OFF: $ResourceLocation;
        static MODELS_ON: $IPartModel;
        static MODEL_BASE: $ResourceLocation;
        static MODELS_OFF: $IPartModel;
        constructor(arg0: $IPartItem<never>);
    }
    export class $PanelPart extends $AbstractPanelPart {
        static MODEL_ON: $ResourceLocation;
        static MODEL_OFF: $ResourceLocation;
        static MODELS_ON: $IPartModel;
        static MODEL_BASE: $ResourceLocation;
        static MODELS_OFF: $IPartModel;
        constructor(arg0: $IPartItem<never>);
    }
    export class $ConversionMonitorPart extends $AbstractMonitorPart implements $ISubMenuHost {
        returnToMainMenu(arg0: $Player, arg1: $ISubMenu): void;
        getMainMenuIcon(): $ItemStack;
        static MODELS_LOCKED_OFF: $IPartModel;
        static MODEL_LOCKED_OFF: $ResourceLocation;
        static MODEL_LOCKED_ON: $ResourceLocation;
        static MODELS_HAS_CHANNEL: $IPartModel;
        static MODELS_LOCKED_ON: $IPartModel;
        static MODEL_ON: $ResourceLocation;
        static MODEL_OFF: $ResourceLocation;
        static MODELS_ON: $IPartModel;
        static MODELS_OFF: $IPartModel;
        static MODELS_LOCKED_HAS_CHANNEL: $IPartModel;
        constructor(arg0: $IPartItem<never>);
        get mainMenuIcon(): $ItemStack;
    }
    export class $AbstractPanelPart extends $AbstractReportingPart {
        static MODEL_BASE: $ResourceLocation;
        constructor(arg0: $IPartItem<never>);
    }
    export class $AbstractReportingPart extends $AEBasePart implements $IMonitorPart {
        getSpin(): number;
        isLightSource(): boolean;
        get spin(): number;
        get lightSource(): boolean;
    }
    export class $PatternAccessTerminalPart extends $AbstractDisplayPart implements $IPatternAccessTermMenuHost {
        getConfigManager(): $IConfigManager;
        getLinkStatus(): $ILinkStatus;
        static MODELS_HAS_CHANNEL: $IPartModel;
        static MODEL_ON: $ResourceLocation;
        static MODEL_OFF: $ResourceLocation;
        static MODELS_ON: $IPartModel;
        static MODELS_OFF: $IPartModel;
        constructor(arg0: $IPartItem<never>);
        get configManager(): $IConfigManager;
        get linkStatus(): $ILinkStatus;
    }
    export class $StorageMonitorPart extends $AbstractMonitorPart {
        static MODELS_LOCKED_OFF: $IPartModel;
        static MODEL_LOCKED_OFF: $ResourceLocation;
        static MODEL_LOCKED_ON: $ResourceLocation;
        static MODELS_HAS_CHANNEL: $IPartModel;
        static MODELS_LOCKED_ON: $IPartModel;
        static MODEL_ON: $ResourceLocation;
        static MODEL_OFF: $ResourceLocation;
        static MODELS_ON: $IPartModel;
        static MODELS_OFF: $IPartModel;
        static MODELS_LOCKED_HAS_CHANNEL: $IPartModel;
        constructor(arg0: $IPartItem<never>);
    }
    export class $AbstractTerminalPart extends $AbstractDisplayPart implements $ITerminalHost, $IViewCellStorage, $InternalInventoryHost, $KeyTypeSelectionHost {
        getMenuType(arg0: $Player): $MenuType<never>;
        getConfigManager(): $IConfigManager;
        returnToMainMenu(arg0: $Player, arg1: $ISubMenu): void;
        getMainMenuIcon(): $ItemStack;
        getKeyTypeSelection(): $KeyTypeSelection;
        getLinkStatus(): $ILinkStatus;
        saveChanges(): void;
        saveChangedInventory(arg0: $AppEngInternalInventory): void;
        getViewCellStorage(): $InternalInventory;
        onChangeInventory(arg0: $AppEngInternalInventory, arg1: number): void;
        getInventory(): $MEStorage;
        getCloseHotkey(): string;
        getInstalledUpgrades(arg0: $ItemLike_): number;
        isUpgradedWith(arg0: $ItemLike_): boolean;
        getUpgrades(): $IUpgradeInventory;
        constructor(arg0: $IPartItem<never>);
        get configManager(): $IConfigManager;
        get mainMenuIcon(): $ItemStack;
        get keyTypeSelection(): $KeyTypeSelection;
        get linkStatus(): $ILinkStatus;
        get viewCellStorage(): $InternalInventory;
        get inventory(): $MEStorage;
        get closeHotkey(): string;
        get upgrades(): $IUpgradeInventory;
    }
    export class $AbstractDisplayPart extends $AbstractReportingPart {
        constructor(arg0: $IPartItem<never>, arg1: boolean);
    }
}
