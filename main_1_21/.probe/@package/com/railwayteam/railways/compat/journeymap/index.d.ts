import { $Enum } from "@package/java/lang";
import { $UUID_ } from "@package/java/util";

declare module "@package/com/railwayteam/railways/compat/journeymap" {
    export class $UsernameUtils extends $Enum<$UsernameUtils> {
        getName(arg0: $UUID_): string;
        static values(): $UsernameUtils[];
        static valueOf(arg0: string): $UsernameUtils;
        static INSTANCE: $UsernameUtils;
    }
    /**
     * Values that may be interpreted as {@link $UsernameUtils}.
     */
    export type $UsernameUtils_ = "instance";
}
