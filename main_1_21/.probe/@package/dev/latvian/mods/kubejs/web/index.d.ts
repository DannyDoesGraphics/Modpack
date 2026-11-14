import { $JsonElement_, $JsonObject_ } from "@package/com/google/gson";
import { $Supplier_ } from "@package/java/util/function";
import { $DynamicOps } from "@package/com/mojang/serialization";
import { $RegistryAccessContainer } from "@package/dev/latvian/mods/kubejs/util";
import { $WSSession } from "@package/dev/latvian/apps/tinyserver/ws";
import { $Tag_ } from "@package/net/minecraft/nbt";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $BlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $HTTPRequest } from "@package/dev/latvian/apps/tinyserver/http";
import { $DataComponentPatch } from "@package/net/minecraft/core/component";
import { $Runnable_, $Record } from "@package/java/lang";
import { $Set_, $Map_, $Map, $Set } from "@package/java/util";

declare module "@package/dev/latvian/mods/kubejs/web" {
    export class $KJSWSSession extends $WSSession<$KJSHTTPRequest> {
        onEvent(type: string, payload: $JsonElement_): void;
        info: $SessionInfo;
        constructor();
    }
    export class $KJSHTTPRequest extends $HTTPRequest {
        runInMainThread(task: $Runnable_): void;
        supplyInMainThread<T>(task: $Supplier_<T>): T;
        id(ns: string, path: string): $ResourceLocation;
        id(): $ResourceLocation;
        components(ops: $DynamicOps<$Tag_>): $DataComponentPatch;
        registries(): $RegistryAccessContainer;
        eventLoop: $BlockableEventLoop<never>;
        constructor(eventLoop: $BlockableEventLoop<never>);
    }
    export class $RelativeURL extends $Record {
        fullString(): string;
        query(): $Map<string, string>;
        path(): string;
        constructor(path: string, query: $Map_<string, string>);
        constructor(path: string);
    }
    /**
     * Values that may be interpreted as {@link $RelativeURL}.
     */
    export type $RelativeURL_ = { query?: $Map_<string, string>, path?: string,  } | [query?: $Map_<string, string>, path?: string, ];
    export class $SessionInfo extends $Record {
        source(): string;
        tags(): $Set<string>;
        static fromJson(info: $SessionInfo_, json: $JsonObject_): $SessionInfo;
        static NONE: $SessionInfo;
        constructor(source: string, tags: $Set_<string>);
    }
    /**
     * Values that may be interpreted as {@link $SessionInfo}.
     */
    export type $SessionInfo_ = { source?: string, tags?: $Set_<string>,  } | [source?: string, tags?: $Set_<string>, ];
}
