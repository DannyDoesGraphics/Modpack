import { $MethodHandles$Lookup, $TypeDescriptor$OfMethod, $MethodType, $TypeDescriptor$OfField } from "@package/java/lang/invoke";
import { $List, $List_ } from "@package/java/util";
import { $Object, $Enum } from "@package/java/lang";

declare module "@package/java/lang/constant" {
    export class $ClassDesc {
        static ofInternalName(arg0: string): $ClassDesc;
        static of(arg0: string, arg1: string): $ClassDesc;
        static of(arg0: string): $ClassDesc;
        static ofDescriptor(arg0: string): $ClassDesc;
    }
    export interface $ClassDesc extends $ConstantDesc, $TypeDescriptor$OfField<$ClassDesc> {
        isClassOrInterface(): boolean;
        equals(arg0: $Object): boolean;
        isArray(): boolean;
        isPrimitive(): boolean;
        packageName(): string;
        descriptorString(): string;
        arrayType(): $ClassDesc;
        arrayType(arg0: number): $ClassDesc;
        displayName(): string;
        nested(arg0: string): $ClassDesc;
        nested(arg0: string, ...arg1: string[]): $ClassDesc;
        componentType(): $ClassDesc;
        resolveConstantDesc(arg0: $MethodHandles$Lookup): $Object;
        get classOrInterface(): boolean;
        get array(): boolean;
        get primitive(): boolean;
    }
    export class $DirectMethodHandleDesc {
    }
    export interface $DirectMethodHandleDesc extends $MethodHandleDesc {
        lookupDescriptor(): string;
        isOwnerInterface(): boolean;
        methodName(): string;
        kind(): $DirectMethodHandleDesc$Kind;
        owner(): $ClassDesc;
        refKind(): number;
        get ownerInterface(): boolean;
    }
    export class $DirectMethodHandleDesc$Kind extends $Enum<$DirectMethodHandleDesc$Kind> {
        static values(): $DirectMethodHandleDesc$Kind[];
        static valueOf(arg0: number, arg1: boolean): $DirectMethodHandleDesc$Kind;
        static valueOf(arg0: string): $DirectMethodHandleDesc$Kind;
        static valueOf(arg0: number): $DirectMethodHandleDesc$Kind;
        static INTERFACE_SPECIAL: $DirectMethodHandleDesc$Kind;
        refKind: number;
        static SETTER: $DirectMethodHandleDesc$Kind;
        static SPECIAL: $DirectMethodHandleDesc$Kind;
        static STATIC: $DirectMethodHandleDesc$Kind;
        static GETTER: $DirectMethodHandleDesc$Kind;
        static STATIC_GETTER: $DirectMethodHandleDesc$Kind;
        static INTERFACE_VIRTUAL: $DirectMethodHandleDesc$Kind;
        static STATIC_SETTER: $DirectMethodHandleDesc$Kind;
        static CONSTRUCTOR: $DirectMethodHandleDesc$Kind;
        isInterface: boolean;
        static INTERFACE_STATIC: $DirectMethodHandleDesc$Kind;
        static VIRTUAL: $DirectMethodHandleDesc$Kind;
    }
    /**
     * Values that may be interpreted as {@link $DirectMethodHandleDesc$Kind}.
     */
    export type $DirectMethodHandleDesc$Kind_ = "static" | "interface_static" | "virtual" | "interface_virtual" | "special" | "interface_special" | "constructor" | "getter" | "setter" | "static_getter" | "static_setter";
    export class $Constable {
    }
    export interface $Constable {
        describeConstable(): ($ConstantDesc) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $Constable}.
     */
    export type $Constable_ = (() => ($ConstantDesc) | undefined);
    export class $MethodHandleDesc {
        static ofConstructor(arg0: $ClassDesc, ...arg1: $ClassDesc[]): $DirectMethodHandleDesc;
        static of(arg0: $DirectMethodHandleDesc$Kind_, arg1: $ClassDesc, arg2: string, arg3: string): $DirectMethodHandleDesc;
        static ofField(arg0: $DirectMethodHandleDesc$Kind_, arg1: $ClassDesc, arg2: string, arg3: $ClassDesc): $DirectMethodHandleDesc;
        static ofMethod(arg0: $DirectMethodHandleDesc$Kind_, arg1: $ClassDesc, arg2: string, arg3: $MethodTypeDesc): $DirectMethodHandleDesc;
    }
    export interface $MethodHandleDesc extends $ConstantDesc {
        equals(arg0: $Object): boolean;
        asType(arg0: $MethodTypeDesc): $MethodHandleDesc;
        invocationType(): $MethodTypeDesc;
        resolveConstantDesc(arg0: $MethodHandles$Lookup): $Object;
    }
    export class $ConstantDesc {
    }
    export interface $ConstantDesc {
        resolveConstantDesc(arg0: $MethodHandles$Lookup): $Object;
    }
    /**
     * Values that may be interpreted as {@link $ConstantDesc}.
     */
    export type $ConstantDesc_ = ((arg0: $MethodHandles$Lookup) => $Object);
    export class $MethodTypeDesc {
        static of(arg0: $ClassDesc, ...arg1: $ClassDesc[]): $MethodTypeDesc;
        static of(arg0: $ClassDesc): $MethodTypeDesc;
        static of(arg0: $ClassDesc, arg1: $List_<$ClassDesc>): $MethodTypeDesc;
        static ofDescriptor(arg0: string): $MethodTypeDesc;
    }
    export interface $MethodTypeDesc extends $ConstantDesc, $TypeDescriptor$OfMethod<$ClassDesc, $MethodTypeDesc> {
        displayDescriptor(): string;
        equals(arg0: $Object): boolean;
        resolveConstantDesc(arg0: $MethodHandles$Lookup): $MethodType;
        descriptorString(): string;
        insertParameterTypes(arg0: number, ...arg1: $ClassDesc[]): $MethodTypeDesc;
        changeReturnType(arg0: $ClassDesc): $MethodTypeDesc;
        parameterCount(): number;
        parameterList(): $List<$ClassDesc>;
        parameterArray(): $ClassDesc[];
        changeParameterType(arg0: number, arg1: $ClassDesc): $MethodTypeDesc;
        returnType(): $ClassDesc;
        parameterType(arg0: number): $ClassDesc;
        dropParameterTypes(arg0: number, arg1: number): $MethodTypeDesc;
    }
    export class $DynamicConstantDesc<T> implements $ConstantDesc {
        constantName(): string;
        bootstrapArgs(): $ConstantDesc[];
        static ofCanonical<T>(arg0: $DirectMethodHandleDesc, arg1: string, arg2: $ClassDesc, arg3: $ConstantDesc_[]): $ConstantDesc;
        bootstrapArgsList(): $List<$ConstantDesc>;
        static of<T>(arg0: $DirectMethodHandleDesc): $DynamicConstantDesc<T>;
        static of<T>(arg0: $DirectMethodHandleDesc, ...arg1: $ConstantDesc_[]): $DynamicConstantDesc<T>;
        resolveConstantDesc(arg0: $MethodHandles$Lookup): T;
        bootstrapMethod(): $DirectMethodHandleDesc;
        static ofNamed<T>(arg0: $DirectMethodHandleDesc, arg1: string, arg2: $ClassDesc, ...arg3: $ConstantDesc_[]): $DynamicConstantDesc<T>;
        constantType(): $ClassDesc;
    }
}
