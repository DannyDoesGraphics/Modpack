import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $UUID } from "@package/java/util";
import { $Pair } from "@package/it/unimi/dsi/fastutil";
import { $Vector3d } from "@package/org/joml";

declare module "@package/dev/ryanhcode/sable/mixinterface/respawn_point" {
    export class $ServerPlayerRespawnExtension {
    }
    export interface $ServerPlayerRespawnExtension {
        sable$getRespawnPoint(): $UUID;
        sable$takeQueuedFreezeFrom(arg0: $ServerPlayer): void;
        sable$getQueuedFreeze(): $Pair<$UUID, $Vector3d>;
    }
}
