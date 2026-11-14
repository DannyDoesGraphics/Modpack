import { $BlockItem } from "@package/net/minecraft/world/item";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $BlockStateExtension } from "@package/dev/ryanhcode/sable/mixinterface/block_properties";
import { $Comparable, $Record } from "@package/java/lang";

declare module "@package/dev/simulated_team/simulated/client" {
    export interface $BlockPropertiesTooltip$Entry extends RegistryMarked<RegistryTypes.SimulatedPropertyTooltipTag, RegistryTypes.SimulatedPropertyTooltip> {}
    export class $BlockPropertiesTooltip$Entry extends $Record implements $Comparable<$BlockPropertiesTooltip$Entry> {
        tooltipFunction(): $BlockPropertiesTooltip$TooltipFunction;
        priority(): number;
        compareTo(arg0: $BlockPropertiesTooltip$Entry_): number;
        constructor(tooltipFunction: $BlockPropertiesTooltip$TooltipFunction_, priority: number);
    }
    /**
     * Values that may be interpreted as {@link $BlockPropertiesTooltip$Entry}.
     */
    export type $BlockPropertiesTooltip$Entry_ = RegistryTypes.SimulatedPropertyTooltip | { priority?: number, tooltipFunction?: $BlockPropertiesTooltip$TooltipFunction_,  } | [priority?: number, tooltipFunction?: $BlockPropertiesTooltip$TooltipFunction_, ];
    export class $BlockPropertiesTooltip$TooltipFunction {
    }
    export interface $BlockPropertiesTooltip$TooltipFunction {
        apply(arg0: $BlockStateExtension, arg1: $BlockItem, arg2: boolean): $Component;
    }
    /**
     * Values that may be interpreted as {@link $BlockPropertiesTooltip$TooltipFunction}.
     */
    export type $BlockPropertiesTooltip$TooltipFunction_ = ((arg0: $BlockStateExtension, arg1: $BlockItem, arg2: boolean) => $Component_);
}
