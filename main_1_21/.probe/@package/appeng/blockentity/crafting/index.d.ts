import { $CraftingInput } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $IPowerChannelState } from "@package/appeng/api/implementations";
import { $IAEItemFilter } from "@package/appeng/util/inv/filter";
import { $EnumSet } from "@package/java/util";
import { $ICraftingMachine, $PatternContainerGroup, $IColorableBlockEntity } from "@package/appeng/api/implementations/blockentities";
import { $AENetworkedBlockEntity, $AENetworkedInvBlockEntity } from "@package/appeng/blockentity/grid";
import { $GenericStack, $GenericStack_, $KeyCounter, $AEItemKey } from "@package/appeng/api/stacks";
import { $BlockPos_, $Direction_, $NonNullList, $Direction } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $AssemblerAnimationStatus } from "@package/appeng/client/render/crafting";
import { $ISubMenu } from "@package/appeng/menu";
import { $IAEMultiBlock } from "@package/appeng/me/cluster";
import { $ItemLike_, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $IGridNode, $IGrid } from "@package/appeng/api/networking";
import { $IUpgradeInventory, $IUpgradeableObject } from "@package/appeng/api/upgrades";
import { $MenuHostLocator_ } from "@package/appeng/menu/locator";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $AbstractCraftingUnitBlock } from "@package/appeng/block/crafting";
import { $InternalInventory } from "@package/appeng/api/inventories";
import { $ModelData, $ModelProperty, $ModelData$Builder } from "@package/net/neoforged/neoforge/client/model/data";
import { $IConfigManager, $AEColor_, $AEColor, $IConfigurableObject } from "@package/appeng/api/util";
import { $TickRateModulation, $TickingRequest, $IGridTickable } from "@package/appeng/api/networking/ticking";
import { $IPatternDetails } from "@package/appeng/api/crafting";
import { $PatternProviderLogic, $PatternProviderLogicHost } from "@package/appeng/helpers/patternprovider";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $CraftingCPUCluster } from "@package/appeng/me/cluster/implementations";
import { $BlockEntityType, $BlockEntityType_ } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/appeng/blockentity/crafting" {
    export class $MolecularAssemblerBlockEntity extends $AENetworkedInvBlockEntity implements $IUpgradeableObject, $IGridTickable, $ICraftingMachine, $IPowerChannelState {
        getAnimationStatus(): $AssemblerAnimationStatus;
        isPowered(): boolean;
        getTickingRequest(arg0: $IGridNode): $TickingRequest;
        tickingRequest(arg0: $IGridNode, arg1: number): $TickRateModulation;
        pushPattern(arg0: $IPatternDetails, arg1: $KeyCounter[], arg2: $Direction_): boolean;
        acceptsPlans(): boolean;
        getCraftingMachineInfo(): $PatternContainerGroup;
        getCraftingProgress(): number;
        setAnimationStatus(arg0: $AssemblerAnimationStatus): void;
        getCurrentPattern(): $IMolecularAssemblerSupportedPattern;
        getUpgrades(): $IUpgradeInventory;
        isActive(): boolean;
        getInstalledUpgrades(arg0: $ItemLike_): number;
        isUpgradedWith(arg0: $ItemLike_): boolean;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        static INV_MAIN: $ResourceLocation;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get powered(): boolean;
        get craftingMachineInfo(): $PatternContainerGroup;
        get craftingProgress(): number;
        get currentPattern(): $IMolecularAssemblerSupportedPattern;
        get upgrades(): $IUpgradeInventory;
        get active(): boolean;
    }
    export class $IMolecularAssemblerSupportedPattern {
    }
    export interface $IMolecularAssemblerSupportedPattern extends $IPatternDetails {
        assemble(arg0: $CraftingInput, arg1: $Level_): $ItemStack;
        getRemainingItems(arg0: $CraftingInput): $NonNullList<$ItemStack>;
        supportsPushInputsToExternalInventory(): boolean;
        fillCraftingGrid(arg0: $KeyCounter[], arg1: $IMolecularAssemblerSupportedPattern$CraftingGridAccessor_): void;
        isSlotEnabled(arg0: number): boolean;
        isItemValid(arg0: number, arg1: $AEItemKey, arg2: $Level_): boolean;
    }
    export class $PatternProviderBlockEntity extends $AENetworkedBlockEntity implements $PatternProviderLogicHost {
        getMainMenuIcon(): $ItemStack;
        getLogic(): $PatternProviderLogic;
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
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
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
    export class $IMolecularAssemblerSupportedPattern$CraftingGridAccessor {
    }
    export interface $IMolecularAssemblerSupportedPattern$CraftingGridAccessor {
        set(arg0: number, arg1: $ItemStack_): void;
    }
    /**
     * Values that may be interpreted as {@link $IMolecularAssemblerSupportedPattern$CraftingGridAccessor}.
     */
    export type $IMolecularAssemblerSupportedPattern$CraftingGridAccessor_ = ((arg0: number, arg1: $ItemStack) => void);
    export class $CraftingBlockEntity extends $AENetworkedBlockEntity implements $IAEMultiBlock<$CraftingCPUCluster>, $IPowerChannelState, $IConfigurableObject {
        isPowered(): boolean;
        getCluster(): $CraftingCPUCluster;
        updateStatus(arg0: $CraftingCPUCluster): void;
        getConfigManager(): $IConfigManager;
        getStorageBytes(): number;
        getAcceleratorThreads(): number;
        isFormed(): boolean;
        updateMultiBlock(arg0: $BlockPos_): void;
        breakCluster(): void;
        isCoreBlock(): boolean;
        getUnitBlock(): $AbstractCraftingUnitBlock<never>;
        updateSubType(arg0: boolean): void;
        setCoreBlock(arg0: boolean): void;
        setPreviousState(arg0: $CompoundTag_): void;
        getPreviousState(): $CompoundTag;
        isActive(): boolean;
        isValid(): boolean;
        disconnect(arg0: boolean): void;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get powered(): boolean;
        get cluster(): $CraftingCPUCluster;
        get configManager(): $IConfigManager;
        get storageBytes(): number;
        get acceleratorThreads(): number;
        get formed(): boolean;
        get unitBlock(): $AbstractCraftingUnitBlock<never>;
        get active(): boolean;
        get valid(): boolean;
    }
    export class $MolecularAssemblerBlockEntity$CraftingGridFilter implements $IAEItemFilter {
        allowExtract(arg0: $InternalInventory, arg1: number, arg2: number): boolean;
        allowInsert(arg0: $InternalInventory, arg1: number, arg2: $ItemStack_): boolean;
    }
    export class $CraftingCubeModelData {
        static builder(arg0: $EnumSet<$Direction_>): $ModelData$Builder;
        static create(arg0: $EnumSet<$Direction_>): $ModelData;
        static CONNECTIONS: $ModelProperty<$EnumSet<$Direction>>;
    }
    export class $CraftingMonitorModelData {
        static builder(arg0: $EnumSet<$Direction_>, arg1: $AEColor_): $ModelData$Builder;
        static create(arg0: $EnumSet<$Direction_>, arg1: $AEColor_): $ModelData;
        static COLOR: $ModelProperty<$AEColor>;
        constructor();
    }
    export class $CraftingMonitorBlockEntity extends $CraftingBlockEntity implements $IColorableBlockEntity {
        recolourBlock(arg0: $Direction_, arg1: $AEColor_, arg2: $Player): boolean;
        setJob(arg0: $GenericStack_): void;
        getJobProgress(): $GenericStack;
        getColor(): $AEColor;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        set job(value: $GenericStack_);
        get jobProgress(): $GenericStack;
        get color(): $AEColor;
    }
}
