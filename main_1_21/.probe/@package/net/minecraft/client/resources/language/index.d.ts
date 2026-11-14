import { $Consumer_ } from "@package/java/util/function";
import { $Codec } from "@package/com/mojang/serialization";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Component, $FormattedText } from "@package/net/minecraft/network/chat";
import { $CompletableFuture, $Executor_ } from "@package/java/util/concurrent";
import { $Language } from "@package/net/minecraft/locale";
import { $ResourceManager, $ResourceManagerReloadListener, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $SortedMap, $List_, $Locale, $Map } from "@package/java/util";
import { $Object, $Record } from "@package/java/lang";
import { $FormattedCharSequence } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/client/resources/language" {
    export class $I18n {
        /**
         * Translates the given string and then formats it. Equivalent to `String.format(translate(key), parameters)`.
         */
        static get(translateKey: string, ...parameters: $Object[]): string;
        static exists(key: string): boolean;
    }
    export class $LanguageManager implements $ResourceManagerReloadListener {
        onResourceManagerReload(resourceManager: $ResourceManager): void;
        getLanguages(): $SortedMap<string, $LanguageInfo>;
        getSelected(): string;
        getLanguage(code: string): $LanguageInfo;
        setSelected(selected: string): void;
        getJavaLocale(): $Locale;
        reload(preparationBarrier: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        getName(): string;
        constructor(currentCode: string, reloadFallback: $Consumer_<$ClientLanguage>);
        get languages(): $SortedMap<string, $LanguageInfo>;
        get javaLocale(): $Locale;
        get name(): string;
    }
    export class $ClientLanguage extends $Language {
        static loadFrom(resourceManager: $ResourceManager, filenames: $List_<string>, defaultRightToLeft: boolean): $ClientLanguage;
        storage: $Map<string, string>;
        static DEFAULT: string;
    }
    export class $FormattedBidiReorder {
        static reorder(text: $FormattedText, defaultRightToLeft: boolean): $FormattedCharSequence;
        constructor();
    }
    export class $LanguageInfo extends $Record {
        toComponent(): $Component;
        bidirectional(): boolean;
        name(): string;
        region(): string;
        static CODEC: $Codec<$LanguageInfo>;
        constructor(arg0: string, arg1: string, arg2: boolean);
    }
    /**
     * Values that may be interpreted as {@link $LanguageInfo}.
     */
    export type $LanguageInfo_ = { bidirectional?: boolean, region?: string, name?: string,  } | [bidirectional?: boolean, region?: string, name?: string, ];
}
