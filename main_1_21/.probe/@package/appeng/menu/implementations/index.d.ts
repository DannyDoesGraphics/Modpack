import { $IOPortBlockEntity, $MEChestBlockEntity, $SkyChestBlockEntity, $DriveBlockEntity } from "@package/appeng/blockentity/storage";
import { $OutputSlot, $IOptionalSlotHost, $IPartitionSlotHost } from "@package/appeng/menu/slot";
import { $IAEItemFilter } from "@package/appeng/util/inv/filter";
import { $List_ } from "@package/java/util";
import { $MolecularAssemblerBlockEntity } from "@package/appeng/blockentity/crafting";
import { $GenericStack, $AEKeyType_, $AEKey } from "@package/appeng/api/stacks";
import { $LinkStatusAwareMenu } from "@package/appeng/menu/guisync";
import { $Function_ } from "@package/java/util/function";
import { $MenuProvider, $Container } from "@package/net/minecraft/world";
import { $NonNullList } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $EnergyLevelEmitterPart, $FormationPlanePart, $StorageLevelEmitterPart, $IOBusPart } from "@package/appeng/parts/automation";
import { $AppEngInternalInventory, $InternalInventoryHost } from "@package/appeng/util/inv";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $MenuType, $Slot, $MenuType_, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Class } from "@package/java/lang";
import { $AEBaseMenu, $ISubMenu, $ToolboxMenu } from "@package/appeng/menu";
import { $ItemMenuHost } from "@package/appeng/api/implementations/menuobjects";
import { $InterfaceLogicHost, $IPriorityHost } from "@package/appeng/helpers";
import { $KeyTypeSelectionMenu, $IProgressProvider, $KeyTypeSelectionMenu$SyncedKeyTypes } from "@package/appeng/menu/interfaces";
import { $SpatialIOPortBlockEntity, $SpatialAnchorBlockEntity } from "@package/appeng/blockentity/spatial";
import { $ItemLike_, $Level } from "@package/net/minecraft/world/level";
import { $GenericStackInv } from "@package/appeng/helpers/externalstorage";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $IUpgradeInventory, $IUpgradeableObject } from "@package/appeng/api/upgrades";
import { $AccessRestriction, $OperationMode, $YesNo_, $CondenserOutput, $RedstoneMode_, $FullnessMode, $SchedulingMode, $InscriberInputCapacity, $CopyMode, $ShowPatternProviders, $FuzzyMode_, $LockCraftingMode, $StorageFilter, $FuzzyMode, $YesNo, $RedstoneMode } from "@package/appeng/api/config";
import { $MenuHostLocator_ } from "@package/appeng/menu/locator";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $WirelessAccessPointBlockEntity } from "@package/appeng/blockentity/networking";
import { $InternalInventory } from "@package/appeng/api/inventories";
import { $KeyTypeSelection } from "@package/appeng/api/util";
import { $ISubMenuHost, $IPatternAccessTermMenuHost, $ILinkStatus } from "@package/appeng/api/storage";
import { $PatternProviderLogicHost } from "@package/appeng/helpers/patternprovider";
import { $VibrationChamberBlockEntity, $CondenserBlockEntity, $InscriberBlockEntity, $CellWorkbenchBlockEntity } from "@package/appeng/blockentity/misc";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $QuantumBridgeBlockEntity } from "@package/appeng/blockentity/qnb";
import { $StorageBusPart } from "@package/appeng/parts/storagebus";

declare module "@package/appeng/menu/implementations" {
    export class $UpgradeableMenu<T extends $IUpgradeableObject> extends $AEBaseMenu implements $IOptionalSlotHost {
        setRedStoneMode(arg0: $RedstoneMode_): void;
        setCraftingMode(arg0: $YesNo_): void;
        getCraftingMode(): $YesNo;
        getRedStoneMode(): $RedstoneMode;
        getSchedulingMode(): $SchedulingMode;
        getFuzzyMode(): $FuzzyMode;
        setFuzzyMode(arg0: $FuzzyMode_): void;
        isSlotEnabled(arg0: number): boolean;
        getUpgrades(): $IUpgradeInventory;
        hasUpgrade(arg0: $ItemLike_): boolean;
        getToolbox(): $ToolboxMenu;
        getHost(): T;
        rsMode: $RedstoneMode;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        schedulingMode: $SchedulingMode;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        cMode: $YesNo;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        fzMode: $FuzzyMode;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: T);
        get upgrades(): $IUpgradeInventory;
        get toolbox(): $ToolboxMenu;
        get host(): T;
    }
    export class $MenuTypeBuilder$InitialDataSerializer<I> {
    }
    export interface $MenuTypeBuilder$InitialDataSerializer<I> {
        serializeInitialData(arg0: I, arg1: $RegistryFriendlyByteBuf): void;
    }
    /**
     * Values that may be interpreted as {@link $MenuTypeBuilder$InitialDataSerializer}.
     */
    export type $MenuTypeBuilder$InitialDataSerializer_<I> = ((arg0: I, arg1: $RegistryFriendlyByteBuf) => void);
    export class $MenuTypeBuilder$1AppEngMenuProvider implements $MenuProvider {
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
    }
    export class $PatternAccessTermMenu$PatternSlotFilter implements $IAEItemFilter {
        allowExtract(arg0: $InternalInventory, arg1: number, arg2: number): boolean;
        allowInsert(arg0: $InternalInventory, arg1: number, arg2: $ItemStack_): boolean;
    }
    export class $InterfaceMenu extends $UpgradeableMenu<$InterfaceLogicHost> {
        openSetAmountMenu(arg0: number): void;
        rsMode: $RedstoneMode;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static ACTION_OPEN_SET_AMOUNT: string;
        schedulingMode: $SchedulingMode;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        cMode: $YesNo;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static TYPE: $MenuType<$InterfaceMenu>;
        fzMode: $FuzzyMode;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: $MenuType_<$InterfaceMenu>, arg1: number, arg2: $Inventory, arg3: $InterfaceLogicHost);
    }
    export class $QuartzKnifeMenu extends $AEBaseMenu {
        setName(arg0: string): void;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static TYPE: $MenuType<$QuartzKnifeMenu>;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $ItemMenuHost<never>);
        set name(value: string);
    }
    export class $EnergyLevelEmitterMenu extends $UpgradeableMenu<$EnergyLevelEmitterPart> {
        getReportingValue(): number;
        setReportingValue(arg0: number): void;
        rsMode: $RedstoneMode;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        schedulingMode: $SchedulingMode;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        cMode: $YesNo;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static TYPE: $MenuType<$EnergyLevelEmitterMenu>;
        fzMode: $FuzzyMode;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $EnergyLevelEmitterPart);
    }
    export class $CellWorkbenchMenu extends $UpgradeableMenu<$CellWorkbenchBlockEntity> implements $IPartitionSlotHost {
        getWorkbenchItem(): $ItemStack;
        getCopyMode(): $CopyMode;
        setCellFuzzyMode(arg0: $FuzzyMode_): void;
        nextWorkBenchCopyMode(): void;
        isPartitionSlotEnabled(arg0: number): boolean;
        partition(): void;
        clear(): void;
        static ACTION_NEXT_COPYMODE: string;
        static ACTION_CLEAR: string;
        rsMode: $RedstoneMode;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static ACTION_PARTITION: string;
        schedulingMode: $SchedulingMode;
        lastSlots: $NonNullList<$ItemStack>;
        copyMode: $CopyMode;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        cMode: $YesNo;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static ACTION_SET_FUZZY_MODE: string;
        containerId: number;
        static TYPE: $MenuType<$CellWorkbenchMenu>;
        fzMode: $FuzzyMode;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $CellWorkbenchBlockEntity);
        get workbenchItem(): $ItemStack;
        set cellFuzzyMode(value: $FuzzyMode_);
    }
    export class $PatternProviderMenu extends $AEBaseMenu {
        getBlockingMode(): $YesNo;
        getLockCraftingMode(): $LockCraftingMode;
        getShowInAccessTerminal(): $YesNo;
        getUnlockStack(): $GenericStack;
        getReturnInv(): $GenericStackInv;
        getCraftingLockedReason(): $LockCraftingMode;
        blockingMode: $YesNo;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        craftingLockedReason: $LockCraftingMode;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        lockCraftingMode: $LockCraftingMode;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        unlockStack: $GenericStack;
        showInAccessTerminal: $YesNo;
        containerId: number;
        static TYPE: $MenuType<$PatternProviderMenu>;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: $MenuType_<$PatternProviderMenu>, arg1: number, arg2: $Inventory, arg3: $PatternProviderLogicHost);
        get returnInv(): $GenericStackInv;
    }
    export class $QuartzKnifeMenu$QuartzKniveSlot extends $OutputSlot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
    }
    export class $PatternAccessTermMenu$ContainerTracker {
    }
    export class $IOPortMenu extends $UpgradeableMenu<$IOPortBlockEntity> {
        getFullMode(): $FullnessMode;
        getOperationMode(): $OperationMode;
        rsMode: $RedstoneMode;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        fMode: $FullnessMode;
        schedulingMode: $SchedulingMode;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        cMode: $YesNo;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        opMode: $OperationMode;
        containerId: number;
        static TYPE: $MenuType<$IOPortMenu>;
        fzMode: $FuzzyMode;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $IOPortBlockEntity);
        get fullMode(): $FullnessMode;
        get operationMode(): $OperationMode;
    }
    export class $PatternAccessTermMenu$VisitorState {
    }
    export class $SpatialIOPortMenu extends $AEBaseMenu {
        getCurrentPower(): number;
        getEfficency(): number;
        getRequiredPower(): number;
        getMaxPower(): number;
        eff: number;
        zSize: number;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        ySize: number;
        lastSlots: $NonNullList<$ItemStack>;
        reqPower: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        currentPower: number;
        static SLOT_CLICKED_OUTSIDE: number;
        xSize: number;
        maxPower: number;
        containerId: number;
        static TYPE: $MenuType<$SpatialIOPortMenu>;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $SpatialIOPortBlockEntity);
        get efficency(): number;
        get requiredPower(): number;
    }
    export class $VibrationChamberMenu extends $UpgradeableMenu<$VibrationChamberBlockEntity> implements $IProgressProvider {
        getPowerPerTick(): number;
        getFuelEfficiency(): number;
        getRemainingBurnTime(): number;
        getMaxProgress(): number;
        getCurrentProgress(): number;
        rsMode: $RedstoneMode;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        schedulingMode: $SchedulingMode;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        remainingBurnTime: number;
        cMode: $YesNo;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        currentFuelTicksPerTick: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static TYPE: $MenuType<$VibrationChamberMenu>;
        fzMode: $FuzzyMode;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $VibrationChamberBlockEntity);
        get powerPerTick(): number;
        get fuelEfficiency(): number;
        get maxProgress(): number;
        get currentProgress(): number;
    }
    export class $WirelessAccessPointMenu extends $AEBaseMenu implements $InternalInventoryHost {
        getDrain(): number;
        saveChangedInventory(arg0: $AppEngInternalInventory): void;
        onChangeInventory(arg0: $AppEngInternalInventory, arg1: number): void;
        getRange(): number;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        range: number;
        lastSlots: $NonNullList<$ItemStack>;
        drain: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static TYPE: $MenuType<$WirelessAccessPointMenu>;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $WirelessAccessPointBlockEntity);
    }
    export class $PatternAccessTermMenu extends $AEBaseMenu implements $LinkStatusAwareMenu {
        setLinkStatus(arg0: $ILinkStatus): void;
        getShownProviders(): $ShowPatternProviders;
        quickMovePattern(arg0: $ServerPlayer, arg1: number, arg2: $List_<number>): void;
        getLinkStatus(): $ILinkStatus;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        showPatternProviders: $ShowPatternProviders;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static TYPE: $MenuType<$PatternAccessTermMenu>;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $IPatternAccessTermMenuHost);
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $IPatternAccessTermMenuHost, arg4: boolean);
        get shownProviders(): $ShowPatternProviders;
    }
    export class $MolecularAssemblerMenu extends $UpgradeableMenu<$MolecularAssemblerBlockEntity> implements $IProgressProvider {
        isValidItemForSlot(arg0: number, arg1: $ItemStack_): boolean;
        getMaxProgress(): number;
        getCurrentProgress(): number;
        rsMode: $RedstoneMode;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        schedulingMode: $SchedulingMode;
        lastSlots: $NonNullList<$ItemStack>;
        craftProgress: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        cMode: $YesNo;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static TYPE: $MenuType<$MolecularAssemblerMenu>;
        fzMode: $FuzzyMode;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $MolecularAssemblerBlockEntity);
        get maxProgress(): number;
        get currentProgress(): number;
    }
    export class $SetStockAmountMenu extends $AEBaseMenu implements $ISubMenu {
        getInitialAmount(): number;
        getWhatToStock(): $AEKey;
        getMaxAmount(): number;
        confirm(arg0: number): void;
        static open(arg0: $ServerPlayer, arg1: $MenuHostLocator_, arg2: number, arg3: $AEKey, arg4: number): void;
        getLevel(): $Level;
        getHost(): $ISubMenuHost;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static ACTION_SET_STOCK_AMOUNT: string;
        containerId: number;
        static TYPE: $MenuType<$SetStockAmountMenu>;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $InterfaceLogicHost);
        get initialAmount(): number;
        get whatToStock(): $AEKey;
        get maxAmount(): number;
        get level(): $Level;
        get host(): $ISubMenuHost;
    }
    export class $SpatialAnchorMenu extends $AEBaseMenu {
        setOverlayMode(arg0: $YesNo_): void;
        getOverlayMode(): $YesNo;
        powerConsumption: number;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        overlayMode: $YesNo;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        allChunks: number;
        static SLOT_CLICKED_OUTSIDE: number;
        allLoadedChunks: number;
        allWorlds: number;
        allLoadedWorlds: number;
        containerId: number;
        static TYPE: $MenuType<$SpatialAnchorMenu>;
        loadedChunks: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $SpatialAnchorBlockEntity);
    }
    export class $DriveMenu extends $AEBaseMenu {
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static TYPE: $MenuType<$DriveMenu>;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $DriveBlockEntity);
    }
    export class $MenuTypeBuilder$MenuFactory<C, I> {
    }
    export interface $MenuTypeBuilder$MenuFactory<C, I> {
        create(arg0: number, arg1: $Inventory, arg2: I): C;
    }
    /**
     * Values that may be interpreted as {@link $MenuTypeBuilder$MenuFactory}.
     */
    export type $MenuTypeBuilder$MenuFactory_<C, I> = ((arg0: number, arg1: $Inventory, arg2: I) => C);
    export class $MEChestMenu extends $AEBaseMenu {
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static TYPE: $MenuType<$MEChestMenu>;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $MEChestBlockEntity);
    }
    export class $InscriberMenu extends $UpgradeableMenu<$InscriberBlockEntity> implements $IProgressProvider {
        getSeparateSides(): $YesNo;
        getAutoExport(): $YesNo;
        getMaxProgress(): number;
        getBufferSize(): $InscriberInputCapacity;
        getCurrentProgress(): number;
        maxProcessingTime: number;
        rsMode: $RedstoneMode;
        autoExport: $YesNo;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        schedulingMode: $SchedulingMode;
        lastSlots: $NonNullList<$ItemStack>;
        processingTime: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        cMode: $YesNo;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        separateSides: $YesNo;
        containerId: number;
        static TYPE: $MenuType<$InscriberMenu>;
        fzMode: $FuzzyMode;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        bufferSize: $InscriberInputCapacity;
        constructor(arg0: number, arg1: $Inventory, arg2: $InscriberBlockEntity);
        get maxProgress(): number;
        get currentProgress(): number;
    }
    export class $PriorityMenu extends $AEBaseMenu implements $ISubMenu {
        getPriorityValue(): number;
        setPriority(arg0: number): void;
        getHost(): $ISubMenuHost;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static TYPE: $MenuType<$PriorityMenu>;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $IPriorityHost);
        get priorityValue(): number;
        set priority(value: number);
        get host(): $ISubMenuHost;
    }
    export class $MenuTypeBuilder$InitialDataDeserializer<C, I> {
    }
    export interface $MenuTypeBuilder$InitialDataDeserializer<C, I> {
        deserializeInitialData(arg0: I, arg1: C, arg2: $RegistryFriendlyByteBuf): void;
    }
    /**
     * Values that may be interpreted as {@link $MenuTypeBuilder$InitialDataDeserializer}.
     */
    export type $MenuTypeBuilder$InitialDataDeserializer_<C, I> = ((arg0: I, arg1: C, arg2: $RegistryFriendlyByteBuf) => void);
    export class $QNBMenu extends $AEBaseMenu {
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static TYPE: $MenuType<$QNBMenu>;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $QuantumBridgeBlockEntity);
    }
    export class $FormationPlaneMenu extends $UpgradeableMenu<$FormationPlanePart> {
        getPlaceMode(): $YesNo;
        supportsFuzzyMode(): boolean;
        placeMode: $YesNo;
        rsMode: $RedstoneMode;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        schedulingMode: $SchedulingMode;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        cMode: $YesNo;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static TYPE: $MenuType<$FormationPlaneMenu>;
        fzMode: $FuzzyMode;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: $MenuType_<$FormationPlaneMenu>, arg1: number, arg2: $Inventory, arg3: $FormationPlanePart);
    }
    export class $SkyChestMenu extends $AEBaseMenu {
        getChest(): $SkyChestBlockEntity;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static TYPE: $MenuType<$SkyChestMenu>;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $SkyChestBlockEntity);
        get chest(): $SkyChestBlockEntity;
    }
    export class $MenuTypeBuilder$TypedMenuFactory<C extends $AbstractContainerMenu, I> {
    }
    export interface $MenuTypeBuilder$TypedMenuFactory<C extends $AbstractContainerMenu, I> {
        create(arg0: $MenuType_<C>, arg1: number, arg2: $Inventory, arg3: I): C;
    }
    /**
     * Values that may be interpreted as {@link $MenuTypeBuilder$TypedMenuFactory}.
     */
    export type $MenuTypeBuilder$TypedMenuFactory_<C, I> = ((arg0: $MenuType<C>, arg1: number, arg2: $Inventory, arg3: I) => C);
    export class $MenuTypeBuilder<M extends $AEBaseMenu, I> {
        buildUnregistered(arg0: $ResourceLocation_): $MenuType<M>;
        withMenuTitle(arg0: $Function_<I, $Component>): $MenuTypeBuilder<M, I>;
        withInitialData(arg0: $MenuTypeBuilder$InitialDataSerializer_<I>, arg1: $MenuTypeBuilder$InitialDataDeserializer_<M, I>): $MenuTypeBuilder<M, I>;
        static create<C extends $AEBaseMenu, I>(arg0: $MenuTypeBuilder$MenuFactory_<C, I>, arg1: $Class<I>): $MenuTypeBuilder<C, I>;
        static create<C extends $AEBaseMenu, I>(arg0: $MenuTypeBuilder$TypedMenuFactory_<C, I>, arg1: $Class<I>): $MenuTypeBuilder<C, I>;
        build(arg0: string): $MenuType<M>;
        build(arg0: $ResourceLocation_): $MenuType<M>;
    }
    export class $CondenserMenu extends $AEBaseMenu implements $IProgressProvider {
        getMaxProgress(): number;
        getOutput(): $CondenserOutput;
        getCurrentProgress(): number;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        storedPower: number;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        output: $CondenserOutput;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        requiredEnergy: number;
        containerId: number;
        static TYPE: $MenuType<$CondenserMenu>;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $CondenserBlockEntity);
        get maxProgress(): number;
        get currentProgress(): number;
    }
    export class $IOBusMenu extends $UpgradeableMenu<$IOBusPart> implements $KeyTypeSelectionMenu {
        getServerKeyTypeSelection(): $KeyTypeSelection;
        getClientKeyTypeSelection(): $KeyTypeSelectionMenu$SyncedKeyTypes;
        selectKeyType(arg0: $AEKeyType_, arg1: boolean): void;
        importKeyTypes: $KeyTypeSelectionMenu$SyncedKeyTypes;
        rsMode: $RedstoneMode;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        schedulingMode: $SchedulingMode;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static IMPORT_TYPE: $MenuType<$IOBusMenu>;
        cMode: $YesNo;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        fzMode: $FuzzyMode;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        static EXPORT_TYPE: $MenuType<$IOBusMenu>;
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $IOBusPart);
        get serverKeyTypeSelection(): $KeyTypeSelection;
        get clientKeyTypeSelection(): $KeyTypeSelectionMenu$SyncedKeyTypes;
    }
    export class $StorageBusMenu extends $UpgradeableMenu<$StorageBusPart> {
        setFilterOnExtract(arg0: $YesNo_): void;
        getReadWriteMode(): $AccessRestriction;
        getStorageFilter(): $StorageFilter;
        getFilterOnExtract(): $YesNo;
        supportsFuzzySearch(): boolean;
        getConnectedTo(): $Component;
        partition(): void;
        clear(): void;
        rsMode: $RedstoneMode;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        filterOnExtract: $YesNo;
        schedulingMode: $SchedulingMode;
        lastSlots: $NonNullList<$ItemStack>;
        connectedTo: $Component;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        storageFilter: $StorageFilter;
        cMode: $YesNo;
        rwMode: $AccessRestriction;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static TYPE: $MenuType<$StorageBusMenu>;
        fzMode: $FuzzyMode;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: $MenuType_<$StorageBusMenu>, arg1: number, arg2: $Inventory, arg3: $StorageBusPart);
        get readWriteMode(): $AccessRestriction;
    }
    export class $StorageLevelEmitterMenu extends $UpgradeableMenu<$StorageLevelEmitterPart> {
        supportsFuzzySearch(): boolean;
        getConfiguredFilter(): $AEKey;
        getCurrentValue(): number;
        setValue(arg0: number): void;
        rsMode: $RedstoneMode;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        schedulingMode: $SchedulingMode;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        cMode: $YesNo;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static TYPE: $MenuType<$StorageLevelEmitterMenu>;
        fzMode: $FuzzyMode;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: $MenuType_<$StorageLevelEmitterMenu>, arg1: number, arg2: $Inventory, arg3: $StorageLevelEmitterPart);
        get configuredFilter(): $AEKey;
        get currentValue(): number;
        set value(value: number);
    }
}
