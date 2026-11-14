import { $Event } from "@package/net/neoforged/bus/api";

declare module "@package/com/railwayteam/railways/api/bogeymenu/v0/neoforge" {
    export class $BogeyMenuEvents$EntryRegistrationEvent extends $Event {
        constructor();
    }
    export class $BogeyMenuEvents {
        constructor();
    }
}
