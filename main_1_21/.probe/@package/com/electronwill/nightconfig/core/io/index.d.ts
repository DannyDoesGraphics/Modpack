import { $Reader, $InputStream, $Writer, $OutputStream, $File_ } from "@package/java/io";
import { $FileNotFoundAction_ } from "@package/com/electronwill/nightconfig/core/file";
import { $Config, $UnmodifiableConfig, $ConfigFormat } from "@package/com/electronwill/nightconfig/core";
import { $Path_ } from "@package/java/nio/file";
import { $URL } from "@package/java/net";
import { $Charset } from "@package/java/nio/charset";
import { $List_, $Map_ } from "@package/java/util";
import { $Object, $Enum } from "@package/java/lang";

declare module "@package/com/electronwill/nightconfig/core/io" {
    export class $ConfigParser<C extends $Config> {
    }
    export interface $ConfigParser<C extends $Config> {
        parse(arg0: $Path_, arg1: $FileNotFoundAction_): C;
        parse(arg0: $File_, arg1: $Config, arg2: $ParsingMode_, arg3: $FileNotFoundAction_, arg4: $Charset): void;
        parse(arg0: $File_, arg1: $Config, arg2: $ParsingMode_, arg3: $FileNotFoundAction_): void;
        parse(arg0: $File_, arg1: $FileNotFoundAction_, arg2: $Charset): C;
        parse(arg0: $URL, arg1: $Config, arg2: $ParsingMode_): void;
        parse(arg0: $URL): C;
        parse(arg0: $Path_, arg1: $Config, arg2: $ParsingMode_, arg3: $FileNotFoundAction_, arg4: $Charset): void;
        parse(arg0: $Path_, arg1: $Config, arg2: $ParsingMode_, arg3: $FileNotFoundAction_): void;
        parse(arg0: $Path_, arg1: $FileNotFoundAction_, arg2: $Charset): C;
        parse(arg0: string, arg1: $Config, arg2: $ParsingMode_): void;
        parse(arg0: string): C;
        parse(arg0: $Reader, arg1: $Config, arg2: $ParsingMode_): void;
        parse(arg0: $Reader): C;
        parse(arg0: $File_, arg1: $FileNotFoundAction_): C;
        parse(arg0: $InputStream, arg1: $Config, arg2: $ParsingMode_, arg3: $Charset): void;
        parse(arg0: $InputStream, arg1: $Config, arg2: $ParsingMode_): void;
        parse(arg0: $InputStream, arg1: $Charset): C;
        parse(arg0: $InputStream): C;
        getFormat(): $ConfigFormat<C>;
        get format(): $ConfigFormat<C>;
    }
    export class $WritingMode extends $Enum<$WritingMode> {
        static values(): $WritingMode[];
        static valueOf(arg0: string): $WritingMode;
        static REPLACE_ATOMIC: $WritingMode;
        static REPLACE: $WritingMode;
        static APPEND: $WritingMode;
    }
    /**
     * Values that may be interpreted as {@link $WritingMode}.
     */
    export type $WritingMode_ = "replace" | "replace_atomic" | "append";
    export class $ParsingMode extends $Enum<$ParsingMode> {
        put(arg0: $Map_<string, $Object>, arg1: string, arg2: $Object): $Object;
        put(arg0: $Config, arg1: string, arg2: $Object): $Object;
        put(arg0: $Config, arg1: $List_<string>, arg2: $Object): $Object;
        static values(): $ParsingMode[];
        static valueOf(arg0: string): $ParsingMode;
        prepareParsing(arg0: $Config): void;
        static ADD: $ParsingMode;
        static MERGE: $ParsingMode;
        static REPLACE: $ParsingMode;
    }
    /**
     * Values that may be interpreted as {@link $ParsingMode}.
     */
    export type $ParsingMode_ = "replace" | "merge" | "add";
    export class $ConfigWriter {
    }
    export interface $ConfigWriter {
        writeToString(arg0: $UnmodifiableConfig): string;
        write(arg0: $UnmodifiableConfig, arg1: $Path_, arg2: $WritingMode_, arg3: $Charset): void;
        write(arg0: $UnmodifiableConfig, arg1: $File_, arg2: $WritingMode_): void;
        write(arg0: $UnmodifiableConfig, arg1: $File_, arg2: $WritingMode_, arg3: $Charset): void;
        write(arg0: $UnmodifiableConfig, arg1: $URL): void;
        write(arg0: $UnmodifiableConfig, arg1: $Writer): void;
        write(arg0: $UnmodifiableConfig, arg1: $OutputStream, arg2: $Charset): void;
        write(arg0: $UnmodifiableConfig, arg1: $OutputStream): void;
        write(arg0: $UnmodifiableConfig, arg1: $Path_, arg2: $WritingMode_): void;
    }
    /**
     * Values that may be interpreted as {@link $ConfigWriter}.
     */
    export type $ConfigWriter_ = ((arg0: $UnmodifiableConfig, arg1: $Writer) => void);
}
