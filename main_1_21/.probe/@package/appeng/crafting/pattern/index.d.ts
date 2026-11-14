import { $Level_ } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item$Properties, $Item, $ItemStack_, $ItemStack, $TooltipFlag } from "@package/net/minecraft/world/item";
import { $SmithingRecipe, $RecipeHolder_, $StonecutterRecipe, $CraftingInput, $CraftingRecipe } from "@package/net/minecraft/world/item/crafting";
import { $List, $Map, $List_ } from "@package/java/util";
import { $IMolecularAssemblerSupportedPattern$CraftingGridAccessor_, $IMolecularAssemblerSupportedPattern } from "@package/appeng/blockentity/crafting";
import { $GenericStack, $GenericStack_, $KeyCounter, $AEItemKey } from "@package/appeng/api/stacks";
import { $AEBaseItem } from "@package/appeng/items";
import { $NonNullList } from "@package/net/minecraft/core";
import { $EncodedPatternDecoder_, $PatternDetailsTooltip, $IPatternDetails$PatternInputSink_, $InvalidPatternTooltipStrategy_, $IPatternDetailsDecoder, $IPatternDetails, $IPatternDetails$IInput } from "@package/appeng/api/crafting";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Record, $Exception } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/appeng/crafting/pattern" {
    export class $AEStonecuttingPattern$Input implements $IPatternDetails$IInput {
    }
    export class $EncodedStonecuttingPattern extends $Record {
        recipeId(): $ResourceLocation;
        canSubstitute(): boolean;
        containsMissingContent(): boolean;
        input(): $ItemStack;
        output(): $ItemStack;
        static CODEC: $Codec<$EncodedStonecuttingPattern>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $EncodedStonecuttingPattern>;
        constructor(input: $ItemStack_, output: $ItemStack_, canSubstitute: boolean, recipeId: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $EncodedStonecuttingPattern}.
     */
    export type $EncodedStonecuttingPattern_ = { input?: $ItemStack_, output?: $ItemStack_, recipeId?: $ResourceLocation_, canSubstitute?: boolean,  } | [input?: $ItemStack_, output?: $ItemStack_, recipeId?: $ResourceLocation_, canSubstitute?: boolean, ];
    export class $AEProcessingPattern implements $IPatternDetails {
        pushInputsToExternalInventory(arg0: $KeyCounter[], arg1: $IPatternDetails$PatternInputSink_): void;
        static getInvalidPatternTooltip(arg0: $ItemStack_, arg1: $Level_, arg2: $Exception, arg3: $TooltipFlag): $PatternDetailsTooltip;
        getSparseInputs(): $List<$GenericStack>;
        getSparseOutputs(): $List<$GenericStack>;
        getInputs(): $IPatternDetails$IInput[];
        static encode(arg0: $ItemStack_, arg1: $List_<$GenericStack_>, arg2: $List_<$GenericStack_>): void;
        getDefinition(): $AEItemKey;
        getOutputs(): $List<$GenericStack>;
        getPrimaryOutput(): $GenericStack;
        supportsPushInputsToExternalInventory(): boolean;
        getTooltip(arg0: $Level_, arg1: $TooltipFlag): $PatternDetailsTooltip;
        static MAX_OUTPUT_SLOTS: number;
        static MAX_INPUT_SLOTS: number;
        constructor(arg0: $AEItemKey);
        get sparseInputs(): $List<$GenericStack>;
        get sparseOutputs(): $List<$GenericStack>;
        get inputs(): $IPatternDetails$IInput[];
        get definition(): $AEItemKey;
        get outputs(): $List<$GenericStack>;
        get primaryOutput(): $GenericStack;
    }
    export class $EncodedCraftingPattern extends $Record {
        recipeId(): $ResourceLocation;
        canSubstitute(): boolean;
        canSubstituteFluids(): boolean;
        containsMissingContent(): boolean;
        inputs(): $List<$ItemStack>;
        result(): $ItemStack;
        static CODEC: $Codec<$EncodedCraftingPattern>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $EncodedCraftingPattern>;
        constructor(inputs: $List_<$ItemStack_>, result: $ItemStack_, recipeId: $ResourceLocation_, canSubstitute: boolean, canSubstituteFluids: boolean);
    }
    /**
     * Values that may be interpreted as {@link $EncodedCraftingPattern}.
     */
    export type $EncodedCraftingPattern_ = { inputs?: $List_<$ItemStack_>, recipeId?: $ResourceLocation_, result?: $ItemStack_, canSubstitute?: boolean, canSubstituteFluids?: boolean,  } | [inputs?: $List_<$ItemStack_>, recipeId?: $ResourceLocation_, result?: $ItemStack_, canSubstitute?: boolean, canSubstituteFluids?: boolean, ];
    export class $EncodedProcessingPattern extends $Record {
        sparseInputs(): $List<$GenericStack>;
        sparseOutputs(): $List<$GenericStack>;
        containsMissingContent(): boolean;
        static CODEC: $Codec<$EncodedProcessingPattern>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $EncodedProcessingPattern>;
        constructor(sparseInputs: $List_<$GenericStack_>, sparseOutputs: $List_<$GenericStack_>);
    }
    /**
     * Values that may be interpreted as {@link $EncodedProcessingPattern}.
     */
    export type $EncodedProcessingPattern_ = { sparseOutputs?: $List_<$GenericStack_>, sparseInputs?: $List_<$GenericStack_>,  } | [sparseOutputs?: $List_<$GenericStack_>, sparseInputs?: $List_<$GenericStack_>, ];
    export class $AEProcessingPattern$Input implements $IPatternDetails$IInput {
    }
    export class $EncodedPatternItem<T extends $IPatternDetails> extends $AEBaseItem {
        getOutput(arg0: $ItemStack_): $ItemStack;
        decode(arg0: $AEItemKey, arg1: $Level_): $IPatternDetails;
        decode(arg0: $ItemStack_, arg1: $Level_): $IPatternDetails;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties, arg1: $EncodedPatternDecoder_<$Item>, arg2: $InvalidPatternTooltipStrategy_);
    }
    export class $AEPatternHelper {
    }
    export class $AECraftingPattern$Input implements $IPatternDetails$IInput {
    }
    export class $AEPatternDecoder implements $IPatternDetailsDecoder {
        isEncodedPattern(arg0: $ItemStack_): boolean;
        decodePattern(arg0: $AEItemKey, arg1: $Level_): $IPatternDetails;
        decodePattern(arg0: $ItemStack_, arg1: $Level_): $IPatternDetails;
        static INSTANCE: $AEPatternDecoder;
        constructor();
    }
    export class $EncodedSmithingTablePattern extends $Record {
        recipeId(): $ResourceLocation;
        canSubstitute(): boolean;
        containsMissingContent(): boolean;
        resultItem(): $ItemStack;
        base(): $ItemStack;
        template(): $ItemStack;
        addition(): $ItemStack;
        static CODEC: $Codec<$EncodedSmithingTablePattern>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $EncodedSmithingTablePattern>;
        constructor(template: $ItemStack_, base: $ItemStack_, addition: $ItemStack_, resultItem: $ItemStack_, canSubstitute: boolean, recipeId: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $EncodedSmithingTablePattern}.
     */
    export type $EncodedSmithingTablePattern_ = { canSubstitute?: boolean, template?: $ItemStack_, addition?: $ItemStack_, resultItem?: $ItemStack_, base?: $ItemStack_, recipeId?: $ResourceLocation_,  } | [canSubstitute?: boolean, template?: $ItemStack_, addition?: $ItemStack_, resultItem?: $ItemStack_, base?: $ItemStack_, recipeId?: $ResourceLocation_, ];
    export class $AEStonecuttingPattern implements $IPatternDetails, $IMolecularAssemblerSupportedPattern {
        assemble(arg0: $CraftingInput, arg1: $Level_): $ItemStack;
        static getInvalidTooltip(arg0: $ItemStack_, arg1: $Level_, arg2: $Exception, arg3: $TooltipFlag): $PatternDetailsTooltip;
        getRecipeId(): $ResourceLocation;
        canSubstitute(): boolean;
        fillCraftingGrid(arg0: $KeyCounter[], arg1: $IMolecularAssemblerSupportedPattern$CraftingGridAccessor_): void;
        isSlotEnabled(arg0: number): boolean;
        getInputs(): $IPatternDetails$IInput[];
        static encode(arg0: $ItemStack_, arg1: $RecipeHolder_<$StonecutterRecipe>, arg2: $AEItemKey, arg3: $AEItemKey, arg4: boolean): void;
        getDefinition(): $AEItemKey;
        getOutputs(): $List<$GenericStack>;
        getTooltip(arg0: $Level_, arg1: $TooltipFlag): $PatternDetailsTooltip;
        isItemValid(arg0: $AEItemKey, arg1: $Level_): boolean;
        isItemValid(arg0: number, arg1: $AEItemKey, arg2: $Level_): boolean;
        getInput(): $AEItemKey;
        pushInputsToExternalInventory(arg0: $KeyCounter[], arg1: $IPatternDetails$PatternInputSink_): void;
        getPrimaryOutput(): $GenericStack;
        supportsPushInputsToExternalInventory(): boolean;
        getRemainingItems(arg0: $CraftingInput): $NonNullList<$ItemStack>;
        constructor(arg0: $AEItemKey, arg1: $Level_);
        get recipeId(): $ResourceLocation;
        get inputs(): $IPatternDetails$IInput[];
        get definition(): $AEItemKey;
        get outputs(): $List<$GenericStack>;
        get input(): $AEItemKey;
        get primaryOutput(): $GenericStack;
    }
    export class $AESmithingTablePattern$Input implements $IPatternDetails$IInput {
    }
    export class $AECraftingPattern implements $IPatternDetails, $IMolecularAssemblerSupportedPattern {
        static getCraftingInputs(arg0: $List_<$ItemStack_>): $List<$GenericStack>;
        getValidFluid(arg0: number): $GenericStack;
        assemble(arg0: $CraftingInput, arg1: $Level_): $ItemStack;
        getRemainingItems(arg0: $CraftingInput): $NonNullList<$ItemStack>;
        static getInvalidPatternTooltip(arg0: $ItemStack_, arg1: $Level_, arg2: $Exception, arg3: $TooltipFlag): $PatternDetailsTooltip;
        canSubstitute(): boolean;
        canSubstituteFluids(): boolean;
        getSparseInputs(): $List<$GenericStack>;
        getSparseOutputs(): $List<$GenericStack>;
        fillCraftingGrid(arg0: $KeyCounter[], arg1: $IMolecularAssemblerSupportedPattern$CraftingGridAccessor_): void;
        isSlotEnabled(arg0: number): boolean;
        getInputs(): $IPatternDetails$IInput[];
        static encode(arg0: $ItemStack_, arg1: $RecipeHolder_<$CraftingRecipe>, arg2: $ItemStack_[], arg3: $ItemStack_, arg4: boolean, arg5: boolean): void;
        getDefinition(): $AEItemKey;
        getOutputs(): $List<$GenericStack>;
        getTooltip(arg0: $Level_, arg1: $TooltipFlag): $PatternDetailsTooltip;
        isItemValid(arg0: number, arg1: $AEItemKey, arg2: $Level_): boolean;
        pushInputsToExternalInventory(arg0: $KeyCounter[], arg1: $IPatternDetails$PatternInputSink_): void;
        getPrimaryOutput(): $GenericStack;
        supportsPushInputsToExternalInventory(): boolean;
        static CRAFTING_GRID_SLOTS: number;
        static CRAFTING_GRID_DIMENSION: number;
        constructor(arg0: $AEItemKey, arg1: $Level_);
        get sparseInputs(): $List<$GenericStack>;
        get sparseOutputs(): $List<$GenericStack>;
        get inputs(): $IPatternDetails$IInput[];
        get definition(): $AEItemKey;
        get outputs(): $List<$GenericStack>;
        get primaryOutput(): $GenericStack;
    }
    export class $AESmithingTablePattern implements $IPatternDetails, $IMolecularAssemblerSupportedPattern {
        assemble(arg0: $CraftingInput, arg1: $Level_): $ItemStack;
        getAddition(): $AEItemKey;
        static getInvalidTooltip(arg0: $ItemStack_, arg1: $Level_, arg2: $Exception, arg3: $TooltipFlag): $PatternDetailsTooltip;
        getRecipeId(): $ResourceLocation;
        canSubstitute(): boolean;
        fillCraftingGrid(arg0: $KeyCounter[], arg1: $IMolecularAssemblerSupportedPattern$CraftingGridAccessor_): void;
        isSlotEnabled(arg0: number): boolean;
        getInputs(): $IPatternDetails$IInput[];
        static encode(arg0: $ItemStack_, arg1: $RecipeHolder_<$SmithingRecipe>, arg2: $AEItemKey, arg3: $AEItemKey, arg4: $AEItemKey, arg5: $AEItemKey, arg6: boolean): void;
        getDefinition(): $AEItemKey;
        getBase(): $AEItemKey;
        getOutputs(): $List<$GenericStack>;
        getTooltip(arg0: $Level_, arg1: $TooltipFlag): $PatternDetailsTooltip;
        getTemplate(): $AEItemKey;
        isItemValid(arg0: number, arg1: $AEItemKey, arg2: $Level_): boolean;
        pushInputsToExternalInventory(arg0: $KeyCounter[], arg1: $IPatternDetails$PatternInputSink_): void;
        getPrimaryOutput(): $GenericStack;
        supportsPushInputsToExternalInventory(): boolean;
        getRemainingItems(arg0: $CraftingInput): $NonNullList<$ItemStack>;
        constructor(arg0: $AEItemKey, arg1: $Level_);
        get addition(): $AEItemKey;
        get recipeId(): $ResourceLocation;
        get inputs(): $IPatternDetails$IInput[];
        get definition(): $AEItemKey;
        get base(): $AEItemKey;
        get outputs(): $List<$GenericStack>;
        get template(): $AEItemKey;
        get primaryOutput(): $GenericStack;
    }
}
