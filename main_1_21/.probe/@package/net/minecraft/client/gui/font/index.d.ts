import { $IntSet } from "@package/it/unimi/dsi/fastutil/ints";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $Codec } from "@package/com/mojang/serialization";
import { $GlyphProviderDefinition$Conditional_ } from "@package/net/minecraft/client/gui/font/providers";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $BakedGlyph } from "@package/net/minecraft/client/gui/font/glyphs";
import { $Minecraft, $Options } from "@package/net/minecraft/client";
import { $ResourceManager, $PreparableReloadListener, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $Map_, $Set_, $List_ } from "@package/java/util";
import { $StringRepresentable, $DependencySorter$Entry } from "@package/net/minecraft/util";
import { $SheetGlyphInfo, $GlyphProvider, $GlyphInfo, $GlyphProvider_, $GlyphProvider$Conditional_ } from "@package/com/mojang/blaze3d/font";
import { $Consumer, $IntFunction_, $Supplier_, $Consumer_, $Predicate_, $Supplier } from "@package/java/util/function";
import { $Path_ } from "@package/java/nio/file";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Dumpable, $AbstractTexture, $TextureManager } from "@package/net/minecraft/client/renderer/texture";
import { $Enum, $Record, $AutoCloseable } from "@package/java/lang";
import { $Font, $Font$DisplayMode_ } from "@package/net/minecraft/client/gui";
export * as providers from "@package/net/minecraft/client/gui/font/providers";
export * as glyphs from "@package/net/minecraft/client/gui/font/glyphs";

declare module "@package/net/minecraft/client/gui/font" {
    export class $FontOption extends $Enum<$FontOption> implements $StringRepresentable {
        static values(): $FontOption[];
        static valueOf(arg0: string): $FontOption;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$FontOption>;
        static UNIFORM: $FontOption;
        static JAPANESE_VARIANTS: $FontOption;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $FontOption}.
     */
    export type $FontOption_ = "uniform" | "jp";
    export class $FontTexture extends $AbstractTexture implements $Dumpable {
        add(glyphInfo: $SheetGlyphInfo): $BakedGlyph;
        dumpContents(resourceLocation: $ResourceLocation_, path: $Path_): void;
        static NOT_ASSIGNED: number;
        constructor(renderTypes: $GlyphRenderTypes_, colored: boolean);
    }
    export class $FontSet$GlyphInfoFilter extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $FontSet$GlyphInfoFilter}.
     */
    export type $FontSet$GlyphInfoFilter_ = { glyphInfoNotFishy?: $GlyphInfo, glyphInfo?: $GlyphInfo,  } | [glyphInfoNotFishy?: $GlyphInfo, glyphInfo?: $GlyphInfo, ];
    export class $CodepointMap$Output<T> {
    }
    export interface $CodepointMap$Output<T> {
        accept(index: number, object: T): void;
    }
    /**
     * Values that may be interpreted as {@link $CodepointMap$Output}.
     */
    export type $CodepointMap$Output_<T> = ((arg0: number, arg1: T) => void);
    export class $FontTexture$Node {
    }
    export class $TextFieldHelper$CursorStep extends $Enum<$TextFieldHelper$CursorStep> {
        static values(): $TextFieldHelper$CursorStep[];
        static valueOf(arg0: string): $TextFieldHelper$CursorStep;
        static WORD: $TextFieldHelper$CursorStep;
        static CHARACTER: $TextFieldHelper$CursorStep;
    }
    /**
     * Values that may be interpreted as {@link $TextFieldHelper$CursorStep}.
     */
    export type $TextFieldHelper$CursorStep_ = "character" | "word";
    export class $CodepointMap<T> {
        remove(index: number): T;
        get(index: number): T;
        put(index: number, value: T): T;
        clear(): void;
        forEach(output: $CodepointMap$Output_<T>): void;
        computeIfAbsent(index: number, valueIfAbsentGetter: $IntFunction_<T>): T;
        keySet(): $IntSet;
        constructor(blockConstructor: $IntFunction_<T[]>, blockMapConstructor: $IntFunction_<T[][]>);
    }
    export class $FontOption$Filter {
        apply(options: $Set_<$FontOption_>): boolean;
        merge(filter: $FontOption$Filter): $FontOption$Filter;
        static CODEC: $Codec<$FontOption$Filter>;
        static ALWAYS_PASS: $FontOption$Filter;
        constructor(values: $Map_<$FontOption_, boolean>);
    }
    export class $FontManager$UnresolvedBuilderBundle extends $Record implements $DependencySorter$Entry<$ResourceLocation> {
    }
    /**
     * Values that may be interpreted as {@link $FontManager$UnresolvedBuilderBundle}.
     */
    export type $FontManager$UnresolvedBuilderBundle_ = { builders?: $List_<$FontManager$BuilderResult_>, dependencies?: $Set_<$ResourceLocation_>, fontId?: $ResourceLocation_,  } | [builders?: $List_<$FontManager$BuilderResult_>, dependencies?: $Set_<$ResourceLocation_>, fontId?: $ResourceLocation_, ];
    export class $FontManager$FontDefinitionFile extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $FontManager$FontDefinitionFile}.
     */
    export type $FontManager$FontDefinitionFile_ = { providers?: $List_<$GlyphProviderDefinition$Conditional_>,  } | [providers?: $List_<$GlyphProviderDefinition$Conditional_>, ];
    export class $GlyphRenderTypes extends $Record {
        normal(): $RenderType;
        select(displayMode: $Font$DisplayMode_): $RenderType;
        polygonOffset(): $RenderType;
        static createForColorTexture(id: $ResourceLocation_): $GlyphRenderTypes;
        static createForIntensityTexture(id: $ResourceLocation_): $GlyphRenderTypes;
        seeThrough(): $RenderType;
        constructor(arg0: $RenderType, arg1: $RenderType, arg2: $RenderType);
    }
    /**
     * Values that may be interpreted as {@link $GlyphRenderTypes}.
     */
    export type $GlyphRenderTypes_ = { seeThrough?: $RenderType, polygonOffset?: $RenderType, normal?: $RenderType,  } | [seeThrough?: $RenderType, polygonOffset?: $RenderType, normal?: $RenderType, ];
    export class $FontManager implements $PreparableReloadListener, $AutoCloseable {
        close(): void;
        reload(preparationBarrier: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        createFont(): $Font;
        createFontFilterFishy(): $Font;
        updateOptions(options: $Options): void;
        getName(): string;
        static MISSING_FONT: $ResourceLocation;
        constructor(textureManager: $TextureManager);
        get name(): string;
    }
    export class $FontManager$Preparation extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $FontManager$Preparation}.
     */
    export type $FontManager$Preparation_ = { fontSets?: $Map_<$ResourceLocation_, $List_<$GlyphProvider$Conditional_>>, allProviders?: $List_<$GlyphProvider_>,  } | [fontSets?: $Map_<$ResourceLocation_, $List_<$GlyphProvider$Conditional_>>, allProviders?: $List_<$GlyphProvider_>, ];
    export class $FontSet implements $AutoCloseable {
        getGlyphInfo(character: number, filterFishyGlyphs: boolean): $GlyphInfo;
        getGlyph(character: number): $BakedGlyph;
        name(): $ResourceLocation;
        close(): void;
        reload(options: $Set_<$FontOption_>): void;
        reload(allProviders: $List_<$GlyphProvider$Conditional_>, options: $Set_<$FontOption_>): void;
        whiteGlyph(): $BakedGlyph;
        getRandomGlyph(glyph: $GlyphInfo): $BakedGlyph;
        constructor(textureManager: $TextureManager, name: $ResourceLocation_);
    }
    export class $TextFieldHelper {
        static createClipboardGetter(minecraft: $Minecraft): $Supplier<string>;
        static createClipboardSetter(minecraft: $Minecraft): $Consumer<string>;
        removeFromCursor(direction: number, step: $TextFieldHelper$CursorStep_): void;
        moveBy(direction: number, keepSelection: boolean, cursorStep: $TextFieldHelper$CursorStep_): void;
        setCursorToStart(): void;
        setCursorToStart(keepSelection: boolean): void;
        static setClipboardContents(text: $Minecraft, arg1: string): void;
        static getClipboardContents(minecraft: $Minecraft): string;
        setCursorToEnd(keepSelection: boolean): void;
        setCursorToEnd(): void;
        moveByWords(direction: number): void;
        moveByWords(direction: number, keepSelection: boolean): void;
        removeCharsFromCursor(direction: number): void;
        moveByChars(direction: number, keepSelection: boolean): void;
        moveByChars(direction: number): void;
        isSelecting(): boolean;
        setSelectionRange(selectionStart: number, selectionEnd: number): void;
        getSelectionPos(): number;
        cut(): void;
        selectAll(): void;
        paste(): void;
        setCursorPos(direction: number, keepSelection: boolean): void;
        setCursorPos(direction: number): void;
        setSelectionPos(direction: number): void;
        getCursorPos(): number;
        removeWordsFromCursor(direction: number): void;
        copy(): void;
        keyPressed(key: number): boolean;
        insertText(text: string): void;
        charTyped(character: string): boolean;
        constructor(getMessage: $Supplier_<string>, setMessage: $Consumer_<string>, getClipboard: $Supplier_<string>, setClipboard: $Consumer_<string>, stringValidator: $Predicate_<string>);
        get selecting(): boolean;
    }
    export class $AllMissingGlyphProvider implements $GlyphProvider {
        getSupportedGlyphs(): $IntSet;
        getGlyph(arg0: number): $GlyphInfo;
        close(): void;
        constructor();
        get supportedGlyphs(): $IntSet;
    }
    export class $FontManager$BuilderId extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $FontManager$BuilderId}.
     */
    export type $FontManager$BuilderId_ = { pack?: string, index?: number, fontId?: $ResourceLocation_,  } | [pack?: string, index?: number, fontId?: $ResourceLocation_, ];
    export class $FontManager$BuilderResult extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $FontManager$BuilderResult}.
     */
    export type $FontManager$BuilderResult_ = { result?: $Either<$CompletableFuture<($GlyphProvider_) | undefined>, $ResourceLocation_>, filter?: $FontOption$Filter, id?: $FontManager$BuilderId_,  } | [result?: $Either<$CompletableFuture<($GlyphProvider_) | undefined>, $ResourceLocation_>, filter?: $FontOption$Filter, id?: $FontManager$BuilderId_, ];
}
