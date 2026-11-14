import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $SignalBlockEntity$SignalState_, $SignalBlockEntity$SignalState } from "@package/com/simibubi/create/content/trains/signal";
import { $Enum } from "@package/java/lang";
import { $Train } from "@package/com/simibubi/create/content/trains/entity";

declare module "@package/com/simibubi/create/compat/computercraft/events" {
    export class $KineticsChangeEvent implements $ComputerEvent {
        stress: number;
        overStressed: boolean;
        speed: number;
        capacity: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: boolean);
    }
    export class $SignalStateChangeEvent implements $ComputerEvent {
        state: $SignalBlockEntity$SignalState;
        constructor(arg0: $SignalBlockEntity$SignalState_);
    }
    export class $RepackageEvent implements $ComputerEvent {
        count: number;
        box: $ItemStack;
        constructor(arg0: $ItemStack_, arg1: number);
    }
    export class $ComputerEvent {
    }
    export interface $ComputerEvent {
    }
    export class $StationTrainPresenceEvent implements $ComputerEvent {
        type: $StationTrainPresenceEvent$Type;
        train: $Train;
        constructor(arg0: $StationTrainPresenceEvent$Type_, arg1: $Train);
    }
    export class $TrainPassEvent implements $ComputerEvent {
        passing: boolean;
        train: $Train;
        constructor(arg0: $Train, arg1: boolean);
    }
    export class $PackageEvent implements $ComputerEvent {
        box: $ItemStack;
        status: string;
        constructor(arg0: $ItemStack_, arg1: string);
    }
    export class $StationTrainPresenceEvent$Type extends $Enum<$StationTrainPresenceEvent$Type> {
        static values(): $StationTrainPresenceEvent$Type[];
        static valueOf(arg0: string): $StationTrainPresenceEvent$Type;
        static ARRIVAL: $StationTrainPresenceEvent$Type;
        static DEPARTURE: $StationTrainPresenceEvent$Type;
        static IMMINENT: $StationTrainPresenceEvent$Type;
    }
    /**
     * Values that may be interpreted as {@link $StationTrainPresenceEvent$Type}.
     */
    export type $StationTrainPresenceEvent$Type_ = "imminent" | "arrival" | "departure";
}
