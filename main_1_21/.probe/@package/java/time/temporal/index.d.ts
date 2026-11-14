import { $Duration } from "@package/java/time";
import { $Serializable } from "@package/java/io";
import { $ResolverStyle_ } from "@package/java/time/format";
import { $Enum } from "@package/java/lang";
import { $List, $Map_, $Locale } from "@package/java/util";

declare module "@package/java/time/temporal" {
    export class $ChronoUnit extends $Enum<$ChronoUnit> implements $TemporalUnit {
        static values(): $ChronoUnit[];
        static valueOf(arg0: string): $ChronoUnit;
        between(arg0: $Temporal, arg1: $Temporal): number;
        isDurationEstimated(): boolean;
        getDuration(): $Duration;
        addTo<R extends $Temporal>(arg0: R, arg1: number): R;
        isSupportedBy(arg0: $Temporal): boolean;
        isTimeBased(): boolean;
        isDateBased(): boolean;
        static FOREVER: $ChronoUnit;
        static MICROS: $ChronoUnit;
        static SECONDS: $ChronoUnit;
        static DECADES: $ChronoUnit;
        static MILLENNIA: $ChronoUnit;
        static DAYS: $ChronoUnit;
        static MILLIS: $ChronoUnit;
        static HALF_DAYS: $ChronoUnit;
        static MONTHS: $ChronoUnit;
        static YEARS: $ChronoUnit;
        static HOURS: $ChronoUnit;
        static WEEKS: $ChronoUnit;
        static NANOS: $ChronoUnit;
        static CENTURIES: $ChronoUnit;
        static MINUTES: $ChronoUnit;
        static ERAS: $ChronoUnit;
        get durationEstimated(): boolean;
        get duration(): $Duration;
        get timeBased(): boolean;
        get dateBased(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ChronoUnit}.
     */
    export type $ChronoUnit_ = "nanos" | "micros" | "millis" | "seconds" | "minutes" | "hours" | "half_days" | "days" | "weeks" | "months" | "years" | "decades" | "centuries" | "millennia" | "eras" | "forever";
    export class $TemporalUnit {
    }
    export interface $TemporalUnit {
        toString(): string;
        between(arg0: $Temporal, arg1: $Temporal): number;
        isDurationEstimated(): boolean;
        getDuration(): $Duration;
        addTo<R extends $Temporal>(arg0: R, arg1: number): R;
        isSupportedBy(arg0: $Temporal): boolean;
        isTimeBased(): boolean;
        isDateBased(): boolean;
        get durationEstimated(): boolean;
        get duration(): $Duration;
        get timeBased(): boolean;
        get dateBased(): boolean;
    }
    export class $TemporalAccessor {
    }
    export interface $TemporalAccessor {
        get(arg0: $TemporalField): number;
        getLong(arg0: $TemporalField): number;
        isSupported(arg0: $TemporalField): boolean;
        query<R>(arg0: $TemporalQuery_<R>): R;
        range(arg0: $TemporalField): $ValueRange;
    }
    export class $TemporalField {
    }
    export interface $TemporalField {
        toString(): string;
        resolve(arg0: $Map_<$TemporalField, number>, arg1: $TemporalAccessor, arg2: $ResolverStyle_): $TemporalAccessor;
        range(): $ValueRange;
        getDisplayName(arg0: $Locale): string;
        isSupportedBy(arg0: $TemporalAccessor): boolean;
        isTimeBased(): boolean;
        getFrom(arg0: $TemporalAccessor): number;
        adjustInto<R extends $Temporal>(arg0: R, arg1: number): R;
        rangeRefinedBy(arg0: $TemporalAccessor): $ValueRange;
        isDateBased(): boolean;
        getBaseUnit(): $TemporalUnit;
        getRangeUnit(): $TemporalUnit;
        get timeBased(): boolean;
        get dateBased(): boolean;
        get baseUnit(): $TemporalUnit;
        get rangeUnit(): $TemporalUnit;
    }
    export class $TemporalAdjuster {
    }
    export interface $TemporalAdjuster {
        adjustInto(arg0: $Temporal): $Temporal;
    }
    /**
     * Values that may be interpreted as {@link $TemporalAdjuster}.
     */
    export type $TemporalAdjuster_ = ((arg0: $Temporal) => $Temporal);
    export class $TemporalQuery<R> {
    }
    export interface $TemporalQuery<R> {
        queryFrom(arg0: $TemporalAccessor): R;
    }
    /**
     * Values that may be interpreted as {@link $TemporalQuery}.
     */
    export type $TemporalQuery_<R> = ((arg0: $TemporalAccessor) => R);
    export class $Temporal {
    }
    export interface $Temporal extends $TemporalAccessor {
        isSupported(arg0: $TemporalUnit): boolean;
        "with"(arg0: $TemporalField, arg1: number): $Temporal;
        "with"(arg0: $TemporalAdjuster_): $Temporal;
        minus(arg0: number, arg1: $TemporalUnit): $Temporal;
        minus(arg0: $TemporalAmount_): $Temporal;
        plus(arg0: number, arg1: $TemporalUnit): $Temporal;
        plus(arg0: $TemporalAmount_): $Temporal;
        until(arg0: $Temporal, arg1: $TemporalUnit): number;
    }
    export class $TemporalAmount {
    }
    export interface $TemporalAmount {
        get(arg0: $TemporalUnit): number;
        getUnits(): $List<$TemporalUnit>;
        addTo(arg0: $Temporal): $Temporal;
        subtractFrom(arg0: $Temporal): $Temporal;
        get units(): $List<$TemporalUnit>;
    }
    /**
     * Values that may be interpreted as {@link $TemporalAmount}.
     */
    export type $TemporalAmount_ = string | number;
    export class $ChronoField extends $Enum<$ChronoField> implements $TemporalField {
        static values(): $ChronoField[];
        static valueOf(arg0: string): $ChronoField;
        range(): $ValueRange;
        getDisplayName(arg0: $Locale): string;
        checkValidIntValue(arg0: number): number;
        isSupportedBy(arg0: $TemporalAccessor): boolean;
        isTimeBased(): boolean;
        getFrom(arg0: $TemporalAccessor): number;
        adjustInto<R extends $Temporal>(arg0: R, arg1: number): R;
        checkValidValue(arg0: number): number;
        rangeRefinedBy(arg0: $TemporalAccessor): $ValueRange;
        isDateBased(): boolean;
        getBaseUnit(): $TemporalUnit;
        getRangeUnit(): $TemporalUnit;
        resolve(arg0: $Map_<$TemporalField, number>, arg1: $TemporalAccessor, arg2: $ResolverStyle_): $TemporalAccessor;
        static CLOCK_HOUR_OF_AMPM: $ChronoField;
        static DAY_OF_YEAR: $ChronoField;
        static MICRO_OF_DAY: $ChronoField;
        static ALIGNED_DAY_OF_WEEK_IN_MONTH: $ChronoField;
        static DAY_OF_MONTH: $ChronoField;
        static SECOND_OF_MINUTE: $ChronoField;
        static PROLEPTIC_MONTH: $ChronoField;
        static MILLI_OF_SECOND: $ChronoField;
        static NANO_OF_DAY: $ChronoField;
        static CLOCK_HOUR_OF_DAY: $ChronoField;
        static MINUTE_OF_DAY: $ChronoField;
        static ALIGNED_WEEK_OF_MONTH: $ChronoField;
        static YEAR: $ChronoField;
        static HOUR_OF_DAY: $ChronoField;
        static MILLI_OF_DAY: $ChronoField;
        static ALIGNED_DAY_OF_WEEK_IN_YEAR: $ChronoField;
        static YEAR_OF_ERA: $ChronoField;
        static AMPM_OF_DAY: $ChronoField;
        static NANO_OF_SECOND: $ChronoField;
        static SECOND_OF_DAY: $ChronoField;
        static MICRO_OF_SECOND: $ChronoField;
        static MONTH_OF_YEAR: $ChronoField;
        static EPOCH_DAY: $ChronoField;
        static ERA: $ChronoField;
        static OFFSET_SECONDS: $ChronoField;
        static HOUR_OF_AMPM: $ChronoField;
        static MINUTE_OF_HOUR: $ChronoField;
        static INSTANT_SECONDS: $ChronoField;
        static ALIGNED_WEEK_OF_YEAR: $ChronoField;
        static DAY_OF_WEEK: $ChronoField;
        get timeBased(): boolean;
        get dateBased(): boolean;
        get baseUnit(): $TemporalUnit;
        get rangeUnit(): $TemporalUnit;
    }
    /**
     * Values that may be interpreted as {@link $ChronoField}.
     */
    export type $ChronoField_ = "nano_of_second" | "nano_of_day" | "micro_of_second" | "micro_of_day" | "milli_of_second" | "milli_of_day" | "second_of_minute" | "second_of_day" | "minute_of_hour" | "minute_of_day" | "hour_of_ampm" | "clock_hour_of_ampm" | "hour_of_day" | "clock_hour_of_day" | "ampm_of_day" | "day_of_week" | "aligned_day_of_week_in_month" | "aligned_day_of_week_in_year" | "day_of_month" | "day_of_year" | "epoch_day" | "aligned_week_of_month" | "aligned_week_of_year" | "month_of_year" | "proleptic_month" | "year_of_era" | "year" | "era" | "instant_seconds" | "offset_seconds";
    export class $ValueRange implements $Serializable {
        static of(arg0: number, arg1: number): $ValueRange;
        static of(arg0: number, arg1: number, arg2: number, arg3: number): $ValueRange;
        static of(arg0: number, arg1: number, arg2: number): $ValueRange;
        getMaximum(): number;
        checkValidIntValue(arg0: number, arg1: $TemporalField): number;
        checkValidValue(arg0: number, arg1: $TemporalField): number;
        isIntValue(): boolean;
        isValidValue(arg0: number): boolean;
        getMinimum(): number;
        isValidIntValue(arg0: number): boolean;
        isFixed(): boolean;
        getLargestMinimum(): number;
        getSmallestMaximum(): number;
        get maximum(): number;
        get intValue(): boolean;
        get minimum(): number;
        get fixed(): boolean;
        get largestMinimum(): number;
        get smallestMaximum(): number;
    }
}
