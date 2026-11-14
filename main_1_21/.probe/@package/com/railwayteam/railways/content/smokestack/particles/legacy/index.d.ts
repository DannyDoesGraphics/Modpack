import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ParticleProvider, $Particle, $SimpleAnimatedParticle, $SpriteSet, $ParticleEngine$SpriteParticleRegistration } from "@package/net/minecraft/client/particle";
import { $ParticleType_, $ParticleOptions, $ParticleType } from "@package/net/minecraft/core/particles";
import { $Enum } from "@package/java/lang";
import { $ICustomParticleDataWithSprite } from "@package/com/simibubi/create/foundation/particle";
import { $RegisterParticleProvidersEvent } from "@package/net/neoforged/neoforge/client/event";
import { $RandomSource } from "@package/net/minecraft/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/railwayteam/railways/content/smokestack/particles/legacy" {
    export class $SmokeParticle$SmokeQuality extends $Enum<$SmokeParticle$SmokeQuality> {
        static values(): $SmokeParticle$SmokeQuality[];
        static valueOf(arg0: string): $SmokeParticle$SmokeQuality;
        static HIGH: $SmokeParticle$SmokeQuality;
        static MEDIUM: $SmokeParticle$SmokeQuality;
        static LOW: $SmokeParticle$SmokeQuality;
        static ULTRA: $SmokeParticle$SmokeQuality;
    }
    /**
     * Values that may be interpreted as {@link $SmokeParticle$SmokeQuality}.
     */
    export type $SmokeParticle$SmokeQuality_ = "low" | "medium" | "high" | "ultra";
    export class $SmokeParticle$Factory implements $ParticleProvider<$SmokeParticleData> {
        createParticle(arg0: $SmokeParticleData, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $SmokeParticleData implements $ParticleOptions, $ICustomParticleDataWithSprite<$SmokeParticleData> {
        getMetaFactory(): $ParticleEngine$SpriteParticleRegistration<$SmokeParticleData>;
        getStreamCodec(): $StreamCodec<$FriendlyByteBuf, $SmokeParticleData>;
        writeToNetwork(arg0: $FriendlyByteBuf): void;
        writeToString(): string;
        getType(): $ParticleType<never>;
        getCodec(arg0: $ParticleType_<$SmokeParticleData>): $MapCodec<$SmokeParticleData>;
        createType(): $ParticleType<$SmokeParticleData>;
        getFactory(): $ParticleProvider<$SmokeParticleData>;
        register(arg0: $ParticleType_<$SmokeParticleData>, arg1: $RegisterParticleProvidersEvent): void;
        static CODEC: $MapCodec<$SmokeParticleData>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $SmokeParticleData>;
        constructor();
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: boolean);
        constructor(arg0: boolean, arg1: number);
        constructor(arg0: boolean, arg1: number, arg2: number, arg3: number);
        get metaFactory(): $ParticleEngine$SpriteParticleRegistration<$SmokeParticleData>;
        get streamCodec(): $StreamCodec<$FriendlyByteBuf, $SmokeParticleData>;
        get type(): $ParticleType<never>;
        get factory(): $ParticleProvider<$SmokeParticleData>;
    }
    export class $SmokeParticle extends $SimpleAnimatedParticle {
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
