import { $BlockPos_ } from "@package/net/minecraft/core";
import { $KineticBlockEntity } from "@package/com/simibubi/create/content/kinetics/base";
export * as brasschute from "@package/com/hlysine/create_connected/mixin/brasschute";
export * as sequencedgearshift from "@package/com/hlysine/create_connected/mixin/sequencedgearshift";
export * as featuretoggle from "@package/com/hlysine/create_connected/mixin/featuretoggle";
export * as kineticbattery from "@package/com/hlysine/create_connected/mixin/kineticbattery";
export * as copycat from "@package/com/hlysine/create_connected/mixin/copycat";
export * as linkedtransmitter from "@package/com/hlysine/create_connected/mixin/linkedtransmitter";

declare module "@package/com/hlysine/create_connected/mixin" {
    export class $RotationPropagatorAccessor {
        static callFindConnectedNeighbour(arg0: $KineticBlockEntity, arg1: $BlockPos_): $KineticBlockEntity;
    }
    export interface $RotationPropagatorAccessor {
    }
}
