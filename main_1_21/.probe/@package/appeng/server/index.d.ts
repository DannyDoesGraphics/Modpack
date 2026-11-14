import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $CommandDispatcher } from "@package/com/mojang/brigadier";
import { $LiteralArgumentBuilder } from "@package/com/mojang/brigadier/builder";
import { $Enum } from "@package/java/lang";
import { $CommandContext } from "@package/com/mojang/brigadier/context";
export * as testworld from "@package/appeng/server/testworld";
export * as testplots from "@package/appeng/server/testplots";
export * as services from "@package/appeng/server/services";
export * as subcommands from "@package/appeng/server/subcommands";

declare module "@package/appeng/server" {
    export class $ISubCommand {
    }
    export interface $ISubCommand {
        call(arg0: $MinecraftServer, arg1: $CommandContext<$CommandSourceStack>, arg2: $CommandSourceStack): void;
        addArguments(arg0: $LiteralArgumentBuilder<$CommandSourceStack>): void;
    }
    /**
     * Values that may be interpreted as {@link $ISubCommand}.
     */
    export type $ISubCommand_ = ((arg0: $MinecraftServer, arg1: $CommandContext<$CommandSourceStack>, arg2: $CommandSourceStack) => void);
    export class $AECommand {
        register(arg0: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $Commands extends $Enum<$Commands> {
        static values(): $Commands[];
        static valueOf(arg0: string): $Commands;
        literal(): string;
        static SPATIAL: $Commands;
        static COMPASS: $Commands;
        static GRIDS: $Commands;
        test: boolean;
        level: number;
        static CHANNEL_MODE: $Commands;
        static TICK_MONITORING: $Commands;
        static TEST_METEORITES: $Commands;
        static SETUP_TEST_WORLD: $Commands;
        static CHUNK_LOGGER: $Commands;
        command: $ISubCommand;
    }
    /**
     * Values that may be interpreted as {@link $Commands}.
     */
    export type $Commands_ = "chunk_logger" | "spatial" | "channel_mode" | "tick_monitoring" | "grids" | "compass" | "test_meteorites" | "setup_test_world";
}
