import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ParticleProvider, $TextureSheetParticle } from "@package/net/minecraft/client/particle";
import { $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $ParticleType_, $ParticleOptions, $ParticleType } from "@package/net/minecraft/core/particles";
import { $ICustomParticleData } from "@package/com/simibubi/create/foundation/particle";
import { $RegisterParticleProvidersEvent } from "@package/net/neoforged/neoforge/client/event";
import { $RandomSource } from "@package/net/minecraft/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/fluids/particle" {
    export class $FluidStackParticle extends $TextureSheetParticle {
        static create(arg0: $ParticleType_<$FluidParticleData>, arg1: $ClientLevel, arg2: $FluidStack_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): $FluidStackParticle;
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
        constructor(arg0: $ClientLevel, arg1: $FluidStack_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number);
    }
    export class $BasinFluidParticle extends $FluidStackParticle {
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
        constructor(arg0: $ClientLevel, arg1: $FluidStack_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number);
    }
    export class $FluidParticleData implements $ParticleOptions, $ICustomParticleData<$FluidParticleData> {
        getStreamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $FluidParticleData>;
        getFactory(): $ParticleProvider<$FluidParticleData>;
        getType(): $ParticleType<never>;
        getCodec(arg0: $ParticleType_<$FluidParticleData>): $MapCodec<$FluidParticleData>;
        createType(): $ParticleType<$FluidParticleData>;
        register(arg0: $ParticleType_<$FluidParticleData>, arg1: $RegisterParticleProvidersEvent): void;
        static DRIP_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidParticleData>;
        static CODEC: $MapCodec<$FluidParticleData>;
        static BASIN_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidParticleData>;
        static BASIN_CODEC: $MapCodec<$FluidParticleData>;
        static DRIP_CODEC: $MapCodec<$FluidParticleData>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidParticleData>;
        constructor(arg0: $ParticleType_<never>, arg1: $FluidStack_);
        constructor();
        get streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $FluidParticleData>;
        get factory(): $ParticleProvider<$FluidParticleData>;
        get type(): $ParticleType<never>;
    }
}
