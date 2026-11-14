import { $IFluidHandler$FluidAction_, $IFluidHandler$FluidAction } from "@package/net/neoforged/neoforge/fluids/capability";
import { $IConfigManager } from "@package/appeng/api/util";
import { $Codec } from "@package/com/mojang/serialization";
import { $Component } from "@package/net/minecraft/network/chat";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Enum, $Class } from "@package/java/lang";
import { $EnumSet, $Set } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/appeng/api/config" {
    export class $YesNo extends $Enum<$YesNo> {
        static values(): $YesNo[];
        static valueOf(arg0: string): $YesNo;
        static NO: $YesNo;
        static YES: $YesNo;
        static UNDECIDED: $YesNo;
    }
    /**
     * Values that may be interpreted as {@link $YesNo}.
     */
    export type $YesNo_ = "yes" | "no" | "undecided";
    export class $Settings {
        static getOrThrow(arg0: string): $Setting<never>;
        static LOCK_CRAFTING_MODE: $Setting<$LockCraftingMode>;
        static OPERATION_MODE: $Setting<$OperationMode>;
        static SORT_BY: $Setting<$SortOrder>;
        static STORAGE_FILTER: $Setting<$StorageFilter>;
        static INSCRIBER_INPUT_CAPACITY: $Setting<$InscriberInputCapacity>;
        static CPU_SELECTION_MODE: $Setting<$CpuSelectionMode>;
        static PLACE_BLOCK: $Setting<$YesNo>;
        static BLOCKING_MODE: $Setting<$YesNo>;
        static SEARCH_TOOLTIPS: $Setting<$YesNo>;
        static AUTO_EXPORT: $Setting<$YesNo>;
        static ACCESS: $Setting<$AccessRestriction>;
        static TERMINAL_STYLE: $Setting<$TerminalStyle>;
        static TERMINAL_SHOW_PATTERN_PROVIDERS: $Setting<$ShowPatternProviders>;
        static CONDENSER_OUTPUT: $Setting<$CondenserOutput>;
        static CRAFT_VIA_REDSTONE: $Setting<$YesNo>;
        static INSCRIBER_SEPARATE_SIDES: $Setting<$YesNo>;
        static REDSTONE_EMITTER: $Setting<$RedstoneMode>;
        static PATTERN_ACCESS_TERMINAL: $Setting<$YesNo>;
        static VIEW_MODE: $Setting<$ViewItems>;
        static REDSTONE_CONTROLLED: $Setting<$RedstoneMode>;
        static LEVEL_EMITTER_MODE: $Setting<$LevelEmitterMode>;
        static SCHEDULING_MODE: $Setting<$SchedulingMode>;
        static FULLNESS_MODE: $Setting<$FullnessMode>;
        static CRAFT_ONLY: $Setting<$YesNo>;
        /**
         * @deprecated
         */
        static INSCRIBER_BUFFER_SIZE: $Setting<$YesNo>;
        static IO_DIRECTION: $Setting<$RelativeDirection>;
        static FILTER_ON_EXTRACT: $Setting<$YesNo>;
        static POWER_UNITS: $Setting<$PowerUnit>;
        static COPY_MODE: $Setting<$CopyMode>;
        static OVERLAY_MODE: $Setting<$YesNo>;
        static SORT_DIRECTION: $Setting<$SortDir>;
        static FUZZY_MODE: $Setting<$FuzzyMode>;
    }
    export class $RedstoneMode extends $Enum<$RedstoneMode> {
        static values(): $RedstoneMode[];
        static valueOf(arg0: string): $RedstoneMode;
        static LOW_SIGNAL: $RedstoneMode;
        static SIGNAL_PULSE: $RedstoneMode;
        static IGNORE: $RedstoneMode;
        static HIGH_SIGNAL: $RedstoneMode;
    }
    /**
     * Values that may be interpreted as {@link $RedstoneMode}.
     */
    export type $RedstoneMode_ = "ignore" | "low_signal" | "high_signal" | "signal_pulse";
    export class $FullnessMode extends $Enum<$FullnessMode> {
        static values(): $FullnessMode[];
        static valueOf(arg0: string): $FullnessMode;
        static HALF: $FullnessMode;
        static EMPTY: $FullnessMode;
        static FULL: $FullnessMode;
    }
    /**
     * Values that may be interpreted as {@link $FullnessMode}.
     */
    export type $FullnessMode_ = "empty" | "half" | "full";
    export class $Setting<T extends $Enum<T>> {
        getValues(): $Set<T>;
        getEnumClass(): $Class<T>;
        setFromString(arg0: $IConfigManager, arg1: string): void;
        getName(): string;
        getValue(arg0: $IConfigManager): T;
        copy(arg0: $IConfigManager, arg1: $IConfigManager): void;
        constructor(arg0: string, arg1: $Class<T>, arg2: $EnumSet<T>);
        constructor(arg0: string, arg1: $Class<T>);
        get values(): $Set<T>;
        get enumClass(): $Class<T>;
        get name(): string;
    }
    export class $ActionItems extends $Enum<$ActionItems> {
        static values(): $ActionItems[];
        static valueOf(arg0: string): $ActionItems;
        static S_STASH: $ActionItems;
        static S_CYCLE_PROCESSING_OUTPUT: $ActionItems;
        static TERMINAL_SETTINGS: $ActionItems;
        static S_CLOSE: $ActionItems;
        static COG: $ActionItems;
        static CYCLE_PROCESSING_OUTPUT: $ActionItems;
        static CLOSE: $ActionItems;
        static S_STASH_TO_PLAYER_INV: $ActionItems;
        static STASH: $ActionItems;
        static STASH_TO_PLAYER_INV: $ActionItems;
        static ENCODE: $ActionItems;
    }
    /**
     * Values that may be interpreted as {@link $ActionItems}.
     */
    export type $ActionItems_ = "cog" | "close" | "s_close" | "stash" | "s_stash" | "stash_to_player_inv" | "s_stash_to_player_inv" | "encode" | "cycle_processing_output" | "s_cycle_processing_output" | "terminal_settings";
    export class $NetworkEmitterMode extends $Enum<$NetworkEmitterMode> {
        static values(): $NetworkEmitterMode[];
        static valueOf(arg0: string): $NetworkEmitterMode;
        static POWER_LEVEL: $NetworkEmitterMode;
        static BOOTING: $NetworkEmitterMode;
        static CHANNEL_ERROR: $NetworkEmitterMode;
    }
    /**
     * Values that may be interpreted as {@link $NetworkEmitterMode}.
     */
    export type $NetworkEmitterMode_ = "power_level" | "booting" | "channel_error";
    export class $OperationMode extends $Enum<$OperationMode> {
        static values(): $OperationMode[];
        static valueOf(arg0: string): $OperationMode;
        static FILL: $OperationMode;
        static EMPTY: $OperationMode;
    }
    /**
     * Values that may be interpreted as {@link $OperationMode}.
     */
    export type $OperationMode_ = "fill" | "empty";
    export class $LockCraftingMode extends $Enum<$LockCraftingMode> {
        static values(): $LockCraftingMode[];
        static valueOf(arg0: string): $LockCraftingMode;
        static LOCK_UNTIL_PULSE: $LockCraftingMode;
        static LOCK_UNTIL_RESULT: $LockCraftingMode;
        static NONE: $LockCraftingMode;
        static LOCK_WHILE_HIGH: $LockCraftingMode;
        static LOCK_WHILE_LOW: $LockCraftingMode;
    }
    /**
     * Values that may be interpreted as {@link $LockCraftingMode}.
     */
    export type $LockCraftingMode_ = "none" | "lock_until_pulse" | "lock_while_high" | "lock_while_low" | "lock_until_result";
    export class $IncludeExclude extends $Enum<$IncludeExclude> {
        static values(): $IncludeExclude[];
        static valueOf(arg0: string): $IncludeExclude;
        static BLACKLIST: $IncludeExclude;
        static WHITELIST: $IncludeExclude;
    }
    /**
     * Values that may be interpreted as {@link $IncludeExclude}.
     */
    export type $IncludeExclude_ = "whitelist" | "blacklist";
    export class $FuzzyMode extends $Enum<$FuzzyMode> implements $StringRepresentable {
        calculateBreakPoint(arg0: number): number;
        static values(): $FuzzyMode[];
        static valueOf(arg0: string): $FuzzyMode;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static PERCENT_75: $FuzzyMode;
        static PERCENT_99: $FuzzyMode;
        static CODEC: $Codec<$FuzzyMode>;
        static PERCENT_25: $FuzzyMode;
        percentage: number;
        breakPoint: number;
        static IGNORE_ALL: $FuzzyMode;
        static PERCENT_50: $FuzzyMode;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $FuzzyMode>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $FuzzyMode}.
     */
    export type $FuzzyMode_ = "ignore_all" | "percent_99" | "percent_75" | "percent_50" | "percent_25";
    export class $SortOrder extends $Enum<$SortOrder> {
        static values(): $SortOrder[];
        static valueOf(arg0: string): $SortOrder;
        static MOD: $SortOrder;
        static AMOUNT: $SortOrder;
        static NAME: $SortOrder;
    }
    /**
     * Values that may be interpreted as {@link $SortOrder}.
     */
    export type $SortOrder_ = "name" | "amount" | "mod";
    export class $ShowPatternProviders extends $Enum<$ShowPatternProviders> {
        static values(): $ShowPatternProviders[];
        static valueOf(arg0: string): $ShowPatternProviders;
        static NOT_FULL: $ShowPatternProviders;
        static ALL: $ShowPatternProviders;
        static VISIBLE: $ShowPatternProviders;
    }
    /**
     * Values that may be interpreted as {@link $ShowPatternProviders}.
     */
    export type $ShowPatternProviders_ = "visible" | "not_full" | "all";
    export class $Actionable extends $Enum<$Actionable> {
        static ofSimulate(arg0: boolean): $Actionable;
        getFluidAction(): $IFluidHandler$FluidAction;
        isSimulate(): boolean;
        static values(): $Actionable[];
        static valueOf(arg0: string): $Actionable;
        static of(arg0: $IFluidHandler$FluidAction_): $Actionable;
        static MODULATE: $Actionable;
        static SIMULATE: $Actionable;
        get fluidAction(): $IFluidHandler$FluidAction;
        get simulate(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Actionable}.
     */
    export type $Actionable_ = "modulate" | "simulate";
    export class $SchedulingMode extends $Enum<$SchedulingMode> {
        static values(): $SchedulingMode[];
        static valueOf(arg0: string): $SchedulingMode;
        static RANDOM: $SchedulingMode;
        static ROUNDROBIN: $SchedulingMode;
        static DEFAULT: $SchedulingMode;
    }
    /**
     * Values that may be interpreted as {@link $SchedulingMode}.
     */
    export type $SchedulingMode_ = "default" | "roundrobin" | "random";
    export class $AccessRestriction extends $Enum<$AccessRestriction> {
        isAllowInsertion(): boolean;
        isAllowExtraction(): boolean;
        static values(): $AccessRestriction[];
        static valueOf(arg0: string): $AccessRestriction;
        static READ: $AccessRestriction;
        static NO_ACCESS: $AccessRestriction;
        static WRITE: $AccessRestriction;
        static READ_WRITE: $AccessRestriction;
        get allowInsertion(): boolean;
        get allowExtraction(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $AccessRestriction}.
     */
    export type $AccessRestriction_ = "no_access" | "read" | "write" | "read_write";
    export class $CopyMode extends $Enum<$CopyMode> {
        static values(): $CopyMode[];
        static valueOf(arg0: string): $CopyMode;
        static KEEP_ON_REMOVE: $CopyMode;
        static CLEAR_ON_REMOVE: $CopyMode;
    }
    /**
     * Values that may be interpreted as {@link $CopyMode}.
     */
    export type $CopyMode_ = "clear_on_remove" | "keep_on_remove";
    export class $PowerUnit extends $Enum<$PowerUnit> {
        textComponent(): $Component;
        getSymbolName(): string;
        static values(): $PowerUnit[];
        static valueOf(arg0: string): $PowerUnit;
        convertTo(arg0: $PowerUnit_, arg1: number): number;
        conversionRatio: number;
        static AE: $PowerUnit;
        unlocalizedName: string;
        symbolName: string;
        static FE: $PowerUnit;
    }
    /**
     * Values that may be interpreted as {@link $PowerUnit}.
     */
    export type $PowerUnit_ = "ae" | "fe";
    export class $LevelEmitterMode extends $Enum<$LevelEmitterMode> {
        static values(): $LevelEmitterMode[];
        static valueOf(arg0: string): $LevelEmitterMode;
        static STORABLE_AMOUNT: $LevelEmitterMode;
        static STORED_AMOUNT: $LevelEmitterMode;
    }
    /**
     * Values that may be interpreted as {@link $LevelEmitterMode}.
     */
    export type $LevelEmitterMode_ = "stored_amount" | "storable_amount";
    export class $OutputMode extends $Enum<$OutputMode> {
        static values(): $OutputMode[];
        static valueOf(arg0: string): $OutputMode;
        static CRAFT_ONLY: $OutputMode;
        static EXPORT_OR_CRAFT: $OutputMode;
        static EXPORT_ONLY: $OutputMode;
    }
    /**
     * Values that may be interpreted as {@link $OutputMode}.
     */
    export type $OutputMode_ = "export_only" | "export_or_craft" | "craft_only";
    export class $CpuSelectionMode extends $Enum<$CpuSelectionMode> {
        static values(): $CpuSelectionMode[];
        static valueOf(arg0: string): $CpuSelectionMode;
        static PLAYER_ONLY: $CpuSelectionMode;
        static MACHINE_ONLY: $CpuSelectionMode;
        static ANY: $CpuSelectionMode;
    }
    /**
     * Values that may be interpreted as {@link $CpuSelectionMode}.
     */
    export type $CpuSelectionMode_ = "any" | "player_only" | "machine_only";
    export class $TerminalStyle extends $Enum<$TerminalStyle> {
        static values(): $TerminalStyle[];
        static valueOf(arg0: string): $TerminalStyle;
        getRows(arg0: number): number;
        static SMALL: $TerminalStyle;
        static MEDIUM: $TerminalStyle;
        static TALL: $TerminalStyle;
        static FULL: $TerminalStyle;
    }
    /**
     * Values that may be interpreted as {@link $TerminalStyle}.
     */
    export type $TerminalStyle_ = "small" | "medium" | "tall" | "full";
    export class $InscriberInputCapacity extends $Enum<$InscriberInputCapacity> {
        static values(): $InscriberInputCapacity[];
        static valueOf(arg0: string): $InscriberInputCapacity;
        static ONE: $InscriberInputCapacity;
        static FOUR: $InscriberInputCapacity;
        static SIXTY_FOUR: $InscriberInputCapacity;
        capacity: number;
    }
    /**
     * Values that may be interpreted as {@link $InscriberInputCapacity}.
     */
    export type $InscriberInputCapacity_ = "one" | "four" | "sixty_four";
    export class $PowerMultiplier extends $Enum<$PowerMultiplier> {
        static values(): $PowerMultiplier[];
        static valueOf(arg0: string): $PowerMultiplier;
        multiply(arg0: number): number;
        divide(arg0: number): number;
        static CONFIG: $PowerMultiplier;
        multiplier: number;
        static ONE: $PowerMultiplier;
    }
    /**
     * Values that may be interpreted as {@link $PowerMultiplier}.
     */
    export type $PowerMultiplier_ = "one" | "config";
    export class $CondenserOutput extends $Enum<$CondenserOutput> {
        static values(): $CondenserOutput[];
        static valueOf(arg0: string): $CondenserOutput;
        static SINGULARITY: $CondenserOutput;
        requiredPower: number;
        static MATTER_BALLS: $CondenserOutput;
        static TRASH: $CondenserOutput;
    }
    /**
     * Values that may be interpreted as {@link $CondenserOutput}.
     */
    export type $CondenserOutput_ = "trash" | "matter_balls" | "singularity";
    export class $StorageFilter extends $Enum<$StorageFilter> {
        static values(): $StorageFilter[];
        static valueOf(arg0: string): $StorageFilter;
        static EXTRACTABLE_ONLY: $StorageFilter;
        static NONE: $StorageFilter;
    }
    /**
     * Values that may be interpreted as {@link $StorageFilter}.
     */
    export type $StorageFilter_ = "none" | "extractable_only";
    export class $SortDir extends $Enum<$SortDir> {
        static values(): $SortDir[];
        static valueOf(arg0: string): $SortDir;
        static ASCENDING: $SortDir;
        static DESCENDING: $SortDir;
    }
    /**
     * Values that may be interpreted as {@link $SortDir}.
     */
    export type $SortDir_ = "ascending" | "descending";
    export class $RelativeDirection extends $Enum<$RelativeDirection> {
        static values(): $RelativeDirection[];
        static valueOf(arg0: string): $RelativeDirection;
        static LEFT: $RelativeDirection;
        static RIGHT: $RelativeDirection;
        static UP: $RelativeDirection;
        static DOW: $RelativeDirection;
    }
    /**
     * Values that may be interpreted as {@link $RelativeDirection}.
     */
    export type $RelativeDirection_ = "left" | "right" | "up" | "dow";
    export class $ViewItems extends $Enum<$ViewItems> {
        static values(): $ViewItems[];
        static valueOf(arg0: string): $ViewItems;
        static ALL: $ViewItems;
        static STORED: $ViewItems;
        static CRAFTABLE: $ViewItems;
    }
    /**
     * Values that may be interpreted as {@link $ViewItems}.
     */
    export type $ViewItems_ = "all" | "stored" | "craftable";
    export class $ModSettings extends $Enum<$ModSettings> {
        static values(): $ModSettings[];
        static valueOf(arg0: string): $ModSettings;
    }
}
