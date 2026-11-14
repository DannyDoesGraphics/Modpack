import { $Level_ } from "@package/net/minecraft/world/level";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $RecipeSerializer, $CraftingBookCategory_, $CraftingInput, $CustomRecipe } from "@package/net/minecraft/world/item/crafting";
import { $FacadeItem } from "@package/appeng/items/parts";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/appeng/recipes/game" {
    export class $StorageCellDisassemblyRecipe extends $CustomRecipe {
        getCellDisassemblyItems(): $List<$ItemStack>;
        getStorageCell(): $Item;
        assemble(arg0: $CraftingInput, arg1: $HolderLookup$Provider): $ItemStack;
        canDisassemble(): boolean;
        static getDisassemblyResult(arg0: $Level_, arg1: $Item_): $List<$ItemStack>;
        matches(arg0: $CraftingInput, arg1: $Level_): boolean;
        static CODEC: $MapCodec<$StorageCellDisassemblyRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $StorageCellDisassemblyRecipe>;
        constructor(arg0: $Item_, arg1: $List_<$ItemStack_>);
        get cellDisassemblyItems(): $List<$ItemStack>;
        get storageCell(): $Item;
    }
    export class $CraftingUnitTransformRecipeSerializer implements $RecipeSerializer<$CraftingUnitTransformRecipe> {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $CraftingUnitTransformRecipe>;
        codec(): $MapCodec<$CraftingUnitTransformRecipe>;
        static INSTANCE: $CraftingUnitTransformRecipeSerializer;
    }
    export class $StorageCellDisassemblyRecipeSerializer implements $RecipeSerializer<$StorageCellDisassemblyRecipe> {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $StorageCellDisassemblyRecipe>;
        codec(): $MapCodec<$StorageCellDisassemblyRecipe>;
        static INSTANCE: $StorageCellDisassemblyRecipeSerializer;
    }
    export class $AddItemUpgradeRecipe extends $CustomRecipe {
        assemble(arg0: $CraftingInput, arg1: $HolderLookup$Provider): $ItemStack;
        matches(arg0: $CraftingInput, arg1: $Level_): boolean;
        static CODEC: $MapCodec<$AddItemUpgradeRecipe>;
        static INSTANCE: $AddItemUpgradeRecipe;
        static SERIALIZER_ID: $ResourceLocation;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AddItemUpgradeRecipe>;
    }
    export class $RemoveItemUpgradeRecipeSerializer implements $RecipeSerializer<$RemoveItemUpgradeRecipe> {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $RemoveItemUpgradeRecipe>;
        codec(): $MapCodec<$RemoveItemUpgradeRecipe>;
        static INSTANCE: $RemoveItemUpgradeRecipeSerializer;
        constructor();
    }
    export class $StorageCellUpgradeRecipe extends $CustomRecipe {
        getInputCell(): $Item;
        getInputComponent(): $Item;
        getResultCell(): $Item;
        getResultComponent(): $Item;
        assemble(arg0: $CraftingInput, arg1: $HolderLookup$Provider): $ItemStack;
        getRemainingItems(arg0: $CraftingInput): $NonNullList<$ItemStack>;
        matches(arg0: $CraftingInput, arg1: $Level_): boolean;
        static CODEC: $MapCodec<$StorageCellUpgradeRecipe>;
        static SERIALIZER_ID: $ResourceLocation;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $StorageCellUpgradeRecipe>;
        constructor(arg0: $Item_, arg1: $Item_, arg2: $Item_, arg3: $Item_);
        get inputCell(): $Item;
        get inputComponent(): $Item;
        get resultCell(): $Item;
        get resultComponent(): $Item;
    }
    export class $AddItemUpgradeRecipeSerializer implements $RecipeSerializer<$AddItemUpgradeRecipe> {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $AddItemUpgradeRecipe>;
        codec(): $MapCodec<$AddItemUpgradeRecipe>;
        static INSTANCE: $AddItemUpgradeRecipeSerializer;
        constructor();
    }
    export class $FacadeRecipe extends $CustomRecipe {
        assemble(arg0: $CraftingInput, arg1: $HolderLookup$Provider): $ItemStack;
        matches(arg0: $CraftingInput, arg1: $Level_): boolean;
        static SERIALIZER: $RecipeSerializer<$FacadeRecipe>;
        constructor(arg0: $CraftingBookCategory_, arg1: $FacadeItem);
    }
    export class $RemoveItemUpgradeRecipe$RemovalResult extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $RemoveItemUpgradeRecipe$RemovalResult}.
     */
    export type $RemoveItemUpgradeRecipe$RemovalResult_ = { upgrade?: $ItemStack_, upgradableItem?: $ItemStack_,  } | [upgrade?: $ItemStack_, upgradableItem?: $ItemStack_, ];
    export class $CraftingUnitTransformRecipe extends $CustomRecipe {
        getUpgradeItem(): $Item;
        assemble(arg0: $CraftingInput, arg1: $HolderLookup$Provider): $ItemStack;
        static getUpgradedBlock(arg0: $Level_, arg1: $ItemStack_): $Block;
        getUpgradedBlock(): $Block;
        static getRemovedUpgrade(arg0: $Level_, arg1: $Block_): $ItemStack;
        matches(arg0: $CraftingInput, arg1: $Level_): boolean;
        static CODEC: $MapCodec<$CraftingUnitTransformRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $CraftingUnitTransformRecipe>;
        constructor(arg0: $Block_, arg1: $Item_);
        get upgradeItem(): $Item;
    }
    export class $StorageCellUpgradeRecipeSerializer implements $RecipeSerializer<$StorageCellUpgradeRecipe> {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $StorageCellUpgradeRecipe>;
        codec(): $MapCodec<$StorageCellUpgradeRecipe>;
        static INSTANCE: $StorageCellUpgradeRecipeSerializer;
        constructor();
    }
    export class $RemoveItemUpgradeRecipe extends $CustomRecipe {
        assemble(arg0: $CraftingInput, arg1: $HolderLookup$Provider): $ItemStack;
        getRemainingItems(arg0: $CraftingInput): $NonNullList<$ItemStack>;
        matches(arg0: $CraftingInput, arg1: $Level_): boolean;
        static CODEC: $MapCodec<$RemoveItemUpgradeRecipe>;
        static INSTANCE: $RemoveItemUpgradeRecipe;
        static SERIALIZER_ID: $ResourceLocation;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $RemoveItemUpgradeRecipe>;
    }
}
