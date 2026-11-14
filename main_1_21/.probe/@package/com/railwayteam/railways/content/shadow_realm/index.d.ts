import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Logger } from "@package/org/slf4j";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $BezierTrackPointLocation_, $BezierTrackPointLocation } from "@package/com/simibubi/create/content/trains/track";
import { $RailwaySavedData } from "@package/com/simibubi/create/content/trains";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Record } from "@package/java/lang";
import { $UUID_, $UUID } from "@package/java/util";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $Train } from "@package/com/simibubi/create/content/trains/entity";

declare module "@package/com/railwayteam/railways/content/shadow_realm" {
    export class $ShadowRealm {
        static banishTrain(arg0: $Train, arg1: $ResourceLocation_): void;
        static restoreTrain(arg0: $RailwaySavedData, arg1: $Train, arg2: $ShadowRealm$RestorationTarget_): boolean;
        static handleTrainRelocationPacket(arg0: $ServerPlayer, arg1: $UUID_, arg2: $ShadowRealm$RestorationTarget_, arg3: $CallbackInfo): void;
        static MARKER: $UUID;
        static clientShadowRestoringTrainId: $UUID;
        static LOGGER: $Logger;
        static clientShadowRestoringTrain: $Train;
        constructor();
    }
    export class $ShadowRealm$RestorationTarget extends $Record {
        bezierDirection(): boolean;
        bezier(): $BezierTrackPointLocation;
        lookAngle(): $Vec3;
        apply(arg0: $Train): boolean;
        pos(): $BlockPos;
        level(): $Level;
        constructor(level: $Level_, pos: $BlockPos_, bezier: $BezierTrackPointLocation_, bezierDirection: boolean, lookAngle: $Vec3_);
    }
    /**
     * Values that may be interpreted as {@link $ShadowRealm$RestorationTarget}.
     */
    export type $ShadowRealm$RestorationTarget_ = { bezierDirection?: boolean, lookAngle?: $Vec3_, pos?: $BlockPos_, level?: $Level_, bezier?: $BezierTrackPointLocation_,  } | [bezierDirection?: boolean, lookAngle?: $Vec3_, pos?: $BlockPos_, level?: $Level_, bezier?: $BezierTrackPointLocation_, ];
}
