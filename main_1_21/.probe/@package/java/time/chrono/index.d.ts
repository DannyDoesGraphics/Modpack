import { $ZoneOffset, $Instant, $ZoneId, $Clock, $LocalTime } from "@package/java/time";
import { $DateTimeFormatter, $ResolverStyle_, $TextStyle_ } from "@package/java/time/format";
import { $Comparable, $Object } from "@package/java/lang";
import { $Comparator, $List, $Map_, $Locale, $Set } from "@package/java/util";
import { $TemporalField, $TemporalAmount_, $Temporal, $ChronoField_, $TemporalUnit, $ValueRange, $TemporalQuery_, $TemporalAccessor, $TemporalAdjuster, $TemporalAmount, $TemporalAdjuster_ } from "@package/java/time/temporal";

declare module "@package/java/time/chrono" {
    export class $ChronoZonedDateTime<D extends $ChronoLocalDate> {
        static from(arg0: $TemporalAccessor): $ChronoZonedDateTime<never>;
        static timeLineOrder(): $Comparator<$ChronoZonedDateTime<never>>;
    }
    export interface $ChronoZonedDateTime<D extends $ChronoLocalDate> extends $Temporal, $Comparable<$ChronoZonedDateTime<never>> {
        withZoneSameInstant(arg0: $ZoneId): $ChronoZonedDateTime<D>;
        withZoneSameLocal(arg0: $ZoneId): $ChronoZonedDateTime<D>;
        withLaterOffsetAtOverlap(): $ChronoZonedDateTime<D>;
        get(arg0: $TemporalField): number;
        equals(arg0: $Object): boolean;
        toString(): string;
        hashCode(): number;
        compareTo(arg0: $ChronoZonedDateTime<never>): number;
        getLong(arg0: $TemporalField): number;
        format(arg0: $DateTimeFormatter): string;
        isSupported(arg0: $TemporalField): boolean;
        isSupported(arg0: $TemporalUnit): boolean;
        query<R>(arg0: $TemporalQuery_<R>): R;
        getOffset(): $ZoneOffset;
        range(arg0: $TemporalField): $ValueRange;
        toInstant(): $Instant;
        getZone(): $ZoneId;
        plus(arg0: $TemporalAmount_): $ChronoZonedDateTime<D>;
        isAfter(arg0: $ChronoZonedDateTime<never>): boolean;
        isBefore(arg0: $ChronoZonedDateTime<never>): boolean;
        toLocalTime(): $LocalTime;
        isEqual(arg0: $ChronoZonedDateTime<never>): boolean;
        getChronology(): $Chronology;
        toEpochSecond(): number;
        toLocalDateTime(): $ChronoLocalDateTime<D>;
        toLocalDate(): D;
        withEarlierOffsetAtOverlap(): $ChronoZonedDateTime<D>;
        "with"(arg0: $TemporalAdjuster_): $Temporal;
        "with"(arg0: $TemporalField, arg1: number): $Temporal;
        minus(arg0: $TemporalAmount_): $Temporal;
        minus(arg0: number, arg1: $TemporalUnit): $Temporal;
        plus(arg0: number, arg1: $TemporalUnit): $Temporal;
        get offset(): $ZoneOffset;
        get zone(): $ZoneId;
        get chronology(): $Chronology;
    }
    export class $ChronoPeriod {
        static between(arg0: $ChronoLocalDate, arg1: $ChronoLocalDate): $ChronoPeriod;
    }
    export interface $ChronoPeriod extends $TemporalAmount {
        get(arg0: $TemporalUnit): number;
        equals(arg0: $Object): boolean;
        toString(): string;
        hashCode(): number;
        normalized(): $ChronoPeriod;
        isZero(): boolean;
        isNegative(): boolean;
        minus(arg0: $TemporalAmount_): $ChronoPeriod;
        plus(arg0: $TemporalAmount_): $ChronoPeriod;
        getUnits(): $List<$TemporalUnit>;
        negated(): $ChronoPeriod;
        multipliedBy(arg0: number): $ChronoPeriod;
        addTo(arg0: $Temporal): $Temporal;
        subtractFrom(arg0: $Temporal): $Temporal;
        getChronology(): $Chronology;
        get zero(): boolean;
        get negative(): boolean;
        get units(): $List<$TemporalUnit>;
        get chronology(): $Chronology;
    }
    export class $Era {
    }
    export interface $Era extends $TemporalAccessor, $TemporalAdjuster {
        get(arg0: $TemporalField): number;
        getLong(arg0: $TemporalField): number;
        getValue(): number;
        isSupported(arg0: $TemporalField): boolean;
        query<R>(arg0: $TemporalQuery_<R>): R;
        range(arg0: $TemporalField): $ValueRange;
        getDisplayName(arg0: $TextStyle_, arg1: $Locale): string;
        adjustInto(arg0: $Temporal): $Temporal;
        get value(): number;
    }
    /**
     * Values that may be interpreted as {@link $Era}.
     */
    export type $Era_ = (() => number);
    export class $ChronoLocalDateTime<D extends $ChronoLocalDate> {
        static from(arg0: $TemporalAccessor): $ChronoLocalDateTime<never>;
        static timeLineOrder(): $Comparator<$ChronoLocalDateTime<never>>;
    }
    export interface $ChronoLocalDateTime<D extends $ChronoLocalDate> extends $Temporal, $TemporalAdjuster, $Comparable<$ChronoLocalDateTime<never>> {
        equals(arg0: $Object): boolean;
        toString(): string;
        hashCode(): number;
        compareTo(arg0: $ChronoLocalDateTime<never>): number;
        format(arg0: $DateTimeFormatter): string;
        isSupported(arg0: $TemporalField): boolean;
        isSupported(arg0: $TemporalUnit): boolean;
        query<R>(arg0: $TemporalQuery_<R>): R;
        toInstant(arg0: $ZoneOffset): $Instant;
        minus(arg0: $TemporalAmount_): $ChronoLocalDateTime<D>;
        minus(arg0: number, arg1: $TemporalUnit): $ChronoLocalDateTime<D>;
        plus(arg0: number, arg1: $TemporalUnit): $ChronoLocalDateTime<D>;
        plus(arg0: $TemporalAmount_): $ChronoLocalDateTime<D>;
        adjustInto(arg0: $Temporal): $Temporal;
        atZone(arg0: $ZoneId): $ChronoZonedDateTime<D>;
        isAfter(arg0: $ChronoLocalDateTime<never>): boolean;
        isBefore(arg0: $ChronoLocalDateTime<never>): boolean;
        toLocalTime(): $LocalTime;
        isEqual(arg0: $ChronoLocalDateTime<never>): boolean;
        getChronology(): $Chronology;
        toEpochSecond(arg0: $ZoneOffset): number;
        toLocalDate(): D;
        "with"(arg0: $TemporalAdjuster_): $Temporal;
        "with"(arg0: $TemporalField, arg1: number): $Temporal;
        get chronology(): $Chronology;
    }
    export class $Chronology {
        static of(arg0: string): $Chronology;
        static from(arg0: $TemporalAccessor): $Chronology;
        static ofLocale(arg0: $Locale): $Chronology;
        static getAvailableChronologies(): $Set<$Chronology>;
        static get availableChronologies(): $Set<$Chronology>;
    }
    export interface $Chronology extends $Comparable<$Chronology> {
        equals(arg0: $Object): boolean;
        toString(): string;
        hashCode(): number;
        compareTo(arg0: $Chronology): number;
        getId(): string;
        range(arg0: $ChronoField_): $ValueRange;
        getDisplayName(arg0: $TextStyle_, arg1: $Locale): string;
        date(arg0: number, arg1: number, arg2: number): $ChronoLocalDate;
        date(arg0: $TemporalAccessor): $ChronoLocalDate;
        date(arg0: $Era_, arg1: number, arg2: number, arg3: number): $ChronoLocalDate;
        eras(): $List<$Era>;
        epochSecond(arg0: $Era_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $ZoneOffset): number;
        epochSecond(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $ZoneOffset): number;
        isLeapYear(arg0: number): boolean;
        eraOf(arg0: number): $Era;
        localDateTime(arg0: $TemporalAccessor): $ChronoLocalDateTime<$ChronoLocalDate>;
        getCalendarType(): string;
        dateEpochDay(arg0: number): $ChronoLocalDate;
        dateNow(): $ChronoLocalDate;
        dateNow(arg0: $ZoneId): $ChronoLocalDate;
        dateNow(arg0: $Clock): $ChronoLocalDate;
        prolepticYear(arg0: $Era_, arg1: number): number;
        dateYearDay(arg0: number, arg1: number): $ChronoLocalDate;
        dateYearDay(arg0: $Era_, arg1: number, arg2: number): $ChronoLocalDate;
        resolveDate(arg0: $Map_<$TemporalField, number>, arg1: $ResolverStyle_): $ChronoLocalDate;
        zonedDateTime(arg0: $Instant, arg1: $ZoneId): $ChronoZonedDateTime<$ChronoLocalDate>;
        zonedDateTime(arg0: $TemporalAccessor): $ChronoZonedDateTime<$ChronoLocalDate>;
        period(arg0: number, arg1: number, arg2: number): $ChronoPeriod;
        isIsoBased(): boolean;
        get id(): string;
        get calendarType(): string;
        get isoBased(): boolean;
    }
    export class $ChronoLocalDate {
        static from(arg0: $TemporalAccessor): $ChronoLocalDate;
        static timeLineOrder(): $Comparator<$ChronoLocalDate>;
    }
    export interface $ChronoLocalDate extends $Temporal, $TemporalAdjuster, $Comparable<$ChronoLocalDate> {
        equals(arg0: $Object): boolean;
        toString(): string;
        hashCode(): number;
        compareTo(arg0: $ChronoLocalDate): number;
        format(arg0: $DateTimeFormatter): string;
        isSupported(arg0: $TemporalUnit): boolean;
        isSupported(arg0: $TemporalField): boolean;
        "with"(arg0: $TemporalField, arg1: number): $ChronoLocalDate;
        query<R>(arg0: $TemporalQuery_<R>): R;
        plus(arg0: $TemporalAmount_): $ChronoLocalDate;
        plus(arg0: number, arg1: $TemporalUnit): $ChronoLocalDate;
        until(arg0: $Temporal, arg1: $TemporalUnit): number;
        until(arg0: $ChronoLocalDate): $ChronoPeriod;
        adjustInto(arg0: $Temporal): $Temporal;
        isAfter(arg0: $ChronoLocalDate): boolean;
        isBefore(arg0: $ChronoLocalDate): boolean;
        isLeapYear(): boolean;
        lengthOfMonth(): number;
        lengthOfYear(): number;
        toEpochDay(): number;
        atTime(arg0: $LocalTime): $ChronoLocalDateTime<never>;
        isEqual(arg0: $ChronoLocalDate): boolean;
        getEra(): $Era;
        getChronology(): $Chronology;
        "with"(arg0: $TemporalAdjuster_): $Temporal;
        minus(arg0: $TemporalAmount_): $Temporal;
        minus(arg0: number, arg1: $TemporalUnit): $Temporal;
        get leapYear(): boolean;
        get era(): $Era;
        get chronology(): $Chronology;
    }
}
