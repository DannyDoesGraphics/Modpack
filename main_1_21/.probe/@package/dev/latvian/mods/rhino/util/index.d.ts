import { $Supplier_ } from "@package/java/util/function";
import { $TypeInfo_, $TypeInfo } from "@package/dev/latvian/mods/rhino/type";
import { $List, $List_ } from "@package/java/util";
import { $Object, $Iterable_, $Enum } from "@package/java/lang";
import { $Context, $Scriptable, $NativeArray } from "@package/dev/latvian/mods/rhino";
export * as wrap from "@package/dev/latvian/mods/rhino/util/wrap";

declare module "@package/dev/latvian/mods/rhino/util" {
    export class $DataObject {
    }
    export interface $DataObject {
        createDataObject<T>(arg0: $Supplier_<T>, arg1: $Context): T;
        createDataObjectList<T>(arg0: $Supplier_<T>, arg1: $Context): $List<T>;
        isDataObjectList(): boolean;
        get dataObjectList(): boolean;
    }
    export class $CustomJavaToJsWrapper {
    }
    export interface $CustomJavaToJsWrapper {
        convertJavaToJs(arg1: $Scriptable, arg2: $TypeInfo_): $Scriptable;
    }
    /**
     * Values that may be interpreted as {@link $CustomJavaToJsWrapper}.
     */
    export type $CustomJavaToJsWrapper_ = ((arg1: $Scriptable, arg2: $TypeInfo) => $Scriptable);
    export class $ClassVisibilityContext extends $Enum<$ClassVisibilityContext> {
        static values(): $ClassVisibilityContext[];
        static valueOf(arg0: string): $ClassVisibilityContext;
        static ARGUMENT: $ClassVisibilityContext;
        static EXCEPTION: $ClassVisibilityContext;
        static UNKNOWN: $ClassVisibilityContext;
        static CLASS_IN_PACKAGE: $ClassVisibilityContext;
        static MEMBER: $ClassVisibilityContext;
    }
    /**
     * Values that may be interpreted as {@link $ClassVisibilityContext}.
     */
    export type $ClassVisibilityContext_ = "unknown" | "member" | "class_in_package" | "argument" | "exception";
    export class $SpecialEquality {
        static checkSpecialEquality(arg1: $Object, arg2: $Object, arg3: boolean): boolean;
    }
    export interface $SpecialEquality {
        specialEquals(arg1: $Object, arg2: boolean): boolean;
    }
    export class $DefaultValueTypeHint extends $Enum<$DefaultValueTypeHint> {
        static values(): $DefaultValueTypeHint[];
        static valueOf(arg0: string): $DefaultValueTypeHint;
        static NUMBER: $DefaultValueTypeHint;
        static STRING: $DefaultValueTypeHint;
        static CLASS: $DefaultValueTypeHint;
        static FUNCTION: $DefaultValueTypeHint;
        static BOOLEAN: $DefaultValueTypeHint;
    }
    /**
     * Values that may be interpreted as {@link $DefaultValueTypeHint}.
     */
    export type $DefaultValueTypeHint_ = "string" | "number" | "boolean" | "function" | "class";
    export class $ArrayValueProvider {
        static fromIterable(arg0: $Iterable_<never>): $ArrayValueProvider;
        static fromNativeArray(arg0: $NativeArray): $ArrayValueProvider;
        static fromJavaList(arg0: $List_<never>, arg1: $Object): $ArrayValueProvider;
        static EMPTY: $ArrayValueProvider;
    }
    export interface $ArrayValueProvider {
        getArrayValue(arg1: number): $Object;
        getErrorSource(): $Object;
        getLength(): number;
        createList(arg1: $TypeInfo_): $Object;
        createArray(arg1: $TypeInfo_): $Object;
        createSet(arg1: $TypeInfo_): $Object;
        get errorSource(): $Object;
        get length(): number;
    }
    export class $ToStringJS {
        static toStringJS(arg1: $Object): string;
    }
    export interface $ToStringJS {
        toStringJS(): string;
    }
    export class $RemappedEnumConstant {
    }
    export interface $RemappedEnumConstant {
        getRemappedEnumConstantName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $RemappedEnumConstant}.
     */
    export type $RemappedEnumConstant_ = (() => string);
}
