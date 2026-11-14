import { $Enum } from "@package/java/lang";

declare module "@package/net/neoforged/api/distmarker" {
    export class $Dist extends $Enum<$Dist> {
        static values(): $Dist[];
        static valueOf(arg0: string): $Dist;
        isClient(): boolean;
        isDedicatedServer(): boolean;
        static DEDICATED_SERVER: $Dist;
        static CLIENT: $Dist;
        get client(): boolean;
        get dedicatedServer(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Dist}.
     */
    export type $Dist_ = "client" | "dedicated_server";
}
