import { $IntFunction, $IntFunction_ } from "@package/java/util/function";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $PointFreeRule_ } from "@package/com/mojang/datafixers/functions";
import { $RecursivePoint$RecursivePointType, $TypeTemplate } from "@package/com/mojang/datafixers/types/templates";
import { $Type$TypeMatcher_, $Type, $Type$FieldNotFoundException } from "@package/com/mojang/datafixers/types";
import { $TypedOptic, $RewriteResult, $TypeRewriteRule_, $FamilyOptic } from "@package/com/mojang/datafixers";

declare module "@package/com/mojang/datafixers/types/families" {
    export class $Algebra {
    }
    export interface $Algebra {
        toString(arg0: number): string;
        apply(arg0: number): $RewriteResult<never, never>;
    }
    export class $RecursiveTypeFamily implements $TypeFamily {
        name(): string;
        size(): number;
        template(): $TypeTemplate;
        everywhere(arg0: number, arg1: $TypeRewriteRule_, arg2: $PointFreeRule_): ($RewriteResult<never, never>) | undefined;
        findType<A, B>(arg0: number, arg1: $Type<A>, arg2: $Type<B>, arg3: $Type$TypeMatcher_<A, B>, arg4: boolean): $Either<$TypedOptic<never, never, A, B>, $Type$FieldNotFoundException>;
        fold(arg0: $Algebra, arg1: $RecursiveTypeFamily): $IntFunction<$RewriteResult<never, never>>;
        buildMuType<A>(arg0: $Type<A>, arg1: $RecursiveTypeFamily | null): $RecursivePoint$RecursivePointType<A>;
        apply(arg0: number): $Type<never>;
        constructor(arg0: string, arg1: $TypeTemplate);
    }
    export class $TypeFamily {
        static familyOptic<A, B>(arg0: $IntFunction_<$TypedOptic<never, never, A, B>>): $FamilyOptic<A, B>;
    }
    export interface $TypeFamily {
        apply(arg0: number): $Type<never>;
    }
    /**
     * Values that may be interpreted as {@link $TypeFamily}.
     */
    export type $TypeFamily_ = ((arg0: number) => $Type<never>);
}
