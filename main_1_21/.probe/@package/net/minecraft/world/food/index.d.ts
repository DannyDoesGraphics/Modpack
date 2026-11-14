import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $InjectedFoodPropertiesBuilderExtension } from "@package/dev/architectury/extensions/injected";
import { $MobEffectInstance } from "@package/net/minecraft/world/effect";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/food" {
    export class $Foods {
        static ROTTEN_FLESH: $FoodProperties;
        static APPLE: $FoodProperties;
        static BAKED_POTATO: $FoodProperties;
        static GOLDEN_APPLE: $FoodProperties;
        static ENCHANTED_GOLDEN_APPLE: $FoodProperties;
        static SPIDER_EYE: $FoodProperties;
        static GLOW_BERRIES: $FoodProperties;
        static CARROT: $FoodProperties;
        static TROPICAL_FISH: $FoodProperties;
        static BREAD: $FoodProperties;
        static BEETROOT_SOUP: $FoodProperties;
        static CHICKEN: $FoodProperties;
        static COD: $FoodProperties;
        static MELON_SLICE: $FoodProperties;
        static POISONOUS_POTATO: $FoodProperties;
        static SUSPICIOUS_STEW: $FoodProperties;
        static HONEY_BOTTLE: $FoodProperties;
        static PUFFERFISH: $FoodProperties;
        static RABBIT_STEW: $FoodProperties;
        static POTATO: $FoodProperties;
        static COOKED_CHICKEN: $FoodProperties;
        static GOLDEN_CARROT: $FoodProperties;
        static PORKCHOP: $FoodProperties;
        static COOKED_PORKCHOP: $FoodProperties;
        static COOKED_COD: $FoodProperties;
        static COOKED_BEEF: $FoodProperties;
        static BEETROOT: $FoodProperties;
        static COOKED_RABBIT: $FoodProperties;
        static MUSHROOM_STEW: $FoodProperties;
        static SWEET_BERRIES: $FoodProperties;
        static COOKIE: $FoodProperties;
        static CHORUS_FRUIT: $FoodProperties;
        static SALMON: $FoodProperties;
        static COOKED_SALMON: $FoodProperties;
        static RABBIT: $FoodProperties;
        static BEEF: $FoodProperties;
        static DRIED_KELP: $FoodProperties;
        static MUTTON: $FoodProperties;
        static OMINOUS_BOTTLE: $FoodProperties;
        static COOKED_MUTTON: $FoodProperties;
        static PUMPKIN_PIE: $FoodProperties;
        constructor();
    }
    export class $FoodConstants {
        static saturationByModifier(foodLevel: number, saturationModifier: number): number;
        static EXHAUSTION_WALK: number;
        static HEAL_LEVEL: number;
        static FOOD_SATURATION_LOW: number;
        static START_SATURATION: number;
        static EXHAUSTION_CROUCH: number;
        static MAX_FOOD: number;
        static EXHAUSTION_SWIM: number;
        static EXHAUSTION_MINE: number;
        static FOOD_SATURATION_POOR: number;
        static SPRINT_LEVEL: number;
        static FOOD_SATURATION_MAX: number;
        static HEALTH_TICK_COUNT_SATURATED: number;
        static EXHAUSTION_SPRINT_JUMP: number;
        static SATURATION_FLOOR: number;
        static FOOD_SATURATION_SUPERNATURAL: number;
        static EXHAUSTION_HEAL: number;
        static EXHAUSTION_JUMP: number;
        static EXHAUSTION_ATTACK: number;
        static EXHAUSTION_DROP: number;
        static FOOD_SATURATION_GOOD: number;
        static STARVE_LEVEL: number;
        static HEALTH_TICK_COUNT: number;
        static EXHAUSTION_SPRINT: number;
        static MAX_SATURATION: number;
        static FOOD_SATURATION_NORMAL: number;
        constructor();
    }
    export class $FoodData {
        /**
         * Get the player's food level.
         */
        getLastFoodLevel(): number;
        /**
         * Get the player's food saturation level.
         */
        getExhaustionLevel(): number;
        /**
         * Adds input to `foodExhaustionLevel` to a max of 40.
         */
        setExhaustion(exhaustion: number): void;
        /**
         * Handles the food game logic.
         */
        tick(player: $Player): void;
        /**
         * Writes the food data for the player.
         */
        addAdditionalSaveData(compoundTag: $CompoundTag_): void;
        /**
         * Writes the food data for the player.
         */
        readAdditionalSaveData(compoundTag: $CompoundTag_): void;
        /**
         * Get the player's food saturation level.
         */
        getSaturationLevel(): number;
        /**
         * Adds input to `foodExhaustionLevel` to a max of 40.
         */
        setSaturation(exhaustion: number): void;
        /**
         * Get whether the player must eat food.
         */
        needsFood(): boolean;
        /**
         * Get the player's food level.
         */
        getFoodLevel(): number;
        setFoodLevel(foodLevel: number): void;
        /**
         * Adds input to `foodExhaustionLevel` to a max of 40.
         */
        addExhaustion(exhaustion: number): void;
        eat(foodLevel: number, saturationLevel: number): void;
        eat(foodProperties: $FoodProperties_): void;
        constructor();
        get lastFoodLevel(): number;
        get exhaustionLevel(): number;
        set exhaustion(value: number);
        get saturationLevel(): number;
        set saturation(value: number);
    }
    export class $FoodProperties extends $Record {
        eatSeconds(): number;
        eatDurationTicks(): number;
        canAlwaysEat(): boolean;
        nutrition(): number;
        saturation(): number;
        effects(): $List<$FoodProperties$PossibleEffect>;
        usingConvertsTo(): ($ItemStack) | undefined;
        static DIRECT_CODEC: $Codec<$FoodProperties>;
        static DIRECT_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FoodProperties>;
        constructor(nutrition: number, saturation: number, canAlwaysEat: boolean, eatSeconds: number, usingConvertsTo: ($ItemStack_) | undefined, effects: $List_<$FoodProperties$PossibleEffect_>);
    }
    /**
     * Values that may be interpreted as {@link $FoodProperties}.
     */
    export type $FoodProperties_ = { canAlwaysEat?: boolean, usingConvertsTo?: ($ItemStack_) | undefined, eatSeconds?: number, effects?: $List_<$FoodProperties$PossibleEffect_>, saturation?: number, nutrition?: number,  } | [canAlwaysEat?: boolean, usingConvertsTo?: ($ItemStack_) | undefined, eatSeconds?: number, effects?: $List_<$FoodProperties$PossibleEffect_>, saturation?: number, nutrition?: number, ];
    export class $FoodProperties$PossibleEffect extends $Record {
        effectSupplier(): $Supplier<$MobEffectInstance>;
        effect(): $MobEffectInstance;
        probability(): number;
        static CODEC: $Codec<$FoodProperties$PossibleEffect>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FoodProperties$PossibleEffect>;
        constructor(effectSupplier: $Supplier_<$MobEffectInstance>, probability: number);
    }
    /**
     * Values that may be interpreted as {@link $FoodProperties$PossibleEffect}.
     */
    export type $FoodProperties$PossibleEffect_ = { effectSupplier?: $Supplier_<$MobEffectInstance>, probability?: number,  } | [effectSupplier?: $Supplier_<$MobEffectInstance>, probability?: number, ];
    export class $FoodProperties$Builder implements $InjectedFoodPropertiesBuilderExtension {
        nutrition(nutrition: number): $FoodProperties$Builder;
        saturationModifier(saturationModifier: number): $FoodProperties$Builder;
        alwaysEdible(): $FoodProperties$Builder;
        fast(): $FoodProperties$Builder;
        build(): $FoodProperties;
        /**
         * @deprecated
         */
        effect(effect: $MobEffectInstance, probability: number): $FoodProperties$Builder;
        effect(arg0: $Supplier_<$MobEffectInstance>, arg1: number): $FoodProperties$Builder;
        usingConvertsTo(item: $ItemLike_): $FoodProperties$Builder;
        arch$effect(effectSupplier: $Supplier_<$MobEffectInstance>, chance: number): $FoodProperties$Builder;
        constructor();
    }
}
