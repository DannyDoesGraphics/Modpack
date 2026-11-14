import { $Enum } from "@package/java/lang";
export * as client from "@package/dev/ryanhcode/offroad/handlers/client";

declare module "@package/dev/ryanhcode/offroad/handlers" {
    export class $MultiminingDataTickResult extends $Enum<$MultiminingDataTickResult> {
        static values(): $MultiminingDataTickResult[];
        static valueOf(arg0: string): $MultiminingDataTickResult;
        static CONTINUE: $MultiminingDataTickResult;
        static STOP: $MultiminingDataTickResult;
        static BROKEN: $MultiminingDataTickResult;
    }
    /**
     * Values that may be interpreted as {@link $MultiminingDataTickResult}.
     */
    export type $MultiminingDataTickResult_ = "continue" | "stop" | "broken";
}
