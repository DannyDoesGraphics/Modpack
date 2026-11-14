import { $Train } from "@package/com/simibubi/create/content/trains/entity";

declare module "@package/com/railwayteam/railways/content/train_debug" {
    export class $TravellingPointVisualizer {
        static debugTrain(arg0: $Train): void;
        constructor();
    }
}
