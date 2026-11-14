import { $OneShot } from "@package/net/minecraft/world/entity/ai/behavior";
import { $Supplier_, $Function_, $BiFunction, $Predicate_, $BiPredicate_, $BiFunction_, $Function } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Function4_, $Function3, $Function13_, $Function4, $Function5, $Function6, $Function8_, $Function7, $Function8, $Function9, $Function3_, $Unit, $Function14_, $Function10_, $Function7_, $Function15_, $Function6_, $Function11_, $Function5_, $Function16_, $Function9_, $Function12_ } from "@package/com/mojang/datafixers/util";
import { $Brain } from "@package/net/minecraft/world/entity/ai";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Record } from "@package/java/lang";
import { $MemoryModuleType, $MemoryStatus, $MemoryModuleType_ } from "@package/net/minecraft/world/entity/ai/memory";
import { $Products$P10, $Products$P11, $Products$P12, $Products$P13, $Products$P14, $Products$P15, $Products$P16, $Products$P1, $Products$P5, $Products$P4, $Products$P3, $Products$P2, $Products$P9, $Products$P8, $Products$P7, $Products$P6 } from "@package/com/mojang/datafixers";
import { $IdF$Mu, $Const$Mu, $Applicative$Mu, $OptionalBox$Mu, $K1, $Applicative, $App } from "@package/com/mojang/datafixers/kinds";

declare module "@package/net/minecraft/world/entity/ai/behavior/declarative" {
    export class $MemoryCondition$Registered<Value> extends $Record implements $MemoryCondition<$OptionalBox$Mu, Value> {
        createAccessor(arg0: $Brain<never>, arg1: (Value) | undefined): $MemoryAccessor<$OptionalBox$Mu, Value>;
        memory(): $MemoryModuleType<Value>;
        condition(): $MemoryStatus;
        constructor(arg0: $MemoryModuleType_<Value>);
    }
    /**
     * Values that may be interpreted as {@link $MemoryCondition$Registered}.
     */
    export type $MemoryCondition$Registered_<Value> = { memory?: $MemoryModuleType_<any>,  } | [memory?: $MemoryModuleType_<any>, ];
    export class $BehaviorBuilder$Mu<E extends $LivingEntity> implements $K1 {
        constructor();
    }
    export class $BehaviorBuilder$TriggerWrapper<E extends $LivingEntity> extends $BehaviorBuilder<E, $Unit> {
    }
    export class $BehaviorBuilder$PureMemory<E extends $LivingEntity, F extends $K1, Value> extends $BehaviorBuilder<E, $MemoryAccessor<F, Value>> {
    }
    export class $MemoryCondition<F extends $K1, Value> {
    }
    export interface $MemoryCondition<F extends $K1, Value> {
        createAccessor(brain: $Brain<never>, memory: (Value) | undefined): $MemoryAccessor<F, Value>;
        memory(): $MemoryModuleType<Value>;
        condition(): $MemoryStatus;
    }
    export class $BehaviorBuilder$Instance<E extends $LivingEntity> implements $Applicative<$BehaviorBuilder$Mu<E>, $BehaviorBuilder$Instance$Mu<E>> {
        ifTriggered(trigger: $Trigger_<E>): $BehaviorBuilder<E, $Unit>;
        point<A>(value: A): $BehaviorBuilder<E, A>;
        point<A>(name: $Supplier_<string>, value: A): $BehaviorBuilder<E, A>;
        tryGet<Value>(memory: $MemoryAccessor<$OptionalBox$Mu, Value>): (Value) | undefined;
        get<Value>(memory: $MemoryAccessor<$IdF$Mu, Value>): Value;
        map<T, R>(mapper: $Function_<T, R>, behavior: $App<$BehaviorBuilder$Mu<E>, T>): $BehaviorBuilder<E, R>;
        present<Value>(memoryType: $MemoryModuleType_<Value>): $BehaviorBuilder<E, $MemoryAccessor<$IdF$Mu, Value>>;
        absent<Value>(memoryType: $MemoryModuleType_<Value>): $BehaviorBuilder<E, $MemoryAccessor<$Const$Mu<$Unit>, Value>>;
        lift1<A, R>(behavior: $App<$BehaviorBuilder$Mu<E>, $Function_<A, R>>): $Function<$App<$BehaviorBuilder$Mu<E>, A>, $App<$BehaviorBuilder$Mu<E>, R>>;
        registered<Value>(memoryType: $MemoryModuleType_<Value>): $BehaviorBuilder<E, $MemoryAccessor<$OptionalBox$Mu, Value>>;
        ap<A, R>(arg0: $Function_<A, R>, arg1: $App<$BehaviorBuilder$Mu<E>, A>): $App<$BehaviorBuilder$Mu<E>, R>;
        ap<A, R>(arg0: $App<$BehaviorBuilder$Mu<E>, $Function_<A, R>>, arg1: $App<$BehaviorBuilder$Mu<E>, A>): $App<$BehaviorBuilder$Mu<E>, R>;
        apply2<A, B, R>(arg0: $BiFunction_<A, B, R>, arg1: $App<$BehaviorBuilder$Mu<E>, A>, arg2: $App<$BehaviorBuilder$Mu<E>, B>): $App<$BehaviorBuilder$Mu<E>, R>;
        apply3<T1, T2, T3, R>(arg0: $Function3_<T1, T2, T3, R>, arg1: $App<$BehaviorBuilder$Mu<E>, T1>, arg2: $App<$BehaviorBuilder$Mu<E>, T2>, arg3: $App<$BehaviorBuilder$Mu<E>, T3>): $App<$BehaviorBuilder$Mu<E>, R>;
        ap8<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: $App<$BehaviorBuilder$Mu<E>, $Function8_<T1, T2, T3, T4, T5, T6, T7, T8, R>>, arg1: $App<$BehaviorBuilder$Mu<E>, T1>, arg2: $App<$BehaviorBuilder$Mu<E>, T2>, arg3: $App<$BehaviorBuilder$Mu<E>, T3>, arg4: $App<$BehaviorBuilder$Mu<E>, T4>, arg5: $App<$BehaviorBuilder$Mu<E>, T5>, arg6: $App<$BehaviorBuilder$Mu<E>, T6>, arg7: $App<$BehaviorBuilder$Mu<E>, T7>, arg8: $App<$BehaviorBuilder$Mu<E>, T8>): $App<$BehaviorBuilder$Mu<E>, R>;
        ap9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: $App<$BehaviorBuilder$Mu<E>, $Function9_<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>>, arg1: $App<$BehaviorBuilder$Mu<E>, T1>, arg2: $App<$BehaviorBuilder$Mu<E>, T2>, arg3: $App<$BehaviorBuilder$Mu<E>, T3>, arg4: $App<$BehaviorBuilder$Mu<E>, T4>, arg5: $App<$BehaviorBuilder$Mu<E>, T5>, arg6: $App<$BehaviorBuilder$Mu<E>, T6>, arg7: $App<$BehaviorBuilder$Mu<E>, T7>, arg8: $App<$BehaviorBuilder$Mu<E>, T8>, arg9: $App<$BehaviorBuilder$Mu<E>, T9>): $App<$BehaviorBuilder$Mu<E>, R>;
        lift2<A, B, R>(arg0: $App<$BehaviorBuilder$Mu<E>, $BiFunction_<A, B, R>>): $BiFunction<$App<$BehaviorBuilder$Mu<E>, A>, $App<$BehaviorBuilder$Mu<E>, B>, $App<$BehaviorBuilder$Mu<E>, R>>;
        lift3<T1, T2, T3, R>(arg0: $App<$BehaviorBuilder$Mu<E>, $Function3_<T1, T2, T3, R>>): $Function3<$App<$BehaviorBuilder$Mu<E>, T1>, $App<$BehaviorBuilder$Mu<E>, T2>, $App<$BehaviorBuilder$Mu<E>, T3>, $App<$BehaviorBuilder$Mu<E>, R>>;
        lift4<T1, T2, T3, T4, R>(arg0: $App<$BehaviorBuilder$Mu<E>, $Function4_<T1, T2, T3, T4, R>>): $Function4<$App<$BehaviorBuilder$Mu<E>, T1>, $App<$BehaviorBuilder$Mu<E>, T2>, $App<$BehaviorBuilder$Mu<E>, T3>, $App<$BehaviorBuilder$Mu<E>, T4>, $App<$BehaviorBuilder$Mu<E>, R>>;
        lift5<T1, T2, T3, T4, T5, R>(arg0: $App<$BehaviorBuilder$Mu<E>, $Function5_<T1, T2, T3, T4, T5, R>>): $Function5<$App<$BehaviorBuilder$Mu<E>, T1>, $App<$BehaviorBuilder$Mu<E>, T2>, $App<$BehaviorBuilder$Mu<E>, T3>, $App<$BehaviorBuilder$Mu<E>, T4>, $App<$BehaviorBuilder$Mu<E>, T5>, $App<$BehaviorBuilder$Mu<E>, R>>;
        ap10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>(arg0: $App<$BehaviorBuilder$Mu<E>, $Function10_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>>, arg1: $App<$BehaviorBuilder$Mu<E>, T1>, arg2: $App<$BehaviorBuilder$Mu<E>, T2>, arg3: $App<$BehaviorBuilder$Mu<E>, T3>, arg4: $App<$BehaviorBuilder$Mu<E>, T4>, arg5: $App<$BehaviorBuilder$Mu<E>, T5>, arg6: $App<$BehaviorBuilder$Mu<E>, T6>, arg7: $App<$BehaviorBuilder$Mu<E>, T7>, arg8: $App<$BehaviorBuilder$Mu<E>, T8>, arg9: $App<$BehaviorBuilder$Mu<E>, T9>, arg10: $App<$BehaviorBuilder$Mu<E>, T10>): $App<$BehaviorBuilder$Mu<E>, R>;
        ap11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>(arg0: $App<$BehaviorBuilder$Mu<E>, $Function11_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>>, arg1: $App<$BehaviorBuilder$Mu<E>, T1>, arg2: $App<$BehaviorBuilder$Mu<E>, T2>, arg3: $App<$BehaviorBuilder$Mu<E>, T3>, arg4: $App<$BehaviorBuilder$Mu<E>, T4>, arg5: $App<$BehaviorBuilder$Mu<E>, T5>, arg6: $App<$BehaviorBuilder$Mu<E>, T6>, arg7: $App<$BehaviorBuilder$Mu<E>, T7>, arg8: $App<$BehaviorBuilder$Mu<E>, T8>, arg9: $App<$BehaviorBuilder$Mu<E>, T9>, arg10: $App<$BehaviorBuilder$Mu<E>, T10>, arg11: $App<$BehaviorBuilder$Mu<E>, T11>): $App<$BehaviorBuilder$Mu<E>, R>;
        ap12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>(arg0: $App<$BehaviorBuilder$Mu<E>, $Function12_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>>, arg1: $App<$BehaviorBuilder$Mu<E>, T1>, arg2: $App<$BehaviorBuilder$Mu<E>, T2>, arg3: $App<$BehaviorBuilder$Mu<E>, T3>, arg4: $App<$BehaviorBuilder$Mu<E>, T4>, arg5: $App<$BehaviorBuilder$Mu<E>, T5>, arg6: $App<$BehaviorBuilder$Mu<E>, T6>, arg7: $App<$BehaviorBuilder$Mu<E>, T7>, arg8: $App<$BehaviorBuilder$Mu<E>, T8>, arg9: $App<$BehaviorBuilder$Mu<E>, T9>, arg10: $App<$BehaviorBuilder$Mu<E>, T10>, arg11: $App<$BehaviorBuilder$Mu<E>, T11>, arg12: $App<$BehaviorBuilder$Mu<E>, T12>): $App<$BehaviorBuilder$Mu<E>, R>;
        ap5<T1, T2, T3, T4, T5, R>(arg0: $App<$BehaviorBuilder$Mu<E>, $Function5_<T1, T2, T3, T4, T5, R>>, arg1: $App<$BehaviorBuilder$Mu<E>, T1>, arg2: $App<$BehaviorBuilder$Mu<E>, T2>, arg3: $App<$BehaviorBuilder$Mu<E>, T3>, arg4: $App<$BehaviorBuilder$Mu<E>, T4>, arg5: $App<$BehaviorBuilder$Mu<E>, T5>): $App<$BehaviorBuilder$Mu<E>, R>;
        ap6<T1, T2, T3, T4, T5, T6, R>(arg0: $App<$BehaviorBuilder$Mu<E>, $Function6_<T1, T2, T3, T4, T5, T6, R>>, arg1: $App<$BehaviorBuilder$Mu<E>, T1>, arg2: $App<$BehaviorBuilder$Mu<E>, T2>, arg3: $App<$BehaviorBuilder$Mu<E>, T3>, arg4: $App<$BehaviorBuilder$Mu<E>, T4>, arg5: $App<$BehaviorBuilder$Mu<E>, T5>, arg6: $App<$BehaviorBuilder$Mu<E>, T6>): $App<$BehaviorBuilder$Mu<E>, R>;
        ap7<T1, T2, T3, T4, T5, T6, T7, R>(arg0: $App<$BehaviorBuilder$Mu<E>, $Function7_<T1, T2, T3, T4, T5, T6, T7, R>>, arg1: $App<$BehaviorBuilder$Mu<E>, T1>, arg2: $App<$BehaviorBuilder$Mu<E>, T2>, arg3: $App<$BehaviorBuilder$Mu<E>, T3>, arg4: $App<$BehaviorBuilder$Mu<E>, T4>, arg5: $App<$BehaviorBuilder$Mu<E>, T5>, arg6: $App<$BehaviorBuilder$Mu<E>, T6>, arg7: $App<$BehaviorBuilder$Mu<E>, T7>): $App<$BehaviorBuilder$Mu<E>, R>;
        lift6<T1, T2, T3, T4, T5, T6, R>(arg0: $App<$BehaviorBuilder$Mu<E>, $Function6_<T1, T2, T3, T4, T5, T6, R>>): $Function6<$App<$BehaviorBuilder$Mu<E>, T1>, $App<$BehaviorBuilder$Mu<E>, T2>, $App<$BehaviorBuilder$Mu<E>, T3>, $App<$BehaviorBuilder$Mu<E>, T4>, $App<$BehaviorBuilder$Mu<E>, T5>, $App<$BehaviorBuilder$Mu<E>, T6>, $App<$BehaviorBuilder$Mu<E>, R>>;
        lift7<T1, T2, T3, T4, T5, T6, T7, R>(arg0: $App<$BehaviorBuilder$Mu<E>, $Function7_<T1, T2, T3, T4, T5, T6, T7, R>>): $Function7<$App<$BehaviorBuilder$Mu<E>, T1>, $App<$BehaviorBuilder$Mu<E>, T2>, $App<$BehaviorBuilder$Mu<E>, T3>, $App<$BehaviorBuilder$Mu<E>, T4>, $App<$BehaviorBuilder$Mu<E>, T5>, $App<$BehaviorBuilder$Mu<E>, T6>, $App<$BehaviorBuilder$Mu<E>, T7>, $App<$BehaviorBuilder$Mu<E>, R>>;
        lift8<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: $App<$BehaviorBuilder$Mu<E>, $Function8_<T1, T2, T3, T4, T5, T6, T7, T8, R>>): $Function8<$App<$BehaviorBuilder$Mu<E>, T1>, $App<$BehaviorBuilder$Mu<E>, T2>, $App<$BehaviorBuilder$Mu<E>, T3>, $App<$BehaviorBuilder$Mu<E>, T4>, $App<$BehaviorBuilder$Mu<E>, T5>, $App<$BehaviorBuilder$Mu<E>, T6>, $App<$BehaviorBuilder$Mu<E>, T7>, $App<$BehaviorBuilder$Mu<E>, T8>, $App<$BehaviorBuilder$Mu<E>, R>>;
        lift9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: $App<$BehaviorBuilder$Mu<E>, $Function9_<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>>): $Function9<$App<$BehaviorBuilder$Mu<E>, T1>, $App<$BehaviorBuilder$Mu<E>, T2>, $App<$BehaviorBuilder$Mu<E>, T3>, $App<$BehaviorBuilder$Mu<E>, T4>, $App<$BehaviorBuilder$Mu<E>, T5>, $App<$BehaviorBuilder$Mu<E>, T6>, $App<$BehaviorBuilder$Mu<E>, T7>, $App<$BehaviorBuilder$Mu<E>, T8>, $App<$BehaviorBuilder$Mu<E>, T9>, $App<$BehaviorBuilder$Mu<E>, R>>;
        ap13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>(arg0: $App<$BehaviorBuilder$Mu<E>, $Function13_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>>, arg1: $App<$BehaviorBuilder$Mu<E>, T1>, arg2: $App<$BehaviorBuilder$Mu<E>, T2>, arg3: $App<$BehaviorBuilder$Mu<E>, T3>, arg4: $App<$BehaviorBuilder$Mu<E>, T4>, arg5: $App<$BehaviorBuilder$Mu<E>, T5>, arg6: $App<$BehaviorBuilder$Mu<E>, T6>, arg7: $App<$BehaviorBuilder$Mu<E>, T7>, arg8: $App<$BehaviorBuilder$Mu<E>, T8>, arg9: $App<$BehaviorBuilder$Mu<E>, T9>, arg10: $App<$BehaviorBuilder$Mu<E>, T10>, arg11: $App<$BehaviorBuilder$Mu<E>, T11>, arg12: $App<$BehaviorBuilder$Mu<E>, T12>, arg13: $App<$BehaviorBuilder$Mu<E>, T13>): $App<$BehaviorBuilder$Mu<E>, R>;
        ap14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>(arg0: $App<$BehaviorBuilder$Mu<E>, $Function14_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>>, arg1: $App<$BehaviorBuilder$Mu<E>, T1>, arg2: $App<$BehaviorBuilder$Mu<E>, T2>, arg3: $App<$BehaviorBuilder$Mu<E>, T3>, arg4: $App<$BehaviorBuilder$Mu<E>, T4>, arg5: $App<$BehaviorBuilder$Mu<E>, T5>, arg6: $App<$BehaviorBuilder$Mu<E>, T6>, arg7: $App<$BehaviorBuilder$Mu<E>, T7>, arg8: $App<$BehaviorBuilder$Mu<E>, T8>, arg9: $App<$BehaviorBuilder$Mu<E>, T9>, arg10: $App<$BehaviorBuilder$Mu<E>, T10>, arg11: $App<$BehaviorBuilder$Mu<E>, T11>, arg12: $App<$BehaviorBuilder$Mu<E>, T12>, arg13: $App<$BehaviorBuilder$Mu<E>, T13>, arg14: $App<$BehaviorBuilder$Mu<E>, T14>): $App<$BehaviorBuilder$Mu<E>, R>;
        ap15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>(arg0: $App<$BehaviorBuilder$Mu<E>, $Function15_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>>, arg1: $App<$BehaviorBuilder$Mu<E>, T1>, arg2: $App<$BehaviorBuilder$Mu<E>, T2>, arg3: $App<$BehaviorBuilder$Mu<E>, T3>, arg4: $App<$BehaviorBuilder$Mu<E>, T4>, arg5: $App<$BehaviorBuilder$Mu<E>, T5>, arg6: $App<$BehaviorBuilder$Mu<E>, T6>, arg7: $App<$BehaviorBuilder$Mu<E>, T7>, arg8: $App<$BehaviorBuilder$Mu<E>, T8>, arg9: $App<$BehaviorBuilder$Mu<E>, T9>, arg10: $App<$BehaviorBuilder$Mu<E>, T10>, arg11: $App<$BehaviorBuilder$Mu<E>, T11>, arg12: $App<$BehaviorBuilder$Mu<E>, T12>, arg13: $App<$BehaviorBuilder$Mu<E>, T13>, arg14: $App<$BehaviorBuilder$Mu<E>, T14>, arg15: $App<$BehaviorBuilder$Mu<E>, T15>): $App<$BehaviorBuilder$Mu<E>, R>;
        ap16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>(arg0: $App<$BehaviorBuilder$Mu<E>, $Function16_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>, arg1: $App<$BehaviorBuilder$Mu<E>, T1>, arg2: $App<$BehaviorBuilder$Mu<E>, T2>, arg3: $App<$BehaviorBuilder$Mu<E>, T3>, arg4: $App<$BehaviorBuilder$Mu<E>, T4>, arg5: $App<$BehaviorBuilder$Mu<E>, T5>, arg6: $App<$BehaviorBuilder$Mu<E>, T6>, arg7: $App<$BehaviorBuilder$Mu<E>, T7>, arg8: $App<$BehaviorBuilder$Mu<E>, T8>, arg9: $App<$BehaviorBuilder$Mu<E>, T9>, arg10: $App<$BehaviorBuilder$Mu<E>, T10>, arg11: $App<$BehaviorBuilder$Mu<E>, T11>, arg12: $App<$BehaviorBuilder$Mu<E>, T12>, arg13: $App<$BehaviorBuilder$Mu<E>, T13>, arg14: $App<$BehaviorBuilder$Mu<E>, T14>, arg15: $App<$BehaviorBuilder$Mu<E>, T15>, arg16: $App<$BehaviorBuilder$Mu<E>, T16>): $App<$BehaviorBuilder$Mu<E>, R>;
        apply4<T1, T2, T3, T4, R>(arg0: $Function4_<T1, T2, T3, T4, R>, arg1: $App<$BehaviorBuilder$Mu<E>, T1>, arg2: $App<$BehaviorBuilder$Mu<E>, T2>, arg3: $App<$BehaviorBuilder$Mu<E>, T3>, arg4: $App<$BehaviorBuilder$Mu<E>, T4>): $App<$BehaviorBuilder$Mu<E>, R>;
        apply5<T1, T2, T3, T4, T5, R>(arg0: $Function5_<T1, T2, T3, T4, T5, R>, arg1: $App<$BehaviorBuilder$Mu<E>, T1>, arg2: $App<$BehaviorBuilder$Mu<E>, T2>, arg3: $App<$BehaviorBuilder$Mu<E>, T3>, arg4: $App<$BehaviorBuilder$Mu<E>, T4>, arg5: $App<$BehaviorBuilder$Mu<E>, T5>): $App<$BehaviorBuilder$Mu<E>, R>;
        apply6<T1, T2, T3, T4, T5, T6, R>(arg0: $Function6_<T1, T2, T3, T4, T5, T6, R>, arg1: $App<$BehaviorBuilder$Mu<E>, T1>, arg2: $App<$BehaviorBuilder$Mu<E>, T2>, arg3: $App<$BehaviorBuilder$Mu<E>, T3>, arg4: $App<$BehaviorBuilder$Mu<E>, T4>, arg5: $App<$BehaviorBuilder$Mu<E>, T5>, arg6: $App<$BehaviorBuilder$Mu<E>, T6>): $App<$BehaviorBuilder$Mu<E>, R>;
        apply7<T1, T2, T3, T4, T5, T6, T7, R>(arg0: $Function7_<T1, T2, T3, T4, T5, T6, T7, R>, arg1: $App<$BehaviorBuilder$Mu<E>, T1>, arg2: $App<$BehaviorBuilder$Mu<E>, T2>, arg3: $App<$BehaviorBuilder$Mu<E>, T3>, arg4: $App<$BehaviorBuilder$Mu<E>, T4>, arg5: $App<$BehaviorBuilder$Mu<E>, T5>, arg6: $App<$BehaviorBuilder$Mu<E>, T6>, arg7: $App<$BehaviorBuilder$Mu<E>, T7>): $App<$BehaviorBuilder$Mu<E>, R>;
        apply8<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: $Function8_<T1, T2, T3, T4, T5, T6, T7, T8, R>, arg1: $App<$BehaviorBuilder$Mu<E>, T1>, arg2: $App<$BehaviorBuilder$Mu<E>, T2>, arg3: $App<$BehaviorBuilder$Mu<E>, T3>, arg4: $App<$BehaviorBuilder$Mu<E>, T4>, arg5: $App<$BehaviorBuilder$Mu<E>, T5>, arg6: $App<$BehaviorBuilder$Mu<E>, T6>, arg7: $App<$BehaviorBuilder$Mu<E>, T7>, arg8: $App<$BehaviorBuilder$Mu<E>, T8>): $App<$BehaviorBuilder$Mu<E>, R>;
        apply9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: $Function9_<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>, arg1: $App<$BehaviorBuilder$Mu<E>, T1>, arg2: $App<$BehaviorBuilder$Mu<E>, T2>, arg3: $App<$BehaviorBuilder$Mu<E>, T3>, arg4: $App<$BehaviorBuilder$Mu<E>, T4>, arg5: $App<$BehaviorBuilder$Mu<E>, T5>, arg6: $App<$BehaviorBuilder$Mu<E>, T6>, arg7: $App<$BehaviorBuilder$Mu<E>, T7>, arg8: $App<$BehaviorBuilder$Mu<E>, T8>, arg9: $App<$BehaviorBuilder$Mu<E>, T9>): $App<$BehaviorBuilder$Mu<E>, R>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(arg0: $App<$BehaviorBuilder$Mu<E>, T1>, arg1: $App<$BehaviorBuilder$Mu<E>, T2>, arg2: $App<$BehaviorBuilder$Mu<E>, T3>, arg3: $App<$BehaviorBuilder$Mu<E>, T4>, arg4: $App<$BehaviorBuilder$Mu<E>, T5>, arg5: $App<$BehaviorBuilder$Mu<E>, T6>, arg6: $App<$BehaviorBuilder$Mu<E>, T7>, arg7: $App<$BehaviorBuilder$Mu<E>, T8>, arg8: $App<$BehaviorBuilder$Mu<E>, T9>, arg9: $App<$BehaviorBuilder$Mu<E>, T10>, arg10: $App<$BehaviorBuilder$Mu<E>, T11>): $Products$P11<$BehaviorBuilder$Mu<E>, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(arg0: $App<$BehaviorBuilder$Mu<E>, T1>, arg1: $App<$BehaviorBuilder$Mu<E>, T2>, arg2: $App<$BehaviorBuilder$Mu<E>, T3>, arg3: $App<$BehaviorBuilder$Mu<E>, T4>, arg4: $App<$BehaviorBuilder$Mu<E>, T5>, arg5: $App<$BehaviorBuilder$Mu<E>, T6>, arg6: $App<$BehaviorBuilder$Mu<E>, T7>, arg7: $App<$BehaviorBuilder$Mu<E>, T8>, arg8: $App<$BehaviorBuilder$Mu<E>, T9>, arg9: $App<$BehaviorBuilder$Mu<E>, T10>): $Products$P10<$BehaviorBuilder$Mu<E>, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9>(arg0: $App<$BehaviorBuilder$Mu<E>, T1>, arg1: $App<$BehaviorBuilder$Mu<E>, T2>, arg2: $App<$BehaviorBuilder$Mu<E>, T3>, arg3: $App<$BehaviorBuilder$Mu<E>, T4>, arg4: $App<$BehaviorBuilder$Mu<E>, T5>, arg5: $App<$BehaviorBuilder$Mu<E>, T6>, arg6: $App<$BehaviorBuilder$Mu<E>, T7>, arg7: $App<$BehaviorBuilder$Mu<E>, T8>, arg8: $App<$BehaviorBuilder$Mu<E>, T9>): $Products$P9<$BehaviorBuilder$Mu<E>, T1, T2, T3, T4, T5, T6, T7, T8, T9>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(arg0: $App<$BehaviorBuilder$Mu<E>, T1>, arg1: $App<$BehaviorBuilder$Mu<E>, T2>, arg2: $App<$BehaviorBuilder$Mu<E>, T3>, arg3: $App<$BehaviorBuilder$Mu<E>, T4>, arg4: $App<$BehaviorBuilder$Mu<E>, T5>, arg5: $App<$BehaviorBuilder$Mu<E>, T6>, arg6: $App<$BehaviorBuilder$Mu<E>, T7>, arg7: $App<$BehaviorBuilder$Mu<E>, T8>, arg8: $App<$BehaviorBuilder$Mu<E>, T9>, arg9: $App<$BehaviorBuilder$Mu<E>, T10>, arg10: $App<$BehaviorBuilder$Mu<E>, T11>, arg11: $App<$BehaviorBuilder$Mu<E>, T12>, arg12: $App<$BehaviorBuilder$Mu<E>, T13>, arg13: $App<$BehaviorBuilder$Mu<E>, T14>, arg14: $App<$BehaviorBuilder$Mu<E>, T15>, arg15: $App<$BehaviorBuilder$Mu<E>, T16>): $Products$P16<$BehaviorBuilder$Mu<E>, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(arg0: $App<$BehaviorBuilder$Mu<E>, T1>, arg1: $App<$BehaviorBuilder$Mu<E>, T2>, arg2: $App<$BehaviorBuilder$Mu<E>, T3>, arg3: $App<$BehaviorBuilder$Mu<E>, T4>, arg4: $App<$BehaviorBuilder$Mu<E>, T5>, arg5: $App<$BehaviorBuilder$Mu<E>, T6>, arg6: $App<$BehaviorBuilder$Mu<E>, T7>, arg7: $App<$BehaviorBuilder$Mu<E>, T8>, arg8: $App<$BehaviorBuilder$Mu<E>, T9>, arg9: $App<$BehaviorBuilder$Mu<E>, T10>, arg10: $App<$BehaviorBuilder$Mu<E>, T11>, arg11: $App<$BehaviorBuilder$Mu<E>, T12>, arg12: $App<$BehaviorBuilder$Mu<E>, T13>, arg13: $App<$BehaviorBuilder$Mu<E>, T14>, arg14: $App<$BehaviorBuilder$Mu<E>, T15>): $Products$P15<$BehaviorBuilder$Mu<E>, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(arg0: $App<$BehaviorBuilder$Mu<E>, T1>, arg1: $App<$BehaviorBuilder$Mu<E>, T2>, arg2: $App<$BehaviorBuilder$Mu<E>, T3>, arg3: $App<$BehaviorBuilder$Mu<E>, T4>, arg4: $App<$BehaviorBuilder$Mu<E>, T5>, arg5: $App<$BehaviorBuilder$Mu<E>, T6>, arg6: $App<$BehaviorBuilder$Mu<E>, T7>, arg7: $App<$BehaviorBuilder$Mu<E>, T8>, arg8: $App<$BehaviorBuilder$Mu<E>, T9>, arg9: $App<$BehaviorBuilder$Mu<E>, T10>, arg10: $App<$BehaviorBuilder$Mu<E>, T11>, arg11: $App<$BehaviorBuilder$Mu<E>, T12>, arg12: $App<$BehaviorBuilder$Mu<E>, T13>, arg13: $App<$BehaviorBuilder$Mu<E>, T14>): $Products$P14<$BehaviorBuilder$Mu<E>, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(arg0: $App<$BehaviorBuilder$Mu<E>, T1>, arg1: $App<$BehaviorBuilder$Mu<E>, T2>, arg2: $App<$BehaviorBuilder$Mu<E>, T3>, arg3: $App<$BehaviorBuilder$Mu<E>, T4>, arg4: $App<$BehaviorBuilder$Mu<E>, T5>, arg5: $App<$BehaviorBuilder$Mu<E>, T6>, arg6: $App<$BehaviorBuilder$Mu<E>, T7>, arg7: $App<$BehaviorBuilder$Mu<E>, T8>, arg8: $App<$BehaviorBuilder$Mu<E>, T9>, arg9: $App<$BehaviorBuilder$Mu<E>, T10>, arg10: $App<$BehaviorBuilder$Mu<E>, T11>, arg11: $App<$BehaviorBuilder$Mu<E>, T12>, arg12: $App<$BehaviorBuilder$Mu<E>, T13>): $Products$P13<$BehaviorBuilder$Mu<E>, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(arg0: $App<$BehaviorBuilder$Mu<E>, T1>, arg1: $App<$BehaviorBuilder$Mu<E>, T2>, arg2: $App<$BehaviorBuilder$Mu<E>, T3>, arg3: $App<$BehaviorBuilder$Mu<E>, T4>, arg4: $App<$BehaviorBuilder$Mu<E>, T5>, arg5: $App<$BehaviorBuilder$Mu<E>, T6>, arg6: $App<$BehaviorBuilder$Mu<E>, T7>, arg7: $App<$BehaviorBuilder$Mu<E>, T8>, arg8: $App<$BehaviorBuilder$Mu<E>, T9>, arg9: $App<$BehaviorBuilder$Mu<E>, T10>, arg10: $App<$BehaviorBuilder$Mu<E>, T11>, arg11: $App<$BehaviorBuilder$Mu<E>, T12>): $Products$P12<$BehaviorBuilder$Mu<E>, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>;
        group<T1, T2, T3>(arg0: $App<$BehaviorBuilder$Mu<E>, T1>, arg1: $App<$BehaviorBuilder$Mu<E>, T2>, arg2: $App<$BehaviorBuilder$Mu<E>, T3>): $Products$P3<$BehaviorBuilder$Mu<E>, T1, T2, T3>;
        group<T1, T2>(arg0: $App<$BehaviorBuilder$Mu<E>, T1>, arg1: $App<$BehaviorBuilder$Mu<E>, T2>): $Products$P2<$BehaviorBuilder$Mu<E>, T1, T2>;
        group<T1>(arg0: $App<$BehaviorBuilder$Mu<E>, T1>): $Products$P1<$BehaviorBuilder$Mu<E>, T1>;
        group<T1, T2, T3, T4, T5, T6, T7, T8>(arg0: $App<$BehaviorBuilder$Mu<E>, T1>, arg1: $App<$BehaviorBuilder$Mu<E>, T2>, arg2: $App<$BehaviorBuilder$Mu<E>, T3>, arg3: $App<$BehaviorBuilder$Mu<E>, T4>, arg4: $App<$BehaviorBuilder$Mu<E>, T5>, arg5: $App<$BehaviorBuilder$Mu<E>, T6>, arg6: $App<$BehaviorBuilder$Mu<E>, T7>, arg7: $App<$BehaviorBuilder$Mu<E>, T8>): $Products$P8<$BehaviorBuilder$Mu<E>, T1, T2, T3, T4, T5, T6, T7, T8>;
        group<T1, T2, T3, T4, T5, T6, T7>(arg0: $App<$BehaviorBuilder$Mu<E>, T1>, arg1: $App<$BehaviorBuilder$Mu<E>, T2>, arg2: $App<$BehaviorBuilder$Mu<E>, T3>, arg3: $App<$BehaviorBuilder$Mu<E>, T4>, arg4: $App<$BehaviorBuilder$Mu<E>, T5>, arg5: $App<$BehaviorBuilder$Mu<E>, T6>, arg6: $App<$BehaviorBuilder$Mu<E>, T7>): $Products$P7<$BehaviorBuilder$Mu<E>, T1, T2, T3, T4, T5, T6, T7>;
        group<T1, T2, T3, T4, T5, T6>(arg0: $App<$BehaviorBuilder$Mu<E>, T1>, arg1: $App<$BehaviorBuilder$Mu<E>, T2>, arg2: $App<$BehaviorBuilder$Mu<E>, T3>, arg3: $App<$BehaviorBuilder$Mu<E>, T4>, arg4: $App<$BehaviorBuilder$Mu<E>, T5>, arg5: $App<$BehaviorBuilder$Mu<E>, T6>): $Products$P6<$BehaviorBuilder$Mu<E>, T1, T2, T3, T4, T5, T6>;
        group<T1, T2, T3, T4, T5>(arg0: $App<$BehaviorBuilder$Mu<E>, T1>, arg1: $App<$BehaviorBuilder$Mu<E>, T2>, arg2: $App<$BehaviorBuilder$Mu<E>, T3>, arg3: $App<$BehaviorBuilder$Mu<E>, T4>, arg4: $App<$BehaviorBuilder$Mu<E>, T5>): $Products$P5<$BehaviorBuilder$Mu<E>, T1, T2, T3, T4, T5>;
        group<T1, T2, T3, T4>(arg0: $App<$BehaviorBuilder$Mu<E>, T1>, arg1: $App<$BehaviorBuilder$Mu<E>, T2>, arg2: $App<$BehaviorBuilder$Mu<E>, T3>, arg3: $App<$BehaviorBuilder$Mu<E>, T4>): $Products$P4<$BehaviorBuilder$Mu<E>, T1, T2, T3, T4>;
        ap2<A, B, R>(arg0: $App<$BehaviorBuilder$Mu<E>, $BiFunction_<A, B, R>>, arg1: $App<$BehaviorBuilder$Mu<E>, A>, arg2: $App<$BehaviorBuilder$Mu<E>, B>): $App<$BehaviorBuilder$Mu<E>, R>;
        ap3<T1, T2, T3, R>(arg0: $App<$BehaviorBuilder$Mu<E>, $Function3_<T1, T2, T3, R>>, arg1: $App<$BehaviorBuilder$Mu<E>, T1>, arg2: $App<$BehaviorBuilder$Mu<E>, T2>, arg3: $App<$BehaviorBuilder$Mu<E>, T3>): $App<$BehaviorBuilder$Mu<E>, R>;
        ap4<T1, T2, T3, T4, R>(arg0: $App<$BehaviorBuilder$Mu<E>, $Function4_<T1, T2, T3, T4, R>>, arg1: $App<$BehaviorBuilder$Mu<E>, T1>, arg2: $App<$BehaviorBuilder$Mu<E>, T2>, arg3: $App<$BehaviorBuilder$Mu<E>, T3>, arg4: $App<$BehaviorBuilder$Mu<E>, T4>): $App<$BehaviorBuilder$Mu<E>, R>;
        constructor();
    }
    export class $BehaviorBuilder<E extends $LivingEntity, M> implements $App<$BehaviorBuilder$Mu<E>, M> {
        static triggerIf<E extends $LivingEntity>(predicate: $Predicate_<E>, trigger: $OneShot<E>): $OneShot<E>;
        static triggerIf<E extends $LivingEntity>(predicate: $Predicate_<E>): $OneShot<E>;
        static triggerIf<E extends $LivingEntity>(predicate: $BiPredicate_<$ServerLevel, E>): $OneShot<E>;
        static create<E extends $LivingEntity>(initializer: $Function_<$BehaviorBuilder$Instance<E>, $App<$BehaviorBuilder$Mu<E>, $Trigger<E>>>): $OneShot<E>;
        static instance<E extends $LivingEntity>(): $BehaviorBuilder$Instance<E>;
        static sequence<E extends $LivingEntity>(predicateTrigger: $Trigger_<E>, trigger: $Trigger_<E>): $OneShot<E>;
        static unbox<E extends $LivingEntity, M>(app: $App<$BehaviorBuilder$Mu<E>, M>): $BehaviorBuilder<E, M>;
    }
    export class $BehaviorBuilder$Instance$Mu<E extends $LivingEntity> implements $Applicative$Mu {
    }
    export class $Trigger<E extends $LivingEntity> {
    }
    export interface $Trigger<E extends $LivingEntity> {
        trigger(level: $ServerLevel, entity: E, gameTime: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Trigger}.
     */
    export type $Trigger_<E> = ((arg0: $ServerLevel, arg1: E, arg2: number) => boolean);
    export class $MemoryCondition$Present<Value> extends $Record implements $MemoryCondition<$IdF$Mu, Value> {
        createAccessor(arg0: $Brain<never>, arg1: (Value) | undefined): $MemoryAccessor<$IdF$Mu, Value>;
        memory(): $MemoryModuleType<Value>;
        condition(): $MemoryStatus;
        constructor(arg0: $MemoryModuleType_<Value>);
    }
    /**
     * Values that may be interpreted as {@link $MemoryCondition$Present}.
     */
    export type $MemoryCondition$Present_<Value> = { memory?: $MemoryModuleType_<any>,  } | [memory?: $MemoryModuleType_<any>, ];
    export class $MemoryCondition$Absent<Value> extends $Record implements $MemoryCondition<$Const$Mu<$Unit>, Value> {
        createAccessor(arg0: $Brain<never>, arg1: (Value) | undefined): $MemoryAccessor<$Const$Mu<$Unit>, Value>;
        memory(): $MemoryModuleType<Value>;
        condition(): $MemoryStatus;
        constructor(arg0: $MemoryModuleType_<Value>);
    }
    /**
     * Values that may be interpreted as {@link $MemoryCondition$Absent}.
     */
    export type $MemoryCondition$Absent_<Value> = { memory?: $MemoryModuleType_<any>,  } | [memory?: $MemoryModuleType_<any>, ];
    export class $BehaviorBuilder$TriggerWithResult<E extends $LivingEntity, R> {
    }
    export interface $BehaviorBuilder$TriggerWithResult<E extends $LivingEntity, R> {
    }
    export class $BehaviorBuilder$Constant<E extends $LivingEntity, A> extends $BehaviorBuilder<E, A> {
    }
    export class $MemoryAccessor<F extends $K1, Value> {
        setOrErase(memory: (Value) | undefined): void;
        setWithExpiry(memory: Value, expiry: number): void;
        value(): $App<F, Value>;
        set(value: Value): void;
        erase(): void;
        constructor(brain: $Brain<never>, memoryType: $MemoryModuleType_<Value>, value: $App<F, Value>);
        set orErase(value: (Value) | undefined);
    }
}
