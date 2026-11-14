import { $MediaPlayer } from "@package/org/watermedia/videolan4j/player/base";
import { $ByteBuffer } from "@package/java/nio";
import { $Chroma_, $Chroma } from "@package/org/watermedia/videolan4j/tools";

declare module "@package/org/watermedia/videolan4j/player/embedded/videosurface/callback" {
    export class $RenderCallbackAdapter implements $RenderCallback {
        display(arg0: $MediaPlayer, arg1: $ByteBuffer[], arg2: $BufferFormat): void;
        setBuffer(arg0: number[]): void;
        constructor(arg0: number[]);
        constructor();
        set buffer(value: number[]);
    }
    export class $BufferCleanupCallback {
    }
    export interface $BufferCleanupCallback {
        cleanupBuffers(arg0: $ByteBuffer[]): void;
    }
    /**
     * Values that may be interpreted as {@link $BufferCleanupCallback}.
     */
    export type $BufferCleanupCallback_ = ((arg0: $ByteBuffer[]) => void);
    export class $BufferFormatCallback {
    }
    export interface $BufferFormatCallback {
        allocatedBuffers(arg0: $ByteBuffer[]): void;
        getBufferFormat(arg0: number, arg1: number): $BufferFormat;
    }
    export class $RenderCallback {
    }
    export interface $RenderCallback {
        display(arg0: $MediaPlayer, arg1: $ByteBuffer[], arg2: $BufferFormat): void;
    }
    /**
     * Values that may be interpreted as {@link $RenderCallback}.
     */
    export type $RenderCallback_ = ((arg0: $MediaPlayer, arg1: $ByteBuffer[], arg2: $BufferFormat) => void);
    export class $BufferFormat {
        getPlaneCount(): number;
        getPitches(): number[];
        getChroma(): $Chroma;
        getLines(): number[];
        getWidth(): number;
        getHeight(): number;
        constructor(arg0: $Chroma_, arg1: number, arg2: number);
        get planeCount(): number;
        get pitches(): number[];
        get chroma(): $Chroma;
        get lines(): number[];
        get width(): number;
        get height(): number;
    }
    export class $BufferFormatCallbackAdapter implements $BufferFormatCallback {
        allocatedBuffers(arg0: $ByteBuffer[]): void;
        constructor();
    }
}
