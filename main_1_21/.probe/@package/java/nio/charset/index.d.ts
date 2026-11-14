import { $SortedMap, $Locale, $Set } from "@package/java/util";
import { $CharSequence, $Comparable } from "@package/java/lang";
import { $CharBuffer, $ByteBuffer } from "@package/java/nio";

declare module "@package/java/nio/charset" {
    export class $Charset implements $Comparable<$Charset> {
        name(): string;
        static forName(arg0: string, arg1: $Charset): $Charset;
        static forName(arg0: string): $Charset;
        compareTo(arg0: $Charset): number;
        newDecoder(): $CharsetDecoder;
        decode(arg0: $ByteBuffer): $CharBuffer;
        newEncoder(): $CharsetEncoder;
        encode(arg0: $CharBuffer): $ByteBuffer;
        encode(arg0: string): $ByteBuffer;
        static defaultCharset(): $Charset;
        canEncode(): boolean;
        contains(arg0: $Charset): boolean;
        isRegistered(): boolean;
        static isSupported(arg0: string): boolean;
        aliases(): $Set<string>;
        static availableCharsets(): $SortedMap<string, $Charset>;
        displayName(arg0: $Locale): string;
        displayName(): string;
        get registered(): boolean;
    }
    export class $CoderResult {
        length(): number;
        isUnderflow(): boolean;
        throwException(): void;
        isOverflow(): boolean;
        isError(): boolean;
        static malformedForLength(arg0: number): $CoderResult;
        isMalformed(): boolean;
        isUnmappable(): boolean;
        static unmappableForLength(arg0: number): $CoderResult;
        static OVERFLOW: $CoderResult;
        static UNDERFLOW: $CoderResult;
        get underflow(): boolean;
        get overflow(): boolean;
        get error(): boolean;
        get malformed(): boolean;
        get unmappable(): boolean;
    }
    export class $CodingErrorAction {
        static REPORT: $CodingErrorAction;
        static IGNORE: $CodingErrorAction;
        static REPLACE: $CodingErrorAction;
    }
    export class $CharsetDecoder {
        reset(): $CharsetDecoder;
        maxCharsPerByte(): number;
        onMalformedInput(arg0: $CodingErrorAction): $CharsetDecoder;
        onUnmappableCharacter(arg0: $CodingErrorAction): $CharsetDecoder;
        decode(arg0: $ByteBuffer): $CharBuffer;
        decode(arg0: $ByteBuffer, arg1: $CharBuffer, arg2: boolean): $CoderResult;
        flush(arg0: $CharBuffer): $CoderResult;
        charset(): $Charset;
        replacement(): string;
        malformedInputAction(): $CodingErrorAction;
        unmappableCharacterAction(): $CodingErrorAction;
        replaceWith(arg0: string): $CharsetDecoder;
        averageCharsPerByte(): number;
        isAutoDetecting(): boolean;
        isCharsetDetected(): boolean;
        detectedCharset(): $Charset;
        get autoDetecting(): boolean;
        get charsetDetected(): boolean;
    }
    export class $CharsetEncoder {
        reset(): $CharsetEncoder;
        onMalformedInput(arg0: $CodingErrorAction): $CharsetEncoder;
        onUnmappableCharacter(arg0: $CodingErrorAction): $CharsetEncoder;
        maxBytesPerChar(): number;
        encode(arg0: $CharBuffer, arg1: $ByteBuffer, arg2: boolean): $CoderResult;
        encode(arg0: $CharBuffer): $ByteBuffer;
        flush(arg0: $ByteBuffer): $CoderResult;
        canEncode(arg0: $CharSequence): boolean;
        canEncode(arg0: string): boolean;
        charset(): $Charset;
        replacement(): number[];
        isLegalReplacement(arg0: number[]): boolean;
        malformedInputAction(): $CodingErrorAction;
        unmappableCharacterAction(): $CodingErrorAction;
        averageBytesPerChar(): number;
        replaceWith(arg0: number[]): $CharsetEncoder;
    }
}
