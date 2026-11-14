import { $Month_, $LocalDateTime, $ZoneOffset, $DayOfWeek, $Month, $LocalTime, $DayOfWeek_, $Duration, $Instant } from "@package/java/time";
import { $Serializable } from "@package/java/io";
import { $List, $List_ } from "@package/java/util";
import { $Comparable, $Enum } from "@package/java/lang";

declare module "@package/java/time/zone" {
    export class $ZoneOffsetTransition implements $Comparable<$ZoneOffsetTransition>, $Serializable {
        getInstant(): $Instant;
        isOverlap(): boolean;
        compareTo(arg0: $ZoneOffsetTransition): number;
        static of(arg0: $LocalDateTime, arg1: $ZoneOffset, arg2: $ZoneOffset): $ZoneOffsetTransition;
        getDuration(): $Duration;
        isGap(): boolean;
        getDateTimeAfter(): $LocalDateTime;
        toEpochSecond(): number;
        getOffsetBefore(): $ZoneOffset;
        getOffsetAfter(): $ZoneOffset;
        getDateTimeBefore(): $LocalDateTime;
        isValidOffset(arg0: $ZoneOffset): boolean;
        get instant(): $Instant;
        get overlap(): boolean;
        get duration(): $Duration;
        get gap(): boolean;
        get dateTimeAfter(): $LocalDateTime;
        get offsetBefore(): $ZoneOffset;
        get offsetAfter(): $ZoneOffset;
        get dateTimeBefore(): $LocalDateTime;
    }
    export class $ZoneRules implements $Serializable {
        static of(arg0: $ZoneOffset, arg1: $ZoneOffset, arg2: $List_<$ZoneOffsetTransition>, arg3: $List_<$ZoneOffsetTransition>, arg4: $List_<$ZoneOffsetTransitionRule>): $ZoneRules;
        static of(arg0: $ZoneOffset): $ZoneRules;
        getOffset(arg0: $LocalDateTime): $ZoneOffset;
        getOffset(arg0: $Instant): $ZoneOffset;
        getTransition(arg0: $LocalDateTime): $ZoneOffsetTransition;
        isFixedOffset(): boolean;
        getStandardOffset(arg0: $Instant): $ZoneOffset;
        getValidOffsets(arg0: $LocalDateTime): $List<$ZoneOffset>;
        getDaylightSavings(arg0: $Instant): $Duration;
        isDaylightSavings(arg0: $Instant): boolean;
        isValidOffset(arg0: $LocalDateTime, arg1: $ZoneOffset): boolean;
        nextTransition(arg0: $Instant): $ZoneOffsetTransition;
        previousTransition(arg0: $Instant): $ZoneOffsetTransition;
        getTransitions(): $List<$ZoneOffsetTransition>;
        getTransitionRules(): $List<$ZoneOffsetTransitionRule>;
        get fixedOffset(): boolean;
        get transitions(): $List<$ZoneOffsetTransition>;
        get transitionRules(): $List<$ZoneOffsetTransitionRule>;
    }
    export class $ZoneOffsetTransitionRule implements $Serializable {
        static of(arg0: $Month_, arg1: number, arg2: $DayOfWeek_, arg3: $LocalTime, arg4: boolean, arg5: $ZoneOffsetTransitionRule$TimeDefinition_, arg6: $ZoneOffset, arg7: $ZoneOffset, arg8: $ZoneOffset): $ZoneOffsetTransitionRule;
        getMonth(): $Month;
        getDayOfWeek(): $DayOfWeek;
        getDayOfMonthIndicator(): number;
        getLocalTime(): $LocalTime;
        isMidnightEndOfDay(): boolean;
        getTimeDefinition(): $ZoneOffsetTransitionRule$TimeDefinition;
        getStandardOffset(): $ZoneOffset;
        getOffsetBefore(): $ZoneOffset;
        getOffsetAfter(): $ZoneOffset;
        createTransition(arg0: number): $ZoneOffsetTransition;
        get month(): $Month;
        get dayOfWeek(): $DayOfWeek;
        get dayOfMonthIndicator(): number;
        get localTime(): $LocalTime;
        get midnightEndOfDay(): boolean;
        get timeDefinition(): $ZoneOffsetTransitionRule$TimeDefinition;
        get standardOffset(): $ZoneOffset;
        get offsetBefore(): $ZoneOffset;
        get offsetAfter(): $ZoneOffset;
    }
    export class $ZoneOffsetTransitionRule$TimeDefinition extends $Enum<$ZoneOffsetTransitionRule$TimeDefinition> {
        static values(): $ZoneOffsetTransitionRule$TimeDefinition[];
        static valueOf(arg0: string): $ZoneOffsetTransitionRule$TimeDefinition;
        createDateTime(arg0: $LocalDateTime, arg1: $ZoneOffset, arg2: $ZoneOffset): $LocalDateTime;
        static WALL: $ZoneOffsetTransitionRule$TimeDefinition;
        static UTC: $ZoneOffsetTransitionRule$TimeDefinition;
        static STANDARD: $ZoneOffsetTransitionRule$TimeDefinition;
    }
    /**
     * Values that may be interpreted as {@link $ZoneOffsetTransitionRule$TimeDefinition}.
     */
    export type $ZoneOffsetTransitionRule$TimeDefinition_ = "utc" | "wall" | "standard";
}
