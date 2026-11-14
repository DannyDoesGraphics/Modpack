import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $AESavedData } from "@package/appeng/core/worlddata";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $ISubCommand } from "@package/appeng/server";
import { $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $LiteralArgumentBuilder } from "@package/com/mojang/brigadier/builder";
import { $CommandContext } from "@package/com/mojang/brigadier/context";
import { $Throwable, $Record, $RuntimeException } from "@package/java/lang";

declare module "@package/appeng/server/services/compass" {
    export class $ServerCompassService {
        static getClosestMeteorite(arg0: $ServerLevel, arg1: $ChunkPos): ($BlockPos) | undefined;
        static updateArea(arg0: $ServerLevel, arg1: $ChunkAccess): void;
        static notifyBlockChange(arg0: $ServerLevel, arg1: $BlockPos_): void;
        constructor();
    }
    export class $CompassException extends $RuntimeException {
        constructor(arg0: $Throwable);
    }
    export class $ServerCompassService$Query extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ServerCompassService$Query}.
     */
    export type $ServerCompassService$Query_ = { level?: $ServerLevel, chunk?: $ChunkPos,  } | [level?: $ServerLevel, chunk?: $ChunkPos, ];
    export class $CompassRegion extends $AESavedData {
    }
    export class $TestCompassCommand implements $ISubCommand {
        call(arg0: $MinecraftServer, arg1: $CommandContext<$CommandSourceStack>, arg2: $CommandSourceStack): void;
        addArguments(arg0: $LiteralArgumentBuilder<$CommandSourceStack>): void;
        constructor();
    }
}
