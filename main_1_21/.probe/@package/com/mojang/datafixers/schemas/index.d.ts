import { $Supplier, $Supplier_, $Function_ } from "@package/java/util/function";
import { $TaggedChoice$TaggedChoiceType, $TypeTemplate } from "@package/com/mojang/datafixers/types/templates";
import { $Map_, $Map, $Set } from "@package/java/util";
import { $Type } from "@package/com/mojang/datafixers/types";
import { $DSL$TypeReference_ } from "@package/com/mojang/datafixers";

declare module "@package/com/mojang/datafixers/schemas" {
    export class $Schema {
        register(arg0: $Map_<string, $Supplier_<$TypeTemplate>>, arg1: string, arg2: $Supplier_<$TypeTemplate>): void;
        register(arg0: $Map_<string, $Supplier_<$TypeTemplate>>, arg1: string, arg2: $Function_<string, $TypeTemplate>): void;
        id(arg0: string): $TypeTemplate;
        getParent(): $Schema;
        getType(arg0: $DSL$TypeReference_): $Type<never>;
        types(): $Set<string>;
        getChoiceType(arg0: $DSL$TypeReference_, arg1: string): $Type<never>;
        getTypeRaw(arg0: $DSL$TypeReference_): $Type<never>;
        getVersionKey(): number;
        findChoiceType(arg0: $DSL$TypeReference_): $TaggedChoice$TaggedChoiceType<never>;
        registerBlockEntities(arg0: $Schema): $Map<string, $Supplier<$TypeTemplate>>;
        registerTypes(arg0: $Schema, arg1: $Map_<string, $Supplier_<$TypeTemplate>>, arg2: $Map_<string, $Supplier_<$TypeTemplate>>): void;
        resolveTemplate(arg0: string): $TypeTemplate;
        registerSimple(arg0: $Map_<string, $Supplier_<$TypeTemplate>>, arg1: string): void;
        registerEntities(arg0: $Schema): $Map<string, $Supplier<$TypeTemplate>>;
        registerType(arg0: boolean, arg1: $DSL$TypeReference_, arg2: $Supplier_<$TypeTemplate>): void;
        constructor(arg0: number, arg1: $Schema);
        get parent(): $Schema;
        get versionKey(): number;
    }
}
