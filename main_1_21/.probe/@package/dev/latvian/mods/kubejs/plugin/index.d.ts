import { $Event } from "@package/net/neoforged/bus/api";
import { $Class } from "@package/java/lang";
import { $ScriptType_, $ScriptType } from "@package/dev/latvian/mods/kubejs/script";
export * as builtin from "@package/dev/latvian/mods/kubejs/plugin/builtin";

declare module "@package/dev/latvian/mods/kubejs/plugin" {
    export class $ClassFilter {
        isAllowed(s: string): boolean;
        allow(s: string): void;
        allow(c: $Class<never>): void;
        deny(c: $Class<never>): void;
        deny(s: string): void;
        scriptType: $ScriptType;
        constructor(scriptType: $ScriptType_);
    }
    export class $KubeJSPluginEvent extends $Event {
        constructor();
    }
}
