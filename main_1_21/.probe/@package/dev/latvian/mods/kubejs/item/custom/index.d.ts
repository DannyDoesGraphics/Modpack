import { $Consumer_, $BiFunction, $BiFunction_ } from "@package/java/util/function";
import { $Holder_, $Registry } from "@package/net/minecraft/core";
import { $ArmorItem$Type, $ArmorMaterial, $Item$Properties, $Tier_, $Item, $ItemStack_, $Tier, $DiggerItem, $AnimalArmorItem$BodyType_ } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record, $Object } from "@package/java/lang";
import { $List, $Map_, $Map } from "@package/java/util";
import { $KubeStartupEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $MutableToolTier, $ItemBuilder } from "@package/dev/latvian/mods/kubejs/item";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";

declare module "@package/dev/latvian/mods/kubejs/item/custom" {
    export class $ItemToolTierRegistryKubeEvent extends $Record implements $KubeStartupEvent {
        addBasedOnExisting(id: string, existing: string, tier: $Consumer_<$MutableToolTier>): void;
        addExisting(id: string, tier: $Tier_): void;
        tiers(): $Map<string, $Tier>;
        /**
         * Adds a new tool tier.
         */
        add(id: string, tier: $Consumer_<$MutableToolTier>): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(tiers: $Map_<string, $Tier_>);
    }
    /**
     * Values that may be interpreted as {@link $ItemToolTierRegistryKubeEvent}.
     */
    export type $ItemToolTierRegistryKubeEvent_ = { tiers?: $Map_<string, $Tier_>,  } | [tiers?: $Map_<string, $Tier_>, ];
    export class $ShearsItemBuilder extends $ItemBuilder {
        speedBaseline(f: number): this;
        static isCustomShears(stack: $ItemStack_): boolean;
        sourceLine: $SourceLine;
        static SHEAR_TAGS: $ResourceLocation[];
        id: $ResourceLocation;
        registryKey: $ResourceKey<$Registry<$Item>>;
        constructor(i: $ResourceLocation_);
    }
    export class $ArmorItemBuilder$Leggings extends $ArmorItemBuilder {
        armorType: $ArmorItem$Type;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        static LEGGING_TAGS: $ResourceLocation[];
        registryKey: $ResourceKey<$Registry<$Item>>;
        constructor(id: $ResourceLocation_);
    }
    export class $DiggerItemBuilder$Shovel extends $DiggerItemBuilder {
        static SHOVEL_TAGS: $ResourceLocation[];
        sourceLine: $SourceLine;
        "function": $BiFunction<$Tier, $Item$Properties, $DiggerItem>;
        id: $ResourceLocation;
        registryKey: $ResourceKey<$Registry<$Item>>;
        static SHOVEL_MODEL: $ResourceLocation;
        constructor(i: $ResourceLocation_);
    }
    export class $DiggerItemBuilder extends $HandheldItemBuilder {
        sourceLine: $SourceLine;
        "function": $BiFunction<$Tier, $Item$Properties, $DiggerItem>;
        id: $ResourceLocation;
        registryKey: $ResourceKey<$Registry<$Item>>;
        constructor(i: $ResourceLocation_, d: number, s: number, f: $BiFunction_<$Tier, $Item$Properties, $DiggerItem>);
    }
    export class $SmithingTemplateItemBuilder extends $ItemBuilder {
        /**
         * Adds the specified texture location to the list of ingredient slot icons that the smithing table cycles through when this smithing template is put in
         */
        addIngredientsSlotIcon(location: $ResourceLocation_): this;
        /**
         * Adds the specified texture location to the list of base slot icons that the smithing table cycles through when this smithing template is put in.
         */
        addAppliesToSlotIcon(location: $ResourceLocation_): this;
        /**
         * Sets the description text that shows when you hover over the base item slot when this item is put in smithing table as a template.
         * Using 'Add a piece of armor' or 'Add diamond armor, weapon, or tool' will use the vanilla language keys so it is translated into other languages automatically.
         * 
         * If you wish to apply non standard formatting (like change the colour) set the `appliesToSlotDescriptionText` field.
         */
        appliesToSlotDescription(text: string): this;
        /**
         * Sets the description text that shows when you hover over the ingredient slot when this item is put in smithing table as a template.
         * Using 'Add ingot or crystal' or 'Add Netherite Ingot' will use the vanilla language keys so it is translated into other languages automatically.
         * 
         * If you wish to apply non standard formatting (like change the colour) set the `ingredientSlotDescriptionText` field.
         */
        ingredientsSlotDescription(text: string): this;
        /**
         * Adds all armor icons to the list of base slot icons that the smithing table cycles through when this smithing template is put in
         */
        armorIcons(): this;
        /**
         * Adds all armor and basic tool icons to the list of base slot icons that the smithing table cycles through when this smithing template is put in
         */
        equipmentIcons(): this;
        /**
         * Adds all basic tool icons to the list of base slot icons that the smithing table cycles through when this smithing template is put in
         */
        toolIcons(): this;
        /**
         * Adds an ingot, dust, diamond, emerald, quartz, lapis lazuli and amethyst shard icons to the list of ingredient slot icons that the smithing table cycles through when this smithing template is put in
         */
        ingotAndCrystalIcons(): this;
        /**
         * Adds a dust, diamond, emerald, quartz, lapis lazuli and amethyst shard icons to the list of ingredient slot icons that the smithing table cycles through when this smithing template is put in
         */
        crystalIcons(): this;
        /**
         * Adds an ingot to the list of ingredient slot icons that the smithing table cycles through when this smithing template is put in
         */
        ingotIcon(): this;
        /**
         * Adds a dust to the list of ingredient slot icons that the smithing table cycles through when this smithing template is put in
         */
        dustIcon(): this;
        /**
         * Adds an amethyst shard to the list of ingredient slot icons that the smithing table cycles through when this smithing template is put in
         */
        shardIcon(): this;
        /**
         * Adds a diamond to the list of ingredient slot icons that the smithing table cycles through when this smithing template is put in
         */
        diamondIcon(): this;
        /**
         * Adds an emerald to the list of ingredient slot icons that the smithing table cycles through when this smithing template is put in
         */
        emeraldIcon(): this;
        /**
         * Adds a quartz to the list of ingredient slot icons that the smithing table cycles through when this smithing template is put in
         */
        quartzIcon(): this;
        /**
         * Adds a lapis lazuli to the list of ingredient slot icons that the smithing table cycles through when this smithing template is put in
         */
        lapisIcon(): this;
        /**
         * Adds a sword to the list of base item slot icons that the smithing table cycles through when this smithing template is put in
         */
        swordIcon(): this;
        /**
         * Adds a shovel to the list of base item slot icons that the smithing table cycles through when this smithing template is put in
         */
        shovelIcon(): this;
        /**
         * Adds a axe to the list of base item slot icons that the smithing table cycles through when this smithing template is put in
         */
        axeIcon(): this;
        /**
         * Adds a pickaxe to the list of base item slot icons that the smithing table cycles through when this smithing template is put in
         */
        pickaxeIcon(): this;
        /**
         * Adds a hoe to the list of base item slot icons that the smithing table cycles through when this smithing template is put in
         */
        hoeIcon(): this;
        /**
         * Adds a helmet to the list of base item slot icons that the smithing table cycles through when this smithing template is put in
         */
        helmetIcon(): this;
        /**
         * Adds a chestplate to the list of base item slot icons that the smithing table cycles through when this smithing template is put in
         */
        chestplateIcon(): this;
        /**
         * Adds leggings to the list of base item slot icons that the smithing table cycles through when this smithing template is put in
         */
        leggingsIcon(): this;
        /**
         * Adds boots to the list of base item slot icons that the smithing table cycles through when this smithing template is put in
         */
        bootsIcon(): this;
        /**
         * Sets the description text that shows in the item tooltip to describe what it can be applied to.
         * Using 'Armor' or 'Diamond Equipment' will use the vanilla language keys so it is translated into other languages automatically.
         * THIS IS PURELY VISUAL
         * 
         * If you wish to apply non standard formatting (like change the colour) set the `ingredientsText` field.
         */
        appliesTo(text: string): this;
        /**
         * Sets the description text that shows in the item tooltip to describe what ingredients can be added.
         * Using 'Ingots & Crystals' or 'Netherite Ingot' will use the vanilla language keys so it is translated into other languages automatically.
         * THIS IS PURELY VISUAL
         * 
         * If you wish to apply non standard formatting (like change the colour) set the `ingredientsText` field.
         */
        ingredients(text: string): this;
        /**
         * Sets the name for this smithing template.
         * Note that the normal display name for all smithing templates is the same and cannot be changed, this instead sets the name in the tooltip (see vanilla smithing templates for what this looks like).
         * 
         * This will be overridden by a lang file if it exists.
         */
        displayName(name: $Component_): this;
        ingredientsText: $Component;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        appliesToText: $Component;
        ingredientsSlotEmptyIcons: $List<$ResourceLocation>;
        appliesToSlotDescriptionText: $Component;
        appliesToEmptyIcons: $List<$ResourceLocation>;
        registryKey: $ResourceKey<$Registry<$Item>>;
        ingredientSlotDescriptionText: $Component;
        constructor(i: $ResourceLocation_);
    }
    export class $DiggerItemBuilder$Axe extends $DiggerItemBuilder {
        sourceLine: $SourceLine;
        "function": $BiFunction<$Tier, $Item$Properties, $DiggerItem>;
        id: $ResourceLocation;
        static AXE_MODEL: $ResourceLocation;
        registryKey: $ResourceKey<$Registry<$Item>>;
        static AXE_TAGS: $ResourceLocation[];
        constructor(i: $ResourceLocation_);
    }
    export class $ArmorItemBuilder$Helmet extends $ArmorItemBuilder {
        armorType: $ArmorItem$Type;
        sourceLine: $SourceLine;
        static HELMET_TAGS: $ResourceLocation[];
        id: $ResourceLocation;
        registryKey: $ResourceKey<$Registry<$Item>>;
        constructor(id: $ResourceLocation_);
    }
    export class $ArmorItemBuilder$Chestplate extends $ArmorItemBuilder {
        armorType: $ArmorItem$Type;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        registryKey: $ResourceKey<$Registry<$Item>>;
        static CHESTPLATE_TAGS: $ResourceLocation[];
        constructor(id: $ResourceLocation_);
    }
    export class $ArmorItemBuilder$Boots extends $ArmorItemBuilder {
        armorType: $ArmorItem$Type;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        static BOOT_TAGS: $ResourceLocation[];
        registryKey: $ResourceKey<$Registry<$Item>>;
        constructor(id: $ResourceLocation_);
    }
    export class $DiggerItemBuilder$Pickaxe extends $DiggerItemBuilder {
        sourceLine: $SourceLine;
        "function": $BiFunction<$Tier, $Item$Properties, $DiggerItem>;
        static PICKAXE_TAGS: $ResourceLocation[];
        id: $ResourceLocation;
        registryKey: $ResourceKey<$Registry<$Item>>;
        static PICKAXE_MODEL: $ResourceLocation;
        constructor(i: $ResourceLocation_);
    }
    export class $DiggerItemBuilder$Hoe extends $DiggerItemBuilder {
        sourceLine: $SourceLine;
        "function": $BiFunction<$Tier, $Item$Properties, $DiggerItem>;
        static HOE_TAGS: $ResourceLocation[];
        id: $ResourceLocation;
        static HOE_MODEL: $ResourceLocation;
        registryKey: $ResourceKey<$Registry<$Item>>;
        constructor(i: $ResourceLocation_);
    }
    export class $ArmorItemBuilder extends $ItemBuilder {
        material(material: $Holder_<$ArmorMaterial>): this;
        armorType: $ArmorItem$Type;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        registryKey: $ResourceKey<$Registry<$Item>>;
    }
    export class $SwordItemBuilder extends $HandheldItemBuilder {
        static SWORD_TAGS: $ResourceLocation[];
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        static SWORD_MODEL: $ResourceLocation;
        registryKey: $ResourceKey<$Registry<$Item>>;
        constructor(i: $ResourceLocation_);
    }
    export class $HandheldItemBuilder extends $ItemBuilder {
        /**
         * Sets the base attack damage of the tool. Different tools have different baselines.
         * 
         * For example, a sword has a baseline of 3, while an axe has a baseline of 6.
         * 
         * The actual damage is the sum of the baseline and the attackDamageBonus from tier.
         */
        attackDamageBaseline(f: number): this;
        /**
         * Sets the base attack speed of the tool. Different tools have different baselines.
         * 
         * For example, a sword has a baseline of -2.4, while an axe has a baseline of -3.1.
         * 
         * The actual speed is the sum of the baseline and the speed from tier + 4 (bare hand).
         */
        speedBaseline(f: number): this;
        /**
         * Modifies the tool tier.
         */
        modifyTier(callback: $Consumer_<$MutableToolTier>): this;
        /**
         * Sets the attack damage bonus of the tool.
         */
        attackDamageBonus(f: number): this;
        tier(t: $Tier_): this;
        /**
         * Sets the attack speed of the tool.
         */
        speed(f: number): this;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        registryKey: $ResourceKey<$Registry<$Item>>;
        constructor(i: $ResourceLocation_, d: number, s: number);
    }
    export class $ArmorItemBuilder$AnimalArmor extends $ArmorItemBuilder {
        bodyType(type: $AnimalArmorItem$BodyType_): this;
        overlay(o: boolean): this;
        armorType: $ArmorItem$Type;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        registryKey: $ResourceKey<$Registry<$Item>>;
        constructor(id: $ResourceLocation_);
    }
}
