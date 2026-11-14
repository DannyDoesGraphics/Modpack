import { $Supplier_, $Consumer_ } from "@package/java/util/function";
import { $RegistrarOption } from "@package/dev/architectury/registry/registries/options";
import { $Holder, $Registry } from "@package/net/minecraft/core";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Iterable } from "@package/java/lang";
import { $Spliterator, $Iterator, $Map$Entry, $Set } from "@package/java/util";
import { $OptionalSupplier } from "@package/dev/architectury/utils";
export * as options from "@package/dev/architectury/registry/registries/options";

declare module "@package/dev/architectury/registry/registries" {
    export class $RegistrySupplier<T> {
    }
    export interface $RegistrySupplier<T> extends $DeferredSupplier<T>, $Holder<T> {
        getRegistrar(): $Registrar<T>;
        getRegistrarManager(): $RegistrarManager;
        listen(callback: $Consumer_<T>): void;
        get registrar(): $Registrar<T>;
        get registrarManager(): $RegistrarManager;
    }
    export class $RegistrarManager {
        forRegistry<T>(key: $ResourceKey_<$Registry<T>>, callback: $Consumer_<$Registrar<T>>): void;
        static get(modId: string): $RegistrarManager;
        /**
         * @deprecated
         */
        get<T>(registry: $Registry<T>): $Registrar<T>;
        get<T>(key: $ResourceKey_<$Registry<T>>): $Registrar<T>;
        builder<T>(registryId: $ResourceLocation_, ...typeGetter: T[]): $RegistrarBuilder<T>;
        /**
         * @deprecated
         */
        static getId<T>(object: T, fallback: $Registry<T>): $ResourceLocation;
        static getId<T>(object: T, fallback: $ResourceKey_<$Registry<T>>): $ResourceLocation;
        getModId(): string;
        get modId(): string;
    }
    export class $DeferredRegister<T> implements $Iterable<$RegistrySupplier<T>> {
        getRegistrar(): $Registrar<$RegistrySupplier<T>>;
        getRegistrarManager(): $RegistrarManager;
        iterator(): $Iterator<$RegistrySupplier<$RegistrySupplier<T>>>;
        register(): void;
        register<R extends T>(id: string, supplier: $Supplier_<R>): $RegistrySupplier<R>;
        register<R extends T>(id: $ResourceLocation_, supplier: $Supplier_<R>): $RegistrySupplier<R>;
        static create<T>(modId: string, key: $ResourceKey_<$Registry<T>>): $DeferredRegister<T>;
        spliterator(): $Spliterator<$RegistrySupplier<T>>;
        forEach(arg0: $Consumer_<$RegistrySupplier<T>>): void;
        [Symbol.iterator](): Iterator<$RegistrySupplier<$RegistrySupplier<T>>>
        get registrar(): $Registrar<$RegistrySupplier<T>>;
        get registrarManager(): $RegistrarManager;
    }
    export class $Registrar<T> {
    }
    export interface $Registrar<T> extends $Iterable<T> {
        getRawId(arg0: T): number;
        byRawId(arg0: number): T;
        get(arg0: $ResourceLocation_): T;
        wrap<R extends T>(obj: R): $RegistrySupplier<R>;
        contains(arg0: $ResourceLocation_): boolean;
        entrySet(): $Set<$Map$Entry<$ResourceKey<T>, T>>;
        getKey(arg0: T): ($ResourceKey<T>) | undefined;
        register<E extends T>(arg0: $ResourceLocation_, arg1: $Supplier_<E>): $RegistrySupplier<E>;
        key(): $ResourceKey<$Registry<T>>;
        listen(arg0: $ResourceLocation_, arg1: $Consumer_<T>): void;
        listen<R extends T>(supplier: $RegistrySupplier<R>, callback: $Consumer_<R>): void;
        getId(arg0: T): $ResourceLocation;
        containsValue(arg0: T): boolean;
        delegate(arg0: $ResourceLocation_): $RegistrySupplier<T>;
        getHolder(arg0: $ResourceKey_<T>): $Holder<T>;
        getHolder(id: $ResourceLocation_): $Holder<T>;
        getIds(): $Set<$ResourceLocation>;
        get ids(): $Set<$ResourceLocation>;
    }
    export class $DeferredSupplier<T> {
    }
    export interface $DeferredSupplier<T> extends $OptionalSupplier<T> {
        getRegistryKey(): $ResourceKey<$Registry<T>>;
        getRegistryId(): $ResourceLocation;
        getKey(): $ResourceKey<T>;
        getId(): $ResourceLocation;
        get registryKey(): $ResourceKey<$Registry<T>>;
        get registryId(): $ResourceLocation;
        get key(): $ResourceKey<T>;
        get id(): $ResourceLocation;
    }
    export class $RegistrarBuilder<T> {
    }
    export interface $RegistrarBuilder<T> {
        syncToClients(): $RegistrarBuilder<T>;
        option(arg0: $RegistrarOption): $RegistrarBuilder<T>;
        build(): $Registrar<T>;
    }
}
