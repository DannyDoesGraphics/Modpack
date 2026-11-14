import { $Supplier_ } from "@package/java/util/function";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $BehaviourType, $BlockEntityBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";

declare module "@package/com/simibubi/create/foundation/blockEntity/behaviour/simple" {
    export class $DeferralBehaviour extends $BlockEntityBehaviour {
        scheduleUpdate(): void;
        blockEntity: $SmartBlockEntity;
        static TYPE: $BehaviourType<$DeferralBehaviour>;
        constructor(arg0: $SmartBlockEntity, arg1: $Supplier_<boolean>);
    }
}
