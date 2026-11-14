import { $InternalInventory } from "@package/appeng/api/inventories";
import { $AbstractTerminalPart } from "@package/appeng/parts/reporting";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $InternalInventoryHost, $AppEngInternalInventory } from "@package/appeng/util/inv";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ConfigInventory } from "@package/appeng/util";
import { $Enum } from "@package/java/lang";
import { $IPartItem, $IPartModel } from "@package/appeng/api/parts";
import { $IPatternTerminalMenuHost, $IPatternTerminalLogicHost } from "@package/appeng/helpers";

declare module "@package/appeng/parts/encoding" {
    export class $EncodingMode extends $Enum<$EncodingMode> {
        static values(): $EncodingMode[];
        static valueOf(arg0: string): $EncodingMode;
        static PROCESSING: $EncodingMode;
        static STONECUTTING: $EncodingMode;
        static CRAFTING: $EncodingMode;
        static SMITHING_TABLE: $EncodingMode;
    }
    /**
     * Values that may be interpreted as {@link $EncodingMode}.
     */
    export type $EncodingMode_ = "crafting" | "processing" | "smithing_table" | "stonecutting";
    export class $PatternEncodingLogic implements $InternalInventoryHost {
        getBlankPatternInv(): $InternalInventory;
        getEncodedPatternInv(): $InternalInventory;
        setSubstitution(arg0: boolean): void;
        setFluidSubstitution(arg0: boolean): void;
        getEncodedInputInv(): $ConfigInventory;
        isSubstitution(): boolean;
        isFluidSubstitution(): boolean;
        getStonecuttingRecipeId(): $ResourceLocation;
        setStonecuttingRecipeId(arg0: $ResourceLocation_): void;
        getEncodedOutputInv(): $ConfigInventory;
        saveChanges(): void;
        saveChangedInventory(arg0: $AppEngInternalInventory): void;
        onChangeInventory(arg0: $AppEngInternalInventory, arg1: number): void;
        writeToNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        readFromNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        setMode(arg0: $EncodingMode_): void;
        getMode(): $EncodingMode;
        isClientSide(): boolean;
        constructor(arg0: $IPatternTerminalLogicHost);
        get blankPatternInv(): $InternalInventory;
        get encodedPatternInv(): $InternalInventory;
        get encodedInputInv(): $ConfigInventory;
        get encodedOutputInv(): $ConfigInventory;
        get clientSide(): boolean;
    }
    export class $PatternEncodingTerminalPart extends $AbstractTerminalPart implements $IPatternTerminalLogicHost, $IPatternTerminalMenuHost {
        markForSave(): void;
        getLogic(): $PatternEncodingLogic;
        static MODELS_HAS_CHANNEL: $IPartModel;
        static MODEL_ON: $ResourceLocation;
        static MODEL_OFF: $ResourceLocation;
        static MODELS_ON: $IPartModel;
        static MODELS_OFF: $IPartModel;
        constructor(arg0: $IPartItem<never>);
        get logic(): $PatternEncodingLogic;
    }
}
