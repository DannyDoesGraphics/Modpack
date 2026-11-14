import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CraftingInput } from "@package/net/minecraft/world/item/crafting";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $SlotFilter, $Lazy, $SlotFilter_ } from "@package/dev/latvian/mods/kubejs/util";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $List, $List_, $Map } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/dev/latvian/mods/kubejs/recipe/ingredientaction" {
    export class $IngredientActionType<T extends $IngredientAction> extends $Record {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        id(): $ResourceLocation;
        codec(): $MapCodec<T>;
        static TYPES: $Lazy<$Map<$ResourceLocation, $IngredientActionType<never>>>;
        static CODEC: $Codec<$IngredientActionType<never>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $IngredientActionType<never>>;
        constructor(id: $ResourceLocation_, codec: $MapCodec_<T>);
        constructor(id: $ResourceLocation_, codec: $MapCodec_<T>, streamCodec: $StreamCodec<$RegistryFriendlyByteBuf, T>);
    }
    /**
     * Values that may be interpreted as {@link $IngredientActionType}.
     */
    export type $IngredientActionType_<T> = { id?: $ResourceLocation_, codec?: $MapCodec_<$IngredientAction>, streamCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $IngredientAction>,  } | [id?: $ResourceLocation_, codec?: $MapCodec_<$IngredientAction>, streamCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $IngredientAction>, ];
    export class $IngredientAction {
        static getRemaining(input: $CraftingInput, index: number, ingredientActions: $List_<$IngredientActionHolder_>): $ItemStack;
        static CODEC: $Codec<$IngredientAction>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $IngredientAction>;
    }
    export interface $IngredientAction {
        transform(old: $ItemStack_, index: number, input: $CraftingInput): $ItemStack;
        getType(): $IngredientActionType<never>;
        get type(): $IngredientActionType<never>;
    }
    export class $IngredientActionHolder extends $Record {
        filter(): $SlotFilter;
        action(): $IngredientAction;
        static LIST_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $List<$IngredientActionHolder>>;
        static CODEC: $Codec<$IngredientActionHolder>;
        static LIST_CODEC: $Codec<$List<$IngredientActionHolder>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $IngredientActionHolder>;
        constructor(action: $IngredientAction, filter: $SlotFilter_);
    }
    /**
     * Values that may be interpreted as {@link $IngredientActionHolder}.
     */
    export type $IngredientActionHolder_ = { filter?: $SlotFilter_, action?: $IngredientAction,  } | [filter?: $SlotFilter_, action?: $IngredientAction, ];
}
