import { $InputStream } from "@package/java/io";
import { $BiConsumer_ } from "@package/java/util/function";
import { $Component, $FormattedText } from "@package/net/minecraft/network/chat";
import { $List_, $Map, $List } from "@package/java/util";
import { $FormattedCharSequence } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/locale" {
    export class $Language {
        /**
         * Return the StringTranslate singleton instance
         */
        static getInstance(): $Language;
        getOrDefault(id: string): string;
        getOrDefault(key: string, defaultValue: string): string;
        has(id: string): boolean;
        getComponent(arg0: string): $Component;
        static inject(instance: $Language): void;
        static loadFromJson(arg0: $InputStream, arg1: $BiConsumer_<string, string>, arg2: $BiConsumer_<string, $Component>): void;
        static loadFromJson(stream: $InputStream, output: $BiConsumer_<string, string>): void;
        isDefaultRightToLeft(): boolean;
        getVisualOrder(text: $List_<$FormattedText>): $List<$FormattedCharSequence>;
        getVisualOrder(text: $FormattedText): $FormattedCharSequence;
        getLanguageData(): $Map<string, string>;
        static DEFAULT: string;
        constructor();
        static get instance(): $Language;
        get defaultRightToLeft(): boolean;
        get languageData(): $Map<string, string>;
    }
}
