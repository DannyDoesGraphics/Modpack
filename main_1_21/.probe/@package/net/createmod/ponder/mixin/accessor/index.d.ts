import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";

declare module "@package/net/createmod/ponder/mixin/accessor" {
    export class $MinecraftServerAccessor {
    }
    export interface $MinecraftServerAccessor {
        catnip$getStorageSource(): $LevelStorageSource$LevelStorageAccess;
    }
    /**
     * Values that may be interpreted as {@link $MinecraftServerAccessor}.
     */
    export type $MinecraftServerAccessor_ = (() => $LevelStorageSource$LevelStorageAccess);
    export class $BiomeManagerAccessor {
    }
    export interface $BiomeManagerAccessor {
        catnip$getBiomeZoomSeed(): number;
    }
    /**
     * Values that may be interpreted as {@link $BiomeManagerAccessor}.
     */
    export type $BiomeManagerAccessor_ = (() => number);
    export class $TimerAccessor {
    }
    export interface $TimerAccessor {
        catnip$getDeltaTickResidual(): number;
    }
    /**
     * Values that may be interpreted as {@link $TimerAccessor}.
     */
    export type $TimerAccessor_ = (() => number);
    export class $EntityAccessor {
    }
    export interface $EntityAccessor {
        catnip$callSetLevel(arg0: $Level_): void;
    }
    /**
     * Values that may be interpreted as {@link $EntityAccessor}.
     */
    export type $EntityAccessor_ = ((arg0: $Level) => void);
}
