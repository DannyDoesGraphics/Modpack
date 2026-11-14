import { $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CraftingService } from "@package/appeng/me/service";
import { $IGrid } from "@package/appeng/api/networking";
import { $Actionable_ } from "@package/appeng/api/config";
import { $UUID, $Map_, $Map, $UUID_ } from "@package/java/util";
import { $Stopwatch } from "@package/com/google/common/base";
import { $ICraftingCPU, $ICraftingRequester, $ICraftingSimulationRequester_, $ICraftingLink, $CalculationStrategy_, $ICraftingPlan, $ICraftingService } from "@package/appeng/api/networking/crafting";
import { $GenericStack, $GenericStack_, $KeyCounter, $AEKey } from "@package/appeng/api/stacks";
import { $Container } from "@package/net/minecraft/world";
import { $IPatternDetails } from "@package/appeng/api/crafting";
import { $Record, $Exception } from "@package/java/lang";
export * as inv from "@package/appeng/crafting/inv";
export * as pattern from "@package/appeng/crafting/pattern";
export * as execution from "@package/appeng/crafting/execution";

declare module "@package/appeng/crafting" {
    export class $CraftingTreeProcess {
        constructor(arg0: $ICraftingService, arg1: $CraftingCalculation, arg2: $IPatternDetails, arg3: $CraftingTreeNode);
    }
    export class $CraftingCalculation$CraftAttempt extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $CraftingCalculation$CraftAttempt}.
     */
    export type $CraftingCalculation$CraftAttempt_ = { description?: string, stopwatch?: $Stopwatch,  } | [description?: string, stopwatch?: $Stopwatch, ];
    export class $CraftingLink implements $ICraftingLink {
        getCraftingID(): $UUID;
        setNexus(arg0: $CraftingLinkNexus): void;
        markDone(): void;
        writeToNBT(arg0: $CompoundTag_): void;
        insert(arg0: $AEKey, arg1: number, arg2: $Actionable_): number;
        isDone(): boolean;
        cancel(): void;
        isStandalone(): boolean;
        isCanceled(): boolean;
        constructor(arg0: $CompoundTag_, arg1: $ICraftingRequester);
        constructor(arg0: $CompoundTag_, arg1: $ICraftingCPU);
        get craftingID(): $UUID;
        set nexus(value: $CraftingLinkNexus);
        get done(): boolean;
        get standalone(): boolean;
        get canceled(): boolean;
    }
    export class $CraftingPlan extends $Record implements $ICraftingPlan {
        simulation(): boolean;
        finalOutput(): $GenericStack;
        multiplePaths(): boolean;
        usedItems(): $KeyCounter;
        emittedItems(): $KeyCounter;
        missingItems(): $KeyCounter;
        patternTimes(): $Map<$IPatternDetails, number>;
        bytes(): number;
        constructor(finalOutput: $GenericStack_, bytes: number, simulation: boolean, multiplePaths: boolean, usedItems: $KeyCounter, emittedItems: $KeyCounter, missingItems: $KeyCounter, patternTimes: $Map_<$IPatternDetails, number>);
    }
    /**
     * Values that may be interpreted as {@link $CraftingPlan}.
     */
    export type $CraftingPlan_ = { usedItems?: $KeyCounter, emittedItems?: $KeyCounter, multiplePaths?: boolean, bytes?: number, missingItems?: $KeyCounter, finalOutput?: $GenericStack_, simulation?: boolean, patternTimes?: $Map_<$IPatternDetails, number>,  } | [usedItems?: $KeyCounter, emittedItems?: $KeyCounter, multiplePaths?: boolean, bytes?: number, missingItems?: $KeyCounter, finalOutput?: $GenericStack_, simulation?: boolean, patternTimes?: $Map_<$IPatternDetails, number>, ];
    export class $CraftingTreeNode {
        constructor(arg0: $ICraftingService, arg1: $CraftingCalculation, arg2: $AEKey, arg3: number, arg4: $CraftingTreeProcess, arg5: number);
    }
    export class $CraftingCalculation {
        simulateFor(arg0: number): boolean;
        hasMultiplePaths(): boolean;
        getMissingItems(): $KeyCounter;
        getOutput(): $AEKey;
        run(): $ICraftingPlan;
        isSimulation(): boolean;
        constructor(arg0: $Level_, arg1: $IGrid, arg2: $ICraftingSimulationRequester_, arg3: $GenericStack_, arg4: $CalculationStrategy_);
        get missingItems(): $KeyCounter;
        get output(): $AEKey;
        get simulation(): boolean;
    }
    export class $CraftingLinkNexus {
        isDead(arg0: $IGrid, arg1: $CraftingService): boolean;
        getRequest(): $CraftingLink;
        isRequester(arg0: $ICraftingRequester): boolean;
        setRequest(arg0: $CraftingLink): void;
        removeNode(): void;
        constructor(arg0: $UUID_);
    }
    export class $CraftBranchFailure extends $Exception {
        constructor(arg0: $AEKey, arg1: number);
    }
    export class $CraftingEvent {
        static fireAutoCraftingEvent(arg0: $Level_, arg1: $IPatternDetails, arg2: $ItemStack_, arg3: $Container): void;
        constructor();
    }
}
