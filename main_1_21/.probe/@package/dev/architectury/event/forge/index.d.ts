import { $LevelAccessor } from "@package/net/minecraft/world/level";

declare module "@package/dev/architectury/event/forge" {
    export class $EventHandlerImplCommon$LevelEventAttachment {
    }
    export interface $EventHandlerImplCommon$LevelEventAttachment {
        architectury$getAttachedLevel(): $LevelAccessor;
        architectury$attachLevel(arg0: $LevelAccessor): void;
    }
}
