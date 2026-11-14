import { $PlayerAdvancements } from "@package/net/minecraft/server";
import { $RecipeHolder_ } from "@package/net/minecraft/world/item/crafting";
import { $MapCodec_, $Codec, $Codec_, $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag, $Tag_, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $StringReader } from "@package/com/mojang/brigadier";
import { $LightningBolt, $EntityType_, $Entity, $EquipmentSlotGroup, $EquipmentSlotGroup_, $EntityType, $LivingEntity, $AgeableMob } from "@package/net/minecraft/world/entity";
import { $ProblemReporter } from "@package/net/minecraft/util";
import { $CatVariant, $Animal, $FrogVariant, $Fox$Type, $Rabbit$Variant, $MushroomCow$MushroomType, $WolfVariant, $TropicalFish$Pattern, $Parrot$Variant } from "@package/net/minecraft/world/entity/animal";
import { $AdvancementProgress, $CriterionTriggerInstance, $CriterionTrigger$Listener_, $Criterion, $CriterionTrigger } from "@package/net/minecraft/advancements";
import { $DynamicCommandExceptionType, $SimpleCommandExceptionType } from "@package/com/mojang/brigadier/exceptions";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $StateDefinition, $StateHolder, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $SlotRange } from "@package/net/minecraft/world/inventory";
import { $DataComponentType, $DataComponentPredicate } from "@package/net/minecraft/core/component";
import { $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $ArmorTrim, $TrimPattern, $TrimMaterial } from "@package/net/minecraft/world/item/armortrim";
import { $Axolotl$Variant } from "@package/net/minecraft/world/entity/animal/axolotl";
import { $Item, $Item_, $JukeboxPlayable_, $JukeboxSong, $ItemStack_, $ItemStack, $JukeboxPlayable } from "@package/net/minecraft/world/item";
import { $BlockInWorld } from "@package/net/minecraft/world/level/block/state/pattern";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $Filterable, $Filterable_ } from "@package/net/minecraft/server/network";
import { $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $FishingHook } from "@package/net/minecraft/world/entity/projectile";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $Zombie } from "@package/net/minecraft/world/entity/monster";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $Boat$Type } from "@package/net/minecraft/world/entity/vehicle";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $StatType_, $Stat } from "@package/net/minecraft/stats";
import { $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $Attribute, $AttributeModifier$Operation_, $AttributeModifier$Operation } from "@package/net/minecraft/world/entity/ai/attributes";
import { $PaintingVariant } from "@package/net/minecraft/world/entity/decoration";
import { $Map, $List, $Map_, $Collection_, $List_ } from "@package/java/util";
import { $Variant, $Llama$Variant } from "@package/net/minecraft/world/entity/animal/horse";
import { $Supplier_, $Predicate_, $Predicate, $Function_ } from "@package/java/util/function";
import { $Object2BooleanMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $HolderSet_, $BlockPos_, $Holder$Reference, $Holder, $Registry, $HolderGetter, $Holder_, $HolderSet, $HolderGetter$Provider_ } from "@package/net/minecraft/core";
import { $ItemEnchantments, $Enchantment, $ItemEnchantments_ } from "@package/net/minecraft/world/item/enchantment";
import { $Number, $Comparable, $Iterable, $Iterable_, $Record } from "@package/java/lang";
import { $LootTable, $ValidationContext, $LootContext } from "@package/net/minecraft/world/level/storage/loot";
import { $ItemLike_, $GameType, $GameType_, $Level } from "@package/net/minecraft/world/level";
import { $TagKey_, $TagKey } from "@package/net/minecraft/tags";
import { $FluidState, $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $ItemAttributeModifiers, $Fireworks_, $Fireworks, $ItemContainerContents, $WrittenBookContent_, $WritableBookContent, $ItemAttributeModifiers_, $WrittenBookContent, $BundleContents, $ItemAttributeModifiers$Entry, $WritableBookContent_, $FireworkExplosion$Shape, $FireworkExplosion_, $FireworkExplosion$Shape_, $ItemAttributeModifiers$Entry_, $FireworkExplosion } from "@package/net/minecraft/world/item/component";
import { $Villager, $AbstractVillager, $VillagerType } from "@package/net/minecraft/world/entity/npc";
import { $PotionContents_, $PotionContents, $Potion } from "@package/net/minecraft/world/item/alchemy";
import { $ResourceKey, $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LootItemCondition$Builder_, $LootItemCondition } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $LootContextParamSet } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $BannerPattern_ } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $DamageType, $DamageSource_, $DamageType_ } from "@package/net/minecraft/world/damagesource";

declare module "@package/net/minecraft/advancements/critereon" {
    export class $LightPredicate$Builder {
        setComposite(composite: $MinMaxBounds$Ints_): $LightPredicate$Builder;
        build(): $LightPredicate;
        static light(): $LightPredicate$Builder;
        constructor();
        set composite(value: $MinMaxBounds$Ints_);
    }
    export class $ItemContainerPredicate extends $Record implements $SingleComponentItemPredicate<$ItemContainerContents> {
        items(): ($CollectionPredicate<$ItemStack, $ItemPredicate>) | undefined;
        componentType(): $DataComponentType<$ItemContainerContents>;
        matches(stack: $ItemStack_, value: $ItemContainerContents): boolean;
        matches(stack: $ItemStack_): boolean;
        static CODEC: $Codec<$ItemContainerPredicate>;
        constructor(arg0: ($CollectionPredicate_<$ItemStack_, $ItemPredicate_>) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $ItemContainerPredicate}.
     */
    export type $ItemContainerPredicate_ = { items?: ($CollectionPredicate_<$ItemStack_, $ItemPredicate_>) | undefined,  } | [items?: ($CollectionPredicate_<$ItemStack_, $ItemPredicate_>) | undefined, ];
    export class $MinMaxBounds$Ints extends $Record implements $MinMaxBounds<number> {
        static exactly(min: number): $MinMaxBounds$Ints;
        minSq(): (number) | undefined;
        maxSq(): (number) | undefined;
        matchesSqr(value: number): boolean;
        static atLeast(min: number): $MinMaxBounds$Ints;
        min(): (number) | undefined;
        max(): (number) | undefined;
        matches(value: number): boolean;
        static between(min: number, max: number): $MinMaxBounds$Ints;
        static atMost(min: number): $MinMaxBounds$Ints;
        static fromReader(reader: $StringReader, valueFunction: $Function_<number, number>): $MinMaxBounds$Ints;
        static fromReader(reader: $StringReader): $MinMaxBounds$Ints;
        isAny(): boolean;
        unwrapPoint(): (number) | undefined;
        static CODEC: $Codec<$MinMaxBounds$Ints>;
        static ANY: $MinMaxBounds$Ints;
        constructor(arg0: (number) | undefined, arg1: (number) | undefined, arg2: (number) | undefined, arg3: (number) | undefined);
        get any(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MinMaxBounds$Ints}.
     */
    export type $MinMaxBounds$Ints_ = { min?: (number) | undefined, minSq?: (number) | undefined, max?: (number) | undefined, maxSq?: (number) | undefined,  } | [min?: (number) | undefined, minSq?: (number) | undefined, max?: (number) | undefined, maxSq?: (number) | undefined, ];
    export class $PlayerPredicate$AdvancementPredicate {
    }
    export interface $PlayerPredicate$AdvancementPredicate extends $Predicate<$AdvancementProgress> {
    }
    /**
     * Values that may be interpreted as {@link $PlayerPredicate$AdvancementPredicate}.
     */
    export type $PlayerPredicate$AdvancementPredicate_ = (() => void);
    export class $UsedTotemTrigger extends $SimpleCriterionTrigger<$UsedTotemTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, item: $ItemStack_): void;
        constructor();
    }
    export class $EntityTypePredicate extends $Record {
        matches(type: $EntityType_<never>): boolean;
        static of(tag: $TagKey_<$EntityType<never>>): $EntityTypePredicate;
        static of(type: $EntityType_<never>): $EntityTypePredicate;
        types(): $HolderSet<$EntityType<never>>;
        static CODEC: $Codec<$EntityTypePredicate>;
        constructor(arg0: $HolderSet_<$EntityType<never>>);
    }
    /**
     * Values that may be interpreted as {@link $EntityTypePredicate}.
     */
    export type $EntityTypePredicate_ = { types?: $HolderSet_<$EntityType<never>>,  } | [types?: $HolderSet_<$EntityType<never>>, ];
    export class $MovementPredicate extends $Record {
        static verticalSpeed(fallDistance: $MinMaxBounds$Doubles_): $MovementPredicate;
        verticalSpeed(): $MinMaxBounds$Doubles;
        horizontalSpeed(): $MinMaxBounds$Doubles;
        static horizontalSpeed(fallDistance: $MinMaxBounds$Doubles_): $MovementPredicate;
        matches(x: number, arg1: number, y: number, arg3: number): boolean;
        x(): $MinMaxBounds$Doubles;
        z(): $MinMaxBounds$Doubles;
        y(): $MinMaxBounds$Doubles;
        speed(): $MinMaxBounds$Doubles;
        static speed(fallDistance: $MinMaxBounds$Doubles_): $MovementPredicate;
        fallDistance(): $MinMaxBounds$Doubles;
        static fallDistance(fallDistance: $MinMaxBounds$Doubles_): $MovementPredicate;
        static CODEC: $Codec<$MovementPredicate>;
        constructor(arg0: $MinMaxBounds$Doubles_, arg1: $MinMaxBounds$Doubles_, arg2: $MinMaxBounds$Doubles_, arg3: $MinMaxBounds$Doubles_, arg4: $MinMaxBounds$Doubles_, arg5: $MinMaxBounds$Doubles_, arg6: $MinMaxBounds$Doubles_);
    }
    /**
     * Values that may be interpreted as {@link $MovementPredicate}.
     */
    export type $MovementPredicate_ = { verticalSpeed?: $MinMaxBounds$Doubles_, speed?: $MinMaxBounds$Doubles_, z?: $MinMaxBounds$Doubles_, fallDistance?: $MinMaxBounds$Doubles_, y?: $MinMaxBounds$Doubles_, x?: $MinMaxBounds$Doubles_, horizontalSpeed?: $MinMaxBounds$Doubles_,  } | [verticalSpeed?: $MinMaxBounds$Doubles_, speed?: $MinMaxBounds$Doubles_, z?: $MinMaxBounds$Doubles_, fallDistance?: $MinMaxBounds$Doubles_, y?: $MinMaxBounds$Doubles_, x?: $MinMaxBounds$Doubles_, horizontalSpeed?: $MinMaxBounds$Doubles_, ];
    export class $UsedTotemTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static usedTotem(item: $ItemLike_): $Criterion<$UsedTotemTrigger$TriggerInstance>;
        static usedTotem(item: $ItemPredicate_): $Criterion<$UsedTotemTrigger$TriggerInstance>;
        matches(item: $ItemStack_): boolean;
        item(): ($ItemPredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$UsedTotemTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, item: ($ItemPredicate_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $UsedTotemTrigger$TriggerInstance}.
     */
    export type $UsedTotemTrigger$TriggerInstance_ = { item?: ($ItemPredicate_) | undefined, player?: ($ContextAwarePredicate) | undefined,  } | [item?: ($ItemPredicate_) | undefined, player?: ($ContextAwarePredicate) | undefined, ];
    export class $DamagePredicate extends $Record {
        takenDamage(): $MinMaxBounds$Doubles;
        sourceEntity(): ($EntityPredicate) | undefined;
        blocked(): (boolean) | undefined;
        dealtDamage(): $MinMaxBounds$Doubles;
        type(): ($DamageSourcePredicate) | undefined;
        matches(player: $ServerPlayer, source: $DamageSource_, dealtDamage: number, takenDamage: number, blocked: boolean): boolean;
        static CODEC: $Codec<$DamagePredicate>;
        constructor(arg0: $MinMaxBounds$Doubles_, arg1: $MinMaxBounds$Doubles_, arg2: ($EntityPredicate_) | undefined, arg3: (boolean) | undefined, arg4: ($DamageSourcePredicate_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $DamagePredicate}.
     */
    export type $DamagePredicate_ = { sourceEntity?: ($EntityPredicate_) | undefined, type?: ($DamageSourcePredicate_) | undefined, dealtDamage?: $MinMaxBounds$Doubles_, blocked?: (boolean) | undefined, takenDamage?: $MinMaxBounds$Doubles_,  } | [sourceEntity?: ($EntityPredicate_) | undefined, type?: ($DamageSourcePredicate_) | undefined, dealtDamage?: $MinMaxBounds$Doubles_, blocked?: (boolean) | undefined, takenDamage?: $MinMaxBounds$Doubles_, ];
    export class $FluidPredicate extends $Record {
        matches(level: $ServerLevel, pos: $BlockPos_): boolean;
        properties(): ($StatePropertiesPredicate) | undefined;
        fluids(): ($HolderSet<$Fluid>) | undefined;
        static CODEC: $Codec<$FluidPredicate>;
        constructor(arg0: ($HolderSet_<$Fluid>) | undefined, arg1: ($StatePropertiesPredicate_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $FluidPredicate}.
     */
    export type $FluidPredicate_ = { properties?: ($StatePropertiesPredicate_) | undefined, fluids?: ($HolderSet_<$Fluid>) | undefined,  } | [properties?: ($StatePropertiesPredicate_) | undefined, fluids?: ($HolderSet_<$Fluid>) | undefined, ];
    export class $CollectionCountsPredicate$Single<T, P extends $Predicate<T>> extends $Record implements $CollectionCountsPredicate<T, P> {
        test(collection: $Iterable_<T>): boolean;
        entry(): $CollectionCountsPredicate$Entry<T, P>;
        unpack(): $List<$CollectionCountsPredicate$Entry<T, P>>;
        or(arg0: $Predicate_<T>): $Predicate<T>;
        negate(): $Predicate<T>;
        and(arg0: $Predicate_<T>): $Predicate<T>;
        constructor(arg0: $CollectionCountsPredicate$Entry_<T, P>);
    }
    /**
     * Values that may be interpreted as {@link $CollectionCountsPredicate$Single}.
     */
    export type $CollectionCountsPredicate$Single_<T, P> = { entry?: $CollectionCountsPredicate$Entry_<any, $Predicate_<T>>,  } | [entry?: $CollectionCountsPredicate$Entry_<any, $Predicate_<T>>, ];
    export class $MinMaxBounds<T extends $Number> {
        static fromReader<T extends $Number, R extends $MinMaxBounds<T>>(reader: $StringReader, boundedFactory: $MinMaxBounds$BoundsFromReaderFactory_<T, R>, valueFactory: $Function_<string, T>, commandExceptionSupplier: $Supplier_<$DynamicCommandExceptionType>, formatter: $Function_<T, T>): R;
        static createCodec<T extends $Number, R extends $MinMaxBounds<T>>(codec: $Codec_<T>, boundsFactory: $MinMaxBounds$BoundsFactory_<T, R>): $Codec<R>;
        static ERROR_SWAPPED: $SimpleCommandExceptionType;
        static ERROR_EMPTY: $SimpleCommandExceptionType;
    }
    export interface $MinMaxBounds<T extends $Number> {
        isAny(): boolean;
        unwrapPoint(): (T) | undefined;
        min(): (T) | undefined;
        max(): (T) | undefined;
        get any(): boolean;
    }
    export class $EnchantedItemTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static enchantedItem(): $Criterion<$EnchantedItemTrigger$TriggerInstance>;
        matches(item: $ItemStack_, levels: number): boolean;
        item(): ($ItemPredicate) | undefined;
        levels(): $MinMaxBounds$Ints;
        player(): ($ContextAwarePredicate) | undefined;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$EnchantedItemTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, item: ($ItemPredicate_) | undefined, levels: $MinMaxBounds$Ints_);
    }
    /**
     * Values that may be interpreted as {@link $EnchantedItemTrigger$TriggerInstance}.
     */
    export type $EnchantedItemTrigger$TriggerInstance_ = { player?: ($ContextAwarePredicate) | undefined, levels?: $MinMaxBounds$Ints_, item?: ($ItemPredicate_) | undefined,  } | [player?: ($ContextAwarePredicate) | undefined, levels?: $MinMaxBounds$Ints_, item?: ($ItemPredicate_) | undefined, ];
    export class $ItemPotionsPredicate extends $Record implements $SingleComponentItemPredicate<$PotionContents> {
        static potions(potions: $HolderSet_<$Potion>): $ItemSubPredicate;
        potions(): $HolderSet<$Potion>;
        componentType(): $DataComponentType<$PotionContents>;
        matches(stack: $ItemStack_, value: $PotionContents_): boolean;
        matches(stack: $ItemStack_): boolean;
        static CODEC: $Codec<$ItemPotionsPredicate>;
        constructor(arg0: $HolderSet_<$Potion>);
    }
    /**
     * Values that may be interpreted as {@link $ItemPotionsPredicate}.
     */
    export type $ItemPotionsPredicate_ = { potions?: $HolderSet_<$Potion>,  } | [potions?: $HolderSet_<$Potion>, ];
    export class $PlayerPredicate extends $Record implements $EntitySubPredicate {
        gameType(): $GameTypePredicate;
        matches(entity: $Entity, level: $ServerLevel, position: $Vec3_ | null): boolean;
        level(): $MinMaxBounds$Ints;
        lookingAt(): ($EntityPredicate) | undefined;
        codec(): $MapCodec<$PlayerPredicate>;
        stats(): $List<$PlayerPredicate$StatMatcher<never>>;
        advancements(): $Map<$ResourceLocation, $PlayerPredicate$AdvancementPredicate>;
        recipes(): $Object2BooleanMap<$ResourceLocation>;
        static CODEC: $MapCodec<$PlayerPredicate>;
        static LOOKING_AT_RANGE: number;
        constructor(arg0: $MinMaxBounds$Ints_, arg1: $GameTypePredicate_, arg2: $List_<$PlayerPredicate$StatMatcher_<never>>, arg3: $Object2BooleanMap<$ResourceLocation_>, arg4: $Map_<$ResourceLocation_, $PlayerPredicate$AdvancementPredicate_>, arg5: ($EntityPredicate_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $PlayerPredicate}.
     */
    export type $PlayerPredicate_ = { gameType?: $GameTypePredicate_, stats?: $List_<$PlayerPredicate$StatMatcher_<never>>, lookingAt?: ($EntityPredicate_) | undefined, recipes?: $Object2BooleanMap<$ResourceLocation_>, level?: $MinMaxBounds$Ints_, advancements?: $Map_<$ResourceLocation_, $PlayerPredicate$AdvancementPredicate_>,  } | [gameType?: $GameTypePredicate_, stats?: $List_<$PlayerPredicate$StatMatcher_<never>>, lookingAt?: ($EntityPredicate_) | undefined, recipes?: $Object2BooleanMap<$ResourceLocation_>, level?: $MinMaxBounds$Ints_, advancements?: $Map_<$ResourceLocation_, $PlayerPredicate$AdvancementPredicate_>, ];
    export class $ItemDurabilityTrigger extends $SimpleCriterionTrigger<$ItemDurabilityTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, item: $ItemStack_, newDurability: number): void;
        constructor();
    }
    export class $ItemTrimPredicate extends $Record implements $SingleComponentItemPredicate<$ArmorTrim> {
        material(): ($HolderSet<$TrimMaterial>) | undefined;
        componentType(): $DataComponentType<$ArmorTrim>;
        matches(stack: $ItemStack_, value: $ArmorTrim): boolean;
        pattern(): ($HolderSet<$TrimPattern>) | undefined;
        matches(stack: $ItemStack_): boolean;
        static CODEC: $Codec<$ItemTrimPredicate>;
        constructor(arg0: ($HolderSet_<$TrimMaterial>) | undefined, arg1: ($HolderSet_<$TrimPattern>) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $ItemTrimPredicate}.
     */
    export type $ItemTrimPredicate_ = { pattern?: ($HolderSet_<$TrimPattern>) | undefined, material?: ($HolderSet_<$TrimMaterial>) | undefined,  } | [pattern?: ($HolderSet_<$TrimPattern>) | undefined, material?: ($HolderSet_<$TrimMaterial>) | undefined, ];
    export class $ConsumeItemTrigger extends $SimpleCriterionTrigger<$ConsumeItemTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, item: $ItemStack_): void;
        constructor();
    }
    export class $ItemAttributeModifiersPredicate$EntryPredicate extends $Record implements $Predicate<$ItemAttributeModifiers$Entry> {
        slot(): ($EquipmentSlotGroup) | undefined;
        test(entry: $ItemAttributeModifiers$Entry_): boolean;
        id(): ($ResourceLocation) | undefined;
        attribute(): ($HolderSet<$Attribute>) | undefined;
        amount(): $MinMaxBounds$Doubles;
        operation(): ($AttributeModifier$Operation) | undefined;
        or(arg0: $Predicate_<$ItemAttributeModifiers$Entry>): $Predicate<$ItemAttributeModifiers$Entry>;
        negate(): $Predicate<$ItemAttributeModifiers$Entry>;
        and(arg0: $Predicate_<$ItemAttributeModifiers$Entry>): $Predicate<$ItemAttributeModifiers$Entry>;
        static CODEC: $Codec<$ItemAttributeModifiersPredicate$EntryPredicate>;
        constructor(attribute: ($HolderSet_<$Attribute>) | undefined, id: ($ResourceLocation_) | undefined, amount: $MinMaxBounds$Doubles_, operation: ($AttributeModifier$Operation_) | undefined, slot: ($EquipmentSlotGroup_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $ItemAttributeModifiersPredicate$EntryPredicate}.
     */
    export type $ItemAttributeModifiersPredicate$EntryPredicate_ = { operation?: ($AttributeModifier$Operation_) | undefined, slot?: ($EquipmentSlotGroup_) | undefined, attribute?: ($HolderSet_<$Attribute>) | undefined, id?: ($ResourceLocation_) | undefined, amount?: $MinMaxBounds$Doubles_,  } | [operation?: ($AttributeModifier$Operation_) | undefined, slot?: ($EquipmentSlotGroup_) | undefined, attribute?: ($HolderSet_<$Attribute>) | undefined, id?: ($ResourceLocation_) | undefined, amount?: $MinMaxBounds$Doubles_, ];
    export class $LightningBoltPredicate extends $Record implements $EntitySubPredicate {
        blocksSetOnFire(): $MinMaxBounds$Ints;
        entityStruck(): ($EntityPredicate) | undefined;
        static blockSetOnFire(blocksSetOnFire: $MinMaxBounds$Ints_): $LightningBoltPredicate;
        matches(entity: $Entity, level: $ServerLevel, position: $Vec3_ | null): boolean;
        codec(): $MapCodec<$LightningBoltPredicate>;
        static CODEC: $MapCodec<$LightningBoltPredicate>;
        constructor(arg0: $MinMaxBounds$Ints_, arg1: ($EntityPredicate_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $LightningBoltPredicate}.
     */
    export type $LightningBoltPredicate_ = { entityStruck?: ($EntityPredicate_) | undefined, blocksSetOnFire?: $MinMaxBounds$Ints_,  } | [entityStruck?: ($EntityPredicate_) | undefined, blocksSetOnFire?: $MinMaxBounds$Ints_, ];
    export class $InventoryChangeTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static hasItems(...items: $ItemLike_[]): $Criterion<$InventoryChangeTrigger$TriggerInstance>;
        static hasItems(...items: $ItemPredicate$Builder[]): $Criterion<$InventoryChangeTrigger$TriggerInstance>;
        static hasItems(...items: $ItemPredicate_[]): $Criterion<$InventoryChangeTrigger$TriggerInstance>;
        items(): $List<$ItemPredicate>;
        matches(inventory: $Inventory, stack: $ItemStack_, full: number, empty: number, occupied: number): boolean;
        slots(): $InventoryChangeTrigger$TriggerInstance$Slots;
        player(): ($ContextAwarePredicate) | undefined;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$InventoryChangeTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: $InventoryChangeTrigger$TriggerInstance$Slots_, arg2: $List_<$ItemPredicate_>);
    }
    /**
     * Values that may be interpreted as {@link $InventoryChangeTrigger$TriggerInstance}.
     */
    export type $InventoryChangeTrigger$TriggerInstance_ = { slots?: $InventoryChangeTrigger$TriggerInstance$Slots_, items?: $List_<$ItemPredicate_>, player?: ($ContextAwarePredicate) | undefined,  } | [slots?: $InventoryChangeTrigger$TriggerInstance$Slots_, items?: $List_<$ItemPredicate_>, player?: ($ContextAwarePredicate) | undefined, ];
    export class $LootTableTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static lootTableUsed(lootTable: $ResourceKey_<$LootTable>): $Criterion<$LootTableTrigger$TriggerInstance>;
        lootTable(): $ResourceKey<$LootTable>;
        matches(lootTable: $ResourceKey_<$LootTable>): boolean;
        player(): ($ContextAwarePredicate) | undefined;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$LootTableTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: $ResourceKey_<$LootTable>);
    }
    /**
     * Values that may be interpreted as {@link $LootTableTrigger$TriggerInstance}.
     */
    export type $LootTableTrigger$TriggerInstance_ = { lootTable?: $ResourceKey_<$LootTable>, player?: ($ContextAwarePredicate) | undefined,  } | [lootTable?: $ResourceKey_<$LootTable>, player?: ($ContextAwarePredicate) | undefined, ];
    export class $KilledTrigger extends $SimpleCriterionTrigger<$KilledTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, entity: $Entity, source: $DamageSource_): void;
        constructor();
    }
    export class $PlayerPredicate$StatMatcher<T> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PlayerPredicate$StatMatcher}.
     */
    export type $PlayerPredicate$StatMatcher_<T> = { type?: $StatType_<any>, value?: $Holder_<any>, range?: $MinMaxBounds$Ints_, stat?: $Supplier_<$Stat<any>>,  } | [type?: $StatType_<any>, value?: $Holder_<any>, range?: $MinMaxBounds$Ints_, stat?: $Supplier_<$Stat<any>>, ];
    export class $CollectionContentsPredicate<T, P extends $Predicate<T>> {
        static of<T, P extends $Predicate<T>>(tests: $List_<P>): $CollectionContentsPredicate<T, P>;
        static of<T, P extends $Predicate<T>>(...tests: P[]): $CollectionContentsPredicate<T, P>;
        static codec<T, P extends $Predicate<T>>(testCodec: $Codec_<P>): $Codec<$CollectionContentsPredicate<T, P>>;
    }
    export interface $CollectionContentsPredicate<T, P extends $Predicate<T>> extends $Predicate<$Iterable<T>> {
        unpack(): $List<P>;
    }
    export class $MinMaxBounds$BoundsFromReaderFactory<T extends $Number, R extends $MinMaxBounds<T>> {
    }
    export interface $MinMaxBounds$BoundsFromReaderFactory<T extends $Number, R extends $MinMaxBounds<T>> {
        create(reader: $StringReader, min: (T) | undefined, max: (T) | undefined): R;
    }
    /**
     * Values that may be interpreted as {@link $MinMaxBounds$BoundsFromReaderFactory}.
     */
    export type $MinMaxBounds$BoundsFromReaderFactory_<T, R> = ((arg0: $StringReader, arg1: (T) | undefined, arg2: (T) | undefined) => R);
    export class $EnterBlockTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static entersBlock(block: $Block_): $Criterion<$EnterBlockTrigger$TriggerInstance>;
        matches(state: $BlockState_): boolean;
        state(): ($StatePropertiesPredicate) | undefined;
        block(): ($Holder<$Block>) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$EnterBlockTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($Holder_<$Block>) | undefined, arg2: ($StatePropertiesPredicate_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $EnterBlockTrigger$TriggerInstance}.
     */
    export type $EnterBlockTrigger$TriggerInstance_ = { block?: ($Holder_<$Block>) | undefined, state?: ($StatePropertiesPredicate_) | undefined, player?: ($ContextAwarePredicate) | undefined,  } | [block?: ($Holder_<$Block>) | undefined, state?: ($StatePropertiesPredicate_) | undefined, player?: ($ContextAwarePredicate) | undefined, ];
    export class $PlayerTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static sleptInBed(): $Criterion<$PlayerTrigger$TriggerInstance>;
        static raidWon(): $Criterion<$PlayerTrigger$TriggerInstance>;
        static avoidVibration(): $Criterion<$PlayerTrigger$TriggerInstance>;
        static walkOnBlockWithEquipment(block: $Block_, equipment: $Item_): $Criterion<$PlayerTrigger$TriggerInstance>;
        static located(location: $LocationPredicate$Builder): $Criterion<$PlayerTrigger$TriggerInstance>;
        static located(entity: $EntityPredicate$Builder): $Criterion<$PlayerTrigger$TriggerInstance>;
        static located(entity: ($EntityPredicate_) | undefined): $Criterion<$PlayerTrigger$TriggerInstance>;
        static tick(): $Criterion<$PlayerTrigger$TriggerInstance>;
        player(): ($ContextAwarePredicate) | undefined;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$PlayerTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $PlayerTrigger$TriggerInstance}.
     */
    export type $PlayerTrigger$TriggerInstance_ = { player?: ($ContextAwarePredicate) | undefined,  } | [player?: ($ContextAwarePredicate) | undefined, ];
    export class $RecipeUnlockedTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(recipe: $RecipeHolder_<never>): boolean;
        recipe(): $ResourceLocation;
        player(): ($ContextAwarePredicate) | undefined;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$RecipeUnlockedTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, recipe: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $RecipeUnlockedTrigger$TriggerInstance}.
     */
    export type $RecipeUnlockedTrigger$TriggerInstance_ = { recipe?: $ResourceLocation_, player?: ($ContextAwarePredicate) | undefined,  } | [recipe?: $ResourceLocation_, player?: ($ContextAwarePredicate) | undefined, ];
    export class $ItemJukeboxPlayablePredicate extends $Record implements $SingleComponentItemPredicate<$JukeboxPlayable> {
        song(): ($HolderSet<$JukeboxSong>) | undefined;
        componentType(): $DataComponentType<$JukeboxPlayable>;
        matches(stack: $ItemStack_, value: $JukeboxPlayable_): boolean;
        static any(): $ItemJukeboxPlayablePredicate;
        matches(stack: $ItemStack_): boolean;
        static CODEC: $Codec<$ItemJukeboxPlayablePredicate>;
        constructor(arg0: ($HolderSet_<$JukeboxSong>) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $ItemJukeboxPlayablePredicate}.
     */
    export type $ItemJukeboxPlayablePredicate_ = { song?: ($HolderSet_<$JukeboxSong>) | undefined,  } | [song?: ($HolderSet_<$JukeboxSong>) | undefined, ];
    export class $RecipeCraftedTrigger extends $SimpleCriterionTrigger<$RecipeCraftedTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, recipeId: $ResourceLocation_, items: $List_<$ItemStack_>): void;
        constructor();
    }
    export class $EntitySubPredicates$EntityHolderVariantPredicateType$Instance implements $EntitySubPredicate {
    }
    export class $PlayerInteractTrigger extends $SimpleCriterionTrigger<$PlayerInteractTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, item: $ItemStack_, entity: $Entity): void;
        constructor();
    }
    export class $ItemAttributeModifiersPredicate extends $Record implements $SingleComponentItemPredicate<$ItemAttributeModifiers> {
        modifiers(): ($CollectionPredicate<$ItemAttributeModifiers$Entry, $ItemAttributeModifiersPredicate$EntryPredicate>) | undefined;
        componentType(): $DataComponentType<$ItemAttributeModifiers>;
        matches(stack: $ItemStack_): boolean;
        matches(stack: $ItemStack_, value: $ItemAttributeModifiers_): boolean;
        static CODEC: $Codec<$ItemAttributeModifiersPredicate>;
        constructor(modifiers: ($CollectionPredicate_<$ItemAttributeModifiers$Entry_, $ItemAttributeModifiersPredicate$EntryPredicate_>) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $ItemAttributeModifiersPredicate}.
     */
    export type $ItemAttributeModifiersPredicate_ = { modifiers?: ($CollectionPredicate_<$ItemAttributeModifiers$Entry_, $ItemAttributeModifiersPredicate$EntryPredicate_>) | undefined,  } | [modifiers?: ($CollectionPredicate_<$ItemAttributeModifiers$Entry_, $ItemAttributeModifiersPredicate$EntryPredicate_>) | undefined, ];
    export class $RaiderPredicate extends $Record implements $EntitySubPredicate {
        isCaptain(): boolean;
        hasRaid(): boolean;
        matches(entity: $Entity, level: $ServerLevel, position: $Vec3_ | null): boolean;
        codec(): $MapCodec<$RaiderPredicate>;
        static CODEC: $MapCodec<$RaiderPredicate>;
        static CAPTAIN_WITHOUT_RAID: $RaiderPredicate;
        constructor(arg0: boolean, arg1: boolean);
        get captain(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RaiderPredicate}.
     */
    export type $RaiderPredicate_ = { hasRaid?: boolean, isCaptain?: boolean,  } | [hasRaid?: boolean, isCaptain?: boolean, ];
    export class $BredAnimalsTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static bredAnimals(child: $EntityPredicate$Builder): $Criterion<$BredAnimalsTrigger$TriggerInstance>;
        static bredAnimals(): $Criterion<$BredAnimalsTrigger$TriggerInstance>;
        static bredAnimals(parent: ($EntityPredicate_) | undefined, partner: ($EntityPredicate_) | undefined, child: ($EntityPredicate_) | undefined): $Criterion<$BredAnimalsTrigger$TriggerInstance>;
        partner(): ($ContextAwarePredicate) | undefined;
        parent(): ($ContextAwarePredicate) | undefined;
        matches(parentContext: $LootContext, partnerContext: $LootContext, childContext: $LootContext | null): boolean;
        validate(validator: $CriterionValidator): void;
        child(): ($ContextAwarePredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        static CODEC: $Codec<$BredAnimalsTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, parent: ($ContextAwarePredicate) | undefined, partner: ($ContextAwarePredicate) | undefined, child: ($ContextAwarePredicate) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $BredAnimalsTrigger$TriggerInstance}.
     */
    export type $BredAnimalsTrigger$TriggerInstance_ = { parent?: ($ContextAwarePredicate) | undefined, player?: ($ContextAwarePredicate) | undefined, partner?: ($ContextAwarePredicate) | undefined, child?: ($ContextAwarePredicate) | undefined,  } | [parent?: ($ContextAwarePredicate) | undefined, player?: ($ContextAwarePredicate) | undefined, partner?: ($ContextAwarePredicate) | undefined, child?: ($ContextAwarePredicate) | undefined, ];
    export class $ItemSubPredicate {
        static CODEC: $Codec<$Map<$ItemSubPredicate$Type<never>, $ItemSubPredicate>>;
    }
    export interface $ItemSubPredicate {
        matches(stack: $ItemStack_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ItemSubPredicate}.
     */
    export type $ItemSubPredicate_ = ((arg0: $ItemStack) => boolean);
    export class $SingleComponentItemPredicate<T> {
    }
    export interface $SingleComponentItemPredicate<T> extends $ItemSubPredicate {
        componentType(): $DataComponentType<T>;
        matches(stack: $ItemStack_): boolean;
        matches(stack: $ItemStack_, value: T): boolean;
    }
    export class $CollectionContentsPredicate$Zero<T, P extends $Predicate<T>> implements $CollectionContentsPredicate<T, P> {
        test(contents: $Iterable_<T>): boolean;
        unpack(): $List<P>;
        or(arg0: $Predicate_<T>): $Predicate<T>;
        negate(): $Predicate<T>;
        and(arg0: $Predicate_<T>): $Predicate<T>;
        constructor();
    }
    export class $PlayerPredicate$AdvancementDonePredicate extends $Record implements $PlayerPredicate$AdvancementPredicate {
        or(arg0: $Predicate_<$AdvancementProgress>): $Predicate<$AdvancementProgress>;
        negate(): $Predicate<$AdvancementProgress>;
        and(arg0: $Predicate_<$AdvancementProgress>): $Predicate<$AdvancementProgress>;
    }
    /**
     * Values that may be interpreted as {@link $PlayerPredicate$AdvancementDonePredicate}.
     */
    export type $PlayerPredicate$AdvancementDonePredicate_ = { state?: boolean,  } | [state?: boolean, ];
    export class $FishingHookPredicate extends $Record implements $EntitySubPredicate {
        inOpenWater(): (boolean) | undefined;
        static inOpenWater(inOpenWater: boolean): $FishingHookPredicate;
        matches(entity: $Entity, level: $ServerLevel, position: $Vec3_ | null): boolean;
        codec(): $MapCodec<$FishingHookPredicate>;
        static CODEC: $MapCodec<$FishingHookPredicate>;
        static ANY: $FishingHookPredicate;
        constructor(arg0: (boolean) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $FishingHookPredicate}.
     */
    export type $FishingHookPredicate_ = { inOpenWater?: (boolean) | undefined,  } | [inOpenWater?: (boolean) | undefined, ];
    export class $CollectionPredicate<T, P extends $Predicate<T>> extends $Record implements $Predicate<$Iterable<T>> {
        size(): ($MinMaxBounds$Ints) | undefined;
        test(collection: $Iterable_<$Iterable<T>>): boolean;
        contains(): ($CollectionContentsPredicate<$Iterable<T>, P>) | undefined;
        counts(): ($CollectionCountsPredicate<$Iterable<T>, P>) | undefined;
        static codec<T, P extends $Predicate<T>>(testCodec: $Codec_<P>): $Codec<$CollectionPredicate<T, P>>;
        or(arg0: $Predicate_<$Iterable<T>>): $Predicate<$Iterable<T>>;
        negate(): $Predicate<$Iterable<T>>;
        and(arg0: $Predicate_<$Iterable<T>>): $Predicate<$Iterable<T>>;
        constructor(arg0: ($CollectionContentsPredicate<$Iterable_<T>, P>) | undefined, arg1: ($CollectionCountsPredicate<$Iterable_<T>, P>) | undefined, arg2: ($MinMaxBounds$Ints_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $CollectionPredicate}.
     */
    export type $CollectionPredicate_<T, P> = { contains?: ($CollectionContentsPredicate<T, P>) | undefined, size?: ($MinMaxBounds$Ints_) | undefined, counts?: ($CollectionCountsPredicate<T, P>) | undefined,  } | [contains?: ($CollectionContentsPredicate<T, P>) | undefined, size?: ($MinMaxBounds$Ints_) | undefined, counts?: ($CollectionCountsPredicate<T, P>) | undefined, ];
    export class $EntityFlagsPredicate extends $Record {
        isOnGround(): (boolean) | undefined;
        matches(entity: $Entity): boolean;
        isOnFire(): (boolean) | undefined;
        isBaby(): (boolean) | undefined;
        isSprinting(): (boolean) | undefined;
        isFlying(): (boolean) | undefined;
        isCrouching(): (boolean) | undefined;
        isSwimming(): (boolean) | undefined;
        static CODEC: $Codec<$EntityFlagsPredicate>;
        constructor(arg0: (boolean) | undefined, arg1: (boolean) | undefined, arg2: (boolean) | undefined, arg3: (boolean) | undefined, arg4: (boolean) | undefined, arg5: (boolean) | undefined, arg6: (boolean) | undefined);
        get onGround(): (boolean) | undefined;
        get onFire(): (boolean) | undefined;
        get baby(): (boolean) | undefined;
        get sprinting(): (boolean) | undefined;
        get flying(): (boolean) | undefined;
        get crouching(): (boolean) | undefined;
        get swimming(): (boolean) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $EntityFlagsPredicate}.
     */
    export type $EntityFlagsPredicate_ = { isFlying?: (boolean) | undefined, isSprinting?: (boolean) | undefined, isCrouching?: (boolean) | undefined, isSwimming?: (boolean) | undefined, isBaby?: (boolean) | undefined, isOnGround?: (boolean) | undefined, isOnFire?: (boolean) | undefined,  } | [isFlying?: (boolean) | undefined, isSprinting?: (boolean) | undefined, isCrouching?: (boolean) | undefined, isSwimming?: (boolean) | undefined, isBaby?: (boolean) | undefined, isOnGround?: (boolean) | undefined, isOnFire?: (boolean) | undefined, ];
    export class $BeeNestDestroyedTrigger extends $SimpleCriterionTrigger<$BeeNestDestroyedTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, state: $BlockState_, stack: $ItemStack_, numBees: number): void;
        constructor();
    }
    export class $ItemEnchantmentsPredicate$Enchantments extends $ItemEnchantmentsPredicate {
        static CODEC: $Codec<$ItemEnchantmentsPredicate$Enchantments>;
    }
    export class $ItemUsedOnLocationTrigger extends $SimpleCriterionTrigger<$ItemUsedOnLocationTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, pos: $BlockPos_, stack: $ItemStack_): void;
        constructor();
    }
    export class $TameAnimalTrigger extends $SimpleCriterionTrigger<$TameAnimalTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, entity: $Animal): void;
        constructor();
    }
    export class $StatePropertiesPredicate extends $Record {
        matches(state: $FluidState): boolean;
        matches<S extends $StateHolder<never, S>>(properties: $StateDefinition<never, S>, targetProperty: S): boolean;
        matches(state: $BlockState_): boolean;
        properties(): $List<$StatePropertiesPredicate$PropertyMatcher>;
        checkState(state: $StateDefinition<never, never>): (string) | undefined;
        static CODEC: $Codec<$StatePropertiesPredicate>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $StatePropertiesPredicate>;
        constructor(properties: $List_<$StatePropertiesPredicate$PropertyMatcher_>);
    }
    /**
     * Values that may be interpreted as {@link $StatePropertiesPredicate}.
     */
    export type $StatePropertiesPredicate_ = { properties?: $List_<$StatePropertiesPredicate$PropertyMatcher_>,  } | [properties?: $List_<$StatePropertiesPredicate$PropertyMatcher_>, ];
    export class $FishingRodHookedTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        rod(): ($ItemPredicate) | undefined;
        static fishedItem(rod: ($ItemPredicate_) | undefined, entity: ($EntityPredicate_) | undefined, item: ($ItemPredicate_) | undefined): $Criterion<$FishingRodHookedTrigger$TriggerInstance>;
        entity(): ($ContextAwarePredicate) | undefined;
        matches(rod: $ItemStack_, context: $LootContext, stacks: $Collection_<$ItemStack_>): boolean;
        validate(validator: $CriterionValidator): void;
        item(): ($ItemPredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        static CODEC: $Codec<$FishingRodHookedTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, rod: ($ItemPredicate_) | undefined, entity: ($ContextAwarePredicate) | undefined, item: ($ItemPredicate_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $FishingRodHookedTrigger$TriggerInstance}.
     */
    export type $FishingRodHookedTrigger$TriggerInstance_ = { player?: ($ContextAwarePredicate) | undefined, rod?: ($ItemPredicate_) | undefined, entity?: ($ContextAwarePredicate) | undefined, item?: ($ItemPredicate_) | undefined,  } | [player?: ($ContextAwarePredicate) | undefined, rod?: ($ItemPredicate_) | undefined, entity?: ($ContextAwarePredicate) | undefined, item?: ($ItemPredicate_) | undefined, ];
    export class $AnyBlockInteractionTrigger extends $SimpleCriterionTrigger<$AnyBlockInteractionTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, pos: $BlockPos_, stack: $ItemStack_): void;
        constructor();
    }
    export class $InventoryChangeTrigger$TriggerInstance$Slots extends $Record {
        matches(full: number, empty: number, occupied: number): boolean;
        empty(): $MinMaxBounds$Ints;
        full(): $MinMaxBounds$Ints;
        occupied(): $MinMaxBounds$Ints;
        static CODEC: $Codec<$InventoryChangeTrigger$TriggerInstance$Slots>;
        static ANY: $InventoryChangeTrigger$TriggerInstance$Slots;
        constructor(arg0: $MinMaxBounds$Ints_, arg1: $MinMaxBounds$Ints_, arg2: $MinMaxBounds$Ints_);
    }
    /**
     * Values that may be interpreted as {@link $InventoryChangeTrigger$TriggerInstance$Slots}.
     */
    export type $InventoryChangeTrigger$TriggerInstance$Slots_ = { empty?: $MinMaxBounds$Ints_, occupied?: $MinMaxBounds$Ints_, full?: $MinMaxBounds$Ints_,  } | [empty?: $MinMaxBounds$Ints_, occupied?: $MinMaxBounds$Ints_, full?: $MinMaxBounds$Ints_, ];
    export class $BeeNestDestroyedTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        beesInside(): $MinMaxBounds$Ints;
        static destroyedBeeNest(block: $Block_, item: $ItemPredicate$Builder, numBees: $MinMaxBounds$Ints_): $Criterion<$BeeNestDestroyedTrigger$TriggerInstance>;
        matches(state: $BlockState_, stack: $ItemStack_, numBees: number): boolean;
        block(): ($Holder<$Block>) | undefined;
        item(): ($ItemPredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$BeeNestDestroyedTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($Holder_<$Block>) | undefined, arg2: ($ItemPredicate_) | undefined, arg3: $MinMaxBounds$Ints_);
    }
    /**
     * Values that may be interpreted as {@link $BeeNestDestroyedTrigger$TriggerInstance}.
     */
    export type $BeeNestDestroyedTrigger$TriggerInstance_ = { player?: ($ContextAwarePredicate) | undefined, beesInside?: $MinMaxBounds$Ints_, block?: ($Holder_<$Block>) | undefined, item?: ($ItemPredicate_) | undefined,  } | [player?: ($ContextAwarePredicate) | undefined, beesInside?: $MinMaxBounds$Ints_, block?: ($Holder_<$Block>) | undefined, item?: ($ItemPredicate_) | undefined, ];
    export class $StatePropertiesPredicate$ExactMatcher extends $Record implements $StatePropertiesPredicate$ValueMatcher {
    }
    /**
     * Values that may be interpreted as {@link $StatePropertiesPredicate$ExactMatcher}.
     */
    export type $StatePropertiesPredicate$ExactMatcher_ = { value?: string,  } | [value?: string, ];
    export class $ItemDamagePredicate extends $Record implements $SingleComponentItemPredicate<number> {
        static durability(damage: $MinMaxBounds$Ints_): $ItemDamagePredicate;
        durability(): $MinMaxBounds$Ints;
        componentType(): $DataComponentType<number>;
        matches(stack: $ItemStack_, value: number): boolean;
        damage(): $MinMaxBounds$Ints;
        matches(stack: $ItemStack_): boolean;
        static CODEC: $Codec<$ItemDamagePredicate>;
        constructor(arg0: $MinMaxBounds$Ints_, arg1: $MinMaxBounds$Ints_);
    }
    /**
     * Values that may be interpreted as {@link $ItemDamagePredicate}.
     */
    export type $ItemDamagePredicate_ = { damage?: $MinMaxBounds$Ints_, durability?: $MinMaxBounds$Ints_,  } | [damage?: $MinMaxBounds$Ints_, durability?: $MinMaxBounds$Ints_, ];
    export class $CollectionContentsPredicate$Multiple<T, P extends $Predicate<T>> extends $Record implements $CollectionContentsPredicate<T, P> {
        tests(): $List<P>;
        test(contents: $Iterable_<T>): boolean;
        unpack(): $List<P>;
        or(arg0: $Predicate_<T>): $Predicate<T>;
        negate(): $Predicate<T>;
        and(arg0: $Predicate_<T>): $Predicate<T>;
        constructor(arg0: $List_<P>);
    }
    /**
     * Values that may be interpreted as {@link $CollectionContentsPredicate$Multiple}.
     */
    export type $CollectionContentsPredicate$Multiple_<T, P> = { tests?: $List_<$Predicate_<T>>,  } | [tests?: $List_<$Predicate_<T>>, ];
    export class $FilledBucketTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static filledBucket(item: $ItemPredicate$Builder): $Criterion<$FilledBucketTrigger$TriggerInstance>;
        matches(stack: $ItemStack_): boolean;
        item(): ($ItemPredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$FilledBucketTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, item: ($ItemPredicate_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $FilledBucketTrigger$TriggerInstance}.
     */
    export type $FilledBucketTrigger$TriggerInstance_ = { item?: ($ItemPredicate_) | undefined, player?: ($ContextAwarePredicate) | undefined,  } | [item?: ($ItemPredicate_) | undefined, player?: ($ContextAwarePredicate) | undefined, ];
    export class $ItemSubPredicates {
        static bootstrap(registry: $Registry<$ItemSubPredicate$Type_<never>>): $ItemSubPredicate$Type<never>;
        static POTIONS: $ItemSubPredicate$Type<$ItemPotionsPredicate>;
        static STORED_ENCHANTMENTS: $ItemSubPredicate$Type<$ItemEnchantmentsPredicate$StoredEnchantments>;
        static CUSTOM_DATA: $ItemSubPredicate$Type<$ItemCustomDataPredicate>;
        static ARMOR_TRIM: $ItemSubPredicate$Type<$ItemTrimPredicate>;
        static BUNDLE_CONTENTS: $ItemSubPredicate$Type<$ItemBundlePredicate>;
        static DAMAGE: $ItemSubPredicate$Type<$ItemDamagePredicate>;
        static ENCHANTMENTS: $ItemSubPredicate$Type<$ItemEnchantmentsPredicate$Enchantments>;
        static FIREWORKS: $ItemSubPredicate$Type<$ItemFireworksPredicate>;
        static WRITABLE_BOOK: $ItemSubPredicate$Type<$ItemWritableBookPredicate>;
        static ATTRIBUTE_MODIFIERS: $ItemSubPredicate$Type<$ItemAttributeModifiersPredicate>;
        static CONTAINER: $ItemSubPredicate$Type<$ItemContainerPredicate>;
        static WRITTEN_BOOK: $ItemSubPredicate$Type<$ItemWrittenBookPredicate>;
        static JUKEBOX_PLAYABLE: $ItemSubPredicate$Type<$ItemJukeboxPlayablePredicate>;
        static FIREWORK_EXPLOSION: $ItemSubPredicate$Type<$ItemFireworkExplosionPredicate>;
        constructor();
    }
    export class $TradeTrigger extends $SimpleCriterionTrigger<$TradeTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, villager: $AbstractVillager, stack: $ItemStack_): void;
        constructor();
    }
    export class $StatePropertiesPredicate$ValueMatcher {
    }
    export interface $StatePropertiesPredicate$ValueMatcher {
    }
    /**
     * Values that may be interpreted as {@link $StatePropertiesPredicate$ValueMatcher}.
     */
    export type $StatePropertiesPredicate$ValueMatcher_ = (() => void);
    export class $LevitationTrigger extends $SimpleCriterionTrigger<$LevitationTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, startPos: $Vec3_, duration: number): void;
        constructor();
    }
    export class $SummonedEntityTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static summonedEntity(entity: $EntityPredicate$Builder): $Criterion<$SummonedEntityTrigger$TriggerInstance>;
        entity(): ($ContextAwarePredicate) | undefined;
        matches(lootContext: $LootContext): boolean;
        validate(validator: $CriterionValidator): void;
        player(): ($ContextAwarePredicate) | undefined;
        static CODEC: $Codec<$SummonedEntityTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, entity: ($ContextAwarePredicate) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $SummonedEntityTrigger$TriggerInstance}.
     */
    export type $SummonedEntityTrigger$TriggerInstance_ = { entity?: ($ContextAwarePredicate) | undefined, player?: ($ContextAwarePredicate) | undefined,  } | [entity?: ($ContextAwarePredicate) | undefined, player?: ($ContextAwarePredicate) | undefined, ];
    export class $EntitySubPredicate {
        static CODEC: $Codec<$EntitySubPredicate>;
    }
    export interface $EntitySubPredicate {
        matches(entity: $Entity, level: $ServerLevel, position: $Vec3_ | null): boolean;
        codec(): $MapCodec<$EntitySubPredicate>;
    }
    export class $WrappedMinMaxBounds extends $Record {
        serializeToJson(): $JsonElement;
        static exactly(min: number): $WrappedMinMaxBounds;
        matchesSqr(value: number): boolean;
        static atLeast(min: number): $WrappedMinMaxBounds;
        min(): number;
        max(): number;
        matches(value: number): boolean;
        static between(min: number, max: number): $WrappedMinMaxBounds;
        static fromJson(json: $JsonElement_ | null): $WrappedMinMaxBounds;
        static atMost(min: number): $WrappedMinMaxBounds;
        static fromReader(reader: $StringReader, isFloatingPoint: boolean, valueFactory: $Function_<number, number>): $WrappedMinMaxBounds;
        static fromReader(reader: $StringReader, isFloatingPoint: boolean): $WrappedMinMaxBounds;
        static ERROR_INTS_ONLY: $SimpleCommandExceptionType;
        static ANY: $WrappedMinMaxBounds;
        constructor(min: number | null, max: number | null);
    }
    /**
     * Values that may be interpreted as {@link $WrappedMinMaxBounds}.
     */
    export type $WrappedMinMaxBounds_ = { max?: number, min?: number,  } | [max?: number, min?: number, ];
    export class $ItemFireworkExplosionPredicate extends $Record implements $SingleComponentItemPredicate<$FireworkExplosion> {
        componentType(): $DataComponentType<$FireworkExplosion>;
        matches(stack: $ItemStack_, value: $FireworkExplosion_): boolean;
        predicate(): $ItemFireworkExplosionPredicate$FireworkPredicate;
        matches(stack: $ItemStack_): boolean;
        static CODEC: $Codec<$ItemFireworkExplosionPredicate>;
        constructor(arg0: $ItemFireworkExplosionPredicate$FireworkPredicate_);
    }
    /**
     * Values that may be interpreted as {@link $ItemFireworkExplosionPredicate}.
     */
    export type $ItemFireworkExplosionPredicate_ = { predicate?: $ItemFireworkExplosionPredicate$FireworkPredicate_,  } | [predicate?: $ItemFireworkExplosionPredicate$FireworkPredicate_, ];
    export class $StatePropertiesPredicate$PropertyMatcher extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $StatePropertiesPredicate$PropertyMatcher}.
     */
    export type $StatePropertiesPredicate$PropertyMatcher_ = { name?: string, valueMatcher?: $StatePropertiesPredicate$ValueMatcher_,  } | [name?: string, valueMatcher?: $StatePropertiesPredicate$ValueMatcher_, ];
    export class $EnchantmentPredicate extends $Record {
        containedIn(enchantments: $ItemEnchantments_): boolean;
        level(): $MinMaxBounds$Ints;
        enchantments(): ($HolderSet<$Enchantment>) | undefined;
        static CODEC: $Codec<$EnchantmentPredicate>;
        constructor(enchantment: $Holder_<$Enchantment>, level: $MinMaxBounds$Ints_);
        constructor(arg0: ($HolderSet_<$Enchantment>) | undefined, arg1: $MinMaxBounds$Ints_);
        constructor(enchantments: $HolderSet_<$Enchantment>, level: $MinMaxBounds$Ints_);
    }
    /**
     * Values that may be interpreted as {@link $EnchantmentPredicate}.
     */
    export type $EnchantmentPredicate_ = { level?: $MinMaxBounds$Ints_, enchantments?: ($HolderSet_<$Enchantment>) | undefined,  } | [level?: $MinMaxBounds$Ints_, enchantments?: ($HolderSet_<$Enchantment>) | undefined, ];
    export class $ItemFireworksPredicate extends $Record implements $SingleComponentItemPredicate<$Fireworks> {
        flightDuration(): $MinMaxBounds$Ints;
        componentType(): $DataComponentType<$Fireworks>;
        matches(stack: $ItemStack_, value: $Fireworks_): boolean;
        explosions(): ($CollectionPredicate<$FireworkExplosion, $ItemFireworkExplosionPredicate$FireworkPredicate>) | undefined;
        matches(stack: $ItemStack_): boolean;
        static CODEC: $Codec<$ItemFireworksPredicate>;
        constructor(arg0: ($CollectionPredicate_<$FireworkExplosion_, $ItemFireworkExplosionPredicate$FireworkPredicate_>) | undefined, arg1: $MinMaxBounds$Ints_);
    }
    /**
     * Values that may be interpreted as {@link $ItemFireworksPredicate}.
     */
    export type $ItemFireworksPredicate_ = { flightDuration?: $MinMaxBounds$Ints_, explosions?: ($CollectionPredicate_<$FireworkExplosion_, $ItemFireworkExplosionPredicate$FireworkPredicate_>) | undefined,  } | [flightDuration?: $MinMaxBounds$Ints_, explosions?: ($CollectionPredicate_<$FireworkExplosion_, $ItemFireworkExplosionPredicate$FireworkPredicate_>) | undefined, ];
    export class $PickedUpItemTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static thrownItemPickedUpByEntity(player: $ContextAwarePredicate, item: ($ItemPredicate_) | undefined, entity: ($ContextAwarePredicate) | undefined): $Criterion<$PickedUpItemTrigger$TriggerInstance>;
        static thrownItemPickedUpByPlayer(player: ($ContextAwarePredicate) | undefined, item: ($ItemPredicate_) | undefined, entity: ($ContextAwarePredicate) | undefined): $Criterion<$PickedUpItemTrigger$TriggerInstance>;
        entity(): ($ContextAwarePredicate) | undefined;
        matches(player: $ServerPlayer, stack: $ItemStack_, context: $LootContext): boolean;
        validate(validator: $CriterionValidator): void;
        item(): ($ItemPredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        static CODEC: $Codec<$PickedUpItemTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, item: ($ItemPredicate_) | undefined, entity: ($ContextAwarePredicate) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $PickedUpItemTrigger$TriggerInstance}.
     */
    export type $PickedUpItemTrigger$TriggerInstance_ = { player?: ($ContextAwarePredicate) | undefined, entity?: ($ContextAwarePredicate) | undefined, item?: ($ItemPredicate_) | undefined,  } | [player?: ($ContextAwarePredicate) | undefined, entity?: ($ContextAwarePredicate) | undefined, item?: ($ItemPredicate_) | undefined, ];
    export class $DistanceTrigger extends $SimpleCriterionTrigger<$DistanceTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, position: $Vec3_): void;
        constructor();
    }
    export class $KilledByCrossbowTrigger extends $SimpleCriterionTrigger<$KilledByCrossbowTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, entities: $Collection_<$Entity>): void;
        constructor();
    }
    export class $LightningStrikeTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        bystander(): ($ContextAwarePredicate) | undefined;
        static lightningStrike(lightning: ($EntityPredicate_) | undefined, bystander: ($EntityPredicate_) | undefined): $Criterion<$LightningStrikeTrigger$TriggerInstance>;
        lightning(): ($ContextAwarePredicate) | undefined;
        matches(playerContext: $LootContext, entityContexts: $List_<$LootContext>): boolean;
        validate(validator: $CriterionValidator): void;
        player(): ($ContextAwarePredicate) | undefined;
        static CODEC: $Codec<$LightningStrikeTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, lightning: ($ContextAwarePredicate) | undefined, bystander: ($ContextAwarePredicate) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $LightningStrikeTrigger$TriggerInstance}.
     */
    export type $LightningStrikeTrigger$TriggerInstance_ = { player?: ($ContextAwarePredicate) | undefined, lightning?: ($ContextAwarePredicate) | undefined, bystander?: ($ContextAwarePredicate) | undefined,  } | [player?: ($ContextAwarePredicate) | undefined, lightning?: ($ContextAwarePredicate) | undefined, bystander?: ($ContextAwarePredicate) | undefined, ];
    export class $MobEffectsPredicate$MobEffectInstancePredicate extends $Record {
        matches(effect: $MobEffectInstance | null): boolean;
        duration(): $MinMaxBounds$Ints;
        visible(): (boolean) | undefined;
        ambient(): (boolean) | undefined;
        amplifier(): $MinMaxBounds$Ints;
        static CODEC: $Codec<$MobEffectsPredicate$MobEffectInstancePredicate>;
        constructor();
        constructor(arg0: $MinMaxBounds$Ints_, arg1: $MinMaxBounds$Ints_, arg2: (boolean) | undefined, arg3: (boolean) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $MobEffectsPredicate$MobEffectInstancePredicate}.
     */
    export type $MobEffectsPredicate$MobEffectInstancePredicate_ = { visible?: (boolean) | undefined, amplifier?: $MinMaxBounds$Ints_, ambient?: (boolean) | undefined, duration?: $MinMaxBounds$Ints_,  } | [visible?: (boolean) | undefined, amplifier?: $MinMaxBounds$Ints_, ambient?: (boolean) | undefined, duration?: $MinMaxBounds$Ints_, ];
    export class $SlideDownBlockTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static slidesDownBlock(block: $Block_): $Criterion<$SlideDownBlockTrigger$TriggerInstance>;
        matches(state: $BlockState_): boolean;
        state(): ($StatePropertiesPredicate) | undefined;
        block(): ($Holder<$Block>) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$SlideDownBlockTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($Holder_<$Block>) | undefined, arg2: ($StatePropertiesPredicate_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $SlideDownBlockTrigger$TriggerInstance}.
     */
    export type $SlideDownBlockTrigger$TriggerInstance_ = { block?: ($Holder_<$Block>) | undefined, state?: ($StatePropertiesPredicate_) | undefined, player?: ($ContextAwarePredicate) | undefined,  } | [block?: ($Holder_<$Block>) | undefined, state?: ($StatePropertiesPredicate_) | undefined, player?: ($ContextAwarePredicate) | undefined, ];
    export class $ItemUsedOnLocationTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static itemUsedOnBlock(location: $LocationPredicate$Builder, tool: $ItemPredicate$Builder): $Criterion<$ItemUsedOnLocationTrigger$TriggerInstance>;
        static allayDropItemOnBlock(location: $LocationPredicate$Builder, tool: $ItemPredicate$Builder): $Criterion<$ItemUsedOnLocationTrigger$TriggerInstance>;
        static placedBlock(block: $Block_): $Criterion<$ItemUsedOnLocationTrigger$TriggerInstance>;
        static placedBlock(...conditions: $LootItemCondition$Builder_[]): $Criterion<$ItemUsedOnLocationTrigger$TriggerInstance>;
        matches(context: $LootContext): boolean;
        validate(validator: $CriterionValidator): void;
        location(): ($ContextAwarePredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        static CODEC: $Codec<$ItemUsedOnLocationTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, location: ($ContextAwarePredicate) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $ItemUsedOnLocationTrigger$TriggerInstance}.
     */
    export type $ItemUsedOnLocationTrigger$TriggerInstance_ = { player?: ($ContextAwarePredicate) | undefined, location?: ($ContextAwarePredicate) | undefined,  } | [player?: ($ContextAwarePredicate) | undefined, location?: ($ContextAwarePredicate) | undefined, ];
    export class $EntityEquipmentPredicate$Builder {
        mainhand(body: $ItemPredicate$Builder): $EntityEquipmentPredicate$Builder;
        feet(body: $ItemPredicate$Builder): $EntityEquipmentPredicate$Builder;
        legs(body: $ItemPredicate$Builder): $EntityEquipmentPredicate$Builder;
        chest(body: $ItemPredicate$Builder): $EntityEquipmentPredicate$Builder;
        head(body: $ItemPredicate$Builder): $EntityEquipmentPredicate$Builder;
        build(): $EntityEquipmentPredicate;
        body(body: $ItemPredicate$Builder): $EntityEquipmentPredicate$Builder;
        static equipment(): $EntityEquipmentPredicate$Builder;
        offhand(body: $ItemPredicate$Builder): $EntityEquipmentPredicate$Builder;
        constructor();
    }
    export class $ConstructBeaconTrigger extends $SimpleCriterionTrigger<$ConstructBeaconTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, level: number): void;
        constructor();
    }
    export class $DistancePredicate extends $Record {
        static vertical(absolute: $MinMaxBounds$Doubles_): $DistancePredicate;
        matches(x1: number, arg1: number, y1: number, arg3: number, z1: number, arg5: number): boolean;
        x(): $MinMaxBounds$Doubles;
        z(): $MinMaxBounds$Doubles;
        y(): $MinMaxBounds$Doubles;
        static absolute(absolute: $MinMaxBounds$Doubles_): $DistancePredicate;
        absolute(): $MinMaxBounds$Doubles;
        static horizontal(absolute: $MinMaxBounds$Doubles_): $DistancePredicate;
        horizontal(): $MinMaxBounds$Doubles;
        static CODEC: $Codec<$DistancePredicate>;
        constructor(x: $MinMaxBounds$Doubles_, y: $MinMaxBounds$Doubles_, z: $MinMaxBounds$Doubles_, horizontal: $MinMaxBounds$Doubles_, absolute: $MinMaxBounds$Doubles_);
    }
    /**
     * Values that may be interpreted as {@link $DistancePredicate}.
     */
    export type $DistancePredicate_ = { y?: $MinMaxBounds$Doubles_, absolute?: $MinMaxBounds$Doubles_, x?: $MinMaxBounds$Doubles_, horizontal?: $MinMaxBounds$Doubles_, z?: $MinMaxBounds$Doubles_,  } | [y?: $MinMaxBounds$Doubles_, absolute?: $MinMaxBounds$Doubles_, x?: $MinMaxBounds$Doubles_, horizontal?: $MinMaxBounds$Doubles_, z?: $MinMaxBounds$Doubles_, ];
    export class $SlimePredicate extends $Record implements $EntitySubPredicate {
        static sized(size: $MinMaxBounds$Ints_): $SlimePredicate;
        size(): $MinMaxBounds$Ints;
        matches(entity: $Entity, level: $ServerLevel, position: $Vec3_ | null): boolean;
        codec(): $MapCodec<$SlimePredicate>;
        static CODEC: $MapCodec<$SlimePredicate>;
        constructor(size: $MinMaxBounds$Ints_);
    }
    /**
     * Values that may be interpreted as {@link $SlimePredicate}.
     */
    export type $SlimePredicate_ = { size?: $MinMaxBounds$Ints_,  } | [size?: $MinMaxBounds$Ints_, ];
    export class $GameTypePredicate extends $Record {
        matches(type: $GameType_): boolean;
        static of(...types: $GameType_[]): $GameTypePredicate;
        types(): $List<$GameType>;
        static CODEC: $Codec<$GameTypePredicate>;
        static SURVIVAL_LIKE: $GameTypePredicate;
        static ANY: $GameTypePredicate;
        constructor(arg0: $List_<$GameType_>);
    }
    /**
     * Values that may be interpreted as {@link $GameTypePredicate}.
     */
    export type $GameTypePredicate_ = { types?: $List_<$GameType_>,  } | [types?: $List_<$GameType_>, ];
    export class $BrewedPotionTrigger extends $SimpleCriterionTrigger<$BrewedPotionTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, potion: $Holder_<$Potion>): void;
        constructor();
    }
    export class $ImpossibleTrigger implements $CriterionTrigger<$ImpossibleTrigger$TriggerInstance> {
        addPlayerListener(playerAdvancements: $PlayerAdvancements, listener: $CriterionTrigger$Listener_<$ImpossibleTrigger$TriggerInstance_>): void;
        removePlayerListener(playerAdvancements: $PlayerAdvancements, listener: $CriterionTrigger$Listener_<$ImpossibleTrigger$TriggerInstance_>): void;
        removePlayerListeners(playerAdvancements: $PlayerAdvancements): void;
        codec(): $Codec<$ImpossibleTrigger$TriggerInstance>;
        createCriterion(triggerInstance: $ImpossibleTrigger$TriggerInstance_): $Criterion<$ImpossibleTrigger$TriggerInstance>;
        constructor();
    }
    export class $FilledBucketTrigger extends $SimpleCriterionTrigger<$FilledBucketTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, stack: $ItemStack_): void;
        constructor();
    }
    export class $PickedUpItemTrigger extends $SimpleCriterionTrigger<$PickedUpItemTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, stack: $ItemStack_, entity: $Entity | null): void;
        constructor();
    }
    export class $FluidPredicate$Builder {
        static fluid(): $FluidPredicate$Builder;
        of(arg0: $HolderSet_<$Fluid>): $FluidPredicate$Builder;
        of(fluid: $Fluid_): $FluidPredicate$Builder;
        setProperties(properties: $StatePropertiesPredicate_): $FluidPredicate$Builder;
        build(): $FluidPredicate;
        set properties(value: $StatePropertiesPredicate_);
    }
    export class $EntitySubPredicates$EntityVariantPredicateType$Instance implements $EntitySubPredicate {
        matches(entity: $Entity, level: $ServerLevel, position: $Vec3_ | null): boolean;
        codec(): $MapCodec<$EntitySubPredicates$EntityVariantPredicateType$Instance>;
    }
    export class $UsingItemTrigger extends $SimpleCriterionTrigger<$UsingItemTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, item: $ItemStack_): void;
        constructor();
    }
    export class $CollectionCountsPredicate<T, P extends $Predicate<T>> {
        static of<T, P extends $Predicate<T>>(entries: $List_<$CollectionCountsPredicate$Entry_<T, P>>): $CollectionCountsPredicate<T, P>;
        static of<T, P extends $Predicate<T>>(...entries: $CollectionCountsPredicate$Entry_<T, P>[]): $CollectionCountsPredicate<T, P>;
        static codec<T, P extends $Predicate<T>>(testCodec: $Codec_<P>): $Codec<$CollectionCountsPredicate<T, P>>;
    }
    export interface $CollectionCountsPredicate<T, P extends $Predicate<T>> extends $Predicate<$Iterable<T>> {
        unpack(): $List<$CollectionCountsPredicate$Entry<$Iterable<T>, P>>;
    }
    export class $SlotsPredicate extends $Record {
        matches(entity: $Entity): boolean;
        slots(): $Map<$SlotRange, $ItemPredicate>;
        static CODEC: $Codec<$SlotsPredicate>;
        constructor(arg0: $Map_<$SlotRange, $ItemPredicate_>);
    }
    /**
     * Values that may be interpreted as {@link $SlotsPredicate}.
     */
    export type $SlotsPredicate_ = { slots?: $Map_<$SlotRange, $ItemPredicate_>,  } | [slots?: $Map_<$SlotRange, $ItemPredicate_>, ];
    export class $NbtPredicate extends $Record {
        matches(tag: $Tag_ | null): boolean;
        matches(entity: $Entity): boolean;
        matches(stack: $ItemStack_): boolean;
        tag(): $CompoundTag;
        static getEntityTagToCompare(entity: $Entity): $CompoundTag;
        static CODEC: $Codec<$NbtPredicate>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $NbtPredicate>;
        constructor(tag: $CompoundTag_);
    }
    /**
     * Values that may be interpreted as {@link $NbtPredicate}.
     */
    export type $NbtPredicate_ = { tag?: $CompoundTag_,  } | [tag?: $CompoundTag_, ];
    export class $ItemDurabilityTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static changedDurability(player: ($ContextAwarePredicate) | undefined, item: ($ItemPredicate_) | undefined, durability: $MinMaxBounds$Ints_): $Criterion<$ItemDurabilityTrigger$TriggerInstance>;
        static changedDurability(item: ($ItemPredicate_) | undefined, durability: $MinMaxBounds$Ints_): $Criterion<$ItemDurabilityTrigger$TriggerInstance>;
        durability(): $MinMaxBounds$Ints;
        matches(item: $ItemStack_, durability: number): boolean;
        delta(): $MinMaxBounds$Ints;
        item(): ($ItemPredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$ItemDurabilityTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, item: ($ItemPredicate_) | undefined, durability: $MinMaxBounds$Ints_, delta: $MinMaxBounds$Ints_);
    }
    /**
     * Values that may be interpreted as {@link $ItemDurabilityTrigger$TriggerInstance}.
     */
    export type $ItemDurabilityTrigger$TriggerInstance_ = { player?: ($ContextAwarePredicate) | undefined, durability?: $MinMaxBounds$Ints_, delta?: $MinMaxBounds$Ints_, item?: ($ItemPredicate_) | undefined,  } | [player?: ($ContextAwarePredicate) | undefined, durability?: $MinMaxBounds$Ints_, delta?: $MinMaxBounds$Ints_, item?: ($ItemPredicate_) | undefined, ];
    export class $KilledByCrossbowTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        uniqueEntityTypes(): $MinMaxBounds$Ints;
        static crossbowKilled(uniqueEntityTypes: $MinMaxBounds$Ints_): $Criterion<$KilledByCrossbowTrigger$TriggerInstance>;
        static crossbowKilled(...victims: $EntityPredicate$Builder[]): $Criterion<$KilledByCrossbowTrigger$TriggerInstance>;
        victims(): $List<$ContextAwarePredicate>;
        matches(contexts: $Collection_<$LootContext>, bounds: number): boolean;
        validate(validator: $CriterionValidator): void;
        player(): ($ContextAwarePredicate) | undefined;
        static CODEC: $Codec<$KilledByCrossbowTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, victims: $List_<$ContextAwarePredicate>, uniqueEntityTypes: $MinMaxBounds$Ints_);
    }
    /**
     * Values that may be interpreted as {@link $KilledByCrossbowTrigger$TriggerInstance}.
     */
    export type $KilledByCrossbowTrigger$TriggerInstance_ = { victims?: $List_<$ContextAwarePredicate>, uniqueEntityTypes?: $MinMaxBounds$Ints_, player?: ($ContextAwarePredicate) | undefined,  } | [victims?: $List_<$ContextAwarePredicate>, uniqueEntityTypes?: $MinMaxBounds$Ints_, player?: ($ContextAwarePredicate) | undefined, ];
    export class $PlayerPredicate$AdvancementCriterionsPredicate extends $Record implements $PlayerPredicate$AdvancementPredicate {
        or(arg0: $Predicate_<$AdvancementProgress>): $Predicate<$AdvancementProgress>;
        negate(): $Predicate<$AdvancementProgress>;
        and(arg0: $Predicate_<$AdvancementProgress>): $Predicate<$AdvancementProgress>;
    }
    /**
     * Values that may be interpreted as {@link $PlayerPredicate$AdvancementCriterionsPredicate}.
     */
    export type $PlayerPredicate$AdvancementCriterionsPredicate_ = { criterions?: $Object2BooleanMap<string>,  } | [criterions?: $Object2BooleanMap<string>, ];
    export class $PlayerPredicate$Builder {
        setGameType(gameType: $GameTypePredicate_): $PlayerPredicate$Builder;
        addRecipe(recipe: $ResourceLocation_, unlocked: boolean): $PlayerPredicate$Builder;
        setLookingAt(lookingAt: $EntityPredicate$Builder): $PlayerPredicate$Builder;
        addStat<T>(type: $StatType_<T>, value: $Holder$Reference<T>, range: $MinMaxBounds$Ints_): $PlayerPredicate$Builder;
        checkAdvancementDone(recipe: $ResourceLocation_, unlocked: boolean): $PlayerPredicate$Builder;
        checkAdvancementCriterions(advancement: $ResourceLocation_, criterions: $Map_<string, boolean>): $PlayerPredicate$Builder;
        build(): $PlayerPredicate;
        setLevel(level: $MinMaxBounds$Ints_): $PlayerPredicate$Builder;
        static player(): $PlayerPredicate$Builder;
        constructor();
        set gameType(value: $GameTypePredicate_);
        set lookingAt(value: $EntityPredicate$Builder);
        set level(value: $MinMaxBounds$Ints_);
    }
    export class $EffectsChangedTrigger extends $SimpleCriterionTrigger<$EffectsChangedTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, source: $Entity | null): void;
        constructor();
    }
    export class $DamageSourcePredicate extends $Record {
        sourceEntity(): ($EntityPredicate) | undefined;
        directEntity(): ($EntityPredicate) | undefined;
        matches(player: $ServerPlayer, source: $DamageSource_): boolean;
        matches(level: $ServerLevel, position: $Vec3_, source: $DamageSource_): boolean;
        isDirect(): (boolean) | undefined;
        tags(): $List<$TagPredicate<$DamageType>>;
        static CODEC: $Codec<$DamageSourcePredicate>;
        constructor(arg0: $List_<$TagPredicate_<$DamageType_>>, arg1: ($EntityPredicate_) | undefined, arg2: ($EntityPredicate_) | undefined, arg3: (boolean) | undefined);
        get direct(): (boolean) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $DamageSourcePredicate}.
     */
    export type $DamageSourcePredicate_ = { tags?: $List_<$TagPredicate_<$DamageType_>>, sourceEntity?: ($EntityPredicate_) | undefined, directEntity?: ($EntityPredicate_) | undefined, isDirect?: (boolean) | undefined,  } | [tags?: $List_<$TagPredicate_<$DamageType_>>, sourceEntity?: ($EntityPredicate_) | undefined, directEntity?: ($EntityPredicate_) | undefined, isDirect?: (boolean) | undefined, ];
    export class $PlayerHurtEntityTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static playerHurtEntity(damage: ($DamagePredicate_) | undefined, entity: ($EntityPredicate_) | undefined): $Criterion<$PlayerHurtEntityTrigger$TriggerInstance>;
        static playerHurtEntity(damage: $DamagePredicate$Builder, entity: ($EntityPredicate_) | undefined): $Criterion<$PlayerHurtEntityTrigger$TriggerInstance>;
        static playerHurtEntity(entity: ($EntityPredicate_) | undefined): $Criterion<$PlayerHurtEntityTrigger$TriggerInstance>;
        static playerHurtEntity(): $Criterion<$PlayerHurtEntityTrigger$TriggerInstance>;
        static playerHurtEntityWithDamage(damage: $DamagePredicate$Builder): $Criterion<$PlayerHurtEntityTrigger$TriggerInstance>;
        static playerHurtEntityWithDamage(entity: ($DamagePredicate_) | undefined): $Criterion<$PlayerHurtEntityTrigger$TriggerInstance>;
        entity(): ($ContextAwarePredicate) | undefined;
        matches(player: $ServerPlayer, context: $LootContext, damage: $DamageSource_, dealt: number, taken: number, blocked: boolean): boolean;
        validate(validator: $CriterionValidator): void;
        player(): ($ContextAwarePredicate) | undefined;
        damage(): ($DamagePredicate) | undefined;
        static CODEC: $Codec<$PlayerHurtEntityTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, damage: ($DamagePredicate_) | undefined, entity: ($ContextAwarePredicate) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $PlayerHurtEntityTrigger$TriggerInstance}.
     */
    export type $PlayerHurtEntityTrigger$TriggerInstance_ = { player?: ($ContextAwarePredicate) | undefined, entity?: ($ContextAwarePredicate) | undefined, damage?: ($DamagePredicate_) | undefined,  } | [player?: ($ContextAwarePredicate) | undefined, entity?: ($ContextAwarePredicate) | undefined, damage?: ($DamagePredicate_) | undefined, ];
    export class $SummonedEntityTrigger extends $SimpleCriterionTrigger<$SummonedEntityTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, entity: $Entity): void;
        constructor();
    }
    export class $AnyBlockInteractionTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(context: $LootContext): boolean;
        validate(validator: $CriterionValidator): void;
        location(): ($ContextAwarePredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        static CODEC: $Codec<$AnyBlockInteractionTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($ContextAwarePredicate) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $AnyBlockInteractionTrigger$TriggerInstance}.
     */
    export type $AnyBlockInteractionTrigger$TriggerInstance_ = { player?: ($ContextAwarePredicate) | undefined, location?: ($ContextAwarePredicate) | undefined,  } | [player?: ($ContextAwarePredicate) | undefined, location?: ($ContextAwarePredicate) | undefined, ];
    export class $ConsumeItemTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static usedItem(item: $ItemLike_): $Criterion<$ConsumeItemTrigger$TriggerInstance>;
        static usedItem(): $Criterion<$ConsumeItemTrigger$TriggerInstance>;
        static usedItem(item: $ItemPredicate$Builder): $Criterion<$ConsumeItemTrigger$TriggerInstance>;
        matches(item: $ItemStack_): boolean;
        item(): ($ItemPredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$ConsumeItemTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, item: ($ItemPredicate_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $ConsumeItemTrigger$TriggerInstance}.
     */
    export type $ConsumeItemTrigger$TriggerInstance_ = { item?: ($ItemPredicate_) | undefined, player?: ($ContextAwarePredicate) | undefined,  } | [item?: ($ItemPredicate_) | undefined, player?: ($ContextAwarePredicate) | undefined, ];
    export class $UsedEnderEyeTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(distanceSq: number): boolean;
        distance(): $MinMaxBounds$Doubles;
        player(): ($ContextAwarePredicate) | undefined;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$UsedEnderEyeTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, distance: $MinMaxBounds$Doubles_);
    }
    /**
     * Values that may be interpreted as {@link $UsedEnderEyeTrigger$TriggerInstance}.
     */
    export type $UsedEnderEyeTrigger$TriggerInstance_ = { player?: ($ContextAwarePredicate) | undefined, distance?: $MinMaxBounds$Doubles_,  } | [player?: ($ContextAwarePredicate) | undefined, distance?: $MinMaxBounds$Doubles_, ];
    export class $DamageSourcePredicate$Builder {
        static damageType(): $DamageSourcePredicate$Builder;
        isDirect(isDirect: boolean): $DamageSourcePredicate$Builder;
        source(directEntity: $EntityPredicate$Builder): $DamageSourcePredicate$Builder;
        build(): $DamageSourcePredicate;
        direct(directEntity: $EntityPredicate$Builder): $DamageSourcePredicate$Builder;
        tag(tag: $TagPredicate_<$DamageType_>): $DamageSourcePredicate$Builder;
        constructor();
    }
    export class $FishingRodHookedTrigger extends $SimpleCriterionTrigger<$FishingRodHookedTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, rod: $ItemStack_, entity: $FishingHook, stacks: $Collection_<$ItemStack_>): void;
        constructor();
    }
    export class $TagPredicate<T> extends $Record {
        matches(value: $Holder_<T>): boolean;
        expected(): boolean;
        static is<T>(tag: $TagKey_<T>): $TagPredicate<T>;
        tag(): $TagKey<T>;
        static codec<T>(registryKey: $ResourceKey_<$Registry<T>>): $Codec<$TagPredicate<T>>;
        static isNot<T>(tag: $TagKey_<T>): $TagPredicate<T>;
        constructor(tag: $TagKey_<T>, expected: boolean);
    }
    /**
     * Values that may be interpreted as {@link $TagPredicate}.
     */
    export type $TagPredicate_<T> = { expected?: boolean, tag?: $TagKey_<any>,  } | [expected?: boolean, tag?: $TagKey_<any>, ];
    export class $ItemEnchantmentsPredicate$StoredEnchantments extends $ItemEnchantmentsPredicate {
        static CODEC: $Codec<$ItemEnchantmentsPredicate$StoredEnchantments>;
    }
    export class $TameAnimalTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static tamedAnimal(entity: $EntityPredicate$Builder): $Criterion<$TameAnimalTrigger$TriggerInstance>;
        static tamedAnimal(): $Criterion<$TameAnimalTrigger$TriggerInstance>;
        entity(): ($ContextAwarePredicate) | undefined;
        matches(lootContext: $LootContext): boolean;
        validate(validator: $CriterionValidator): void;
        player(): ($ContextAwarePredicate) | undefined;
        static CODEC: $Codec<$TameAnimalTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, entity: ($ContextAwarePredicate) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $TameAnimalTrigger$TriggerInstance}.
     */
    export type $TameAnimalTrigger$TriggerInstance_ = { entity?: ($ContextAwarePredicate) | undefined, player?: ($ContextAwarePredicate) | undefined,  } | [entity?: ($ContextAwarePredicate) | undefined, player?: ($ContextAwarePredicate) | undefined, ];
    export class $ItemFireworkExplosionPredicate$FireworkPredicate extends $Record implements $Predicate<$FireworkExplosion> {
        twinkle(): (boolean) | undefined;
        test(explosion: $FireworkExplosion_): boolean;
        trail(): (boolean) | undefined;
        shape(): ($FireworkExplosion$Shape) | undefined;
        or(arg0: $Predicate_<$FireworkExplosion>): $Predicate<$FireworkExplosion>;
        negate(): $Predicate<$FireworkExplosion>;
        and(arg0: $Predicate_<$FireworkExplosion>): $Predicate<$FireworkExplosion>;
        static CODEC: $Codec<$ItemFireworkExplosionPredicate$FireworkPredicate>;
        constructor(arg0: ($FireworkExplosion$Shape_) | undefined, arg1: (boolean) | undefined, arg2: (boolean) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $ItemFireworkExplosionPredicate$FireworkPredicate}.
     */
    export type $ItemFireworkExplosionPredicate$FireworkPredicate_ = { twinkle?: (boolean) | undefined, trail?: (boolean) | undefined, shape?: ($FireworkExplosion$Shape_) | undefined,  } | [twinkle?: (boolean) | undefined, trail?: (boolean) | undefined, shape?: ($FireworkExplosion$Shape_) | undefined, ];
    export class $ItemWrittenBookPredicate$PagePredicate extends $Record implements $Predicate<$Filterable<$Component>> {
        test(contents: $Filterable_<$Component_>): boolean;
        contents(): $Component;
        or(arg0: $Predicate_<$Filterable<$Component>>): $Predicate<$Filterable<$Component>>;
        negate(): $Predicate<$Filterable<$Component>>;
        and(arg0: $Predicate_<$Filterable<$Component>>): $Predicate<$Filterable<$Component>>;
        static CODEC: $Codec<$ItemWrittenBookPredicate$PagePredicate>;
        constructor(arg0: $Component_);
    }
    /**
     * Values that may be interpreted as {@link $ItemWrittenBookPredicate$PagePredicate}.
     */
    export type $ItemWrittenBookPredicate$PagePredicate_ = { contents?: $Component_,  } | [contents?: $Component_, ];
    export class $UsedEnderEyeTrigger extends $SimpleCriterionTrigger<$UsedEnderEyeTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, pos: $BlockPos_): void;
        constructor();
    }
    export class $CollectionCountsPredicate$Entry<T, P extends $Predicate<T>> extends $Record {
        test(collection: $Iterable_<T>): boolean;
        test(): P;
        count(): $MinMaxBounds$Ints;
        static codec<T, P extends $Predicate<T>>(testCodec: $Codec_<P>): $Codec<$CollectionCountsPredicate$Entry<T, P>>;
        constructor(arg0: P, arg1: $MinMaxBounds$Ints_);
    }
    /**
     * Values that may be interpreted as {@link $CollectionCountsPredicate$Entry}.
     */
    export type $CollectionCountsPredicate$Entry_<T, P> = { count?: $MinMaxBounds$Ints_, test?: $Predicate_<T>,  } | [count?: $MinMaxBounds$Ints_, test?: $Predicate_<T>, ];
    export class $ShotCrossbowTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static shotCrossbow(item: $ItemLike_): $Criterion<$ShotCrossbowTrigger$TriggerInstance>;
        static shotCrossbow(item: ($ItemPredicate_) | undefined): $Criterion<$ShotCrossbowTrigger$TriggerInstance>;
        matches(item: $ItemStack_): boolean;
        item(): ($ItemPredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$ShotCrossbowTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, item: ($ItemPredicate_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $ShotCrossbowTrigger$TriggerInstance}.
     */
    export type $ShotCrossbowTrigger$TriggerInstance_ = { item?: ($ItemPredicate_) | undefined, player?: ($ContextAwarePredicate) | undefined,  } | [item?: ($ItemPredicate_) | undefined, player?: ($ContextAwarePredicate) | undefined, ];
    export class $FallAfterExplosionTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static fallAfterExplosion(distance: $DistancePredicate_, cause: $EntityPredicate$Builder): $Criterion<$FallAfterExplosionTrigger$TriggerInstance>;
        startPosition(): ($LocationPredicate) | undefined;
        matches(level: $ServerLevel, startPosition: $Vec3_, endPosition: $Vec3_, context: $LootContext | null): boolean;
        cause(): ($ContextAwarePredicate) | undefined;
        validate(validator: $CriterionValidator): void;
        distance(): ($DistancePredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        static CODEC: $Codec<$FallAfterExplosionTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($LocationPredicate_) | undefined, arg2: ($DistancePredicate_) | undefined, arg3: ($ContextAwarePredicate) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $FallAfterExplosionTrigger$TriggerInstance}.
     */
    export type $FallAfterExplosionTrigger$TriggerInstance_ = { player?: ($ContextAwarePredicate) | undefined, cause?: ($ContextAwarePredicate) | undefined, distance?: ($DistancePredicate_) | undefined, startPosition?: ($LocationPredicate_) | undefined,  } | [player?: ($ContextAwarePredicate) | undefined, cause?: ($ContextAwarePredicate) | undefined, distance?: ($DistancePredicate_) | undefined, startPosition?: ($LocationPredicate_) | undefined, ];
    export class $TargetBlockTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static targetHit(signalStrength: $MinMaxBounds$Ints_, projectile: ($ContextAwarePredicate) | undefined): $Criterion<$TargetBlockTrigger$TriggerInstance>;
        signalStrength(): $MinMaxBounds$Ints;
        matches(context: $LootContext, vector: $Vec3_, signalStrength: number): boolean;
        validate(validator: $CriterionValidator): void;
        player(): ($ContextAwarePredicate) | undefined;
        projectile(): ($ContextAwarePredicate) | undefined;
        static CODEC: $Codec<$TargetBlockTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, signalStrength: $MinMaxBounds$Ints_, projectile: ($ContextAwarePredicate) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $TargetBlockTrigger$TriggerInstance}.
     */
    export type $TargetBlockTrigger$TriggerInstance_ = { player?: ($ContextAwarePredicate) | undefined, projectile?: ($ContextAwarePredicate) | undefined, signalStrength?: $MinMaxBounds$Ints_,  } | [player?: ($ContextAwarePredicate) | undefined, projectile?: ($ContextAwarePredicate) | undefined, signalStrength?: $MinMaxBounds$Ints_, ];
    export class $StatePropertiesPredicate$Builder {
        static properties(): $StatePropertiesPredicate$Builder;
        build(): ($StatePropertiesPredicate) | undefined;
        hasProperty(property: $Property<number>, value: number): $StatePropertiesPredicate$Builder;
        hasProperty<T extends $Comparable<T>>(property: $Property<T>, value: T): $StatePropertiesPredicate$Builder;
        hasProperty(property: $Property<boolean>, value: boolean): $StatePropertiesPredicate$Builder;
        hasProperty(property: $Property<never>, value: string): $StatePropertiesPredicate$Builder;
    }
    export class $ItemWritableBookPredicate$PagePredicate extends $Record implements $Predicate<$Filterable<string>> {
        test(contents: $Filterable_<string>): boolean;
        contents(): string;
        or(arg0: $Predicate_<$Filterable<string>>): $Predicate<$Filterable<string>>;
        negate(): $Predicate<$Filterable<string>>;
        and(arg0: $Predicate_<$Filterable<string>>): $Predicate<$Filterable<string>>;
        static CODEC: $Codec<$ItemWritableBookPredicate$PagePredicate>;
        constructor(arg0: string);
    }
    /**
     * Values that may be interpreted as {@link $ItemWritableBookPredicate$PagePredicate}.
     */
    export type $ItemWritableBookPredicate$PagePredicate_ = { contents?: string,  } | [contents?: string, ];
    export class $EnterBlockTrigger extends $SimpleCriterionTrigger<$EnterBlockTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, state: $BlockState_): void;
        constructor();
    }
    export class $CriterionValidator {
        validateEntities(entities: $List_<$ContextAwarePredicate>, name: string): void;
        validateEntity(entity: $ContextAwarePredicate, name: string): void;
        validateEntity(entity: ($ContextAwarePredicate) | undefined, name: string): void;
        validate(entity: $ContextAwarePredicate, contextParams: $LootContextParamSet, name: string): void;
        validate(entities: $List_<$ContextAwarePredicate>, contextParams: $LootContextParamSet, name: string): void;
        constructor(reporter: $ProblemReporter, lootData: $HolderGetter$Provider_);
    }
    export class $EntitySubPredicates$EntityVariantPredicateType<V> {
        createPredicate(variant: V): $EntitySubPredicate;
        static create<V>(variantRegistry: $Registry<V>, getter: $Function_<$Entity, (V) | undefined>): $EntitySubPredicates$EntityVariantPredicateType<V>;
        static create<V>(codec: $Codec_<V>, getter: $Function_<$Entity, (V) | undefined>): $EntitySubPredicates$EntityVariantPredicateType<V>;
        codec: $MapCodec<$EntitySubPredicates$EntityVariantPredicateType$Instance>;
        constructor(codec: $Codec_<V>, getter: $Function_<$Entity, (V) | undefined>);
    }
    export class $DistanceTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static fallFromHeight(player: $EntityPredicate$Builder, distance: $DistancePredicate_, startPosition: $LocationPredicate$Builder): $Criterion<$DistanceTrigger$TriggerInstance>;
        static rideEntityInLava(player: $EntityPredicate$Builder, distance: $DistancePredicate_): $Criterion<$DistanceTrigger$TriggerInstance>;
        static travelledThroughNether(distance: $DistancePredicate_): $Criterion<$DistanceTrigger$TriggerInstance>;
        startPosition(): ($LocationPredicate) | undefined;
        matches(level: $ServerLevel, startPosition: $Vec3_, currentPosition: $Vec3_): boolean;
        distance(): ($DistancePredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$DistanceTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, startPosition: ($LocationPredicate_) | undefined, distance: ($DistancePredicate_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $DistanceTrigger$TriggerInstance}.
     */
    export type $DistanceTrigger$TriggerInstance_ = { player?: ($ContextAwarePredicate) | undefined, startPosition?: ($LocationPredicate_) | undefined, distance?: ($DistancePredicate_) | undefined,  } | [player?: ($ContextAwarePredicate) | undefined, startPosition?: ($LocationPredicate_) | undefined, distance?: ($DistancePredicate_) | undefined, ];
    export class $ItemCustomDataPredicate extends $Record implements $ItemSubPredicate {
        static customData(value: $NbtPredicate_): $ItemCustomDataPredicate;
        value(): $NbtPredicate;
        matches(stack: $ItemStack_): boolean;
        static CODEC: $Codec<$ItemCustomDataPredicate>;
        constructor(arg0: $NbtPredicate_);
    }
    /**
     * Values that may be interpreted as {@link $ItemCustomDataPredicate}.
     */
    export type $ItemCustomDataPredicate_ = { value?: $NbtPredicate_,  } | [value?: $NbtPredicate_, ];
    export class $BredAnimalsTrigger extends $SimpleCriterionTrigger<$BredAnimalsTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, parent: $Animal, partner: $Animal, child: $AgeableMob | null): void;
        constructor();
    }
    export class $StatePropertiesPredicate$RangedMatcher extends $Record implements $StatePropertiesPredicate$ValueMatcher {
    }
    /**
     * Values that may be interpreted as {@link $StatePropertiesPredicate$RangedMatcher}.
     */
    export type $StatePropertiesPredicate$RangedMatcher_ = { minValue?: (string) | undefined, maxValue?: (string) | undefined,  } | [minValue?: (string) | undefined, maxValue?: (string) | undefined, ];
    export class $ItemEnchantmentsPredicate implements $SingleComponentItemPredicate<$ItemEnchantments> {
        static storedEnchantments(enchantments: $List_<$EnchantmentPredicate_>): $ItemEnchantmentsPredicate$StoredEnchantments;
        matches(stack: $ItemStack_, enchantments: $ItemEnchantments_): boolean;
        static codec<T extends $ItemEnchantmentsPredicate>(predicateFactory: $Function_<$List<$EnchantmentPredicate>, T>): $Codec<T>;
        static enchantments(enchantments: $List_<$EnchantmentPredicate_>): $ItemEnchantmentsPredicate$Enchantments;
        matches(stack: $ItemStack_): boolean;
    }
    export class $BlockPredicate$Builder {
        hasNbt(nbt: $CompoundTag_): $BlockPredicate$Builder;
        of(blocks: $Collection_<$Block_>): $BlockPredicate$Builder;
        of(tag: $TagKey_<$Block>): $BlockPredicate$Builder;
        of(...blocks: $Block_[]): $BlockPredicate$Builder;
        setProperties(properties: $StatePropertiesPredicate$Builder): $BlockPredicate$Builder;
        static block(): $BlockPredicate$Builder;
        build(): $BlockPredicate;
        set properties(value: $StatePropertiesPredicate$Builder);
    }
    export class $ItemSubPredicate$Type<T extends $ItemSubPredicate> extends $Record {
        codec(): $Codec<T>;
        constructor(arg0: $Codec_<T>);
    }
    /**
     * Values that may be interpreted as {@link $ItemSubPredicate$Type}.
     */
    export type $ItemSubPredicate$Type_<T> = RegistryTypes.ItemSubPredicateType | { codec?: $Codec_<$ItemSubPredicate_>,  } | [codec?: $Codec_<$ItemSubPredicate_>, ];
    export interface $ItemSubPredicate$Type<T> extends RegistryMarked<RegistryTypes.ItemSubPredicateTypeTag, RegistryTypes.ItemSubPredicateType> {}
    export class $ChanneledLightningTrigger extends $SimpleCriterionTrigger<$ChanneledLightningTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, entityTriggered: $Collection_<$Entity>): void;
        constructor();
    }
    export class $LocationPredicate$Builder {
        setBiomes(biomes: $HolderSet_<$Biome>): $LocationPredicate$Builder;
        setCanSeeSky(canSeeSky: boolean): $LocationPredicate$Builder;
        setX(y: $MinMaxBounds$Doubles_): $LocationPredicate$Builder;
        setY(y: $MinMaxBounds$Doubles_): $LocationPredicate$Builder;
        setZ(y: $MinMaxBounds$Doubles_): $LocationPredicate$Builder;
        setStructures(biomes: $HolderSet_<$Structure>): $LocationPredicate$Builder;
        setFluid(fluid: $FluidPredicate$Builder): $LocationPredicate$Builder;
        setDimension(dimension: $ResourceKey_<$Level>): $LocationPredicate$Builder;
        static inBiome(biome: $Holder_<$Biome>): $LocationPredicate$Builder;
        static inDimension(dimension: $ResourceKey_<$Level>): $LocationPredicate$Builder;
        static inStructure(biome: $Holder_<$Structure>): $LocationPredicate$Builder;
        static atYLocation(y: $MinMaxBounds$Doubles_): $LocationPredicate$Builder;
        setSmokey(canSeeSky: boolean): $LocationPredicate$Builder;
        static location(): $LocationPredicate$Builder;
        build(): $LocationPredicate;
        setLight(light: $LightPredicate$Builder): $LocationPredicate$Builder;
        setBlock(block: $BlockPredicate$Builder): $LocationPredicate$Builder;
        constructor();
        set biomes(value: $HolderSet_<$Biome>);
        set canSeeSky(value: boolean);
        set x(value: $MinMaxBounds$Doubles_);
        set y(value: $MinMaxBounds$Doubles_);
        set z(value: $MinMaxBounds$Doubles_);
        set structures(value: $HolderSet_<$Structure>);
        set fluid(value: $FluidPredicate$Builder);
        set dimension(value: $ResourceKey_<$Level>);
        set smokey(value: boolean);
        set light(value: $LightPredicate$Builder);
        set block(value: $BlockPredicate$Builder);
    }
    export class $EntityFlagsPredicate$Builder {
        setIsFlying(isCrouching: boolean): $EntityFlagsPredicate$Builder;
        setOnFire(isCrouching: boolean): $EntityFlagsPredicate$Builder;
        setCrouching(isCrouching: boolean): $EntityFlagsPredicate$Builder;
        setIsBaby(isCrouching: boolean): $EntityFlagsPredicate$Builder;
        static flags(): $EntityFlagsPredicate$Builder;
        build(): $EntityFlagsPredicate;
        setSprinting(isCrouching: boolean): $EntityFlagsPredicate$Builder;
        setOnGround(isCrouching: boolean): $EntityFlagsPredicate$Builder;
        setSwimming(isCrouching: boolean): $EntityFlagsPredicate$Builder;
        constructor();
        set isFlying(value: boolean);
        set onFire(value: boolean);
        set crouching(value: boolean);
        set isBaby(value: boolean);
        set sprinting(value: boolean);
        set onGround(value: boolean);
        set swimming(value: boolean);
    }
    export class $CollectionCountsPredicate$Zero<T, P extends $Predicate<T>> implements $CollectionCountsPredicate<T, P> {
        test(collection: $Iterable_<T>): boolean;
        unpack(): $List<$CollectionCountsPredicate$Entry<T, P>>;
        or(arg0: $Predicate_<T>): $Predicate<T>;
        negate(): $Predicate<T>;
        and(arg0: $Predicate_<T>): $Predicate<T>;
        constructor();
    }
    export class $ShotCrossbowTrigger extends $SimpleCriterionTrigger<$ShotCrossbowTrigger$TriggerInstance> {
        trigger(shooter: $ServerPlayer, stack: $ItemStack_): void;
        constructor();
    }
    export class $MinMaxBounds$BoundsFactory<T extends $Number, R extends $MinMaxBounds<T>> {
    }
    export interface $MinMaxBounds$BoundsFactory<T extends $Number, R extends $MinMaxBounds<T>> {
        create(min: (T) | undefined, max: (T) | undefined): R;
    }
    /**
     * Values that may be interpreted as {@link $MinMaxBounds$BoundsFactory}.
     */
    export type $MinMaxBounds$BoundsFactory_<T, R> = ((arg0: (T) | undefined, arg1: (T) | undefined) => R);
    export class $ContextAwarePredicate {
        matches(context: $LootContext): boolean;
        validate(arg0: $ValidationContext): void;
        static create(...conditions: $LootItemCondition[]): $ContextAwarePredicate;
        static CODEC: $Codec<$ContextAwarePredicate>;
    }
    export class $BrewedPotionTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static brewedPotion(): $Criterion<$BrewedPotionTrigger$TriggerInstance>;
        matches(potion: $Holder_<$Potion>): boolean;
        player(): ($ContextAwarePredicate) | undefined;
        potion(): ($Holder<$Potion>) | undefined;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$BrewedPotionTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($Holder_<$Potion>) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $BrewedPotionTrigger$TriggerInstance}.
     */
    export type $BrewedPotionTrigger$TriggerInstance_ = { potion?: ($Holder_<$Potion>) | undefined, player?: ($ContextAwarePredicate) | undefined,  } | [potion?: ($Holder_<$Potion>) | undefined, player?: ($ContextAwarePredicate) | undefined, ];
    export class $EnchantedItemTrigger extends $SimpleCriterionTrigger<$EnchantedItemTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, item: $ItemStack_, levelsSpent: number): void;
        constructor();
    }
    export class $PlayerHurtEntityTrigger extends $SimpleCriterionTrigger<$PlayerHurtEntityTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, entity: $Entity, source: $DamageSource_, amountDealt: number, amountTaken: number, blocked: boolean): void;
        constructor();
    }
    export class $DefaultBlockInteractionTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(context: $LootContext): boolean;
        validate(validator: $CriterionValidator): void;
        location(): ($ContextAwarePredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        static CODEC: $Codec<$DefaultBlockInteractionTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($ContextAwarePredicate) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $DefaultBlockInteractionTrigger$TriggerInstance}.
     */
    export type $DefaultBlockInteractionTrigger$TriggerInstance_ = { player?: ($ContextAwarePredicate) | undefined, location?: ($ContextAwarePredicate) | undefined,  } | [player?: ($ContextAwarePredicate) | undefined, location?: ($ContextAwarePredicate) | undefined, ];
    export class $ItemPredicate$Builder {
        withCount(count: $MinMaxBounds$Ints_): $ItemPredicate$Builder;
        hasComponents(components: $DataComponentPredicate): $ItemPredicate$Builder;
        withSubPredicate<T extends $ItemSubPredicate>(arg0: $ItemSubPredicate$Type_<T>, arg1: T): $ItemPredicate$Builder;
        of(tag: $TagKey_<$Item>): $ItemPredicate$Builder;
        of(...items: $ItemLike_[]): $ItemPredicate$Builder;
        build(): $ItemPredicate;
        static item(): $ItemPredicate$Builder;
    }
    export class $MobEffectsPredicate$Builder {
        build(): ($MobEffectsPredicate) | undefined;
        and(effect: $Holder_<$MobEffect>, predicate: $MobEffectsPredicate$MobEffectInstancePredicate_): $MobEffectsPredicate$Builder;
        and(effect: $Holder_<$MobEffect>): $MobEffectsPredicate$Builder;
        static effects(): $MobEffectsPredicate$Builder;
        constructor();
    }
    export class $LocationPredicate$PositionPredicate extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $LocationPredicate$PositionPredicate}.
     */
    export type $LocationPredicate$PositionPredicate_ = { y?: $MinMaxBounds$Doubles_, x?: $MinMaxBounds$Doubles_, z?: $MinMaxBounds$Doubles_,  } | [y?: $MinMaxBounds$Doubles_, x?: $MinMaxBounds$Doubles_, z?: $MinMaxBounds$Doubles_, ];
    export class $StartRidingTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static playerStartsRiding(player: $EntityPredicate$Builder): $Criterion<$StartRidingTrigger$TriggerInstance>;
        player(): ($ContextAwarePredicate) | undefined;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$StartRidingTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $StartRidingTrigger$TriggerInstance}.
     */
    export type $StartRidingTrigger$TriggerInstance_ = { player?: ($ContextAwarePredicate) | undefined,  } | [player?: ($ContextAwarePredicate) | undefined, ];
    export class $PlayerInteractTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static itemUsedOnEntity(item: $ItemPredicate$Builder, entity: ($ContextAwarePredicate) | undefined): $Criterion<$PlayerInteractTrigger$TriggerInstance>;
        static itemUsedOnEntity(player: ($ContextAwarePredicate) | undefined, item: $ItemPredicate$Builder, entity: ($ContextAwarePredicate) | undefined): $Criterion<$PlayerInteractTrigger$TriggerInstance>;
        entity(): ($ContextAwarePredicate) | undefined;
        matches(item: $ItemStack_, lootContext: $LootContext): boolean;
        validate(validator: $CriterionValidator): void;
        item(): ($ItemPredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        static CODEC: $Codec<$PlayerInteractTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, item: ($ItemPredicate_) | undefined, entity: ($ContextAwarePredicate) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $PlayerInteractTrigger$TriggerInstance}.
     */
    export type $PlayerInteractTrigger$TriggerInstance_ = { player?: ($ContextAwarePredicate) | undefined, entity?: ($ContextAwarePredicate) | undefined, item?: ($ItemPredicate_) | undefined,  } | [player?: ($ContextAwarePredicate) | undefined, entity?: ($ContextAwarePredicate) | undefined, item?: ($ItemPredicate_) | undefined, ];
    export class $SlideDownBlockTrigger extends $SimpleCriterionTrigger<$SlideDownBlockTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, state: $BlockState_): void;
        constructor();
    }
    export class $LightPredicate extends $Record {
        matches(level: $ServerLevel, pos: $BlockPos_): boolean;
        composite(): $MinMaxBounds$Ints;
        static CODEC: $Codec<$LightPredicate>;
        constructor(composite: $MinMaxBounds$Ints_);
    }
    /**
     * Values that may be interpreted as {@link $LightPredicate}.
     */
    export type $LightPredicate_ = { composite?: $MinMaxBounds$Ints_,  } | [composite?: $MinMaxBounds$Ints_, ];
    export class $ConstructBeaconTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static constructedBeacon(level: $MinMaxBounds$Ints_): $Criterion<$ConstructBeaconTrigger$TriggerInstance>;
        static constructedBeacon(): $Criterion<$ConstructBeaconTrigger$TriggerInstance>;
        matches(level: number): boolean;
        level(): $MinMaxBounds$Ints;
        player(): ($ContextAwarePredicate) | undefined;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$ConstructBeaconTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, level: $MinMaxBounds$Ints_);
    }
    /**
     * Values that may be interpreted as {@link $ConstructBeaconTrigger$TriggerInstance}.
     */
    export type $ConstructBeaconTrigger$TriggerInstance_ = { level?: $MinMaxBounds$Ints_, player?: ($ContextAwarePredicate) | undefined,  } | [level?: $MinMaxBounds$Ints_, player?: ($ContextAwarePredicate) | undefined, ];
    export class $DefaultBlockInteractionTrigger extends $SimpleCriterionTrigger<$DefaultBlockInteractionTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, pos: $BlockPos_): void;
        constructor();
    }
    export class $InventoryChangeTrigger extends $SimpleCriterionTrigger<$InventoryChangeTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, inventory: $Inventory, stack: $ItemStack_): void;
        constructor();
    }
    export class $EntityPredicate$Builder {
        movementAffectedBy(location: $LocationPredicate$Builder): $EntityPredicate$Builder;
        moving(movement: $MovementPredicate_): $EntityPredicate$Builder;
        subPredicate(subPredicate: $EntitySubPredicate): $EntityPredicate$Builder;
        targetedEntity(passenger: $EntityPredicate$Builder): $EntityPredicate$Builder;
        located(location: $LocationPredicate$Builder): $EntityPredicate$Builder;
        steppingOn(location: $LocationPredicate$Builder): $EntityPredicate$Builder;
        periodicTick(periodicTick: number): $EntityPredicate$Builder;
        static entity(): $EntityPredicate$Builder;
        flags(flags: $EntityFlagsPredicate$Builder): $EntityPredicate$Builder;
        of(entityType: $EntityType_<never>): $EntityPredicate$Builder;
        of(entityTypeTag: $TagKey_<$EntityType<never>>): $EntityPredicate$Builder;
        slots(slots: $SlotsPredicate_): $EntityPredicate$Builder;
        distance(distanceToPlayer: $DistancePredicate_): $EntityPredicate$Builder;
        build(): $EntityPredicate;
        nbt(nbt: $NbtPredicate_): $EntityPredicate$Builder;
        entityType(entityType: $EntityTypePredicate_): $EntityPredicate$Builder;
        team(team: string): $EntityPredicate$Builder;
        effects(effects: $MobEffectsPredicate$Builder): $EntityPredicate$Builder;
        equipment(equipment: $EntityEquipmentPredicate$Builder): $EntityPredicate$Builder;
        equipment(equipment: $EntityEquipmentPredicate_): $EntityPredicate$Builder;
        vehicle(passenger: $EntityPredicate$Builder): $EntityPredicate$Builder;
        passenger(passenger: $EntityPredicate$Builder): $EntityPredicate$Builder;
        constructor();
    }
    export class $FallAfterExplosionTrigger extends $SimpleCriterionTrigger<$FallAfterExplosionTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, pos: $Vec3_, entity: $Entity | null): void;
        constructor();
    }
    export class $PlayerTrigger extends $SimpleCriterionTrigger<$PlayerTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer): void;
        constructor();
    }
    export class $UsingItemTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(item: $ItemStack_): boolean;
        item(): ($ItemPredicate) | undefined;
        static lookingAt(player: $EntityPredicate$Builder, item: $ItemPredicate$Builder): $Criterion<$UsingItemTrigger$TriggerInstance>;
        player(): ($ContextAwarePredicate) | undefined;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$UsingItemTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, item: ($ItemPredicate_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $UsingItemTrigger$TriggerInstance}.
     */
    export type $UsingItemTrigger$TriggerInstance_ = { item?: ($ItemPredicate_) | undefined, player?: ($ContextAwarePredicate) | undefined,  } | [item?: ($ItemPredicate_) | undefined, player?: ($ContextAwarePredicate) | undefined, ];
    export class $EntityHurtPlayerTrigger extends $SimpleCriterionTrigger<$EntityHurtPlayerTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, source: $DamageSource_, dealtDamage: number, takenDamage: number, blocked: boolean): void;
        constructor();
    }
    export class $KilledTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        entityPredicate(): ($ContextAwarePredicate) | undefined;
        killingBlow(): ($DamageSourcePredicate) | undefined;
        static playerKilledEntity(entityPredicate: $EntityPredicate$Builder, killingBlow: ($DamageSourcePredicate_) | undefined): $Criterion<$KilledTrigger$TriggerInstance>;
        static playerKilledEntity(entityPredicate: ($EntityPredicate_) | undefined, killingBlow: $DamageSourcePredicate$Builder): $Criterion<$KilledTrigger$TriggerInstance>;
        static playerKilledEntity(entityPredicate: $EntityPredicate$Builder, killingBlow: $DamageSourcePredicate$Builder): $Criterion<$KilledTrigger$TriggerInstance>;
        static playerKilledEntity(entityPredicate: ($EntityPredicate_) | undefined, killingBlow: ($DamageSourcePredicate_) | undefined): $Criterion<$KilledTrigger$TriggerInstance>;
        static playerKilledEntity(entityPredicate: ($EntityPredicate_) | undefined): $Criterion<$KilledTrigger$TriggerInstance>;
        static playerKilledEntity(): $Criterion<$KilledTrigger$TriggerInstance>;
        static playerKilledEntity(entityPredicate: $EntityPredicate$Builder): $Criterion<$KilledTrigger$TriggerInstance>;
        static playerKilledEntityNearSculkCatalyst(): $Criterion<$KilledTrigger$TriggerInstance>;
        static entityKilledPlayer(entityPredicate: ($EntityPredicate_) | undefined): $Criterion<$KilledTrigger$TriggerInstance>;
        static entityKilledPlayer(entityPredicate: ($EntityPredicate_) | undefined, killingBlow: $DamageSourcePredicate$Builder): $Criterion<$KilledTrigger$TriggerInstance>;
        static entityKilledPlayer(entityPredicate: $EntityPredicate$Builder, killingBlow: $DamageSourcePredicate$Builder): $Criterion<$KilledTrigger$TriggerInstance>;
        static entityKilledPlayer(entityPredicate: $EntityPredicate$Builder, killingBlow: ($DamageSourcePredicate_) | undefined): $Criterion<$KilledTrigger$TriggerInstance>;
        static entityKilledPlayer(entityPredicate: ($EntityPredicate_) | undefined, killingBlow: ($DamageSourcePredicate_) | undefined): $Criterion<$KilledTrigger$TriggerInstance>;
        static entityKilledPlayer(): $Criterion<$KilledTrigger$TriggerInstance>;
        static entityKilledPlayer(entityPredicate: $EntityPredicate$Builder): $Criterion<$KilledTrigger$TriggerInstance>;
        matches(player: $ServerPlayer, context: $LootContext, source: $DamageSource_): boolean;
        validate(validator: $CriterionValidator): void;
        player(): ($ContextAwarePredicate) | undefined;
        static CODEC: $Codec<$KilledTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, entityPredicate: ($ContextAwarePredicate) | undefined, killingBlow: ($DamageSourcePredicate_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $KilledTrigger$TriggerInstance}.
     */
    export type $KilledTrigger$TriggerInstance_ = { player?: ($ContextAwarePredicate) | undefined, entityPredicate?: ($ContextAwarePredicate) | undefined, killingBlow?: ($DamageSourcePredicate_) | undefined,  } | [player?: ($ContextAwarePredicate) | undefined, entityPredicate?: ($ContextAwarePredicate) | undefined, killingBlow?: ($DamageSourcePredicate_) | undefined, ];
    export class $BlockPredicate extends $Record {
        requiresNbt(): boolean;
        blocks(): ($HolderSet<$Block>) | undefined;
        matches(level: $ServerLevel, pos: $BlockPos_): boolean;
        matches(block: $BlockInWorld): boolean;
        properties(): ($StatePropertiesPredicate) | undefined;
        nbt(): ($NbtPredicate) | undefined;
        static CODEC: $Codec<$BlockPredicate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BlockPredicate>;
        constructor(arg0: ($HolderSet_<$Block>) | undefined, arg1: ($StatePropertiesPredicate_) | undefined, arg2: ($NbtPredicate_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $BlockPredicate}.
     */
    export type $BlockPredicate_ = { nbt?: ($NbtPredicate_) | undefined, properties?: ($StatePropertiesPredicate_) | undefined, blocks?: ($HolderSet_<$Block>) | undefined,  } | [nbt?: ($NbtPredicate_) | undefined, properties?: ($StatePropertiesPredicate_) | undefined, blocks?: ($HolderSet_<$Block>) | undefined, ];
    export class $ChangeDimensionTrigger extends $SimpleCriterionTrigger<$ChangeDimensionTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, fromLevel: $ResourceKey_<$Level>, toLevel: $ResourceKey_<$Level>): void;
        constructor();
    }
    export class $ItemBundlePredicate extends $Record implements $SingleComponentItemPredicate<$BundleContents> {
        items(): ($CollectionPredicate<$ItemStack, $ItemPredicate>) | undefined;
        componentType(): $DataComponentType<$BundleContents>;
        matches(stack: $ItemStack_, value: $BundleContents): boolean;
        matches(stack: $ItemStack_): boolean;
        static CODEC: $Codec<$ItemBundlePredicate>;
        constructor(arg0: ($CollectionPredicate_<$ItemStack_, $ItemPredicate_>) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $ItemBundlePredicate}.
     */
    export type $ItemBundlePredicate_ = { items?: ($CollectionPredicate_<$ItemStack_, $ItemPredicate_>) | undefined,  } | [items?: ($CollectionPredicate_<$ItemStack_, $ItemPredicate_>) | undefined, ];
    export class $LightningStrikeTrigger extends $SimpleCriterionTrigger<$LightningStrikeTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, lightning: $LightningBolt, nearbyEntities: $List_<$Entity>): void;
        constructor();
    }
    export class $StartRidingTrigger extends $SimpleCriterionTrigger<$StartRidingTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer): void;
        constructor();
    }
    export class $LocationPredicate extends $Record {
        canSeeSky(): (boolean) | undefined;
        fluid(): ($FluidPredicate) | undefined;
        smokey(): (boolean) | undefined;
        dimension(): ($ResourceKey<$Level>) | undefined;
        position(): ($LocationPredicate$PositionPredicate) | undefined;
        matches(level: $ServerLevel, x: number, arg2: number, y: number): boolean;
        block(): ($BlockPredicate) | undefined;
        light(): ($LightPredicate) | undefined;
        structures(): ($HolderSet<$Structure>) | undefined;
        biomes(): ($HolderSet<$Biome>) | undefined;
        static CODEC: $Codec<$LocationPredicate>;
        constructor(arg0: ($LocationPredicate$PositionPredicate_) | undefined, arg1: ($HolderSet_<$Biome>) | undefined, arg2: ($HolderSet_<$Structure>) | undefined, arg3: ($ResourceKey_<$Level>) | undefined, arg4: (boolean) | undefined, arg5: ($LightPredicate_) | undefined, arg6: ($BlockPredicate_) | undefined, arg7: ($FluidPredicate_) | undefined, arg8: (boolean) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $LocationPredicate}.
     */
    export type $LocationPredicate_ = { structures?: ($HolderSet_<$Structure>) | undefined, canSeeSky?: (boolean) | undefined, dimension?: ($ResourceKey_<$Level>) | undefined, smokey?: (boolean) | undefined, biomes?: ($HolderSet_<$Biome>) | undefined, fluid?: ($FluidPredicate_) | undefined, position?: ($LocationPredicate$PositionPredicate_) | undefined, light?: ($LightPredicate_) | undefined, block?: ($BlockPredicate_) | undefined,  } | [structures?: ($HolderSet_<$Structure>) | undefined, canSeeSky?: (boolean) | undefined, dimension?: ($ResourceKey_<$Level>) | undefined, smokey?: (boolean) | undefined, biomes?: ($HolderSet_<$Biome>) | undefined, fluid?: ($FluidPredicate_) | undefined, position?: ($LocationPredicate$PositionPredicate_) | undefined, light?: ($LightPredicate_) | undefined, block?: ($BlockPredicate_) | undefined, ];
    export class $CuredZombieVillagerTrigger extends $SimpleCriterionTrigger<$CuredZombieVillagerTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, zombie: $Zombie, villager: $Villager): void;
        constructor();
    }
    export class $LootTableTrigger extends $SimpleCriterionTrigger<$LootTableTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, lootTable: $ResourceKey_<$LootTable>): void;
        constructor();
    }
    export class $LevitationTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static levitated(distance: $DistancePredicate_): $Criterion<$LevitationTrigger$TriggerInstance>;
        matches(player: $ServerPlayer, startPos: $Vec3_, duration: number): boolean;
        duration(): $MinMaxBounds$Ints;
        distance(): ($DistancePredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$LevitationTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, distance: ($DistancePredicate_) | undefined, duration: $MinMaxBounds$Ints_);
    }
    /**
     * Values that may be interpreted as {@link $LevitationTrigger$TriggerInstance}.
     */
    export type $LevitationTrigger$TriggerInstance_ = { player?: ($ContextAwarePredicate) | undefined, duration?: $MinMaxBounds$Ints_, distance?: ($DistancePredicate_) | undefined,  } | [player?: ($ContextAwarePredicate) | undefined, duration?: $MinMaxBounds$Ints_, distance?: ($DistancePredicate_) | undefined, ];
    export class $EntitySubPredicates {
        static catVariant(catVariant: $Holder_<$CatVariant>): $EntitySubPredicate;
        static frogVariant(catVariant: $Holder_<$FrogVariant>): $EntitySubPredicate;
        static wolfVariant(wolfVariant: $HolderSet_<$WolfVariant>): $EntitySubPredicate;
        static bootstrap(registry: $Registry<$MapCodec_<$EntitySubPredicate>>): $MapCodec<$EntitySubPredicate>;
        static MOOSHROOM: $EntitySubPredicates$EntityVariantPredicateType<$MushroomCow$MushroomType>;
        static FISHING_HOOK: $MapCodec<$FishingHookPredicate>;
        static FROG: $EntitySubPredicates$EntityHolderVariantPredicateType<$FrogVariant>;
        static HORSE: $EntitySubPredicates$EntityVariantPredicateType<$Variant>;
        static LLAMA: $EntitySubPredicates$EntityVariantPredicateType<$Llama$Variant>;
        static LIGHTNING: $MapCodec<$LightningBoltPredicate>;
        static PARROT: $EntitySubPredicates$EntityVariantPredicateType<$Parrot$Variant>;
        static TROPICAL_FISH: $EntitySubPredicates$EntityVariantPredicateType<$TropicalFish$Pattern>;
        static FOX: $EntitySubPredicates$EntityVariantPredicateType<$Fox$Type>;
        static AXOLOTL: $EntitySubPredicates$EntityVariantPredicateType<$Axolotl$Variant>;
        static VILLAGER: $EntitySubPredicates$EntityVariantPredicateType<$VillagerType>;
        static PLAYER: $MapCodec<$PlayerPredicate>;
        static PAINTING: $EntitySubPredicates$EntityHolderVariantPredicateType<$PaintingVariant>;
        static RAIDER: $MapCodec<$RaiderPredicate>;
        static CAT: $EntitySubPredicates$EntityHolderVariantPredicateType<$CatVariant>;
        static RABBIT: $EntitySubPredicates$EntityVariantPredicateType<$Rabbit$Variant>;
        static WOLF: $EntitySubPredicates$EntityHolderVariantPredicateType<$WolfVariant>;
        static SLIME: $MapCodec<$SlimePredicate>;
        static BOAT: $EntitySubPredicates$EntityVariantPredicateType<$Boat$Type>;
        constructor();
    }
    export class $RecipeCraftedTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static crafterCraftedItem(recipeId: $ResourceLocation_): $Criterion<$RecipeCraftedTrigger$TriggerInstance>;
        recipeId(): $ResourceLocation;
        ingredients(): $List<$ItemPredicate>;
        static craftedItem(recipeId: $ResourceLocation_, ingredients: $List_<$ItemPredicate$Builder>): $Criterion<$RecipeCraftedTrigger$TriggerInstance>;
        static craftedItem(recipeId: $ResourceLocation_): $Criterion<$RecipeCraftedTrigger$TriggerInstance>;
        player(): ($ContextAwarePredicate) | undefined;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$RecipeCraftedTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, recipeId: $ResourceLocation_, ingredients: $List_<$ItemPredicate_>);
    }
    /**
     * Values that may be interpreted as {@link $RecipeCraftedTrigger$TriggerInstance}.
     */
    export type $RecipeCraftedTrigger$TriggerInstance_ = { player?: ($ContextAwarePredicate) | undefined, ingredients?: $List_<$ItemPredicate_>, recipeId?: $ResourceLocation_,  } | [player?: ($ContextAwarePredicate) | undefined, ingredients?: $List_<$ItemPredicate_>, recipeId?: $ResourceLocation_, ];
    export class $SimpleCriterionTrigger<T extends $SimpleCriterionTrigger$SimpleInstance> implements $CriterionTrigger<T> {
        addPlayerListener(playerAdvancements: $PlayerAdvancements, listener: $CriterionTrigger$Listener_<T>): void;
        removePlayerListener(playerAdvancements: $PlayerAdvancements, listener: $CriterionTrigger$Listener_<T>): void;
        removePlayerListeners(playerAdvancements: $PlayerAdvancements): void;
        createCriterion(triggerInstance: T): $Criterion<T>;
        constructor();
    }
    export class $EffectsChangedTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static gotEffectsFrom(source: $EntityPredicate$Builder): $Criterion<$EffectsChangedTrigger$TriggerInstance>;
        static hasEffects(effects: $MobEffectsPredicate$Builder): $Criterion<$EffectsChangedTrigger$TriggerInstance>;
        matches(player: $ServerPlayer, lootContext: $LootContext | null): boolean;
        validate(validator: $CriterionValidator): void;
        source(): ($ContextAwarePredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        effects(): ($MobEffectsPredicate) | undefined;
        static CODEC: $Codec<$EffectsChangedTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, effects: ($MobEffectsPredicate_) | undefined, source: ($ContextAwarePredicate) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $EffectsChangedTrigger$TriggerInstance}.
     */
    export type $EffectsChangedTrigger$TriggerInstance_ = { player?: ($ContextAwarePredicate) | undefined, effects?: ($MobEffectsPredicate_) | undefined, source?: ($ContextAwarePredicate) | undefined,  } | [player?: ($ContextAwarePredicate) | undefined, effects?: ($MobEffectsPredicate_) | undefined, source?: ($ContextAwarePredicate) | undefined, ];
    export class $RecipeUnlockedTrigger extends $SimpleCriterionTrigger<$RecipeUnlockedTrigger$TriggerInstance> {
        static unlocked(recipeId: $ResourceLocation_): $Criterion<$RecipeUnlockedTrigger$TriggerInstance>;
        trigger(player: $ServerPlayer, recipe: $RecipeHolder_<never>): void;
        constructor();
    }
    export class $ImpossibleTrigger$TriggerInstance extends $Record implements $CriterionTriggerInstance {
        validate(arg0: $CriterionValidator): void;
        static CODEC: $Codec<$ImpossibleTrigger$TriggerInstance>;
        constructor();
    }
    /**
     * Values that may be interpreted as {@link $ImpossibleTrigger$TriggerInstance}.
     */
    export type $ImpossibleTrigger$TriggerInstance_ = {  } | [];
    export class $TargetBlockTrigger extends $SimpleCriterionTrigger<$TargetBlockTrigger$TriggerInstance> {
        trigger(player: $ServerPlayer, projectile: $Entity, vector: $Vec3_, signalStrength: number): void;
        constructor();
    }
    export class $MinMaxBounds$Doubles extends $Record implements $MinMaxBounds<number> {
        static exactly(min: number): $MinMaxBounds$Doubles;
        minSq(): (number) | undefined;
        maxSq(): (number) | undefined;
        matchesSqr(value: number): boolean;
        static atLeast(min: number): $MinMaxBounds$Doubles;
        min(): (number) | undefined;
        max(): (number) | undefined;
        matches(value: number): boolean;
        static between(min: number, arg1: number): $MinMaxBounds$Doubles;
        static atMost(min: number): $MinMaxBounds$Doubles;
        static fromReader(reader: $StringReader, formatter: $Function_<number, number>): $MinMaxBounds$Doubles;
        static fromReader(reader: $StringReader): $MinMaxBounds$Doubles;
        isAny(): boolean;
        unwrapPoint(): (number) | undefined;
        static CODEC: $Codec<$MinMaxBounds$Doubles>;
        static ANY: $MinMaxBounds$Doubles;
        constructor(arg0: (number) | undefined, arg1: (number) | undefined, arg2: (number) | undefined, arg3: (number) | undefined);
        get any(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MinMaxBounds$Doubles}.
     */
    export type $MinMaxBounds$Doubles_ = { min?: (number) | undefined, minSq?: (number) | undefined, max?: (number) | undefined, maxSq?: (number) | undefined,  } | [min?: (number) | undefined, minSq?: (number) | undefined, max?: (number) | undefined, maxSq?: (number) | undefined, ];
    export class $EntityEquipmentPredicate extends $Record {
        static captainPredicate(patternRegistry: $HolderGetter<$BannerPattern_>): $EntityEquipmentPredicate;
        mainhand(): ($ItemPredicate) | undefined;
        feet(): ($ItemPredicate) | undefined;
        legs(): ($ItemPredicate) | undefined;
        chest(): ($ItemPredicate) | undefined;
        matches(entity: $Entity | null): boolean;
        head(): ($ItemPredicate) | undefined;
        body(): ($ItemPredicate) | undefined;
        offhand(): ($ItemPredicate) | undefined;
        static CODEC: $Codec<$EntityEquipmentPredicate>;
        constructor(arg0: ($ItemPredicate_) | undefined, arg1: ($ItemPredicate_) | undefined, arg2: ($ItemPredicate_) | undefined, arg3: ($ItemPredicate_) | undefined, arg4: ($ItemPredicate_) | undefined, arg5: ($ItemPredicate_) | undefined, arg6: ($ItemPredicate_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $EntityEquipmentPredicate}.
     */
    export type $EntityEquipmentPredicate_ = { offhand?: ($ItemPredicate_) | undefined, chest?: ($ItemPredicate_) | undefined, body?: ($ItemPredicate_) | undefined, legs?: ($ItemPredicate_) | undefined, feet?: ($ItemPredicate_) | undefined, mainhand?: ($ItemPredicate_) | undefined, head?: ($ItemPredicate_) | undefined,  } | [offhand?: ($ItemPredicate_) | undefined, chest?: ($ItemPredicate_) | undefined, body?: ($ItemPredicate_) | undefined, legs?: ($ItemPredicate_) | undefined, feet?: ($ItemPredicate_) | undefined, mainhand?: ($ItemPredicate_) | undefined, head?: ($ItemPredicate_) | undefined, ];
    export class $TradeTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static tradedWithVillager(villager: $EntityPredicate$Builder): $Criterion<$TradeTrigger$TriggerInstance>;
        static tradedWithVillager(): $Criterion<$TradeTrigger$TriggerInstance>;
        villager(): ($ContextAwarePredicate) | undefined;
        matches(context: $LootContext, stack: $ItemStack_): boolean;
        validate(validator: $CriterionValidator): void;
        item(): ($ItemPredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        static CODEC: $Codec<$TradeTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, villager: ($ContextAwarePredicate) | undefined, item: ($ItemPredicate_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $TradeTrigger$TriggerInstance}.
     */
    export type $TradeTrigger$TriggerInstance_ = { player?: ($ContextAwarePredicate) | undefined, item?: ($ItemPredicate_) | undefined, villager?: ($ContextAwarePredicate) | undefined,  } | [player?: ($ContextAwarePredicate) | undefined, item?: ($ItemPredicate_) | undefined, villager?: ($ContextAwarePredicate) | undefined, ];
    export class $EntityHurtPlayerTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static entityHurtPlayer(damage: $DamagePredicate_): $Criterion<$EntityHurtPlayerTrigger$TriggerInstance>;
        static entityHurtPlayer(): $Criterion<$EntityHurtPlayerTrigger$TriggerInstance>;
        static entityHurtPlayer(damage: $DamagePredicate$Builder): $Criterion<$EntityHurtPlayerTrigger$TriggerInstance>;
        matches(player: $ServerPlayer, source: $DamageSource_, dealtDamage: number, takenDamage: number, blocked: boolean): boolean;
        player(): ($ContextAwarePredicate) | undefined;
        damage(): ($DamagePredicate) | undefined;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$EntityHurtPlayerTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, damage: ($DamagePredicate_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $EntityHurtPlayerTrigger$TriggerInstance}.
     */
    export type $EntityHurtPlayerTrigger$TriggerInstance_ = { damage?: ($DamagePredicate_) | undefined, player?: ($ContextAwarePredicate) | undefined,  } | [damage?: ($DamagePredicate_) | undefined, player?: ($ContextAwarePredicate) | undefined, ];
    export class $ItemWrittenBookPredicate extends $Record implements $SingleComponentItemPredicate<$WrittenBookContent> {
        componentType(): $DataComponentType<$WrittenBookContent>;
        matches(stack: $ItemStack_, value: $WrittenBookContent_): boolean;
        resolved(): (boolean) | undefined;
        title(): (string) | undefined;
        pages(): ($CollectionPredicate<$Filterable<$Component>, $ItemWrittenBookPredicate$PagePredicate>) | undefined;
        author(): (string) | undefined;
        generation(): $MinMaxBounds$Ints;
        matches(stack: $ItemStack_): boolean;
        static CODEC: $Codec<$ItemWrittenBookPredicate>;
        constructor(arg0: ($CollectionPredicate_<$Filterable_<$Component_>, $ItemWrittenBookPredicate$PagePredicate_>) | undefined, arg1: (string) | undefined, arg2: (string) | undefined, arg3: $MinMaxBounds$Ints_, arg4: (boolean) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $ItemWrittenBookPredicate}.
     */
    export type $ItemWrittenBookPredicate_ = { generation?: $MinMaxBounds$Ints_, pages?: ($CollectionPredicate_<$Filterable_<$Component_>, $ItemWrittenBookPredicate$PagePredicate_>) | undefined, resolved?: (boolean) | undefined, title?: (string) | undefined, author?: (string) | undefined,  } | [generation?: $MinMaxBounds$Ints_, pages?: ($CollectionPredicate_<$Filterable_<$Component_>, $ItemWrittenBookPredicate$PagePredicate_>) | undefined, resolved?: (boolean) | undefined, title?: (string) | undefined, author?: (string) | undefined, ];
    export class $ItemPredicate extends $Record implements $Predicate<$ItemStack> {
        subPredicates(): $Map<$ItemSubPredicate$Type<never>, $ItemSubPredicate>;
        items(): ($HolderSet<$Item>) | undefined;
        test(arg0: $ItemStack_): boolean;
        count(): $MinMaxBounds$Ints;
        components(): $DataComponentPredicate;
        or(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        negate(): $Predicate<$ItemStack>;
        and(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        static CODEC: $Codec<$ItemPredicate>;
        constructor(arg0: ($HolderSet_<$Item>) | undefined, arg1: $MinMaxBounds$Ints_, arg2: $DataComponentPredicate, arg3: $Map_<$ItemSubPredicate$Type_<never>, $ItemSubPredicate_>);
    }
    /**
     * Values that may be interpreted as {@link $ItemPredicate}.
     */
    export type $ItemPredicate_ = { items?: ($HolderSet_<$Item>) | undefined, count?: $MinMaxBounds$Ints_, components?: $DataComponentPredicate, subPredicates?: $Map_<$ItemSubPredicate$Type_<never>, $ItemSubPredicate_>,  } | [items?: ($HolderSet_<$Item>) | undefined, count?: $MinMaxBounds$Ints_, components?: $DataComponentPredicate, subPredicates?: $Map_<$ItemSubPredicate$Type_<never>, $ItemSubPredicate_>, ];
    export class $EntityPredicate$LocationWrapper extends $Record {
        located(): ($LocationPredicate) | undefined;
        steppingOn(): ($LocationPredicate) | undefined;
        affectsMovement(): ($LocationPredicate) | undefined;
        static CODEC: $MapCodec<$EntityPredicate$LocationWrapper>;
        constructor(arg0: ($LocationPredicate_) | undefined, arg1: ($LocationPredicate_) | undefined, arg2: ($LocationPredicate_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $EntityPredicate$LocationWrapper}.
     */
    export type $EntityPredicate$LocationWrapper_ = { affectsMovement?: ($LocationPredicate_) | undefined, located?: ($LocationPredicate_) | undefined, steppingOn?: ($LocationPredicate_) | undefined,  } | [affectsMovement?: ($LocationPredicate_) | undefined, located?: ($LocationPredicate_) | undefined, steppingOn?: ($LocationPredicate_) | undefined, ];
    export class $EntitySubPredicates$EntityHolderVariantPredicateType<V> {
        createPredicate(variants: $HolderSet_<V>): $EntitySubPredicate;
        static create<V>(registryKey: $ResourceKey_<$Registry<V>>, getter: $Function_<$Entity, ($Holder<V>) | undefined>): $EntitySubPredicates$EntityHolderVariantPredicateType<V>;
        constructor(registryKey: $ResourceKey_<$Registry<V>>, getter: $Function_<$Entity, ($Holder<V>) | undefined>);
    }
    export class $EntityPredicate extends $Record {
        distanceToPlayer(): ($DistancePredicate) | undefined;
        subPredicate(): ($EntitySubPredicate) | undefined;
        targetedEntity(): ($EntityPredicate) | undefined;
        periodicTick(): (number) | undefined;
        flags(): ($EntityFlagsPredicate) | undefined;
        static wrap(predicate: $EntityPredicate_): $ContextAwarePredicate;
        static wrap(...builders: $EntityPredicate$Builder[]): $List<$ContextAwarePredicate>;
        static wrap(builder: $EntityPredicate$Builder): $ContextAwarePredicate;
        static wrap(predicate: ($EntityPredicate_) | undefined): ($ContextAwarePredicate) | undefined;
        matches(entity: $ServerLevel, arg1: $Vec3_ | null, arg2: $Entity | null): boolean;
        matches(player: $ServerPlayer, entity: $Entity | null): boolean;
        location(): $EntityPredicate$LocationWrapper;
        slots(): ($SlotsPredicate) | undefined;
        static createContext(player: $ServerPlayer, entity: $Entity): $LootContext;
        nbt(): ($NbtPredicate) | undefined;
        entityType(): ($EntityTypePredicate) | undefined;
        team(): (string) | undefined;
        effects(): ($MobEffectsPredicate) | undefined;
        equipment(): ($EntityEquipmentPredicate) | undefined;
        vehicle(): ($EntityPredicate) | undefined;
        passenger(): ($EntityPredicate) | undefined;
        movement(): ($MovementPredicate) | undefined;
        static ADVANCEMENT_CODEC: $Codec<$ContextAwarePredicate>;
        static CODEC: $Codec<$EntityPredicate>;
        constructor(arg0: ($EntityTypePredicate_) | undefined, arg1: ($DistancePredicate_) | undefined, arg2: ($MovementPredicate_) | undefined, arg3: $EntityPredicate$LocationWrapper_, arg4: ($MobEffectsPredicate_) | undefined, arg5: ($NbtPredicate_) | undefined, arg6: ($EntityFlagsPredicate_) | undefined, arg7: ($EntityEquipmentPredicate_) | undefined, arg8: ($EntitySubPredicate) | undefined, arg9: (number) | undefined, arg10: ($EntityPredicate_) | undefined, arg11: ($EntityPredicate_) | undefined, arg12: ($EntityPredicate_) | undefined, arg13: (string) | undefined, arg14: ($SlotsPredicate_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $EntityPredicate}.
     */
    export type $EntityPredicate_ = { location?: $EntityPredicate$LocationWrapper_, vehicle?: ($EntityPredicate_) | undefined, movement?: ($MovementPredicate_) | undefined, team?: (string) | undefined, entityType?: ($EntityTypePredicate_) | undefined, distanceToPlayer?: ($DistancePredicate_) | undefined, passenger?: ($EntityPredicate_) | undefined, slots?: ($SlotsPredicate_) | undefined, effects?: ($MobEffectsPredicate_) | undefined, equipment?: ($EntityEquipmentPredicate_) | undefined, nbt?: ($NbtPredicate_) | undefined, periodicTick?: (number) | undefined, subPredicate?: ($EntitySubPredicate) | undefined, targetedEntity?: ($EntityPredicate_) | undefined, flags?: ($EntityFlagsPredicate_) | undefined,  } | [location?: $EntityPredicate$LocationWrapper_, vehicle?: ($EntityPredicate_) | undefined, movement?: ($MovementPredicate_) | undefined, team?: (string) | undefined, entityType?: ($EntityTypePredicate_) | undefined, distanceToPlayer?: ($DistancePredicate_) | undefined, passenger?: ($EntityPredicate_) | undefined, slots?: ($SlotsPredicate_) | undefined, effects?: ($MobEffectsPredicate_) | undefined, equipment?: ($EntityEquipmentPredicate_) | undefined, nbt?: ($NbtPredicate_) | undefined, periodicTick?: (number) | undefined, subPredicate?: ($EntitySubPredicate) | undefined, targetedEntity?: ($EntityPredicate_) | undefined, flags?: ($EntityFlagsPredicate_) | undefined, ];
    export class $MobEffectsPredicate extends $Record {
        effectMap(): $Map<$Holder<$MobEffect>, $MobEffectsPredicate$MobEffectInstancePredicate>;
        matches(effects: $Map_<$Holder_<$MobEffect>, $MobEffectInstance>): boolean;
        matches(entity: $Entity): boolean;
        matches(entity: $LivingEntity): boolean;
        static CODEC: $Codec<$MobEffectsPredicate>;
        constructor(effectMap: $Map_<$Holder_<$MobEffect>, $MobEffectsPredicate$MobEffectInstancePredicate_>);
    }
    /**
     * Values that may be interpreted as {@link $MobEffectsPredicate}.
     */
    export type $MobEffectsPredicate_ = { effectMap?: $Map_<$Holder_<$MobEffect>, $MobEffectsPredicate$MobEffectInstancePredicate_>,  } | [effectMap?: $Map_<$Holder_<$MobEffect>, $MobEffectsPredicate$MobEffectInstancePredicate_>, ];
    export class $CuredZombieVillagerTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static curedZombieVillager(): $Criterion<$CuredZombieVillagerTrigger$TriggerInstance>;
        villager(): ($ContextAwarePredicate) | undefined;
        matches(zombie: $LootContext, villager: $LootContext): boolean;
        validate(validator: $CriterionValidator): void;
        zombie(): ($ContextAwarePredicate) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        static CODEC: $Codec<$CuredZombieVillagerTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, zombie: ($ContextAwarePredicate) | undefined, villager: ($ContextAwarePredicate) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $CuredZombieVillagerTrigger$TriggerInstance}.
     */
    export type $CuredZombieVillagerTrigger$TriggerInstance_ = { player?: ($ContextAwarePredicate) | undefined, zombie?: ($ContextAwarePredicate) | undefined, villager?: ($ContextAwarePredicate) | undefined,  } | [player?: ($ContextAwarePredicate) | undefined, zombie?: ($ContextAwarePredicate) | undefined, villager?: ($ContextAwarePredicate) | undefined, ];
    export class $CollectionCountsPredicate$Multiple<T, P extends $Predicate<T>> extends $Record implements $CollectionCountsPredicate<T, P> {
        test(collection: $Iterable_<T>): boolean;
        entries(): $List<$CollectionCountsPredicate$Entry<T, P>>;
        unpack(): $List<$CollectionCountsPredicate$Entry<T, P>>;
        or(arg0: $Predicate_<T>): $Predicate<T>;
        negate(): $Predicate<T>;
        and(arg0: $Predicate_<T>): $Predicate<T>;
        constructor(arg0: $List_<$CollectionCountsPredicate$Entry_<T, P>>);
    }
    /**
     * Values that may be interpreted as {@link $CollectionCountsPredicate$Multiple}.
     */
    export type $CollectionCountsPredicate$Multiple_<T, P> = { entries?: $List_<$CollectionCountsPredicate$Entry_<any, $Predicate_<T>>>,  } | [entries?: $List_<$CollectionCountsPredicate$Entry_<any, $Predicate_<T>>>, ];
    export class $DamagePredicate$Builder {
        takenDamage(dealtDamage: $MinMaxBounds$Doubles_): $DamagePredicate$Builder;
        sourceEntity(sourceEntity: $EntityPredicate_): $DamagePredicate$Builder;
        blocked(blocked: boolean): $DamagePredicate$Builder;
        dealtDamage(dealtDamage: $MinMaxBounds$Doubles_): $DamagePredicate$Builder;
        static damageInstance(): $DamagePredicate$Builder;
        type(typeBuilder: $DamageSourcePredicate$Builder): $DamagePredicate$Builder;
        type(type: $DamageSourcePredicate_): $DamagePredicate$Builder;
        build(): $DamagePredicate;
        constructor();
    }
    export class $CollectionContentsPredicate$Single<T, P extends $Predicate<T>> extends $Record implements $CollectionContentsPredicate<T, P> {
        test(contents: $Iterable_<T>): boolean;
        test(): P;
        unpack(): $List<P>;
        or(arg0: $Predicate_<T>): $Predicate<T>;
        negate(): $Predicate<T>;
        and(arg0: $Predicate_<T>): $Predicate<T>;
        constructor(arg0: P);
    }
    /**
     * Values that may be interpreted as {@link $CollectionContentsPredicate$Single}.
     */
    export type $CollectionContentsPredicate$Single_<T, P> = { test?: $Predicate_<T>,  } | [test?: $Predicate_<T>, ];
    export class $ChangeDimensionTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static changedDimensionTo(from: $ResourceKey_<$Level>): $Criterion<$ChangeDimensionTrigger$TriggerInstance>;
        static changedDimensionFrom(from: $ResourceKey_<$Level>): $Criterion<$ChangeDimensionTrigger$TriggerInstance>;
        static changedDimension(): $Criterion<$ChangeDimensionTrigger$TriggerInstance>;
        static changedDimension(from: $ResourceKey_<$Level>, to: $ResourceKey_<$Level>): $Criterion<$ChangeDimensionTrigger$TriggerInstance>;
        matches(fromLevel: $ResourceKey_<$Level>, toLevel: $ResourceKey_<$Level>): boolean;
        from(): ($ResourceKey<$Level>) | undefined;
        to(): ($ResourceKey<$Level>) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$ChangeDimensionTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($ResourceKey_<$Level>) | undefined, arg2: ($ResourceKey_<$Level>) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $ChangeDimensionTrigger$TriggerInstance}.
     */
    export type $ChangeDimensionTrigger$TriggerInstance_ = { player?: ($ContextAwarePredicate) | undefined, to?: ($ResourceKey_<$Level>) | undefined, from?: ($ResourceKey_<$Level>) | undefined,  } | [player?: ($ContextAwarePredicate) | undefined, to?: ($ResourceKey_<$Level>) | undefined, from?: ($ResourceKey_<$Level>) | undefined, ];
    export class $SimpleCriterionTrigger$SimpleInstance {
    }
    export interface $SimpleCriterionTrigger$SimpleInstance extends $CriterionTriggerInstance {
        validate(arg0: $CriterionValidator): void;
        player(): ($ContextAwarePredicate) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $SimpleCriterionTrigger$SimpleInstance}.
     */
    export type $SimpleCriterionTrigger$SimpleInstance_ = (() => ($ContextAwarePredicate) | undefined);
    export class $ChanneledLightningTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        static channeledLightning(...victims: $EntityPredicate$Builder[]): $Criterion<$ChanneledLightningTrigger$TriggerInstance>;
        victims(): $List<$ContextAwarePredicate>;
        matches(victims: $Collection_<$LootContext>): boolean;
        validate(validator: $CriterionValidator): void;
        player(): ($ContextAwarePredicate) | undefined;
        static CODEC: $Codec<$ChanneledLightningTrigger$TriggerInstance>;
        constructor(player: ($ContextAwarePredicate) | undefined, victims: $List_<$ContextAwarePredicate>);
    }
    /**
     * Values that may be interpreted as {@link $ChanneledLightningTrigger$TriggerInstance}.
     */
    export type $ChanneledLightningTrigger$TriggerInstance_ = { victims?: $List_<$ContextAwarePredicate>, player?: ($ContextAwarePredicate) | undefined,  } | [victims?: $List_<$ContextAwarePredicate>, player?: ($ContextAwarePredicate) | undefined, ];
    export class $ItemWritableBookPredicate extends $Record implements $SingleComponentItemPredicate<$WritableBookContent> {
        componentType(): $DataComponentType<$WritableBookContent>;
        matches(stack: $ItemStack_, value: $WritableBookContent_): boolean;
        pages(): ($CollectionPredicate<$Filterable<string>, $ItemWritableBookPredicate$PagePredicate>) | undefined;
        matches(stack: $ItemStack_): boolean;
        static CODEC: $Codec<$ItemWritableBookPredicate>;
        constructor(arg0: ($CollectionPredicate_<$Filterable_<string>, $ItemWritableBookPredicate$PagePredicate_>) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $ItemWritableBookPredicate}.
     */
    export type $ItemWritableBookPredicate_ = { pages?: ($CollectionPredicate_<$Filterable_<string>, $ItemWritableBookPredicate$PagePredicate_>) | undefined,  } | [pages?: ($CollectionPredicate_<$Filterable_<string>, $ItemWritableBookPredicate$PagePredicate_>) | undefined, ];
}
