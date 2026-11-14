import { $DefaultMountedDispenseBehavior, $MountedDispenseBehavior } from "@package/com/simibubi/create/api/contraption/dispenser";
import { $Item, $Item_ } from "@package/net/minecraft/world/item";
import { $SimpleRegistry$Provider } from "@package/com/simibubi/create/api/registry";
import { $Runnable_, $Enum } from "@package/java/lang";

declare module "@package/com/simibubi/create/impl/contraption/dispenser" {
    export class $DispenserBehaviorConverter$FallbackBehavior extends $DefaultMountedDispenseBehavior {
        static INSTANCE: $MountedDispenseBehavior;
    }
    export class $DispenserBehaviorConverter extends $Enum<$DispenserBehaviorConverter> implements $SimpleRegistry$Provider<$Item, $MountedDispenseBehavior> {
        get(arg0: $Item_): $MountedDispenseBehavior;
        static values(): $DispenserBehaviorConverter[];
        static valueOf(arg0: string): $DispenserBehaviorConverter;
        onRegister(arg0: $Runnable_): void;
        static INSTANCE: $DispenserBehaviorConverter;
    }
    /**
     * Values that may be interpreted as {@link $DispenserBehaviorConverter}.
     */
    export type $DispenserBehaviorConverter_ = "instance";
}
