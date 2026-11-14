import { $IEventBus } from "@package/net/neoforged/bus/api";

declare module "@package/com/simibubi/create/compat/ftb" {
    export class $FTBIntegration {
        static init(arg0: $IEventBus, arg1: $IEventBus): void;
        constructor();
    }
}
