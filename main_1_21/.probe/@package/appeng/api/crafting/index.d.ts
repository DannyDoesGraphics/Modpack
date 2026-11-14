import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $Item$Properties, $Item, $ItemStack_, $ItemStack, $TooltipFlag } from "@package/net/minecraft/world/item";
import { $SmithingRecipe, $RecipeHolder_, $StonecutterRecipe, $CraftingRecipe } from "@package/net/minecraft/world/item/crafting";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Record, $Exception } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $Function } from "@package/com/google/common/base";
import { $GenericStack, $GenericStack_, $KeyCounter, $AEItemKey, $AEKey } from "@package/appeng/api/stacks";

declare module "@package/appeng/api/crafting" {
    export class $PatternDetailsTooltip$Property extends $Record {
        name(): $Component;
        value(): $Component;
        constructor(name: $Component_, value: $Component_);
    }
    /**
     * Values that may be interpreted as {@link $PatternDetailsTooltip$Property}.
     */
    export type $PatternDetailsTooltip$Property_ = { name?: $Component_, value?: $Component_,  } | [name?: $Component_, value?: $Component_, ];
    export class $PatternDetailsHelper {
        static isEncodedPattern(arg0: $ItemStack_): boolean;
        static registerDecoder(arg0: $IPatternDetailsDecoder): void;
        static encodeProcessingPattern(arg0: $List_<$GenericStack_>, arg1: $List_<$GenericStack_>): $ItemStack;
        static encodeCraftingPattern(arg0: $RecipeHolder_<$CraftingRecipe>, arg1: $ItemStack_[], arg2: $ItemStack_, arg3: boolean, arg4: boolean): $ItemStack;
        static encodeStonecuttingPattern(arg0: $RecipeHolder_<$StonecutterRecipe>, arg1: $AEItemKey, arg2: $AEItemKey, arg3: boolean): $ItemStack;
        static encodeSmithingTablePattern(arg0: $RecipeHolder_<$SmithingRecipe>, arg1: $AEItemKey, arg2: $AEItemKey, arg3: $AEItemKey, arg4: $AEItemKey, arg5: boolean): $ItemStack;
        static encodedPatternItemBuilder<T extends $IPatternDetails>(arg0: $EncodedPatternDecoder_<T>): $EncodedPatternItemBuilder<T>;
        static encodedPatternItemBuilder<T extends $IPatternDetails>(arg0: $Function<$AEItemKey, T>): $EncodedPatternItemBuilder<T>;
        static decodePattern(arg0: $ItemStack_, arg1: $Level_): $IPatternDetails;
        static decodePattern(arg0: $AEItemKey, arg1: $Level_): $IPatternDetails;
        constructor();
    }
    export class $IPatternDetails {
    }
    export interface $IPatternDetails {
        pushInputsToExternalInventory(arg0: $KeyCounter[], arg1: $IPatternDetails$PatternInputSink_): void;
        getPrimaryOutput(): $GenericStack;
        supportsPushInputsToExternalInventory(): boolean;
        getInputs(): $IPatternDetails$IInput[];
        getDefinition(): $AEItemKey;
        getOutputs(): $List<$GenericStack>;
        getTooltip(arg0: $Level_, arg1: $TooltipFlag): $PatternDetailsTooltip;
        get primaryOutput(): $GenericStack;
        get inputs(): $IPatternDetails$IInput[];
        get definition(): $AEItemKey;
        get outputs(): $List<$GenericStack>;
    }
    export class $EncodedPatternDecoder<T extends $IPatternDetails> {
    }
    export interface $EncodedPatternDecoder<T extends $IPatternDetails> {
        decode(arg0: $AEItemKey, arg1: $Level_): T;
    }
    /**
     * Values that may be interpreted as {@link $EncodedPatternDecoder}.
     */
    export type $EncodedPatternDecoder_<T> = ((arg0: $AEItemKey, arg1: $Level) => T);
    export class $PatternDetailsTooltip {
        getOutputMethod(): $Component;
        setOutputMethod(arg0: $Component_): void;
        addInput(arg0: $GenericStack_): void;
        addInput(arg0: $AEKey, arg1: number): void;
        addInputsAndOutputs(arg0: $IPatternDetails): void;
        addOutput(arg0: $GenericStack_): void;
        addOutput(arg0: $AEKey, arg1: number): void;
        getInputs(): $List<$GenericStack>;
        getProperties(): $List<$PatternDetailsTooltip$Property>;
        getOutputs(): $List<$GenericStack>;
        addProperty(arg0: $Component_, arg1: $Component_): void;
        addProperty(arg0: $Component_): void;
        static OUTPUT_TEXT_PRODUCES: $Component;
        static OUTPUT_TEXT_CRAFTS: $Component;
        constructor(arg0: $Component_);
        get inputs(): $List<$GenericStack>;
        get properties(): $List<$PatternDetailsTooltip$Property>;
        get outputs(): $List<$GenericStack>;
    }
    export class $IPatternDetails$PatternInputSink {
    }
    export interface $IPatternDetails$PatternInputSink {
        pushInput(arg0: $AEKey, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $IPatternDetails$PatternInputSink}.
     */
    export type $IPatternDetails$PatternInputSink_ = ((arg0: $AEKey, arg1: number) => void);
    export class $EncodedPatternItemBuilder<T extends $IPatternDetails> {
        invalidPatternTooltip(arg0: $InvalidPatternTooltipStrategy_): $EncodedPatternItemBuilder<T>;
        itemProperties(arg0: $Item$Properties): $EncodedPatternItemBuilder<T>;
        build(): $Item;
    }
    export class $IPatternDetailsDecoder {
    }
    export interface $IPatternDetailsDecoder {
        isEncodedPattern(arg0: $ItemStack_): boolean;
        decodePattern(arg0: $AEItemKey, arg1: $Level_): $IPatternDetails;
        decodePattern(arg0: $ItemStack_, arg1: $Level_): $IPatternDetails;
    }
    export class $IPatternDetails$IInput {
    }
    export interface $IPatternDetails$IInput {
        getRemainingKey(arg0: $AEKey): $AEKey;
        getPossibleInputs(): $GenericStack[];
        getMultiplier(): number;
        isValid(arg0: $AEKey, arg1: $Level_): boolean;
        get possibleInputs(): $GenericStack[];
        get multiplier(): number;
    }
    export class $InvalidPatternTooltipStrategy {
    }
    export interface $InvalidPatternTooltipStrategy {
        getTooltip(arg0: $ItemStack_, arg1: $Level_, arg2: $Exception, arg3: $TooltipFlag): $PatternDetailsTooltip;
    }
    /**
     * Values that may be interpreted as {@link $InvalidPatternTooltipStrategy}.
     */
    export type $InvalidPatternTooltipStrategy_ = ((arg0: $ItemStack, arg1: $Level, arg2: $Exception, arg3: $TooltipFlag) => $PatternDetailsTooltip);
}
