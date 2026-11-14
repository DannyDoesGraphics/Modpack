import { $Codec_, $Codec } from "@package/com/mojang/serialization";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/util/random" {
    export class $WeightedEntry$IntrusiveBase implements $WeightedEntry {
        getWeight(): $Weight;
        constructor(weight: $Weight);
        constructor(weight: number);
        get weight(): $Weight;
    }
    export class $SimpleWeightedRandomList<E> extends $WeightedRandomList<$WeightedEntry$Wrapper<E>> {
        getRandomValue(random: $RandomSource): ($WeightedEntry$Wrapper<E>) | undefined;
        static wrappedCodec<E>(elementCodec: $Codec_<E>): $Codec<$SimpleWeightedRandomList<E>>;
        static wrappedCodecAllowingEmpty<E>(elementCodec: $Codec_<E>): $Codec<$SimpleWeightedRandomList<E>>;
        static builder<E>(): $SimpleWeightedRandomList$Builder<E>;
        static single<E>(data: E): $SimpleWeightedRandomList<E>;
        static empty<E>(): $SimpleWeightedRandomList<E>;
    }
    export class $WeightedEntry {
        static wrap<T>(data: T, weight: number): $WeightedEntry$Wrapper<T>;
    }
    export interface $WeightedEntry {
        getWeight(): $Weight;
        get weight(): $Weight;
    }
    /**
     * Values that may be interpreted as {@link $WeightedEntry}.
     */
    export type $WeightedEntry_ = (() => $Weight);
    export class $SimpleWeightedRandomList$Builder<E> {
        add(data: E, weight: number): $SimpleWeightedRandomList$Builder<E>;
        add(data: E): $SimpleWeightedRandomList$Builder<E>;
        build(): $SimpleWeightedRandomList<E>;
        constructor();
    }
    export class $WeightedRandomList<E extends $WeightedEntry> {
        isEmpty(): boolean;
        static create<E extends $WeightedEntry>(items: $List_<E>): $WeightedRandomList<E>;
        static create<E extends $WeightedEntry>(): $WeightedRandomList<E>;
        static create<E extends $WeightedEntry>(...items: E[]): $WeightedRandomList<E>;
        unwrap(): $List<any>;
        static codec<E extends $WeightedEntry>(elementCodec: $Codec_<E>): $Codec<$WeightedRandomList<E>>;
        getRandom(random: $RandomSource): (E) | undefined;
        get empty(): boolean;
    }
    export class $Weight {
        static of(weight: number): $Weight;
        asInt(): number;
        static CODEC: $Codec<$Weight>;
    }
    export class $WeightedEntry$Wrapper<T> extends $Record implements $WeightedEntry {
        getWeight(): $Weight;
        data(): T;
        weight(): $Weight;
        static codec<E>(elementCodec: $Codec_<E>): $Codec<$WeightedEntry$Wrapper<E>>;
        constructor(data: T, weight: $Weight);
    }
    /**
     * Values that may be interpreted as {@link $WeightedEntry$Wrapper}.
     */
    export type $WeightedEntry$Wrapper_<T> = { weight?: $Weight, data?: any,  } | [weight?: $Weight, data?: any, ];
    export class $WeightedRandom {
        static getTotalWeight(entries: $List_<$WeightedEntry_>): number;
        static getWeightedItem<T extends $WeightedEntry>(entries: $List_<T>, weightedIndex: number): (T) | undefined;
        static getRandomItem<T extends $WeightedEntry>(random: $RandomSource, entries: $List_<T>): (T) | undefined;
        static getRandomItem<T extends $WeightedEntry>(random: $RandomSource, entries: $List_<T>, totalWeight: number): (T) | undefined;
    }
}
