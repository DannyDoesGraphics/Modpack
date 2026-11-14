import { $ScrollTransformedInstance } from "@package/com/simibubi/create/content/processing/burner";
import { $Instance } from "@package/dev/engine_room/flywheel/api/instance";
import { $Affine } from "@package/dev/engine_room/flywheel/lib/transform";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $BogeyVisualizer, $BogeyVisual, $BogeyRenderer } from "@package/com/simibubi/create/content/trains/bogey";
import { $List_ } from "@package/java/util";
import { $TransformedInstance } from "@package/dev/engine_room/flywheel/lib/instance";
import { $Consumer_ } from "@package/java/util/function";
import { $Direction_, $Vec3i, $Direction$Axis_ } from "@package/net/minecraft/core";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Record } from "@package/java/lang";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";
import { $Axis_ } from "@package/com/mojang/math";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BogeyDisplay, $BogeyDisplayHolder, $ScrollHandle, $BogeyDisplay$Factory_, $ElementProvider, $BogeyDisplay_ } from "@package/com/railwayteam/railways/content/custom_bogeys/renderer/unified";
import { $AxisAngle4f, $Vector3fc, $Vector3ic, $Quaternionfc } from "@package/org/joml";

declare module "@package/com/railwayteam/railways/content/custom_bogeys/renderer/unified/impl" {
    export class $RenderedElement$Single extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $RenderedElement$Single}.
     */
    export type $RenderedElement$Single_ = { element?: $RenderedElement, model?: $PartialModel,  } | [element?: $RenderedElement, model?: $PartialModel, ];
    export class $RenderedElement implements $Affine<$RenderedElement> {
        rotateZCenteredDegrees(degrees: number): $RenderedElement;
        rotateXCenteredDegrees(degrees: number): $RenderedElement;
        rotateYCenteredDegrees(degrees: number): $RenderedElement;
        rotateCentered(radians: number, axis: $Vector3fc): $RenderedElement;
        rotateCentered(radians: number, axis: $Direction$Axis_): $RenderedElement;
        rotateCentered(radians: number, axis: $Direction_): $RenderedElement;
        rotateCentered(q: $Quaternionfc): $RenderedElement;
        rotateCentered(radians: number, axisX: number, axisY: number, axisZ: number): $RenderedElement;
        rotateCentered(radians: number, axis: $Axis_): $RenderedElement;
        rotateXCentered(radians: number): $RenderedElement;
        rotateYCentered(radians: number): $RenderedElement;
        rotateZCentered(radians: number): $RenderedElement;
        rotateCenteredDegrees(degrees: number, axis: $Direction$Axis_): $RenderedElement;
        rotateCenteredDegrees(degrees: number, axisX: number, axisY: number, axisZ: number): $RenderedElement;
        rotateCenteredDegrees(degrees: number, axis: $Axis_): $RenderedElement;
        rotateCenteredDegrees(degrees: number, axis: $Vector3fc): $RenderedElement;
        rotateCenteredDegrees(degrees: number, axis: $Direction_): $RenderedElement;
        rotateAround(quaternion: $Quaternionfc, x: number, y: number, z: number): $RenderedElement;
        rotateAround(quaternion: $Quaternionfc, vec: $Vector3fc): $RenderedElement;
        translateZ(z: number): $RenderedElement;
        translateX(x: number): $RenderedElement;
        nudge(seed: number): $RenderedElement;
        translateBack(vec: $Vec3i): $RenderedElement;
        translateBack(v: number): $RenderedElement;
        translateBack(x: number, y: number, z: number): $RenderedElement;
        translateBack(x: number, y: number, z: number): $RenderedElement;
        translateBack(vec: $Vec3_): $RenderedElement;
        translateBack(vec: $Vector3ic): $RenderedElement;
        translateBack(vec: $Vector3fc): $RenderedElement;
        uncenter(): $RenderedElement;
        translateY(y: number): $RenderedElement;
        center(): $RenderedElement;
        translate(v: number): $RenderedElement;
        translate(x: number, y: number, z: number): $RenderedElement;
        translate(vec: $Vec3_): $RenderedElement;
        translate(vec: $Vector3fc): $RenderedElement;
        translate(vec: $Vector3ic): $RenderedElement;
        translate(vec: $Vec3i): $RenderedElement;
        rotateDegrees(degrees: number, axis: $Vector3fc): $RenderedElement;
        rotateDegrees(degrees: number, axis: $Direction_): $RenderedElement;
        rotateDegrees(degrees: number, axisX: number, axisY: number, axisZ: number): $RenderedElement;
        rotateDegrees(degrees: number, axis: $Axis_): $RenderedElement;
        rotateDegrees(degrees: number, axis: $Direction$Axis_): $RenderedElement;
        rotateYDegrees(degrees: number): $RenderedElement;
        rotateZDegrees(degrees: number): $RenderedElement;
        rotateToFace(facing: $Direction_): $RenderedElement;
        rotateXDegrees(degrees: number): $RenderedElement;
        self(): $RenderedElement;
        rotate(radians: number, axis: $Vector3fc): $RenderedElement;
        rotate(radians: number, axis: $Axis_): $RenderedElement;
        rotate(radians: number, axisX: number, axisY: number, axisZ: number): $RenderedElement;
        rotate(axisAngle: $AxisAngle4f): $RenderedElement;
        rotate(radians: number, axis: $Direction$Axis_): $RenderedElement;
        rotate(radians: number, axis: $Direction_): $RenderedElement;
        rotateX(radians: number): $RenderedElement;
        rotateY(radians: number): $RenderedElement;
        rotateZ(radians: number): $RenderedElement;
        rotateTo(from: $Vector3fc, to: $Vector3fc): $RenderedElement;
        rotateTo(from: $Direction_, to: $Direction_): $RenderedElement;
        rotateTo(fromX: number, fromY: number, fromZ: number, toX: number, toY: number, toZ: number): $RenderedElement;
        scaleX(factor: number): $RenderedElement;
        scaleY(factor: number): $RenderedElement;
        scaleZ(factor: number): $RenderedElement;
        scale(factors: $Vector3fc): $RenderedElement;
        scale(factor: number): $RenderedElement;
    }
    export class $VisualElementProvider implements $ElementProvider<$TransformedInstance> {
        create(arg0: $PartialModel, ...arg1: $Affine<never>[][]): void;
    }
    export class $UnifiedBogeyVisual implements $BogeyVisual, $BogeyDisplayHolder {
        hide(): void;
        collectCrumblingInstances(arg0: $Consumer_<$Instance>): void;
        runWithDisplay(arg0: $Consumer_<$BogeyDisplay>): void;
        updateLight(arg0: number): void;
        update(arg0: $CompoundTag_, arg1: number, arg2: $PoseStack): void;
        "delete"(): void;
        static create(arg0: $BogeyDisplay$Factory_): $BogeyVisualizer;
    }
    export class $UnifiedBogeyRenderer implements $BogeyRenderer, $BogeyDisplayHolder {
        runWithDisplay(arg0: $Consumer_<$BogeyDisplay>): void;
        render(arg0: $CompoundTag_, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number, arg6: number, arg7: boolean): void;
        constructor(arg0: $BogeyDisplay$Factory_);
    }
    export class $UnifiedBogeyRenderer$Renderer extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $UnifiedBogeyRenderer$Renderer}.
     */
    export type $UnifiedBogeyRenderer$Renderer_ = { display?: $BogeyDisplay_, allElements?: $List_<$RenderedElement>, singleElements?: $List_<$RenderedElement$Single_>, multipleElements?: $List_<$RenderedElement$Multiple_>, scrollingElements?: $List_<$RenderedElement$Scrolling>,  } | [display?: $BogeyDisplay_, allElements?: $List_<$RenderedElement>, singleElements?: $List_<$RenderedElement$Single_>, multipleElements?: $List_<$RenderedElement$Multiple_>, scrollingElements?: $List_<$RenderedElement$Scrolling>, ];
    export class $RenderedElementProvider implements $ElementProvider<$RenderedElement> {
        create(arg0: $PartialModel, ...arg1: $Affine<never>[][]): void;
    }
    export class $RenderedElement$Multiple extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $RenderedElement$Multiple}.
     */
    export type $RenderedElement$Multiple_ = { elements?: $RenderedElement[], model?: $PartialModel,  } | [elements?: $RenderedElement[], model?: $PartialModel, ];
    export class $RenderedElement$Scrolling implements $ScrollHandle {
    }
    export class $VisualElementProvider$VisualScrollHandle extends $Record implements $ScrollHandle {
    }
    /**
     * Values that may be interpreted as {@link $VisualElementProvider$VisualScrollHandle}.
     */
    export type $VisualElementProvider$VisualScrollHandle_ = { instance?: $ScrollTransformedInstance,  } | [instance?: $ScrollTransformedInstance, ];
}
