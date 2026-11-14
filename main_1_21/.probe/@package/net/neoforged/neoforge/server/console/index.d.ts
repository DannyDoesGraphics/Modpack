import { $DedicatedServer } from "@package/net/minecraft/server/dedicated";
import { $Completer } from "@package/org/jline/reader";

declare module "@package/net/neoforged/neoforge/server/console" {
    export class $ConsoleCommandCompleter implements $Completer {
    }
    export class $TerminalHandler {
        static handleCommands(server: $DedicatedServer): boolean;
    }
}
