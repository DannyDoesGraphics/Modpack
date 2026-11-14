import { $File_ } from "@package/java/io";
import { $Instant } from "@package/java/time";
import { $Path_ } from "@package/java/nio/file";
import { $Terminal, $MouseEvent } from "@package/org/jline/terminal";
import { $AttributedString } from "@package/org/jline/utils";
import { $Pattern } from "@package/java/util/regex";
import { $CharSequence, $Enum, $Comparable, $Object, $Iterable } from "@package/java/lang";
import { $Iterator, $List, $Map_, $Map, $ListIterator, $Collection_, $List_ } from "@package/java/util";
import { $KeyMap } from "@package/org/jline/keymap";

declare module "@package/org/jline/reader" {
    export class $Parser$ParseContext extends $Enum<$Parser$ParseContext> {
        static values(): $Parser$ParseContext[];
        static valueOf(arg0: string): $Parser$ParseContext;
        static SECONDARY_PROMPT: $Parser$ParseContext;
        static UNSPECIFIED: $Parser$ParseContext;
        static SPLIT_LINE: $Parser$ParseContext;
        static COMPLETE: $Parser$ParseContext;
        static ACCEPT_LINE: $Parser$ParseContext;
    }
    /**
     * Values that may be interpreted as {@link $Parser$ParseContext}.
     */
    export type $Parser$ParseContext_ = "unspecified" | "accept_line" | "split_line" | "complete" | "secondary_prompt";
    export class $Expander {
    }
    export interface $Expander {
        expandVar(arg0: string): string;
        expandHistory(arg0: $History, arg1: string): string;
    }
    export class $Candidate implements $Comparable<$Candidate> {
        displ(): string;
        descr(): string;
        group(): string;
        value(): string;
        compareTo(arg0: $Candidate): number;
        suffix(): string;
        key(): string;
        complete(): boolean;
        constructor(arg0: string);
        constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: boolean);
    }
    export class $LineReader {
        static ACCEPT_AND_HOLD: string;
        static HISTORY_SIZE: string;
        static ARGUMENT_BASE: string;
        static VI_FIND_PREV_CHAR: string;
        static DOWN_LINE: string;
        static VI_BACKWARD_CHAR: string;
        static FRESH_LINE: string;
        static VI_BEGINNING_OF_LINE: string;
        static FOCUS_OUT: string;
        static VI_ADD_NEXT: string;
        static BEGINNING_OF_BUFFER_OR_HISTORY: string;
        static HISTORY_BEGINNING_SEARCH_BACKWARD: string;
        static HISTORY_FILE_SIZE: string;
        static EXCHANGE_POINT_AND_MARK: string;
        static BACKWARD_DELETE_CHAR: string;
        static TRANSPOSE_WORDS: string;
        static VI_DELETE_CHAR: string;
        static VIOPP: string;
        static AMBIGUOUS_BINDING: string;
        static DELETE_WORD: string;
        static FEATURES_MAX_BUFFER_SIZE: string;
        static BEEP: string;
        static VI_GOTO_COLUMN: string;
        static COPY_PREV_WORD: string;
        static VI_YANK_EOL: string;
        static BELL_STYLE: string;
        static BACKWARD_WORD: string;
        static BEGINNING_OF_LINE_HIST: string;
        static COPY_REGION_AS_KILL: string;
        static END_OF_LINE_HIST: string;
        static VI_UNDO_CHANGE: string;
        static VI_BACKWARD_BLANK_WORD_END: string;
        static VI_REPEAT_FIND: string;
        static EXPAND_OR_COMPLETE: string;
        static VI_OPEN_LINE_ABOVE: string;
        static LIST_EXPAND: string;
        static LIST_CHOICES: string;
        static ACCEPT_LINE_AND_DOWN_HISTORY: string;
        static VI_QUOTED_INSERT: string;
        static CHARACTER_SEARCH: string;
        static SECONDARY_PROMPT_PATTERN: string;
        static DELETE_CHAR: string;
        static VI_DIGIT_OR_BEGINNING_OF_LINE: string;
        static WHAT_CURSOR_POSITION: string;
        static COMPLETION_STYLE_LIST_GROUP: string;
        static VI_SET_BUFFER: string;
        static VI_JOIN: string;
        static VI_CMD_MODE: string;
        static COMPLETION_STYLE_STARTING: string;
        static VI_REPEAT_SEARCH: string;
        static VISUAL_MODE: string;
        static SEND_BREAK: string;
        static VI_FIND_PREV_CHAR_SKIP: string;
        static UP_CASE_WORD: string;
        static INFER_NEXT_HISTORY: string;
        static BEGIN_PASTE: string;
        static ACCEPT_AND_INFER_NEXT_HISTORY: string;
        static DIGIT_ARGUMENT: string;
        static VI_REPLACE_CHARS: string;
        static HISTORY_FILE: string;
        static MENU_EXPAND_OR_COMPLETE: string;
        static EMACS_EDITING_MODE: string;
        static REMOVE_SUFFIX_CHARS: string;
        static KILL_REGION: string;
        static YANK_POP: string;
        static SET_LOCAL_HISTORY: string;
        static EMACS_BACKWARD_WORD: string;
        static BEGINNING_OF_LINE: string;
        static KILL_LINE: string;
        static REDRAW_LINE: string;
        static LINE_OFFSET: string;
        static VI_CHANGE_EOL: string;
        static END_OF_HISTORY: string;
        static HISTORY_INCREMENTAL_SEARCH_FORWARD: string;
        static HISTORY_INCREMENTAL_PATTERN_SEARCH_FORWARD: string;
        static BACKWARD_KILL_LINE: string;
        static UP_HISTORY: string;
        static HISTORY_IGNORE: string;
        static VI_CHANGE: string;
        static MENU_COMPLETE: string;
        static DO_LOWERCASE_VERSION: string;
        static UNDO: string;
        static ORIGINAL_GROUP_NAME: string;
        static LIST_MAX: string;
        static COMPLETION_STYLE_LIST_DESCRIPTION: string;
        static COMPLETE_WORD: string;
        static INSERT_COMMENT: string;
        static COMPLETION_STYLE_LIST_STARTING: string;
        static VI_FORWARD_WORD_END: string;
        static READ_COMMAND: string;
        static COMPLETION_STYLE_DESCRIPTION: string;
        static DOWN_CASE_WORD: string;
        static COMPLETION_STYLE_LIST_BACKGROUND: string;
        static DOWN_LINE_OR_HISTORY: string;
        static BIND_TTY_SPECIAL_CHARS: string;
        static VI_BACKWARD_WORD: string;
        static VI_YANK_WHOLE_LINE: string;
        static EDITING_MODE: string;
        static VI_CHANGE_WHOLE_LINE: string;
        static VIINS: string;
        static MOUSE: string;
        static CALLBACK_KEYMAP: string;
        static YANK: string;
        static BEGINNING_OF_HISTORY: string;
        static VI_SUBSTITUTE: string;
        static CHARACTER_SEARCH_BACKWARD: string;
        static MAGIC_SPACE: string;
        static REDISPLAY: string;
        static VI_UP_LINE_OR_HISTORY: string;
        static ERRORS: string;
        static HISTORY_INCREMENTAL_PATTERN_SEARCH_BACKWARD: string;
        static INDENTATION: string;
        static SUGGESTIONS_MIN_BUFFER_SIZE: string;
        static PROP_SUPPORT_PARSEDLINE: string;
        static INSERT_CLOSE_PAREN: string;
        static HISTORY_SEARCH_FORWARD: string;
        static VI_HISTORY_SEARCH_FORWARD: string;
        static DISABLE_HISTORY: string;
        static VI_MATCH_BRACKET: string;
        static PUT_REPLACE_SELECTION: string;
        static VI_BACKWARD_BLANK_WORD: string;
        static DISABLE_COMPLETION: string;
        static FORWARD_WORD: string;
        static CALLBACK_FINISH: string;
        static CLEAR_SCREEN: string;
        static VI_END_OF_LINE: string;
        static HISTORY_BEGINNING_SEARCH_FORWARD: string;
        static VI_DELETE: string;
        static EXECUTE_NAMED_CMD: string;
        static RECURSIVE_EDIT: string;
        static KILL_WHOLE_LINE: string;
        static EMACS: string;
        static VI_INSERT_BOL: string;
        static EXPAND_HISTORY: string;
        static SELF_INSERT: string;
        static COMPLETION_STYLE_GROUP: string;
        static ACCEPT_LINE: string;
        static END_OF_LINE: string;
        static VI_PUT_AFTER: string;
        static CALLBACK_INIT: string;
        static HISTORY_INCREMENTAL_SEARCH_BACKWARD: string;
        static UP_LINE: string;
        static VI_OPEN_LINE_BELOW: string;
        static VI_REV_REPEAT_FIND: string;
        static UNIVERSAL_ARGUMENT: string;
        static VI_REPEAT_CHANGE: string;
        static VI_OPER_SWAP_CASE: string;
        static UNDEFINED_KEY: string;
        static VI_KILL_EOL: string;
        static VICMD: string;
        static EXPAND_OR_COMPLETE_PREFIX: string;
        static COMPLETE_PREFIX: string;
        static DOWN_LINE_OR_SEARCH: string;
        static VI_INSERT: string;
        static SPLIT_UNDO: string;
        static SELF_INSERT_UNMETA: string;
        static VI_DOWN_LINE_OR_HISTORY: string;
        static KEYMAP: string;
        static VI_FORWARD_CHAR: string;
        static VI_KILL_LINE: string;
        static UP_LINE_OR_HISTORY: string;
        static MENU: string;
        static SET_MARK_COMMAND: string;
        static BACKWARD_KILL_WORD: string;
        static VI_HISTORY_SEARCH_BACKWARD: string;
        static SEARCH_TERMINATORS: string;
        static COMPLETION_STYLE_LIST_SELECTION: string;
        static OTHERS_GROUP_NAME: string;
        static INSERT_CLOSE_CURLY: string;
        static EXPAND_WORD: string;
        static FORWARD_CHAR: string;
        static MAIN: string;
        static COMPLETION_STYLE_BACKGROUND: string;
        static VI_YANK: string;
        static INSERT_CLOSE_SQUARE: string;
        static EDIT_AND_EXECUTE_COMMAND: string;
        static OVERWRITE_MODE: string;
        static REVERSE_MENU_COMPLETE: string;
        static VI_BACKWARD_DELETE_CHAR: string;
        static QUOTED_INSERT: string;
        static DELETE_CHAR_OR_LIST: string;
        static VI_FORWARD_WORD: string;
        static HISTORY_SEARCH_BACKWARD: string;
        static VI_FIRST_NON_BLANK: string;
        static SAFE: string;
        static WORDCHARS: string;
        static VISUAL: string;
        static MENU_LIST_MAX: string;
        static VI_ADD_EOL: string;
        static VI_FIND_NEXT_CHAR: string;
        static SPELL_WORD: string;
        static END_OF_BUFFER_OR_HISTORY: string;
        static EMACS_FORWARD_WORD: string;
        static TRANSPOSE_CHARS: string;
        static VI_REV_REPEAT_SEARCH: string;
        static INSERT_LAST_WORD: string;
        static PREFER_VISIBLE_BELL: string;
        static KILL_BUFFER: string;
        static VI_INSERT_COMMENT: string;
        static BLINK_MATCHING_PAREN: string;
        static VI_FORWARD_BLANK_WORD: string;
        static NEG_ARGUMENT: string;
        static UP_LINE_OR_SEARCH: string;
        static FOCUS_IN: string;
        static VISUAL_LINE_MODE: string;
        static VI_BACKWARD_KILL_WORD: string;
        static VI_PUT_BEFORE: string;
        static VI_FIND_NEXT_CHAR_SKIP: string;
        static VI_REPLACE: string;
        static VI_BACKWARD_WORD_END: string;
        static REDO: string;
        static CAPITALIZE_WORD: string;
        static BACKWARD_CHAR: string;
        static KILL_WORD: string;
        static MENU_SELECT: string;
        static VI_FETCH_HISTORY: string;
        static VI_FORWARD_BLANK_WORD_END: string;
        static COMPLETION_STYLE_SELECTION: string;
        static BACKWARD_DELETE_WORD: string;
        static DOWN_HISTORY: string;
        static COMMENT_BEGIN: string;
        static CLEAR: string;
        static VI_SWAP_CASE: string;
    }
    export interface $LineReader {
        variable(arg0: string, arg1: $Object): $LineReader;
        isSet(arg0: $LineReader$Option_): boolean;
        readLine(arg0: string, arg1: string, arg2: string, arg3: string): string;
        readLine(arg0: string, arg1: string, arg2: string): string;
        readLine(arg0: string, arg1: string, arg2: $MaskingCallback, arg3: string): string;
        readLine(): string;
        readLine(arg0: string): string;
        readLine(arg0: string): string;
        readLine(arg0: string, arg1: string): string;
        option(arg0: $LineReader$Option_, arg1: boolean): $LineReader;
        getKeys(): $KeyMap<$Binding>;
        getBuffer(): $Buffer;
        getTerminal(): $Terminal;
        printAbove(arg0: string): void;
        printAbove(arg0: $AttributedString): void;
        getParser(): $Parser;
        setVariable(arg0: string, arg1: $Object): void;
        readMouseEvent(): $MouseEvent;
        defaultKeyMaps(): $Map<string, $KeyMap<$Binding>>;
        isReading(): boolean;
        callWidget(arg0: string): void;
        getVariables(): $Map<string, $Object>;
        getVariable(arg0: string): $Object;
        setOpt(arg0: $LineReader$Option_): void;
        unsetOpt(arg0: $LineReader$Option_): void;
        getWidgets(): $Map<string, $Widget>;
        getBuiltinWidgets(): $Map<string, $Widget>;
        getAppName(): string;
        runMacro(arg0: string): void;
        getHistory(): $History;
        getHighlighter(): $Highlighter;
        getExpander(): $Expander;
        getKeyMaps(): $Map<string, $KeyMap<$Binding>>;
        getKeyMap(): string;
        setKeyMap(arg0: string): boolean;
        getParsedLine(): $ParsedLine;
        getSearchTerm(): string;
        getRegionActive(): $LineReader$RegionType;
        getRegionMark(): number;
        addCommandsInBuffer(arg0: $Collection_<string>): void;
        editAndAddInBuffer(arg0: $File_): void;
        getLastBinding(): string;
        getTailTip(): string;
        setTailTip(arg0: string): void;
        setAutosuggestion(arg0: $LineReader$SuggestionType_): void;
        getAutosuggestion(): $LineReader$SuggestionType;
        get keys(): $KeyMap<$Binding>;
        get buffer(): $Buffer;
        get terminal(): $Terminal;
        get parser(): $Parser;
        get reading(): boolean;
        get variables(): $Map<string, $Object>;
        set opt(value: $LineReader$Option_);
        get widgets(): $Map<string, $Widget>;
        get builtinWidgets(): $Map<string, $Widget>;
        get appName(): string;
        get history(): $History;
        get highlighter(): $Highlighter;
        get expander(): $Expander;
        get keyMaps(): $Map<string, $KeyMap<$Binding>>;
        get parsedLine(): $ParsedLine;
        get searchTerm(): string;
        get regionActive(): $LineReader$RegionType;
        get regionMark(): number;
        get lastBinding(): string;
    }
    export class $Highlighter {
    }
    export interface $Highlighter {
        setErrorPattern(arg0: $Pattern): void;
        setErrorIndex(arg0: number): void;
        highlight(arg0: $LineReader, arg1: string): $AttributedString;
        set errorPattern(value: $Pattern);
        set errorIndex(value: number);
    }
    export class $MaskingCallback {
    }
    export interface $MaskingCallback {
        display(arg0: string): string;
        history(arg0: string): string;
    }
    export class $Binding {
    }
    export interface $Binding {
    }
    export class $LineReader$Option extends $Enum<$LineReader$Option> {
        isDef(): boolean;
        static values(): $LineReader$Option[];
        static valueOf(arg0: string): $LineReader$Option;
        isSet(arg0: $Map_<$LineReader$Option_, boolean>): boolean;
        static BRACKETED_PASTE: $LineReader$Option;
        static LIST_ROWS_FIRST: $LineReader$Option;
        static HISTORY_VERIFY: $LineReader$Option;
        static GLOB_COMPLETE: $LineReader$Option;
        static RECOGNIZE_EXACT: $LineReader$Option;
        static DISABLE_EVENT_EXPANSION: $LineReader$Option;
        static ERASE_LINE_ON_FINISH: $LineReader$Option;
        static AUTO_FRESH_LINE: $LineReader$Option;
        static GROUP: $LineReader$Option;
        static USE_FORWARD_SLASH: $LineReader$Option;
        static GROUP_PERSIST: $LineReader$Option;
        static AUTO_REMOVE_SLASH: $LineReader$Option;
        static CASE_INSENSITIVE: $LineReader$Option;
        static HISTORY_IGNORE_SPACE: $LineReader$Option;
        static EMPTY_WORD_OPTIONS: $LineReader$Option;
        static HISTORY_INCREMENTAL: $LineReader$Option;
        static HISTORY_IGNORE_DUPS: $LineReader$Option;
        static MOUSE: $LineReader$Option;
        static AUTO_MENU_LIST: $LineReader$Option;
        static LIST_PACKED: $LineReader$Option;
        static DISABLE_HIGHLIGHTER: $LineReader$Option;
        static CASE_INSENSITIVE_SEARCH: $LineReader$Option;
        static HISTORY_TIMESTAMPED: $LineReader$Option;
        static INSERT_BRACKET: $LineReader$Option;
        static COMPLETE_MATCHER_CAMELCASE: $LineReader$Option;
        static AUTO_MENU: $LineReader$Option;
        static AUTO_LIST: $LineReader$Option;
        static MENU_COMPLETE: $LineReader$Option;
        static COMPLETE_IN_WORD: $LineReader$Option;
        static AUTO_GROUP: $LineReader$Option;
        static AUTO_PARAM_SLASH: $LineReader$Option;
        static HISTORY_REDUCE_BLANKS: $LineReader$Option;
        static LIST_AMBIGUOUS: $LineReader$Option;
        static DELAY_LINE_WRAP: $LineReader$Option;
        static INSERT_TAB: $LineReader$Option;
        static COMPLETE_MATCHER_TYPO: $LineReader$Option;
        static HISTORY_BEEP: $LineReader$Option;
        get def(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $LineReader$Option}.
     */
    export type $LineReader$Option_ = "complete_in_word" | "complete_matcher_camelcase" | "complete_matcher_typo" | "disable_event_expansion" | "history_verify" | "history_ignore_space" | "history_ignore_dups" | "history_reduce_blanks" | "history_beep" | "history_incremental" | "history_timestamped" | "auto_group" | "auto_menu" | "auto_list" | "auto_menu_list" | "recognize_exact" | "group" | "group_persist" | "case_insensitive" | "list_ambiguous" | "list_packed" | "list_rows_first" | "glob_complete" | "menu_complete" | "auto_fresh_line" | "delay_line_wrap" | "auto_param_slash" | "auto_remove_slash" | "use_forward_slash" | "insert_tab" | "mouse" | "disable_highlighter" | "bracketed_paste" | "erase_line_on_finish" | "case_insensitive_search" | "insert_bracket" | "empty_word_options";
    export class $LineReader$SuggestionType extends $Enum<$LineReader$SuggestionType> {
        static values(): $LineReader$SuggestionType[];
        static valueOf(arg0: string): $LineReader$SuggestionType;
        static COMPLETER: $LineReader$SuggestionType;
        static TAIL_TIP: $LineReader$SuggestionType;
        static NONE: $LineReader$SuggestionType;
        static HISTORY: $LineReader$SuggestionType;
    }
    /**
     * Values that may be interpreted as {@link $LineReader$SuggestionType}.
     */
    export type $LineReader$SuggestionType_ = "none" | "history" | "completer" | "tail_tip";
    export class $ParsedLine {
    }
    export interface $ParsedLine {
        wordCursor(): number;
        line(): string;
        cursor(): number;
        words(): $List<string>;
        word(): string;
        wordIndex(): number;
    }
    export class $History$Entry {
    }
    export interface $History$Entry {
        index(): number;
        line(): string;
        time(): $Instant;
    }
    export class $Widget {
    }
    export interface $Widget extends $Binding {
        apply(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Widget}.
     */
    export type $Widget_ = (() => boolean);
    export class $Buffer {
    }
    export interface $Buffer {
        atChar(arg0: number): number;
        currChar(arg0: number): boolean;
        currChar(): number;
        moveXY(arg0: number, arg1: number): boolean;
        upToCursor(): string;
        backspace(): boolean;
        backspace(arg0: number): number;
        length(): number;
        toString(): string;
        clear(): boolean;
        substring(arg0: number, arg1: number): string;
        substring(arg0: number): string;
        write(arg0: number, arg1: boolean): void;
        write(arg0: $CharSequence, arg1: boolean): void;
        write(arg0: $CharSequence): void;
        write(arg0: number): void;
        "delete"(): boolean;
        "delete"(arg0: number): number;
        copy(): $Buffer;
        nextChar(): number;
        prevChar(): number;
        cursor(): number;
        cursor(arg0: number): boolean;
        move(arg0: number): number;
        up(): boolean;
        down(): boolean;
        copyFrom(arg0: $Buffer): void;
    }
    export class $Parser {
        static REGEX_VARIABLE: string;
        static REGEX_COMMAND: string;
    }
    export interface $Parser {
        isEscapeChar(arg0: string): boolean;
        validCommandName(arg0: string): boolean;
        validVariableName(arg0: string): boolean;
        getCommand(arg0: string): string;
        parse(arg0: string, arg1: number, arg2: $Parser$ParseContext_): $ParsedLine;
        parse(arg0: string, arg1: number): $ParsedLine;
        getVariable(arg0: string): string;
    }
    /**
     * Values that may be interpreted as {@link $Parser}.
     */
    export type $Parser_ = ((arg0: string, arg1: number, arg2: $Parser$ParseContext) => $ParsedLine);
    export class $Completer {
    }
    export interface $Completer {
        complete(arg0: $LineReader, arg1: $ParsedLine, arg2: $List_<$Candidate>): void;
    }
    /**
     * Values that may be interpreted as {@link $Completer}.
     */
    export type $Completer_ = ((arg0: $LineReader, arg1: $ParsedLine, arg2: $List<$Candidate>) => void);
    export class $History {
        [Symbol.iterator](): Iterator<$History$Entry>
    }
    export interface $History extends $Iterable<$History$Entry> {
        moveToFirst(): boolean;
        moveToLast(): boolean;
        moveToEnd(): void;
        resetIndex(): void;
        index(): number;
        size(): number;
        get(arg0: number): string;
        append(arg0: $Path_, arg1: boolean): void;
        load(): void;
        isEmpty(): boolean;
        add(arg0: string): void;
        add(arg0: $Instant, arg1: string): void;
        iterator(arg0: number): $ListIterator<$History$Entry>;
        next(): boolean;
        last(): number;
        first(): number;
        write(arg0: $Path_, arg1: boolean): void;
        read(arg0: $Path_, arg1: boolean): void;
        current(): string;
        save(): void;
        previous(): boolean;
        attach(arg0: $LineReader): void;
        purge(): void;
        isPersistable(arg0: $History$Entry): boolean;
        reverseIterator(): $Iterator<$History$Entry>;
        reverseIterator(arg0: number): $Iterator<$History$Entry>;
        moveTo(arg0: number): boolean;
        iterator(): $Iterator<$History$Entry>;
        [Symbol.iterator](): Iterator<$History$Entry>
        get empty(): boolean;
    }
    export class $LineReader$RegionType extends $Enum<$LineReader$RegionType> {
        static values(): $LineReader$RegionType[];
        static valueOf(arg0: string): $LineReader$RegionType;
        static PASTE: $LineReader$RegionType;
        static LINE: $LineReader$RegionType;
        static CHAR: $LineReader$RegionType;
        static NONE: $LineReader$RegionType;
    }
    /**
     * Values that may be interpreted as {@link $LineReader$RegionType}.
     */
    export type $LineReader$RegionType_ = "none" | "char" | "line" | "paste";
}
