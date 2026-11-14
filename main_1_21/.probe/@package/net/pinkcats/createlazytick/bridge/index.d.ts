import { $Enum } from "@package/java/lang";
export * as Create from "@package/net/pinkcats/createlazytick/bridge/Create";
export * as Basin from "@package/net/pinkcats/createlazytick/bridge/Basin";

declare module "@package/net/pinkcats/createlazytick/bridge" {
    export class $Funnel$Mode extends $Enum<$Funnel$Mode> {
        static values(): $Funnel$Mode[];
        static valueOf(arg0: string): $Funnel$Mode;
        static PAUSED: $Funnel$Mode;
        static PUSHING_TO_BELT: $Funnel$Mode;
        static COLLECT: $Funnel$Mode;
        static INVALID: $Funnel$Mode;
        static TAKING_FROM_BELT: $Funnel$Mode;
        static EXTRACT: $Funnel$Mode;
    }
    /**
     * Values that may be interpreted as {@link $Funnel$Mode}.
     */
    export type $Funnel$Mode_ = "invalid" | "paused" | "collect" | "pushing_to_belt" | "taking_from_belt" | "extract";
}
