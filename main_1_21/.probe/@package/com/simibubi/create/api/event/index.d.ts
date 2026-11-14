import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $Consumer_ } from "@package/java/util/function";
import { $TrackGraph } from "@package/com/simibubi/create/content/trains/graph";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Event } from "@package/net/neoforged/bus/api";
import { $Fluid_, $Fluid } from "@package/net/minecraft/world/level/material";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Map_ } from "@package/java/util";
import { $BehaviourType, $BlockEntityBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $BlockEntityType_ } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/api/event" {
    export class $BlockEntityBehaviourEvent extends $Event {
        remove(arg0: $BehaviourType<never>): $BlockEntityBehaviour;
        attach(arg0: $BlockEntityBehaviour): void;
        forType<T extends $SmartBlockEntity>(arg0: $BlockEntityType_<T>, arg1: $Consumer_<T>): void;
        constructor(arg0: $SmartBlockEntity, arg1: $Map_<$BehaviourType<never>, $BlockEntityBehaviour>);
    }
    export class $TrackGraphMergeEvent extends $Event {
        getGraphMergedInto(): $TrackGraph;
        getGraphMergedFrom(): $TrackGraph;
        constructor(arg0: $TrackGraph, arg1: $TrackGraph);
        get graphMergedInto(): $TrackGraph;
        get graphMergedFrom(): $TrackGraph;
    }
    export class $PipeCollisionEvent$Spill extends $PipeCollisionEvent {
        getPipeFluid(): $Fluid;
        getWorldFluid(): $Fluid;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $Fluid_, arg3: $Fluid_, arg4: $BlockState_);
        get pipeFluid(): $Fluid;
        get worldFluid(): $Fluid;
    }
    export class $PipeCollisionEvent extends $Event {
        getPos(): $BlockPos;
        getState(): $BlockState;
        setState(arg0: $BlockState_): void;
        getLevel(): $Level;
        get pos(): $BlockPos;
        get level(): $Level;
    }
    export class $PipeCollisionEvent$Flow extends $PipeCollisionEvent {
        getFirstFluid(): $Fluid;
        getSecondFluid(): $Fluid;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $Fluid_, arg3: $Fluid_, arg4: $BlockState_);
        get firstFluid(): $Fluid;
        get secondFluid(): $Fluid;
    }
}
