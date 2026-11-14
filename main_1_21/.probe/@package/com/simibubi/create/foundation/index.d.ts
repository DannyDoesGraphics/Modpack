import { $Supplier_, $Function_ } from "@package/java/util/function";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $CompletableFuture, $Executor_ } from "@package/java/util/concurrent";
import { $ResourceManager, $ResourceManagerReloadListener, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $Runnable } from "@package/java/lang";
import { $BlockCapabilityCache } from "@package/net/neoforged/neoforge/capabilities";
export * as data from "@package/com/simibubi/create/foundation/data";
export * as utility from "@package/com/simibubi/create/foundation/utility";
export * as ponder from "@package/com/simibubi/create/foundation/ponder";
export * as item from "@package/com/simibubi/create/foundation/item";
export * as placement from "@package/com/simibubi/create/foundation/placement";
export * as blockEntity from "@package/com/simibubi/create/foundation/blockEntity";
export * as fluid from "@package/com/simibubi/create/foundation/fluid";
export * as codec from "@package/com/simibubi/create/foundation/codec";
export * as mixin from "@package/com/simibubi/create/foundation/mixin";
export * as collision from "@package/com/simibubi/create/foundation/collision";
export * as gui from "@package/com/simibubi/create/foundation/gui";
export * as block from "@package/com/simibubi/create/foundation/block";
export * as recipe from "@package/com/simibubi/create/foundation/recipe";
export * as sound from "@package/com/simibubi/create/foundation/sound";
export * as events from "@package/com/simibubi/create/foundation/events";
export * as damageTypes from "@package/com/simibubi/create/foundation/damageTypes";
export * as advancement from "@package/com/simibubi/create/foundation/advancement";
export * as render from "@package/com/simibubi/create/foundation/render";
export * as networking from "@package/com/simibubi/create/foundation/networking";
export * as model from "@package/com/simibubi/create/foundation/model";
export * as virtualWorld from "@package/com/simibubi/create/foundation/virtualWorld";
export * as map from "@package/com/simibubi/create/foundation/map";
export * as pack from "@package/com/simibubi/create/foundation/pack";
export * as particle from "@package/com/simibubi/create/foundation/particle";

declare module "@package/com/simibubi/create/foundation" {
    export class $ICapabilityProvider$BlockCapabilityCacheProvider<T, C> implements $ICapabilityProvider<T> {
        getCapability(): T;
        get capability(): T;
    }
    export class $ClientResourceReloadListener implements $ResourceManagerReloadListener {
        onResourceManagerReload(arg0: $ResourceManager): void;
        reload(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor_, arg5: $Executor_): $CompletableFuture<void>;
        getName(): string;
        constructor();
        get name(): string;
    }
    export class $ICapabilityProvider$SupplierProvider<T> implements $ICapabilityProvider<T> {
        getCapability(): T;
        get capability(): T;
    }
    export class $ICapabilityProvider$SimpleProvider<T> implements $ICapabilityProvider<T> {
        getCapability(): T;
        get capability(): T;
    }
    export class $ICapabilityProvider<T> {
        static of<T>(arg0: T): $ICapabilityProvider<T>;
        static of<T, C>(arg0: $Function_<$Runnable, $BlockCapabilityCache<T, C>>): $ICapabilityProvider<T>;
        static of<T>(arg0: $Supplier_<T>): $ICapabilityProvider<T>;
    }
    export interface $ICapabilityProvider<T> {
        getCapability(): T;
        get capability(): T;
    }
    /**
     * Values that may be interpreted as {@link $ICapabilityProvider}.
     */
    export type $ICapabilityProvider_<T> = (() => T);
    export class $CreateNBTProcessors {
        static clipboardProcessor(arg0: $CompoundTag_): $CompoundTag;
        static register(): void;
        constructor();
    }
}
