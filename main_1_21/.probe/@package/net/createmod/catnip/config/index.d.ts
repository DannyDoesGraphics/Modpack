import { $Enum } from "@package/java/lang";
import { $ModConfigSpec$BooleanValue, $ModConfigSpec$Builder, $ModConfigSpec$IntValue, $ModConfigSpec$DoubleValue, $ModConfigSpec, $ModConfigSpec$EnumValue, $ModConfigSpec$ConfigValue } from "@package/net/neoforged/neoforge/common";

declare module "@package/net/createmod/catnip/config" {
    export class $ConfigBase$ConfigInt extends $ConfigBase$CValue<number, $ModConfigSpec$IntValue> {
        constructor(arg0: $ConfigBase, arg1: string, arg2: number, arg3: number, arg4: number, ...arg5: string[]);
    }
    export class $ConfigBase$ConfigGroup extends $ConfigBase$CValue<boolean, $ModConfigSpec$BooleanValue> {
        constructor(arg0: $ConfigBase, arg1: string, arg2: number, ...arg3: string[]);
    }
    export class $ConfigBase {
        registerAll(arg0: $ModConfigSpec$Builder): void;
        getName(): string;
        onLoad(): void;
        onReload(): void;
        specification: $ModConfigSpec;
        constructor();
        get name(): string;
    }
    export class $ConfigBase$ConfigEnum<T extends $Enum<T>> extends $ConfigBase$CValue<T, $ModConfigSpec$EnumValue<T>> {
    }
    export class $ConfigBase$ConfigFloat extends $ConfigBase$CValue<number, $ModConfigSpec$DoubleValue> {
        getF(): number;
        constructor(arg0: $ConfigBase, arg1: string, arg2: number, arg3: number, arg4: number, ...arg5: string[]);
        get f(): number;
    }
    export class $ConfigBase$CValue<V, T extends $ModConfigSpec$ConfigValue<V>> {
        addComments(arg0: $ModConfigSpec$Builder, ...arg1: string[]): void;
        getName(): string;
        get(): V;
        register(arg0: $ModConfigSpec$Builder): void;
        set(arg0: V): void;
        get name(): string;
    }
    export class $ConfigBase$ConfigBool extends $ConfigBase$CValue<boolean, $ModConfigSpec$BooleanValue> {
        constructor(arg0: $ConfigBase, arg1: string, arg2: boolean, ...arg3: string[]);
    }
}
