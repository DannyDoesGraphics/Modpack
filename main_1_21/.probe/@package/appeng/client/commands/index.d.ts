import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $LiteralArgumentBuilder } from "@package/com/mojang/brigadier/builder";
import { $List } from "@package/java/util";

declare module "@package/appeng/client/commands" {
    export class $ClientCommands {
        static DEBUG_COMMANDS: $List<$ClientCommands$CommandBuilder>;
    }
    export class $ClientCommands$CommandBuilder {
    }
    export interface $ClientCommands$CommandBuilder {
        build(arg0: $LiteralArgumentBuilder<$CommandSourceStack>): void;
    }
    /**
     * Values that may be interpreted as {@link $ClientCommands$CommandBuilder}.
     */
    export type $ClientCommands$CommandBuilder_ = ((arg0: $LiteralArgumentBuilder<$CommandSourceStack>) => void);
}
