import { $BrewingRecipeRegistryAccessor } from "@package/dev/emi/emi/mixin/accessor";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Ingredient_, $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $Component } from "@package/net/minecraft/network/chat";
import { $MobEffectInstance } from "@package/net/minecraft/world/effect";
import { $PotionBrewingAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $FeatureFlag, $FeatureFlagSet, $FeatureElement } from "@package/net/minecraft/world/flag";
import { $List, $List_, $OptionalInt } from "@package/java/util";
import { $Consumer_ } from "@package/java/util/function";
import { $Holder_, $RegistryAccess, $Registry, $Holder } from "@package/net/minecraft/core";
import { $IBrewingRecipe } from "@package/net/neoforged/neoforge/common/brewing";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Iterable_, $Record, $Iterable } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/item/alchemy" {
    export class $PotionBrewing$Builder {
        addContainerRecipe(input: $Item_, reagent: $Item_, result: $Item_): void;
        addStartMix(reagent: $Item_, result: $Holder_<$Potion>): void;
        addRecipe(arg0: $Ingredient_, arg1: $Ingredient_, arg2: $ItemStack_): void;
        addRecipe(arg0: $IBrewingRecipe): void;
        addMix(input: $Holder_<$Potion>, reagent: $Item_, result: $Holder_<$Potion>): void;
        build(): $PotionBrewing;
        addContainer(container: $Item_): void;
        enabledFeatures: $FeatureFlagSet;
        containerMixes: $List<$PotionBrewing$Mix<$Item>>;
        potionMixes: $List<$PotionBrewing$Mix<$Potion>>;
        constructor(enabledFeatures: $FeatureFlagSet);
    }
    export class $PotionContents extends $Record {
        forEachEffect(action: $Consumer_<$MobEffectInstance>): void;
        addPotionTooltip(tooltipAdder: $Consumer_<$Component>, durationFactor: number, ticksPerSecond: number): void;
        static addPotionTooltip(effects: $Iterable_<$MobEffectInstance>, tooltipAdder: $Consumer_<$Component>, durationFactor: number, ticksPerSecond: number): void;
        customEffects(): $List<$MobEffectInstance>;
        getAllEffects(): $Iterable<$MobEffectInstance>;
        static getColorOptional(effects: $Iterable_<$MobEffectInstance>): $OptionalInt;
        withPotion(potion: $Holder_<$Potion>): $PotionContents;
        hasEffects(): boolean;
        customColor(): (number) | undefined;
        withEffectAdded(effect: $MobEffectInstance): $PotionContents;
        is(potion: $Holder_<$Potion>): boolean;
        static getColor(potion: $Holder_<$Potion>): number;
        getColor(): number;
        static getColor(effects: $Iterable_<$MobEffectInstance>): number;
        static createItemStack(item: $Item_, potion: $Holder_<$Potion>): $ItemStack;
        potion(): ($Holder<$Potion>) | undefined;
        static CODEC: $Codec<$PotionContents>;
        static EMPTY: $PotionContents;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PotionContents>;
        constructor(potion: $Holder_<$Potion>);
        constructor(potion: ($Holder_<$Potion>) | undefined, customColor: (number) | undefined, customEffects: $List_<$MobEffectInstance>);
        get allEffects(): $Iterable<$MobEffectInstance>;
    }
    /**
     * Values that may be interpreted as {@link $PotionContents}.
     */
    export type $PotionContents_ = { potion?: ($Holder_<$Potion>) | undefined, customColor?: (number) | undefined, customEffects?: $List_<$MobEffectInstance>,  } | [potion?: ($Holder_<$Potion>) | undefined, customColor?: (number) | undefined, customEffects?: $List_<$MobEffectInstance>, ];
    /**
     * Defines all of the potion types registered by Minecraft itself.
     * @see net.minecraft.core.Registry#POTION
     */
    export class $Potions {
        static bootstrap(registry: $Registry<$Potion_>): $Holder<$Potion>;
        static SLOWNESS: $Holder<$Potion>;
        static INVISIBILITY: $Holder<$Potion>;
        static STRONG_REGENERATION: $Holder<$Potion>;
        static SLOW_FALLING: $Holder<$Potion>;
        static STRONG_SWIFTNESS: $Holder<$Potion>;
        static LONG_WATER_BREATHING: $Holder<$Potion>;
        static LEAPING: $Holder<$Potion>;
        static WEAKNESS: $Holder<$Potion>;
        static LONG_NIGHT_VISION: $Holder<$Potion>;
        static LUCK: $Holder<$Potion>;
        static FIRE_RESISTANCE: $Holder<$Potion>;
        static LONG_SLOW_FALLING: $Holder<$Potion>;
        static WIND_CHARGED: $Holder<$Potion>;
        static LONG_FIRE_RESISTANCE: $Holder<$Potion>;
        static WATER_BREATHING: $Holder<$Potion>;
        static OOZING: $Holder<$Potion>;
        static LONG_LEAPING: $Holder<$Potion>;
        static STRONG_TURTLE_MASTER: $Holder<$Potion>;
        static LONG_WEAKNESS: $Holder<$Potion>;
        static HARMING: $Holder<$Potion>;
        static STRONG_POISON: $Holder<$Potion>;
        static SWIFTNESS: $Holder<$Potion>;
        static WATER: $Holder<$Potion>;
        static LONG_POISON: $Holder<$Potion>;
        static TURTLE_MASTER: $Holder<$Potion>;
        static AWKWARD: $Holder<$Potion>;
        static REGENERATION: $Holder<$Potion>;
        static INFESTED: $Holder<$Potion>;
        static WEAVING: $Holder<$Potion>;
        static STRENGTH: $Holder<$Potion>;
        static MUNDANE: $Holder<$Potion>;
        static HEALING: $Holder<$Potion>;
        static LONG_SWIFTNESS: $Holder<$Potion>;
        static STRONG_LEAPING: $Holder<$Potion>;
        static STRONG_HEALING: $Holder<$Potion>;
        static LONG_STRENGTH: $Holder<$Potion>;
        static LONG_REGENERATION: $Holder<$Potion>;
        static POISON: $Holder<$Potion>;
        static STRONG_HARMING: $Holder<$Potion>;
        static STRONG_STRENGTH: $Holder<$Potion>;
        static LONG_SLOWNESS: $Holder<$Potion>;
        static LONG_TURTLE_MASTER: $Holder<$Potion>;
        static THICK: $Holder<$Potion>;
        static NIGHT_VISION: $Holder<$Potion>;
        static STRONG_SLOWNESS: $Holder<$Potion>;
        static LONG_INVISIBILITY: $Holder<$Potion>;
        constructor();
    }
    export class $PotionBrewing implements $BrewingRecipeRegistryAccessor, $PotionBrewingAccessor {
        hasPotionMix(reagent: $ItemStack_, potionItem: $ItemStack_): boolean;
        static addVanillaMixes(builder: $PotionBrewing$Builder): void;
        isContainerIngredient(stack: $ItemStack_): boolean;
        isPotionIngredient(stack: $ItemStack_): boolean;
        hasContainerMix(reagent: $ItemStack_, potionItem: $ItemStack_): boolean;
        getRecipes(): $List<$IBrewingRecipe>;
        isIngredient(stack: $ItemStack_): boolean;
        hasMix(reagent: $ItemStack_, potionItem: $ItemStack_): boolean;
        isInput(stack: $ItemStack_): boolean;
        isBrewablePotion(potion: $Holder_<$Potion>): boolean;
        static bootstrap(arg0: $FeatureFlagSet, arg1: $RegistryAccess): $PotionBrewing;
        /**
         * @deprecated
         */
        static bootstrap(enabledFeatures: $FeatureFlagSet): $PotionBrewing;
        mix(potion: $ItemStack_, potionItem: $ItemStack_): $ItemStack;
        create$getPotionMixes(): $List<$PotionBrewing$Mix<$Potion>>;
        create$getContainerMixes(): $List<$PotionBrewing$Mix<$Item>>;
        create$isContainer(stack: $ItemStack_): boolean;
        getPotionTypes(): $List<$Ingredient>;
        getPotionRecipes(): $List<$PotionBrewing$Mix<$Potion>>;
        getItemRecipes(): $List<$PotionBrewing$Mix<$Item>>;
        containerMixes: $List<$PotionBrewing$Mix<$Item>>;
        containers: $List<$Ingredient>;
        static BREWING_TIME_SECONDS: number;
        potionMixes: $List<$PotionBrewing$Mix<$Potion>>;
        static EMPTY: $PotionBrewing;
        get recipes(): $List<$IBrewingRecipe>;
        get potionTypes(): $List<$Ingredient>;
        get potionRecipes(): $List<$PotionBrewing$Mix<$Potion>>;
        get itemRecipes(): $List<$PotionBrewing$Mix<$Item>>;
    }
    export class $PotionBrewing$Mix<T> extends $Record {
        ingredient(): $Ingredient;
        from(): $Holder<T>;
        to(): $Holder<T>;
        constructor(from: $Holder_<T>, ingredient: $Ingredient_, to: $Holder_<T>);
    }
    /**
     * Values that may be interpreted as {@link $PotionBrewing$Mix}.
     */
    export type $PotionBrewing$Mix_<T> = { ingredient?: $Ingredient_, to?: $Holder_<any>, from?: $Holder_<any>,  } | [ingredient?: $Ingredient_, to?: $Holder_<any>, from?: $Holder_<any>, ];
    export interface $Potion extends RegistryMarked<RegistryTypes.PotionTag, RegistryTypes.Potion> {}
    /**
     * Defines a type of potion in the game. These are used to associate one or more effects with items such as the bottled potion or the tipped arrows.
     */
    export class $Potion implements $FeatureElement {
        /**
         * Checks if the potion contains any instant effects such as instant health or instant damage.
         * @return Whether the potion contained an instant effect.
         */
        hasInstantEffects(): boolean;
        static getName(potion: ($Holder_<$Potion>) | undefined, descriptionId: string): string;
        requiredFeatures(): $FeatureFlagSet;
        requiredFeatures(...requiredFeatures: $FeatureFlag[]): $Potion;
        /**
         * Gets the base effects applied by the potion.
         * @return The effects applied by the potion.
         */
        getEffects(): $List<$MobEffectInstance>;
        isEnabled(enabledFeatures: $FeatureFlagSet): boolean;
        static CODEC: $Codec<$Holder<$Potion>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$Potion>>;
        constructor(...effects: $MobEffectInstance[]);
        constructor(name: string | null, ...effects: $MobEffectInstance[]);
        get effects(): $List<$MobEffectInstance>;
    }
    /**
     * Values that may be interpreted as {@link $Potion}.
     */
    export type $Potion_ = RegistryTypes.Potion;
}
