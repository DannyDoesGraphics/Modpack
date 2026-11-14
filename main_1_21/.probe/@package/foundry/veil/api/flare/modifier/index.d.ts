import { $Function_ } from "@package/java/util/function";
import { $MapCodec_, $MapCodec } from "@package/com/mojang/serialization";
import { $Pair, $Function7_, $Function6_ } from "@package/com/mojang/datafixers/util";
import { $EffectHost } from "@package/foundry/veil/api/flare";
import { $MolangExpression_, $MolangExpression } from "@package/gg/moonflower/molangcompiler/api";
import { $Iterable_, $Enum } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $PropertyModifierRegistry$PropertyModifierType, $PropertyModifierRegistry$PropertyModifierType_ } from "@package/foundry/veil/api/client/registry";
import { $Property } from "@package/foundry/veil/api/client/property";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/foundry/veil/api/flare/modifier" {
    export class $Controller {
    }
    export interface $Controller {
        getName(): string;
        update(arg0: number): void;
        getValue(): number;
        initialize(): void;
        getUpdatedValue(): number;
        get name(): string;
        get value(): number;
        get updatedValue(): number;
    }
    export class $PropertyModifier$PropertyModifierMode extends $Enum<$PropertyModifier$PropertyModifierMode> implements $StringRepresentable {
        static values(): $PropertyModifier$PropertyModifierMode[];
        static valueOf(arg0: string): $PropertyModifier$PropertyModifierMode;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static ADD: $PropertyModifier$PropertyModifierMode;
        static MOLANG: $PropertyModifier$PropertyModifierMode;
        static MULTIPLY: $PropertyModifier$PropertyModifierMode;
        static REPLACE: $PropertyModifier$PropertyModifierMode;
        static SUBTRACT: $PropertyModifier$PropertyModifierMode;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $PropertyModifier$PropertyModifierMode}.
     */
    export type $PropertyModifier$PropertyModifierMode_ = "replace" | "add" | "subtract" | "multiply" | "molang";
    export class $PropertyModifier<T> {
        getPair(): $Pair<($List<$MolangExpression>) | undefined, $PropertyModifier$PropertyModifierMode>;
        outputPropertyName(): string;
        inputControllerName(): string;
        static modifyProperty(arg0: $EffectHost, arg1: string, arg2: $Property<never>, arg3: $Iterable_<$PropertyModifier<never>>): void;
        optionalClazz(): (string) | undefined;
        molangExpressions(): ($List<$MolangExpression>) | undefined;
        clazz(): string;
        name(): string;
        mode(): $PropertyModifier$PropertyModifierMode;
        get(arg0: $Controller): T;
        type(): $PropertyModifierRegistry$PropertyModifierType<T, never>;
        apply<A>(arg0: $EffectHost, arg1: $Property<A>): void;
        static createCodec<A, T extends $PropertyModifier<A>, O>(arg0: $Function7_<string, string, string, string, $PropertyModifier$PropertyModifierMode, ($List<$MolangExpression>) | undefined, O, T>, arg1: $Function_<T, O>, arg2: $MapCodec_<O>, arg3: number): $MapCodec<T>;
        static createCodec<A, T extends $PropertyModifier<A>>(arg0: $Function6_<string, string, string, string, $PropertyModifier$PropertyModifierMode, ($List<$MolangExpression>) | undefined, T>, arg1: number): $MapCodec<T>;
        constructor(arg0: $PropertyModifierRegistry$PropertyModifierType_<T, never>, arg1: string, arg2: string, arg3: string, arg4: string, arg5: $PropertyModifier$PropertyModifierMode_, arg6: ($List_<$MolangExpression_>) | undefined);
        get pair(): $Pair<($List<$MolangExpression>) | undefined, $PropertyModifier$PropertyModifierMode>;
    }
}
