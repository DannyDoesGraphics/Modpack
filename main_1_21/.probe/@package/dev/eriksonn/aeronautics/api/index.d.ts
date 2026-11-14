import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Music } from "@package/net/minecraft/sounds";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $Record } from "@package/java/lang";
export * as levitite_blend_crystallization from "@package/dev/eriksonn/aeronautics/api/levitite_blend_crystallization";

declare module "@package/dev/eriksonn/aeronautics/api" {
    export interface $CustomSituationalMusic extends RegistryMarked<RegistryTypes.AeronauticsCustomSituationalMusicTag, RegistryTypes.AeronauticsCustomSituationalMusic> {}
    export class $CustomSituationalMusic$Condition {
    }
    export interface $CustomSituationalMusic$Condition {
        test(arg0: $ClientLevel, arg1: $LocalPlayer): boolean;
    }
    /**
     * Values that may be interpreted as {@link $CustomSituationalMusic$Condition}.
     */
    export type $CustomSituationalMusic$Condition_ = ((arg0: $ClientLevel, arg1: $LocalPlayer) => boolean);
    export class $CustomSituationalMusic extends $Record {
        condition(): $CustomSituationalMusic$Condition;
        static getSituationalMusic(arg0: $ClientLevel, arg1: $LocalPlayer): $Music;
        music(): $Music;
        constructor(music: $Music, condition: $CustomSituationalMusic$Condition_);
    }
    /**
     * Values that may be interpreted as {@link $CustomSituationalMusic}.
     */
    export type $CustomSituationalMusic_ = RegistryTypes.AeronauticsCustomSituationalMusic | { condition?: $CustomSituationalMusic$Condition_, music?: $Music,  } | [condition?: $CustomSituationalMusic$Condition_, music?: $Music, ];
}
