import { $Entity } from "@package/net/minecraft/world/entity";
import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";

declare module "@package/com/railwayteam/railways/mixin/conductor_possession" {
    export class $AccessorKeyMapping {
    }
    export interface $AccessorKeyMapping {
        getKey(): $InputConstants$Key;
        get key(): $InputConstants$Key;
    }
    /**
     * Values that may be interpreted as {@link $AccessorKeyMapping}.
     */
    export type $AccessorKeyMapping_ = (() => $InputConstants$Key);
    export class $ServerPlayerAccessor {
    }
    export interface $ServerPlayerAccessor {
        getCamera(): $Entity;
        setCamera(arg0: $Entity): void;
    }
    export class $AccessorClientChunkCacheStorage {
    }
    export interface $AccessorClientChunkCacheStorage {
        railways$getViewCenterX(): number;
        railways$setViewCenterX(arg0: number): void;
        railways$getViewCenterZ(): number;
        railways$setViewCenterZ(arg0: number): void;
    }
}
