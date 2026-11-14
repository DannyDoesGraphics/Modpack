import { $Supplier_, $IntFunction, $IntFunction_ } from "@package/java/util/function";
import { $Object2ObjectMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $DynamicOps } from "@package/com/mojang/serialization";
import { $Pair, $Either } from "@package/com/mojang/datafixers/util";
import { $Map } from "@package/java/util";
import { $Object } from "@package/java/lang";
import { $Type, $Type$FieldNotFoundException } from "@package/com/mojang/datafixers/types";
import { $View, $RewriteResult, $FamilyOptic, $RewriteResult_, $FamilyOptic_, $Typed } from "@package/com/mojang/datafixers";
import { $RecursiveTypeFamily, $TypeFamily, $TypeFamily_ } from "@package/com/mojang/datafixers/types/families";

declare module "@package/com/mojang/datafixers/types/templates" {
    export class $RecursivePoint$RecursivePointType<A> extends $Type<A> {
        index(): number;
        out(): $View<A, A>;
        "in"(): $View<A, A>;
        family(): $RecursiveTypeFamily;
        unfold(): $Type<A>;
        constructor(arg0: $RecursiveTypeFamily, arg1: number, arg2: $Supplier_<$Type<A>>);
    }
    export class $TaggedChoice$TaggedChoiceType<K> extends $Type<$Pair<K, never>> {
        point(arg0: $DynamicOps<never>, arg1: K, arg2: $Object): ($Typed<$Pair<K, never>>) | undefined;
        getName(): string;
        types(): $Map<K, $Type<never>>;
        static elementResult<K, FT, FR>(arg0: K, arg1: $TaggedChoice$TaggedChoiceType<K>, arg2: $RewriteResult_<FT, FR>): $RewriteResult<$Pair<K, never>, $Pair<K, never>>;
        getKeyType(): $Type<K>;
        hasType(arg0: K): boolean;
        constructor(arg0: string, arg1: $Type<K>, arg2: $Object2ObjectMap<K, $Type<never>>);
        get name(): string;
        get keyType(): $Type<K>;
    }
    export class $TypeTemplate {
    }
    export interface $TypeTemplate {
        size(): number;
        apply(arg0: $TypeFamily_): $TypeFamily;
        toSimpleType(): $Type<never>;
        findFieldOrType<A, B>(arg0: number, arg1: string | null, arg2: $Type<A>, arg3: $Type<B>): $Either<$TypeTemplate, $Type$FieldNotFoundException>;
        hmap(arg0: $TypeFamily_, arg1: $IntFunction_<$RewriteResult<never, never>>): $IntFunction<$RewriteResult<never, never>>;
        applyO<A, B>(arg0: $FamilyOptic_<A, B>, arg1: $Type<A>, arg2: $Type<B>): $FamilyOptic<A, B>;
    }
}
