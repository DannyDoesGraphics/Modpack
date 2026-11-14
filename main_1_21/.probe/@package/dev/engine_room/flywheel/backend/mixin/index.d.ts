import { $PlayerInfo } from "@package/net/minecraft/client/multiplayer";
export * as light from "@package/dev/engine_room/flywheel/backend/mixin/light";

declare module "@package/dev/engine_room/flywheel/backend/mixin" {
    export class $LevelRendererAccessor {
    }
    export interface $LevelRendererAccessor {
        flywheel$getTicks(): number;
    }
    /**
     * Values that may be interpreted as {@link $LevelRendererAccessor}.
     */
    export type $LevelRendererAccessor_ = (() => number);
    export class $AbstractClientPlayerAccessor {
    }
    export interface $AbstractClientPlayerAccessor {
        flywheel$getPlayerInfo(): $PlayerInfo;
    }
    /**
     * Values that may be interpreted as {@link $AbstractClientPlayerAccessor}.
     */
    export type $AbstractClientPlayerAccessor_ = (() => $PlayerInfo);
}
