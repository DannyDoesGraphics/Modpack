import { $ServerPlayer } from "@package/net/minecraft/server/level";

declare module "@package/dev/ryanhcode/sable/mixinterface/entity/entities_stick_sublevels/player" {
    export class $ServerboundMovePlayerPacketExtension {
    }
    export interface $ServerboundMovePlayerPacketExtension {
        sable$handle(arg0: $ServerPlayer): void;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundMovePlayerPacketExtension}.
     */
    export type $ServerboundMovePlayerPacketExtension_ = ((arg0: $ServerPlayer) => void);
}
