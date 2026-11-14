import { $Graphics2D } from "@package/java/awt";
import { $BufferedImage } from "@package/java/awt/image";
import { $JComponent } from "@package/javax/swing";

declare module "@package/org/watermedia/videolan4j/player/component/callback" {
    export class $CallbackImagePainter {
    }
    export interface $CallbackImagePainter {
        paint(arg0: $Graphics2D, arg1: $JComponent, arg2: $BufferedImage): void;
        prepare(arg0: $Graphics2D, arg1: $JComponent): void;
    }
    export class $FixedCallbackImagePainter implements $CallbackImagePainter {
        paint(arg0: $Graphics2D, arg1: $JComponent, arg2: $BufferedImage): void;
        prepare(arg0: $Graphics2D, arg1: $JComponent): void;
        constructor();
    }
    export class $FilledCallbackImagePainter implements $CallbackImagePainter {
        paint(arg0: $Graphics2D, arg1: $JComponent, arg2: $BufferedImage): void;
        prepare(arg0: $Graphics2D, arg1: $JComponent): void;
        constructor();
    }
    export class $ScaledCallbackImagePainter implements $CallbackImagePainter {
        paint(arg0: $Graphics2D, arg1: $JComponent, arg2: $BufferedImage): void;
        prepare(arg0: $Graphics2D, arg1: $JComponent): void;
        constructor();
    }
}
