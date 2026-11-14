import { $Int2DoubleFunction, $Int2DoubleFunction_, $Int2IntFunction_ } from "@package/it/unimi/dsi/fastutil/ints";
import { $Codec } from "@package/com/mojang/serialization";
import { $Tag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Entity, $Entity$RemovalReason_, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $MobEffectInstanceAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $AttributeModifier, $Attribute, $AttributeModifier$Operation_, $AttributeModifier$Operation, $AttributeMap } from "@package/net/minecraft/world/entity/ai/attributes";
import { $IClientMobEffectExtensions } from "@package/net/neoforged/neoforge/client/extensions/common";
import { $FeatureFlag, $FeatureFlagSet, $FeatureElement } from "@package/net/minecraft/world/flag";
import { $List, $Set_, $Map, $Set } from "@package/java/util";
import { $BiConsumer_, $Consumer_ } from "@package/java/util/function";
import { $ChatFormatting } from "@package/net/minecraft";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Holder_, $Holder, $Registry } from "@package/net/minecraft/core";
import { $SoundEvent_ } from "@package/net/minecraft/sounds";
import { $IMobEffectExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum, $Record, $Runnable_, $Comparable } from "@package/java/lang";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $EffectCure } from "@package/net/neoforged/neoforge/common";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/effect" {
    export class $InstantenousMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
        constructor(category: $MobEffectCategory_, color: number);
    }
    export class $MobEffect implements $FeatureElement, $IMobEffectExtension {
        addAttributeModifier(attribute: $Holder_<$Attribute>, id: $ResourceLocation_, amount: number, arg3: $AttributeModifier$Operation_): $MobEffect;
        addAttributeModifier(arg0: $Holder_<$Attribute>, arg1: $ResourceLocation_, arg2: $AttributeModifier$Operation_, arg3: $Int2DoubleFunction_): $MobEffect;
        withSoundOnAdded(sound: $SoundEvent_): $MobEffect;
        setBlendDuration(blendDuration: number): $MobEffect;
        /**
         * Returns the color of the potion liquid.
         */
        getBlendDurationTicks(): number;
        applyEffectTick(livingEntity: $LivingEntity, amplifier: number): boolean;
        applyInstantenousEffect(source: $Entity | null, indirectSource: $Entity | null, livingEntity: $LivingEntity, amplifier: number, health: number): void;
        /**
         * Get if the potion is beneficial to the player. Beneficial potions are shown on the first row of the HUD
         */
        isInstantenous(): boolean;
        createModifiers(amplifier: number, output: $BiConsumer_<$Holder<$Attribute>, $AttributeModifier>): void;
        /**
         * Get if the potion is beneficial to the player. Beneficial potions are shown on the first row of the HUD
         */
        isBeneficial(): boolean;
        createParticleOptions(effect: $MobEffectInstance): $ParticleOptions;
        /**
         * @deprecated
         */
        initializeClient(arg0: $Consumer_<$IClientMobEffectExtensions>): void;
        shouldApplyEffectTickThisTick(duration: number, amplifier: number): boolean;
        getDisplayName(): $Component;
        getCategory(): $MobEffectCategory;
        requiredFeatures(): $FeatureFlagSet;
        requiredFeatures(...requiredFeatures: $FeatureFlag[]): $MobEffect;
        /**
         * Returns the name of the effect.
         */
        getDescriptionId(): string;
        /**
         * Returns the color of the potion liquid.
         */
        getColor(): number;
        onMobRemoved(livingEntity: $LivingEntity, amplifier: number, reason: $Entity$RemovalReason_): void;
        onEffectAdded(livingEntity: $LivingEntity, amplifier: number): void;
        onEffectStarted(livingEntity: $LivingEntity, amplifier: number): void;
        addAttributeModifiers(attributeMap: $AttributeMap, amplifier: number): void;
        removeAttributeModifiers(attributeMap: $AttributeMap): void;
        onMobHurt(livingEntity: $LivingEntity, amplifier: number, damageSource: $DamageSource_, amount: number): void;
        isEnabled(enabledFeatures: $FeatureFlagSet): boolean;
        /**
         * Fill the given set with the `EffectCure`s this effect should be curable with by default
         */
        fillEffectCures(cures: $Set_<$EffectCure>, effectInstance: $MobEffectInstance): void;
        /**
         * Used for determining `MobEffect` sort order in GUIs.
         * Defaults to the `MobEffect`'s liquid color.
         */
        getSortOrder(effectInstance: $MobEffectInstance): number;
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
        constructor(category: $MobEffectCategory_, color: number);
        constructor(category: $MobEffectCategory_, color: number, particle: $ParticleOptions_);
        set blendDuration(value: number);
        get blendDurationTicks(): number;
        get instantenous(): boolean;
        get beneficial(): boolean;
        get displayName(): $Component;
        get category(): $MobEffectCategory;
        get descriptionId(): string;
        get color(): number;
    }
    /**
     * Values that may be interpreted as {@link $MobEffect}.
     */
    export type $MobEffect_ = RegistryTypes.MobEffect;
    export class $MobEffectInstance$Details extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $MobEffectInstance$Details}.
     */
    export type $MobEffectInstance$Details_ = { duration?: number, ambient?: boolean, amplifier?: number, showParticles?: boolean, cures?: ($Set_<$EffectCure>) | undefined, showIcon?: boolean, hiddenEffect?: ($MobEffectInstance$Details_) | undefined,  } | [duration?: number, ambient?: boolean, amplifier?: number, showParticles?: boolean, cures?: ($Set_<$EffectCure>) | undefined, showIcon?: boolean, hiddenEffect?: ($MobEffectInstance$Details_) | undefined, ];
    export class $HealOrHarmMobEffect extends $InstantenousMobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $PoisonMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $HungerMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $MobEffects {
        static bootstrap(registry: $Registry<$MobEffect_>): $Holder<$MobEffect>;
        static INVISIBILITY: $Holder<$MobEffect>;
        static SLOW_FALLING: $Holder<$MobEffect>;
        static DAMAGE_RESISTANCE: $Holder<$MobEffect>;
        static HEAL: $Holder<$MobEffect>;
        static BAD_OMEN: $Holder<$MobEffect>;
        static WEAKNESS: $Holder<$MobEffect>;
        static DOLPHINS_GRACE: $Holder<$MobEffect>;
        static JUMP: $Holder<$MobEffect>;
        static TRIAL_OMEN: $Holder<$MobEffect>;
        static MOVEMENT_SLOWDOWN: $Holder<$MobEffect>;
        static WITHER: $Holder<$MobEffect>;
        static LUCK: $Holder<$MobEffect>;
        static FIRE_RESISTANCE: $Holder<$MobEffect>;
        static HARM: $Holder<$MobEffect>;
        static WIND_CHARGED: $Holder<$MobEffect>;
        static WATER_BREATHING: $Holder<$MobEffect>;
        static GLOWING: $Holder<$MobEffect>;
        static OOZING: $Holder<$MobEffect>;
        static DIG_SPEED: $Holder<$MobEffect>;
        static ABSORPTION: $Holder<$MobEffect>;
        static HUNGER: $Holder<$MobEffect>;
        static DIG_SLOWDOWN: $Holder<$MobEffect>;
        static HERO_OF_THE_VILLAGE: $Holder<$MobEffect>;
        static REGENERATION: $Holder<$MobEffect>;
        static INFESTED: $Holder<$MobEffect>;
        static WEAVING: $Holder<$MobEffect>;
        static BLINDNESS: $Holder<$MobEffect>;
        static MOVEMENT_SPEED: $Holder<$MobEffect>;
        static DAMAGE_BOOST: $Holder<$MobEffect>;
        static LEVITATION: $Holder<$MobEffect>;
        static UNLUCK: $Holder<$MobEffect>;
        static CONDUIT_POWER: $Holder<$MobEffect>;
        static RAID_OMEN: $Holder<$MobEffect>;
        static CONFUSION: $Holder<$MobEffect>;
        static POISON: $Holder<$MobEffect>;
        static HEALTH_BOOST: $Holder<$MobEffect>;
        static DARKNESS: $Holder<$MobEffect>;
        static NIGHT_VISION: $Holder<$MobEffect>;
        static SATURATION: $Holder<$MobEffect>;
        constructor();
    }
    export class $MobEffectInstance implements $Comparable<$MobEffectInstance>, $MobEffectInstanceAccessor {
        /**
         * @note_to_llm Check MobEffectUtils binding for easier way to create MobEffectInstance.
         * Check MobEffectUtils binding for easier way to create MobEffectInstance.
         * Check MobEffectUtils binding for easier way to create MobEffectInstance.
         */
        /**
         * Gets whether this potion effect originated from a beacon
         */
        showIcon(): boolean;
        getBlendFactor(entity: $LivingEntity, delta: number): number;
        /**
         * Gets whether this potion effect originated from a beacon
         */
        isInfiniteDuration(): boolean;
        endsWithin(duration: number): boolean;
        mapDuration(mapper: $Int2IntFunction_): number;
        skipBlending(): void;
        compareTo(other: $MobEffectInstance): number;
        update(other: $MobEffectInstance): boolean;
        /**
         * Read a custom potion effect from a potion item's NBT data.
         */
        static load(nbt: $CompoundTag_): $MobEffectInstance;
        save(): $Tag;
        is(effect: $Holder_<$MobEffect>): boolean;
        tick(entity: $LivingEntity, onExpirationRunnable: $Runnable_): boolean;
        getDuration(): number;
        getDescriptionId(): string;
        onMobRemoved(livingEntity: $LivingEntity, reason: $Entity$RemovalReason_): void;
        getEffect(): $Holder<$MobEffect>;
        /**
         * Gets whether this potion effect originated from a beacon
         */
        isVisible(): boolean;
        getParticleOptions(): $ParticleOptions;
        /**
         * Gets whether this potion effect originated from a beacon
         */
        isAmbient(): boolean;
        onEffectAdded(livingEntity: $LivingEntity): void;
        onEffectStarted(livingEntity: $LivingEntity): void;
        copyBlendState(other: $MobEffectInstance): void;
        getAmplifier(): number;
        onMobHurt(livingEntity: $LivingEntity, damageSource: $DamageSource_, amount: number): void;
        getCures(): $Set<$EffectCure>;
        create$getHiddenEffect(): $MobEffectInstance;
        static MAX_AMPLIFIER: number;
        static CODEC: $Codec<$MobEffectInstance>;
        static INFINITE_DURATION: number;
        static MIN_AMPLIFIER: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MobEffectInstance>;
        constructor(effect: $Holder_<$MobEffect>, duration: number, amplifier: number, ambient: boolean, visible: boolean);
        constructor(other: $MobEffectInstance);
        constructor(effect: $Holder_<$MobEffect>, duration: number, amplifier: number, ambient: boolean, visible: boolean, showIcon: boolean);
        constructor(effect: $Holder_<$MobEffect>, duration: number, amplifier: number, ambient: boolean, visible: boolean, showIcon: boolean, hiddenEffect: $MobEffectInstance | null);
        constructor(effect: $Holder_<$MobEffect>, duration: number, amplifier: number);
        constructor(effect: $Holder_<$MobEffect>, duration: number);
        constructor(effect: $Holder_<$MobEffect>);
        get infiniteDuration(): boolean;
        get duration(): number;
        get descriptionId(): string;
        get effect(): $Holder<$MobEffect>;
        get visible(): boolean;
        get particleOptions(): $ParticleOptions;
        get ambient(): boolean;
        get amplifier(): number;
        get cures(): $Set<$EffectCure>;
    }
    export class $SaturationMobEffect extends $InstantenousMobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $BadOmenMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $MobEffectUtil {
        static formatDuration(effect: $MobEffectInstance, durationFactor: number, ticksPerSecond: number): $Component;
        static hasWaterBreathing(entity: $LivingEntity): boolean;
        static addEffectToPlayersAround(level: $ServerLevel, source: $Entity | null, pos: $Vec3_, radius: number, arg4: $MobEffectInstance, effect: number): $List<$ServerPlayer>;
        static hasDigSpeed(entity: $LivingEntity): boolean;
        static getDigSpeedAmplification(entity: $LivingEntity): number;
        constructor();
    }
    export class $AbsorptionMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $WindChargedMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $MobEffectCategory extends $Enum<$MobEffectCategory> {
        getTooltipFormatting(): $ChatFormatting;
        static values(): $MobEffectCategory[];
        static valueOf(arg0: string): $MobEffectCategory;
        static HARMFUL: $MobEffectCategory;
        static BENEFICIAL: $MobEffectCategory;
        static NEUTRAL: $MobEffectCategory;
        get tooltipFormatting(): $ChatFormatting;
    }
    /**
     * Values that may be interpreted as {@link $MobEffectCategory}.
     */
    export type $MobEffectCategory_ = "beneficial" | "harmful" | "neutral";
    export interface $MobEffect extends RegistryMarked<RegistryTypes.MobEffectTag, RegistryTypes.MobEffect> {}
    export class $MobEffect$AttributeTemplate extends $Record {
        curve(): $Int2DoubleFunction;
        id(): $ResourceLocation;
        create(level: number): $AttributeModifier;
        amount(): number;
        operation(): $AttributeModifier$Operation;
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: $AttributeModifier$Operation_);
        constructor(id: $ResourceLocation_, amount: number, operation: $AttributeModifier$Operation_, curve: $Int2DoubleFunction_ | null);
    }
    /**
     * Values that may be interpreted as {@link $MobEffect$AttributeTemplate}.
     */
    export type $MobEffect$AttributeTemplate_ = { operation?: $AttributeModifier$Operation_, amount?: number, curve?: $Int2DoubleFunction_, id?: $ResourceLocation_,  } | [operation?: $AttributeModifier$Operation_, amount?: number, curve?: $Int2DoubleFunction_, id?: $ResourceLocation_, ];
    export class $WeavingMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $RaidOmenMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $InfestedMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $OozingMobEffect$NearbySlimes {
    }
    export interface $OozingMobEffect$NearbySlimes {
    }
    /**
     * Values that may be interpreted as {@link $OozingMobEffect$NearbySlimes}.
     */
    export type $OozingMobEffect$NearbySlimes_ = (() => void);
    export class $RegenerationMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $MobEffectInstance$BlendState {
    }
    export class $WitherMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
    export class $OozingMobEffect extends $MobEffect {
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
    }
}
