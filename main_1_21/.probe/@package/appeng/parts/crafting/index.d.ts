import { $ItemStack } from "@package/net/minecraft/world/item";
import { $IGridNodeListener$State_, $IGrid } from "@package/appeng/api/networking";
import { $MenuHostLocator_ } from "@package/appeng/menu/locator";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $EnumSet } from "@package/java/util";
import { $PatternContainerGroup } from "@package/appeng/api/implementations/blockentities";
import { $IPartItem } from "@package/appeng/api/parts";
import { $AEItemKey } from "@package/appeng/api/stacks";
import { $InternalInventory } from "@package/appeng/api/inventories";
import { $IConfigManager } from "@package/appeng/api/util";
import { $Direction } from "@package/net/minecraft/core";
import { $PatternProviderLogic, $PatternProviderLogicHost } from "@package/appeng/helpers/patternprovider";
import { $PartModel, $AEBasePart } from "@package/appeng/parts";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ISubMenu } from "@package/appeng/menu";

declare module "@package/appeng/parts/crafting" {
    export class $PatternProviderPart extends $AEBasePart implements $PatternProviderLogicHost {
        onMainNodeStateChanged(arg0: $IGridNodeListener$State_): void;
        getMainMenuIcon(): $ItemStack;
        getLogic(): $PatternProviderLogic;
        saveChanges(): void;
        getTerminalIcon(): $AEItemKey;
        getTargets(): $EnumSet<$Direction>;
        getGrid(): $IGrid;
        getConfigManager(): $IConfigManager;
        returnToMainMenu(arg0: $Player, arg1: $ISubMenu): void;
        getTerminalGroup(): $PatternContainerGroup;
        isVisibleInTerminal(): boolean;
        getTerminalPatternInventory(): $InternalInventory;
        getTerminalSortOrder(): number;
        setPriority(arg0: number): void;
        getPriority(): number;
        openMenu(arg0: $Player, arg1: $MenuHostLocator_): void;
        static MODELS_HAS_CHANNEL: $PartModel;
        static MODEL_BASE: $ResourceLocation;
        static MODELS_ON: $PartModel;
        static MODELS_OFF: $PartModel;
        constructor(arg0: $IPartItem<never>);
        get mainMenuIcon(): $ItemStack;
        get logic(): $PatternProviderLogic;
        get terminalIcon(): $AEItemKey;
        get targets(): $EnumSet<$Direction>;
        get grid(): $IGrid;
        get configManager(): $IConfigManager;
        get terminalGroup(): $PatternContainerGroup;
        get visibleInTerminal(): boolean;
        get terminalPatternInventory(): $InternalInventory;
        get terminalSortOrder(): number;
    }
}
