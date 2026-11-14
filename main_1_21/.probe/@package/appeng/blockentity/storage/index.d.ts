import { $ItemLike_, $Level } from "@package/net/minecraft/world/level";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $IGridNode } from "@package/appeng/api/networking";
import { $DelegatingMEInventory } from "@package/appeng/me/storage";
import { $IUpgradeInventory, $IUpgradeableObject } from "@package/appeng/api/upgrades";
import { $IFluidTank } from "@package/net/neoforged/neoforge/fluids";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $IAEItemFilter } from "@package/appeng/util/inv/filter";
import { $IChestOrDrive, $IColorableBlockEntity, $IMEChest } from "@package/appeng/api/implementations/blockentities";
import { $AENetworkedPoweredBlockEntity, $AENetworkedInvBlockEntity } from "@package/appeng/blockentity/grid";
import { $InternalInventory } from "@package/appeng/api/inventories";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $IConfigManager, $AEColor_, $KeyTypeSelection, $AEColor, $KeyTypeSelectionHost, $IConfigurableObject } from "@package/appeng/api/util";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $ITerminalHost, $ILinkStatus, $IStorageMounts_, $IStorageProvider, $MEStorage } from "@package/appeng/api/storage";
import { $TickRateModulation, $TickingRequest, $IGridTickable } from "@package/appeng/api/networking/ticking";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ISubMenu } from "@package/appeng/menu";
import { $CellState, $StorageCell } from "@package/appeng/api/storage/cells";
import { $ServerTickingBlockEntity, $AEBaseBlockEntity, $ClientTickingBlockEntity, $AEBaseInvBlockEntity } from "@package/appeng/blockentity";
import { $IPriorityHost } from "@package/appeng/helpers";
import { $LidBlockEntity, $BlockEntityType, $BlockEntityType_ } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/appeng/blockentity/storage" {
    export class $MEChestBlockEntity$ChestMonitorHandler extends $DelegatingMEInventory {
    }
    export class $MEChestBlockEntity extends $AENetworkedPoweredBlockEntity implements $IMEChest, $ITerminalHost, $IPriorityHost, $IColorableBlockEntity, $ServerTickingBlockEntity, $IStorageProvider, $KeyTypeSelectionHost {
        serverTick(): void;
        getCell(): $ItemStack;
        isPowered(): boolean;
        mountInventories(arg0: $IStorageMounts_): void;
        getConfigManager(): $IConfigManager;
        getCellInventory(arg0: number): $MEStorage;
        recolourBlock(arg0: $Direction_, arg1: $AEColor_, arg2: $Player): boolean;
        returnToMainMenu(arg0: $Player, arg1: $ISubMenu): void;
        getMainMenuIcon(): $ItemStack;
        getKeyTypeSelection(): $KeyTypeSelection;
        getLinkStatus(): $ILinkStatus;
        getCellCount(): number;
        getCellStatus(arg0: number): $CellState;
        openCellInventoryMenu(arg0: $Player): void;
        getMEStorage(arg0: $Direction_): $MEStorage;
        getCellItem(arg0: number): $Item;
        getOriginalCellInventory(arg0: number): $StorageCell;
        isCellBlinking(arg0: number): boolean;
        setCell(arg0: $ItemStack_): void;
        openGui(arg0: $Player): boolean;
        setPriority(arg0: number): void;
        getColor(): $AEColor;
        getInventory(): $MEStorage;
        getFluidHandler(arg0: $Direction_): $IFluidHandler;
        getCloseHotkey(): string;
        getInstalledUpgrades(arg0: $ItemLike_): number;
        isUpgradedWith(arg0: $ItemLike_): boolean;
        getUpgrades(): $IUpgradeInventory;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get powered(): boolean;
        get configManager(): $IConfigManager;
        get mainMenuIcon(): $ItemStack;
        get keyTypeSelection(): $KeyTypeSelection;
        get linkStatus(): $ILinkStatus;
        get cellCount(): number;
        set priority(value: number);
        get color(): $AEColor;
        get inventory(): $MEStorage;
        get closeHotkey(): string;
        get upgrades(): $IUpgradeInventory;
    }
    export class $SkyChestBlockEntity extends $AEBaseInvBlockEntity implements $ClientTickingBlockEntity, $LidBlockEntity {
        recheckOpen(): void;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        getOpenNess(arg0: number): number;
        clientTick(): void;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<$SkyChestBlockEntity>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $MEChestBlockEntity$InputInventoryFilter implements $IAEItemFilter {
        allowExtract(arg0: $InternalInventory, arg1: number, arg2: number): boolean;
        allowInsert(arg0: $InternalInventory, arg1: number, arg2: $ItemStack_): boolean;
    }
    export class $IOPortBlockEntity extends $AENetworkedInvBlockEntity implements $IUpgradeableObject, $IConfigurableObject, $IGridTickable {
        getTickingRequest(arg0: $IGridNode): $TickingRequest;
        tickingRequest(arg0: $IGridNode, arg1: number): $TickRateModulation;
        getConfigManager(): $IConfigManager;
        updateRedstoneState(): void;
        matchesFullnessMode(arg0: $StorageCell): boolean;
        getUpgrades(): $IUpgradeInventory;
        isActive(): boolean;
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
        get upgrades(): $IUpgradeInventory;
        get active(): boolean;
    }
    export class $DriveBlockEntity$CellValidInventoryFilter implements $IAEItemFilter {
        allowExtract(arg0: $InternalInventory, arg1: number, arg2: number): boolean;
        allowInsert(arg0: $InternalInventory, arg1: number, arg2: $ItemStack_): boolean;
    }
    export class $MEChestBlockEntity$CellInventoryFilter implements $IAEItemFilter {
        allowExtract(arg0: $InternalInventory, arg1: number, arg2: number): boolean;
        allowInsert(arg0: $InternalInventory, arg1: number, arg2: $ItemStack_): boolean;
    }
    export class $DriveBlockEntity extends $AENetworkedInvBlockEntity implements $IChestOrDrive, $IPriorityHost, $IStorageProvider {
        isPowered(): boolean;
        mountInventories(arg0: $IStorageMounts_): void;
        getCellInventory(arg0: number): $MEStorage;
        returnToMainMenu(arg0: $Player, arg1: $ISubMenu): void;
        getMainMenuIcon(): $ItemStack;
        getCellCount(): number;
        getCellStatus(arg0: number): $CellState;
        getCellItem(arg0: number): $Item;
        getOriginalCellInventory(arg0: number): $StorageCell;
        isCellBlinking(arg0: number): boolean;
        setPriority(arg0: number): void;
        getPriority(): number;
        openMenu(arg0: $Player): void;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get powered(): boolean;
        get mainMenuIcon(): $ItemStack;
        get cellCount(): number;
    }
    export class $SkyStoneTankBlockEntity extends $AEBaseBlockEntity {
        onPlayerUse(arg0: $Player, arg1: $InteractionHand_): boolean;
        getTank(): $IFluidTank;
        getFluidHandler(): $IFluidHandler;
        level: $Level;
        static BUCKET_CAPACITY: number;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get tank(): $IFluidTank;
        get fluidHandler(): $IFluidHandler;
    }
    export class $MEChestBlockEntity$FluidHandler implements $IFluidHandler, $IFluidTank {
    }
}
