import { $Rect2i } from "@package/net/minecraft/client/renderer";
import { $Enum } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $ITickTimer } from "@package/mezz/jei/api/gui";

declare module "@package/mezz/jei/api/gui/drawable" {
    export class $TilingDirection extends $Enum<$TilingDirection> {
        static values(): $TilingDirection[];
        static valueOf(arg0: string): $TilingDirection;
        static UP_RIGHT: $TilingDirection;
        static DOWN_RIGHT: $TilingDirection;
        static DOWN_LEFT: $TilingDirection;
        static UP_LEFT: $TilingDirection;
    }
    /**
     * Values that may be interpreted as {@link $TilingDirection}.
     */
    export type $TilingDirection_ = "down_right" | "down_left" | "up_right" | "up_left";
    export class $IDrawableAnimated {
    }
    export interface $IDrawableAnimated extends $IDrawable {
    }
    export class $IDrawableAnimated$StartDirection extends $Enum<$IDrawableAnimated$StartDirection> {
        static values(): $IDrawableAnimated$StartDirection[];
        static valueOf(arg0: string): $IDrawableAnimated$StartDirection;
        static TOP: $IDrawableAnimated$StartDirection;
        static LEFT: $IDrawableAnimated$StartDirection;
        static RIGHT: $IDrawableAnimated$StartDirection;
        static BOTTOM: $IDrawableAnimated$StartDirection;
    }
    /**
     * Values that may be interpreted as {@link $IDrawableAnimated$StartDirection}.
     */
    export type $IDrawableAnimated$StartDirection_ = "top" | "bottom" | "left" | "right";
    export class $IDrawableBuilder {
    }
    export interface $IDrawableBuilder {
        buildAnimated(arg0: $ITickTimer, arg1: $IDrawableAnimated$StartDirection_): $IDrawableAnimated;
        buildAnimated(arg0: number, arg1: $IDrawableAnimated$StartDirection_, arg2: boolean): $IDrawableAnimated;
        setTextureSize(arg0: number, arg1: number): $IDrawableBuilder;
        trim(arg0: number, arg1: number, arg2: number, arg3: number): $IDrawableBuilder;
        build(): $IDrawableStatic;
        addPadding(arg0: number, arg1: number, arg2: number, arg3: number): $IDrawableBuilder;
    }
    export class $IScalableDrawable {
    }
    export interface $IScalableDrawable {
        draw(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
        draw(arg0: $GuiGraphics, arg1: $Rect2i): void;
    }
    /**
     * Values that may be interpreted as {@link $IScalableDrawable}.
     */
    export type $IScalableDrawable_ = ((arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number) => void);
    export class $IDrawable {
    }
    export interface $IDrawable {
        draw(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        draw(arg0: $GuiGraphics): void;
        getWidth(): number;
        getHeight(): number;
        get width(): number;
        get height(): number;
    }
    export class $IDrawableStatic {
    }
    export interface $IDrawableStatic extends $IDrawable {
        draw(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
    }
}
