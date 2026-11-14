import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $Predicate_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Item_, $Item } from "@package/net/minecraft/world/item";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $List } from "@package/java/util";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BehaviourType, $ValueBoxTransform$Sided, $BlockEntityBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $PlayerInteractEvent$RightClickBlock } from "@package/net/neoforged/neoforge/event/entity/player";

declare module "@package/com/simibubi/create/foundation/blockEntity/behaviour/edgeInteraction" {
    export class $EdgeInteractionBehaviour$ConnectionCallback {
    }
    export interface $EdgeInteractionBehaviour$ConnectionCallback {
        apply(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockPos_): void;
    }
    /**
     * Values that may be interpreted as {@link $EdgeInteractionBehaviour$ConnectionCallback}.
     */
    export type $EdgeInteractionBehaviour$ConnectionCallback_ = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockPos) => void);
    export class $EdgeInteractionBehaviour$ConnectivityPredicate {
    }
    export interface $EdgeInteractionBehaviour$ConnectivityPredicate {
        test(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $Direction_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $EdgeInteractionBehaviour$ConnectivityPredicate}.
     */
    export type $EdgeInteractionBehaviour$ConnectivityPredicate_ = ((arg0: $Level, arg1: $BlockPos, arg2: $Direction, arg3: $Direction) => boolean);
    export class $EdgeInteractionBehaviour extends $BlockEntityBehaviour {
        connectivity(arg0: $EdgeInteractionBehaviour$ConnectivityPredicate_): $EdgeInteractionBehaviour;
        require(arg0: $Item_): $EdgeInteractionBehaviour;
        require(arg0: $Predicate_<$Item>): $EdgeInteractionBehaviour;
        blockEntity: $SmartBlockEntity;
        static TYPE: $BehaviourType<$EdgeInteractionBehaviour>;
        constructor(arg0: $SmartBlockEntity, arg1: $EdgeInteractionBehaviour$ConnectionCallback_);
    }
    export class $EdgeInteractionRenderer {
        static tick(): void;
        constructor();
    }
    export class $EdgeInteractionRenderer$EdgeValueBoxTransform extends $ValueBoxTransform$Sided {
    }
    export class $EdgeInteractionHandler {
        static onBlockActivated(arg0: $PlayerInteractEvent$RightClickBlock): void;
        static getConnectiveSides(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $EdgeInteractionBehaviour): $List<$Direction>;
        static getActivatedDirection(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $Vec3_, arg4: $EdgeInteractionBehaviour): $Direction;
        constructor();
    }
}
