import { $Serializable, $PrintStream, $InputStream, $PrintWriter } from "@package/java/io";
import { $Annotation } from "@package/java/lang/annotation";
import { $Configuration, $ModuleDescriptor } from "@package/java/lang/module";
import { $ThreadFactory } from "@package/java/util/concurrent";
import { $DynamicConstantDesc, $ConstantDesc, $ClassDesc, $Constable } from "@package/java/lang/constant";
import { $ProtectionDomain } from "@package/java/security";
import { $Spliterator, $Iterator, $Enumeration, $List, $Locale, $List_, $Comparator, $Map, $Set } from "@package/java/util";
import { $CharBuffer } from "@package/java/nio";
import { $Duration_ } from "@package/java/time";
import { $Supplier_, $Function_, $Consumer_ } from "@package/java/util/function";
import { $IntStream, $Stream } from "@package/java/util/stream";
import { $URL } from "@package/java/net";
import { $Method, $AnnotatedElement, $GenericDeclaration, $Field, $AnnotatedType, $RecordComponent, $Type, $TypeVariable, $Constructor, $AccessFlag } from "@package/java/lang/reflect";
import { $TypeDescriptor$OfField, $MethodHandles$Lookup } from "@package/java/lang/invoke";
import { $Charset } from "@package/java/nio/charset";
export * as ref from "@package/java/lang/ref";
export * as module from "@package/java/lang/module";
export * as invoke from "@package/java/lang/invoke";
export * as foreign from "@package/java/lang/foreign";
export * as constant from "@package/java/lang/constant";
export * as reflect from "@package/java/lang/reflect";
export * as annotation from "@package/java/lang/annotation";
export * as management from "@package/java/lang/management";

declare module "@package/java/lang" {
    export class $String implements $Serializable, $Comparable<string>, $CharSequence, $Constable, $ConstantDesc {
        length(): number;
        getChars(arg0: number, arg1: number, arg2: string[], arg3: number): void;
        compareTo(arg0: string): number;
        indexOf(arg0: string, arg1: number, arg2: number): number;
        indexOf(arg0: string, arg1: number): number;
        indexOf(arg0: number): number;
        indexOf(arg0: number, arg1: number): number;
        indexOf(arg0: number, arg1: number, arg2: number): number;
        indexOf(arg0: string): number;
        static valueOf(arg0: number): string;
        static valueOf(arg0: string[]): string;
        static valueOf(arg0: $Object): string;
        static valueOf(arg0: string[], arg1: number, arg2: number): string;
        static valueOf(arg0: number): string;
        static valueOf(arg0: number): string;
        static valueOf(arg0: string): string;
        static valueOf(arg0: boolean): string;
        static valueOf(arg0: number): string;
        charAt(arg0: number): string;
        codePointAt(arg0: number): number;
        codePointBefore(arg0: number): number;
        codePointCount(arg0: number, arg1: number): number;
        offsetByCodePoints(arg0: number, arg1: number): number;
        getBytes(): number[];
        /**
         * @deprecated
         */
        getBytes(arg0: number, arg1: number, arg2: number[], arg3: number): void;
        getBytes(arg0: string): number[];
        getBytes(arg0: $Charset): number[];
        contentEquals(arg0: $CharSequence): boolean;
        contentEquals(arg0: $StringBuffer): boolean;
        regionMatches(arg0: number, arg1: string, arg2: number, arg3: number): boolean;
        regionMatches(arg0: boolean, arg1: number, arg2: string, arg3: number, arg4: number): boolean;
        startsWith(arg0: string): boolean;
        startsWith(arg0: string, arg1: number): boolean;
        lastIndexOf(arg0: number): number;
        lastIndexOf(arg0: string): number;
        lastIndexOf(arg0: number, arg1: number): number;
        lastIndexOf(arg0: string, arg1: number): number;
        substring(arg0: number, arg1: number): string;
        substring(arg0: number): string;
        isEmpty(): boolean;
        replace(arg0: string, arg1: string): string;
        replace(arg0: $CharSequence, arg1: $CharSequence): string;
        matches(arg0: string): boolean;
        replaceFirst(arg0: string, arg1: string): string;
        replaceAll(arg0: string, arg1: string): string;
        split(arg0: string): string[];
        split(arg0: string, arg1: number): string[];
        splitWithDelimiters(arg0: string, arg1: number): string[];
        static join(arg0: $CharSequence, arg1: $Iterable_<$CharSequence>): string;
        static join(arg0: $CharSequence, ...arg1: $CharSequence[]): string;
        toLowerCase(): string;
        toLowerCase(arg0: $Locale): string;
        toUpperCase(): string;
        toUpperCase(arg0: $Locale): string;
        trim(): string;
        strip(): string;
        stripLeading(): string;
        stripTrailing(): string;
        lines(): $Stream<string>;
        repeat(arg0: number): string;
        isBlank(): boolean;
        toCharArray(): string[];
        static format(arg0: $Locale, arg1: string, ...arg2: $Object[]): string;
        static format(arg0: string, ...arg1: $Object[]): string;
        codePoints(): $IntStream;
        equalsIgnoreCase(arg0: string): boolean;
        compareToIgnoreCase(arg0: string): number;
        endsWith(arg0: string): boolean;
        subSequence(arg0: number, arg1: number): $CharSequence;
        concat(arg0: string): string;
        contains(arg0: $CharSequence): boolean;
        indent(arg0: number): string;
        stripIndent(): string;
        translateEscapes(): string;
        chars(): $IntStream;
        transform<R>(arg0: $Function_<string, R>): R;
        formatted(...arg0: $Object[]): string;
        static copyValueOf(arg0: string[], arg1: number, arg2: number): string;
        static copyValueOf(arg0: string[]): string;
        intern(): string;
        describeConstable(): (string) | undefined;
        resolveConstantDesc(arg0: $MethodHandles$Lookup): $Object;
        static CASE_INSENSITIVE_ORDER: $Comparator<string>;
        constructor(arg0: $StringBuilder);
        constructor(arg0: number[], arg1: number, arg2: number, arg3: $Charset);
        constructor(arg0: number[], arg1: string);
        constructor(arg0: number[], arg1: $Charset);
        constructor(arg0: number[], arg1: number, arg2: number);
        constructor(arg0: number[]);
        constructor(arg0: $StringBuffer);
        constructor(arg0: string[], arg1: number, arg2: number);
        constructor(arg0: string[]);
        constructor(arg0: string);
        constructor();
        constructor(arg0: number[], arg1: number, arg2: number, arg3: string);
        /**
         * @deprecated
         */
        constructor(arg0: number[], arg1: number);
        /**
         * @deprecated
         */
        constructor(arg0: number[], arg1: number, arg2: number, arg3: number);
        constructor(arg0: number[], arg1: number, arg2: number);
        get empty(): boolean;
        get blank(): boolean;
    }
    export class $ModuleLayer$Controller {
        addReads(arg0: $Module, arg1: $Module): $ModuleLayer$Controller;
        addExports(arg0: $Module, arg1: string, arg2: $Module): $ModuleLayer$Controller;
        addOpens(arg0: $Module, arg1: string, arg2: $Module): $ModuleLayer$Controller;
        layer(): $ModuleLayer;
        enableNativeAccess(arg0: $Module): $ModuleLayer$Controller;
    }
    export class $ModuleLayer {
        static empty(): $ModuleLayer;
        static boot(): $ModuleLayer;
        modules(): $Set<$Module>;
        configuration(): $Configuration;
        parents(): $List<$ModuleLayer>;
        findModule(arg0: string): ($Module) | undefined;
        defineModules(arg0: $Configuration, arg1: $Function_<string, $ClassLoader>): $ModuleLayer;
        static defineModules(arg0: $Configuration, arg1: $List_<$ModuleLayer>, arg2: $Function_<string, $ClassLoader>): $ModuleLayer$Controller;
        static defineModulesWithOneLoader(arg0: $Configuration, arg1: $List_<$ModuleLayer>, arg2: $ClassLoader): $ModuleLayer$Controller;
        defineModulesWithOneLoader(arg0: $Configuration, arg1: $ClassLoader): $ModuleLayer;
        static defineModulesWithManyLoaders(arg0: $Configuration, arg1: $List_<$ModuleLayer>, arg2: $ClassLoader): $ModuleLayer$Controller;
        defineModulesWithManyLoaders(arg0: $Configuration, arg1: $ClassLoader): $ModuleLayer;
        findLoader(arg0: string): $ClassLoader;
    }
    export class $Number implements $Serializable {
        byteValue(): number;
        shortValue(): number;
        intValue(): number;
        longValue(): number;
        floatValue(): number;
        doubleValue(): number;
        constructor();
    }
    export class $Byte extends $Number implements $Comparable<number>, $Constable {
        static toString(arg0: number): string;
        static hashCode(arg0: number): number;
        static compareUnsigned(arg0: number, arg1: number): number;
        compareTo(arg0: number): number;
        static compare(arg0: number, arg1: number): number;
        static valueOf(arg0: string): number;
        static valueOf(arg0: string, arg1: number): number;
        static valueOf(arg0: number): number;
        static decode(arg0: string): number;
        describeConstable(): ($DynamicConstantDesc<number>) | undefined;
        static toUnsignedLong(arg0: number): number;
        static toUnsignedInt(arg0: number): number;
        static parseByte(arg0: string): number;
        static parseByte(arg0: string, arg1: number): number;
        static BYTES: number;
        static SIZE: number;
        static MAX_VALUE: number;
        static MIN_VALUE: number;
        static TYPE: $Class<number>;
        /**
         * @deprecated
         */
        constructor(arg0: number);
        /**
         * @deprecated
         */
        constructor(arg0: string);
    }
    export class $Iterable<T> {
        [Symbol.iterator](): Iterator<T>
    }
    export interface $Iterable<T> {
        iterator(): $Iterator<T>;
        spliterator(): $Spliterator<T>;
        forEach(arg0: $Consumer_<T>): void;
        [Symbol.iterator](): Iterator<T>
    }
    /**
     * Values that may be interpreted as {@link $Iterable}.
     */
    export type $Iterable_<T> = T[] | (() => $Iterator<T>);
    export class $Character implements $Serializable, $Comparable<string>, $Constable {
        static getName(arg0: number): string;
        static isJavaIdentifierStart(arg0: string): boolean;
        static isJavaIdentifierStart(arg0: number): boolean;
        static isJavaIdentifierPart(arg0: string): boolean;
        static isJavaIdentifierPart(arg0: number): boolean;
        static toString(arg0: number): string;
        static toString(arg0: string): string;
        static hashCode(arg0: string): number;
        static reverseBytes(arg0: string): string;
        compareTo(arg0: string): number;
        static isDigit(arg0: string): boolean;
        static isDigit(arg0: number): boolean;
        static isLowerCase(arg0: string): boolean;
        static isLowerCase(arg0: number): boolean;
        static isUpperCase(arg0: number): boolean;
        static isUpperCase(arg0: string): boolean;
        static isWhitespace(arg0: string): boolean;
        static isWhitespace(arg0: number): boolean;
        static compare(arg0: string, arg1: string): number;
        charValue(): string;
        static valueOf(arg0: string): string;
        static toChars(arg0: number): string[];
        static toChars(arg0: number, arg1: string[], arg2: number): number;
        static isHighSurrogate(arg0: string): boolean;
        static isLowSurrogate(arg0: string): boolean;
        static isSurrogate(arg0: string): boolean;
        static isSupplementaryCodePoint(arg0: number): boolean;
        static highSurrogate(arg0: number): string;
        static lowSurrogate(arg0: number): string;
        static toCodePoint(arg0: string, arg1: string): number;
        static codePointAt(arg0: $CharSequence, arg1: number): number;
        static codePointAt(arg0: string[], arg1: number, arg2: number): number;
        static codePointAt(arg0: string[], arg1: number): number;
        static codePointBefore(arg0: $CharSequence, arg1: number): number;
        static codePointBefore(arg0: string[], arg1: number): number;
        static codePointBefore(arg0: string[], arg1: number, arg2: number): number;
        static codePointCount(arg0: $CharSequence, arg1: number, arg2: number): number;
        static codePointCount(arg0: string[], arg1: number, arg2: number): number;
        static offsetByCodePoints(arg0: string[], arg1: number, arg2: number, arg3: number, arg4: number): number;
        static offsetByCodePoints(arg0: $CharSequence, arg1: number, arg2: number): number;
        static toLowerCase(arg0: string): string;
        static toLowerCase(arg0: number): number;
        static toUpperCase(arg0: number): number;
        static toUpperCase(arg0: string): string;
        static isBmpCodePoint(arg0: number): boolean;
        describeConstable(): ($DynamicConstantDesc<string>) | undefined;
        static getType(arg0: string): number;
        static getType(arg0: number): number;
        static isLetter(arg0: string): boolean;
        static isLetter(arg0: number): boolean;
        static isLetterOrDigit(arg0: number): boolean;
        static isLetterOrDigit(arg0: string): boolean;
        static isValidCodePoint(arg0: number): boolean;
        static isTitleCase(arg0: number): boolean;
        static isTitleCase(arg0: string): boolean;
        static isDefined(arg0: string): boolean;
        static isDefined(arg0: number): boolean;
        static isIdeographic(arg0: number): boolean;
        static isUnicodeIdentifierStart(arg0: number): boolean;
        static isUnicodeIdentifierStart(arg0: string): boolean;
        static isUnicodeIdentifierPart(arg0: number): boolean;
        static isUnicodeIdentifierPart(arg0: string): boolean;
        static isIdentifierIgnorable(arg0: number): boolean;
        static isIdentifierIgnorable(arg0: string): boolean;
        static isEmoji(arg0: number): boolean;
        static isEmojiPresentation(arg0: number): boolean;
        static isEmojiModifier(arg0: number): boolean;
        static isEmojiModifierBase(arg0: number): boolean;
        static isEmojiComponent(arg0: number): boolean;
        static isExtendedPictographic(arg0: number): boolean;
        static toTitleCase(arg0: string): string;
        static toTitleCase(arg0: number): number;
        static digit(arg0: string, arg1: number): number;
        static digit(arg0: number, arg1: number): number;
        static getNumericValue(arg0: number): number;
        static getNumericValue(arg0: string): number;
        static isSpaceChar(arg0: string): boolean;
        static isSpaceChar(arg0: number): boolean;
        static isISOControl(arg0: number): boolean;
        static isISOControl(arg0: string): boolean;
        static getDirectionality(arg0: string): number;
        static getDirectionality(arg0: number): number;
        static isMirrored(arg0: string): boolean;
        static isMirrored(arg0: number): boolean;
        static isSurrogatePair(arg0: string, arg1: string): boolean;
        static charCount(arg0: number): number;
        /**
         * @deprecated
         */
        static isJavaLetter(arg0: string): boolean;
        /**
         * @deprecated
         */
        static isJavaLetterOrDigit(arg0: string): boolean;
        static isAlphabetic(arg0: number): boolean;
        /**
         * @deprecated
         */
        static isSpace(arg0: string): boolean;
        static forDigit(arg0: number, arg1: number): string;
        static codePointOf(arg0: string): number;
        static MAX_SURROGATE: string;
        static BYTES: number;
        static LOWERCASE_LETTER: number;
        static MIN_LOW_SURROGATE: string;
        static FORMAT: number;
        static DIRECTIONALITY_RIGHT_TO_LEFT_ISOLATE: number;
        static DIRECTIONALITY_FIRST_STRONG_ISOLATE: number;
        static MODIFIER_LETTER: number;
        static OTHER_NUMBER: number;
        static MAX_RADIX: number;
        static DIRECTIONALITY_RIGHT_TO_LEFT: number;
        static MODIFIER_SYMBOL: number;
        static DASH_PUNCTUATION: number;
        static DECIMAL_DIGIT_NUMBER: number;
        static MAX_LOW_SURROGATE: string;
        static TYPE: $Class<string>;
        static DIRECTIONALITY_POP_DIRECTIONAL_FORMAT: number;
        static DIRECTIONALITY_COMMON_NUMBER_SEPARATOR: number;
        static DIRECTIONALITY_EUROPEAN_NUMBER: number;
        static DIRECTIONALITY_BOUNDARY_NEUTRAL: number;
        static LINE_SEPARATOR: number;
        static SURROGATE: number;
        static DIRECTIONALITY_EUROPEAN_NUMBER_SEPARATOR: number;
        static MIN_CODE_POINT: number;
        static SIZE: number;
        static TITLECASE_LETTER: number;
        static START_PUNCTUATION: number;
        static UPPERCASE_LETTER: number;
        static DIRECTIONALITY_NONSPACING_MARK: number;
        static UNASSIGNED: number;
        static DIRECTIONALITY_WHITESPACE: number;
        static DIRECTIONALITY_UNDEFINED: number;
        static ENCLOSING_MARK: number;
        static DIRECTIONALITY_OTHER_NEUTRALS: number;
        static DIRECTIONALITY_POP_DIRECTIONAL_ISOLATE: number;
        static MIN_RADIX: number;
        static DIRECTIONALITY_RIGHT_TO_LEFT_ARABIC: number;
        static DIRECTIONALITY_SEGMENT_SEPARATOR: number;
        static DIRECTIONALITY_LEFT_TO_RIGHT_OVERRIDE: number;
        static CONNECTOR_PUNCTUATION: number;
        static CONTROL: number;
        static MAX_CODE_POINT: number;
        static CURRENCY_SYMBOL: number;
        static DIRECTIONALITY_RIGHT_TO_LEFT_EMBEDDING: number;
        static PARAGRAPH_SEPARATOR: number;
        static DIRECTIONALITY_ARABIC_NUMBER: number;
        static MAX_VALUE: string;
        static END_PUNCTUATION: number;
        static MIN_SUPPLEMENTARY_CODE_POINT: number;
        static FINAL_QUOTE_PUNCTUATION: number;
        static SPACE_SEPARATOR: number;
        static MIN_HIGH_SURROGATE: string;
        static LETTER_NUMBER: number;
        static DIRECTIONALITY_RIGHT_TO_LEFT_OVERRIDE: number;
        static PRIVATE_USE: number;
        static DIRECTIONALITY_EUROPEAN_NUMBER_TERMINATOR: number;
        static NON_SPACING_MARK: number;
        static DIRECTIONALITY_PARAGRAPH_SEPARATOR: number;
        static DIRECTIONALITY_LEFT_TO_RIGHT_EMBEDDING: number;
        static DIRECTIONALITY_LEFT_TO_RIGHT_ISOLATE: number;
        static MIN_VALUE: string;
        static COMBINING_SPACING_MARK: number;
        static MIN_SURROGATE: string;
        static INITIAL_QUOTE_PUNCTUATION: number;
        static OTHER_PUNCTUATION: number;
        static OTHER_SYMBOL: number;
        static MAX_HIGH_SURROGATE: string;
        static DIRECTIONALITY_LEFT_TO_RIGHT: number;
        static MATH_SYMBOL: number;
        static OTHER_LETTER: number;
        /**
         * @deprecated
         */
        constructor(arg0: string);
    }
    export class $IllegalStateException extends $RuntimeException {
        constructor(arg0: $Throwable);
        constructor(arg0: string, arg1: $Throwable);
        constructor(arg0: string);
        constructor();
    }
    export class $StringBuffer extends $AbstractStringBuilder implements $Appendable, $Serializable, $Comparable<$StringBuffer>, $CharSequence {
        append(arg0: number): $StringBuffer;
        append(arg0: number): $StringBuffer;
        append(arg0: number): $StringBuffer;
        append(arg0: string[], arg1: number, arg2: number): $StringBuffer;
        append(arg0: boolean): $StringBuffer;
        append(arg0: string): $StringBuffer;
        reverse(): $StringBuffer;
        compareTo(arg0: $StringBuffer): number;
        insert(arg0: number, arg1: $Object): $StringBuffer;
        replace(arg0: number, arg1: number, arg2: string): $StringBuffer;
        appendCodePoint(arg0: number): $StringBuffer;
        deleteCharAt(arg0: number): $StringBuffer;
        constructor(arg0: $CharSequence);
        constructor(arg0: string);
        constructor(arg0: number);
        constructor();
    }
    export class $StringBuilder extends $AbstractStringBuilder implements $Appendable, $Serializable, $Comparable<$StringBuilder>, $CharSequence {
        reverse(): $StringBuilder;
        compareTo(arg0: $StringBuilder): number;
        insert(arg0: number, arg1: $CharSequence): $StringBuilder;
        insert(arg0: number, arg1: string): $StringBuilder;
        insert(arg0: number, arg1: string[]): $StringBuilder;
        insert(arg0: number, arg1: number): $StringBuilder;
        insert(arg0: number, arg1: number): $StringBuilder;
        insert(arg0: number, arg1: number): $StringBuilder;
        insert(arg0: number, arg1: number): $StringBuilder;
        insert(arg0: number, arg1: string): $StringBuilder;
        insert(arg0: number, arg1: boolean): $StringBuilder;
        insert(arg0: number, arg1: $CharSequence, arg2: number, arg3: number): $StringBuilder;
        replace(arg0: number, arg1: number, arg2: string): $StringBuilder;
        repeat(arg0: $CharSequence, arg1: number): $StringBuilder;
        "delete"(arg0: number, arg1: number): $StringBuilder;
        deleteCharAt(arg0: number): $StringBuilder;
        append(arg0: $CharSequence): $Appendable;
        constructor(arg0: $CharSequence);
        constructor(arg0: string);
        constructor(arg0: number);
        constructor();
    }
    export class $ThreadLocal<T> {
        remove(): void;
        get(): T;
        set(arg0: T): void;
        static withInitial<S>(arg0: $Supplier_<S>): $ThreadLocal<S>;
        constructor();
    }
    export class $Record {
    }
    export class $Thread$Builder {
    }
    export interface $Thread$Builder {
        unstarted(arg0: $Runnable_): $Thread;
        name(arg0: string): $Thread$Builder;
        name(arg0: string, arg1: number): $Thread$Builder;
        factory(): $ThreadFactory;
        start(arg0: $Runnable_): $Thread;
        uncaughtExceptionHandler(arg0: $Thread$UncaughtExceptionHandler_): $Thread$Builder;
        inheritInheritableThreadLocals(arg0: boolean): $Thread$Builder;
    }
    export class $IllegalArgumentException extends $RuntimeException {
        constructor(arg0: $Throwable);
        constructor(arg0: string, arg1: $Throwable);
        constructor(arg0: string);
        constructor();
    }
    export class $Exception extends $Throwable {
        constructor(arg0: $Throwable);
        constructor(arg0: string, arg1: $Throwable);
        constructor(arg0: string);
        constructor();
    }
    export class $ThreadGroup implements $Thread$UncaughtExceptionHandler {
        getName(): string;
        interrupt(): void;
        list(): void;
        getParent(): $ThreadGroup;
        /**
         * @deprecated
         */
        checkAccess(): void;
        /**
         * @deprecated
         */
        setDaemon(arg0: boolean): void;
        getMaxPriority(): number;
        /**
         * @deprecated
         */
        isDaemon(): boolean;
        activeCount(): number;
        enumerate(arg0: $ThreadGroup[]): number;
        enumerate(arg0: $ThreadGroup[], arg1: boolean): number;
        enumerate(arg0: $Thread[]): number;
        enumerate(arg0: $Thread[], arg1: boolean): number;
        uncaughtException(arg0: $Thread, arg1: $Throwable): void;
        /**
         * @deprecated
         */
        stop(): void;
        /**
         * @deprecated
         */
        suspend(): void;
        /**
         * @deprecated
         */
        resume(): void;
        parentOf(arg0: $ThreadGroup): boolean;
        activeGroupCount(): number;
        setMaxPriority(arg0: number): void;
        /**
         * @deprecated
         */
        isDestroyed(): boolean;
        /**
         * @deprecated
         */
        destroy(): void;
        constructor(arg0: string);
        constructor(arg0: $ThreadGroup, arg1: string);
        get name(): string;
        get parent(): $ThreadGroup;
        get destroyed(): boolean;
    }
    export class $Runtime$Version implements $Comparable<$Runtime$Version> {
        version(): $List<number>;
        compareTo(arg0: $Runtime$Version): number;
        update(): number;
        feature(): number;
        /**
         * @deprecated
         */
        security(): number;
        static parse(arg0: string): $Runtime$Version;
        /**
         * @deprecated
         */
        major(): number;
        /**
         * @deprecated
         */
        minor(): number;
        pre(): (string) | undefined;
        build(): (number) | undefined;
        optional(): (string) | undefined;
        interim(): number;
        equalsIgnoreOptional(arg0: $Object): boolean;
        patch(): number;
        compareToIgnoreOptional(arg0: $Runtime$Version): number;
    }
    export class $NamedPackage {
    }
    export class $CharSequence {
        static compare(arg0: $CharSequence, arg1: $CharSequence): number;
    }
    export interface $CharSequence {
        length(): number;
        toString(): string;
        charAt(arg0: number): string;
        isEmpty(): boolean;
        codePoints(): $IntStream;
        subSequence(arg0: number, arg1: number): $CharSequence;
        chars(): $IntStream;
        get empty(): boolean;
    }
    export class $ClassLoader {
        getName(): string;
        loadClass(arg0: string): $Class<never>;
        static getPlatformClassLoader(): $ClassLoader;
        static getSystemClassLoader(): $ClassLoader;
        static getSystemResourceAsStream(arg0: string): $InputStream;
        getResourceAsStream(arg0: string): $InputStream;
        static getSystemResource(arg0: string): $URL;
        getResource(arg0: string): $URL;
        getResources(arg0: string): $Enumeration<$URL>;
        getDefinedPackage(arg0: string): $Package;
        resources(arg0: string): $Stream<$URL>;
        isRegisteredAsParallelCapable(): boolean;
        static getSystemResources(arg0: string): $Enumeration<$URL>;
        getParent(): $ClassLoader;
        getUnnamedModule(): $Module;
        getDefinedPackages(): $Package[];
        setDefaultAssertionStatus(arg0: boolean): void;
        setPackageAssertionStatus(arg0: string, arg1: boolean): void;
        setClassAssertionStatus(arg0: string, arg1: boolean): void;
        clearAssertionStatus(): void;
        get name(): string;
        static get platformClassLoader(): $ClassLoader;
        static get systemClassLoader(): $ClassLoader;
        get registeredAsParallelCapable(): boolean;
        get parent(): $ClassLoader;
        get unnamedModule(): $Module;
        get definedPackages(): $Package[];
        set defaultAssertionStatus(value: boolean);
    }
    export class $Math {
        static abs(arg0: number): number;
        static abs(arg0: number): number;
        static abs(arg0: number): number;
        static abs(arg0: number): number;
        static sin(arg0: number): number;
        static cos(arg0: number): number;
        static tan(arg0: number): number;
        static atan2(arg0: number, arg1: number): number;
        static sqrt(arg0: number): number;
        static log(arg0: number): number;
        static log10(arg0: number): number;
        static pow(arg0: number, arg1: number): number;
        static exp(arg0: number): number;
        static min(arg0: number, arg1: number): number;
        static min(arg0: number, arg1: number): number;
        static min(arg0: number, arg1: number): number;
        static min(arg0: number, arg1: number): number;
        static max(arg0: number, arg1: number): number;
        static max(arg0: number, arg1: number): number;
        static max(arg0: number, arg1: number): number;
        static max(arg0: number, arg1: number): number;
        static floor(arg0: number): number;
        static ceil(arg0: number): number;
        static rint(arg0: number): number;
        static round(arg0: number): number;
        static round(arg0: number): number;
        static addExact(arg0: number, arg1: number): number;
        static addExact(arg0: number, arg1: number): number;
        static decrementExact(arg0: number): number;
        static decrementExact(arg0: number): number;
        static incrementExact(arg0: number): number;
        static incrementExact(arg0: number): number;
        static multiplyExact(arg0: number, arg1: number): number;
        static multiplyExact(arg0: number, arg1: number): number;
        static multiplyExact(arg0: number, arg1: number): number;
        static multiplyHigh(arg0: number, arg1: number): number;
        static unsignedMultiplyHigh(arg0: number, arg1: number): number;
        static negateExact(arg0: number): number;
        static negateExact(arg0: number): number;
        static subtractExact(arg0: number, arg1: number): number;
        static subtractExact(arg0: number, arg1: number): number;
        static fma(arg0: number, arg1: number, arg2: number): number;
        static fma(arg0: number, arg1: number, arg2: number): number;
        static copySign(arg0: number, arg1: number): number;
        static copySign(arg0: number, arg1: number): number;
        static signum(arg0: number): number;
        static signum(arg0: number): number;
        static clamp(arg0: number, arg1: number, arg2: number): number;
        static clamp(arg0: number, arg1: number, arg2: number): number;
        static clamp(arg0: number, arg1: number, arg2: number): number;
        static clamp(arg0: number, arg1: number, arg2: number): number;
        static scalb(arg0: number, arg1: number): number;
        static scalb(arg0: number, arg1: number): number;
        static getExponent(arg0: number): number;
        static getExponent(arg0: number): number;
        static floorMod(arg0: number, arg1: number): number;
        static floorMod(arg0: number, arg1: number): number;
        static floorMod(arg0: number, arg1: number): number;
        static asin(arg0: number): number;
        static acos(arg0: number): number;
        static atan(arg0: number): number;
        static cbrt(arg0: number): number;
        static IEEEremainder(arg0: number, arg1: number): number;
        static floorDiv(arg0: number, arg1: number): number;
        static floorDiv(arg0: number, arg1: number): number;
        static floorDiv(arg0: number, arg1: number): number;
        static ceilDiv(arg0: number, arg1: number): number;
        static ceilDiv(arg0: number, arg1: number): number;
        static ceilDiv(arg0: number, arg1: number): number;
        static ceilMod(arg0: number, arg1: number): number;
        static ceilMod(arg0: number, arg1: number): number;
        static ceilMod(arg0: number, arg1: number): number;
        static sinh(arg0: number): number;
        static cosh(arg0: number): number;
        static tanh(arg0: number): number;
        static hypot(arg0: number, arg1: number): number;
        static expm1(arg0: number): number;
        static log1p(arg0: number): number;
        static toRadians(arg0: number): number;
        static toDegrees(arg0: number): number;
        static random(): number;
        static divideExact(arg0: number, arg1: number): number;
        static divideExact(arg0: number, arg1: number): number;
        static floorDivExact(arg0: number, arg1: number): number;
        static floorDivExact(arg0: number, arg1: number): number;
        static ceilDivExact(arg0: number, arg1: number): number;
        static ceilDivExact(arg0: number, arg1: number): number;
        static toIntExact(arg0: number): number;
        static multiplyFull(arg0: number, arg1: number): number;
        static absExact(arg0: number): number;
        static absExact(arg0: number): number;
        static ulp(arg0: number): number;
        static ulp(arg0: number): number;
        static nextAfter(arg0: number, arg1: number): number;
        static nextAfter(arg0: number, arg1: number): number;
        static nextUp(arg0: number): number;
        static nextUp(arg0: number): number;
        static nextDown(arg0: number): number;
        static nextDown(arg0: number): number;
        static E: number;
        static PI: number;
        static TAU: number;
    }
    export class $Character$Subset {
    }
    export class $Short extends $Number implements $Comparable<number>, $Constable {
        static toString(arg0: number): string;
        static hashCode(arg0: number): number;
        static compareUnsigned(arg0: number, arg1: number): number;
        static reverseBytes(arg0: number): number;
        compareTo(arg0: number): number;
        static compare(arg0: number, arg1: number): number;
        static valueOf(arg0: string, arg1: number): number;
        static valueOf(arg0: string): number;
        static valueOf(arg0: number): number;
        static decode(arg0: string): number;
        describeConstable(): ($DynamicConstantDesc<number>) | undefined;
        static toUnsignedLong(arg0: number): number;
        static toUnsignedInt(arg0: number): number;
        static parseShort(arg0: string): number;
        static parseShort(arg0: string, arg1: number): number;
        static BYTES: number;
        static SIZE: number;
        static MAX_VALUE: number;
        static MIN_VALUE: number;
        static TYPE: $Class<number>;
        /**
         * @deprecated
         */
        constructor(arg0: number);
        /**
         * @deprecated
         */
        constructor(arg0: string);
    }
    export class $Class<T> implements $Serializable, $GenericDeclaration, $Type, $AnnotatedElement, $TypeDescriptor$OfField<$Class<never>>, $Constable {
        getName(): string;
        static forName(arg0: string, arg1: boolean, arg2: $ClassLoader): $Class<never>;
        static forName(arg0: $Module, arg1: string): $Class<never>;
        static forName(arg0: string): $Class<never>;
        getModule(): $Module;
        getProtectionDomain(): $ProtectionDomain;
        isAssignableFrom(arg0: $Class<never>): boolean;
        isInstance(arg0: $Object): boolean;
        getModifiers(): number;
        isInterface(): boolean;
        isArray(): boolean;
        isPrimitive(): boolean;
        isHidden(): boolean;
        getSuperclass(): $Class<T>;
        cast(arg0: $Object): T;
        describeConstable(): ($ClassDesc) | undefined;
        getComponentType(): $Class<never>;
        isAnnotation(): boolean;
        isEnum(): boolean;
        isRecord(): boolean;
        getTypeParameters(): $TypeVariable<$Class<T>>[];
        getClassLoader(): $ClassLoader;
        /**
         * @deprecated
         */
        newInstance(): T;
        getInterfaces(): $Class<never>[];
        isMemberClass(): boolean;
        isLocalClass(): boolean;
        isAnonymousClass(): boolean;
        getEnclosingClass(): $Class<never>;
        isUnnamedClass(): boolean;
        getSimpleName(): string;
        getCanonicalName(): string;
        isSynthetic(): boolean;
        getResourceAsStream(arg0: string): $InputStream;
        getResource(arg0: string): $URL;
        getPackageName(): string;
        desiredAssertionStatus(): boolean;
        getMethod(arg0: string, ...arg1: $Class<never>[]): $Method;
        isAnnotationPresent(arg0: $Class<$Annotation>): boolean;
        getNestHost(): $Class<never>;
        descriptorString(): string;
        getPermittedSubclasses(): $Class<never>[];
        arrayType(): $Class<never>;
        toGenericString(): string;
        getGenericSuperclass(): $Type;
        getPackage(): $Package;
        getGenericInterfaces(): $Type[];
        accessFlags(): $Set<$AccessFlag>;
        getSigners(): $Object[];
        getEnclosingMethod(): $Method;
        getEnclosingConstructor(): $Constructor<never>;
        getDeclaringClass(): $Class<never>;
        getTypeName(): string;
        getClasses(): $Class<never>[];
        getFields(): $Field[];
        getMethods(): $Method[];
        getConstructors(): $Constructor<never>[];
        getField(arg0: string): $Field;
        getConstructor(...arg0: $Class<never>[]): $Constructor<T>;
        getDeclaredClasses(): $Class<never>[];
        getDeclaredFields(): $Field[];
        getRecordComponents(): $RecordComponent[];
        getDeclaredMethods(): $Method[];
        getDeclaredConstructors(): $Constructor<never>[];
        getDeclaredField(arg0: string): $Field;
        getDeclaredMethod(arg0: string, ...arg1: $Class<never>[]): $Method;
        getDeclaredConstructor(...arg0: $Class<never>[]): $Constructor<T>;
        getEnumConstants(): T[];
        asSubclass<U>(arg0: $Class<U>): $Class<U>;
        getAnnotation<A extends $Annotation>(arg0: $Class<A>): A;
        getAnnotationsByType<A extends $Annotation>(arg0: $Class<A>): A[];
        getAnnotations(): $Annotation[];
        getDeclaredAnnotation<A extends $Annotation>(arg0: $Class<A>): A;
        getDeclaredAnnotationsByType<A extends $Annotation>(arg0: $Class<A>): A[];
        getDeclaredAnnotations(): $Annotation[];
        getAnnotatedSuperclass(): $AnnotatedType;
        getAnnotatedInterfaces(): $AnnotatedType[];
        isNestmateOf(arg0: $Class<never>): boolean;
        getNestMembers(): $Class<never>[];
        isSealed(): boolean;
        componentType(): $Class<never>;
        get name(): string;
        get module(): $Module;
        get protectionDomain(): $ProtectionDomain;
        get modifiers(): number;
        get interface(): boolean;
        get array(): boolean;
        get primitive(): boolean;
        get hidden(): boolean;
        get superclass(): $Class<T>;
        get enum(): boolean;
        get record(): boolean;
        get typeParameters(): $TypeVariable<$Class<T>>[];
        get classLoader(): $ClassLoader;
        get interfaces(): $Class<never>[];
        get memberClass(): boolean;
        get localClass(): boolean;
        get anonymousClass(): boolean;
        get enclosingClass(): $Class<never>;
        get unnamedClass(): boolean;
        get simpleName(): string;
        get canonicalName(): string;
        get synthetic(): boolean;
        get packageName(): string;
        get nestHost(): $Class<never>;
        get permittedSubclasses(): $Class<never>[];
        get genericSuperclass(): $Type;
        get package(): $Package;
        get genericInterfaces(): $Type[];
        get signers(): $Object[];
        get enclosingMethod(): $Method;
        get enclosingConstructor(): $Constructor<never>;
        get declaringClass(): $Class<never>;
        get typeName(): string;
        get classes(): $Class<never>[];
        get fields(): $Field[];
        get methods(): $Method[];
        get constructors(): $Constructor<never>[];
        get declaredClasses(): $Class<never>[];
        get declaredFields(): $Field[];
        get recordComponents(): $RecordComponent[];
        get declaredMethods(): $Method[];
        get declaredConstructors(): $Constructor<never>[];
        get enumConstants(): T[];
        get annotations(): $Annotation[];
        get declaredAnnotations(): $Annotation[];
        get annotatedSuperclass(): $AnnotatedType;
        get annotatedInterfaces(): $AnnotatedType[];
        get nestMembers(): $Class<never>[];
        get sealed(): boolean;
    }
    export class $Package extends $NamedPackage implements $AnnotatedElement {
        getName(): string;
        isAnnotationPresent(arg0: $Class<$Annotation>): boolean;
        /**
         * @deprecated
         */
        static getPackage(arg0: string): $Package;
        getAnnotation<A extends $Annotation>(arg0: $Class<A>): A;
        getAnnotationsByType<A extends $Annotation>(arg0: $Class<A>): A[];
        getAnnotations(): $Annotation[];
        getDeclaredAnnotation<A extends $Annotation>(arg0: $Class<A>): A;
        getDeclaredAnnotationsByType<A extends $Annotation>(arg0: $Class<A>): A[];
        getDeclaredAnnotations(): $Annotation[];
        isSealed(arg0: $URL): boolean;
        isSealed(): boolean;
        static getPackages(): $Package[];
        getSpecificationTitle(): string;
        getSpecificationVersion(): string;
        getSpecificationVendor(): string;
        getImplementationTitle(): string;
        getImplementationVersion(): string;
        getImplementationVendor(): string;
        isCompatibleWith(arg0: string): boolean;
        get name(): string;
        get annotations(): $Annotation[];
        get declaredAnnotations(): $Annotation[];
        static get packages(): $Package[];
        get specificationTitle(): string;
        get specificationVersion(): string;
        get specificationVendor(): string;
        get implementationTitle(): string;
        get implementationVersion(): string;
        get implementationVendor(): string;
    }
    export class $Module implements $AnnotatedElement {
        getName(): string;
        addReads(arg0: $Module): $Module;
        addExports(arg0: string, arg1: $Module): $Module;
        addOpens(arg0: string, arg1: $Module): $Module;
        addUses(arg0: $Class<never>): $Module;
        getClassLoader(): $ClassLoader;
        getDescriptor(): $ModuleDescriptor;
        isNamed(): boolean;
        getResourceAsStream(arg0: string): $InputStream;
        isOpen(arg0: string): boolean;
        isOpen(arg0: string, arg1: $Module): boolean;
        getAnnotation<T extends $Annotation>(arg0: $Class<T>): T;
        getAnnotations(): $Annotation[];
        getDeclaredAnnotations(): $Annotation[];
        getPackages(): $Set<string>;
        isNativeAccessEnabled(): boolean;
        canRead(arg0: $Module): boolean;
        canUse(arg0: $Class<never>): boolean;
        getLayer(): $ModuleLayer;
        isExported(arg0: string): boolean;
        isExported(arg0: string, arg1: $Module): boolean;
        isAnnotationPresent(arg0: $Class<$Annotation>): boolean;
        getAnnotationsByType<T extends $Annotation>(arg0: $Class<T>): T[];
        getDeclaredAnnotation<T extends $Annotation>(arg0: $Class<T>): T;
        getDeclaredAnnotationsByType<T extends $Annotation>(arg0: $Class<T>): T[];
        get name(): string;
        get classLoader(): $ClassLoader;
        get descriptor(): $ModuleDescriptor;
        get named(): boolean;
        get annotations(): $Annotation[];
        get declaredAnnotations(): $Annotation[];
        get packages(): $Set<string>;
        get nativeAccessEnabled(): boolean;
        get layer(): $ModuleLayer;
    }
    export class $Boolean implements $Serializable, $Comparable<boolean>, $Constable {
        static toString(arg0: boolean): string;
        static hashCode(arg0: boolean): number;
        compareTo(arg0: boolean): number;
        static getBoolean(arg0: string): boolean;
        static compare(arg0: boolean, arg1: boolean): number;
        booleanValue(): boolean;
        static valueOf(arg0: string): boolean;
        static valueOf(arg0: boolean): boolean;
        describeConstable(): ($DynamicConstantDesc<boolean>) | undefined;
        static parseBoolean(arg0: string): boolean;
        static logicalAnd(arg0: boolean, arg1: boolean): boolean;
        static logicalOr(arg0: boolean, arg1: boolean): boolean;
        static logicalXor(arg0: boolean, arg1: boolean): boolean;
        static TRUE: boolean;
        static FALSE: boolean;
        static TYPE: $Class<boolean>;
        /**
         * @deprecated
         */
        constructor(arg0: boolean);
        /**
         * @deprecated
         */
        constructor(arg0: string);
    }
    export class $Float extends $Number implements $Comparable<number>, $Constable, $ConstantDesc {
        static toString(arg0: number): string;
        static hashCode(arg0: number): number;
        static min(arg0: number, arg1: number): number;
        static max(arg0: number, arg1: number): number;
        static isInfinite(arg0: number): boolean;
        isInfinite(): boolean;
        static isFinite(arg0: number): boolean;
        static floatToRawIntBits(arg0: number): number;
        static floatToIntBits(arg0: number): number;
        static intBitsToFloat(arg0: number): number;
        static float16ToFloat(arg0: number): number;
        static floatToFloat16(arg0: number): number;
        compareTo(arg0: number): number;
        static compare(arg0: number, arg1: number): number;
        static valueOf(arg0: number): number;
        static valueOf(arg0: string): number;
        static toHexString(arg0: number): string;
        resolveConstantDesc(arg0: $MethodHandles$Lookup): number;
        describeConstable(): (number) | undefined;
        static isNaN(arg0: number): boolean;
        isNaN(): boolean;
        static sum(arg0: number, arg1: number): number;
        static parseFloat(arg0: string): number;
        static POSITIVE_INFINITY: number;
        static BYTES: number;
        static MAX_EXPONENT: number;
        static NEGATIVE_INFINITY: number;
        static MIN_NORMAL: number;
        static SIZE: number;
        static NaN: number;
        static MAX_VALUE: number;
        static MIN_VALUE: number;
        static TYPE: $Class<number>;
        static MIN_EXPONENT: number;
        static PRECISION: number;
        /**
         * @deprecated
         */
        constructor(arg0: string);
        /**
         * @deprecated
         */
        constructor(arg0: number);
        /**
         * @deprecated
         */
        constructor(arg0: number);
    }
    export class $Thread implements $Runnable {
        getName(): string;
        getStackTrace(): $StackTraceElement[];
        run(): void;
        interrupt(): void;
        static currentThread(): $Thread;
        static onSpinWait(): void;
        isVirtual(): boolean;
        join(arg0: number): void;
        join(arg0: number, arg1: number): void;
        join(): void;
        join(arg0: $Duration_): boolean;
        setContextClassLoader(arg0: $ClassLoader): void;
        getThreadGroup(): $ThreadGroup;
        /**
         * @deprecated
         */
        checkAccess(): void;
        static dumpStack(): void;
        setPriority(arg0: number): void;
        setDaemon(arg0: boolean): void;
        start(): void;
        getContextClassLoader(): $ClassLoader;
        getPriority(): number;
        isDaemon(): boolean;
        static interrupted(): boolean;
        static activeCount(): number;
        static enumerate(arg0: $Thread[]): number;
        isAlive(): boolean;
        threadId(): number;
        static setDefaultUncaughtExceptionHandler(arg0: $Thread$UncaughtExceptionHandler_): void;
        getUncaughtExceptionHandler(): $Thread$UncaughtExceptionHandler;
        static "yield"(): void;
        static sleep(arg0: number, arg1: number): void;
        static sleep(arg0: $Duration_): void;
        static sleep(arg0: number): void;
        static ofPlatform(): $Thread$Builder$OfPlatform;
        static ofVirtual(): $Thread$Builder$OfVirtual;
        static startVirtualThread(arg0: $Runnable_): $Thread;
        /**
         * @deprecated
         */
        stop(): void;
        isInterrupted(): boolean;
        /**
         * @deprecated
         */
        suspend(): void;
        /**
         * @deprecated
         */
        resume(): void;
        setName(arg0: string): void;
        /**
         * @deprecated
         */
        countStackFrames(): number;
        static holdsLock(arg0: $Object): boolean;
        static getAllStackTraces(): $Map<$Thread, $StackTraceElement[]>;
        /**
         * @deprecated
         */
        getId(): number;
        getState(): $Thread$State;
        static getDefaultUncaughtExceptionHandler(): $Thread$UncaughtExceptionHandler;
        setUncaughtExceptionHandler(arg0: $Thread$UncaughtExceptionHandler_): void;
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor();
        constructor(arg0: $Runnable_);
        constructor(arg0: $ThreadGroup, arg1: $Runnable_, arg2: string, arg3: number, arg4: boolean);
        constructor(arg0: $ThreadGroup, arg1: $Runnable_, arg2: string, arg3: number);
        constructor(arg0: $ThreadGroup, arg1: $Runnable_, arg2: string);
        constructor(arg0: $Runnable_, arg1: string);
        constructor(arg0: $ThreadGroup, arg1: $Runnable_);
        constructor(arg0: string);
        constructor(arg0: $ThreadGroup, arg1: string);
        get stackTrace(): $StackTraceElement[];
        get virtual(): boolean;
        get threadGroup(): $ThreadGroup;
        get alive(): boolean;
        static get allStackTraces(): $Map<$Thread, $StackTraceElement[]>;
        get id(): number;
        get state(): $Thread$State;
    }
    export class $Integer extends $Number implements $Comparable<number>, $Constable, $ConstantDesc {
        static numberOfLeadingZeros(arg0: number): number;
        static numberOfTrailingZeros(arg0: number): number;
        static bitCount(arg0: number): number;
        static toString(arg0: number): string;
        static toString(arg0: number, arg1: number): string;
        static hashCode(arg0: number): number;
        static min(arg0: number, arg1: number): number;
        static max(arg0: number, arg1: number): number;
        static signum(arg0: number): number;
        static expand(arg0: number, arg1: number): number;
        static compareUnsigned(arg0: number, arg1: number): number;
        static divideUnsigned(arg0: number, arg1: number): number;
        static remainderUnsigned(arg0: number, arg1: number): number;
        static reverse(arg0: number): number;
        static reverseBytes(arg0: number): number;
        static compress(arg0: number, arg1: number): number;
        compareTo(arg0: number): number;
        static compare(arg0: number, arg1: number): number;
        static valueOf(arg0: string): number;
        static valueOf(arg0: number): number;
        static valueOf(arg0: string, arg1: number): number;
        static toHexString(arg0: number): string;
        static decode(arg0: string): number;
        resolveConstantDesc(arg0: $MethodHandles$Lookup): number;
        describeConstable(): (number) | undefined;
        static parseInt(arg0: $CharSequence, arg1: number, arg2: number, arg3: number): number;
        static parseInt(arg0: string): number;
        static parseInt(arg0: string, arg1: number): number;
        static toUnsignedLong(arg0: number): number;
        static sum(arg0: number, arg1: number): number;
        static toUnsignedString(arg0: number, arg1: number): string;
        static toUnsignedString(arg0: number): string;
        static parseUnsignedInt(arg0: string, arg1: number): number;
        static parseUnsignedInt(arg0: $CharSequence, arg1: number, arg2: number, arg3: number): number;
        static parseUnsignedInt(arg0: string): number;
        static getInteger(arg0: string, arg1: number): number;
        static getInteger(arg0: string): number;
        static getInteger(arg0: string, arg1: number): number;
        static toOctalString(arg0: number): string;
        static toBinaryString(arg0: number): string;
        static highestOneBit(arg0: number): number;
        static lowestOneBit(arg0: number): number;
        static rotateLeft(arg0: number, arg1: number): number;
        static rotateRight(arg0: number, arg1: number): number;
        static BYTES: number;
        static SIZE: number;
        static MAX_VALUE: number;
        static MIN_VALUE: number;
        static TYPE: $Class<number>;
        /**
         * @deprecated
         */
        constructor(arg0: string);
        /**
         * @deprecated
         */
        constructor(arg0: number);
    }
    export class $Runnable {
    }
    export interface $Runnable {
        run(): void;
    }
    /**
     * Values that may be interpreted as {@link $Runnable}.
     */
    export type $Runnable_ = (() => void);
    export class $Enum<E extends $Enum<E>> implements $Constable, $Comparable<E>, $Serializable {
        name(): string;
        compareTo(arg0: E): number;
        describeConstable(): ($Enum$EnumDesc<E>) | undefined;
        getDeclaringClass(): $Class<E>;
        ordinal(): number;
        get declaringClass(): $Class<E>;
    }
    export class $Thread$Builder$OfPlatform {
    }
    export interface $Thread$Builder$OfPlatform extends $Thread$Builder {
        priority(arg0: number): $Thread$Builder$OfPlatform;
        group(arg0: $ThreadGroup): $Thread$Builder$OfPlatform;
        daemon(): $Thread$Builder$OfPlatform;
        daemon(arg0: boolean): $Thread$Builder$OfPlatform;
        uncaughtExceptionHandler(arg0: $Thread$UncaughtExceptionHandler_): $Thread$Builder$OfPlatform;
        stackSize(arg0: number): $Thread$Builder$OfPlatform;
        inheritInheritableThreadLocals(arg0: boolean): $Thread$Builder$OfPlatform;
        name(arg0: string, arg1: number): $Thread$Builder;
        name(arg0: string): $Thread$Builder;
    }
    export class $Object {
        equals(arg0: $Object): boolean;
        toString(): string;
        hashCode(): number;
        getClass(): $Class<never>;
        notify(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        wait(arg0: number, arg1: number): void;
        wait(): void;
        constructor();
        get class(): $Class<never>;
    }
    export class $Readable {
    }
    export interface $Readable {
        read(arg0: $CharBuffer): number;
    }
    /**
     * Values that may be interpreted as {@link $Readable}.
     */
    export type $Readable_ = ((arg0: $CharBuffer) => number);
    export class $Enum$EnumDesc<E extends $Enum<E>> extends $DynamicConstantDesc<E> {
        static of<E extends $Enum<E>>(arg0: $ClassDesc, arg1: string): $Enum$EnumDesc<E>;
    }
    export class $Throwable implements $Serializable {
        printStackTrace(arg0: $PrintWriter): void;
        printStackTrace(): void;
        printStackTrace(arg0: $PrintStream): void;
        getStackTrace(): $StackTraceElement[];
        fillInStackTrace(): $Throwable;
        getCause(): $Throwable;
        initCause(arg0: $Throwable): $Throwable;
        getMessage(): string;
        getSuppressed(): $Throwable[];
        getLocalizedMessage(): string;
        setStackTrace(arg0: $StackTraceElement[]): void;
        addSuppressed(arg0: $Throwable): void;
        constructor(arg0: $Throwable);
        constructor(arg0: string, arg1: $Throwable);
        constructor(arg0: string);
        constructor();
        get cause(): $Throwable;
        get message(): string;
        get suppressed(): $Throwable[];
        get localizedMessage(): string;
    }
    export class $AutoCloseable {
    }
    export interface $AutoCloseable {
        close(): void;
    }
    /**
     * Values that may be interpreted as {@link $AutoCloseable}.
     */
    export type $AutoCloseable_ = (() => void);
    export class $Cloneable {
    }
    export interface $Cloneable {
    }
    export class $Appendable {
    }
    export interface $Appendable {
        append(arg0: $CharSequence): $Appendable;
        append(arg0: $CharSequence, arg1: number, arg2: number): $Appendable;
        append(arg0: string): $Appendable;
    }
    export class $Thread$State extends $Enum<$Thread$State> {
        static values(): $Thread$State[];
        static valueOf(arg0: string): $Thread$State;
        static NEW: $Thread$State;
        static TERMINATED: $Thread$State;
        static RUNNABLE: $Thread$State;
        static BLOCKED: $Thread$State;
        static WAITING: $Thread$State;
        static TIMED_WAITING: $Thread$State;
    }
    /**
     * Values that may be interpreted as {@link $Thread$State}.
     */
    export type $Thread$State_ = "new" | "runnable" | "blocked" | "waiting" | "timed_waiting" | "terminated";
    export class $RuntimeException extends $Exception {
        constructor(arg0: $Throwable);
        constructor(arg0: string, arg1: $Throwable);
        constructor(arg0: string);
        constructor();
    }
    export class $Comparable<T> {
    }
    export interface $Comparable<T> {
        compareTo(arg0: T): number;
    }
    /**
     * Values that may be interpreted as {@link $Comparable}.
     */
    export type $Comparable_<T> = ((arg0: T) => number);
    export class $UnsupportedOperationException extends $RuntimeException {
        constructor(arg0: $Throwable);
        constructor(arg0: string, arg1: $Throwable);
        constructor(arg0: string);
        constructor();
    }
    export class $Thread$Builder$OfVirtual {
    }
    export interface $Thread$Builder$OfVirtual extends $Thread$Builder {
        inheritInheritableThreadLocals(arg0: boolean): $Thread$Builder$OfVirtual;
        name(arg0: string, arg1: number): $Thread$Builder;
        name(arg0: string): $Thread$Builder;
        uncaughtExceptionHandler(arg0: $Thread$UncaughtExceptionHandler_): $Thread$Builder;
    }
    export class $AbstractStringBuilder implements $Appendable, $CharSequence {
        isEmpty(): boolean;
        codePoints(): $IntStream;
        chars(): $IntStream;
        get empty(): boolean;
    }
    export class $Thread$UncaughtExceptionHandler {
    }
    export interface $Thread$UncaughtExceptionHandler {
        uncaughtException(arg0: $Thread, arg1: $Throwable): void;
    }
    /**
     * Values that may be interpreted as {@link $Thread$UncaughtExceptionHandler}.
     */
    export type $Thread$UncaughtExceptionHandler_ = ((arg0: $Thread, arg1: $Throwable) => void);
    export class $Long extends $Number implements $Comparable<number>, $Constable, $ConstantDesc {
        static numberOfLeadingZeros(arg0: number): number;
        static numberOfTrailingZeros(arg0: number): number;
        static bitCount(arg0: number): number;
        static toString(arg0: number): string;
        static toString(arg0: number, arg1: number): string;
        static hashCode(arg0: number): number;
        static min(arg0: number, arg1: number): number;
        static max(arg0: number, arg1: number): number;
        static signum(arg0: number): number;
        static expand(arg0: number, arg1: number): number;
        static compareUnsigned(arg0: number, arg1: number): number;
        static divideUnsigned(arg0: number, arg1: number): number;
        static remainderUnsigned(arg0: number, arg1: number): number;
        static reverse(arg0: number): number;
        static reverseBytes(arg0: number): number;
        static compress(arg0: number, arg1: number): number;
        compareTo(arg0: number): number;
        static getLong(arg0: string, arg1: number): number;
        static getLong(arg0: string): number;
        static getLong(arg0: string, arg1: number): number;
        static compare(arg0: number, arg1: number): number;
        static valueOf(arg0: string, arg1: number): number;
        static valueOf(arg0: string): number;
        static valueOf(arg0: number): number;
        static toHexString(arg0: number): string;
        static decode(arg0: string): number;
        resolveConstantDesc(arg0: $MethodHandles$Lookup): number;
        describeConstable(): (number) | undefined;
        static sum(arg0: number, arg1: number): number;
        static toUnsignedString(arg0: number, arg1: number): string;
        static toUnsignedString(arg0: number): string;
        static parseLong(arg0: string): number;
        static parseLong(arg0: string, arg1: number): number;
        static parseLong(arg0: $CharSequence, arg1: number, arg2: number, arg3: number): number;
        static toOctalString(arg0: number): string;
        static toBinaryString(arg0: number): string;
        static highestOneBit(arg0: number): number;
        static lowestOneBit(arg0: number): number;
        static rotateLeft(arg0: number, arg1: number): number;
        static rotateRight(arg0: number, arg1: number): number;
        static parseUnsignedLong(arg0: string): number;
        static parseUnsignedLong(arg0: $CharSequence, arg1: number, arg2: number, arg3: number): number;
        static parseUnsignedLong(arg0: string, arg1: number): number;
        static BYTES: number;
        static SIZE: number;
        static MAX_VALUE: number;
        static MIN_VALUE: number;
        static TYPE: $Class<number>;
        /**
         * @deprecated
         */
        constructor(arg0: string);
        /**
         * @deprecated
         */
        constructor(arg0: number);
    }
    export class $Double extends $Number implements $Comparable<number>, $Constable, $ConstantDesc {
        static toString(arg0: number): string;
        static hashCode(arg0: number): number;
        static min(arg0: number, arg1: number): number;
        static max(arg0: number, arg1: number): number;
        isInfinite(): boolean;
        static isInfinite(arg0: number): boolean;
        static isFinite(arg0: number): boolean;
        static doubleToRawLongBits(arg0: number): number;
        static doubleToLongBits(arg0: number): number;
        static longBitsToDouble(arg0: number): number;
        compareTo(arg0: number): number;
        static compare(arg0: number, arg1: number): number;
        static valueOf(arg0: string): number;
        static valueOf(arg0: number): number;
        static toHexString(arg0: number): string;
        describeConstable(): (number) | undefined;
        isNaN(): boolean;
        static isNaN(arg0: number): boolean;
        static sum(arg0: number, arg1: number): number;
        static parseDouble(arg0: string): number;
        resolveConstantDesc(arg0: $MethodHandles$Lookup): $Object;
        static POSITIVE_INFINITY: number;
        static BYTES: number;
        static MAX_EXPONENT: number;
        static NEGATIVE_INFINITY: number;
        static MIN_NORMAL: number;
        static SIZE: number;
        static NaN: number;
        static MAX_VALUE: number;
        static MIN_VALUE: number;
        static TYPE: $Class<number>;
        static MIN_EXPONENT: number;
        static PRECISION: number;
        /**
         * @deprecated
         */
        constructor(arg0: number);
        /**
         * @deprecated
         */
        constructor(arg0: string);
    }
    export class $Void {
        static TYPE: $Class<void>;
    }
    export class $StackTraceElement implements $Serializable {
        getClassName(): string;
        isNativeMethod(): boolean;
        getFileName(): string;
        getLineNumber(): number;
        getModuleName(): string;
        getModuleVersion(): string;
        getClassLoaderName(): string;
        getMethodName(): string;
        constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: number);
        constructor(arg0: string, arg1: string, arg2: string, arg3: number);
        get className(): string;
        get nativeMethod(): boolean;
        get fileName(): string;
        get lineNumber(): number;
        get moduleName(): string;
        get moduleVersion(): string;
        get classLoaderName(): string;
        get methodName(): string;
    }
}
