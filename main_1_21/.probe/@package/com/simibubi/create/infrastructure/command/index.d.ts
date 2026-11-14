import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $DynamicCommandExceptionType, $SimpleCommandExceptionType } from "@package/com/mojang/brigadier/exceptions";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $CommandDispatcher } from "@package/com/mojang/brigadier";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $ArgumentBuilder } from "@package/com/mojang/brigadier/builder";
import { $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $ClientboundPacketPayload, $BasePacketPayload$PacketTypeProvider } from "@package/net/createmod/catnip/net/base";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/infrastructure/command" {
    export class $PassengerCommand {
        constructor();
    }
    export class $HighlightCommand {
        static register(): $ArgumentBuilder<$CommandSourceStack, never>;
        constructor();
    }
    export class $CloneCommand {
        static register(): $ArgumentBuilder<$CommandSourceStack, never>;
        constructor();
    }
    export class $TrainCommand {
        constructor();
    }
    export class $DebugInfoCommand {
        static register(): $ArgumentBuilder<$CommandSourceStack, never>;
        constructor();
    }
    export class $FixLightingCommand {
        constructor();
    }
    export class $CouplingCommand {
        static register(): $ArgumentBuilder<$CommandSourceStack, never>;
        static ONLY_MINECARTS_ALLOWED: $SimpleCommandExceptionType;
        static TWO_CARTS: $DynamicCommandExceptionType;
        static SAME_DIMENSION: $SimpleCommandExceptionType;
        constructor();
    }
    export class $DebugHatsCommand {
        static register(): $ArgumentBuilder<$CommandSourceStack, never>;
        constructor();
    }
    export class $ToggleDebugCommand {
        static register(): $ArgumentBuilder<$CommandSourceStack, never>;
        constructor();
    }
    export class $DumpRailwaysCommand {
        constructor();
    }
    export class $CreateTestCommand {
        static register(): $ArgumentBuilder<$CommandSourceStack, never>;
        constructor();
    }
    export class $OverlayConfigCommand {
        static register(): $ArgumentBuilder<$CommandSourceStack, never>;
        constructor();
    }
    export class $SimpleCreateActions {
        static camAngleTarget(arg0: string, arg1: boolean): void;
        constructor();
    }
    export class $FabulousWarningCommand {
        static register(): $ArgumentBuilder<$CommandSourceStack, never>;
        constructor();
    }
    export class $HighlightPacket extends $Record implements $ClientboundPacketPayload {
        pos(): $BlockPos;
        handle(arg0: $LocalPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $HighlightPacket>;
        constructor(pos: $BlockPos_);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $HighlightPacket}.
     */
    export type $HighlightPacket_ = { pos?: $BlockPos_,  } | [pos?: $BlockPos_, ];
    export class $CameraDistanceCommand {
        static register(): $ArgumentBuilder<$CommandSourceStack, never>;
        constructor();
    }
    export class $CameraAngleCommand {
        static register(): $ArgumentBuilder<$CommandSourceStack, never>;
        constructor();
    }
    export class $AllCommands {
        static register(arg0: $CommandDispatcher<$CommandSourceStack>): void;
        static registerClient(arg0: $CommandDispatcher<$CommandSourceStack>): void;
        constructor();
    }
    export class $ReplaceInCommandBlocksCommand {
        static register(): $ArgumentBuilder<$CommandSourceStack, never>;
        constructor();
    }
    export class $ClearBufferCacheCommand {
        constructor();
    }
    export class $KillTPSCommand {
        static register(): $ArgumentBuilder<$CommandSourceStack, never>;
        constructor();
    }
    export class $DebugValueCommand {
        static register(): $ArgumentBuilder<$CommandSourceStack, never>;
        static value: number;
        constructor();
    }
    export class $ConfigureConfigCommand {
    }
    export class $GlueCommand {
        static register(): $ArgumentBuilder<$CommandSourceStack, never>;
        constructor();
    }
    export class $ServerLagger {
        isLagging(): boolean;
        setTickTime(arg0: number): void;
        setLagging(arg0: boolean): void;
        getTickTime(): number;
        tick(): void;
        constructor();
    }
}
