import { $SubLevel, $ClientSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/dev/ryanhcode/sable/mixinterface/particle" {
    export class $ParticleExtension {
    }
    export interface $ParticleExtension {
        sable$initialKickOut(): void;
        sable$moveWithInheritedVelocity(): void;
        sable$setTrackingSubLevel(arg0: $ClientSubLevel, arg1: $Vec3_): void;
        sable$getTrackingSubLevel(): $SubLevel;
    }
}
