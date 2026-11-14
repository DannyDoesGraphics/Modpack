import { $GlslVariableDeclarationNode, $GlslStructDeclarationNode, $GlslGetFieldNode, $GlslNewFieldNode, $GlslGetArrayNode, $GlslVariableNode } from "@package/io/github/ocelot/glslprocessor/api/node/variable";
import { $GlslPrimitiveConstructorNode, $GlslInvokeFunctionNode } from "@package/io/github/ocelot/glslprocessor/api/node/function";
import { $GlslConstantNode } from "@package/io/github/ocelot/glslprocessor/api/node/constant";
import { $GlslJumpNode_, $GlslCaseLabelNode, $GlslSwitchNode, $GlslIfNode, $GlslForLoopNode, $GlslWhileLoopNode, $GlslReturnNode } from "@package/io/github/ocelot/glslprocessor/api/node/branch";
import { $GlslUnaryNode, $GlslAssignmentNode, $GlslPrecisionNode, $GlslCompareNode, $GlslBitwiseNode, $GlslConditionalNode, $GlslOperationNode } from "@package/io/github/ocelot/glslprocessor/api/node/expression";

declare module "@package/io/github/ocelot/glslprocessor/api/visitor" {
    export class $GlslNodeVisitor {
        visitForLoop(arg0: $GlslForLoopNode): $GlslNodeVisitor;
        visitForLoopEnd(arg0: $GlslForLoopNode): void;
        visitWhileLoop(arg0: $GlslWhileLoopNode): $GlslNodeVisitor;
        visitWhileLoopEnd(arg0: $GlslWhileLoopNode): void;
        visitJump(arg0: $GlslJumpNode_): void;
        visitReturn(arg0: $GlslReturnNode): void;
        visitIf(arg0: $GlslIfNode): $GlslIfVisitor;
        visitSwitch(arg0: $GlslSwitchNode): $GlslSwitchVisitor;
        visitBitwise(arg0: $GlslBitwiseNode): $GlslBitwiseVisitor;
        visitAssign(arg0: $GlslAssignmentNode): void;
        visitCompare(arg0: $GlslCompareNode): void;
        visitCondition(arg0: $GlslConditionalNode): void;
        visitPrecision(arg0: $GlslPrecisionNode): void;
        visitUnary(arg0: $GlslUnaryNode): void;
        visitFunctionInvocation(arg0: $GlslInvokeFunctionNode): $GlslInvokeVisitor;
        visitPrimitiveConstructor(arg0: $GlslPrimitiveConstructorNode): void;
        visitVariableDeclaration(arg0: $GlslVariableDeclarationNode): void;
        visitGetArray(arg0: $GlslGetArrayNode): void;
        visitGetField(arg0: $GlslGetFieldNode): void;
        visitNewField(arg0: $GlslNewFieldNode): void;
        visitStructDeclaration(arg0: $GlslStructDeclarationNode): void;
        visitVariable(arg0: $GlslVariableNode): void;
        visitOperation(arg0: $GlslOperationNode): void;
        visitConstant(arg0: $GlslConstantNode): void;
        constructor(arg0: $GlslNodeVisitor);
        constructor();
    }
    export class $GlslSwitchVisitor {
        visitSwitchEnd(arg0: $GlslSwitchNode): void;
        visitLabel(arg0: $GlslCaseLabelNode): $GlslNodeVisitor;
        constructor();
        constructor(arg0: $GlslSwitchVisitor);
    }
    export class $GlslBitwiseVisitor {
        visitNode(arg0: number): $GlslNodeVisitor;
        visitBitwiseExpressionEnd(arg0: $GlslBitwiseNode): void;
        constructor(arg0: $GlslBitwiseVisitor);
        constructor();
    }
    export class $GlslInvokeVisitor {
        visitHeader(): void;
        visitInvokeEnd(arg0: $GlslInvokeFunctionNode): void;
        visitParameter(arg0: number): $GlslNodeVisitor;
        constructor(arg0: $GlslInvokeVisitor);
        constructor();
    }
    export class $GlslIfVisitor {
        visitIf(): $GlslNodeVisitor;
        visitElse(): $GlslNodeVisitor;
        visitIfEnd(arg0: $GlslIfNode): void;
        constructor(arg0: $GlslIfVisitor);
        constructor();
    }
}
