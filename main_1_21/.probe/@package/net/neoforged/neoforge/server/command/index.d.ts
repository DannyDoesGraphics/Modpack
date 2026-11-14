import { $JsonObject_ } from "@package/com/google/gson";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $Command_, $StringReader, $CommandDispatcher } from "@package/com/mojang/brigadier";
import { $Map_, $Collection } from "@package/java/util";
import { $CommandNode } from "@package/com/mojang/brigadier/tree";
import { $RegisterClientCommandsEvent } from "@package/net/neoforged/neoforge/client/event";
import { $CommandSourceStack, $CommandBuildContext } from "@package/net/minecraft/commands";
import { $Function_ } from "@package/java/util/function";
import { $Registry } from "@package/net/minecraft/core";
import { $Suggestions, $SuggestionsBuilder, $SuggestionProvider } from "@package/com/mojang/brigadier/suggestion";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ArgumentTypeInfo, $ArgumentTypeInfo$Template } from "@package/net/minecraft/commands/synchronization";
import { $CommandContext } from "@package/com/mojang/brigadier/context";
import { $Enum, $Object, $Iterable, $Class } from "@package/java/lang";
import { $ArgumentType } from "@package/com/mojang/brigadier/arguments";
export * as generation from "@package/net/neoforged/neoforge/server/command/generation";

declare module "@package/net/neoforged/neoforge/server/command" {
    export class $EnumArgument$Info<T extends $Enum<T>> implements $ArgumentTypeInfo<$EnumArgument<T>, $EnumArgument$Info$Template> {
        serializeToNetwork(arg0: $EnumArgument$Info$Template, arg1: $FriendlyByteBuf): void;
        serializeToJson(arg0: $EnumArgument$Info$Template, arg1: $JsonObject_): void;
        unpack(arg0: $EnumArgument<$EnumArgument$Info$Template>): $EnumArgument$Info$Template;
        deserializeFromNetwork(buffer: $FriendlyByteBuf): $EnumArgument$Info$Template;
        constructor();
    }
    export class $TrackCommand$ResetTrackingCommand {
    }
    export class $DumpCommand {
    }
    export class $TrackCommand$TrackResultsEntity {
    }
    export class $TrackCommand$TrackResultsBlockEntity {
    }
    export class $ModListCommand {
    }
    export class $EnumArgument$Info$Template implements $ArgumentTypeInfo$Template<$EnumArgument<T>> {
        type(): $ArgumentTypeInfo<$EnumArgument<T>, never>;
        instantiate(p_223435_: $CommandBuildContext): $EnumArgument<T>;
    }
    export class $ConfigCommand$ShowFile {
        constructor();
    }
    /**
     * Utility class for various command-related operations.
     * 
     * **For modders and NeoForge to both use.**
     */
    export class $CommandUtils {
        static suggestRegistries(ctx: $CommandContext<$CommandSourceStack>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static suggestFromRegistry<T extends $Registry<never>>(namesFunction: $Function_<$Registry<never>, $Iterable<$ResourceLocation>>, argumentString: string, registryKey: $ResourceKey_<$Registry<T>>): $SuggestionProvider<$CommandSourceStack>;
        static makeTranslatableWithFallback(key: string): $MutableComponent;
        static makeTranslatableWithFallback(arg0: string, ...arg1: $Object[]): $MutableComponent;
        static getResourceKey<T>(ctx: $CommandContext<$CommandSourceStack>, name: string, registryKey: $ResourceKey_<$Registry<T>>): ($ResourceKey<T>) | undefined;
    }
    /**
     * Internal utility class for various command-related operations.
     * 
     * **For internal Forge use only.**
     */
    export class $CommandHelper {
        static mergeCommandNode<S, T>(arg0: $CommandNode<S>, arg1: $CommandNode<T>, arg2: $Map_<$CommandNode<S>, $CommandNode<T>>, arg3: S, arg4: $Command_<T>, arg5: $Function_<$SuggestionProvider<S>, $SuggestionProvider<T>>): void;
    }
    export class $NeoForgeCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $TimeSpeedCommand {
    }
    export class $EnumArgument<T extends $Enum<T>> implements $ArgumentType<T> {
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static enumArgument<R extends $Enum<R>>(enumClass: $Class<R>): $EnumArgument<R>;
        getExamples(): $Collection<string>;
        parse(arg0: $StringReader): T;
        parse<S>(arg0: $StringReader, arg1: S): T;
        get examples(): $Collection<string>;
    }
    export class $TagsCommand {
    }
    export class $ModIdArgument implements $ArgumentType<string> {
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        getExamples(): $Collection<string>;
        parse(reader: $StringReader): string;
        static modIdArgument(): $ModIdArgument;
        parse<S>(arg0: $StringReader, arg1: S): string;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $EntityCommand {
    }
    export class $DataComponentCommand {
    }
    export class $ConfigCommand {
        static onClientCommandsRegister(event: $RegisterClientCommandsEvent): void;
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $TrackCommand$StartTrackingCommand {
    }
    export class $DimensionsCommand {
    }
    export class $TPSCommand {
    }
    export class $EntityCommand$EntityListCommand {
    }
    export class $GenerateCommand {
    }
    export class $TrackCommand$TrackResults {
    }
    export class $TrackCommand {
    }
    export class $ConfigCommand$ServerModConfigType extends $Enum<$ConfigCommand$ServerModConfigType> {
        static values(): $ConfigCommand$ServerModConfigType[];
        static valueOf(arg0: string): $ConfigCommand$ServerModConfigType;
        extension(): string;
        static SERVER: $ConfigCommand$ServerModConfigType;
        static COMMON: $ConfigCommand$ServerModConfigType;
    }
    /**
     * Values that may be interpreted as {@link $ConfigCommand$ServerModConfigType}.
     */
    export type $ConfigCommand$ServerModConfigType_ = "common" | "server";
}
