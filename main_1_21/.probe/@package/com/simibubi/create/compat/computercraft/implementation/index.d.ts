import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $Enum, $Record } from "@package/java/lang";
import { $List_, $Map_ } from "@package/java/util";
import { $BehaviourType } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
export * as luaObjects from "@package/com/simibubi/create/compat/computercraft/implementation/luaObjects";

declare module "@package/com/simibubi/create/compat/computercraft/implementation" {
    export class $ComputerBehaviour extends $AbstractComputerBehaviour {
        blockEntity: $SmartBlockEntity;
        static TYPE: $BehaviourType<$AbstractComputerBehaviour>;
    }
    export class $ComputerUtil {
    }
    export class $ComputerUtil$Collection extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ComputerUtil$Collection}.
     */
    export type $ComputerUtil$Collection_ = { mode?: $ComputerUtil$MatchMode, list?: $List_<never>, map?: $Map_<never, never>,  } | [mode?: $ComputerUtil$MatchMode, list?: $List_<never>, map?: $Map_<never, never>, ];
    export class $ComputerUtil$MatchMode extends $Enum<$ComputerUtil$MatchMode> {
    }
}
