import { $SavedData } from "@package/net/minecraft/world/level/saveddata";

declare module "@package/appeng/core/worlddata" {
    export class $AESavedData extends $SavedData {
        constructor();
    }
}
