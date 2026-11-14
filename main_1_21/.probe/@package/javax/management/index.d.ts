import { $Serializable } from "@package/java/io";
import { $Constructor, $Method } from "@package/java/lang/reflect";
import { $ArrayList, $List, $SequencedCollection, $List_ } from "@package/java/util";
import { $Object, $Cloneable } from "@package/java/lang";
export * as openmbean from "@package/javax/management/openmbean";

declare module "@package/javax/management" {
    export class $MBeanConstructorInfo extends $MBeanFeatureInfo implements $Cloneable {
        clone(): $Object;
        getSignature(): $MBeanParameterInfo[];
        constructor(arg0: string, arg1: $Constructor<never>);
        constructor(arg0: string, arg1: string, arg2: $MBeanParameterInfo[], arg3: $Descriptor);
        constructor(arg0: string, arg1: string, arg2: $MBeanParameterInfo[]);
        get signature(): $MBeanParameterInfo[];
    }
    export class $MBeanNotificationInfo extends $MBeanFeatureInfo implements $Cloneable {
        getNotifTypes(): string[];
        clone(): $Object;
        constructor(arg0: string[], arg1: string, arg2: string);
        constructor(arg0: string[], arg1: string, arg2: string, arg3: $Descriptor);
        get notifTypes(): string[];
    }
    export class $MBeanFeatureInfo implements $Serializable, $DescriptorRead {
        getDescription(): string;
        getName(): string;
        getDescriptor(): $Descriptor;
        constructor(arg0: string, arg1: string);
        constructor(arg0: string, arg1: string, arg2: $Descriptor);
        get description(): string;
        get name(): string;
        get descriptor(): $Descriptor;
    }
    export class $DescriptorRead {
    }
    export interface $DescriptorRead {
        getDescriptor(): $Descriptor;
        get descriptor(): $Descriptor;
    }
    /**
     * Values that may be interpreted as {@link $DescriptorRead}.
     */
    export type $DescriptorRead_ = (() => $Descriptor);
    export class $Descriptor {
    }
    export interface $Descriptor extends $Serializable, $Cloneable {
        setField(arg0: string, arg1: $Object): void;
        removeField(arg0: string): void;
        getFieldValues(...arg0: string[]): $Object[];
        equals(arg0: $Object): boolean;
        hashCode(): number;
        clone(): $Object;
        getFields(): string[];
        setFields(arg0: string[], arg1: $Object[]): void;
        isValid(): boolean;
        getFieldNames(): string[];
        getFieldValue(arg0: string): $Object;
        get valid(): boolean;
        get fieldNames(): string[];
    }
    export class $MBeanInfo implements $Cloneable, $Serializable, $DescriptorRead {
        getDescription(): string;
        getOperations(): $MBeanOperationInfo[];
        getNotifications(): $MBeanNotificationInfo[];
        clone(): $Object;
        getDescriptor(): $Descriptor;
        getConstructors(): $MBeanConstructorInfo[];
        getClassName(): string;
        getAttributes(): $MBeanAttributeInfo[];
        constructor(arg0: string, arg1: string, arg2: $MBeanAttributeInfo[], arg3: $MBeanConstructorInfo[], arg4: $MBeanOperationInfo[], arg5: $MBeanNotificationInfo[]);
        constructor(arg0: string, arg1: string, arg2: $MBeanAttributeInfo[], arg3: $MBeanConstructorInfo[], arg4: $MBeanOperationInfo[], arg5: $MBeanNotificationInfo[], arg6: $Descriptor);
        get description(): string;
        get operations(): $MBeanOperationInfo[];
        get notifications(): $MBeanNotificationInfo[];
        get descriptor(): $Descriptor;
        get constructors(): $MBeanConstructorInfo[];
        get className(): string;
        get attributes(): $MBeanAttributeInfo[];
    }
    export class $DynamicMBean {
    }
    export interface $DynamicMBean {
        getMBeanInfo(): $MBeanInfo;
        setAttributes(arg0: $AttributeList): $AttributeList;
        invoke(arg0: string, arg1: $Object[], arg2: string[]): $Object;
        getAttributes(arg0: string[]): $AttributeList;
        setAttribute(arg0: $Attribute): void;
        getAttribute(arg0: string): $Object;
        get MBeanInfo(): $MBeanInfo;
    }
    export class $Attribute implements $Serializable {
        getName(): string;
        getValue(): $Object;
        constructor(arg0: string, arg1: $Object);
        get name(): string;
        get value(): $Object;
    }
    export class $MBeanAttributeInfo extends $MBeanFeatureInfo implements $Cloneable {
        isIs(): boolean;
        clone(): $Object;
        getType(): string;
        isReadable(): boolean;
        isWritable(): boolean;
        constructor(arg0: string, arg1: string, arg2: string, arg3: boolean, arg4: boolean, arg5: boolean);
        constructor(arg0: string, arg1: string, arg2: $Method, arg3: $Method);
        constructor(arg0: string, arg1: string, arg2: string, arg3: boolean, arg4: boolean, arg5: boolean, arg6: $Descriptor);
        get is(): boolean;
        get type(): string;
        get readable(): boolean;
        get writable(): boolean;
    }
    export class $MBeanParameterInfo extends $MBeanFeatureInfo implements $Cloneable {
        clone(): $Object;
        getType(): string;
        constructor(arg0: string, arg1: string, arg2: string);
        constructor(arg0: string, arg1: string, arg2: string, arg3: $Descriptor);
        get type(): string;
    }
    export class $MBeanOperationInfo extends $MBeanFeatureInfo implements $Cloneable {
        getImpact(): number;
        clone(): $Object;
        getReturnType(): string;
        getSignature(): $MBeanParameterInfo[];
        static ACTION_INFO: number;
        static ACTION: number;
        static UNKNOWN: number;
        static INFO: number;
        constructor(arg0: string, arg1: $Method);
        constructor(arg0: string, arg1: string, arg2: $MBeanParameterInfo[], arg3: string, arg4: number);
        constructor(arg0: string, arg1: string, arg2: $MBeanParameterInfo[], arg3: string, arg4: number, arg5: $Descriptor);
        get impact(): number;
        get returnType(): string;
        get signature(): $MBeanParameterInfo[];
    }
    export class $AttributeList extends $ArrayList<$Object> {
        add(arg0: $Attribute): void;
        add(arg0: number, arg1: $Attribute): void;
        addAll(arg0: $AttributeList): boolean;
        addAll(arg0: number, arg1: $AttributeList): boolean;
        set(arg0: number, arg1: $Attribute): void;
        asList(): $List<$Attribute>;
        reversed(): $SequencedCollection<$Object>;
        constructor(arg0: $List_<$Attribute>);
        constructor();
        constructor(arg0: number);
        constructor(arg0: $AttributeList);
    }
}
