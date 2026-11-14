import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $BakedModel, $ModelResourceLocation, $ModelResourceLocation_ } from "@package/net/minecraft/client/resources/model";
import { $List, $Map_, $Map, $List_ } from "@package/java/util";
import { $FormattedCharSequence } from "@package/net/minecraft/util";
import { $Predicate, $Consumer } from "@package/java/util/function";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $PotionBrewing$Mix, $Potion } from "@package/net/minecraft/world/item/alchemy";
import { $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $ClientTooltipPositioner_, $ClientTooltipPositioner, $ClientTooltipComponent } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $CraftingContainer, $Slot } from "@package/net/minecraft/world/inventory";
import { $Font } from "@package/net/minecraft/client/gui";

declare module "@package/dev/emi/emi/mixin/accessor" {
    export class $CraftingResultSlotAccessor {
    }
    export interface $CraftingResultSlotAccessor {
        getInput(): $CraftingContainer;
        get input(): $CraftingContainer;
    }
    /**
     * Values that may be interpreted as {@link $CraftingResultSlotAccessor}.
     */
    export type $CraftingResultSlotAccessor_ = (() => $CraftingContainer);
    export class $AxeItemAccessor {
        static getStrippedBlocks(): $Map<$Block, $Block>;
        static get strippedBlocks(): $Map<$Block, $Block>;
    }
    export interface $AxeItemAccessor {
    }
    export class $HandledScreenAccessor {
    }
    export interface $HandledScreenAccessor {
        getY(): number;
        getX(): number;
        getFocusedSlot(): $Slot;
        getBackgroundWidth(): number;
        getBackgroundHeight(): number;
        invokeGetSlotAt(arg0: number, arg1: number): $Slot;
        get y(): number;
        get x(): number;
        get focusedSlot(): $Slot;
        get backgroundWidth(): number;
        get backgroundHeight(): number;
    }
    export class $BakedModelManagerAccessor {
    }
    export interface $BakedModelManagerAccessor {
        getModels(): $Map<$ModelResourceLocation, $BakedModel>;
        get models(): $Map<$ModelResourceLocation, $BakedModel>;
    }
    /**
     * Values that may be interpreted as {@link $BakedModelManagerAccessor}.
     */
    export type $BakedModelManagerAccessor_ = (() => $Map_<$ModelResourceLocation_, $BakedModel>);
    export class $SmithingTransformRecipeAccessor {
    }
    export interface $SmithingTransformRecipeAccessor {
        getAddition(): $Ingredient;
        getBase(): $Ingredient;
        getTemplate(): $Ingredient;
        get addition(): $Ingredient;
        get base(): $Ingredient;
        get template(): $Ingredient;
    }
    export class $ShovelItemAccessor {
        static getPathStates(): $Map<$Block, $BlockState>;
        static get pathStates(): $Map<$Block, $BlockState>;
    }
    export interface $ShovelItemAccessor {
    }
    export class $HoeItemAccessor {
        static getTillingActions(): $Map<$Block, $Pair<$Predicate<$UseOnContext>, $Consumer<$UseOnContext>>>;
        static get tillingActions(): $Map<$Block, $Pair<$Predicate<$UseOnContext>, $Consumer<$UseOnContext>>>;
    }
    export interface $HoeItemAccessor {
    }
    export class $ItemRendererAccessor {
    }
    export interface $ItemRendererAccessor {
        invokeRenderBakedItemModel(arg0: $BakedModel, arg1: $ItemStack_, arg2: number, arg3: number, arg4: $PoseStack, arg5: $VertexConsumer): void;
    }
    /**
     * Values that may be interpreted as {@link $ItemRendererAccessor}.
     */
    export type $ItemRendererAccessor_ = ((arg0: $BakedModel, arg1: $ItemStack, arg2: number, arg3: number, arg4: $PoseStack, arg5: $VertexConsumer) => void);
    export class $DrawContextAccessor {
    }
    export interface $DrawContextAccessor {
        invokeDrawTooltip(arg0: $Font, arg1: $List_<$ClientTooltipComponent>, arg2: number, arg3: number, arg4: $ClientTooltipPositioner_): void;
    }
    /**
     * Values that may be interpreted as {@link $DrawContextAccessor}.
     */
    export type $DrawContextAccessor_ = ((arg0: $Font, arg1: $List<$ClientTooltipComponent>, arg2: number, arg3: number, arg4: $ClientTooltipPositioner) => void);
    export class $OrderedTextTooltipComponentAccessor {
    }
    export interface $OrderedTextTooltipComponentAccessor {
        getText(): $FormattedCharSequence;
        get text(): $FormattedCharSequence;
    }
    /**
     * Values that may be interpreted as {@link $OrderedTextTooltipComponentAccessor}.
     */
    export type $OrderedTextTooltipComponentAccessor_ = (() => $FormattedCharSequence);
    export class $SmithingTrimRecipeAccessor {
    }
    export interface $SmithingTrimRecipeAccessor {
        getAddition(): $Ingredient;
        getBase(): $Ingredient;
        getTemplate(): $Ingredient;
        get addition(): $Ingredient;
        get base(): $Ingredient;
        get template(): $Ingredient;
    }
    export class $BrewingRecipeRegistryAccessor {
    }
    export interface $BrewingRecipeRegistryAccessor {
        getPotionTypes(): $List<$Ingredient>;
        getPotionRecipes(): $List<$PotionBrewing$Mix<$Potion>>;
        getItemRecipes(): $List<$PotionBrewing$Mix<$Item>>;
        get potionTypes(): $List<$Ingredient>;
        get potionRecipes(): $List<$PotionBrewing$Mix<$Potion>>;
        get itemRecipes(): $List<$PotionBrewing$Mix<$Item>>;
    }
}
