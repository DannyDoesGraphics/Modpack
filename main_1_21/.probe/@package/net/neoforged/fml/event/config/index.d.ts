import { $Event } from "@package/net/neoforged/bus/api";
import { $ModConfig } from "@package/net/neoforged/fml/config";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";

declare module "@package/net/neoforged/fml/event/config" {
    export class $ModConfigEvent extends $Event implements $IModBusEvent {
        getConfig(): $ModConfig;
        get config(): $ModConfig;
    }
    export class $ModConfigEvent$Reloading extends $ModConfigEvent {
        constructor(arg0: $ModConfig);
    }
    export class $ModConfigEvent$Loading extends $ModConfigEvent {
        constructor(arg0: $ModConfig);
    }
}
