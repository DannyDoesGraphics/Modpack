import { $TagKey } from "@package/net/minecraft/tags";
import { $MapCodec, $Codec_ } from "@package/com/mojang/serialization";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $Spliterator, $Iterator, $List, $Set, $List_ } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Consumer_ } from "@package/java/util/function";
import { $Holder_, $Registry, $HolderOwner, $HolderSet, $HolderSet_, $Holder, $HolderLookup$RegistryLookup } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $IHolderSetExtension$SerializationType } from "@package/net/neoforged/neoforge/common/extensions";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $Runnable_, $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/neoforged/neoforge/registries/holdersets" {
    /**
     * Holderset that represents an intersection of other holdersets. Json format:
     * 
     * {
     * "type": "neoforge:and",
     * "values":
     * [
     * // list of sub-holdersets (strings, lists, or objects)
     * ]
     * }
     */
    export class $AndHolderSet<T> extends $CompositeHolderSet<T> {
        constructor(values: $List_<$HolderSet_<T>>);
        constructor(...arg0: $HolderSet_<T>[]);
    }
    export class $NotHolderSet$Type implements $HolderSetType {
        makeStreamCodec<T>(registryKey: $ResourceKey_<$Registry<T>>): $StreamCodec<$RegistryFriendlyByteBuf, $ICustomHolderSet<T>>;
        makeCodec<T>(registryKey: $ResourceKey_<$Registry<T>>, holderCodec: $Codec_<$Holder_<T>>, forceList: boolean): $MapCodec<$ICustomHolderSet<T>>;
        constructor();
    }
    /**
     * Holderset that represents a union of other holdersets. Json format:
     * 
     * {
     * "type": "neoforge:or",
     * "values":
     * [
     * // list of sub-holdersets (strings, lists, or objects)
     * ]
     * }
     */
    export class $OrHolderSet<T> extends $CompositeHolderSet<T> {
        constructor(values: $List_<$HolderSet_<T>>);
        constructor(...arg0: $HolderSet_<T>[]);
    }
    export interface $HolderSetType extends RegistryMarked<RegistryTypes.NeoforgeHolderSetTypeTag, RegistryTypes.NeoforgeHolderSetType> {}
    export class $NotHolderSet<T> implements $ICustomHolderSet<T> {
        getRandomElement(random: $RandomSource): ($Holder<T>) | undefined;
        addInvalidationListener(runnable: $Runnable_): void;
        canSerializeIn(holderOwner: $HolderOwner<T>): boolean;
        registryLookup(): $HolderLookup$RegistryLookup<T>;
        size(): number;
        get(i: number): $Holder<T>;
        type(): $HolderSetType;
        value(): $HolderSet<T>;
        iterator(): $Iterator<$Holder<T>>;
        stream(): $Stream<$Holder<T>>;
        contains(holder: $Holder_<T>): boolean;
        unwrap(): $Either<$TagKey<T>, $List<$Holder<T>>>;
        unwrapKey(): ($TagKey<T>) | undefined;
        serializationType(): $IHolderSetExtension$SerializationType;
        spliterator(): $Spliterator<T>;
        forEach(arg0: $Consumer_<T>): void;
        constructor(registryLookup: $HolderLookup$RegistryLookup<T>, value: $HolderSet_<T>);
        [Symbol.iterator](): Iterator<$Holder<T>>
    }
    export class $HolderSetType {
    }
    export interface $HolderSetType {
        makeStreamCodec<T>(registryKey: $ResourceKey_<$Registry<T>>): $StreamCodec<$RegistryFriendlyByteBuf, $ICustomHolderSet<T>>;
        makeCodec<T>(registryKey: $ResourceKey_<$Registry<T>>, holderCodec: $Codec_<$Holder_<T>>, forceList: boolean): $MapCodec<$ICustomHolderSet<T>>;
    }
    /**
     * Values that may be interpreted as {@link $HolderSetType}.
     */
    export type $HolderSetType_ = RegistryTypes.NeoforgeHolderSetType;
    export class $OrHolderSet$Type implements $HolderSetType {
        makeStreamCodec<T>(registryKey: $ResourceKey_<$Registry<T>>): $StreamCodec<$RegistryFriendlyByteBuf, $ICustomHolderSet<T>>;
        makeCodec<T>(registryKey: $ResourceKey_<$Registry<T>>, holderCodec: $Codec_<$Holder_<T>>, forceList: boolean): $MapCodec<$ICustomHolderSet<T>>;
        constructor();
    }
    /**
     * Composite holdersets have component holdersets and possibly owner holdersets
     * (which have this holderset as a component).
     * When their component holderset(s) invalidate, they clear any cached data and then
     * invalidate their owner holdersets.
     */
    export class $CompositeHolderSet<T> implements $ICustomHolderSet<T> {
        isHomogenous(): boolean;
        getRandomElement(rand: $RandomSource): ($Holder<T>) | undefined;
        addInvalidationListener(runnable: $Runnable_): void;
        canSerializeIn(holderOwner: $HolderOwner<T>): boolean;
        homogenize(): $List<$HolderSet<T>>;
        size(): number;
        get(i: number): $Holder<T>;
        iterator(): $Iterator<$Holder<T>>;
        stream(): $Stream<$Holder<T>>;
        contains(holder: $Holder_<T>): boolean;
        unwrap(): $Either<$TagKey<T>, $List<$Holder<T>>>;
        getList(): $List<$Holder<T>>;
        getSet(): $Set<$Holder<T>>;
        getComponents(): $List<$HolderSet<T>>;
        unwrapKey(): ($TagKey<T>) | undefined;
        serializationType(): $IHolderSetExtension$SerializationType;
        spliterator(): $Spliterator<T>;
        forEach(arg0: $Consumer_<T>): void;
        constructor(components: $List_<$HolderSet_<T>>);
        [Symbol.iterator](): Iterator<$Holder<T>>
        get homogenous(): boolean;
        get list(): $List<$Holder<T>>;
        get set(): $Set<$Holder<T>>;
        get components(): $List<$HolderSet<T>>;
    }
    export class $AnyHolderSet$Type implements $HolderSetType {
        makeStreamCodec<T>(registryKey: $ResourceKey_<$Registry<T>>): $StreamCodec<$RegistryFriendlyByteBuf, $ICustomHolderSet<T>>;
        makeCodec<T>(registryKey: $ResourceKey_<$Registry<T>>, holderCodec: $Codec_<$Holder_<T>>, forceList: boolean): $MapCodec<$ICustomHolderSet<T>>;
        constructor();
    }
    export class $AnyHolderSet<T> extends $Record implements $ICustomHolderSet<T> {
        getRandomElement(arg0: $RandomSource): ($Holder<T>) | undefined;
        canSerializeIn(arg0: $HolderOwner<T>): boolean;
        registryLookup(): $HolderLookup$RegistryLookup<T>;
        size(): number;
        get(arg0: number): $Holder<T>;
        type(): $HolderSetType;
        iterator(): $Iterator<$Holder<T>>;
        stream(): $Stream<$Holder<T>>;
        contains(arg0: $Holder_<T>): boolean;
        unwrap(): $Either<$TagKey<T>, $List<$Holder<T>>>;
        unwrapKey(): ($TagKey<T>) | undefined;
        serializationType(): $IHolderSetExtension$SerializationType;
        spliterator(): $Spliterator<T>;
        forEach(arg0: $Consumer_<T>): void;
        addInvalidationListener(arg0: $Runnable_): void;
        constructor(registryLookup: $HolderLookup$RegistryLookup<T>);
        [Symbol.iterator](): Iterator<$Holder<T>>
    }
    /**
     * Values that may be interpreted as {@link $AnyHolderSet}.
     */
    export type $AnyHolderSet_<T> = { registryLookup?: $HolderLookup$RegistryLookup<any>,  } | [registryLookup?: $HolderLookup$RegistryLookup<any>, ];
    /**
     * Interface for mods' custom holderset types
     */
    export class $ICustomHolderSet<T> {
    }
    export interface $ICustomHolderSet<T> extends $HolderSet<T> {
        serializationType(): $IHolderSetExtension$SerializationType;
        /**
         * @return HolderSetType registered to `HOLDER_SET_TYPES`
         */
        type(): $HolderSetType;
    }
    export class $AndHolderSet$Type implements $HolderSetType {
        makeStreamCodec<T>(registryKey: $ResourceKey_<$Registry<T>>): $StreamCodec<$RegistryFriendlyByteBuf, $ICustomHolderSet<T>>;
        makeCodec<T>(registryKey: $ResourceKey_<$Registry<T>>, holderCodec: $Codec_<$Holder_<T>>, forceList: boolean): $MapCodec<$ICustomHolderSet<T>>;
        constructor();
    }
}
