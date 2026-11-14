import { $Channel } from "@package/com/mojang/blaze3d/audio";

declare module "@package/com/redsmods/sound_physics_perfected/mixin/client" {
    export class $SourceManagerAccessor {
    }
    export interface $SourceManagerAccessor {
        getChannel(): $Channel;
        get channel(): $Channel;
    }
    /**
     * Values that may be interpreted as {@link $SourceManagerAccessor}.
     */
    export type $SourceManagerAccessor_ = (() => $Channel);
    export class $SourceAccessor {
    }
    export interface $SourceAccessor {
        getSource(): number;
        get source(): number;
    }
    /**
     * Values that may be interpreted as {@link $SourceAccessor}.
     */
    export type $SourceAccessor_ = (() => number);
}
