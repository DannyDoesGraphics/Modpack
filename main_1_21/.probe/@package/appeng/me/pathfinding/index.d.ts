import { $IGridConnection, $GridFlags_, $IGridVisitor, $IGridNode, $IGridConnectionVisitor, $IGrid } from "@package/appeng/api/networking";
import { $ControllerState } from "@package/appeng/api/networking/pathing";
import { $ControllerBlockEntity } from "@package/appeng/blockentity/networking";
import { $Collection_ } from "@package/java/util";
import { $Iterable } from "@package/java/lang";

declare module "@package/appeng/me/pathfinding" {
    export class $PathingCalculation {
        getChannelsInUse(): number;
        getChannelsByBlocks(): number;
        compute(): void;
        constructor(arg0: $IGrid);
        get channelsInUse(): number;
        get channelsByBlocks(): number;
    }
    export class $IPathItem {
    }
    export interface $IPathItem {
        getMaxChannels(): number;
        getControllerRoute(): $IPathItem;
        setAdHocChannels(arg0: number): void;
        setControllerRoute(arg0: $IPathItem): void;
        getPossibleOptions(): $Iterable<$IPathItem>;
        finalizeChannels(): void;
        hasFlag(arg0: $GridFlags_): boolean;
        get maxChannels(): number;
        set adHocChannels(value: number);
        get possibleOptions(): $Iterable<$IPathItem>;
    }
    export class $AdHocChannelUpdater implements $IGridConnectionVisitor {
        visitNode(arg0: $IGridNode): boolean;
        visitConnection(arg0: $IGridConnection): void;
        constructor(arg0: number);
    }
    export class $ControllerValidator implements $IGridVisitor {
        static calculateState(arg0: $Collection_<$ControllerBlockEntity>): $ControllerState;
        visitNode(arg0: $IGridNode): boolean;
        getFound(): number;
        isValid(): boolean;
        static MAX_SIZE: number;
        get found(): number;
        get valid(): boolean;
    }
    export class $ChannelFinalizer implements $IGridConnectionVisitor {
        visitNode(arg0: $IGridNode): boolean;
        visitConnection(arg0: $IGridConnection): void;
        constructor();
    }
}
