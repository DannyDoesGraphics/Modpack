import { $Consumer_, $Supplier_ } from "@package/java/util/function";
import { $MolangExpression_ } from "@package/gg/moonflower/molangcompiler/api";
import { $Record } from "@package/java/lang";

declare module "@package/gg/moonflower/molangcompiler/api/bridge" {
    export class $MolangJavaFunction {
    }
    export interface $MolangJavaFunction {
        resolve(arg0: $MolangJavaFunction$Context_): number;
    }
    /**
     * Values that may be interpreted as {@link $MolangJavaFunction}.
     */
    export type $MolangJavaFunction_ = ((arg0: $MolangJavaFunction$Context) => number);
    export class $MolangJavaFunction$Context extends $Record {
        get(arg0: number): number;
        getParameters(): number;
        parameters(): number[];
        constructor(parameters: number[]);
    }
    /**
     * Values that may be interpreted as {@link $MolangJavaFunction$Context}.
     */
    export type $MolangJavaFunction$Context_ = { parameters?: number[],  } | [parameters?: number[], ];
    export class $MolangVariableProvider$Context {
    }
    export interface $MolangVariableProvider$Context {
        removeQuery(arg0: string): void;
        removeVariable(arg0: string): void;
        addVariable(arg0: string, arg1: $MolangVariable): void;
        addQuery(arg0: string, arg1: $Supplier_<number>): void;
        addQuery(arg0: string, arg1: $MolangExpression_): void;
        addQuery(arg0: string, arg1: number, arg2: $MolangJavaFunction_): void;
        addQuery(arg0: string, arg1: number): void;
    }
    export class $MolangVariableProvider {
    }
    export interface $MolangVariableProvider {
        addMolangVariables(arg0: $MolangVariableProvider$Context): void;
    }
    /**
     * Values that may be interpreted as {@link $MolangVariableProvider}.
     */
    export type $MolangVariableProvider_ = ((arg0: $MolangVariableProvider$Context) => void);
    export class $MolangVariable {
        static of(arg0: $Supplier_<number>, arg1: $Consumer_<number>): $MolangVariable;
        static create(): $MolangVariable;
        static create(arg0: number): $MolangVariable;
    }
    export interface $MolangVariable {
        getValue(): number;
        setValue(arg0: number): void;
        copy(): $MolangVariable;
        immutable(): $MolangVariable;
    }
}
