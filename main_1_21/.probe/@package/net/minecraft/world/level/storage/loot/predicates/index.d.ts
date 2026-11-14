import { $NumberProvider, $NumberProvider_ } from "@package/net/minecraft/world/level/storage/loot/providers/number";
import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $List, $Map_, $List_, $Map, $Set } from "@package/java/util";
import { $StatePropertiesPredicate_, $StatePropertiesPredicate, $EntityPredicate$Builder, $LocationPredicate, $ItemPredicate, $DamageSourcePredicate_, $LocationPredicate$Builder, $ItemPredicate$Builder, $StatePropertiesPredicate$Builder, $ItemPredicate_, $EntityPredicate_, $DamageSourcePredicate$Builder, $LocationPredicate_, $EntityPredicate, $DamageSourcePredicate } from "@package/net/minecraft/advancements/critereon";
import { $Predicate, $Function_, $Predicate_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos, $Holder_, $Holder, $BlockPos_ } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $LevelBasedValue, $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Iterable_, $Record } from "@package/java/lang";
import { $LootContextParam } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $LootContextUser, $ValidationContext, $LootContext, $IntRange, $LootContext$EntityTarget, $LootContext$EntityTarget_ } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/minecraft/world/level/storage/loot/predicates" {
    export class $WeatherCheck$Builder implements $LootItemCondition$Builder {
        setRaining(isRaining: boolean): $WeatherCheck$Builder;
        setThundering(isRaining: boolean): $WeatherCheck$Builder;
        build(): $WeatherCheck;
        invert(): $LootItemCondition$Builder;
        or(condition: $LootItemCondition$Builder_): $AnyOfCondition$Builder;
        and(condition: $LootItemCondition$Builder_): $AllOfCondition$Builder;
        constructor();
        set raining(value: boolean);
        set thundering(value: boolean);
    }
    /**
     * A LootItemCondition that checks whether it currently raining or thundering.
     * Both checks are optional.
     */
    export class $WeatherCheck extends $Record implements $LootItemCondition {
        isRaining(): (boolean) | undefined;
        isThundering(): (boolean) | undefined;
        static weather(): $WeatherCheck$Builder;
        test(context: $LootContext): boolean;
        getType(): $LootItemConditionType;
        /**
         * Get the parameters used by this object.
         */
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$WeatherCheck>;
        constructor(arg0: (boolean) | undefined, arg1: (boolean) | undefined);
        get raining(): (boolean) | undefined;
        get thundering(): (boolean) | undefined;
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * Values that may be interpreted as {@link $WeatherCheck}.
     */
    export type $WeatherCheck_ = { isThundering?: (boolean) | undefined, isRaining?: (boolean) | undefined,  } | [isThundering?: (boolean) | undefined, isRaining?: (boolean) | undefined, ];
    export class $LootItemBlockStatePropertyCondition$Builder implements $LootItemCondition$Builder {
        setProperties(statePredicateBuilder: $StatePropertiesPredicate$Builder): $LootItemBlockStatePropertyCondition$Builder;
        build(): $LootItemCondition;
        invert(): $LootItemCondition$Builder;
        or(condition: $LootItemCondition$Builder_): $AnyOfCondition$Builder;
        and(condition: $LootItemCondition$Builder_): $AllOfCondition$Builder;
        constructor(block: $Block_);
        set properties(value: $StatePropertiesPredicate$Builder);
    }
    /**
     * A LootItemCondition that provides a random chance based on the level of a certain enchantment on the tool.
     * The chances are given as an array of float values that represent the given chance (0..1) for the enchantment level corresponding to the index.
     * `[0.2, 0.3, 0.6]` would provide a 20% chance for not enchanted, 30% chance for enchanted at level 1 and 60% chance for enchanted at level 2 or above.
     */
    export class $BonusLevelTableCondition extends $Record implements $LootItemCondition {
        /**
         * Get the parameters used by this object.
         */
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        enchantment(): $Holder<$Enchantment>;
        static bonusLevelFlatChance(enchantment: $Holder_<$Enchantment>, ...values: number[]): $LootItemCondition$Builder;
        values(): $List<number>;
        test(context: $LootContext): boolean;
        getType(): $LootItemConditionType;
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$BonusLevelTableCondition>;
        constructor(arg0: $Holder_<$Enchantment>, arg1: $List_<number>);
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get type(): $LootItemConditionType;
    }
    /**
     * Values that may be interpreted as {@link $BonusLevelTableCondition}.
     */
    export type $BonusLevelTableCondition_ = { enchantment?: $Holder_<$Enchantment>, values?: $List_<number>,  } | [enchantment?: $Holder_<$Enchantment>, values?: $List_<number>, ];
    export class $LootItemRandomChanceWithEnchantedBonusCondition extends $Record implements $LootItemCondition {
        /**
         * Get the parameters used by this object.
         */
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        enchantment(): $Holder<$Enchantment>;
        unenchantedChance(): number;
        enchantedChance(): $LevelBasedValue;
        localvar$fan001$puzzleslib$test(enchantmentLevel: number, lootContext: $LootContext): number;
        static randomChanceAndLootingBoost(registries: $HolderLookup$Provider, base: number, perLevelAfterFirst: number): $LootItemCondition$Builder;
        test(context: $LootContext): boolean;
        getType(): $LootItemConditionType;
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$LootItemRandomChanceWithEnchantedBonusCondition>;
        constructor(arg0: number, arg1: $LevelBasedValue, arg2: $Holder_<$Enchantment>);
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get type(): $LootItemConditionType;
    }
    /**
     * Values that may be interpreted as {@link $LootItemRandomChanceWithEnchantedBonusCondition}.
     */
    export type $LootItemRandomChanceWithEnchantedBonusCondition_ = { enchantment?: $Holder_<$Enchantment>, unenchantedChance?: number, enchantedChance?: $LevelBasedValue,  } | [enchantment?: $Holder_<$Enchantment>, unenchantedChance?: number, enchantedChance?: $LevelBasedValue, ];
    export class $EntityHasScoreCondition$Builder implements $LootItemCondition$Builder {
        /**
         * Add a check that the score for the given `objectiveName` is within `scoreRange`.
         */
        withScore(objectiveName: string, scoreRange: $IntRange): $EntityHasScoreCondition$Builder;
        build(): $LootItemCondition;
        invert(): $LootItemCondition$Builder;
        or(condition: $LootItemCondition$Builder_): $AnyOfCondition$Builder;
        and(condition: $LootItemCondition$Builder_): $AllOfCondition$Builder;
        constructor(entityTarget: $LootContext$EntityTarget_);
    }
    /**
     * A LootItemCondition that checks the tool against an `ItemPredicate`.
     */
    export class $MatchTool extends $Record implements $LootItemCondition {
        /**
         * Get the parameters used by this object.
         */
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        static toolMatches(toolPredicateBuilder: $ItemPredicate$Builder): $LootItemCondition$Builder;
        test(context: $LootContext): boolean;
        getType(): $LootItemConditionType;
        predicate(): ($ItemPredicate) | undefined;
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$MatchTool>;
        constructor(arg0: ($ItemPredicate_) | undefined);
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get type(): $LootItemConditionType;
    }
    /**
     * Values that may be interpreted as {@link $MatchTool}.
     */
    export type $MatchTool_ = { predicate?: ($ItemPredicate_) | undefined,  } | [predicate?: ($ItemPredicate_) | undefined, ];
    /**
     * A LootItemCondition which checks `LootContextParams#ORIGIN` and `LootContextParams#DAMAGE_SOURCE` against a `DamageSourcePredicate`.
     */
    export class $DamageSourceCondition extends $Record implements $LootItemCondition {
        /**
         * Get the parameters used by this object.
         */
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        static hasDamageSource(builder: $DamageSourcePredicate$Builder): $LootItemCondition$Builder;
        test(context: $LootContext): boolean;
        getType(): $LootItemConditionType;
        predicate(): ($DamageSourcePredicate) | undefined;
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$DamageSourceCondition>;
        constructor(arg0: ($DamageSourcePredicate_) | undefined);
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get type(): $LootItemConditionType;
    }
    /**
     * Values that may be interpreted as {@link $DamageSourceCondition}.
     */
    export type $DamageSourceCondition_ = { predicate?: ($DamageSourcePredicate_) | undefined,  } | [predicate?: ($DamageSourcePredicate_) | undefined, ];
    /**
     * A LootItemCondition that checks a given `EntityPredicate` against a given `EntityTarget`.
     */
    export class $LootItemEntityPropertyCondition extends $Record implements $LootItemCondition {
        /**
         * Get the parameters used by this object.
         */
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        entityTarget(): $LootContext$EntityTarget;
        static entityPresent(target: $LootContext$EntityTarget_): $LootItemCondition$Builder;
        static hasProperties(target: $LootContext$EntityTarget_, predicateBuilder: $EntityPredicate$Builder): $LootItemCondition$Builder;
        static hasProperties(target: $LootContext$EntityTarget_, entityPredicate: $EntityPredicate_): $LootItemCondition$Builder;
        test(context: $LootContext): boolean;
        getType(): $LootItemConditionType;
        predicate(): ($EntityPredicate) | undefined;
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$LootItemEntityPropertyCondition>;
        constructor(arg0: ($EntityPredicate_) | undefined, arg1: $LootContext$EntityTarget_);
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get type(): $LootItemConditionType;
    }
    /**
     * Values that may be interpreted as {@link $LootItemEntityPropertyCondition}.
     */
    export type $LootItemEntityPropertyCondition_ = { entityTarget?: $LootContext$EntityTarget_, predicate?: ($EntityPredicate_) | undefined,  } | [entityTarget?: $LootContext$EntityTarget_, predicate?: ($EntityPredicate_) | undefined, ];
    /**
     * Registry for `LootItemConditionType`.
     * 
     * @see LootItemCondition
     */
    export class $LootItemConditions {
        static ENTITY_PROPERTIES: $LootItemConditionType;
        static TIME_CHECK: $LootItemConditionType;
        static RANDOM_CHANCE: $LootItemConditionType;
        static DAMAGE_SOURCE_PROPERTIES: $LootItemConditionType;
        static ALL_OF: $LootItemConditionType;
        static MATCH_TOOL: $LootItemConditionType;
        static ANY_OF: $LootItemConditionType;
        static ENTITY_SCORES: $LootItemConditionType;
        static WEATHER_CHECK: $LootItemConditionType;
        static VALUE_CHECK: $LootItemConditionType;
        static TABLE_BONUS: $LootItemConditionType;
        static BLOCK_STATE_PROPERTY: $LootItemConditionType;
        static REFERENCE: $LootItemConditionType;
        static INVERTED: $LootItemConditionType;
        static LOCATION_CHECK: $LootItemConditionType;
        static RANDOM_CHANCE_WITH_ENCHANTED_BONUS: $LootItemConditionType;
        static KILLED_BY_PLAYER: $LootItemConditionType;
        static SURVIVES_EXPLOSION: $LootItemConditionType;
        static ENCHANTMENT_ACTIVE_CHECK: $LootItemConditionType;
        constructor();
    }
    /**
     * The SerializerType for `LootItemCondition`.
     */
    export class $LootItemConditionType extends $Record {
        codec(): $MapCodec<$LootItemCondition>;
        constructor(arg0: $MapCodec_<$LootItemCondition>);
    }
    /**
     * Values that may be interpreted as {@link $LootItemConditionType}.
     */
    export type $LootItemConditionType_ = RegistryTypes.LootConditionType | { codec?: $MapCodec_<$LootItemCondition>,  } | [codec?: $MapCodec_<$LootItemCondition>, ];
    export class $AllOfCondition$Builder extends $CompositeLootItemCondition$Builder {
        constructor(...arg0: $LootItemCondition$Builder_[]);
    }
    export interface $LootItemConditionType extends RegistryMarked<RegistryTypes.LootConditionTypeTag, RegistryTypes.LootConditionType> {}
    /**
     * A LootItemCondition that succeeds with a given probability.
     */
    export class $LootItemRandomChanceCondition extends $Record implements $LootItemCondition {
        chance(): $NumberProvider;
        static randomChance(chance: $NumberProvider_): $LootItemCondition$Builder;
        static randomChance(chance: number): $LootItemCondition$Builder;
        test(context: $LootContext): boolean;
        getType(): $LootItemConditionType;
        /**
         * Get the parameters used by this object.
         */
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$LootItemRandomChanceCondition>;
        constructor(arg0: $NumberProvider_);
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * Values that may be interpreted as {@link $LootItemRandomChanceCondition}.
     */
    export type $LootItemRandomChanceCondition_ = { chance?: $NumberProvider_,  } | [chance?: $NumberProvider_, ];
    export class $EnchantmentActiveCheck extends $Record implements $LootItemCondition {
        /**
         * Get the parameters used by this object.
         */
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        static enchantmentActiveCheck(): $LootItemCondition$Builder;
        static enchantmentInactiveCheck(): $LootItemCondition$Builder;
        test(context: $LootContext): boolean;
        getType(): $LootItemConditionType;
        active(): boolean;
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$EnchantmentActiveCheck>;
        constructor(arg0: boolean);
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get type(): $LootItemConditionType;
    }
    /**
     * Values that may be interpreted as {@link $EnchantmentActiveCheck}.
     */
    export type $EnchantmentActiveCheck_ = { active?: boolean,  } | [active?: boolean, ];
    /**
     * A LootItemCondition that checks the day time against an `IntRange` after applying an optional modulo division.
     */
    export class $TimeCheck extends $Record implements $LootItemCondition {
        /**
         * Get the parameters used by this object.
         */
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        value(): $IntRange;
        test(context: $LootContext): boolean;
        static time(timeRange: $IntRange): $TimeCheck$Builder;
        getType(): $LootItemConditionType;
        period(): (number) | undefined;
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$TimeCheck>;
        constructor(arg0: (number) | undefined, arg1: $IntRange);
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get type(): $LootItemConditionType;
    }
    /**
     * Values that may be interpreted as {@link $TimeCheck}.
     */
    export type $TimeCheck_ = { value?: $IntRange, period?: (number) | undefined,  } | [value?: $IntRange, period?: (number) | undefined, ];
    /**
     * Base interface for builders that can accept loot conditions.
     * 
     * @see LootItemCondition
     */
    export class $ConditionUserBuilder<T extends $ConditionUserBuilder<T>> {
    }
    export interface $ConditionUserBuilder<T extends $ConditionUserBuilder<T>> {
        unwrap(): T;
        when<E>(builderSources: $Iterable_<E>, toBuilderFunction: $Function_<E, $LootItemCondition$Builder>): T;
        when(conditionBuilder: $LootItemCondition$Builder_): T;
    }
    export class $CompositeLootItemCondition implements $LootItemCondition {
        test(context: $LootContext): boolean;
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
        /**
         * Get the parameters used by this object.
         */
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * A LootItemCondition that checks whether an item should survive from an explosion or not.
     * This condition checks the explosion radius loot parameter.
     */
    export class $ExplosionCondition implements $LootItemCondition {
        /**
         * Get the parameters used by this object.
         */
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        static survivesExplosion(): $LootItemCondition$Builder;
        test(context: $LootContext): boolean;
        getType(): $LootItemConditionType;
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$ExplosionCondition>;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get type(): $LootItemConditionType;
    }
    /**
     * A condition based on `LootContext`.
     * 
     * @see `LootItemConditions`
     * @see `PredicateManager`
     */
    export class $LootItemCondition {
        static CODEC: $Codec<$Holder<$LootItemCondition>>;
        static DIRECT_CODEC: $Codec<$LootItemCondition>;
        static TYPED_CODEC: $Codec<$LootItemCondition>;
    }
    export interface $LootItemCondition extends $LootContextUser, $Predicate<$LootContext> {
        getType(): $LootItemConditionType;
        get type(): $LootItemConditionType;
    }
    export class $AnyOfCondition$Builder extends $CompositeLootItemCondition$Builder {
        constructor(...arg0: $LootItemCondition$Builder_[]);
    }
    /**
     * A LootItemCondition that inverts the output of another one.
     */
    export class $InvertedLootItemCondition extends $Record implements $LootItemCondition {
        /**
         * Get the parameters used by this object.
         */
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        static invert(toInvert: $LootItemCondition$Builder_): $LootItemCondition$Builder;
        test(context: $LootContext): boolean;
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
        getType(): $LootItemConditionType;
        term(): $LootItemCondition;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$InvertedLootItemCondition>;
        constructor(term: $LootItemCondition);
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get type(): $LootItemConditionType;
    }
    /**
     * Values that may be interpreted as {@link $InvertedLootItemCondition}.
     */
    export type $InvertedLootItemCondition_ = { term?: $LootItemCondition,  } | [term?: $LootItemCondition, ];
    /**
     * A LootItemCondition that checks whether the block state matches a given Block and `StatePropertiesPredicate`.
     */
    export class $LootItemBlockStatePropertyCondition extends $Record implements $LootItemCondition {
        /**
         * Get the parameters used by this object.
         */
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        static hasBlockStateProperties(block: $Block_): $LootItemBlockStatePropertyCondition$Builder;
        test(context: $LootContext): boolean;
        properties(): ($StatePropertiesPredicate) | undefined;
        getType(): $LootItemConditionType;
        block(): $Holder<$Block>;
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$LootItemBlockStatePropertyCondition>;
        constructor(arg0: $Holder_<$Block>, arg1: ($StatePropertiesPredicate_) | undefined);
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get type(): $LootItemConditionType;
    }
    /**
     * Values that may be interpreted as {@link $LootItemBlockStatePropertyCondition}.
     */
    export type $LootItemBlockStatePropertyCondition_ = { properties?: ($StatePropertiesPredicate_) | undefined, block?: $Holder_<$Block>,  } | [properties?: ($StatePropertiesPredicate_) | undefined, block?: $Holder_<$Block>, ];
    export class $TimeCheck$Builder implements $LootItemCondition$Builder {
        setPeriod(period: number): $TimeCheck$Builder;
        invert(): $LootItemCondition$Builder;
        or(condition: $LootItemCondition$Builder_): $AnyOfCondition$Builder;
        and(condition: $LootItemCondition$Builder_): $AllOfCondition$Builder;
        build(): $LootItemCondition;
        constructor(timeRange: $IntRange);
        set period(value: number);
    }
    export class $LootItemCondition$Builder {
    }
    export interface $LootItemCondition$Builder {
        invert(): $LootItemCondition$Builder;
        build(): $LootItemCondition;
        or(condition: $LootItemCondition$Builder_): $AnyOfCondition$Builder;
        and(condition: $LootItemCondition$Builder_): $AllOfCondition$Builder;
    }
    /**
     * Values that may be interpreted as {@link $LootItemCondition$Builder}.
     */
    export type $LootItemCondition$Builder_ = (() => $LootItemCondition);
    export class $AllOfCondition extends $CompositeLootItemCondition {
        static allOf(...conditions: $LootItemCondition$Builder_[]): $AllOfCondition$Builder;
        static allOf(conditions: $List_<$LootItemCondition>): $AllOfCondition;
        static INLINE_CODEC: $Codec<$AllOfCondition>;
        static CODEC: $MapCodec<$AllOfCondition>;
    }
    /**
     * A LootItemCondition that checks if an Entity selected by a `EntityTarget` has a given set of scores.
     * If one of the given objectives does not exist or the entity does not have a score for that objective, the condition fails.
     */
    export class $EntityHasScoreCondition extends $Record implements $LootItemCondition {
        /**
         * Get the parameters used by this object.
         */
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        scores(): $Map<string, $IntRange>;
        static hasScores(entityTarget: $LootContext$EntityTarget_): $EntityHasScoreCondition$Builder;
        entityTarget(): $LootContext$EntityTarget;
        test(context: $LootContext): boolean;
        getType(): $LootItemConditionType;
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$EntityHasScoreCondition>;
        constructor(scores: $Map_<string, $IntRange>, entityTarget: $LootContext$EntityTarget_);
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get type(): $LootItemConditionType;
    }
    /**
     * Values that may be interpreted as {@link $EntityHasScoreCondition}.
     */
    export type $EntityHasScoreCondition_ = { entityTarget?: $LootContext$EntityTarget_, scores?: $Map_<string, $IntRange>,  } | [entityTarget?: $LootContext$EntityTarget_, scores?: $Map_<string, $IntRange>, ];
    /**
     * A LootItemCondition that refers to another LootItemCondition by its ID.
     */
    export class $ConditionReference extends $Record implements $LootItemCondition {
        static conditionReference(name: $ResourceKey_<$LootItemCondition>): $LootItemCondition$Builder;
        name(): $ResourceKey<$LootItemCondition>;
        test(context: $LootContext): boolean;
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
        getType(): $LootItemConditionType;
        /**
         * Get the parameters used by this object.
         */
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$ConditionReference>;
        constructor(arg0: $ResourceKey_<$LootItemCondition>);
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * Values that may be interpreted as {@link $ConditionReference}.
     */
    export type $ConditionReference_ = { name?: $ResourceKey_<$LootItemCondition>,  } | [name?: $ResourceKey_<$LootItemCondition>, ];
    /**
     * A LootItemCondition that matches if the last damage to an entity was done by a player.
     * 
     * @see LootContextParams#LAST_DAMAGE_PLAYER
     */
    export class $LootItemKilledByPlayerCondition implements $LootItemCondition {
        /**
         * Get the parameters used by this object.
         */
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        static killedByPlayer(): $LootItemCondition$Builder;
        test(context: $LootContext): boolean;
        getType(): $LootItemConditionType;
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$LootItemKilledByPlayerCondition>;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get type(): $LootItemConditionType;
    }
    export class $AnyOfCondition extends $CompositeLootItemCondition {
        static anyOf(...conditions: $LootItemCondition$Builder_[]): $AnyOfCondition$Builder;
        static CODEC: $MapCodec<$AnyOfCondition>;
    }
    /**
     * LootItemCondition that checks the `ORIGIN` position against a `LocationPredicate` after applying an offset to the origin position.
     */
    export class $LocationCheck extends $Record implements $LootItemCondition {
        /**
         * Get the parameters used by this object.
         */
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        static checkLocation(locationPredicateBuilder: $LocationPredicate$Builder, offset: $BlockPos_): $LootItemCondition$Builder;
        static checkLocation(locationPredicateBuilder: $LocationPredicate$Builder): $LootItemCondition$Builder;
        test(context: $LootContext): boolean;
        offset(): $BlockPos;
        getType(): $LootItemConditionType;
        predicate(): ($LocationPredicate) | undefined;
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$LocationCheck>;
        constructor(arg0: ($LocationPredicate_) | undefined, arg1: $BlockPos_);
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get type(): $LootItemConditionType;
    }
    /**
     * Values that may be interpreted as {@link $LocationCheck}.
     */
    export type $LocationCheck_ = { offset?: $BlockPos_, predicate?: ($LocationPredicate_) | undefined,  } | [offset?: $BlockPos_, predicate?: ($LocationPredicate_) | undefined, ];
    /**
     * LootItemCondition that checks if a number provided by a `NumberProvider` is within an `IntRange`.
     */
    export class $ValueCheckCondition extends $Record implements $LootItemCondition {
        /**
         * Get the parameters used by this object.
         */
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        test(context: $LootContext): boolean;
        provider(): $NumberProvider;
        getType(): $LootItemConditionType;
        range(): $IntRange;
        static hasValue(provider: $NumberProvider_, range: $IntRange): $LootItemCondition$Builder;
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$ValueCheckCondition>;
        constructor(provider: $NumberProvider_, range: $IntRange);
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get type(): $LootItemConditionType;
    }
    /**
     * Values that may be interpreted as {@link $ValueCheckCondition}.
     */
    export type $ValueCheckCondition_ = { range?: $IntRange, provider?: $NumberProvider_,  } | [range?: $IntRange, provider?: $NumberProvider_, ];
    export class $CompositeLootItemCondition$Builder implements $LootItemCondition$Builder {
        addTerm(condition: $LootItemCondition$Builder_): void;
        build(): $LootItemCondition;
        invert(): $LootItemCondition$Builder;
        or(condition: $LootItemCondition$Builder_): $AnyOfCondition$Builder;
        and(condition: $LootItemCondition$Builder_): $AllOfCondition$Builder;
    }
}
