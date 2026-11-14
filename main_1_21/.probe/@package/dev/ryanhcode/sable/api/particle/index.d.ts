import { $Vector3dc } from "@package/org/joml";

declare module "@package/dev/ryanhcode/sable/api/particle" {
    export class $ParticleSubLevelKickable {
    }
    export interface $ParticleSubLevelKickable {
        sable$shouldCareAboutIntersectingSubLevels(): boolean;
        sable$shouldCollideWithTrackingSubLevel(): boolean;
        sable$getUpDirection(): $Vector3dc;
        sable$shouldKickFromTracking(): boolean;
    }
}
