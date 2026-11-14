import { $Predicate_ } from "@package/java/util/function";
import { $List } from "@package/java/util";
import { $Object, $StringBuilder } from "@package/java/lang";
import { $MdAstVisitor, $MdAstVisitor$Result } from "@package/guideme/libs/mdast";
import { $JsonWriter } from "@package/com/google/gson/stream";
import { $UnistPosition, $UnistPoint, $UnistNode, $UnistParent } from "@package/guideme/libs/unist";

declare module "@package/guideme/libs/mdast/model" {
    export class $MdAstPosition implements $UnistPosition {
        withStart(arg0: $UnistPoint): $MdAstPosition;
        withEnd(arg0: $UnistPoint): $MdAstPosition;
        static stringify(arg0: $UnistPosition): string;
        static stringify(arg0: $UnistPoint, arg1: $UnistPoint): string;
        static stringify(arg0: $UnistPoint): string;
        writeJson(arg0: $JsonWriter): void;
        end(): $UnistPoint;
        indent(): number[];
        start(): $UnistPoint;
        constructor();
        constructor(arg0: $UnistPoint, arg1: $UnistPoint);
    }
    export class $MdAstPhrasingContent {
    }
    export interface $MdAstPhrasingContent extends $MdAstAnyContent {
    }
    export class $MdAstRoot extends $MdAstParent<$MdAstAnyContent> {
        constructor();
    }
    export class $MdAstFlowContent {
    }
    export interface $MdAstFlowContent extends $MdAstAnyContent {
    }
    export class $MdAstNode implements $UnistNode {
        removeChildren(arg0: $Predicate_<$MdAstNode>, arg1: boolean): void;
        type(): string;
        position(): $UnistPosition;
        data(): $Object;
        visit(arg0: $MdAstVisitor): $MdAstVisitor$Result;
        toJson(arg0: $JsonWriter): void;
        toText(): string;
        toText(arg0: $StringBuilder): void;
        setData(arg0: $Object): void;
        constructor(arg0: string);
    }
    export class $MdAstAnyContent {
    }
    export interface $MdAstAnyContent extends $UnistNode {
    }
    export class $MdAstStaticPhrasingContent {
    }
    export interface $MdAstStaticPhrasingContent extends $MdAstPhrasingContent {
    }
    export class $MdAstParent<T extends $MdAstAnyContent> extends $MdAstNode implements $UnistParent {
        removeChild(arg0: $MdAstNode): void;
        replaceChild(arg0: $MdAstNode, arg1: $MdAstNode): void;
        addChild(arg0: $MdAstNode): void;
        children(): $List<T>;
        constructor(arg0: string);
    }
}
