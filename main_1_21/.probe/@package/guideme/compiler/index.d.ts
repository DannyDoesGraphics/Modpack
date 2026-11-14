import { $MdAstParent, $MdAstRoot, $MdAstAnyContent } from "@package/guideme/libs/mdast/model";
import { $InputStream } from "@package/java/io";
import { $GuidePage, $PageCollection } from "@package/guideme";
import { $LytFlowParent_, $LytFlowContent } from "@package/guideme/document/flow";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $MdxJsxElementFields, $MdxJsxFlowElement, $MdxJsxTextElement } from "@package/guideme/libs/mdast/mdx/model";
import { $LytBlockContainer_, $LytBlock } from "@package/guideme/document/block";
import { $Record, $Object, $Class } from "@package/java/lang";
import { $List, $Map_, $Map, $Set, $Set_, $Collection_, $List_ } from "@package/java/util";
import { $PageIndex } from "@package/guideme/indices";
import { $UnistNode } from "@package/guideme/libs/unist";
import { $ExtensionCollection, $ExtensionPoint_, $Extension, $ExtensionPoint } from "@package/guideme/extensions";
export * as tags from "@package/guideme/compiler/tags";

declare module "@package/guideme/compiler" {
    export class $IndexingSink {
    }
    export interface $IndexingSink {
        appendBreak(): void;
        appendText(arg0: $UnistNode, arg1: string): void;
    }
    export class $PageCompiler$State<T> extends $Record {
        dataClass(): $Class<T>;
        name(): string;
        defaultValue(): T;
        constructor(name: string, dataClass: $Class<T>, defaultValue: T);
    }
    /**
     * Values that may be interpreted as {@link $PageCompiler$State}.
     */
    export type $PageCompiler$State_<T> = { dataClass?: $Class<any>, defaultValue?: any, name?: string,  } | [dataClass?: $Class<any>, defaultValue?: any, name?: string, ];
    export class $TagCompiler {
        static EXTENSION_POINT: $ExtensionPoint<$TagCompiler>;
    }
    export interface $TagCompiler extends $Extension {
        getTagNames(): $Set<string>;
        compileBlockContext(arg0: $PageCompiler, arg1: $LytBlockContainer_, arg2: $MdxJsxFlowElement): void;
        compileFlowContext(arg0: $PageCompiler, arg1: $LytFlowParent_, arg2: $MdxJsxTextElement): void;
        index(arg0: $IndexingContext, arg1: $MdxJsxElementFields, arg2: $IndexingSink): void;
        get tagNames(): $Set<string>;
    }
    /**
     * Values that may be interpreted as {@link $TagCompiler}.
     */
    export type $TagCompiler_ = (() => $Set_<string>);
    export class $FrontmatterNavigation extends $Record {
        iconComponents(): $Map<never, never>;
        iconItemId(): $ResourceLocation;
        parent(): $ResourceLocation;
        position(): number;
        title(): string;
        constructor(title: string, parent: $ResourceLocation_, position: number, iconItemId: $ResourceLocation_, iconComponents: $Map_<never, never>);
    }
    /**
     * Values that may be interpreted as {@link $FrontmatterNavigation}.
     */
    export type $FrontmatterNavigation_ = { iconComponents?: $Map_<never, never>, position?: number, title?: string, parent?: $ResourceLocation_, iconItemId?: $ResourceLocation_,  } | [iconComponents?: $Map_<never, never>, position?: number, title?: string, parent?: $ResourceLocation_, iconItemId?: $ResourceLocation_, ];
    export class $ParsedGuidePage {
        getSourcePack(): string;
        getFrontmatter(): $Frontmatter;
        getAstRoot(): $MdAstRoot;
        getId(): $ResourceLocation;
        getLanguage(): string;
        /**
         * @deprecated
         */
        constructor(arg0: string, arg1: $ResourceLocation_, arg2: string, arg3: $MdAstRoot, arg4: $Frontmatter_);
        constructor(arg0: string, arg1: $ResourceLocation_, arg2: string, arg3: $MdAstRoot, arg4: $Frontmatter_, arg5: string);
        get sourcePack(): string;
        get frontmatter(): $Frontmatter;
        get astRoot(): $MdAstRoot;
        get id(): $ResourceLocation;
        get language(): string;
    }
    export class $Frontmatter extends $Record {
        navigationEntry(): $FrontmatterNavigation;
        static parse(arg0: $ResourceLocation_, arg1: string): $Frontmatter;
        additionalProperties(): $Map<string, $Object>;
        constructor(navigationEntry: $FrontmatterNavigation_, additionalProperties: $Map_<string, $Object>);
    }
    /**
     * Values that may be interpreted as {@link $Frontmatter}.
     */
    export type $Frontmatter_ = { navigationEntry?: $FrontmatterNavigation_, additionalProperties?: $Map_<string, $Object>,  } | [navigationEntry?: $FrontmatterNavigation_, additionalProperties?: $Map_<string, $Object>, ];
    export class $IndexingContext {
    }
    export interface $IndexingContext {
        getPageId(): $ResourceLocation;
        getPageCollection(): $PageCollection;
        indexContent(arg0: $MdAstAnyContent, arg1: $IndexingSink): void;
        indexContent(arg0: $List_<$MdAstAnyContent>, arg1: $IndexingSink): void;
        loadAsset(arg0: $ResourceLocation_): number[];
        getIndex<T extends $PageIndex>(arg0: $Class<T>): T;
        getExtensions<T extends $Extension>(arg0: $ExtensionPoint_<T>): $List<T>;
        getExtensions(): $ExtensionCollection;
        get pageId(): $ResourceLocation;
        get pageCollection(): $PageCollection;
    }
    export class $PageCompiler {
        getCompilerState<T>(arg0: $PageCompiler$State_<T>): T;
        setCompilerState<T>(arg0: $PageCompiler$State_<T>, arg1: T): void;
        clearCompilerState<T>(arg0: $PageCompiler$State_<T>): void;
        resolveId(arg0: string): $ResourceLocation;
        createErrorBlock(arg0: string, arg1: $UnistNode): $LytBlock;
        compileBlockContext(arg0: $List_<$MdAstAnyContent>, arg1: $LytBlockContainer_): void;
        compileBlockContext(arg0: $MdAstParent<never>, arg1: $LytBlockContainer_): void;
        compileFlowContext(arg0: $Collection_<$MdAstAnyContent>, arg1: $LytFlowParent_): void;
        compileFlowContext(arg0: $MdAstParent<never>, arg1: $LytFlowParent_): void;
        getPageId(): $ResourceLocation;
        getPageCollection(): $PageCollection;
        createErrorFlowContent(arg0: string, arg1: $UnistNode): $LytFlowContent;
        loadAsset(arg0: $ResourceLocation_): number[];
        static compile(arg0: $PageCollection, arg1: $ExtensionCollection, arg2: $ParsedGuidePage): $GuidePage;
        static parse(arg0: string, arg1: string, arg2: $ResourceLocation_, arg3: $InputStream): $ParsedGuidePage;
        static parse(arg0: string, arg1: string, arg2: $ResourceLocation_, arg3: string): $ParsedGuidePage;
        /**
         * @deprecated
         */
        static parse(arg0: string, arg1: $ResourceLocation_, arg2: string): $ParsedGuidePage;
        /**
         * @deprecated
         */
        static parse(arg0: string, arg1: $ResourceLocation_, arg2: $InputStream): $ParsedGuidePage;
        getIndex<T extends $PageIndex>(arg0: $Class<T>): T;
        getExtensions(): $ExtensionCollection;
        getExtensions<T extends $Extension>(arg0: $ExtensionPoint_<T>): $List<T>;
        constructor(arg0: $PageCollection, arg1: $ExtensionCollection, arg2: string, arg3: $ResourceLocation_, arg4: string);
        get pageId(): $ResourceLocation;
        get pageCollection(): $PageCollection;
    }
}
