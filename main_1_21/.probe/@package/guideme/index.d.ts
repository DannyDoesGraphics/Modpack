import { $Codec } from "@package/com/mojang/serialization";
import { $Path_ } from "@package/java/nio/file";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ParsedGuidePage } from "@package/guideme/compiler";
import { $LytDocument } from "@package/guideme/document/block";
import { $Record, $Class } from "@package/java/lang";
import { $List, $List_, $Collection } from "@package/java/util";
import { $PageIndex } from "@package/guideme/indices";
import { $NavigationTree } from "@package/guideme/navigation";
import { $ExtensionCollection, $ExtensionPoint_, $Extension } from "@package/guideme/extensions";
export * as document from "@package/guideme/document";
export * as color from "@package/guideme/color";
export * as navigation from "@package/guideme/navigation";
export * as libs from "@package/guideme/libs";
export * as style from "@package/guideme/style";
export * as compiler from "@package/guideme/compiler";
export * as internal from "@package/guideme/internal";
export * as render from "@package/guideme/render";
export * as layout from "@package/guideme/layout";
export * as scene from "@package/guideme/scene";
export * as extensions from "@package/guideme/extensions";
export * as siteexport from "@package/guideme/siteexport";
export * as indices from "@package/guideme/indices";

declare module "@package/guideme" {
    export class $GuideItemSettings extends $Record {
        itemModel(): ($ResourceLocation) | undefined;
        tooltipLines(): $List<$Component>;
        displayName(): ($Component) | undefined;
        static CODEC: $Codec<$GuideItemSettings>;
        static DEFAULT: $GuideItemSettings;
        constructor(displayName: ($Component_) | undefined, tooltipLines: $List_<$Component_>, itemModel: ($ResourceLocation_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $GuideItemSettings}.
     */
    export type $GuideItemSettings_ = { tooltipLines?: $List_<$Component_>, itemModel?: ($ResourceLocation_) | undefined, displayName?: ($Component_) | undefined,  } | [tooltipLines?: $List_<$Component_>, itemModel?: ($ResourceLocation_) | undefined, displayName?: ($Component_) | undefined, ];
    export class $Guide {
        static builder(arg0: $ResourceLocation_): $GuideBuilder;
    }
    export interface $Guide extends $PageCollection {
        getStartPage(): $ResourceLocation;
        getDefaultNamespace(): string;
        getContentRootFolder(): string;
        getId(): $ResourceLocation;
        getExtensions(): $ExtensionCollection;
        get startPage(): $ResourceLocation;
        get defaultNamespace(): string;
        get contentRootFolder(): string;
        get id(): $ResourceLocation;
        get extensions(): $ExtensionCollection;
    }
    export class $PageCollection {
    }
    export interface $PageCollection {
        getPages(): $Collection<$ParsedGuidePage>;
        getPage(arg0: $ResourceLocation_): $GuidePage;
        getParsedPage(arg0: $ResourceLocation_): $ParsedGuidePage;
        getNavigationTree(): $NavigationTree;
        loadAsset(arg0: $ResourceLocation_): number[];
        pageExists(arg0: $ResourceLocation_): boolean;
        getIndex<T extends $PageIndex>(arg0: $Class<T>): T;
        get pages(): $Collection<$ParsedGuidePage>;
        get navigationTree(): $NavigationTree;
    }
    export class $GuidePageChange extends $Record {
        newPage(): $ParsedGuidePage;
        pageId(): $ResourceLocation;
        oldPage(): $ParsedGuidePage;
        language(): string;
        /**
         * @deprecated
         */
        constructor(arg0: $ResourceLocation_, arg1: $ParsedGuidePage, arg2: $ParsedGuidePage);
        constructor(language: string, pageId: $ResourceLocation_, oldPage: $ParsedGuidePage, newPage: $ParsedGuidePage);
    }
    /**
     * Values that may be interpreted as {@link $GuidePageChange}.
     */
    export type $GuidePageChange_ = { pageId?: $ResourceLocation_, language?: string, newPage?: $ParsedGuidePage, oldPage?: $ParsedGuidePage,  } | [pageId?: $ResourceLocation_, language?: string, newPage?: $ParsedGuidePage, oldPage?: $ParsedGuidePage, ];
    export class $GuidePage extends $Record {
        sourcePack(): string;
        id(): $ResourceLocation;
        document(): $LytDocument;
        constructor(sourcePack: string, id: $ResourceLocation_, document: $LytDocument);
    }
    /**
     * Values that may be interpreted as {@link $GuidePage}.
     */
    export type $GuidePage_ = { document?: $LytDocument, sourcePack?: string, id?: $ResourceLocation_,  } | [document?: $LytDocument, sourcePack?: string, id?: $ResourceLocation_, ];
    export class $PageAnchor extends $Record {
        pageId(): $ResourceLocation;
        static parse(arg0: string): $PageAnchor;
        anchor(): string;
        static page(arg0: $ResourceLocation_): $PageAnchor;
        constructor(pageId: $ResourceLocation_, anchor: string);
    }
    /**
     * Values that may be interpreted as {@link $PageAnchor}.
     */
    export type $PageAnchor_ = { pageId?: $ResourceLocation_, anchor?: string,  } | [pageId?: $ResourceLocation_, anchor?: string, ];
    export class $GuideBuilder {
        defaultNamespace(arg0: string): $GuideBuilder;
        defaultLanguage(arg0: string): $GuideBuilder;
        startPage(arg0: $ResourceLocation_): $GuideBuilder;
        watchDevelopmentSources(arg0: boolean): $GuideBuilder;
        disableDefaultExtensions(arg0: $ExtensionPoint_<never>): $GuideBuilder;
        disableDefaultExtensions(): $GuideBuilder;
        itemSettings(arg0: $GuideItemSettings_): $GuideBuilder;
        disableOpenHotkey(): $GuideBuilder;
        developmentSources(arg0: $Path_, arg1: string): $GuideBuilder;
        developmentSources(arg0: $Path_): $GuideBuilder;
        folder(arg0: string): $GuideBuilder;
        index<T extends $PageIndex>(arg0: $Class<T>, arg1: T): $GuideBuilder;
        index(arg0: $PageIndex): $GuideBuilder;
        register(arg0: boolean): $GuideBuilder;
        build(): $Guide;
        extension<T extends $Extension>(arg0: $ExtensionPoint_<T>, arg1: T): $GuideBuilder;
    }
}
