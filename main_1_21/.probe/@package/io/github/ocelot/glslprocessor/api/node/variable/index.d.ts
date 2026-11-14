import { $Stream } from "@package/java/util/stream";
import { $GlslFunctionNode } from "@package/io/github/ocelot/glslprocessor/api/node/function";
import { $GlslTypeQualifier, $GlslSpecifiedType, $GlslStructSpecifier, $GlslType_ } from "@package/io/github/ocelot/glslprocessor/api/grammar";
import { $Collection_, $List } from "@package/java/util";
import { $GlslNode, $GlslRootNode, $GlslNodeList, $GlslNodeType } from "@package/io/github/ocelot/glslprocessor/api/node";
import { $GlslNodeVisitor } from "@package/io/github/ocelot/glslprocessor/api/visitor";

declare module "@package/io/github/ocelot/glslprocessor/api/node/variable" {
    export class $GlslGetArrayNode implements $GlslNode {
        setExpression(arg0: $GlslNode): $GlslGetArrayNode;
        getNodeType(): $GlslNodeType;
        stream(): $Stream<$GlslNode>;
        getIndex(): $GlslNode;
        visit(arg0: $GlslNodeVisitor): void;
        setIndex(arg0: $GlslNode): $GlslGetArrayNode;
        getExpression(): $GlslNode;
        setBody(...arg0: $GlslNode[]): boolean;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        getBody(): $GlslNodeList;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        toSourceString(): string;
        constructor(arg0: $GlslNode, arg1: $GlslNode);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslVariableNode implements $GlslNode {
        getNodeType(): $GlslNodeType;
        getName(): string;
        stream(): $Stream<$GlslNode>;
        setName(arg0: string): $GlslVariableNode;
        visit(arg0: $GlslNodeVisitor): void;
        setBody(...arg0: $GlslNode[]): boolean;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        getBody(): $GlslNodeList;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        toSourceString(): string;
        constructor(arg0: string);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslStructDeclarationNode implements $GlslRootNode {
        setSpecifiedType(arg0: $GlslSpecifiedType): $GlslStructDeclarationNode;
        getStructSpecifier(): $GlslStructSpecifier;
        getSpecifiedType(): $GlslSpecifiedType;
        getNodeType(): $GlslNodeType;
        getName(): string;
        stream(): $Stream<$GlslNode>;
        setName(arg0: string): $GlslStructDeclarationNode;
        visit(arg0: $GlslNodeVisitor): void;
        isDeclaration(): boolean;
        asDeclaration(): $GlslVariableDeclarationNode;
        asStruct(): $GlslStructDeclarationNode;
        asField(): $GlslNewFieldNode;
        isStruct(): boolean;
        isField(): boolean;
        asFunction(): $GlslFunctionNode;
        isFunction(): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        getBody(): $GlslNodeList;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        toSourceString(): string;
        constructor(arg0: $GlslSpecifiedType);
        get structSpecifier(): $GlslStructSpecifier;
        get nodeType(): $GlslNodeType;
        get declaration(): boolean;
        get struct(): boolean;
        get field(): boolean;
        get function(): boolean;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslGetFieldNode implements $GlslNode {
        setFieldSelection(arg0: string): $GlslGetFieldNode;
        setExpression(arg0: $GlslNode): $GlslGetFieldNode;
        getFieldSelection(): string;
        getNodeType(): $GlslNodeType;
        stream(): $Stream<$GlslNode>;
        visit(arg0: $GlslNodeVisitor): void;
        getExpression(): $GlslNode;
        setBody(...arg0: $GlslNode[]): boolean;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        getBody(): $GlslNodeList;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        toSourceString(): string;
        constructor(arg0: $GlslNode, arg1: string);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslNewFieldNode implements $GlslRootNode {
        setInitializer(arg0: $GlslNode): $GlslNewFieldNode;
        getInitializer(): $GlslNode;
        getNodeType(): $GlslNodeType;
        getName(): string;
        stream(): $Stream<$GlslNode>;
        setName(arg0: string): $GlslNewFieldNode;
        getType(): $GlslSpecifiedType;
        visit(arg0: $GlslNodeVisitor): void;
        setType(arg0: $GlslType_): $GlslNewFieldNode;
        isDeclaration(): boolean;
        asDeclaration(): $GlslVariableDeclarationNode;
        asStruct(): $GlslStructDeclarationNode;
        asField(): $GlslNewFieldNode;
        isStruct(): boolean;
        isField(): boolean;
        asFunction(): $GlslFunctionNode;
        isFunction(): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        getBody(): $GlslNodeList;
        toList(): $List<$GlslNode>;
        toSourceString(): string;
        constructor(arg0: $GlslType_, arg1: string, arg2: $GlslNode);
        get nodeType(): $GlslNodeType;
        get declaration(): boolean;
        get struct(): boolean;
        get field(): boolean;
        get function(): boolean;
    }
    export class $GlslVariableDeclarationNode implements $GlslRootNode {
        getTypeQualifiers(): $List<$GlslTypeQualifier>;
        getNodeType(): $GlslNodeType;
        getNames(): $List<string>;
        getName(): string;
        stream(): $Stream<$GlslNode>;
        setName(arg0: string): $GlslRootNode;
        visit(arg0: $GlslNodeVisitor): void;
        isDeclaration(): boolean;
        asDeclaration(): $GlslVariableDeclarationNode;
        asStruct(): $GlslStructDeclarationNode;
        asField(): $GlslNewFieldNode;
        isStruct(): boolean;
        isField(): boolean;
        asFunction(): $GlslFunctionNode;
        isFunction(): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        getBody(): $GlslNodeList;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        toSourceString(): string;
        constructor(arg0: $Collection_<$GlslTypeQualifier>, arg1: $Collection_<string>);
        get typeQualifiers(): $List<$GlslTypeQualifier>;
        get nodeType(): $GlslNodeType;
        get names(): $List<string>;
        get declaration(): boolean;
        get struct(): boolean;
        get field(): boolean;
        get function(): boolean;
        get type(): $GlslSpecifiedType;
    }
}
