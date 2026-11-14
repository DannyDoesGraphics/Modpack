import { $Serializable } from "@package/java/io";
import { $IntBinaryOperator_, $BinaryOperator_, $UnaryOperator_, $LongUnaryOperator_, $IntUnaryOperator_, $LongBinaryOperator_ } from "@package/java/util/function";
import { $Number } from "@package/java/lang";

declare module "@package/java/util/concurrent/atomic" {
    export class $AtomicBoolean implements $Serializable {
        get(): boolean;
        set(arg0: boolean): void;
        getOpaque(): boolean;
        setOpaque(arg0: boolean): void;
        getAcquire(): boolean;
        setRelease(arg0: boolean): void;
        compareAndSet(arg0: boolean, arg1: boolean): boolean;
        compareAndExchange(arg0: boolean, arg1: boolean): boolean;
        compareAndExchangeAcquire(arg0: boolean, arg1: boolean): boolean;
        compareAndExchangeRelease(arg0: boolean, arg1: boolean): boolean;
        weakCompareAndSetPlain(arg0: boolean, arg1: boolean): boolean;
        /**
         * @deprecated
         */
        weakCompareAndSet(arg0: boolean, arg1: boolean): boolean;
        weakCompareAndSetAcquire(arg0: boolean, arg1: boolean): boolean;
        weakCompareAndSetRelease(arg0: boolean, arg1: boolean): boolean;
        getAndSet(arg0: boolean): boolean;
        lazySet(arg0: boolean): void;
        weakCompareAndSetVolatile(arg0: boolean, arg1: boolean): boolean;
        getPlain(): boolean;
        setPlain(arg0: boolean): void;
        constructor(arg0: boolean);
        constructor();
        get acquire(): boolean;
        set release(value: boolean);
    }
    export class $AtomicReferenceArray<E> implements $Serializable {
        get(arg0: number): E;
        length(): number;
        set(arg0: number, arg1: E): void;
        getOpaque(arg0: number): E;
        setOpaque(arg0: number, arg1: E): void;
        getAcquire(arg0: number): E;
        setRelease(arg0: number, arg1: E): void;
        compareAndSet(arg0: number, arg1: E, arg2: E): boolean;
        compareAndExchange(arg0: number, arg1: E, arg2: E): E;
        compareAndExchangeAcquire(arg0: number, arg1: E, arg2: E): E;
        compareAndExchangeRelease(arg0: number, arg1: E, arg2: E): E;
        weakCompareAndSetPlain(arg0: number, arg1: E, arg2: E): boolean;
        /**
         * @deprecated
         */
        weakCompareAndSet(arg0: number, arg1: E, arg2: E): boolean;
        weakCompareAndSetAcquire(arg0: number, arg1: E, arg2: E): boolean;
        weakCompareAndSetRelease(arg0: number, arg1: E, arg2: E): boolean;
        getAndSet(arg0: number, arg1: E): E;
        lazySet(arg0: number, arg1: E): void;
        weakCompareAndSetVolatile(arg0: number, arg1: E, arg2: E): boolean;
        getAndUpdate(arg0: number, arg1: $UnaryOperator_<E>): E;
        updateAndGet(arg0: number, arg1: $UnaryOperator_<E>): E;
        getAndAccumulate(arg0: number, arg1: E, arg2: $BinaryOperator_<E>): E;
        accumulateAndGet(arg0: number, arg1: E, arg2: $BinaryOperator_<E>): E;
        getPlain(arg0: number): E;
        setPlain(arg0: number, arg1: E): void;
        constructor(arg0: number);
        constructor(arg0: E[]);
    }
    export class $AtomicInteger extends $Number implements $Serializable {
        get(): number;
        set(arg0: number): void;
        getOpaque(): number;
        setOpaque(arg0: number): void;
        getAcquire(): number;
        setRelease(arg0: number): void;
        compareAndSet(arg0: number, arg1: number): boolean;
        compareAndExchange(arg0: number, arg1: number): number;
        compareAndExchangeAcquire(arg0: number, arg1: number): number;
        compareAndExchangeRelease(arg0: number, arg1: number): number;
        weakCompareAndSetPlain(arg0: number, arg1: number): boolean;
        /**
         * @deprecated
         */
        weakCompareAndSet(arg0: number, arg1: number): boolean;
        weakCompareAndSetAcquire(arg0: number, arg1: number): boolean;
        weakCompareAndSetRelease(arg0: number, arg1: number): boolean;
        getAndSet(arg0: number): number;
        getAndAdd(arg0: number): number;
        lazySet(arg0: number): void;
        incrementAndGet(): number;
        weakCompareAndSetVolatile(arg0: number, arg1: number): boolean;
        getAndIncrement(): number;
        getAndDecrement(): number;
        decrementAndGet(): number;
        addAndGet(arg0: number): number;
        getAndUpdate(arg0: $IntUnaryOperator_): number;
        updateAndGet(arg0: $IntUnaryOperator_): number;
        getAndAccumulate(arg0: number, arg1: $IntBinaryOperator_): number;
        accumulateAndGet(arg0: number, arg1: $IntBinaryOperator_): number;
        getPlain(): number;
        setPlain(arg0: number): void;
        constructor(arg0: number);
        constructor();
        get acquire(): number;
        set release(value: number);
        get andIncrement(): number;
        get andDecrement(): number;
    }
    export class $AtomicReference<V> implements $Serializable {
        get(): V;
        set(arg0: V): void;
        getOpaque(): V;
        setOpaque(arg0: V): void;
        getAcquire(): V;
        setRelease(arg0: V): void;
        compareAndSet(arg0: V, arg1: V): boolean;
        compareAndExchange(arg0: V, arg1: V): V;
        compareAndExchangeAcquire(arg0: V, arg1: V): V;
        compareAndExchangeRelease(arg0: V, arg1: V): V;
        weakCompareAndSetPlain(arg0: V, arg1: V): boolean;
        /**
         * @deprecated
         */
        weakCompareAndSet(arg0: V, arg1: V): boolean;
        weakCompareAndSetAcquire(arg0: V, arg1: V): boolean;
        weakCompareAndSetRelease(arg0: V, arg1: V): boolean;
        getAndSet(arg0: V): V;
        lazySet(arg0: V): void;
        weakCompareAndSetVolatile(arg0: V, arg1: V): boolean;
        getAndUpdate(arg0: $UnaryOperator_<V>): V;
        updateAndGet(arg0: $UnaryOperator_<V>): V;
        getAndAccumulate(arg0: V, arg1: $BinaryOperator_<V>): V;
        accumulateAndGet(arg0: V, arg1: $BinaryOperator_<V>): V;
        getPlain(): V;
        setPlain(arg0: V): void;
        constructor(arg0: V);
        constructor();
        get acquire(): V;
        set release(value: V);
    }
    export class $AtomicLong extends $Number implements $Serializable {
        get(): number;
        set(arg0: number): void;
        getOpaque(): number;
        setOpaque(arg0: number): void;
        getAcquire(): number;
        setRelease(arg0: number): void;
        compareAndSet(arg0: number, arg1: number): boolean;
        compareAndExchange(arg0: number, arg1: number): number;
        compareAndExchangeAcquire(arg0: number, arg1: number): number;
        compareAndExchangeRelease(arg0: number, arg1: number): number;
        weakCompareAndSetPlain(arg0: number, arg1: number): boolean;
        /**
         * @deprecated
         */
        weakCompareAndSet(arg0: number, arg1: number): boolean;
        weakCompareAndSetAcquire(arg0: number, arg1: number): boolean;
        weakCompareAndSetRelease(arg0: number, arg1: number): boolean;
        getAndSet(arg0: number): number;
        getAndAdd(arg0: number): number;
        lazySet(arg0: number): void;
        incrementAndGet(): number;
        weakCompareAndSetVolatile(arg0: number, arg1: number): boolean;
        getAndIncrement(): number;
        getAndDecrement(): number;
        decrementAndGet(): number;
        addAndGet(arg0: number): number;
        getAndUpdate(arg0: $LongUnaryOperator_): number;
        updateAndGet(arg0: $LongUnaryOperator_): number;
        getAndAccumulate(arg0: number, arg1: $LongBinaryOperator_): number;
        accumulateAndGet(arg0: number, arg1: $LongBinaryOperator_): number;
        getPlain(): number;
        setPlain(arg0: number): void;
        constructor();
        constructor(arg0: number);
        get acquire(): number;
        set release(value: number);
        get andIncrement(): number;
        get andDecrement(): number;
    }
}
