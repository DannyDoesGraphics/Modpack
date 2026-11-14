import { $Enum } from "@package/java/lang";

declare module "@package/mezz/jei/api/gui/placement" {
    export class $IPlaceable<THIS extends $IPlaceable<THIS>> {
    }
    export interface $IPlaceable<THIS extends $IPlaceable<THIS>> {
        setPosition(arg0: number, arg1: number): THIS;
        setPosition(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $HorizontalAlignment_, arg5: $VerticalAlignment_): THIS;
        getWidth(): number;
        getHeight(): number;
        get width(): number;
        get height(): number;
    }
    export class $VerticalAlignment extends $Enum<$VerticalAlignment> {
        getYPos(arg0: number, arg1: number): number;
        static values(): $VerticalAlignment[];
        static valueOf(arg0: string): $VerticalAlignment;
        static CENTER: $VerticalAlignment;
        static TOP: $VerticalAlignment;
        static BOTTOM: $VerticalAlignment;
    }
    /**
     * Values that may be interpreted as {@link $VerticalAlignment}.
     */
    export type $VerticalAlignment_ = "top" | "center" | "bottom";
    export class $HorizontalAlignment extends $Enum<$HorizontalAlignment> {
        getXPos(arg0: number, arg1: number): number;
        static values(): $HorizontalAlignment[];
        static valueOf(arg0: string): $HorizontalAlignment;
        static CENTER: $HorizontalAlignment;
        static LEFT: $HorizontalAlignment;
        static RIGHT: $HorizontalAlignment;
    }
    /**
     * Values that may be interpreted as {@link $HorizontalAlignment}.
     */
    export type $HorizontalAlignment_ = "left" | "center" | "right";
}
