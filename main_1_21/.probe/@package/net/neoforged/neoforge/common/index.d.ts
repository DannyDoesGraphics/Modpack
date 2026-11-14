import { $PermissionGatherEvent$Nodes } from "@package/net/neoforged/neoforge/server/permission/events";
import { $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $Decoder$Simple, $DataResult, $MapEncoder, $DynamicOps, $Codec, $MapLike, $Decoder$Boxed, $Lifecycle, $Encoder, $Codec_, $Dynamic, $MapCodec, $Decoder, $Codec$ResultFunction, $RecordBuilder, $Decoder$Terminal } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Pair as $Pair$1 } from "@package/com/mojang/datafixers/util";
import { $EntityType_, $Entity, $EquipmentSlot_, $EntityType, $LivingEntity, $Mob, $SlotAccess } from "@package/net/minecraft/world/entity";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $ModContainer } from "@package/net/neoforged/fml";
import { $RandomSource, $CrudeIncrementalIntIdentityHashBiMap } from "@package/net/minecraft/util";
import { $InteractionResult, $InteractionHand_, $Difficulty_, $Container } from "@package/net/minecraft/world";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $FMLLoadCompleteEvent, $FMLCommonSetupEvent } from "@package/net/neoforged/fml/event/lifecycle";
import { DataComponentTypes } from "@special/types";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $AnvilMenu, $RecipeBookType, $ContainerLevelAccess_, $ClickAction_, $RecipeBookType_, $Slot } from "@package/net/minecraft/world/inventory";
import { $DataComponentType, $DataComponentHolder_, $DataComponentHolder, $DataComponentType_, $DataComponentMap_ } from "@package/net/minecraft/core/component";
import { $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $MerchantOffer } from "@package/net/minecraft/world/item/trading";
import { $DifferenceIngredient, $IngredientType, $BlockTagIngredient, $CompoundIngredient, $IntersectionIngredient, $DataComponentIngredient } from "@package/net/neoforged/neoforge/common/crafting";
import { $DataMapsUpdatedEvent } from "@package/net/neoforged/neoforge/registries/datamaps";
import { $PermissionNode } from "@package/net/neoforged/neoforge/server/permission/nodes";
import { $CommentedConfig, $EnumGetMethod_, $Config, $UnmodifiableCommentedConfig, $UnmodifiableConfig, $ConfigSpec$CorrectionListener_ } from "@package/com/electronwill/nightconfig/core";
import { $Item, $Tiers_, $CreativeModeTab_, $Tier, $SpawnEggItem, $CreativeModeTab, $Item$Properties, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ChatDecorator, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Biome$ClimateSettings, $BiomeSpecialEffects, $MobSpawnSettings, $Biome, $Biome$ClimateSettings_, $Biome_, $BiomeGenerationSettings } from "@package/net/minecraft/world/level/biome";
import { $PiglinCurrencyItemPredicate, $PiglinNeutralArmorEntityPredicate, $SnowBootsEntityPredicate, $ItemAbilityPredicate } from "@package/net/neoforged/neoforge/common/advancements/critereon";
import { $MobEffectInstance, $MobEffect, $MobEffect_ } from "@package/net/minecraft/world/effect";
import { $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $WorldData, $LevelStorageSource$LevelDirectory_ } from "@package/net/minecraft/world/level/storage";
import { $SharedSuggestionProvider } from "@package/net/minecraft/commands";
import { $DamageContainer } from "@package/net/neoforged/neoforge/common/damagesource";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $GatherDataEvent } from "@package/net/neoforged/neoforge/data/event";
import { $EntityJoinLevelEvent } from "@package/net/neoforged/neoforge/event/entity";
import { $EnderMan } from "@package/net/minecraft/world/entity/monster";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $AbstractMinecart } from "@package/net/minecraft/world/entity/vehicle";
import { $AABB_, $Vec3, $Vec3_, $BlockHitResult, $HitResult, $AABB } from "@package/net/minecraft/world/phys";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $StructuresBecomeConfiguredFix$Conversion } from "@package/net/minecraft/util/datafix/fixes";
import { $Dist_ } from "@package/net/neoforged/api/distmarker";
import { $GameEvent, $GameEvent$Context_ } from "@package/net/minecraft/world/level/gameevent";
import { $RangedAttribute, $AttributeSupplier, $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $UUID_, $Map, $List, $Map_, $Collection_, $List_, $Collection, $Set, $UUID } from "@package/java/util";
import { $PlayerInteractEvent$RightClickBlock, $CriticalHitEvent, $PlayerInteractEvent$LeftClickBlock, $SweepAttackEvent, $PlayerEvent$PlayerLoggedInEvent } from "@package/net/neoforged/neoforge/event/entity/player";
import { $EmptyFluidIngredient, $IntersectionFluidIngredient, $TagFluidIngredient, $DifferenceFluidIngredient, $FluidIngredientType, $DataComponentFluidIngredient, $CompoundFluidIngredient, $SingleFluidIngredient } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $Supplier_, $BiConsumer_, $LongSupplier, $UnaryOperator_, $Supplier, $DoubleSupplier, $Consumer_, $Predicate_, $Predicate, $IntSupplier, $Function_, $BooleanSupplier, $BiFunction_ } from "@package/java/util/function";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos, $HolderLookup$RegistryLookup, $BlockPos_, $HolderLookup$Provider, $Holder, $Direction_, $Registry, $Holder_ } from "@package/net/minecraft/core";
import { $Path_ } from "@package/java/nio/file";
import { $EnchantmentInstance, $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $SimpleTicket, $AABBTicket } from "@package/net/neoforged/neoforge/common/ticket";
import { $WeightedEntry, $Weight } from "@package/net/minecraft/util/random";
import { $ItemExistsCondition, $TagEmptyCondition, $TrueCondition, $FalseCondition, $OrCondition, $ModLoadedCondition, $AndCondition, $ICondition, $NotCondition } from "@package/net/neoforged/neoforge/common/conditions";
import { $Enum, $Comparable, $Thread, $Record, $Class, $Runnable_, $Object } from "@package/java/lang";
import { $LootContext, $LootPool } from "@package/net/minecraft/world/level/storage/loot";
import { $LevelEvent$Unload, $BlockEvent$BreakEvent, $ChunkEvent$Unload } from "@package/net/neoforged/neoforge/event/level";
import { $HolderSetType } from "@package/net/neoforged/neoforge/registries/holdersets";
import { $RegisterEvent, $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $OutputStream } from "@package/java/io";
import { $LevelAccessor, $ChunkPos, $Level_, $GameType, $LevelReader, $GameType_, $Level } from "@package/net/minecraft/world/level";
import { $TagKey_, $TagKey } from "@package/net/minecraft/tags";
import { $PoiManager } from "@package/net/minecraft/world/entity/ai/village/poi";
import { $IEventBus } from "@package/net/neoforged/bus/api";
import { $BlockSource_ } from "@package/net/minecraft/core/dispenser";
import { $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $ItemAttributeModifiers, $ItemAttributeModifiers_, $Tool } from "@package/net/minecraft/world/item/component";
import { $ModConfigEvent$Reloading, $ModConfigEvent$Loading } from "@package/net/neoforged/fml/event/config";
import { $OnDatapackSyncEvent, $AddReloadListenerEvent, $TagsUpdatedEvent, $RegisterCommandsEvent } from "@package/net/neoforged/neoforge/event";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $ServerboundPlayerActionPacket$Action_ } from "@package/net/minecraft/network/protocol/game";
import { $Villager, $VillagerTrades$ItemListing } from "@package/net/minecraft/world/entity/npc";
import { $EntitySubPredicate, $ItemSubPredicate$Type } from "@package/net/minecraft/advancements/critereon";
import { $ServerTickEvent$Post, $ServerTickEvent$Pre } from "@package/net/neoforged/neoforge/event/tick";
import { $EntityDataSerializer, $EntityDataSerializer_ } from "@package/net/minecraft/network/syncher";
import { $ResourceKey, $RegistryOps, $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $AddTableLootModifier, $IGlobalLootModifier } from "@package/net/neoforged/neoforge/common/loot";
import { $MutableDataComponentHolderFunctions } from "@package/dev/latvian/mods/kubejs/component";
import { $BaseMapCodec } from "@package/com/mojang/serialization/codecs";
import { $LivingKnockBackEvent, $LivingChangeTargetEvent$ILivingTargetType, $LivingSwapItemsEvent$Hands, $LivingChangeTargetEvent, $LivingShieldBlockEvent } from "@package/net/neoforged/neoforge/event/entity/living";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StructureModifiers$ClearSpawnsStructureModifier, $BiomeModifiers$AddCarversBiomeModifier, $BiomeModifiers$AddSpawnsBiomeModifier, $StructureModifiers$AddSpawnsStructureModifier, $BiomeModifiers$RemoveFeaturesBiomeModifier, $BiomeModifiers$RemoveCarversBiomeModifier, $BiomeModifiers$AddFeaturesBiomeModifier, $StructureModifier, $BiomeModifiers$RemoveSpawnsBiomeModifier, $NoneStructureModifier, $BiomeModifiers$RemoveSpawnCostsBiomeModifier, $NoneBiomeModifier, $StructureModifiers$RemoveSpawnsStructureModifier, $BiomeModifiers$AddSpawnCostsBiomeModifier, $BiomeModifier } from "@package/net/neoforged/neoforge/common/world";
import { $ModConfig, $IConfigSpec, $IConfigSpec$ILoadedConfig } from "@package/net/neoforged/fml/config";
import { $ServerStoppingEvent } from "@package/net/neoforged/neoforge/event/server";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $DamageType, $DamageSource_ } from "@package/net/minecraft/world/damagesource";
export * as crafting from "@package/net/neoforged/neoforge/common/crafting";
export * as world from "@package/net/neoforged/neoforge/common/world";
export * as extensions from "@package/net/neoforged/neoforge/common/extensions";
export * as data from "@package/net/neoforged/neoforge/common/data";
export * as conditions from "@package/net/neoforged/neoforge/common/conditions";
export * as util from "@package/net/neoforged/neoforge/common/util";
export * as enums from "@package/net/neoforged/neoforge/common/enums";
export * as brewing from "@package/net/neoforged/neoforge/common/brewing";
export * as loot from "@package/net/neoforged/neoforge/common/loot";
export * as damagesource from "@package/net/neoforged/neoforge/common/damagesource";
export * as advancements from "@package/net/neoforged/neoforge/common/advancements";
export * as command from "@package/net/neoforged/neoforge/common/command";
export * as ticket from "@package/net/neoforged/neoforge/common/ticket";
export * as property from "@package/net/neoforged/neoforge/common/property";

declare module "@package/net/neoforged/neoforge/common" {
    export class $TagConventionLogWarning$LogWarningMode extends $Enum<$TagConventionLogWarning$LogWarningMode> {
        static values(): $TagConventionLogWarning$LogWarningMode[];
        static valueOf(arg0: string): $TagConventionLogWarning$LogWarningMode;
        static DEV_SHORT: $TagConventionLogWarning$LogWarningMode;
        static PROD_SHORT: $TagConventionLogWarning$LogWarningMode;
        static DEV_VERBOSE: $TagConventionLogWarning$LogWarningMode;
        static SILENCED: $TagConventionLogWarning$LogWarningMode;
        static PROD_VERBOSE: $TagConventionLogWarning$LogWarningMode;
    }
    /**
     * Values that may be interpreted as {@link $TagConventionLogWarning$LogWarningMode}.
     */
    export type $TagConventionLogWarning$LogWarningMode_ = "silenced" | "dev_short" | "dev_verbose" | "prod_short" | "prod_verbose";
    export class $DeferredSpawnEggItem$CommonHandler {
    }
    /**
     * Declares an interface which is functionally equivalent to `Consumer`,
     * except supports the ability to throw IOExceptions that may occur.
     */
    export class $IOUtilities$WriteCallback {
    }
    export interface $IOUtilities$WriteCallback {
        write(stream: $OutputStream): void;
    }
    /**
     * Values that may be interpreted as {@link $IOUtilities$WriteCallback}.
     */
    export type $IOUtilities$WriteCallback_ = ((arg0: $OutputStream) => void);
    export class $ModConfigSpec$Builder {
        defineListAllowEmpty<T>(arg0: string, arg1: $Supplier_<$List<T>>, arg2: $Supplier_<T>, arg3: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        /**
         * @deprecated
         */
        defineListAllowEmpty<T>(arg0: string, arg1: $List_<T>, arg2: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        defineListAllowEmpty<T>(arg0: string, arg1: $List_<T>, arg2: $Supplier_<T>, arg3: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        defineListAllowEmpty<T>(arg0: $List_<string>, arg1: $Supplier_<$List<T>>, arg2: $Supplier_<T>, arg3: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        /**
         * @deprecated
         */
        defineListAllowEmpty<T>(arg0: $List_<string>, arg1: $List_<T>, arg2: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        defineListAllowEmpty<T>(arg0: $List_<string>, arg1: $List_<T>, arg2: $Supplier_<T>, arg3: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        /**
         * @deprecated
         */
        defineListAllowEmpty<T>(arg0: $List_<string>, arg1: $Supplier_<$List<T>>, arg2: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        /**
         * @deprecated
         */
        defineListAllowEmpty<T>(arg0: string, arg1: $Supplier_<$List<T>>, arg2: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        worldRestart(): $ModConfigSpec$Builder;
        gameRestart(): $ModConfigSpec$Builder;
        comment(arg0: string): $ModConfigSpec$Builder;
        comment(...arg0: string[]): $ModConfigSpec$Builder;
        build(): $ModConfigSpec;
        push(arg0: string): $ModConfigSpec$Builder;
        push(arg0: $List_<string>): $ModConfigSpec$Builder;
        pop(): $ModConfigSpec$Builder;
        pop(arg0: number): $ModConfigSpec$Builder;
        configure<T>(consumer: $Function_<$ModConfigSpec$Builder, T>): $Pair<T, $ModConfigSpec>;
        translation(arg0: string): $ModConfigSpec$Builder;
        define<T>(arg0: string, arg1: $Supplier_<T>, arg2: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<T>;
        define<T>(arg0: string, arg1: T, arg2: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<T>;
        define<T>(arg0: $List_<string>, arg1: T, arg2: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<T>;
        define<T>(arg0: $List_<string>, arg1: $Supplier_<T>, arg2: $Predicate_<$Object>, arg3: $Class<never>): $ModConfigSpec$ConfigValue<T>;
        define<T>(arg0: $List_<string>, arg1: $Supplier_<T>, arg2: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<T>;
        define(arg0: $List_<string>, arg1: $Supplier_<boolean>): $ModConfigSpec$BooleanValue;
        define<T>(arg0: $List_<string>, arg1: T): $ModConfigSpec$ConfigValue<T>;
        define(arg0: $List_<string>, arg1: boolean): $ModConfigSpec$BooleanValue;
        define(arg0: string, arg1: boolean): $ModConfigSpec$BooleanValue;
        define<T>(arg0: string, arg1: T): $ModConfigSpec$ConfigValue<T>;
        define<T>(arg0: $List_<string>, arg1: $ModConfigSpec$ValueSpec, arg2: $Supplier_<T>): $ModConfigSpec$ConfigValue<T>;
        define(arg0: string, arg1: $Supplier_<boolean>): $ModConfigSpec$BooleanValue;
        defineInList<T>(arg0: string, arg1: $Supplier_<T>, arg2: $Collection_<T>): $ModConfigSpec$ConfigValue<T>;
        defineInList<T>(arg0: string, arg1: T, arg2: $Collection_<T>): $ModConfigSpec$ConfigValue<T>;
        defineInList<T>(arg0: $List_<string>, arg1: T, arg2: $Collection_<T>): $ModConfigSpec$ConfigValue<T>;
        defineInList<T>(arg0: $List_<string>, arg1: $Supplier_<T>, arg2: $Collection_<T>): $ModConfigSpec$ConfigValue<T>;
        defineInRange(arg0: $List_<string>, arg1: $Supplier_<number>, arg2: number, arg3: number): $ModConfigSpec$IntValue;
        defineInRange(arg0: string, arg1: $Supplier_<number>, arg2: number, arg3: number): $ModConfigSpec$IntValue;
        defineInRange(arg0: $List_<string>, arg1: number, arg2: number, arg3: number): $ModConfigSpec$IntValue;
        defineInRange(arg0: string, arg1: number, arg2: number, arg3: number): $ModConfigSpec$IntValue;
        defineInRange(arg0: $List_<string>, arg1: $Supplier_<number>, arg2: number, arg3: number): $ModConfigSpec$DoubleValue;
        defineInRange(arg0: string, arg1: number, arg2: number, arg3: number): $ModConfigSpec$LongValue;
        defineInRange(arg0: $List_<string>, arg1: number, arg2: number, arg3: number): $ModConfigSpec$LongValue;
        defineInRange(arg0: string, arg1: $Supplier_<number>, arg2: number, arg3: number): $ModConfigSpec$LongValue;
        defineInRange(arg0: $List_<string>, arg1: $Supplier_<number>, arg2: number, arg3: number): $ModConfigSpec$LongValue;
        defineInRange<V extends $Comparable<V>>(arg0: $List_<string>, arg1: $Supplier_<V>, arg2: V, arg3: V, arg4: $Class<V>): $ModConfigSpec$ConfigValue<V>;
        defineInRange<V extends $Comparable<V>>(arg0: string, arg1: V, arg2: V, arg3: V, arg4: $Class<V>): $ModConfigSpec$ConfigValue<V>;
        defineInRange<V extends $Comparable<V>>(arg0: string, arg1: $Supplier_<V>, arg2: V, arg3: V, arg4: $Class<V>): $ModConfigSpec$ConfigValue<V>;
        defineInRange<V extends $Comparable<V>>(arg0: $List_<string>, arg1: V, arg2: V, arg3: V, arg4: $Class<V>): $ModConfigSpec$ConfigValue<V>;
        defineInRange(arg0: string, arg1: $Supplier_<number>, arg2: number, arg3: number): $ModConfigSpec$DoubleValue;
        defineInRange(arg0: string, arg1: number, arg2: number, arg3: number): $ModConfigSpec$DoubleValue;
        defineInRange(arg0: $List_<string>, arg1: number, arg2: number, arg3: number): $ModConfigSpec$DoubleValue;
        defineList<T>(arg0: $List_<string>, arg1: $List_<T>, arg2: $Supplier_<T>, arg3: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        /**
         * @deprecated
         */
        defineList<T>(arg0: $List_<string>, arg1: $Supplier_<$List<T>>, arg2: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        defineList<T>(arg0: $List_<string>, arg1: $Supplier_<$List<T>>, arg2: $Supplier_<T>, arg3: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        defineList<T>(arg0: string, arg1: $List_<T>, arg2: $Supplier_<T>, arg3: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        /**
         * @deprecated
         */
        defineList<T>(arg0: string, arg1: $List_<T>, arg2: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        defineList<T>(arg0: $List_<string>, arg1: $Supplier_<$List<T>>, arg2: $Supplier_<T>, arg3: $Predicate_<$Object>, arg4: $ModConfigSpec$Range<number>): $ModConfigSpec$ConfigValue<$List<T>>;
        defineList<T>(arg0: string, arg1: $Supplier_<$List<T>>, arg2: $Supplier_<T>, arg3: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        /**
         * @deprecated
         */
        defineList<T>(arg0: string, arg1: $Supplier_<$List<T>>, arg2: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        /**
         * @deprecated
         */
        defineList<T>(arg0: $List_<string>, arg1: $List_<T>, arg2: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        defineEnum<V extends $Enum<V>>(arg0: string, arg1: V, arg2: $EnumGetMethod_, ...arg3: V[]): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: $List_<string>, arg1: V, ...arg2: V[]): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: $List_<string>, arg1: V, arg2: $EnumGetMethod_, ...arg3: V[]): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: string, arg1: V, arg2: $Collection_<V>): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: string, arg1: V, arg2: $EnumGetMethod_, arg3: $Collection_<V>): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: string, arg1: V): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: string, arg1: V, arg2: $EnumGetMethod_): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: $List_<string>, arg1: V): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: $List_<string>, arg1: V, arg2: $EnumGetMethod_): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: string, arg1: V, ...arg2: V[]): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: $List_<string>, arg1: V, arg2: $EnumGetMethod_, arg3: $Predicate_<$Object>): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: string, arg1: $Supplier_<V>, arg2: $Predicate_<$Object>, arg3: $Class<V>): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: string, arg1: $Supplier_<V>, arg2: $EnumGetMethod_, arg3: $Predicate_<$Object>, arg4: $Class<V>): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: $List_<string>, arg1: $Supplier_<V>, arg2: $Predicate_<$Object>, arg3: $Class<V>): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: $List_<string>, arg1: $Supplier_<V>, arg2: $EnumGetMethod_, arg3: $Predicate_<$Object>, arg4: $Class<V>): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: $List_<string>, arg1: V, arg2: $Collection_<V>): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: $List_<string>, arg1: V, arg2: $EnumGetMethod_, arg3: $Collection_<V>): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: string, arg1: V, arg2: $Predicate_<$Object>): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: $List_<string>, arg1: V, arg2: $Predicate_<$Object>): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: string, arg1: V, arg2: $EnumGetMethod_, arg3: $Predicate_<$Object>): $ModConfigSpec$EnumValue<V>;
        constructor();
    }
    export class $Tags$Biomes {
        static IS_DEEP_OCEAN: $TagKey<$Biome>;
        static IS_TEMPERATE_NETHER: $TagKey<$Biome>;
        static IS_TEMPERATE_END: $TagKey<$Biome>;
        static IS_SHALLOW_OCEAN: $TagKey<$Biome>;
        static IS_MAGICAL: $TagKey<$Biome>;
        static IS_RIVER: $TagKey<$Biome>;
        static IS_DENSE_VEGETATION: $TagKey<$Biome>;
        static IS_AQUATIC_ICY: $TagKey<$Biome>;
        static IS_NETHER: $TagKey<$Biome>;
        static IS_MOUNTAIN_SLOPE: $TagKey<$Biome>;
        static IS_HILL: $TagKey<$Biome>;
        static IS_TEMPERATE: $TagKey<$Biome>;
        static IS_SPARSE_VEGETATION_END: $TagKey<$Biome>;
        static IS_HOT_END: $TagKey<$Biome>;
        static IS_HOT_OVERWORLD: $TagKey<$Biome>;
        static IS_MUSHROOM: $TagKey<$Biome>;
        static IS_PLATEAU: $TagKey<$Biome>;
        static IS_JUNGLE_TREE: $TagKey<$Biome>;
        static IS_CAVE: $TagKey<$Biome>;
        static IS_OUTER_END_ISLAND: $TagKey<$Biome>;
        static IS_VOID: $TagKey<$Biome>;
        static IS_HOT_NETHER: $TagKey<$Biome>;
        static IS_ICY: $TagKey<$Biome>;
        static IS_SANDY: $TagKey<$Biome>;
        static IS_DRY_END: $TagKey<$Biome>;
        static IS_MOUNTAIN_PEAK: $TagKey<$Biome>;
        static IS_MOUNTAIN: $TagKey<$Biome>;
        static HIDDEN_FROM_LOCATOR_SELECTION: $TagKey<$Biome>;
        static IS_DENSE_VEGETATION_NETHER: $TagKey<$Biome>;
        static IS_FLOWER_FOREST: $TagKey<$Biome>;
        static IS_TAIGA: $TagKey<$Biome>;
        static IS_LUSH: $TagKey<$Biome>;
        static IS_COLD_OVERWORLD: $TagKey<$Biome>;
        static IS_CONIFEROUS_TREE: $TagKey<$Biome>;
        static IS_AQUATIC: $TagKey<$Biome>;
        static IS_COLD_NETHER: $TagKey<$Biome>;
        static IS_WINDSWEPT: $TagKey<$Biome>;
        static IS_DRY: $TagKey<$Biome>;
        static IS_DRY_OVERWORLD: $TagKey<$Biome>;
        static IS_FOREST: $TagKey<$Biome>;
        static IS_DESERT: $TagKey<$Biome>;
        static IS_WET_NETHER: $TagKey<$Biome>;
        static IS_BADLANDS: $TagKey<$Biome>;
        static IS_RARE: $TagKey<$Biome>;
        static IS_SPOOKY: $TagKey<$Biome>;
        static IS_DRY_NETHER: $TagKey<$Biome>;
        static NO_DEFAULT_MONSTERS: $TagKey<$Biome>;
        static IS_SAVANNA: $TagKey<$Biome>;
        static IS_DENSE_VEGETATION_END: $TagKey<$Biome>;
        static IS_SNOWY: $TagKey<$Biome>;
        static IS_DENSE_VEGETATION_OVERWORLD: $TagKey<$Biome>;
        static IS_UNDERGROUND: $TagKey<$Biome>;
        static IS_SNOWY_PLAINS: $TagKey<$Biome>;
        static IS_COLD_END: $TagKey<$Biome>;
        static IS_WET_END: $TagKey<$Biome>;
        static IS_SAVANNA_TREE: $TagKey<$Biome>;
        static IS_HOT: $TagKey<$Biome>;
        static IS_BEACH: $TagKey<$Biome>;
        static IS_DECIDUOUS_TREE: $TagKey<$Biome>;
        static IS_PLAINS: $TagKey<$Biome>;
        static IS_SWAMP: $TagKey<$Biome>;
        /**
         * @deprecated
         */
        static IS_MODIFIED: $TagKey<$Biome>;
        static IS_BIRCH_FOREST: $TagKey<$Biome>;
        static IS_TEMPERATE_OVERWORLD: $TagKey<$Biome>;
        static IS_SPARSE_VEGETATION: $TagKey<$Biome>;
        static IS_END: $TagKey<$Biome>;
        static IS_SPARSE_VEGETATION_OVERWORLD: $TagKey<$Biome>;
        static IS_OLD_GROWTH: $TagKey<$Biome>;
        static IS_NETHER_FOREST: $TagKey<$Biome>;
        static IS_SPARSE_VEGETATION_NETHER: $TagKey<$Biome>;
        static IS_OVERWORLD: $TagKey<$Biome>;
        static IS_FLORAL: $TagKey<$Biome>;
        static IS_STONY_SHORES: $TagKey<$Biome>;
        static IS_OCEAN: $TagKey<$Biome>;
        static IS_WASTELAND: $TagKey<$Biome>;
        static IS_COLD: $TagKey<$Biome>;
        static IS_DEAD: $TagKey<$Biome>;
        static IS_WET_OVERWORLD: $TagKey<$Biome>;
        static IS_JUNGLE: $TagKey<$Biome>;
        static IS_WET: $TagKey<$Biome>;
        constructor();
    }
    /**
     * A Percentage Attribute is one which always displays modifiers as percentages, including for `Operation#ADD_VALUE`.
     * 
     * This is used for attributes that would not make sense being displayed as flat additions (ex: +0.05 Swim Speed).
     */
    export class $PercentageAttribute extends $RangedAttribute {
        static CODEC: $Codec<$Holder<$Attribute>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$Attribute>>;
        /**
         * Creates a new PercentageAttribute with the default scale factor of 100.
         */
        constructor(pDescriptionId: string, pDefaultValue: number, pMin: number, pMax: number);
        /**
         * Creates a new PercentageAttribute with the given description, value information, and scale factor.
         * 
         * If your attribute's "real" value correlates 1 == 100%, you would use a scale factor of 100 to convert to 1 to 100%.
         */
        constructor(pDescriptionId: string, pDefaultValue: number, pMin: number, pMax: number, scaleFactor: number);
    }
    /**
     * Helper class to define a custom tier
     */
    export class $SimpleTier implements $Tier {
        getUses(): number;
        getIncorrectBlocksForDrops(): $TagKey<$Block>;
        getRepairIngredient(): $Ingredient;
        getEnchantmentValue(): number;
        getAttackDamageBonus(): number;
        getSpeed(): number;
        createToolProperties(block: $TagKey_<$Block>): $Tool;
        constructor(incorrectBlocksForDrops: $TagKey_<$Block>, uses: number, speed: number, attackDamageBonus: number, enchantmentValue: number, repairIngredient: $Supplier_<$Ingredient>);
        get uses(): number;
        get incorrectBlocksForDrops(): $TagKey<$Block>;
        get repairIngredient(): $Ingredient;
        get enchantmentValue(): number;
        get attackDamageBonus(): number;
        get speed(): number;
    }
    /**
     * A utility holding common sound actions.
     */
    export class $SoundActions {
        static BUCKET_FILL: $SoundAction;
        static BUCKET_EMPTY: $SoundAction;
        static FLUID_VAPORIZE: $SoundAction;
        static CAULDRON_DRIP: $SoundAction;
    }
    /**
     * Contains helpers for performing file I/O in a resilient manner.
     */
    export class $IOUtilities {
        static atomicWrite(arg0: $Path_, arg1: $IOUtilities$WriteCallback_): void;
        /**
         * @deprecated
         * Tries to clean up any temporary files that may have been left over from interrupted
         * calls to `#atomicWrite(Path, WriteCallback)`.
         * 
         * Failures to find or remove the temporary files are logged instead of thrown.
         */
        static cleanupTempFiles(targetPath: $Path_, prefix: string): void;
        /**
         * Tries to clean up any temporary files that may have been left over from interrupted
         * calls to `#atomicWrite(Path, WriteCallback)`.
         * 
         * Failures to find or remove the temporary files are logged instead of thrown.
         */
        static tryCleanupTempFiles(targetPath: $Path_, prefix: string): void;
        static withIOWorker(task: $Runnable_): void;
        /**
         * Behaves much the same as `NbtIo#writeCompressed(CompoundTag, Path)`,
         * but uses `#atomicWrite(Path, WriteCallback)` behind the scenes to
         * ensure the data is stored resiliently.
         */
        static writeNbtCompressed(tag: $CompoundTag_, path: $Path_): void;
        static waitUntilIOWorkerComplete(): void;
        /**
         * Behaves much the same as `NbtIo#writeCompressed(CompoundTag, Path)`,
         * but uses `#atomicWrite(Path, WriteCallback)` behind the scenes to
         * ensure the data is stored resiliently.
         */
        static writeNbt(tag: $CompoundTag_, path: $Path_): void;
    }
    export class $Tags$DamageTypes {
        static IS_PHYSICAL: $TagKey<$DamageType>;
        static IS_ENVIRONMENT: $TagKey<$DamageType>;
        static NO_FLINCH: $TagKey<$DamageType>;
        static IS_TECHNICAL: $TagKey<$DamageType>;
        static IS_POISON: $TagKey<$DamageType>;
        static IS_MAGIC: $TagKey<$DamageType>;
        static IS_WITHER: $TagKey<$DamageType>;
        constructor();
    }
    export class $WorldWorkerManager$IWorker {
    }
    export interface $WorldWorkerManager$IWorker {
        doWork(): boolean;
        hasWork(): boolean;
    }
    export class $NeoForgeMod {
        /**
         * Run this method during mod constructor to enable milk and add it to the Minecraft milk bucket
         */
        static enableMilkFluid(): void;
        gatherData(event: $GatherDataEvent): void;
        static getProperFilenameValidation(): boolean;
        static isPRBuild(): boolean;
        /**
         * Run this method during mod constructor to enable milk and add it to the Minecraft milk bucket
         */
        static enableProperFilenameValidation(): void;
        /**
         * Run this method during mod constructor to enable milk and add it to the Minecraft milk bucket
         */
        static enableMergedAttributeTooltips(): void;
        static shouldMergeAttributeTooltips(): boolean;
        preInit(evt: $FMLCommonSetupEvent): void;
        loadComplete(event: $FMLLoadCompleteEvent): void;
        serverStopping(evt: $ServerStoppingEvent): void;
        registerFluids(event: $RegisterEvent): void;
        registerLootData(event: $RegisterEvent): void;
        registerPermissionNodes(event: $PermissionGatherEvent$Nodes): void;
        static REMOVE_SPAWNS_BIOME_MODIFIER_TYPE: $DeferredHolder<$MapCodec<$BiomeModifier>, $MapCodec<$BiomeModifiers$RemoveSpawnsBiomeModifier>>;
        static NAMETAG_DISTANCE: $Holder<$Attribute>;
        static VERSION_CHECK_CAT: string;
        static EMPTY_TYPE: $Holder<$FluidType>;
        static OR_CONDITION: $DeferredHolder<$MapCodec<$ICondition>, $MapCodec<$OrCondition>>;
        static PIGLIN_CURRENCY_PREDICATE: $DeferredHolder<$ItemSubPredicate$Type<never>, $ItemSubPredicate$Type<$PiglinCurrencyItemPredicate>>;
        static ANY_HOLDER_SET: $Holder<$HolderSetType>;
        static ADD_SPAWN_COSTS_BIOME_MODIFIER_TYPE: $DeferredHolder<$MapCodec<$BiomeModifier>, $MapCodec<$BiomeModifiers$AddSpawnCostsBiomeModifier>>;
        static WATER_TYPE: $Holder<$FluidType>;
        static SNOW_BOOTS_PREDICATE: $DeferredHolder<$MapCodec<$EntitySubPredicate>, $MapCodec<$SnowBootsEntityPredicate>>;
        static DATA_COMPONENT_INGREDIENT_TYPE: $DeferredHolder<$IngredientType<never>, $IngredientType<$DataComponentIngredient>>;
        static LAVA_TYPE: $Holder<$FluidType>;
        static DIFFERENCE_INGREDIENT_TYPE: $DeferredHolder<$IngredientType<never>, $IngredientType<$DifferenceIngredient>>;
        static ADD_TABLE_LOOT_MODIFIER_TYPE: $DeferredHolder<$MapCodec<$IGlobalLootModifier>, $MapCodec<$AddTableLootModifier>>;
        static NOT_CONDITION: $DeferredHolder<$MapCodec<$ICondition>, $MapCodec<$NotCondition>>;
        static BUCKET_FILL_MILK: $DeferredHolder<$SoundEvent, $SoundEvent>;
        static CLEAR_SPAWNS_STRUCTURE_MODIFIER_TYPE: $DeferredHolder<$MapCodec<$StructureModifier>, $MapCodec<$StructureModifiers$ClearSpawnsStructureModifier>>;
        static ADD_FEATURES_BIOME_MODIFIER_TYPE: $DeferredHolder<$MapCodec<$BiomeModifier>, $MapCodec<$BiomeModifiers$AddFeaturesBiomeModifier>>;
        static MOD_LOADED_CONDITION: $DeferredHolder<$MapCodec<$ICondition>, $MapCodec<$ModLoadedCondition>>;
        static POISON_DAMAGE: $ResourceKey<$DamageType>;
        static REMOVE_FEATURES_BIOME_MODIFIER_TYPE: $DeferredHolder<$MapCodec<$BiomeModifier>, $MapCodec<$BiomeModifiers$RemoveFeaturesBiomeModifier>>;
        static MILK: $DeferredHolder<$Fluid, $Fluid>;
        static SINGLE_FLUID_INGREDIENT_TYPE: $DeferredHolder<$FluidIngredientType<never>, $FluidIngredientType<$SingleFluidIngredient>>;
        static BUCKET_EMPTY_MILK: $DeferredHolder<$SoundEvent, $SoundEvent>;
        static CREATIVE_FLIGHT: $Holder<$Attribute>;
        static COMPOUND_INGREDIENT_TYPE: $DeferredHolder<$IngredientType<never>, $IngredientType<$CompoundIngredient>>;
        static TAG_FLUID_INGREDIENT_TYPE: $DeferredHolder<$FluidIngredientType<never>, $FluidIngredientType<$TagFluidIngredient>>;
        static AND_HOLDER_SET: $Holder<$HolderSetType>;
        static REMOVE_SPAWN_COSTS_BIOME_MODIFIER_TYPE: $DeferredHolder<$MapCodec<$BiomeModifier>, $MapCodec<$BiomeModifiers$RemoveSpawnCostsBiomeModifier>>;
        static ADD_SPAWNS_STRUCTURE_MODIFIER_TYPE: $DeferredHolder<$MapCodec<$StructureModifier>, $MapCodec<$StructureModifiers$AddSpawnsStructureModifier>>;
        static INTERSECTION_FLUID_INGREDIENT_TYPE: $DeferredHolder<$FluidIngredientType<never>, $FluidIngredientType<$IntersectionFluidIngredient>>;
        static FALSE_CONDITION: $DeferredHolder<$MapCodec<$ICondition>, $MapCodec<$FalseCondition>>;
        static INTERSECTION_INGREDIENT_TYPE: $DeferredHolder<$IngredientType<never>, $IngredientType<$IntersectionIngredient>>;
        static NONE_BIOME_MODIFIER_TYPE: $DeferredHolder<$MapCodec<$BiomeModifier>, $MapCodec<$NoneBiomeModifier>>;
        static ITEM_ABILITY_PREDICATE: $DeferredHolder<$ItemSubPredicate$Type<never>, $ItemSubPredicate$Type<$ItemAbilityPredicate>>;
        static AND_CONDITION: $DeferredHolder<$MapCodec<$ICondition>, $MapCodec<$AndCondition>>;
        static EMPTY_FLUID_INGREDIENT_TYPE: $DeferredHolder<$FluidIngredientType<never>, $FluidIngredientType<$EmptyFluidIngredient>>;
        static DATA_COMPONENT_FLUID_INGREDIENT_TYPE: $DeferredHolder<$FluidIngredientType<never>, $FluidIngredientType<$DataComponentFluidIngredient>>;
        static NOT_HOLDER_SET: $Holder<$HolderSetType>;
        static MILK_TYPE: $DeferredHolder<$FluidType, $FluidType>;
        static NONE_STRUCTURE_MODIFIER_TYPE: $DeferredHolder<$MapCodec<$StructureModifier>, $MapCodec<$NoneStructureModifier>>;
        static FLOWING_MILK: $DeferredHolder<$Fluid, $Fluid>;
        static OR_HOLDER_SET: $Holder<$HolderSetType>;
        static PIGLIN_NEUTRAL_ARMOR_PREDICATE: $DeferredHolder<$MapCodec<$EntitySubPredicate>, $MapCodec<$PiglinNeutralArmorEntityPredicate>>;
        static SWIM_SPEED: $Holder<$Attribute>;
        static COMPOUND_FLUID_INGREDIENT_TYPE: $DeferredHolder<$FluidIngredientType<never>, $FluidIngredientType<$CompoundFluidIngredient>>;
        static TRUE_CONDITION: $DeferredHolder<$MapCodec<$ICondition>, $MapCodec<$TrueCondition>>;
        static ADD_SPAWNS_BIOME_MODIFIER_TYPE: $DeferredHolder<$MapCodec<$BiomeModifier>, $MapCodec<$BiomeModifiers$AddSpawnsBiomeModifier>>;
        static TAG_EMPTY_CONDITION: $DeferredHolder<$MapCodec<$ICondition>, $MapCodec<$TagEmptyCondition>>;
        static ADD_CARVERS_BIOME_MODIFIER_TYPE: $DeferredHolder<$MapCodec<$BiomeModifier>, $MapCodec<$BiomeModifiers$AddCarversBiomeModifier>>;
        static REMOVE_SPAWNS_STRUCTURE_MODIFIER_TYPE: $DeferredHolder<$MapCodec<$StructureModifier>, $MapCodec<$StructureModifiers$RemoveSpawnsStructureModifier>>;
        static BLOCK_TAG_INGREDIENT: $DeferredHolder<$IngredientType<never>, $IngredientType<$BlockTagIngredient>>;
        static USE_SELECTORS_PERMISSION: $PermissionNode<boolean>;
        static REMOVE_CARVERS_BIOME_MODIFIER_TYPE: $DeferredHolder<$MapCodec<$BiomeModifier>, $MapCodec<$BiomeModifiers$RemoveCarversBiomeModifier>>;
        static DIFFERENCE_FLUID_INGREDIENT_TYPE: $DeferredHolder<$FluidIngredientType<never>, $FluidIngredientType<$DifferenceFluidIngredient>>;
        static ITEM_EXISTS_CONDITION: $DeferredHolder<$MapCodec<$ICondition>, $MapCodec<$ItemExistsCondition>>;
        constructor(modEventBus: $IEventBus, dist: $Dist_, container: $ModContainer);
        static get properFilenameValidation(): boolean;
        static get PRBuild(): boolean;
    }
    export class $EffectCures {
        static HONEY: $EffectCure;
        static PROTECTED_BY_TOTEM: $EffectCure;
        static MILK: $EffectCure;
        static DEFAULT_CURES: $Set<$EffectCure>;
        constructor();
    }
    /**
     * A default, exposed implementation of ITrade. All of the other implementations of ITrade (in VillagerTrades) are not public.
     * This class contains everything needed to make a MerchantOffer, the actual "trade" object shown in trading guis.
     */
    export class $BasicItemListing implements $VillagerTrades$ItemListing {
        getOffer(p_219693_: $Entity, p_219694_: $RandomSource): $MerchantOffer;
        constructor(price: $ItemStack_, price2: $ItemStack_, forSale: $ItemStack_, maxTrades: number, xp: number, priceMult: number);
        constructor(emeralds: number, forSale: $ItemStack_, maxTrades: number, xp: number);
        constructor(emeralds: number, forSale: $ItemStack_, maxTrades: number, xp: number, mult: number);
        constructor(price: $ItemStack_, forSale: $ItemStack_, maxTrades: number, xp: number, priceMult: number);
    }
    export class $ModConfigSpec$IntValue extends $ModConfigSpec$ConfigValue<number> implements $IntSupplier {
        getAsInt(): number;
        get asInt(): number;
    }
    /**
     * Key and value decoded independently, unknown set of keys
     */
    export class $LenientUnboundedMapCodec<K, V> implements $BaseMapCodec<K, V>, $Codec<$Map<K, V>> {
        decode<T>(arg0: $DynamicOps<T>, arg1: T): $DataResult<$Pair$1<$Map<K, V>, T>>;
        decode<T>(ops: $DynamicOps<T>, input: $MapLike<T>): $DataResult<$Map<K, V>>;
        encode<T>(arg0: $Map_<K, V>, arg1: $DynamicOps<T>, arg2: T): $DataResult<T>;
        elementCodec(): $Codec<V>;
        keyCodec(): $Codec<K>;
        encode<T>(arg0: $Map_<K, V>, arg1: $DynamicOps<T>, arg2: $RecordBuilder<T>): $RecordBuilder<T>;
        dispatch<E>(arg0: string, arg1: $Function_<E, $Map<K, V>>, arg2: $Function_<$Map<K, V>, $MapCodec<E>>): $Codec<E>;
        dispatch<E>(arg0: $Function_<E, $Map<K, V>>, arg1: $Function_<$Map<K, V>, $MapCodec<E>>): $Codec<E>;
        validate(arg0: $Function_<$Map<K, V>, $DataResult<$Map<K, V>>>): $Codec<$Map<K, V>>;
        orElse(arg0: $UnaryOperator_<string>, arg1: $Map_<K, V>): $Codec<$Map<K, V>>;
        orElse(arg0: $Map_<K, V>): $Codec<$Map<K, V>>;
        orElse(arg0: $Consumer_<string>, arg1: $Map_<K, V>): $Codec<$Map<K, V>>;
        orElseGet(arg0: $Consumer_<string>, arg1: $Supplier_<$Map<K, V>>): $Codec<$Map<K, V>>;
        orElseGet(arg0: $Supplier_<$Map<K, V>>): $Codec<$Map<K, V>>;
        orElseGet(arg0: $UnaryOperator_<string>, arg1: $Supplier_<$Map<K, V>>): $Codec<$Map<K, V>>;
        deprecated(arg0: number): $Codec<$Map<K, V>>;
        stable(): $Codec<$Map<K, V>>;
        listOf(arg0: number, arg1: number): $Codec<$List<$Map<K, V>>>;
        listOf(): $Codec<$List<$Map<K, V>>>;
        flatXmap<S>(arg0: $Function_<$Map<K, V>, $DataResult<S>>, arg1: $Function_<S, $DataResult<$Map<K, V>>>): $Codec<S>;
        optionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: $Map_<K, V>, arg3: $Lifecycle): $MapCodec<$Map<K, V>>;
        optionalFieldOf(arg0: string, arg1: $Map_<K, V>, arg2: $Lifecycle): $MapCodec<$Map<K, V>>;
        optionalFieldOf(arg0: string, arg1: $Map_<K, V>): $MapCodec<$Map<K, V>>;
        optionalFieldOf(arg0: string): $MapCodec<($Map<K, V>) | undefined>;
        lenientOptionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: $Map_<K, V>, arg3: $Lifecycle): $MapCodec<$Map<K, V>>;
        lenientOptionalFieldOf(arg0: string): $MapCodec<($Map<K, V>) | undefined>;
        lenientOptionalFieldOf(arg0: string, arg1: $Map_<K, V>): $MapCodec<$Map<K, V>>;
        lenientOptionalFieldOf(arg0: string, arg1: $Map_<K, V>, arg2: $Lifecycle): $MapCodec<$Map<K, V>>;
        mapResult(arg0: $Codec$ResultFunction<$Map_<K, V>>): $Codec<$Map<K, V>>;
        promotePartial(arg0: $Consumer_<string>): $Codec<$Map<K, V>>;
        partialDispatch<E>(arg0: string, arg1: $Function_<E, $DataResult<$Map<K, V>>>, arg2: $Function_<$Map<K, V>, $DataResult<$MapCodec<E>>>): $Codec<E>;
        dispatchMap<E>(arg0: string, arg1: $Function_<E, $Map<K, V>>, arg2: $Function_<$Map<K, V>, $MapCodec<E>>): $MapCodec<E>;
        dispatchMap<E>(arg0: $Function_<E, $Map<K, V>>, arg1: $Function_<$Map<K, V>, $MapCodec<E>>): $MapCodec<E>;
        xmap<S>(arg0: $Function_<$Map<K, V>, S>, arg1: $Function_<S, $Map<K, V>>): $Codec<S>;
        sizeLimitedListOf(arg0: number): $Codec<$List<$Map<K, V>>>;
        comapFlatMap<S>(arg0: $Function_<$Map<K, V>, $DataResult<S>>, arg1: $Function_<S, $Map<K, V>>): $Codec<S>;
        flatComapMap<S>(arg0: $Function_<$Map<K, V>, S>, arg1: $Function_<S, $DataResult<$Map<K, V>>>): $Codec<S>;
        dispatchStable<E>(arg0: $Function_<E, $Map<K, V>>, arg1: $Function_<$Map<K, V>, $MapCodec<E>>): $Codec<E>;
        comap<B>(arg0: $Function_<B, $Map<K, V>>): $Encoder<B>;
        flatComap<B>(arg0: $Function_<B, $DataResult<$Map<K, V>>>): $Encoder<B>;
        encodeStart<T>(arg0: $DynamicOps<T>, arg1: $Map_<K, V>): $DataResult<T>;
        decode<T>(arg0: $Dynamic<T>): $DataResult<$Pair$1<$Map<K, V>, T>>;
        map<B>(arg0: $Function_<$Map<K, V>, B>): $Decoder<B>;
        flatMap<B>(arg0: $Function_<$Map<K, V>, $DataResult<B>>): $Decoder<B>;
        parse<T>(arg0: $DynamicOps<T>, arg1: T): $DataResult<$Map<K, V>>;
        parse<T>(arg0: $Dynamic<T>): $DataResult<$Map<K, V>>;
        boxed(): $Decoder$Boxed<$Map<K, V>>;
        terminal(): $Decoder$Terminal<$Map<K, V>>;
        simple(): $Decoder$Simple<$Map<K, V>>;
        withLifecycle(arg0: $Lifecycle): $Encoder<$Map<K, V>>;
        fieldOf(arg0: string): $MapEncoder<$Map<K, V>>;
        constructor(keyCodec: $Codec_<K>, elementCodec: $Codec_<V>);
    }
    /**
     * General configuration that doesn't need to be synchronized but needs to be available before server startup
     */
    export class $NeoForgeConfig$Common {
        attributeAdvancedTooltipDebugInfo: $ModConfigSpec$BooleanValue;
        logLegacyTagWarnings: $ModConfigSpec$EnumValue<$TagConventionLogWarning$LogWarningMode>;
        logUntranslatedItemTagWarnings: $ModConfigSpec$EnumValue<$TagConventionLogWarning$LogWarningMode>;
    }
    export class $VillagerTradingManager {
        constructor();
    }
    /**
     * This class defines a replacement for the default minecart collision code.
     * Only one handler can be registered at a time. It it registered with AbstractMinecartEntity.registerCollisionHandler().
     * If you use this, make it a configuration option.
     */
    export class $IMinecartCollisionHandler {
    }
    export interface $IMinecartCollisionHandler {
        /**
         * This function replaced the function of the same name in EntityMinecart.
         * It is used to define whether minecarts collide with specific entities,
         * for example items.
         */
        getCollisionBox(cart: $AbstractMinecart, other: $Entity): $AABB;
        /**
         * This function is used to define the box used for detecting minecart collisions.
         * It is generally bigger that the normal collision box.
         */
        getMinecartCollisionBox(cart: $AbstractMinecart): $AABB;
        /**
         * This basically replaces the function of the same name in EntityMinecart.
         * Code in IMinecartHooks.applyEntityCollisionHook is still run.
         */
        onEntityCollision(cart: $AbstractMinecart, other: $Entity): void;
        /**
         * This function is used to define the box used for detecting minecart collisions.
         * It is generally bigger that the normal collision box.
         */
        getBoundingBox(cart: $AbstractMinecart): $AABB;
    }
    export class $CreativeModeTabRegistry {
        /**
         * @return an unmodifiable view of the sorted list of creative mode tabs in ascending order
         */
        static getSortedCreativeModeTabs(): $List<$CreativeModeTab>;
        /**
         * @return an unmodifiable view of the sorted list of creative mode tabs in ascending order
         */
        static getDefaultTabs(): $List<$CreativeModeTab>;
        static sortTabs(): void;
        /**
         * @return the name of the given CreativeModeTab, or null
         */
        static getName(tab: $CreativeModeTab_): $ResourceLocation;
        /**
         * @return the CreativeModeTab with the given name, or null
         */
        static getTab(name: $ResourceLocation_): $CreativeModeTab;
        constructor();
        static get sortedCreativeModeTabs(): $List<$CreativeModeTab>;
        static get defaultTabs(): $List<$CreativeModeTab>;
    }
    export class $ItemAbility {
        /**
         * Returns the name of this item ability
         */
        name(): string;
        /**
         * Gets or creates a new ItemAbility for the given name.
         */
        static get(name: string): $ItemAbility;
        /**
         * Returns all registered actions.
         * This collection can be kept around, and will update itself in response to changes to the map.
         * See `ConcurrentHashMap#values()` for details.
         */
        static getActions(): $Collection<$ItemAbility>;
        static CODEC: $Codec<$ItemAbility>;
        static get actions(): $Collection<$ItemAbility>;
    }
    /**
     * Values that may be interpreted as {@link $ItemAbility}.
     */
    export type $ItemAbility_ = "shield_block" | "sword_sweep" | "till" | "pickaxe_dig" | "axe_strip" | "axe_scrape" | "shears_dig" | "shears_trim" | "brush_brush" | "spyglass_scope" | "axe_wax_off" | "shovel_flatten" | "shovel_dig" | "shovel_douse" | "create:extinguish_flame" | "trident_throw" | "axe_dig" | "hoe_dig" | "shears_remove_armor" | "sword_dig" | "shears_disarm" | "fishing_rod_cast" | "shears_harvest" | "shears_carve" | "firestarter_light";
    export class $ModConfigSpec$ValueSpec {
        getTranslationKey(): string;
        restartType(): $ModConfigSpec$RestartType;
        getRange<V extends $Comparable<V>>(): $ModConfigSpec$Range<V>;
        getClazz(): $Class<never>;
        test(value: $Object): boolean;
        getDefault(): $Object;
        getComment(): string;
        correct(value: $Object): $Object;
        get translationKey(): string;
        get range(): $ModConfigSpec$Range<V>;
        get clazz(): $Class<never>;
        get default(): $Object;
        get comment(): string;
    }
    export class $Tags$Blocks {
        static COBBLESTONES_MOSSY: $TagKey<$Block>;
        static DYED_BROWN: $TagKey<$Block>;
        static SANDSTONE_STAIRS: $TagKey<$Block>;
        static PUMPKINS_JACK_O_LANTERNS: $TagKey<$Block>;
        static STORAGE_BLOCKS_IRON: $TagKey<$Block>;
        static FENCES: $TagKey<$Block>;
        static ORE_RATES_SPARSE: $TagKey<$Block>;
        static SANDSTONE_UNCOLORED_SLABS: $TagKey<$Block>;
        static ROPES: $TagKey<$Block>;
        static DYED_PINK: $TagKey<$Block>;
        static ORES_COAL: $TagKey<$Block>;
        static CHESTS_TRAPPED: $TagKey<$Block>;
        static SANDSTONE_RED_BLOCKS: $TagKey<$Block>;
        static NEEDS_GOLD_TOOL: $TagKey<$Block>;
        static NEEDS_WOOD_TOOL: $TagKey<$Block>;
        static BOOKSHELVES: $TagKey<$Block>;
        static OBSIDIANS: $TagKey<$Block>;
        static DYED_BLUE: $TagKey<$Block>;
        static DYED_RED: $TagKey<$Block>;
        static DYED_GRAY: $TagKey<$Block>;
        static GLASS_BLOCKS_COLORLESS: $TagKey<$Block>;
        static PLAYER_WORKSTATIONS_CRAFTING_TABLES: $TagKey<$Block>;
        static SANDSTONE_RED_SLABS: $TagKey<$Block>;
        static STORAGE_BLOCKS_WHEAT: $TagKey<$Block>;
        static BARRELS_WOODEN: $TagKey<$Block>;
        static STORAGE_BLOCKS_LAPIS: $TagKey<$Block>;
        static DYED_PURPLE: $TagKey<$Block>;
        static STORAGE_BLOCKS_REDSTONE: $TagKey<$Block>;
        static RELOCATION_NOT_SUPPORTED: $TagKey<$Block>;
        static SANDSTONE_UNCOLORED_BLOCKS: $TagKey<$Block>;
        static STORAGE_BLOCKS_COAL: $TagKey<$Block>;
        static BUDS: $TagKey<$Block>;
        static ORES_IRON: $TagKey<$Block>;
        static ORES_REDSTONE: $TagKey<$Block>;
        static ENDERMAN_PLACE_ON_BLACKLIST: $TagKey<$Block>;
        static ORES_GOLD: $TagKey<$Block>;
        static STORAGE_BLOCKS: $TagKey<$Block>;
        static COBBLESTONES_INFESTED: $TagKey<$Block>;
        static SANDS_COLORLESS: $TagKey<$Block>;
        static OBSIDIANS_CRYING: $TagKey<$Block>;
        static VILLAGER_JOB_SITES: $TagKey<$Block>;
        static DYED_MAGENTA: $TagKey<$Block>;
        static STORAGE_BLOCKS_BONE_MEAL: $TagKey<$Block>;
        static SKULLS: $TagKey<$Block>;
        static PUMPKINS_NORMAL: $TagKey<$Block>;
        static OBSIDIANS_NORMAL: $TagKey<$Block>;
        static DYED_CYAN: $TagKey<$Block>;
        static STORAGE_BLOCKS_GOLD: $TagKey<$Block>;
        static GLAZED_TERRACOTTAS: $TagKey<$Block>;
        static FENCE_GATES: $TagKey<$Block>;
        static STORAGE_BLOCKS_RAW_GOLD: $TagKey<$Block>;
        static STORAGE_BLOCKS_DRIED_KELP: $TagKey<$Block>;
        static FENCE_GATES_WOODEN: $TagKey<$Block>;
        static DYED_GREEN: $TagKey<$Block>;
        static ORES_EMERALD: $TagKey<$Block>;
        static ORES_COPPER: $TagKey<$Block>;
        static PUMPKINS_CARVED: $TagKey<$Block>;
        static ORE_RATES_DENSE: $TagKey<$Block>;
        static STORAGE_BLOCKS_NETHERITE: $TagKey<$Block>;
        static BARRELS: $TagKey<$Block>;
        static ORES_LAPIS: $TagKey<$Block>;
        static GLASS_PANES_COLORLESS: $TagKey<$Block>;
        static STORAGE_BLOCKS_COPPER: $TagKey<$Block>;
        static ORE_BEARING_GROUND_STONE: $TagKey<$Block>;
        static ORES_IN_GROUND_STONE: $TagKey<$Block>;
        static DYED_LIME: $TagKey<$Block>;
        static GLASS_BLOCKS_TINTED: $TagKey<$Block>;
        static GLASS_PANES: $TagKey<$Block>;
        static GLASS_BLOCKS: $TagKey<$Block>;
        static PLAYER_WORKSTATIONS_FURNACES: $TagKey<$Block>;
        static GRAVELS: $TagKey<$Block>;
        static COBBLESTONES_NORMAL: $TagKey<$Block>;
        static DYED_ORANGE: $TagKey<$Block>;
        static SANDSTONE_SLABS: $TagKey<$Block>;
        static CLUSTERS: $TagKey<$Block>;
        static PUMPKINS: $TagKey<$Block>;
        static STORAGE_BLOCKS_DIAMOND: $TagKey<$Block>;
        static BUDDING_BLOCKS: $TagKey<$Block>;
        static CHAINS: $TagKey<$Block>;
        static STRIPPED_WOODS: $TagKey<$Block>;
        static FENCES_NETHER_BRICK: $TagKey<$Block>;
        static STORAGE_BLOCKS_RAW_IRON: $TagKey<$Block>;
        static ORES_QUARTZ: $TagKey<$Block>;
        static STONES: $TagKey<$Block>;
        static SANDS_RED: $TagKey<$Block>;
        static DYED_LIGHT_GRAY: $TagKey<$Block>;
        static SANDSTONE_UNCOLORED_STAIRS: $TagKey<$Block>;
        static GLASS_BLOCKS_CHEAP: $TagKey<$Block>;
        static DYED_BLACK: $TagKey<$Block>;
        static DYED_WHITE: $TagKey<$Block>;
        static DYED: $TagKey<$Block>;
        static DYED_LIGHT_BLUE: $TagKey<$Block>;
        static ORES_DIAMOND: $TagKey<$Block>;
        static DYED_YELLOW: $TagKey<$Block>;
        static ORES_IN_GROUND_DEEPSLATE: $TagKey<$Block>;
        static SANDSTONE_BLOCKS: $TagKey<$Block>;
        static STORAGE_BLOCKS_RAW_COPPER: $TagKey<$Block>;
        static STRIPPED_LOGS: $TagKey<$Block>;
        static CHESTS_ENDER: $TagKey<$Block>;
        static SANDSTONE_RED_STAIRS: $TagKey<$Block>;
        static VILLAGER_FARMLANDS: $TagKey<$Block>;
        static STORAGE_BLOCKS_SLIME: $TagKey<$Block>;
        static COBBLESTONES: $TagKey<$Block>;
        static FENCES_WOODEN: $TagKey<$Block>;
        static NETHERRACKS: $TagKey<$Block>;
        static ORES_IN_GROUND_NETHERRACK: $TagKey<$Block>;
        static COBBLESTONES_DEEPSLATE: $TagKey<$Block>;
        static NEEDS_NETHERITE_TOOL: $TagKey<$Block>;
        static CONCRETES: $TagKey<$Block>;
        static ORES_NETHERITE_SCRAP: $TagKey<$Block>;
        static CHESTS_WOODEN: $TagKey<$Block>;
        static HIDDEN_FROM_RECIPE_VIEWERS: $TagKey<$Block>;
        static ORE_RATES_SINGULAR: $TagKey<$Block>;
        static STORAGE_BLOCKS_EMERALD: $TagKey<$Block>;
        static ORES: $TagKey<$Block>;
        static ORE_BEARING_GROUND_DEEPSLATE: $TagKey<$Block>;
        static ORE_BEARING_GROUND_NETHERRACK: $TagKey<$Block>;
        static CHESTS: $TagKey<$Block>;
        static END_STONES: $TagKey<$Block>;
        static SANDS: $TagKey<$Block>;
        constructor();
    }
    export class $NeoForge {
        static EVENT_BUS: $IEventBus;
        constructor();
    }
    export class $MonsterRoomHooks$MobEntry extends $Record implements $WeightedEntry {
        getWeight(): $Weight;
        type(): $EntityType<never>;
        weight(): $Weight;
        constructor(type: $EntityType_<never>, weight: $Weight);
    }
    /**
     * Values that may be interpreted as {@link $MonsterRoomHooks$MobEntry}.
     */
    export type $MonsterRoomHooks$MobEntry_ = { weight?: $Weight, type?: $EntityType_<never>,  } | [weight?: $Weight, type?: $EntityType_<never>, ];
    export class $DataMapHooks {
        static getBlockWaxed(block: $Block_): $Block;
        static getBlockUnwaxed(block: $Block_): $Block;
        static getPreviousOxidizedStage(block: $Block_): $Block;
        static getNextOxidizedStage(block: $Block_): $Block;
        static INVERSE_WAXABLES_DATAMAP: $Map<$Block, $Block>;
        static didHaveToFallbackToVanillaMaps: boolean;
        static INVERSE_OXIDIZABLES_DATAMAP: $Map<$Block, $Block>;
        constructor();
    }
    export class $TagConventionLogWarning {
    }
    export class $Tags$Enchantments {
        static ENTITY_AUXILIARY_MOVEMENT_ENHANCEMENTS: $TagKey<$Enchantment>;
        static INCREASE_ENTITY_DROPS: $TagKey<$Enchantment>;
        static ENTITY_DEFENSE_ENHANCEMENTS: $TagKey<$Enchantment>;
        static WEAPON_DAMAGE_ENHANCEMENTS: $TagKey<$Enchantment>;
        static INCREASE_BLOCK_DROPS: $TagKey<$Enchantment>;
        static ENTITY_SPEED_ENHANCEMENTS: $TagKey<$Enchantment>;
        constructor();
    }
    export class $Tags$EntityTypes {
        static BOATS: $TagKey<$EntityType<never>>;
        static CAPTURING_NOT_SUPPORTED: $TagKey<$EntityType<never>>;
        static BOSSES: $TagKey<$EntityType<never>>;
        static TELEPORTING_NOT_SUPPORTED: $TagKey<$EntityType<never>>;
        static MINECARTS: $TagKey<$EntityType<never>>;
        constructor();
    }
    /**
     * Defines an action which produces a sound.
     */
    export class $SoundAction {
        /**
         * Returns the name of the action.
         */
        name(): string;
        /**
         * Gets or creates a new `SoundAction` for the given name.
         */
        static get(name: string): $SoundAction;
    }
    export class $ModConfigSpec$DoubleValue extends $ModConfigSpec$ConfigValue<number> implements $DoubleSupplier {
        getAsDouble(): number;
        getRaw(config: $Config, path: $List_<string>, defaultSupplier: $Supplier_<number>): number;
        get asDouble(): number;
    }
    export class $ModConfigSpec implements $IConfigSpec {
        getLevelComment(path: $List_<string>): string;
        getLevelTranslationKey(path: $List_<string>): string;
        afterReload(): void;
        getValues(): $UnmodifiableConfig;
        isEmpty(): boolean;
        save(): void;
        isLoaded(): boolean;
        getSpec(): $UnmodifiableConfig;
        isCorrect(config: $UnmodifiableCommentedConfig): boolean;
        correct(arg0: $CommentedConfig, arg1: $ConfigSpec$CorrectionListener_): number;
        correct(arg0: $CommentedConfig, arg1: $ConfigSpec$CorrectionListener_, arg2: $ConfigSpec$CorrectionListener_): number;
        correct(config: $CommentedConfig): void;
        validateSpec(config: $ModConfig): void;
        acceptConfig(arg0: $IConfigSpec$ILoadedConfig): void;
        resetCaches(arg0: $ModConfigSpec$RestartType_): void;
        get values(): $UnmodifiableConfig;
        get empty(): boolean;
        get loaded(): boolean;
        get spec(): $UnmodifiableConfig;
    }
    export class $WorldWorkerManager {
        static addWorker(arg0: $WorldWorkerManager$IWorker): void;
        static clear(): void;
        static tick(start: boolean): void;
        constructor();
    }
    export class $DeferredSpawnEggItem$ColorRegisterHandler {
    }
    /**
     * Class for various common (i.e. client and server-side) hooks.
     */
    export class $CommonHooks {
        static onLivingChangeTarget(entity: $LivingEntity, originalTarget: $LivingEntity, targetType: $LivingChangeTargetEvent$ILivingTargetType): $LivingChangeTargetEvent;
        /**
         * Used as the default implementation of `Item#getCreatorModId`. Call that method instead.
         */
        static getDefaultCreatorModId(itemStack: $ItemStack_): string;
        static onChangeGameType(player: $Player, currentGameType: $GameType_, newGameType: $GameType_): $GameType;
        /**
         * @deprecated
         * FOR INTERNAL USE ONLY, DO NOT CALL DIRECTLY
         */
        static modifyAttributes(): void;
        /**
         * Checks that all data components override equals and hashCode.
         */
        static validateComponent(dataComponent: $Object): void;
        /**
         * Returns a vanilla fluid type for the given fluid.
         */
        static getVanillaFluidType(fluid: $Fluid_): $FluidType;
        static canEntityDestroy(level: $Level_, pos: $BlockPos_, entity: $LivingEntity): boolean;
        /**
         * @deprecated
         * All loot table drops should be passed to this function so that mod added effects (e.g. smelting enchantments) can be processed.
         */
        static modifyLoot(list: $List_<$ItemStack_>, context: $LootContext): $List<$ItemStack>;
        /**
         * Handles the modification of loot table drops via the registered Global Loot Modifiers, so that custom effects can be processed.
         * 
         * All loot-table generated loot should be passed to this function.
         */
        static modifyLoot(lootTableId: $ResourceLocation_, generatedLoot: $ObjectArrayList<$ItemStack_>, context: $LootContext): $ObjectArrayList<$ItemStack>;
        static getCraftingRemainingItem(stack: $ItemStack_): $ItemStack;
        static onVanillaGameEvent(level: $Level_, vanillaEvent: $Holder_<$GameEvent>, pos: $Vec3_, context: $GameEvent$Context_): boolean;
        /**
         * This method is used to prefix the path, where elements of the associated registry are stored, with their namespace, if it is not minecraft
         * 
         * This rules conflicts with equal paths out. If for example the mod `fancy_cheese` adds a registry named `cheeses`, but the mod `awesome_cheese` also adds a registry called `cheeses`, they are going to have the
         * same path `cheeses`, just with different namespaces. If `additional_cheese` wants to add additional cheese to `awesome_cheese`, but not `fancy_cheese`, it can not differentiate both. Both paths will look like
         * `data/additional_cheese/cheeses`.
         * 
         * The fix, which is applied here prefixes the path of the registry with the namespace, so `fancy_cheese`'s registry stores its elements in `data//fancy_cheese/cheeses` and `awesome_cheese`'s registry stores
         * its elements in `data/namespace/awesome_cheese/cheeses`
         */
        static prefixNamespace(registryKey: $ResourceLocation_): string;
        static onNoteChange(level: $Level_, pos: $BlockPos_, state: $BlockState_, old: number, _new: number): number;
        static newChatWithLinks(string: string): $Component;
        static newChatWithLinks(string: string, allowMissingHeader: boolean): $Component;
        static onGrindstoneTake(arg0: $Container, arg1: $ContainerLevelAccess_, arg2: $Player, arg3: $Function_<$Level, number>): boolean;
        /**
         * @deprecated
         */
        static onGrindstoneTake(inputSlots: $Container, access: $ContainerLevelAccess_, xpFunction: $Function_<$Level, number>): boolean;
        static onInteractEntityAt(player: $Player, entity: $Entity, vec3d: $Vec3_, hand: $InteractionHand_): $InteractionResult;
        static onInteractEntityAt(player: $Player, entity: $Entity, ray: $HitResult, hand: $InteractionHand_): $InteractionResult;
        static getModDataPacks(): $List<string>;
        static resolveLookup<T>(arg0: $ResourceKey_<$Registry<T>>): $HolderLookup$RegistryLookup<T>;
        /**
         * Creates a `UseOnContext` for dispense behavior.
         */
        static dispenseUseOnContext(source: $BlockSource_, stack: $ItemStack_): $UseOnContext;
        static getFilteredRecipeBookTypeValues(): $RecipeBookType[];
        static onServerChatSubmittedEvent(player: $ServerPlayer, plain: string, decorated: $Component_): $Component;
        /**
         * Marks a class as being safe to use as a data component.
         * Keep in mind that data components are compared with `Object#equals(Object)`
         * and hashed with `Object#hashCode()`.
         * **They must also be immutable.**
         * 
         * Only call this method if the default implementations of `Object#equals(Object)`
         * and `Object#hashCode()` are suitable for this class,
         * and if instances of this class are immutable.
         * Typically, this is only the case for singletons such as `Block` instances.
         */
        static markComponentClassAsValid(clazz: $Class<never>): void;
        static onDifficultyChange(difficulty: $Difficulty_, oldDifficulty: $Difficulty_): void;
        static getServerChatSubmittedDecorator(): $ChatDecorator;
        /**
         * Fires `BreakEvent`, pre-emptively canceling the event based on the conditions that will cause the block to not be broken anyway.
         * 
         * Note that undoing the pre-cancel will not permit breaking the block, since the vanilla conditions will always be checked.
         */
        static fireBlockBreak(level: $Level_, gameType: $GameType_, player: $ServerPlayer, pos: $BlockPos_, state: $BlockState_): $BlockEvent$BreakEvent;
        static setCraftingPlayer(player: $Player): void;
        static getCraftingPlayer(): $Player;
        static onItemRightClick(player: $Player, hand: $InteractionHand_): $InteractionResult;
        static onLeftClickBlock(player: $Player, pos: $BlockPos_, face: $Direction_, action: $ServerboundPlayerActionPacket$Action_): $PlayerInteractEvent$LeftClickBlock;
        static onClientMineHold(player: $Player, pos: $BlockPos_, face: $Direction_): $PlayerInteractEvent$LeftClickBlock;
        static onRightClickBlock(player: $Player, hand: $InteractionHand_, pos: $BlockPos_, hitVec: $BlockHitResult): $PlayerInteractEvent$RightClickBlock;
        static lootPoolsCodec(nameSetter: $BiConsumer_<$LootPool, string>): $Codec<$List<$LootPool>>;
        static getTagFromVanillaTier(tier: $Tiers_): $TagKey<$Block>;
        static onCheckCreativeTabs(...arg0: $CreativeModeTab_[]): $Collection<$CreativeModeTab>;
        static getSerializer(id: number, vanilla: $CrudeIncrementalIntIdentityHashBiMap<$EntityDataSerializer_<never>>): $EntityDataSerializer<never>;
        static getSerializerId(serializer: $EntityDataSerializer_<never>, vanilla: $CrudeIncrementalIntIdentityHashBiMap<$EntityDataSerializer_<never>>): number;
        static getModDataPacksWithVanilla(): $List<string>;
        /**
         * @deprecated
         * FOR INTERNAL USE ONLY, DO NOT CALL DIRECTLY
         */
        static getAttributesView(): $Map<$EntityType<$LivingEntity>, $AttributeSupplier>;
        static onEntityEnterSection(entity: $Entity, packedOldPos: number, packedNewPos: number): void;
        static writeAdditionalLevelSaveData(worldData: $WorldData, levelTag: $CompoundTag_): void;
        static readAdditionalLevelSaveData(rootTag: $CompoundTag_, levelDirectory: $LevelStorageSource$LevelDirectory_): void;
        static encodeLifecycle(lifecycle: $Lifecycle): string;
        static parseLifecycle(lifecycle: string): $Lifecycle;
        static saveMobEffect(nbt: $CompoundTag_, key: string, effect: $MobEffect_): void;
        static loadMobEffect(nbt: $CompoundTag_, key: string, fallback: $MobEffect_): $MobEffect;
        static shouldSuppressEnderManAnger(enderMan: $EnderMan, player: $Player, mask: $ItemStack_): boolean;
        static canUseEntitySelectors(provider: $SharedSuggestionProvider): boolean;
        static wrapRegistryLookup<T>(lookup: $HolderLookup$RegistryLookup<T>): $HolderLookup$RegistryLookup<T>;
        /**
         * The goal here is to fix the POI memory leak that happens due to
         * `SectionStorage#storage` field never
         * actually removing POIs long after they become irrelevant. We do it here in chunk unload event
         * so that chunk that are fully unloaded now gets the POI removed from the POI cached storage map.
         */
        static onChunkUnload(poiManager: $PoiManager, chunkAccess: $ChunkAccess): void;
        /**
         * Extracts a `Provider` from the given `ops`, if possible.
         */
        static extractLookupProvider(ops: $RegistryOps<never>): $HolderLookup$Provider;
        /**
         * Attempts to modify target block using `ItemAbilities#SHEARS_HARVEST` in `ShearsDispenseItemBehavior`,
         * consistent with vanilla beehive harvest behavior (also controlled by `ItemAbilities#SHEARS_HARVEST`).
         * 
         * The beehive harvest behavior is not implemented by `IBlockExtension#getToolModifiedState(BlockState, UseOnContext, ItemAbility, boolean)`
         * and thus will still be controlled by `ShearsDispenseItemBehavior#tryShearBeehive(ServerLevel, BlockPos)` by default.
         * 
         * Mods may subscribe to `BlockToolModificationEvent`
         * to override vanilla beehive harvest behavior by setting a non-null `BlockState` result.
         */
        static tryDispenseShearsHarvestBlock(source: $BlockSource_, stack: $ItemStack_, level: $ServerLevel, pos: $BlockPos_): boolean;
        static buildRecipeBookTypeTagFields(vanillaMap: $Map_<$RecipeBookType_, $Pair$1<string, string>>): $Map<$RecipeBookType, $Pair$1<string, string>>;
        static onAnvilRepair(player: $Player, output: $ItemStack_, left: $ItemStack_, right: $ItemStack_): number;
        static onAnvilChange(container: $AnvilMenu, left: $ItemStack_, right: $ItemStack_, outputSlot: $Container, name: string, baseCost: number, player: $Player): boolean;
        /**
         * Hook to fire `ItemAttributeModifierEvent`. Modders should use `ItemStack#forEachModifier(EquipmentSlot, BiConsumer)` instead.
         */
        static computeModifiedAttributes(stack: $ItemStack_, defaultModifiers: $ItemAttributeModifiers_): $ItemAttributeModifiers;
        static onGrindstoneChange(top: $ItemStack_, bottom: $ItemStack_, outputSlot: $Container, xp: number): number;
        /**
         * Fires the `BlockDropsEvent` when block drops (items and experience) are determined.
         * If the event is not cancelled, all drops will be added to the world, and then `BlockBehaviour#spawnAfterBreak` will be called.
         */
        static handleBlockDrops(level: $ServerLevel, pos: $BlockPos_, state: $BlockState_, blockEntity: $BlockEntity, drops: $List_<$ItemEntity>, breaker: $Entity, tool: $ItemStack_): void;
        /**
         * Checks if a crop can grow by firing `Pre`.
         */
        static canCropGrow(level: $Level_, pos: $BlockPos_, state: $BlockState_, def: boolean): boolean;
        static fireCropGrowPost(level: $Level_, pos: $BlockPos_, state: $BlockState_): void;
        static onFarmlandTrample(level: $Level_, pos: $BlockPos_, state: $BlockState_, fallDistance: number, entity: $Entity): boolean;
        /**
         * Fires `PlayerEnchantItemEvent` in `EnchantmentMenu#clickMenuButton(Player, int)` after the enchants are
         * applied to the item.
         */
        static onPlayerEnchantItem(player: $Player, stack: $ItemStack_, instances: $List_<$EnchantmentInstance>): void;
        static onPlaceItemIntoWorld(context: $UseOnContext): $InteractionResult;
        /**
         * Fires the `ItemStackedOnOtherEvent`, allowing items to handle custom behavior relating to being stacked together (i.e. how the bundle operates).
         * 
         * Called from `AbstractContainerMenu#doClick` in the utility method `AbstractContainerMenu#tryItemClickBehaviourOverride` before either
         * `ItemStack#overrideStackedOnOther` or `ItemStack#overrideOtherStackedOnMe` is called.
         */
        static onItemStackedOn(carriedItem: $ItemStack_, stackedOnItem: $ItemStack_, slot: $Slot, action: $ClickAction_, player: $Player, carriedSlotAccess: $SlotAccess): boolean;
        static onEmptyLeftClick(player: $Player): void;
        static onEmptyClick(player: $Player, hand: $InteractionHand_): void;
        static getStructureConversion(originalBiome: string): $StructuresBecomeConfiguredFix$Conversion;
        static checkStructureNamespace(biome: string): boolean;
        /**
         * Handles living entities being underwater. This fires the `LivingBreatheEvent` and if the entity's air supply is less than or equal to zero also the `LivingDrownEvent`. Additionally, when the entity is underwater it will
         * dismount if `IEntityExtension#canBeRiddenUnderFluidType(FluidType, Entity)` returns false.
         */
        static onLivingBreathe(entity: $LivingEntity, consumeAirAmount: number, refillAirAmount: number): void;
        static getEntityVisibilityMultiplier(entity: $LivingEntity, lookingEntity: $Entity, originalMultiplier: number): number;
        /**
         * Checks if a mob effect can be applied to an entity by firing `Applicable`.
         */
        static canMobEffectBeApplied(entity: $LivingEntity, effect: $MobEffectInstance, source: $Entity): boolean;
        /**
         * @deprecated
         * Checks if a mob effect can be applied to an entity by firing `Applicable`.
         */
        static canMobEffectBeApplied(entity: $LivingEntity, effect: $MobEffectInstance): boolean;
        /**
         * Called after invulnerability checks in `LivingEntity#hurt(DamageSource, float)`,
         * this method creates and posts the first event in the LivingEntity damage sequence,
         * `LivingIncomingDamageEvent`.
         */
        static onEntityIncomingDamage(entity: $LivingEntity, container: $DamageContainer): boolean;
        /**
         * Creates, posts, and returns a `LivingShieldBlockEvent`. This method is invoked in
         * `LivingEntity#hurt(DamageSource, float)` and requires internal access to the top entry
         * in the protected field `LivingEntity#damageContainers` as a parameter.
         */
        static onDamageBlock(blocker: $LivingEntity, container: $DamageContainer, originalBlocked: boolean): $LivingShieldBlockEvent;
        static onLivingUseTotem(entity: $LivingEntity, damageSource: $DamageSource_, totem: $ItemStack_, hand: $InteractionHand_): boolean;
        static onLivingDeath(entity: $LivingEntity, src: $DamageSource_): boolean;
        static onLivingDrops(entity: $LivingEntity, source: $DamageSource_, drops: $Collection_<$ItemEntity>, recentlyHit: boolean): boolean;
        static onPlayerTossEvent(player: $Player, item: $ItemStack_, includeName: boolean): $ItemEntity;
        static onInteractEntity(player: $Player, entity: $Entity, hand: $InteractionHand_): $InteractionResult;
        static onPlayerAttackTarget(player: $Player, target: $Entity): boolean;
        /**
         * Fires the `CriticalHitEvent` and returns the resulting event.
         */
        static fireCriticalHit(player: $Player, target: $Entity, vanillaCritical: boolean, damageModifier: number): $CriticalHitEvent;
        /**
         * Fires the `SweepAttackEvent` and returns the resulting event.
         */
        static fireSweepAttack(player: $Player, target: $Entity, isVanillaSweep: boolean): $SweepAttackEvent;
        static onLivingKnockBack(target: $LivingEntity, strength: number, ratioX: number, ratioZ: number): $LivingKnockBackEvent;
        static isLivingOnLadder(state: $BlockState_, level: $Level_, pos: $BlockPos_, entity: $LivingEntity): ($BlockPos) | undefined;
        static onLivingFall(entity: $LivingEntity, distance: number, damageMultiplier: number): number[];
        /**
         * This is invoked in `)`
         * and replaces the existing item hurt and break logic with an event-sensitive version.
         * 
         * Each armor slot is collected and passed into a `ArmorHurtEvent` and posted. If not cancelled,
         * the final durability loss values for each equipment item from the event will be applied.
         */
        static onArmorHurt(source: $DamageSource_, slots: $EquipmentSlot_[], damage: number, armoredEntity: $LivingEntity): void;
        /**
         * Creates and posts an `Pre`. This is invoked in
         * `LivingEntity#actuallyHurt(DamageSource, float)` and `Player#actuallyHurt(DamageSource, float)`
         * and requires access to the internal field `LivingEntity#damageContainers` as a parameter.
         */
        static onLivingDamagePre(entity: $LivingEntity, container: $DamageContainer): number;
        /**
         * Creates and posts a `Post`. This is invoked in
         * `LivingEntity#actuallyHurt(DamageSource, float)` and `Player#actuallyHurt(DamageSource, float)`
         * and requires access to the internal field `LivingEntity#damageContainers` as a parameter.
         */
        static onLivingDamagePost(entity: $LivingEntity, container: $DamageContainer): void;
        static onLivingSwapHandItems(livingEntity: $LivingEntity): $LivingSwapItemsEvent$Hands;
        static onLivingJump(entity: $LivingEntity): void;
        static canContinueUsing(from: $ItemStack_, to: $ItemStack_): boolean;
        /**
         * Hook to fire `LivingGetProjectileEvent`. Returns the ammo to be used.
         */
        static getProjectile(entity: $LivingEntity, projectileWeaponItem: $ItemStack_, projectile: $ItemStack_): $ItemStack;
        /**
         * Creates and posts an `EntityInvulnerabilityCheckEvent`. This is invoked in
         * `Entity#isInvulnerableTo(DamageSource)` and returns a post-listener result
         * to the invulnerability status of the entity to the damage source.
         */
        static isEntityInvulnerableTo(entity: $Entity, source: $DamageSource_, isInvul: boolean): boolean;
        static onTravelToDimension(entity: $Entity, dimension: $ResourceKey_<$Level>): boolean;
        static VANILLA_SERIALIZER_LIMIT: number;
        constructor();
        static get modDataPacks(): $List<string>;
        static get filteredRecipeBookTypeValues(): $RecipeBookType[];
        static get serverChatSubmittedDecorator(): $ChatDecorator;
        static get modDataPacksWithVanilla(): $List<string>;
        static get attributesView(): $Map<$EntityType<$LivingEntity>, $AttributeSupplier>;
    }
    export class $Tags {
        /**
         * Use this to get a TagKey's translation key safely on any side.
         */
        static getTagTranslationKey(tagKey: $TagKey_<never>): string;
        constructor();
    }
    export class $NeoForgeEventHandler {
        postServerTick(event: $ServerTickEvent$Post): void;
        playerLogin(event: $PlayerEvent$PlayerLoggedInEvent): void;
        onChunkUnload(event: $ChunkEvent$Unload): void;
        preServerTick(event: $ServerTickEvent$Pre): void;
        tagsUpdated(event: $TagsUpdatedEvent): void;
        onDpSync(event: $OnDatapackSyncEvent): void;
        resourceReloadListeners(event: $AddReloadListenerEvent): void;
        builtinMobSpawnBlocker(event: $EntityJoinLevelEvent): void;
        onEntityJoinWorld(event: $EntityJoinLevelEvent): void;
        onResourceReload(event: $AddReloadListenerEvent): void;
        onDimensionUnload(event: $LevelEvent$Unload): void;
        onCommandsRegister(event: $RegisterCommandsEvent): void;
        constructor();
    }
    export class $ModConfigSpec$RestartType extends $Enum<$ModConfigSpec$RestartType> {
        static values(): $ModConfigSpec$RestartType[];
        static valueOf(arg0: string): $ModConfigSpec$RestartType;
        "with"(arg0: $ModConfigSpec$RestartType_): $ModConfigSpec$RestartType;
        static GAME: $ModConfigSpec$RestartType;
        static NONE: $ModConfigSpec$RestartType;
        static WORLD: $ModConfigSpec$RestartType;
    }
    /**
     * Values that may be interpreted as {@link $ModConfigSpec$RestartType}.
     */
    export type $ModConfigSpec$RestartType_ = "none" | "world" | "game";
    export class $ItemAbilities {
        static DEFAULT_SWORD_ACTIONS: $Set<$ItemAbility>;
        static DEFAULT_PICKAXE_ACTIONS: $Set<$ItemAbility>;
        static AXE_DIG: $ItemAbility;
        static HOE_DIG: $ItemAbility;
        static AXE_STRIP: $ItemAbility;
        static TRIDENT_THROW: $ItemAbility;
        static SHEARS_CARVE: $ItemAbility;
        static DEFAULT_FLINT_ACTIONS: $Set<$ItemAbility>;
        static DEFAULT_FISHING_ROD_ACTIONS: $Set<$ItemAbility>;
        static DEFAULT_SHOVEL_ACTIONS: $Set<$ItemAbility>;
        static SPYGLASS_SCOPE: $ItemAbility;
        static SWORD_DIG: $ItemAbility;
        static DEFAULT_SPYGLASS_ACTIONS: $Set<$ItemAbility>;
        static DEFAULT_SHEARS_ACTIONS: $Set<$ItemAbility>;
        static DEFAULT_TRIDENT_ACTIONS: $Set<$ItemAbility>;
        static AXE_SCRAPE: $ItemAbility;
        static SHEARS_REMOVE_ARMOR: $ItemAbility;
        static SHEARS_TRIM: $ItemAbility;
        static DEFAULT_FIRECHARGE_ACTIONS: $Set<$ItemAbility>;
        static DEFAULT_AXE_ACTIONS: $Set<$ItemAbility>;
        static SHIELD_BLOCK: $ItemAbility;
        static DEFAULT_HOE_ACTIONS: $Set<$ItemAbility>;
        static BRUSH_BRUSH: $ItemAbility;
        static DEFAULT_SHIELD_ACTIONS: $Set<$ItemAbility>;
        static FISHING_ROD_CAST: $ItemAbility;
        static SHEARS_HARVEST: $ItemAbility;
        static DEFAULT_BRUSH_ACTIONS: $Set<$ItemAbility>;
        static PICKAXE_DIG: $ItemAbility;
        static AXE_WAX_OFF: $ItemAbility;
        static SWORD_SWEEP: $ItemAbility;
        static SHEARS_DIG: $ItemAbility;
        static SHEARS_DISARM: $ItemAbility;
        static HOE_TILL: $ItemAbility;
        static FIRESTARTER_LIGHT: $ItemAbility;
        static SHOVEL_DIG: $ItemAbility;
        static SHOVEL_FLATTEN: $ItemAbility;
        static SHOVEL_DOUSE: $ItemAbility;
        constructor();
    }
    export class $UsernameCache$SaveThread extends $Thread {
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
    }
    export class $NeoForgeConfig$Server {
        permissionHandler: $ModConfigSpec$ConfigValue<string>;
        removeErroringEntities: $ModConfigSpec$BooleanValue;
        advertiseDedicatedServerToLan: $ModConfigSpec$BooleanValue;
        fullBoundingBoxLadders: $ModConfigSpec$BooleanValue;
        removeErroringBlockEntities: $ModConfigSpec$BooleanValue;
    }
    export class $MonsterRoomHooks {
        static onDataMapsUpdated(event: $DataMapsUpdatedEvent): void;
        /**
         * Gets a random entity type from the weighted list.
         */
        static getRandomMonsterRoomMob(rand: $RandomSource): $EntityType<never>;
        constructor();
    }
    /**
     * A boolean attribute only has two states, on or off, represented by a value of 0 (false) or 1 (true).
     * 
     * For boolean attributes, only use the following modifier values:
     * 
     * - A value of 1 with `Operation#ADD_VALUE` to enable the effect.
     * - A value of -1 with `Operation#ADD_MULTIPLIED_TOTAL` to forcibly disable the effect.
     * 
     * This behavior allows for multiple enabling modifiers to coexist, not removing the effect unless all enabling modifiers are removed.
     * 
     * Additionally, it permits forcibly disabling the effect through multiply total.
     */
    export class $BooleanAttribute extends $Attribute {
        static CODEC: $Codec<$Holder<$Attribute>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$Attribute>>;
        constructor(descriptionId: string, defaultValue: boolean);
    }
    export class $CommonHooks$BiomeCallbackFunction {
    }
    export interface $CommonHooks$BiomeCallbackFunction {
        apply(climate: $Biome$ClimateSettings_, effects: $BiomeSpecialEffects, gen: $BiomeGenerationSettings, spawns: $MobSpawnSettings): $Biome;
    }
    /**
     * Values that may be interpreted as {@link $CommonHooks$BiomeCallbackFunction}.
     */
    export type $CommonHooks$BiomeCallbackFunction_ = ((arg0: $Biome$ClimateSettings, arg1: $BiomeSpecialEffects, arg2: $BiomeGenerationSettings, arg3: $MobSpawnSettings) => $Biome_);
    export class $FarmlandWaterManager {
        /**
         * Tests if a block is in a region that is watered by blocks. This does not check vanilla water, see `net.minecraft.level.level.block.FarmBlock#isNearWater(LevelReader, BlockPos)`
         */
        static hasBlockWaterTicket(level: $LevelReader, pos: $BlockPos_): boolean;
        static addCustomTicket<T extends $SimpleTicket<$Vec3>>(arg0: $Level_, arg1: T, arg2: $ChunkPos, ...arg3: $ChunkPos[]): T;
        /**
         * Convenience method to add a ticket that is backed by an AABB.
         * 
         * If you don't want to water the region anymore, call `SimpleTicket#invalidate()`. Also call this
         * when the region this is unloaded (e.g. your TE is unloaded or the block is removed), and validate once it is loaded
         * 
         * The AABB in the ticket is immutable
         */
        static addAABBTicket(level: $Level_, aabb: $AABB_): $AABBTicket;
        constructor();
    }
    /**
     * Intended for mods to help mark if a modded item allows for placing modded plants of any kind or size.
     * Also allows Villagers to properly plant items with this interface on and villagerCanPlantItem returning true.
     * 
     * People trying to plant modded items should check if item implements this interface.
     * Then check for true from canPlacePlantAtPosition first before calling spawnPlantAtPosition.
     * Implementers of this interface would ideally call canSurvive on their plant block in canPlacePlantAtPosition.
     * 
     * (Note: Vanilla plantable items are BlockItem where you can get their states directly and call canSurvive)
     */
    export class $SpecialPlantable {
    }
    export interface $SpecialPlantable {
        /**
         * Checks location if this item can spawn a plant with the given direction attachment point.
         */
        canPlacePlantAtPosition(itemStack: $ItemStack_, level: $LevelReader, pos: $BlockPos_, direction: $Direction_): boolean;
        /**
         * Spawns the plant with the given direction attachment point at location.
         * Ideally called after canPlacePlantAtPosition returns true.
         */
        spawnPlantAtPosition(itemStack: $ItemStack_, level: $LevelAccessor, pos: $BlockPos_, direction: $Direction_): void;
        /**
         * Whether Villagers can pick up this item and plant it down on any block that extends FarmBlock.
         */
        villagerCanPlantItem(villager: $Villager): boolean;
    }
    export class $ModConfigSpec$EnumValue<T extends $Enum<T>> extends $ModConfigSpec$ConfigValue<T> {
        getRaw(arg0: $Config, arg1: $List_<string>, arg2: $Supplier_<T>): T;
    }
    export class $ModConfigSpec$BuilderContext {
    }
    /**
     * Client specific configuration - only loaded clientside from neoforge-client.toml
     */
    export class $NeoForgeConfig$Client {
        logUntranslatedConfigurationWarnings: $ModConfigSpec$BooleanValue;
        experimentalForgeLightPipelineEnabled: $ModConfigSpec$BooleanValue;
        showLoadWarnings: $ModConfigSpec$BooleanValue;
        useCombinedDepthStencilAttachment: $ModConfigSpec$BooleanValue;
    }
    export class $ModConfigSpec$LongValue extends $ModConfigSpec$ConfigValue<number> implements $LongSupplier {
        getAsLong(): number;
        get asLong(): number;
    }
    export class $ModConfigSpec$ListValueSpec extends $ModConfigSpec$ValueSpec {
        getSizeRange(): $ModConfigSpec$Range<number>;
        /**
         * Creates a new empty element that can be added to the end of the list or null if the list doesn't support adding elements.
         * 
         * The element does not need to validate with either `#test(Object)` or `#testElement(Object)`, but it should give the user a good starting point for their edit.
         * 
         * Only used by the UI!
         */
        getNewElementSupplier(): $Supplier<never>;
        /**
         * Determines if a given object can be part of the list.
         * 
         * Note that the list-level validator overrules this.
         * 
         * Only used by the UI!
         */
        testElement(value: $Object): boolean;
        get sizeRange(): $ModConfigSpec$Range<number>;
        get newElementSupplier(): $Supplier<never>;
    }
    export class $Tags$Items {
        static SANDSTONE_STAIRS: $TagKey<$Item>;
        static PUMPKINS_JACK_O_LANTERNS: $TagKey<$Item>;
        static NUGGETS: $TagKey<$Item>;
        static ORE_RATES_SPARSE: $TagKey<$Item>;
        static SANDSTONE_UNCOLORED_SLABS: $TagKey<$Item>;
        static DUSTS: $TagKey<$Item>;
        static FOODS_FRUIT: $TagKey<$Item>;
        static DYED_PINK: $TagKey<$Item>;
        static CHESTS_TRAPPED: $TagKey<$Item>;
        static DRINK_CONTAINING_BOTTLE: $TagKey<$Item>;
        static CONCRETE_POWDERS: $TagKey<$Item>;
        static CROPS_PUMPKIN: $TagKey<$Item>;
        static CROPS: $TagKey<$Item>;
        static DYES_LIME: $TagKey<$Item>;
        static BOOKSHELVES: $TagKey<$Item>;
        static FOODS_COOKED_MEAT: $TagKey<$Item>;
        static TOOLS_SHEAR: $TagKey<$Item>;
        static SEEDS_BEETROOT: $TagKey<$Item>;
        static DYES: $TagKey<$Item>;
        static DYED_RED: $TagKey<$Item>;
        static DRINKS_MILK: $TagKey<$Item>;
        static CROPS_COCOA_BEAN: $TagKey<$Item>;
        static GLASS_BLOCKS_COLORLESS: $TagKey<$Item>;
        static PLAYER_WORKSTATIONS_CRAFTING_TABLES: $TagKey<$Item>;
        static SANDSTONE_RED_SLABS: $TagKey<$Item>;
        static BARRELS_WOODEN: $TagKey<$Item>;
        static FOODS_RAW_FISH: $TagKey<$Item>;
        static STORAGE_BLOCKS_COAL: $TagKey<$Item>;
        static BUDS: $TagKey<$Item>;
        static ORES_IRON: $TagKey<$Item>;
        static ORES_REDSTONE: $TagKey<$Item>;
        static ANIMAL_FOODS: $TagKey<$Item>;
        static FOODS_DOUGH: $TagKey<$Item>;
        static TOOLS_FISHING_ROD: $TagKey<$Item>;
        static BUCKETS_ENTITY_WATER: $TagKey<$Item>;
        static ORES_GOLD: $TagKey<$Item>;
        static FOODS: $TagKey<$Item>;
        static DRINKS_WATER: $TagKey<$Item>;
        static VILLAGER_JOB_SITES: $TagKey<$Item>;
        static DYED_MAGENTA: $TagKey<$Item>;
        static INGOTS_NETHERITE: $TagKey<$Item>;
        static RODS_WOODEN: $TagKey<$Item>;
        static STORAGE_BLOCKS_BONE_MEAL: $TagKey<$Item>;
        static DYES_BROWN: $TagKey<$Item>;
        static RAW_MATERIALS_IRON: $TagKey<$Item>;
        static DYES_RED: $TagKey<$Item>;
        static PUMPKINS_NORMAL: $TagKey<$Item>;
        static OBSIDIANS_NORMAL: $TagKey<$Item>;
        static DYED_CYAN: $TagKey<$Item>;
        static DYES_WHITE: $TagKey<$Item>;
        static DYES_GREEN: $TagKey<$Item>;
        static FOODS_COOKIE: $TagKey<$Item>;
        static CROPS_CACTUS: $TagKey<$Item>;
        static DRINKS_OMINOUS: $TagKey<$Item>;
        static GEMS_LAPIS: $TagKey<$Item>;
        static GLAZED_TERRACOTTAS: $TagKey<$Item>;
        static GEMS_QUARTZ: $TagKey<$Item>;
        static DRINKS: $TagKey<$Item>;
        static FENCE_GATES: $TagKey<$Item>;
        static MUSIC_DISCS: $TagKey<$Item>;
        static DYES_ORANGE: $TagKey<$Item>;
        static DRINK_CONTAINING_BUCKET: $TagKey<$Item>;
        static MUSHROOMS: $TagKey<$Item>;
        static INGOTS_IRON: $TagKey<$Item>;
        static ARMORS: $TagKey<$Item>;
        static BUCKETS_LAVA: $TagKey<$Item>;
        static DYED_GREEN: $TagKey<$Item>;
        static FOODS_VEGETABLE: $TagKey<$Item>;
        static ORES_EMERALD: $TagKey<$Item>;
        /**
         * @deprecated
         */
        static SLIMEBALLS: $TagKey<$Item>;
        static STORAGE_BLOCKS_NETHERITE: $TagKey<$Item>;
        static ORES_LAPIS: $TagKey<$Item>;
        static POTIONS: $TagKey<$Item>;
        static STORAGE_BLOCKS_COPPER: $TagKey<$Item>;
        static DRINKS_HONEY: $TagKey<$Item>;
        static ORE_BEARING_GROUND_STONE: $TagKey<$Item>;
        static SEEDS_PUMPKIN: $TagKey<$Item>;
        static TOOLS_IGNITER: $TagKey<$Item>;
        static CROPS_NETHER_WART: $TagKey<$Item>;
        static DYES_LIGHT_GRAY: $TagKey<$Item>;
        static GLASS_PANES: $TagKey<$Item>;
        static GLASS_BLOCKS: $TagKey<$Item>;
        static COBBLESTONES_NORMAL: $TagKey<$Item>;
        static SEEDS: $TagKey<$Item>;
        static SANDSTONE_SLABS: $TagKey<$Item>;
        static DYES_PINK: $TagKey<$Item>;
        static PUMPKINS: $TagKey<$Item>;
        static STORAGE_BLOCKS_DIAMOND: $TagKey<$Item>;
        static BUDDING_BLOCKS: $TagKey<$Item>;
        static STRINGS: $TagKey<$Item>;
        static BUCKETS_POWDER_SNOW: $TagKey<$Item>;
        static FENCES_NETHER_BRICK: $TagKey<$Item>;
        static STORAGE_BLOCKS_RAW_IRON: $TagKey<$Item>;
        static GUNPOWDERS: $TagKey<$Item>;
        static GEMS_DIAMOND: $TagKey<$Item>;
        static STONES: $TagKey<$Item>;
        static DYED_LIGHT_GRAY: $TagKey<$Item>;
        static GLASS_BLOCKS_CHEAP: $TagKey<$Item>;
        static GEMS_PRISMARINE: $TagKey<$Item>;
        static DYED_WHITE: $TagKey<$Item>;
        static RODS_BLAZE: $TagKey<$Item>;
        static DYED_LIGHT_BLUE: $TagKey<$Item>;
        static DYED_YELLOW: $TagKey<$Item>;
        static TOOLS_CROSSBOW: $TagKey<$Item>;
        static SANDSTONE_RED_STAIRS: $TagKey<$Item>;
        static DRINKS_WATERY: $TagKey<$Item>;
        static DUSTS_GLOWSTONE: $TagKey<$Item>;
        static DYES_LIGHT_BLUE: $TagKey<$Item>;
        static STORAGE_BLOCKS_SLIME: $TagKey<$Item>;
        static COBBLESTONES: $TagKey<$Item>;
        static FENCES_WOODEN: $TagKey<$Item>;
        static INGOTS_COPPER: $TagKey<$Item>;
        static RODS_BREEZE: $TagKey<$Item>;
        static NETHERRACKS: $TagKey<$Item>;
        static FOODS_PIE: $TagKey<$Item>;
        static ORES_IN_GROUND_NETHERRACK: $TagKey<$Item>;
        static ENDER_PEARLS: $TagKey<$Item>;
        static CROPS_MELON: $TagKey<$Item>;
        static ORES_NETHERITE_SCRAP: $TagKey<$Item>;
        static DRINKS_JUICE: $TagKey<$Item>;
        static ORE_RATES_SINGULAR: $TagKey<$Item>;
        static INGOTS: $TagKey<$Item>;
        static NETHER_STARS: $TagKey<$Item>;
        static ORE_BEARING_GROUND_NETHERRACK: $TagKey<$Item>;
        static POTION_BOTTLE: $TagKey<$Item>;
        static DYES_PURPLE: $TagKey<$Item>;
        static END_STONES: $TagKey<$Item>;
        static SANDS: $TagKey<$Item>;
        static COBBLESTONES_MOSSY: $TagKey<$Item>;
        static DYED_BROWN: $TagKey<$Item>;
        static STORAGE_BLOCKS_IRON: $TagKey<$Item>;
        static FENCES: $TagKey<$Item>;
        static ROPES: $TagKey<$Item>;
        static ORES_COAL: $TagKey<$Item>;
        static SANDSTONE_RED_BLOCKS: $TagKey<$Item>;
        static TOOLS_SPEAR: $TagKey<$Item>;
        static BRICKS: $TagKey<$Item>;
        static OBSIDIANS: $TagKey<$Item>;
        static CROPS_SUGAR_CANE: $TagKey<$Item>;
        static DUSTS_REDSTONE: $TagKey<$Item>;
        static DYED_BLUE: $TagKey<$Item>;
        static GEMS: $TagKey<$Item>;
        static DYED_GRAY: $TagKey<$Item>;
        static DYES_BLACK: $TagKey<$Item>;
        static SHULKER_BOXES: $TagKey<$Item>;
        static INGOTS_GOLD: $TagKey<$Item>;
        static RAW_MATERIALS: $TagKey<$Item>;
        static EGGS: $TagKey<$Item>;
        static NUGGETS_IRON: $TagKey<$Item>;
        static STORAGE_BLOCKS_WHEAT: $TagKey<$Item>;
        static CROPS_BEETROOT: $TagKey<$Item>;
        static CROPS_CARROT: $TagKey<$Item>;
        static STORAGE_BLOCKS_LAPIS: $TagKey<$Item>;
        static DYED_PURPLE: $TagKey<$Item>;
        static STORAGE_BLOCKS_REDSTONE: $TagKey<$Item>;
        static SANDSTONE_UNCOLORED_BLOCKS: $TagKey<$Item>;
        static DYES_MAGENTA: $TagKey<$Item>;
        static BUCKETS_EMPTY: $TagKey<$Item>;
        static RANGED_WEAPON_TOOLS: $TagKey<$Item>;
        static BRICKS_NORMAL: $TagKey<$Item>;
        static SEEDS_MELON: $TagKey<$Item>;
        static STORAGE_BLOCKS: $TagKey<$Item>;
        static COBBLESTONES_INFESTED: $TagKey<$Item>;
        static SANDS_COLORLESS: $TagKey<$Item>;
        static FOODS_BERRY: $TagKey<$Item>;
        static GEMS_AMETHYST: $TagKey<$Item>;
        static BRICKS_NETHER: $TagKey<$Item>;
        static OBSIDIANS_CRYING: $TagKey<$Item>;
        static TOOLS_BOW: $TagKey<$Item>;
        static TOOLS_WRENCH: $TagKey<$Item>;
        static DYES_CYAN: $TagKey<$Item>;
        static CROPS_POTATO: $TagKey<$Item>;
        static FOODS_BREAD: $TagKey<$Item>;
        static MINING_TOOL_TOOLS: $TagKey<$Item>;
        static TOOLS_SHIELD: $TagKey<$Item>;
        static FOODS_EDIBLE_WHEN_PLACED: $TagKey<$Item>;
        static STORAGE_BLOCKS_GOLD: $TagKey<$Item>;
        static LOOM_PATTERNS: $TagKey<$Item>;
        static DRINKS_MAGIC: $TagKey<$Item>;
        static FERTILIZERS: $TagKey<$Item>;
        static STORAGE_BLOCKS_RAW_GOLD: $TagKey<$Item>;
        static FEATHERS: $TagKey<$Item>;
        static STORAGE_BLOCKS_DRIED_KELP: $TagKey<$Item>;
        static TOOLS: $TagKey<$Item>;
        static NUGGETS_GOLD: $TagKey<$Item>;
        static FENCE_GATES_WOODEN: $TagKey<$Item>;
        static FOODS_CANDY: $TagKey<$Item>;
        static ENCHANTING_FUELS: $TagKey<$Item>;
        static BUCKETS: $TagKey<$Item>;
        static SEEDS_TORCHFLOWER: $TagKey<$Item>;
        static DYES_BLUE: $TagKey<$Item>;
        static ORES_COPPER: $TagKey<$Item>;
        static PUMPKINS_CARVED: $TagKey<$Item>;
        static FOODS_SOUP: $TagKey<$Item>;
        static RAW_MATERIALS_GOLD: $TagKey<$Item>;
        static ORE_RATES_DENSE: $TagKey<$Item>;
        static BARRELS: $TagKey<$Item>;
        static DYES_GRAY: $TagKey<$Item>;
        static TOOLS_BRUSH: $TagKey<$Item>;
        static GLASS_PANES_COLORLESS: $TagKey<$Item>;
        static FOODS_RAW_MEAT: $TagKey<$Item>;
        static ORES_IN_GROUND_STONE: $TagKey<$Item>;
        static RODS: $TagKey<$Item>;
        static SEEDS_WHEAT: $TagKey<$Item>;
        static DYED_LIME: $TagKey<$Item>;
        static GLASS_BLOCKS_TINTED: $TagKey<$Item>;
        static FOODS_COOKED_FISH: $TagKey<$Item>;
        static PLAYER_WORKSTATIONS_FURNACES: $TagKey<$Item>;
        static GRAVELS: $TagKey<$Item>;
        static DYED_ORANGE: $TagKey<$Item>;
        static CLUSTERS: $TagKey<$Item>;
        static CHAINS: $TagKey<$Item>;
        static RAW_MATERIALS_COPPER: $TagKey<$Item>;
        static BUCKETS_WATER: $TagKey<$Item>;
        static STRIPPED_WOODS: $TagKey<$Item>;
        static CROPS_WHEAT: $TagKey<$Item>;
        static SLIME_BALLS: $TagKey<$Item>;
        static ENCHANTABLES: $TagKey<$Item>;
        static FOODS_GOLDEN: $TagKey<$Item>;
        static BONES: $TagKey<$Item>;
        static ORES_QUARTZ: $TagKey<$Item>;
        static DYES_YELLOW: $TagKey<$Item>;
        static SANDS_RED: $TagKey<$Item>;
        static BUCKETS_MILK: $TagKey<$Item>;
        static SANDSTONE_UNCOLORED_STAIRS: $TagKey<$Item>;
        static DYED_BLACK: $TagKey<$Item>;
        static DYED: $TagKey<$Item>;
        static ORES_DIAMOND: $TagKey<$Item>;
        static ORES_IN_GROUND_DEEPSLATE: $TagKey<$Item>;
        static SANDSTONE_BLOCKS: $TagKey<$Item>;
        static STORAGE_BLOCKS_RAW_COPPER: $TagKey<$Item>;
        static STRIPPED_LOGS: $TagKey<$Item>;
        static CHESTS_ENDER: $TagKey<$Item>;
        static FOODS_FOOD_POISONING: $TagKey<$Item>;
        static COBBLESTONES_DEEPSLATE: $TagKey<$Item>;
        static CONCRETES: $TagKey<$Item>;
        static GEMS_EMERALD: $TagKey<$Item>;
        static CHESTS_WOODEN: $TagKey<$Item>;
        static HIDDEN_FROM_RECIPE_VIEWERS: $TagKey<$Item>;
        static STORAGE_BLOCKS_EMERALD: $TagKey<$Item>;
        static MELEE_WEAPON_TOOLS: $TagKey<$Item>;
        static ORES: $TagKey<$Item>;
        static TOOLS_MACE: $TagKey<$Item>;
        static ORE_BEARING_GROUND_DEEPSLATE: $TagKey<$Item>;
        static CHESTS: $TagKey<$Item>;
        static LEATHERS: $TagKey<$Item>;
        constructor();
    }
    export class $ModConfigSpec$Range<V extends $Comparable<V>> implements $Predicate<$Object> {
        getClazz(): $Class<V>;
        test(t: $Object): boolean;
        static of(arg0: number, arg1: number): $ModConfigSpec$Range<number>;
        getMin(): V;
        getMax(): V;
        correct(value: $Object, def: $Object): $Object;
        or(arg0: $Predicate_<$Object>): $Predicate<$Object>;
        negate(): $Predicate<$Object>;
        and(arg0: $Predicate_<$Object>): $Predicate<$Object>;
        get clazz(): $Class<V>;
        get min(): V;
        get max(): V;
    }
    export class $DeferredSpawnEggItem extends $SpawnEggItem {
        static deferredOnlyById(type: $EntityType_<never>): $SpawnEggItem;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static BY_ID: $Map<$EntityType<$Mob>, $SpawnEggItem>;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        defaultType: $EntityType<never>;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Supplier_<$EntityType<$Mob>>, arg1: number, arg2: number, arg3: $Item$Properties);
    }
    export class $ModConfigSpec$ConfigValue<T> implements $Supplier<T> {
        get(): T;
        next(): $ModConfigSpec$Builder;
        getDefault(): T;
        set(arg0: T): void;
        save(): void;
        getPath(): $List<string>;
        clearCache(): void;
        getSpec(): $ModConfigSpec$ValueSpec;
        getRaw(): T;
        getRaw(arg0: $Config, arg1: $List_<string>, arg2: $Supplier_<T>): T;
        get default(): T;
        get path(): $List<string>;
        get spec(): $ModConfigSpec$ValueSpec;
    }
    /**
     * An enum value that can be be translated.
     */
    export class $TranslatableEnum {
    }
    export interface $TranslatableEnum {
        /**
         * @return the translated name of this value
         * Defaults to a literal component with the enum name;
         */
        getTranslatedName(): $Component;
        get translatedName(): $Component;
    }
    export class $ModConfigSpec$BooleanValue extends $ModConfigSpec$ConfigValue<boolean> implements $BooleanSupplier {
        isFalse(): boolean;
        getAsBoolean(): boolean;
        isTrue(): boolean;
        get false(): boolean;
        get asBoolean(): boolean;
        get true(): boolean;
    }
    export class $Tags$Structures {
        static HIDDEN_FROM_LOCATOR_SELECTION: $TagKey<$Structure>;
        static HIDDEN_FROM_DISPLAYERS: $TagKey<$Structure>;
        constructor();
    }
    export class $MutableDataComponentHolder {
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
    }
    export interface $MutableDataComponentHolder extends $DataComponentHolder, $MutableDataComponentHolderFunctions {
        update<T>(arg0: $DataComponentType_<T>, arg1: T, arg2: $UnaryOperator_<T>): T;
        update<T>(arg0: $Supplier_<$DataComponentType<T>>, arg1: T, arg2: $UnaryOperator_<T>): T;
        update<T, U>(arg0: $Supplier_<$DataComponentType<T>>, arg1: T, arg2: U, arg3: $BiFunction_<T, U, T>): T;
        update<T, U>(arg0: $DataComponentType_<T>, arg1: T, arg2: U, arg3: $BiFunction_<T, U, T>): T;
        copyFrom(arg0: $DataComponentHolder_, ...arg1: $Supplier_<$DataComponentType<never>>[]): void;
        copyFrom(arg0: $DataComponentHolder_, ...arg1: $DataComponentType_<never>[]): void;
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
    }
    /**
     * This interfaces allows shears (modded & vanilla) and entities (modded & vanilla) to cooperate
     * without needing advance knowledge of each other.
     * 
     * In the future, this system may function for implementations on `Block`s as well.
     * 
     * TODO: Implement support for `Block` or remove default implementations from vanilla block classes.
     */
    export class $IShearable {
    }
    export interface $IShearable {
        /**
         * Checks if this object can be sheared.
         * 
         * For example, Sheep return false when they have no wool.
         */
        isShearable(player: $Player, item: $ItemStack_, level: $Level_, pos: $BlockPos_): boolean;
        /**
         * Shears this object. This function is called on both sides, and is responsible for performing any and all actions that happen when sheared, except spawning drops.
         * 
         * Drops that are spawned as a result of being sheared should be returned from this method, and will be spawned on the server using `#spawnShearedDrop`.
         * 
         * Entities may respect their internal position values instead of relying on the `pos` parameter.
         */
        onSheared(player: $Player, item: $ItemStack_, level: $Level_, pos: $BlockPos_): $List<$ItemStack>;
        /**
         * Performs the logic used to drop a shear result into the world at the correct position and with the proper movement.
         * 
         * Entities may respect their internal position values instead of relying on the `pos` parameter.
         */
        spawnShearedDrop(level: $Level_, pos: $BlockPos_, drop: $ItemStack_): void;
    }
    /**
     * Note, fluid tags should not be plural to match the vanilla standard.
     * This is the only tag category exempted from many-different-types plural rule.
     */
    export class $Tags$Fluids {
        static HONEY: $TagKey<$Fluid>;
        static RABBIT_STEW: $TagKey<$Fluid>;
        static BEETROOT_SOUP: $TagKey<$Fluid>;
        static LAVA: $TagKey<$Fluid>;
        static MUSHROOM_STEW: $TagKey<$Fluid>;
        static GASEOUS: $TagKey<$Fluid>;
        static POTION: $TagKey<$Fluid>;
        static EXPERIENCE: $TagKey<$Fluid>;
        static HIDDEN_FROM_RECIPE_VIEWERS: $TagKey<$Fluid>;
        static SUSPICIOUS_STEW: $TagKey<$Fluid>;
        static WATER: $TagKey<$Fluid>;
        static MILK: $TagKey<$Fluid>;
        constructor();
    }
    /**
     * NeoForge's own configuration.
     */
    export class $NeoForgeConfig {
        static onFileChange(configEvent: $ModConfigEvent$Reloading): void;
        static onLoad(configEvent: $ModConfigEvent$Loading): void;
        static SERVER: $NeoForgeConfig$Server;
        static COMMON: $NeoForgeConfig$Common;
        static CLIENT: $NeoForgeConfig$Client;
        constructor();
    }
    /**
     * Caches player's last known usernames
     * 
     * Modders should use `#getLastKnownUsername(UUID)` to determine a players
     * last known username.
     * 
     * For convenience, `#getMap()` is provided to get an immutable copy of
     * the caches underlying map.
     */
    export class $UsernameCache {
        /**
         * Get the player's last known username
         * 
         * **May be `null`**
         */
        static getLastKnownUsername(uuid: $UUID_): string;
        /**
         * Check if the cache contains the given player's username
         */
        static containsUUID(uuid: $UUID_): boolean;
        /**
         * Get an immutable copy of the cache's underlying map
         */
        static getMap(): $Map<$UUID, string>;
        static get map(): $Map<$UUID, string>;
    }
    /**
     * Defines a cure that is used to remove `MobEffect`s from a `LivingEntity`.
     * Cures can be added to or removed from your own effects via `MobEffect#fillEffectCures(Set, MobEffectInstance)`
     * or any effect by modifying the set of cures on the `MobEffectInstance` in `Added`
     */
    export class $EffectCure {
        /**
         * @return all registered cures
         * This collection can be kept around, and will update itself in response to changes to the map.
         * See `ConcurrentHashMap#values()` for details.
         */
        static getAllCures(): $Collection<$EffectCure>;
        /**
         * @return the name of this cure
         */
        name(): string;
        /**
         * Gets or creates a new EffectCure for the given name.
         */
        static get(name: string): $EffectCure;
        static CODEC: $Codec<$EffectCure>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $EffectCure>;
        static get allCures(): $Collection<$EffectCure>;
    }
}
