import { $IEnergyService } from "@package/appeng/api/networking/energy";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CraftingService } from "@package/appeng/me/service";
import { $IGrid } from "@package/appeng/api/networking";
import { $Actionable_ } from "@package/appeng/api/config";
import { $UUID_, $Set_ } from "@package/java/util";
import { $CraftingSubmitErrorCode, $ICraftingRequester, $CraftingSubmitErrorCode_, $ICraftingLink, $UnsuitableCpus_, $ICraftingSubmitResult, $ICraftingPlan } from "@package/appeng/api/networking/crafting";
import { $IActionSource } from "@package/appeng/api/networking/security";
import { $ICraftingInventory, $ListCraftingInventory } from "@package/appeng/crafting/inv";
import { $GenericStack, $GenericStack_, $KeyCounter, $AEKey } from "@package/appeng/api/stacks";
import { $Consumer_ } from "@package/java/util/function";
import { $IPatternDetails, $IPatternDetails$IInput } from "@package/appeng/api/crafting";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CraftingCPUCluster } from "@package/appeng/me/cluster/implementations";
import { $Record, $Object, $Iterable } from "@package/java/lang";

declare module "@package/appeng/crafting/execution" {
    export class $CraftingCpuLogic {
        isJobSuspended(): boolean;
        setJobSuspended(arg0: boolean): void;
        isCantStoreItems(): boolean;
        getAllItems(arg0: $KeyCounter): void;
        tickCraftingLogic(arg0: $IEnergyService, arg1: $CraftingService): void;
        getLastModifiedOnTick(): number;
        getAllWaitingFor(arg0: $Set_<$AEKey>): void;
        getLastLink(): $ICraftingLink;
        getWaitingFor(arg0: $AEKey): number;
        writeToNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        readFromNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        storeItems(): void;
        executeCrafting(arg0: number, arg1: $CraftingService, arg2: $IEnergyService, arg3: $Level_): number;
        trySubmitJob(arg0: $IGrid, arg1: $ICraftingPlan, arg2: $IActionSource, arg3: $ICraftingRequester): $ICraftingSubmitResult;
        hasJob(): boolean;
        getFinalJobOutput(): $GenericStack;
        getElapsedTimeTracker(): $ElapsedTimeTracker;
        getStored(arg0: $AEKey): number;
        getPendingOutputs(arg0: $AEKey): number;
        insert(arg0: $AEKey, arg1: number, arg2: $Actionable_): number;
        cancel(): void;
        removeListener(arg0: $Consumer_<$AEKey>): void;
        addListener(arg0: $Consumer_<$AEKey>): void;
        getInventory(): $ListCraftingInventory;
        constructor(arg0: $CraftingCPUCluster);
        get cantStoreItems(): boolean;
        get lastModifiedOnTick(): number;
        get lastLink(): $ICraftingLink;
        get finalJobOutput(): $GenericStack;
        get elapsedTimeTracker(): $ElapsedTimeTracker;
        get inventory(): $ListCraftingInventory;
    }
    export class $InputTemplate extends $Record {
        key(): $AEKey;
        amount(): number;
        constructor(key: $AEKey, amount: number);
    }
    /**
     * Values that may be interpreted as {@link $InputTemplate}.
     */
    export type $InputTemplate_ = { amount?: number, key?: $AEKey,  } | [amount?: number, key?: $AEKey, ];
    export class $ElapsedTimeTracker {
        getProgress(): number;
        writeToNBT(): $CompoundTag;
        getElapsedTime(): number;
        /**
         * @deprecated
         */
        getRemainingItemCount(): number;
        /**
         * @deprecated
         */
        getStartItemCount(): number;
        constructor(arg0: $CompoundTag_);
        constructor();
        get progress(): number;
        get elapsedTime(): number;
        get remainingItemCount(): number;
        get startItemCount(): number;
    }
    export class $ExecutingCraftingJob$CraftingDifferenceListener {
    }
    export interface $ExecutingCraftingJob$CraftingDifferenceListener {
    }
    /**
     * Values that may be interpreted as {@link $ExecutingCraftingJob$CraftingDifferenceListener}.
     */
    export type $ExecutingCraftingJob$CraftingDifferenceListener_ = (() => void);
    export class $ExecutingCraftingJob$TaskProgress {
    }
    export class $CraftingSubmitResult extends $Record implements $ICraftingSubmitResult {
        static missingIngredient(arg0: $GenericStack_): $ICraftingSubmitResult;
        static simpleError(arg0: $CraftingSubmitErrorCode_): $ICraftingSubmitResult;
        static successful(arg0: $ICraftingLink): $ICraftingSubmitResult;
        static noSuitableCpu(arg0: $UnsuitableCpus_): $ICraftingSubmitResult;
        errorDetail(): $Object;
        errorCode(): $CraftingSubmitErrorCode;
        link(): $ICraftingLink;
        successful(): boolean;
        static INCOMPLETE_PLAN: $ICraftingSubmitResult;
        static NO_CPU_FOUND: $ICraftingSubmitResult;
        static CPU_BUSY: $ICraftingSubmitResult;
        static CPU_OFFLINE: $ICraftingSubmitResult;
        static CPU_TOO_SMALL: $ICraftingSubmitResult;
        constructor(link: $ICraftingLink, errorCode: $CraftingSubmitErrorCode_, errorDetail: $Object);
    }
    /**
     * Values that may be interpreted as {@link $CraftingSubmitResult}.
     */
    export type $CraftingSubmitResult_ = { errorDetail?: $Object, link?: $ICraftingLink, errorCode?: $CraftingSubmitErrorCode_,  } | [errorDetail?: $Object, link?: $ICraftingLink, errorCode?: $CraftingSubmitErrorCode_, ];
    export class $ExecutingCraftingJob {
    }
    export class $CraftingCpuHelper {
        static tryExtractInitialItems(arg0: $ICraftingPlan, arg1: $IGrid, arg2: $ListCraftingInventory, arg3: $IActionSource): $GenericStack;
        static generateLinkData(arg0: $UUID_, arg1: boolean, arg2: boolean): $CompoundTag;
        static getValidItemTemplates(arg0: $ICraftingInventory, arg1: $IPatternDetails$IInput, arg2: $Level_): $Iterable<$InputTemplate>;
        static extractTemplates(arg0: $ICraftingInventory, arg1: $InputTemplate_, arg2: number): number;
        static extractPatternInputs(arg0: $IPatternDetails, arg1: $ICraftingInventory, arg2: $Level_, arg3: $KeyCounter, arg4: $KeyCounter): $KeyCounter[];
        static calculatePatternPower(arg0: $KeyCounter[]): number;
        static reinjectPatternInputs(arg0: $ICraftingInventory, arg1: $KeyCounter[]): void;
    }
}
