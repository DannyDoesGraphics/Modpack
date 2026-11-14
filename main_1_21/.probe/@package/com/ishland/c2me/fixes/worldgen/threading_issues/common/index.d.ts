import { $StrongholdPieces$StrongholdPiece } from "@package/net/minecraft/world/level/levelgen/structure/structures";
import { $ThreadLocal, $Class } from "@package/java/lang";

declare module "@package/com/ishland/c2me/fixes/worldgen/threading_issues/common" {
    export class $XPieceDataExtension {
    }
    export interface $XPieceDataExtension {
        c2me$getGeneratedCountThreadLocal(): $ThreadLocal<number>;
    }
    /**
     * Values that may be interpreted as {@link $XPieceDataExtension}.
     */
    export type $XPieceDataExtension_ = (() => $ThreadLocal<number>);
    export class $IStrongholdGenerator {
    }
    export interface $IStrongholdGenerator {
        getActivePieceTypeThreadLocal(): $ThreadLocal<$Class<$StrongholdPieces$StrongholdPiece>>;
        get activePieceTypeThreadLocal(): $ThreadLocal<$Class<$StrongholdPieces$StrongholdPiece>>;
    }
    /**
     * Values that may be interpreted as {@link $IStrongholdGenerator}.
     */
    export type $IStrongholdGenerator_ = (() => $ThreadLocal<$Class<$StrongholdPieces$StrongholdPiece>>);
}
