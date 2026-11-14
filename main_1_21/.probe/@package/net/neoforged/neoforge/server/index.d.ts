import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $Map_ } from "@package/java/util";
export * as command from "@package/net/neoforged/neoforge/server/command";
export * as timings from "@package/net/neoforged/neoforge/server/timings";
export * as permission from "@package/net/neoforged/neoforge/server/permission";
export * as loading from "@package/net/neoforged/neoforge/server/loading";
export * as console from "@package/net/neoforged/neoforge/server/console";

declare module "@package/net/neoforged/neoforge/server" {
    /**
     * Loads the built-in language files, and handles loading the default language ({@value Language#DEFAULT}) on the
     * dedicated server.
     */
    export class $LanguageHook {
        static captureLanguageMap(table: $Map_<string, string>, componentTable: $Map_<string, $Component_>): void;
        static loadBuiltinLanguages(): void;
        constructor();
    }
    export class $ServerLifecycleHooks {
        static handleServerAboutToStart(server: $MinecraftServer): void;
        static handleServerStarting(server: $MinecraftServer): void;
        static handleServerStarted(server: $MinecraftServer): void;
        static handleServerStopping(server: $MinecraftServer): void;
        static expectServerStopped(): void;
        static handleServerStopped(server: $MinecraftServer): void;
        static getCurrentServer(): $MinecraftServer;
        static handleExit(retVal: number): void;
        constructor();
        static get currentServer(): $MinecraftServer;
    }
}
