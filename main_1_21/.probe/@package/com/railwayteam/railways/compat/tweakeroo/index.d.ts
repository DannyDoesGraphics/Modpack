import { $Enum } from "@package/java/lang";

declare module "@package/com/railwayteam/railways/compat/tweakeroo" {
    export class $TweakerooCompat {
        static inFreecam<T extends $Enum<T>>(): boolean;
        constructor();
    }
}
