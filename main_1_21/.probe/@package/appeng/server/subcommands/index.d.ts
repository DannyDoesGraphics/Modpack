import { $OutputStream } from "@package/java/io";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $DynamicCommandExceptionType, $SimpleCommandExceptionType } from "@package/com/mojang/brigadier/exceptions";
import { $ISubCommand } from "@package/appeng/server";
import { $LiteralArgumentBuilder } from "@package/com/mojang/brigadier/builder";
import { $CommandContext } from "@package/com/mojang/brigadier/context";
import { $ChunkEvent$Unload, $ChunkEvent$Load } from "@package/net/neoforged/neoforge/event/level";

declare module "@package/appeng/server/subcommands" {
    export class $SpatialStorageCommand implements $ISubCommand {
        call(arg0: $MinecraftServer, arg1: $CommandContext<$CommandSourceStack>, arg2: $CommandSourceStack): void;
        addArguments(arg0: $LiteralArgumentBuilder<$CommandSourceStack>): void;
        static NOT_IN_SPATIAL_STORAGE_LEVEL: $SimpleCommandExceptionType;
        static NOT_STORAGE_CELL: $SimpleCommandExceptionType;
        static PLOT_NOT_FOUND: $DynamicCommandExceptionType;
        static PLOT_NOT_FOUND_FOR_POSITION: $SimpleCommandExceptionType;
        static NO_LAST_TRANSITION: $SimpleCommandExceptionType;
        constructor();
    }
    export class $TestMeteoritesCommand implements $ISubCommand {
        call(arg0: $MinecraftServer, arg1: $CommandContext<$CommandSourceStack>, arg2: $CommandSourceStack): void;
        addArguments(arg0: $LiteralArgumentBuilder<$CommandSourceStack>): void;
        constructor();
    }
    export class $GridsCommand$SendToPlayerStream extends $OutputStream {
    }
    export class $ChannelModeCommand implements $ISubCommand {
        call(arg0: $MinecraftServer, arg1: $CommandContext<$CommandSourceStack>, arg2: $CommandSourceStack): void;
        addArguments(arg0: $LiteralArgumentBuilder<$CommandSourceStack>): void;
        constructor();
    }
    export class $ChunkLogger implements $ISubCommand {
        onChunkLoadEvent(arg0: $ChunkEvent$Load): void;
        onChunkUnloadEvent(arg0: $ChunkEvent$Unload): void;
        call(arg0: $MinecraftServer, arg1: $CommandContext<$CommandSourceStack>, arg2: $CommandSourceStack): void;
        addArguments(arg0: $LiteralArgumentBuilder<$CommandSourceStack>): void;
        constructor();
    }
    export class $SetupTestWorldCommand implements $ISubCommand {
        call(arg0: $MinecraftServer, arg1: $CommandContext<$CommandSourceStack>, arg2: $CommandSourceStack): void;
        addArguments(arg0: $LiteralArgumentBuilder<$CommandSourceStack>): void;
        constructor();
    }
    export class $TickMonitoring implements $ISubCommand {
        call(arg0: $MinecraftServer, arg1: $CommandContext<$CommandSourceStack>, arg2: $CommandSourceStack): void;
        addArguments(arg0: $LiteralArgumentBuilder<$CommandSourceStack>): void;
        constructor();
    }
    export class $GridsCommand implements $ISubCommand {
        static buildExportCommand(arg0: number): string;
        call(arg0: $MinecraftServer, arg1: $CommandContext<$CommandSourceStack>, arg2: $CommandSourceStack): void;
        addArguments(arg0: $LiteralArgumentBuilder<$CommandSourceStack>): void;
        constructor();
    }
}
