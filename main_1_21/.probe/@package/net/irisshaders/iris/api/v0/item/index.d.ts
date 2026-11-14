import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Vector3f } from "@package/org/joml";

declare module "@package/net/irisshaders/iris/api/v0/item" {
    export class $IrisItemLightProvider {
        static DEFAULT_LIGHT_COLOR: $Vector3f;
    }
    export interface $IrisItemLightProvider {
        getLightColor(arg0: $Player, arg1: $ItemStack_): $Vector3f;
        getLightEmission(arg0: $Player, arg1: $ItemStack_): number;
    }
}
