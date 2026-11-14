import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $SimpleJsonResourceReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $Set, $Collection } from "@package/java/util";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LootItemCondition$Builder, $LootItemConditionType, $AllOfCondition$Builder, $LootItemCondition, $LootItemCondition$Builder_, $AnyOfCondition$Builder } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $WithConditions } from "@package/net/neoforged/neoforge/common/conditions";
import { $Logger } from "@package/org/apache/logging/log4j";
import { $LootContextParam } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $LootTable, $ValidationContext, $LootContext } from "@package/net/minecraft/world/level/storage/loot";
import { $ItemAbility_ } from "@package/net/neoforged/neoforge/common";

declare module "@package/net/neoforged/neoforge/common/loot" {
    /**
     * This LootItemCondition "neoforge:can_item_perform_ability" can be used to check if an item can perform a given ItemAbility.
     */
    export class $CanItemPerformAbility implements $LootItemCondition {
        static canItemPerformAbility(action: $ItemAbility_): $LootItemCondition$Builder;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        test(lootContext: $LootContext): boolean;
        getType(): $LootItemConditionType;
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        static CODEC: $MapCodec<$CanItemPerformAbility>;
        static LOOT_CONDITION_TYPE: $LootItemConditionType;
        constructor(ability: $ItemAbility_);
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get type(): $LootItemConditionType;
    }
    /**
     * A base implementation of a Global Loot Modifier for modders to extend.
     * Takes care of ILootCondition matching and comes with the base codec to extend.
     */
    export class $LootModifier implements $IGlobalLootModifier {
        apply(generatedLoot: $ObjectArrayList<$ItemStack_>, context: $LootContext): $ObjectArrayList<$ItemStack>;
    }
    /**
     * Implementation that defines what a global loot modifier must implement in order to be functional.
     * `LootModifier` Supplies base functionality; most modders should only need to extend that.
     * 
     * Requires a `Codec` to be registered: `NeoForgeRegistries#GLOBAL_LOOT_MODIFIER_SERIALIZERS`, and returned in `#codec()`
     * Individual instances of modifiers must be registered via json, see neoforge:loot_modifiers/global_loot_modifiers
     */
    export class $IGlobalLootModifier {
        static CONDITIONAL_CODEC: $Codec<($WithConditions<$IGlobalLootModifier>) | undefined>;
        static LOOT_CONDITIONS_CODEC: $Codec<$LootItemCondition[]>;
        static DIRECT_CODEC: $Codec<$IGlobalLootModifier>;
    }
    export interface $IGlobalLootModifier {
        apply(generatedLoot: $ObjectArrayList<$ItemStack_>, context: $LootContext): $ObjectArrayList<$ItemStack>;
        /**
         * Returns the registered codec for this modifier
         */
        codec(): $MapCodec<$IGlobalLootModifier>;
    }
    export class $LootTableIdCondition implements $LootItemCondition {
        test(lootContext: $LootContext): boolean;
        static builder(arg0: $ResourceLocation_): $LootTableIdCondition$Builder;
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
        static UNKNOWN_LOOT_TABLE: $ResourceLocation;
        static CODEC: $MapCodec<$LootTableIdCondition>;
        static LOOT_TABLE_ID: $LootItemConditionType;
        get type(): $LootItemConditionType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * Loot modifier that rolls one loot table (the "subtable" and adds the results to the loot being modified (the "target table").
     * Loot modifiers are not rolled for the subtable, as that could result in the subtables'
     * items being modified twice (by downstream loot modifiers modifying the target table).
     * 
     * Json format:
     * 
     * {
     * "type": "neoforge:add_table",
     * "conditions": [], // conditions block to predicate target tables by
     * "table": "namespace:loot_table_id" // subtable to roll loot for to add to the target table(s)
     * }
     */
    export class $AddTableLootModifier extends $LootModifier {
        table(): $ResourceKey<$LootTable>;
        static CODEC: $MapCodec<$AddTableLootModifier>;
        constructor(conditionsIn: $LootItemCondition[], table: $ResourceKey_<$LootTable>);
    }
    export class $LootTableIdCondition$Builder implements $LootItemCondition$Builder {
        build(): $LootItemCondition;
        invert(): $LootItemCondition$Builder;
        or(condition: $LootItemCondition$Builder_): $AnyOfCondition$Builder;
        and(condition: $LootItemCondition$Builder_): $AllOfCondition$Builder;
        constructor(targetLootTableId: $ResourceLocation_);
    }
    export class $LootModifierManager extends $SimpleJsonResourceReloadListener {
        /**
         * An immutable collection of the registered loot modifiers in layered order.
         */
        getAllLootMods(): $Collection<$IGlobalLootModifier>;
        static LOGGER: $Logger;
        constructor();
        get allLootMods(): $Collection<$IGlobalLootModifier>;
    }
}
