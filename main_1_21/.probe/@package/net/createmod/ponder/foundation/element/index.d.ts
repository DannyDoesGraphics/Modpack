import { $Supplier_, $Consumer_ } from "@package/java/util/function";
import { $PonderScene } from "@package/net/createmod/ponder/foundation";
import { $RenderType, $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $AnimatedSceneElement, $ParrotPose, $TrackedElement, $ParrotElement, $PonderElement } from "@package/net/createmod/ponder/api/element";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $PonderLevel } from "@package/net/createmod/ponder/api/level";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $ParrotElementAccessor } from "@package/dev/simulated_team/simulated/mixin/accessor";
import { $Parrot } from "@package/net/minecraft/world/entity/animal";

declare module "@package/net/createmod/ponder/foundation/element" {
    export class $PonderElementBase implements $PonderElement {
        setVisible(arg0: boolean): void;
        isVisible(): boolean;
        whileSkipping(arg0: $PonderScene): void;
        reset(arg0: $PonderScene): void;
        tick(arg0: $PonderScene): void;
        constructor();
    }
    export class $TrackedElementBase<T> extends $PonderElementBase implements $TrackedElement<T> {
        renderFirst(arg0: $PonderLevel, arg1: $MultiBufferSource_, arg2: $GuiGraphics, arg3: number): void;
        renderLayer(arg0: $PonderLevel, arg1: $MultiBufferSource_, arg2: $RenderType, arg3: $GuiGraphics, arg4: number): void;
        renderLast(arg0: $PonderLevel, arg1: $MultiBufferSource_, arg2: $GuiGraphics, arg3: number): void;
        ifPresent(arg0: $Consumer_<T>): void;
        isStillValid(arg0: T): boolean;
        constructor(arg0: T);
    }
    export class $ParrotElementImpl extends $AnimatedSceneElementBase implements $ParrotElement, $ParrotElementAccessor {
        setPositionOffset(arg0: $Vec3_, arg1: boolean): void;
        setRotation(arg0: $Vec3_, arg1: boolean): void;
        static create(arg0: $Vec3_, arg1: $Supplier_<$ParrotPose>): $ParrotElement;
        getPositionOffset(): $Vec3;
        getRotation(): $Vec3;
        setPose(arg0: $ParrotPose): void;
        getEntity(): $Parrot;
        set pose(value: $ParrotPose);
        get entity(): $Parrot;
    }
    export class $AnimatedSceneElementBase extends $PonderElementBase implements $AnimatedSceneElement {
        renderFirst(arg0: $PonderLevel, arg1: $MultiBufferSource_, arg2: $GuiGraphics, arg3: number): void;
        forceApplyFade(arg0: number): void;
        setFade(arg0: number): void;
        setFadeVec(arg0: $Vec3_): void;
        renderLayer(arg0: $PonderLevel, arg1: $MultiBufferSource_, arg2: $RenderType, arg3: $GuiGraphics, arg4: number): void;
        renderLast(arg0: $PonderLevel, arg1: $MultiBufferSource_, arg2: $GuiGraphics, arg3: number): void;
        constructor();
        set fade(value: number);
        set fadeVec(value: $Vec3_);
    }
}
