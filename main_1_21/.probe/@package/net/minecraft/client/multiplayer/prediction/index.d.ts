import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $ServerGamePacketListener } from "@package/net/minecraft/network/protocol/game";
import { $AutoCloseable } from "@package/java/lang";

declare module "@package/net/minecraft/client/multiplayer/prediction" {
    export class $BlockStatePredictionHandler$ServerVerifiedState {
    }
    export class $PredictiveAction {
    }
    export interface $PredictiveAction {
        predict(sequence: number): $Packet<$ServerGamePacketListener>;
    }
    /**
     * Values that may be interpreted as {@link $PredictiveAction}.
     */
    export type $PredictiveAction_ = ((arg0: number) => $Packet<$ServerGamePacketListener>);
    export class $BlockStatePredictionHandler implements $AutoCloseable {
        startPredicting(): $BlockStatePredictionHandler;
        currentSequence(): number;
        close(): void;
        endPredictionsUpTo(sequence: number, level: $ClientLevel): void;
        updateKnownServerState(pos: $BlockPos_, state: $BlockState_): boolean;
        isPredicting(): boolean;
        retainKnownServerState(pos: $BlockPos_, state: $BlockState_, player: $LocalPlayer): void;
        retainSnapshot(arg0: $BlockPos_, arg1: $BlockSnapshot): void;
        constructor();
        get predicting(): boolean;
    }
}
