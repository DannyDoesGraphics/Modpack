import { $BodyProvider_, $ModNameProvider_, $IconProvider_, $NameProvider_ } from "@package/appeng/api/integrations/igtooltip/providers";
import { $InterModEnqueueEvent } from "@package/net/neoforged/fml/event/lifecycle";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $TooltipBuilder } from "@package/appeng/api/integrations/igtooltip";
import { $Record, $Class } from "@package/java/lang";

declare module "@package/appeng/integration/modules/theoneprobe" {
    export class $BlockEntityInfoProvider$ServerDataCollector {
    }
    export interface $BlockEntityInfoProvider$ServerDataCollector {
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityInfoProvider$ServerDataCollector}.
     */
    export type $BlockEntityInfoProvider$ServerDataCollector_ = (() => void);
    export class $BlockEntityInfoProvider$NameCustomizer<T> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityInfoProvider$NameCustomizer}.
     */
    export type $BlockEntityInfoProvider$NameCustomizer_<T> = { provider?: $NameProvider_<any>, priority?: number, beClass?: $Class<any>,  } | [provider?: $NameProvider_<any>, priority?: number, beClass?: $Class<any>, ];
    export class $BlockEntityInfoProvider$ModNameCustomizer<T> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityInfoProvider$ModNameCustomizer}.
     */
    export type $BlockEntityInfoProvider$ModNameCustomizer_<T> = { provider?: $ModNameProvider_<any>, priority?: number, beClass?: $Class<any>,  } | [provider?: $ModNameProvider_<any>, priority?: number, beClass?: $Class<any>, ];
    export class $TopTooltipBuilder implements $TooltipBuilder {
        addLine(arg0: $Component_): void;
        addLine(arg0: $Component_, arg1: $ResourceLocation_): void;
    }
    export class $BlockEntityInfoProvider$IconCustomizer<T> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityInfoProvider$IconCustomizer}.
     */
    export type $BlockEntityInfoProvider$IconCustomizer_<T> = { provider?: $IconProvider_<any>, priority?: number, beClass?: $Class<any>,  } | [provider?: $IconProvider_<any>, priority?: number, beClass?: $Class<any>, ];
    export class $TOP {
        static enqueueIMC(arg0: $InterModEnqueueEvent): void;
        constructor();
    }
    export class $BlockEntityInfoProvider$BodyCustomizer<T> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityInfoProvider$BodyCustomizer}.
     */
    export type $BlockEntityInfoProvider$BodyCustomizer_<T> = { provider?: $BodyProvider_<any>, priority?: number, beClass?: $Class<any>,  } | [provider?: $BodyProvider_<any>, priority?: number, beClass?: $Class<any>, ];
}
