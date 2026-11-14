import { $IConfigManager } from "@package/appeng/api/util";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ClientboundPacket, $ServerboundPacket } from "@package/appeng/core/network";
import { $Setting } from "@package/appeng/api/config";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CustomPacketPayload$Type } from "@package/net/minecraft/network/protocol/common/custom";
import { $Enum, $Record } from "@package/java/lang";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $IPayloadContext } from "@package/net/neoforged/neoforge/network/handling";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/appeng/core/network/bidirectional" {
    export class $ConfigValuePacket extends $Record implements $ClientboundPacket, $ServerboundPacket {
        handleOnClient(arg0: $Player): void;
        handleOnServer(arg0: $ServerPlayer): void;
        name(): string;
        type(): $CustomPacketPayload$Type<$ConfigValuePacket>;
        value(): string;
        static decode(arg0: $RegistryFriendlyByteBuf): $ConfigValuePacket;
        write(arg0: $RegistryFriendlyByteBuf): void;
        handleOnClient(arg0: $IPayloadContext): void;
        handleOnServer(arg0: $IPayloadContext): void;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$ConfigValuePacket>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ConfigValuePacket>;
        constructor<T extends $Enum<T>>(arg0: $Setting<T>, arg1: T);
        constructor(name: string, value: string);
        constructor<T extends $Enum<T>>(arg0: $Setting<T>, arg1: $IConfigManager);
    }
    /**
     * Values that may be interpreted as {@link $ConfigValuePacket}.
     */
    export type $ConfigValuePacket_ = { name?: string, value?: string,  } | [name?: string, value?: string, ];
}
