import { $ItemLike, $ItemLike_ } from "@package/net/minecraft/world/level";
import { $Consumer_, $BiConsumer_, $Predicate_, $Function_ } from "@package/java/util/function";
import { $Item_ } from "@package/net/minecraft/world/item";
import { $PonderStoryBoard_, $PonderStoryBoard } from "@package/net/createmod/ponder/api/scene";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Iterable_, $Enum, $Record, $Object, $Class } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $PonderLevel } from "@package/net/createmod/ponder/api/level";

declare module "@package/net/createmod/ponder/api/registration" {
    export class $MultiSceneBuilder {
    }
    export interface $MultiSceneBuilder {
        addStoryBoard(arg0: string, arg1: $PonderStoryBoard_, arg2: $Consumer_<$StoryBoardEntry>): $MultiSceneBuilder;
        addStoryBoard(arg0: string, arg1: $PonderStoryBoard_, ...arg2: $ResourceLocation_[]): $MultiSceneBuilder;
        addStoryBoard(arg0: string, arg1: $PonderStoryBoard_): $MultiSceneBuilder;
        addStoryBoard(arg0: $ResourceLocation_, arg1: $PonderStoryBoard_, arg2: $Consumer_<$StoryBoardEntry>): $MultiSceneBuilder;
        addStoryBoard(arg0: $ResourceLocation_, arg1: $PonderStoryBoard_, ...arg2: $ResourceLocation_[]): $MultiSceneBuilder;
        addStoryBoard(arg0: $ResourceLocation_, arg1: $PonderStoryBoard_): $MultiSceneBuilder;
    }
    export class $IndexExclusionHelper {
    }
    export interface $IndexExclusionHelper {
        excludeItemVariants(arg0: $Class<$Item_>, arg1: $Item_): $IndexExclusionHelper;
        exclude(arg0: $Predicate_<$ItemLike>): $IndexExclusionHelper;
        exclude(arg0: $ItemLike_): $IndexExclusionHelper;
        excludeBlockVariants(arg0: $Class<$Block_>, arg1: $Block_): $IndexExclusionHelper;
    }
    export class $StoryBoardEntry {
    }
    export interface $StoryBoardEntry {
        highlightTag(arg0: $ResourceLocation_): $StoryBoardEntry;
        highlightAllTags(): $StoryBoardEntry;
        orderBefore(arg0: string): $StoryBoardEntry;
        orderBefore(arg0: string, arg1: string): $StoryBoardEntry;
        orderAfter(arg0: string, arg1: string): $StoryBoardEntry;
        orderAfter(arg0: string): $StoryBoardEntry;
        highlightTags(...arg0: $ResourceLocation_[]): $StoryBoardEntry;
        getSchematicLocation(): $ResourceLocation;
        getOrderingEntries(): $List<$StoryBoardEntry$SceneOrderingEntry>;
        getBoard(): $PonderStoryBoard;
        getNamespace(): string;
        getComponent(): $ResourceLocation;
        getTags(): $List<$ResourceLocation>;
        get schematicLocation(): $ResourceLocation;
        get orderingEntries(): $List<$StoryBoardEntry$SceneOrderingEntry>;
        get board(): $PonderStoryBoard;
        get namespace(): string;
        get component(): $ResourceLocation;
        get tags(): $List<$ResourceLocation>;
    }
    export class $MultiTagBuilder$Component {
    }
    export interface $MultiTagBuilder$Component {
        add(arg0: $ResourceLocation_): $MultiTagBuilder$Component;
    }
    /**
     * Values that may be interpreted as {@link $MultiTagBuilder$Component}.
     */
    export type $MultiTagBuilder$Component_ = ((arg0: $ResourceLocation) => $MultiTagBuilder$Component);
    export class $PonderSceneRegistrationHelper<T> {
    }
    export interface $PonderSceneRegistrationHelper<T> {
        asLocation(arg0: string): $ResourceLocation;
        withKeyFunction<S>(arg0: $Function_<S, T>): $PonderSceneRegistrationHelper<S>;
        forComponents(...arg0: T[]): $MultiSceneBuilder;
        forComponents(arg0: $Iterable_<T>): $MultiSceneBuilder;
        addStoryBoard(arg0: T, arg1: $ResourceLocation_, arg2: $PonderStoryBoard_, ...arg3: $ResourceLocation_[]): $StoryBoardEntry;
        addStoryBoard(arg0: T, arg1: string, arg2: $PonderStoryBoard_, ...arg3: $ResourceLocation_[]): $StoryBoardEntry;
    }
    export class $MultiTagBuilder$Tag<T> {
    }
    export interface $MultiTagBuilder$Tag<T> {
        add(arg0: T): $MultiTagBuilder$Tag<T>;
    }
    /**
     * Values that may be interpreted as {@link $MultiTagBuilder$Tag}.
     */
    export type $MultiTagBuilder$Tag_<T> = ((arg0: T) => $MultiTagBuilder$Tag<T>);
    export class $SharedTextRegistrationHelper {
    }
    export interface $SharedTextRegistrationHelper {
        registerSharedText(arg0: string, arg1: string): void;
    }
    /**
     * Values that may be interpreted as {@link $SharedTextRegistrationHelper}.
     */
    export type $SharedTextRegistrationHelper_ = ((arg0: string, arg1: string) => void);
    export class $StoryBoardEntry$SceneOrderingType extends $Enum<$StoryBoardEntry$SceneOrderingType> {
        static values(): $StoryBoardEntry$SceneOrderingType[];
        static valueOf(arg0: string): $StoryBoardEntry$SceneOrderingType;
        static BEFORE: $StoryBoardEntry$SceneOrderingType;
        static AFTER: $StoryBoardEntry$SceneOrderingType;
    }
    /**
     * Values that may be interpreted as {@link $StoryBoardEntry$SceneOrderingType}.
     */
    export type $StoryBoardEntry$SceneOrderingType_ = "before" | "after";
    export class $StoryBoardEntry$SceneOrderingEntry extends $Record {
        sceneId(): $ResourceLocation;
        type(): $StoryBoardEntry$SceneOrderingType;
        static before(arg0: string, arg1: string): $StoryBoardEntry$SceneOrderingEntry;
        static after(arg0: string, arg1: string): $StoryBoardEntry$SceneOrderingEntry;
        constructor(type: $StoryBoardEntry$SceneOrderingType_, sceneId: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $StoryBoardEntry$SceneOrderingEntry}.
     */
    export type $StoryBoardEntry$SceneOrderingEntry_ = { sceneId?: $ResourceLocation_, type?: $StoryBoardEntry$SceneOrderingType_,  } | [sceneId?: $ResourceLocation_, type?: $StoryBoardEntry$SceneOrderingType_, ];
    export class $PonderTagRegistrationHelper<T> {
    }
    export interface $PonderTagRegistrationHelper<T> {
        registerTag(arg0: string): $TagBuilder;
        registerTag(arg0: $ResourceLocation_): $TagBuilder;
        addToTag(...arg0: $ResourceLocation_[]): $MultiTagBuilder$Tag<T>;
        addToTag(arg0: $ResourceLocation_): $MultiTagBuilder$Tag<T>;
        withKeyFunction<S>(arg0: $Function_<S, T>): $PonderTagRegistrationHelper<S>;
        addTagToComponent(arg0: T, arg1: $ResourceLocation_): void;
        addToComponent(arg0: T): $MultiTagBuilder$Component;
        addToComponent(...arg0: T[]): $MultiTagBuilder$Component;
    }
    export class $TagBuilder {
    }
    export interface $TagBuilder {
        idAsIcon(): $TagBuilder;
        addToIndex(): $TagBuilder;
        register(): void;
        description(arg0: string): $TagBuilder;
        item(arg0: $ItemLike_, arg1: boolean, arg2: boolean): $TagBuilder;
        item(arg0: $ItemLike_): $TagBuilder;
        icon(arg0: string): $TagBuilder;
        icon(arg0: $ResourceLocation_): $TagBuilder;
        title(arg0: string): $TagBuilder;
    }
    export class $PonderPlugin {
    }
    export interface $PonderPlugin {
        registerScenes(arg0: $PonderSceneRegistrationHelper<$ResourceLocation_>): void;
        registerTags(arg0: $PonderTagRegistrationHelper<$ResourceLocation_>): void;
        registerSharedText(arg0: $SharedTextRegistrationHelper_): void;
        onPonderLevelRestore(arg0: $PonderLevel): void;
        indexExclusions(arg0: $IndexExclusionHelper): void;
        getModId(): string;
        get modId(): string;
    }
    /**
     * Values that may be interpreted as {@link $PonderPlugin}.
     */
    export type $PonderPlugin_ = (() => string);
    export class $LangRegistryAccess {
    }
    export interface $LangRegistryAccess {
        provideLang(arg0: string, arg1: $BiConsumer_<string, string>): void;
        getShared(arg0: $ResourceLocation_, ...arg1: $Object[]): string;
        getShared(arg0: $ResourceLocation_): string;
        getTagDescription(arg0: $ResourceLocation_): string;
        getSpecific(arg0: $ResourceLocation_, arg1: string): string;
        getSpecific(arg0: $ResourceLocation_, arg1: string, ...arg2: $Object[]): string;
        getTagName(arg0: $ResourceLocation_): string;
    }
}
