import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ParticleProvider, $Particle, $SpriteSet, $TextureSheetParticle } from "@package/net/minecraft/client/particle";
import { $SimpleParticleType, $ParticleOptions, $ParticleType } from "@package/net/minecraft/core/particles";
import { $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Vector3f } from "@package/org/joml";
import { $RandomSource } from "@package/net/minecraft/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/appeng/client/render/effects" {
    export class $MatterCannonFX extends $TextureSheetParticle {
        fromItem(arg0: $Direction_): void;
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
        constructor(arg0: $ClientLevel, arg1: number, arg2: number, arg3: number, arg4: $SpriteSet);
    }
    export class $CraftingFx$Factory implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $LightningArcFX$Factory implements $ParticleProvider<$LightningArcParticleData> {
        createParticle(arg0: $LightningArcParticleData_, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $VibrantFX$Factory implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $LightningFX$Factory implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $EnergyFx extends $TextureSheetParticle {
        setMotionX(arg0: number): void;
        setMotionY(arg0: number): void;
        setMotionZ(arg0: number): void;
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
        constructor(arg0: $ClientLevel, arg1: number, arg2: number, arg3: number, arg4: $SpriteSet);
        set motionX(value: number);
        set motionY(value: number);
        set motionZ(value: number);
    }
    export class $ParticleTypes {
        static ENERGY: $ParticleType<$EnergyParticleData>;
        static LIGHTNING_ARC: $ParticleType<$LightningArcParticleData>;
        static VIBRANT: $SimpleParticleType;
        static CRAFTING: $SimpleParticleType;
        static LIGHTNING: $SimpleParticleType;
        static MATTER_CANNON: $SimpleParticleType;
    }
    export class $CraftingFx extends $TextureSheetParticle {
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
        constructor(arg0: $ClientLevel, arg1: number, arg2: number, arg3: number, arg4: $SpriteSet);
    }
    export class $MatterCannonFX$Factory implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $LightningArcParticleData extends $Record implements $ParticleOptions {
        target(): $Vector3f;
        getType(): $ParticleType<never>;
        static CODEC: $MapCodec<$LightningArcParticleData>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $LightningArcParticleData>;
        constructor(target: $Vector3f);
        get type(): $ParticleType<never>;
    }
    /**
     * Values that may be interpreted as {@link $LightningArcParticleData}.
     */
    export type $LightningArcParticleData_ = { target?: $Vector3f,  } | [target?: $Vector3f, ];
    export class $VibrantFX extends $TextureSheetParticle {
        getLightColor(arg0: number): number;
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
        constructor(arg0: $ClientLevel, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $SpriteSet);
    }
    export class $LightningArcFX extends $LightningFX {
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
        constructor(arg0: $ClientLevel, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number);
    }
    export class $EnergyFx$Factory implements $ParticleProvider<$EnergyParticleData> {
        createParticle(arg0: $EnergyParticleData_, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $EnergyParticleData extends $Record implements $ParticleOptions {
        forItem(): boolean;
        getType(): $ParticleType<never>;
        direction(): $Direction;
        static CODEC: $MapCodec<$EnergyParticleData>;
        static FOR_BLOCK: $EnergyParticleData;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $EnergyParticleData>;
        constructor(forItem: boolean, direction: $Direction_);
        get type(): $ParticleType<never>;
    }
    /**
     * Values that may be interpreted as {@link $EnergyParticleData}.
     */
    export type $EnergyParticleData_ = { forItem?: boolean, direction?: $Direction_,  } | [forItem?: boolean, direction?: $Direction_, ];
    export class $LightningFX extends $TextureSheetParticle {
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
