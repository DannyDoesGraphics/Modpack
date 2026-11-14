import { $Dynamic, $DataResult, $DynamicOps, $Codec } from "@package/com/mojang/serialization";
import { $Pair, $Either } from "@package/com/mojang/datafixers/util";
import { $PointFreeRule_ } from "@package/com/mojang/datafixers/functions";
import { $TaggedChoice$TaggedChoiceType, $TypeTemplate } from "@package/com/mojang/datafixers/types/templates";
import { $Object } from "@package/java/lang";
import { $Typed, $TypedOptic, $RewriteResult, $TypeRewriteRule_, $TypedOptic_, $RewriteResult_, $OpticFinder } from "@package/com/mojang/datafixers";
import { $K1, $App } from "@package/com/mojang/datafixers/kinds";
import { $RecursiveTypeFamily } from "@package/com/mojang/datafixers/types/families";
export * as templates from "@package/com/mojang/datafixers/types/templates";
export * as families from "@package/com/mojang/datafixers/types/families";

declare module "@package/com/mojang/datafixers/types" {
    export class $Type<A> implements $App<$Type$Mu, A> {
        point(arg0: $DynamicOps<never>): (A) | undefined;
        equals(arg0: $Object, arg1: boolean, arg2: boolean): boolean;
        write<T>(arg0: $DynamicOps<T>, arg1: A): $DataResult<T>;
        read<T>(arg0: $Dynamic<T>): $DataResult<$Pair<A, $Dynamic<T>>>;
        read<T>(arg0: $DynamicOps<T>, arg1: $TypeRewriteRule_, arg2: $PointFreeRule_, arg3: T): $DataResult<$Pair<(never) | undefined, T>>;
        finder(): $OpticFinder<A>;
        all(arg0: $TypeRewriteRule_, arg1: boolean, arg2: boolean): $RewriteResult<A, never>;
        static unbox<A>(arg0: $App<$Type$Mu, A>): $Type<A>;
        rewrite(arg0: $TypeRewriteRule_, arg1: $PointFreeRule_): ($RewriteResult<A, never>) | undefined;
        findField(arg0: string): $OpticFinder<never>;
        template(): $TypeTemplate;
        codec(): $Codec<A>;
        ifSame<B>(arg0: $Type<B>, arg1: $RewriteResult_<B, never>): ($RewriteResult<A, never>) | undefined;
        ifSame<B>(arg0: $Type<B>, arg1: B): (A) | undefined;
        ifSame<B>(arg0: $Typed<B>): (A) | undefined;
        everywhere(arg0: $TypeRewriteRule_, arg1: $PointFreeRule_, arg2: boolean, arg3: boolean): ($RewriteResult<A, never>) | undefined;
        writeDynamic<T>(arg0: $DynamicOps<T>, arg1: A): $DataResult<$Dynamic<T>>;
        readTyped<T>(arg0: $DynamicOps<T>, arg1: T): $DataResult<$Pair<$Typed<A>, T>>;
        readTyped<T>(arg0: $Dynamic<T>): $DataResult<$Pair<$Typed<A>, T>>;
        findChoiceType(arg0: string, arg1: number): ($TaggedChoice$TaggedChoiceType<never>) | undefined;
        pointTyped(arg0: $DynamicOps<never>): ($Typed<A>) | undefined;
        findFieldType(arg0: string): $Type<never>;
        buildTemplate(): $TypeTemplate;
        findType<FT, FR>(arg0: $Type<FT>, arg1: $Type<FR>, arg2: $Type$TypeMatcher_<FT, FR>, arg3: boolean): $Either<$TypedOptic<A, never, FT, FR>, $Type$FieldNotFoundException>;
        findFieldTypeOpt(arg0: string): ($Type<never>) | undefined;
        findTypeInChildren<FT, FR>(arg0: $Type<FT>, arg1: $Type<FR>, arg2: $Type$TypeMatcher_<FT, FR>, arg3: boolean): $Either<$TypedOptic<A, never, FT, FR>, $Type$FieldNotFoundException>;
        rewriteOrNop(arg0: $TypeRewriteRule_): $RewriteResult<A, never>;
        static opticView<S, T, A, B>(arg0: $Type<S>, arg1: $RewriteResult_<A, B>, arg2: $TypedOptic_<S, T, A, B>): $RewriteResult<S, T>;
        findCheckedType(arg0: number): ($Type<never>) | undefined;
        updateMu(arg0: $RecursiveTypeFamily): $Type<never>;
        readAndWrite<T>(arg0: $DynamicOps<T>, arg1: $Type<never>, arg2: $TypeRewriteRule_, arg3: $PointFreeRule_, arg4: T): $DataResult<T>;
        getSetType<FT, FR>(arg0: $OpticFinder<FT>, arg1: $Type<FR>): $Type<never>;
        findTypeCached<FT, FR>(arg0: $Type<FT>, arg1: $Type<FR>, arg2: $Type$TypeMatcher_<FT, FR>, arg3: boolean): $Either<$TypedOptic<A, never, FT, FR>, $Type$FieldNotFoundException>;
        one(arg0: $TypeRewriteRule_): ($RewriteResult<A, never>) | undefined;
        constructor();
    }
    export class $Type$Mu implements $K1 {
        constructor();
    }
    export class $Type$FieldNotFoundException extends $Type$TypeError {
        constructor(arg0: string);
    }
    export class $Type$TypeError {
        constructor(arg0: string);
    }
    export class $Type$TypeMatcher<FT, FR> {
    }
    export interface $Type$TypeMatcher<FT, FR> {
        match<S>(arg0: $Type<S>): $Either<$TypedOptic<S, never, FT, FR>, $Type$FieldNotFoundException>;
    }
    /**
     * Values that may be interpreted as {@link $Type$TypeMatcher}.
     */
    export type $Type$TypeMatcher_<FT, FR> = ((arg0: $Type<any>) => $Either<$TypedOptic_<any, never, FT, FR>, $Type$FieldNotFoundException>);
}
