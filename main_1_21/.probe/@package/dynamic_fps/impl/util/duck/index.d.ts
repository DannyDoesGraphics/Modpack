import { $SoundSource_ } from "@package/net/minecraft/sounds";

declare module "@package/dynamic_fps/impl/util/duck" {
    export class $DuckSoundEngine {
    }
    export interface $DuckSoundEngine {
        dynamic_fps$updateVolume(source: $SoundSource_): void;
    }
    export class $DuckLoadingOverlay {
    }
    export interface $DuckLoadingOverlay {
        dynamic_fps$isReloadComplete(): boolean;
    }
}
