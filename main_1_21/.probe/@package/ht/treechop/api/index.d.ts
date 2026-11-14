import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $Consumer_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Stream } from "@package/java/util/stream";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Chop } from "@package/ht/treechop/common/chop";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Object } from "@package/java/lang";
import { $Set, $Set_, $Collection } from "@package/java/util";

declare module "@package/ht/treechop/api" {
    export class $ChopEvent$StartChopEvent extends $ChopEvent implements $ICancellableEvent {
        getNumChops(): number;
        setNumChops(arg0: number): void;
        getTrigger(): $Object;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Level_, arg1: $ServerPlayer, arg2: $BlockPos_, arg3: $BlockState_, arg4: $ChopData, arg5: $Object);
        constructor(arg0: $Level_, arg1: $ServerPlayer, arg2: $BlockPos_, arg3: $BlockState_, arg4: $ChopData);
        get trigger(): $Object;
    }
    export class $FellData {
    }
    export interface $FellData extends $FellDataImmutable {
        setTree(arg0: $TreeData): void;
        setBreakLeaves(arg0: boolean): void;
        set tree(value: $TreeData);
        set breakLeaves(value: boolean);
    }
    export class $ChopEvent extends $Event {
        getPlayer(): $Player;
        getChoppedBlockPos(): $BlockPos;
        getChoppedBlockState(): $BlockState;
        getLevel(): $Level;
        constructor(arg0: $Level_, arg1: $Player, arg2: $BlockPos_, arg3: $BlockState_);
        get player(): $Player;
        get choppedBlockPos(): $BlockPos;
        get choppedBlockState(): $BlockState;
        get level(): $Level;
    }
    /**
     * @deprecated
     */
    export class $TreeDataImmutable {
    }
    export interface $TreeDataImmutable {
        /**
         * @deprecated
         */
        getLogBlocksOrEmpty(): $Set<$BlockPos>;
        getChops(): number;
        streamLogs(): $Stream<$BlockPos>;
        streamLeaves(): $Stream<$BlockPos>;
        isAProperTree(arg0: boolean): boolean;
        readyToFell(arg0: number): boolean;
        numChopsNeededToFell(): number;
        forEachLeaves(arg0: $Consumer_<$BlockPos>): void;
        hasLeaves(): boolean;
        getLogBlocks(): ($Set<$BlockPos>) | undefined;
        chop(arg0: $BlockPos_, arg1: number): $Collection<$Chop>;
        get logBlocksOrEmpty(): $Set<$BlockPos>;
        get chops(): number;
        get logBlocks(): ($Set<$BlockPos>) | undefined;
    }
    export class $ChopData {
    }
    export interface $ChopData extends $ChopDataImmutable {
        setNumChops(arg0: number): void;
        set numChops(value: number);
    }
    export class $ChopEvent$DetectTreeEvent extends $ChopEvent implements $ICancellableEvent {
        getTreeData(): ($TreeData) | undefined;
        setTreeData(arg0: $TreeData): void;
        /**
         * @deprecated
         */
        overrideTreeHasLeaves(arg0: boolean): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Level_, arg1: $ServerPlayer, arg2: $BlockPos_, arg3: $BlockState_, arg4: $TreeData);
    }
    export class $ChopEvent$FinishChopEvent extends $ChopEvent {
        getFelled(): boolean;
        getNumChops(): number;
        constructor(arg0: $Level_, arg1: $Player, arg2: $BlockPos_, arg3: $BlockState_, arg4: $ChopDataImmutable_, arg5: boolean);
        get felled(): boolean;
        get numChops(): number;
    }
    export class $FellDataImmutable {
    }
    export interface $FellDataImmutable {
        getBreakLeaves(): boolean;
        getTree(): $TreeData;
        get breakLeaves(): boolean;
        get tree(): $TreeData;
    }
    export class $ChopEvent$BeforeFellEvent extends $ChopEvent implements $ICancellableEvent {
        getFellData(): $FellData;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Level_, arg1: $ServerPlayer, arg2: $BlockPos_, arg3: $BlockState_, arg4: $FellData);
        get fellData(): $FellData;
    }
    export class $ChopDataImmutable {
    }
    export interface $ChopDataImmutable {
        getNumChops(): number;
        getTree(): ($TreeData) | undefined;
        get numChops(): number;
        get tree(): ($TreeData) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $ChopDataImmutable}.
     */
    export type $ChopDataImmutable_ = (() => number);
    export class $ChopEvent$AfterFellEvent extends $ChopEvent implements $ICancellableEvent {
        getFellData(): $FellData;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Level_, arg1: $ServerPlayer, arg2: $BlockPos_, arg3: $BlockState_, arg4: $FellData);
        get fellData(): $FellData;
    }
    export class $TreeData {
    }
    export interface $TreeData extends $TreeDataImmutable {
        /**
         * @deprecated
         */
        setLeaves(arg0: boolean): void;
        /**
         * @deprecated
         */
        setLogBlocks(arg0: $Set_<$BlockPos_>): void;
        set leaves(value: boolean);
        set logBlocks(value: $Set_<$BlockPos_>);
    }
}
