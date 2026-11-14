import { $Annotation } from "@package/java/lang/annotation";
import { $Set } from "@package/java/util";
import { $Object, $Enum, $Class, $Runtime$Version } from "@package/java/lang";

declare module "@package/java/lang/reflect" {
    export class $GenericDeclaration {
    }
    export interface $GenericDeclaration extends $AnnotatedElement {
        getTypeParameters(): $TypeVariable<never>[];
        get typeParameters(): $TypeVariable<never>[];
    }
    export class $Member {
        static PUBLIC: number;
        static DECLARED: number;
    }
    export interface $Member {
        getName(): string;
        getModifiers(): number;
        isSynthetic(): boolean;
        accessFlags(): $Set<$AccessFlag>;
        getDeclaringClass(): $Class<never>;
        get name(): string;
        get modifiers(): number;
        get synthetic(): boolean;
        get declaringClass(): $Class<never>;
    }
    export class $Field extends $AccessibleObject implements $Member {
        getName(): string;
        get(arg0: $Object): $Object;
        getModifiers(): number;
        getBoolean(arg0: $Object): boolean;
        getByte(arg0: $Object): number;
        getShort(arg0: $Object): number;
        getChar(arg0: $Object): string;
        getInt(arg0: $Object): number;
        getLong(arg0: $Object): number;
        getFloat(arg0: $Object): number;
        getDouble(arg0: $Object): number;
        isSynthetic(): boolean;
        toGenericString(): string;
        accessFlags(): $Set<$AccessFlag>;
        getDeclaringClass(): $Class<never>;
        set(arg0: $Object, arg1: $Object): void;
        getGenericType(): $Type;
        getType(): $Class<never>;
        setBoolean(arg0: $Object, arg1: boolean): void;
        setByte(arg0: $Object, arg1: number): void;
        setChar(arg0: $Object, arg1: string): void;
        setShort(arg0: $Object, arg1: number): void;
        setInt(arg0: $Object, arg1: number): void;
        setLong(arg0: $Object, arg1: number): void;
        setFloat(arg0: $Object, arg1: number): void;
        setDouble(arg0: $Object, arg1: number): void;
        isEnumConstant(): boolean;
        getAnnotatedType(): $AnnotatedType;
        get name(): string;
        get modifiers(): number;
        get synthetic(): boolean;
        get declaringClass(): $Class<never>;
        get genericType(): $Type;
        get type(): $Class<never>;
        get enumConstant(): boolean;
        get annotatedType(): $AnnotatedType;
    }
    export class $AccessibleObject implements $AnnotatedElement {
        isAnnotationPresent(arg0: $Class<$Annotation>): boolean;
        getAnnotation<T extends $Annotation>(arg0: $Class<T>): T;
        getAnnotationsByType<T extends $Annotation>(arg0: $Class<T>): T[];
        getAnnotations(): $Annotation[];
        getDeclaredAnnotation<T extends $Annotation>(arg0: $Class<T>): T;
        getDeclaredAnnotationsByType<T extends $Annotation>(arg0: $Class<T>): T[];
        getDeclaredAnnotations(): $Annotation[];
        static setAccessible(arg0: $AccessibleObject[], arg1: boolean): void;
        setAccessible(arg0: boolean): void;
        trySetAccessible(): boolean;
        canAccess(arg0: $Object): boolean;
        /**
         * @deprecated
         */
        isAccessible(): boolean;
        get annotations(): $Annotation[];
        get declaredAnnotations(): $Annotation[];
    }
    export class $Constructor<T> extends $Executable {
        newInstance(...arg0: $Object[]): T;
    }
    export class $AccessFlag$Location extends $Enum<$AccessFlag$Location> {
        static values(): $AccessFlag$Location[];
        static valueOf(arg0: string): $AccessFlag$Location;
        static MODULE: $AccessFlag$Location;
        static MODULE_EXPORTS: $AccessFlag$Location;
        static FIELD: $AccessFlag$Location;
        static METHOD_PARAMETER: $AccessFlag$Location;
        static MODULE_REQUIRES: $AccessFlag$Location;
        static METHOD: $AccessFlag$Location;
        static MODULE_OPENS: $AccessFlag$Location;
        static CLASS: $AccessFlag$Location;
        static INNER_CLASS: $AccessFlag$Location;
    }
    /**
     * Values that may be interpreted as {@link $AccessFlag$Location}.
     */
    export type $AccessFlag$Location_ = "class" | "field" | "method" | "inner_class" | "method_parameter" | "module" | "module_requires" | "module_exports" | "module_opens";
    export class $Type {
    }
    export interface $Type {
        getTypeName(): string;
        get typeName(): string;
    }
    export class $Method extends $Executable {
        invoke(arg0: $Object, ...arg1: $Object[]): $Object;
        getReturnType(): $Class<never>;
        isDefault(): boolean;
        getGenericReturnType(): $Type;
        isBridge(): boolean;
        getDefaultValue(): $Object;
        get returnType(): $Class<never>;
        get default(): boolean;
        get genericReturnType(): $Type;
        get bridge(): boolean;
        get defaultValue(): $Object;
    }
    export class $ClassFileFormatVersion extends $Enum<$ClassFileFormatVersion> {
        static values(): $ClassFileFormatVersion[];
        static valueOf(arg0: string): $ClassFileFormatVersion;
        static valueOf(arg0: $Runtime$Version): $ClassFileFormatVersion;
        major(): number;
        static latest(): $ClassFileFormatVersion;
        runtimeVersion(): $Runtime$Version;
        static fromMajor(arg0: number): $ClassFileFormatVersion;
        static RELEASE_15: $ClassFileFormatVersion;
        static RELEASE_16: $ClassFileFormatVersion;
        static RELEASE_17: $ClassFileFormatVersion;
        static RELEASE_18: $ClassFileFormatVersion;
        static RELEASE_11: $ClassFileFormatVersion;
        static RELEASE_12: $ClassFileFormatVersion;
        static RELEASE_13: $ClassFileFormatVersion;
        static RELEASE_14: $ClassFileFormatVersion;
        static RELEASE_20: $ClassFileFormatVersion;
        static RELEASE_10: $ClassFileFormatVersion;
        static RELEASE_21: $ClassFileFormatVersion;
        static RELEASE_9: $ClassFileFormatVersion;
        static RELEASE_8: $ClassFileFormatVersion;
        static RELEASE_7: $ClassFileFormatVersion;
        static RELEASE_6: $ClassFileFormatVersion;
        static RELEASE_5: $ClassFileFormatVersion;
        static RELEASE_4: $ClassFileFormatVersion;
        static RELEASE_3: $ClassFileFormatVersion;
        static RELEASE_2: $ClassFileFormatVersion;
        static RELEASE_1: $ClassFileFormatVersion;
        static RELEASE_0: $ClassFileFormatVersion;
        static RELEASE_19: $ClassFileFormatVersion;
    }
    /**
     * Values that may be interpreted as {@link $ClassFileFormatVersion}.
     */
    export type $ClassFileFormatVersion_ = "release_0" | "release_1" | "release_2" | "release_3" | "release_4" | "release_5" | "release_6" | "release_7" | "release_8" | "release_9" | "release_10" | "release_11" | "release_12" | "release_13" | "release_14" | "release_15" | "release_16" | "release_17" | "release_18" | "release_19" | "release_20" | "release_21";
    export class $TypeVariable<D extends $GenericDeclaration> {
    }
    export interface $TypeVariable<D extends $GenericDeclaration> extends $Type, $AnnotatedElement {
        getName(): string;
        getBounds(): $Type[];
        getGenericDeclaration(): D;
        getAnnotatedBounds(): $AnnotatedType[];
        get name(): string;
        get bounds(): $Type[];
        get genericDeclaration(): D;
        get annotatedBounds(): $AnnotatedType[];
    }
    export class $RecordComponent implements $AnnotatedElement {
        getName(): string;
        getAnnotation<T extends $Annotation>(arg0: $Class<T>): T;
        getAnnotations(): $Annotation[];
        getDeclaredAnnotations(): $Annotation[];
        getGenericSignature(): string;
        getGenericType(): $Type;
        getType(): $Class<never>;
        getAnnotatedType(): $AnnotatedType;
        getDeclaringRecord(): $Class<never>;
        getAccessor(): $Method;
        isAnnotationPresent(arg0: $Class<$Annotation>): boolean;
        getAnnotationsByType<T extends $Annotation>(arg0: $Class<T>): T[];
        getDeclaredAnnotation<T extends $Annotation>(arg0: $Class<T>): T;
        getDeclaredAnnotationsByType<T extends $Annotation>(arg0: $Class<T>): T[];
        get name(): string;
        get annotations(): $Annotation[];
        get declaredAnnotations(): $Annotation[];
        get genericSignature(): string;
        get genericType(): $Type;
        get type(): $Class<never>;
        get annotatedType(): $AnnotatedType;
        get declaringRecord(): $Class<never>;
        get accessor(): $Method;
    }
    export class $AnnotatedType {
    }
    export interface $AnnotatedType extends $AnnotatedElement {
        getAnnotation<T extends $Annotation>(arg0: $Class<T>): T;
        getAnnotations(): $Annotation[];
        getDeclaredAnnotations(): $Annotation[];
        getType(): $Type;
        getAnnotatedOwnerType(): $AnnotatedType;
        get annotations(): $Annotation[];
        get declaredAnnotations(): $Annotation[];
        get type(): $Type;
        get annotatedOwnerType(): $AnnotatedType;
    }
    export class $Executable extends $AccessibleObject implements $Member, $GenericDeclaration {
        getName(): string;
        getModifiers(): number;
        getTypeParameters(): $TypeVariable<never>[];
        getParameterTypes(): $Class<never>[];
        isSynthetic(): boolean;
        toGenericString(): string;
        accessFlags(): $Set<$AccessFlag>;
        getDeclaringClass(): $Class<never>;
        isVarArgs(): boolean;
        getAnnotatedParameterTypes(): $AnnotatedType[];
        getParameterCount(): number;
        getParameterAnnotations(): $Annotation[][];
        getGenericParameterTypes(): $Type[];
        getGenericExceptionTypes(): $Type[];
        getExceptionTypes(): $Class<never>[];
        getAnnotatedReturnType(): $AnnotatedType;
        getParameters(): $Parameter[];
        getAnnotatedReceiverType(): $AnnotatedType;
        getAnnotatedExceptionTypes(): $AnnotatedType[];
        get name(): string;
        get modifiers(): number;
        get typeParameters(): $TypeVariable<never>[];
        get parameterTypes(): $Class<never>[];
        get synthetic(): boolean;
        get declaringClass(): $Class<never>;
        get varArgs(): boolean;
        get annotatedParameterTypes(): $AnnotatedType[];
        get parameterCount(): number;
        get parameterAnnotations(): $Annotation[][];
        get genericParameterTypes(): $Type[];
        get genericExceptionTypes(): $Type[];
        get exceptionTypes(): $Class<never>[];
        get annotatedReturnType(): $AnnotatedType;
        get parameters(): $Parameter[];
        get annotatedReceiverType(): $AnnotatedType;
        get annotatedExceptionTypes(): $AnnotatedType[];
    }
    export class $AccessFlag extends $Enum<$AccessFlag> {
        static values(): $AccessFlag[];
        static valueOf(arg0: string): $AccessFlag;
        static maskToAccessFlags(arg0: number, arg1: $AccessFlag$Location_): $Set<$AccessFlag>;
        mask(): number;
        sourceModifier(): boolean;
        locations(): $Set<$AccessFlag$Location>;
        locations(arg0: $ClassFileFormatVersion_): $Set<$AccessFlag$Location>;
        static TRANSITIVE: $AccessFlag;
        static SYNCHRONIZED: $AccessFlag;
        static VOLATILE: $AccessFlag;
        static VARARGS: $AccessFlag;
        static STRICT: $AccessFlag;
        static ENUM: $AccessFlag;
        static SUPER: $AccessFlag;
        static NATIVE: $AccessFlag;
        static SYNTHETIC: $AccessFlag;
        static FINAL: $AccessFlag;
        static BRIDGE: $AccessFlag;
        static ABSTRACT: $AccessFlag;
        static STATIC: $AccessFlag;
        static PRIVATE: $AccessFlag;
        static OPEN: $AccessFlag;
        static STATIC_PHASE: $AccessFlag;
        static MODULE: $AccessFlag;
        static INTERFACE: $AccessFlag;
        static ANNOTATION: $AccessFlag;
        static PUBLIC: $AccessFlag;
        static MANDATED: $AccessFlag;
        static PROTECTED: $AccessFlag;
        static TRANSIENT: $AccessFlag;
    }
    /**
     * Values that may be interpreted as {@link $AccessFlag}.
     */
    export type $AccessFlag_ = "public" | "private" | "protected" | "static" | "final" | "super" | "open" | "transitive" | "synchronized" | "static_phase" | "volatile" | "bridge" | "transient" | "varargs" | "native" | "interface" | "abstract" | "strict" | "synthetic" | "annotation" | "enum" | "mandated" | "module";
    export class $AnnotatedElement {
    }
    export interface $AnnotatedElement {
        isAnnotationPresent(arg0: $Class<$Annotation>): boolean;
        getAnnotation<T extends $Annotation>(arg0: $Class<T>): T;
        getAnnotationsByType<T extends $Annotation>(arg0: $Class<T>): T[];
        getAnnotations(): $Annotation[];
        getDeclaredAnnotation<T extends $Annotation>(arg0: $Class<T>): T;
        getDeclaredAnnotationsByType<T extends $Annotation>(arg0: $Class<T>): T[];
        getDeclaredAnnotations(): $Annotation[];
        get annotations(): $Annotation[];
        get declaredAnnotations(): $Annotation[];
    }
    export class $Parameter implements $AnnotatedElement {
        getName(): string;
        getModifiers(): number;
        isSynthetic(): boolean;
        accessFlags(): $Set<$AccessFlag>;
        getAnnotation<T extends $Annotation>(arg0: $Class<T>): T;
        getAnnotationsByType<T extends $Annotation>(arg0: $Class<T>): T[];
        getAnnotations(): $Annotation[];
        getDeclaredAnnotation<T extends $Annotation>(arg0: $Class<T>): T;
        getDeclaredAnnotationsByType<T extends $Annotation>(arg0: $Class<T>): T[];
        getDeclaredAnnotations(): $Annotation[];
        getType(): $Class<never>;
        getAnnotatedType(): $AnnotatedType;
        getParameterizedType(): $Type;
        isVarArgs(): boolean;
        isNamePresent(): boolean;
        getDeclaringExecutable(): $Executable;
        isImplicit(): boolean;
        isAnnotationPresent(arg0: $Class<$Annotation>): boolean;
        get name(): string;
        get modifiers(): number;
        get synthetic(): boolean;
        get annotations(): $Annotation[];
        get declaredAnnotations(): $Annotation[];
        get type(): $Class<never>;
        get annotatedType(): $AnnotatedType;
        get parameterizedType(): $Type;
        get varArgs(): boolean;
        get namePresent(): boolean;
        get declaringExecutable(): $Executable;
        get implicit(): boolean;
    }
}
