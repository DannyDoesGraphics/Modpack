import { $JsonObject_ } from "@package/com/google/gson";
import { $RenderBuffers, $LightTexture } from "@package/net/minecraft/client/renderer";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $DustParticleOptions, $ParticleType_, $SculkChargeParticleOptions_, $SculkChargeParticleOptions, $ParticleGroup, $VibrationParticleOption, $ParticleOptions_, $BlockParticleOption, $ParticleOptions, $DustColorTransitionOptions, $ItemParticleOption, $ColorParticleOption, $SimpleParticleType, $ShriekParticleOption, $ScalableParticleOptionsBase } from "@package/net/minecraft/core/particles";
import { $Camera } from "@package/net/minecraft/client";
import { $ResourceManager, $PreparableReloadListener$PreparationBarrier_, $PreparableReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $List, $List_, $Map } from "@package/java/util";
import { $Frustum } from "@package/net/minecraft/client/renderer/culling";
import { $RandomSource } from "@package/net/minecraft/util";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $TextureAtlasSprite, $TextureManager, $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $ParticleExtension } from "@package/dev/ryanhcode/sable/mixinterface/particle";
import { $Record } from "@package/java/lang";
import { $ParticleSubLevelKickable } from "@package/dev/ryanhcode/sable/api/particle";
import { $IntList } from "@package/it/unimi/dsi/fastutil/ints";
import { $EntityRenderDispatcher } from "@package/net/minecraft/client/renderer/entity";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $FireworkExplosion_ } from "@package/net/minecraft/world/item/component";
import { $SubLevel, $ClientSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $ParticleEngineAccessor } from "@package/net/createmod/ponder/mixin/client/accessor";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $BufferBuilder, $VertexConsumer, $Tesselator } from "@package/com/mojang/blaze3d/vertex";
import { $AABB_, $Vec3, $AABB, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $Vector3dc, $Quaternionf } from "@package/org/joml";

declare module "@package/net/minecraft/client/particle" {
    export class $ParticleEngine$SpriteParticleRegistration<T extends $ParticleOptions> {
    }
    export interface $ParticleEngine$SpriteParticleRegistration<T extends $ParticleOptions> {
        create(sprites: $SpriteSet): $ParticleProvider<T>;
    }
    /**
     * Values that may be interpreted as {@link $ParticleEngine$SpriteParticleRegistration}.
     */
    export type $ParticleEngine$SpriteParticleRegistration_<T> = ((arg0: $SpriteSet) => $ParticleProvider<T>);
    export class $PortalParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprite: $SpriteSet);
    }
    export class $GlowParticle extends $TextureSheetParticle {
        getLightColor(partialTick: number): number;
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
    export class $FallingDustParticle extends $TextureSheetParticle {
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
    export class $DustPlumeParticle extends $BaseAshSmokeParticle {
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
    export class $MobAppearanceParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor();
    }
    export class $DragonBreathParticle extends $TextureSheetParticle {
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
    export class $FlyStraightTowardsParticle extends $TextureSheetParticle {
        getLightColor(partialTick: number): number;
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
    export class $SpitParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $LavaParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $TotemParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $GustParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $FireworkParticles$Starter extends $NoRenderParticle {
        createParticleBurst(colors: $IntList, fadeColors: $IntList, trail: boolean, twinkle: boolean): void;
        handler$zcn000$sodium_extra$addExplosionParticle(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $IntList, arg7: $IntList, arg8: boolean, arg9: boolean, arg10: $CallbackInfo): void;
        redirect$zcn000$sodium_extra$tick(arg0: $Particle, arg1: number, arg2: number, arg3: number): void;
        createParticleBall(speed: number, arg1: number, radius: $IntList, colors: $IntList, fadeColors: boolean, trail: boolean): void;
        createParticleShape(speed: number, arg1: number[][], coords: $IntList, colors: $IntList, fadeColors: boolean, trail: boolean, twinkle: boolean): void;
        createParticle(x: number, arg1: number, y: number, arg3: number, z: number, arg5: number, xSpeed: $IntList, arg7: $IntList, ySpeed: boolean, arg9: boolean): void;
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
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xd: $ParticleEngine, arg8: $List_<$FireworkExplosion_>);
    }
    export class $ExplodeParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $TerrainParticle$DustPillarProvider implements $ParticleProvider<$BlockParticleOption> {
        createParticle(arg0: $BlockParticleOption, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor();
    }
    export class $HeartParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $AshParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SquidInkParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SingleQuadParticle$FacingCameraMode {
        static LOOKAT_Y: $SingleQuadParticle$FacingCameraMode;
        static LOOKAT_XYZ: $SingleQuadParticle$FacingCameraMode;
    }
    export interface $SingleQuadParticle$FacingCameraMode {
        setRotation(quaternion: $Quaternionf, camera: $Camera, partialTick: number): void;
    }
    /**
     * Values that may be interpreted as {@link $SingleQuadParticle$FacingCameraMode}.
     */
    export type $SingleQuadParticle$FacingCameraMode_ = ((arg0: $Quaternionf, arg1: $Camera, arg2: number) => void);
    export class $CampfireSmokeParticle$SignalProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SpellParticle extends $TextureSheetParticle {
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
    export class $GustParticle extends $TextureSheetParticle {
        getLightColor(partialTick: number): number;
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
    export class $HeartParticle$AngryVillagerProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SculkChargePopParticle extends $TextureSheetParticle {
        getLightColor(partialTick: number): number;
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
    export class $WhiteSmokeParticle extends $BaseAshSmokeParticle {
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
    export class $PortalParticle extends $TextureSheetParticle {
        getLightColor(partialTick: number): number;
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
    export class $SpellParticle$WitchProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SimpleAnimatedParticle extends $TextureSheetParticle {
        getLightColor(partialTick: number): number;
        setColor(color: number): void;
        setFadeColor(color: number): void;
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
        set color(value: number);
        set fadeColor(value: number);
    }
    export class $DustPlumeParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SmokeParticle extends $BaseAshSmokeParticle {
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
    export class $FlameParticle extends $RisingParticle implements $ParticleExtension {
        getLightColor(partialTick: number): number;
        wrapMethod$fof000$sable$move(arg0: number, arg1: number, arg2: number, arg3: $Operation_<any>): void;
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
    export class $SuspendedTownParticle$HappyVillagerProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $ReversePortalParticle extends $PortalParticle {
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
    export class $GlowParticle$WaxOffProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SuspendedTownParticle extends $TextureSheetParticle {
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
    export class $SonicBoomParticle extends $HugeExplosionParticle {
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
    export class $PlayerCloudParticle$SneezeProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $DustParticle extends $DustParticleBase<$DustParticleOptions> {
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
    export class $WhiteAshParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $LavaParticle extends $TextureSheetParticle {
        getLightColor(partialTick: number): number;
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
    export class $BreakingItemParticle$SnowballProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor();
    }
    export class $GustSeedParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(scale: number, arg1: number, lifetime: number);
    }
    export class $SquidInkParticle$GlowInkProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SingleQuadParticle extends $Particle {
        getFacingCameraMode(): $SingleQuadParticle$FacingCameraMode;
        getQuadSize(scaleFactor: number): number;
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
        get facingCameraMode(): $SingleQuadParticle$FacingCameraMode;
    }
    export class $Particle$LifetimeAlpha extends $Record {
        startAlpha(): number;
        endAlpha(): number;
        startAtNormalizedAge(): number;
        endAtNormalizedAge(): number;
        isOpaque(): boolean;
        currentAlphaForAge(age: number, lifetime: number, partialTick: number): number;
        static ALWAYS_OPAQUE: $Particle$LifetimeAlpha;
        constructor(startAlpha: number, endAlpha: number, startAtNormalizedAge: number, endAtNormalizedAge: number);
        get opaque(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Particle$LifetimeAlpha}.
     */
    export type $Particle$LifetimeAlpha_ = { endAtNormalizedAge?: number, startAlpha?: number, endAlpha?: number, startAtNormalizedAge?: number,  } | [endAtNormalizedAge?: number, startAlpha?: number, endAlpha?: number, startAtNormalizedAge?: number, ];
    export class $BlockMarker extends $TextureSheetParticle implements $ParticleSubLevelKickable {
        /**
         * Returns `true` if this effect has not yet expired. "I feel happy! I feel happy!"
         */
        sable$shouldCollideWithTrackingSubLevel(): boolean;
        /**
         * Returns `true` if this effect has not yet expired. "I feel happy! I feel happy!"
         */
        sable$shouldKickFromTracking(): boolean;
        /**
         * Returns `true` if this effect has not yet expired. "I feel happy! I feel happy!"
         */
        sable$shouldCareAboutIntersectingSubLevels(): boolean;
        sable$getUpDirection(): $Vector3dc;
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
    export class $ParticleRenderType {
        static NO_RENDER: $ParticleRenderType;
        static TERRAIN_SHEET: $ParticleRenderType;
        static PARTICLE_SHEET_LIT: $ParticleRenderType;
        static PARTICLE_SHEET_OPAQUE: $ParticleRenderType;
        static PARTICLE_SHEET_TRANSLUCENT: $ParticleRenderType;
        static CUSTOM: $ParticleRenderType;
    }
    export interface $ParticleRenderType {
        begin(tesselator: $Tesselator, textureManager: $TextureManager): $BufferBuilder;
        isTranslucent(): boolean;
        get translucent(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ParticleRenderType}.
     */
    export type $ParticleRenderType_ = ((arg0: $Tesselator, arg1: $TextureManager) => $BufferBuilder);
    export class $SuspendedTownParticle$DolphinSpeedProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $CritParticle$MagicProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SoulParticle$EmissiveProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprite: $SpriteSet);
    }
    export class $FlyTowardsPositionParticle$VaultConnectionProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprite: $SpriteSet);
    }
    export class $WaterDropParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $BaseAshSmokeParticle extends $TextureSheetParticle {
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
    export class $FlameParticle$SmallFlameProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $NoteParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $CherryParticle extends $TextureSheetParticle {
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
    export class $AshParticle extends $BaseAshSmokeParticle {
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
    export class $FireworkParticles$SparkParticle extends $SimpleAnimatedParticle {
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
    export class $FlyTowardsPositionParticle$NautilusProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprite: $SpriteSet);
    }
    export class $CritParticle$DamageIndicatorProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SculkChargeParticle$Provider extends $Record implements $ParticleProvider<$SculkChargeParticleOptions> {
        sprite(): $SpriteSet;
        createParticle(arg0: $SculkChargeParticleOptions_, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    /**
     * Values that may be interpreted as {@link $SculkChargeParticle$Provider}.
     */
    export type $SculkChargeParticle$Provider_ = { sprite?: $SpriteSet,  } | [sprite?: $SpriteSet, ];
    export class $HugeExplosionParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $DripParticle extends $TextureSheetParticle {
        getLightColor(partialTick: number): number;
        static createLavaHangParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createLavaFallParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createLavaLandParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createWaterHangParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createWaterFallParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createHoneyHangParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createHoneyFallParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createHoneyLandParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createNectarFallParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createSporeBlossomFallParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createObsidianTearHangParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createObsidianTearFallParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createObsidianTearLandParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createDripstoneWaterHangParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createDripstoneWaterFallParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createDripstoneLavaHangParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createDripstoneLavaFallParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
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
    export class $CampfireSmokeParticle extends $TextureSheetParticle {
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
    export class $BreakingItemParticle$Provider implements $ParticleProvider<$ItemParticleOption> {
        createParticle(type: $ItemParticleOption, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor();
    }
    export class $WakeParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $PlayerCloudParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $FireworkParticles {
        constructor();
    }
    export class $ParticleEngine$MutableSpriteSet implements $SpriteSet {
        get(random: $RandomSource): $TextureAtlasSprite;
        get(particleAge: number, particleMaxAge: number): $TextureAtlasSprite;
        rebind(sprites: $List_<$TextureAtlasSprite>): void;
        sprites: $List<$TextureAtlasSprite>;
    }
    export class $GlowParticle$WaxOnProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $GlowParticle$GlowSquidProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $DripParticle$DripHangParticle extends $DripParticle {
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
    export class $ParticleProvider$Sprite<T extends $ParticleOptions> {
    }
    export interface $ParticleProvider$Sprite<T extends $ParticleOptions> {
        createParticle(type: T, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
    }
    /**
     * Values that may be interpreted as {@link $ParticleProvider$Sprite}.
     */
    export type $ParticleProvider$Sprite_<T> = ((arg0: T, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number) => $TextureSheetParticle);
    export class $GlowParticle$ScrapeProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SuspendedParticle$CrimsonSporeProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $DripParticle$FallAndLandParticle extends $DripParticle$FallingParticle {
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
    export class $BreakingItemParticle$SlimeProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor();
    }
    export class $SmokeParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $FireworkParticles$OverlayParticle extends $TextureSheetParticle {
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
    export class $ShriekParticle$Provider implements $ParticleProvider<$ShriekParticleOption> {
        createParticle(type: $ShriekParticleOption, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprite: $SpriteSet);
    }
    export class $ExplodeParticle extends $TextureSheetParticle {
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
    export class $SculkChargePopParticle$Provider extends $Record implements $ParticleProvider<$SimpleParticleType> {
        sprite(): $SpriteSet;
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    /**
     * Values that may be interpreted as {@link $SculkChargePopParticle$Provider}.
     */
    export type $SculkChargePopParticle$Provider_ = { sprite?: $SpriteSet,  } | [sprite?: $SpriteSet, ];
    export class $SuspendedTownParticle$ComposterFillProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $NoRenderParticle extends $Particle {
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
    export class $BubbleParticle extends $TextureSheetParticle {
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
    export class $SoulParticle extends $RisingParticle {
        getLightColor(partialTick: number): number;
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
    export class $DripParticle$FallingParticle extends $DripParticle {
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
    export class $ItemPickupParticle extends $Particle {
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
        constructor(entityRenderDispatcher: $EntityRenderDispatcher, buffers: $RenderBuffers, level: $ClientLevel, itemEntity: $Entity, target: $Entity);
    }
    export class $FireworkParticles$SparkProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $BlockMarker$Provider implements $ParticleProvider<$BlockParticleOption> {
        createParticle(arg0: $BlockParticleOption, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor();
    }
    export class $DustParticleBase<T extends $ScalableParticleOptionsBase> extends $TextureSheetParticle {
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
    export class $VibrationSignalParticle extends $TextureSheetParticle {
        getLightColor(partialTick: number): number;
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
    export class $ParticleProvider<T extends $ParticleOptions> {
    }
    export interface $ParticleProvider<T extends $ParticleOptions> {
        createParticle(type: T, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
    }
    /**
     * Values that may be interpreted as {@link $ParticleProvider}.
     */
    export type $ParticleProvider_<T> = ((arg0: T, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number) => $Particle);
    export class $WaterCurrentDownParticle extends $TextureSheetParticle {
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
    export class $CampfireSmokeParticle$CosyProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $HugeExplosionSeedParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor();
    }
    export class $EndRodParticle extends $SimpleAnimatedParticle {
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
    export class $TrialSpawnerDetectionParticle extends $TextureSheetParticle {
        getLightColor(partialTick: number): number;
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
    export class $DripParticle$CoolingDripHangParticle extends $DripParticle$DripHangParticle {
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
    export class $WaterCurrentDownParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $TotemParticle extends $SimpleAnimatedParticle {
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
    export class $BubbleColumnUpParticle extends $TextureSheetParticle {
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
    export class $BreakingItemParticle extends $TextureSheetParticle {
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
    export class $WhiteSmokeParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SpellParticle$MobEffectProvider implements $ParticleProvider<$ColorParticleOption> {
        createParticle(type: $ColorParticleOption, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprite: $SpriteSet);
    }
    export class $CritParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $TrackingEmitter extends $NoRenderParticle {
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
        constructor(level: $ClientLevel, entity: $Entity, particleType: $ParticleOptions_, lifetime: number);
        constructor(level: $ClientLevel, entity: $Entity, particleType: $ParticleOptions_);
    }
    export class $SplashParticle extends $WaterDropParticle {
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
    export class $NoteParticle extends $TextureSheetParticle {
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
    export class $TerrainParticle extends $TextureSheetParticle {
        getLightColor(partialTick: number): number;
        updateSprite(arg0: $BlockState_, arg1: $BlockPos_): $TerrainParticle;
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
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xSpeed: $BlockState_, arg8: $BlockPos_);
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xSpeed: $BlockState_);
    }
    export class $DustParticle$Provider implements $ParticleProvider<$DustParticleOptions> {
        createParticle(type: $DustParticleOptions, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $DripParticle$DripstoneFallAndLandParticle extends $DripParticle$FallAndLandParticle {
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
    export class $WaterDropParticle extends $TextureSheetParticle {
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
    export class $ParticleEngine$1ParticleDefinition extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ParticleEngine$1ParticleDefinition}.
     */
    export type $ParticleEngine$1ParticleDefinition_ = { id?: $ResourceLocation_, sprites?: ($List_<$ResourceLocation_>) | undefined,  } | [id?: $ResourceLocation_, sprites?: ($List_<$ResourceLocation_>) | undefined, ];
    export class $SpitParticle extends $ExplodeParticle {
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
    export class $BubbleColumnUpParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $BubblePopParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $LargeSmokeParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $CritParticle extends $TextureSheetParticle {
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
    export class $Particle implements $ParticleExtension {
        getPos(): $Vec3;
        setParticleSpeed(x: number, arg1: number, y: number): void;
        setLifetime(particleLifeTime: number): void;
        getLifetime(): number;
        getParticleGroup(): ($ParticleGroup) | undefined;
        /**
         * Called to indicate that this particle effect has expired and should be discontinued.
         */
        sable$initialKickOut(): void;
        /**
         * Called to indicate that this particle effect has expired and should be discontinued.
         */
        sable$moveWithInheritedVelocity(): void;
        getRenderBoundingBox(arg0: number): $AABB;
        setPower(scale: number): $Particle;
        /**
         * Called to indicate that this particle effect has expired and should be discontinued.
         */
        remove(): void;
        scale(scale: number): $Particle;
        /**
         * Returns `true` if this effect has not yet expired. "I feel happy! I feel happy!"
         */
        isAlive(): boolean;
        move(x: number, arg1: number, y: number): void;
        /**
         * Called to indicate that this particle effect has expired and should be discontinued.
         */
        tick(): void;
        setColor(particleRed: number, particleGreen: number, particleBlue: number): void;
        render(buffer: $VertexConsumer, camera: $Camera, partialTicks: number): void;
        getBoundingBox(): $AABB;
        getRenderType(): $ParticleRenderType;
        setPos(x: number, arg1: number, y: number): void;
        setBoundingBox(bb: $AABB_): void;
        sable$setTrackingSubLevel(arg0: $ClientSubLevel, arg1: $Vec3_): void;
        sable$getTrackingSubLevel(): $SubLevel;
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
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number);
        get particleGroup(): ($ParticleGroup) | undefined;
        set power(value: number);
        get alive(): boolean;
        get renderType(): $ParticleRenderType;
    }
    export class $FlyTowardsPositionParticle$EnchantProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprite: $SpriteSet);
    }
    export class $SpellParticle$InstantProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $DustColorTransitionParticle extends $DustParticleBase<$DustColorTransitionOptions> {
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
    export class $FallingDustParticle$Provider implements $ParticleProvider<$BlockParticleOption> {
        createParticle(type: $BlockParticleOption, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $ReversePortalParticle$ReversePortalProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $FlameParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SpellParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SuspendedParticle$UnderwaterProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SuspendedParticle$WarpedSporeProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SpriteSet {
    }
    export interface $SpriteSet {
        get(age: number, lifetime: number): $TextureAtlasSprite;
        get(random: $RandomSource): $TextureAtlasSprite;
    }
    export class $EndRodParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $GustParticle$SmallProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $FlyStraightTowardsParticle$OminousSpawnProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprite: $SpriteSet);
    }
    export class $ParticleDescription {
        static fromJson(json: $JsonObject_): $ParticleDescription;
        getTextures(): $List<$ResourceLocation>;
        constructor(textures: $List_<$ResourceLocation_>);
        get textures(): $List<$ResourceLocation>;
    }
    export class $BubblePopParticle extends $TextureSheetParticle {
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
    export class $SuspendedParticle$SporeBlossomAirProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $BubbleParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SuspendedParticle extends $TextureSheetParticle implements $ParticleSubLevelKickable {
        /**
         * Returns `true` if this effect has not yet expired. "I feel happy! I feel happy!"
         */
        sable$shouldCollideWithTrackingSubLevel(): boolean;
        /**
         * Returns `true` if this effect has not yet expired. "I feel happy! I feel happy!"
         */
        sable$shouldKickFromTracking(): boolean;
        /**
         * Returns `true` if this effect has not yet expired. "I feel happy! I feel happy!"
         */
        sable$shouldCareAboutIntersectingSubLevels(): boolean;
        sable$getUpDirection(): $Vector3dc;
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
    export class $SplashParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $LargeSmokeParticle extends $SmokeParticle {
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
    export class $GustSeedParticle extends $NoRenderParticle {
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
    export class $WhiteAshParticle extends $BaseAshSmokeParticle {
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
    export class $ParticleEngine implements $PreparableReloadListener, $ParticleEngineAccessor {
        /**
         * Adds block hit particles for the specified block
         */
        crack(pos: $BlockPos_, side: $Direction_): void;
        iterateParticles(arg0: $Consumer_<$Particle>): void;
        countParticles(): string;
        handler$zcp000$sodium_extra$addParticle(arg0: $ParticleOptions_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $CallbackInfoReturnable<any>): void;
        handler$zol000$veil$tick(arg0: $CallbackInfo): void;
        handler$zol000$veil$setLevel(arg0: $ClientLevel, arg1: $CallbackInfo): void;
        handler$zcp000$sodium_extra$addBlockBreakParticles(arg0: $BlockPos_, arg1: $BlockState_, arg2: $CallbackInfo): void;
        handler$zcp000$sodium_extra$addBlockBreakingParticles(arg0: $BlockPos_, arg1: $Direction_, arg2: $CallbackInfo): void;
        handler$zol000$veil$countParticles(arg0: $CallbackInfoReturnable<any>): void;
        handler$zol000$veil$clear(arg0: $CallbackInfo): void;
        add(effect: $Particle): void;
        /**
         * @deprecated
         */
        register<T extends $ParticleOptions>(particleType: $ParticleType_<T>, particleMetaFactory: $ParticleEngine$SpriteParticleRegistration_<T>): void;
        /**
         * @deprecated
         */
        register<T extends $ParticleOptions>(particleType: $ParticleType_<T>, particleFactory: $ParticleProvider_<T>): void;
        /**
         * @deprecated
         */
        register<T extends $ParticleOptions>(particleType: $ParticleType_<T>, sprite: $ParticleProvider$Sprite_<T>): void;
        destroy(pos: $BlockPos_, state: $BlockState_): void;
        close(): void;
        tick(): void;
        reload(stage: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        setLevel(level: $ClientLevel | null): void;
        createTrackingEmitter(entity: $Entity, data: $ParticleOptions_, lifetime: number): void;
        createTrackingEmitter(entity: $Entity, particleData: $ParticleOptions_): void;
        /**
         * @deprecated
         */
        render(lightTexture: $LightTexture, camera: $Camera, partialTick: number): void;
        render(arg0: $LightTexture, arg1: $Camera, arg2: number, arg3: $Frustum | null, arg4: $Predicate_<$ParticleRenderType>): void;
        addBlockHitEffects(arg0: $BlockPos_, arg1: $BlockHitResult): void;
        createParticle(particleData: $ParticleOptions_, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number): $Particle;
        getName(): string;
        ponder$getProviders(): $Map<$ResourceLocation, $ParticleProvider<never>>;
        textureAtlas: $TextureAtlas;
        constructor(level: $ClientLevel, textureManager: $TextureManager);
        set level(value: $ClientLevel | null);
        get name(): string;
    }
    export class $DripParticle$DripLandParticle extends $DripParticle {
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
    export class $TrialSpawnerDetectionParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $RisingParticle extends $TextureSheetParticle {
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
    export class $FlyTowardsPositionParticle extends $TextureSheetParticle {
        getLightColor(partialTick: number): number;
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
    export class $SnowflakeParticle extends $TextureSheetParticle {
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
    export class $SonicBoomParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $MobAppearanceParticle extends $Particle {
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
    export class $HugeExplosionParticle extends $TextureSheetParticle {
        getLightColor(partialTick: number): number;
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
    export class $VibrationSignalParticle$Provider implements $ParticleProvider<$VibrationParticleOption> {
        createParticle(type: $VibrationParticleOption, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $BreakingItemParticle$CobwebProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor();
    }
    export class $SuspendedTownParticle$EggCrackProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprite: $SpriteSet);
    }
    export class $DragonBreathParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SquidInkParticle extends $SimpleAnimatedParticle {
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
    export class $ShriekParticle extends $TextureSheetParticle {
        getLightColor(partialTick: number): number;
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
    export class $HugeExplosionSeedParticle extends $NoRenderParticle {
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
    export class $TextureSheetParticle extends $SingleQuadParticle {
        pickSprite(sprite: $SpriteSet): void;
        setSpriteFromAge(sprite: $SpriteSet): void;
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
        set spriteFromAge(value: $SpriteSet);
    }
    export class $DustColorTransitionParticle$Provider implements $ParticleProvider<$DustColorTransitionOptions> {
        createParticle(type: $DustColorTransitionOptions, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $AttackSweepParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SculkChargeParticle extends $TextureSheetParticle {
        getLightColor(partialTick: number): number;
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
    export class $SuspendedTownParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SnowflakeParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $FireworkParticles$FlashProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $TerrainParticle$Provider implements $ParticleProvider<$BlockParticleOption> {
        createParticle(type: $BlockParticleOption, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor();
    }
    export class $PlayerCloudParticle extends $TextureSheetParticle {
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
    export class $GlowParticle$ElectricSparkProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SoulParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $DripParticle$HoneyFallAndLandParticle extends $DripParticle$FallAndLandParticle {
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
    export class $AttackSweepParticle extends $TextureSheetParticle {
        getLightColor(partialTick: number): number;
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
    export class $WakeParticle extends $TextureSheetParticle {
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
    export class $HeartParticle extends $TextureSheetParticle {
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
