import { $DisplayLinkContext, $DisplayLinkBlockEntity } from "@package/com/simibubi/create/content/redstone/displayLink";
import { $MutableComponent, $MutableComponent_ } from "@package/net/minecraft/network/chat";
import { $SimpleRegistry, $SimpleRegistry$Multi } from "@package/com/simibubi/create/api/registry";
import { $SignalBlockEntity, $SignalBlockEntity$SignalState_, $SignalBlockEntity$SignalState } from "@package/com/simibubi/create/content/trains/signal";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $DisplayTarget, $DisplaySource } from "@package/com/simibubi/create/api/behaviour/display";
import { $List } from "@package/java/util";
import { $SingleLineDisplaySource } from "@package/com/simibubi/create/content/redstone/displayLink/source";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $Pair } from "@package/net/createmod/catnip/data";

declare module "@package/com/railwayteam/railways/content/distant_signals" {
    export class $IOverridableSignal {
    }
    export interface $IOverridableSignal {
        railways$getOverriddenState(): ($SignalBlockEntity$SignalState) | undefined;
        railways$refresh(arg0: $SignalBlockEntity, arg1: $SignalBlockEntity$SignalState_, arg2: number, arg3: boolean): void;
        railways$refresh(arg0: $SignalBlockEntity, arg1: $SignalBlockEntity$SignalState_, arg2: number): void;
    }
    export class $SemaphoreDisplayTarget extends $DisplayTarget {
        static BY_BLOCK_ENTITY: $SimpleRegistry<$BlockEntityType<never>, $DisplayTarget>;
        static BY_BLOCK: $SimpleRegistry<$Block, $DisplayTarget>;
        constructor();
    }
    export class $SignalDisplaySource extends $SingleLineDisplaySource {
        static isSignalTarget(arg0: $DisplayLinkContext): boolean;
        static hasSignalSource(arg0: $DisplayLinkContext): boolean;
        static getSignalState(arg0: $DisplayLinkContext, arg1: $MutableComponent_): $Pair<$SignalBlockEntity$SignalState, ($SignalBlockEntity) | undefined>;
        updateState(arg0: $DisplayLinkBlockEntity): void;
        static getState(arg0: $MutableComponent_): ($SignalBlockEntity$SignalState) | undefined;
        static BY_BLOCK_ENTITY: $SimpleRegistry$Multi<$BlockEntityType<never>, $DisplaySource>;
        static WHITESPACE: $MutableComponent;
        static EMPTY: $List<$MutableComponent>;
        static EMPTY_LINE: $MutableComponent;
        static BY_BLOCK: $SimpleRegistry$Multi<$Block, $DisplaySource>;
        constructor();
    }
}
