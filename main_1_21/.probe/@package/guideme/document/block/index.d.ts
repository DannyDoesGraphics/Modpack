import { $MdAstNode } from "@package/guideme/libs/mdast/model";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $RenderContext, $SimpleRenderContext } from "@package/guideme/render";
import { $LytRect, $LytErrorSink, $LytRect_ } from "@package/guideme/document";
import { $List } from "@package/java/util";
import { $Styleable, $BorderStyle_, $TextStyle, $ResolvedTextStyle_, $TextStyle_, $BorderStyle, $TextStyle$Builder, $ResolvedTextStyle } from "@package/guideme/style";
import { $Consumer_ } from "@package/java/util/function";
import { $LytFlowContent } from "@package/guideme/document/flow";
import { $LayoutContext } from "@package/guideme/layout";
import { $PageCompiler } from "@package/guideme/compiler";
import { $Enum, $Record } from "@package/java/lang";
import { $UnistNode } from "@package/guideme/libs/unist";
import { $SymbolicColor, $SymbolicColor_ } from "@package/guideme/color";
import { $Vector2i } from "@package/org/joml";

declare module "@package/guideme/document/block" {
    export class $LytDocument$HitTestResult extends $Record {
        node(): $LytNode;
        content(): $LytFlowContent;
        constructor(node: $LytNode, content: $LytFlowContent);
    }
    /**
     * Values that may be interpreted as {@link $LytDocument$HitTestResult}.
     */
    export type $LytDocument$HitTestResult_ = { node?: $LytNode, content?: $LytFlowContent,  } | [node?: $LytNode, content?: $LytFlowContent, ];
    export class $LytDocument extends $LytNode implements $LytBlockContainer {
        getAvailableWidth(): number;
        getContentHeight(): number;
        clearContent(): void;
        renderBatch(arg0: $RenderContext, arg1: $MultiBufferSource_): void;
        getHoveredElement(): $LytDocument$HitTestResult;
        setHoveredElement(arg0: $LytDocument$HitTestResult_): void;
        updateLayout(arg0: $LayoutContext, arg1: number): void;
        append(arg0: $LytBlock): void;
        pick(arg0: number, arg1: number): $LytDocument$HitTestResult;
        /**
         * @deprecated
         */
        render(arg0: $SimpleRenderContext): void;
        render(arg0: $RenderContext): void;
        getBlocks(): $List<$LytBlock>;
        appendError(arg0: $PageCompiler, arg1: string, arg2: $UnistNode): void;
        constructor();
        get availableWidth(): number;
        get contentHeight(): number;
        get blocks(): $List<$LytBlock>;
    }
    export class $LytAxis extends $Enum<$LytAxis> {
        static values(): $LytAxis[];
        static valueOf(arg0: string): $LytAxis;
        static VERTICAL: $LytAxis;
        static HORIZONTAL: $LytAxis;
    }
    /**
     * Values that may be interpreted as {@link $LytAxis}.
     */
    export type $LytAxis_ = "horizontal" | "vertical";
    export class $LytBox extends $LytBlock implements $LytBlockContainer {
        setBackgroundColor(arg0: $SymbolicColor_): void;
        clearContent(): void;
        setPaddingLeft(arg0: number): void;
        setPaddingTop(arg0: number): void;
        setPaddingRight(arg0: number): void;
        setPaddingBottom(arg0: number): void;
        setPadding(arg0: number): void;
        append(arg0: $LytBlock): void;
        getBackgroundColor(): $SymbolicColor;
        appendError(arg0: $PageCompiler, arg1: string, arg2: $UnistNode): void;
        constructor();
        set paddingLeft(value: number);
        set paddingTop(value: number);
        set paddingRight(value: number);
        set paddingBottom(value: number);
        set padding(value: number);
    }
    export class $LytVisitor {
    }
    export interface $LytVisitor {
        beforeNode(arg0: $LytNode): $LytVisitor$Result;
        afterNode(arg0: $LytNode): $LytVisitor$Result;
        beforeFlowContent(arg0: $LytFlowContent): $LytVisitor$Result;
        afterFlowContent(arg0: $LytFlowContent): $LytVisitor$Result;
        text(arg0: string): void;
    }
    export class $LytBlock extends $LytNode {
        renderBatch(arg0: $RenderContext, arg1: $MultiBufferSource_): void;
        isCulled(arg0: $LytRect_): boolean;
        setLayoutPos(arg0: $Vector2i): void;
        setMarginTop(arg0: number): void;
        setMarginLeft(arg0: number): void;
        setMarginRight(arg0: number): void;
        setMarginBottom(arg0: number): void;
        getMarginStart(arg0: $LytAxis_): number;
        getMarginEnd(arg0: $LytAxis_): number;
        getBorderTop(): $BorderStyle;
        setBorderTop(arg0: $BorderStyle_): void;
        getBorderLeft(): $BorderStyle;
        setBorderLeft(arg0: $BorderStyle_): void;
        getBorderRight(): $BorderStyle;
        setBorderRight(arg0: $BorderStyle_): void;
        getBorderBottom(): $BorderStyle;
        setBorderBottom(arg0: $BorderStyle_): void;
        setBorder(arg0: $BorderStyle_): void;
        isFullWidth(): boolean;
        setFullWidth(arg0: boolean): void;
        getMarginBottom(): number;
        getMarginTop(): number;
        getMarginLeft(): number;
        getMarginRight(): number;
        layout(arg0: $LayoutContext, arg1: number, arg2: number, arg3: number): $LytRect;
        render(arg0: $RenderContext): void;
        constructor();
        set layoutPos(value: $Vector2i);
        set border(value: $BorderStyle_);
    }
    export class $LytNode implements $Styleable {
        pickNode(arg0: number, arg1: number): $LytNode;
        getSourceNode(): $MdAstNode;
        setSourceNode(arg0: $MdAstNode): void;
        onMouseEnter(arg0: $LytFlowContent): void;
        onMouseLeave(): void;
        getHoverStyle(): $TextStyle;
        setHoverStyle(arg0: $TextStyle_): void;
        getStylingParent(): $Styleable;
        getDocument(): $LytDocument;
        removeChild(arg0: $LytNode): void;
        getTextContent(): string;
        getBounds(): $LytRect;
        getParent(): $LytNode;
        visit(arg0: $LytVisitor): $LytVisitor$Result;
        visit(arg0: $LytVisitor, arg1: boolean): $LytVisitor$Result;
        tick(): void;
        getChildren(): $List<$LytNode>;
        getStyle(): $TextStyle;
        setStyle(arg0: $TextStyle_): void;
        modifyStyle(arg0: $Consumer_<$TextStyle$Builder>): void;
        modifyHoverStyle(arg0: $Consumer_<$TextStyle$Builder>): void;
        resolveStyle(): $ResolvedTextStyle;
        resolveHoverStyle(arg0: $ResolvedTextStyle_): $ResolvedTextStyle;
        constructor();
        get stylingParent(): $Styleable;
        get document(): $LytDocument;
        get textContent(): string;
        get bounds(): $LytRect;
        get parent(): $LytNode;
        get children(): $List<$LytNode>;
    }
    export class $LytVisitor$Result extends $Enum<$LytVisitor$Result> {
        static values(): $LytVisitor$Result[];
        static valueOf(arg0: string): $LytVisitor$Result;
        static CONTINUE: $LytVisitor$Result;
        static STOP: $LytVisitor$Result;
        static SKIP_CHILDREN: $LytVisitor$Result;
    }
    /**
     * Values that may be interpreted as {@link $LytVisitor$Result}.
     */
    export type $LytVisitor$Result_ = "continue" | "skip_children" | "stop";
    export class $LytBlockContainer {
    }
    export interface $LytBlockContainer extends $LytErrorSink {
        appendError(arg0: $PageCompiler, arg1: string, arg2: $UnistNode): void;
        append(arg0: $LytBlock): void;
    }
    /**
     * Values that may be interpreted as {@link $LytBlockContainer}.
     */
    export type $LytBlockContainer_ = ((arg0: $LytBlock) => void);
}
