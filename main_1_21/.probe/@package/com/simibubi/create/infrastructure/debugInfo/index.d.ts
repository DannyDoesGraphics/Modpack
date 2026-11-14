import { $InfoElement, $DebugInfoSection_, $DebugInfoSection } from "@package/com/simibubi/create/infrastructure/debugInfo/element";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $List, $Collection } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $ClientboundPacketPayload, $BasePacketPayload$PacketTypeProvider } from "@package/net/createmod/catnip/net/base";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as element from "@package/com/simibubi/create/infrastructure/debugInfo/element";

declare module "@package/com/simibubi/create/infrastructure/debugInfo" {
    export class $ServerDebugInfoPacket extends $Record implements $ClientboundPacketPayload {
        serverInfo(): string;
        handle(arg0: $LocalPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerDebugInfoPacket>;
        constructor(arg0: $Player);
        constructor(serverInfo: string);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $ServerDebugInfoPacket}.
     */
    export type $ServerDebugInfoPacket_ = { serverInfo?: string,  } | [serverInfo?: string, ];
    export class $InfoProvider {
    }
    export interface $InfoProvider {
        getInfoSafe(arg0: $Player): string;
        getInfo(arg0: $Player): string;
    }
    /**
     * Values that may be interpreted as {@link $InfoProvider}.
     */
    export type $InfoProvider_ = ((arg0: $Player) => string);
    export class $DebugInformation {
        static getServerInfo(): $List<$DebugInfoSection>;
        static getClientInfo(): $List<$DebugInfoSection>;
        static registerClientInfo(arg0: $DebugInfoSection_): void;
        static registerServerInfo(arg0: $DebugInfoSection_): void;
        static getMcSystemInfo(arg0: string): string;
        static getVersionOfMod(arg0: string): string;
        static getTotalRam(): string;
        static listAllGraphicsCards(): $Collection<$InfoElement>;
        static listAllOtherMods(): $Collection<$InfoElement>;
        static registerBothInfo(arg0: $DebugInfoSection_): void;
        static tryTrim(arg0: string): string;
        static getIndent(arg0: number): string;
        static getCpuInfo(): string;
        constructor();
        static get serverInfo(): $List<$DebugInfoSection>;
        static get clientInfo(): $List<$DebugInfoSection>;
        static get totalRam(): string;
        static get cpuInfo(): string;
    }
}
