import { $RegisterDataMapTypesEvent } from "@package/net/neoforged/neoforge/registries/datamaps";
import { $DataPackRegistryEvent$NewRegistry } from "@package/net/neoforged/neoforge/registries";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Function_ } from "@package/java/util/function";
import { $Holder } from "@package/net/minecraft/core";
import { $StateHolder } from "@package/net/minecraft/world/level/block/state";
import { $SimpleRegistry$Provider, $SimpleRegistry$Provider_, $SimpleRegistry, $SimpleRegistry$Multi } from "@package/com/simibubi/create/api/registry";
import { $Runnable_, $Record } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $BlockEntityType_, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/impl/registry" {
    export class $CreateRegistriesImpl {
        static registerDatapackRegistries(arg0: $DataPackRegistryEvent$NewRegistry): void;
        constructor();
    }
    export class $SimpleRegistryImpl$SingleImpl<K, V> extends $SimpleRegistryImpl<K, V> {
    }
    export class $SimpleRegistryImpl<K, V> implements $SimpleRegistry<K, V> {
        registerProvider(arg0: $SimpleRegistry$Provider_<K, V>): void;
        get(arg0: $StateHolder<K, never>): V;
        static single<K, V>(): $SimpleRegistry<K, V>;
        register(arg0: K, arg1: V): void;
        static multi<K, V>(): $SimpleRegistry$Multi<K, V>;
        constructor();
    }
    export class $CreateDataMapsImpl {
        static registerDataMaps(arg0: $RegisterDataMapTypesEvent): void;
        constructor();
    }
    export class $SimpleRegistryImpl$MultiImpl$ProviderWrapper<K, V> extends $Record implements $SimpleRegistry$Provider<K, $List<V>> {
        onRegister(arg0: $Runnable_): void;
    }
    /**
     * Values that may be interpreted as {@link $SimpleRegistryImpl$MultiImpl$ProviderWrapper}.
     */
    export type $SimpleRegistryImpl$MultiImpl$ProviderWrapper_<K, V> = { wrapped?: $SimpleRegistry$Provider_<any, any>,  } | [wrapped?: $SimpleRegistry$Provider_<any, any>, ];
    export class $TagProviderImpl<K, V> implements $SimpleRegistry$Provider<K, V> {
        static getBeHolder(arg0: $BlockEntityType_<never>): $Holder<$BlockEntityType<never>>;
        get(arg0: K): V;
        onRegister(arg0: $Runnable_): void;
        constructor(arg0: $TagKey_<K>, arg1: $Function_<K, $Holder<K>>, arg2: V);
    }
    export class $SimpleRegistryImpl$MultiImpl<K, V> extends $SimpleRegistryImpl<K, $List<V>> implements $SimpleRegistry$Multi<K, V> {
    }
}
