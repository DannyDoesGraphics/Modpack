import { $AdvancementNode } from "@package/net/minecraft/advancements";
import { $Predicate_ } from "@package/java/util/function";
import { $Enum } from "@package/java/lang";

declare module "@package/net/minecraft/server/advancements" {
    export class $AdvancementVisibilityEvaluator$Output {
    }
    export interface $AdvancementVisibilityEvaluator$Output {
        accept(advancement: $AdvancementNode, visible: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $AdvancementVisibilityEvaluator$Output}.
     */
    export type $AdvancementVisibilityEvaluator$Output_ = ((arg0: $AdvancementNode, arg1: boolean) => void);
    export class $AdvancementVisibilityEvaluator {
        static evaluateVisibility(advancement: $AdvancementNode, predicate: $Predicate_<$AdvancementNode>, output: $AdvancementVisibilityEvaluator$Output_): void;
        static isVisible(arg0: $AdvancementNode, arg1: $Predicate_<$AdvancementNode>): boolean;
        constructor();
    }
    export class $AdvancementVisibilityEvaluator$VisibilityRule extends $Enum<$AdvancementVisibilityEvaluator$VisibilityRule> {
    }
    /**
     * Values that may be interpreted as {@link $AdvancementVisibilityEvaluator$VisibilityRule}.
     */
    export type $AdvancementVisibilityEvaluator$VisibilityRule_ = "show" | "hide" | "no_change";
}
