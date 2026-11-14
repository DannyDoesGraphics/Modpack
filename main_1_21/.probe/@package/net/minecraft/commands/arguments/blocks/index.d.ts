import { $Either } from "@package/com/mojang/datafixers/util";
import { $BlockInWorld } from "@package/net/minecraft/world/level/block/state/pattern";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $StringReader } from "@package/com/mojang/brigadier";
import { $Map_, $Map, $Set, $Set_, $Collection } from "@package/java/util";
import { $CommandSourceStack, $CommandBuildContext } from "@package/net/minecraft/commands";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPos_, $HolderSet, $HolderSet_, $HolderLookup } from "@package/net/minecraft/core";
import { $Dynamic3CommandExceptionType, $DynamicCommandExceptionType, $SimpleCommandExceptionType, $Dynamic2CommandExceptionType } from "@package/com/mojang/brigadier/exceptions";
import { $Suggestions, $SuggestionsBuilder } from "@package/com/mojang/brigadier/suggestion";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $CommandContext } from "@package/com/mojang/brigadier/context";
import { $Comparable_, $Record, $Comparable } from "@package/java/lang";
import { $ArgumentType } from "@package/com/mojang/brigadier/arguments";

declare module "@package/net/minecraft/commands/arguments/blocks" {
    export class $BlockStateParser {
        static fillSuggestions(lookup: $HolderLookup<$Block_>, builder: $SuggestionsBuilder, forTesting: boolean, allowNbt: boolean): $CompletableFuture<$Suggestions>;
        static parseForBlock(lookup: $HolderLookup<$Block_>, input: string, allowNbt: boolean): $BlockStateParser$BlockResult;
        static parseForBlock(lookup: $HolderLookup<$Block_>, reader: $StringReader, allowNbt: boolean): $BlockStateParser$BlockResult;
        static parseForTesting(lookup: $HolderLookup<$Block_>, reader: $StringReader, allowNbt: boolean): $Either<$BlockStateParser$BlockResult, $BlockStateParser$TagResult>;
        static parseForTesting(lookup: $HolderLookup<$Block_>, input: string, allowNbt: boolean): $Either<$BlockStateParser$BlockResult, $BlockStateParser$TagResult>;
        static serialize(state: $BlockState_): string;
        static ERROR_EXPECTED_END_OF_PROPERTIES: $SimpleCommandExceptionType;
        static ERROR_EXPECTED_VALUE: $Dynamic2CommandExceptionType;
        static ERROR_INVALID_VALUE: $Dynamic3CommandExceptionType;
        static ERROR_NO_TAGS_ALLOWED: $SimpleCommandExceptionType;
        static ERROR_UNKNOWN_BLOCK: $DynamicCommandExceptionType;
        static ERROR_UNKNOWN_PROPERTY: $Dynamic2CommandExceptionType;
        static ERROR_DUPLICATE_PROPERTY: $Dynamic2CommandExceptionType;
        static ERROR_UNKNOWN_TAG: $DynamicCommandExceptionType;
    }
    export class $BlockStateParser$BlockResult extends $Record {
        properties(): $Map<$Property<never>, $Comparable<never>>;
        nbt(): $CompoundTag;
        blockState(): $BlockState;
        constructor(arg0: $BlockState_, arg1: $Map_<$Property<never>, $Comparable_<never>>, arg2: $CompoundTag_ | null);
    }
    /**
     * Values that may be interpreted as {@link $BlockStateParser$BlockResult}.
     */
    export type $BlockStateParser$BlockResult_ = { nbt?: $CompoundTag_, blockState?: $BlockState_, properties?: $Map_<$Property<never>, $Comparable_<never>>,  } | [nbt?: $CompoundTag_, blockState?: $BlockState_, properties?: $Map_<$Property<never>, $Comparable_<never>>, ];
    export class $BlockPredicateArgument implements $ArgumentType<$BlockPredicateArgument$Result> {
        static blockPredicate(context: $CommandBuildContext): $BlockPredicateArgument;
        static getBlockPredicate(context: $CommandContext<$CommandSourceStack>, name: string): $Predicate<$BlockInWorld>;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        getExamples(): $Collection<string>;
        static parse(lookup: $HolderLookup<$Block_>, reader: $StringReader): $BlockPredicateArgument$Result;
        parse<S>(arg0: $StringReader, arg1: S): $BlockPredicateArgument$Result;
        parse(arg0: $StringReader): $BlockPredicateArgument$Result;
        constructor(context: $CommandBuildContext);
        get examples(): $Collection<string>;
    }
    export class $BlockPredicateArgument$Result {
    }
    export interface $BlockPredicateArgument$Result extends $Predicate<$BlockInWorld> {
        requiresNbt(): boolean;
    }
    export class $BlockPredicateArgument$TagPredicate implements $BlockPredicateArgument$Result {
        or(arg0: $Predicate_<$BlockInWorld>): $Predicate<$BlockInWorld>;
        negate(): $Predicate<$BlockInWorld>;
        and(arg0: $Predicate_<$BlockInWorld>): $Predicate<$BlockInWorld>;
    }
    export class $BlockStateParser$TagResult extends $Record {
        vagueProperties(): $Map<string, string>;
        tag(): $HolderSet<$Block>;
        nbt(): $CompoundTag;
        constructor(arg0: $HolderSet_<$Block>, arg1: $Map_<string, string>, arg2: $CompoundTag_ | null);
    }
    /**
     * Values that may be interpreted as {@link $BlockStateParser$TagResult}.
     */
    export type $BlockStateParser$TagResult_ = { nbt?: $CompoundTag_, tag?: $HolderSet_<$Block>, vagueProperties?: $Map_<string, string>,  } | [nbt?: $CompoundTag_, tag?: $HolderSet_<$Block>, vagueProperties?: $Map_<string, string>, ];
    export class $BlockStateArgument implements $ArgumentType<$BlockInput> {
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getBlock(context: $CommandContext<$CommandSourceStack>, name: string): $BlockInput;
        getExamples(): $Collection<string>;
        parse(reader: $StringReader): $BlockInput;
        static block(buildContext: $CommandBuildContext): $BlockStateArgument;
        parse<S>(arg0: $StringReader, arg1: S): $BlockInput;
        constructor(buildContext: $CommandBuildContext);
        get examples(): $Collection<string>;
    }
    export class $BlockPredicateArgument$BlockPredicate implements $BlockPredicateArgument$Result {
        or(arg0: $Predicate_<$BlockInWorld>): $Predicate<$BlockInWorld>;
        negate(): $Predicate<$BlockInWorld>;
        and(arg0: $Predicate_<$BlockInWorld>): $Predicate<$BlockInWorld>;
    }
    export class $BlockInput implements $Predicate<$BlockInWorld> {
        getDefinedProperties(): $Set<$Property<never>>;
        place(level: $ServerLevel, pos: $BlockPos_, flags: number): boolean;
        test(level: $ServerLevel, pos: $BlockPos_): boolean;
        test(block: $BlockInWorld): boolean;
        getState(): $BlockState;
        or(arg0: $Predicate_<$BlockInWorld>): $Predicate<$BlockInWorld>;
        negate(): $Predicate<$BlockInWorld>;
        and(arg0: $Predicate_<$BlockInWorld>): $Predicate<$BlockInWorld>;
        constructor(state: $BlockState_, properties: $Set_<$Property<never>>, tag: $CompoundTag_ | null);
        get definedProperties(): $Set<$Property<never>>;
        get state(): $BlockState;
    }
}
