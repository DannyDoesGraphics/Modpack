import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $PositionSource } from "@package/net/minecraft/world/level/gameevent";
import { $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Vector3f } from "@package/org/joml";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/core/particles" {
    export class $SculkChargeParticleOptions extends $Record implements $ParticleOptions {
        getType(): $ParticleType<$SculkChargeParticleOptions>;
        roll(): number;
        static CODEC: $MapCodec<$SculkChargeParticleOptions>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SculkChargeParticleOptions>;
        constructor(arg0: number);
        get type(): $ParticleType<$SculkChargeParticleOptions>;
    }
    /**
     * Values that may be interpreted as {@link $SculkChargeParticleOptions}.
     */
    export type $SculkChargeParticleOptions_ = { roll?: number,  } | [roll?: number, ];
    export interface $ParticleType<T> extends RegistryMarked<RegistryTypes.ParticleTypeTag, RegistryTypes.ParticleType> {}
    export class $ShriekParticleOption implements $ParticleOptions {
        getDelay(): number;
        getType(): $ParticleType<$ShriekParticleOption>;
        static CODEC: $MapCodec<$ShriekParticleOption>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ShriekParticleOption>;
        constructor(delay: number);
        get delay(): number;
        get type(): $ParticleType<$ShriekParticleOption>;
    }
    export class $ParticleTypes {
        static SOUL_FIRE_FLAME: $SimpleParticleType;
        static DUST_PILLAR: $ParticleType<$BlockParticleOption>;
        static ITEM_SNOWBALL: $SimpleParticleType;
        static EXPLOSION: $SimpleParticleType;
        static BUBBLE_COLUMN_UP: $SimpleParticleType;
        static DUST_PLUME: $SimpleParticleType;
        static REVERSE_PORTAL: $SimpleParticleType;
        static CAMPFIRE_SIGNAL_SMOKE: $SimpleParticleType;
        static TRIAL_OMEN: $SimpleParticleType;
        static DRIPPING_DRIPSTONE_LAVA: $SimpleParticleType;
        static SWEEP_ATTACK: $SimpleParticleType;
        static LANDING_LAVA: $SimpleParticleType;
        static FALLING_LAVA: $SimpleParticleType;
        static CODEC: $Codec<$ParticleOptions>;
        static DRIPPING_HONEY: $SimpleParticleType;
        static EFFECT: $SimpleParticleType;
        static WARPED_SPORE: $SimpleParticleType;
        static DUST_COLOR_TRANSITION: $ParticleType<$DustColorTransitionOptions>;
        static FALLING_DUST: $ParticleType<$BlockParticleOption>;
        static DRIPPING_WATER: $SimpleParticleType;
        static FLASH: $SimpleParticleType;
        static FALLING_DRIPSTONE_LAVA: $SimpleParticleType;
        static FALLING_DRIPSTONE_WATER: $SimpleParticleType;
        static HEART: $SimpleParticleType;
        static END_ROD: $SimpleParticleType;
        static ITEM: $ParticleType<$ItemParticleOption>;
        static FALLING_NECTAR: $SimpleParticleType;
        static POOF: $SimpleParticleType;
        static VAULT_CONNECTION: $SimpleParticleType;
        static SCULK_SOUL: $SimpleParticleType;
        static HAPPY_VILLAGER: $SimpleParticleType;
        static ENTITY_EFFECT: $ParticleType<$ColorParticleOption>;
        static WHITE_SMOKE: $SimpleParticleType;
        static EXPLOSION_EMITTER: $SimpleParticleType;
        static SQUID_INK: $SimpleParticleType;
        static VIBRATION: $ParticleType<$VibrationParticleOption>;
        static DRIPPING_DRIPSTONE_WATER: $SimpleParticleType;
        static COMPOSTER: $SimpleParticleType;
        static BUBBLE_POP: $SimpleParticleType;
        static SPLASH: $SimpleParticleType;
        static WITCH: $SimpleParticleType;
        static NAUTILUS: $SimpleParticleType;
        static SHRIEK: $ParticleType<$ShriekParticleOption>;
        static FALLING_SPORE_BLOSSOM: $SimpleParticleType;
        static SMALL_FLAME: $SimpleParticleType;
        static FISHING: $SimpleParticleType;
        static TOTEM_OF_UNDYING: $SimpleParticleType;
        static ITEM_SLIME: $SimpleParticleType;
        static ASH: $SimpleParticleType;
        static FIREWORK: $SimpleParticleType;
        static DAMAGE_INDICATOR: $SimpleParticleType;
        static SPIT: $SimpleParticleType;
        static FALLING_OBSIDIAN_TEAR: $SimpleParticleType;
        static ENCHANTED_HIT: $SimpleParticleType;
        static PORTAL: $SimpleParticleType;
        static EGG_CRACK: $SimpleParticleType;
        static ITEM_COBWEB: $SimpleParticleType;
        static WAX_OFF: $SimpleParticleType;
        static GLOW_SQUID_INK: $SimpleParticleType;
        static SNOWFLAKE: $SimpleParticleType;
        static GUST_EMITTER_SMALL: $SimpleParticleType;
        static BLOCK_MARKER: $ParticleType<$BlockParticleOption>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ParticleOptions>;
        static FALLING_HONEY: $SimpleParticleType;
        static DUST: $ParticleType<$DustParticleOptions>;
        static SPORE_BLOSSOM_AIR: $SimpleParticleType;
        static INSTANT_EFFECT: $SimpleParticleType;
        static DRAGON_BREATH: $SimpleParticleType;
        static DRIPPING_OBSIDIAN_TEAR: $SimpleParticleType;
        static CURRENT_DOWN: $SimpleParticleType;
        static ELECTRIC_SPARK: $SimpleParticleType;
        static LANDING_OBSIDIAN_TEAR: $SimpleParticleType;
        static ELDER_GUARDIAN: $SimpleParticleType;
        static INFESTED: $SimpleParticleType;
        static BLOCK: $ParticleType<$BlockParticleOption>;
        static GUST_EMITTER_LARGE: $SimpleParticleType;
        static CHERRY_LEAVES: $SimpleParticleType;
        static SNEEZE: $SimpleParticleType;
        static WHITE_ASH: $SimpleParticleType;
        static GLOW: $SimpleParticleType;
        static OMINOUS_SPAWNING: $SimpleParticleType;
        static SCULK_CHARGE_POP: $SimpleParticleType;
        static LANDING_HONEY: $SimpleParticleType;
        static RAIN: $SimpleParticleType;
        static RAID_OMEN: $SimpleParticleType;
        static TRIAL_SPAWNER_DETECTED_PLAYER: $SimpleParticleType;
        static ANGRY_VILLAGER: $SimpleParticleType;
        static FALLING_WATER: $SimpleParticleType;
        static ENCHANT: $SimpleParticleType;
        static LAVA: $SimpleParticleType;
        static WAX_ON: $SimpleParticleType;
        static CRIT: $SimpleParticleType;
        static CLOUD: $SimpleParticleType;
        static SCRAPE: $SimpleParticleType;
        static UNDERWATER: $SimpleParticleType;
        static SMALL_GUST: $SimpleParticleType;
        static CAMPFIRE_COSY_SMOKE: $SimpleParticleType;
        static TRIAL_SPAWNER_DETECTED_PLAYER_OMINOUS: $SimpleParticleType;
        static SOUL: $SimpleParticleType;
        static NOTE: $SimpleParticleType;
        static DRIPPING_LAVA: $SimpleParticleType;
        static BUBBLE: $SimpleParticleType;
        static SONIC_BOOM: $SimpleParticleType;
        static LARGE_SMOKE: $SimpleParticleType;
        static CRIMSON_SPORE: $SimpleParticleType;
        static MYCELIUM: $SimpleParticleType;
        static GUST: $SimpleParticleType;
        static FLAME: $SimpleParticleType;
        static DOLPHIN: $SimpleParticleType;
        static SCULK_CHARGE: $ParticleType<$SculkChargeParticleOptions>;
        static SMOKE: $SimpleParticleType;
        constructor();
    }
    export class $SimpleParticleType extends $ParticleType<$SimpleParticleType> implements $ParticleOptions {
        getType(): $ParticleType<never>;
        constructor(overrideLimiter: boolean);
        get type(): $ParticleType<never>;
    }
    export class $DustParticleOptions extends $ScalableParticleOptionsBase {
        getColor(): $Vector3f;
        static CODEC: $MapCodec<$DustParticleOptions>;
        static MIN_SCALE: number;
        static REDSTONE: $DustParticleOptions;
        static REDSTONE_PARTICLE_COLOR: $Vector3f;
        static MAX_SCALE: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $DustParticleOptions>;
        constructor(color: $Vector3f, scale: number);
        get color(): $Vector3f;
    }
    export class $ColorParticleOption implements $ParticleOptions {
        static streamCodec(type: $ParticleType_<$ColorParticleOption>): $StreamCodec<$ByteBuf, $ColorParticleOption>;
        getRed(): number;
        getGreen(): number;
        getBlue(): number;
        getAlpha(): number;
        getType(): $ParticleType<$ColorParticleOption>;
        static create(type: $ParticleType_<$ColorParticleOption>, red: number, green: number, blue: number): $ColorParticleOption;
        static create(type: $ParticleType_<$ColorParticleOption>, color: number): $ColorParticleOption;
        static codec(particleType: $ParticleType_<$ColorParticleOption>): $MapCodec<$ColorParticleOption>;
        get red(): number;
        get green(): number;
        get blue(): number;
        get alpha(): number;
        get type(): $ParticleType<$ColorParticleOption>;
    }
    export class $VibrationParticleOption implements $ParticleOptions {
        getDestination(): $PositionSource;
        getType(): $ParticleType<$VibrationParticleOption>;
        getArrivalInTicks(): number;
        static CODEC: $MapCodec<$VibrationParticleOption>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $VibrationParticleOption>;
        constructor(destination: $PositionSource, arrivalInTicks: number);
        get destination(): $PositionSource;
        get type(): $ParticleType<$VibrationParticleOption>;
        get arrivalInTicks(): number;
    }
    export class $ParticleGroup {
        getLimit(): number;
        static SPORE_BLOSSOM: $ParticleGroup;
        constructor(limit: number);
        get limit(): number;
    }
    export class $ParticleOptions {
    }
    export interface $ParticleOptions {
        getType(): $ParticleType<never>;
        get type(): $ParticleType<never>;
    }
    /**
     * Values that may be interpreted as {@link $ParticleOptions}.
     */
    export type $ParticleOptions_ = string | (() => $ParticleType_<never>);
    export class $BlockParticleOption implements $ParticleOptions {
        getPos(): $BlockPos;
        static streamCodec(particleType: $ParticleType_<$BlockParticleOption>): $StreamCodec<$RegistryFriendlyByteBuf, $BlockParticleOption>;
        getState(): $BlockState;
        getType(): $ParticleType<$BlockParticleOption>;
        static codec(particleType: $ParticleType_<$BlockParticleOption>): $MapCodec<$BlockParticleOption>;
        setPos(arg0: $BlockPos_): $BlockParticleOption;
        constructor(type: $ParticleType_<$BlockParticleOption>, state: $BlockState_);
        get state(): $BlockState;
        get type(): $ParticleType<$BlockParticleOption>;
    }
    export class $ScalableParticleOptionsBase implements $ParticleOptions {
        getScale(): number;
        static MIN_SCALE: number;
        static MAX_SCALE: number;
        constructor(scale: number);
        get scale(): number;
    }
    export class $ItemParticleOption implements $ParticleOptions {
        static streamCodec(particleType: $ParticleType_<$ItemParticleOption>): $StreamCodec<$RegistryFriendlyByteBuf, $ItemParticleOption>;
        getType(): $ParticleType<$ItemParticleOption>;
        getItem(): $ItemStack;
        static codec(particleType: $ParticleType_<$ItemParticleOption>): $MapCodec<$ItemParticleOption>;
        constructor(type: $ParticleType_<$ItemParticleOption>, itemStack: $ItemStack_);
        get type(): $ParticleType<$ItemParticleOption>;
        get item(): $ItemStack;
    }
    export class $ParticleType<T extends $ParticleOptions> {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        getOverrideLimiter(): boolean;
        codec(): $MapCodec<T>;
        get overrideLimiter(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ParticleType}.
     */
    export type $ParticleType_<T> = RegistryTypes.ParticleType;
    export class $DustColorTransitionOptions extends $ScalableParticleOptionsBase {
        getFromColor(): $Vector3f;
        getToColor(): $Vector3f;
        static SCULK_TO_REDSTONE: $DustColorTransitionOptions;
        static CODEC: $MapCodec<$DustColorTransitionOptions>;
        static MIN_SCALE: number;
        static SCULK_PARTICLE_COLOR: $Vector3f;
        static MAX_SCALE: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $DustColorTransitionOptions>;
        constructor(color: $Vector3f, toColor: $Vector3f, scale: number);
        get fromColor(): $Vector3f;
        get toColor(): $Vector3f;
    }
}
