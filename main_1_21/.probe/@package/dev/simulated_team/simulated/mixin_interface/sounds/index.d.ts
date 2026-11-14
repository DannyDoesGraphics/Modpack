import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";

declare module "@package/dev/simulated_team/simulated/mixin_interface/sounds" {
    export class $SoundExtension {
        static isSoundPlaying(arg0: $SoundInstance): boolean;
    }
    export interface $SoundExtension {
        simulated$isSoundPlaying(arg0: $SoundInstance): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SoundExtension}.
     */
    export type $SoundExtension_ = ((arg0: $SoundInstance) => boolean);
}
