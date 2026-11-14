import { $LytRect_ } from "@package/guideme/document";
import { $OptionalInt } from "@package/java/util";
import { $ResolvedTextStyle_ } from "@package/guideme/style";

declare module "@package/guideme/layout" {
    export class $FontMetrics {
    }
    export interface $FontMetrics {
        getAdvance(arg0: number, arg1: $ResolvedTextStyle_): number;
        getLineHeight(arg0: $ResolvedTextStyle_): number;
    }
    export class $LayoutContext implements $FontMetrics {
        addLeftFloat(arg0: $LytRect_): void;
        addRightFloat(arg0: $LytRect_): void;
        getLeftFloatRightEdge(): $OptionalInt;
        getRightFloatLeftEdge(): $OptionalInt;
        clearFloats(arg0: boolean, arg1: boolean): $OptionalInt;
        clearFloatsAbove(arg0: number): void;
        getNextFloatBottomEdge(arg0: number): $OptionalInt;
        getAdvance(arg0: number, arg1: $ResolvedTextStyle_): number;
        getLineHeight(arg0: $ResolvedTextStyle_): number;
        constructor(arg0: $FontMetrics);
        get leftFloatRightEdge(): $OptionalInt;
        get rightFloatLeftEdge(): $OptionalInt;
    }
}
