import { $Supplier_, $Function_, $Consumer_, $BiFunction_, $Function } from "@package/java/util/function";
import { $DataResult, $DynamicOps, $Dynamic } from "@package/com/mojang/serialization";
import { $Function4_, $Function13_, $Pair, $Function8_, $Function3_, $Function14_, $Function10_, $Function7_, $Function15_, $Function6_, $Function11_, $Function5_, $Function16_, $Either, $Function9_, $Function12_ } from "@package/com/mojang/datafixers/util";
import { $PointFreeRule_, $PointFree } from "@package/com/mojang/datafixers/functions";
import { $TypeToken } from "@package/com/google/common/reflect";
import { $TaggedChoice$TaggedChoiceType, $TypeTemplate } from "@package/com/mojang/datafixers/types/templates";
import { $Schema } from "@package/com/mojang/datafixers/schemas";
import { $Record } from "@package/java/lang";
import { $List, $Set_, $Collection_, $List_, $Set, $BitSet } from "@package/java/util";
import { $Optic, $Optic_ } from "@package/com/mojang/datafixers/optics";
import { $Type, $Type$FieldNotFoundException } from "@package/com/mojang/datafixers/types";
import { $App2, $K1, $Applicative, $App, $K2 } from "@package/com/mojang/datafixers/kinds";
export * as types from "@package/com/mojang/datafixers/types";
export * as kinds from "@package/com/mojang/datafixers/kinds";
export * as util from "@package/com/mojang/datafixers/util";
export * as optics from "@package/com/mojang/datafixers/optics";
export * as functions from "@package/com/mojang/datafixers/functions";
export * as schemas from "@package/com/mojang/datafixers/schemas";

declare module "@package/com/mojang/datafixers" {
    export class $FamilyOptic<A, B> {
    }
    export interface $FamilyOptic<A, B> {
        apply(arg0: number): $TypedOptic<never, never, A, B>;
    }
    /**
     * Values that may be interpreted as {@link $FamilyOptic}.
     */
    export type $FamilyOptic_<A, B> = ((arg0: number) => $TypedOptic_<never, never, A, B>);
    export class $DataFix {
        static checked<A, B>(arg0: string, arg1: $Type<A>, arg2: $Type<B>, arg3: $Function_<$Typed<never>, $Typed<never>>, arg4: $BitSet): $RewriteResult<A, B>;
        getRule(): $TypeRewriteRule;
        getVersionKey(): number;
        constructor(arg0: $Schema, arg1: boolean);
        get rule(): $TypeRewriteRule;
        get versionKey(): number;
    }
    export class $TypeRewriteRule {
        static orElse(arg0: $TypeRewriteRule_, arg1: $TypeRewriteRule_): $TypeRewriteRule;
        static orElse(arg0: $TypeRewriteRule_, arg1: $Supplier_<$TypeRewriteRule>): $TypeRewriteRule;
        static seq(arg0: $TypeRewriteRule_, ...arg1: $TypeRewriteRule_[]): $TypeRewriteRule;
        static seq(arg0: $TypeRewriteRule_, arg1: $TypeRewriteRule_): $TypeRewriteRule;
        static seq(arg0: $List_<$TypeRewriteRule_>): $TypeRewriteRule;
        static all(arg0: $TypeRewriteRule_, arg1: boolean, arg2: boolean): $TypeRewriteRule;
        static nop(): $TypeRewriteRule;
        static ifSame<B>(arg0: $Type<B>, arg1: $RewriteResult_<B, never>): $TypeRewriteRule;
        static everywhere(arg0: $TypeRewriteRule_, arg1: $PointFreeRule_, arg2: boolean, arg3: boolean): $TypeRewriteRule;
        static checkOnce(arg0: $TypeRewriteRule_, arg1: $Consumer_<$Type<never>>): $TypeRewriteRule;
        static once(arg0: $TypeRewriteRule_): $TypeRewriteRule;
        static one(arg0: $TypeRewriteRule_): $TypeRewriteRule;
    }
    export interface $TypeRewriteRule {
        rewrite<A>(arg0: $Type<A>): ($RewriteResult<A, never>) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $TypeRewriteRule}.
     */
    export type $TypeRewriteRule_ = ((arg0: $Type<any>) => ($RewriteResult_<A, never>) | undefined);
    export class $DataFixer {
    }
    export interface $DataFixer {
        getSchema(arg0: number): $Schema;
        update<T>(arg0: $DSL$TypeReference_, arg1: $Dynamic<T>, arg2: number, arg3: number): $Dynamic<T>;
    }
    export class $RewriteResult<A, B> extends $Record {
        static create<A, B>(arg0: $View_<A, B>, arg1: $BitSet): $RewriteResult<A, B>;
        compose<C>(arg0: $RewriteResult_<C, A>): $RewriteResult<C, B>;
        view(): $View<A, B>;
        static nop<A>(arg0: $Type<A>): $RewriteResult<A, A>;
        recData(): $BitSet;
        constructor(view: $View_<A, B>, recData: $BitSet);
    }
    /**
     * Values that may be interpreted as {@link $RewriteResult}.
     */
    export type $RewriteResult_<A, B> = { recData?: $BitSet, view?: $View_<any, any>,  } | [recData?: $BitSet, view?: $View_<any, any>, ];
    export class $OpticFinder<FT> {
    }
    export interface $OpticFinder<FT> {
        type(): $Type<FT>;
        findType<A>(arg0: $Type<A>, arg1: boolean): $Either<$TypedOptic<A, never, FT, FT>, $Type$FieldNotFoundException>;
        findType<A, FR>(arg0: $Type<A>, arg1: $Type<FR>, arg2: boolean): $Either<$TypedOptic<A, never, FT, FR>, $Type$FieldNotFoundException>;
        inField<GT>(arg0: string | null, arg1: $Type<GT>): $OpticFinder<FT>;
    }
    export class $Products$P1<F extends $K1, T1> {
        apply<R>(arg0: $Applicative<F, never>, arg1: $Function_<T1, R>): $App<F, R>;
        apply<R>(arg0: $Applicative<F, never>, arg1: $App<F, $Function_<T1, R>>): $App<F, R>;
        t1(): $App<F, T1>;
        and<T2, T3, T4, T5, T6, T7>(arg0: $Products$P6<F, T2, T3, T4, T5, T6, T7>): $Products$P7<F, T1, T2, T3, T4, T5, T6, T7>;
        and<T2, T3, T4, T5, T6, T7, T8>(arg0: $Products$P7<F, T2, T3, T4, T5, T6, T7, T8>): $Products$P8<F, T1, T2, T3, T4, T5, T6, T7, T8>;
        and<T2, T3, T4, T5>(arg0: $Products$P4<F, T2, T3, T4, T5>): $Products$P5<F, T1, T2, T3, T4, T5>;
        and<T2, T3>(arg0: $Products$P2<F, T2, T3>): $Products$P3<F, T1, T2, T3>;
        and<T2, T3, T4>(arg0: $Products$P3<F, T2, T3, T4>): $Products$P4<F, T1, T2, T3, T4>;
        and<T2>(arg0: $App<F, T2>): $Products$P2<F, T1, T2>;
        and<T2, T3, T4, T5, T6>(arg0: $Products$P5<F, T2, T3, T4, T5, T6>): $Products$P6<F, T1, T2, T3, T4, T5, T6>;
        constructor(arg0: $App<F, T1>);
    }
    export class $Products$P5<F extends $K1, T1, T2, T3, T4, T5> {
        apply<R>(arg0: $Applicative<F, never>, arg1: $Function5_<T1, T2, T3, T4, T5, R>): $App<F, R>;
        apply<R>(arg0: $Applicative<F, never>, arg1: $App<F, $Function5_<T1, T2, T3, T4, T5, R>>): $App<F, R>;
        t1(): $App<F, T1>;
        t2(): $App<F, T2>;
        and<T6>(arg0: $App<F, T6>): $Products$P6<F, T1, T2, T3, T4, T5, T6>;
        and<T6, T7, T8>(arg0: $Products$P3<F, T6, T7, T8>): $Products$P8<F, T1, T2, T3, T4, T5, T6, T7, T8>;
        and<T6, T7>(arg0: $Products$P2<F, T6, T7>): $Products$P7<F, T1, T2, T3, T4, T5, T6, T7>;
        t3(): $App<F, T3>;
        t4(): $App<F, T4>;
        t5(): $App<F, T5>;
        constructor(arg0: $App<F, T1>, arg1: $App<F, T2>, arg2: $App<F, T3>, arg3: $App<F, T4>, arg4: $App<F, T5>);
    }
    export class $Products$P4<F extends $K1, T1, T2, T3, T4> {
        apply<R>(arg0: $Applicative<F, never>, arg1: $Function4_<T1, T2, T3, T4, R>): $App<F, R>;
        apply<R>(arg0: $Applicative<F, never>, arg1: $App<F, $Function4_<T1, T2, T3, T4, R>>): $App<F, R>;
        t1(): $App<F, T1>;
        t2(): $App<F, T2>;
        and<T5, T6, T7, T8>(arg0: $Products$P4<F, T5, T6, T7, T8>): $Products$P8<F, T1, T2, T3, T4, T5, T6, T7, T8>;
        and<T5>(arg0: $App<F, T5>): $Products$P5<F, T1, T2, T3, T4, T5>;
        and<T5, T6, T7>(arg0: $Products$P3<F, T5, T6, T7>): $Products$P7<F, T1, T2, T3, T4, T5, T6, T7>;
        and<T5, T6>(arg0: $Products$P2<F, T5, T6>): $Products$P6<F, T1, T2, T3, T4, T5, T6>;
        t3(): $App<F, T3>;
        t4(): $App<F, T4>;
        constructor(arg0: $App<F, T1>, arg1: $App<F, T2>, arg2: $App<F, T3>, arg3: $App<F, T4>);
    }
    export class $Products$P3<F extends $K1, T1, T2, T3> {
        apply<R>(arg0: $Applicative<F, never>, arg1: $Function3_<T1, T2, T3, R>): $App<F, R>;
        apply<R>(arg0: $Applicative<F, never>, arg1: $App<F, $Function3_<T1, T2, T3, R>>): $App<F, R>;
        t1(): $App<F, T1>;
        t2(): $App<F, T2>;
        and<T4, T5, T6, T7, T8>(arg0: $Products$P5<F, T4, T5, T6, T7, T8>): $Products$P8<F, T1, T2, T3, T4, T5, T6, T7, T8>;
        and<T4, T5>(arg0: $Products$P2<F, T4, T5>): $Products$P5<F, T1, T2, T3, T4, T5>;
        and<T4, T5, T6, T7>(arg0: $Products$P4<F, T4, T5, T6, T7>): $Products$P7<F, T1, T2, T3, T4, T5, T6, T7>;
        and<T4>(arg0: $App<F, T4>): $Products$P4<F, T1, T2, T3, T4>;
        and<T4, T5, T6>(arg0: $Products$P3<F, T4, T5, T6>): $Products$P6<F, T1, T2, T3, T4, T5, T6>;
        t3(): $App<F, T3>;
        constructor(arg0: $App<F, T1>, arg1: $App<F, T2>, arg2: $App<F, T3>);
    }
    export class $Products$P2<F extends $K1, T1, T2> {
        apply<R>(arg0: $Applicative<F, never>, arg1: $BiFunction_<T1, T2, R>): $App<F, R>;
        apply<R>(arg0: $Applicative<F, never>, arg1: $App<F, $BiFunction_<T1, T2, R>>): $App<F, R>;
        t1(): $App<F, T1>;
        t2(): $App<F, T2>;
        and<T3, T4, T5, T6, T7, T8>(arg0: $Products$P6<F, T3, T4, T5, T6, T7, T8>): $Products$P8<F, T1, T2, T3, T4, T5, T6, T7, T8>;
        and<T3, T4, T5, T6, T7>(arg0: $Products$P5<F, T3, T4, T5, T6, T7>): $Products$P7<F, T1, T2, T3, T4, T5, T6, T7>;
        and<T3, T4, T5>(arg0: $Products$P3<F, T3, T4, T5>): $Products$P5<F, T1, T2, T3, T4, T5>;
        and<T3, T4, T5, T6>(arg0: $Products$P4<F, T3, T4, T5, T6>): $Products$P6<F, T1, T2, T3, T4, T5, T6>;
        and<T3, T4>(arg0: $Products$P2<F, T3, T4>): $Products$P4<F, T1, T2, T3, T4>;
        and<T3>(arg0: $App<F, T3>): $Products$P3<F, T1, T2, T3>;
        constructor(arg0: $App<F, T1>, arg1: $App<F, T2>);
    }
    export class $Products$P9<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9> {
        apply<R>(arg0: $Applicative<F, never>, arg1: $Function9_<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>): $App<F, R>;
        apply<R>(arg0: $Applicative<F, never>, arg1: $App<F, $Function9_<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>>): $App<F, R>;
        constructor(arg0: $App<F, T1>, arg1: $App<F, T2>, arg2: $App<F, T3>, arg3: $App<F, T4>, arg4: $App<F, T5>, arg5: $App<F, T6>, arg6: $App<F, T7>, arg7: $App<F, T8>, arg8: $App<F, T9>);
    }
    export class $Products$P8<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8> {
        apply<R>(arg0: $Applicative<F, never>, arg1: $Function8_<T1, T2, T3, T4, T5, T6, T7, T8, R>): $App<F, R>;
        apply<R>(arg0: $Applicative<F, never>, arg1: $App<F, $Function8_<T1, T2, T3, T4, T5, T6, T7, T8, R>>): $App<F, R>;
        t1(): $App<F, T1>;
        t2(): $App<F, T2>;
        t3(): $App<F, T3>;
        t4(): $App<F, T4>;
        t5(): $App<F, T5>;
        t6(): $App<F, T6>;
        t7(): $App<F, T7>;
        t8(): $App<F, T8>;
        constructor(arg0: $App<F, T1>, arg1: $App<F, T2>, arg2: $App<F, T3>, arg3: $App<F, T4>, arg4: $App<F, T5>, arg5: $App<F, T6>, arg6: $App<F, T7>, arg7: $App<F, T8>);
    }
    export class $Products$P7<F extends $K1, T1, T2, T3, T4, T5, T6, T7> {
        apply<R>(arg0: $Applicative<F, never>, arg1: $Function7_<T1, T2, T3, T4, T5, T6, T7, R>): $App<F, R>;
        apply<R>(arg0: $Applicative<F, never>, arg1: $App<F, $Function7_<T1, T2, T3, T4, T5, T6, T7, R>>): $App<F, R>;
        t1(): $App<F, T1>;
        t2(): $App<F, T2>;
        and<T8>(arg0: $App<F, T8>): $Products$P8<F, T1, T2, T3, T4, T5, T6, T7, T8>;
        t3(): $App<F, T3>;
        t4(): $App<F, T4>;
        t5(): $App<F, T5>;
        t6(): $App<F, T6>;
        t7(): $App<F, T7>;
        constructor(arg0: $App<F, T1>, arg1: $App<F, T2>, arg2: $App<F, T3>, arg3: $App<F, T4>, arg4: $App<F, T5>, arg5: $App<F, T6>, arg6: $App<F, T7>);
    }
    export class $Products$P6<F extends $K1, T1, T2, T3, T4, T5, T6> {
        apply<R>(arg0: $Applicative<F, never>, arg1: $Function6_<T1, T2, T3, T4, T5, T6, R>): $App<F, R>;
        apply<R>(arg0: $Applicative<F, never>, arg1: $App<F, $Function6_<T1, T2, T3, T4, T5, T6, R>>): $App<F, R>;
        t1(): $App<F, T1>;
        t2(): $App<F, T2>;
        and<T7, T8>(arg0: $Products$P2<F, T7, T8>): $Products$P8<F, T1, T2, T3, T4, T5, T6, T7, T8>;
        and<T7>(arg0: $App<F, T7>): $Products$P7<F, T1, T2, T3, T4, T5, T6, T7>;
        t3(): $App<F, T3>;
        t4(): $App<F, T4>;
        t5(): $App<F, T5>;
        t6(): $App<F, T6>;
        constructor(arg0: $App<F, T1>, arg1: $App<F, T2>, arg2: $App<F, T3>, arg3: $App<F, T4>, arg4: $App<F, T5>, arg5: $App<F, T6>);
    }
    export class $Typed<A> {
        updateRecursiveTyped<FT, FR>(arg0: $OpticFinder<FT>, arg1: $Type<FR>, arg2: $Function_<$Typed<never>, $Typed<never>>): $Typed<never>;
        updateRecursiveTyped<FT>(arg0: $OpticFinder<FT>, arg1: $Function_<$Typed<never>, $Typed<never>>): $Typed<never>;
        updateRecursive<FT, FR>(arg0: $OpticFinder<FT>, arg1: $Type<FR>, arg2: $Function_<FT, FR>): $Typed<never>;
        updateRecursive<FT>(arg0: $OpticFinder<FT>, arg1: $Function_<FT, FT>): $Typed<never>;
        get<FT>(arg0: $OpticFinder<FT>): FT;
        update<FT, FR>(arg0: $OpticFinder<FT>, arg1: $Type<FR>, arg2: $Function_<FT, FR>): $Typed<never>;
        update<FT>(arg0: $OpticFinder<FT>, arg1: $Function_<FT, FT>): $Typed<never>;
        getValue(): A;
        out(): $Typed<A>;
        set<FT>(arg0: $OpticFinder<FT>, arg1: FT): $Typed<never>;
        set<FT, FR>(arg0: $OpticFinder<FT>, arg1: $Type<FR>, arg2: FR): $Typed<never>;
        set<FT, FR>(arg0: $OpticFinder<FT>, arg1: $Typed<FR>): $Typed<never>;
        write(): $DataResult<$Dynamic<never>>;
        getOrDefault<FT>(arg0: $OpticFinder<FT>, arg1: FT): FT;
        getType(): $Type<A>;
        static pair<A, B>(arg0: $Typed<A>, arg1: $Typed<B>): $Typed<$Pair<A, B>>;
        getAll<FT>(arg0: $TypedOptic_<A, never, FT, never>): $List<FT>;
        getOptional<FT>(arg0: $OpticFinder<FT>): (FT) | undefined;
        getOps(): $DynamicOps<never>;
        updateTyped<FT>(arg0: $OpticFinder<FT>, arg1: $Function_<$Typed<never>, $Typed<never>>): $Typed<never>;
        updateTyped<FT, FR>(arg0: $OpticFinder<FT>, arg1: $Type<FR>, arg2: $Function_<$Typed<never>, $Typed<never>>): $Typed<never>;
        getOptionalTyped<FT>(arg0: $OpticFinder<FT>): ($Typed<FT>) | undefined;
        getOrCreateTyped<FT>(arg0: $OpticFinder<FT>): $Typed<FT>;
        getTyped<FT>(arg0: $OpticFinder<FT>): $Typed<FT>;
        getAllTyped<FT>(arg0: $OpticFinder<FT>): $List<$Typed<FT>>;
        inj1<B>(arg0: $Type<B>): $Typed<$Either<A, B>>;
        inj2<B>(arg0: $Type<B>): $Typed<$Either<B, A>>;
        getOrCreate<FT>(arg0: $OpticFinder<FT>): FT;
        constructor(arg0: $Type<A>, arg1: $DynamicOps<never>, arg2: A);
        get value(): A;
        get type(): $Type<A>;
        get ops(): $DynamicOps<never>;
    }
    export class $Products$P10<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10> {
        apply<R>(arg0: $Applicative<F, never>, arg1: $Function10_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>): $App<F, R>;
        apply<R>(arg0: $Applicative<F, never>, arg1: $App<F, $Function10_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>>): $App<F, R>;
        constructor(arg0: $App<F, T1>, arg1: $App<F, T2>, arg2: $App<F, T3>, arg3: $App<F, T4>, arg4: $App<F, T5>, arg5: $App<F, T6>, arg6: $App<F, T7>, arg7: $App<F, T8>, arg8: $App<F, T9>, arg9: $App<F, T10>);
    }
    export class $Products$P11<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11> {
        apply<R>(arg0: $Applicative<F, never>, arg1: $Function11_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>): $App<F, R>;
        apply<R>(arg0: $Applicative<F, never>, arg1: $App<F, $Function11_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>>): $App<F, R>;
        constructor(arg0: $App<F, T1>, arg1: $App<F, T2>, arg2: $App<F, T3>, arg3: $App<F, T4>, arg4: $App<F, T5>, arg5: $App<F, T6>, arg6: $App<F, T7>, arg7: $App<F, T8>, arg8: $App<F, T9>, arg9: $App<F, T10>, arg10: $App<F, T11>);
    }
    export class $Products$P12<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12> {
        apply<R>(arg0: $Applicative<F, never>, arg1: $Function12_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>): $App<F, R>;
        apply<R>(arg0: $Applicative<F, never>, arg1: $App<F, $Function12_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>>): $App<F, R>;
        constructor(arg0: $App<F, T1>, arg1: $App<F, T2>, arg2: $App<F, T3>, arg3: $App<F, T4>, arg4: $App<F, T5>, arg5: $App<F, T6>, arg6: $App<F, T7>, arg7: $App<F, T8>, arg8: $App<F, T9>, arg9: $App<F, T10>, arg10: $App<F, T11>, arg11: $App<F, T12>);
    }
    export class $Products$P13<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13> {
        apply<R>(arg0: $Applicative<F, never>, arg1: $Function13_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>): $App<F, R>;
        apply<R>(arg0: $Applicative<F, never>, arg1: $App<F, $Function13_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>>): $App<F, R>;
        constructor(arg0: $App<F, T1>, arg1: $App<F, T2>, arg2: $App<F, T3>, arg3: $App<F, T4>, arg4: $App<F, T5>, arg5: $App<F, T6>, arg6: $App<F, T7>, arg7: $App<F, T8>, arg8: $App<F, T9>, arg9: $App<F, T10>, arg10: $App<F, T11>, arg11: $App<F, T12>, arg12: $App<F, T13>);
    }
    export class $Products$P14<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14> {
        apply<R>(arg0: $Applicative<F, never>, arg1: $Function14_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>): $App<F, R>;
        apply<R>(arg0: $Applicative<F, never>, arg1: $App<F, $Function14_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>>): $App<F, R>;
        constructor(arg0: $App<F, T1>, arg1: $App<F, T2>, arg2: $App<F, T3>, arg3: $App<F, T4>, arg4: $App<F, T5>, arg5: $App<F, T6>, arg6: $App<F, T7>, arg7: $App<F, T8>, arg8: $App<F, T9>, arg9: $App<F, T10>, arg10: $App<F, T11>, arg11: $App<F, T12>, arg12: $App<F, T13>, arg13: $App<F, T14>);
    }
    export class $Products$P15<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15> {
        apply<R>(arg0: $Applicative<F, never>, arg1: $Function15_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>): $App<F, R>;
        apply<R>(arg0: $Applicative<F, never>, arg1: $App<F, $Function15_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>>): $App<F, R>;
        constructor(arg0: $App<F, T1>, arg1: $App<F, T2>, arg2: $App<F, T3>, arg3: $App<F, T4>, arg4: $App<F, T5>, arg5: $App<F, T6>, arg6: $App<F, T7>, arg7: $App<F, T8>, arg8: $App<F, T9>, arg9: $App<F, T10>, arg10: $App<F, T11>, arg11: $App<F, T12>, arg12: $App<F, T13>, arg13: $App<F, T14>, arg14: $App<F, T15>);
    }
    export class $Products$P16<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16> {
        apply<R>(arg0: $Applicative<F, never>, arg1: $Function16_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>): $App<F, R>;
        apply<R>(arg0: $Applicative<F, never>, arg1: $App<F, $Function16_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>): $App<F, R>;
        constructor(arg0: $App<F, T1>, arg1: $App<F, T2>, arg2: $App<F, T3>, arg3: $App<F, T4>, arg4: $App<F, T5>, arg5: $App<F, T6>, arg6: $App<F, T7>, arg7: $App<F, T8>, arg8: $App<F, T9>, arg9: $App<F, T10>, arg10: $App<F, T11>, arg11: $App<F, T12>, arg12: $App<F, T13>, arg13: $App<F, T14>, arg14: $App<F, T15>, arg15: $App<F, T16>);
    }
    export class $View$Mu implements $K2 {
    }
    export class $View<A, B> extends $Record implements $App2<$View$Mu, A, B> {
        funcType(): $Type<$Function<A, B>>;
        static nopView<A>(arg0: $Type<A>): $View<A, A>;
        type(): $Type<A>;
        newType(): $Type<B>;
        flatMap<C>(arg0: $Function_<$Type<B>, $View<B, C>>): $View<A, C>;
        "function"(): $PointFree<$Function<A, B>>;
        static create<A, B>(arg0: string, arg1: $Type<A>, arg2: $Type<B>, arg3: $Function_<$DynamicOps<never>, $Function<A, B>>): $View<A, B>;
        static create<A, B>(arg0: $PointFree<$Function_<A, B>>): $View<A, B>;
        compose<C>(arg0: $View_<C, A>): $View<C, B>;
        rewrite(arg0: $PointFreeRule_): ($View<A, B>) | undefined;
        isNop(): boolean;
        rewriteOrNop(arg0: $PointFreeRule_): $View<A, B>;
        constructor(arg0: $PointFree<$Function_<A, B>>);
        get nop(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $View}.
     */
    export type $View_<A, B> = { function?: $PointFree<$Function_<any, any>>,  } | [function?: $PointFree<$Function_<any, any>>, ];
    export class $DSL$TypeReference {
    }
    export interface $DSL$TypeReference {
        "in"(arg0: $Schema): $TypeTemplate;
        typeName(): string;
    }
    /**
     * Values that may be interpreted as {@link $DSL$TypeReference}.
     */
    export type $DSL$TypeReference_ = (() => string);
    export class $TypedOptic<S, T, A, B> extends $Record {
        static tagged<K, A, B>(arg0: $TaggedChoice$TaggedChoiceType<K>, arg1: K, arg2: $Type<A>, arg3: $Type<B>): $TypedOptic<$Pair<K, never>, $Pair<K, never>, A, B>;
        apply<P extends $K2, Proof2 extends $K1>(arg0: $TypeToken<Proof2>, arg1: $App<Proof2, P>, arg2: $App2<P, A, B>): $App2<P, S, T>;
        static list<A, B>(arg0: $Type<A>, arg1: $Type<B>): $TypedOptic<$List<A>, $List<B>, A, B>;
        elements(): $List<$TypedOptic$Element<never, never, never, never>>;
        bounds(): $Set<$TypeToken<$K1>>;
        innermost(): $Optic<never, never, never, A, B>;
        compose<A1, B1>(arg0: $TypedOptic_<A, B, A1, B1>): $TypedOptic<S, T, A1, B1>;
        static adapter<S, T>(arg0: $Type<S>, arg1: $Type<T>): $TypedOptic<S, T, S, T>;
        tType(): $Type<T>;
        aType(): $Type<A>;
        sType(): $Type<S>;
        static instanceOf<Proof2 extends $K1>(arg0: $Collection_<$TypeToken<$K1>>, arg1: $TypeToken<Proof2>): boolean;
        upCast<Proof2 extends $K1>(arg0: $TypeToken<Proof2>): ($Optic<Proof2, S, T, A, B>) | undefined;
        castOuter(arg0: $Type<S>, arg1: $Type<T>): $TypedOptic<S, T, A, B>;
        static proj1<F, G, F2>(arg0: $Type<F>, arg1: $Type<G>, arg2: $Type<F2>): $TypedOptic<$Pair<F, G>, $Pair<F2, G>, F, F2>;
        static proj2<F, G, G2>(arg0: $Type<F>, arg1: $Type<G>, arg2: $Type<G2>): $TypedOptic<$Pair<F, G>, $Pair<F, G2>, G, G2>;
        static inj1<F, G, F2>(arg0: $Type<F>, arg1: $Type<G>, arg2: $Type<F2>): $TypedOptic<$Either<F, G>, $Either<F2, G>, F, F2>;
        static inj2<F, G, G2>(arg0: $Type<F>, arg1: $Type<G>, arg2: $Type<G2>): $TypedOptic<$Either<F, G>, $Either<F, G2>, G, G2>;
        bType(): $Type<B>;
        castOuterUnchecked<S2, T2>(arg0: $Type<S2>, arg1: $Type<T2>): $TypedOptic<S2, T2, A, B>;
        static compoundListKeys<K, V, K2>(arg0: $Type<K>, arg1: $Type<K2>, arg2: $Type<V>): $TypedOptic<$List<$Pair<K, V>>, $List<$Pair<K2, V>>, K, K2>;
        static compoundListElements<K, V, V2>(arg0: $Type<K>, arg1: $Type<V>, arg2: $Type<V2>): $TypedOptic<$List<$Pair<K, V>>, $List<$Pair<K, V2>>, V, V2>;
        outermost(): $Optic<never, S, T, never, never>;
        constructor(arg0: $TypeToken<$K1>, arg1: $Type<S>, arg2: $Type<T>, arg3: $Type<A>, arg4: $Type<B>, arg5: $Optic_<never, S, T, A, B>);
        constructor(bounds: $Set_<$TypeToken<$K1>>, elements: $List_<$TypedOptic$Element_<never, never, never, never>>);
        constructor(arg0: $Set_<$TypeToken<$K1>>, arg1: $Type<S>, arg2: $Type<T>, arg3: $Type<A>, arg4: $Type<B>, arg5: $Optic_<never, S, T, A, B>);
    }
    /**
     * Values that may be interpreted as {@link $TypedOptic}.
     */
    export type $TypedOptic_<S, T, A, B> = { elements?: $List_<$TypedOptic$Element_<never, never, never, never>>, bounds?: $Set_<$TypeToken<$K1>>,  } | [elements?: $List_<$TypedOptic$Element_<never, never, never, never>>, bounds?: $Set_<$TypeToken<$K1>>, ];
    export class $TypedOptic$Element<S, T, A, B> extends $Record {
        tType(): $Type<T>;
        aType(): $Type<A>;
        sType(): $Type<S>;
        optic(): $Optic<never, S, T, A, B>;
        bType(): $Type<B>;
        castOuterUnchecked<S2, T2>(arg0: $Type<S2>, arg1: $Type<T2>): $TypedOptic$Element<S2, T2, A, B>;
        constructor(sType: $Type<S>, tType: $Type<T>, aType: $Type<A>, bType: $Type<B>, optic: $Optic_<never, S, T, A, B>);
    }
    /**
     * Values that may be interpreted as {@link $TypedOptic$Element}.
     */
    export type $TypedOptic$Element_<S, T, A, B> = { optic?: $Optic_<never, any, any, any, any>, bType?: $Type<any>, aType?: $Type<any>, tType?: $Type<any>, sType?: $Type<any>,  } | [optic?: $Optic_<never, any, any, any, any>, bType?: $Type<any>, aType?: $Type<any>, tType?: $Type<any>, sType?: $Type<any>, ];
}
