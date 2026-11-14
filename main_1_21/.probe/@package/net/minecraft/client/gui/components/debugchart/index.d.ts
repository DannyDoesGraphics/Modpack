import { $Supplier_ } from "@package/java/util/function";
import { $SampleStorage } from "@package/net/minecraft/util/debugchart";
import { $GuiGraphics, $Font } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/components/debugchart" {
    export class $BandwidthDebugChart extends $AbstractDebugChart {
        constructor(font: $Font, sampleStorage: $SampleStorage);
    }
    export class $AbstractDebugChart {
        drawChart(guiGraphics: $GuiGraphics, x: number, width: number): void;
        getWidth(maxWidth: number): number;
    }
    export class $FpsDebugChart extends $AbstractDebugChart {
        constructor(font: $Font, sampleStorage: $SampleStorage);
    }
    export class $TpsDebugChart extends $AbstractDebugChart {
        constructor(font: $Font, sampleStorage: $SampleStorage, msptSupplier: $Supplier_<number>);
    }
    export class $PingDebugChart extends $AbstractDebugChart {
        constructor(arg0: $Font, arg1: $SampleStorage);
    }
}
