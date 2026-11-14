import { $BufferedInputStream, $InputStream } from "@package/java/io";
import { $Dimension } from "@package/java/awt";
import { $BufferedImage } from "@package/java/awt/image";

declare module "@package/org/watermedia/api/image/decoders" {
    export class $GifDecoder {
        getFrame(arg0: number): $BufferedImage;
        getFrameCount(): number;
        getDelayFrames(): number[];
        getLoopCount(): number;
        getFrameSize(): $Dimension;
        getDelay(arg0: number): number;
        read(arg0: $BufferedInputStream): number;
        read(arg0: number[]): number;
        read(arg0: $InputStream): number;
        read(arg0: string): number;
        getDuration(): number;
        getImage(): $BufferedImage;
        getFrames(): $BufferedImage[];
        getWidth(): number;
        getHeight(): number;
        static STATUS_OPEN_ERROR: number;
        static STATUS_FORMAT_ERROR: number;
        static STATUS_OK: number;
        constructor();
        get frameCount(): number;
        get delayFrames(): number[];
        get loopCount(): number;
        get frameSize(): $Dimension;
        get duration(): number;
        get image(): $BufferedImage;
        get frames(): $BufferedImage[];
        get width(): number;
        get height(): number;
    }
    export class $GifDecoder$GifFrame {
    }
}
