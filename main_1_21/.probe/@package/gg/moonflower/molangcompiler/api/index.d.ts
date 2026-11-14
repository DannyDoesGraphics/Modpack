import { $Supplier_, $BooleanSupplier_ } from "@package/java/util/function";
import { $MolangVariable, $MolangJavaFunction_, $MolangVariableProvider_ } from "@package/gg/moonflower/molangcompiler/api/bridge";
import { $MolangObject } from "@package/gg/moonflower/molangcompiler/api/object";
import { $Collection } from "@package/java/util";
export * as bridge from "@package/gg/moonflower/molangcompiler/api/bridge";
export * as object from "@package/gg/moonflower/molangcompiler/api/object";

declare module "@package/gg/moonflower/molangcompiler/api" {
    export class $MolangExpression {
        static of(arg0: $Supplier_<number>): $MolangExpression;
        static of(arg0: $BooleanSupplier_): $MolangExpression;
        static of(arg0: number): $MolangExpression;
        static of(arg0: $MolangVariable): $MolangExpression;
        static of(...arg0: $MolangExpression_[]): $MolangExpression;
        static of(arg0: boolean): $MolangExpression;
        static "function"(arg0: $MolangJavaFunction_): $MolangExpression;
        static "function"(arg0: number, arg1: $MolangJavaFunction_): $MolangExpression;
        static lazy(arg0: $Supplier_<number>): $MolangExpression;
        static lazy(arg0: $BooleanSupplier_): $MolangExpression;
        static ZERO: $MolangExpression;
    }
    export interface $MolangExpression {
        /**
         * @deprecated
         */
        safeResolve(arg0: $MolangEnvironment): number;
        get(arg0: $MolangEnvironment): number;
        /**
         * @deprecated
         */
        resolve(arg0: $MolangEnvironment): number;
        getCopy(): $MolangExpression;
        isConstant(): boolean;
        getConstant(): number;
        get copy(): $MolangExpression;
    }
    /**
     * Values that may be interpreted as {@link $MolangExpression}.
     */
    export type $MolangExpression_ = ((arg0: $MolangEnvironment) => number);
    export class $MolangEnvironmentBuilder<V extends $MolangEnvironment> {
    }
    export interface $MolangEnvironmentBuilder<V extends $MolangEnvironment> {
        unloadLibrary(arg0: string): $MolangEnvironmentBuilder<V>;
        removeQuery(arg0: string): $MolangEnvironmentBuilder<V>;
        removeGlobal(arg0: string): $MolangEnvironmentBuilder<V>;
        removeVariable(arg0: string): $MolangEnvironmentBuilder<V>;
        clearLibraries(): $MolangEnvironmentBuilder<V>;
        clearGlobal(): $MolangEnvironmentBuilder<V>;
        clearVariable(): $MolangEnvironmentBuilder<V>;
        clearQuery(): $MolangEnvironmentBuilder<V>;
        setQuery(arg0: string, arg1: number): $MolangEnvironmentBuilder<V>;
        setQuery(arg0: string, arg1: number, arg2: $MolangJavaFunction_): $MolangEnvironmentBuilder<V>;
        setQuery(arg0: string, arg1: $Supplier_<number>): $MolangEnvironmentBuilder<V>;
        setQuery(arg0: string, arg1: $MolangExpression_): $MolangEnvironmentBuilder<V>;
        loadLibrary(arg0: string, arg1: $MolangObject): $MolangEnvironmentBuilder<V>;
        copy(arg0: $MolangEnvironment): $MolangEnvironmentBuilder<V>;
        create(): V;
        create(arg0: number): V;
        setVariable(arg0: string, arg1: number): $MolangEnvironmentBuilder<V>;
        setVariable(arg0: string, arg1: $MolangExpression_): $MolangEnvironmentBuilder<V>;
        setVariable(arg0: string, arg1: $Supplier_<number>): $MolangEnvironmentBuilder<V>;
        setVariable(arg0: string, arg1: $MolangVariable): $MolangEnvironmentBuilder<V>;
        setVariables(arg0: $MolangVariableProvider_): $MolangEnvironmentBuilder<V>;
        setGlobal(arg0: string, arg1: $Supplier_<number>): $MolangEnvironmentBuilder<V>;
        setGlobal(arg0: string, arg1: $MolangExpression_): $MolangEnvironmentBuilder<V>;
        setGlobal(arg0: string, arg1: number): $MolangEnvironmentBuilder<V>;
        setGlobal(arg0: string, arg1: number, arg2: $MolangJavaFunction_): $MolangEnvironmentBuilder<V>;
        set variables(value: $MolangVariableProvider_);
    }
    export class $MolangEnvironment {
        static immutable(arg0: $MolangEnvironment): $MolangEnvironment;
    }
    export interface $MolangEnvironment {
        getThis(): number;
        safeResolve(arg0: $MolangExpression_): number;
        getObjects(): $Collection<string>;
        loadAlias(arg0: string, arg1: string, ...arg2: string[]): void;
        loadParameter(arg0: number): void;
        clearParameters(): void;
        hasParameter(arg0: number): boolean;
        setThisValue(arg0: number): void;
        edit(): $MolangEnvironmentBuilder<$MolangEnvironment>;
        get(arg0: string): $MolangObject;
        loadLibrary(arg0: string, arg1: $MolangObject, ...arg2: string[]): void;
        loadLibrary(arg0: string, arg1: $MolangObject): void;
        resolve(arg0: $MolangExpression_): number;
        copy(): $MolangEnvironment;
        getParameters(): number;
        has(arg0: string): boolean;
        getParameter(arg0: number): number;
        canEdit(): boolean;
        get this(): number;
        get objects(): $Collection<string>;
        set thisValue(value: number);
        get parameters(): number;
    }
}
