import { $Serializable } from "@package/java/io";
import { $Object, $Class } from "@package/java/lang";

declare module "@package/javax/print/attribute" {
    export class $PrintServiceAttribute {
    }
    export interface $PrintServiceAttribute extends $Attribute {
    }
    export class $AttributeSet {
    }
    export interface $AttributeSet {
        remove(arg0: $Class<never>): boolean;
        remove(arg0: $Attribute): boolean;
        size(): number;
        get(arg0: $Class<never>): $Attribute;
        equals(arg0: $Object): boolean;
        hashCode(): number;
        clear(): void;
        isEmpty(): boolean;
        add(arg0: $Attribute): boolean;
        toArray(): $Attribute[];
        addAll(arg0: $AttributeSet): boolean;
        containsKey(arg0: $Class<never>): boolean;
        containsValue(arg0: $Attribute): boolean;
        get empty(): boolean;
    }
    export class $PrintRequestAttributeSet {
    }
    export interface $PrintRequestAttributeSet extends $AttributeSet {
        add(arg0: $Attribute): boolean;
        addAll(arg0: $AttributeSet): boolean;
    }
    export class $PrintJobAttributeSet {
    }
    export interface $PrintJobAttributeSet extends $AttributeSet {
        add(arg0: $Attribute): boolean;
        addAll(arg0: $AttributeSet): boolean;
    }
    export class $PrintServiceAttributeSet {
    }
    export interface $PrintServiceAttributeSet extends $AttributeSet {
        add(arg0: $Attribute): boolean;
        addAll(arg0: $AttributeSet): boolean;
    }
    export class $Attribute {
    }
    export interface $Attribute extends $Serializable {
        getName(): string;
        getCategory(): $Class<$Attribute>;
        get name(): string;
        get category(): $Class<$Attribute>;
    }
}
