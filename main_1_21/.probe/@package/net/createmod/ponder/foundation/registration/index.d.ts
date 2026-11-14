import { $BiConsumer_ } from "@package/java/util/function";
import { $LangRegistryAccess } from "@package/net/createmod/ponder/api/registration";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Map } from "@package/java/util";
import { $Object } from "@package/java/lang";
import { $Couple } from "@package/net/createmod/catnip/data";

declare module "@package/net/createmod/ponder/foundation/registration" {
    export class $PonderLocalization implements $LangRegistryAccess {
        registerTag(arg0: $ResourceLocation_, arg1: string, arg2: string): void;
        provideLang(arg0: string, arg1: $BiConsumer_<string, string>): void;
        clearShared(): void;
        getShared(arg0: $ResourceLocation_, ...arg1: $Object[]): string;
        getShared(arg0: $ResourceLocation_): string;
        getTagDescription(arg0: $ResourceLocation_): string;
        getSpecific(arg0: $ResourceLocation_, arg1: string, ...arg2: $Object[]): string;
        getSpecific(arg0: $ResourceLocation_, arg1: string): string;
        registerShared(arg0: $ResourceLocation_, arg1: string): void;
        registerSpecific(arg0: $ResourceLocation_, arg1: string, arg2: string): void;
        generateSceneLang(): void;
        clearAll(): void;
        getTagName(arg0: $ResourceLocation_): string;
        shared: $Map<$ResourceLocation, string>;
        static UI_PREFIX: string;
        tag: $Map<$ResourceLocation, $Couple<string>>;
        static LANG_PREFIX: string;
        specific: $Map<$ResourceLocation, $Map<string, string>>;
        constructor();
    }
}
