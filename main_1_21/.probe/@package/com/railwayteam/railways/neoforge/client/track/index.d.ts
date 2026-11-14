import { $LevelReader, $Level_ } from "@package/net/minecraft/world/level";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ParticleEngine } from "@package/net/minecraft/client/particle";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $IClientBlockExtensions } from "@package/net/neoforged/neoforge/client/extensions/common";
import { $HitResult } from "@package/net/minecraft/world/phys";
import { $Vector3d } from "@package/org/joml";

declare module "@package/com/railwayteam/railways/neoforge/client/track" {
    export class $FullShapeDestroyEffects implements $IClientBlockExtensions {
        addDestroyEffects(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $ParticleEngine): boolean;
        playBreakSound(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): boolean;
        getFogColor(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Entity, arg4: $Vector3d, arg5: number): $Vector3d;
        areBreakingParticlesTinted(arg0: $BlockState_, arg1: $ClientLevel, arg2: $BlockPos_): boolean;
        addHitEffects(arg0: $BlockState_, arg1: $Level_, arg2: $HitResult, arg3: $ParticleEngine): boolean;
        static INSTANCE: $FullShapeDestroyEffects;
    }
}
