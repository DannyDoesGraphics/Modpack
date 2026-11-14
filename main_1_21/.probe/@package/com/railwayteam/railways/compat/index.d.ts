import { $Supplier, $Supplier_ } from "@package/java/util/function";
import { $Runnable, $Enum } from "@package/java/lang";
export * as journeymap from "@package/com/railwayteam/railways/compat/journeymap";
export * as create from "@package/com/railwayteam/railways/compat/create";
export * as neoforge from "@package/com/railwayteam/railways/compat/neoforge";
export * as tweakeroo from "@package/com/railwayteam/railways/compat/tweakeroo";
export * as tracks from "@package/com/railwayteam/railways/compat/tracks";

declare module "@package/com/railwayteam/railways/compat" {
    export class $Mods extends $Enum<$Mods> {
        static values(): $Mods[];
        static valueOf(arg0: string): $Mods;
        static isModLoaded(arg0: string): boolean;
        static isModLoaded(arg0: string, arg1: string): boolean;
        executeIfInstalled(arg0: $Supplier_<$Runnable>): void;
        asId(): string;
        asFabricId(): string;
        runIfInstalled<T>(arg0: $Supplier_<$Supplier<T>>): (T) | undefined;
        assertForDataGen(): void;
        static CREATE_DD: $Mods;
        static SODIUM: $Mods;
        static NATURES_SPIRIT: $Mods;
        fabricId: string;
        static MALILIB: $Mods;
        static BIOMESOPLENTY: $Mods;
        static VOICECHAT: $Mods;
        static QUARK: $Mods;
        static TWEAKEROO: $Mods;
        isLoaded: boolean;
        static HEXCASTING: $Mods;
        static EXTENDEDFLYWHEELS: $Mods;
        static TFC: $Mods;
        static BYG: $Mods;
        static TWILIGHTFOREST: $Mods;
        static BLUE_SKIES: $Mods;
        static FIGURA: $Mods;
        requiredForDataGen: boolean;
    }
    /**
     * Values that may be interpreted as {@link $Mods}.
     */
    export type $Mods_ = "biomesoplenty" | "blue_skies" | "byg" | "hexcasting" | "twilightforest" | "sodium" | "voicechat" | "figura" | "natures_spirit" | "create_dd" | "quark" | "tfc" | "malilib" | "tweakeroo" | "extendedflywheels";
}
