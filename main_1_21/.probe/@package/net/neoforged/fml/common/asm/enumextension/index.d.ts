import { $Enum, $Record, $Class } from "@package/java/lang";

declare module "@package/net/neoforged/fml/common/asm/enumextension" {
    export class $NetworkedEnum$NetworkCheck extends $Enum<$NetworkedEnum$NetworkCheck> {
        static values(): $NetworkedEnum$NetworkCheck[];
        static valueOf(arg0: string): $NetworkedEnum$NetworkCheck;
        static CLIENTBOUND: $NetworkedEnum$NetworkCheck;
        static BIDIRECTIONAL: $NetworkedEnum$NetworkCheck;
        static SERVERBOUND: $NetworkedEnum$NetworkCheck;
    }
    /**
     * Values that may be interpreted as {@link $NetworkedEnum$NetworkCheck}.
     */
    export type $NetworkedEnum$NetworkCheck_ = "clientbound" | "serverbound" | "bidirectional";
    export class $IExtensibleEnum {
    }
    export interface $IExtensibleEnum {
    }
    export class $ExtensionInfo extends $Record {
        vanillaCount(): number;
        extended(): boolean;
        totalCount(): number;
        netCheck(): $NetworkedEnum$NetworkCheck;
        static nonExtended<T extends $Enum<T>>(arg0: $Class<T>): $ExtensionInfo;
        constructor(extended: boolean, vanillaCount: number, totalCount: number, netCheck: $NetworkedEnum$NetworkCheck_);
    }
    /**
     * Values that may be interpreted as {@link $ExtensionInfo}.
     */
    export type $ExtensionInfo_ = { extended?: boolean, totalCount?: number, vanillaCount?: number, netCheck?: $NetworkedEnum$NetworkCheck_,  } | [extended?: boolean, totalCount?: number, vanillaCount?: number, netCheck?: $NetworkedEnum$NetworkCheck_, ];
}
