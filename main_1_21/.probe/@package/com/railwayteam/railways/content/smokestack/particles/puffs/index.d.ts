import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $DyeColor_ } from "@package/net/minecraft/world/item";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $CustomAnimatedTextureSheetParticle } from "@package/com/railwayteam/railways/content/smokestack/particles";
import { $ParticleProvider, $Particle, $SpriteSet, $ParticleEngine$SpriteParticleRegistration } from "@package/net/minecraft/client/particle";
import { $ParticleType_, $ParticleOptions, $ParticleType } from "@package/net/minecraft/core/particles";
import { $ICustomParticleDataWithSprite } from "@package/com/simibubi/create/foundation/particle";
import { $RegisterParticleProvidersEvent } from "@package/net/neoforged/neoforge/client/event";
import { $RandomSource } from "@package/net/minecraft/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/railwayteam/railways/content/smokestack/particles/puffs" {
    export class $PuffSmokeParticle$Factory<T extends $PuffSmokeParticleData<T>> implements $ParticleProvider<T> {
        createParticle(arg0: T, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $PuffSmokeParticleData$Small extends $PuffSmokeParticleData<$PuffSmokeParticleData$Small> {
        static CODEC: $MapCodec<$PuffSmokeParticleData$Small>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $PuffSmokeParticleData$Small>;
        constructor();
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: boolean);
        constructor(arg0: boolean, arg1: number);
        constructor(arg0: boolean, arg1: number, arg2: number, arg3: number);
    }
    export class $PuffSmokeParticleData$Medium extends $PuffSmokeParticleData<$PuffSmokeParticleData$Medium> {
        static CODEC: $MapCodec<$PuffSmokeParticleData$Medium>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $PuffSmokeParticleData$Medium>;
        constructor();
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: boolean);
        constructor(arg0: boolean, arg1: number);
        constructor(arg0: boolean, arg1: number, arg2: number, arg3: number);
    }
    export class $PuffSmokeParticleData<T extends $PuffSmokeParticleData<T>> implements $ParticleOptions, $ICustomParticleDataWithSprite<T> {
        getMetaFactory(): $ParticleEngine$SpriteParticleRegistration<T>;
        getStreamCodec(): $StreamCodec<$FriendlyByteBuf, T>;
        getQuadSize(): number;
        writeToNetwork(arg0: $FriendlyByteBuf): void;
        writeToString(): string;
        getType(): $ParticleType<never>;
        static create(arg0: boolean, arg1: boolean): $PuffSmokeParticleData<never>;
        static create(arg0: boolean, arg1: boolean, arg2: number, arg3: number, arg4: number): $PuffSmokeParticleData<never>;
        static create(arg0: boolean, arg1: boolean, arg2: $DyeColor_): $PuffSmokeParticleData<never>;
        getCodec(arg0: $ParticleType_<T>): $MapCodec<T>;
        createType(): $ParticleType<T>;
        getFactory(): $ParticleProvider<T>;
        register(arg0: $ParticleType_<T>, arg1: $RegisterParticleProvidersEvent): void;
        get metaFactory(): $ParticleEngine$SpriteParticleRegistration<T>;
        get streamCodec(): $StreamCodec<$FriendlyByteBuf, T>;
        get quadSize(): number;
        get type(): $ParticleType<never>;
        get factory(): $ParticleProvider<T>;
    }
    export class $PuffSmokeParticleData$Constructor<T extends $PuffSmokeParticleData<T>> {
    }
    export interface $PuffSmokeParticleData$Constructor<T extends $PuffSmokeParticleData<T>> {
    }
    /**
     * Values that may be interpreted as {@link $PuffSmokeParticleData$Constructor}.
     */
    export type $PuffSmokeParticleData$Constructor_<T> = (() => void);
    export class $PuffSmokeParticle extends $CustomAnimatedTextureSheetParticle {
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
        static DOUBLE_SPEED_SENTINEL: number;
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
