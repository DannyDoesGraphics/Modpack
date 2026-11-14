import { $HoeItemAccessor, $ShovelItemAccessor, $AxeItemAccessor } from "@package/dev/emi/emi/mixin/accessor";
import { $AdditionalItemPlacement } from "@package/net/mehvahdjukaar/moonlight/api/item/additional_placements";
import { $Ingredient, $Ingredient_, $RecipeType_ } from "@package/net/minecraft/world/item/crafting";
import { $DataResult, $DynamicOps, $Codec, $Codec_, $MapCodec } from "@package/com/mojang/serialization";
import { $Either, $Pair } from "@package/com/mojang/datafixers/util";
import { $Tag, $CompoundTag, $Tag_, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityType_, $Leashable, $Entity, $EquipmentSlotGroup_, $EquipmentSlot_, $EntityType, $EquipmentSlot, $LivingEntity, $Mob, $SlotAccess } from "@package/net/minecraft/world/entity";
import { $IrisItemLightProvider } from "@package/net/irisshaders/iris/api/v0/item";
import { $ItemPropertiesExtensionImpl } from "@package/dev/architectury/impl";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $IClientItemExtensions } from "@package/net/neoforged/neoforge/client/extensions/common";
import { $FeatureElement, $FeatureFlag, $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $ItemInvoker } from "@package/dev/ryanhcode/sable/mixin/punching";
import { $ItemBuilder, $FoodBuilder, $ItemStackKey } from "@package/dev/latvian/mods/kubejs/item";
import { $AccessorCreativeModeTabs } from "@package/com/railwayteam/railways/mixin";
import { $RandomSource, $StringRepresentable$EnumCodec, $StringRepresentable, $Unit_, $Unit } from "@package/net/minecraft/util";
import { $InteractionResult, $InteractionHand_, $InteractionResultHolder, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";
import { $ChatFormatting } from "@package/net/minecraft";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $IItemPropertiesExtensions, $TooltipFlagExtension, $IItemExtension, $IDispensibleContainerItemExtension, $IItemStackExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { RegistryMarked, RegistryTypes, DataComponentTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $ItemGroupAccessor } from "@package/io/wispforest/owo/mixin/itemgroup";
import { $BucketItemAccessor } from "@package/dev/architectury/mixin/forge/neoforge";
import { $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $ClickAction_, $Slot } from "@package/net/minecraft/world/inventory";
import { $RecipeMatchContext } from "@package/dev/latvian/mods/kubejs/recipe/filter";
import { $DataComponentType, $PatchedDataComponentMap, $DataComponentHolder_, $DataComponentPatch$Builder, $DataComponentHolder, $DataComponentType_, $DataComponentMap, $DataComponentMap_, $DataComponentPatch_, $DataComponentPatch } from "@package/net/minecraft/core/component";
import { $TrimPattern } from "@package/net/minecraft/world/item/armortrim";
import { $ItemAbility_, $MutableDataComponentHolder } from "@package/net/neoforged/neoforge/common";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $BlockInWorld } from "@package/net/minecraft/world/level/block/state/pattern";
import { $MutableComponent, $Component_, $TextColor, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Hash$Strategy } from "@package/it/unimi/dsi/fastutil";
import { $Projectile, $AbstractArrow } from "@package/net/minecraft/world/entity/projectile";
import { $ItemStackAccessor as $ItemStackAccessor$1 } from "@package/io/wispforest/accessories/mixin";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $TooltipFlagExtension as $TooltipFlagExtension$1 } from "@package/dev/simulated_team/simulated/mixin_interface/tooltip_flag";
import { $RecipeScriptContext } from "@package/dev/latvian/mods/kubejs/recipe";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $CreativeModeTabsAccessor } from "@package/com/hlysine/create_connected/mixin/featuretoggle";
import { $InjectedBucketItemExtension, $InjectedItemPropertiesExtension, $InjectedItemExtension } from "@package/dev/architectury/extensions/injected";
import { $TooltipComponent } from "@package/net/minecraft/world/inventory/tooltip";
import { $EnderMan } from "@package/net/minecraft/world/entity/monster";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $ItemStackKJS, $CreativeModeTabKJS, $DiggerItemKJS, $ItemKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $RelativeURL } from "@package/dev/latvian/mods/kubejs/web";
import { $Vec3_, $BlockHitResult, $HitResult, $AABB } from "@package/net/minecraft/world/phys";
import { $AbstractMinecart$Type_, $Boat$Type_, $Boat } from "@package/net/minecraft/world/entity/vehicle";
import { $Vector3f } from "@package/org/joml";
import { $ItemCapability } from "@package/net/neoforged/neoforge/capabilities";
import { $JsonElement } from "@package/com/google/gson";
import { $ItemFTBL } from "@package/dev/ftb/mods/ftblibrary/core";
import { $AttributeModifier_, $Attribute, $AttributeModifier } from "@package/net/minecraft/world/entity/ai/attributes";
import { $DeferredSupplier } from "@package/dev/architectury/registry/registries";
import { $ItemFrame, $HangingEntity, $PaintingVariant_, $PaintingVariant } from "@package/net/minecraft/world/entity/decoration";
import { $UUID_, $Set_, $Map, $OptionalInt, $List, $Map_, $Collection_, $List_, $Collection, $Set } from "@package/java/util";
import { $Supplier_, $UnaryOperator, $BiConsumer_, $UnaryOperator_, $Supplier, $IntFunction, $Consumer_, $Predicate_, $Predicate, $BiConsumer, $Consumer, $Function_, $BiFunction_ } from "@package/java/util/function";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $BlockPos, $GlobalPos, $HolderSet_, $HolderLookup$RegistryLookup, $BlockPos_, $Holder$Reference, $HolderLookup$Provider, $Holder, $Direction_, $Direction, $HolderLookup, $Registry, $Holder_, $Position } from "@package/net/minecraft/core";
import { $OwoItemExtensions } from "@package/io/wispforest/owo/util/pond";
import { $ItemGroupReference_, $OwoItemSettingsExtension, $OwoItemGroup } from "@package/io/wispforest/owo/itemgroup";
import { $EnchantmentInstance, $ItemEnchantments, $Enchantment, $ItemEnchantments_, $Enchantment_ } from "@package/net/minecraft/world/item/enchantment";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $MapId_, $MapItemSavedData } from "@package/net/minecraft/world/level/saveddata/maps";
import { $Enum, $Iterable, $Iterable_, $Record, $Object } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $OwoItem } from "@package/io/wispforest/owo/ext";
import { $ClipContext$Fluid_, $LevelAccessor, $ItemLike_, $Level_, $LevelReader, $ItemLike, $Level } from "@package/net/minecraft/world/level";
import { $TagKey_, $TagKey } from "@package/net/minecraft/tags";
import { $Fluid, $Fluid_, $MapColor } from "@package/net/minecraft/world/level/material";
import { $DispenseItemBehavior, $BlockSource_, $BlockSource } from "@package/net/minecraft/core/dispenser";
import { $ItemAttributeModifiers, $Fireworks_, $Tool_, $ItemAttributeModifiers_, $TooltipProvider, $Tool, $FireworkExplosion_, $ItemAttributeModifiers$Entry_ } from "@package/net/minecraft/world/item/component";
import { $KubeColor, $KubeColor_ } from "@package/dev/latvian/mods/kubejs/color";
import { $BiMap, $Interner } from "@package/com/google/common/collect";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $BlockPredicate_ } from "@package/net/minecraft/advancements/critereon";
import { $IExtendedItem } from "@package/net/mehvahdjukaar/moonlight/core/misc";
import { $FoodProperties_, $FoodProperties } from "@package/net/minecraft/world/food";
import { $PotionContents_, $Potion_, $Potion } from "@package/net/minecraft/world/item/alchemy";
import { $ResourceKey, $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ComponentFunctions } from "@package/dev/latvian/mods/kubejs/component";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $ItemStackAccessor } from "@package/net/caffeinemc/mods/lithium/mixin/util/accessors";
import { $BlockEntityType_, $BannerPattern, $SignBlockEntity, $SignText } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $ChangePublisher, $ChangeSubscriber } from "@package/net/caffeinemc/mods/lithium/common/util/change_tracking";
export * as component from "@package/net/minecraft/world/item/component";
export * as enchantment from "@package/net/minecraft/world/item/enchantment";
export * as crafting from "@package/net/minecraft/world/item/crafting";
export * as armortrim from "@package/net/minecraft/world/item/armortrim";
export * as trading from "@package/net/minecraft/world/item/trading";
export * as context from "@package/net/minecraft/world/item/context";
export * as alchemy from "@package/net/minecraft/world/item/alchemy";

declare module "@package/net/minecraft/world/item" {
    export class $PlaceOnWaterBlockItem extends $BlockItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Block_, arg1: $Item$Properties);
    }
    export class $HangingEntityItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        type: $EntityType<$HangingEntity>;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(type: $EntityType_<$HangingEntity>, properties: $Item$Properties);
    }
    export class $BannerItem extends $StandingAndWallBlockItem {
        static appendHoverTextFromBannerBlockEntityTag(stack: $ItemStack_, tooltipComponents: $List_<$Component_>): void;
        getColor(): $DyeColor;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(block: $Block_, wallBlock: $Block_, properties: $Item$Properties);
        get color(): $DyeColor;
    }
    export class $KnowledgeBookItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
    }
    export class $JukeboxPlayable extends $Record implements $TooltipProvider {
        static tryInsertIntoJukebox(level: $Level_, pos: $BlockPos_, stack: $ItemStack_, player: $Player): $ItemInteractionResult;
        withTooltip(showInTooltip: boolean): $JukeboxPlayable;
        song(): $EitherHolder<$JukeboxSong>;
        addToTooltip(context: $Item$TooltipContext, tooltipAdder: $Consumer_<$Component>, tooltipFlag: $TooltipFlag): void;
        showInTooltip(): boolean;
        static CODEC: $Codec<$JukeboxPlayable>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $JukeboxPlayable>;
        constructor(arg0: $EitherHolder_<$JukeboxSong_>, arg1: boolean);
    }
    /**
     * Values that may be interpreted as {@link $JukeboxPlayable}.
     */
    export type $JukeboxPlayable_ = { showInTooltip?: boolean, song?: $EitherHolder_<$JukeboxSong_>,  } | [showInTooltip?: boolean, song?: $EitherHolder_<$JukeboxSong_>, ];
    export class $ExperienceBottleItem extends $Item implements $ProjectileItem {
        asProjectile(level: $Level_, pos: $Position, stack: $ItemStack_, direction: $Direction_): $Projectile;
        createDispenseConfig(): $ProjectileItem$DispenseConfig;
        shoot(projectile: $Projectile, x: number, arg2: number, y: number, arg4: number, z: number): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
    }
    export class $NameTagItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
    }
    export class $PlayerHeadItem extends $StandingAndWallBlockItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(block: $Block_, wallBlock: $Block_, properties: $Item$Properties);
    }
    export class $ItemUtils {
        static startUsingInstantly(level: $Level_, player: $Player, hand: $InteractionHand_): $InteractionResultHolder<$ItemStack>;
        static onContainerDestroyed(container: $ItemEntity, contents: $Iterable_<$ItemStack>): void;
        static createFilledResult(emptyStack: $ItemStack_, player: $Player, filledStack: $ItemStack_): $ItemStack;
        static createFilledResult(emptyStack: $ItemStack_, player: $Player, filledStack: $ItemStack_, preventDuplicates: boolean): $ItemStack;
        constructor();
    }
    export class $EitherHolder<T> extends $Record {
        static fromEither<T>(either: $Either<$Holder_<T>, $ResourceKey_<T>>): $EitherHolder<T>;
        asEither(): $Either<$Holder<T>, $ResourceKey<T>>;
        static streamCodec<T>(registryKey: $ResourceKey_<$Registry<T>>, streamCodec: $StreamCodec<$RegistryFriendlyByteBuf, $Holder_<T>>): $StreamCodec<$RegistryFriendlyByteBuf, $EitherHolder<T>>;
        key(): $ResourceKey<T>;
        holder(): ($Holder<T>) | undefined;
        unwrap(registries: $HolderLookup$Provider): ($Holder<T>) | undefined;
        unwrap(registry: $Registry<T>): (T) | undefined;
        static codec<T>(registryKey: $ResourceKey_<$Registry<T>>, codec: $Codec_<$Holder_<T>>): $Codec<$EitherHolder<T>>;
        constructor(holder: $Holder_<T>);
        constructor(arg0: ($Holder_<T>) | undefined, arg1: $ResourceKey_<T>);
        constructor(key: $ResourceKey_<T>);
    }
    /**
     * Values that may be interpreted as {@link $EitherHolder}.
     */
    export type $EitherHolder_<T> = { holder?: ($Holder_<T>) | undefined, key?: $ResourceKey_<any>,  } | [holder?: ($Holder_<T>) | undefined, key?: $ResourceKey_<any>, ];
    export class $UseAnim extends $Enum<$UseAnim> {
        static values(): $UseAnim[];
        static valueOf(arg0: string): $UseAnim;
        static BRUSH: $UseAnim;
        static TOOT_HORN: $UseAnim;
        static BLOCK: $UseAnim;
        static CUSTOM: $UseAnim;
        static EAT: $UseAnim;
        static BOW: $UseAnim;
        static NONE: $UseAnim;
        static DRINK: $UseAnim;
        static SPEAR: $UseAnim;
        static CROSSBOW: $UseAnim;
        static SPYGLASS: $UseAnim;
    }
    /**
     * Values that may be interpreted as {@link $UseAnim}.
     */
    export type $UseAnim_ = "none" | "eat" | "drink" | "block" | "bow" | "spear" | "crossbow" | "spyglass" | "toot_horn" | "brush" | "custom";
    export class $TooltipFlag {
        static NORMAL: $TooltipFlag$Default;
        static ADVANCED: $TooltipFlag$Default;
    }
    export interface $TooltipFlag extends $TooltipFlagExtension {
        isAdvanced(): boolean;
        isCreative(): boolean;
        get advanced(): boolean;
        get creative(): boolean;
    }
    export class $ShearsItem extends $Item {
        static createToolProperties(): $Tool;
        modifyReturnValue$elg000$moonlight$m$mineBlock(arg0: boolean, arg1: $BlockState_): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
    }
    export class $MinecartItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(type: $AbstractMinecart$Type_, properties: $Item$Properties);
    }
    export class $ComplexItem extends $Item {
        getUpdatePacket(stack: $ItemStack_, level: $Level_, player: $Player): $Packet<never>;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
    }
    export class $ProjectileItem$DispenseConfig$Builder {
        positionFunction(positionFunction: $ProjectileItem$PositionFunction_): $ProjectileItem$DispenseConfig$Builder;
        uncertainty(power: number): $ProjectileItem$DispenseConfig$Builder;
        overrideDispenseEvent(overrideDispenseEvent: number): $ProjectileItem$DispenseConfig$Builder;
        build(): $ProjectileItem$DispenseConfig;
        power(power: number): $ProjectileItem$DispenseConfig$Builder;
        constructor();
    }
    export class $SaddleItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
    }
    export class $LeadItem extends $Item {
        static bindPlayerMobs(player: $Player, level: $Level_, pos: $BlockPos_): $InteractionResult;
        static leashableInArea(level: $Level_, pos: $BlockPos_, predicate: $Predicate_<$Leashable>): $List<$Leashable>;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
    }
    export class $ThrowablePotionItem extends $PotionItem implements $ProjectileItem {
        asProjectile(level: $Level_, pos: $Position, stack: $ItemStack_, direction: $Direction_): $Projectile;
        createDispenseConfig(): $ProjectileItem$DispenseConfig;
        shoot(projectile: $Projectile, x: number, arg2: number, y: number, arg4: number, z: number): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
    }
    export class $ArmorMaterial extends $Record {
        getDefense(type: $ArmorItem$Type_): number;
        toughness(): number;
        equipSound(): $Holder<$SoundEvent>;
        knockbackResistance(): number;
        enchantmentValue(): number;
        repairIngredient(): $Supplier<$Ingredient>;
        defense(): $Map<$ArmorItem$Type, number>;
        layers(): $List<$ArmorMaterial$Layer>;
        static CODEC: $Codec<$Holder<$ArmorMaterial>>;
        constructor(arg0: $Map_<$ArmorItem$Type_, number>, arg1: number, arg2: $Holder_<$SoundEvent>, arg3: $Supplier_<$Ingredient>, arg4: $List_<$ArmorMaterial$Layer>, arg5: number, arg6: number);
    }
    /**
     * Values that may be interpreted as {@link $ArmorMaterial}.
     */
    export type $ArmorMaterial_ = RegistryTypes.ArmorMaterial | string | { knockbackResistance?: number, repairIngredient?: $Supplier_<$Ingredient>, equipSound?: $Holder_<$SoundEvent>, enchantmentValue?: number, defense?: $Map_<$ArmorItem$Type_, number>, toughness?: number, layers?: $List_<$ArmorMaterial$Layer>,  } | [knockbackResistance?: number, repairIngredient?: $Supplier_<$Ingredient>, equipSound?: $Holder_<$SoundEvent>, enchantmentValue?: number, defense?: $Map_<$ArmorItem$Type_, number>, toughness?: number, layers?: $List_<$ArmorMaterial$Layer>, ];
    export class $Item$TooltipContext {
        static of(registries: $HolderLookup$Provider): $Item$TooltipContext;
        static of(level: $Level_ | null): $Item$TooltipContext;
        static EMPTY: $Item$TooltipContext;
    }
    export interface $Item$TooltipContext {
        mapData(mapId: $MapId_): $MapItemSavedData;
        tickRate(): number;
        level(): $Level;
        registries(): $HolderLookup$Provider;
    }
    export class $TieredItem extends $Item {
        getTier(): $Tier;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        tier: $Tier;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(tier: $Tier_, properties: $Item$Properties);
    }
    export class $BrushItem$DustParticlesDelta extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $BrushItem$DustParticlesDelta}.
     */
    export type $BrushItem$DustParticlesDelta_ = { zd?: number, yd?: number, xd?: number,  } | [zd?: number, yd?: number, xd?: number, ];
    export class $CreativeModeTab$Type extends $Enum<$CreativeModeTab$Type> {
        static values(): $CreativeModeTab$Type[];
        static valueOf(arg0: string): $CreativeModeTab$Type;
        static INVENTORY: $CreativeModeTab$Type;
        static SEARCH: $CreativeModeTab$Type;
        static CATEGORY: $CreativeModeTab$Type;
        static HOTBAR: $CreativeModeTab$Type;
    }
    /**
     * Values that may be interpreted as {@link $CreativeModeTab$Type}.
     */
    export type $CreativeModeTab$Type_ = "category" | "inventory" | "hotbar" | "search";
    export class $AxeItem extends $DiggerItem implements $AxeItemAccessor {
        static getStrippedBlocks$emi_$md$5c91d2$0(): $Map<any, any>;
        static getAxeStrippingState(arg0: $BlockState_): $BlockState;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        tier: $Tier;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        /**
         * @deprecated
         */
        static STRIPPABLES: $Map<$Block, $Block>;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(tier: $Tier_, properties: $Item$Properties);
        static get strippedBlocks$emi_$md$5c91d2$0(): $Map<any, any>;
    }
    export class $MapItem extends $ComplexItem {
        static renderBiomePreviewMap(serverLevel: $ServerLevel, stack: $ItemStack_): void;
        static getSavedData(mapId: $MapId_ | null, level: $Level_): $MapItemSavedData;
        static getSavedData(stack: $ItemStack_, level: $Level_): $MapItemSavedData;
        static getTooltipForId(mapId: $MapId_): $Component;
        static lockMap(level: $Level_, stack: $ItemStack_): void;
        update(level: $Level_, viewer: $Entity, data: $MapItemSavedData): void;
        static create(level: $Level_, levelX: number, levelZ: number, scale: number, trackingPosition: boolean, unlimitedTracking: boolean): $ItemStack;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static IMAGE_HEIGHT: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static IMAGE_WIDTH: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
    }
    export class $BannerPatternItem extends $Item {
        getBannerPattern(): $TagKey<$BannerPattern>;
        getDisplayName(): $MutableComponent;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(bannerPattern: $TagKey_<$BannerPattern>, properties: $Item$Properties);
        get bannerPattern(): $TagKey<$BannerPattern>;
        get displayName(): $MutableComponent;
    }
    export class $FlintAndSteelItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
    }
    export class $BowItem extends $ProjectileWeaponItem {
        /**
         * Gets the velocity of the arrow entity from the bow's charge
         */
        static getPowerForTime(charge: number): number;
        static ARROW_ONLY: $Predicate<$ItemStack>;
        static MAX_DRAW_DURATION: number;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static DEFAULT_RANGE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static ARROW_OR_FIREWORK: $Predicate<$ItemStack>;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
    }
    export class $FishingRodItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
    }
    export class $HoeItem extends $DiggerItem implements $HoeItemAccessor {
        static changeIntoStateAndDropItem(state: $BlockState_, itemToDrop: $ItemLike_): $Consumer<$UseOnContext>;
        static onlyIfAirAbove(context: $UseOnContext): boolean;
        static getTillingActions$emi_$md$5c91d2$0(): $Map<any, any>;
        static changeIntoState(state: $BlockState_): $Consumer<$UseOnContext>;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        /**
         * @deprecated
         */
        static TILLABLES: $Map<$Block, $Pair<$Predicate<$UseOnContext>, $Consumer<$UseOnContext>>>;
        static DEFAULT_MAX_STACK_SIZE: number;
        tier: $Tier;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(tier: $Tier_, properties: $Item$Properties);
        static get tillingActions$emi_$md$5c91d2$0(): $Map<any, any>;
    }
    export class $SignApplicator {
    }
    export interface $SignApplicator {
        canApplyToSign(text: $SignText, player: $Player): boolean;
        tryApplyToSign(level: $Level_, sign: $SignBlockEntity, isFront: boolean, player: $Player): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SignApplicator}.
     */
    export type $SignApplicator_ = ((arg0: $Level, arg1: $SignBlockEntity, arg2: boolean, arg3: $Player) => boolean);
    export class $BedItem extends $BlockItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(block: $Block_, properties: $Item$Properties);
    }
    export interface $Instrument extends RegistryMarked<RegistryTypes.InstrumentTag, RegistryTypes.Instrument> {}
    export class $AirItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(block: $Block_, properties: $Item$Properties);
    }
    export class $CompassItem extends $Item {
        static getSpawnPosition(level: $Level_): $GlobalPos;
        wrapOperation$bbn000$simulated$setLodestoneData$mixinextras$bridge$8(arg0: $ItemStack_, arg1: $DataComponentType_<any>, arg2: $Object, arg3: $Operation_<any>, arg4: $LocalRef<any>): $Object;
        wrapOperation$bbn000$simulated$setLodestoneData(arg0: $ItemStack_, arg1: $DataComponentType_<any>, arg2: $Object, arg3: $Operation_<any>, arg4: $UseOnContext): $Object;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
    }
    export class $CrossbowItem extends $ProjectileWeaponItem {
        performShooting(level: $Level_, shooter: $LivingEntity, hand: $InteractionHand_, weapon: $ItemStack_, velocity: number, inaccuracy: number, target: $LivingEntity | null): void;
        static isCharged(crossbowStack: $ItemStack_): boolean;
        static getChargeDuration(stack: $ItemStack_, shooter: $LivingEntity): number;
        static ARROW_ONLY: $Predicate<$ItemStack>;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static DEFAULT_RANGE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static MOB_ARROW_POWER: number;
        static ARROW_OR_FIREWORK: $Predicate<$ItemStack>;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
    }
    export interface $ArmorMaterial extends RegistryMarked<RegistryTypes.ArmorMaterialTag, RegistryTypes.ArmorMaterial> {}
    export class $AnimalArmorItem extends $ArmorItem {
        getOverlayTexture(): $ResourceLocation;
        getBodyType(): $AnimalArmorItem$BodyType;
        getTexture(): $ResourceLocation;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static DISPENSE_ITEM_BEHAVIOR: $DispenseItemBehavior;
        defaultModifiers: $Supplier<$ItemAttributeModifiers>;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(armorMaterial: $Holder_<$ArmorMaterial>, bodyType: $AnimalArmorItem$BodyType_, hasOverlay: boolean, properties: $Item$Properties);
        get overlayTexture(): $ResourceLocation;
        get bodyType(): $AnimalArmorItem$BodyType;
        get texture(): $ResourceLocation;
    }
    export class $ProjectileItem$PositionFunction {
    }
    export interface $ProjectileItem$PositionFunction {
        getDispensePosition(source: $BlockSource_, direction: $Direction_): $Position;
    }
    /**
     * Values that may be interpreted as {@link $ProjectileItem$PositionFunction}.
     */
    export type $ProjectileItem$PositionFunction_ = ((arg0: $BlockSource, arg1: $Direction) => $Position);
    export class $BookItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
    }
    export class $AnimalArmorItem$BodyType extends $Enum<$AnimalArmorItem$BodyType> {
        static values(): $AnimalArmorItem$BodyType[];
        static valueOf(arg0: string): $AnimalArmorItem$BodyType;
        static EQUESTRIAN: $AnimalArmorItem$BodyType;
        static CANINE: $AnimalArmorItem$BodyType;
    }
    /**
     * Values that may be interpreted as {@link $AnimalArmorItem$BodyType}.
     */
    export type $AnimalArmorItem$BodyType_ = "equestrian" | "canine";
    export class $ArmorMaterials {
        static bootstrap(registry: $Registry<$ArmorMaterial_>): $Holder<$ArmorMaterial>;
        static CHAIN: $Holder<$ArmorMaterial>;
        static GOLD: $Holder<$ArmorMaterial>;
        static NETHERITE: $Holder<$ArmorMaterial>;
        static DIAMOND: $Holder<$ArmorMaterial>;
        static TURTLE: $Holder<$ArmorMaterial>;
        static LEATHER: $Holder<$ArmorMaterial>;
        static IRON: $Holder<$ArmorMaterial>;
        static ARMADILLO: $Holder<$ArmorMaterial>;
        constructor();
    }
    export class $MilkBucketItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
    }
    export class $ItemCooldowns {
        removeCooldown(item: $Item_): void;
        tick(): void;
        getCooldownPercent(item: $Item_, partialTicks: number): number;
        isOnCooldown(item: $Item_): boolean;
        addCooldown(item: $Item_, ticks: number): void;
        constructor();
    }
    export class $CreativeModeTab implements $ItemGroupAccessor, $CreativeModeTabKJS {
        shouldDisplay(): boolean;
        buildContents(parameters: $CreativeModeTab$ItemDisplayParameters_): void;
        getSearchTabDisplayItems(): $Collection<$ItemStack>;
        static createTextureLocation(name: string): $ResourceLocation;
        canScroll(): boolean;
        showTitle(): boolean;
        hasSearchBar(): boolean;
        getIconItem(): $ItemStack;
        getBackgroundTexture(): $ResourceLocation;
        hasAnyItems(): boolean;
        isAlignedRight(): boolean;
        getDisplayItems(): $Collection<$ItemStack>;
        getSearchBarWidth(): number;
        getTabsImage(): $ResourceLocation;
        getLabelColor(): number;
        getSlotColor(): number;
        getScrollerSprite(): $ResourceLocation;
        kjs$setDisplayName(component: $Component_): void;
        kjs$setIcon(icon: $ItemStack_): void;
        row(): $CreativeModeTab$Row;
        /**
         * @deprecated
         */
        static builder(row: $CreativeModeTab$Row_, column: number): $CreativeModeTab$Builder;
        static builder(): $CreativeModeTab$Builder;
        contains(stack: $ItemStack_): boolean;
        getType(): $CreativeModeTab$Type;
        getDisplayName(): $Component;
        column(): number;
        owo$getEntryCollector(): $CreativeModeTab$DisplayItemsGenerator;
        owo$setEntryCollector(arg0: $CreativeModeTab$DisplayItemsGenerator_): void;
        owo$setSearchTabStacks(arg0: $Set_<$ItemStack_>): void;
        owo$setDisplayName(arg0: $Component_): void;
        owo$setColumn(arg0: number): void;
        owo$setRow(arg0: $CreativeModeTab$Row_): void;
        tabsAfter: $List<$ResourceLocation>;
        tabsBefore: $List<$ResourceLocation>;
        constructor(arg0: $CreativeModeTab$Row_, arg1: number, arg2: $CreativeModeTab$Type_, arg3: $Component_, arg4: $Supplier_<$ItemStack>, arg5: $CreativeModeTab$DisplayItemsGenerator_, arg6: $ResourceLocation_, arg7: boolean, arg8: number, arg9: $ResourceLocation_, arg10: number, arg11: number, arg12: $List_<$ResourceLocation_>, arg13: $List_<$ResourceLocation_>);
        get searchTabDisplayItems(): $Collection<$ItemStack>;
        get iconItem(): $ItemStack;
        get backgroundTexture(): $ResourceLocation;
        get alignedRight(): boolean;
        get displayItems(): $Collection<$ItemStack>;
        get searchBarWidth(): number;
        get tabsImage(): $ResourceLocation;
        get labelColor(): number;
        get slotColor(): number;
        get scrollerSprite(): $ResourceLocation;
        get type(): $CreativeModeTab$Type;
        get displayName(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $CreativeModeTab}.
     */
    export type $CreativeModeTab_ = RegistryTypes.CreativeModeTab;
    export class $SmithingTemplateItem extends $Item {
        static createNetheriteUpgradeTemplate(): $SmithingTemplateItem;
        static createArmorTrimTemplate(name: $ResourceLocation_, ...requiredFeatures: $FeatureFlag[]): $SmithingTemplateItem;
        static createArmorTrimTemplate(key: $ResourceKey_<$TrimPattern>, ...requiredFeatures: $FeatureFlag[]): $SmithingTemplateItem;
        static createTrimmableArmorIconList(): $List<$ResourceLocation>;
        static createTrimmableMaterialIconList(): $List<$ResourceLocation>;
        static createNetheriteUpgradeIconList(): $List<$ResourceLocation>;
        static createNetheriteUpgradeMaterialList(): $List<$ResourceLocation>;
        getBaseSlotDescription(): $Component;
        getAdditionSlotDescription(): $Component;
        getBaseSlotEmptyIcons(): $List<$ResourceLocation>;
        getAdditionalSlotEmptyIcons(): $List<$ResourceLocation>;
        static NETHERITE_UPGRADE_APPLIES_TO: $Component;
        static EMPTY_SLOT_LEGGINGS: $ResourceLocation;
        static NETHERITE_UPGRADE_ADDITIONS_SLOT_DESCRIPTION: $Component;
        static ARMOR_TRIM_INGREDIENTS: $Component;
        static EMPTY_SLOT_PICKAXE: $ResourceLocation;
        static NETHERITE_UPGRADE_INGREDIENTS: $Component;
        static EMPTY_SLOT_QUARTZ: $ResourceLocation;
        appliesTo: $Component;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static EMPTY_SLOT_HOE: $ResourceLocation;
        static EMPTY_SLOT_DIAMOND: $ResourceLocation;
        static INGREDIENTS_TITLE: $Component;
        static EMPTY_SLOT_SWORD: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static NETHERITE_UPGRADE_BASE_SLOT_DESCRIPTION: $Component;
        static EMPTY_SLOT_INGOT: $ResourceLocation;
        static EMPTY_SLOT_AMETHYST_SHARD: $ResourceLocation;
        static EMPTY_SLOT_HELMET: $ResourceLocation;
        ingredients: $Component;
        static EMPTY_SLOT_EMERALD: $ResourceLocation;
        static EMPTY_SLOT_AXE: $ResourceLocation;
        static EMPTY_SLOT_REDSTONE_DUST: $ResourceLocation;
        static NETHERITE_UPGRADE: $Component;
        static TITLE_FORMAT: $ChatFormatting;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static ARMOR_TRIM_BASE_SLOT_DESCRIPTION: $Component;
        static MAX_BAR_WIDTH: number;
        static EMPTY_SLOT_LAPIS_LAZULI: $ResourceLocation;
        static EMPTY_SLOT_SHOVEL: $ResourceLocation;
        static EMPTY_SLOT_CHESTPLATE: $ResourceLocation;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static EMPTY_SLOT_BOOTS: $ResourceLocation;
        static APPLIES_TO_TITLE: $Component;
        static DESCRIPTION_FORMAT: $ChatFormatting;
        static ARMOR_TRIM_APPLIES_TO: $Component;
        static ARMOR_TRIM_ADDITIONS_SLOT_DESCRIPTION: $Component;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(appliesTo: $Component_, ingredients: $Component_, upgradeDescription: $Component_, baseSlotDescription: $Component_, additionsSlotDescription: $Component_, baseSlotEmptyIcons: $List_<$ResourceLocation_>, additionalSlotEmptyIcons: $List_<$ResourceLocation_>, ...requiredFeatures: $FeatureFlag[]);
        get baseSlotDescription(): $Component;
        get additionSlotDescription(): $Component;
        get baseSlotEmptyIcons(): $List<$ResourceLocation>;
        get additionalSlotEmptyIcons(): $List<$ResourceLocation>;
    }
    export class $ServerItemCooldowns extends $ItemCooldowns {
        constructor(player: $ServerPlayer);
    }
    export class $WrittenBookItem extends $Item {
        static resolveBookComponents(bookStack: $ItemStack_, resolvingSource: $CommandSourceStack, resolvingPlayer: $Player | null): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
    }
    export class $EggItem extends $Item implements $ProjectileItem {
        asProjectile(level: $Level_, pos: $Position, stack: $ItemStack_, direction: $Direction_): $Projectile;
        createDispenseConfig(): $ProjectileItem$DispenseConfig;
        shoot(projectile: $Projectile, x: number, arg2: number, y: number, arg4: number, z: number): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
    }
    export class $BoneMealItem extends $Item {
        static applyBonemeal(arg0: $ItemStack_, arg1: $Level_, arg2: $BlockPos_, arg3: $Player | null): boolean;
        static growWaterPlant(stack: $ItemStack_, level: $Level_, pos: $BlockPos_, clickedSide: $Direction_ | null): boolean;
        /**
         * @deprecated
         */
        static growCrop(stack: $ItemStack_, level: $Level_, pos: $BlockPos_): boolean;
        static addGrowthParticles(level: $LevelAccessor, pos: $BlockPos_, data: number): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static GRASS_COUNT_MULTIPLIER: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static GRASS_SPREAD_HEIGHT: number;
        static GRASS_SPREAD_WIDTH: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
    }
    export class $FireChargeItem extends $Item implements $ProjectileItem {
        asProjectile(level: $Level_, pos: $Position, stack: $ItemStack_, direction: $Direction_): $Projectile;
        createDispenseConfig(): $ProjectileItem$DispenseConfig;
        shoot(projectile: $Projectile, x: number, arg2: number, y: number, arg4: number, z: number): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
    }
    export class $ChorusFruitItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
    }
    export class $InstrumentItem extends $Item {
        static setRandom(stack: $ItemStack_, instrumentTag: $TagKey_<$Instrument>, random: $RandomSource): void;
        static create(item: $Item_, instrument: $Holder_<$Instrument>): $ItemStack;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties, instruments: $TagKey_<$Instrument>);
    }
    export class $Instrument extends $Record {
        soundEvent(): $Holder<$SoundEvent>;
        useDuration(): number;
        range(): number;
        static CODEC: $Codec<$Holder<$Instrument>>;
        static DIRECT_CODEC: $Codec<$Instrument>;
        static DIRECT_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Instrument>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$Instrument>>;
        constructor(arg0: $Holder_<$SoundEvent>, arg1: number, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $Instrument}.
     */
    export type $Instrument_ = RegistryTypes.Instrument | { soundEvent?: $Holder_<$SoundEvent>, range?: number, useDuration?: number,  } | [soundEvent?: $Holder_<$SoundEvent>, range?: number, useDuration?: number, ];
    export class $MobBucketItem extends $BucketItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        content: $Fluid;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(type: $EntityType_<never>, content: $Fluid_, emptySound: $SoundEvent_, properties: $Item$Properties);
    }
    export interface $CreativeModeTab extends RegistryMarked<RegistryTypes.CreativeModeTabTag, RegistryTypes.CreativeModeTab> {}
    export class $FoodOnAStickItem<T extends $Entity> extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties, canInteractWith: $EntityType_<$Item_>, consumeItemDamage: number);
    }
    export class $OminousBottleItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static EFFECT_DURATION: number;
        static MAX_AMPLIFIER: number;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static MIN_AMPLIFIER: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $ProjectileItem {
    }
    export interface $ProjectileItem {
        asProjectile(level: $Level_, pos: $Position, stack: $ItemStack_, direction: $Direction_): $Projectile;
        createDispenseConfig(): $ProjectileItem$DispenseConfig;
        shoot(projectile: $Projectile, x: number, arg2: number, y: number, arg4: number, z: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ProjectileItem}.
     */
    export type $ProjectileItem_ = ((arg0: $Level, arg1: $Position, arg2: $ItemStack, arg3: $Direction) => $Projectile);
    export class $JukeboxSongs {
        static bootstrap(context: $BootstrapContext<$JukeboxSong_>): void;
        static THIRTEEN: $ResourceKey<$JukeboxSong>;
        static MELLOHI: $ResourceKey<$JukeboxSong>;
        static PIGSTEP: $ResourceKey<$JukeboxSong>;
        static STAL: $ResourceKey<$JukeboxSong>;
        static PRECIPICE: $ResourceKey<$JukeboxSong>;
        static STRAD: $ResourceKey<$JukeboxSong>;
        static OTHERSIDE: $ResourceKey<$JukeboxSong>;
        static ELEVEN: $ResourceKey<$JukeboxSong>;
        static FIVE: $ResourceKey<$JukeboxSong>;
        static CHIRP: $ResourceKey<$JukeboxSong>;
        static WARD: $ResourceKey<$JukeboxSong>;
        static BLOCKS: $ResourceKey<$JukeboxSong>;
        static FAR: $ResourceKey<$JukeboxSong>;
        static CREATOR: $ResourceKey<$JukeboxSong>;
        static CAT: $ResourceKey<$JukeboxSong>;
        static MALL: $ResourceKey<$JukeboxSong>;
        static RELIC: $ResourceKey<$JukeboxSong>;
        static WAIT: $ResourceKey<$JukeboxSong>;
        static CREATOR_MUSIC_BOX: $ResourceKey<$JukeboxSong>;
    }
    export interface $JukeboxSongs {
    }
    export class $CreativeModeTab$TabVisibility extends $Enum<$CreativeModeTab$TabVisibility> {
        static values(): $CreativeModeTab$TabVisibility[];
        static valueOf(arg0: string): $CreativeModeTab$TabVisibility;
        static PARENT_AND_SEARCH_TABS: $CreativeModeTab$TabVisibility;
        static PARENT_TAB_ONLY: $CreativeModeTab$TabVisibility;
        static SEARCH_TAB_ONLY: $CreativeModeTab$TabVisibility;
    }
    /**
     * Values that may be interpreted as {@link $CreativeModeTab$TabVisibility}.
     */
    export type $CreativeModeTab$TabVisibility_ = "parent_and_search_tabs" | "parent_tab_only" | "search_tab_only";
    export class $SpectralArrowItem extends $ArrowItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $ArmorMaterial$Layer {
        dyeable(): boolean;
        resolveTexture(innerTexture: boolean): $ResourceLocation;
        texture(innerTexture: boolean): $ResourceLocation;
        assetName: $ResourceLocation;
        constructor(assetName: $ResourceLocation_);
        constructor(assetName: $ResourceLocation_, suffix: string, dyeable: boolean);
    }
    export class $SignItem extends $StandingAndWallBlockItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties, standingBlock: $Block_, wallBlock: $Block_, attachmentDirection: $Direction_);
        constructor(properties: $Item$Properties, standingBlock: $Block_, wallBlock: $Block_);
    }
    export class $EmptyMapItem extends $ComplexItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
    }
    export interface $Item extends RegistryMarked<RegistryTypes.ItemTag, RegistryTypes.Item> {}
    export class $CreativeModeTab$ItemDisplayBuilder implements $CreativeModeTab$Output {
        accept(stack: $ItemStack_, tabVisibility: $CreativeModeTab$TabVisibility_): void;
        accept(item: $ItemLike_): void;
        accept(stack: $ItemStack_): void;
        accept(item: $ItemLike_, tabVisibility: $CreativeModeTab$TabVisibility_): void;
        acceptAll(stacks: $Collection_<$ItemStack_>, tabVisibility: $CreativeModeTab$TabVisibility_): void;
        acceptAll(stacks: $Collection_<$ItemStack_>): void;
        searchTabContents: $Set<$ItemStack>;
        tabContents: $Collection<$ItemStack>;
        constructor(tab: $CreativeModeTab_, featureFlagSet: $FeatureFlagSet);
    }
    export class $CrossbowItem$ChargingSounds extends $Record {
        mid(): ($Holder<$SoundEvent>) | undefined;
        end(): ($Holder<$SoundEvent>) | undefined;
        start(): ($Holder<$SoundEvent>) | undefined;
        static CODEC: $Codec<$CrossbowItem$ChargingSounds>;
        constructor(start: ($Holder_<$SoundEvent>) | undefined, mid: ($Holder_<$SoundEvent>) | undefined, end: ($Holder_<$SoundEvent>) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $CrossbowItem$ChargingSounds}.
     */
    export type $CrossbowItem$ChargingSounds_ = { start?: ($Holder_<$SoundEvent>) | undefined, end?: ($Holder_<$SoundEvent>) | undefined, mid?: ($Holder_<$SoundEvent>) | undefined,  } | [start?: ($Holder_<$SoundEvent>) | undefined, end?: ($Holder_<$SoundEvent>) | undefined, mid?: ($Holder_<$SoundEvent>) | undefined, ];
    export class $ShovelItem extends $DiggerItem implements $ShovelItemAccessor {
        static getPathStates$emi_$md$5c91d2$0(): $Map<any, any>;
        static getShovelPathingState(arg0: $BlockState_): $BlockState;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        tier: $Tier;
        static FLATTENABLES: $Map<$Block, $BlockState>;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(tier: $Tier_, properties: $Item$Properties);
        static get pathStates$emi_$md$5c91d2$0(): $Map<any, any>;
    }
    export class $HoneyBottleItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
    }
    export class $GlowInkSacItem extends $Item implements $SignApplicator {
        tryApplyToSign(arg0: $Level_, arg1: $SignBlockEntity, arg2: boolean, arg3: $Player): boolean;
        canApplyToSign(arg0: $SignText, arg1: $Player): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $Instruments {
        static bootstrap(registry: $Registry<$Instrument_>): $Instrument;
        static DREAM_GOAT_HORN: $ResourceKey<$Instrument>;
        static SING_GOAT_HORN: $ResourceKey<$Instrument>;
        static FEEL_GOAT_HORN: $ResourceKey<$Instrument>;
        static YEARN_GOAT_HORN: $ResourceKey<$Instrument>;
        static CALL_GOAT_HORN: $ResourceKey<$Instrument>;
        static GOAT_HORN_DURATION: number;
        static GOAT_HORN_RANGE_BLOCKS: number;
        static PONDER_GOAT_HORN: $ResourceKey<$Instrument>;
        static ADMIRE_GOAT_HORN: $ResourceKey<$Instrument>;
        static SEEK_GOAT_HORN: $ResourceKey<$Instrument>;
    }
    export interface $Instruments {
    }
    export class $SpyglassItem extends $Item {
        static USE_DURATION: number;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static ZOOM_FOV_MODIFIER: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
    }
    export class $ElytraItem extends $Item implements $Equipable {
        static isFlyEnabled(elytraStack: $ItemStack_): boolean;
        getEquipmentSlot(): $EquipmentSlot;
        getEquipSound(): $Holder<$SoundEvent>;
        swapWithEquipmentSlot(item: $Item_, level: $Level_, player: $Player, hand: $InteractionHand_): $InteractionResultHolder<$ItemStack>;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
        get equipmentSlot(): $EquipmentSlot;
        get equipSound(): $Holder<$SoundEvent>;
    }
    export class $Equipable {
        static get(stack: $ItemStack_): $Equipable;
    }
    export interface $Equipable {
        swapWithEquipmentSlot(item: $Item_, level: $Level_, player: $Player, hand: $InteractionHand_): $InteractionResultHolder<$ItemStack>;
        getEquipmentSlot(): $EquipmentSlot;
        getEquipSound(): $Holder<$SoundEvent>;
        get equipmentSlot(): $EquipmentSlot;
        get equipSound(): $Holder<$SoundEvent>;
    }
    /**
     * Values that may be interpreted as {@link $Equipable}.
     */
    export type $Equipable_ = (() => $EquipmentSlot_);
    export class $AdventureModePredicate {
        withTooltip(showInTooltip: boolean): $AdventureModePredicate;
        addToTooltip(tooltipAdder: $Consumer_<$Component>): void;
        showInTooltip(): boolean;
        test(block: $BlockInWorld): boolean;
        static CAN_PLACE_HEADER: $Component;
        static CODEC: $Codec<$AdventureModePredicate>;
        static CAN_BREAK_HEADER: $Component;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AdventureModePredicate>;
        constructor(predicates: $List_<$BlockPredicate_>, showInTooltip: boolean);
    }
    export class $JukeboxSong extends $Record {
        lengthInSeconds(): number;
        lengthInTicks(): number;
        hasFinished(ticksSinceSongStarted: number): boolean;
        soundEvent(): $Holder<$SoundEvent>;
        static fromStack(registries: $HolderLookup$Provider, stack: $ItemStack_): ($Holder<$JukeboxSong>) | undefined;
        comparatorOutput(): number;
        description(): $Component;
        static CODEC: $Codec<$Holder<$JukeboxSong>>;
        static DIRECT_CODEC: $Codec<$JukeboxSong>;
        static DIRECT_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $JukeboxSong>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$JukeboxSong>>;
        constructor(arg0: $Holder_<$SoundEvent>, arg1: $Component_, arg2: number, arg3: number);
    }
    /**
     * Values that may be interpreted as {@link $JukeboxSong}.
     */
    export type $JukeboxSong_ = RegistryTypes.JukeboxSong | { comparatorOutput?: number, lengthInSeconds?: number, description?: $Component_, soundEvent?: $Holder_<$SoundEvent>,  } | [comparatorOutput?: number, lengthInSeconds?: number, description?: $Component_, soundEvent?: $Holder_<$SoundEvent>, ];
    export class $ArmorItem$Type extends $Enum<$ArmorItem$Type> implements $StringRepresentable {
        getDurability(durabilityFactor: number): number;
        hasTrims(): boolean;
        getName(): string;
        static values(): $ArmorItem$Type[];
        static valueOf(arg0: string): $ArmorItem$Type;
        getSlot(): $EquipmentSlot;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static LEGGINGS: $ArmorItem$Type;
        static HELMET: $ArmorItem$Type;
        static CODEC: $Codec<$ArmorItem$Type>;
        static CHESTPLATE: $ArmorItem$Type;
        static BOOTS: $ArmorItem$Type;
        static BODY: $ArmorItem$Type;
        get slot(): $EquipmentSlot;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ArmorItem$Type}.
     */
    export type $ArmorItem$Type_ = "helmet" | "chestplate" | "leggings" | "boots" | "body";
    export class $FireworkRocketItem extends $Item implements $ProjectileItem {
        asProjectile(level: $Level_, pos: $Position, stack: $ItemStack_, direction: $Direction_): $Projectile;
        createDispenseConfig(): $ProjectileItem$DispenseConfig;
        shoot(projectile: $Projectile, x: number, arg2: number, y: number, arg4: number, z: number): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static CRAFTABLE_DURATIONS: number[];
        static ROCKET_PLACEMENT_OFFSET: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
    }
    export class $TippedArrowItem extends $ArrowItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
    }
    export class $ItemNameBlockItem extends $BlockItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(block: $Block_, properties: $Item$Properties);
    }
    export class $DiggerItem extends $TieredItem implements $DiggerItemKJS {
        handler$egd000$kubejs$init(ci: $CallbackInfo, blocks: $TagKey_<any>): void;
        kjs$getMineableTag(): $TagKey<any>;
        static createAttributes(tier: $Tier_, attackDamage: number, attackSpeed: number): $ItemAttributeModifiers;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        tier: $Tier;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(tier: $Tier_, blocks: $TagKey_<$Block>, properties: $Item$Properties);
    }
    export class $Rarity extends $Enum<$Rarity> implements $StringRepresentable, $IExtensibleEnum {
        getStyleModifier(): $UnaryOperator<$Style>;
        static values(): $Rarity[];
        static valueOf(arg0: string): $Rarity;
        /**
         * @deprecated
         */
        color(): $ChatFormatting;
        static getExtensionInfo(): $ExtensionInfo;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$Rarity>;
        static RARE: $Rarity;
        static EPIC: $Rarity;
        static UNCOMMON: $Rarity;
        static BY_ID: $IntFunction<$Rarity>;
        static COMMON: $Rarity;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $Rarity>;
        get styleModifier(): $UnaryOperator<$Style>;
        static get extensionInfo(): $ExtensionInfo;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Rarity}.
     */
    export type $Rarity_ = "common" | "uncommon" | "rare" | "epic";
    export class $ArmorStandItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
    }
    export class $FireworkStarItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $BucketItem extends $Item implements $DispensibleContainerItem, $BucketItemAccessor, $InjectedBucketItemExtension {
        handler$clc000$architectury$fillBucket(level: $Level_, player: $Player, hand: $InteractionHand_, cir: $CallbackInfoReturnable<any>, stack: $ItemStack_, target: $BlockHitResult): void;
        /**
         * @deprecated
         */
        emptyContents(player: $Player | null, level: $Level_, pos: $BlockPos_, result: $BlockHitResult | null): boolean;
        /**
         * Empties the contents of the container and returns whether it was successful.
         */
        emptyContents(player: $Player | null, level: $Level_, pos: $BlockPos_, hitResult: $BlockHitResult | null, container: $ItemStack_ | null): boolean;
        checkExtraContent(player: $Player | null, level: $Level_, containerStack: $ItemStack_, pos: $BlockPos_): void;
        static getEmptySuccessItem(bucketStack: $ItemStack_, player: $Player): $ItemStack;
        arch$getFluid(): $Fluid;
        getContent(): $Fluid;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        content: $Fluid;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(content: $Fluid_, properties: $Item$Properties);
    }
    export class $ItemStackLinkedSet {
        static createTypeAndComponentsSet(): $Set<$ItemStack>;
        static TYPE_AND_TAG: $Hash$Strategy<$ItemStack>;
        constructor();
    }
    export class $ScaffoldingBlockItem extends $BlockItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(block: $Block_, properties: $Item$Properties);
    }
    export class $ItemCooldowns$CooldownInstance {
    }
    export class $BrushItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static ANIMATION_DURATION: number;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
    }
    export class $SolidBucketItem extends $BlockItem implements $DispensibleContainerItem {
        emptyContents(player: $Player | null, level: $Level_, pos: $BlockPos_, result: $BlockHitResult | null): boolean;
        checkExtraContent(player: $Player | null, level: $Level_, containerStack: $ItemStack_, pos: $BlockPos_): void;
        /**
         * Empties the contents of the container and returns whether it was successful.
         */
        emptyContents(player: $Player, level: $Level_, pos: $BlockPos_, hitResult: $BlockHitResult, container: $ItemStack_): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(block: $Block_, placeSound: $SoundEvent_, properties: $Item$Properties);
    }
    export class $TooltipFlag$Default extends $Record implements $TooltipFlag, $TooltipFlagExtension$1 {
        asCreative(): $TooltipFlag$Default;
        simulated$getCreativeSearch(): boolean;
        simulated$setCreativeSearch(arg0: boolean): void;
        isAdvanced(): boolean;
        isCreative(): boolean;
        advanced(): boolean;
        creative(): boolean;
        shouldDisplayAllInformation(): boolean;
        hasControlDown(): boolean;
        hasShiftDown(): boolean;
        hasAltDown(): boolean;
        constructor(advanced: boolean, creative: boolean);
    }
    /**
     * Values that may be interpreted as {@link $TooltipFlag$Default}.
     */
    export type $TooltipFlag$Default_ = { creative?: boolean, advanced?: boolean,  } | [creative?: boolean, advanced?: boolean, ];
    export class $HoneycombItem extends $Item implements $SignApplicator {
        static getWaxed(state: $BlockState_): ($BlockState) | undefined;
        canApplyToSign(text: $SignText, player: $Player): boolean;
        tryApplyToSign(level: $Level_, sign: $SignBlockEntity, isFront: boolean, player: $Player): boolean;
        /**
         * @deprecated
         */
        static WAX_OFF_BY_BLOCK: $Supplier<$BiMap<$Block, $Block>>;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        /**
         * @deprecated
         */
        static WAXABLES: $Supplier<$BiMap<$Block, $Block>>;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
    }
    export class $DiscFragmentItem extends $Item {
        getDisplayName(): $MutableComponent;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
        get displayName(): $MutableComponent;
    }
    export class $SplashPotionItem extends $ThrowablePotionItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
    }
    export class $DoubleHighBlockItem extends $BlockItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(block: $Block_, properties: $Item$Properties);
    }
    export class $Tier {
    }
    export interface $Tier {
        createToolProperties(block: $TagKey_<$Block>): $Tool;
        getUses(): number;
        getIncorrectBlocksForDrops(): $TagKey<$Block>;
        getRepairIngredient(): $Ingredient;
        getEnchantmentValue(): number;
        getAttackDamageBonus(): number;
        getSpeed(): number;
        get uses(): number;
        get incorrectBlocksForDrops(): $TagKey<$Block>;
        get repairIngredient(): $Ingredient;
        get enchantmentValue(): number;
        get attackDamageBonus(): number;
        get speed(): number;
    }
    /**
     * Values that may be interpreted as {@link $Tier}.
     */
    export type $Tier_ = string;
    export class $CreativeModeTab$DisplayItemsGenerator {
    }
    export interface $CreativeModeTab$DisplayItemsGenerator {
        accept(parameters: $CreativeModeTab$ItemDisplayParameters_, output: $CreativeModeTab$Output_): void;
    }
    /**
     * Values that may be interpreted as {@link $CreativeModeTab$DisplayItemsGenerator}.
     */
    export type $CreativeModeTab$DisplayItemsGenerator_ = ((arg0: $CreativeModeTab$ItemDisplayParameters, arg1: $CreativeModeTab$Output) => void);
    export class $DispensibleContainerItem {
    }
    export interface $DispensibleContainerItem extends $IDispensibleContainerItemExtension {
        /**
         * @deprecated
         */
        emptyContents(player: $Player | null, level: $Level_, pos: $BlockPos_, result: $BlockHitResult | null): boolean;
        checkExtraContent(player: $Player | null, level: $Level_, containerStack: $ItemStack_, pos: $BlockPos_): void;
    }
    /**
     * Values that may be interpreted as {@link $DispensibleContainerItem}.
     */
    export type $DispensibleContainerItem_ = ((arg0: $Player, arg1: $Level, arg2: $BlockPos, arg3: $BlockHitResult) => boolean);
    export class $SwordItem extends $TieredItem {
        static createToolProperties(): $Tool;
        static createAttributes(tier: $Tier_, attackDamage: number, attackSpeed: number): $ItemAttributeModifiers;
        static createAttributes(arg0: $Tier_, arg1: number, arg2: number): $ItemAttributeModifiers;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        tier: $Tier;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(tier: $Tier_, properties: $Item$Properties);
        constructor(arg0: $Tier_, arg1: $Item$Properties, arg2: $Tool_);
    }
    export interface $JukeboxSong extends RegistryMarked<RegistryTypes.JukeboxSongTag, RegistryTypes.JukeboxSong> {}
    export class $CreativeModeTab$ItemDisplayParameters extends $Record {
        holders(): $HolderLookup$Provider;
        hasPermissions(): boolean;
        enabledFeatures(): $FeatureFlagSet;
        needsUpdate(enabledFeatures: $FeatureFlagSet, hasPermissions: boolean, holders: $HolderLookup$Provider): boolean;
        constructor(enabledFeatures: $FeatureFlagSet, hasPermissions: boolean, holders: $HolderLookup$Provider);
    }
    /**
     * Values that may be interpreted as {@link $CreativeModeTab$ItemDisplayParameters}.
     */
    export type $CreativeModeTab$ItemDisplayParameters_ = { hasPermissions?: boolean, enabledFeatures?: $FeatureFlagSet, holders?: $HolderLookup$Provider,  } | [hasPermissions?: boolean, enabledFeatures?: $FeatureFlagSet, holders?: $HolderLookup$Provider, ];
    export class $CreativeModeTab$Row extends $Enum<$CreativeModeTab$Row> {
        static values(): $CreativeModeTab$Row[];
        static valueOf(arg0: string): $CreativeModeTab$Row;
        static TOP: $CreativeModeTab$Row;
        static BOTTOM: $CreativeModeTab$Row;
    }
    /**
     * Values that may be interpreted as {@link $CreativeModeTab$Row}.
     */
    export type $CreativeModeTab$Row_ = "top" | "bottom";
    export class $InkSacItem extends $Item implements $SignApplicator {
        tryApplyToSign(arg0: $Level_, arg1: $SignBlockEntity, arg2: boolean, arg3: $Player): boolean;
        canApplyToSign(arg0: $SignText, arg1: $Player): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $DyeColor extends $Enum<$DyeColor> implements $StringRepresentable, $KubeColor {
        kjs$getRGB(): number;
        getMapColor(): $MapColor;
        getTextureDiffuseColor(): number;
        getFireworkColor(): number;
        getTextColor(): number;
        static byFireworkColor(fireworkColor: number): $DyeColor;
        getDyedTag(): $TagKey<$Item>;
        kjs$getARGB(): number;
        kjs$getFireworkRGB(): number;
        getName(): string;
        static values(): $DyeColor[];
        static valueOf(arg0: string): $DyeColor;
        getId(): number;
        getTag(): $TagKey<$Item>;
        static byName(translationKey: string, fallback: $DyeColor_ | null): $DyeColor;
        static getColor(arg0: $ItemStack_): $DyeColor;
        getSerializedName(): string;
        static byId(fireworkColor: number): $DyeColor;
        getRemappedEnumConstantName(): string;
        toHexString(): string;
        serialize(): string;
        createTextColor(): $TextColor;
        specialEquals(o: $Object, shallow: boolean): boolean;
        static WHITE: $DyeColor;
        static GRAY: $DyeColor;
        static CODEC: $StringRepresentable$EnumCodec<$DyeColor>;
        static BLUE: $DyeColor;
        static PURPLE: $DyeColor;
        static GREEN: $DyeColor;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $DyeColor>;
        static RED: $DyeColor;
        static PINK: $DyeColor;
        static LIGHT_GRAY: $DyeColor;
        static LIGHT_BLUE: $DyeColor;
        static LIME: $DyeColor;
        static MAGENTA: $DyeColor;
        static BLACK: $DyeColor;
        static YELLOW: $DyeColor;
        static CYAN: $DyeColor;
        static BROWN: $DyeColor;
        static ORANGE: $DyeColor;
        get mapColor(): $MapColor;
        get textureDiffuseColor(): number;
        get fireworkColor(): number;
        get textColor(): number;
        get dyedTag(): $TagKey<$Item>;
        get id(): number;
        get tag(): $TagKey<$Item>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $DyeColor}.
     */
    export type $DyeColor_ = "white" | "orange" | "magenta" | "light_blue" | "yellow" | "lime" | "pink" | "gray" | "light_gray" | "cyan" | "purple" | "blue" | "brown" | "green" | "red" | "black";
    export class $CreativeModeTab$Output {
    }
    export interface $CreativeModeTab$Output {
        accept(stack: $ItemStack_, tabVisibility: $CreativeModeTab$TabVisibility_): void;
        accept(item: $ItemLike_): void;
        accept(stack: $ItemStack_): void;
        accept(item: $ItemLike_, tabVisibility: $CreativeModeTab$TabVisibility_): void;
        acceptAll(stacks: $Collection_<$ItemStack_>, tabVisibility: $CreativeModeTab$TabVisibility_): void;
        acceptAll(stacks: $Collection_<$ItemStack_>): void;
    }
    /**
     * Values that may be interpreted as {@link $CreativeModeTab$Output}.
     */
    export type $CreativeModeTab$Output_ = ((arg0: $ItemStack, arg1: $CreativeModeTab$TabVisibility) => void);
    export class $WindChargeItem extends $Item implements $ProjectileItem {
        asProjectile(arg0: $Level_, arg1: $Position, arg2: $ItemStack_, arg3: $Direction_): $Projectile;
        createDispenseConfig(): $ProjectileItem$DispenseConfig;
        shoot(arg0: $Projectile, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $CreativeModeTabs implements $AccessorCreativeModeTabs, $CreativeModeTabsAccessor {
        static getDefaultTab(): $CreativeModeTab;
        static generatePotionEffectTypes(output: $CreativeModeTab$Output_, potions: $HolderLookup<$Potion_>, item: $Item_, tabVisibility: $CreativeModeTab$TabVisibility_, requiredFeatures: $FeatureFlagSet): void;
        static generateEnchantmentBookTypesOnlyMaxLevel(output: $CreativeModeTab$Output_, enchantments: $HolderLookup<$Enchantment_>, tabVisibility: $CreativeModeTab$TabVisibility_): void;
        static generateEnchantmentBookTypesAllLevels(output: $CreativeModeTab$Output_, enchantments: $HolderLookup<$Enchantment_>, tabVisibility: $CreativeModeTab$TabVisibility_): void;
        static generateInstrumentTypes(output: $CreativeModeTab$Output_, instruments: $HolderLookup<$Instrument_>, item: $Item_, instrument: $TagKey_<$Instrument>, tabVisibility: $CreativeModeTab$TabVisibility_): void;
        static generateSuspiciousStews(output: $CreativeModeTab$Output_, tabVisibility: $CreativeModeTab$TabVisibility_): void;
        static generateOminousVials(output: $CreativeModeTab$Output_, tabVisibility: $CreativeModeTab$TabVisibility_): void;
        static generateFireworksAllDurations(output: $CreativeModeTab$Output_, tabVisibility: $CreativeModeTab$TabVisibility_): void;
        static generatePresetPaintings(output: $CreativeModeTab$Output_, registries: $HolderLookup$Provider, paintingVariants: $HolderLookup$RegistryLookup<$PaintingVariant_>, predicate: $Predicate_<$Holder<$PaintingVariant>>, tabVisibility: $CreativeModeTab$TabVisibility_): void;
        static tabs(): $List<$CreativeModeTab>;
        static allTabs(): $List<$CreativeModeTab>;
        static searchTab(): $CreativeModeTab;
        static tryRebuildTabContents(enabledFeatures: $FeatureFlagSet, hasPermissions: boolean, registries: $HolderLookup$Provider): boolean;
        static setCACHED_PARAMETERS$railways_$md$5c91d2$0(parameters: $CreativeModeTab$ItemDisplayParameters_): void;
        static callBuildAllTabContents$create_connected_$md$5c91d2$1(parameters: $CreativeModeTab$ItemDisplayParameters_): void;
        static getCACHED_PARAMETERS$create_connected_$md$5c91d2$2(): $CreativeModeTab$ItemDisplayParameters;
        static validate(): void;
        static bootstrap(registry: $Registry<$CreativeModeTab_>): $CreativeModeTab;
        static BUILDING_BLOCKS: $ResourceKey<$CreativeModeTab>;
        static SPAWN_EGGS: $ResourceKey<$CreativeModeTab>;
        static OP_BLOCKS: $ResourceKey<$CreativeModeTab>;
        static SEARCH: $ResourceKey<$CreativeModeTab>;
        static TOOLS_AND_UTILITIES: $ResourceKey<$CreativeModeTab>;
        static COMBAT: $ResourceKey<$CreativeModeTab>;
        static NATURAL_BLOCKS: $ResourceKey<$CreativeModeTab>;
        static REDSTONE_BLOCKS: $ResourceKey<$CreativeModeTab>;
        static CACHED_PARAMETERS: $CreativeModeTab$ItemDisplayParameters;
        static INGREDIENTS: $ResourceKey<$CreativeModeTab>;
        static INVENTORY: $ResourceKey<$CreativeModeTab>;
        static COLORED_BLOCKS: $ResourceKey<$CreativeModeTab>;
        static FOOD_AND_DRINKS: $ResourceKey<$CreativeModeTab>;
        static HOTBAR: $ResourceKey<$CreativeModeTab>;
        static FUNCTIONAL_BLOCKS: $ResourceKey<$CreativeModeTab>;
        constructor();
        static get defaultTab(): $CreativeModeTab;
        static set CACHED_PARAMETERS$railways_$md$5c91d2$0(value: $CreativeModeTab$ItemDisplayParameters_);
        static get CACHED_PARAMETERS$create_connected_$md$5c91d2$2(): $CreativeModeTab$ItemDisplayParameters;
    }
    export class $EndCrystalItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
    }
    export class $TridentItem extends $Item implements $ProjectileItem {
        static createToolProperties(): $Tool;
        asProjectile(level: $Level_, pos: $Position, stack: $ItemStack_, direction: $Direction_): $Projectile;
        static createAttributes(): $ItemAttributeModifiers;
        createDispenseConfig(): $ProjectileItem$DispenseConfig;
        shoot(projectile: $Projectile, x: number, arg2: number, y: number, arg4: number, z: number): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static BASE_DAMAGE: number;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static SHOOT_POWER: number;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static THROW_THRESHOLD_TIME: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
    }
    export class $HangingSignItem extends $SignItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(block: $Block_, wallBlock: $Block_, properties: $Item$Properties);
    }
    export class $EnderEyeItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
    }
    export class $ArmorItem extends $Item implements $Equipable {
        /**
         * Return the enchantability factor of the item, most of the time is based on material.
         */
        getDefense(): number;
        getToughness(): number;
        getMaterial(): $Holder<$ArmorMaterial>;
        static dispenseArmor(blockSource: $BlockSource_, armorItem: $ItemStack_): boolean;
        getType(): $ArmorItem$Type;
        getEquipmentSlot(): $EquipmentSlot;
        getEquipSound(): $Holder<$SoundEvent>;
        swapWithEquipmentSlot(item: $Item_, level: $Level_, player: $Player, hand: $InteractionHand_): $InteractionResultHolder<$ItemStack>;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static DISPENSE_ITEM_BEHAVIOR: $DispenseItemBehavior;
        defaultModifiers: $Supplier<$ItemAttributeModifiers>;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(material: $Holder_<$ArmorMaterial>, type: $ArmorItem$Type_, properties: $Item$Properties);
        get defense(): number;
        get toughness(): number;
        get material(): $Holder<$ArmorMaterial>;
        get type(): $ArmorItem$Type;
        get equipmentSlot(): $EquipmentSlot;
        get equipSound(): $Holder<$SoundEvent>;
    }
    export class $JukeboxSongPlayer {
        isPlaying(): boolean;
        getSong(): $JukeboxSong;
        getTicksSinceSongStarted(): number;
        play(level: $LevelAccessor, song: $Holder_<$JukeboxSong>): void;
        setSongWithoutPlaying(song: $Holder_<$JukeboxSong>, ticksSinceSongStarted: number): void;
        stop(level: $LevelAccessor, state: $BlockState_ | null): void;
        tick(level: $LevelAccessor, state: $BlockState_ | null): void;
        static PLAY_EVENT_INTERVAL_TICKS: number;
        constructor(onSongChanged: $JukeboxSongPlayer$OnSongChanged_, blockPos: $BlockPos_);
        get playing(): boolean;
        get song(): $JukeboxSong;
        get ticksSinceSongStarted(): number;
    }
    export class $ProjectileWeaponItem extends $Item {
        /**
         * Return the enchantability factor of the item, most of the time is based on material.
         */
        getDefaultProjectileRange(): number;
        customArrow(arg0: $AbstractArrow, arg1: $ItemStack_, arg2: $ItemStack_): $AbstractArrow;
        /**
         * @deprecated
         * Get the predicate to match ammunition when searching the player's inventory, not their main/offhand
         */
        getSupportedHeldProjectiles(): $Predicate<$ItemStack>;
        getSupportedHeldProjectiles(arg0: $ItemStack_): $Predicate<$ItemStack>;
        static getHeldProjectile(shooter: $LivingEntity, isAmmo: $Predicate_<$ItemStack>): $ItemStack;
        getAllSupportedProjectiles(arg0: $ItemStack_): $Predicate<$ItemStack>;
        /**
         * @deprecated
         * Get the predicate to match ammunition when searching the player's inventory, not their main/offhand
         */
        getAllSupportedProjectiles(): $Predicate<$ItemStack>;
        getDefaultCreativeAmmo(arg0: $Player | null, arg1: $ItemStack_): $ItemStack;
        static ARROW_ONLY: $Predicate<$ItemStack>;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static ARROW_OR_FIREWORK: $Predicate<$ItemStack>;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
        get defaultProjectileRange(): number;
    }
    export class $DyeItem extends $Item implements $SignApplicator {
        static byColor(color: $DyeColor_): $DyeItem;
        tryApplyToSign(level: $Level_, sign: $SignBlockEntity, isFront: boolean, player: $Player): boolean;
        getDyeColor(): $DyeColor;
        canApplyToSign(text: $SignText, player: $Player): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(dyeColor: $DyeColor_, properties: $Item$Properties);
        get dyeColor(): $DyeColor;
    }
    export class $Item$Properties implements $IItemPropertiesExtensions, $InjectedItemPropertiesExtension, $ItemPropertiesExtensionImpl, $OwoItemSettingsExtension {
        arch$getTab(): $CreativeModeTab;
        arch$getTabSupplier(): $DeferredSupplier<any>;
        stackGenerator(): $BiConsumer<any, any>;
        stackGenerator(generator: $BiConsumer_<any, any>): $Item$Properties;
        groupSupplier(): $Supplier<any>;
        shouldTrackUsageStat(): boolean;
        fireResistant(): $Item$Properties;
        jukeboxPlayable(song: $ResourceKey_<$JukeboxSong>): $Item$Properties;
        setNoRepair(): $Item$Properties;
        arch$tab(tab: $CreativeModeTab_): $Item$Properties;
        arch$tab(tab: $DeferredSupplier<any>): $Item$Properties;
        arch$tab(song: $ResourceKey_<any>): $Item$Properties;
        trackUsageStat(): $Item$Properties;
        buildAndValidateComponents(): $DataComponentMap;
        static validateComponents(arg0: $DataComponentMap_): $DataComponentMap;
        rarity(rarity: $Rarity_): $Item$Properties;
        durability(maxDamage: number): $Item$Properties;
        craftRemainder(craftingRemainingItem: $Item_): $Item$Properties;
        stacksTo(maxDamage: number): $Item$Properties;
        group(): $OwoItemGroup;
        group(ref: $ItemGroupReference_): $Item$Properties;
        group(group: $OwoItemGroup): $Item$Properties;
        group(groupSupplier: $Supplier_<any>): $Item$Properties;
        component<T>(component: $DataComponentType_<T>, value: T): $Item$Properties;
        tab(): number;
        tab(maxDamage: number): $Item$Properties;
        attributes(attributes: $ItemAttributeModifiers_): $Item$Properties;
        requiredFeatures(...requiredFeatures: $FeatureFlag[]): $Item$Properties;
        food(food: $FoodProperties_): $Item$Properties;
        component<T>(arg0: $Supplier_<$DataComponentType<T>>, arg1: T): $Item$Properties;
        static COMPONENT_INTERNER: $Interner<$DataComponentMap>;
        constructor();
    }
    export class $ItemFrameItem extends $HangingEntityItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        type: $EntityType<$HangingEntity>;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(type: $EntityType_<$HangingEntity>, properties: $Item$Properties);
    }
    /**
     * @deprecated
     */
    export class $ItemStack implements $DataComponentHolder, $MutableDataComponentHolder, $IItemStackExtension, $ItemStackAccessor$1, $ItemStackAccessor, $ChangeSubscriber<any>, $ChangePublisher<any>, $ItemStackKJS {
        static parseOptional(lookupProvider: $HolderLookup$Provider, tag: $CompoundTag_): $ItemStack;
        getTagEnchantments(): $ItemEnchantments;
        /**
         * Returns `true` if this `ItemStack` is damageable.
         */
        isDamageableItem(): boolean;
        transmuteCopy(item: $ItemLike_, count: number): $ItemStack;
        transmuteCopy(item: $ItemLike_): $ItemStack;
        onItemUseFirst(context: $UseOnContext): $InteractionResult;
        canBeHurtBy(damageSource: $DamageSource_): boolean;
        /**
         * Returns a new stack with the same properties.
         */
        copyAndClear(): $ItemStack;
        /**
         * Returns `true` if this `ItemStack` is damageable.
         */
        isDamaged(): boolean;
        /**
         * Returns the max damage an item in the stack can take.
         */
        getDamageValue(): number;
        /**
         * Returns the max damage an item in the stack can take.
         */
        getMaxDamage(): number;
        overrideStackedOnOther(slot: $Slot, action: $ClickAction_, player: $Player): boolean;
        overrideOtherStackedOnMe(stack: $ItemStack_, slot: $Slot, action: $ClickAction_, player: $Player, access: $SlotAccess): boolean;
        /**
         * Called when a Block is destroyed using this ItemStack
         */
        mineBlock(level: $Level_, state: $BlockState_, pos: $BlockPos_, player: $Player): void;
        /**
         * Called each tick as long the `ItemStack` in in player's inventory. Used to progress the pickup animation and update maps.
         */
        inventoryTick(level: $Level_, entity: $Entity, inventorySlot: number, isCurrentItem: boolean): void;
        onCraftedBy(level: $Level_, player: $Player, amount: number): void;
        /**
         * Returns `true` if this `ItemStack` is damageable.
         */
        isEnchanted(): boolean;
        /**
         * Returns `true` if this `ItemStack` is damageable.
         */
        isEnchantable(): boolean;
        static validateComponents(components: $DataComponentMap_): $DataResult<$Unit>;
        /**
         * @deprecated
         */
        onDestroyed(itemEntity: $ItemEntity): void;
        useOn(context: $UseOnContext): $InteractionResult;
        getRarity(): $Rarity;
        resetComponents(): this;
        /**
         * Get a ChatComponent for this Item's display name that shows this Item on hover
         */
        getHoverName(): $Component;
        getItemHolder(): $Holder<$Item>;
        copyWithCount(count: number): $ItemStack;
        setEntityRepresentation(entity: $Entity | null): void;
        lithium$unsubscribe(arg0: $ChangeSubscriber<any>): number;
        lithium$isSubscribedWithData(arg0: $ChangeSubscriber<any>, arg1: number): boolean;
        onCraftedBySystem(level: $Level_): void;
        consumeAndReturn(amount: number, entity: $LivingEntity | null): $ItemStack;
        static validatedStreamCodec(codec: $StreamCodec<$RegistryFriendlyByteBuf, $ItemStack_>): $StreamCodec<$RegistryFriendlyByteBuf, $ItemStack>;
        /**
         * Returns `true` if this `ItemStack` is damageable.
         */
        isComponentsPatchEmpty(): boolean;
        wrapOperation$zen001$geckolib$removeGeckolibIdOnCopy(arg0: $ItemStack_, arg1: number, arg2: $Operation_<any>): $ItemStack;
        saveOptional(levelRegistryAccess: $HolderLookup$Provider): $Tag;
        hurtAndConvertOnBreak(amount: number, item: $ItemLike_, entity: $LivingEntity, slot: $EquipmentSlot_): $ItemStack;
        /**
         * Returns the max damage an item in the stack can take.
         */
        getPopTime(): number;
        setPopTime(increment: number): void;
        /**
         * @deprecated
         */
        static listMatches(list: $List_<$ItemStack_>, other: $List_<$ItemStack_>): boolean;
        static hashItemAndComponents(stack: $ItemStack_ | null): number;
        /**
         * @deprecated
         */
        static hashStackList(list: $List_<$ItemStack_>): number;
        applyComponentsAndValidate(components: $DataComponentPatch_): void;
        addToTooltip<T extends $TooltipProvider>(component: $DataComponentType_<T>, context: $Item$TooltipContext, tooltipAdder: $Consumer_<$Component>, tooltipFlag: $TooltipFlag): void;
        /**
         * Returns `true` if this `ItemStack` is damageable.
         */
        isFramed(): boolean;
        /**
         * Return the item frame this stack is on. Returns null if not on an item frame.
         */
        getFrame(): $ItemFrame;
        /**
         * For example, it'll return an `ItemFrameEntity` if it is in an itemframe.
         */
        getEntityRepresentation(): $Entity;
        getComponentsPatch(): $DataComponentPatch;
        /**
         * Returns `true` if this `ItemStack` is damageable.
         */
        isStackable(): boolean;
        setDamageValue(increment: number): void;
        update<T>(component: $DataComponentType_<T>, defaultValue: T, updater: $UnaryOperator_<T>): T;
        update<T, U>(component: $DataComponentType_<T>, defaultValue: T, updateValue: U, updater: $BiFunction_<T, U, T>): T;
        /**
         * Returns `true` if this `ItemStack` is damageable.
         */
        isEmpty(): boolean;
        static matches(stack: $ItemStack_, other: $ItemStack_): boolean;
        split(count: number): $ItemStack;
        /**
         * Returns the max damage an item in the stack can take.
         */
        getCount(): number;
        save(levelRegistryAccess: $HolderLookup$Provider): $Tag;
        save(levelRegistryAccess: $HolderLookup$Provider, outputTag: $Tag_): $Tag;
        static parse(lookupProvider: $HolderLookup$Provider, tag: $Tag_): ($ItemStack) | undefined;
        /**
         * Returns a new stack with the same properties.
         */
        copy(): $ItemStack;
        /**
         * Called when the `ItemStack` is equipped and right-clicked. Replaces the `ItemStack` with the return value.
         */
        use(level: $Level_, player: $Player, usedHand: $InteractionHand_): $InteractionResultHolder<$ItemStack>;
        is(item: $Predicate_<$Holder<$Item>>): boolean;
        is(tag: $TagKey_<$Item>): boolean;
        is(item: $Item_): boolean;
        is(item: $HolderSet_<$Item>): boolean;
        is(item: $Holder_<$Item>): boolean;
        grow(increment: number): void;
        /**
         * Get a ChatComponent for this Item's display name that shows this Item on hover
         */
        getDisplayName(): $Component;
        consume(amount: number, entity: $LivingEntity | null): void;
        /**
         * Returns the object corresponding to the stack.
         */
        getItem(): $Item;
        limitSize(increment: number): void;
        setCount(increment: number): void;
        getComponents(): $DataComponentMap;
        /**
         * Returns the max damage an item in the stack can take.
         */
        getMaxStackSize(): number;
        /**
         * Returns `true` if this `ItemStack` is damageable.
         */
        isBarVisible(): boolean;
        /**
         * Returns the max damage an item in the stack can take.
         */
        getBarWidth(): number;
        /**
         * Returns the max damage an item in the stack can take.
         */
        getBarColor(): number;
        getTooltipImage(): ($TooltipComponent) | undefined;
        getTooltipLines(tooltipContext: $Item$TooltipContext, player: $Player | null, tooltipFlag: $TooltipFlag): $List<$Component>;
        /**
         * Returns `true` if this `ItemStack` is damageable.
         */
        hasFoil(): boolean;
        getDescriptionId(): string;
        isItemEnabled(enabledFlags: $FeatureFlagSet): boolean;
        static lenientOptionalFieldOf(fieldName: string): $MapCodec<$ItemStack>;
        getPrototype(): $DataComponentMap;
        static isSameItemSameComponents(stack: $ItemStack_, other: $ItemStack_): boolean;
        shrink(increment: number): void;
        getBreakingSound(): $SoundEvent;
        static isSameItem(stack: $ItemStack_, other: $ItemStack_): boolean;
        getDestroySpeed(state: $BlockState_): number;
        /**
         * Check whether the given Block can be harvested using this ItemStack.
         */
        isCorrectToolForDrops(state: $BlockState_): boolean;
        interactLivingEntity(player: $Player, entity: $LivingEntity, usedHand: $InteractionHand_): $InteractionResult;
        hurtEnemy(target: $LivingEntity, attacker: $Player): boolean;
        postHurtEnemy(target: $LivingEntity, attacker: $Player): void;
        canPlaceOnBlockInAdventureMode(block: $BlockInWorld): boolean;
        getDrinkingSound(): $SoundEvent;
        getEatingSound(): $SoundEvent;
        forEachModifier(equipmentSLot: $EquipmentSlot_, action: $BiConsumer_<$Holder<$Attribute>, $AttributeModifier>): void;
        forEachModifier(slotGroup: $EquipmentSlotGroup_, action: $BiConsumer_<$Holder<$Attribute>, $AttributeModifier>): void;
        /**
         * Called as the stack is being used by an entity.
         */
        onUseTick(level: $Level_, livingEntity: $LivingEntity, count: number): void;
        /**
         * Returns `true` if this `ItemStack` is damageable.
         */
        useOnRelease(): boolean;
        getUseDuration(entity: $LivingEntity): number;
        getUseAnimation(): $UseAnim;
        /**
         * Called when the item in use count reach 0, e.g. item food eaten. Return the new ItemStack. Args : world, entity
         */
        finishUsingItem(level: $Level_, livingEntity: $LivingEntity): $ItemStack;
        /**
         * Called as the stack is being used by an entity.
         */
        releaseUsing(level: $Level_, livingEntity: $LivingEntity, count: number): void;
        lithium$notify(arg0: $PatchedDataComponentMap, arg1: number): void;
        lithium$unsubscribeWithData(arg0: $ChangeSubscriber<any>, arg1: number): void;
        lithium$forceUnsubscribe(arg0: $PatchedDataComponentMap, arg1: number): void;
        lithium$subscribe(arg0: $ChangeSubscriber<any>, arg1: number): void;
        hurtAndBreak(amount: number, entity: $LivingEntity, slot: $EquipmentSlot_): void;
        hurtAndBreak(arg0: number, arg1: $ServerLevel, arg2: $LivingEntity | null, arg3: $Consumer_<$Item>): void;
        hurtAndBreak(damage: number, level: $ServerLevel, player: $ServerPlayer | null, onBreak: $Consumer_<$Item>): void;
        canBreakBlockInAdventureMode(block: $BlockInWorld): boolean;
        has(component: $DataComponentType_<never>): boolean;
        update<T>(arg0: $Supplier_<$DataComponentType<T>>, arg1: T, arg2: $UnaryOperator_<T>): T;
        update<T, U>(arg0: $Supplier_<$DataComponentType<T>>, arg1: T, arg2: U, arg3: $BiFunction_<T, U, T>): T;
        copyFrom(arg0: $DataComponentHolder_, ...arg1: $Supplier_<$DataComponentType<never>>[]): void;
        copyFrom(arg0: $DataComponentHolder_, ...arg1: $DataComponentType_<never>[]): void;
        /**
         * Computes the gameplay attribute modifiers for this item stack. Used in place of direct access to `ATTRIBUTE_MODIFIERS`
         * or `Item#getDefaultAttributeModifiers(ItemStack)` when querying attributes for gameplay purposes.
         * 
         * This method first computes the default modifiers, using `ATTRIBUTE_MODIFIERS` if present, otherwise
         * falling back to `Item#getDefaultAttributeModifiers(ItemStack)`.
         * 
         * The `ItemAttributeModifiersEvent` is then fired to allow external adjustments.
         */
        getAttributeModifiers(): $ItemAttributeModifiers;
        /**
         * Returns `true` if this `ItemStack` is damageable.
         */
        isRepairable(): boolean;
        /**
         * Returns `true` if this `ItemStack` is damageable.
         */
        canFitInsideContainerItems(): boolean;
        supportsEnchantment(item: $Holder_<$Enchantment>): boolean;
        /**
         * Called when a player drops the item into the world, returning false from this
         * will prevent the item from being removed from the players inventory and
         * spawning in the world
         */
        onDroppedByPlayer(player: $Player): boolean;
        /**
         * Allow the item one last chance to modify its name used for the tool highlight
         * useful for adding something extra that can't be removed by a user in the
         * displayed name, such as a mode of operation.
         */
        getHighlightTip(displayName: $Component_): $Component;
        /**
         * Returns `true` if this `ItemStack` is damageable.
         */
        isPiglinCurrency(): boolean;
        /**
         * Determines the amount of durability the mending enchantment
         * will repair, on average, per point of experience.
         */
        getXpRepairRatio(): number;
        /**
         * Retrieves the normal 'lifespan' of this item when it is dropped on the ground
         * as a EntityItem. This is in ticks, standard result is 6000, or 5 mins.
         */
        getEntityLifespan(level: $Level_): number;
        /**
         * Called by the default implemetation of EntityItem's onUpdate method, allowing
         * for cleaner control over the update of the item without having to write a
         * subclass.
         */
        onEntityItemUpdate(entity: $ItemEntity): boolean;
        doesSneakBypassUse(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Player): boolean;
        /**
         * Determines if the specific ItemStack can be placed in the specified armor
         * slot, for the entity.
         */
        canEquip(armorType: $EquipmentSlot_, entity: $LivingEntity): boolean;
        /**
         * Called when the player is mining a block and the item in his hand changes.
         * Allows to not reset blockbreaking if only NBT or similar changes.
         */
        isBookEnchantable(newStack: $ItemStack_): boolean;
        isPrimaryItemFor(item: $Holder_<$Enchantment>): boolean;
        /**
         * Gets the gameplay level of the target enchantment on this stack.
         * 
         * Use in place of `EnchantmentHelper#getTagEnchantmentLevel` for gameplay logic.
         * 
         * Use `EnchantmentHelper#getEnchantmentsForCrafting` and `EnchantmentHelper#setEnchantments` when modifying the item's enchantments.
         */
        getEnchantmentLevel(enchantment: $Holder_<$Enchantment>): number;
        getAllEnchantments(arg0: $HolderLookup$RegistryLookup<$Enchantment_>): $ItemEnchantments;
        /**
         * Called when the player is mining a block and the item in his hand changes.
         * Allows to not reset blockbreaking if only NBT or similar changes.
         */
        shouldCauseBlockBreakReset(newStack: $ItemStack_): boolean;
        /**
         * Returns the fuel burn time for this item stack. If it is zero, this item is not a fuel.
         * 
         * Will never return a negative value.
         */
        getBurnTime(recipeType: $RecipeType_<never>): number;
        /**
         * Called every tick when this item is equipped as an armor item by a horse Mob#canWearBodyArmor() that can wear armor}.
         * 
         * In vanilla, only horses and wolves can wear armor, and they can only equip items that extend `AnimalArmorItem`.
         */
        onAnimalArmorTick(level: $Level_, horse: $Mob): void;
        /**
         * Whether this Item can be used to hide player head for enderman.
         */
        isEnderMask(player: $Player, endermanEntity: $EnderMan): boolean;
        /**
         * Whether this stack should be excluded (if possible) when selecting the target hotbar slot of a "pick" action.
         * By default, this returns true for enchanted stacks.
         */
        isNotReplaceableByPickAction(player: $Player, inventorySlot: number): boolean;
        /**
         * Returns `true` if this `ItemStack` is damageable.
         */
        canGrindstoneRepair(): boolean;
        /**
         * Returns a new stack with the same properties.
         */
        getCraftingRemainingItem(): $ItemStack;
        /**
         * Returns `true` if this `ItemStack` is damageable.
         */
        hasCraftingRemainingItem(): boolean;
        /**
         * Returns the max damage an item in the stack can take.
         */
        getEnchantmentValue(): number;
        /**
         * Called when an item entity for this stack is destroyed. Note: The `ItemStack` can be retrieved from the item entity.
         */
        onDestroyed(itemEntity: $ItemEntity, damageSource: $DamageSource_): void;
        /**
         * Used to determine if the player can use Elytra flight.
         * This is called Client and Server side.
         */
        canWalkOnPowderedSnow(entity: $LivingEntity): boolean;
        /**
         * Used to determine if the player can use Elytra flight.
         * This is called Client and Server side.
         */
        makesPiglinsNeutral(entity: $LivingEntity): boolean;
        /**
         * Override this to set a non-default armor slot for an ItemStack, but *do
         * not use this to get the armor slot of said stack; for that, use
         * `LivingEntity#getEquipmentSlotForItem(ItemStack)`.*
         */
        getEquipmentSlot(): $EquipmentSlot;
        getSweepHitBox(player: $Player, target: $Entity): $AABB;
        /**
         * Called when a entity tries to play the 'swing' animation.
         */
        onEntitySwing(entity: $LivingEntity, hand: $InteractionHand_): boolean;
        /**
         * @deprecated
         * Used to determine if the player can use Elytra flight.
         * This is called Client and Server side.
         */
        onEntitySwing(entity: $LivingEntity): boolean;
        /**
         * Used to determine if the player can use Elytra flight.
         * This is called Client and Server side.
         */
        canElytraFly(entity: $LivingEntity): boolean;
        /**
         * Used to determine if the player can continue Elytra flight,
         * this is called each tick, and can be used to apply ItemStack damage,
         * consume Energy, or what have you.
         * For example the Vanilla implementation of this, applies damage to the
         * ItemStack every 20 ticks.
         */
        elytraFlightTick(entity: $LivingEntity, flightTicks: number): boolean;
        /**
         * Called when an entity stops using an item item for any reason.
         */
        onStopUsing(entity: $LivingEntity, count: number): void;
        /**
         * Queries if an item can perform the given action.
         * See `ItemAbilities` for a description of each stock action
         */
        canPerformAction(itemAbility: $ItemAbility_): boolean;
        /**
         * Get the food properties for this item.
         * This is a bouncer for easier use of `IItemExtension#getFoodProperties(ItemStack, LivingEntity)`
         * 
         * The @Nullable annotation was only added, due to the default method, also being @Nullable.
         * Use this with a grain of salt, as if you return null here and true at `Item#isEdible()`, NPEs will occur!
         */
        getFoodProperties(entity: $LivingEntity): $FoodProperties;
        /**
         * Can this Item disable a shield
         */
        canDisableShield(shield: $ItemStack_, entity: $LivingEntity, attacker: $LivingEntity): boolean;
        getCapability<T>(arg0: $ItemCapability<T, void>): T;
        getCapability<T, C>(arg0: $ItemCapability<T, C>, arg1: C): T;
        asIngredient(): $Ingredient;
        getWebIconURL(ops: $DynamicOps<$Tag_>, size: number): $RelativeURL;
        /**
         * Called when the player is mining a block and the item in his hand changes.
         * Allows to not reset blockbreaking if only NBT or similar changes.
         */
        equalsIgnoringCount(newStack: $ItemStack_): boolean;
        getEnchantments(): $ItemEnchantments;
        /**
         * Determines the amount of durability the mending enchantment
         * will repair, on average, per point of experience.
         */
        getHarvestSpeed(): number;
        getHarvestSpeed(block: $LevelBlock): number;
        toItemString0(dynamicOps: $DynamicOps<$Tag_>): string;
        withCount(count: number): this;
        withCustomName(name: $Component_): this;
        hasEnchantment(enchantment: $Holder_<$Enchantment>, level: number): boolean;
        enchant(enchantments: $ItemEnchantments_): this;
        enchant(enchantment: $Holder_<$Enchantment>, level: number): this;
        /**
         * Called when the player is mining a block and the item in his hand changes.
         * Allows to not reset blockbreaking if only NBT or similar changes.
         */
        areItemsEqual(newStack: $ItemStack_): boolean;
        /**
         * Called when the player is mining a block and the item in his hand changes.
         * Allows to not reset blockbreaking if only NBT or similar changes.
         */
        areComponentsEqual(newStack: $ItemStack_): boolean;
        toStringJS(): string;
        toItemString(): string;
        /**
         * @deprecated
         */
        withChance(chance: number): $ItemStack;
        withLore(lines: $Component_[]): this;
        withLore(lines: $Component_[], styledLines: $Component_[]): this;
        getComponentString(): string;
        getTypeData(): $Map<string, $Object>;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        getRegistryId(): $ResourceKey<$Registry<$Item>>;
        getRegistry(): $Registry<$Item>;
        asHolder(): $Holder<$Item>;
        getIdLocation(): $ResourceLocation;
        getMod(): string;
        matches(cx: $RecipeMatchContext, s: $ItemStack_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, itemLike: $ItemLike_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, arg1: $Ingredient_, exact: boolean): boolean;
        /**
         * Returns a new stack with the same properties.
         */
        self(): $ItemStack;
        getKey(): $ResourceKey<$Item>;
        getCodec(): $Codec<$ItemStack>;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getId(): string;
        getBlock(): $Block;
        addToTooltip<T extends $TooltipProvider>(type: $Supplier_<$DataComponentType<T>>, context: $Item$TooltipContext, adder: $Consumer_<$Component>, flag: $TooltipFlag): void;
        has(type: $Supplier_<$DataComponentType<never>>): boolean;
        getComponentHolder(): $MutableDataComponentHolder;
        patch(components: $DataComponentPatch_): $ComponentFunctions;
        getComponentMap(): $DataComponentMap;
        toJson(): $JsonElement;
        toNBT(): $Tag;
        setFood(nutrition: number, saturation: number): void;
        setFood(foodProperties: $FoodProperties_): void;
        modifyFood(foodBuilder: $Consumer_<$FoodBuilder>): void;
        setMaxStackSize(increment: number): void;
        setMaxDamage(increment: number): void;
        setDamage(increment: number): void;
        setUnbreakable(): void;
        setUnbreakableWithTooltip(): void;
        setItemName(component: $Component_): void;
        setRepairCost(increment: number): void;
        setFireResistant(): void;
        setTool(tool: $Tool_): void;
        setMapItemColor(color: $KubeColor_): void;
        setChargedProjectiles(items: $List_<$ItemStack_>): void;
        setBundleContents(items: $List_<$ItemStack_>): void;
        setBucketEntityData(tag: $CompoundTag_): void;
        setBlockEntityData(tag: $CompoundTag_): void;
        setInstrument(tag: $Holder_<$Instrument>): void;
        setFireworkExplosion(explosion: $FireworkExplosion_): void;
        setFireworks(fireworks: $Fireworks_): void;
        setNoteBlockSound(id: $ResourceLocation_): void;
        /**
         * Computes the gameplay attribute modifiers for this item stack. Used in place of direct access to `ATTRIBUTE_MODIFIERS`
         * or `Item#getDefaultAttributeModifiers(ItemStack)` when querying attributes for gameplay purposes.
         * 
         * This method first computes the default modifiers, using `ATTRIBUTE_MODIFIERS` if present, otherwise
         * falling back to `Item#getDefaultAttributeModifiers(ItemStack)`.
         * 
         * The `ItemAttributeModifiersEvent` is then fired to allow external adjustments.
         */
        getAttributeModifiers(): $ItemAttributeModifiers;
        matchesAny(cx: $RecipeMatchContext, itemLikes: $Iterable_<$ItemLike>, exact: boolean): boolean;
        getTagKeys(): $List<$TagKey<$Object>>;
        getTags(): $List<$ResourceLocation>;
        hasTag(tag: $ResourceLocation_): boolean;
        remove(type: $DataComponentType_<never>): $ComponentFunctions;
        setUnit(component: $DataComponentType_<$Unit_>): $ComponentFunctions;
        setCustomData(tag: $CompoundTag_): void;
        getCustomData(): $CompoundTag;
        setRarity(rarity: $Rarity_): void;
        setCustomName(name: $Component_): void;
        /**
         * Get a ChatComponent for this Item's display name that shows this Item on hover
         */
        getCustomName(): $Component;
        setLore(lines: $List_<$Component_>): void;
        setLore(lines: $List_<$Component_>, styledLines: $List_<$Component_>): void;
        setCustomModelData(increment: number): void;
        setAdditionalTooltipHidden(): void;
        setTooltipHidden(): void;
        setGlintOverride(override: boolean): void;
        setDyedColor(color: $KubeColor_): void;
        setDyedColorWithTooltip(color: $KubeColor_): void;
        setPotionContents(contents: $PotionContents_): void;
        setPotionId(tag: $Holder_<$Potion>): void;
        setEntityData(tag: $CompoundTag_): void;
        setProfile(name: string, uuid: $UUID_): void;
        setProfile(profile: $GameProfile): void;
        setBaseColor(color: $DyeColor_): void;
        setBlockStateProperties(properties: $Map_<string, string>): void;
        setLockCode(lock: string): void;
        setContainerLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        setContainerLootTable(lootTable: $ResourceKey_<$LootTable>): void;
        setAttributeModifiers(modifiers: $List_<$ItemAttributeModifiers$Entry_>): void;
        getBaseAttackDamage(): number;
        getBaseAttackSpeed(): number;
        addAttributeModifier(attribute: $Holder_<$Attribute>, mod: $AttributeModifier_, slot: $EquipmentSlotGroup_): void;
        hasAttributeModifier(attribute: $Holder_<$Attribute>, id: $ResourceLocation_): boolean;
        getAttributeModifier(attribute: $Holder_<$Attribute>, id: $ResourceLocation_): $AttributeModifier;
        setAttributeModifiersWithTooltip(modifiers: $List_<$ItemAttributeModifiers$Entry_>): void;
        /**
         * Sets the attack speed of this item to the given value, **removing** all other modifiers to attack speed.
         * Note that players have a default attack speed of 4.0, so this modifier is added on top of that.
         * (Example: Swords have an attack speed of -2.4, leading to a total value of 1.6 without any other changes.)
         */
        setAttackSpeed(speed: number): void;
        /**
         * Sets the attack damage of this item to the given value, **removing** all other modifiers to attack damage.
         * Note that since players have a default attack damage of 1.0, total damage will be (dmg + 1.0) before other modifiers.
         * (In practice, this simply means that most weapons have this value set to 1 less than what you might think.)
         */
        setAttackDamage(dmg: number): void;
        getAttackDamage(): number;
        getAttackSpeed(): number;
        /**
         * Overrides the *base* attack speed of this item to be the given value, keeping other modifiers intact.
         * Note that players have a default attack speed of 4.0, so this modifier is added on top of that.
         */
        setBaseAttackSpeed(speed: number): void;
        /**
         * Overrides the *base* attack damage of this item to be the given value, keeping other modifiers intact.
         * Note that since players have a default attack damage of 1.0, total damage will be (dmg + 1.0) before other modifiers.
         */
        setBaseAttackDamage(dmg: number): void;
        accessories$addModifierTooltip(tooltipAdder: $Consumer_<$Component>, player: $Player, attribute: $Holder_<$Attribute>, modifier: $AttributeModifier_): void;
        accessories$components(): $PatchedDataComponentMap;
        /**
         * Returns the object corresponding to the stack.
         */
        lithium$getItem(): $Item;
        static SIMPLE_ITEM_CODEC: $Codec<$ItemStack>;
        static LIST_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $List<$ItemStack>>;
        static CODEC: $Codec<$ItemStack>;
        static ITEM_NON_AIR_CODEC: $Codec<$Holder<$Item>>;
        static SINGLE_ITEM_CODEC: $Codec<$ItemStack>;
        static STRICT_CODEC: $Codec<$ItemStack>;
        static OPTIONAL_CODEC: $Codec<$ItemStack>;
        static STRICT_SINGLE_ITEM_CODEC: $Codec<$ItemStack>;
        static OPTIONAL_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemStack>;
        static EMPTY: $ItemStack;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemStack>;
        static OPTIONAL_LIST_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $List<$ItemStack>>;
        constructor(item: $ItemLike_, count: number);
        constructor(item: $ItemLike_);
        constructor(item: $Holder_<$Item>, count: number);
        constructor(tag: $Holder_<$Item>, count: number, components: $DataComponentPatch_);
        constructor(tag: $Holder_<$Item>);
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
        get tagEnchantments(): $ItemEnchantments;
        get damageableItem(): boolean;
        get damaged(): boolean;
        get enchanted(): boolean;
        get enchantable(): boolean;
        get hoverName(): $Component;
        get itemHolder(): $Holder<$Item>;
        get componentsPatchEmpty(): boolean;
        get framed(): boolean;
        get frame(): $ItemFrame;
        get componentsPatch(): $DataComponentPatch;
        get stackable(): boolean;
        get empty(): boolean;
        get displayName(): $Component;
        get item(): $Item;
        get components(): $DataComponentMap;
        get barVisible(): boolean;
        get barWidth(): number;
        get barColor(): number;
        get tooltipImage(): ($TooltipComponent) | undefined;
        get descriptionId(): string;
        get prototype(): $DataComponentMap;
        get breakingSound(): $SoundEvent;
        get drinkingSound(): $SoundEvent;
        get eatingSound(): $SoundEvent;
        get useAnimation(): $UseAnim;
        get repairable(): boolean;
        get piglinCurrency(): boolean;
        get xpRepairRatio(): number;
        get craftingRemainingItem(): $ItemStack;
        get enchantmentValue(): number;
        get equipmentSlot(): $EquipmentSlot;
        get enchantments(): $ItemEnchantments;
        get componentString(): string;
        get typeData(): $Map<string, $Object>;
        get registryId(): $ResourceKey<$Registry<$Item>>;
        get registry(): $Registry<$Item>;
        get idLocation(): $ResourceLocation;
        get mod(): string;
        get key(): $ResourceKey<$Item>;
        get codec(): $Codec<$ItemStack>;
        get id(): string;
        get block(): $Block;
        get componentHolder(): $MutableDataComponentHolder;
        get componentMap(): $DataComponentMap;
        set damage(value: number);
        set itemName(value: $Component_);
        set repairCost(value: number);
        set tool(value: $Tool_);
        set mapItemColor(value: $KubeColor_);
        set chargedProjectiles(value: $List_<$ItemStack_>);
        set bundleContents(value: $List_<$ItemStack_>);
        set bucketEntityData(value: $CompoundTag_);
        set blockEntityData(value: $CompoundTag_);
        set instrument(value: $Holder_<$Instrument>);
        set fireworkExplosion(value: $FireworkExplosion_);
        set fireworks(value: $Fireworks_);
        set noteBlockSound(value: $ResourceLocation_);
        get tagKeys(): $List<$TagKey<$Object>>;
        get tags(): $List<$ResourceLocation>;
        set unit(value: $DataComponentType_<$Unit_>);
        set customModelData(value: number);
        set glintOverride(value: boolean);
        set dyedColor(value: $KubeColor_);
        set dyedColorWithTooltip(value: $KubeColor_);
        set potionContents(value: $PotionContents_);
        set potionId(value: $Holder_<$Potion>);
        set entityData(value: $CompoundTag_);
        set baseColor(value: $DyeColor_);
        set blockStateProperties(value: $Map_<string, string>);
        set lockCode(value: string);
        set attributeModifiersWithTooltip(value: $List_<$ItemAttributeModifiers$Entry_>);
    }
    /**
     * Values that may be interpreted as {@link $ItemStack}.
     */
    export type $ItemStack_ = $Item_ | { id: RegistryTypes.Item, count?: number,  };
    export class $LingeringPotionItem extends $ThrowablePotionItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
    }
    export class $CreativeModeTab$Builder {
        displayItems(arg0: $Collection_<$Holder_<$ItemLike>>): $CreativeModeTab$Builder;
        displayItems(displayItemsGenerator: $CreativeModeTab$DisplayItemsGenerator_): $CreativeModeTab$Builder;
        alignedRight(): $CreativeModeTab$Builder;
        backgroundTexture(backgroundTexture: $ResourceLocation_): $CreativeModeTab$Builder;
        hideTitle(): $CreativeModeTab$Builder;
        noScrollBar(): $CreativeModeTab$Builder;
        withTabsImage(backgroundTexture: $ResourceLocation_): $CreativeModeTab$Builder;
        withSearchBar(): $CreativeModeTab$Builder;
        withSearchBar(arg0: number): $CreativeModeTab$Builder;
        withScrollBarSpriteLocation(backgroundTexture: $ResourceLocation_): $CreativeModeTab$Builder;
        withLabelColor(arg0: number): $CreativeModeTab$Builder;
        withSlotColor(arg0: number): $CreativeModeTab$Builder;
        withTabFactory(arg0: $Function_<$CreativeModeTab$Builder, $CreativeModeTab>): $CreativeModeTab$Builder;
        withTabsBefore(...arg0: $ResourceLocation_[]): $CreativeModeTab$Builder;
        withTabsBefore(...arg0: $ResourceKey_<$CreativeModeTab>[]): $CreativeModeTab$Builder;
        withTabsAfter(...arg0: $ResourceKey_<$CreativeModeTab>[]): $CreativeModeTab$Builder;
        withTabsAfter(...arg0: $ResourceLocation_[]): $CreativeModeTab$Builder;
        build(): $CreativeModeTab;
        icon(icon: $Supplier_<$ItemStack>): $CreativeModeTab$Builder;
        title(title: $Component_): $CreativeModeTab$Builder;
        constructor(row: $CreativeModeTab$Row_, column: number);
    }
    export class $ProjectileItem$DispenseConfig extends $Record {
        positionFunction(): $ProjectileItem$PositionFunction;
        uncertainty(): number;
        overrideDispenseEvent(): $OptionalInt;
        static builder(): $ProjectileItem$DispenseConfig$Builder;
        power(): number;
        static DEFAULT: $ProjectileItem$DispenseConfig;
        constructor(arg0: $ProjectileItem$PositionFunction_, arg1: number, arg2: number, arg3: $OptionalInt);
    }
    /**
     * Values that may be interpreted as {@link $ProjectileItem$DispenseConfig}.
     */
    export type $ProjectileItem$DispenseConfig_ = { overrideDispenseEvent?: $OptionalInt, positionFunction?: $ProjectileItem$PositionFunction_, uncertainty?: number, power?: number,  } | [overrideDispenseEvent?: $OptionalInt, positionFunction?: $ProjectileItem$PositionFunction_, uncertainty?: number, power?: number, ];
    export class $EnchantedBookItem extends $Item {
        /**
         * Returns the ItemStack of an enchanted version of this item.
         */
        static createForEnchantment(instance: $EnchantmentInstance): $ItemStack;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
    }
    export class $ArrowItem extends $Item implements $ProjectileItem {
        createArrow(level: $Level_, ammo: $ItemStack_, shooter: $LivingEntity, weapon: $ItemStack_ | null): $AbstractArrow;
        asProjectile(level: $Level_, pos: $Position, stack: $ItemStack_, direction: $Direction_): $Projectile;
        isInfinite(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $LivingEntity): boolean;
        createDispenseConfig(): $ProjectileItem$DispenseConfig;
        shoot(projectile: $Projectile, x: number, arg2: number, y: number, arg4: number, z: number): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
    }
    export class $Tiers extends $Enum<$Tiers> implements $Tier {
        getUses(): number;
        getIncorrectBlocksForDrops(): $TagKey<$Block>;
        getRepairIngredient(): $Ingredient;
        getEnchantmentValue(): number;
        static values(): $Tiers[];
        static valueOf(arg0: string): $Tiers;
        getTag(): $TagKey<$Block>;
        getAttackDamageBonus(): number;
        getSpeed(): number;
        createToolProperties(block: $TagKey_<$Block>): $Tool;
        static GOLD: $Tiers;
        static NETHERITE: $Tiers;
        static WOOD: $Tiers;
        static DIAMOND: $Tiers;
        static IRON: $Tiers;
        static STONE: $Tiers;
        get uses(): number;
        get incorrectBlocksForDrops(): $TagKey<$Block>;
        get repairIngredient(): $Ingredient;
        get enchantmentValue(): number;
        get tag(): $TagKey<$Block>;
        get attackDamageBonus(): number;
        get speed(): number;
    }
    /**
     * Values that may be interpreted as {@link $Tiers}.
     */
    export type $Tiers_ = "wood" | "stone" | "iron" | "diamond" | "gold" | "netherite";
    export class $SuspiciousStewItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static DEFAULT_DURATION: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
    }
    export class $WritableBookItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
    }
    export class $Items {
        static registerBlock(item: $BlockItem): $Item;
        static registerBlock(block: $Block_, ...others: $Block_[]): $Item;
        static registerBlock(block: $Block_, propertiesModifier: $UnaryOperator_<$Item$Properties>): $Item;
        static registerBlock(block: $Block_): $Item;
        static registerBlock(block: $Block_, item: $Item_): $Item;
        static registerItem(key: string, item: $Item_): $Item;
        static registerItem(key: $ResourceLocation_, item: $Item_): $Item;
        static registerItem(key: $ResourceKey_<$Item>, item: $Item_): $Item;
        static GREEN_CONCRETE_POWDER: $Item;
        static FOX_SPAWN_EGG: $Item;
        static PIGLIN_HEAD: $Item;
        static SHAPER_ARMOR_TRIM_SMITHING_TEMPLATE: $Item;
        static PURPLE_CARPET: $Item;
        static GOLDEN_PICKAXE: $Item;
        static SMALL_AMETHYST_BUD: $Item;
        static DEAD_TUBE_CORAL: $Item;
        static WOLF_SPAWN_EGG: $Item;
        static GREEN_GLAZED_TERRACOTTA: $Item;
        static JUNGLE_PRESSURE_PLATE: $Item;
        static EXPOSED_CUT_COPPER: $Item;
        static TRAPPED_CHEST: $Item;
        static BEE_SPAWN_EGG: $Item;
        static STONE_BRICK_STAIRS: $Item;
        static SANDSTONE_WALL: $Item;
        static RABBIT_STEW: $Item;
        static OAK_WOOD: $Item;
        static WHITE_TULIP: $Item;
        static GRAY_STAINED_GLASS: $Item;
        static BLUE_ORCHID: $Item;
        static SPRUCE_DOOR: $Item;
        static STRIPPED_BIRCH_LOG: $Item;
        static LIGHT_BLUE_TERRACOTTA: $Item;
        static CHERRY_BOAT: $Item;
        static ZOMBIE_HEAD: $Item;
        static BROWN_WOOL: $Item;
        static FIRE_CHARGE: $Item;
        static GRANITE_WALL: $Item;
        static MANGROVE_BOAT: $Item;
        static SHORT_GRASS: $Item;
        static ORANGE_SHULKER_BOX: $Item;
        static FLINT_AND_STEEL: $Item;
        static GREEN_CANDLE: $Item;
        static CRACKED_STONE_BRICKS: $Item;
        static BRICK_SLAB: $Item;
        static BLUE_CANDLE: $Item;
        static LAPIS_BLOCK: $Item;
        static JUNGLE_SLAB: $Item;
        static PURPLE_BED: $Item;
        static END_STONE_BRICK_STAIRS: $Item;
        static CLOCK: $Item;
        static MUSIC_DISC_STRAD: $Item;
        static JUNGLE_PLANKS: $Item;
        static DIAMOND_HORSE_ARMOR: $Item;
        static CHEST_MINECART: $Item;
        static TURTLE_EGG: $Item;
        static DIAMOND: $Item;
        static WOODEN_SHOVEL: $Item;
        static WHITE_CANDLE: $Item;
        static VERDANT_FROGLIGHT: $Item;
        static COBBLESTONE: $Item;
        static TUBE_CORAL: $Item;
        static GILDED_BLACKSTONE: $Item;
        static CYAN_STAINED_GLASS_PANE: $Item;
        static WAXED_COPPER_BULB: $Item;
        static SMOOTH_RED_SANDSTONE_SLAB: $Item;
        static CHISELED_SANDSTONE: $Item;
        static ARROW: $Item;
        static TOTEM_OF_UNDYING: $Item;
        static LIGHT_BLUE_SHULKER_BOX: $Item;
        static NETHER_BRICK_WALL: $Item;
        static AXOLOTL_SPAWN_EGG: $Item;
        static WAXED_WEATHERED_CUT_COPPER_STAIRS: $Item;
        static RED_WOOL: $Item;
        static COMMAND_BLOCK: $Item;
        static ROOTED_DIRT: $Item;
        static PRISMARINE_STAIRS: $Item;
        static DEEPSLATE_TILE_STAIRS: $Item;
        static POLISHED_ANDESITE: $Item;
        static CRAFTING_TABLE: $Item;
        static MOJANG_BANNER_PATTERN: $Item;
        static CORNFLOWER: $Item;
        static SCULK_SHRIEKER: $Item;
        static INFESTED_COBBLESTONE: $Item;
        static TORCHFLOWER_SEEDS: $Item;
        static DIORITE: $Item;
        static LIGHT_BLUE_CONCRETE: $Item;
        static POLISHED_ANDESITE_SLAB: $Item;
        static END_CRYSTAL: $Item;
        static POLISHED_BLACKSTONE_BUTTON: $Item;
        static MOSSY_STONE_BRICK_WALL: $Item;
        static POLISHED_DEEPSLATE_WALL: $Item;
        static HORSE_SPAWN_EGG: $Item;
        static WARPED_SLAB: $Item;
        static SKELETON_HORSE_SPAWN_EGG: $Item;
        static STONE_BRICK_WALL: $Item;
        static DARK_OAK_WOOD: $Item;
        static WAXED_EXPOSED_CUT_COPPER_STAIRS: $Item;
        static CRIMSON_HYPHAE: $Item;
        static JUKEBOX: $Item;
        static DARK_OAK_BUTTON: $Item;
        static APPLE: $Item;
        static BIRCH_BOAT: $Item;
        static BUCKET: $Item;
        static GOAT_HORN: $Item;
        static CRACKED_DEEPSLATE_BRICKS: $Item;
        static CHERRY_PRESSURE_PLATE: $Item;
        static WARPED_STAIRS: $Item;
        static MANGROVE_PLANKS: $Item;
        static DEEPSLATE_TILE_WALL: $Item;
        static BLACK_CONCRETE_POWDER: $Item;
        static DARK_OAK_PRESSURE_PLATE: $Item;
        static MINECART: $Item;
        static POTION: $Item;
        static STRIPPED_SPRUCE_WOOD: $Item;
        static MANGROVE_LOG: $Item;
        static OAK_BUTTON: $Item;
        static BAMBOO_CHEST_RAFT: $Item;
        static GRANITE: $Item;
        static SAND: $Item;
        static SCRAPE_POTTERY_SHERD: $Item;
        static LIGHT: $Item;
        static BROWN_TERRACOTTA: $Item;
        static ORANGE_STAINED_GLASS_PANE: $Item;
        static WOODEN_AXE: $Item;
        static FILLED_MAP: $Item;
        static REINFORCED_DEEPSLATE: $Item;
        static MOURNER_POTTERY_SHERD: $Item;
        static INK_SAC: $Item;
        static NETHER_WART: $Item;
        static YELLOW_CARPET: $Item;
        static RECOVERY_COMPASS: $Item;
        static BEETROOT: $Item;
        static LILY_OF_THE_VALLEY: $Item;
        static DEEPSLATE_TILES: $Item;
        static HAY_BLOCK: $Item;
        static COOKIE: $Item;
        static IRON_LEGGINGS: $Item;
        static ORANGE_DYE: $Item;
        static LECTERN: $Item;
        static RAW_COPPER_BLOCK: $Item;
        static GLOW_INK_SAC: $Item;
        static CRIMSON_FENCE_GATE: $Item;
        static BLACK_STAINED_GLASS_PANE: $Item;
        static ALLIUM: $Item;
        static TUFF_BRICK_WALL: $Item;
        static COBBLESTONE_STAIRS: $Item;
        static CROSSBOW: $Item;
        static PUMPKIN_PIE: $Item;
        static CRYING_OBSIDIAN: $Item;
        static DETECTOR_RAIL: $Item;
        static SOUL_CAMPFIRE: $Item;
        static AMETHYST_CLUSTER: $Item;
        static PURPLE_STAINED_GLASS: $Item;
        static BROWN_CONCRETE_POWDER: $Item;
        static TUFF_STAIRS: $Item;
        static MANGROVE_ROOTS: $Item;
        static TERRACOTTA: $Item;
        static END_STONE_BRICKS: $Item;
        static BAMBOO_RAFT: $Item;
        static DROWNED_SPAWN_EGG: $Item;
        static COARSE_DIRT: $Item;
        static LIGHT_GRAY_GLAZED_TERRACOTTA: $Item;
        static GLOWSTONE: $Item;
        static MANGROVE_HANGING_SIGN: $Item;
        static DIORITE_SLAB: $Item;
        static SKULL_POTTERY_SHERD: $Item;
        static ANCIENT_DEBRIS: $Item;
        static WAXED_EXPOSED_COPPER_TRAPDOOR: $Item;
        static SUSPICIOUS_STEW: $Item;
        static PINK_SHULKER_BOX: $Item;
        static CRIMSON_DOOR: $Item;
        static PORKCHOP: $Item;
        static POLISHED_TUFF: $Item;
        static GLASS_PANE: $Item;
        static DIAMOND_ORE: $Item;
        static CHIPPED_ANVIL: $Item;
        static DEEPSLATE_COPPER_ORE: $Item;
        static OAK_LEAVES: $Item;
        static COOKED_COD: $Item;
        static CYAN_BANNER: $Item;
        static BAMBOO_STAIRS: $Item;
        static WAXED_OXIDIZED_CUT_COPPER_SLAB: $Item;
        static MAGENTA_BED: $Item;
        static SPONGE: $Item;
        static RED_BED: $Item;
        static SCULK: $Item;
        static RAW_IRON: $Item;
        static TRIAL_KEY: $Item;
        static TIPPED_ARROW: $Item;
        static IRON_NUGGET: $Item;
        static MANGROVE_TRAPDOOR: $Item;
        static CANDLE: $Item;
        static STRIPPED_SPRUCE_LOG: $Item;
        static WAXED_EXPOSED_COPPER_DOOR: $Item;
        static WOODEN_SWORD: $Item;
        static COPPER_GRATE: $Item;
        static CHORUS_PLANT: $Item;
        static NETHER_BRICK: $Item;
        static ANDESITE_STAIRS: $Item;
        static PIGLIN_SPAWN_EGG: $Item;
        static STONE_HOE: $Item;
        static WAXED_WEATHERED_COPPER_BULB: $Item;
        static BRICKS: $Item;
        static CAT_SPAWN_EGG: $Item;
        static RED_NETHER_BRICK_WALL: $Item;
        static WET_SPONGE: $Item;
        static STRUCTURE_BLOCK: $Item;
        static SPIDER_SPAWN_EGG: $Item;
        static CHERRY_BUTTON: $Item;
        static RED_CARPET: $Item;
        static ENCHANTING_TABLE: $Item;
        static PHANTOM_SPAWN_EGG: $Item;
        static GUSTER_BANNER_PATTERN: $Item;
        static YELLOW_STAINED_GLASS: $Item;
        static PIGLIN_BANNER_PATTERN: $Item;
        static DEEPSLATE: $Item;
        static BAT_SPAWN_EGG: $Item;
        static RED_BANNER: $Item;
        static TADPOLE_SPAWN_EGG: $Item;
        static BLUE_STAINED_GLASS_PANE: $Item;
        static SPRUCE_LOG: $Item;
        static COPPER_TRAPDOOR: $Item;
        static BIRCH_FENCE: $Item;
        static MAP: $Item;
        static HOGLIN_SPAWN_EGG: $Item;
        static SOUL_LANTERN: $Item;
        static POLISHED_BLACKSTONE_BRICKS: $Item;
        static WHITE_STAINED_GLASS_PANE: $Item;
        static LIME_STAINED_GLASS: $Item;
        static DIORITE_WALL: $Item;
        static MAGMA_BLOCK: $Item;
        static GLOWSTONE_DUST: $Item;
        static STRIDER_SPAWN_EGG: $Item;
        static DARK_OAK_SIGN: $Item;
        static GOLDEN_SHOVEL: $Item;
        static POLISHED_DEEPSLATE: $Item;
        static RABBIT_SPAWN_EGG: $Item;
        static BLUE_CONCRETE_POWDER: $Item;
        static CHORUS_FLOWER: $Item;
        static BLACK_GLAZED_TERRACOTTA: $Item;
        static WRITTEN_BOOK: $Item;
        static RED_STAINED_GLASS: $Item;
        static DIAMOND_PICKAXE: $Item;
        static BARRIER: $Item;
        static ENCHANTED_BOOK: $Item;
        static WARPED_FENCE_GATE: $Item;
        static DEEPSLATE_REDSTONE_ORE: $Item;
        static BAMBOO_MOSAIC_STAIRS: $Item;
        static DEEPSLATE_BRICK_STAIRS: $Item;
        static CLAY_BALL: $Item;
        static WANDERING_TRADER_SPAWN_EGG: $Item;
        static LEATHER_BOOTS: $Item;
        static MILK_BUCKET: $Item;
        static COOKED_BEEF: $Item;
        static GRAY_CANDLE: $Item;
        static FARMLAND: $Item;
        static SKELETON_SPAWN_EGG: $Item;
        static TRIAL_SPAWNER: $Item;
        static SMOOTH_BASALT: $Item;
        static PRISMARINE_BRICKS: $Item;
        static DARK_OAK_LOG: $Item;
        static BRAIN_CORAL_FAN: $Item;
        static LEATHER_LEGGINGS: $Item;
        static WEATHERED_CUT_COPPER_SLAB: $Item;
        static OMINOUS_TRIAL_KEY: $Item;
        static FISHING_ROD: $Item;
        static WARDEN_SPAWN_EGG: $Item;
        static ACACIA_HANGING_SIGN: $Item;
        static MAGENTA_SHULKER_BOX: $Item;
        static ENDER_PEARL: $Item;
        static QUARTZ_PILLAR: $Item;
        static WARPED_TRAPDOOR: $Item;
        static AXOLOTL_BUCKET: $Item;
        static STRIPPED_BAMBOO_BLOCK: $Item;
        static GOAT_SPAWN_EGG: $Item;
        static REDSTONE_BLOCK: $Item;
        static COBBLED_DEEPSLATE_WALL: $Item;
        static MUSIC_DISC_PIGSTEP: $Item;
        static CHISELED_POLISHED_BLACKSTONE: $Item;
        static EXPOSED_CHISELED_COPPER: $Item;
        static BIRCH_SLAB: $Item;
        static LIME_SHULKER_BOX: $Item;
        static QUARTZ_SLAB: $Item;
        static OXIDIZED_COPPER_GRATE: $Item;
        static QUARTZ_BLOCK: $Item;
        static SHEEP_SPAWN_EGG: $Item;
        static PIGLIN_BRUTE_SPAWN_EGG: $Item;
        static SNOW: $Item;
        static SUGAR_CANE: $Item;
        static TNT_MINECART: $Item;
        static WITCH_SPAWN_EGG: $Item;
        static ACACIA_FENCE: $Item;
        static ARMOR_STAND: $Item;
        static DARK_OAK_FENCE: $Item;
        static HORN_CORAL: $Item;
        static BOW: $Item;
        static TUBE_CORAL_FAN: $Item;
        static SUGAR: $Item;
        static MOSSY_COBBLESTONE: $Item;
        static WARPED_FENCE: $Item;
        static DAYLIGHT_DETECTOR: $Item;
        static POLISHED_TUFF_WALL: $Item;
        static RABBIT_HIDE: $Item;
        static BUBBLE_CORAL: $Item;
        static JUNGLE_STAIRS: $Item;
        static CYAN_CARPET: $Item;
        static OXIDIZED_COPPER_DOOR: $Item;
        static OBSERVER: $Item;
        static DEEPSLATE_DIAMOND_ORE: $Item;
        static AMETHYST_BLOCK: $Item;
        static SPRUCE_TRAPDOOR: $Item;
        static JUNGLE_BOAT: $Item;
        static CHERRY_STAIRS: $Item;
        static CUT_COPPER: $Item;
        static BLAST_FURNACE: $Item;
        static RED_SANDSTONE_SLAB: $Item;
        static OBSIDIAN: $Item;
        static FIRE_CORAL_FAN: $Item;
        static AZURE_BLUET: $Item;
        static DEBUG_STICK: $Item;
        static PURPLE_STAINED_GLASS_PANE: $Item;
        static LIME_GLAZED_TERRACOTTA: $Item;
        static HUSK_SPAWN_EGG: $Item;
        static CARTOGRAPHY_TABLE: $Item;
        static BOLT_ARMOR_TRIM_SMITHING_TEMPLATE: $Item;
        static ORANGE_CANDLE: $Item;
        static CHARCOAL: $Item;
        static ZOMBIE_SPAWN_EGG: $Item;
        static BEETROOT_SOUP: $Item;
        static WITHER_ROSE: $Item;
        static DEAD_BRAIN_CORAL_FAN: $Item;
        static PISTON: $Item;
        static NETHERITE_CHESTPLATE: $Item;
        static BLACK_CANDLE: $Item;
        static CUT_RED_SANDSTONE: $Item;
        static YELLOW_BANNER: $Item;
        static BIRCH_SAPLING: $Item;
        static LIME_CONCRETE: $Item;
        static CHAINMAIL_LEGGINGS: $Item;
        static PURPUR_SLAB: $Item;
        static SNOWBALL: $Item;
        static PURPLE_CONCRETE_POWDER: $Item;
        static PURPLE_BANNER: $Item;
        static BIRCH_LOG: $Item;
        static DEEPSLATE_BRICK_WALL: $Item;
        static DARK_PRISMARINE_SLAB: $Item;
        static ACACIA_PLANKS: $Item;
        static MYCELIUM: $Item;
        static RED_SANDSTONE: $Item;
        static BROWN_CONCRETE: $Item;
        static LEATHER_CHESTPLATE: $Item;
        static PRISMARINE_BRICK_STAIRS: $Item;
        static BUNDLE: $Item;
        static STONE_SLAB: $Item;
        static LEATHER_HORSE_ARMOR: $Item;
        static BIRCH_LEAVES: $Item;
        static BAMBOO_FENCE_GATE: $Item;
        static DEEPSLATE_GOLD_ORE: $Item;
        static NETHER_BRICK_FENCE: $Item;
        static FIREWORK_ROCKET: $Item;
        static BROWN_MUSHROOM: $Item;
        static TUFF_BRICK_SLAB: $Item;
        static CYAN_SHULKER_BOX: $Item;
        static POLISHED_BLACKSTONE_SLAB: $Item;
        static WAXED_EXPOSED_CHISELED_COPPER: $Item;
        static NETHERITE_BLOCK: $Item;
        static OCELOT_SPAWN_EGG: $Item;
        static ACACIA_PRESSURE_PLATE: $Item;
        static RED_SAND: $Item;
        static PACKED_MUD: $Item;
        static SHEARS: $Item;
        static POLISHED_GRANITE_STAIRS: $Item;
        static MAGENTA_BANNER: $Item;
        static QUARTZ_STAIRS: $Item;
        static DRIED_KELP_BLOCK: $Item;
        static SCULK_VEIN: $Item;
        static BREWING_STAND: $Item;
        static CACTUS: $Item;
        static SMOOTH_QUARTZ_SLAB: $Item;
        static CAKE: $Item;
        static CHAINMAIL_BOOTS: $Item;
        static STRIPPED_ACACIA_WOOD: $Item;
        static FIREWORK_STAR: $Item;
        static PURPLE_DYE: $Item;
        static COW_SPAWN_EGG: $Item;
        static BAMBOO_MOSAIC_SLAB: $Item;
        static ELDER_GUARDIAN_SPAWN_EGG: $Item;
        static LIGHT_GRAY_BANNER: $Item;
        static GREEN_BANNER: $Item;
        static SPRUCE_SIGN: $Item;
        static BLUE_STAINED_GLASS: $Item;
        static ZOMBIE_VILLAGER_SPAWN_EGG: $Item;
        static CHISELED_TUFF_BRICKS: $Item;
        static STRIPPED_BIRCH_WOOD: $Item;
        static SLIME_BLOCK: $Item;
        static RED_MUSHROOM: $Item;
        static DRIED_KELP: $Item;
        static BAMBOO_FENCE: $Item;
        static SPRUCE_SAPLING: $Item;
        static LIGHT_BLUE_STAINED_GLASS: $Item;
        static MUTTON: $Item;
        static NAUTILUS_SHELL: $Item;
        static EXPOSED_COPPER_DOOR: $Item;
        static GLOBE_BANNER_PATTERN: $Item;
        static POLISHED_GRANITE_SLAB: $Item;
        static SMOOTH_RED_SANDSTONE_STAIRS: $Item;
        static WAXED_COPPER_TRAPDOOR: $Item;
        static BRAIN_CORAL: $Item;
        static TURTLE_HELMET: $Item;
        static PUFFERFISH_BUCKET: $Item;
        static COMPARATOR: $Item;
        static PIG_SPAWN_EGG: $Item;
        static REDSTONE_ORE: $Item;
        static STRIPPED_CRIMSON_HYPHAE: $Item;
        static SPIDER_EYE: $Item;
        static PINK_CANDLE: $Item;
        static DEAD_FIRE_CORAL_BLOCK: $Item;
        static RED_SANDSTONE_WALL: $Item;
        static WITHER_SKELETON_SKULL: $Item;
        static LIGHT_GRAY_TERRACOTTA: $Item;
        static LIGHT_BLUE_STAINED_GLASS_PANE: $Item;
        static FLOW_POTTERY_SHERD: $Item;
        static GRASS_BLOCK: $Item;
        static KNOWLEDGE_BOOK: $Item;
        static EXPOSED_COPPER_TRAPDOOR: $Item;
        static NETHERITE_AXE: $Item;
        static MAGENTA_STAINED_GLASS: $Item;
        static CRIMSON_PRESSURE_PLATE: $Item;
        static COAL_ORE: $Item;
        static FURNACE_MINECART: $Item;
        static DEEPSLATE_BRICKS: $Item;
        static WAXED_EXPOSED_COPPER_BULB: $Item;
        static PRISMARINE_CRYSTALS: $Item;
        static ICE: $Item;
        static PURPLE_SHULKER_BOX: $Item;
        static RIB_ARMOR_TRIM_SMITHING_TEMPLATE: $Item;
        static LIGHT_GRAY_CONCRETE_POWDER: $Item;
        static STRIPPED_OAK_WOOD: $Item;
        static DEEPSLATE_BRICK_SLAB: $Item;
        static GOLD_ORE: $Item;
        static GREEN_CARPET: $Item;
        static OCHRE_FROGLIGHT: $Item;
        static POLISHED_BLACKSTONE: $Item;
        static BLAZE_POWDER: $Item;
        static CLAY: $Item;
        static TUBE_CORAL_BLOCK: $Item;
        static LILAC: $Item;
        static RED_SANDSTONE_STAIRS: $Item;
        static RABBIT_FOOT: $Item;
        static STRIPPED_CHERRY_LOG: $Item;
        static WAXED_CUT_COPPER_STAIRS: $Item;
        static DARK_PRISMARINE: $Item;
        static REDSTONE: $Item;
        static MUSIC_DISC_WAIT: $Item;
        static WAXED_EXPOSED_COPPER_GRATE: $Item;
        static NETHER_SPROUTS: $Item;
        static LINGERING_POTION: $Item;
        static BUBBLE_CORAL_BLOCK: $Item;
        static BLUE_GLAZED_TERRACOTTA: $Item;
        static WHITE_DYE: $Item;
        static BRICK_WALL: $Item;
        static ACACIA_FENCE_GATE: $Item;
        static SLIME_BALL: $Item;
        static GLOW_LICHEN: $Item;
        static CHERRY_DOOR: $Item;
        static BIRCH_FENCE_GATE: $Item;
        static LIGHT_GRAY_CONCRETE: $Item;
        static DIAMOND_LEGGINGS: $Item;
        static DRAGON_BREATH: $Item;
        static OXIDIZED_CUT_COPPER_SLAB: $Item;
        static MOSSY_COBBLESTONE_STAIRS: $Item;
        static DARK_OAK_TRAPDOOR: $Item;
        static YELLOW_TERRACOTTA: $Item;
        static WITHER_SPAWN_EGG: $Item;
        static WEATHERED_CHISELED_COPPER: $Item;
        static CHISELED_RED_SANDSTONE: $Item;
        static JUNGLE_WOOD: $Item;
        static WARPED_FUNGUS_ON_A_STICK: $Item;
        static PUMPKIN_SEEDS: $Item;
        static CRACKED_DEEPSLATE_TILES: $Item;
        static NETHERITE_INGOT: $Item;
        static WHITE_BANNER: $Item;
        static ACACIA_DOOR: $Item;
        static FLOWERING_AZALEA: $Item;
        static MOSSY_STONE_BRICKS: $Item;
        static PRISMARINE: $Item;
        static WARPED_BUTTON: $Item;
        static TUFF_SLAB: $Item;
        static DEAD_TUBE_CORAL_BLOCK: $Item;
        static GOLDEN_HELMET: $Item;
        static SMOOTH_SANDSTONE: $Item;
        static DIAMOND_BLOCK: $Item;
        static MUSIC_DISC_5: $Item;
        static OAK_SAPLING: $Item;
        static POLISHED_DEEPSLATE_SLAB: $Item;
        static PARROT_SPAWN_EGG: $Item;
        static MANGROVE_FENCE_GATE: $Item;
        static CHISELED_DEEPSLATE: $Item;
        static STONE_BRICK_SLAB: $Item;
        static CUT_COPPER_STAIRS: $Item;
        static GRAY_CONCRETE: $Item;
        static DARK_OAK_LEAVES: $Item;
        static EXPOSED_COPPER_GRATE: $Item;
        static BAMBOO_PRESSURE_PLATE: $Item;
        static IRON_AXE: $Item;
        static MELON: $Item;
        static SEA_LANTERN: $Item;
        static GREEN_CONCRETE: $Item;
        static LANTERN: $Item;
        static SHIELD: $Item;
        static SMOOTH_STONE_SLAB: $Item;
        static SMOOTH_STONE: $Item;
        static COD_SPAWN_EGG: $Item;
        static GREEN_STAINED_GLASS_PANE: $Item;
        static ORANGE_CONCRETE: $Item;
        static BONE: $Item;
        static RED_NETHER_BRICKS: $Item;
        static POISONOUS_POTATO: $Item;
        static MANGROVE_DOOR: $Item;
        static MUSIC_DISC_FAR: $Item;
        static CYAN_CONCRETE_POWDER: $Item;
        static WAXED_COPPER_BLOCK: $Item;
        static SMOKER: $Item;
        static BIRCH_PLANKS: $Item;
        static WOODEN_PICKAXE: $Item;
        static REPEATING_COMMAND_BLOCK: $Item;
        static TURTLE_SPAWN_EGG: $Item;
        static RED_CONCRETE_POWDER: $Item;
        static BIRCH_DOOR: $Item;
        static CRIMSON_SIGN: $Item;
        static DARK_OAK_BOAT: $Item;
        static BLAZE_ROD: $Item;
        static BOOK: $Item;
        static YELLOW_DYE: $Item;
        static CHISELED_COPPER: $Item;
        static CRIMSON_TRAPDOOR: $Item;
        static WEATHERED_COPPER_TRAPDOOR: $Item;
        static BLUE_CARPET: $Item;
        static DEEPSLATE_TILE_SLAB: $Item;
        static GOLDEN_HORSE_ARMOR: $Item;
        static DRAGON_EGG: $Item;
        static EXPOSED_COPPER: $Item;
        static WEATHERED_CUT_COPPER_STAIRS: $Item;
        static SANDSTONE: $Item;
        static CRIMSON_STAIRS: $Item;
        static COBBLED_DEEPSLATE_SLAB: $Item;
        static MUSIC_DISC_MELLOHI: $Item;
        static MOSS_CARPET: $Item;
        static BREAD: $Item;
        static ANVIL: $Item;
        static REPEATER: $Item;
        static CRIMSON_HANGING_SIGN: $Item;
        static OXIDIZED_COPPER_BULB: $Item;
        static MANGROVE_CHEST_BOAT: $Item;
        static DEAD_BRAIN_CORAL: $Item;
        static BOOKSHELF: $Item;
        static SMOOTH_QUARTZ_STAIRS: $Item;
        static DANGER_POTTERY_SHERD: $Item;
        static LIGHT_BLUE_CANDLE: $Item;
        static WILD_ARMOR_TRIM_SMITHING_TEMPLATE: $Item;
        static COOKED_CHICKEN: $Item;
        static SPRUCE_WOOD: $Item;
        static BLACK_TERRACOTTA: $Item;
        static STONE_STAIRS: $Item;
        static EXPERIENCE_BOTTLE: $Item;
        static POLISHED_TUFF_SLAB: $Item;
        static POWDER_SNOW_BUCKET: $Item;
        static COMMAND_BLOCK_MINECART: $Item;
        static PHANTOM_MEMBRANE: $Item;
        static LIME_WOOL: $Item;
        static SPRUCE_FENCE: $Item;
        static SALMON: $Item;
        static OAK_PRESSURE_PLATE: $Item;
        static HONEY_BLOCK: $Item;
        static STRIPPED_DARK_OAK_WOOD: $Item;
        static MEDIUM_AMETHYST_BUD: $Item;
        static BIRCH_STAIRS: $Item;
        static MANGROVE_BUTTON: $Item;
        static BIRCH_TRAPDOOR: $Item;
        static COMPOSTER: $Item;
        static PITCHER_POD: $Item;
        static ORANGE_STAINED_GLASS: $Item;
        static GOLD_INGOT: $Item;
        static DECORATED_POT: $Item;
        static GLASS: $Item;
        static STRIPPED_MANGROVE_LOG: $Item;
        static ITEM_FRAME: $Item;
        static CHERRY_PLANKS: $Item;
        static NETHERITE_BOOTS: $Item;
        static SOUL_SAND: $Item;
        static EMERALD: $Item;
        static DIAMOND_HELMET: $Item;
        static GREEN_STAINED_GLASS: $Item;
        static GRAY_STAINED_GLASS_PANE: $Item;
        static SHULKER_SHELL: $Item;
        static BLUE_WOOL: $Item;
        static MAGENTA_WOOL: $Item;
        static PITCHER_PLANT: $Item;
        static BAMBOO_DOOR: $Item;
        static DEAD_HORN_CORAL: $Item;
        static IRON_HELMET: $Item;
        static COCOA_BEANS: $Item;
        static PINK_BED: $Item;
        static CYAN_CANDLE: $Item;
        static POPPY: $Item;
        static CYAN_TERRACOTTA: $Item;
        static TRIPWIRE_HOOK: $Item;
        static PACKED_ICE: $Item;
        static YELLOW_CONCRETE: $Item;
        static WEATHERED_COPPER_DOOR: $Item;
        static ACACIA_STAIRS: $Item;
        static COMPASS: $Item;
        static VINE: $Item;
        static INFESTED_STONE_BRICKS: $Item;
        static GOLDEN_CHESTPLATE: $Item;
        static COPPER_ORE: $Item;
        static NETHERITE_HOE: $Item;
        static BAMBOO_TRAPDOOR: $Item;
        static CARROT: $Item;
        static MAGMA_CUBE_SPAWN_EGG: $Item;
        static MUSIC_DISC_13: $Item;
        static MUSIC_DISC_WARD: $Item;
        static PODZOL: $Item;
        static WARPED_WART_BLOCK: $Item;
        static MUSIC_DISC_11: $Item;
        static POLISHED_BLACKSTONE_WALL: $Item;
        static WARPED_NYLIUM: $Item;
        static STRIPPED_CRIMSON_STEM: $Item;
        static BLUE_BED: $Item;
        static DEAD_FIRE_CORAL: $Item;
        static PLENTY_POTTERY_SHERD: $Item;
        static TURTLE_SCUTE: $Item;
        static BLACK_CARPET: $Item;
        static MUD: $Item;
        static PINK_TERRACOTTA: $Item;
        static SHEAF_POTTERY_SHERD: $Item;
        static GLOW_SQUID_SPAWN_EGG: $Item;
        static FIRE_CORAL_BLOCK: $Item;
        static DIAMOND_SHOVEL: $Item;
        static GRAY_GLAZED_TERRACOTTA: $Item;
        static BREEZE_ROD: $Item;
        static NAME_TAG: $Item;
        static CHERRY_LEAVES: $Item;
        static WEATHERED_COPPER_GRATE: $Item;
        static JUNGLE_FENCE: $Item;
        static SPAWNER: $Item;
        static POLISHED_BASALT: $Item;
        static ARCHER_POTTERY_SHERD: $Item;
        static WARPED_FUNGUS: $Item;
        static WHITE_CONCRETE_POWDER: $Item;
        static GRAY_TERRACOTTA: $Item;
        static RAIL: $Item;
        static MUSIC_DISC_PRECIPICE: $Item;
        static SWEET_BERRIES: $Item;
        static BREWER_POTTERY_SHERD: $Item;
        static DIAMOND_BOOTS: $Item;
        static WRITABLE_BOOK: $Item;
        static BEDROCK: $Item;
        static IRON_GOLEM_SPAWN_EGG: $Item;
        static RABBIT: $Item;
        static INFESTED_DEEPSLATE: $Item;
        static SHROOMLIGHT: $Item;
        static CHAIN_COMMAND_BLOCK: $Item;
        static CYAN_GLAZED_TERRACOTTA: $Item;
        static WAXED_WEATHERED_CUT_COPPER_SLAB: $Item;
        static GLOW_ITEM_FRAME: $Item;
        static ECHO_SHARD: $Item;
        static STRIPPED_DARK_OAK_LOG: $Item;
        static GRAY_WOOL: $Item;
        static MUSIC_DISC_CREATOR_MUSIC_BOX: $Item;
        static ACACIA_CHEST_BOAT: $Item;
        static ARMADILLO_SCUTE: $Item;
        static MUSIC_DISC_RELIC: $Item;
        static DARK_OAK_SLAB: $Item;
        static OAK_SIGN: $Item;
        static RED_CONCRETE: $Item;
        static CRACKED_POLISHED_BLACKSTONE_BRICKS: $Item;
        static ANGLER_POTTERY_SHERD: $Item;
        static WHEAT_SEEDS: $Item;
        static BEEHIVE: $Item;
        static WAXED_OXIDIZED_COPPER_DOOR: $Item;
        static GRAY_SHULKER_BOX: $Item;
        static WARPED_DOOR: $Item;
        static TROPICAL_FISH_BUCKET: $Item;
        static OAK_FENCE: $Item;
        static NETHER_BRICKS: $Item;
        static RED_CANDLE: $Item;
        static FLETCHING_TABLE: $Item;
        static FLOWER_BANNER_PATTERN: $Item;
        static EGG: $Item;
        static BRICK: $Item;
        static GRAY_BANNER: $Item;
        static ENDERMAN_SPAWN_EGG: $Item;
        static MAGENTA_CONCRETE: $Item;
        static JUNGLE_FENCE_GATE: $Item;
        static DARK_OAK_CHEST_BOAT: $Item;
        static BEETROOT_SEEDS: $Item;
        static FLOW_BANNER_PATTERN: $Item;
        static BLACK_SHULKER_BOX: $Item;
        static FROGSPAWN: $Item;
        static JUNGLE_TRAPDOOR: $Item;
        static OXIDIZED_CUT_COPPER_STAIRS: $Item;
        static ACTIVATOR_RAIL: $Item;
        static BOWL: $Item;
        static SILVERFISH_SPAWN_EGG: $Item;
        static DIRT_PATH: $Item;
        static GOLDEN_APPLE: $Item;
        static ZOMBIE_HORSE_SPAWN_EGG: $Item;
        static IRON_BOOTS: $Item;
        static ENCHANTED_GOLDEN_APPLE: $Item;
        static SHULKER_SPAWN_EGG: $Item;
        static HOPPER_MINECART: $Item;
        static ORANGE_CARPET: $Item;
        static PINK_CARPET: $Item;
        static STRUCTURE_VOID: $Item;
        static SADDLE: $Item;
        static STONECUTTER: $Item;
        static LIME_CONCRETE_POWDER: $Item;
        static POLISHED_BLACKSTONE_PRESSURE_PLATE: $Item;
        static PINK_BANNER: $Item;
        static GREEN_WOOL: $Item;
        static HORN_CORAL_FAN: $Item;
        static BROWN_DYE: $Item;
        static POPPED_CHORUS_FRUIT: $Item;
        static IRON_HOE: $Item;
        static CHERRY_FENCE: $Item;
        static MOSSY_COBBLESTONE_SLAB: $Item;
        static DARK_PRISMARINE_STAIRS: $Item;
        static TWISTING_VINES: $Item;
        static BOGGED_SPAWN_EGG: $Item;
        static PINK_CONCRETE: $Item;
        static GUNPOWDER: $Item;
        static LIME_BANNER: $Item;
        static MUSHROOM_STEW: $Item;
        static IRON_CHESTPLATE: $Item;
        static PRISMARINE_SHARD: $Item;
        static BIRCH_CHEST_BOAT: $Item;
        static JUNGLE_BUTTON: $Item;
        static BEEF: $Item;
        static WAXED_WEATHERED_COPPER: $Item;
        static MUSHROOM_STEM: $Item;
        static BLUE_TERRACOTTA: $Item;
        static VEX_ARMOR_TRIM_SMITHING_TEMPLATE: $Item;
        static EXPLORER_POTTERY_SHERD: $Item;
        static BROWN_MUSHROOM_BLOCK: $Item;
        static DEAD_TUBE_CORAL_FAN: $Item;
        static TADPOLE_BUCKET: $Item;
        static MAGENTA_GLAZED_TERRACOTTA: $Item;
        static TUFF_WALL: $Item;
        static CHISELED_BOOKSHELF: $Item;
        static DEAD_BUBBLE_CORAL: $Item;
        static RAW_GOLD: $Item;
        static WHITE_GLAZED_TERRACOTTA: $Item;
        static WAXED_OXIDIZED_COPPER: $Item;
        static NETHERITE_SCRAP: $Item;
        static GOLDEN_HOE: $Item;
        static GREEN_BED: $Item;
        static CAULDRON: $Item;
        static POLISHED_ANDESITE_STAIRS: $Item;
        static CHERRY_FENCE_GATE: $Item;
        static WITHER_SKELETON_SPAWN_EGG: $Item;
        static EMERALD_BLOCK: $Item;
        static IRON_SHOVEL: $Item;
        static LIME_STAINED_GLASS_PANE: $Item;
        static ORANGE_BANNER: $Item;
        static WAXED_WEATHERED_CHISELED_COPPER: $Item;
        static BLACK_DYE: $Item;
        static MUSIC_DISC_BLOCKS: $Item;
        static GOLDEN_BOOTS: $Item;
        static LIGHT_BLUE_GLAZED_TERRACOTTA: $Item;
        static OXIDIZED_COPPER: $Item;
        static PINK_STAINED_GLASS: $Item;
        static SPRUCE_STAIRS: $Item;
        static NETHERITE_LEGGINGS: $Item;
        static BLUE_ICE: $Item;
        static CAVE_SPIDER_SPAWN_EGG: $Item;
        static HEART_POTTERY_SHERD: $Item;
        static SCAFFOLDING: $Item;
        static CYAN_DYE: $Item;
        static BLUE_SHULKER_BOX: $Item;
        static HORN_CORAL_BLOCK: $Item;
        static CRIMSON_SLAB: $Item;
        static RESPAWN_ANCHOR: $Item;
        static SHELTER_POTTERY_SHERD: $Item;
        static KELP: $Item;
        static COPPER_BLOCK: $Item;
        static STRIPPED_WARPED_HYPHAE: $Item;
        static STRIPPED_JUNGLE_LOG: $Item;
        static ANDESITE_SLAB: $Item;
        static MINER_POTTERY_SHERD: $Item;
        static HOWL_POTTERY_SHERD: $Item;
        static SUSPICIOUS_GRAVEL: $Item;
        static CRIMSON_PLANKS: $Item;
        static GOLD_BLOCK: $Item;
        static DARK_OAK_FENCE_GATE: $Item;
        static SPRUCE_PRESSURE_PLATE: $Item;
        static ACACIA_LEAVES: $Item;
        static COBBLESTONE_SLAB: $Item;
        static HEAVY_WEIGHTED_PRESSURE_PLATE: $Item;
        static PINK_CONCRETE_POWDER: $Item;
        static WAXED_COPPER_GRATE: $Item;
        static COPPER_INGOT: $Item;
        static MELON_SLICE: $Item;
        static LIGHT_BLUE_CONCRETE_POWDER: $Item;
        static LIGHT_BLUE_DYE: $Item;
        static LAPIS_LAZULI: $Item;
        static CHISELED_TUFF: $Item;
        static WHITE_BED: $Item;
        static BUBBLE_CORAL_FAN: $Item;
        static HEARTBREAK_POTTERY_SHERD: $Item;
        static JUNGLE_CHEST_BOAT: $Item;
        static JUNGLE_LOG: $Item;
        static NOTE_BLOCK: $Item;
        static MANGROVE_SIGN: $Item;
        static WARPED_HYPHAE: $Item;
        static SLIME_SPAWN_EGG: $Item;
        static CHERRY_SIGN: $Item;
        static LAVA_BUCKET: $Item;
        static WAYFINDER_ARMOR_TRIM_SMITHING_TEMPLATE: $Item;
        static SPRUCE_SLAB: $Item;
        static DIAMOND_AXE: $Item;
        static PEONY: $Item;
        static OXEYE_DAISY: $Item;
        static STICK: $Item;
        static OAK_HANGING_SIGN: $Item;
        static WATER_BUCKET: $Item;
        static ACACIA_SIGN: $Item;
        static STRIPPED_WARPED_STEM: $Item;
        static WAXED_OXIDIZED_CUT_COPPER: $Item;
        static MOSS_BLOCK: $Item;
        static BEACON: $Item;
        static HONEYCOMB_BLOCK: $Item;
        static NETHER_BRICK_STAIRS: $Item;
        static BRUSH: $Item;
        static COBWEB: $Item;
        static PRIZE_POTTERY_SHERD: $Item;
        static MACE: $Item;
        static OAK_LOG: $Item;
        static STRIPPED_JUNGLE_WOOD: $Item;
        static DEAD_BRAIN_CORAL_BLOCK: $Item;
        static MUDDY_MANGROVE_ROOTS: $Item;
        static PUFFERFISH: $Item;
        static TINTED_GLASS: $Item;
        static MAGENTA_CANDLE: $Item;
        static YELLOW_BED: $Item;
        static LIGHT_GRAY_CANDLE: $Item;
        static SPLASH_POTION: $Item;
        static CHICKEN_SPAWN_EGG: $Item;
        static CHISELED_QUARTZ_BLOCK: $Item;
        static LIME_CARPET: $Item;
        static FEATHER: $Item;
        static DEEPSLATE_EMERALD_ORE: $Item;
        static MUD_BRICK_SLAB: $Item;
        static PURPLE_GLAZED_TERRACOTTA: $Item;
        static IRON_BARS: $Item;
        static WHITE_CONCRETE: $Item;
        static DIAMOND_CHESTPLATE: $Item;
        static STONE: $Item;
        static NETHERITE_SHOVEL: $Item;
        static YELLOW_WOOL: $Item;
        static ROSE_BUSH: $Item;
        static OMINOUS_BOTTLE: $Item;
        static MUD_BRICKS: $Item;
        static BROWN_CARPET: $Item;
        static WAXED_CHISELED_COPPER: $Item;
        static STRIPPED_CHERRY_WOOD: $Item;
        static GOLD_NUGGET: $Item;
        static BLACKSTONE_STAIRS: $Item;
        static GOLDEN_AXE: $Item;
        static ACACIA_LOG: $Item;
        static INFESTED_MOSSY_STONE_BRICKS: $Item;
        static CREEPER_SPAWN_EGG: $Item;
        static ORANGE_GLAZED_TERRACOTTA: $Item;
        static MUD_BRICK_STAIRS: $Item;
        static MAGENTA_CONCRETE_POWDER: $Item;
        static TNT: $Item;
        static BELL: $Item;
        static BLACKSTONE_SLAB: $Item;
        static TORCHFLOWER: $Item;
        static SPRUCE_HANGING_SIGN: $Item;
        static STRIPPED_ACACIA_LOG: $Item;
        static HOST_ARMOR_TRIM_SMITHING_TEMPLATE: $Item;
        static RAW_IRON_BLOCK: $Item;
        static POTATO: $Item;
        static GHAST_TEAR: $Item;
        static BROWN_BANNER: $Item;
        static AIR: $Item;
        static FROG_SPAWN_EGG: $Item;
        static GRANITE_STAIRS: $Item;
        static BEE_NEST: $Item;
        static PINK_PETALS: $Item;
        static CHEST: $Item;
        static DOLPHIN_SPAWN_EGG: $Item;
        static SCULK_SENSOR: $Item;
        static OAK_CHEST_BOAT: $Item;
        static BONE_MEAL: $Item;
        static LIME_DYE: $Item;
        static MANGROVE_FENCE: $Item;
        static OAK_DOOR: $Item;
        static LILY_PAD: $Item;
        static ENDER_DRAGON_SPAWN_EGG: $Item;
        static BAKED_POTATO: $Item;
        static SMALL_DRIPLEAF: $Item;
        static EXPOSED_CUT_COPPER_SLAB: $Item;
        static PURPUR_STAIRS: $Item;
        static LADDER: $Item;
        static RED_MUSHROOM_BLOCK: $Item;
        static WOLF_ARMOR: $Item;
        static CRAFTER: $Item;
        static BASALT: $Item;
        static TALL_GRASS: $Item;
        static BAMBOO_SIGN: $Item;
        static DEAD_BUSH: $Item;
        static FLOW_ARMOR_TRIM_SMITHING_TEMPLATE: $Item;
        static COD: $Item;
        static EXPOSED_CUT_COPPER_STAIRS: $Item;
        static PETRIFIED_OAK_SLAB: $Item;
        static MUD_BRICK_WALL: $Item;
        static LIGHT_BLUE_CARPET: $Item;
        static SCULK_CATALYST: $Item;
        static CALIBRATED_SCULK_SENSOR: $Item;
        static WAXED_OXIDIZED_CUT_COPPER_STAIRS: $Item;
        static PINK_DYE: $Item;
        static WARPED_ROOTS: $Item;
        static CHAIN: $Item;
        static FIRE_CORAL: $Item;
        static DEEPSLATE_IRON_ORE: $Item;
        static WAXED_OXIDIZED_COPPER_BULB: $Item;
        static CHISELED_NETHER_BRICKS: $Item;
        static LIGHT_GRAY_STAINED_GLASS_PANE: $Item;
        static HEART_OF_THE_SEA: $Item;
        static COAL_BLOCK: $Item;
        static WHITE_STAINED_GLASS: $Item;
        static WEATHERED_CUT_COPPER: $Item;
        static CALCITE: $Item;
        static PURPUR_PILLAR: $Item;
        static BLUE_DYE: $Item;
        static MUSIC_DISC_CHIRP: $Item;
        static NETHERITE_HELMET: $Item;
        static SNOW_GOLEM_SPAWN_EGG: $Item;
        static WARD_ARMOR_TRIM_SMITHING_TEMPLATE: $Item;
        static ACACIA_TRAPDOOR: $Item;
        static CHERRY_WOOD: $Item;
        static CHERRY_CHEST_BOAT: $Item;
        static CAMEL_SPAWN_EGG: $Item;
        static CRIMSON_STEM: $Item;
        static WHITE_CARPET: $Item;
        static VINDICATOR_SPAWN_EGG: $Item;
        static COAL: $Item;
        static RAW_GOLD_BLOCK: $Item;
        static CHISELED_STONE_BRICKS: $Item;
        static SNOUT_ARMOR_TRIM_SMITHING_TEMPLATE: $Item;
        static JIGSAW: $Item;
        static PURPUR_BLOCK: $Item;
        static TRIDENT: $Item;
        static FURNACE: $Item;
        static EVOKER_SPAWN_EGG: $Item;
        static JACK_O_LANTERN: $Item;
        static BIRCH_PRESSURE_PLATE: $Item;
        static BLACK_BED: $Item;
        static VILLAGER_SPAWN_EGG: $Item;
        static DEEPSLATE_LAPIS_ORE: $Item;
        static WAXED_OXIDIZED_CHISELED_COPPER: $Item;
        static LARGE_FERN: $Item;
        static QUARTZ: $Item;
        static SNIFFER_EGG: $Item;
        static CUT_RED_SANDSTONE_SLAB: $Item;
        static PURPLE_TERRACOTTA: $Item;
        static ELYTRA: $Item;
        static MAGMA_CREAM: $Item;
        static DIRT: $Item;
        static WEEPING_VINES: $Item;
        static COBBLED_DEEPSLATE: $Item;
        static GRAY_BED: $Item;
        static MULE_SPAWN_EGG: $Item;
        static BONE_BLOCK: $Item;
        static POLISHED_DIORITE: $Item;
        static GLISTERING_MELON_SLICE: $Item;
        static CUT_SANDSTONE: $Item;
        static WHITE_TERRACOTTA: $Item;
        static COD_BUCKET: $Item;
        static EYE_ARMOR_TRIM_SMITHING_TEMPLATE: $Item;
        static MOSSY_COBBLESTONE_WALL: $Item;
        static SKULL_BANNER_PATTERN: $Item;
        static GRINDSTONE: $Item;
        static POWERED_RAIL: $Item;
        static JUNGLE_SIGN: $Item;
        static DARK_OAK_PLANKS: $Item;
        static GUARDIAN_SPAWN_EGG: $Item;
        static ACACIA_WOOD: $Item;
        static END_STONE_BRICK_SLAB: $Item;
        static SPRUCE_BOAT: $Item;
        static MANGROVE_WOOD: $Item;
        static LIGHT_GRAY_STAINED_GLASS: $Item;
        static TROPICAL_FISH: $Item;
        static SEAGRASS: $Item;
        static WEATHERED_COPPER: $Item;
        static WAXED_WEATHERED_COPPER_GRATE: $Item;
        static OAK_PLANKS: $Item;
        static END_PORTAL_FRAME: $Item;
        static LEATHER: $Item;
        static WAXED_OXIDIZED_COPPER_TRAPDOOR: $Item;
        static STONE_SHOVEL: $Item;
        static DEEPSLATE_COAL_ORE: $Item;
        static FLOWER_POT: $Item;
        static HEAVY_CORE: $Item;
        static IRON_PICKAXE: $Item;
        static LIGHT_GRAY_DYE: $Item;
        static STRAY_SPAWN_EGG: $Item;
        static WIND_CHARGE: $Item;
        static RED_TERRACOTTA: $Item;
        static MOOSHROOM_SPAWN_EGG: $Item;
        static PAPER: $Item;
        static WAXED_EXPOSED_CUT_COPPER: $Item;
        static IRON_SWORD: $Item;
        static SALMON_BUCKET: $Item;
        static WARPED_SIGN: $Item;
        static COPPER_BULB: $Item;
        static CUT_STANDSTONE_SLAB: $Item;
        static SNOW_BLOCK: $Item;
        static CRIMSON_FENCE: $Item;
        static AMETHYST_SHARD: $Item;
        static BURN_POTTERY_SHERD: $Item;
        static POLISHED_DIORITE_SLAB: $Item;
        static ALLAY_SPAWN_EGG: $Item;
        static PILLAGER_SPAWN_EGG: $Item;
        static BRAIN_CORAL_BLOCK: $Item;
        static RAVAGER_SPAWN_EGG: $Item;
        static MOSSY_STONE_BRICK_SLAB: $Item;
        static STONE_BRICKS: $Item;
        static SANDSTONE_STAIRS: $Item;
        static GOLDEN_LEGGINGS: $Item;
        static BROWN_BED: $Item;
        static MANGROVE_LEAVES: $Item;
        static SMOOTH_SANDSTONE_SLAB: $Item;
        static CARROT_ON_A_STICK: $Item;
        static CHERRY_TRAPDOOR: $Item;
        static MAGENTA_TERRACOTTA: $Item;
        static SMOOTH_SANDSTONE_STAIRS: $Item;
        static SPRUCE_PLANKS: $Item;
        static DRAGON_HEAD: $Item;
        static CHERRY_SAPLING: $Item;
        static ANDESITE_WALL: $Item;
        static BLACK_WOOL: $Item;
        static LIGHT_GRAY_CARPET: $Item;
        static PURPLE_CONCRETE: $Item;
        static LIGHTNING_ROD: $Item;
        static ZOMBIFIED_PIGLIN_SPAWN_EGG: $Item;
        static CHERRY_HANGING_SIGN: $Item;
        static CYAN_BED: $Item;
        static LARGE_AMETHYST_BUD: $Item;
        static RED_SHULKER_BOX: $Item;
        static PEARLESCENT_FROGLIGHT: $Item;
        static STONE_PICKAXE: $Item;
        static MAGENTA_CARPET: $Item;
        static REDSTONE_TORCH: $Item;
        static CRIMSON_ROOTS: $Item;
        static STICKY_PISTON: $Item;
        static SMOOTH_QUARTZ: $Item;
        static PUMPKIN: $Item;
        static FLOWERING_AZALEA_LEAVES: $Item;
        static NETHER_WART_BLOCK: $Item;
        static COBBLED_DEEPSLATE_STAIRS: $Item;
        static COBBLESTONE_WALL: $Item;
        static WHEAT: $Item;
        static DEAD_FIRE_CORAL_FAN: $Item;
        static LIME_CANDLE: $Item;
        static ACACIA_SLAB: $Item;
        static SNORT_POTTERY_SHERD: $Item;
        static CRIMSON_NYLIUM: $Item;
        static OXIDIZED_COPPER_TRAPDOOR: $Item;
        static ORANGE_TERRACOTTA: $Item;
        static HONEYCOMB: $Item;
        static BLACK_CONCRETE: $Item;
        static AZALEA: $Item;
        static DROPPER: $Item;
        static MOSSY_STONE_BRICK_STAIRS: $Item;
        static SENTRY_ARMOR_TRIM_SMITHING_TEMPLATE: $Item;
        static WARPED_HANGING_SIGN: $Item;
        static DONKEY_SPAWN_EGG: $Item;
        static OAK_STAIRS: $Item;
        static BLACK_STAINED_GLASS: $Item;
        static IRON_TRAPDOOR: $Item;
        static NETHERITE_PICKAXE: $Item;
        static INFESTED_CHISELED_STONE_BRICKS: $Item;
        static BLUE_BANNER: $Item;
        static POLISHED_DIORITE_STAIRS: $Item;
        static WARPED_PRESSURE_PLATE: $Item;
        static DISC_FRAGMENT_5: $Item;
        static OAK_SLAB: $Item;
        static BAMBOO_HANGING_SIGN: $Item;
        static POINTED_DRIPSTONE: $Item;
        static WAXED_EXPOSED_COPPER: $Item;
        static PURPLE_CANDLE: $Item;
        static CRIMSON_FUNGUS: $Item;
        static GUSTER_POTTERY_SHERD: $Item;
        static DARK_OAK_HANGING_SIGN: $Item;
        static CREEPER_BANNER_PATTERN: $Item;
        static DARK_OAK_SAPLING: $Item;
        static CHAINMAIL_CHESTPLATE: $Item;
        static ACACIA_BUTTON: $Item;
        static MUSIC_DISC_MALL: $Item;
        static EMERALD_ORE: $Item;
        static MUSIC_DISC_STAL: $Item;
        static POLISHED_DEEPSLATE_STAIRS: $Item;
        static HONEY_BOTTLE: $Item;
        static OAK_FENCE_GATE: $Item;
        static POLISHED_BLACKSTONE_STAIRS: $Item;
        static WAXED_CUT_COPPER_SLAB: $Item;
        static BAMBOO_BLOCK: $Item;
        static SUNFLOWER: $Item;
        static CAMPFIRE: $Item;
        static SANDSTONE_SLAB: $Item;
        static MANGROVE_PRESSURE_PLATE: $Item;
        static SPRUCE_BUTTON: $Item;
        static CYAN_WOOL: $Item;
        static JUNGLE_HANGING_SIGN: $Item;
        static GHAST_SPAWN_EGG: $Item;
        static STRING: $Item;
        static PUFFERFISH_SPAWN_EGG: $Item;
        static SQUID_SPAWN_EGG: $Item;
        static TARGET: $Item;
        static PRISMARINE_BRICK_SLAB: $Item;
        static DRIPSTONE_BLOCK: $Item;
        static LOOM: $Item;
        static PANDA_SPAWN_EGG: $Item;
        static SALMON_SPAWN_EGG: $Item;
        static CREEPER_HEAD: $Item;
        static BAMBOO_PLANKS: $Item;
        static NETHER_QUARTZ_ORE: $Item;
        static SPIRE_ARMOR_TRIM_SMITHING_TEMPLATE: $Item;
        static DEAD_BUBBLE_CORAL_FAN: $Item;
        static NETHERITE_SWORD: $Item;
        static SUSPICIOUS_SAND: $Item;
        static BLACK_BANNER: $Item;
        static COPPER_DOOR: $Item;
        static WAXED_COPPER_DOOR: $Item;
        static COAST_ARMOR_TRIM_SMITHING_TEMPLATE: $Item;
        static RAISER_ARMOR_TRIM_SMITHING_TEMPLATE: $Item;
        static LIGHT_BLUE_BED: $Item;
        static PRISMARINE_WALL: $Item;
        static PINK_STAINED_GLASS_PANE: $Item;
        static WEATHERED_COPPER_BULB: $Item;
        static BLACKSTONE_WALL: $Item;
        static DIORITE_STAIRS: $Item;
        static BRICK_STAIRS: $Item;
        static BREEZE_SPAWN_EGG: $Item;
        static SPYGLASS: $Item;
        static BIRCH_HANGING_SIGN: $Item;
        static DAMAGED_ANVIL: $Item;
        static BAMBOO: $Item;
        static CONDUIT: $Item;
        static LEATHER_HELMET: $Item;
        static LLAMA_SPAWN_EGG: $Item;
        static GOLDEN_SWORD: $Item;
        static JUNGLE_LEAVES: $Item;
        static RED_TULIP: $Item;
        static SPORE_BLOSSOM: $Item;
        static WAXED_WEATHERED_COPPER_DOOR: $Item;
        static DARK_OAK_STAIRS: $Item;
        static YELLOW_SHULKER_BOX: $Item;
        static PINK_GLAZED_TERRACOTTA: $Item;
        static TIDE_ARMOR_TRIM_SMITHING_TEMPLATE: $Item;
        static DANDELION: $Item;
        static FLINT: $Item;
        static AZALEA_LEAVES: $Item;
        static RED_GLAZED_TERRACOTTA: $Item;
        static BAMBOO_MOSAIC: $Item;
        static WARPED_STEM: $Item;
        static YELLOW_CONCRETE_POWDER: $Item;
        static OAK_TRAPDOOR: $Item;
        static MAGENTA_DYE: $Item;
        static BAMBOO_BUTTON: $Item;
        static PURPLE_WOOL: $Item;
        static VAULT: $Item;
        static LIGHT_BLUE_BANNER: $Item;
        static END_STONE: $Item;
        static SPRUCE_FENCE_GATE: $Item;
        static GRAVEL: $Item;
        static BUDDING_AMETHYST: $Item;
        static ARMS_UP_POTTERY_SHERD: $Item;
        static IRON_HORSE_ARMOR: $Item;
        static CYAN_STAINED_GLASS: $Item;
        static LAPIS_ORE: $Item;
        static CHICKEN: $Item;
        static ORANGE_BED: $Item;
        static WAXED_WEATHERED_COPPER_TRAPDOOR: $Item;
        static BIG_DRIPLEAF: $Item;
        static RED_DYE: $Item;
        static NETHER_BRICK_SLAB: $Item;
        static DISPENSER: $Item;
        static CYAN_CONCRETE: $Item;
        static SMITHING_TABLE: $Item;
        static IRON_ORE: $Item;
        static POLISHED_BLACKSTONE_BRICK_SLAB: $Item;
        static NETHERRACK: $Item;
        static RED_STAINED_GLASS_PANE: $Item;
        static COOKED_RABBIT: $Item;
        static TROPICAL_FISH_SPAWN_EGG: $Item;
        static CHORUS_FRUIT: $Item;
        static COOKED_SALMON: $Item;
        static BROWN_SHULKER_BOX: $Item;
        static MELON_SEEDS: $Item;
        static HANGING_ROOTS: $Item;
        static PRISMARINE_SLAB: $Item;
        static SMOOTH_RED_SANDSTONE: $Item;
        static BROWN_STAINED_GLASS: $Item;
        static GLOW_BERRIES: $Item;
        static ARMADILLO_SPAWN_EGG: $Item;
        static CHAINMAIL_HELMET: $Item;
        static SKELETON_SKULL: $Item;
        static END_STONE_BRICK_WALL: $Item;
        static PAINTING: $Item;
        static POLISHED_TUFF_STAIRS: $Item;
        static TORCH: $Item;
        static ENDER_CHEST: $Item;
        static WAXED_OXIDIZED_COPPER_GRATE: $Item;
        static FERN: $Item;
        static BIRCH_SIGN: $Item;
        static POLISHED_GRANITE: $Item;
        static PINK_TULIP: $Item;
        static INFESTED_CRACKED_STONE_BRICKS: $Item;
        static JUNGLE_SAPLING: $Item;
        static DEAD_BUBBLE_CORAL_BLOCK: $Item;
        static LEVER: $Item;
        static TUFF: $Item;
        static STONE_PRESSURE_PLATE: $Item;
        static POLISHED_BLACKSTONE_BRICK_STAIRS: $Item;
        static NETHER_GOLD_ORE: $Item;
        static QUARTZ_BRICKS: $Item;
        static LIME_BED: $Item;
        static MUSIC_DISC_OTHERSIDE: $Item;
        static STRIPPED_OAK_LOG: $Item;
        static MANGROVE_SLAB: $Item;
        static END_ROD: $Item;
        static WARPED_PLANKS: $Item;
        static CHERRY_SLAB: $Item;
        static IRON_INGOT: $Item;
        static ORANGE_CONCRETE_POWDER: $Item;
        static ORANGE_WOOL: $Item;
        static PLAYER_HEAD: $Item;
        static MANGROVE_STAIRS: $Item;
        static LIME_TERRACOTTA: $Item;
        static TUFF_BRICKS: $Item;
        static WHITE_WOOL: $Item;
        static GRAY_CARPET: $Item;
        static GREEN_TERRACOTTA: $Item;
        static OAK_BOAT: $Item;
        static DIAMOND_SWORD: $Item;
        static BROWN_CANDLE: $Item;
        static GREEN_SHULKER_BOX: $Item;
        static DARK_OAK_DOOR: $Item;
        static ACACIA_BOAT: $Item;
        static GRAY_CONCRETE_POWDER: $Item;
        static OXIDIZED_CUT_COPPER: $Item;
        static DIAMOND_HOE: $Item;
        static BLAZE_SPAWN_EGG: $Item;
        static WHITE_SHULKER_BOX: $Item;
        static CRIMSON_BUTTON: $Item;
        static IRON_BLOCK: $Item;
        static ENDER_EYE: $Item;
        static BLUE_CONCRETE: $Item;
        static GRAY_DYE: $Item;
        static REDSTONE_LAMP: $Item;
        static SPRUCE_CHEST_BOAT: $Item;
        static GOLDEN_CARROT: $Item;
        static POLISHED_BLACKSTONE_BRICK_WALL: $Item;
        static BIRCH_BUTTON: $Item;
        static HOPPER: $Item;
        static LIGHT_WEIGHTED_PRESSURE_PLATE: $Item;
        static NETHER_STAR: $Item;
        static SOUL_SOIL: $Item;
        static YELLOW_CANDLE: $Item;
        static SOUL_TORCH: $Item;
        static LIGHT_BLUE_WOOL: $Item;
        static VEX_SPAWN_EGG: $Item;
        static LEAD: $Item;
        static COOKED_MUTTON: $Item;
        static RAW_COPPER: $Item;
        static TUFF_BRICK_STAIRS: $Item;
        static LIGHT_GRAY_SHULKER_BOX: $Item;
        static SILENCE_ARMOR_TRIM_SMITHING_TEMPLATE: $Item;
        static WAXED_CUT_COPPER: $Item;
        static STRIPPED_MANGROVE_WOOD: $Item;
        static GLASS_BOTTLE: $Item;
        static WAXED_WEATHERED_CUT_COPPER: $Item;
        static CHERRY_LOG: $Item;
        static YELLOW_STAINED_GLASS_PANE: $Item;
        static WOODEN_HOE: $Item;
        static CUT_COPPER_SLAB: $Item;
        static SNIFFER_SPAWN_EGG: $Item;
        static MUSIC_DISC_CAT: $Item;
        static TRADER_LLAMA_SPAWN_EGG: $Item;
        static BLACKSTONE: $Item;
        static NETHERITE_UPGRADE_SMITHING_TEMPLATE: $Item;
        static RED_NETHER_BRICK_SLAB: $Item;
        static COOKED_PORKCHOP: $Item;
        static GREEN_DYE: $Item;
        static ZOGLIN_SPAWN_EGG: $Item;
        static MAGENTA_STAINED_GLASS_PANE: $Item;
        static DEAD_HORN_CORAL_FAN: $Item;
        static SPECTRAL_ARROW: $Item;
        static SHULKER_BOX: $Item;
        static DEAD_HORN_CORAL_BLOCK: $Item;
        static STONE_SWORD: $Item;
        static ENDERMITE_SPAWN_EGG: $Item;
        static POLAR_BEAR_SPAWN_EGG: $Item;
        static CARVED_PUMPKIN: $Item;
        static ROTTEN_FLESH: $Item;
        static PINK_WOOL: $Item;
        static MUSIC_DISC_CREATOR: $Item;
        static LIGHT_GRAY_WOOL: $Item;
        static STONE_AXE: $Item;
        static BLADE_POTTERY_SHERD: $Item;
        static JUNGLE_DOOR: $Item;
        static CRACKED_NETHER_BRICKS: $Item;
        static GRANITE_SLAB: $Item;
        static STONE_BUTTON: $Item;
        static LIGHT_GRAY_BED: $Item;
        static ACACIA_SAPLING: $Item;
        static EXPOSED_COPPER_BULB: $Item;
        static FRIEND_POTTERY_SHERD: $Item;
        static BAMBOO_SLAB: $Item;
        static IRON_DOOR: $Item;
        static BROWN_STAINED_GLASS_PANE: $Item;
        static WAXED_EXPOSED_CUT_COPPER_SLAB: $Item;
        static BIRCH_WOOD: $Item;
        static FERMENTED_SPIDER_EYE: $Item;
        static LODESTONE: $Item;
        static SEA_PICKLE: $Item;
        static SPRUCE_LEAVES: $Item;
        static ORANGE_TULIP: $Item;
        static ANDESITE: $Item;
        static RED_NETHER_BRICK_STAIRS: $Item;
        static DUNE_ARMOR_TRIM_SMITHING_TEMPLATE: $Item;
        static MANGROVE_PROPAGULE: $Item;
        static OXIDIZED_CHISELED_COPPER: $Item;
        static BROWN_GLAZED_TERRACOTTA: $Item;
        static BARREL: $Item;
        static INFESTED_STONE: $Item;
        static YELLOW_GLAZED_TERRACOTTA: $Item;
        constructor();
    }
    export class $EnderpearlItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
    }
    export class $StandingAndWallBlockItem extends $BlockItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(block: $Block_, wallBlock: $Block_, properties: $Item$Properties, attachmentDirection: $Direction_);
    }
    export class $MaceItem extends $Item {
        static createToolProperties(): $Tool;
        static canSmashAttack(entity: $LivingEntity): boolean;
        static createAttributes(): $ItemAttributeModifiers;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static SMASH_ATTACK_KNOCKBACK_RADIUS: number;
        static SMASH_ATTACK_FALL_THRESHOLD: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
    }
    export class $BottleItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
    }
    export class $BlockItem extends $Item implements $IExtendedItem {
        registerBlocks(blockToItemMap: $Map_<$Block_, $Item_>, item: $Item_): void;
        updatePlacementContext(context: $BlockPlaceContext): $BlockPlaceContext;
        static updateCustomBlockEntityTag(level: $Level_, player: $Player | null, pos: $BlockPos_, stack: $ItemStack_): boolean;
        /**
         * @deprecated
         */
        removeFromBlockToItemMap(blockToItemMap: $Map_<$Block_, $Item_>, item: $Item_): void;
        place(context: $BlockPlaceContext): $InteractionResult;
        getBlock(): $Block;
        static setBlockEntityData(stack: $ItemStack_, blockEntityType: $BlockEntityType_<never>, blockEntityData: $CompoundTag_): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(block: $Block_, properties: $Item$Properties);
    }
    export class $PickaxeItem extends $DiggerItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        tier: $Tier;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Tier_, arg1: $Item$Properties);
    }
    export class $SpawnEggItem extends $Item {
        spawnsEntity(stack: $ItemStack_, entityType: $EntityType_<never>): boolean;
        static eggs(): $Iterable<$SpawnEggItem>;
        spawnOffspringFromSpawnEgg(player: $Player, mob: $Mob, entityType: $EntityType_<$Mob>, serverLevel: $ServerLevel, pos: $Vec3_, stack: $ItemStack_): ($Mob) | undefined;
        getType(stack: $ItemStack_): $EntityType<never>;
        getColor(tintIndex: number): number;
        static byId(type: $EntityType_<never> | null): $SpawnEggItem;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static BY_ID: $Map<$EntityType<$Mob>, $SpawnEggItem>;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        defaultType: $EntityType<never>;
        static BY_BLOCK: $Map<$Block, $Item>;
        /**
         * @deprecated
         */
        constructor(defaultType: $EntityType_<$Mob>, backgroundColor: number, highlightColor: number, properties: $Item$Properties);
    }
    export class $GameMasterBlockItem extends $BlockItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(block: $Block_, properties: $Item$Properties);
    }
    export class $Item implements $FeatureElement, $ItemLike, $IItemExtension, $IrisItemLightProvider, $InjectedItemExtension, $OwoItem, $OwoItemExtensions, $ItemFTBL, $IExtendedItem, $ItemInvoker, $ItemKJS {
        /**
         * Return whether this item is repairable in an anvil.
         */
        isValidRepairItem(stack: $ItemStack_, repairCandidate: $ItemStack_): boolean;
        /**
         * @deprecated
         */
        getDefaultAttributeModifiers(): $ItemAttributeModifiers;
        isRepairable(stack: $ItemStack_): boolean;
        /**
         * @deprecated
         * True if this Item has a container item (a.k.a. crafting result)
         */
        canFitInsideContainerItems(): boolean;
        handler$ejn000$moonlight$initializeClient(arg0: $Consumer_<any>, arg1: $CallbackInfo): void;
        owo$setGroup(group: $Supplier_<any>): void;
        /**
         * True if this Item has a container item (a.k.a. crafting result)
         */
        owo$shouldTrackUsageStat(): boolean;
        moonlight$getAdditionalBehavior(): $AdditionalItemPlacement;
        moonlight$setAdditionalBehavior(arg0: $AdditionalItemPlacement): void;
        moonlight$getClientAnimationExtension(): $Object;
        moonlight$setClientAnimationExtension(arg0: $Object): void;
        setItemBuilder(b: $ItemBuilder): void;
        getTypeItemStackKey(): $ItemStackKey;
        static getPlayerPOVHitResult$sable_$md$5c91d2$1(level: $Level_, player: $Player, fluidMode: $ClipContext$Fluid_): $BlockHitResult;
        setCraftingRemainder(arg0: $Item_): void;
        setCanRepair(arg0: boolean): void;
        overrideStackedOnOther(stack: $ItemStack_, slot: $Slot, action: $ClickAction_, player: $Player): boolean;
        overrideOtherStackedOnMe(stack: $ItemStack_, other: $ItemStack_, slot: $Slot, action: $ClickAction_, player: $Player, access: $SlotAccess): boolean;
        /**
         * Called when a `Block` is destroyed using this Item. Return `true` to trigger the "Use Item" statistic.
         */
        mineBlock(stack: $ItemStack_, level: $Level_, state: $BlockState_, pos: $BlockPos_, miningEntity: $LivingEntity): boolean;
        /**
         * @deprecated
         */
        getCraftingRemainingItem(): $Item;
        /**
         * @deprecated
         * True if this Item has a container item (a.k.a. crafting result)
         */
        hasCraftingRemainingItem(): boolean;
        /**
         * Called each tick as long the item is in a player's inventory. Used by maps to check if it's in a player's hand and update its contents.
         */
        inventoryTick(stack: $ItemStack_, level: $Level_, entity: $Entity, slotId: number, isSelected: boolean): void;
        /**
         * Called when item is crafted/smelted. Used only by maps so far.
         */
        onCraftedBy(stack: $ItemStack_, level: $Level_, player: $Player): void;
        onCraftedPostProcess(stack: $ItemStack_, level: $Level_): void;
        /**
         * True if this Item has a container item (a.k.a. crafting result)
         */
        isComplex(): boolean;
        isFoil(stack: $ItemStack_): boolean;
        isEnchantable(stack: $ItemStack_): boolean;
        static getPlayerPOVHitResult(level: $Level_, player: $Player, fluidMode: $ClipContext$Fluid_): $BlockHitResult;
        /**
         * @deprecated
         * Return the enchantability factor of the item, most of the time is based on material.
         */
        getEnchantmentValue(): number;
        owo$group(): $CreativeModeTab;
        /**
         * Return the enchantability factor of the item, most of the time is based on material.
         */
        owo$tab(): number;
        owo$stackGenerator(): $BiConsumer<any, any>;
        asIngredient(): $Ingredient;
        /**
         * @deprecated
         */
        modifyDefaultComponentsFrom(arg0: $DataComponentPatch_): void;
        /**
         * Return the enchantability factor of the item, most of the time is based on material.
         */
        getDefaultMaxStackSize(): number;
        /**
         * @deprecated
         */
        onDestroyed(itemEntity: $ItemEntity): void;
        canAttackBlock(state: $BlockState_, level: $Level_, pos: $BlockPos_, player: $Player): boolean;
        /**
         * Called when this item is used when targeting a Block
         */
        useOn(context: $UseOnContext): $InteractionResult;
        /**
         * @deprecated
         */
        static byBlock(block: $Block_): $Item;
        getTypeData(): $Map<any, any>;
        setNameKey(arg0: string): void;
        asHolder(): $Holder<any>;
        appendHoverText(stack: $ItemStack_, context: $Item$TooltipContext, tooltipComponents: $List_<$Component_>, tooltipFlag: $TooltipFlag): void;
        /**
         * @deprecated
         */
        builtInRegistryHolder(): $Holder$Reference<$Item>;
        /**
         * @deprecated
         */
        initializeClient(arg0: $Consumer_<$IClientItemExtensions>): void;
        getDescription(): $Component;
        getName(stack: $ItemStack_): $Component;
        static getId(item: $Item_): number;
        /**
         * Called to trigger the item's "innate" right click behavior. To handle when this item is used on a Block, see `UseOnContext)`.
         */
        use(level: $Level_, player: $Player, usedHand: $InteractionHand_): $InteractionResultHolder<$ItemStack>;
        components(): $DataComponentMap;
        requiredFeatures(): $FeatureFlagSet;
        asItem(): $Item;
        isBarVisible(stack: $ItemStack_): boolean;
        getBarWidth(stack: $ItemStack_): number;
        getBarColor(stack: $ItemStack_): number;
        getTooltipImage(stack: $ItemStack_): ($TooltipComponent) | undefined;
        getDefaultInstance(): $ItemStack;
        /**
         * Returns the unlocalized name of this item.
         */
        getDescriptionId(): string;
        /**
         * Returns the unlocalized name of this item. This version accepts an ItemStack so different stacks can have different names based on their damage or NBT.
         */
        getDescriptionId(stack: $ItemStack_): string;
        getKey(): $ResourceKey<any>;
        static byId(id: number): $Item;
        getBreakingSound(): $SoundEvent;
        getDestroySpeed(stack: $ItemStack_, state: $BlockState_): number;
        isCorrectToolForDrops(stack: $ItemStack_, state: $BlockState_): boolean;
        /**
         * Try interacting with given entity. Return `InteractionResult.PASS` if nothing should happen.
         */
        interactLivingEntity(stack: $ItemStack_, player: $Player, interactionTarget: $LivingEntity, usedHand: $InteractionHand_): $InteractionResult;
        getAttackDamageBonus(target: $Entity, damage: number, damageSource: $DamageSource_): number;
        /**
         * Current implementations of this method in child classes do not use the entry argument beside ev. They just raise the damage on the stack.
         */
        hurtEnemy(stack: $ItemStack_, target: $LivingEntity, attacker: $LivingEntity): boolean;
        postHurtEnemy(stack: $ItemStack_, target: $LivingEntity, attacker: $LivingEntity): void;
        getDrinkingSound(): $SoundEvent;
        getEatingSound(): $SoundEvent;
        verifyComponentsAfterLoad(stack: $ItemStack_): void;
        /**
         * Called as the item is being used by an entity.
         */
        onUseTick(level: $Level_, livingEntity: $LivingEntity, stack: $ItemStack_, remainingUseDuration: number): void;
        useOnRelease(stack: $ItemStack_): boolean;
        getUseDuration(stack: $ItemStack_, entity: $LivingEntity): number;
        /**
         * Returns the action that specifies what animation to play when the item is being used.
         */
        getUseAnimation(stack: $ItemStack_): $UseAnim;
        /**
         * Called when the player finishes using this Item (E.g. finishes eating.). Not called when the player stops using the Item before the action is complete.
         */
        finishUsingItem(stack: $ItemStack_, level: $Level_, livingEntity: $LivingEntity): $ItemStack;
        /**
         * Called when the player stops using an Item (stops holding the right mouse button).
         */
        releaseUsing(stack: $ItemStack_, level: $Level_, livingEntity: $LivingEntity, timeCharged: number): void;
        getItemBuilder(): $ItemBuilder;
        /**
         * Returns the unlocalized name of this item.
         */
        getId(): string;
        isEnabled(enabledFeatures: $FeatureFlagSet): boolean;
        /**
         * ItemStack sensitive version of getDefaultAttributeModifiers. Used when a stack has no `DataComponents#ATTRIBUTE_MODIFIERS` component.
         */
        getDefaultAttributeModifiers(stack: $ItemStack_): $ItemAttributeModifiers;
        isDamageable(stack: $ItemStack_): boolean;
        canFitInsideContainerItems(stack: $ItemStack_): boolean;
        /**
         * Checks if an item should be treated as a primary item for a given enchantment.
         * 
         * Primary items are those that are able to receive the enchantment during enchanting,
         * either from the enchantment table or other random enchantment mechanisms.
         * As a special case, books are primary items for every enchantment.
         * 
         * Other application mechanisms, such as the anvil, check `#supportsEnchantment(ItemStack, Holder)` instead.
         * If you want those mechanisms to be able to apply an enchantment, you will need to add your item to the relevant tag or override that method.
         */
        supportsEnchantment(stack: $ItemStack_, enchantment: $Holder_<$Enchantment>): boolean;
        /**
         * Called when a player drops the item into the world, returning false from this
         * will prevent the item from being removed from the players inventory and
         * spawning in the world
         */
        onDroppedByPlayer(item: $ItemStack_, player: $Player): boolean;
        /**
         * Allow the item one last chance to modify its name used for the tool highlight
         * useful for adding something extra that can't be removed by a user in the
         * displayed name, such as a mode of operation.
         */
        getHighlightTip(item: $ItemStack_, displayName: $Component_): $Component;
        /**
         * This is called when the item is used, before the block is activated.
         */
        onItemUseFirst(stack: $ItemStack_, context: $UseOnContext): $InteractionResult;
        isPiglinCurrency(stack: $ItemStack_): boolean;
        /**
         * Determines the amount of durability the mending enchantment
         * will repair, on average, per 0.5 points of experience.
         */
        getXpRepairRatio(stack: $ItemStack_): number;
        /**
         * Called when the player Left Clicks (attacks) an entity. Processed before
         * damage is done, if return value is true further processing is canceled and
         * the entity is not attacked.
         */
        onLeftClickEntity(stack: $ItemStack_, player: $Player, entity: $Entity): boolean;
        /**
         * Retrieves the normal 'lifespan' of this item when it is dropped on the ground
         * as a EntityItem. This is in ticks, standard result is 6000, or 5 mins.
         */
        getEntityLifespan(itemStack: $ItemStack_, level: $Level_): number;
        hasCustomEntity(stack: $ItemStack_): boolean;
        /**
         * Called by the default implemetation of EntityItem's onUpdate method, allowing
         * for cleaner control over the update of the item without having to write a
         * subclass.
         */
        onEntityItemUpdate(stack: $ItemStack_, entity: $ItemEntity): boolean;
        doesSneakBypassUse(arg0: $ItemStack_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Player): boolean;
        /**
         * Determines if the specific ItemStack can be placed in the specified armor
         * slot, for the entity.
         */
        canEquip(stack: $ItemStack_, armorType: $EquipmentSlot_, entity: $LivingEntity): boolean;
        /**
         * Return whether this item is repairable in an anvil.
         */
        isBookEnchantable(stack: $ItemStack_, repairCandidate: $ItemStack_): boolean;
        /**
         * Called by RenderBiped and RenderPlayer to determine the armor texture that
         * should be use for the currently equipped item. This will only be called on
         * instances of ItemArmor.
         * 
         * Returning null from this function will use the default value.
         */
        getArmorTexture(stack: $ItemStack_, entity: $Entity, slot: $EquipmentSlot_, layer: $ArmorMaterial$Layer, innerModel: boolean): $ResourceLocation;
        /**
         * Set the damage for this itemstack. Note, this method is responsible for zero
         * checking.
         */
        setDamage(stack: $ItemStack_, damage: number): void;
        /**
         * Checks if an item should be treated as a primary item for a given enchantment.
         * 
         * Primary items are those that are able to receive the enchantment during enchanting,
         * either from the enchantment table or other random enchantment mechanisms.
         * As a special case, books are primary items for every enchantment.
         * 
         * Other application mechanisms, such as the anvil, check `#supportsEnchantment(ItemStack, Holder)` instead.
         * If you want those mechanisms to be able to apply an enchantment, you will need to add your item to the relevant tag or override that method.
         */
        isPrimaryItemFor(stack: $ItemStack_, enchantment: $Holder_<$Enchantment>): boolean;
        /**
         * Gets the level of the enchantment currently present on the stack. By default, returns the enchantment level present in NBT.
         * Most enchantment implementations rely upon this method.
         * The returned value must be the same as getting the enchantment from `#getAllEnchantments`
         */
        getEnchantmentLevel(stack: $ItemStack_, enchantment: $Holder_<$Enchantment>): number;
        getAllEnchantments(arg0: $ItemStack_, arg1: $HolderLookup$RegistryLookup<$Enchantment_>): $ItemEnchantments;
        /**
         * Determine if the player switching between these two item stacks
         */
        shouldCauseReequipAnimation(oldStack: $ItemStack_, newStack: $ItemStack_, slotChanged: boolean): boolean;
        /**
         * Return whether this item is repairable in an anvil.
         */
        shouldCauseBlockBreakReset(stack: $ItemStack_, repairCandidate: $ItemStack_): boolean;
        /**
         * Returns the unlocalized name of this item. This version accepts an ItemStack so different stacks can have different names based on their damage or NBT.
         */
        getCreatorModId(stack: $ItemStack_): string;
        getBurnTime(itemStack: $ItemStack_, recipeType: $RecipeType_<never>): number;
        /**
         * Called every tick when this item is equipped as an armor item by a horse that can wear armor.
         * 
         * In vanilla, only horses and wolves can wear armor, and they can only equip items that extend `AnimalArmorItem`.
         */
        onAnimalArmorTick(stack: $ItemStack_, level: $Level_, horse: $Mob): void;
        damageItem<T extends $LivingEntity>(arg0: $ItemStack_, arg1: number, arg2: T, arg3: $Consumer_<$Item>): number;
        /**
         * Whether this Item can be used to hide player head for enderman.
         */
        isEnderMask(stack: $ItemStack_, player: $Player, endermanEntity: $EnderMan): boolean;
        /**
         * Whether the given ItemStack should be excluded (if possible) when selecting the target hotbar slot of a "pick" action.
         * By default, this returns true for enchanted stacks.
         */
        isNotReplaceableByPickAction(stack: $ItemStack_, player: $Player, inventorySlot: number): boolean;
        canGrindstoneRepair(stack: $ItemStack_): boolean;
        /**
         * @return false to make item entity immune to the damage.
         */
        canBeHurtBy(stack: $ItemStack_, source: $DamageSource_): boolean;
        /**
         * Handles enchanting an item (i.e. in the enchanting table), potentially transforming it to a new item in the process.
         * 
         * Books use this functionality to transform themselves into enchanted books.
         */
        applyEnchantments(stack: $ItemStack_, enchantments: $List_<$EnchantmentInstance>): $ItemStack;
        isDamaged(stack: $ItemStack_): boolean;
        getMaxDamage(stack: $ItemStack_): number;
        /**
         * ItemStack sensitive version of `Item#getCraftingRemainingItem()`.
         * Returns a full ItemStack instance of the result.
         */
        getCraftingRemainingItem(itemStack: $ItemStack_): $ItemStack;
        hasCraftingRemainingItem(stack: $ItemStack_): boolean;
        getEnchantmentValue(stack: $ItemStack_): number;
        /**
         * Called when an item entity for this stack is destroyed. Note: The `ItemStack` can be retrieved from the item entity.
         */
        onDestroyed(itemEntity: $ItemEntity, damageSource: $DamageSource_): void;
        /**
         * This function should return a new entity to replace the dropped item.
         * Returning null here will not kill the EntityItem and will leave it to
         * function normally. Called when the item it placed in a level.
         */
        createEntity(level: $Level_, location: $Entity, stack: $ItemStack_): $Entity;
        getMaxStackSize(stack: $ItemStack_): number;
        /**
         * Used to determine if the player can use Elytra flight.
         * This is called Client and Server side.
         */
        canWalkOnPowderedSnow(stack: $ItemStack_, entity: $LivingEntity): boolean;
        /**
         * Used to determine if the player can use Elytra flight.
         * This is called Client and Server side.
         */
        makesPiglinsNeutral(stack: $ItemStack_, entity: $LivingEntity): boolean;
        /**
         * Override this to set a non-default armor slot for an ItemStack, but *do
         * not use this to get the armor slot of said stack; for that, use
         * `LivingEntity#getEquipmentSlotForItem(ItemStack)`..*
         */
        getEquipmentSlot(stack: $ItemStack_): $EquipmentSlot;
        getSweepHitBox(stack: $ItemStack_, player: $Player, target: $Entity): $AABB;
        /**
         * Called when a entity tries to play the 'swing' animation.
         */
        onEntitySwing(stack: $ItemStack_, entity: $LivingEntity, hand: $InteractionHand_): boolean;
        /**
         * @deprecated
         * Used to determine if the player can use Elytra flight.
         * This is called Client and Server side.
         */
        onEntitySwing(stack: $ItemStack_, entity: $LivingEntity): boolean;
        /**
         * Used to determine if the player can use Elytra flight.
         * This is called Client and Server side.
         */
        canElytraFly(stack: $ItemStack_, entity: $LivingEntity): boolean;
        /**
         * Used to determine if the player can continue Elytra flight,
         * this is called each tick, and can be used to apply ItemStack damage,
         * consume Energy, or what have you.
         * For example the Vanilla implementation of this, applies damage to the
         * ItemStack every 20 ticks.
         */
        elytraFlightTick(stack: $ItemStack_, entity: $LivingEntity, flightTicks: number): boolean;
        /**
         * Return whether this item is repairable in an anvil.
         */
        canContinueUsing(stack: $ItemStack_, repairCandidate: $ItemStack_): boolean;
        /**
         * Called when an entity stops using an item for any reason, notably when selecting another item without releasing or finishing.
         * This method is called in addition to any other hooks called when an item is finished using; when another hook is also called it will be called before this method.
         * 
         * Note that if you break an item while using it (that is, it becomes empty without swapping the stack instance), this hook may not be called on the serverside as you are
         * technically still using the empty item (thus this hook is called on air instead). It is necessary to call `LivingEntity#stopUsingItem()` as part of your
         * `ItemStack#hurtAndBreak(int, LivingEntity, Consumer)` callback to prevent this issue.
         * 
         * For most uses, you likely want one of the following:
         */
        onStopUsing(stack: $ItemStack_, entity: $LivingEntity, count: number): void;
        /**
         * Queries if an item can perform the given action.
         * See `ItemAbilities` for a description of each stock action
         */
        canPerformAction(stack: $ItemStack_, itemAbility: $ItemAbility_): boolean;
        /**
         * Get the food properties for this item.
         * Use this instead of the `Item#getFoodProperties()` method, for ItemStack sensitivity.
         * 
         * The @Nullable annotation was only added, due to the default method, also being @Nullable.
         * Use this with a grain of salt, as if you return null here and true at `Item#isEdible()`, NPEs will occur!
         */
        getFoodProperties(stack: $ItemStack_, entity: $LivingEntity): $FoodProperties;
        /**
         * Can this Item disable a shield
         */
        canDisableShield(stack: $ItemStack_, shield: $ItemStack_, entity: $LivingEntity, attacker: $LivingEntity): boolean;
        getDamage(stack: $ItemStack_): number;
        getLightColor(arg0: $Player, arg1: $ItemStack_): $Vector3f;
        getLightEmission(arg0: $Player, arg1: $ItemStack_): number;
        arch$holder(): $Holder<$Item>;
        deriveStackComponents(source: $DataComponentMap_, target: $DataComponentPatch$Builder): void;
        owo$setGroup(group: $CreativeModeTab_): void;
        getRegistryId(): $ResourceKey<$Registry<$Item>>;
        getRegistry(): $Registry<$Item>;
        getItem(): $Item;
        arch$registryName(): $ResourceLocation;
        getIdLocation(): $ResourceLocation;
        /**
         * Returns the unlocalized name of this item.
         */
        getMod(): string;
        getTagKeys(): $List<$TagKey<$Item>>;
        getTags(): $List<$ResourceLocation>;
        hasTag(tag: $ResourceLocation_): boolean;
        specialEquals(o: $Object, shallow: boolean): boolean;
        setCraftingRemainingItemFTBL(arg0: $Item_): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
        get typeItemStackKey(): $ItemStackKey;
        set craftingRemainder(value: $Item_);
        set canRepair(value: boolean);
        get complex(): boolean;
        get defaultMaxStackSize(): number;
        get typeData(): $Map<any, any>;
        set nameKey(value: string);
        get description(): $Component;
        get defaultInstance(): $ItemStack;
        get key(): $ResourceKey<any>;
        get breakingSound(): $SoundEvent;
        get drinkingSound(): $SoundEvent;
        get eatingSound(): $SoundEvent;
        get registryId(): $ResourceKey<$Registry<$Item>>;
        get registry(): $Registry<$Item>;
        get item(): $Item;
        get idLocation(): $ResourceLocation;
        get mod(): string;
        get tagKeys(): $List<$TagKey<$Item>>;
        get tags(): $List<$ResourceLocation>;
        set craftingRemainingItemFTBL(value: $Item_);
    }
    /**
     * Values that may be interpreted as {@link $Item}.
     */
    export type $Item_ = RegistryTypes.Item;
    export class $PotionItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
    }
    export class $ItemDisplayContext extends $Enum<$ItemDisplayContext> implements $StringRepresentable, $IExtensibleEnum {
        isModded(): boolean;
        static values(): $ItemDisplayContext[];
        static valueOf(arg0: string): $ItemDisplayContext;
        getId(): number;
        fallback(): $ItemDisplayContext;
        static getExtensionInfo(): $ExtensionInfo;
        getSerializedName(): string;
        firstPerson(): boolean;
        getRemappedEnumConstantName(): string;
        static HEAD: $ItemDisplayContext;
        static CODEC: $Codec<$ItemDisplayContext>;
        static THIRD_PERSON_LEFT_HAND: $ItemDisplayContext;
        static THIRD_PERSON_RIGHT_HAND: $ItemDisplayContext;
        static FIRST_PERSON_RIGHT_HAND: $ItemDisplayContext;
        static GROUND: $ItemDisplayContext;
        static FIRST_PERSON_LEFT_HAND: $ItemDisplayContext;
        static FIXED: $ItemDisplayContext;
        static BY_ID: $IntFunction<$ItemDisplayContext>;
        static GUI: $ItemDisplayContext;
        static NONE: $ItemDisplayContext;
        get modded(): boolean;
        get id(): number;
        static get extensionInfo(): $ExtensionInfo;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ItemDisplayContext}.
     */
    export type $ItemDisplayContext_ = "none" | "thirdperson_lefthand" | "thirdperson_righthand" | "firstperson_lefthand" | "firstperson_righthand" | "head" | "gui" | "ground" | "fixed";
    export class $SnowballItem extends $Item implements $ProjectileItem {
        asProjectile(level: $Level_, pos: $Position, stack: $ItemStack_, direction: $Direction_): $Projectile;
        createDispenseConfig(): $ProjectileItem$DispenseConfig;
        shoot(projectile: $Projectile, x: number, arg2: number, y: number, arg4: number, z: number): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
    }
    export class $DebugStickItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
    }
    export class $ShieldItem extends $Item implements $Equipable {
        getEquipmentSlot(): $EquipmentSlot;
        swapWithEquipmentSlot(item: $Item_, level: $Level_, player: $Player, hand: $InteractionHand_): $InteractionResultHolder<$ItemStack>;
        getEquipSound(): $Holder<$SoundEvent>;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static MINIMUM_DURABILITY_DAMAGE: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static EFFECTIVE_BLOCK_DELAY: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
        get equipmentSlot(): $EquipmentSlot;
        get equipSound(): $Holder<$SoundEvent>;
    }
    export class $BoatItem extends $Item {
        getBoat(level: $Level_, hitResult: $HitResult, stack: $ItemStack_, player: $Player): $Boat;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(hasChest: boolean, type: $Boat$Type_, properties: $Item$Properties);
    }
    export class $JukeboxSongPlayer$OnSongChanged {
    }
    export interface $JukeboxSongPlayer$OnSongChanged {
        notifyChange(): void;
    }
    /**
     * Values that may be interpreted as {@link $JukeboxSongPlayer$OnSongChanged}.
     */
    export type $JukeboxSongPlayer$OnSongChanged_ = (() => void);
    export class $BundleItem extends $Item {
        static getFullnessDisplay(stack: $ItemStack_): number;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(properties: $Item$Properties);
    }
}
