import { $Period, $ZoneId } from "@package/java/time";
import { $Format, $ParsePosition } from "@package/java/text";
import { $Chronology } from "@package/java/time/chrono";
import { $Appendable, $CharSequence, $Enum } from "@package/java/lang";
import { $Set_, $Locale, $Set } from "@package/java/util";
import { $TemporalField, $TemporalQuery_, $TemporalAccessor, $TemporalQuery } from "@package/java/time/temporal";

declare module "@package/java/time/format" {
    export class $ResolverStyle extends $Enum<$ResolverStyle> {
        static values(): $ResolverStyle[];
        static valueOf(arg0: string): $ResolverStyle;
        static STRICT: $ResolverStyle;
        static LENIENT: $ResolverStyle;
        static SMART: $ResolverStyle;
    }
    /**
     * Values that may be interpreted as {@link $ResolverStyle}.
     */
    export type $ResolverStyle_ = "strict" | "smart" | "lenient";
    export class $TextStyle extends $Enum<$TextStyle> {
        static values(): $TextStyle[];
        static valueOf(arg0: string): $TextStyle;
        isStandalone(): boolean;
        asStandalone(): $TextStyle;
        asNormal(): $TextStyle;
        static SHORT_STANDALONE: $TextStyle;
        static NARROW_STANDALONE: $TextStyle;
        static FULL_STANDALONE: $TextStyle;
        static FULL: $TextStyle;
        static SHORT: $TextStyle;
        static NARROW: $TextStyle;
        get standalone(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TextStyle}.
     */
    export type $TextStyle_ = "full" | "full_standalone" | "short" | "short_standalone" | "narrow" | "narrow_standalone";
    export class $DateTimeFormatter {
        format(arg0: $TemporalAccessor): string;
        parse(arg0: $CharSequence, arg1: $ParsePosition): $TemporalAccessor;
        parse<T>(arg0: $CharSequence, arg1: $TemporalQuery_<T>): T;
        parse(arg0: $CharSequence): $TemporalAccessor;
        getLocale(): $Locale;
        getZone(): $ZoneId;
        withZone(arg0: $ZoneId): $DateTimeFormatter;
        getChronology(): $Chronology;
        formatTo(arg0: $TemporalAccessor, arg1: $Appendable): void;
        static ofPattern(arg0: string): $DateTimeFormatter;
        static ofPattern(arg0: string, arg1: $Locale): $DateTimeFormatter;
        static ofLocalizedDate(arg0: $FormatStyle_): $DateTimeFormatter;
        static ofLocalizedTime(arg0: $FormatStyle_): $DateTimeFormatter;
        static ofLocalizedDateTime(arg0: $FormatStyle_, arg1: $FormatStyle_): $DateTimeFormatter;
        static ofLocalizedDateTime(arg0: $FormatStyle_): $DateTimeFormatter;
        static ofLocalizedPattern(arg0: string): $DateTimeFormatter;
        static parsedExcessDays(): $TemporalQuery<$Period>;
        static parsedLeapSecond(): $TemporalQuery<boolean>;
        withLocale(arg0: $Locale): $DateTimeFormatter;
        localizedBy(arg0: $Locale): $DateTimeFormatter;
        getDecimalStyle(): $DecimalStyle;
        withDecimalStyle(arg0: $DecimalStyle): $DateTimeFormatter;
        withChronology(arg0: $Chronology): $DateTimeFormatter;
        getResolverStyle(): $ResolverStyle;
        withResolverStyle(arg0: $ResolverStyle_): $DateTimeFormatter;
        getResolverFields(): $Set<$TemporalField>;
        withResolverFields(...arg0: $TemporalField[]): $DateTimeFormatter;
        withResolverFields(arg0: $Set_<$TemporalField>): $DateTimeFormatter;
        parseBest(arg0: $CharSequence, ...arg1: $TemporalQuery_<never>[]): $TemporalAccessor;
        parseUnresolved(arg0: $CharSequence, arg1: $ParsePosition): $TemporalAccessor;
        toFormat(arg0: $TemporalQuery_<never>): $Format;
        toFormat(): $Format;
        static ISO_OFFSET_TIME: $DateTimeFormatter;
        static ISO_LOCAL_DATE_TIME: $DateTimeFormatter;
        static RFC_1123_DATE_TIME: $DateTimeFormatter;
        static ISO_INSTANT: $DateTimeFormatter;
        static ISO_ZONED_DATE_TIME: $DateTimeFormatter;
        static ISO_OFFSET_DATE_TIME: $DateTimeFormatter;
        static ISO_DATE_TIME: $DateTimeFormatter;
        static ISO_DATE: $DateTimeFormatter;
        static ISO_TIME: $DateTimeFormatter;
        static ISO_LOCAL_TIME: $DateTimeFormatter;
        static ISO_OFFSET_DATE: $DateTimeFormatter;
        static ISO_ORDINAL_DATE: $DateTimeFormatter;
        static ISO_LOCAL_DATE: $DateTimeFormatter;
        static BASIC_ISO_DATE: $DateTimeFormatter;
        static ISO_WEEK_DATE: $DateTimeFormatter;
        get locale(): $Locale;
        get zone(): $ZoneId;
        get chronology(): $Chronology;
        get decimalStyle(): $DecimalStyle;
        get resolverStyle(): $ResolverStyle;
        get resolverFields(): $Set<$TemporalField>;
    }
    export class $DecimalStyle {
        static of(arg0: $Locale): $DecimalStyle;
        static getAvailableLocales(): $Set<$Locale>;
        getZeroDigit(): string;
        getDecimalSeparator(): string;
        getPositiveSign(): string;
        getNegativeSign(): string;
        static ofDefaultLocale(): $DecimalStyle;
        withZeroDigit(arg0: string): $DecimalStyle;
        withPositiveSign(arg0: string): $DecimalStyle;
        withNegativeSign(arg0: string): $DecimalStyle;
        withDecimalSeparator(arg0: string): $DecimalStyle;
        static STANDARD: $DecimalStyle;
        static get availableLocales(): $Set<$Locale>;
        get zeroDigit(): string;
        get decimalSeparator(): string;
        get positiveSign(): string;
        get negativeSign(): string;
    }
    export class $FormatStyle extends $Enum<$FormatStyle> {
        static values(): $FormatStyle[];
        static valueOf(arg0: string): $FormatStyle;
        static MEDIUM: $FormatStyle;
        static FULL: $FormatStyle;
        static LONG: $FormatStyle;
        static SHORT: $FormatStyle;
    }
    /**
     * Values that may be interpreted as {@link $FormatStyle}.
     */
    export type $FormatStyle_ = "full" | "long" | "medium" | "short";
}
