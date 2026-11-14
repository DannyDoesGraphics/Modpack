import { $Serializable } from "@package/java/io";
import { $DynamicConstantDesc, $MethodHandleDesc, $ClassDesc, $MethodTypeDesc, $Constable } from "@package/java/lang/constant";
import { $Method, $Member, $Constructor, $Field } from "@package/java/lang/reflect";
import { $List, $List_ } from "@package/java/util";
import { $ClassLoader, $Enum, $Object, $Class } from "@package/java/lang";

declare module "@package/java/lang/invoke" {
    export class $MethodHandles$Lookup {
        findClass(arg0: string): $Class<never>;
        defineClass(arg0: number[]): $Class<never>;
        "in"(arg0: $Class<never>): $MethodHandles$Lookup;
        ensureInitialized<T>(arg0: $Class<T>): $Class<T>;
        revealDirect(arg0: $MethodHandle): $MethodHandleInfo;
        lookupClass(): $Class<never>;
        previousLookupClass(): $Class<never>;
        findVirtual(arg0: $Class<never>, arg1: string, arg2: $MethodType): $MethodHandle;
        findStatic(arg0: $Class<never>, arg1: string, arg2: $MethodType): $MethodHandle;
        unreflect(arg0: $Method): $MethodHandle;
        lookupModes(): number;
        hasFullPrivilegeAccess(): boolean;
        accessClass<T>(arg0: $Class<T>): $Class<T>;
        dropLookupMode(arg0: number): $MethodHandles$Lookup;
        defineHiddenClass(arg0: number[], arg1: boolean, ...arg2: $MethodHandles$Lookup$ClassOption_[]): $MethodHandles$Lookup;
        defineHiddenClassWithClassData(arg0: number[], arg1: $Object, arg2: boolean, ...arg3: $MethodHandles$Lookup$ClassOption_[]): $MethodHandles$Lookup;
        findConstructor(arg0: $Class<never>, arg1: $MethodType): $MethodHandle;
        findSpecial(arg0: $Class<never>, arg1: string, arg2: $MethodType, arg3: $Class<never>): $MethodHandle;
        findGetter(arg0: $Class<never>, arg1: string, arg2: $Class<never>): $MethodHandle;
        findSetter(arg0: $Class<never>, arg1: string, arg2: $Class<never>): $MethodHandle;
        findVarHandle(arg0: $Class<never>, arg1: string, arg2: $Class<never>): $VarHandle;
        findStaticGetter(arg0: $Class<never>, arg1: string, arg2: $Class<never>): $MethodHandle;
        findStaticSetter(arg0: $Class<never>, arg1: string, arg2: $Class<never>): $MethodHandle;
        findStaticVarHandle(arg0: $Class<never>, arg1: string, arg2: $Class<never>): $VarHandle;
        bind(arg0: $Object, arg1: string, arg2: $MethodType): $MethodHandle;
        unreflectSpecial(arg0: $Method, arg1: $Class<never>): $MethodHandle;
        unreflectConstructor(arg0: $Constructor<never>): $MethodHandle;
        unreflectGetter(arg0: $Field): $MethodHandle;
        unreflectSetter(arg0: $Field): $MethodHandle;
        unreflectVarHandle(arg0: $Field): $VarHandle;
        /**
         * @deprecated
         */
        hasPrivateAccess(): boolean;
        static MODULE: number;
        static PACKAGE: number;
        static PUBLIC: number;
        static ORIGINAL: number;
        static UNCONDITIONAL: number;
        static PROTECTED: number;
        static PRIVATE: number;
    }
    export class $MethodType implements $Constable, $TypeDescriptor$OfMethod<$Class<never>, $MethodType>, $Serializable {
        returnType(): $Class<never>;
        wrap(): $MethodType;
        describeConstable(): ($MethodTypeDesc) | undefined;
        descriptorString(): string;
        parameterType(arg0: number): $Class<never>;
        insertParameterTypes(arg0: number, arg1: $List_<$Class<never>>): $MethodType;
        insertParameterTypes(arg0: number, ...arg1: $Class<never>[]): $MethodType;
        changeReturnType(arg0: $Class<never>): $MethodType;
        static methodType(arg0: $Class<never>, arg1: $Class<never>, ...arg2: $Class<never>[]): $MethodType;
        static methodType(arg0: $Class<never>, arg1: $Class<never>): $MethodType;
        static methodType(arg0: $Class<never>): $MethodType;
        static methodType(arg0: $Class<never>, arg1: $Class<never>[]): $MethodType;
        static methodType(arg0: $Class<never>, arg1: $List_<$Class<never>>): $MethodType;
        static methodType(arg0: $Class<never>, arg1: $MethodType): $MethodType;
        appendParameterTypes(arg0: $List_<$Class<never>>): $MethodType;
        appendParameterTypes(...arg0: $Class<never>[]): $MethodType;
        parameterCount(): number;
        static genericMethodType(arg0: number): $MethodType;
        static genericMethodType(arg0: number, arg1: boolean): $MethodType;
        lastParameterType(): $Class<never>;
        parameterList(): $List<$Class<never>>;
        erase(): $MethodType;
        toMethodDescriptorString(): string;
        hasPrimitives(): boolean;
        unwrap(): $MethodType;
        parameterArray(): $Class<never>[];
        changeParameterType(arg0: number, arg1: $Class<never>): $MethodType;
        hasWrappers(): boolean;
        generic(): $MethodType;
        static fromMethodDescriptorString(arg0: string, arg1: $ClassLoader): $MethodType;
        dropParameterTypes(arg0: number, arg1: number): $MethodType;
    }
    export class $MethodHandles$Lookup$ClassOption extends $Enum<$MethodHandles$Lookup$ClassOption> {
        static values(): $MethodHandles$Lookup$ClassOption[];
        static valueOf(arg0: string): $MethodHandles$Lookup$ClassOption;
        static NESTMATE: $MethodHandles$Lookup$ClassOption;
        static STRONG: $MethodHandles$Lookup$ClassOption;
    }
    /**
     * Values that may be interpreted as {@link $MethodHandles$Lookup$ClassOption}.
     */
    export type $MethodHandles$Lookup$ClassOption_ = "nestmate" | "strong";
    export class $TypeDescriptor$OfField<F extends $TypeDescriptor$OfField<F>> {
    }
    export interface $TypeDescriptor$OfField<F extends $TypeDescriptor$OfField<F>> extends $TypeDescriptor {
        isArray(): boolean;
        isPrimitive(): boolean;
        componentType(): F;
        arrayType(): F;
        get array(): boolean;
        get primitive(): boolean;
    }
    export class $VarHandle$VarHandleDesc extends $DynamicConstantDesc<$VarHandle> {
        static ofStaticField(arg0: $ClassDesc, arg1: string, arg2: $ClassDesc): $VarHandle$VarHandleDesc;
        static ofArray(arg0: $ClassDesc): $VarHandle$VarHandleDesc;
        resolveConstantDesc(arg0: $MethodHandles$Lookup): $VarHandle;
        static ofField(arg0: $ClassDesc, arg1: string, arg2: $ClassDesc): $VarHandle$VarHandleDesc;
        varType(): $ClassDesc;
    }
    export class $VarHandle$AccessMode extends $Enum<$VarHandle$AccessMode> {
        static values(): $VarHandle$AccessMode[];
        methodName(): string;
        static valueOf(arg0: string): $VarHandle$AccessMode;
        static valueFromMethodName(arg0: string): $VarHandle$AccessMode;
        static WEAK_COMPARE_AND_SET: $VarHandle$AccessMode;
        static GET_VOLATILE: $VarHandle$AccessMode;
        static SET: $VarHandle$AccessMode;
        static GET_AND_BITWISE_OR_ACQUIRE: $VarHandle$AccessMode;
        static GET_AND_ADD: $VarHandle$AccessMode;
        static GET_AND_SET: $VarHandle$AccessMode;
        static GET_ACQUIRE: $VarHandle$AccessMode;
        static GET_AND_ADD_RELEASE: $VarHandle$AccessMode;
        static GET_AND_BITWISE_AND_ACQUIRE: $VarHandle$AccessMode;
        static GET_AND_BITWISE_XOR_ACQUIRE: $VarHandle$AccessMode;
        static GET_AND_ADD_ACQUIRE: $VarHandle$AccessMode;
        static GET_AND_BITWISE_OR_RELEASE: $VarHandle$AccessMode;
        static SET_OPAQUE: $VarHandle$AccessMode;
        static WEAK_COMPARE_AND_SET_ACQUIRE: $VarHandle$AccessMode;
        static COMPARE_AND_SET: $VarHandle$AccessMode;
        static COMPARE_AND_EXCHANGE_ACQUIRE: $VarHandle$AccessMode;
        static GET_AND_BITWISE_AND: $VarHandle$AccessMode;
        static SET_VOLATILE: $VarHandle$AccessMode;
        static COMPARE_AND_EXCHANGE_RELEASE: $VarHandle$AccessMode;
        static GET_AND_BITWISE_XOR: $VarHandle$AccessMode;
        static WEAK_COMPARE_AND_SET_PLAIN: $VarHandle$AccessMode;
        static SET_RELEASE: $VarHandle$AccessMode;
        static COMPARE_AND_EXCHANGE: $VarHandle$AccessMode;
        static GET_AND_BITWISE_OR: $VarHandle$AccessMode;
        static GET_AND_BITWISE_AND_RELEASE: $VarHandle$AccessMode;
        static WEAK_COMPARE_AND_SET_RELEASE: $VarHandle$AccessMode;
        static GET_AND_SET_RELEASE: $VarHandle$AccessMode;
        static GET: $VarHandle$AccessMode;
        static GET_AND_SET_ACQUIRE: $VarHandle$AccessMode;
        static GET_AND_BITWISE_XOR_RELEASE: $VarHandle$AccessMode;
        static GET_OPAQUE: $VarHandle$AccessMode;
    }
    /**
     * Values that may be interpreted as {@link $VarHandle$AccessMode}.
     */
    export type $VarHandle$AccessMode_ = "get" | "set" | "get_volatile" | "set_volatile" | "get_acquire" | "set_release" | "get_opaque" | "set_opaque" | "compare_and_set" | "compare_and_exchange" | "compare_and_exchange_acquire" | "compare_and_exchange_release" | "weak_compare_and_set_plain" | "weak_compare_and_set" | "weak_compare_and_set_acquire" | "weak_compare_and_set_release" | "get_and_set" | "get_and_set_acquire" | "get_and_set_release" | "get_and_add" | "get_and_add_acquire" | "get_and_add_release" | "get_and_bitwise_or" | "get_and_bitwise_or_release" | "get_and_bitwise_or_acquire" | "get_and_bitwise_and" | "get_and_bitwise_and_release" | "get_and_bitwise_and_acquire" | "get_and_bitwise_xor" | "get_and_bitwise_xor_release" | "get_and_bitwise_xor_acquire";
    export class $MethodHandleInfo {
        static toString(arg0: number, arg1: $Class<never>, arg2: string, arg3: $MethodType): string;
        static referenceKindToString(arg0: number): string;
        static REF_getStatic: number;
        static REF_getField: number;
        static REF_putStatic: number;
        static REF_newInvokeSpecial: number;
        static REF_putField: number;
        static REF_invokeVirtual: number;
        static REF_invokeSpecial: number;
        static REF_invokeStatic: number;
        static REF_invokeInterface: number;
    }
    export interface $MethodHandleInfo {
        getName(): string;
        getModifiers(): number;
        getDeclaringClass(): $Class<never>;
        isVarArgs(): boolean;
        getReferenceKind(): number;
        getMethodType(): $MethodType;
        reflectAs<T extends $Member>(arg0: $Class<T>, arg1: $MethodHandles$Lookup): T;
        get name(): string;
        get modifiers(): number;
        get declaringClass(): $Class<never>;
        get varArgs(): boolean;
        get referenceKind(): number;
        get methodType(): $MethodType;
    }
    export class $VarHandle implements $Constable {
        get(...arg0: $Object[]): $Object;
        static storeStoreFence(): void;
        static fullFence(): void;
        describeConstable(): ($VarHandle$VarHandleDesc) | undefined;
        set(...arg0: $Object[]): void;
        varType(): $Class<never>;
        coordinateTypes(): $List<$Class<never>>;
        accessModeType(arg0: $VarHandle$AccessMode_): $MethodType;
        isAccessModeSupported(arg0: $VarHandle$AccessMode_): boolean;
        static loadLoadFence(): void;
        hasInvokeExactBehavior(): boolean;
        getVolatile(...arg0: $Object[]): $Object;
        setVolatile(...arg0: $Object[]): void;
        getOpaque(...arg0: $Object[]): $Object;
        setOpaque(...arg0: $Object[]): void;
        getAcquire(...arg0: $Object[]): $Object;
        setRelease(...arg0: $Object[]): void;
        compareAndSet(...arg0: $Object[]): boolean;
        compareAndExchange(...arg0: $Object[]): $Object;
        compareAndExchangeAcquire(...arg0: $Object[]): $Object;
        compareAndExchangeRelease(...arg0: $Object[]): $Object;
        weakCompareAndSetPlain(...arg0: $Object[]): boolean;
        weakCompareAndSet(...arg0: $Object[]): boolean;
        weakCompareAndSetAcquire(...arg0: $Object[]): boolean;
        weakCompareAndSetRelease(...arg0: $Object[]): boolean;
        getAndSet(...arg0: $Object[]): $Object;
        getAndSetAcquire(...arg0: $Object[]): $Object;
        getAndSetRelease(...arg0: $Object[]): $Object;
        getAndAdd(...arg0: $Object[]): $Object;
        getAndAddAcquire(...arg0: $Object[]): $Object;
        getAndAddRelease(...arg0: $Object[]): $Object;
        getAndBitwiseOr(...arg0: $Object[]): $Object;
        getAndBitwiseOrAcquire(...arg0: $Object[]): $Object;
        getAndBitwiseOrRelease(...arg0: $Object[]): $Object;
        getAndBitwiseAnd(...arg0: $Object[]): $Object;
        getAndBitwiseAndAcquire(...arg0: $Object[]): $Object;
        getAndBitwiseAndRelease(...arg0: $Object[]): $Object;
        getAndBitwiseXor(...arg0: $Object[]): $Object;
        getAndBitwiseXorAcquire(...arg0: $Object[]): $Object;
        getAndBitwiseXorRelease(...arg0: $Object[]): $Object;
        withInvokeExactBehavior(): $VarHandle;
        withInvokeBehavior(): $VarHandle;
        toMethodHandle(arg0: $VarHandle$AccessMode_): $MethodHandle;
        static acquireFence(): void;
        static releaseFence(): void;
        set release(value: $Object[]);
    }
    export class $TypeDescriptor$OfMethod<F extends $TypeDescriptor$OfField<F>, M extends $TypeDescriptor$OfMethod<F, M>> {
    }
    export interface $TypeDescriptor$OfMethod<F extends $TypeDescriptor$OfField<F>, M extends $TypeDescriptor$OfMethod<F, M>> extends $TypeDescriptor {
        returnType(): F;
        parameterType(arg0: number): F;
        insertParameterTypes(arg0: number, ...arg1: F[]): M;
        changeReturnType(arg0: F): M;
        dropParameterTypes(arg0: number, arg1: number): M;
        parameterCount(): number;
        parameterList(): $List<F>;
        parameterArray(): F[];
        changeParameterType(arg0: number, arg1: F): M;
    }
    export class $TypeDescriptor {
    }
    export interface $TypeDescriptor {
        descriptorString(): string;
    }
    /**
     * Values that may be interpreted as {@link $TypeDescriptor}.
     */
    export type $TypeDescriptor_ = (() => string);
    export class $MethodHandle implements $Constable {
        invoke(...arg0: $Object[]): $Object;
        invokeExact(...arg0: $Object[]): $Object;
        asFixedArity(): $MethodHandle;
        type(): $MethodType;
        describeConstable(): ($MethodHandleDesc) | undefined;
        asType(arg0: $MethodType): $MethodHandle;
        invokeWithArguments(arg0: $List_<never>): $Object;
        invokeWithArguments(...arg0: $Object[]): $Object;
        asSpreader(arg0: $Class<never>, arg1: number): $MethodHandle;
        asSpreader(arg0: number, arg1: $Class<never>, arg2: number): $MethodHandle;
        isVarargsCollector(): boolean;
        asVarargsCollector(arg0: $Class<never>): $MethodHandle;
        asCollector(arg0: number, arg1: $Class<never>, arg2: number): $MethodHandle;
        asCollector(arg0: $Class<never>, arg1: number): $MethodHandle;
        withVarargs(arg0: boolean): $MethodHandle;
        bindTo(arg0: $Object): $MethodHandle;
        get varargsCollector(): boolean;
    }
}
