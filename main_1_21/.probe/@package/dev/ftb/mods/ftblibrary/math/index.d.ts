import { $InputStream } from "@package/java/io";
import { $ByteBuffer } from "@package/java/nio";
import { $BufferedImage } from "@package/java/awt/image";

declare module "@package/dev/ftb/mods/ftblibrary/math" {
    export class $PixelBuffer {
        toImage(type: number): $BufferedImage;
        toByteBuffer(alpha: boolean): $ByteBuffer;
        fill(startX: number, startY: number, w: number, h: number, col: number): void;
        fill(col: number): void;
        static from(img: $BufferedImage): $PixelBuffer;
        static from(stream: $InputStream): $PixelBuffer;
        copy(): $PixelBuffer;
        getWidth(): number;
        getHeight(): number;
        getRGB(x: number, y: number): number;
        getRGB(startX: number, startY: number, w: number, h: number, p: number[]): number[];
        getPixels(): number[];
        setPixels(p: number[]): void;
        setRGB(startX: number, startY: number, buffer: $PixelBuffer): void;
        setRGB(startX: number, startY: number, w: number, h: number, rgbArray: number[]): void;
        setRGB(x: number, y: number, col: number): void;
        getSubimage(x: number, y: number, w: number, h: number): $PixelBuffer;
        constructor(w: number, h: number);
        get width(): number;
        get height(): number;
    }
}
