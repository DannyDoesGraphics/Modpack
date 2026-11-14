import { $ModConfigEvent$Loading, $ModConfigEvent$Reloading } from "@package/net/neoforged/fml/event/config";
import { $ModContainer } from "@package/net/neoforged/fml";

declare module "@package/com/railwayteam/railways/config/neoforge" {
    export class $CRConfigsImpl {
        static register(arg0: $ModContainer): void;
        static onLoad(arg0: $ModConfigEvent$Loading): void;
        static onReload(arg0: $ModConfigEvent$Reloading): void;
        constructor();
    }
}
