import { $KeyMapping } from "@package/net/minecraft/client";
import { $Map } from "@package/java/util";

declare module "@package/dev/ftb/mods/ftbquests/mixin" {
    export class $KeyMappingMixin {
        static getAll(): $Map<string, $KeyMapping>;
        static get all(): $Map<string, $KeyMapping>;
    }
    export interface $KeyMappingMixin {
    }
}
