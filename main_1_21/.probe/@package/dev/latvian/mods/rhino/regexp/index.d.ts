import { $Object } from "@package/java/lang";
import { $Scriptable } from "@package/dev/latvian/mods/rhino";

declare module "@package/dev/latvian/mods/rhino/regexp" {
    export class $RegExp {
        js_split(arg1: $Scriptable, arg2: string, arg3: $Object[]): $Object;
        isRegExp(arg0: $Scriptable): boolean;
        wrapRegExp(arg1: $Scriptable, arg2: $Object): $Scriptable;
        compileRegExp(arg1: string, arg2: string): $Object;
        find_split(arg1: $Scriptable, arg2: string, arg3: string, arg4: $Scriptable, arg5: number[], arg6: number[], arg7: boolean[], arg8: string[][]): number;
        action(arg1: $Scriptable, arg2: $Scriptable, arg3: $Object[], arg4: number): $Object;
        static RA_MATCH: number;
        static RA_REPLACE: number;
        static RA_SEARCH: number;
        constructor();
    }
}
