import { $MapCodec_, $Codec, $MapCodec, $Codec_ } from "@package/com/mojang/serialization";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $EquipmentSlot_, $EquipmentSlot, $LivingEntity, $Entity, $EquipmentSlotGroup, $EquipmentSlotGroup_ } from "@package/net/minecraft/world/entity";
import { $AttributeModifier, $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Map, $Set, $List, $Collection_, $List_ } from "@package/java/util";
import { $StringRepresentable, $RandomSource, $Unit_, $Unit } from "@package/net/minecraft/util";
import { $DifficultyInstance } from "@package/net/minecraft/world";
import { $Consumer_, $Predicate_, $Consumer, $BiConsumer_, $UnaryOperator_ } from "@package/java/util/function";
import { $Object2IntMap$Entry } from "@package/it/unimi/dsi/fastutil/objects";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $HolderSet_, $RegistryAccess, $Registry, $Holder_, $HolderSet, $Holder } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $WeightedEntry$IntrusiveBase } from "@package/net/minecraft/util/random";
import { $DataComponentType, $DataComponentType_, $DataComponentMap, $DataComponentMap_ } from "@package/net/minecraft/core/component";
import { $Enum, $Record } from "@package/java/lang";
import { $LootContext } from "@package/net/minecraft/world/level/storage/loot";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Item, $CrossbowItem$ChargingSounds, $Item$TooltipContext, $TooltipFlag, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $TooltipProvider } from "@package/net/minecraft/world/item/component";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $AbstractArrow } from "@package/net/minecraft/world/entity/projectile";
import { $Stream } from "@package/java/util/stream";
import { $EnchantmentProvider } from "@package/net/minecraft/world/item/enchantment/providers";
import { $ResourceKey_, $ResourceKey, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $LootItemCondition$Builder_, $LootItemCondition } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $MutableFloat } from "@package/org/apache/commons/lang3/mutable";
import { $EnchantmentLocationBasedEffect, $EnchantmentValueEffect, $DamageImmunity, $EnchantmentAttributeEffect, $EnchantmentEntityEffect, $EnchantmentAttributeEffect_ } from "@package/net/minecraft/world/item/enchantment/effects";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $LootContextParamSet } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as providers from "@package/net/minecraft/world/item/enchantment/providers";
export * as effects from "@package/net/minecraft/world/item/enchantment/effects";

declare module "@package/net/minecraft/world/item/enchantment" {
    export class $EnchantmentHelper {
        static getTagEnchantmentLevel(enchantment: $Holder_<$Enchantment>, stack: $ItemStack_): number;
        static runIterationOnItem(stack: $ItemStack_, slot: $EquipmentSlot_, entity: $LivingEntity, visitor: $EnchantmentHelper$EnchantmentInSlotVisitor_): void;
        static runIterationOnItem(stack: $ItemStack_, visitor: $EnchantmentHelper$EnchantmentVisitor_): void;
        static runIterationOnEquipment(entity: $LivingEntity, visitor: $EnchantmentHelper$EnchantmentInSlotVisitor_): void;
        static modifyArmorEffectiveness(level: $ServerLevel, tool: $ItemStack_, entity: $Entity, damageSource: $DamageSource_, armorEffectiveness: number): number;
        static getHighestLevel<T>(stack: $ItemStack_, componentType: $DataComponentType_<T>): $Pair<T, number>;
        static getAvailableEnchantmentResults(level: number, stack: $ItemStack_, possibleEnchantments: $Stream<$Holder_<$Enchantment>>): $List<$EnchantmentInstance>;
        static filterCompatibleEnchantments(dataList: $List_<$EnchantmentInstance>, data: $EnchantmentInstance): void;
        static isEnchantmentCompatible(currentEnchantments: $Collection_<$Holder_<$Enchantment>>, newEnchantment: $Holder_<$Enchantment>): boolean;
        static processEquipmentDropChance(level: $ServerLevel, entity: $LivingEntity, damageSource: $DamageSource_, equipmentDropChance: number): number;
        static getEnchantmentLevel(enchantment: $Holder_<$Enchantment>, entity: $LivingEntity): number;
        static modifyDamage(level: $ServerLevel, tool: $ItemStack_, entity: $Entity, damageSource: $DamageSource_, armorEffectiveness: number): number;
        static hasTag(stack: $ItemStack_, tag: $TagKey_<$Enchantment>): boolean;
        static getFishingTimeReduction(level: $ServerLevel, stack: $ItemStack_, entity: $Entity): number;
        static getFishingLuckBonus(level: $ServerLevel, stack: $ItemStack_, entity: $Entity): number;
        static getTridentSpinAttackStrength(stack: $ItemStack_, entity: $LivingEntity): number;
        static modifyFallBasedDamage(level: $ServerLevel, tool: $ItemStack_, entity: $Entity, damageSource: $DamageSource_, armorEffectiveness: number): number;
        static processProjectileSpread(level: $ServerLevel, tool: $ItemStack_, entity: $Entity, projectileSpread: number): number;
        static processProjectileCount(level: $ServerLevel, tool: $ItemStack_, entity: $Entity, projectileCount: number): number;
        static processAmmoUse(level: $ServerLevel, weapon: $ItemStack_, ammo: $ItemStack_, count: number): number;
        static pickHighestLevel<T>(stack: $ItemStack_, componentType: $DataComponentType_<$List_<T>>): (T) | undefined;
        static modifyCrossbowChargingTime(stack: $ItemStack_, entity: $LivingEntity, crossbowChargingTime: number): number;
        static modifyDurabilityToRepairFromXp(level: $ServerLevel, stack: $ItemStack_, duabilityToRepairFromXp: number): number;
        static getRandomItemWith(componentType: $DataComponentType_<never>, entity: $LivingEntity, filter: $Predicate_<$ItemStack>): ($EnchantedItemInUse) | undefined;
        static getTridentReturnToOwnerAcceleration(level: $ServerLevel, stack: $ItemStack_, entity: $Entity): number;
        static setEnchantments(stack: $ItemStack_, enchantments: $ItemEnchantments_): void;
        static canStoreEnchantments(stack: $ItemStack_): boolean;
        static getEnchantmentsForCrafting(stack: $ItemStack_): $ItemEnchantments;
        static hasAnyEnchantments(stack: $ItemStack_): boolean;
        static processBlockExperience(level: $ServerLevel, stack: $ItemStack_, duabilityToRepairFromXp: number): number;
        static getPiercingCount(level: $ServerLevel, firedFromWeapon: $ItemStack_, pickupItemStack: $ItemStack_): number;
        static onProjectileSpawned(level: $ServerLevel, firedFromWeapon: $ItemStack_, arrow: $AbstractArrow, onBreak: $Consumer_<$Item>): void;
        static doPostAttackEffectsWithItemSource(level: $ServerLevel, entity: $Entity, damageSource: $DamageSource_, itemSource: $ItemStack_ | null): void;
        static onHitBlock(level: $ServerLevel, stack: $ItemStack_, owner: $LivingEntity | null, entity: $Entity, slot: $EquipmentSlot_ | null, pos: $Vec3_, state: $BlockState_, onBreak: $Consumer_<$Item>): void;
        static selectEnchantment(random: $RandomSource, stack: $ItemStack_, level: number, possibleEnchantments: $Stream<$Holder_<$Enchantment>>): $List<$EnchantmentInstance>;
        /**
         * Returns the enchantability of itemstack, using a separate calculation for each enchantNum (0, 1 or 2), cutting to the max enchantability power of the table, which is locked to a max of 15.
         */
        static getEnchantmentCost(random: $RandomSource, enchantNum: number, power: number, stack: $ItemStack_): number;
        static processDurabilityChange(level: $ServerLevel, stack: $ItemStack_, duabilityToRepairFromXp: number): number;
        static updateEnchantments(stack: $ItemStack_, updater: $Consumer_<$ItemEnchantments$Mutable>): $ItemEnchantments;
        static enchantItemFromProvider(stack: $ItemStack_, registries: $RegistryAccess, key: $ResourceKey_<$EnchantmentProvider>, difficulty: $DifficultyInstance, random: $RandomSource): void;
        static enchantItem(random: $RandomSource, stack: $ItemStack_, level: number, possibleEnchantments: $Stream<$Holder_<$Enchantment>>): $ItemStack;
        static enchantItem(random: $RandomSource, stack: $ItemStack_, level: number, registryAccess: $RegistryAccess, possibleEnchantments: ($HolderSet_<$Enchantment>) | undefined): $ItemStack;
        /**
         * @deprecated
         */
        static getItemEnchantmentLevel(enchantment: $Holder_<$Enchantment>, stack: $ItemStack_): number;
        static getComponentType(stack: $ItemStack_): $DataComponentType<$ItemEnchantments>;
        static has(stack: $ItemStack_, componentType: $DataComponentType_<never>): boolean;
        static tickEffects(level: $ServerLevel, entity: $LivingEntity): void;
        static runLocationChangedEffects(level: $ServerLevel, entity: $LivingEntity): void;
        static runLocationChangedEffects(level: $ServerLevel, stack: $ItemStack_, entity: $LivingEntity, slot: $EquipmentSlot_): void;
        static processMobExperience(level: $ServerLevel, killer: $Entity | null, mob: $Entity, experience: number): number;
        static doPostAttackEffects(level: $ServerLevel, entity: $Entity, damageSource: $DamageSource_): void;
        static modifyKnockback(level: $ServerLevel, tool: $ItemStack_, entity: $Entity, damageSource: $DamageSource_, armorEffectiveness: number): number;
        static getDamageProtection(level: $ServerLevel, entity: $LivingEntity, damageSource: $DamageSource_): number;
        static forEachModifier(stack: $ItemStack_, slot: $EquipmentSlot_, action: $BiConsumer_<$Holder<$Attribute>, $AttributeModifier>): void;
        static forEachModifier(stack: $ItemStack_, slotGroup: $EquipmentSlotGroup_, action: $BiConsumer_<$Holder<$Attribute>, $AttributeModifier>): void;
        static isImmuneToDamage(level: $ServerLevel, entity: $LivingEntity, damageSource: $DamageSource_): boolean;
        static stopLocationBasedEffects(entity: $LivingEntity): void;
        static stopLocationBasedEffects(stack: $ItemStack_, entity: $LivingEntity, slot: $EquipmentSlot_): void;
        constructor();
    }
    export class $LevelBasedValue$LevelsSquared extends $Record implements $LevelBasedValue {
        calculate(level: number): number;
        added(): number;
        codec(): $MapCodec<$LevelBasedValue$LevelsSquared>;
        static CODEC: $MapCodec<$LevelBasedValue$LevelsSquared>;
        constructor(arg0: number);
    }
    /**
     * Values that may be interpreted as {@link $LevelBasedValue$LevelsSquared}.
     */
    export type $LevelBasedValue$LevelsSquared_ = { added?: number,  } | [added?: number, ];
    export class $Enchantment$Builder {
        exclusiveWith(exclusiveSet: $HolderSet_<$Enchantment>): $Enchantment$Builder;
        withEffect<E>(componentType: $DataComponentType_<$List_<$TargetedConditionalEffect_<E>>>, enchanted: $EnchantmentTarget_, affected: $EnchantmentTarget_, effect: E, requirements: $LootItemCondition$Builder_): $Enchantment$Builder;
        withEffect<E>(componentType: $DataComponentType_<$List_<$TargetedConditionalEffect_<E>>>, enchanted: $EnchantmentTarget_, affected: $EnchantmentTarget_, effect: E): $Enchantment$Builder;
        withEffect(componentType: $DataComponentType_<$Unit_>): $Enchantment$Builder;
        withEffect(componentType: $DataComponentType_<$List_<$EnchantmentAttributeEffect_>>, effect: $EnchantmentAttributeEffect_): $Enchantment$Builder;
        withEffect<E>(componentType: $DataComponentType_<$List_<$ConditionalEffect_<E>>>, effect: E, requirements: $LootItemCondition$Builder_): $Enchantment$Builder;
        withEffect<E>(componentType: $DataComponentType_<$List_<$ConditionalEffect_<E>>>, effect: E): $Enchantment$Builder;
        withSpecialEffect<E>(componentType: $DataComponentType_<E>, effect: E): $Enchantment$Builder;
        withCustomName(arg0: $UnaryOperator_<$MutableComponent>): $Enchantment$Builder;
        build(location: $ResourceLocation_): $Enchantment;
        constructor(definition: $Enchantment$EnchantmentDefinition_);
    }
    export class $EnchantedItemInUse extends $Record {
        inSlot(): $EquipmentSlot;
        onBreak(): $Consumer<$Item>;
        owner(): $LivingEntity;
        itemStack(): $ItemStack;
        constructor(itemStack: $ItemStack_, inSlot: $EquipmentSlot_, owner: $LivingEntity);
        constructor(arg0: $ItemStack_, arg1: $EquipmentSlot_ | null, arg2: $LivingEntity | null, arg3: $Consumer_<$Item>);
    }
    /**
     * Values that may be interpreted as {@link $EnchantedItemInUse}.
     */
    export type $EnchantedItemInUse_ = { onBreak?: $Consumer_<$Item>, itemStack?: $ItemStack_, inSlot?: $EquipmentSlot_, owner?: $LivingEntity,  } | [onBreak?: $Consumer_<$Item>, itemStack?: $ItemStack_, inSlot?: $EquipmentSlot_, owner?: $LivingEntity, ];
    /**
     * Defines an immutable instance of an enchantment and its level.
     */
    export class $EnchantmentInstance extends $WeightedEntry$IntrusiveBase {
        level: number;
        enchantment: $Holder<$Enchantment>;
        constructor(enchantment: $Holder_<$Enchantment>, level: number);
    }
    export class $LevelBasedValue$Constant extends $Record implements $LevelBasedValue {
        calculate(level: number): number;
        value(): number;
        codec(): $MapCodec<$LevelBasedValue$Constant>;
        static CODEC: $Codec<$LevelBasedValue$Constant>;
        static TYPED_CODEC: $MapCodec<$LevelBasedValue$Constant>;
        constructor(arg0: number);
    }
    /**
     * Values that may be interpreted as {@link $LevelBasedValue$Constant}.
     */
    export type $LevelBasedValue$Constant_ = { value?: number,  } | [value?: number, ];
    export class $LevelBasedValue$Fraction extends $Record implements $LevelBasedValue {
        calculate(level: number): number;
        numerator(): $LevelBasedValue;
        denominator(): $LevelBasedValue;
        codec(): $MapCodec<$LevelBasedValue$Fraction>;
        static CODEC: $MapCodec<$LevelBasedValue$Fraction>;
        constructor(arg0: $LevelBasedValue, arg1: $LevelBasedValue);
    }
    /**
     * Values that may be interpreted as {@link $LevelBasedValue$Fraction}.
     */
    export type $LevelBasedValue$Fraction_ = { denominator?: $LevelBasedValue, numerator?: $LevelBasedValue,  } | [denominator?: $LevelBasedValue, numerator?: $LevelBasedValue, ];
    export class $LevelBasedValue$Linear extends $Record implements $LevelBasedValue {
        perLevelAboveFirst(): number;
        calculate(level: number): number;
        base(): number;
        codec(): $MapCodec<$LevelBasedValue$Linear>;
        static CODEC: $MapCodec<$LevelBasedValue$Linear>;
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $LevelBasedValue$Linear}.
     */
    export type $LevelBasedValue$Linear_ = { perLevelAboveFirst?: number, base?: number,  } | [perLevelAboveFirst?: number, base?: number, ];
    export class $Enchantment$Cost extends $Record {
        perLevelAboveFirst(): number;
        calculate(level: number): number;
        base(): number;
        static CODEC: $Codec<$Enchantment$Cost>;
        constructor(base: number, perLevelAboveFirst: number);
    }
    /**
     * Values that may be interpreted as {@link $Enchantment$Cost}.
     */
    export type $Enchantment$Cost_ = { perLevelAboveFirst?: number, base?: number,  } | [perLevelAboveFirst?: number, base?: number, ];
    export class $Enchantment$EnchantmentDefinition extends $Record {
        primaryItems(): ($HolderSet<$Item>) | undefined;
        supportedItems(): $HolderSet<$Item>;
        anvilCost(): number;
        minCost(): $Enchantment$Cost;
        maxCost(): $Enchantment$Cost;
        slots(): $List<$EquipmentSlotGroup>;
        maxLevel(): number;
        weight(): number;
        static CODEC: $MapCodec<$Enchantment$EnchantmentDefinition>;
        constructor(supportedItems: $HolderSet_<$Item>, primaryItems: ($HolderSet_<$Item>) | undefined, weight: number, maxLevel: number, minCost: $Enchantment$Cost_, maxCost: $Enchantment$Cost_, anvilCost: number, slots: $List_<$EquipmentSlotGroup_>);
    }
    /**
     * Values that may be interpreted as {@link $Enchantment$EnchantmentDefinition}.
     */
    export type $Enchantment$EnchantmentDefinition_ = { slots?: $List_<$EquipmentSlotGroup_>, supportedItems?: $HolderSet_<$Item>, maxCost?: $Enchantment$Cost_, maxLevel?: number, minCost?: $Enchantment$Cost_, primaryItems?: ($HolderSet_<$Item>) | undefined, anvilCost?: number, weight?: number,  } | [slots?: $List_<$EquipmentSlotGroup_>, supportedItems?: $HolderSet_<$Item>, maxCost?: $Enchantment$Cost_, maxLevel?: number, minCost?: $Enchantment$Cost_, primaryItems?: ($HolderSet_<$Item>) | undefined, anvilCost?: number, weight?: number, ];
    export class $EnchantmentHelper$EnchantmentVisitor {
    }
    export interface $EnchantmentHelper$EnchantmentVisitor {
        accept(enchantment: $Holder_<$Enchantment>, level: number): void;
    }
    /**
     * Values that may be interpreted as {@link $EnchantmentHelper$EnchantmentVisitor}.
     */
    export type $EnchantmentHelper$EnchantmentVisitor_ = ((arg0: $Holder<$Enchantment>, arg1: number) => void);
    export class $LevelBasedValue$Lookup extends $Record implements $LevelBasedValue {
        calculate(level: number): number;
        values(): $List<number>;
        fallback(): $LevelBasedValue;
        codec(): $MapCodec<$LevelBasedValue$Lookup>;
        static CODEC: $MapCodec<$LevelBasedValue$Lookup>;
        constructor(arg0: $List_<number>, arg1: $LevelBasedValue);
    }
    /**
     * Values that may be interpreted as {@link $LevelBasedValue$Lookup}.
     */
    export type $LevelBasedValue$Lookup_ = { fallback?: $LevelBasedValue, values?: $List_<number>,  } | [fallback?: $LevelBasedValue, values?: $List_<number>, ];
    export class $ItemEnchantments$Mutable {
        upgrade(enchantment: $Holder_<$Enchantment>, level: number): void;
        set(enchantment: $Holder_<$Enchantment>, level: number): void;
        keySet(): $Set<$Holder<$Enchantment>>;
        removeIf(predicate: $Predicate_<$Holder<$Enchantment>>): void;
        getLevel(enchantment: $Holder_<$Enchantment>): number;
        toImmutable(): $ItemEnchantments;
        constructor(enchantments: $ItemEnchantments_);
    }
    export class $EnchantmentTarget extends $Enum<$EnchantmentTarget> implements $StringRepresentable {
        static values(): $EnchantmentTarget[];
        static valueOf(arg0: string): $EnchantmentTarget;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$EnchantmentTarget>;
        static ATTACKER: $EnchantmentTarget;
        static VICTIM: $EnchantmentTarget;
        static DAMAGING_ENTITY: $EnchantmentTarget;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $EnchantmentTarget}.
     */
    export type $EnchantmentTarget_ = "attacker" | "damaging_entity" | "victim";
    export class $LevelBasedValue {
        static perLevel(base: number, perLevelAfterFirst: number): $LevelBasedValue$Linear;
        static perLevel(perLevel: number): $LevelBasedValue$Linear;
        static lookup(values: $List_<number>, fallback: $LevelBasedValue): $LevelBasedValue$Lookup;
        static constant(value: number): $LevelBasedValue$Constant;
        static bootstrap(registry: $Registry<$MapCodec_<$LevelBasedValue>>): $MapCodec<$LevelBasedValue>;
        static DISPATCH_CODEC: $Codec<$LevelBasedValue>;
        static CODEC: $Codec<$LevelBasedValue>;
    }
    export interface $LevelBasedValue {
        calculate(level: number): number;
        codec(): $MapCodec<$LevelBasedValue>;
    }
    export class $TargetedConditionalEffect<T> extends $Record {
        affected(): $EnchantmentTarget;
        enchanted(): $EnchantmentTarget;
        requirements(): ($LootItemCondition) | undefined;
        static equipmentDropsCodec<S>(codec: $Codec_<S>, params: $LootContextParamSet): $Codec<$TargetedConditionalEffect<S>>;
        matches(context: $LootContext): boolean;
        static codec<S>(codec: $Codec_<S>, params: $LootContextParamSet): $Codec<$TargetedConditionalEffect<S>>;
        effect(): T;
        constructor(arg0: $EnchantmentTarget_, arg1: $EnchantmentTarget_, arg2: T, arg3: ($LootItemCondition) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $TargetedConditionalEffect}.
     */
    export type $TargetedConditionalEffect_<T> = { effect?: any, enchanted?: $EnchantmentTarget_, requirements?: ($LootItemCondition) | undefined, affected?: $EnchantmentTarget_,  } | [effect?: any, enchanted?: $EnchantmentTarget_, requirements?: ($LootItemCondition) | undefined, affected?: $EnchantmentTarget_, ];
    export class $ConditionalEffect<T> extends $Record {
        static conditionCodec(params: $LootContextParamSet): $Codec<$LootItemCondition>;
        requirements(): ($LootItemCondition) | undefined;
        matches(context: $LootContext): boolean;
        static codec<T>(codec: $Codec_<T>, params: $LootContextParamSet): $Codec<$ConditionalEffect<T>>;
        effect(): T;
        constructor(arg0: T, arg1: ($LootItemCondition) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $ConditionalEffect}.
     */
    export type $ConditionalEffect_<T> = { requirements?: ($LootItemCondition) | undefined, effect?: any,  } | [requirements?: ($LootItemCondition) | undefined, effect?: any, ];
    export class $LevelBasedValue$Clamped extends $Record implements $LevelBasedValue {
        calculate(level: number): number;
        value(): $LevelBasedValue;
        min(): number;
        max(): number;
        codec(): $MapCodec<$LevelBasedValue$Clamped>;
        static CODEC: $MapCodec<$LevelBasedValue$Clamped>;
        constructor(arg0: $LevelBasedValue, arg1: number, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $LevelBasedValue$Clamped}.
     */
    export type $LevelBasedValue$Clamped_ = { value?: $LevelBasedValue, min?: number, max?: number,  } | [value?: $LevelBasedValue, min?: number, max?: number, ];
    export class $EnchantmentHelper$EnchantmentInSlotVisitor {
    }
    export interface $EnchantmentHelper$EnchantmentInSlotVisitor {
        accept(enchantment: $Holder_<$Enchantment>, level: number, item: $EnchantedItemInUse_): void;
    }
    /**
     * Values that may be interpreted as {@link $EnchantmentHelper$EnchantmentInSlotVisitor}.
     */
    export type $EnchantmentHelper$EnchantmentInSlotVisitor_ = ((arg0: $Holder<$Enchantment>, arg1: number, arg2: $EnchantedItemInUse) => void);
    export interface $Enchantment extends RegistryMarked<RegistryTypes.EnchantmentTag, RegistryTypes.Enchantment> {}
    export class $ItemEnchantments implements $TooltipProvider {
        withTooltip(showInTooltip: boolean): $ItemEnchantments;
        addToTooltip(context: $Item$TooltipContext, tooltipAdder: $Consumer_<$Component>, tooltipFlag: $TooltipFlag): void;
        size(): number;
        isEmpty(): boolean;
        entrySet(): $Set<$Object2IntMap$Entry<$Holder<$Enchantment>>>;
        keySet(): $Set<$Holder<$Enchantment>>;
        getLevel(enchantment: $Holder_<$Enchantment>): number;
        static CODEC: $Codec<$ItemEnchantments>;
        static EMPTY: $ItemEnchantments;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemEnchantments>;
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ItemEnchantments}.
     */
    export type $ItemEnchantments_ = {[key in RegistryTypes.Enchantment]?: number};
    export class $Enchantment extends $Record {
        static definition(supportedItems: $HolderSet_<$Item>, weight: number, maxLevel: number, minCost: $Enchantment$Cost_, maxCost: $Enchantment$Cost_, anvilCost: number, ...slots: $EquipmentSlotGroup_[]): $Enchantment$EnchantmentDefinition;
        definition(): $Enchantment$EnchantmentDefinition;
        static definition(supportedItems: $HolderSet_<$Item>, primaryItems: $HolderSet_<$Item>, weight: number, maxLevel: number, minCost: $Enchantment$Cost_, maxCost: $Enchantment$Cost_, anvilCost: number, ...slots: $EquipmentSlotGroup_[]): $Enchantment$EnchantmentDefinition;
        /**
         * @deprecated
         * Checks if the enchantment can be applied to a given ItemStack.
         */
        isSupportedItem(stack: $ItemStack_): boolean;
        modifyDamage(level: $ServerLevel, enchantmentLevel: number, tool: $ItemStack_, entity: $Entity, damageSource: $DamageSource_, armorEffectiveness: $MutableFloat): void;
        exclusiveSet(): $HolderSet<$Enchantment>;
        static constantCost(cost: number): $Enchantment$Cost;
        static dynamicCost(base: number, perLevel: number): $Enchantment$Cost;
        /**
         * Creates a new map containing all items equipped by an entity in slots that the enchantment cares about. These items are not tested for having the enchantment.
         */
        getSlotItems(entity: $LivingEntity): $Map<$EquipmentSlot, $ItemStack>;
        matchingSlot(slot: $EquipmentSlot_): boolean;
        /**
         * @deprecated
         */
        getSupportedItems(): $HolderSet<$Item>;
        /**
         * @deprecated
         * Checks if the enchantment can be applied to a given ItemStack.
         */
        isPrimaryItem(stack: $ItemStack_): boolean;
        getMinCost(level: number): number;
        getMaxCost(level: number): number;
        /**
         * @deprecated
         * Checks if the enchantment can be applied to a given ItemStack.
         */
        canEnchant(stack: $ItemStack_): boolean;
        static damageContext(level: $ServerLevel, enchantmentLevel: number, entity: $Entity, damageSource: $DamageSource_): $LootContext;
        modifyDamageProtection(level: $ServerLevel, enchantmentLevel: number, tool: $ItemStack_, entity: $Entity, damageSource: $DamageSource_, armorEffectiveness: $MutableFloat): void;
        modifyDurabilityChange(level: $ServerLevel, enchantmentLevel: number, tool: $ItemStack_, ammoCount: $MutableFloat): void;
        modifyItemFilteredCount(componentType: $DataComponentType_<$List_<$ConditionalEffect_<$EnchantmentValueEffect>>>, level: $ServerLevel, enchantmentLevel: number, tool: $ItemStack_, value: $MutableFloat): void;
        modifyAmmoCount(level: $ServerLevel, enchantmentLevel: number, tool: $ItemStack_, ammoCount: $MutableFloat): void;
        modifyPiercingCount(level: $ServerLevel, enchantmentLevel: number, tool: $ItemStack_, ammoCount: $MutableFloat): void;
        modifyFallBasedDamage(level: $ServerLevel, enchantmentLevel: number, tool: $ItemStack_, entity: $Entity, damageSource: $DamageSource_, armorEffectiveness: $MutableFloat): void;
        static getFullname(enchantment: $Holder_<$Enchantment>, level: number): $Component;
        modifyBlockExperience(level: $ServerLevel, enchantmentLevel: number, tool: $ItemStack_, ammoCount: $MutableFloat): void;
        modifyMobExperience(level: $ServerLevel, enchantmentLevel: number, tool: $ItemStack_, entity: $Entity, fishingLuckBonus: $MutableFloat): void;
        modifyEntityFilteredValue(componentType: $DataComponentType_<$List_<$ConditionalEffect_<$EnchantmentValueEffect>>>, level: $ServerLevel, enchantmentLevel: number, tool: $ItemStack_, entity: $Entity, value: $MutableFloat): void;
        modifyDurabilityToRepairFromXp(level: $ServerLevel, enchantmentLevel: number, tool: $ItemStack_, ammoCount: $MutableFloat): void;
        modifyTridentReturnToOwnerAcceleration(level: $ServerLevel, enchantmentLevel: number, tool: $ItemStack_, entity: $Entity, fishingLuckBonus: $MutableFloat): void;
        modifyTridentSpinAttackStrength(random: $RandomSource, enchantmentLevel: number, value: $MutableFloat): void;
        modifyUnfilteredValue(componentType: $DataComponentType_<$EnchantmentValueEffect>, random: $RandomSource, enchantmentLevel: number, value: $MutableFloat): void;
        modifyFishingTimeReduction(level: $ServerLevel, enchantmentLevel: number, tool: $ItemStack_, entity: $Entity, fishingLuckBonus: $MutableFloat): void;
        modifyFishingLuckBonus(level: $ServerLevel, enchantmentLevel: number, tool: $ItemStack_, entity: $Entity, fishingLuckBonus: $MutableFloat): void;
        modifyDamageFilteredValue(componentType: $DataComponentType_<$List_<$ConditionalEffect_<$EnchantmentValueEffect>>>, level: $ServerLevel, enchantmentLevel: number, tool: $ItemStack_, entity: $Entity, damageSource: $DamageSource_, value: $MutableFloat): void;
        modifyArmorEffectivness(level: $ServerLevel, enchantmentLevel: number, tool: $ItemStack_, entity: $Entity, damageSource: $DamageSource_, armorEffectiveness: $MutableFloat): void;
        doPostAttack(level: $ServerLevel, enchantmentLevel: number, item: $EnchantedItemInUse_, target: $EnchantmentTarget_, entity: $Entity, damageSource: $DamageSource_): void;
        static doPostAttack(effect: $TargetedConditionalEffect_<$EnchantmentEntityEffect>, level: $ServerLevel, enchantmentLevel: number, item: $EnchantedItemInUse_, entity: $Entity, damageSource: $DamageSource_): void;
        modifyProjectileCount(level: $ServerLevel, enchantmentLevel: number, tool: $ItemStack_, entity: $Entity, fishingLuckBonus: $MutableFloat): void;
        modifyProjectileSpread(level: $ServerLevel, enchantmentLevel: number, tool: $ItemStack_, entity: $Entity, fishingLuckBonus: $MutableFloat): void;
        modifyCrossbowChargeTime(random: $RandomSource, enchantmentLevel: number, value: $MutableFloat): void;
        static entityContext(level: $ServerLevel, enchantmentLevel: number, entity: $Entity, origin: $Vec3_): $LootContext;
        static blockHitContext(level: $ServerLevel, enchantmentLevel: number, entity: $Entity, origin: $Vec3_, state: $BlockState_): $LootContext;
        static itemContext(level: $ServerLevel, enchantmentLevel: number, tool: $ItemStack_): $LootContext;
        static locationContext(level: $ServerLevel, enchantmentLevel: number, entity: $Entity, enchantmentActive: boolean): $LootContext;
        static enchantment(definition: $Enchantment$EnchantmentDefinition_): $Enchantment$Builder;
        static applyEffects<T>(effects: $List_<$ConditionalEffect_<T>>, context: $LootContext, applier: $Consumer_<T>): void;
        static areCompatible(first: $Holder_<$Enchantment>, second: $Holder_<$Enchantment>): boolean;
        /**
         * Gets the maximum level of the enchantment under normal circumstances such as the enchanting table. This limit is not strictly enforced and may be ignored through custom item NBT or other customizations.
         */
        getAnvilCost(): number;
        /**
         * Gets the maximum level of the enchantment under normal circumstances such as the enchanting table. This limit is not strictly enforced and may be ignored through custom item NBT or other customizations.
         */
        getWeight(): number;
        onProjectileSpawned(level: $ServerLevel, enchantmentLevel: number, item: $EnchantedItemInUse_, entity: $Entity): void;
        onHitBlock(level: $ServerLevel, enchantmentLevel: number, item: $EnchantedItemInUse_, entity: $Entity, pos: $Vec3_, state: $BlockState_): void;
        tick(level: $ServerLevel, enchantmentLevel: number, item: $EnchantedItemInUse_, entity: $Entity): void;
        description(): $Component;
        /**
         * Gets the maximum level of the enchantment under normal circumstances such as the enchanting table. This limit is not strictly enforced and may be ignored through custom item NBT or other customizations.
         */
        getMinLevel(): number;
        /**
         * Gets the maximum level of the enchantment under normal circumstances such as the enchanting table. This limit is not strictly enforced and may be ignored through custom item NBT or other customizations.
         */
        getMaxLevel(): number;
        effects(): $DataComponentMap;
        runLocationChangedEffects(level: $ServerLevel, enchantmentLevel: number, item: $EnchantedItemInUse_, entity: $LivingEntity): void;
        modifyKnockback(level: $ServerLevel, enchantmentLevel: number, tool: $ItemStack_, entity: $Entity, damageSource: $DamageSource_, armorEffectiveness: $MutableFloat): void;
        isImmuneToDamage(level: $ServerLevel, enchantmentLevel: number, entity: $Entity, damageSource: $DamageSource_): boolean;
        stopLocationBasedEffects(enchantmentLevel: number, item: $EnchantedItemInUse_, entity: $LivingEntity): void;
        getEffects<T>(component: $DataComponentType_<$List_<T>>): $List<T>;
        static CODEC: $Codec<$Holder<$Enchantment>>;
        static DIRECT_CODEC: $Codec<$Enchantment>;
        static MAX_LEVEL: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$Enchantment>>;
        constructor(description: $Component_, definition: $Enchantment$EnchantmentDefinition_, exclusiveSet: $HolderSet_<$Enchantment>, effects: $DataComponentMap_);
        get supportedItems(): $HolderSet<$Item>;
        get anvilCost(): number;
        get weight(): number;
        get minLevel(): number;
        get maxLevel(): number;
    }
    /**
     * Values that may be interpreted as {@link $Enchantment}.
     */
    export type $Enchantment_ = RegistryTypes.Enchantment | { effects?: $DataComponentMap_, description?: $Component_, exclusiveSet?: $HolderSet_<$Enchantment>, definition?: $Enchantment$EnchantmentDefinition_,  } | [effects?: $DataComponentMap_, description?: $Component_, exclusiveSet?: $HolderSet_<$Enchantment>, definition?: $Enchantment$EnchantmentDefinition_, ];
    export class $EnchantmentEffectComponents {
        static bootstrap(registry: $Registry<$DataComponentType_<never>>): $DataComponentType<never>;
        static ATTRIBUTES: $DataComponentType<$List<$EnchantmentAttributeEffect>>;
        static HIT_BLOCK: $DataComponentType<$List<$ConditionalEffect<$EnchantmentEntityEffect>>>;
        static PROJECTILE_SPREAD: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
        static PREVENT_EQUIPMENT_DROP: $DataComponentType<$Unit>;
        static CROSSBOW_CHARGE_TIME: $DataComponentType<$EnchantmentValueEffect>;
        static FISHING_LUCK_BONUS: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
        static BLOCK_EXPERIENCE: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
        static TRIDENT_SOUND: $DataComponentType<$List<$Holder<$SoundEvent>>>;
        static SMASH_DAMAGE_PER_FALLEN_BLOCK: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
        static POST_ATTACK: $DataComponentType<$List<$TargetedConditionalEffect<$EnchantmentEntityEffect>>>;
        static EQUIPMENT_DROPS: $DataComponentType<$List<$TargetedConditionalEffect<$EnchantmentValueEffect>>>;
        static KNOCKBACK: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
        static PREVENT_ARMOR_CHANGE: $DataComponentType<$Unit>;
        static PROJECTILE_SPAWNED: $DataComponentType<$List<$ConditionalEffect<$EnchantmentEntityEffect>>>;
        static TRIDENT_SPIN_ATTACK_STRENGTH: $DataComponentType<$EnchantmentValueEffect>;
        static COMPONENT_CODEC: $Codec<$DataComponentType<never>>;
        static AMMO_USE: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
        static DAMAGE_PROTECTION: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
        static CODEC: $Codec<$DataComponentMap>;
        static DAMAGE: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
        static REPAIR_WITH_XP: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
        static ARMOR_EFFECTIVENESS: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
        static LOCATION_CHANGED: $DataComponentType<$List<$ConditionalEffect<$EnchantmentLocationBasedEffect>>>;
        static ITEM_DAMAGE: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
        static MOB_EXPERIENCE: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
        static PROJECTILE_COUNT: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
        static TICK: $DataComponentType<$List<$ConditionalEffect<$EnchantmentEntityEffect>>>;
        static DAMAGE_IMMUNITY: $DataComponentType<$List<$ConditionalEffect<$DamageImmunity>>>;
        static PROJECTILE_PIERCING: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
        static FISHING_TIME_REDUCTION: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
        static CROSSBOW_CHARGING_SOUNDS: $DataComponentType<$List<$CrossbowItem$ChargingSounds>>;
        static TRIDENT_RETURN_ACCELERATION: $DataComponentType<$List<$ConditionalEffect<$EnchantmentValueEffect>>>;
    }
    export interface $EnchantmentEffectComponents {
    }
    export class $Enchantments {
        static bootstrap(context: $BootstrapContext<$Enchantment_>): void;
        static PUNCH: $ResourceKey<$Enchantment>;
        static SOUL_SPEED: $ResourceKey<$Enchantment>;
        static FEATHER_FALLING: $ResourceKey<$Enchantment>;
        static LOYALTY: $ResourceKey<$Enchantment>;
        static DEPTH_STRIDER: $ResourceKey<$Enchantment>;
        static BLAST_PROTECTION: $ResourceKey<$Enchantment>;
        static FORTUNE: $ResourceKey<$Enchantment>;
        static VANISHING_CURSE: $ResourceKey<$Enchantment>;
        static INFINITY: $ResourceKey<$Enchantment>;
        static DENSITY: $ResourceKey<$Enchantment>;
        static KNOCKBACK: $ResourceKey<$Enchantment>;
        static BREACH: $ResourceKey<$Enchantment>;
        static SHARPNESS: $ResourceKey<$Enchantment>;
        static SMITE: $ResourceKey<$Enchantment>;
        static PROJECTILE_PROTECTION: $ResourceKey<$Enchantment>;
        static RESPIRATION: $ResourceKey<$Enchantment>;
        static BINDING_CURSE: $ResourceKey<$Enchantment>;
        static EFFICIENCY: $ResourceKey<$Enchantment>;
        static MENDING: $ResourceKey<$Enchantment>;
        static FROST_WALKER: $ResourceKey<$Enchantment>;
        static LURE: $ResourceKey<$Enchantment>;
        static UNBREAKING: $ResourceKey<$Enchantment>;
        static PIERCING: $ResourceKey<$Enchantment>;
        static PROTECTION: $ResourceKey<$Enchantment>;
        static MULTISHOT: $ResourceKey<$Enchantment>;
        static SWIFT_SNEAK: $ResourceKey<$Enchantment>;
        static FIRE_ASPECT: $ResourceKey<$Enchantment>;
        static POWER: $ResourceKey<$Enchantment>;
        static LUCK_OF_THE_SEA: $ResourceKey<$Enchantment>;
        static CHANNELING: $ResourceKey<$Enchantment>;
        static WIND_BURST: $ResourceKey<$Enchantment>;
        static BANE_OF_ARTHROPODS: $ResourceKey<$Enchantment>;
        static SWEEPING_EDGE: $ResourceKey<$Enchantment>;
        static THORNS: $ResourceKey<$Enchantment>;
        static FLAME: $ResourceKey<$Enchantment>;
        static FIRE_PROTECTION: $ResourceKey<$Enchantment>;
        static RIPTIDE: $ResourceKey<$Enchantment>;
        static LOOTING: $ResourceKey<$Enchantment>;
        static SILK_TOUCH: $ResourceKey<$Enchantment>;
        static QUICK_CHARGE: $ResourceKey<$Enchantment>;
        static AQUA_AFFINITY: $ResourceKey<$Enchantment>;
        static IMPALING: $ResourceKey<$Enchantment>;
        constructor();
    }
}
