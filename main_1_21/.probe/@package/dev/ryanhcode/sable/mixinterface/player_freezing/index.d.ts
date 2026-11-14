import { $UUID_, $UUID } from "@package/java/util";
import { $Vector3dc } from "@package/org/joml";

declare module "@package/dev/ryanhcode/sable/mixinterface/player_freezing" {
    export class $PlayerFreezeExtension {
    }
    export interface $PlayerFreezeExtension {
        sable$getFrozenToSubLevel(): $UUID;
        sable$getFrozenToSubLevelAnchor(): $Vector3dc;
        sable$tickStopFreezing(): void;
        sable$teleport(): void;
        sable$freezeTo(arg0: $UUID_, arg1: $Vector3dc): void;
    }
}
