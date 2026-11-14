import { $Level_, $LevelAccessor } from "@package/net/minecraft/world/level";
import { $Consumer_ } from "@package/java/util/function";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Grid } from "@package/appeng/me";
import { $CraftingCalculation } from "@package/appeng/crafting";
import { $ILevelRunnable_ } from "@package/appeng/util";
import { $Runnable_, $Record } from "@package/java/lang";
import { $List, $Set } from "@package/java/util";
import { $ChunkEvent$Unload, $LevelEvent$Unload } from "@package/net/neoforged/neoforge/event/level";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/appeng/hooks/ticking" {
    export class $ServerGridRepo {
    }
    export class $ServerBlockEntityRepo$FirstTickInfo<T extends $BlockEntity> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ServerBlockEntityRepo$FirstTickInfo}.
     */
    export type $ServerBlockEntityRepo$FirstTickInfo_<T> = { initFunction?: $Consumer_<$BlockEntity>, blockEntity?: $BlockEntity,  } | [initFunction?: $Consumer_<$BlockEntity>, blockEntity?: $BlockEntity, ];
    export class $ServerBlockEntityRepo {
    }
    export class $TickHandler {
        addCallable(arg0: $LevelAccessor, arg1: $ILevelRunnable_): void;
        addCallable(arg0: $LevelAccessor, arg1: $Runnable_): void;
        getCurrentTick(): number;
        getGridList(): $Set<$Grid>;
        getBlockEntityReport(): $List<$Component>;
        addNetwork(arg0: $Grid): void;
        removeNetwork(arg0: $Grid): void;
        addInit<T extends $BlockEntity>(arg0: T, arg1: $Consumer_<T>): void;
        onUnloadChunk(arg0: $ChunkEvent$Unload): void;
        onUnloadLevel(arg0: $LevelEvent$Unload): void;
        registerCraftingSimulation(arg0: $Level_, arg1: $CraftingCalculation): void;
        shutdown(): void;
        init(): void;
        static instance(): $TickHandler;
        get currentTick(): number;
        get gridList(): $Set<$Grid>;
        get blockEntityReport(): $List<$Component>;
    }
}
