import { $Serializer, $SerializationContext, $SerializationAttribute, $Endec, $Deserializer$Struct, $Serializer$Struct, $Deserializer } from "@package/io/wispforest/endec";
import { $Supplier_, $Function_, $Consumer_ } from "@package/java/util/function";
import { $Type } from "@package/java/lang/reflect";
import { $Class } from "@package/java/lang";

declare module "@package/io/wispforest/endec/impl" {
    export class $KeyedEndec<F> {
        key(): string;
        defaultValue(): F;
        endec(): $Endec<F>;
        constructor(arg0: string, arg1: $Endec<F>, arg2: $Supplier_<F>);
        constructor(arg0: string, arg1: $Endec<F>, arg2: F);
    }
    export class $AttributeEndecBuilder<T> {
        orElse(arg0: $Endec<T>): $Endec<T>;
        orElseIf(arg0: $Endec<T>, arg1: $SerializationAttribute): $AttributeEndecBuilder<T>;
        constructor(arg0: $Endec<T>, arg1: $SerializationAttribute);
    }
    export class $ReflectiveEndecBuilder {
        get<T>(arg0: $Class<T>): $Endec<T>;
        get(arg0: $Type): $Endec<never>;
        register<T>(arg0: $Endec<T>, arg1: $Class<T>): $ReflectiveEndecBuilder;
        register<T>(arg0: $Endec<T>, ...arg1: $Class<T>[]): $ReflectiveEndecBuilder;
        maybeGet<T>(arg0: $Class<T>): ($Endec<T>) | undefined;
        static SHARED_INSTANCE: $ReflectiveEndecBuilder;
        constructor(arg0: $Consumer_<$ReflectiveEndecBuilder>);
        constructor();
    }
    export class $StructField<S, F> {
        encodeField(arg0: $SerializationContext, arg1: $Serializer<never>, arg2: $Serializer$Struct, arg3: S): void;
        decodeField(arg0: $SerializationContext, arg1: $Deserializer<never>, arg2: $Deserializer$Struct): F;
        constructor(arg0: string, arg1: $Endec<F>, arg2: $Function_<S, F>);
        constructor(arg0: string, arg1: $Endec<F>, arg2: $Function_<S, F>, arg3: F);
        constructor(arg0: string, arg1: $Endec<F>, arg2: $Function_<S, F>, arg3: $Supplier_<F>);
    }
}
