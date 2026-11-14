import { $GlslNewFieldNode, $GlslVariableDeclarationNode, $GlslStructDeclarationNode } from "@package/io/github/ocelot/glslprocessor/api/node/variable";
import { $Stream } from "@package/java/util/stream";
import { $GlslSpecifiedType, $GlslParameterDeclaration, $GlslFunctionHeader, $GlslTypeSpecifier, $GlslTypeSpecifier_ } from "@package/io/github/ocelot/glslprocessor/api/grammar";
import { $Collection_, $List } from "@package/java/util";
import { $GlslNode, $GlslRootNode, $GlslNodeList, $GlslNodeType } from "@package/io/github/ocelot/glslprocessor/api/node";
import { $GlslNodeVisitor } from "@package/io/github/ocelot/glslprocessor/api/visitor";

declare module "@package/io/github/ocelot/glslprocessor/api/node/function" {
    export class $GlslFunctionNode implements $GlslRootNode {
        setHeader(arg0: $GlslFunctionHeader): void;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        getNodeType(): $GlslNodeType;
        getBody(): $GlslNodeList;
        getName(): string;
        stream(): $Stream<$GlslNode>;
        getReturnType(): $GlslSpecifiedType;
        getParameters(): $List<$GlslParameterDeclaration>;
        visit(arg0: $GlslNodeVisitor): void;
        getHeader(): $GlslFunctionHeader;
        isDeclaration(): boolean;
        asDeclaration(): $GlslVariableDeclarationNode;
        asStruct(): $GlslStructDeclarationNode;
        asField(): $GlslNewFieldNode;
        isStruct(): boolean;
        isField(): boolean;
        asFunction(): $GlslFunctionNode;
        isFunction(): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        toSourceString(): string;
        setName(arg0: string): $GlslRootNode;
        constructor(arg0: $GlslFunctionHeader, arg1: $Collection_<$GlslNode>);
        get nodeType(): $GlslNodeType;
        get returnType(): $GlslSpecifiedType;
        get parameters(): $List<$GlslParameterDeclaration>;
        get declaration(): boolean;
        get struct(): boolean;
        get field(): boolean;
        get function(): boolean;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslInvokeFunctionNode implements $GlslNode {
        setHeader(arg0: $GlslNode): void;
        getNodeType(): $GlslNodeType;
        stream(): $Stream<$GlslNode>;
        getParameters(): $List<$GlslNode>;
        visit(arg0: $GlslNodeVisitor): void;
        getHeader(): $GlslNode;
        setBody(...arg0: $GlslNode[]): boolean;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        getBody(): $GlslNodeList;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        toSourceString(): string;
        constructor(arg0: $GlslNode, arg1: $Collection_<$GlslNode>);
        get nodeType(): $GlslNodeType;
        get parameters(): $List<$GlslNode>;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslPrimitiveConstructorNode implements $GlslNode {
        setPrimitiveType(arg0: $GlslTypeSpecifier_): void;
        getPrimitiveType(): $GlslTypeSpecifier;
        getNodeType(): $GlslNodeType;
        stream(): $Stream<$GlslNode>;
        visit(arg0: $GlslNodeVisitor): void;
        setBody(...arg0: $GlslNode[]): boolean;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        getBody(): $GlslNodeList;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        toSourceString(): string;
        constructor(arg0: $GlslTypeSpecifier_);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
}
