import { $WrappedBlockEntityTickInvokerAccessor } from "@package/net/caffeinemc/mods/lithium/mixin/world/block_entity_ticking/sleeping";
import { $LevelReader } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as inventory_change_tracking from "@package/net/caffeinemc/mods/lithium/common/block/entity/inventory_change_tracking";
export * as inventory_comparator_tracking from "@package/net/caffeinemc/mods/lithium/common/block/entity/inventory_comparator_tracking";

declare module "@package/net/caffeinemc/mods/lithium/common/block/entity" {
    export class $ShapeUpdateHandlingBlockBehaviour {
    }
    export interface $ShapeUpdateHandlingBlockBehaviour {
        lithium$handleShapeUpdate(arg0: $LevelReader, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockPos_, arg4: $BlockState_): void;
    }
    export class $SetChangedHandlingBlockEntity {
    }
    export interface $SetChangedHandlingBlockEntity {
        lithium$handleSetChanged(): void;
    }
    export class $SleepingBlockEntity {
        static SLEEPING_BLOCK_ENTITY_TICKER: $TickingBlockEntity;
    }
    export interface $SleepingBlockEntity {
        lithium$getTickWrapper(): $WrappedBlockEntityTickInvokerAccessor;
        lithium$setTickWrapper(arg0: $WrappedBlockEntityTickInvokerAccessor): void;
        lithium$setSleepingTicker(arg0: $TickingBlockEntity): void;
        lithium$getSleepingTicker(): $TickingBlockEntity;
        lithium$startSleeping(): boolean;
        wakeUpNow(): void;
        setTicker(arg0: $TickingBlockEntity): void;
        sleepOnlyCurrentTick(): void;
        isSleeping(): boolean;
        set ticker(value: $TickingBlockEntity);
        get sleeping(): boolean;
    }
}
