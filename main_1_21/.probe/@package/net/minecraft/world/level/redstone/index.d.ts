import { $Level_, $LevelAccessor } from "@package/net/minecraft/world/level";
import { $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";

declare module "@package/net/minecraft/world/level/redstone" {
    export class $CollectingNeighborUpdater$ShapeUpdate extends $Record implements $CollectingNeighborUpdater$NeighborUpdates {
    }
    /**
     * Values that may be interpreted as {@link $CollectingNeighborUpdater$ShapeUpdate}.
     */
    export type $CollectingNeighborUpdater$ShapeUpdate_ = { direction?: $Direction_, neighborPos?: $BlockPos_, pos?: $BlockPos_, updateLimit?: number, updateFlags?: number, state?: $BlockState_,  } | [direction?: $Direction_, neighborPos?: $BlockPos_, pos?: $BlockPos_, updateLimit?: number, updateFlags?: number, state?: $BlockState_, ];
    export class $CollectingNeighborUpdater$SimpleNeighborUpdate extends $Record implements $CollectingNeighborUpdater$NeighborUpdates {
    }
    /**
     * Values that may be interpreted as {@link $CollectingNeighborUpdater$SimpleNeighborUpdate}.
     */
    export type $CollectingNeighborUpdater$SimpleNeighborUpdate_ = { block?: $Block_, neighborPos?: $BlockPos_, pos?: $BlockPos_,  } | [block?: $Block_, neighborPos?: $BlockPos_, pos?: $BlockPos_, ];
    export class $InstantNeighborUpdater implements $NeighborUpdater {
        shapeUpdate(direction: $Direction_, state: $BlockState_, pos: $BlockPos_, neighborPos: $BlockPos_, flags: number, recursionLevel: number): void;
        neighborChanged(state: $BlockState_, pos: $BlockPos_, neighborBlock: $Block_, neighborPos: $BlockPos_, movedByPiston: boolean): void;
        neighborChanged(pos: $BlockPos_, neighborBlock: $Block_, neighborPos: $BlockPos_): void;
        updateNeighborsAtExceptFromFacing(pos: $BlockPos_, block: $Block_, facing: $Direction_ | null): void;
        constructor(level: $Level_);
    }
    export class $Redstone {
        static SIGNAL_MIN: number;
        static SIGNAL_NONE: number;
        static SIGNAL_MAX: number;
        constructor();
    }
    export class $CollectingNeighborUpdater implements $NeighborUpdater {
        updateNeighborsAtExceptFromFacing(pos: $BlockPos_, block: $Block_, facing: $Direction_ | null): void;
        shapeUpdate(direction: $Direction_, state: $BlockState_, pos: $BlockPos_, neighborPos: $BlockPos_, flags: number, recursionLevel: number): void;
        neighborChanged(state: $BlockState_, pos: $BlockPos_, neighborBlock: $Block_, neighborPos: $BlockPos_, movedByPiston: boolean): void;
        neighborChanged(pos: $BlockPos_, neighborBlock: $Block_, neighborPos: $BlockPos_): void;
        constructor(level: $Level_, maxChainedNeighborUpdates: number);
    }
    export class $CollectingNeighborUpdater$NeighborUpdates {
    }
    export interface $CollectingNeighborUpdater$NeighborUpdates {
    }
    /**
     * Values that may be interpreted as {@link $CollectingNeighborUpdater$NeighborUpdates}.
     */
    export type $CollectingNeighborUpdater$NeighborUpdates_ = (() => void);
    export class $CollectingNeighborUpdater$FullNeighborUpdate extends $Record implements $CollectingNeighborUpdater$NeighborUpdates {
    }
    /**
     * Values that may be interpreted as {@link $CollectingNeighborUpdater$FullNeighborUpdate}.
     */
    export type $CollectingNeighborUpdater$FullNeighborUpdate_ = { pos?: $BlockPos_, state?: $BlockState_, movedByPiston?: boolean, neighborPos?: $BlockPos_, block?: $Block_,  } | [pos?: $BlockPos_, state?: $BlockState_, movedByPiston?: boolean, neighborPos?: $BlockPos_, block?: $Block_, ];
    export class $CollectingNeighborUpdater$MultiNeighborUpdate implements $CollectingNeighborUpdater$NeighborUpdates {
    }
    export class $NeighborUpdater {
        static executeUpdate(level: $Level_, state: $BlockState_, pos: $BlockPos_, neighborBlock: $Block_, neighborPos: $BlockPos_, movedByPiston: boolean): void;
        static executeShapeUpdate(level: $LevelAccessor, direction: $Direction_, state: $BlockState_, pos: $BlockPos_, neighborPos: $BlockPos_, flags: number, recursionLevel: number): void;
        static UPDATE_ORDER: $Direction[];
    }
    export interface $NeighborUpdater {
        updateNeighborsAtExceptFromFacing(pos: $BlockPos_, block: $Block_, facing: $Direction_ | null): void;
        shapeUpdate(direction: $Direction_, state: $BlockState_, pos: $BlockPos_, neighborPos: $BlockPos_, flags: number, recursionLevel: number): void;
        neighborChanged(state: $BlockState_, pos: $BlockPos_, neighborBlock: $Block_, neighborPos: $BlockPos_, movedByPiston: boolean): void;
        neighborChanged(pos: $BlockPos_, neighborBlock: $Block_, neighborPos: $BlockPos_): void;
    }
}
