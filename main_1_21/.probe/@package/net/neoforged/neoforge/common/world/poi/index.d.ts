import { $Predicate_, $Consumer_, $IntFunction_ } from "@package/java/util/function";
import { $PoiType } from "@package/net/minecraft/world/entity/ai/village/poi";
import { $Stream } from "@package/java/util/stream";
import { $Event } from "@package/net/neoforged/bus/api";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Object } from "@package/java/lang";
import { $Spliterator, $Iterator, $Set_, $Collection_, $Set } from "@package/java/util";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";

declare module "@package/net/neoforged/neoforge/common/world/poi" {
    export class $PoiStateSet implements $Set<$BlockState> {
        remove(arg0: $Object): boolean;
        size(): number;
        clear(): void;
        isEmpty(): boolean;
        add(arg0: $BlockState_): boolean;
        toArray<T>(arg0: T[]): T[];
        toArray(): $Object[];
        iterator(): $Iterator<$BlockState>;
        contains(arg0: $Object): boolean;
        addAll(arg0: $Collection_<$BlockState_>): boolean;
        removeIf(arg0: $Predicate_<$BlockState>): boolean;
        removeAll(arg0: $Collection_<never>): boolean;
        retainAll(arg0: $Collection_<never>): boolean;
        containsAll(arg0: $Collection_<never>): boolean;
        spliterator(): $Spliterator<$BlockState>;
        toArray<T>(arg0: $IntFunction_<T[]>): T[];
        stream(): $Stream<$BlockState>;
        parallelStream(): $Stream<$BlockState>;
        forEach(arg0: $Consumer_<$BlockState>): void;
        constructor(arg0: $Set_<$BlockState_>);
        [Symbol.iterator](): Iterator<$BlockState>
        get empty(): boolean;
    }
    export class $PoiTypeExtender {
        static extendPoiTypes(): void;
    }
    export class $ExtendPoiTypesEvent extends $Event implements $IModBusEvent {
        addStatesToPoi(arg0: $ResourceKey_<$PoiType>, arg1: $Set_<$BlockState_>): void;
        addBlockToPoi(arg0: $ResourceKey_<$PoiType>, arg1: $Block_): void;
    }
}
