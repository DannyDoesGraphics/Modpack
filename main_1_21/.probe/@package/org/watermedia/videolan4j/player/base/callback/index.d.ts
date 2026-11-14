import { $Pointer } from "@package/com/sun/jna";
import { $MediaPlayer } from "@package/org/watermedia/videolan4j/player/base";

declare module "@package/org/watermedia/videolan4j/player/base/callback" {
    export class $DefaultAudioCallbackAdapter extends $AudioCallbackAdapter {
        constructor(arg0: number);
    }
    export class $AudioCallback {
    }
    export interface $AudioCallback {
        play(arg0: $MediaPlayer, arg1: $Pointer, arg2: number, arg3: number): void;
        setVolume(arg0: number, arg1: boolean): void;
        flush(arg0: $MediaPlayer, arg1: number): void;
        resume(arg0: $MediaPlayer, arg1: number): void;
        pause(arg0: $MediaPlayer, arg1: number): void;
        drain(arg0: $MediaPlayer): void;
    }
    export class $AudioCallbackAdapter implements $AudioCallback {
        play(arg0: $MediaPlayer, arg1: $Pointer, arg2: number, arg3: number): void;
        setVolume(arg0: number, arg1: boolean): void;
        flush(arg0: $MediaPlayer, arg1: number): void;
        resume(arg0: $MediaPlayer, arg1: number): void;
        pause(arg0: $MediaPlayer, arg1: number): void;
        drain(arg0: $MediaPlayer): void;
        constructor();
    }
}
