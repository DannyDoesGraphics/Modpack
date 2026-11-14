import { $MdAstStaticPhrasingContent, $MdAstFlowContent, $MdAstParent, $MdAstPhrasingContent, $MdAstAnyContent, $MdAstNode } from "@package/guideme/libs/mdast/model";
import { $List, $List_ } from "@package/java/util";
import { $Object } from "@package/java/lang";
import { $UnistNode } from "@package/guideme/libs/unist";
import { $JsonWriter } from "@package/com/google/gson/stream";

declare module "@package/guideme/libs/mdast/mdx/model" {
    export class $MdxJsxFlowElement extends $MdAstParent<$MdAstFlowContent> implements $MdxJsxElementFields, $MdAstFlowContent {
        name(): string;
        setName(arg0: string): void;
        attributes(): $List<$MdxJsxAttributeNode>;
        hasAttribute(arg0: string): boolean;
        setAttribute(arg0: string, arg1: string): void;
        getAttribute(arg0: string): $MdxJsxAttribute;
        addAttribute(arg0: string, arg1: number): void;
        addAttribute(arg0: string, arg1: number): void;
        addAttribute(arg0: string, arg1: boolean): void;
        addAttribute(arg0: string, arg1: string): void;
        getAttributeString(arg0: string, arg1: string): string;
        constructor();
        constructor(arg0: string, arg1: $List_<$MdxJsxAttributeNode>);
    }
    export class $MdxJsxTextElement extends $MdAstParent<$MdAstPhrasingContent> implements $MdxJsxElementFields, $MdAstStaticPhrasingContent {
        name(): string;
        setName(arg0: string): void;
        attributes(): $List<$MdxJsxAttributeNode>;
        hasAttribute(arg0: string): boolean;
        setAttribute(arg0: string, arg1: string): void;
        getAttribute(arg0: string): $MdxJsxAttribute;
        addAttribute(arg0: string, arg1: number): void;
        addAttribute(arg0: string, arg1: number): void;
        addAttribute(arg0: string, arg1: boolean): void;
        addAttribute(arg0: string, arg1: string): void;
        getAttributeString(arg0: string, arg1: string): string;
        constructor();
        constructor(arg0: string, arg1: $List_<$MdxJsxAttributeNode>);
    }
    export class $MdxJsxElementFields {
    }
    export interface $MdxJsxElementFields extends $UnistNode {
        hasAttribute(arg0: string): boolean;
        name(): string;
        setName(arg0: string): void;
        attributes(): $List<$MdxJsxAttributeNode>;
        setAttribute(arg0: string, arg1: string): void;
        getAttribute(arg0: string): $MdxJsxAttribute;
        addAttribute(arg0: string, arg1: number): void;
        addAttribute(arg0: string, arg1: number): void;
        addAttribute(arg0: string, arg1: boolean): void;
        addAttribute(arg0: string, arg1: string): void;
        children(): $List<$MdAstAnyContent>;
        getAttributeString(arg0: string, arg1: string): string;
    }
    export class $MdxJsxAttribute extends $MdAstNode implements $MdxJsxAttributeNode {
        hasExpressionValue(): boolean;
        getExpressionValue(): string;
        setExpression(arg0: string): void;
        getStringValue(): string;
        hasStringValue(): boolean;
        setValue(arg0: string): void;
        name: string;
        constructor();
        constructor(arg0: string, arg1: $Object);
        get expressionValue(): string;
        set expression(value: string);
        get stringValue(): string;
        set value(value: string);
    }
    export class $MdxJsxAttributeNode {
    }
    export interface $MdxJsxAttributeNode extends $UnistNode {
        toJson(arg0: $JsonWriter): void;
    }
}
