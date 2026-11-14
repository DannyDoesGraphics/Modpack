import { $Consumer_ } from "@package/java/util/function";
import { $MenuBase } from "@package/com/simibubi/create/foundation/gui/menu";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Class } from "@package/java/lang";
import { $BehaviourType, $BlockEntityBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";

declare module "@package/com/simibubi/create/foundation/blockEntity/behaviour/animatedContainer" {
    export class $AnimatedContainerBehaviour<M extends $MenuBase<$SmartBlockEntity>> extends $BlockEntityBehaviour {
        onOpenChanged(arg0: $Consumer_<boolean>): void;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        blockEntity: $SmartBlockEntity;
        openCount: number;
        static TYPE: $BehaviourType<$AnimatedContainerBehaviour<never>>;
        constructor(arg0: $SmartBlockEntity, arg1: $Class<M>);
    }
}
