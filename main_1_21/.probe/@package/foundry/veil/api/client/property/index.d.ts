import { $Supplier, $Function_ } from "@package/java/util/function";
import { $MapCodec, $Codec_ } from "@package/com/mojang/serialization";
import { $ShaderInstance } from "@package/net/minecraft/client/renderer";
import { $PropertyModifier$PropertyModifierMode_ } from "@package/foundry/veil/api/flare/modifier";
import { $MolangExpression_, $MolangEnvironment } from "@package/gg/moonflower/molangcompiler/api";
import { $PropertyRegistry$PropertyType, $PropertyRegistry$PropertyType_ } from "@package/foundry/veil/api/client/registry";
import { $List_ } from "@package/java/util";

declare module "@package/foundry/veil/api/client/property" {
    export class $Property<T> {
        resetOverrideValue(): void;
        getEnvironment(): $Supplier<$MolangEnvironment>;
        getType(): $PropertyRegistry$PropertyType<T, $Property<T>>;
        modify(arg0: T, arg1: $PropertyModifier$PropertyModifierMode_, arg2: ($List_<$MolangExpression_>) | undefined): void;
        static codec<T, M extends $Property<T>>(arg0: $PropertyRegistry$PropertyType_<T, M>): $MapCodec<M>;
        static createCodec<T, M extends $Property<T>>(arg0: $Function_<T, M>, arg1: $Codec_<T>): $MapCodec<M>;
        applyValue(arg0: string, arg1: $ShaderInstance): void;
        constructor(arg0: $PropertyRegistry$PropertyType_<T, $Property<T>>, arg1: T);
        get environment(): $Supplier<$MolangEnvironment>;
        get type(): $PropertyRegistry$PropertyType<T, $Property<T>>;
    }
}
