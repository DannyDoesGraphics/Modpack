import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $TextureSheetParticle } from "@package/net/minecraft/client/particle";
import { $RandomSource } from "@package/net/minecraft/util";
export * as chimneypush from "@package/com/railwayteam/railways/content/smokestack/particles/chimneypush";
export * as puffs from "@package/com/railwayteam/railways/content/smokestack/particles/puffs";
export * as legacy from "@package/com/railwayteam/railways/content/smokestack/particles/legacy";

declare module "@package/com/railwayteam/railways/content/smokestack/particles" {
    export class $CustomAnimatedTextureSheetParticle extends $TextureSheetParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
}
