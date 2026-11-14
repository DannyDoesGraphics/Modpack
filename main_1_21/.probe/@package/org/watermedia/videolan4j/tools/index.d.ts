import { $File } from "@package/java/io";
import { $Pointer } from "@package/com/sun/jna";
import { $BiFunction_, $Consumer_ } from "@package/java/util/function";
import { $libvlc_media_stats_t } from "@package/org/watermedia/videolan4j/binding/internal";
import { $Path_ } from "@package/java/nio/file";
import { $Pattern } from "@package/java/util/regex";
import { $Comparable, $Enum } from "@package/java/lang";
import { $Buffer, $ByteBuffer } from "@package/java/nio";

declare module "@package/org/watermedia/videolan4j/tools" {
    export class $NativeBuffer {
        pointer(): $Pointer;
        buffer(): $ByteBuffer;
        constructor(arg0: $ByteBuffer, arg1: $Pointer);
    }
    export class $Buffers {
        static alloc(arg0: number): $ByteBuffer;
        static setBufferAllocator(arg0: $BiFunction_<number, number, $ByteBuffer>): void;
        static setBufferDeallocator(arg0: $Consumer_<$ByteBuffer>): void;
        static dealloc(arg0: $ByteBuffer): void;
        static address(arg0: $Buffer): number;
        static address(arg0: $ByteBuffer): number;
        static isUnaligned(arg0: number): boolean;
        constructor();
        static set bufferAllocator(value: $BiFunction_<number, number, $ByteBuffer>);
        static set bufferDeallocator(value: $Consumer_<$ByteBuffer>);
    }
    export class $Version implements $Comparable<$Version> {
        atLeast(arg0: $Version): boolean;
        compareTo(arg0: $Version): number;
        inRange(arg0: $Version, arg1: $Version): boolean;
        major: number;
        minor: number;
        extra: string;
        version: string;
        revision: number;
        constructor(arg0: string);
    }
    export class $Chroma extends $Enum<$Chroma> {
        chroma(): number[];
        getPitches(arg0: number): number[];
        static values(): $Chroma[];
        static valueOf(arg0: string): $Chroma;
        getLines(arg0: number): number[];
        static YUYV: $Chroma;
        static UYVY: $Chroma;
        static GRAW: $Chroma;
        static Rv24: $Chroma;
        static RGBA: $Chroma;
        static RV32: $Chroma;
        static I420: $Chroma;
        static NV12: $Chroma;
    }
    /**
     * Values that may be interpreted as {@link $Chroma}.
     */
    export type $Chroma_ = "rgba" | "rv32" | "rv24" | "yuyv" | "uyvy" | "graw" | "nv12" | "i420";
    export class $Tools {
        static getRealFile(arg0: $Path_): $File;
        static readStringSafe(arg0: $Path_): string;
        static toArray<T>(...arg0: T[]): T[];
        static concat<T>(arg0: T[], arg1: T[]): T[];
        static patterns(...arg0: string[]): $Pattern[];
        constructor();
    }
    export class $MediaStats {
        sentPackets(): number;
        inputBytesRead(): number;
        inputBitrate(): number;
        demuxBytesRead(): number;
        demuxBitrate(): number;
        demuxCorrupted(): number;
        demuxDiscontinuity(): number;
        decodedVideo(): number;
        decodedAudio(): number;
        picturesDisplayed(): number;
        picturesLost(): number;
        audioBuffersPlayed(): number;
        audioBuffersLost(): number;
        sendBitrate(): number;
        constructor(arg0: $libvlc_media_stats_t);
    }
    export class $AudioFormat extends $Enum<$AudioFormat> {
        getFormatName(): string;
        calculateBufferSize(arg0: number): number;
        getSampleRate(): number;
        getBitsPerSample(): number;
        static values(): $AudioFormat[];
        static valueOf(arg0: string): $AudioFormat;
        getChannelCount(): number;
        static S32N_SURROUND_48: $AudioFormat;
        static FL32_MONO_48: $AudioFormat;
        static FL32_MONO_44: $AudioFormat;
        static S32N_STEREO_96: $AudioFormat;
        static U8_MONO_44: $AudioFormat;
        static S16N_SURROUND71_48: $AudioFormat;
        static FL32_SURROUND71_48: $AudioFormat;
        static FL32_STEREO_48: $AudioFormat;
        static S16N_SURROUND71_96: $AudioFormat;
        static S32N_SURROUND71_48: $AudioFormat;
        static S32N_MONO_44: $AudioFormat;
        static S16N_MONO_96: $AudioFormat;
        static S32N_MONO_48: $AudioFormat;
        static FL32_SURROUND71_44: $AudioFormat;
        static S16N_SURROUND_96: $AudioFormat;
        static FL32_SURROUND_44: $AudioFormat;
        static FL32_STEREO_44: $AudioFormat;
        static S32N_SURROUND_96: $AudioFormat;
        static FL32_MONO_96: $AudioFormat;
        static S16N_STEREO_44: $AudioFormat;
        static FL32_SURROUND_48: $AudioFormat;
        static S32N_SURROUND71_44: $AudioFormat;
        static S32N_STEREO_44: $AudioFormat;
        static U8_SURROUND71_44: $AudioFormat;
        static S16N_STEREO_48: $AudioFormat;
        static U8_STEREO_44: $AudioFormat;
        static S32N_STEREO_48: $AudioFormat;
        static FL32_STEREO_96: $AudioFormat;
        static S16N_MONO_48: $AudioFormat;
        static FL32_SURROUND71_96: $AudioFormat;
        static U8_SURROUND_44: $AudioFormat;
        static S16N_SURROUND71_44: $AudioFormat;
        static FL32_SURROUND_96: $AudioFormat;
        static S16N_MONO_44: $AudioFormat;
        static S32N_SURROUND71_96: $AudioFormat;
        static S16N_SURROUND_44: $AudioFormat;
        static S32N_SURROUND_44: $AudioFormat;
        static S32N_MONO_96: $AudioFormat;
        static S16N_SURROUND_48: $AudioFormat;
        static S16N_STEREO_96: $AudioFormat;
        get formatName(): string;
        get sampleRate(): number;
        get bitsPerSample(): number;
        get channelCount(): number;
    }
    /**
     * Values that may be interpreted as {@link $AudioFormat}.
     */
    export type $AudioFormat_ = "u8_mono_44" | "u8_stereo_44" | "u8_surround_44" | "u8_surround71_44" | "s16n_mono_44" | "s16n_stereo_44" | "s16n_surround_44" | "s16n_surround71_44" | "s16n_mono_48" | "s16n_stereo_48" | "s16n_surround_48" | "s16n_surround71_48" | "s16n_mono_96" | "s16n_stereo_96" | "s16n_surround_96" | "s16n_surround71_96" | "s32n_mono_44" | "s32n_stereo_44" | "s32n_surround_44" | "s32n_surround71_44" | "s32n_mono_48" | "s32n_stereo_48" | "s32n_surround_48" | "s32n_surround71_48" | "s32n_mono_96" | "s32n_stereo_96" | "s32n_surround_96" | "s32n_surround71_96" | "fl32_mono_44" | "fl32_stereo_44" | "fl32_surround_44" | "fl32_surround71_44" | "fl32_mono_48" | "fl32_stereo_48" | "fl32_surround_48" | "fl32_surround71_48" | "fl32_mono_96" | "fl32_stereo_96" | "fl32_surround_96" | "fl32_surround71_96";
}
