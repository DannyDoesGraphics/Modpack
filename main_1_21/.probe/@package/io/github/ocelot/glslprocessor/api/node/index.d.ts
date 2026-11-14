import { $Consumer_, $UnaryOperator_, $IntFunction_, $Predicate_ } from "@package/java/util/function";
import { $GlslVariableDeclarationNode, $GlslStructDeclarationNode, $GlslNewFieldNode } from "@package/io/github/ocelot/glslprocessor/api/node/variable";
import { $Stream } from "@package/java/util/stream";
import { $GlslFunctionNode } from "@package/io/github/ocelot/glslprocessor/api/node/function";
import { $GlslVersionStatement, $GlslSpecifiedType } from "@package/io/github/ocelot/glslprocessor/api/grammar";
import { $GlslIntConstantNode, $GlslDoubleConstantNode, $GlslBoolConstantNode, $GlslFloatConstantNode } from "@package/io/github/ocelot/glslprocessor/api/node/constant";
import { $GlslInjectionPoint_ } from "@package/io/github/ocelot/glslprocessor/api";
import { $Enum, $Object } from "@package/java/lang";
import { $Comparator, $Spliterator, $Iterator, $List, $SequencedCollection, $Map_, $Map, $ListIterator, $Collection_ } from "@package/java/util";
import { $GlslTreeVisitor, $GlslNodeVisitor } from "@package/io/github/ocelot/glslprocessor/api/visitor";
export * as constant from "@package/io/github/ocelot/glslprocessor/api/node/constant";
export * as function from "@package/io/github/ocelot/glslprocessor/api/node/function";
export * as variable from "@package/io/github/ocelot/glslprocessor/api/node/variable";
export * as branch from "@package/io/github/ocelot/glslprocessor/api/node/branch";
export * as expression from "@package/io/github/ocelot/glslprocessor/api/node/expression";

declare module "@package/io/github/ocelot/glslprocessor/api/node" {
    export class $GlslNode {
        static intConstant(arg0: number): $GlslIntConstantNode;
        static unsignedIntConstant(arg0: number): $GlslIntConstantNode;
        static floatConstant(arg0: number): $GlslFloatConstantNode;
        static doubleConstant(arg0: number): $GlslDoubleConstantNode;
        static booleanConstant(arg0: boolean): $GlslBoolConstantNode;
        static compound(arg0: $Collection_<$GlslNode>): $GlslNode;
        static compound(...arg0: $GlslNode[]): $GlslNode;
    }
    export interface $GlslNode {
        setBody(...arg0: $GlslNode[]): boolean;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        getNodeType(): $GlslNodeType;
        getBody(): $GlslNodeList;
        toList(): $List<$GlslNode>;
        stream(): $Stream<$GlslNode>;
        getType(): $GlslSpecifiedType;
        visit(arg0: $GlslNodeVisitor): void;
        toSourceString(): string;
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslRootNode {
    }
    export interface $GlslRootNode extends $GlslNode {
        isDeclaration(): boolean;
        asDeclaration(): $GlslVariableDeclarationNode;
        asStruct(): $GlslStructDeclarationNode;
        asField(): $GlslNewFieldNode;
        isStruct(): boolean;
        getName(): string;
        setName(arg0: string): $GlslRootNode;
        isField(): boolean;
        asFunction(): $GlslFunctionNode;
        isFunction(): boolean;
        get declaration(): boolean;
        get struct(): boolean;
        get field(): boolean;
        get function(): boolean;
    }
    export class $GlslNodeList implements $List<$GlslNode> {
        remove(arg0: $Object): boolean;
        size(): number;
        indexOf(arg0: $Object): number;
        clear(): void;
        lastIndexOf(arg0: $Object): number;
        isEmpty(): boolean;
        replaceAll(arg0: $UnaryOperator_<$GlslNode>): void;
        add(arg0: number, arg1: $GlslNode): void;
        add(arg0: $GlslNode): boolean;
        add(arg0: $GlslInjectionPoint_, arg1: $GlslNode): void;
        subList(arg0: number, arg1: number): $List<$GlslNode>;
        toArray(): $Object[];
        toArray<T>(arg0: T[]): T[];
        iterator(): $Iterator<$GlslNode>;
        contains(arg0: $Object): boolean;
        spliterator(): $Spliterator<$GlslNode>;
        addAll(arg0: $GlslInjectionPoint_, arg1: $Collection_<$GlslNode>): void;
        addAll(arg0: number, arg1: $Collection_<$GlslNode>): boolean;
        addAll(arg0: $Collection_<$GlslNode>): boolean;
        set(arg0: number, arg1: $GlslNode): $GlslNode;
        sort(arg0: $Comparator<$GlslNode>): void;
        removeAll(arg0: $Collection_<never>): boolean;
        retainAll(arg0: $Collection_<never>): boolean;
        listIterator(): $ListIterator<$GlslNode>;
        listIterator(arg0: number): $ListIterator<$GlslNode>;
        containsAll(arg0: $Collection_<never>): boolean;
        getFirst(): $GlslNode;
        getLast(): $GlslNode;
        addFirst(arg0: $GlslNode): void;
        addLast(arg0: $GlslNode): void;
        removeFirst(): $GlslNode;
        removeLast(): $GlslNode;
        toArray<T>(arg0: $IntFunction_<T[]>): T[];
        stream(): $Stream<$GlslNode>;
        removeIf(arg0: $Predicate_<$GlslNode>): boolean;
        parallelStream(): $Stream<$GlslNode>;
        forEach(arg0: $Consumer_<$GlslNode>): void;
        get(arg0: number): $GlslNode;
        reversed(): $SequencedCollection<$GlslNode>;
        constructor();
        constructor(arg0: $Collection_<$GlslNode>);
        [Symbol.iterator](): Iterator<$GlslNode>
        get empty(): boolean;
        get first(): $GlslNode;
        get last(): $GlslNode;
    }
    export class $GlslTree {
        containingBlock(arg0: $GlslNode): ($GlslTree$GlslBlock) | undefined;
        mainFunction(): ($GlslFunctionNode) | undefined;
        markOutputs(): void;
        getVersionStatement(): $GlslVersionStatement;
        searchField(arg0: string): $Stream<$GlslNewFieldNode>;
        getMacros(): $Map<string, string>;
        static stripGLMacros(arg0: $Map_<string, string>): void;
        getBody(): $GlslNodeList;
        field(arg0: string): ($GlslNewFieldNode) | undefined;
        fields(): $Stream<$GlslNewFieldNode>;
        visit(arg0: $GlslTreeVisitor): void;
        functions(): $Stream<$GlslFunctionNode>;
        getMarkers(): $Map<string, $GlslNode>;
        getDirectives(): $List<string>;
        toSourceString(): string;
        constructor(arg0: $GlslVersionStatement, arg1: $Collection_<$GlslNode>, arg2: $Collection_<string>, arg3: $Map_<string, $GlslNode>);
        constructor();
        get versionStatement(): $GlslVersionStatement;
        get macros(): $Map<string, string>;
        get body(): $GlslNodeList;
        get markers(): $Map<string, $GlslNode>;
        get directives(): $List<string>;
    }
    export class $GlslNodeType extends $Enum<$GlslNodeType> {
        static values(): $GlslNodeType[];
        static valueOf(arg0: string): $GlslNodeType;
        static GET_FIELD: $GlslNodeType;
        static ASSIGN: $GlslNodeType;
        static STRUCT_DECLARATION: $GlslNodeType;
        static PRECISION: $GlslNodeType;
        static FOR_LOOP: $GlslNodeType;
        static RETURN: $GlslNodeType;
        static DISCARD: $GlslNodeType;
        static VARIABLE: $GlslNodeType;
        static BREAK: $GlslNodeType;
        static CASE_LABEL: $GlslNodeType;
        static UNARY: $GlslNodeType;
        static INVOKE_FUNCTION: $GlslNodeType;
        static LOGICAL_XOR: $GlslNodeType;
        static OR: $GlslNodeType;
        static LOGICAL_AND: $GlslNodeType;
        static LOGICAL_OR: $GlslNodeType;
        static FUNCTION: $GlslNodeType;
        static IF_ELSE: $GlslNodeType;
        static CONTINUE: $GlslNodeType;
        static CONDITIONAL: $GlslNodeType;
        static VARIABLE_DECLARATION: $GlslNodeType;
        static WHILE_LOOP: $GlslNodeType;
        static BOOL_CONSTANT: $GlslNodeType;
        static OPERATION: $GlslNodeType;
        static INT_CONSTANT: $GlslNodeType;
        static AND: $GlslNodeType;
        static COMPARE: $GlslNodeType;
        static DOUBLE_CONSTANT: $GlslNodeType;
        static NEW_FIELD: $GlslNodeType;
        static SWITCH: $GlslNodeType;
        static XOR: $GlslNodeType;
        static FLOAT_CONSTANT: $GlslNodeType;
        static GET_ARRAY: $GlslNodeType;
        static PRIMITIVE_CONSTRUCTOR: $GlslNodeType;
    }
    /**
     * Values that may be interpreted as {@link $GlslNodeType}.
     */
    export type $GlslNodeType_ = "for_loop" | "while_loop" | "continue" | "break" | "discard" | "return" | "if_else" | "switch" | "case_label" | "and" | "or" | "xor" | "logical_and" | "logical_or" | "logical_xor" | "assign" | "operation" | "compare" | "conditional" | "precision" | "unary" | "function" | "invoke_function" | "primitive_constructor" | "double_constant" | "float_constant" | "int_constant" | "bool_constant" | "variable_declaration" | "get_array" | "get_field" | "new_field" | "struct_declaration" | "variable";
}
