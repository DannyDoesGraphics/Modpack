import { $PageCompiler } from "@package/guideme/compiler";
import { $Record } from "@package/java/lang";
import { $UnistNode } from "@package/guideme/libs/unist";
import { $Vector2i, $Matrix4f } from "@package/org/joml";
export * as block from "@package/guideme/document/block";
export * as flow from "@package/guideme/document/flow";
export * as interaction from "@package/guideme/document/interaction";

declare module "@package/guideme/document" {
    export class $LytSize extends $Record {
        static empty(): $LytSize;
        width(): number;
        height(): number;
        constructor(width: number, height: number);
    }
    /**
     * Values that may be interpreted as {@link $LytSize}.
     */
    export type $LytSize_ = { height?: number, width?: number,  } | [height?: number, width?: number, ];
    export class $LytRect extends $Record {
        centerIn(arg0: $LytRect_): $LytRect;
        centerHorizontallyIn(arg0: $LytRect_): $LytRect;
        centerVerticallyIn(arg0: $LytRect_): $LytRect;
        withX(arg0: number): $LytRect;
        withY(arg0: number): $LytRect;
        withWidth(arg0: number): $LytRect;
        withHeight(arg0: number): $LytRect;
        point(): $Vector2i;
        size(): $LytSize;
        bottom(): number;
        expand(arg0: number, arg1: number, arg2: number, arg3: number): $LytRect;
        expand(arg0: number): $LytRect;
        isEmpty(): boolean;
        x(): number;
        contains(arg0: $LytPoint_): boolean;
        contains(arg0: number, arg1: number): boolean;
        transform(arg0: $Matrix4f): $LytRect;
        static empty(): $LytRect;
        y(): number;
        right(): number;
        move(arg0: number, arg1: number): $LytRect;
        width(): number;
        static union(arg0: $LytRect_, arg1: $LytRect_): $LytRect;
        height(): number;
        shrink(arg0: number, arg1: number, arg2: number, arg3: number): $LytRect;
        intersects(arg0: $LytRect_): boolean;
        constructor(x: number, y: number, width: number, height: number);
    }
    /**
     * Values that may be interpreted as {@link $LytRect}.
     */
    export type $LytRect_ = { y?: number, x?: number, height?: number, width?: number,  } | [y?: number, x?: number, height?: number, width?: number, ];
    export class $LytPoint extends $Record {
        x(): number;
        y(): number;
        constructor(x: number, y: number);
    }
    /**
     * Values that may be interpreted as {@link $LytPoint}.
     */
    export type $LytPoint_ = { x?: number, y?: number,  } | [x?: number, y?: number, ];
    export class $LytErrorSink {
    }
    export interface $LytErrorSink {
        appendError(arg0: $PageCompiler, arg1: string, arg2: $UnistNode): void;
    }
    /**
     * Values that may be interpreted as {@link $LytErrorSink}.
     */
    export type $LytErrorSink_ = ((arg0: $PageCompiler, arg1: string, arg2: $UnistNode) => void);
}
