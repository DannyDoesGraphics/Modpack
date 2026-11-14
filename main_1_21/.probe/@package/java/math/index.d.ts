import { $Serializable } from "@package/java/io";
import { $Random } from "@package/java/util";
import { $Number, $Comparable, $Enum } from "@package/java/lang";

declare module "@package/java/math" {
    export class $RoundingMode extends $Enum<$RoundingMode> {
        static values(): $RoundingMode[];
        static valueOf(arg0: string): $RoundingMode;
        static valueOf(arg0: number): $RoundingMode;
        static DOWN: $RoundingMode;
        static FLOOR: $RoundingMode;
        static UNNECESSARY: $RoundingMode;
        static CEILING: $RoundingMode;
        static HALF_EVEN: $RoundingMode;
        static UP: $RoundingMode;
        static HALF_UP: $RoundingMode;
        static HALF_DOWN: $RoundingMode;
    }
    /**
     * Values that may be interpreted as {@link $RoundingMode}.
     */
    export type $RoundingMode_ = "up" | "down" | "ceiling" | "floor" | "half_up" | "half_down" | "half_even" | "unnecessary";
    export class $MathContext implements $Serializable {
        getRoundingMode(): $RoundingMode;
        getPrecision(): number;
        static DECIMAL128: $MathContext;
        static DECIMAL64: $MathContext;
        static DECIMAL32: $MathContext;
        static UNLIMITED: $MathContext;
        constructor(arg0: string);
        constructor(arg0: number, arg1: $RoundingMode_);
        constructor(arg0: number);
        get roundingMode(): $RoundingMode;
        get precision(): number;
    }
    export class $BigInteger extends $Number implements $Comparable<$BigInteger> {
        bitCount(): number;
        toString(arg0: number): string;
        abs(): $BigInteger;
        sqrt(): $BigInteger;
        pow(arg0: number): $BigInteger;
        min(arg0: $BigInteger): $BigInteger;
        max(arg0: $BigInteger): $BigInteger;
        signum(): number;
        compareTo(arg0: $BigInteger): number;
        static valueOf(arg0: number): $BigInteger;
        add(arg0: $BigInteger): $BigInteger;
        mod(arg0: $BigInteger): $BigInteger;
        setBit(arg0: number): $BigInteger;
        shiftLeft(arg0: number): $BigInteger;
        multiply(arg0: $BigInteger): $BigInteger;
        or(arg0: $BigInteger): $BigInteger;
        toByteArray(): number[];
        remainder(arg0: $BigInteger): $BigInteger;
        bitLength(): number;
        testBit(arg0: number): boolean;
        subtract(arg0: $BigInteger): $BigInteger;
        shiftRight(arg0: number): $BigInteger;
        getLowestSetBit(): number;
        modPow(arg0: $BigInteger, arg1: $BigInteger): $BigInteger;
        negate(): $BigInteger;
        modInverse(arg0: $BigInteger): $BigInteger;
        divide(arg0: $BigInteger): $BigInteger;
        divideAndRemainder(arg0: $BigInteger): $BigInteger[];
        static probablePrime(arg0: number, arg1: $Random): $BigInteger;
        nextProbablePrime(): $BigInteger;
        parallelMultiply(arg0: $BigInteger): $BigInteger;
        sqrtAndRemainder(): $BigInteger[];
        gcd(arg0: $BigInteger): $BigInteger;
        and(arg0: $BigInteger): $BigInteger;
        xor(arg0: $BigInteger): $BigInteger;
        not(): $BigInteger;
        andNot(arg0: $BigInteger): $BigInteger;
        clearBit(arg0: number): $BigInteger;
        flipBit(arg0: number): $BigInteger;
        isProbablePrime(arg0: number): boolean;
        longValueExact(): number;
        intValueExact(): number;
        shortValueExact(): number;
        byteValueExact(): number;
        static ZERO: $BigInteger;
        static ONE: $BigInteger;
        static TEN: $BigInteger;
        static TWO: $BigInteger;
        constructor(arg0: number, arg1: $Random);
        constructor(arg0: string);
        constructor(arg0: number, arg1: number, arg2: $Random);
        constructor(arg0: number, arg1: number[], arg2: number, arg3: number);
        constructor(arg0: number[]);
        constructor(arg0: number[], arg1: number, arg2: number);
        constructor(arg0: string, arg1: number);
        constructor(arg0: number, arg1: number[]);
        set bit(value: number);
        get lowestSetBit(): number;
    }
    export class $BigDecimal extends $Number implements $Comparable<$BigDecimal> {
        abs(): $BigDecimal;
        abs(arg0: $MathContext): $BigDecimal;
        sqrt(arg0: $MathContext): $BigDecimal;
        pow(arg0: number): $BigDecimal;
        pow(arg0: number, arg1: $MathContext): $BigDecimal;
        min(arg0: $BigDecimal): $BigDecimal;
        max(arg0: $BigDecimal): $BigDecimal;
        round(arg0: $MathContext): $BigDecimal;
        signum(): number;
        compareTo(arg0: $BigDecimal): number;
        static valueOf(arg0: number): $BigDecimal;
        static valueOf(arg0: number, arg1: number): $BigDecimal;
        static valueOf(arg0: number): $BigDecimal;
        scale(): number;
        add(arg0: $BigDecimal, arg1: $MathContext): $BigDecimal;
        add(arg0: $BigDecimal): $BigDecimal;
        multiply(arg0: $BigDecimal, arg1: $MathContext): $BigDecimal;
        multiply(arg0: $BigDecimal): $BigDecimal;
        ulp(): $BigDecimal;
        remainder(arg0: $BigDecimal, arg1: $MathContext): $BigDecimal;
        remainder(arg0: $BigDecimal): $BigDecimal;
        subtract(arg0: $BigDecimal): $BigDecimal;
        subtract(arg0: $BigDecimal, arg1: $MathContext): $BigDecimal;
        negate(): $BigDecimal;
        negate(arg0: $MathContext): $BigDecimal;
        toBigInteger(): $BigInteger;
        divide(arg0: $BigDecimal, arg1: $MathContext): $BigDecimal;
        /**
         * @deprecated
         */
        divide(arg0: $BigDecimal, arg1: number, arg2: number): $BigDecimal;
        divide(arg0: $BigDecimal, arg1: number, arg2: $RoundingMode_): $BigDecimal;
        /**
         * @deprecated
         */
        divide(arg0: $BigDecimal, arg1: number): $BigDecimal;
        divide(arg0: $BigDecimal): $BigDecimal;
        divide(arg0: $BigDecimal, arg1: $RoundingMode_): $BigDecimal;
        divideAndRemainder(arg0: $BigDecimal, arg1: $MathContext): $BigDecimal[];
        divideAndRemainder(arg0: $BigDecimal): $BigDecimal[];
        longValueExact(): number;
        intValueExact(): number;
        shortValueExact(): number;
        byteValueExact(): number;
        scaleByPowerOfTen(arg0: number): $BigDecimal;
        plus(arg0: $MathContext): $BigDecimal;
        plus(): $BigDecimal;
        divideToIntegralValue(arg0: $BigDecimal): $BigDecimal;
        divideToIntegralValue(arg0: $BigDecimal, arg1: $MathContext): $BigDecimal;
        movePointRight(arg0: number): $BigDecimal;
        toBigIntegerExact(): $BigInteger;
        precision(): number;
        unscaledValue(): $BigInteger;
        setScale(arg0: number, arg1: $RoundingMode_): $BigDecimal;
        /**
         * @deprecated
         */
        setScale(arg0: number, arg1: number): $BigDecimal;
        setScale(arg0: number): $BigDecimal;
        stripTrailingZeros(): $BigDecimal;
        movePointLeft(arg0: number): $BigDecimal;
        toEngineeringString(): string;
        toPlainString(): string;
        static ZERO: $BigDecimal;
        /**
         * @deprecated
         */
        static ROUND_DOWN: number;
        /**
         * @deprecated
         */
        static ROUND_UNNECESSARY: number;
        /**
         * @deprecated
         */
        static ROUND_CEILING: number;
        /**
         * @deprecated
         */
        static ROUND_HALF_DOWN: number;
        /**
         * @deprecated
         */
        static ROUND_HALF_UP: number;
        static ONE: $BigDecimal;
        /**
         * @deprecated
         */
        static ROUND_UP: number;
        /**
         * @deprecated
         */
        static ROUND_FLOOR: number;
        /**
         * @deprecated
         */
        static ROUND_HALF_EVEN: number;
        static TEN: $BigDecimal;
        static TWO: $BigDecimal;
        constructor(arg0: $BigInteger, arg1: number);
        constructor(arg0: $BigInteger, arg1: $MathContext);
        constructor(arg0: $BigInteger);
        constructor(arg0: number, arg1: $MathContext);
        constructor(arg0: number, arg1: $MathContext);
        constructor(arg0: number);
        constructor(arg0: number, arg1: $MathContext);
        constructor(arg0: number);
        constructor(arg0: $BigInteger, arg1: number, arg2: $MathContext);
        constructor(arg0: string[]);
        constructor(arg0: string[], arg1: number, arg2: number, arg3: $MathContext);
        constructor(arg0: string[], arg1: number, arg2: number);
        constructor(arg0: number);
        constructor(arg0: string, arg1: $MathContext);
        constructor(arg0: string);
        constructor(arg0: string[], arg1: $MathContext);
    }
}
