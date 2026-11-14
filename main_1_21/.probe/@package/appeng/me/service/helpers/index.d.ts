import { $Consumer_ } from "@package/java/util/function";
import { $TickingRequest, $IGridTickable, $TickingRequest_ } from "@package/appeng/api/networking/ticking";
import { $IStorageMounts_, $IStorageProvider, $AEKeyFilter_ } from "@package/appeng/api/storage";
import { $IPatternDetails } from "@package/appeng/api/crafting";
import { $CrashReportCategory } from "@package/net/minecraft";
import { $CraftingService } from "@package/appeng/me/service";
import { $IGridConnection, $IGridNode } from "@package/appeng/api/networking";
import { $Spliterator, $Collection, $LongSummaryStatistics, $Set } from "@package/java/util";
import { $Comparable, $Iterable, $Record } from "@package/java/lang";
import { $ICraftingProvider } from "@package/appeng/api/networking/crafting";
import { $AEKey } from "@package/appeng/api/stacks";

declare module "@package/appeng/me/service/helpers" {
    export class $NetworkCraftingProviders {
        getLastModifiedOnTick(): number;
        getCraftableKeys(): $Set<$AEKey>;
        getEmittableKeys(): $Set<$AEKey>;
        getCraftables(arg0: $AEKeyFilter_): $Set<$AEKey>;
        getMediums(arg0: $IPatternDetails): $Iterable<$ICraftingProvider>;
        getCraftingFor(arg0: $AEKey): $Collection<$IPatternDetails>;
        getFuzzyCraftable(arg0: $AEKey, arg1: $AEKeyFilter_): $AEKey;
        canEmitFor(arg0: $AEKey): boolean;
        addProvider(arg0: $ICraftingProvider): void;
        addProvider(arg0: $IGridNode): void;
        removeProvider(arg0: $ICraftingProvider): void;
        removeProvider(arg0: $IGridNode): void;
        constructor();
        get lastModifiedOnTick(): number;
        get craftableKeys(): $Set<$AEKey>;
        get emittableKeys(): $Set<$AEKey>;
    }
    export class $TickTracker implements $Comparable<$TickTracker> {
        getNextTick(): number;
        getLastTick(): number;
        setLastTick(arg0: number): void;
        getRequest(): $TickingRequest;
        getCurrentRate(): number;
        setCurrentRate(arg0: number): void;
        setTickOnNextTick(): void;
        getStatistics(): $LongSummaryStatistics;
        getGridTickable(): $IGridTickable;
        addEntityCrashInfo(arg0: $CrashReportCategory): void;
        compareTo(arg0: $TickTracker): number;
        getNode(): $IGridNode;
        constructor(arg0: $TickingRequest_, arg1: $IGridNode, arg2: $IGridTickable, arg3: number);
        get nextTick(): number;
        get request(): $TickingRequest;
        get statistics(): $LongSummaryStatistics;
        get gridTickable(): $IGridTickable;
        get node(): $IGridNode;
    }
    export class $NetworkCraftingProviders$PatternInfo extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $NetworkCraftingProviders$PatternInfo}.
     */
    export type $NetworkCraftingProviders$PatternInfo_ = { pattern?: $IPatternDetails, state?: $NetworkCraftingProviders$ProviderState,  } | [pattern?: $IPatternDetails, state?: $NetworkCraftingProviders$ProviderState, ];
    export class $CraftingServiceStorage implements $IStorageProvider {
        mountInventories(arg0: $IStorageMounts_): void;
        constructor(arg0: $CraftingService);
    }
    export class $NetworkCraftingProviders$CraftingProviderList implements $Iterable<$ICraftingProvider> {
        spliterator(): $Spliterator<$ICraftingProvider>;
        forEach(arg0: $Consumer_<$ICraftingProvider>): void;
    }
    export class $ConnectionWrapper {
        setConnection(arg0: $IGridConnection): void;
        getConnection(): $IGridConnection;
        constructor(arg0: $IGridConnection);
    }
    export class $NetworkCraftingProviders$PatternsForKey {
    }
    export class $NetworkCraftingProviders$ProviderState {
    }
}
