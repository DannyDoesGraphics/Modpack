import { $Marker } from "@package/org/apache/logging/log4j";
import { $WaterMediaAPI } from "@package/org/watermedia/api";
import { $ByteBuffer } from "@package/java/nio";
import { $BufferedImage } from "@package/java/awt/image";

declare module "@package/org/watermedia/api/render" {
    export class $RenderAPI extends $WaterMediaAPI {
        static getImageBuffer(arg0: $BufferedImage): $ByteBuffer;
        static getImageBuffer(arg0: $BufferedImage[]): $ByteBuffer[];
        static uploadBuffer(arg0: $ByteBuffer, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): void;
        static freeByteBuffer(arg0: $ByteBuffer): void;
        static downloadBuffer(arg0: number, arg1: number, arg2: number): $ByteBuffer;
        static formatToArgb(arg0: $BufferedImage): $BufferedImage;
        static resizeByteBuffer(arg0: $ByteBuffer, arg1: number): $ByteBuffer;
        static createByteBuffer(arg0: number, arg1: number): $ByteBuffer;
        /**
         * @deprecated
         */
        static createByteBuffer(arg0: number): $ByteBuffer;
        static deleteTexture(arg0: number[]): void;
        static deleteTexture(arg0: number): void;
        static bindTexture(): void;
        static bindTexture(arg0: number): void;
        static createTexture(): number;
        static NULL: number;
        static ADVANCED_LWJGL: boolean;
        static IT: $Marker;
        static NONE: number;
        constructor();
    }
}
