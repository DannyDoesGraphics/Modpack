import { $AnimationChannel$Target_, $AnimationChannel$Target } from "@package/net/minecraft/client/animation";
import { $Record } from "@package/java/lang";
import { $Vector3f } from "@package/org/joml";
export * as json from "@package/net/neoforged/neoforge/client/entity/animation/json";

declare module "@package/net/neoforged/neoforge/client/entity/animation" {
    export class $AnimationTarget extends $Record {
        keyframeTarget(): $AnimationKeyframeTarget;
        inverseKeyframeTarget(): $AnimationKeyframeTarget;
        channelTarget(): $AnimationChannel$Target;
        static ROTATION: $AnimationTarget;
        static POSITION: $AnimationTarget;
        static SCALE: $AnimationTarget;
        constructor(channelTarget: $AnimationChannel$Target_, keyframeTarget: $AnimationKeyframeTarget_, inverseKeyframeTarget: $AnimationKeyframeTarget_);
    }
    /**
     * Values that may be interpreted as {@link $AnimationTarget}.
     */
    export type $AnimationTarget_ = { inverseKeyframeTarget?: $AnimationKeyframeTarget_, keyframeTarget?: $AnimationKeyframeTarget_, channelTarget?: $AnimationChannel$Target_,  } | [inverseKeyframeTarget?: $AnimationKeyframeTarget_, keyframeTarget?: $AnimationKeyframeTarget_, channelTarget?: $AnimationChannel$Target_, ];
    /**
     * A function for transforming vectors into values that make sense to their keyframe's target.
     */
    export class $AnimationKeyframeTarget {
    }
    export interface $AnimationKeyframeTarget {
        apply(x: number, y: number, z: number): $Vector3f;
    }
    /**
     * Values that may be interpreted as {@link $AnimationKeyframeTarget}.
     */
    export type $AnimationKeyframeTarget_ = ((arg0: number, arg1: number, arg2: number) => $Vector3f);
}
