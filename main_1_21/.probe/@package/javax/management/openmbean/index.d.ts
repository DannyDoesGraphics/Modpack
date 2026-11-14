import { $Serializable } from "@package/java/io";
import { $Collection, $Set, $List } from "@package/java/util";
import { $Object } from "@package/java/lang";

declare module "@package/javax/management/openmbean" {
    export class $OpenType<T> implements $Serializable {
        isValue(arg0: $Object): boolean;
        getDescription(): string;
        isArray(): boolean;
        getTypeName(): string;
        getClassName(): string;
        static ALLOWED_CLASSNAMES_LIST: $List<string>;
        /**
         * @deprecated
         */
        static ALLOWED_CLASSNAMES: string[];
        get description(): string;
        get array(): boolean;
        get typeName(): string;
        get className(): string;
    }
    export class $CompositeType extends $OpenType<$CompositeData> {
        getDescription(arg0: string): string;
        containsKey(arg0: string): boolean;
        keySet(): $Set<string>;
        getType(arg0: string): $OpenType<never>;
        static ALLOWED_CLASSNAMES_LIST: $List<string>;
        /**
         * @deprecated
         */
        static ALLOWED_CLASSNAMES: string[];
        constructor(arg0: string, arg1: string, arg2: string[], arg3: string[], arg4: $OpenType<never>[]);
    }
    export class $CompositeData {
    }
    export interface $CompositeData {
        getCompositeType(): $CompositeType;
        get(arg0: string): $Object;
        equals(arg0: $Object): boolean;
        toString(): string;
        values(): $Collection<never>;
        hashCode(): number;
        containsKey(arg0: string): boolean;
        containsValue(arg0: $Object): boolean;
        getAll(arg0: string[]): $Object[];
        get compositeType(): $CompositeType;
    }
}
