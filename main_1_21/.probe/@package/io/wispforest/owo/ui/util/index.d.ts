import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $CursorStyle_, $Component$FocusSource_, $ParentComponent, $Component$FocusSource, $Component } from "@package/io/wispforest/owo/ui/core";
import { $Window } from "@package/com/mojang/blaze3d/platform";
import { $Matrix4f, $Quaternionf } from "@package/org/joml";

declare module "@package/io/wispforest/owo/ui/util" {
    export class $FocusHandler {
        updateClickFocus(mouseX: number, mouseY: number): void;
        moveFocus(keyCode: number): void;
        lastFocusSource(): $Component$FocusSource;
        focus(component: $Component, source: $Component$FocusSource_): void;
        cycle(forwards: boolean): void;
        focused(): $Component;
        constructor(root: $ParentComponent);
    }
    export class $MatrixStackTransformer {
    }
    export interface $MatrixStackTransformer {
        scale(x: number, y: number, z: number): $MatrixStackTransformer;
        multiply(quaternion: $Quaternionf): $MatrixStackTransformer;
        multiply(quaternion: $Quaternionf, originX: number, originY: number, originZ: number): $MatrixStackTransformer;
        push(): $MatrixStackTransformer;
        pop(): $MatrixStackTransformer;
        translate(x: number, y: number, z: number): $MatrixStackTransformer;
        translate(x: number, y: number, z: number): $MatrixStackTransformer;
        getMatrixStack(): $PoseStack;
        multiplyPositionMatrix(matrix: $Matrix4f): $MatrixStackTransformer;
        get matrixStack(): $PoseStack;
    }
    export class $CursorAdapter {
        static ofWindow(window: $Window): $CursorAdapter;
        static ofWindow(windowHandle: number): $CursorAdapter;
        static ofClientWindow(): $CursorAdapter;
        dispose(): void;
        applyStyle(style: $CursorStyle_): void;
    }
}
