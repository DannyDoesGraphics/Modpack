import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $EnumSet } from "@package/java/util";
export * as schematics from "@package/dev/ryanhcode/sable/neoforge/mixinterface/compatibility/create/schematics";

declare module "@package/dev/ryanhcode/sable/neoforge/mixinterface/compatibility/create" {
    export class $LecternControllerBlockEntityExtension {
    }
    export interface $LecternControllerBlockEntityExtension {
        sable$setNoDrop(): void;
    }
    /**
     * Values that may be interpreted as {@link $LecternControllerBlockEntityExtension}.
     */
    export type $LecternControllerBlockEntityExtension_ = (() => void);
    export class $NozzleBlockEntityExtension {
    }
    export interface $NozzleBlockEntityExtension {
        sable$getValidDirections(): $EnumSet<$Direction>;
    }
    /**
     * Values that may be interpreted as {@link $NozzleBlockEntityExtension}.
     */
    export type $NozzleBlockEntityExtension_ = (() => $EnumSet<$Direction_>);
    export class $StickerBlockEntityExtension {
    }
    export interface $StickerBlockEntityExtension {
        sable$removeConstraint(): void;
        sable$tickConstraint(): void;
    }
}
