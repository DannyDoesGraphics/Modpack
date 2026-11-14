import { $Map_, $Map } from "@package/java/util";
import { $Object } from "@package/java/lang";

declare module "@package/javax/sound/sampled" {
    export class $AudioFormat$Encoding {
        static PCM_UNSIGNED: $AudioFormat$Encoding;
        static ULAW: $AudioFormat$Encoding;
        static PCM_FLOAT: $AudioFormat$Encoding;
        static PCM_SIGNED: $AudioFormat$Encoding;
        static ALAW: $AudioFormat$Encoding;
        constructor(arg0: string);
    }
    export class $AudioFormat {
        getSampleSizeInBits(): number;
        getSampleRate(): number;
        getChannels(): number;
        getFrameSize(): number;
        getFrameRate(): number;
        getProperty(arg0: string): $Object;
        matches(arg0: $AudioFormat): boolean;
        properties(): $Map<string, $Object>;
        isBigEndian(): boolean;
        getEncoding(): $AudioFormat$Encoding;
        constructor(arg0: $AudioFormat$Encoding, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean);
        constructor(arg0: $AudioFormat$Encoding, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: $Map_<string, $Object>);
        constructor(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: boolean);
        get sampleSizeInBits(): number;
        get sampleRate(): number;
        get channels(): number;
        get frameSize(): number;
        get frameRate(): number;
        get bigEndian(): boolean;
        get encoding(): $AudioFormat$Encoding;
    }
}
