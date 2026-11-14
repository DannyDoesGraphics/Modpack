import { $Predicate_ } from "@package/java/util/function";
import { $DynamicCommandExceptionType, $SimpleCommandExceptionType } from "@package/com/mojang/brigadier/exceptions";
import { $SuggestionsBuilder } from "@package/com/mojang/brigadier/suggestion";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $EntitySelectorParser } from "@package/net/minecraft/commands/arguments/selector";
import { $Record } from "@package/java/lang";

declare module "@package/net/minecraft/commands/arguments/selector/options" {
    export class $EntitySelectorOptions$Modifier {
    }
    export interface $EntitySelectorOptions$Modifier {
        handle(parser: $EntitySelectorParser): void;
    }
    /**
     * Values that may be interpreted as {@link $EntitySelectorOptions$Modifier}.
     */
    export type $EntitySelectorOptions$Modifier_ = ((arg0: $EntitySelectorParser) => void);
    export class $EntitySelectorOptions {
        static suggestNames(parser: $EntitySelectorParser, builder: $SuggestionsBuilder): void;
        static get(parser: $EntitySelectorParser, id: string, cursor: number): $EntitySelectorOptions$Modifier;
        static register(id: string, handler: $EntitySelectorOptions$Modifier_, predicate: $Predicate_<$EntitySelectorParser>, tooltip: $Component_): void;
        static bootStrap(): void;
        static ERROR_LEVEL_NEGATIVE: $SimpleCommandExceptionType;
        static ERROR_LIMIT_TOO_SMALL: $SimpleCommandExceptionType;
        static ERROR_INAPPLICABLE_OPTION: $DynamicCommandExceptionType;
        static ERROR_ENTITY_TYPE_INVALID: $DynamicCommandExceptionType;
        static ERROR_RANGE_NEGATIVE: $SimpleCommandExceptionType;
        static ERROR_GAME_MODE_INVALID: $DynamicCommandExceptionType;
        static ERROR_SORT_UNKNOWN: $DynamicCommandExceptionType;
        static ERROR_UNKNOWN_OPTION: $DynamicCommandExceptionType;
        constructor();
    }
    export class $EntitySelectorOptions$Option extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $EntitySelectorOptions$Option}.
     */
    export type $EntitySelectorOptions$Option_ = { description?: $Component_, modifier?: $EntitySelectorOptions$Modifier_, canUse?: $Predicate_<$EntitySelectorParser>,  } | [description?: $Component_, modifier?: $EntitySelectorOptions$Modifier_, canUse?: $Predicate_<$EntitySelectorParser>, ];
}
