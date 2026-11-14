import { $SoundEvent_ } from "@package/net/minecraft/sounds";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $AbstractTickableSoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $Set } from "@package/java/util";
import { $Enum } from "@package/java/lang";

declare module "@package/com/simibubi/create/foundation/sound" {
    export class $SoundScapes$AmbienceGroup extends $Enum<$SoundScapes$AmbienceGroup> {
        static values(): $SoundScapes$AmbienceGroup[];
        static valueOf(arg0: string): $SoundScapes$AmbienceGroup;
        instantiate(arg0: number): $SoundScape;
        static MILLING: $SoundScapes$AmbienceGroup;
        static KINETIC: $SoundScapes$AmbienceGroup;
        static COG: $SoundScapes$AmbienceGroup;
        static CRUSHING: $SoundScapes$AmbienceGroup;
    }
    /**
     * Values that may be interpreted as {@link $SoundScapes$AmbienceGroup}.
     */
    export type $SoundScapes$AmbienceGroup_ = "kinetic" | "cog" | "crushing" | "milling";
    export class $ContinuousSound extends $AbstractTickableSoundInstance {
        remove(): void;
    }
    export class $SoundScape {
    }
    export class $RepeatingSound {
        tick(): void;
        constructor(arg0: $SoundEvent_, arg1: $SoundScape, arg2: number, arg3: number, arg4: number);
    }
    export class $SoundScapes {
        static getSoundCount(arg0: $SoundScapes$AmbienceGroup_, arg1: $SoundScapes$PitchGroup_): number;
        static getGroupFromPitch(arg0: number): $SoundScapes$PitchGroup;
        static getAllLocations(arg0: $SoundScapes$AmbienceGroup_, arg1: $SoundScapes$PitchGroup_): $Set<$BlockPos>;
        static invalidateAll(): void;
        static play(arg0: $SoundScapes$AmbienceGroup_, arg1: $BlockPos_, arg2: number): void;
        static tick(): void;
        constructor();
    }
    export class $SoundScapes$PitchGroup extends $Enum<$SoundScapes$PitchGroup> {
    }
    /**
     * Values that may be interpreted as {@link $SoundScapes$PitchGroup}.
     */
    export type $SoundScapes$PitchGroup_ = "very_low" | "low" | "normal" | "high" | "very_high";
}
