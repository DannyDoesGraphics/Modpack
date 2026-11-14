import { $Level_, $LevelReader } from "@package/net/minecraft/world/level";
import { $ParticleEngine } from "@package/net/minecraft/client/particle";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $IClientBlockExtensions } from "@package/net/neoforged/neoforge/client/extensions/common";
import { $Set_, $Set } from "@package/java/util";
import { $NonNullFunction, $NonNullFunction_, $NonNullBiConsumer_ } from "@package/com/tterrag/registrate/util/nullness";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $HitResult } from "@package/net/minecraft/world/phys";
import { $Vector3d } from "@package/org/joml";

declare module "@package/com/simibubi/create/foundation/block/render" {
    export class $ReducedDestroyEffects implements $IClientBlockExtensions {
        addDestroyEffects(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $ParticleEngine): boolean;
        playBreakSound(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): boolean;
        getFogColor(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Entity, arg4: $Vector3d, arg5: number): $Vector3d;
        areBreakingParticlesTinted(arg0: $BlockState_, arg1: $ClientLevel, arg2: $BlockPos_): boolean;
        addHitEffects(arg0: $BlockState_, arg1: $Level_, arg2: $HitResult, arg3: $ParticleEngine): boolean;
        constructor();
    }
    export class $CustomBlockModels {
        register(arg0: $ResourceLocation_, arg1: $NonNullFunction_<$BakedModel, $BakedModel>): void;
        forEach(arg0: $NonNullBiConsumer_<$Block, $NonNullFunction<$BakedModel, $BakedModel>>): void;
        constructor();
    }
    export class $BlockDestructionProgressExtension {
    }
    export interface $BlockDestructionProgressExtension {
        create$setExtraPositions(arg0: $Set_<$BlockPos_>): void;
        create$getExtraPositions(): $Set<$BlockPos>;
    }
    export class $MultiPosDestructionHandler {
    }
    export interface $MultiPosDestructionHandler {
        getExtraPositions(arg0: $ClientLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: number): $Set<$BlockPos>;
    }
    /**
     * Values that may be interpreted as {@link $MultiPosDestructionHandler}.
     */
    export type $MultiPosDestructionHandler_ = ((arg0: $ClientLevel, arg1: $BlockPos, arg2: $BlockState, arg3: number) => $Set_<$BlockPos_>);
}
