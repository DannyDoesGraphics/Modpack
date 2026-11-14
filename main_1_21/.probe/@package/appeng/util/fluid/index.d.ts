import { $Player } from "@package/net/minecraft/world/entity/player";
import { $AEFluidKey } from "@package/appeng/api/stacks";

declare module "@package/appeng/util/fluid" {
    export class $FluidSoundHelper {
        static playEmptySound(arg0: $Player, arg1: $AEFluidKey): void;
        static playFillSound(arg0: $Player, arg1: $AEFluidKey): void;
    }
}
