import { $Serializable } from "@package/java/io";
import { $Charset } from "@package/java/nio/charset";
import { $CharSequence } from "@package/java/lang";
import { $ByteBuffer } from "@package/java/nio";

declare module "@package/com/google/common/hash" {
    export class $PrimitiveSink {
    }
    export interface $PrimitiveSink {
        putBoolean(b: boolean): $PrimitiveSink;
        putByte(b: number): $PrimitiveSink;
        putShort(s: number): $PrimitiveSink;
        putChar(c: string): $PrimitiveSink;
        putInt(i: number): $PrimitiveSink;
        putLong(l: number): $PrimitiveSink;
        putFloat(f: number): $PrimitiveSink;
        putDouble(d: number): $PrimitiveSink;
        putString(charSequence: $CharSequence, charset: $Charset): $PrimitiveSink;
        putBytes(bytes: $ByteBuffer): $PrimitiveSink;
        putBytes(bytes: number[]): $PrimitiveSink;
        putBytes(bytes: number[], off: number, len: number): $PrimitiveSink;
        putUnencodedChars(charSequence: $CharSequence): $PrimitiveSink;
    }
    export class $HashFunction {
    }
    export interface $HashFunction {
        bits(): number;
        hashString(input: $CharSequence, charset: $Charset): $HashCode;
        newHasher(): $Hasher;
        newHasher(expectedInputSize: number): $Hasher;
        hashInt(input: number): $HashCode;
        hashLong(input: number): $HashCode;
        hashBytes(input: number[], off: number, len: number): $HashCode;
        hashBytes(input: $ByteBuffer): $HashCode;
        hashBytes(input: number[]): $HashCode;
        hashUnencodedChars(input: $CharSequence): $HashCode;
        hashObject<T>(instance: T, funnel: $Funnel_<T>): $HashCode;
    }
    export class $HashCode {
        writeBytesTo(dest: number[], offset: number, maxLength: number): number;
        static fromInt(hash: number): $HashCode;
        static fromLong(hash: number): $HashCode;
        asBytes(): number[];
        bits(): number;
        static fromString(string: string): $HashCode;
        asLong(): number;
        static fromBytes(bytes: number[]): $HashCode;
        padToLong(): number;
        asInt(): number;
    }
    export class $Funnel<T> {
    }
    export interface $Funnel<T> extends $Serializable {
        funnel(from: T, into: $PrimitiveSink): void;
    }
    /**
     * Values that may be interpreted as {@link $Funnel}.
     */
    export type $Funnel_<T> = ((from: T, into: $PrimitiveSink) => void);
    export class $Hasher {
    }
    export interface $Hasher extends $PrimitiveSink {
        /**
         * @deprecated
         */
        hashCode(): number;
        putBoolean(b: boolean): $Hasher;
        putChar(c: string): $Hasher;
        hash(): $HashCode;
        putObject<T>(instance: T, funnel: $Funnel_<T>): $Hasher;
        putString(charSequence: $CharSequence, charset: $Charset): $Hasher;
        putBytes(bytes: $ByteBuffer): $Hasher;
        putByte(b: number): $PrimitiveSink;
        putShort(s: number): $PrimitiveSink;
        putInt(i: number): $PrimitiveSink;
        putLong(l: number): $PrimitiveSink;
        putFloat(f: number): $PrimitiveSink;
        putDouble(d: number): $PrimitiveSink;
        putBytes(bytes: number[], off: number, len: number): $PrimitiveSink;
        putUnencodedChars(charSequence: $CharSequence): $PrimitiveSink;
    }
}
