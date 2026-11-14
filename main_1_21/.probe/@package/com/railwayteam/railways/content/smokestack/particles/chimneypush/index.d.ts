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

declare module "@package/com/railwayteam/railways/content/smokestack/particles/chimneypush" {
    export class $ChimneyPushParticleData$Constructor<T extends $ChimneyPushParticleData<T>> {
    }
    export interface $ChimneyPushParticleData$Constructor<T extends $ChimneyPushParticleData<T>> {
    }
    /**
     * Values that may be interpreted as {@link $ChimneyPushParticleData$Constructor}.
     */
    export type $ChimneyPushParticleData$Constructor_<T> = (() => void);
    export class $ChimneyPushParticleData$Medium extends $ChimneyPushParticleData<$ChimneyPushParticleData$Medium> {
        static CODEC: $MapCodec<$ChimneyPushParticleData$Medium>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ChimneyPushParticleData$Medium>;
        constructor();
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: boolean);
        constructor(arg0: boolean, arg1: number);
        constructor(arg0: boolean, arg1: number, arg2: number, arg3: number);
    }
    export class $ChimneyPushParticle$Factory<T extends $ChimneyPushParticleData<T>> implements $ParticleProvider<T> {
        createParticle(arg0: T, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $ChimneyPushParticleData<T extends $ChimneyPushParticleData<T>> implements $ParticleOptions, $ICustomParticleDataWithSprite<T> {
        getMetaFactory(): $ParticleEngine$SpriteParticleRegistration<T>;
        getStreamCodec(): $StreamCodec<$FriendlyByteBuf, T>;
        getQuadSize(): number;
        writeToNetwork(arg0: $FriendlyByteBuf): void;
        writeToString(): string;
        getType(): $ParticleType<never>;
        static create(arg0: boolean, arg1: boolean): $ChimneyPushParticleData<never>;
        static create(arg0: boolean, arg1: boolean, arg2: number, arg3: number, arg4: number): $ChimneyPushParticleData<never>;
        static create(arg0: boolean, arg1: boolean, arg2: $DyeColor_): $ChimneyPushParticleData<never>;
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
    export class $ChimneyPushParticleData$Small extends $ChimneyPushParticleData<$ChimneyPushParticleData$Small> {
        static CODEC: $MapCodec<$ChimneyPushParticleData$Small>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ChimneyPushParticleData$Small>;
        constructor();
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: boolean);
        constructor(arg0: boolean, arg1: number);
        constructor(arg0: boolean, arg1: number, arg2: number, arg3: number);
    }
    export class $ChimneyPushParticle extends $CustomAnimatedTextureSheetParticle {
        setOldPos(): void;
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
