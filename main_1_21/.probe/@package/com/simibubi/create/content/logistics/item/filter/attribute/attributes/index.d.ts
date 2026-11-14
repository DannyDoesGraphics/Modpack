import { $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $CreativeModeTab_, $DyeColor_, $Item, $ItemStack_, $DyeColor } from "@package/net/minecraft/world/item";
import { $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $List } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $ItemAttribute, $ItemAttributeType } from "@package/com/simibubi/create/content/logistics/item/filter/attribute";
import { $Enum, $Record, $Object } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/logistics/item/filter/attribute/attributes" {
    export class $FluidContentsAttribute extends $Record implements $ItemAttribute {
        appliesTo(arg0: $ItemStack_, arg1: $Level_): boolean;
        fluid(): $Fluid;
        getTranslationParameters(): $Object[];
        getTranslationKey(): string;
        getType(): $ItemAttributeType;
        format(arg0: boolean): $MutableComponent;
        static CODEC: $MapCodec<$FluidContentsAttribute>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidContentsAttribute>;
        constructor(fluid: $Fluid_);
        get translationParameters(): $Object[];
        get translationKey(): string;
        get type(): $ItemAttributeType;
    }
    /**
     * Values that may be interpreted as {@link $FluidContentsAttribute}.
     */
    export type $FluidContentsAttribute_ = { fluid?: $Fluid_,  } | [fluid?: $Fluid_, ];
    export class $AddedByAttribute$Type implements $ItemAttributeType {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $ItemAttribute>;
        getAllAttributes(arg0: $ItemStack_, arg1: $Level_): $List<$ItemAttribute>;
        createAttribute(): $ItemAttribute;
        codec(): $MapCodec<$ItemAttribute>;
        constructor();
    }
    export class $ShulkerFillLevelAttribute$Type implements $ItemAttributeType {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $ItemAttribute>;
        getAllAttributes(arg0: $ItemStack_, arg1: $Level_): $List<$ItemAttribute>;
        createAttribute(): $ItemAttribute;
        codec(): $MapCodec<$ItemAttribute>;
        constructor();
    }
    export class $BookAuthorAttribute$Type implements $ItemAttributeType {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $ItemAttribute>;
        getAllAttributes(arg0: $ItemStack_, arg1: $Level_): $List<$ItemAttribute>;
        createAttribute(): $ItemAttribute;
        codec(): $MapCodec<$ItemAttribute>;
        constructor();
    }
    export class $BookAuthorAttribute extends $Record implements $ItemAttribute {
        appliesTo(arg0: $ItemStack_, arg1: $Level_): boolean;
        getTranslationParameters(): $Object[];
        getTranslationKey(): string;
        getType(): $ItemAttributeType;
        author(): string;
        format(arg0: boolean): $MutableComponent;
        static CODEC: $MapCodec<$BookAuthorAttribute>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $BookAuthorAttribute>;
        constructor(author: string);
        get translationParameters(): $Object[];
        get translationKey(): string;
        get type(): $ItemAttributeType;
    }
    /**
     * Values that may be interpreted as {@link $BookAuthorAttribute}.
     */
    export type $BookAuthorAttribute_ = { author?: string,  } | [author?: string, ];
    export class $BookCopyAttribute extends $Record implements $ItemAttribute {
        appliesTo(arg0: $ItemStack_, arg1: $Level_): boolean;
        getTranslationKey(): string;
        getType(): $ItemAttributeType;
        generation(): number;
        getTranslationParameters(): $Object[];
        format(arg0: boolean): $MutableComponent;
        static CODEC: $MapCodec<$BookCopyAttribute>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $BookCopyAttribute>;
        constructor(generation: number);
        get translationKey(): string;
        get type(): $ItemAttributeType;
        get translationParameters(): $Object[];
    }
    /**
     * Values that may be interpreted as {@link $BookCopyAttribute}.
     */
    export type $BookCopyAttribute_ = { generation?: number,  } | [generation?: number, ];
    export class $FluidContentsAttribute$Type implements $ItemAttributeType {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $ItemAttribute>;
        getAllAttributes(arg0: $ItemStack_, arg1: $Level_): $List<$ItemAttribute>;
        createAttribute(): $ItemAttribute;
        codec(): $MapCodec<$ItemAttribute>;
        constructor();
    }
    export class $InTagAttribute$Type implements $ItemAttributeType {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $ItemAttribute>;
        getAllAttributes(arg0: $ItemStack_, arg1: $Level_): $List<$ItemAttribute>;
        createAttribute(): $ItemAttribute;
        codec(): $MapCodec<$ItemAttribute>;
        constructor();
    }
    export class $ItemNameAttribute$Type implements $ItemAttributeType {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $ItemAttribute>;
        getAllAttributes(arg0: $ItemStack_, arg1: $Level_): $List<$ItemAttribute>;
        createAttribute(): $ItemAttribute;
        codec(): $MapCodec<$ItemAttribute>;
        constructor();
    }
    export class $ShulkerFillLevelAttribute$ShulkerLevels extends $Enum<$ShulkerFillLevelAttribute$ShulkerLevels> implements $StringRepresentable {
        getRemappedEnumConstantName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ShulkerFillLevelAttribute$ShulkerLevels}.
     */
    export type $ShulkerFillLevelAttribute$ShulkerLevels_ = "empty" | "partial" | "full";
    export class $ShulkerFillLevelAttribute extends $Record implements $ItemAttribute {
        appliesTo(arg0: $ItemStack_, arg1: $Level_): boolean;
        getTranslationParameters(): $Object[];
        getTranslationKey(): string;
        getType(): $ItemAttributeType;
        levels(): $ShulkerFillLevelAttribute$ShulkerLevels;
        format(arg0: boolean): $MutableComponent;
        static CODEC: $MapCodec<$ShulkerFillLevelAttribute>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ShulkerFillLevelAttribute>;
        constructor(levels: $ShulkerFillLevelAttribute$ShulkerLevels_);
        get translationParameters(): $Object[];
        get translationKey(): string;
        get type(): $ItemAttributeType;
    }
    /**
     * Values that may be interpreted as {@link $ShulkerFillLevelAttribute}.
     */
    export type $ShulkerFillLevelAttribute_ = { levels?: $ShulkerFillLevelAttribute$ShulkerLevels_,  } | [levels?: $ShulkerFillLevelAttribute$ShulkerLevels_, ];
    export class $ItemNameAttribute extends $Record implements $ItemAttribute {
        appliesTo(arg0: $ItemStack_, arg1: $Level_): boolean;
        getTranslationParameters(): $Object[];
        getTranslationKey(): string;
        itemName(): string;
        getType(): $ItemAttributeType;
        format(arg0: boolean): $MutableComponent;
        static CODEC: $MapCodec<$ItemNameAttribute>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ItemNameAttribute>;
        constructor(itemName: string);
        get translationParameters(): $Object[];
        get translationKey(): string;
        get type(): $ItemAttributeType;
    }
    /**
     * Values that may be interpreted as {@link $ItemNameAttribute}.
     */
    export type $ItemNameAttribute_ = { itemName?: string,  } | [itemName?: string, ];
    export class $ColorAttribute$Type implements $ItemAttributeType {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $ItemAttribute>;
        getAllAttributes(arg0: $ItemStack_, arg1: $Level_): $List<$ItemAttribute>;
        createAttribute(): $ItemAttribute;
        codec(): $MapCodec<$ItemAttribute>;
        constructor();
    }
    export class $InItemGroupAttribute implements $ItemAttribute {
        appliesTo(arg0: $ItemStack_, arg1: $Level_): boolean;
        getTranslationParameters(): $Object[];
        getTranslationKey(): string;
        getType(): $ItemAttributeType;
        format(arg0: boolean): $MutableComponent;
        static CODEC: $MapCodec<$InItemGroupAttribute>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $InItemGroupAttribute>;
        constructor(arg0: $CreativeModeTab_);
        get translationParameters(): $Object[];
        get translationKey(): string;
        get type(): $ItemAttributeType;
    }
    export class $AddedByAttribute extends $Record implements $ItemAttribute {
        appliesTo(arg0: $ItemStack_, arg1: $Level_): boolean;
        getTranslationParameters(): $Object[];
        getTranslationKey(): string;
        getType(): $ItemAttributeType;
        modId(): string;
        format(arg0: boolean): $MutableComponent;
        static CODEC: $MapCodec<$AddedByAttribute>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $AddedByAttribute>;
        constructor(modId: string);
        get translationParameters(): $Object[];
        get translationKey(): string;
        get type(): $ItemAttributeType;
    }
    /**
     * Values that may be interpreted as {@link $AddedByAttribute}.
     */
    export type $AddedByAttribute_ = { modId?: string,  } | [modId?: string, ];
    export class $ColorAttribute extends $Record implements $ItemAttribute {
        appliesTo(arg0: $ItemStack_, arg1: $Level_): boolean;
        getTranslationParameters(): $Object[];
        getTranslationKey(): string;
        getType(): $ItemAttributeType;
        color(): $DyeColor;
        format(arg0: boolean): $MutableComponent;
        static CODEC: $MapCodec<$ColorAttribute>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ColorAttribute>;
        constructor(color: $DyeColor_);
        get translationParameters(): $Object[];
        get translationKey(): string;
        get type(): $ItemAttributeType;
    }
    /**
     * Values that may be interpreted as {@link $ColorAttribute}.
     */
    export type $ColorAttribute_ = { color?: $DyeColor_,  } | [color?: $DyeColor_, ];
    export class $BookCopyAttribute$Type implements $ItemAttributeType {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $ItemAttribute>;
        getAllAttributes(arg0: $ItemStack_, arg1: $Level_): $List<$ItemAttribute>;
        createAttribute(): $ItemAttribute;
        codec(): $MapCodec<$ItemAttribute>;
        constructor();
    }
    export class $EnchantAttribute$Type implements $ItemAttributeType {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $ItemAttribute>;
        getAllAttributes(arg0: $ItemStack_, arg1: $Level_): $List<$ItemAttribute>;
        createAttribute(): $ItemAttribute;
        codec(): $MapCodec<$ItemAttribute>;
        constructor();
    }
    export class $EnchantAttribute extends $Record implements $ItemAttribute {
        appliesTo(arg0: $ItemStack_, arg1: $Level_): boolean;
        enchantment(): $Holder<$Enchantment>;
        getTranslationParameters(): $Object[];
        getTranslationKey(): string;
        getType(): $ItemAttributeType;
        format(arg0: boolean): $MutableComponent;
        static CODEC: $MapCodec<$EnchantAttribute>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $EnchantAttribute>;
        constructor(enchantment: $Holder_<$Enchantment>);
        get translationParameters(): $Object[];
        get translationKey(): string;
        get type(): $ItemAttributeType;
    }
    /**
     * Values that may be interpreted as {@link $EnchantAttribute}.
     */
    export type $EnchantAttribute_ = { enchantment?: $Holder_<$Enchantment>,  } | [enchantment?: $Holder_<$Enchantment>, ];
    export class $InTagAttribute extends $Record implements $ItemAttribute {
        appliesTo(arg0: $ItemStack_, arg1: $Level_): boolean;
        getTranslationParameters(): $Object[];
        getTranslationKey(): string;
        getType(): $ItemAttributeType;
        tag(): $TagKey<$Item>;
        format(arg0: boolean): $MutableComponent;
        static CODEC: $MapCodec<$InTagAttribute>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $InTagAttribute>;
        constructor(tag: $TagKey_<$Item>);
        get translationParameters(): $Object[];
        get translationKey(): string;
        get type(): $ItemAttributeType;
    }
    /**
     * Values that may be interpreted as {@link $InTagAttribute}.
     */
    export type $InTagAttribute_ = { tag?: $TagKey_<$Item>,  } | [tag?: $TagKey_<$Item>, ];
    export class $InItemGroupAttribute$Type implements $ItemAttributeType {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $ItemAttribute>;
        getAllAttributes(arg0: $ItemStack_, arg1: $Level_): $List<$ItemAttribute>;
        createAttribute(): $ItemAttribute;
        codec(): $MapCodec<$ItemAttribute>;
        constructor();
    }
}
