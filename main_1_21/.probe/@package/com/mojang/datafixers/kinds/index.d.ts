import { $Function_, $BiFunction, $BiFunction_, $Function } from "@package/java/util/function";
import { $Function4_, $Function3, $Function13_, $Function4, $Function5, $Function6, $Function8_, $Function7, $Function8, $Function9, $Function3_, $Function14_, $Function10_, $Function7_, $Function15_, $Function11_, $Function6_, $Function5_, $Function16_, $Function9_, $Function12_ } from "@package/com/mojang/datafixers/util";
import { $Products$P10, $Products$P11, $Products$P12, $Products$P13, $Products$P14, $Products$P15, $Products$P16, $Products$P1, $Products$P5, $Products$P4, $Products$P3, $Products$P2, $Products$P9, $Products$P8, $Products$P7, $Products$P6 } from "@package/com/mojang/datafixers";

declare module "@package/com/mojang/datafixers/kinds" {
    export class $Const$Mu<C> implements $K1 {
        constructor();
    }
    export class $IdF$Mu implements $K1 {
        constructor();
    }
    export class $OptionalBox$Mu implements $K1 {
        constructor();
    }
    export class $Applicative<F extends $K1, Mu extends $Applicative$Mu> {
        static unbox<F extends $K1, Mu extends $Applicative$Mu>(arg0: $App<Mu, F>): $Applicative<F, Mu>;
    }
    export interface $Applicative<F extends $K1, Mu extends $Applicative$Mu> extends $Functor<F, Mu> {
        point<A>(arg0: A): $App<F, A>;
        ap<A, R>(arg0: $Function_<A, R>, arg1: $App<F, A>): $App<F, R>;
        ap<A, R>(arg0: $App<F, $Function_<A, R>>, arg1: $App<F, A>): $App<F, R>;
        apply2<A, B, R>(arg0: $BiFunction_<A, B, R>, arg1: $App<F, A>, arg2: $App<F, B>): $App<F, R>;
        ap2<A, B, R>(arg0: $App<F, $BiFunction_<A, B, R>>, arg1: $App<F, A>, arg2: $App<F, B>): $App<F, R>;
        apply3<T1, T2, T3, R>(arg0: $Function3_<T1, T2, T3, R>, arg1: $App<F, T1>, arg2: $App<F, T2>, arg3: $App<F, T3>): $App<F, R>;
        ap8<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: $App<F, $Function8_<T1, T2, T3, T4, T5, T6, T7, T8, R>>, arg1: $App<F, T1>, arg2: $App<F, T2>, arg3: $App<F, T3>, arg4: $App<F, T4>, arg5: $App<F, T5>, arg6: $App<F, T6>, arg7: $App<F, T7>, arg8: $App<F, T8>): $App<F, R>;
        ap9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: $App<F, $Function9_<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>>, arg1: $App<F, T1>, arg2: $App<F, T2>, arg3: $App<F, T3>, arg4: $App<F, T4>, arg5: $App<F, T5>, arg6: $App<F, T6>, arg7: $App<F, T7>, arg8: $App<F, T8>, arg9: $App<F, T9>): $App<F, R>;
        lift2<A, B, R>(arg0: $App<F, $BiFunction_<A, B, R>>): $BiFunction<$App<F, A>, $App<F, B>, $App<F, R>>;
        lift3<T1, T2, T3, R>(arg0: $App<F, $Function3_<T1, T2, T3, R>>): $Function3<$App<F, T1>, $App<F, T2>, $App<F, T3>, $App<F, R>>;
        lift4<T1, T2, T3, T4, R>(arg0: $App<F, $Function4_<T1, T2, T3, T4, R>>): $Function4<$App<F, T1>, $App<F, T2>, $App<F, T3>, $App<F, T4>, $App<F, R>>;
        lift5<T1, T2, T3, T4, T5, R>(arg0: $App<F, $Function5_<T1, T2, T3, T4, T5, R>>): $Function5<$App<F, T1>, $App<F, T2>, $App<F, T3>, $App<F, T4>, $App<F, T5>, $App<F, R>>;
        ap10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>(arg0: $App<F, $Function10_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>>, arg1: $App<F, T1>, arg2: $App<F, T2>, arg3: $App<F, T3>, arg4: $App<F, T4>, arg5: $App<F, T5>, arg6: $App<F, T6>, arg7: $App<F, T7>, arg8: $App<F, T8>, arg9: $App<F, T9>, arg10: $App<F, T10>): $App<F, R>;
        ap11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>(arg0: $App<F, $Function11_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>>, arg1: $App<F, T1>, arg2: $App<F, T2>, arg3: $App<F, T3>, arg4: $App<F, T4>, arg5: $App<F, T5>, arg6: $App<F, T6>, arg7: $App<F, T7>, arg8: $App<F, T8>, arg9: $App<F, T9>, arg10: $App<F, T10>, arg11: $App<F, T11>): $App<F, R>;
        ap12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>(arg0: $App<F, $Function12_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>>, arg1: $App<F, T1>, arg2: $App<F, T2>, arg3: $App<F, T3>, arg4: $App<F, T4>, arg5: $App<F, T5>, arg6: $App<F, T6>, arg7: $App<F, T7>, arg8: $App<F, T8>, arg9: $App<F, T9>, arg10: $App<F, T10>, arg11: $App<F, T11>, arg12: $App<F, T12>): $App<F, R>;
        lift1<A, R>(arg0: $App<F, $Function_<A, R>>): $Function<$App<F, A>, $App<F, R>>;
        ap3<T1, T2, T3, R>(arg0: $App<F, $Function3_<T1, T2, T3, R>>, arg1: $App<F, T1>, arg2: $App<F, T2>, arg3: $App<F, T3>): $App<F, R>;
        ap4<T1, T2, T3, T4, R>(arg0: $App<F, $Function4_<T1, T2, T3, T4, R>>, arg1: $App<F, T1>, arg2: $App<F, T2>, arg3: $App<F, T3>, arg4: $App<F, T4>): $App<F, R>;
        ap5<T1, T2, T3, T4, T5, R>(arg0: $App<F, $Function5_<T1, T2, T3, T4, T5, R>>, arg1: $App<F, T1>, arg2: $App<F, T2>, arg3: $App<F, T3>, arg4: $App<F, T4>, arg5: $App<F, T5>): $App<F, R>;
        ap6<T1, T2, T3, T4, T5, T6, R>(arg0: $App<F, $Function6_<T1, T2, T3, T4, T5, T6, R>>, arg1: $App<F, T1>, arg2: $App<F, T2>, arg3: $App<F, T3>, arg4: $App<F, T4>, arg5: $App<F, T5>, arg6: $App<F, T6>): $App<F, R>;
        ap7<T1, T2, T3, T4, T5, T6, T7, R>(arg0: $App<F, $Function7_<T1, T2, T3, T4, T5, T6, T7, R>>, arg1: $App<F, T1>, arg2: $App<F, T2>, arg3: $App<F, T3>, arg4: $App<F, T4>, arg5: $App<F, T5>, arg6: $App<F, T6>, arg7: $App<F, T7>): $App<F, R>;
        lift6<T1, T2, T3, T4, T5, T6, R>(arg0: $App<F, $Function6_<T1, T2, T3, T4, T5, T6, R>>): $Function6<$App<F, T1>, $App<F, T2>, $App<F, T3>, $App<F, T4>, $App<F, T5>, $App<F, T6>, $App<F, R>>;
        lift7<T1, T2, T3, T4, T5, T6, T7, R>(arg0: $App<F, $Function7_<T1, T2, T3, T4, T5, T6, T7, R>>): $Function7<$App<F, T1>, $App<F, T2>, $App<F, T3>, $App<F, T4>, $App<F, T5>, $App<F, T6>, $App<F, T7>, $App<F, R>>;
        lift8<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: $App<F, $Function8_<T1, T2, T3, T4, T5, T6, T7, T8, R>>): $Function8<$App<F, T1>, $App<F, T2>, $App<F, T3>, $App<F, T4>, $App<F, T5>, $App<F, T6>, $App<F, T7>, $App<F, T8>, $App<F, R>>;
        lift9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: $App<F, $Function9_<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>>): $Function9<$App<F, T1>, $App<F, T2>, $App<F, T3>, $App<F, T4>, $App<F, T5>, $App<F, T6>, $App<F, T7>, $App<F, T8>, $App<F, T9>, $App<F, R>>;
        ap13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>(arg0: $App<F, $Function13_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>>, arg1: $App<F, T1>, arg2: $App<F, T2>, arg3: $App<F, T3>, arg4: $App<F, T4>, arg5: $App<F, T5>, arg6: $App<F, T6>, arg7: $App<F, T7>, arg8: $App<F, T8>, arg9: $App<F, T9>, arg10: $App<F, T10>, arg11: $App<F, T11>, arg12: $App<F, T12>, arg13: $App<F, T13>): $App<F, R>;
        ap14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>(arg0: $App<F, $Function14_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>>, arg1: $App<F, T1>, arg2: $App<F, T2>, arg3: $App<F, T3>, arg4: $App<F, T4>, arg5: $App<F, T5>, arg6: $App<F, T6>, arg7: $App<F, T7>, arg8: $App<F, T8>, arg9: $App<F, T9>, arg10: $App<F, T10>, arg11: $App<F, T11>, arg12: $App<F, T12>, arg13: $App<F, T13>, arg14: $App<F, T14>): $App<F, R>;
        ap15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>(arg0: $App<F, $Function15_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>>, arg1: $App<F, T1>, arg2: $App<F, T2>, arg3: $App<F, T3>, arg4: $App<F, T4>, arg5: $App<F, T5>, arg6: $App<F, T6>, arg7: $App<F, T7>, arg8: $App<F, T8>, arg9: $App<F, T9>, arg10: $App<F, T10>, arg11: $App<F, T11>, arg12: $App<F, T12>, arg13: $App<F, T13>, arg14: $App<F, T14>, arg15: $App<F, T15>): $App<F, R>;
        ap16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>(arg0: $App<F, $Function16_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>, arg1: $App<F, T1>, arg2: $App<F, T2>, arg3: $App<F, T3>, arg4: $App<F, T4>, arg5: $App<F, T5>, arg6: $App<F, T6>, arg7: $App<F, T7>, arg8: $App<F, T8>, arg9: $App<F, T9>, arg10: $App<F, T10>, arg11: $App<F, T11>, arg12: $App<F, T12>, arg13: $App<F, T13>, arg14: $App<F, T14>, arg15: $App<F, T15>, arg16: $App<F, T16>): $App<F, R>;
        apply4<T1, T2, T3, T4, R>(arg0: $Function4_<T1, T2, T3, T4, R>, arg1: $App<F, T1>, arg2: $App<F, T2>, arg3: $App<F, T3>, arg4: $App<F, T4>): $App<F, R>;
        apply5<T1, T2, T3, T4, T5, R>(arg0: $Function5_<T1, T2, T3, T4, T5, R>, arg1: $App<F, T1>, arg2: $App<F, T2>, arg3: $App<F, T3>, arg4: $App<F, T4>, arg5: $App<F, T5>): $App<F, R>;
        apply6<T1, T2, T3, T4, T5, T6, R>(arg0: $Function6_<T1, T2, T3, T4, T5, T6, R>, arg1: $App<F, T1>, arg2: $App<F, T2>, arg3: $App<F, T3>, arg4: $App<F, T4>, arg5: $App<F, T5>, arg6: $App<F, T6>): $App<F, R>;
        apply7<T1, T2, T3, T4, T5, T6, T7, R>(arg0: $Function7_<T1, T2, T3, T4, T5, T6, T7, R>, arg1: $App<F, T1>, arg2: $App<F, T2>, arg3: $App<F, T3>, arg4: $App<F, T4>, arg5: $App<F, T5>, arg6: $App<F, T6>, arg7: $App<F, T7>): $App<F, R>;
        apply8<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: $Function8_<T1, T2, T3, T4, T5, T6, T7, T8, R>, arg1: $App<F, T1>, arg2: $App<F, T2>, arg3: $App<F, T3>, arg4: $App<F, T4>, arg5: $App<F, T5>, arg6: $App<F, T6>, arg7: $App<F, T7>, arg8: $App<F, T8>): $App<F, R>;
        apply9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: $Function9_<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>, arg1: $App<F, T1>, arg2: $App<F, T2>, arg3: $App<F, T3>, arg4: $App<F, T4>, arg5: $App<F, T5>, arg6: $App<F, T6>, arg7: $App<F, T7>, arg8: $App<F, T8>, arg9: $App<F, T9>): $App<F, R>;
    }
    export class $Functor$Mu {
    }
    export interface $Functor$Mu extends $Kind1$Mu {
    }
    export class $Applicative$Mu {
    }
    export interface $Applicative$Mu extends $Functor$Mu {
    }
    export class $Functor<F extends $K1, Mu extends $Functor$Mu> {
        static unbox<F extends $K1, Mu extends $Functor$Mu>(arg0: $App<Mu, F>): $Functor<F, Mu>;
    }
    export interface $Functor<F extends $K1, Mu extends $Functor$Mu> extends $Kind1<F, Mu> {
        map<T, R>(arg0: $Function_<T, R>, arg1: $App<F, T>): $App<F, R>;
    }
    /**
     * Values that may be interpreted as {@link $Functor}.
     */
    export type $Functor_<F, Mu> = ((arg0: $Function<any, any>, arg1: $App<F, any>) => $App<F, any>);
    export class $Kind1<F extends $K1, Mu extends $Kind1$Mu> {
        static unbox<F extends $K1, Proof extends $Kind1$Mu>(arg0: $App<Proof, F>): $Kind1<F, Proof>;
    }
    export interface $Kind1<F extends $K1, Mu extends $Kind1$Mu> extends $App<Mu, F> {
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(arg0: $App<Mu, T1>, arg1: $App<Mu, T2>, arg2: $App<Mu, T3>, arg3: $App<Mu, T4>, arg4: $App<Mu, T5>, arg5: $App<Mu, T6>, arg6: $App<Mu, T7>, arg7: $App<Mu, T8>, arg8: $App<Mu, T9>, arg9: $App<Mu, T10>, arg10: $App<Mu, T11>): $Products$P11<Mu, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(arg0: $App<Mu, T1>, arg1: $App<Mu, T2>, arg2: $App<Mu, T3>, arg3: $App<Mu, T4>, arg4: $App<Mu, T5>, arg5: $App<Mu, T6>, arg6: $App<Mu, T7>, arg7: $App<Mu, T8>, arg8: $App<Mu, T9>, arg9: $App<Mu, T10>): $Products$P10<Mu, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9>(arg0: $App<Mu, T1>, arg1: $App<Mu, T2>, arg2: $App<Mu, T3>, arg3: $App<Mu, T4>, arg4: $App<Mu, T5>, arg5: $App<Mu, T6>, arg6: $App<Mu, T7>, arg7: $App<Mu, T8>, arg8: $App<Mu, T9>): $Products$P9<Mu, T1, T2, T3, T4, T5, T6, T7, T8, T9>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(arg0: $App<Mu, T1>, arg1: $App<Mu, T2>, arg2: $App<Mu, T3>, arg3: $App<Mu, T4>, arg4: $App<Mu, T5>, arg5: $App<Mu, T6>, arg6: $App<Mu, T7>, arg7: $App<Mu, T8>, arg8: $App<Mu, T9>, arg9: $App<Mu, T10>, arg10: $App<Mu, T11>, arg11: $App<Mu, T12>, arg12: $App<Mu, T13>, arg13: $App<Mu, T14>, arg14: $App<Mu, T15>, arg15: $App<Mu, T16>): $Products$P16<Mu, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(arg0: $App<Mu, T1>, arg1: $App<Mu, T2>, arg2: $App<Mu, T3>, arg3: $App<Mu, T4>, arg4: $App<Mu, T5>, arg5: $App<Mu, T6>, arg6: $App<Mu, T7>, arg7: $App<Mu, T8>, arg8: $App<Mu, T9>, arg9: $App<Mu, T10>, arg10: $App<Mu, T11>, arg11: $App<Mu, T12>, arg12: $App<Mu, T13>, arg13: $App<Mu, T14>, arg14: $App<Mu, T15>): $Products$P15<Mu, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(arg0: $App<Mu, T1>, arg1: $App<Mu, T2>, arg2: $App<Mu, T3>, arg3: $App<Mu, T4>, arg4: $App<Mu, T5>, arg5: $App<Mu, T6>, arg6: $App<Mu, T7>, arg7: $App<Mu, T8>, arg8: $App<Mu, T9>, arg9: $App<Mu, T10>, arg10: $App<Mu, T11>, arg11: $App<Mu, T12>, arg12: $App<Mu, T13>, arg13: $App<Mu, T14>): $Products$P14<Mu, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(arg0: $App<Mu, T1>, arg1: $App<Mu, T2>, arg2: $App<Mu, T3>, arg3: $App<Mu, T4>, arg4: $App<Mu, T5>, arg5: $App<Mu, T6>, arg6: $App<Mu, T7>, arg7: $App<Mu, T8>, arg8: $App<Mu, T9>, arg9: $App<Mu, T10>, arg10: $App<Mu, T11>, arg11: $App<Mu, T12>, arg12: $App<Mu, T13>): $Products$P13<Mu, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(arg0: $App<Mu, T1>, arg1: $App<Mu, T2>, arg2: $App<Mu, T3>, arg3: $App<Mu, T4>, arg4: $App<Mu, T5>, arg5: $App<Mu, T6>, arg6: $App<Mu, T7>, arg7: $App<Mu, T8>, arg8: $App<Mu, T9>, arg9: $App<Mu, T10>, arg10: $App<Mu, T11>, arg11: $App<Mu, T12>): $Products$P12<Mu, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>;
        group<T1, T2, T3>(arg0: $App<Mu, T1>, arg1: $App<Mu, T2>, arg2: $App<Mu, T3>): $Products$P3<Mu, T1, T2, T3>;
        group<T1, T2>(arg0: $App<Mu, T1>, arg1: $App<Mu, T2>): $Products$P2<Mu, T1, T2>;
        group<T1>(arg0: $App<Mu, T1>): $Products$P1<Mu, T1>;
        group<T1, T2, T3, T4, T5, T6, T7, T8>(arg0: $App<Mu, T1>, arg1: $App<Mu, T2>, arg2: $App<Mu, T3>, arg3: $App<Mu, T4>, arg4: $App<Mu, T5>, arg5: $App<Mu, T6>, arg6: $App<Mu, T7>, arg7: $App<Mu, T8>): $Products$P8<Mu, T1, T2, T3, T4, T5, T6, T7, T8>;
        group<T1, T2, T3, T4, T5, T6, T7>(arg0: $App<Mu, T1>, arg1: $App<Mu, T2>, arg2: $App<Mu, T3>, arg3: $App<Mu, T4>, arg4: $App<Mu, T5>, arg5: $App<Mu, T6>, arg6: $App<Mu, T7>): $Products$P7<Mu, T1, T2, T3, T4, T5, T6, T7>;
        group<T1, T2, T3, T4, T5, T6>(arg0: $App<Mu, T1>, arg1: $App<Mu, T2>, arg2: $App<Mu, T3>, arg3: $App<Mu, T4>, arg4: $App<Mu, T5>, arg5: $App<Mu, T6>): $Products$P6<Mu, T1, T2, T3, T4, T5, T6>;
        group<T1, T2, T3, T4, T5>(arg0: $App<Mu, T1>, arg1: $App<Mu, T2>, arg2: $App<Mu, T3>, arg3: $App<Mu, T4>, arg4: $App<Mu, T5>): $Products$P5<Mu, T1, T2, T3, T4, T5>;
        group<T1, T2, T3, T4>(arg0: $App<Mu, T1>, arg1: $App<Mu, T2>, arg2: $App<Mu, T3>, arg3: $App<Mu, T4>): $Products$P4<Mu, T1, T2, T3, T4>;
    }
    export class $K1 {
    }
    export interface $K1 {
    }
    export class $K2 {
    }
    export interface $K2 {
    }
    export class $App2<F extends $K2, A, B> {
    }
    export interface $App2<F extends $K2, A, B> {
    }
    export class $App<F extends $K1, A> {
    }
    export interface $App<F extends $K1, A> {
    }
    export class $Kind1$Mu {
    }
    export interface $Kind1$Mu extends $K1 {
    }
}
