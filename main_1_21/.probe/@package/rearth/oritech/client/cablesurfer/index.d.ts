import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $AbstractTickableSoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $Record } from "@package/java/lang";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/rearth/oritech/client/cablesurfer" {
    export class $CableMath {
        static getAt(arg0: $Vec3_, arg1: $Vec3_, arg2: number): $Vec3;
        constructor();
    }
    export class $ActiveCableRenderer {
        static render(arg0: $PoseStack, arg1: $MultiBufferSource_): void;
        constructor();
    }
    export class $ClientCableFinder$RayResult extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ClientCableFinder$RayResult}.
     */
    export type $ClientCableFinder$RayResult_ = { distSq?: number, hitPos?: $Vec3_,  } | [distSq?: number, hitPos?: $Vec3_, ];
    export class $ZiplineFxHandler {
        static tick(): void;
        constructor();
    }
    export class $ClientCableFinder {
        static findLookedAtCable(arg0: $Player, arg1: number): $ClientCableFinder$CableHit;
        constructor();
    }
    export class $ClientCableFinder$CableHit extends $Record {
        selectedStart(): $Vec3;
        selectedEnd(): $Vec3;
        parallelStart(): $Vec3;
        parallelEnd(): $Vec3;
        poleA(): $BlockPos;
        poleB(): $BlockPos;
        constructor(poleA: $BlockPos_, poleB: $BlockPos_, selectedStart: $Vec3_, selectedEnd: $Vec3_, parallelStart: $Vec3_, parallelEnd: $Vec3_);
    }
    /**
     * Values that may be interpreted as {@link $ClientCableFinder$CableHit}.
     */
    export type $ClientCableFinder$CableHit_ = { selectedStart?: $Vec3_, selectedEnd?: $Vec3_, parallelStart?: $Vec3_, poleB?: $BlockPos_, poleA?: $BlockPos_, parallelEnd?: $Vec3_,  } | [selectedStart?: $Vec3_, selectedEnd?: $Vec3_, parallelStart?: $Vec3_, poleB?: $BlockPos_, poleA?: $BlockPos_, parallelEnd?: $Vec3_, ];
    export class $ClientZiplineHandler {
        static getEndPos(): $Vec3;
        static getParallelStart(): $Vec3;
        static getParallelEnd(): $Vec3;
        static getStartPos(): $Vec3;
        static isZiplining(arg0: $Player): boolean;
        static start(arg0: $Vec3_, arg1: $Vec3_, arg2: $Vec3_, arg3: $Vec3_, arg4: number): void;
        static onClientTick(): void;
        static HANG_OFFSET: number;
        constructor();
        static get endPos(): $Vec3;
        static get parallelStart(): $Vec3;
        static get parallelEnd(): $Vec3;
        static get startPos(): $Vec3;
    }
    export class $ZiplineSoundInstance extends $AbstractTickableSoundInstance {
        constructor(arg0: $Player);
    }
}
