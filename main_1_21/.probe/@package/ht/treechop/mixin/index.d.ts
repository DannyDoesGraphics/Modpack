import { $Consumer_ } from "@package/java/util/function";
import { $LootContextParamSet, $LootContextParamSet$Builder } from "@package/net/minecraft/world/level/storage/loot/parameters";

declare module "@package/ht/treechop/mixin" {
    export class $LootContextParamSetsAccess {
        static callRegister(arg0: string, arg1: $Consumer_<$LootContextParamSet$Builder>): $LootContextParamSet;
    }
    export interface $LootContextParamSetsAccess {
    }
}
