import { $JsonObject_ } from "@package/com/google/gson";
import { $StructureTemplatePool } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $Codec } from "@package/com/mojang/serialization";
import { $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $Tag_, $Tag, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $StringReader } from "@package/com/mojang/brigadier";
import { $EntityType, $Entity } from "@package/net/minecraft/world/entity";
import { $ObjectiveCriteria } from "@package/net/minecraft/world/scores/criteria";
import { $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $UUID, $List, $Collection_, $List_, $Collection } from "@package/java/util";
import { $AdvancementHolder } from "@package/net/minecraft/advancements";
import { $Supplier_, $Consumer_, $Predicate_, $Predicate, $Supplier } from "@package/java/util/function";
import { $ChatFormatting } from "@package/net/minecraft";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Object2IntMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $HolderSet$Named, $Holder$Reference, $Registry, $HolderLookup$Provider, $Holder } from "@package/net/minecraft/core";
import { $Dynamic2CommandExceptionType, $Dynamic3CommandExceptionType, $DynamicCommandExceptionType, $SimpleCommandExceptionType } from "@package/com/mojang/brigadier/exceptions";
import { $Suggestions, $SuggestionProvider, $SuggestionsBuilder } from "@package/com/mojang/brigadier/suggestion";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $ConfiguredFeature } from "@package/net/minecraft/world/level/levelgen/feature";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $SlotRange } from "@package/net/minecraft/world/inventory";
import { $CommandContext } from "@package/com/mojang/brigadier/context";
import { $Enum, $Record, $Object } from "@package/java/lang";
import { $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Heightmap$Types } from "@package/net/minecraft/world/level/levelgen";
import { $GameType } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $MessageSignature_, $MessageSignature, $Style, $SignableCommand_, $PlayerChatMessage, $Component } from "@package/net/minecraft/network/chat";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $EntitySelector } from "@package/net/minecraft/commands/arguments/selector";
import { $LootItemFunction } from "@package/net/minecraft/world/level/storage/loot/functions";
import { $MinMaxBounds$Doubles, $MinMaxBounds$Ints, $MinMaxBounds } from "@package/net/minecraft/advancements/critereon";
import { $CommandBuildContext, $CommandSourceStack } from "@package/net/minecraft/commands";
import { $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LootItemCondition } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $Mirror, $Rotation } from "@package/net/minecraft/world/level/block";
import { $Objective, $PlayerTeam, $ScoreHolder, $DisplaySlot, $ScoreAccess } from "@package/net/minecraft/world/scores";
import { $ArgumentTypeInfo$Template, $ArgumentTypeInfo } from "@package/net/minecraft/commands/synchronization";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $StatType_ } from "@package/net/minecraft/stats";
import { $ArgumentType } from "@package/com/mojang/brigadier/arguments";
export * as coordinates from "@package/net/minecraft/commands/arguments/coordinates";
export * as item from "@package/net/minecraft/commands/arguments/item";
export * as selector from "@package/net/minecraft/commands/arguments/selector";
export * as blocks from "@package/net/minecraft/commands/arguments/blocks";

declare module "@package/net/minecraft/commands/arguments" {
    export class $EntityAnchorArgument implements $ArgumentType<$EntityAnchorArgument$Anchor> {
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getAnchor(context: $CommandContext<$CommandSourceStack>, name: string): $EntityAnchorArgument$Anchor;
        getExamples(): $Collection<string>;
        parse(reader: $StringReader): $EntityAnchorArgument$Anchor;
        static anchor(): $EntityAnchorArgument;
        parse<S>(arg0: $StringReader, arg1: S): $EntityAnchorArgument$Anchor;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $NbtPathArgument$AllElementsNode implements $NbtPathArgument$Node {
    }
    export class $ScoreboardSlotArgument implements $ArgumentType<$DisplaySlot> {
        static displaySlot(): $ScoreboardSlotArgument;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getDisplaySlot(context: $CommandContext<$CommandSourceStack>, slot: string): $DisplaySlot;
        getExamples(): $Collection<string>;
        parse(reader: $StringReader): $DisplaySlot;
        parse<S>(arg0: $StringReader, arg1: S): $DisplaySlot;
        static ERROR_INVALID_VALUE: $DynamicCommandExceptionType;
        get examples(): $Collection<string>;
    }
    export class $ResourceOrIdArgument$LootPredicateArgument extends $ResourceOrIdArgument<$LootItemCondition> {
        parse(reader: $StringReader): $Holder<$LootItemCondition>;
        static ERROR_FAILED_TO_PARSE: $DynamicCommandExceptionType;
    }
    export class $ResourceKeyArgument$Info<T> implements $ArgumentTypeInfo<$ResourceKeyArgument<T>, $ResourceKeyArgument$Info$Template> {
        serializeToNetwork(template: $ResourceKeyArgument$Info$Template, buffer: $FriendlyByteBuf): void;
        serializeToJson(template: $ResourceKeyArgument$Info$Template, json: $JsonObject_): void;
        unpack(argument: $ResourceKeyArgument<$ResourceKeyArgument$Info$Template>): $ResourceKeyArgument$Info$Template;
        deserializeFromNetwork(buffer: $FriendlyByteBuf): $ResourceKeyArgument$Info$Template;
        constructor();
    }
    export class $ArgumentSignatures$Entry extends $Record {
        signature(): $MessageSignature;
        name(): string;
        write(buffer: $FriendlyByteBuf): void;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: string, arg1: $MessageSignature_);
    }
    /**
     * Values that may be interpreted as {@link $ArgumentSignatures$Entry}.
     */
    export type $ArgumentSignatures$Entry_ = { signature?: $MessageSignature_, name?: string,  } | [signature?: $MessageSignature_, name?: string, ];
    export class $ResourceOrIdArgument<T> implements $ArgumentType<$Holder<T>> {
        static lootTable(context: $CommandBuildContext): $ResourceOrIdArgument$LootTableArgument;
        static lootPredicate(context: $CommandBuildContext): $ResourceOrIdArgument$LootPredicateArgument;
        static lootModifier(context: $CommandBuildContext): $ResourceOrIdArgument$LootModifierArgument;
        static getLootModifier(context: $CommandContext<$CommandSourceStack>, name: string): $Holder<$LootItemFunction>;
        static getLootPredicate(context: $CommandContext<$CommandSourceStack>, name: string): $Holder<$LootItemCondition>;
        getExamples(): $Collection<string>;
        parse(reader: $StringReader): $Holder<$Holder<T>>;
        static getLootTable(context: $CommandContext<$CommandSourceStack>, name: string): $Holder<$LootTable>;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse<S>(arg0: $StringReader, arg1: S): $Holder<T>;
        static ERROR_FAILED_TO_PARSE: $DynamicCommandExceptionType;
        get examples(): $Collection<string>;
    }
    export class $ObjectiveArgument implements $ArgumentType<string> {
        static getObjective(context: $CommandContext<$CommandSourceStack>, name: string): $Objective;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getWritableObjective(context: $CommandContext<$CommandSourceStack>, name: string): $Objective;
        getExamples(): $Collection<string>;
        parse(reader: $StringReader): string;
        static objective(): $ObjectiveArgument;
        parse<S>(arg0: $StringReader, arg1: S): string;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $ArgumentSignatures$Signer {
    }
    export interface $ArgumentSignatures$Signer {
        sign(argumentText: string): $MessageSignature;
    }
    /**
     * Values that may be interpreted as {@link $ArgumentSignatures$Signer}.
     */
    export type $ArgumentSignatures$Signer_ = ((arg0: string) => $MessageSignature_);
    export class $ResourceOrIdArgument$LootTableArgument extends $ResourceOrIdArgument<$LootTable> {
        parse(reader: $StringReader): $Holder<$LootTable>;
        static ERROR_FAILED_TO_PARSE: $DynamicCommandExceptionType;
    }
    export class $ScoreHolderArgument implements $ArgumentType<$ScoreHolderArgument$Result> {
        /**
         * Gets one or more score holders, with no objectives list.
         */
        static getNamesWithDefaultWildcard(context: $CommandContext<$CommandSourceStack>, name: string): $Collection<$ScoreHolder>;
        static scoreHolder(): $ScoreHolderArgument;
        static scoreHolders(): $ScoreHolderArgument;
        /**
         * Gets one or more score holders, with no objectives list.
         */
        static getNames(context: $CommandContext<$CommandSourceStack>, name: string): $Collection<$ScoreHolder>;
        /**
         * Gets one or more score holders.
         */
        static getNames(context: $CommandContext<$CommandSourceStack>, name: string, objectives: $Supplier_<$Collection<$ScoreHolder>>): $Collection<$ScoreHolder>;
        getExamples(): $Collection<string>;
        static getName(context: $CommandContext<$CommandSourceStack>, name: string): $ScoreHolder;
        parse(reader: $StringReader): $ScoreHolderArgument$Result;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse<S>(arg0: $StringReader, arg1: S): $ScoreHolderArgument$Result;
        static SUGGEST_SCORE_HOLDERS: $SuggestionProvider<$CommandSourceStack>;
        constructor(multiple: boolean);
        get examples(): $Collection<string>;
    }
    export class $UuidArgument implements $ArgumentType<$UUID> {
        getExamples(): $Collection<string>;
        parse(reader: $StringReader): $UUID;
        static uuid(): $UuidArgument;
        static getUuid(context: $CommandContext<$CommandSourceStack>, name: string): $UUID;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse<S>(arg0: $StringReader, arg1: S): $UUID;
        static ERROR_INVALID_UUID: $SimpleCommandExceptionType;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $TemplateRotationArgument extends $StringRepresentableArgument<$Rotation> {
        static templateRotation(): $TemplateRotationArgument;
        static getRotation(context: $CommandContext<$CommandSourceStack>, name: string): $Rotation;
    }
    export class $MessageArgument$Message extends $Record {
        /**
         * Converts this message into a text component, replacing any selectors in the text with the actual evaluated selector.
         */
        toComponent(source: $CommandSourceStack, allowSelectors: boolean): $Component;
        parts(): $MessageArgument$Part[];
        text(): string;
        /**
         * Parses a message. The algorithm for this is simply to run through and look for selectors, ignoring any invalid selectors in the text (since players may type e.g. "[@]").
         */
        static parseText(reader: $StringReader, allowSelectors: boolean): $MessageArgument$Message;
        constructor(text: string, parts: $MessageArgument$Part_[]);
    }
    /**
     * Values that may be interpreted as {@link $MessageArgument$Message}.
     */
    export type $MessageArgument$Message_ = { parts?: $MessageArgument$Part_[], text?: string,  } | [parts?: $MessageArgument$Part_[], text?: string, ];
    export class $AngleArgument implements $ArgumentType<$AngleArgument$SingleAngle> {
        static getAngle(context: $CommandContext<$CommandSourceStack>, name: string): number;
        getExamples(): $Collection<string>;
        static angle(): $AngleArgument;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse<S>(arg0: $StringReader, arg1: S): $AngleArgument$SingleAngle;
        parse(arg0: $StringReader): $AngleArgument$SingleAngle;
        static ERROR_INVALID_ANGLE: $SimpleCommandExceptionType;
        static ERROR_NOT_COMPLETE: $SimpleCommandExceptionType;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $RangeArgument<T extends $MinMaxBounds<never>> {
        /**
         * Note: this class is missing several fields and methods due to them not being used in particular FloatRange has no way of being created.
         */
        static intRange(): $RangeArgument$Ints;
        static floatRange(): $RangeArgument$Floats;
    }
    export interface $RangeArgument<T extends $MinMaxBounds<never>> extends $ArgumentType<T> {
    }
    /**
     * Values that may be interpreted as {@link $RangeArgument}.
     */
    export type $RangeArgument_<T> = (() => void);
    export class $OperationArgument$Operation {
    }
    export interface $OperationArgument$Operation {
        apply(targetScore: $ScoreAccess, sourceScore: $ScoreAccess): void;
    }
    /**
     * Values that may be interpreted as {@link $OperationArgument$Operation}.
     */
    export type $OperationArgument$Operation_ = ((arg0: $ScoreAccess, arg1: $ScoreAccess) => void);
    export class $ResourceOrTagArgument$Info$Template implements $ArgumentTypeInfo$Template<$ResourceOrTagArgument<T>> {
        type(): $ArgumentTypeInfo<$ResourceOrTagArgument<T>, never>;
        instantiate(context: $CommandBuildContext): $ResourceOrTagArgument<T>;
    }
    export class $ResourceOrIdArgument$LootModifierArgument extends $ResourceOrIdArgument<$LootItemFunction> {
        parse(reader: $StringReader): $Holder<$LootItemFunction>;
        static ERROR_FAILED_TO_PARSE: $DynamicCommandExceptionType;
    }
    export class $StringRepresentableArgument<T extends $Enum<T>> implements $ArgumentType<T> {
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        getExamples(): $Collection<string>;
        parse<S>(arg0: $StringReader, arg1: S): T;
        parse(arg0: $StringReader): T;
        get examples(): $Collection<string>;
    }
    export class $NbtPathArgument$MatchElementNode implements $NbtPathArgument$Node {
    }
    export class $DimensionArgument implements $ArgumentType<$ResourceLocation> {
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getDimension(context: $CommandContext<$CommandSourceStack>, name: string): $ServerLevel;
        static dimension(): $DimensionArgument;
        getExamples(): $Collection<string>;
        parse(reader: $StringReader): $ResourceLocation;
        parse<S>(arg0: $StringReader, arg1: S): $ResourceLocation;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $NbtPathArgument$CompoundChildNode implements $NbtPathArgument$Node {
    }
    export class $NbtPathArgument$MatchObjectNode implements $NbtPathArgument$Node {
    }
    export class $RangeArgument$Floats implements $RangeArgument<$MinMaxBounds$Doubles> {
        static getRange(context: $CommandContext<$CommandSourceStack>, name: string): $MinMaxBounds$Doubles;
        getExamples(): $Collection<string>;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse<S>(arg0: $StringReader, arg1: S): $MinMaxBounds$Doubles;
        parse(arg0: $StringReader): $MinMaxBounds$Doubles;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $NbtPathArgument$IndexedElementNode implements $NbtPathArgument$Node {
    }
    export class $ScoreHolderArgument$Info implements $ArgumentTypeInfo<$ScoreHolderArgument, $ScoreHolderArgument$Info$Template> {
        serializeToNetwork(template: $ScoreHolderArgument$Info$Template, buffer: $FriendlyByteBuf): void;
        serializeToJson(template: $ScoreHolderArgument$Info$Template, json: $JsonObject_): void;
        unpack(argument: $ScoreHolderArgument): $ScoreHolderArgument$Info$Template;
        deserializeFromNetwork(buffer: $FriendlyByteBuf): $ScoreHolderArgument$Info$Template;
        constructor();
    }
    export class $ResourceOrTagArgument$Result<T> {
    }
    export interface $ResourceOrTagArgument$Result<T> extends $Predicate<$Holder<T>> {
        asPrintable(): string;
        cast<E>(registryKey: $ResourceKey_<$Registry<E>>): ($ResourceOrTagArgument$Result<E>) | undefined;
        unwrap(): $Either<$Holder$Reference<$Holder<T>>, $HolderSet$Named<$Holder<T>>>;
    }
    export class $NbtPathArgument$MatchRootObjectNode implements $NbtPathArgument$Node {
    }
    export class $NbtPathArgument$Node {
    }
    export interface $NbtPathArgument$Node {
    }
    export class $ResourceKeyArgument<T> implements $ArgumentType<$ResourceKey<T>> {
        static getConfiguredFeature(context: $CommandContext<$CommandSourceStack>, argument: string): $Holder$Reference<$ConfiguredFeature<never, never>>;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getStructureTemplatePool(context: $CommandContext<$CommandSourceStack>, argument: string): $Holder$Reference<$StructureTemplatePool>;
        getExamples(): $Collection<string>;
        static key<T>(registryKey: $ResourceKey_<$Registry<T>>): $ResourceKeyArgument<T>;
        parse(reader: $StringReader): $ResourceKey<$ResourceKey<T>>;
        static getStructure(context: $CommandContext<$CommandSourceStack>, argument: string): $Holder$Reference<$Structure>;
        parse<S>(arg0: $StringReader, arg1: S): $ResourceKey<T>;
        constructor(registryKey: $ResourceKey_<$Registry<$ResourceKey<T>>>);
        get examples(): $Collection<string>;
    }
    export class $TimeArgument implements $ArgumentType<number> {
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        getExamples(): $Collection<string>;
        static time(): $TimeArgument;
        static time(minimum: number): $TimeArgument;
        parse(reader: $StringReader): number;
        parse<S>(arg0: $StringReader, arg1: S): number;
        get examples(): $Collection<string>;
    }
    export class $GameProfileArgument implements $ArgumentType<$GameProfileArgument$Result> {
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getGameProfiles(context: $CommandContext<$CommandSourceStack>, name: string): $Collection<$GameProfile>;
        getExamples(): $Collection<string>;
        parse<S>(arg0: $StringReader, arg1: S): $GameProfileArgument$Result;
        static gameProfile(): $GameProfileArgument;
        parse(arg0: $StringReader): $GameProfileArgument$Result;
        static ERROR_UNKNOWN_PLAYER: $SimpleCommandExceptionType;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $EntityArgument$Info implements $ArgumentTypeInfo<$EntityArgument, $EntityArgument$Info$Template> {
        serializeToNetwork(template: $EntityArgument$Info$Template, buffer: $FriendlyByteBuf): void;
        serializeToJson(template: $EntityArgument$Info$Template, json: $JsonObject_): void;
        unpack(argument: $EntityArgument): $EntityArgument$Info$Template;
        deserializeFromNetwork(buffer: $FriendlyByteBuf): $EntityArgument$Info$Template;
        constructor();
    }
    export class $MessageArgument implements $SignedArgument<$MessageArgument$Message> {
        static resolveChatMessage(context: $CommandContext<$CommandSourceStack>, key: string, callback: $Consumer_<$PlayerChatMessage>): void;
        getExamples(): $Collection<string>;
        static getMessage(context: $CommandContext<$CommandSourceStack>, name: string): $Component;
        static message(): $MessageArgument;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse(arg0: $StringReader): $MessageArgument$Message;
        parse<S>(arg0: $StringReader, arg1: S): $MessageArgument$Message;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $ComponentArgument implements $ArgumentType<$Component> {
        static textComponent(context: $CommandBuildContext): $ComponentArgument;
        getExamples(): $Collection<string>;
        parse(reader: $StringReader): $Component;
        static getComponent(context: $CommandContext<$CommandSourceStack>, name: string): $Component;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse<S>(arg0: $StringReader, arg1: S): $Component;
        static ERROR_INVALID_JSON: $DynamicCommandExceptionType;
        get examples(): $Collection<string>;
    }
    export class $SlotArgument implements $ArgumentType<number> {
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        getExamples(): $Collection<string>;
        static slot(): $SlotArgument;
        parse(reader: $StringReader): number;
        static getSlot(context: $CommandContext<$CommandSourceStack>, name: string): number;
        parse<S>(arg0: $StringReader, arg1: S): number;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $ScoreHolderArgument$Result {
    }
    export interface $ScoreHolderArgument$Result {
        getNames(source: $CommandSourceStack, objectives: $Supplier_<$Collection<$ScoreHolder>>): $Collection<$ScoreHolder>;
    }
    /**
     * Values that may be interpreted as {@link $ScoreHolderArgument$Result}.
     */
    export type $ScoreHolderArgument$Result_ = ((arg0: $CommandSourceStack, arg1: $Supplier<$Collection<$ScoreHolder>>) => $Collection_<$ScoreHolder>);
    export class $ResourceOrTagKeyArgument$Result<T> {
    }
    export interface $ResourceOrTagKeyArgument$Result<T> extends $Predicate<$Holder<T>> {
        asPrintable(): string;
        cast<E>(registryKey: $ResourceKey_<$Registry<E>>): ($ResourceOrTagKeyArgument$Result<E>) | undefined;
        unwrap(): $Either<$ResourceKey<$Holder<T>>, $TagKey<$Holder<T>>>;
    }
    export class $ResourceKeyArgument$Info$Template implements $ArgumentTypeInfo$Template<$ResourceKeyArgument<T>> {
        type(): $ArgumentTypeInfo<$ResourceKeyArgument<T>, never>;
        instantiate(context: $CommandBuildContext): $ResourceKeyArgument<T>;
    }
    export class $ResourceArgument$Info$Template implements $ArgumentTypeInfo$Template<$ResourceArgument<T>> {
        type(): $ArgumentTypeInfo<$ResourceArgument<T>, never>;
        instantiate(context: $CommandBuildContext): $ResourceArgument<T>;
    }
    export class $GameModeArgument implements $ArgumentType<$GameType> {
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getGameMode(context: $CommandContext<$CommandSourceStack>, name: string): $GameType;
        getExamples(): $Collection<string>;
        parse(reader: $StringReader): $GameType;
        static gameMode(): $GameModeArgument;
        parse<S>(arg0: $StringReader, arg1: S): $GameType;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $ArgumentSignatures extends $Record {
        static signCommand(command: $SignableCommand_<never>, signer: $ArgumentSignatures$Signer_): $ArgumentSignatures;
        write(buffer: $FriendlyByteBuf): void;
        entries(): $List<$ArgumentSignatures$Entry>;
        static EMPTY: $ArgumentSignatures;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: $List_<$ArgumentSignatures$Entry_>);
    }
    /**
     * Values that may be interpreted as {@link $ArgumentSignatures}.
     */
    export type $ArgumentSignatures_ = { entries?: $List_<$ArgumentSignatures$Entry_>,  } | [entries?: $List_<$ArgumentSignatures$Entry_>, ];
    export class $EntityArgument implements $ArgumentType<$EntitySelector> {
        static getPlayers(context: $CommandContext<$CommandSourceStack>, name: string): $Collection<$ServerPlayer>;
        static players(): $EntityArgument;
        static getPlayer(context: $CommandContext<$CommandSourceStack>, name: string): $ServerPlayer;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getOptionalEntities(context: $CommandContext<$CommandSourceStack>, name: string): $Collection<$Entity>;
        static getOptionalPlayers(context: $CommandContext<$CommandSourceStack>, name: string): $Collection<$ServerPlayer>;
        static getEntities(context: $CommandContext<$CommandSourceStack>, name: string): $Collection<$Entity>;
        static entities(): $EntityArgument;
        static entity(): $EntityArgument;
        getExamples(): $Collection<string>;
        static getEntity(context: $CommandContext<$CommandSourceStack>, name: string): $Entity;
        static player(): $EntityArgument;
        parse<S>(arg0: $StringReader, arg1: S): $EntitySelector;
        parse(arg0: $StringReader): $EntitySelector;
        static ERROR_SELECTORS_NOT_ALLOWED: $SimpleCommandExceptionType;
        static NO_PLAYERS_FOUND: $SimpleCommandExceptionType;
        static NO_ENTITIES_FOUND: $SimpleCommandExceptionType;
        static ERROR_NOT_SINGLE_ENTITY: $SimpleCommandExceptionType;
        static ERROR_NOT_SINGLE_PLAYER: $SimpleCommandExceptionType;
        static ERROR_ONLY_PLAYERS_ALLOWED: $SimpleCommandExceptionType;
        get examples(): $Collection<string>;
    }
    export class $OperationArgument implements $ArgumentType<$OperationArgument$Operation> {
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getOperation(context: $CommandContext<$CommandSourceStack>, name: string): $OperationArgument$Operation;
        getExamples(): $Collection<string>;
        static operation(): $OperationArgument;
        parse<S>(arg0: $StringReader, arg1: S): $OperationArgument$Operation;
        parse(arg0: $StringReader): $OperationArgument$Operation;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $ResourceOrTagKeyArgument<T> implements $ArgumentType<$ResourceOrTagKeyArgument$Result<T>> {
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static resourceOrTagKey<T>(registryKey: $ResourceKey_<$Registry<T>>): $ResourceOrTagKeyArgument<T>;
        static getResourceOrTagKey<T>(context: $CommandContext<$CommandSourceStack>, argument: string, registryKey: $ResourceKey_<$Registry<T>>, dynamicCommandExceptionType: $DynamicCommandExceptionType): $ResourceOrTagKeyArgument$Result<T>;
        getExamples(): $Collection<string>;
        parse<S>(arg0: $StringReader, arg1: S): $ResourceOrTagKeyArgument$Result<T>;
        parse(arg0: $StringReader): $ResourceOrTagKeyArgument$Result<T>;
        constructor(registryKey: $ResourceKey_<$Registry<$ResourceOrTagKeyArgument$Result<T>>>);
        get examples(): $Collection<string>;
    }
    export class $SignedArgument<T> {
    }
    export interface $SignedArgument<T> extends $ArgumentType<T> {
    }
    /**
     * Values that may be interpreted as {@link $SignedArgument}.
     */
    export type $SignedArgument_<T> = (() => void);
    export class $TimeArgument$Info$Template implements $ArgumentTypeInfo$Template<$TimeArgument> {
        type(): $ArgumentTypeInfo<$TimeArgument, never>;
        instantiate(context: $CommandBuildContext): $TimeArgument;
    }
    export class $ScoreHolderArgument$Info$Template implements $ArgumentTypeInfo$Template<$ScoreHolderArgument> {
        type(): $ArgumentTypeInfo<$ScoreHolderArgument, never>;
        instantiate(context: $CommandBuildContext): $ScoreHolderArgument;
    }
    export class $MessageArgument$Part extends $Record {
        /**
         * Runs the selector and returns the component produced by it. This method does not actually appear to ever return null.
         */
        toComponent(source: $CommandSourceStack): $Component;
        end(): number;
        start(): number;
        selector(): $EntitySelector;
        constructor(start: number, end: number, selector: $EntitySelector);
    }
    /**
     * Values that may be interpreted as {@link $MessageArgument$Part}.
     */
    export type $MessageArgument$Part_ = { selector?: $EntitySelector, start?: number, end?: number,  } | [selector?: $EntitySelector, start?: number, end?: number, ];
    export class $ParticleArgument implements $ArgumentType<$ParticleOptions> {
        static getParticle(context: $CommandContext<$CommandSourceStack>, name: string): $ParticleOptions;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static readParticle(reader: $StringReader, registries: $HolderLookup$Provider): $ParticleOptions;
        getExamples(): $Collection<string>;
        parse(reader: $StringReader): $ParticleOptions;
        static particle(buildContext: $CommandBuildContext): $ParticleArgument;
        parse<S>(arg0: $StringReader, arg1: S): $ParticleOptions;
        static ERROR_INVALID_OPTIONS: $DynamicCommandExceptionType;
        static ERROR_UNKNOWN_PARTICLE: $DynamicCommandExceptionType;
        constructor(buildContext: $CommandBuildContext);
        get examples(): $Collection<string>;
    }
    export class $NbtPathArgument$NbtPath {
        countMatching(tag: $Tag_): number;
        static isTooDeep(tag: $Tag_, currentDepth: number): boolean;
        remove(tag: $Tag_): number;
        get(tag: $Tag_): $List<$Tag>;
        insert(index: number, rootTag: $CompoundTag_, tagsToInsert: $List_<$Tag_>): number;
        static of(path: string): $NbtPathArgument$NbtPath;
        set(tag: $Tag_, other: $Tag_): number;
        asString(): string;
        getOrCreate(tag: $Tag_, supplier: $Supplier_<$Tag>): $List<$Tag>;
        static CODEC: $Codec<$NbtPathArgument$NbtPath>;
        constructor(original: string, nodes: $NbtPathArgument$Node[], nodeToOriginPosition: $Object2IntMap<$NbtPathArgument$Node>);
    }
    export class $EntityAnchorArgument$Anchor extends $Enum<$EntityAnchorArgument$Anchor> {
        static values(): $EntityAnchorArgument$Anchor[];
        static valueOf(name: string): $EntityAnchorArgument$Anchor;
        /**
         * Gets the coordinate based on the given command source's position. If the source is not an entity, no offsetting occurs.
         */
        apply(source: $CommandSourceStack): $Vec3;
        /**
         * Gets the coordinate based on the given entity's position.
         */
        apply(entity: $Entity): $Vec3;
        static getByName(name: string): $EntityAnchorArgument$Anchor;
        static EYES: $EntityAnchorArgument$Anchor;
        static FEET: $EntityAnchorArgument$Anchor;
    }
    /**
     * Values that may be interpreted as {@link $EntityAnchorArgument$Anchor}.
     */
    export type $EntityAnchorArgument$Anchor_ = "feet" | "eyes";
    export class $ResourceOrTagKeyArgument$ResourceResult<T> extends $Record implements $ResourceOrTagKeyArgument$Result<T> {
        or(arg0: $Predicate_<T>): $Predicate<T>;
        negate(): $Predicate<T>;
        and(arg0: $Predicate_<T>): $Predicate<T>;
    }
    /**
     * Values that may be interpreted as {@link $ResourceOrTagKeyArgument$ResourceResult}.
     */
    export type $ResourceOrTagKeyArgument$ResourceResult_<T> = { key?: $ResourceKey_<any>,  } | [key?: $ResourceKey_<any>, ];
    export class $EntityArgument$Info$Template implements $ArgumentTypeInfo$Template<$EntityArgument> {
        type(): $ArgumentTypeInfo<$EntityArgument, never>;
        instantiate(context: $CommandBuildContext): $EntityArgument;
    }
    export class $SlotsArgument implements $ArgumentType<$SlotRange> {
        listSuggestions<S>(context: $CommandContext<S>, suggestionBuilder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        getExamples(): $Collection<string>;
        parse(reader: $StringReader): $SlotRange;
        static slots(): $SlotsArgument;
        static getSlots(context: $CommandContext<$CommandSourceStack>, name: string): $SlotRange;
        parse<S>(arg0: $StringReader, arg1: S): $SlotRange;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $GameProfileArgument$Result {
    }
    export interface $GameProfileArgument$Result {
        getNames(source: $CommandSourceStack): $Collection<$GameProfile>;
    }
    /**
     * Values that may be interpreted as {@link $GameProfileArgument$Result}.
     */
    export type $GameProfileArgument$Result_ = ((arg0: $CommandSourceStack) => $Collection_<$GameProfile>);
    export class $NbtTagArgument implements $ArgumentType<$Tag> {
        static nbtTag(): $NbtTagArgument;
        static getNbtTag<S>(context: $CommandContext<S>, name: string): $Tag;
        getExamples(): $Collection<string>;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse<S>(arg0: $StringReader, arg1: S): $Tag;
        parse(arg0: $StringReader): $Tag;
        get examples(): $Collection<string>;
    }
    export class $ResourceLocationArgument implements $ArgumentType<$ResourceLocation> {
        static getRecipe(context: $CommandContext<$CommandSourceStack>, name: string): $RecipeHolder<never>;
        static getAdvancement(context: $CommandContext<$CommandSourceStack>, name: string): $AdvancementHolder;
        getExamples(): $Collection<string>;
        static id(): $ResourceLocationArgument;
        static getId(context: $CommandContext<$CommandSourceStack>, name: string): $ResourceLocation;
        parse(reader: $StringReader): $ResourceLocation;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse<S>(arg0: $StringReader, arg1: S): $ResourceLocation;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $TimeArgument$Info implements $ArgumentTypeInfo<$TimeArgument, $TimeArgument$Info$Template> {
        serializeToNetwork(template: $TimeArgument$Info$Template, buffer: $FriendlyByteBuf): void;
        serializeToJson(template: $TimeArgument$Info$Template, json: $JsonObject_): void;
        unpack(argument: $TimeArgument): $TimeArgument$Info$Template;
        deserializeFromNetwork(buffer: $FriendlyByteBuf): $TimeArgument$Info$Template;
        constructor();
    }
    export class $ResourceOrTagKeyArgument$Info$Template implements $ArgumentTypeInfo$Template<$ResourceOrTagKeyArgument<T>> {
        type(): $ArgumentTypeInfo<$ResourceOrTagKeyArgument<T>, never>;
        instantiate(context: $CommandBuildContext): $ResourceOrTagKeyArgument<T>;
    }
    export class $ResourceOrTagArgument$TagResult<T> extends $Record implements $ResourceOrTagArgument$Result<T> {
        or(arg0: $Predicate_<T>): $Predicate<T>;
        negate(): $Predicate<T>;
        and(arg0: $Predicate_<T>): $Predicate<T>;
    }
    /**
     * Values that may be interpreted as {@link $ResourceOrTagArgument$TagResult}.
     */
    export type $ResourceOrTagArgument$TagResult_<T> = { tag?: $HolderSet$Named<any>,  } | [tag?: $HolderSet$Named<any>, ];
    export class $TeamArgument implements $ArgumentType<string> {
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        getExamples(): $Collection<string>;
        parse(reader: $StringReader): string;
        static team(): $TeamArgument;
        static getTeam(context: $CommandContext<$CommandSourceStack>, name: string): $PlayerTeam;
        parse<S>(arg0: $StringReader, arg1: S): string;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $CompoundTagArgument implements $ArgumentType<$CompoundTag> {
        static getCompoundTag<S>(context: $CommandContext<S>, name: string): $CompoundTag;
        getExamples(): $Collection<string>;
        static compoundTag(): $CompoundTagArgument;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse<S>(arg0: $StringReader, arg1: S): $CompoundTag;
        parse(arg0: $StringReader): $CompoundTag;
        get examples(): $Collection<string>;
    }
    export class $ResourceOrTagKeyArgument$TagResult<T> extends $Record implements $ResourceOrTagKeyArgument$Result<T> {
        or(arg0: $Predicate_<T>): $Predicate<T>;
        negate(): $Predicate<T>;
        and(arg0: $Predicate_<T>): $Predicate<T>;
    }
    /**
     * Values that may be interpreted as {@link $ResourceOrTagKeyArgument$TagResult}.
     */
    export type $ResourceOrTagKeyArgument$TagResult_<T> = { key?: $TagKey_<any>,  } | [key?: $TagKey_<any>, ];
    export class $ScoreHolderArgument$SelectorResult implements $ScoreHolderArgument$Result {
        getNames(source: $CommandSourceStack, objectives: $Supplier_<$Collection<$ScoreHolder>>): $Collection<$ScoreHolder>;
        constructor(selector: $EntitySelector);
    }
    export class $ResourceOrTagArgument$Info<T> implements $ArgumentTypeInfo<$ResourceOrTagArgument<T>, $ResourceOrTagArgument$Info$Template> {
        serializeToNetwork(template: $ResourceOrTagArgument$Info$Template, buffer: $FriendlyByteBuf): void;
        serializeToJson(template: $ResourceOrTagArgument$Info$Template, json: $JsonObject_): void;
        unpack(argument: $ResourceOrTagArgument<$ResourceOrTagArgument$Info$Template>): $ResourceOrTagArgument$Info$Template;
        deserializeFromNetwork(buffer: $FriendlyByteBuf): $ResourceOrTagArgument$Info$Template;
        constructor();
    }
    export class $NbtPathArgument implements $ArgumentType<$NbtPathArgument$NbtPath> {
        static nbtPath(): $NbtPathArgument;
        getExamples(): $Collection<string>;
        parse(reader: $StringReader): $NbtPathArgument$NbtPath;
        static getPath(context: $CommandContext<$CommandSourceStack>, name: string): $NbtPathArgument$NbtPath;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse<S>(arg0: $StringReader, arg1: S): $NbtPathArgument$NbtPath;
        static ERROR_DATA_TOO_DEEP: $SimpleCommandExceptionType;
        static ERROR_NOTHING_FOUND: $DynamicCommandExceptionType;
        static ERROR_INVALID_NODE: $SimpleCommandExceptionType;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $ResourceOrTagKeyArgument$Info<T> implements $ArgumentTypeInfo<$ResourceOrTagKeyArgument<T>, $ResourceOrTagKeyArgument$Info$Template> {
        serializeToNetwork(template: $ResourceOrTagKeyArgument$Info$Template, buffer: $FriendlyByteBuf): void;
        serializeToJson(template: $ResourceOrTagKeyArgument$Info$Template, json: $JsonObject_): void;
        unpack(argument: $ResourceOrTagKeyArgument<$ResourceOrTagKeyArgument$Info$Template>): $ResourceOrTagKeyArgument$Info$Template;
        deserializeFromNetwork(buffer: $FriendlyByteBuf): $ResourceOrTagKeyArgument$Info$Template;
        constructor();
    }
    export class $ResourceArgument<T> implements $ArgumentType<$Holder$Reference<T>> {
        static getConfiguredFeature(context: $CommandContext<$CommandSourceStack>, argument: string): $Holder$Reference<$ConfiguredFeature<never, never>>;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getSummonableEntityType(context: $CommandContext<$CommandSourceStack>, argument: string): $Holder$Reference<$EntityType<never>>;
        static getMobEffect(context: $CommandContext<$CommandSourceStack>, argument: string): $Holder$Reference<$MobEffect>;
        static getEnchantment(context: $CommandContext<$CommandSourceStack>, argument: string): $Holder$Reference<$Enchantment>;
        getExamples(): $Collection<string>;
        static getResource<T>(context: $CommandContext<$CommandSourceStack>, argument: string, registryKey: $ResourceKey_<$Registry<T>>): $Holder$Reference<T>;
        static getAttribute(context: $CommandContext<$CommandSourceStack>, argument: string): $Holder$Reference<$Attribute>;
        static resource<T>(context: $CommandBuildContext, registryKey: $ResourceKey_<$Registry<T>>): $ResourceArgument<T>;
        static getEntityType(context: $CommandContext<$CommandSourceStack>, argument: string): $Holder$Reference<$EntityType<never>>;
        static getStructure(context: $CommandContext<$CommandSourceStack>, argument: string): $Holder$Reference<$Structure>;
        parse<S>(arg0: $StringReader, arg1: S): $Holder$Reference<T>;
        parse(arg0: $StringReader): $Holder$Reference<T>;
        static ERROR_UNKNOWN_RESOURCE: $Dynamic2CommandExceptionType;
        static ERROR_INVALID_RESOURCE_TYPE: $Dynamic3CommandExceptionType;
        constructor(context: $CommandBuildContext, registryKey: $ResourceKey_<$Registry<$Holder$Reference<T>>>);
        get examples(): $Collection<string>;
    }
    export class $GameProfileArgument$SelectorResult implements $GameProfileArgument$Result {
        getNames(source: $CommandSourceStack): $Collection<$GameProfile>;
        constructor(selector: $EntitySelector);
    }
    export class $ResourceOrTagArgument$ResourceResult<T> extends $Record implements $ResourceOrTagArgument$Result<T> {
        or(arg0: $Predicate_<T>): $Predicate<T>;
        negate(): $Predicate<T>;
        and(arg0: $Predicate_<T>): $Predicate<T>;
    }
    /**
     * Values that may be interpreted as {@link $ResourceOrTagArgument$ResourceResult}.
     */
    export type $ResourceOrTagArgument$ResourceResult_<T> = { value?: $Holder$Reference<any>,  } | [value?: $Holder$Reference<any>, ];
    export class $ResourceArgument$Info<T> implements $ArgumentTypeInfo<$ResourceArgument<T>, $ResourceArgument$Info$Template> {
        serializeToNetwork(template: $ResourceArgument$Info$Template, buffer: $FriendlyByteBuf): void;
        serializeToJson(template: $ResourceArgument$Info$Template, json: $JsonObject_): void;
        unpack(argument: $ResourceArgument<$ResourceArgument$Info$Template>): $ResourceArgument$Info$Template;
        deserializeFromNetwork(buffer: $FriendlyByteBuf): $ResourceArgument$Info$Template;
        constructor();
    }
    export class $ResourceOrTagArgument<T> implements $ArgumentType<$ResourceOrTagArgument$Result<T>> {
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static resourceOrTag<T>(context: $CommandBuildContext, registryKey: $ResourceKey_<$Registry<T>>): $ResourceOrTagArgument<T>;
        static getResourceOrTag<T>(context: $CommandContext<$CommandSourceStack>, argument: string, registryKey: $ResourceKey_<$Registry<T>>): $ResourceOrTagArgument$Result<T>;
        getExamples(): $Collection<string>;
        parse(reader: $StringReader): $ResourceOrTagArgument$Result<$ResourceOrTagArgument$Result<T>>;
        parse<S>(arg0: $StringReader, arg1: S): $ResourceOrTagArgument$Result<T>;
        constructor(context: $CommandBuildContext, registryKey: $ResourceKey_<$Registry<$ResourceOrTagArgument$Result<T>>>);
        get examples(): $Collection<string>;
    }
    export class $RangeArgument$Ints implements $RangeArgument<$MinMaxBounds$Ints> {
        static getRange(context: $CommandContext<$CommandSourceStack>, name: string): $MinMaxBounds$Ints;
        getExamples(): $Collection<string>;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse<S>(arg0: $StringReader, arg1: S): $MinMaxBounds$Ints;
        parse(arg0: $StringReader): $MinMaxBounds$Ints;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $AngleArgument$SingleAngle {
        getAngle(source: $CommandSourceStack): number;
    }
    export class $StyleArgument implements $ArgumentType<$Style> {
        getExamples(): $Collection<string>;
        static style(context: $CommandBuildContext): $StyleArgument;
        static getStyle(context: $CommandContext<$CommandSourceStack>, name: string): $Style;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse<S>(arg0: $StringReader, arg1: S): $Style;
        parse(arg0: $StringReader): $Style;
        static ERROR_INVALID_JSON: $DynamicCommandExceptionType;
        get examples(): $Collection<string>;
    }
    export class $OperationArgument$SimpleOperation {
    }
    export interface $OperationArgument$SimpleOperation extends $OperationArgument$Operation {
    }
    /**
     * Values that may be interpreted as {@link $OperationArgument$SimpleOperation}.
     */
    export type $OperationArgument$SimpleOperation_ = (() => void);
    export class $ObjectiveCriteriaArgument implements $ArgumentType<$ObjectiveCriteria> {
        static getCriteria(context: $CommandContext<$CommandSourceStack>, name: string): $ObjectiveCriteria;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        getExamples(): $Collection<string>;
        getName<T>(type: $StatType_<T>, value: $Object): string;
        parse(reader: $StringReader): $ObjectiveCriteria;
        static criteria(): $ObjectiveCriteriaArgument;
        parse<S>(arg0: $StringReader, arg1: S): $ObjectiveCriteria;
        static ERROR_INVALID_VALUE: $DynamicCommandExceptionType;
        get examples(): $Collection<string>;
    }
    export class $HeightmapTypeArgument extends $StringRepresentableArgument<$Heightmap$Types> {
        static heightmap(): $HeightmapTypeArgument;
        static getHeightmap(context: $CommandContext<$CommandSourceStack>, argument: string): $Heightmap$Types;
    }
    export class $TemplateMirrorArgument extends $StringRepresentableArgument<$Mirror> {
        static templateMirror(): $StringRepresentableArgument<$Mirror>;
        static getMirror(context: $CommandContext<$CommandSourceStack>, name: string): $Mirror;
    }
    export class $ColorArgument implements $ArgumentType<$ChatFormatting> {
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        getExamples(): $Collection<string>;
        parse(reader: $StringReader): $ChatFormatting;
        static color(): $ColorArgument;
        static getColor(context: $CommandContext<$CommandSourceStack>, name: string): $ChatFormatting;
        parse<S>(arg0: $StringReader, arg1: S): $ChatFormatting;
        static ERROR_INVALID_VALUE: $DynamicCommandExceptionType;
        get examples(): $Collection<string>;
    }
}
