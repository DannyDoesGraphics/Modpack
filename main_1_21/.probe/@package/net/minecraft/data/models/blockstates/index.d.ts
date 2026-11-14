import { $JsonElement, $JsonObject_ } from "@package/com/google/gson";
import { $Function_, $BiFunction_, $Supplier } from "@package/java/util/function";
import { $Property, $Property$Value_ } from "@package/net/minecraft/world/level/block/state/properties";
import { $StateDefinition } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Enum, $Comparable } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";

declare module "@package/net/minecraft/data/models/blockstates" {
    export class $MultiPartGenerator$Entry implements $Supplier<$JsonElement> {
    }
    export class $PropertyDispatch {
        static properties<T1 extends $Comparable<T1>, T2 extends $Comparable<T2>, T3 extends $Comparable<T3>, T4 extends $Comparable<T4>, T5 extends $Comparable<T5>>(property1: $Property<T1>, property2: $Property<T2>, property3: $Property<T3>, property4: $Property<T4>, property5: $Property<T5>): $PropertyDispatch$C5<T1, T2, T3, T4, T5>;
        static properties<T1 extends $Comparable<T1>, T2 extends $Comparable<T2>>(property1: $Property<T1>, property2: $Property<T2>): $PropertyDispatch$C2<T1, T2>;
        static properties<T1 extends $Comparable<T1>, T2 extends $Comparable<T2>, T3 extends $Comparable<T3>>(property1: $Property<T1>, property2: $Property<T2>, property3: $Property<T3>): $PropertyDispatch$C3<T1, T2, T3>;
        static properties<T1 extends $Comparable<T1>, T2 extends $Comparable<T2>, T3 extends $Comparable<T3>, T4 extends $Comparable<T4>>(property1: $Property<T1>, property2: $Property<T2>, property3: $Property<T3>, property4: $Property<T4>): $PropertyDispatch$C4<T1, T2, T3, T4>;
        static property<T1 extends $Comparable<T1>>(property1: $Property<T1>): $PropertyDispatch$C1<T1>;
        constructor();
    }
    export class $Condition$TerminalCondition implements $Condition {
        negatedTerm<T extends $Comparable<T>>(property: $Property<T>, firstValue: T, ...additionalValues: T[]): $Condition$TerminalCondition;
        negatedTerm<T extends $Comparable<T>>(property: $Property<T>, value: T): $Condition$TerminalCondition;
        validate(stateDefinition: $StateDefinition<never, never>): void;
        term<T extends $Comparable<T>>(property: $Property<T>, value: T): $Condition$TerminalCondition;
        term<T extends $Comparable<T>>(property: $Property<T>, firstValue: T, ...additionalValues: T[]): $Condition$TerminalCondition;
        get(): $JsonElement;
        constructor();
    }
    export class $PropertyDispatch$PentaFunction<P1, P2, P3, P4, P5, R> {
    }
    export interface $PropertyDispatch$PentaFunction<P1, P2, P3, P4, P5, R> {
        apply(p1: P1, p2: P2, p3: P3, p4: P4, p5: P5): R;
    }
    /**
     * Values that may be interpreted as {@link $PropertyDispatch$PentaFunction}.
     */
    export type $PropertyDispatch$PentaFunction_<P1, P2, P3, P4, P5, R> = ((arg0: P1, arg1: P2, arg2: P3, arg3: P4, arg4: P5) => R);
    export class $VariantProperties$Rotation extends $Enum<$VariantProperties$Rotation> {
        static values(): $VariantProperties$Rotation[];
        static valueOf(arg0: string): $VariantProperties$Rotation;
        static R180: $VariantProperties$Rotation;
        static R90: $VariantProperties$Rotation;
        static R0: $VariantProperties$Rotation;
        static R270: $VariantProperties$Rotation;
    }
    /**
     * Values that may be interpreted as {@link $VariantProperties$Rotation}.
     */
    export type $VariantProperties$Rotation_ = "r0" | "r90" | "r180" | "r270";
    export class $Variant implements $Supplier<$JsonElement> {
        get(): $JsonElement;
        static merge(definition1: $Variant, definition2: $Variant): $Variant;
        "with"<T>(property: $VariantProperty<T>, value: T): $Variant;
        static variant(): $Variant;
        static convertList(definitions: $List_<$Variant>): $JsonElement;
        constructor();
    }
    export class $VariantProperties {
        static Y_ROT: $VariantProperty<$VariantProperties$Rotation>;
        static X_ROT: $VariantProperty<$VariantProperties$Rotation>;
        static UV_LOCK: $VariantProperty<boolean>;
        static MODEL: $VariantProperty<$ResourceLocation>;
        static WEIGHT: $VariantProperty<number>;
        constructor();
    }
    export class $Selector {
        extend(value: $Property$Value_<never>): $Selector;
        extend(selector: $Selector): $Selector;
        static of(...values: $Property$Value_<never>[]): $Selector;
        getKey(): string;
        static empty(): $Selector;
        get key(): string;
    }
    export class $Condition$CompositeCondition implements $Condition {
        validate(stateDefinition: $StateDefinition<never, never>): void;
        get(): $JsonElement;
    }
    export class $VariantProperty<T> {
        withValue(value: T): $VariantProperty$Value;
        constructor(key: string, serializer: $Function_<T, $JsonElement>);
    }
    export class $Condition {
        static condition(): $Condition$TerminalCondition;
        static or(...conditions: $Condition[]): $Condition;
        static and(...conditions: $Condition[]): $Condition;
    }
    export interface $Condition extends $Supplier<$JsonElement> {
        validate(stateDefinition: $StateDefinition<never, never>): void;
    }
    export class $PropertyDispatch$QuadFunction<P1, P2, P3, P4, R> {
    }
    export interface $PropertyDispatch$QuadFunction<P1, P2, P3, P4, R> {
        apply(p1: P1, p2: P2, p3: P3, p4: P4): R;
    }
    /**
     * Values that may be interpreted as {@link $PropertyDispatch$QuadFunction}.
     */
    export type $PropertyDispatch$QuadFunction_<P1, P2, P3, P4, R> = ((arg0: P1, arg1: P2, arg2: P3, arg3: P4) => R);
    export class $PropertyDispatch$TriFunction<P1, P2, P3, R> {
    }
    export interface $PropertyDispatch$TriFunction<P1, P2, P3, R> {
        apply(p1: P1, p2: P2, p3: P3): R;
    }
    /**
     * Values that may be interpreted as {@link $PropertyDispatch$TriFunction}.
     */
    export type $PropertyDispatch$TriFunction_<P1, P2, P3, R> = ((arg0: P1, arg1: P2, arg2: P3) => R);
    export class $BlockStateGenerator {
    }
    export interface $BlockStateGenerator extends $Supplier<$JsonElement> {
        getBlock(): $Block;
        get block(): $Block;
    }
    export class $VariantProperty$Value {
        addToVariant(jsonObject: $JsonObject_): void;
        getKey(): $VariantProperty<T>;
        get key(): $VariantProperty<T>;
    }
    export class $Condition$Operation extends $Enum<$Condition$Operation> {
        static values(): $Condition$Operation[];
        static valueOf(arg0: string): $Condition$Operation;
        static OR: $Condition$Operation;
        static AND: $Condition$Operation;
    }
    /**
     * Values that may be interpreted as {@link $Condition$Operation}.
     */
    export type $Condition$Operation_ = "and" | "or";
    export class $MultiPartGenerator$ConditionalEntry extends $MultiPartGenerator$Entry {
    }
    export class $MultiVariantGenerator implements $BlockStateGenerator {
        static multiVariant(block: $Block_): $MultiVariantGenerator;
        static multiVariant(block: $Block_, variant: $Variant): $MultiVariantGenerator;
        static multiVariant(block: $Block_, ...variants: $Variant[]): $MultiVariantGenerator;
        getBlock(): $Block;
        "with"(propertyDispatch: $PropertyDispatch): $MultiVariantGenerator;
        get(): $JsonElement;
        get block(): $Block;
    }
    export class $PropertyDispatch$C4<T1 extends $Comparable<T1>, T2 extends $Comparable<T2>, T3 extends $Comparable<T3>, T4 extends $Comparable<T4>> extends $PropertyDispatch {
        getDefinedProperties(): $List<$Property<never>>;
        generateList(propertyValuesToVariantMapper: $PropertyDispatch$QuadFunction_<T1, T2, T3, T4, $List<$Variant>>): $PropertyDispatch;
        generate(propertyValuesToVariantMapper: $PropertyDispatch$QuadFunction_<T1, T2, T3, T4, $Variant>): $PropertyDispatch;
        select(property1Value: T1, property2Value: T2, property3Value: T3, property4Value: T4, variants: $List_<$Variant>): $PropertyDispatch$C4<T1, T2, T3, T4>;
        select(property1Value: T1, property2Value: T2, property3Value: T3, property4Value: T4, variant: $Variant): $PropertyDispatch$C4<T1, T2, T3, T4>;
        get definedProperties(): $List<$Property<never>>;
    }
    export class $PropertyDispatch$C3<T1 extends $Comparable<T1>, T2 extends $Comparable<T2>, T3 extends $Comparable<T3>> extends $PropertyDispatch {
        getDefinedProperties(): $List<$Property<never>>;
        generateList(propertyValuesToVariantMapper: $PropertyDispatch$TriFunction_<T1, T2, T3, $List<$Variant>>): $PropertyDispatch;
        generate(propertyValuesToVariantMapper: $PropertyDispatch$TriFunction_<T1, T2, T3, $Variant>): $PropertyDispatch;
        select(property1Value: T1, property2Value: T2, property3Value: T3, variants: $List_<$Variant>): $PropertyDispatch$C3<T1, T2, T3>;
        select(property1Value: T1, property2Value: T2, property3Value: T3, variant: $Variant): $PropertyDispatch$C3<T1, T2, T3>;
        get definedProperties(): $List<$Property<never>>;
    }
    export class $PropertyDispatch$C2<T1 extends $Comparable<T1>, T2 extends $Comparable<T2>> extends $PropertyDispatch {
        getDefinedProperties(): $List<$Property<never>>;
        generateList(propertyValuesToVariantMapper: $BiFunction_<T1, T2, $List<$Variant>>): $PropertyDispatch;
        generate(propertyValuesToVariantMapper: $BiFunction_<T1, T2, $Variant>): $PropertyDispatch;
        select(property1Value: T1, property2Value: T2, variants: $List_<$Variant>): $PropertyDispatch$C2<T1, T2>;
        select(property1Value: T1, property2Value: T2, variant: $Variant): $PropertyDispatch$C2<T1, T2>;
        get definedProperties(): $List<$Property<never>>;
    }
    export class $PropertyDispatch$C1<T1 extends $Comparable<T1>> extends $PropertyDispatch {
        getDefinedProperties(): $List<$Property<never>>;
        generateList(propertyValueToVariantMapper: $Function_<T1, $List<$Variant>>): $PropertyDispatch;
        generate(propertyValueToVariantMapper: $Function_<T1, $Variant>): $PropertyDispatch;
        select(propertyValue: T1, variants: $List_<$Variant>): $PropertyDispatch$C1<T1>;
        select(propertyValue: T1, variant: $Variant): $PropertyDispatch$C1<T1>;
        get definedProperties(): $List<$Property<never>>;
    }
    export class $PropertyDispatch$C5<T1 extends $Comparable<T1>, T2 extends $Comparable<T2>, T3 extends $Comparable<T3>, T4 extends $Comparable<T4>, T5 extends $Comparable<T5>> extends $PropertyDispatch {
        getDefinedProperties(): $List<$Property<never>>;
        generateList(propertyValuesToVariantMapper: $PropertyDispatch$PentaFunction_<T1, T2, T3, T4, T5, $List<$Variant>>): $PropertyDispatch;
        generate(propertyValuesToVariantMapper: $PropertyDispatch$PentaFunction_<T1, T2, T3, T4, T5, $Variant>): $PropertyDispatch;
        select(property1Value: T1, property2Value: T2, property3Value: T3, property4Value: T4, property5Value: T5, variants: $List_<$Variant>): $PropertyDispatch$C5<T1, T2, T3, T4, T5>;
        select(property1Value: T1, property2Value: T2, property3Value: T3, property4Value: T4, property5Value: T5, variant: $Variant): $PropertyDispatch$C5<T1, T2, T3, T4, T5>;
        get definedProperties(): $List<$Property<never>>;
    }
    export class $MultiPartGenerator implements $BlockStateGenerator {
        static multiPart(block: $Block_): $MultiPartGenerator;
        getBlock(): $Block;
        get(): $JsonElement;
        "with"(condition: $Condition, variant: $Variant): $MultiPartGenerator;
        "with"(condition: $Condition, ...variants: $Variant[]): $MultiPartGenerator;
        "with"(variants: $List_<$Variant>): $MultiPartGenerator;
        "with"(variant: $Variant): $MultiPartGenerator;
        "with"(condition: $Condition, variants: $List_<$Variant>): $MultiPartGenerator;
        get block(): $Block;
    }
}
