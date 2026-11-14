import { $Consumer_, $BiFunction, $Function_, $Function } from "@package/java/util/function";
import { $Collector } from "@package/java/util/stream";
import { $Enum } from "@package/java/lang";
import { $Map } from "@package/java/util";
import { $K1, $App } from "@package/com/mojang/datafixers/kinds";

declare module "@package/com/mojang/datafixers/util" {
    export class $Either$Mu<R> implements $K1 {
        constructor();
    }
    export class $Pair<F, S> implements $App<$Pair$Mu<S>, F> {
        static of<F, S>(arg0: F, arg1: S): $Pair<F, S>;
        static toMap<F, S>(): $Collector<$Pair<F, S>, never, $Map<F, S>>;
        getFirst(): $Pair$Mu<S>;
        swap(): $Pair<S, $Pair$Mu<S>>;
        static unbox<F, S>(arg0: $App<$Pair$Mu<S>, F>): $Pair<F, S>;
        getSecond(): S;
        mapFirst<F2>(arg0: $Function_<$Pair$Mu<S>, F2>): $Pair<F2, S>;
        mapSecond<S2>(arg0: $Function_<S, S2>): $Pair<$Pair$Mu<S>, S2>;
        constructor(arg0: $Pair$Mu<S>, arg1: S);
        get first(): $Pair$Mu<S>;
        get second(): S;
    }
    export class $Unit extends $Enum<$Unit> {
        static values(): $Unit[];
        static valueOf(arg0: string): $Unit;
        static INSTANCE: $Unit;
    }
    /**
     * Values that may be interpreted as {@link $Unit}.
     */
    export type $Unit_ = "instance";
    export class $Either<L, R> implements $App<$Either$Mu<R>, L> {
        map<T>(arg0: $Function_<L, T>, arg1: $Function_<R, T>): T;
        flatMap<L2>(arg0: $Function_<L, $Either<L2, R>>): $Either<L2, R>;
        static unwrap<U>(arg0: $Either<U, U>): U;
        left(): (L) | undefined;
        static left<L, R>(arg0: L): $Either<L, R>;
        static right<L, R>(arg0: R): $Either<L, R>;
        right(): (R) | undefined;
        swap(): $Either<R, L>;
        static unbox<L, R>(arg0: $App<$Either$Mu<R>, L>): $Either<L, R>;
        ifLeft(arg0: $Consumer_<L>): $Either<L, R>;
        ifRight(arg0: $Consumer_<R>): $Either<L, R>;
        mapBoth<C, D>(arg0: $Function_<L, C>, arg1: $Function_<R, D>): $Either<C, D>;
        mapLeft<T>(arg0: $Function_<L, T>): $Either<T, R>;
        mapRight<T>(arg0: $Function_<R, T>): $Either<L, T>;
        orThrow(): L;
    }
    export class $Function3<T1, T2, T3, R> {
    }
    export interface $Function3<T1, T2, T3, R> {
        apply(arg0: T1, arg1: T2, arg2: T3): R;
        curry(): $Function<T1, $BiFunction<T2, T3, R>>;
        curry2(): $BiFunction<T1, T2, $Function<T3, R>>;
    }
    /**
     * Values that may be interpreted as {@link $Function3}.
     */
    export type $Function3_<T1, T2, T3, R> = ((arg0: T1, arg1: T2, arg2: T3) => R);
    export class $Function4<T1, T2, T3, T4, R> {
    }
    export interface $Function4<T1, T2, T3, T4, R> {
        apply(arg0: T1, arg1: T2, arg2: T3, arg3: T4): R;
        curry(): $Function<T1, $Function3<T2, T3, T4, R>>;
        curry2(): $BiFunction<T1, T2, $BiFunction<T3, T4, R>>;
        curry3(): $Function3<T1, T2, T3, $Function<T4, R>>;
    }
    /**
     * Values that may be interpreted as {@link $Function4}.
     */
    export type $Function4_<T1, T2, T3, T4, R> = ((arg0: T1, arg1: T2, arg2: T3, arg3: T4) => R);
    export class $Function5<T1, T2, T3, T4, T5, R> {
    }
    export interface $Function5<T1, T2, T3, T4, T5, R> {
        apply(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5): R;
        curry(): $Function<T1, $Function4<T2, T3, T4, T5, R>>;
        curry2(): $BiFunction<T1, T2, $Function3<T3, T4, T5, R>>;
        curry3(): $Function3<T1, T2, T3, $BiFunction<T4, T5, R>>;
        curry4(): $Function4<T1, T2, T3, T4, $Function<T5, R>>;
    }
    /**
     * Values that may be interpreted as {@link $Function5}.
     */
    export type $Function5_<T1, T2, T3, T4, T5, R> = ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5) => R);
    export class $Function6<T1, T2, T3, T4, T5, T6, R> {
    }
    export interface $Function6<T1, T2, T3, T4, T5, T6, R> {
        apply(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6): R;
        curry(): $Function<T1, $Function5<T2, T3, T4, T5, T6, R>>;
        curry2(): $BiFunction<T1, T2, $Function4<T3, T4, T5, T6, R>>;
        curry3(): $Function3<T1, T2, T3, $Function3<T4, T5, T6, R>>;
        curry4(): $Function4<T1, T2, T3, T4, $BiFunction<T5, T6, R>>;
        curry5(): $Function5<T1, T2, T3, T4, T5, $Function<T6, R>>;
    }
    /**
     * Values that may be interpreted as {@link $Function6}.
     */
    export type $Function6_<T1, T2, T3, T4, T5, T6, R> = ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6) => R);
    export class $Function7<T1, T2, T3, T4, T5, T6, T7, R> {
    }
    export interface $Function7<T1, T2, T3, T4, T5, T6, T7, R> {
        apply(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7): R;
        curry(): $Function<T1, $Function6<T2, T3, T4, T5, T6, T7, R>>;
        curry2(): $BiFunction<T1, T2, $Function5<T3, T4, T5, T6, T7, R>>;
        curry3(): $Function3<T1, T2, T3, $Function4<T4, T5, T6, T7, R>>;
        curry4(): $Function4<T1, T2, T3, T4, $Function3<T5, T6, T7, R>>;
        curry5(): $Function5<T1, T2, T3, T4, T5, $BiFunction<T6, T7, R>>;
        curry6(): $Function6<T1, T2, T3, T4, T5, T6, $Function<T7, R>>;
    }
    /**
     * Values that may be interpreted as {@link $Function7}.
     */
    export type $Function7_<T1, T2, T3, T4, T5, T6, T7, R> = ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7) => R);
    export class $Function8<T1, T2, T3, T4, T5, T6, T7, T8, R> {
    }
    export interface $Function8<T1, T2, T3, T4, T5, T6, T7, T8, R> {
        apply(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8): R;
        curry(): $Function<T1, $Function7<T2, T3, T4, T5, T6, T7, T8, R>>;
        curry2(): $BiFunction<T1, T2, $Function6<T3, T4, T5, T6, T7, T8, R>>;
        curry3(): $Function3<T1, T2, T3, $Function5<T4, T5, T6, T7, T8, R>>;
        curry4(): $Function4<T1, T2, T3, T4, $Function4<T5, T6, T7, T8, R>>;
        curry5(): $Function5<T1, T2, T3, T4, T5, $Function3<T6, T7, T8, R>>;
        curry6(): $Function6<T1, T2, T3, T4, T5, T6, $BiFunction<T7, T8, R>>;
        curry7(): $Function7<T1, T2, T3, T4, T5, T6, T7, $Function<T8, R>>;
    }
    /**
     * Values that may be interpreted as {@link $Function8}.
     */
    export type $Function8_<T1, T2, T3, T4, T5, T6, T7, T8, R> = ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8) => R);
    export class $Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R> {
    }
    export interface $Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R> {
        apply(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9): R;
        curry(): $Function<T1, $Function8<T2, T3, T4, T5, T6, T7, T8, T9, R>>;
        curry2(): $BiFunction<T1, T2, $Function7<T3, T4, T5, T6, T7, T8, T9, R>>;
        curry3(): $Function3<T1, T2, T3, $Function6<T4, T5, T6, T7, T8, T9, R>>;
        curry4(): $Function4<T1, T2, T3, T4, $Function5<T5, T6, T7, T8, T9, R>>;
        curry5(): $Function5<T1, T2, T3, T4, T5, $Function4<T6, T7, T8, T9, R>>;
        curry6(): $Function6<T1, T2, T3, T4, T5, T6, $Function3<T7, T8, T9, R>>;
        curry7(): $Function7<T1, T2, T3, T4, T5, T6, T7, $BiFunction<T8, T9, R>>;
        curry8(): $Function8<T1, T2, T3, T4, T5, T6, T7, T8, $Function<T9, R>>;
    }
    /**
     * Values that may be interpreted as {@link $Function9}.
     */
    export type $Function9_<T1, T2, T3, T4, T5, T6, T7, T8, T9, R> = ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9) => R);
    export class $Pair$Mu<S> implements $K1 {
        constructor();
    }
    export class $Function13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R> {
    }
    export interface $Function13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R> {
        curry9(): $Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, $Function4<T10, T11, T12, T13, R>>;
        curry10(): $Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, $Function3<T11, T12, T13, R>>;
        curry11(): $Function11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, $BiFunction<T12, T13, R>>;
        curry12(): $Function12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, $Function<T13, R>>;
        apply(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13): R;
        curry(): $Function<T1, $Function12<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>>;
        curry2(): $BiFunction<T1, T2, $Function11<T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>>;
        curry3(): $Function3<T1, T2, T3, $Function10<T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>>;
        curry4(): $Function4<T1, T2, T3, T4, $Function9<T5, T6, T7, T8, T9, T10, T11, T12, T13, R>>;
        curry5(): $Function5<T1, T2, T3, T4, T5, $Function8<T6, T7, T8, T9, T10, T11, T12, T13, R>>;
        curry6(): $Function6<T1, T2, T3, T4, T5, T6, $Function7<T7, T8, T9, T10, T11, T12, T13, R>>;
        curry7(): $Function7<T1, T2, T3, T4, T5, T6, T7, $Function6<T8, T9, T10, T11, T12, T13, R>>;
        curry8(): $Function8<T1, T2, T3, T4, T5, T6, T7, T8, $Function5<T9, T10, T11, T12, T13, R>>;
    }
    /**
     * Values that may be interpreted as {@link $Function13}.
     */
    export type $Function13_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R> = ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13) => R);
    export class $Function14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R> {
    }
    export interface $Function14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R> {
        curry9(): $Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, $Function5<T10, T11, T12, T13, T14, R>>;
        curry10(): $Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, $Function4<T11, T12, T13, T14, R>>;
        curry11(): $Function11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, $Function3<T12, T13, T14, R>>;
        curry12(): $Function12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, $BiFunction<T13, T14, R>>;
        curry13(): $Function13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, $Function<T14, R>>;
        apply(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14): R;
        curry(): $Function<T1, $Function13<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>>;
        curry2(): $BiFunction<T1, T2, $Function12<T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>>;
        curry3(): $Function3<T1, T2, T3, $Function11<T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>>;
        curry4(): $Function4<T1, T2, T3, T4, $Function10<T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>>;
        curry5(): $Function5<T1, T2, T3, T4, T5, $Function9<T6, T7, T8, T9, T10, T11, T12, T13, T14, R>>;
        curry6(): $Function6<T1, T2, T3, T4, T5, T6, $Function8<T7, T8, T9, T10, T11, T12, T13, T14, R>>;
        curry7(): $Function7<T1, T2, T3, T4, T5, T6, T7, $Function7<T8, T9, T10, T11, T12, T13, T14, R>>;
        curry8(): $Function8<T1, T2, T3, T4, T5, T6, T7, T8, $Function6<T9, T10, T11, T12, T13, T14, R>>;
    }
    /**
     * Values that may be interpreted as {@link $Function14}.
     */
    export type $Function14_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R> = ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14) => R);
    export class $Function15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R> {
    }
    export interface $Function15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R> {
        curry9(): $Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, $Function6<T10, T11, T12, T13, T14, T15, R>>;
        curry10(): $Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, $Function5<T11, T12, T13, T14, T15, R>>;
        curry11(): $Function11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, $Function4<T12, T13, T14, T15, R>>;
        curry12(): $Function12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, $Function3<T13, T14, T15, R>>;
        curry13(): $Function13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, $BiFunction<T14, T15, R>>;
        curry14(): $Function14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, $Function<T15, R>>;
        apply(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14, arg14: T15): R;
        curry(): $Function<T1, $Function14<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>>;
        curry2(): $BiFunction<T1, T2, $Function13<T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>>;
        curry3(): $Function3<T1, T2, T3, $Function12<T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>>;
        curry4(): $Function4<T1, T2, T3, T4, $Function11<T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>>;
        curry5(): $Function5<T1, T2, T3, T4, T5, $Function10<T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>>;
        curry6(): $Function6<T1, T2, T3, T4, T5, T6, $Function9<T7, T8, T9, T10, T11, T12, T13, T14, T15, R>>;
        curry7(): $Function7<T1, T2, T3, T4, T5, T6, T7, $Function8<T8, T9, T10, T11, T12, T13, T14, T15, R>>;
        curry8(): $Function8<T1, T2, T3, T4, T5, T6, T7, T8, $Function7<T9, T10, T11, T12, T13, T14, T15, R>>;
    }
    /**
     * Values that may be interpreted as {@link $Function15}.
     */
    export type $Function15_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R> = ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14, arg14: T15) => R);
    export class $Function16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R> {
    }
    export interface $Function16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R> {
        curry15(): $Function15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, $Function<T16, R>>;
        curry9(): $Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, $Function7<T10, T11, T12, T13, T14, T15, T16, R>>;
        curry10(): $Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, $Function6<T11, T12, T13, T14, T15, T16, R>>;
        curry11(): $Function11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, $Function5<T12, T13, T14, T15, T16, R>>;
        curry12(): $Function12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, $Function4<T13, T14, T15, T16, R>>;
        curry13(): $Function13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, $Function3<T14, T15, T16, R>>;
        curry14(): $Function14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, $BiFunction<T15, T16, R>>;
        apply(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14, arg14: T15, arg15: T16): R;
        curry(): $Function<T1, $Function15<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>;
        curry2(): $BiFunction<T1, T2, $Function14<T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>;
        curry3(): $Function3<T1, T2, T3, $Function13<T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>;
        curry4(): $Function4<T1, T2, T3, T4, $Function12<T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>;
        curry5(): $Function5<T1, T2, T3, T4, T5, $Function11<T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>;
        curry6(): $Function6<T1, T2, T3, T4, T5, T6, $Function10<T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>;
        curry7(): $Function7<T1, T2, T3, T4, T5, T6, T7, $Function9<T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>;
        curry8(): $Function8<T1, T2, T3, T4, T5, T6, T7, T8, $Function8<T9, T10, T11, T12, T13, T14, T15, T16, R>>;
    }
    /**
     * Values that may be interpreted as {@link $Function16}.
     */
    export type $Function16_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R> = ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14, arg14: T15, arg15: T16) => R);
    export class $Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R> {
    }
    export interface $Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R> {
        curry9(): $Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, $Function<T10, R>>;
        apply(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10): R;
        curry(): $Function<T1, $Function9<T2, T3, T4, T5, T6, T7, T8, T9, T10, R>>;
        curry2(): $BiFunction<T1, T2, $Function8<T3, T4, T5, T6, T7, T8, T9, T10, R>>;
        curry3(): $Function3<T1, T2, T3, $Function7<T4, T5, T6, T7, T8, T9, T10, R>>;
        curry4(): $Function4<T1, T2, T3, T4, $Function6<T5, T6, T7, T8, T9, T10, R>>;
        curry5(): $Function5<T1, T2, T3, T4, T5, $Function5<T6, T7, T8, T9, T10, R>>;
        curry6(): $Function6<T1, T2, T3, T4, T5, T6, $Function4<T7, T8, T9, T10, R>>;
        curry7(): $Function7<T1, T2, T3, T4, T5, T6, T7, $Function3<T8, T9, T10, R>>;
        curry8(): $Function8<T1, T2, T3, T4, T5, T6, T7, T8, $BiFunction<T9, T10, R>>;
    }
    /**
     * Values that may be interpreted as {@link $Function10}.
     */
    export type $Function10_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R> = ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10) => R);
    export class $Function11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R> {
    }
    export interface $Function11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R> {
        curry9(): $Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, $BiFunction<T10, T11, R>>;
        curry10(): $Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, $Function<T11, R>>;
        apply(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11): R;
        curry(): $Function<T1, $Function10<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>>;
        curry2(): $BiFunction<T1, T2, $Function9<T3, T4, T5, T6, T7, T8, T9, T10, T11, R>>;
        curry3(): $Function3<T1, T2, T3, $Function8<T4, T5, T6, T7, T8, T9, T10, T11, R>>;
        curry4(): $Function4<T1, T2, T3, T4, $Function7<T5, T6, T7, T8, T9, T10, T11, R>>;
        curry5(): $Function5<T1, T2, T3, T4, T5, $Function6<T6, T7, T8, T9, T10, T11, R>>;
        curry6(): $Function6<T1, T2, T3, T4, T5, T6, $Function5<T7, T8, T9, T10, T11, R>>;
        curry7(): $Function7<T1, T2, T3, T4, T5, T6, T7, $Function4<T8, T9, T10, T11, R>>;
        curry8(): $Function8<T1, T2, T3, T4, T5, T6, T7, T8, $Function3<T9, T10, T11, R>>;
    }
    /**
     * Values that may be interpreted as {@link $Function11}.
     */
    export type $Function11_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R> = ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11) => R);
    export class $Function12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R> {
    }
    export interface $Function12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R> {
        curry9(): $Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, $Function3<T10, T11, T12, R>>;
        curry10(): $Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, $BiFunction<T11, T12, R>>;
        curry11(): $Function11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, $Function<T12, R>>;
        apply(arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12): R;
        curry(): $Function<T1, $Function11<T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>>;
        curry2(): $BiFunction<T1, T2, $Function10<T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>>;
        curry3(): $Function3<T1, T2, T3, $Function9<T4, T5, T6, T7, T8, T9, T10, T11, T12, R>>;
        curry4(): $Function4<T1, T2, T3, T4, $Function8<T5, T6, T7, T8, T9, T10, T11, T12, R>>;
        curry5(): $Function5<T1, T2, T3, T4, T5, $Function7<T6, T7, T8, T9, T10, T11, T12, R>>;
        curry6(): $Function6<T1, T2, T3, T4, T5, T6, $Function6<T7, T8, T9, T10, T11, T12, R>>;
        curry7(): $Function7<T1, T2, T3, T4, T5, T6, T7, $Function5<T8, T9, T10, T11, T12, R>>;
        curry8(): $Function8<T1, T2, T3, T4, T5, T6, T7, T8, $Function4<T9, T10, T11, T12, R>>;
    }
    /**
     * Values that may be interpreted as {@link $Function12}.
     */
    export type $Function12_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R> = ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12) => R);
}
