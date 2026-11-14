import { $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $IPowerChannelState } from "@package/appeng/api/implementations";
import { $IFluidTank } from "@package/net/neoforged/neoforge/fluids";
import { $IAEItemFilter } from "@package/appeng/util/inv/filter";
import { $Collection } from "@package/java/util";
import { $ICrankable } from "@package/appeng/api/implementations/blockentities";
import { $IActionSource } from "@package/appeng/api/networking/security";
import { $AENetworkedPoweredBlockEntity, $AENetworkedBlockEntity, $AENetworkedInvBlockEntity } from "@package/appeng/blockentity/grid";
import { $KeyCounter, $AEKey } from "@package/appeng/api/stacks";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $InternalInventoryHost, $AppEngInternalInventory } from "@package/appeng/util/inv";
import { $ISubMenu } from "@package/appeng/menu";
import { $Record, $Iterable } from "@package/java/lang";
import { $ServerTickingBlockEntity, $AEBaseBlockEntity, $CommonTickingBlockEntity, $ClientTickingBlockEntity, $AEBaseInvBlockEntity } from "@package/appeng/blockentity";
import { $InterfaceLogicHost, $Splotch, $IConfigInvHost, $InterfaceLogic, $IPriorityHost } from "@package/appeng/helpers";
import { $ItemLike_, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $GenericStackInv } from "@package/appeng/helpers/externalstorage";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $IGridNode } from "@package/appeng/api/networking";
import { $Actionable_ } from "@package/appeng/api/config";
import { $IUpgradeInventory, $IUpgradeableObject } from "@package/appeng/api/upgrades";
import { $MenuHostLocator_ } from "@package/appeng/menu/locator";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $InscriberRecipe, $ChargerRecipe } from "@package/appeng/recipes/handlers";
import { $PaintSplotches } from "@package/appeng/block/paint";
import { $ModelProperty } from "@package/net/neoforged/neoforge/client/model/data";
import { $BaseInternalInventory, $InternalInventory } from "@package/appeng/api/inventories";
import { $IConfigManager, $AEColor_, $IConfigurableObject } from "@package/appeng/api/util";
import { $MEStorage } from "@package/appeng/api/storage";
import { $TickRateModulation, $TickingRequest, $IGridTickable } from "@package/appeng/api/networking/ticking";
import { $ICellWorkbenchItem } from "@package/appeng/api/storage/cells";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntityType, $BlockEntityType_ } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/appeng/blockentity/misc" {
    export class $CondenserBlockEntity$CondenseItemHandler extends $BaseInternalInventory {
    }
    export class $ChargerBlockEntity$ChargerInvFilter extends $Record implements $IAEItemFilter {
        allowExtract(arg0: $InternalInventory, arg1: number, arg2: number): boolean;
        allowInsert(arg0: $InternalInventory, arg1: number, arg2: $ItemStack_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ChargerBlockEntity$ChargerInvFilter}.
     */
    export type $ChargerBlockEntity$ChargerInvFilter_ = { chargerBlockEntity?: $ChargerBlockEntity,  } | [chargerBlockEntity?: $ChargerBlockEntity, ];
    export class $InscriberBlockEntity$BaseFilter implements $IAEItemFilter {
        allowInsert(arg0: $InternalInventory, arg1: number, arg2: $ItemStack_): boolean;
        allowExtract(arg0: $InternalInventory, arg1: number, arg2: number): boolean;
        constructor(arg0: $InscriberBlockEntity);
    }
    export class $InscriberBlockEntity extends $AENetworkedPoweredBlockEntity implements $IGridTickable, $IUpgradeableObject, $IConfigurableObject {
        getTickingRequest(arg0: $IGridNode): $TickingRequest;
        tickingRequest(arg0: $IGridNode, arg1: number): $TickRateModulation;
        getCrankable(arg0: $Direction_): $ICrankable;
        getConfigManager(): $IConfigManager;
        isSmash(): boolean;
        setSmash(arg0: boolean): void;
        getProcessingTime(): number;
        getMaxProcessingTime(): number;
        getClientStart(): number;
        isRepeatSmash(): boolean;
        setRepeatSmash(arg0: boolean): void;
        getUpgrades(): $IUpgradeInventory;
        getTask(): $InscriberRecipe;
        getInstalledUpgrades(arg0: $ItemLike_): number;
        isUpgradedWith(arg0: $ItemLike_): boolean;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get configManager(): $IConfigManager;
        get processingTime(): number;
        get maxProcessingTime(): number;
        get clientStart(): number;
        get upgrades(): $IUpgradeInventory;
        get task(): $InscriberRecipe;
    }
    export class $InterfaceBlockEntity extends $AENetworkedBlockEntity implements $IPriorityHost, $IUpgradeableObject, $IConfigurableObject, $InterfaceLogicHost {
        getInterfaceLogic(): $InterfaceLogic;
        getMainMenuIcon(): $ItemStack;
        getInstalledUpgrades(arg0: $ItemLike_): number;
        isUpgradedWith(arg0: $ItemLike_): boolean;
        getUpgrades(): $IUpgradeInventory;
        getStorage(): $GenericStackInv;
        returnToMainMenu(arg0: $Player, arg1: $ISubMenu): void;
        getConfig(): $GenericStackInv;
        openMenu(arg0: $Player, arg1: $MenuHostLocator_): void;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get interfaceLogic(): $InterfaceLogic;
        get mainMenuIcon(): $ItemStack;
        get upgrades(): $IUpgradeInventory;
        get storage(): $GenericStackInv;
        get config(): $GenericStackInv;
    }
    export class $CondenserMEStorage implements $MEStorage {
        getAvailableStacks(arg0: $KeyCounter): void;
        getAvailableStacks(): $KeyCounter;
        isPreferredStorageFor(arg0: $AEKey, arg1: $IActionSource): boolean;
        extract(arg0: $AEKey, arg1: number, arg2: $Actionable_, arg3: $IActionSource): number;
        insert(arg0: $AEKey, arg1: number, arg2: $Actionable_, arg3: $IActionSource): number;
    }
    export class $GrowthAcceleratorBlockEntity extends $AENetworkedPoweredBlockEntity implements $IPowerChannelState {
        isPowered(): boolean;
        getCrankable(arg0: $Direction_): $ICrankable;
        isActive(): boolean;
        level: $Level;
        static MAX_STORED_POWER: number;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get powered(): boolean;
        get active(): boolean;
    }
    export class $CondenserBlockEntity extends $AEBaseInvBlockEntity implements $IConfigurableObject {
        getStorage(): number;
        getStoredPower(): number;
        getConfigManager(): $IConfigManager;
        getRequiredPower(): number;
        addPower(arg0: number): void;
        getExternalInv(): $InternalInventory;
        getMEStorage(): $MEStorage;
        getFluidHandler(): $IFluidHandler;
        static BYTE_MULTIPLIER: number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get storage(): number;
        get storedPower(): number;
        get configManager(): $IConfigManager;
        get requiredPower(): number;
        get externalInv(): $InternalInventory;
        get MEStorage(): $MEStorage;
        get fluidHandler(): $IFluidHandler;
    }
    export class $InscriberBlockEntity$AutomationFilter implements $IAEItemFilter {
        allowExtract(arg0: $InternalInventory, arg1: number, arg2: number): boolean;
        allowInsert(arg0: $InternalInventory, arg1: number, arg2: $ItemStack_): boolean;
        constructor(arg0: $InscriberBlockEntity);
    }
    export class $ChargerRecipes {
        static getRecipes(arg0: $Level_): $Iterable<$RecipeHolder<$ChargerRecipe>>;
        static findRecipe(arg0: $Level_, arg1: $ItemStack_): $ChargerRecipe;
        static allowExtract(arg0: $Level_, arg1: $ItemStack_): boolean;
        static allowInsert(arg0: $Level_, arg1: $ItemStack_): boolean;
        constructor();
    }
    export class $CrankBlockEntity extends $AEBaseBlockEntity implements $ServerTickingBlockEntity, $ClientTickingBlockEntity {
        serverTick(): void;
        getVisibleRotation(): number;
        clientTick(): void;
        power(): boolean;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        static POWER_PER_CRANK_TURN: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get visibleRotation(): number;
    }
    export class $VibrationChamberBlockEntity$FuelSlotFilter implements $IAEItemFilter {
        allowExtract(arg0: $InternalInventory, arg1: number, arg2: number): boolean;
        allowInsert(arg0: $InternalInventory, arg1: number, arg2: $ItemStack_): boolean;
    }
    export class $CondenserBlockEntity$FluidHandler implements $IFluidTank, $IFluidHandler {
    }
    export class $CellWorkbenchBlockEntity extends $AEBaseBlockEntity implements $IConfigurableObject, $IUpgradeableObject, $InternalInventoryHost, $IConfigInvHost {
        getCell(): $ICellWorkbenchItem;
        getConfigManager(): $IConfigManager;
        saveChangedInventory(arg0: $AppEngInternalInventory): void;
        onChangeInventory(arg0: $AppEngInternalInventory, arg1: number): void;
        getUpgrades(): $IUpgradeInventory;
        static copy(arg0: $GenericStackInv, arg1: $GenericStackInv): void;
        getConfig(): $GenericStackInv;
        getInstalledUpgrades(arg0: $ItemLike_): number;
        isUpgradedWith(arg0: $ItemLike_): boolean;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get cell(): $ICellWorkbenchItem;
        get configManager(): $IConfigManager;
        get upgrades(): $IUpgradeInventory;
        get config(): $GenericStackInv;
    }
    export class $MysteriousCubeBlockEntity extends $AEBaseBlockEntity {
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $LightDetectorBlockEntity extends $AEBaseBlockEntity implements $CommonTickingBlockEntity {
        isExposedToLight(): boolean;
        commonTick(): void;
        updateLight(): void;
        serverTick(): void;
        clientTick(): void;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get exposedToLight(): boolean;
    }
    export class $VibrationChamberBlockEntity extends $AENetworkedInvBlockEntity implements $IGridTickable, $IUpgradeableObject {
        static getBurnTime(arg0: $ItemStack_): number;
        getTickingRequest(arg0: $IGridNode): $TickingRequest;
        tickingRequest(arg0: $IGridNode, arg1: number): $TickRateModulation;
        getEnergyPerFuelTick(): number;
        getRemainingFuelTicks(): number;
        getFuelItemFuelTicks(): number;
        getMaxFuelTicksPerTick(): number;
        getCurrentFuelTicksPerTick(): number;
        getMaxEnergyRate(): number;
        static hasBurnTime(arg0: $ItemStack_): boolean;
        getMinFuelTicksPerTick(): number;
        getUpgrades(): $IUpgradeInventory;
        getInstalledUpgrades(arg0: $ItemLike_): number;
        isUpgradedWith(arg0: $ItemLike_): boolean;
        level: $Level;
        isOn: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get energyPerFuelTick(): number;
        get remainingFuelTicks(): number;
        get fuelItemFuelTicks(): number;
        get maxFuelTicksPerTick(): number;
        get currentFuelTicksPerTick(): number;
        get maxEnergyRate(): number;
        get minFuelTicksPerTick(): number;
        get upgrades(): $IUpgradeInventory;
    }
    export class $ChargerBlockEntity extends $AENetworkedPoweredBlockEntity implements $IGridTickable {
        isWorking(): boolean;
        getTickingRequest(arg0: $IGridNode): $TickingRequest;
        tickingRequest(arg0: $IGridNode, arg1: number): $TickRateModulation;
        getCrankable(arg0: $Direction_): $ICrankable;
        static POWER_MAXIMUM_AMOUNT: number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get working(): boolean;
    }
    export class $InscriberRecipes {
        static isValidOptionalIngredient(arg0: $Level_, arg1: $ItemStack_): boolean;
        static isValidOptionalIngredientCombination(arg0: $Level_, arg1: $ItemStack_, arg2: $ItemStack_): boolean;
        static getRecipes(arg0: $Level_): $Iterable<$RecipeHolder<$InscriberRecipe>>;
        static findRecipe(arg0: $Level_, arg1: $ItemStack_, arg2: $ItemStack_, arg3: $ItemStack_, arg4: boolean): $InscriberRecipe;
    }
    export class $PaintSplotchesBlockEntity extends $AEBaseBlockEntity {
        neighborChanged(): void;
        cleanSide(arg0: $Direction_): void;
        addBlot(arg0: $AEColor_, arg1: boolean, arg2: $Direction_, arg3: $Vec3_): void;
        addBlot(arg0: $ItemStack_, arg1: $Direction_, arg2: $Vec3_): void;
        getDots(): $Collection<$Splotch>;
        isSideValid(arg0: $Direction_): boolean;
        static SPLOTCHES: $ModelProperty<$PaintSplotches>;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get dots(): $Collection<$Splotch>;
    }
}
