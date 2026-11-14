import { $KeyMapping } from "@package/net/minecraft/client";
import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";

declare module "@package/com/railwayteam/railways/util/client/neoforge" {
    export class $ClientUtilsImpl {
        static isActiveAndMatches(arg0: $KeyMapping, arg1: $InputConstants$Key): boolean;
        constructor();
    }
}
