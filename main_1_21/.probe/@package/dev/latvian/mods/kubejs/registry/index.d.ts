import { $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $Consumer_, $Supplier_, $Supplier } from "@package/java/util/function";
import { $Registry } from "@package/net/minecraft/core";
import { $ModelGenerator } from "@package/dev/latvian/mods/kubejs/client";
import { $DynamicOps, $Codec_, $Codec } from "@package/com/mojang/serialization";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Object } from "@package/java/lang";
import { $List, $Map_, $List_ } from "@package/java/util";
import { $KubeStartupEvent, $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";

declare module "@package/dev/latvian/mods/kubejs/registry" {
    export class $BuilderBase<T> implements $Supplier<T> {
        /**
         * Makes displayName() override language files.
         */
        formattedDisplayName(): this;
        /**
         * Combined method of formattedDisplayName().displayName(name).
         */
        formattedDisplayName(name: $Component_): this;
        getBuilderTranslationKey(): string;
        getTranslationKeyGroup(): string;
        get(): T;
        /**
         * Sets the display name for this object, e.g. `Stone`.
         * 
         * This will be overridden by a lang file if it exists.
         */
        displayName(name: $Component_): this;
        /**
         * Adds a tag to this object, e.g. `minecraft:stone`.
         */
        tag(tag: $ResourceLocation_[]): this;
        /**
         * Sets the translation key for this object, e.g. `block.minecraft.stone`.
         */
        translationKey(key: string): this;
        registryKey: $ResourceKey<$Registry<T>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(id: $ResourceLocation_);
        get builderTranslationKey(): string;
        get translationKeyGroup(): string;
    }
    export class $CustomBuilderObject extends $BuilderBase<any> {
        registryKey: $ResourceKey<$Registry<$Object>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(i: $ResourceLocation_, object: $Supplier_<$Object>);
    }
    export class $RegistryKubeEvent<T> implements $KubeStartupEvent, $AdditionalObjectRegistry {
        createCustom(id: $ResourceLocation_, object: $Supplier_<$Object>): $CustomBuilderObject;
        add<R>(registry: $ResourceKey_<$Registry<R>>, builder: $BuilderBase<R>): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        created: $List<$BuilderBase<T>>;
        constructor(registryKey: $ResourceKey_<$Registry<T>>);
    }
    export class $ServerRegistryKubeEvent<T> implements $KubeEvent {
        createCustom(id: $ResourceLocation_, object: $Supplier_<$Object>): $CustomBuilderObject;
        createFromJson(id: $ResourceLocation_, json: $JsonElement_): $CustomBuilderObject;
        create(id: $ResourceLocation_, type: $ResourceLocation_): $BuilderBase<T>;
        create(id: $ResourceLocation_): $BuilderBase<T>;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        registryKey: $ResourceKey<$Registry<T>>;
        codec: $Codec<T>;
        jsonOps: $DynamicOps<$JsonElement>;
        constructor(registryKey: $ResourceKey_<$Registry<T>>, jsonOps: $DynamicOps<$JsonElement_>, codec: $Codec_<T>, builders: $List_<$BuilderBase<never>>);
    }
    export class $ModelledBuilderBase<T> extends $BuilderBase<T> {
        /**
         * Replaces default model with custom generator.
         */
        modelGenerator(generator: $Consumer_<$ModelGenerator>): this;
        /**
         * Sets the parent model.
         */
        parentModel(id: $ResourceLocation_): this;
        /**
         * Directly set the texture map.
         */
        textures(map: $Map_<string, string>): this;
        /**
         * Sets the texture by given key.
         */
        texture(key: string[], tex: string): this;
        /**
         * Sets the texture.
         */
        texture(tex: string): this;
        registryKey: $ResourceKey<$Registry<T>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(id: $ResourceLocation_);
    }
    export class $AdditionalObjectRegistry {
    }
    export interface $AdditionalObjectRegistry {
        add<T>(registry: $ResourceKey_<$Registry<T>>, builder: $BuilderBase<T>): void;
    }
    /**
     * Values that may be interpreted as {@link $AdditionalObjectRegistry}.
     */
    export type $AdditionalObjectRegistry_ = ((registry: $ResourceKey<$Registry<any>>, builder: $BuilderBase<any>) => void);
}
