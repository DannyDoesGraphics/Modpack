import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $INamedIconOptions } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/scrollValue";
import { $AllIcons } from "@package/com/simibubi/create/foundation/gui";
import { $Enum } from "@package/java/lang";
import { $CenteredSideValueBoxTransform } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";

declare module "@package/com/railwayteam/railways/content/extended_sliding_doors" {
    export class $SlidingDoorMode$IHasDoorMode {
    }
    export interface $SlidingDoorMode$IHasDoorMode {
        railways$getSlidingDoorMode(): $SlidingDoorMode;
    }
    /**
     * Values that may be interpreted as {@link $SlidingDoorMode$IHasDoorMode}.
     */
    export type $SlidingDoorMode$IHasDoorMode_ = (() => $SlidingDoorMode_);
    export class $SlidingDoorMode extends $Enum<$SlidingDoorMode> implements $INamedIconOptions {
        canOpenSpecially(): boolean;
        canOpenManually(): boolean;
        static fromNbt(arg0: $CompoundTag_): $SlidingDoorMode;
        getTranslationKey(): string;
        static values(): $SlidingDoorMode[];
        static valueOf(arg0: string): $SlidingDoorMode;
        getIcon(): $AllIcons;
        static SPECIAL_INVERTED: $SlidingDoorMode;
        static MANUAL: $SlidingDoorMode;
        static SPECIAL: $SlidingDoorMode;
        static NORMAL: $SlidingDoorMode;
        get translationKey(): string;
        get icon(): $AllIcons;
    }
    /**
     * Values that may be interpreted as {@link $SlidingDoorMode}.
     */
    export type $SlidingDoorMode_ = "normal" | "manual" | "special" | "special_inverted";
    export class $SlidingDoorMode$SlidingDoorValueBoxTransform extends $CenteredSideValueBoxTransform {
        constructor();
    }
}
