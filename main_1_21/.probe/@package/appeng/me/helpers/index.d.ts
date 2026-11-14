import { $IEnergySource } from "@package/appeng/api/networking/energy";
import { $IOwnerAwareBlockEntity } from "@package/appeng/block";
import { $BlockOrientation_ } from "@package/appeng/api/orientation";
import { $IGridNodeListener, $IGridServiceProvider, $IInWorldGridNodeHost, $IManagedGridNode, $IGrid, $IStackWatcher, $IGridNode, $IGridNodeListener$State_ } from "@package/appeng/api/networking";
import { $PowerMultiplier_, $Actionable_ } from "@package/appeng/api/config";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Multimap } from "@package/com/google/common/collect";
import { $Map_, $Map, $Set, $Collection } from "@package/java/util";
import { $IActionSource, $IActionHost_, $IActionHost } from "@package/appeng/api/networking/security";
import { $AEKey } from "@package/appeng/api/stacks";
import { $Consumer_ } from "@package/java/util/function";
import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Record, $Class } from "@package/java/lang";

declare module "@package/appeng/me/helpers" {
    export class $IGridConnectedBlockEntity {
    }
    export interface $IGridConnectedBlockEntity extends $IActionHost, $IOwnerAwareBlockEntity, $IInWorldGridNodeHost {
        getGridNode(arg0: $Direction_): $IGridNode;
        getGridNode(): $IGridNode;
        getMainNode(): $IManagedGridNode;
        onMainNodeStateChanged(arg0: $IGridNodeListener$State_): void;
        getActionableNode(): $IGridNode;
        saveChanges(): void;
        getGridConnectableSides(arg0: $BlockOrientation_): $Set<$Direction>;
        ifGridPresent(arg0: $Consumer_<$IGrid>): boolean;
        setOwner(arg0: $Player): void;
        get mainNode(): $IManagedGridNode;
        get actionableNode(): $IGridNode;
        set owner(value: $Player);
    }
    export class $ActionHostEnergySource implements $IEnergySource {
        extractAEPower(arg0: number, arg1: $Actionable_, arg2: $PowerMultiplier_): number;
        constructor(arg0: $IActionHost_);
    }
    export class $GridServiceContainer extends $Record {
        serverStartTickServices(): $IGridServiceProvider[];
        levelStartTickServices(): $IGridServiceProvider[];
        serverEndTickServices(): $IGridServiceProvider[];
        levelEndtickServices(): $IGridServiceProvider[];
        services(): $Map<$Class<never>, $IGridServiceProvider>;
        constructor(services: $Map_<$Class<never>, $IGridServiceProvider>, serverStartTickServices: $IGridServiceProvider[], levelStartTickServices: $IGridServiceProvider[], levelEndtickServices: $IGridServiceProvider[], serverEndTickServices: $IGridServiceProvider[]);
    }
    /**
     * Values that may be interpreted as {@link $GridServiceContainer}.
     */
    export type $GridServiceContainer_ = { levelEndtickServices?: $IGridServiceProvider[], services?: $Map_<$Class<never>, $IGridServiceProvider>, serverStartTickServices?: $IGridServiceProvider[], serverEndTickServices?: $IGridServiceProvider[], levelStartTickServices?: $IGridServiceProvider[],  } | [levelEndtickServices?: $IGridServiceProvider[], services?: $Map_<$Class<never>, $IGridServiceProvider>, serverStartTickServices?: $IGridServiceProvider[], serverEndTickServices?: $IGridServiceProvider[], levelStartTickServices?: $IGridServiceProvider[], ];
    export class $MachineSource implements $IActionSource {
        machine(): ($IActionHost) | undefined;
        context<T>(arg0: $Class<T>): (T) | undefined;
        player(): ($Player) | undefined;
        constructor(arg0: $IActionHost_);
    }
    export class $BaseActionSource implements $IActionSource {
        machine(): ($IActionHost) | undefined;
        context<T>(arg0: $Class<T>): (T) | undefined;
        player(): ($Player) | undefined;
        constructor();
    }
    export class $BlockEntityNodeListener<T extends $IGridConnectedBlockEntity> implements $IGridNodeListener<T> {
        onSaveChanges(arg0: T, arg1: $IGridNode): void;
        onStateChanged(arg0: T, arg1: $IGridNode, arg2: $IGridNodeListener$State_): void;
        onInWorldConnectionChanged(arg0: T, arg1: $IGridNode): void;
        onOwnerChanged(arg0: T, arg1: $IGridNode): void;
        onGridChanged(arg0: T, arg1: $IGridNode): void;
        static INSTANCE: $BlockEntityNodeListener<$IGridConnectedBlockEntity>;
        constructor();
    }
    export class $StackWatcher<T> implements $IStackWatcher {
        setWatchAll(arg0: boolean): void;
        remove(arg0: $AEKey): void;
        reset(): void;
        add(arg0: $AEKey): void;
        destroy(): void;
        getHost(): T;
        constructor(arg0: $InterestManager<$StackWatcher<T>>, arg1: T);
        set watchAll(value: boolean);
        get host(): T;
    }
    export class $PlayerSource implements $IActionSource {
        machine(): ($IActionHost) | undefined;
        context<T>(arg0: $Class<T>): (T) | undefined;
        player(): ($Player) | undefined;
        constructor(arg0: $Player, arg1: $IActionHost_);
        constructor(arg0: $Player);
    }
    export class $InterestManager<T> {
        getAllStacksWatchers(): $Collection<T>;
        setWatchAll(arg0: boolean, arg1: T): void;
        remove(arg0: $AEKey, arg1: T): boolean;
        get(arg0: $AEKey): $Collection<T>;
        put(arg0: $AEKey, arg1: T): boolean;
        isEmpty(): boolean;
        containsKey(arg0: $AEKey): boolean;
        constructor(arg0: $Multimap<$AEKey, T>);
        get allStacksWatchers(): $Collection<T>;
        get empty(): boolean;
    }
}
