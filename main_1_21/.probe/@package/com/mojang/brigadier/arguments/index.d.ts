import { $Suggestions, $SuggestionsBuilder } from "@package/com/mojang/brigadier/suggestion";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $StringReader } from "@package/com/mojang/brigadier";
import { $Enum } from "@package/java/lang";
import { $Collection } from "@package/java/util";
import { $CommandContext } from "@package/com/mojang/brigadier/context";

declare module "@package/com/mojang/brigadier/arguments" {
    export class $StringArgumentType implements $ArgumentType<string> {
        static greedyString(): $StringArgumentType;
        static escapeIfRequired(arg0: string): string;
        getExamples(): $Collection<string>;
        getType(): $StringArgumentType$StringType;
        static string(): $StringArgumentType;
        static getString(arg0: $CommandContext<never>, arg1: string): string;
        static word(): $StringArgumentType;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse<S>(arg0: $StringReader, arg1: S): string;
        parse(arg0: $StringReader): string;
        get examples(): $Collection<string>;
        get type(): $StringArgumentType$StringType;
    }
    export class $FloatArgumentType implements $ArgumentType<number> {
        static floatArg(arg0: number): $FloatArgumentType;
        static floatArg(): $FloatArgumentType;
        static floatArg(arg0: number, arg1: number): $FloatArgumentType;
        getExamples(): $Collection<string>;
        static getFloat(arg0: $CommandContext<never>, arg1: string): number;
        getMaximum(): number;
        getMinimum(): number;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse<S>(arg0: $StringReader, arg1: S): number;
        parse(arg0: $StringReader): number;
        get examples(): $Collection<string>;
        get maximum(): number;
        get minimum(): number;
    }
    export class $ArgumentType<T> {
    }
    export interface $ArgumentType<T> {
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        getExamples(): $Collection<string>;
        parse<S>(arg0: $StringReader, arg1: S): T;
        parse(arg0: $StringReader): T;
        get examples(): $Collection<string>;
    }
    /**
     * Values that may be interpreted as {@link $ArgumentType}.
     */
    export type $ArgumentType_<T> = ((arg0: $StringReader) => T);
    export class $StringArgumentType$StringType extends $Enum<$StringArgumentType$StringType> {
        getExamples(): $Collection<string>;
        static values(): $StringArgumentType$StringType[];
        static valueOf(arg0: string): $StringArgumentType$StringType;
        static QUOTABLE_PHRASE: $StringArgumentType$StringType;
        static GREEDY_PHRASE: $StringArgumentType$StringType;
        static SINGLE_WORD: $StringArgumentType$StringType;
        get examples(): $Collection<string>;
    }
    /**
     * Values that may be interpreted as {@link $StringArgumentType$StringType}.
     */
    export type $StringArgumentType$StringType_ = "single_word" | "quotable_phrase" | "greedy_phrase";
    export class $DoubleArgumentType implements $ArgumentType<number> {
        static doubleArg(arg0: number): $DoubleArgumentType;
        static doubleArg(): $DoubleArgumentType;
        static doubleArg(arg0: number, arg1: number): $DoubleArgumentType;
        getExamples(): $Collection<string>;
        static getDouble(arg0: $CommandContext<never>, arg1: string): number;
        getMaximum(): number;
        getMinimum(): number;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse<S>(arg0: $StringReader, arg1: S): number;
        parse(arg0: $StringReader): number;
        get examples(): $Collection<string>;
        get maximum(): number;
        get minimum(): number;
    }
    export class $LongArgumentType implements $ArgumentType<number> {
        static longArg(arg0: number): $LongArgumentType;
        static longArg(): $LongArgumentType;
        static longArg(arg0: number, arg1: number): $LongArgumentType;
        getExamples(): $Collection<string>;
        static getLong(arg0: $CommandContext<never>, arg1: string): number;
        getMaximum(): number;
        getMinimum(): number;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse<S>(arg0: $StringReader, arg1: S): number;
        parse(arg0: $StringReader): number;
        get examples(): $Collection<string>;
        get maximum(): number;
        get minimum(): number;
    }
    export class $IntegerArgumentType implements $ArgumentType<number> {
        getExamples(): $Collection<string>;
        static getInteger(arg0: $CommandContext<never>, arg1: string): number;
        static integer(arg0: number, arg1: number): $IntegerArgumentType;
        static integer(): $IntegerArgumentType;
        static integer(arg0: number): $IntegerArgumentType;
        getMaximum(): number;
        getMinimum(): number;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse<S>(arg0: $StringReader, arg1: S): number;
        parse(arg0: $StringReader): number;
        get examples(): $Collection<string>;
        get maximum(): number;
        get minimum(): number;
    }
}
