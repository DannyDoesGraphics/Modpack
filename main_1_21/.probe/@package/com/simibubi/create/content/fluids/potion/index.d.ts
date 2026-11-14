import { $ItemLike, $Level_ } from "@package/net/minecraft/world/level";
import { $MixingRecipe } from "@package/com/simibubi/create/content/kinetics/mixer";
import { $Codec } from "@package/com/mojang/serialization";
import { $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $Component } from "@package/net/minecraft/network/chat";
import { $FluidStack_, $FluidStack, $BaseFlowingFluid$Properties, $FluidType$Properties } from "@package/net/neoforged/neoforge/fluids";
import { $List, $Map } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $SizedFluidIngredient } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $Consumer_ } from "@package/java/util/function";
import { $Lazy } from "@package/net/neoforged/neoforge/common/util";
import { $IntegerProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $Holder_, $IdMapper } from "@package/net/minecraft/core";
import { $PotionContents_, $Potion } from "@package/net/minecraft/world/item/alchemy";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $AllFluids$TintedFluidType } from "@package/com/simibubi/create";
import { $Enum } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $VirtualFluid } from "@package/com/simibubi/create/content/fluids";
import { $Pair } from "@package/net/createmod/catnip/data";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/fluids/potion" {
    export class $PotionMixingRecipes {
        static createRecipes(arg0: $Level_): $List<$RecipeHolder<$MixingRecipe>>;
        static sortRecipesByItem(arg0: $Level_): $Map<$Item, $List<$MixingRecipe>>;
        static SUPPORTED_CONTAINERS: $List<$Item>;
        constructor();
    }
    export class $PotionFluidHandler {
        static fillBottle(arg0: $ItemStack_, arg1: $FluidStack_): $ItemStack;
        static getRequiredAmountForFilledBottle(arg0: $ItemStack_, arg1: $FluidStack_): number;
        static getFluidFromPotionItem(arg0: $ItemStack_): $FluidStack;
        static bottleTypeFromItem(arg0: $Item_): $PotionFluid$BottleType;
        static getFluidFromPotion(arg0: $PotionContents_, arg1: $PotionFluid$BottleType_, arg2: number): $FluidStack;
        static isPotionItem(arg0: $ItemStack_): boolean;
        static emptyPotion(arg0: $ItemStack_, arg1: boolean): $Pair<$FluidStack, $ItemStack>;
        static potionIngredient(arg0: $Holder_<$Potion>, arg1: number): $SizedFluidIngredient;
        static addPotionTooltip(arg0: $FluidStack_, arg1: $Consumer_<$Component>, arg2: number): void;
        static itemFromBottleType(arg0: $PotionFluid$BottleType_): $ItemLike;
        constructor();
    }
    export class $PotionFluid$BottleType extends $Enum<$PotionFluid$BottleType> implements $StringRepresentable {
        static values(): $PotionFluid$BottleType[];
        static valueOf(arg0: string): $PotionFluid$BottleType;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static REGULAR: $PotionFluid$BottleType;
        static CODEC: $Codec<$PotionFluid$BottleType>;
        static LINGERING: $PotionFluid$BottleType;
        static SPLASH: $PotionFluid$BottleType;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $PotionFluid$BottleType>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $PotionFluid$BottleType}.
     */
    export type $PotionFluid$BottleType_ = "regular" | "splash" | "lingering";
    export class $PotionFluid extends $VirtualFluid {
        static createSource(arg0: $BaseFlowingFluid$Properties): $PotionFluid;
        static createFlowing(arg0: $BaseFlowingFluid$Properties): $PotionFluid;
        static addPotionToFluidStack(arg0: $FluidStack_, arg1: $PotionContents_): $FluidStack;
        static of(arg0: number, arg1: $PotionContents_, arg2: $PotionFluid$BottleType_): $FluidStack;
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        constructor(arg0: $BaseFlowingFluid$Properties, arg1: boolean);
    }
    export class $PotionFluid$PotionFluidType extends $AllFluids$TintedFluidType {
        getTintColor(arg0: $FluidStack_): number;
        static SIZE: $Lazy<number>;
        static BUCKET_VOLUME: number;
        constructor(arg0: $FluidType$Properties, arg1: $ResourceLocation_, arg2: $ResourceLocation_);
    }
}
