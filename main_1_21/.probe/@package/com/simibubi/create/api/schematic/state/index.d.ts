import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/api/schematic/state" {
    export class $SchematicStateFilterRegistry$StateFilter {
    }
    export interface $SchematicStateFilterRegistry$StateFilter {
        filterStates(arg0: $BlockEntity, arg1: $BlockState_): $BlockState;
    }
    /**
     * Values that may be interpreted as {@link $SchematicStateFilterRegistry$StateFilter}.
     */
    export type $SchematicStateFilterRegistry$StateFilter_ = ((arg0: $BlockEntity, arg1: $BlockState) => $BlockState_);
    export class $SchematicStateFilter {
    }
    export interface $SchematicStateFilter {
        filterStates(arg0: $BlockEntity, arg1: $BlockState_): $BlockState;
    }
    /**
     * Values that may be interpreted as {@link $SchematicStateFilter}.
     */
    export type $SchematicStateFilter_ = ((arg0: $BlockEntity, arg1: $BlockState) => $BlockState_);
    export class $SchematicStateFilterRegistry {
        static REGISTRY: $SimpleRegistry<$Block, $SchematicStateFilterRegistry$StateFilter>;
    }
}
