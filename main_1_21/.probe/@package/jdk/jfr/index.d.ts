import { $Annotation } from "@package/java/lang/annotation";
import { $Event as $Event$1 } from "@package/jdk/internal/event";
import { $List_, $Map_, $List } from "@package/java/util";
import { $Object, $Class } from "@package/java/lang";
export * as consumer from "@package/jdk/jfr/consumer";

declare module "@package/jdk/jfr" {
    export class $Event extends $Event$1 {
    }
    export class $AnnotationElement {
        getAnnotationElements(): $List<$AnnotationElement>;
        getTypeId(): number;
        getValues(): $List<$Object>;
        getValueDescriptors(): $List<$ValueDescriptor>;
        getValue(arg0: string): $Object;
        getTypeName(): string;
        getAnnotation<A>(arg0: $Class<$Annotation>): A;
        hasValue(arg0: string): boolean;
        constructor(arg0: $Class<$Annotation>, arg1: $Map_<string, $Object>);
        constructor(arg0: $Class<$Annotation>);
        constructor(arg0: $Class<$Annotation>, arg1: $Object);
        get annotationElements(): $List<$AnnotationElement>;
        get typeId(): number;
        get values(): $List<$Object>;
        get valueDescriptors(): $List<$ValueDescriptor>;
        get typeName(): string;
    }
    export class $ValueDescriptor {
        getAnnotationElements(): $List<$AnnotationElement>;
        getTypeId(): number;
        getLabel(): string;
        getDescription(): string;
        getName(): string;
        isArray(): boolean;
        getTypeName(): string;
        getFields(): $List<$ValueDescriptor>;
        getAnnotation<A extends $Annotation>(arg0: $Class<A>): A;
        getContentType(): string;
        constructor(arg0: $Class<never>, arg1: string);
        constructor(arg0: $Class<never>, arg1: string, arg2: $List_<$AnnotationElement>);
        get annotationElements(): $List<$AnnotationElement>;
        get typeId(): number;
        get label(): string;
        get description(): string;
        get name(): string;
        get array(): boolean;
        get typeName(): string;
        get fields(): $List<$ValueDescriptor>;
        get contentType(): string;
    }
    export class $EventType {
        getAnnotationElements(): $List<$AnnotationElement>;
        static getEventType(arg0: $Class<$Event>): $EventType;
        getCategoryNames(): $List<string>;
        getSettingDescriptors(): $List<$SettingDescriptor>;
        getLabel(): string;
        getDescription(): string;
        getName(): string;
        isEnabled(): boolean;
        getFields(): $List<$ValueDescriptor>;
        getField(arg0: string): $ValueDescriptor;
        getAnnotation<A extends $Annotation>(arg0: $Class<A>): A;
        getId(): number;
        get annotationElements(): $List<$AnnotationElement>;
        get categoryNames(): $List<string>;
        get settingDescriptors(): $List<$SettingDescriptor>;
        get label(): string;
        get description(): string;
        get name(): string;
        get enabled(): boolean;
        get fields(): $List<$ValueDescriptor>;
        get id(): number;
    }
    export class $SettingDescriptor {
        getAnnotationElements(): $List<$AnnotationElement>;
        getTypeId(): number;
        getLabel(): string;
        getDescription(): string;
        getName(): string;
        getTypeName(): string;
        getAnnotation<A extends $Annotation>(arg0: $Class<A>): A;
        getDefaultValue(): string;
        getContentType(): string;
        get annotationElements(): $List<$AnnotationElement>;
        get typeId(): number;
        get label(): string;
        get description(): string;
        get name(): string;
        get typeName(): string;
        get defaultValue(): string;
        get contentType(): string;
    }
}
