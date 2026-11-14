import { $Object, $Enum, $Class } from "@package/java/lang";

declare module "@package/java/lang/annotation" {
    export class $Annotation {
    }
    export interface $Annotation {
        equals(arg0: $Object): boolean;
        toString(): string;
        hashCode(): number;
        annotationType(): $Class<$Annotation>;
    }
    export class $ElementType extends $Enum<$ElementType> {
        static values(): $ElementType[];
        static valueOf(arg0: string): $ElementType;
        static ANNOTATION_TYPE: $ElementType;
        static MODULE: $ElementType;
        static LOCAL_VARIABLE: $ElementType;
        static FIELD: $ElementType;
        static PACKAGE: $ElementType;
        static TYPE_PARAMETER: $ElementType;
        static METHOD: $ElementType;
        static RECORD_COMPONENT: $ElementType;
        static TYPE_USE: $ElementType;
        static CONSTRUCTOR: $ElementType;
        static TYPE: $ElementType;
        static PARAMETER: $ElementType;
    }
    /**
     * Values that may be interpreted as {@link $ElementType}.
     */
    export type $ElementType_ = "type" | "field" | "method" | "parameter" | "constructor" | "local_variable" | "annotation_type" | "package" | "type_parameter" | "type_use" | "module" | "record_component";
}
