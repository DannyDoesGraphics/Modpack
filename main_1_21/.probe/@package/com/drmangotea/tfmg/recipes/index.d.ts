import { $MapCodec } from "@package/com/mojang/serialization";
import { $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $List } from "@package/java/util";
import { $ProcessingRecipe, $ProcessingRecipeParams } from "@package/com/simibubi/create/content/processing/recipe";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/drmangotea/tfmg/recipes" {
    export class $VatMachineRecipe extends $ProcessingRecipe<$RecipeInput, $VatRecipeParams> {
        heatLevel: number;
        allowedVatTypes: $List<string>;
        minSize: number;
        machines: $List<string>;
        constructor(arg0: $VatRecipeParams);
    }
    export class $VatRecipeParams extends $ProcessingRecipeParams {
        static types: $List<string>;
        static CODEC: $MapCodec<$VatRecipeParams>;
        allowedVatTypes: $List<string>;
        min_size: number;
        machines: $List<string>;
        heat_level: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $VatRecipeParams>;
        constructor();
    }
}
