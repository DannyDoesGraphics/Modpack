import { $Record } from "@package/java/lang";
import { $Vector3dc } from "@package/org/joml";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/trigger" {
    export class $CameraMovement extends $Record {
        end(): $Vector3dc;
        start(): $Vector3dc;
        hasChanged(): boolean;
        constructor(start: $Vector3dc, end: $Vector3dc);
    }
    /**
     * Values that may be interpreted as {@link $CameraMovement}.
     */
    export type $CameraMovement_ = { end?: $Vector3dc, start?: $Vector3dc,  } | [end?: $Vector3dc, start?: $Vector3dc, ];
}
