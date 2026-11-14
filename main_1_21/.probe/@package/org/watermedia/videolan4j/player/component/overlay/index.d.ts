import { $GraphicsConfiguration, $Window } from "@package/java/awt";
import { $JWindow } from "@package/javax/swing";

declare module "@package/org/watermedia/videolan4j/player/component/overlay" {
    export class $AbstractJWindowOverlayComponent extends $JWindow {
        static CENTER_ALIGNMENT: number;
        static LEFT_ALIGNMENT: number;
        static BOTTOM_ALIGNMENT: number;
        static RIGHT_ALIGNMENT: number;
        static TOP_ALIGNMENT: number;
        constructor(arg0: $Window);
        constructor(arg0: $Window, arg1: $GraphicsConfiguration);
    }
}
