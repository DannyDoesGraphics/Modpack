import { $MdAstNode } from "@package/guideme/libs/mdast/model";
import { $Enum } from "@package/java/lang";
export * as model from "@package/guideme/libs/mdast/model";
export * as mdx from "@package/guideme/libs/mdast/mdx";

declare module "@package/guideme/libs/mdast" {
    export class $MdAstVisitor$Result extends $Enum<$MdAstVisitor$Result> {
        static values(): $MdAstVisitor$Result[];
        static valueOf(arg0: string): $MdAstVisitor$Result;
        static CONTINUE: $MdAstVisitor$Result;
        static STOP: $MdAstVisitor$Result;
        static SKIP_CHILDREN: $MdAstVisitor$Result;
    }
    /**
     * Values that may be interpreted as {@link $MdAstVisitor$Result}.
     */
    export type $MdAstVisitor$Result_ = "continue" | "skip_children" | "stop";
    export class $MdAstVisitor {
    }
    export interface $MdAstVisitor {
        beforeNode(arg0: $MdAstNode): $MdAstVisitor$Result;
        afterNode(arg0: $MdAstNode): $MdAstVisitor$Result;
        text(arg0: string): void;
    }
}
