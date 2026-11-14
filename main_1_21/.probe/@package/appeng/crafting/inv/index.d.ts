import { $IPatternDetails } from "@package/appeng/api/crafting";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ListTag, $ListTag_ } from "@package/net/minecraft/nbt";
import { $IStorageService } from "@package/appeng/api/networking/storage";
import { $Actionable_ } from "@package/appeng/api/config";
import { $CraftingCalculation, $CraftingPlan } from "@package/appeng/crafting";
import { $Iterable } from "@package/java/lang";
import { $IActionSource } from "@package/appeng/api/networking/security";
import { $KeyCounter, $AEKey } from "@package/appeng/api/stacks";

declare module "@package/appeng/crafting/inv" {
    export class $CraftingSimulationState implements $ICraftingSimulationState {
        static buildCraftingPlan(arg0: $CraftingSimulationState, arg1: $CraftingCalculation, arg2: number): $CraftingPlan;
        emitItems(arg0: $AEKey, arg1: number): void;
        applyDiff(arg0: $CraftingSimulationState): void;
        findFuzzyTemplates(arg0: $AEKey): $Iterable<$AEKey>;
        addCrafting(arg0: $IPatternDetails, arg1: number): void;
        extract(arg0: $AEKey, arg1: number, arg2: $Actionable_): number;
        insert(arg0: $AEKey, arg1: number, arg2: $Actionable_): void;
        ignore(arg0: $AEKey): void;
        addBytes(arg0: number): void;
        addStackBytes(arg0: $AEKey, arg1: number, arg2: number): void;
    }
    export class $ChildCraftingSimulationState extends $CraftingSimulationState {
        constructor(arg0: $ICraftingInventory);
    }
    export class $NetworkCraftingSimulationState extends $CraftingSimulationState {
        constructor(arg0: $IStorageService, arg1: $IActionSource);
    }
    export class $ICraftingSimulationState {
    }
    export interface $ICraftingSimulationState extends $ICraftingInventory {
        addStackBytes(arg0: $AEKey, arg1: number, arg2: number): void;
        emitItems(arg0: $AEKey, arg1: number): void;
        addCrafting(arg0: $IPatternDetails, arg1: number): void;
        addBytes(arg0: number): void;
    }
    export class $ICraftingInventory {
    }
    export interface $ICraftingInventory {
        findFuzzyTemplates(arg0: $AEKey): $Iterable<$AEKey>;
        extract(arg0: $AEKey, arg1: number, arg2: $Actionable_): number;
        insert(arg0: $AEKey, arg1: number, arg2: $Actionable_): void;
    }
    export class $ListCraftingInventory implements $ICraftingInventory {
        writeToNBT(arg0: $HolderLookup$Provider): $ListTag;
        readFromNBT(arg0: $ListTag_, arg1: $HolderLookup$Provider): void;
        findFuzzyTemplates(arg0: $AEKey): $Iterable<$AEKey>;
        extract(arg0: $AEKey, arg1: number, arg2: $Actionable_): number;
        insert(arg0: $AEKey, arg1: number, arg2: $Actionable_): void;
        clear(): void;
        list: $KeyCounter;
        constructor(arg0: $ListCraftingInventory$ChangeListener_);
    }
    export class $ListCraftingInventory$ChangeListener {
    }
    export interface $ListCraftingInventory$ChangeListener {
        onChange(arg0: $AEKey): void;
    }
    /**
     * Values that may be interpreted as {@link $ListCraftingInventory$ChangeListener}.
     */
    export type $ListCraftingInventory$ChangeListener_ = ((arg0: $AEKey) => void);
}
