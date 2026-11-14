import { $Supplier_, $Consumer_, $Consumer } from "@package/java/util/function";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Record } from "@package/java/lang";
import { $Collection_ } from "@package/java/util";
import { $InfoProvider, $InfoProvider_ } from "@package/com/simibubi/create/infrastructure/debugInfo";

declare module "@package/com/simibubi/create/infrastructure/debugInfo/element" {
    export class $InfoEntry extends $Record implements $InfoElement {
        name(): string;
        provider(): $InfoProvider;
        print(arg0: number, arg1: $Player, arg2: $Consumer_<string>): void;
        print(arg0: $Player, arg1: $Consumer_<string>): void;
        constructor(arg0: string, arg1: string);
        constructor(name: string, provider: $InfoProvider_);
    }
    /**
     * Values that may be interpreted as {@link $InfoEntry}.
     */
    export type $InfoEntry_ = { name?: string, provider?: $InfoProvider_,  } | [name?: string, provider?: $InfoProvider_, ];
    export class $DebugInfoSection extends $Record implements $InfoElement {
        name(): string;
        static of(arg0: string, arg1: $Collection_<$DebugInfoSection_>): $DebugInfoSection;
        static builder(arg0: string): $DebugInfoSection$Builder;
        builder(): $DebugInfoSection$Builder;
        elements(): $ImmutableList<$InfoElement>;
        print(arg0: number, arg1: $Player, arg2: $Consumer_<string>): void;
        print(arg0: $Player, arg1: $Consumer_<string>): void;
        constructor(name: string, elements: $ImmutableList<$InfoElement_>);
    }
    /**
     * Values that may be interpreted as {@link $DebugInfoSection}.
     */
    export type $DebugInfoSection_ = { name?: string, elements?: $ImmutableList<$InfoElement_>,  } | [name?: string, elements?: $ImmutableList<$InfoElement_>, ];
    export class $DebugInfoSection$Builder {
        finishSection(): $DebugInfoSection$Builder;
        buildTo(arg0: $Consumer_<$DebugInfoSection>): void;
        put(arg0: $InfoElement_): $DebugInfoSection$Builder;
        put(arg0: string, arg1: $InfoProvider_): $DebugInfoSection$Builder;
        put(arg0: string, arg1: $Supplier_<string>): $DebugInfoSection$Builder;
        put(arg0: string, arg1: string): $DebugInfoSection$Builder;
        putAll(arg0: $Collection_<$InfoElement_>): $DebugInfoSection$Builder;
        build(): $DebugInfoSection;
        section(arg0: string): $DebugInfoSection$Builder;
        constructor(arg0: $DebugInfoSection$Builder, arg1: string);
    }
    export class $InfoElement {
    }
    export interface $InfoElement {
        print(arg0: number, arg1: $Player, arg2: $Consumer_<string>): void;
        print(arg0: $Player, arg1: $Consumer_<string>): void;
    }
    /**
     * Values that may be interpreted as {@link $InfoElement}.
     */
    export type $InfoElement_ = ((arg0: number, arg1: $Player, arg2: $Consumer<string>) => void);
}
