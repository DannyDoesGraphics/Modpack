import { $RegisterPayloadHandlersEvent } from "@package/net/neoforged/neoforge/network/event";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CustomPacketPayload, $CustomPacketPayload$Type } from "@package/net/minecraft/network/protocol/common/custom";
import { $IPayloadContext } from "@package/net/neoforged/neoforge/network/handling";
export * as clientbound from "@package/appeng/core/network/clientbound";
export * as serverbound from "@package/appeng/core/network/serverbound";
export * as bidirectional from "@package/appeng/core/network/bidirectional";

declare module "@package/appeng/core/network" {
    export class $ClientboundPacket {
    }
    export interface $ClientboundPacket extends $CustomAppEngPayload {
        handleOnClient(arg0: $IPayloadContext): void;
        handleOnClient(arg0: $Player): void;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundPacket}.
     */
    export type $ClientboundPacket_ = (() => void);
    export class $CustomAppEngPayload {
        static createType<T extends $CustomPacketPayload>(arg0: string): $CustomPacketPayload$Type<T>;
    }
    export interface $CustomAppEngPayload extends $CustomPacketPayload {
    }
    /**
     * Values that may be interpreted as {@link $CustomAppEngPayload}.
     */
    export type $CustomAppEngPayload_ = (() => void);
    export class $ServerboundPacket {
    }
    export interface $ServerboundPacket extends $CustomAppEngPayload {
        handleOnServer(arg0: $ServerPlayer): void;
        handleOnServer(arg0: $IPayloadContext): void;
    }
    export class $InitNetwork {
        static init(arg0: $RegisterPayloadHandlersEvent): void;
        constructor();
    }
}
