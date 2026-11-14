import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $CommandDispatcher } from "@package/com/mojang/brigadier";

declare module "@package/net/neoforged/neoforge/client/command" {
    export class $ClientConfigCommand$ShowFile {
        constructor();
    }
    export class $ClientConfigCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
}
