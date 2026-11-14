import { $Level_ } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $SingleRecipeInput_, $Recipe, $SingleRecipeInput, $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $Item$Properties, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CustomRenderedItemModelRenderer } from "@package/com/simibubi/create/foundation/item/render";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $List, $Map } from "@package/java/util";
import { $ProcessingRecipeParams, $StandardProcessingRecipe } from "@package/com/simibubi/create/content/processing/recipe";
import { $RandomSource } from "@package/net/minecraft/util";
import { $CustomUseEffectsItem } from "@package/com/simibubi/create/foundation/item";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $TriState } from "@package/net/createmod/catnip/data";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/equipment/sandPaper" {
    export class $SandPaperItemComponent extends $Record {
        item(): $ItemStack;
        static CODEC: $Codec<$SandPaperItemComponent>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SandPaperItemComponent>;
        constructor(item: $ItemStack_);
    }
    /**
     * Values that may be interpreted as {@link $SandPaperItemComponent}.
     */
    export type $SandPaperItemComponent_ = { item?: $ItemStack_,  } | [item?: $ItemStack_, ];
    export class $SandPaperItemRenderer extends $CustomRenderedItemModelRenderer {
        constructor();
    }
    export class $SandPaperPolishingRecipe extends $StandardProcessingRecipe<$SingleRecipeInput> {
        static canPolish(arg0: $Level_, arg1: $ItemStack_): boolean;
        static applyPolish(arg0: $Level_, arg1: $Vec3_, arg2: $ItemStack_, arg3: $ItemStack_): $ItemStack;
        static getMatchingRecipes(arg0: $Level_, arg1: $ItemStack_): $List<$RecipeHolder<$Recipe<$SingleRecipeInput>>>;
        matches(arg0: $SingleRecipeInput_, arg1: $Level_): boolean;
        constructor(arg0: $ProcessingRecipeParams);
    }
    export class $SandPaperItem extends $Item implements $CustomUseEffectsItem {
        static spawnParticles(arg0: $Vec3_, arg1: $ItemStack_, arg2: $Level_): void;
        shouldTriggerUseEffects(arg0: $ItemStack_, arg1: $LivingEntity): $TriState;
        triggerUseEffects(arg0: $ItemStack_, arg1: $LivingEntity, arg2: number, arg3: $RandomSource): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
}
