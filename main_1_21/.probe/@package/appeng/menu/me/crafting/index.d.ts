import { $Level } from "@package/net/minecraft/world/level";
import { $IncrementalUpdateHelper } from "@package/appeng/menu/me/common";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Future } from "@package/java/util/concurrent";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $IGrid } from "@package/appeng/api/networking";
import { $CpuSelectionMode_, $CpuSelectionMode } from "@package/appeng/api/config";
import { $MenuHostLocator_ } from "@package/appeng/menu/locator";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $List, $List_ } from "@package/java/util";
import { $ICraftingCPU, $ICraftingSubmitResult, $CalculationStrategy_, $ICraftingPlan } from "@package/appeng/api/networking/crafting";
import { $IActionSource, $IActionHost_ } from "@package/appeng/api/networking/security";
import { $GenericStack, $GenericStack_, $AEKey } from "@package/appeng/api/stacks";
import { $PacketWritable } from "@package/appeng/menu/guisync";
import { $ISubMenuHost, $ITerminalHost } from "@package/appeng/api/storage";
import { $CraftingCpuLogic } from "@package/appeng/crafting/execution";
import { $NonNullList } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $MenuType_, $MenuType, $Slot } from "@package/net/minecraft/world/inventory";
import { $Record, $Comparable, $Object } from "@package/java/lang";
import { $AEBaseMenu, $ISubMenu } from "@package/appeng/menu";
import { $ICraftingGridMenu$AutoCraftEntry_ } from "@package/appeng/helpers";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/appeng/menu/me/crafting" {
    export class $CraftingStatusMenu extends $CraftingCPUMenu implements $ISubMenu {
        selectCpu(arg0: number): void;
        getSelectedCpuSerial(): number;
        getHost(): $ITerminalHost;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        schedulingMode: $CpuSelectionMode;
        lastSlots: $NonNullList<$ItemStack>;
        cantStoreItems: boolean;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        cpuList: $CraftingStatusMenu$CraftingCpuList;
        containerId: number;
        static TYPE: $MenuType<$CraftingStatusMenu>;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $ITerminalHost);
        get selectedCpuSerial(): number;
        get host(): $ITerminalHost;
    }
    export class $CraftingPlanSummary$KeyStats {
    }
    export class $CraftingPlanSummary {
        static fromJob(arg0: $IGrid, arg1: $IActionSource, arg2: $ICraftingPlan): $CraftingPlanSummary;
        getUsedBytes(): number;
        write(arg0: $RegistryFriendlyByteBuf): void;
        static read(arg0: $RegistryFriendlyByteBuf): $CraftingPlanSummary;
        getEntries(): $List<$CraftingPlanSummaryEntry>;
        isSimulation(): boolean;
        constructor(arg0: number, arg1: boolean, arg2: $List_<$CraftingPlanSummaryEntry>);
        get usedBytes(): number;
        get entries(): $List<$CraftingPlanSummaryEntry>;
        get simulation(): boolean;
    }
    export class $CraftingStatusEntry implements $Comparable<$CraftingStatusEntry> {
        getStoredAmount(): number;
        getWhat(): $AEKey;
        isDeleted(): boolean;
        getSerial(): number;
        compareTo(arg0: $CraftingStatusEntry): number;
        static write(arg0: $RegistryFriendlyByteBuf, arg1: $CraftingStatusEntry): void;
        static read(arg0: $RegistryFriendlyByteBuf): $CraftingStatusEntry;
        getActiveAmount(): number;
        getPendingAmount(): number;
        static LIST_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $List<$CraftingStatusEntry>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $CraftingStatusEntry>;
        constructor(arg0: number, arg1: $AEKey, arg2: number, arg3: number, arg4: number);
        get storedAmount(): number;
        get what(): $AEKey;
        get deleted(): boolean;
        get serial(): number;
        get activeAmount(): number;
        get pendingAmount(): number;
    }
    export class $CraftConfirmMenu extends $AEBaseMenu implements $ISubMenu {
        cycleSelectedCPU(arg0: boolean): void;
        getCpuAvailableBytes(): number;
        getCpuCoProcessors(): number;
        hasNoCPU(): boolean;
        getPlan(): $CraftingPlanSummary;
        setPlan(arg0: $CraftingPlanSummary): void;
        startJob(): void;
        replan(): void;
        isAutoStart(): boolean;
        static openWithCraftingList(arg0: $IActionHost_, arg1: $ServerPlayer, arg2: $MenuHostLocator_, arg3: $List_<$ICraftingGridMenu$AutoCraftEntry_>): void;
        setAutoStart(arg0: boolean): void;
        planJob(arg0: $AEKey, arg1: number, arg2: $CalculationStrategy_): boolean;
        setJob(arg0: $Future<$ICraftingPlan>): void;
        goBack(): void;
        getName(): $Component;
        getHost(): $ISubMenuHost;
        clearError(): void;
        getLevel(): $Level;
        noCPU: boolean;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        cpuName: $Component;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        autoStart: boolean;
        static QUICKCRAFT_TYPE_CLONE: number;
        submitError: $CraftConfirmMenu$SyncableSubmitResult;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        cpuBytesAvail: number;
        containerId: number;
        static TYPE: $MenuType<$CraftConfirmMenu>;
        cpuCoProcessors: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $ISubMenuHost);
        get cpuAvailableBytes(): number;
        set job(value: $Future<$ICraftingPlan>);
        get name(): $Component;
        get host(): $ISubMenuHost;
        get level(): $Level;
    }
    export class $CraftAmountMenu extends $AEBaseMenu implements $ISubMenu {
        getWhatToCraft(): $GenericStack;
        confirm(arg0: number, arg1: boolean, arg2: boolean): void;
        static open(arg0: $ServerPlayer, arg1: $MenuHostLocator_, arg2: $AEKey, arg3: number): void;
        getHost(): $ISubMenuHost;
        getLevel(): $Level;
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
        static TYPE: $MenuType<$CraftAmountMenu>;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $ISubMenuHost);
        get whatToCraft(): $GenericStack;
        get host(): $ISubMenuHost;
        get level(): $Level;
    }
    export class $CraftConfirmMenu$SyncableSubmitResult extends $Record implements $PacketWritable {
        writeToPacket(arg0: $RegistryFriendlyByteBuf): void;
        result(): $ICraftingSubmitResult;
        constructor(arg0: $RegistryFriendlyByteBuf);
        constructor(result: $ICraftingSubmitResult);
    }
    /**
     * Values that may be interpreted as {@link $CraftConfirmMenu$SyncableSubmitResult}.
     */
    export type $CraftConfirmMenu$SyncableSubmitResult_ = { result?: $ICraftingSubmitResult,  } | [result?: $ICraftingSubmitResult, ];
    export class $CraftingStatus {
        isSuspended(): boolean;
        write(arg0: $RegistryFriendlyByteBuf): void;
        static read(arg0: $RegistryFriendlyByteBuf): $CraftingStatus;
        static create(arg0: $IncrementalUpdateHelper, arg1: $CraftingCpuLogic): $CraftingStatus;
        getEntries(): $List<$CraftingStatusEntry>;
        getElapsedTime(): number;
        getRemainingItemCount(): number;
        getStartItemCount(): number;
        isFullStatus(): boolean;
        static EMPTY: $CraftingStatus;
        constructor(arg0: boolean, arg1: number, arg2: number, arg3: number, arg4: $List_<$CraftingStatusEntry>, arg5: boolean);
        /**
         * @deprecated
         */
        constructor(arg0: boolean, arg1: number, arg2: number, arg3: number, arg4: $List_<$CraftingStatusEntry>);
        get suspended(): boolean;
        get entries(): $List<$CraftingStatusEntry>;
        get elapsedTime(): number;
        get remainingItemCount(): number;
        get startItemCount(): number;
        get fullStatus(): boolean;
    }
    export class $CraftingPlanSummaryEntry implements $Comparable<$CraftingPlanSummaryEntry> {
        getStoredAmount(): number;
        getWhat(): $AEKey;
        getMissingAmount(): number;
        getCraftAmount(): number;
        compareTo(arg0: $CraftingPlanSummaryEntry): number;
        write(arg0: $RegistryFriendlyByteBuf): void;
        static read(arg0: $RegistryFriendlyByteBuf): $CraftingPlanSummaryEntry;
        constructor(arg0: $AEKey, arg1: number, arg2: number, arg3: number);
        get storedAmount(): number;
        get what(): $AEKey;
        get missingAmount(): number;
        get craftAmount(): number;
    }
    export class $CraftingStatusMenu$CraftingCpuListEntry extends $Record {
        coProcessors(): number;
        currentJob(): $GenericStack;
        elapsedTimeNanos(): number;
        writeToPacket(arg0: $RegistryFriendlyByteBuf): void;
        static readFromPacket(arg0: $RegistryFriendlyByteBuf): $CraftingStatusMenu$CraftingCpuListEntry;
        serial(): number;
        name(): $Component;
        mode(): $CpuSelectionMode;
        storage(): number;
        progress(): number;
        constructor(serial: number, storage: number, coProcessors: number, name: $Component_, mode: $CpuSelectionMode_, currentJob: $GenericStack_, progress: number, elapsedTimeNanos: number);
    }
    /**
     * Values that may be interpreted as {@link $CraftingStatusMenu$CraftingCpuListEntry}.
     */
    export type $CraftingStatusMenu$CraftingCpuListEntry_ = { serial?: number, currentJob?: $GenericStack_, mode?: $CpuSelectionMode_, progress?: number, coProcessors?: number, storage?: number, name?: $Component_, elapsedTimeNanos?: number,  } | [serial?: number, currentJob?: $GenericStack_, mode?: $CpuSelectionMode_, progress?: number, coProcessors?: number, storage?: number, name?: $Component_, elapsedTimeNanos?: number, ];
    export class $CraftingCPUMenu extends $AEBaseMenu {
        getSchedulingMode(): $CpuSelectionMode;
        toggleScheduling(): void;
        isCantStoreItems(): boolean;
        allowConfiguration(): boolean;
        cancelCrafting(): void;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        schedulingMode: $CpuSelectionMode;
        lastSlots: $NonNullList<$ItemStack>;
        cantStoreItems: boolean;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static TYPE: $MenuType<$CraftingCPUMenu>;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $Object);
    }
    export class $CraftingStatusMenu$CraftingCpuList extends $Record implements $PacketWritable {
        writeToPacket(arg0: $RegistryFriendlyByteBuf): void;
        cpus(): $List<$CraftingStatusMenu$CraftingCpuListEntry>;
        constructor(arg0: $RegistryFriendlyByteBuf);
        constructor(cpus: $List_<$CraftingStatusMenu$CraftingCpuListEntry_>);
    }
    /**
     * Values that may be interpreted as {@link $CraftingStatusMenu$CraftingCpuList}.
     */
    export type $CraftingStatusMenu$CraftingCpuList_ = { cpus?: $List_<$CraftingStatusMenu$CraftingCpuListEntry_>,  } | [cpus?: $List_<$CraftingStatusMenu$CraftingCpuListEntry_>, ];
    export class $CraftingCPUCycler$ChangeListener {
    }
    export interface $CraftingCPUCycler$ChangeListener {
        onChange(arg0: $CraftingCPURecord, arg1: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $CraftingCPUCycler$ChangeListener}.
     */
    export type $CraftingCPUCycler$ChangeListener_ = ((arg0: $CraftingCPURecord, arg1: boolean) => void);
    export class $CraftingCPUCycler {
    }
    export class $CraftingCPURecord implements $Comparable<$CraftingCPURecord> {
        getName(): $Component;
        compareTo(arg0: $CraftingCPURecord): number;
        setName(arg0: $Component_): void;
        constructor(arg0: number, arg1: number, arg2: $ICraftingCPU);
    }
}
