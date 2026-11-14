import { $Level } from "@package/net/minecraft/world/level";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $BlockFace } from "@package/net/createmod/catnip/math";
import { $Block, $Portal_ } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";

declare module "@package/com/simibubi/create/api/contraption/train" {
    export class $PortalTrackProvider {
        static fromPortal(arg0: $ServerLevel, arg1: $BlockFace, arg2: $ResourceKey_<$Level>, arg3: $ResourceKey_<$Level>, arg4: $Portal_): $PortalTrackProvider$Exit;
        static isSupportedPortal(arg0: $BlockState_): boolean;
        static getOtherSide(arg0: $ServerLevel, arg1: $BlockFace): $PortalTrackProvider$Exit;
        static REGISTRY: $SimpleRegistry<$Block, $PortalTrackProvider>;
    }
    export interface $PortalTrackProvider {
        findExit(arg0: $ServerLevel, arg1: $BlockFace): $PortalTrackProvider$Exit;
    }
    /**
     * Values that may be interpreted as {@link $PortalTrackProvider}.
     */
    export type $PortalTrackProvider_ = ((arg0: $ServerLevel, arg1: $BlockFace) => $PortalTrackProvider$Exit_);
    export class $PortalTrackProvider$Exit extends $Record {
        face(): $BlockFace;
        level(): $ServerLevel;
        constructor(level: $ServerLevel, face: $BlockFace);
    }
    /**
     * Values that may be interpreted as {@link $PortalTrackProvider$Exit}.
     */
    export type $PortalTrackProvider$Exit_ = { level?: $ServerLevel, face?: $BlockFace,  } | [level?: $ServerLevel, face?: $BlockFace, ];
}
