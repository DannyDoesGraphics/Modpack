import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $Map } from "@package/java/util";

declare module "@package/net/pinkcats/createlazytick/mixin/OptElement/crafter" {
    export class $CrafterAccessor {
    }
    export interface $CrafterAccessor {
        getGrid(): $Map<$Pair<number, number>, $ItemStack>;
        getMinX(): number;
        getMinY(): number;
        get grid(): $Map<$Pair<number, number>, $ItemStack>;
        get minX(): number;
        get minY(): number;
    }
}
