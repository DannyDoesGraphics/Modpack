import { $Serializable } from "@package/java/io";
import { $IntStream, $DoubleStream, $LongStream, $Collector } from "@package/java/util/stream";
import { $Iterator, $Map, $Collection_ } from "@package/java/util";
import { $Number, $Iterable_ } from "@package/java/lang";

declare module "@package/com/google/common/math" {
    export class $StatsAccumulator {
        populationStandardDeviation(): number;
        populationVariance(): number;
        sampleVariance(): number;
        sampleStandardDeviation(): number;
        min(): number;
        max(): number;
        add(value: number): void;
        count(): number;
        addAll(...values: number[]): void;
        addAll(values: $Iterable_<$Number>): void;
        addAll(values: $Iterator<$Number>): void;
        addAll(...values: number[]): void;
        addAll(values: $IntStream): void;
        addAll(values: $LongStream): void;
        addAll(values: $Stats): void;
        addAll(values: $StatsAccumulator): void;
        addAll(...values: number[]): void;
        addAll(values: $DoubleStream): void;
        snapshot(): $Stats;
        sum(): number;
        mean(): number;
        constructor();
    }
    export class $Quantiles$ScaleAndIndexes {
        computeInPlace(...dataset: number[]): $Map<number, number>;
        compute(...dataset: number[]): $Map<number, number>;
        compute(...dataset: number[]): $Map<number, number>;
        compute(dataset: $Collection_<$Number>): $Map<number, number>;
        compute(...dataset: number[]): $Map<number, number>;
    }
    export class $Stats implements $Serializable {
        static toStats(): $Collector<$Number, $StatsAccumulator, $Stats>;
        static meanOf(...values: number[]): number;
        static meanOf(values: $Iterator<$Number>): number;
        static meanOf(values: $Iterable_<$Number>): number;
        static meanOf(...values: number[]): number;
        static meanOf(...values: number[]): number;
        populationStandardDeviation(): number;
        populationVariance(): number;
        sampleVariance(): number;
        sampleStandardDeviation(): number;
        static fromByteArray(byteArray: number[]): $Stats;
        min(): number;
        max(): number;
        static of(...values: number[]): $Stats;
        static of(...values: number[]): $Stats;
        static of(...values: number[]): $Stats;
        static of(values: $Iterable_<$Number>): $Stats;
        static of(values: $Iterator<$Number>): $Stats;
        static of(values: $LongStream): $Stats;
        static of(values: $IntStream): $Stats;
        static of(values: $DoubleStream): $Stats;
        count(): number;
        sum(): number;
        toByteArray(): number[];
        mean(): number;
    }
}
