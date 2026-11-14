import { $Consumer_ } from "@package/java/util/function";
import { $FormattedText } from "@package/net/minecraft/network/chat";
import { $PageCompiler } from "@package/guideme/compiler";
import { $LytErrorSink } from "@package/guideme/document";
import { $LytVisitor } from "@package/guideme/document/block";
import { $UnistNode } from "@package/guideme/libs/unist";
import { $ResolvedTextStyle_, $Styleable, $TextStyle_, $TextStyle$Builder, $ResolvedTextStyle, $TextStyle } from "@package/guideme/style";

declare module "@package/guideme/document/flow" {
    export class $LytFlowContent implements $Styleable {
        getFlowParent(): $LytFlowContent;
        isInclusiveAncestor(arg0: $LytFlowContent): boolean;
        getHoverStyle(): $TextStyle;
        setHoverStyle(arg0: $TextStyle_): void;
        getStylingParent(): $Styleable;
        getParent(): $LytFlowParent;
        visit(arg0: $LytVisitor): void;
        setParent(arg0: $LytFlowParent_): void;
        getStyle(): $TextStyle;
        setStyle(arg0: $TextStyle_): void;
        modifyStyle(arg0: $Consumer_<$TextStyle$Builder>): void;
        modifyHoverStyle(arg0: $Consumer_<$TextStyle$Builder>): void;
        resolveStyle(): $ResolvedTextStyle;
        resolveHoverStyle(arg0: $ResolvedTextStyle_): $ResolvedTextStyle;
        constructor();
        get flowParent(): $LytFlowContent;
        get stylingParent(): $Styleable;
    }
    export class $LytFlowText extends $LytFlowContent {
        static of(arg0: string): $LytFlowText;
        getText(): string;
        setText(arg0: string): void;
        constructor();
    }
    export class $LytFlowParent {
    }
    export interface $LytFlowParent extends $LytErrorSink {
        appendBreak(): void;
        appendError(arg0: $PageCompiler, arg1: string, arg2: $UnistNode): void;
        append(arg0: $LytFlowContent): void;
        appendText(arg0: string): $LytFlowText;
        appendComponent(arg0: $FormattedText): void;
    }
    /**
     * Values that may be interpreted as {@link $LytFlowParent}.
     */
    export type $LytFlowParent_ = ((arg0: $LytFlowContent) => void);
}
