import { $Level } from "@package/net/minecraft/world/level";
import { $BlockEntityEntry } from "@package/com/tterrag/registrate/util/entry";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $BlockEntityType_, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/dev/ryanhcode/sable/neoforge/mixinhelper/compatibility/create/redstone_contact" {
    export class $RedstoneContactBlockEntity extends $SmartBlockEntity {
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        static CONTRAPTION_CHECK_BOUNDS: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $RedstoneContactBlockEntityTypeGetter {
    }
    export interface $RedstoneContactBlockEntityTypeGetter {
        sable$getRedstoneContactType(): $BlockEntityEntry<$RedstoneContactBlockEntity>;
    }
    /**
     * Values that may be interpreted as {@link $RedstoneContactBlockEntityTypeGetter}.
     */
    export type $RedstoneContactBlockEntityTypeGetter_ = (() => $BlockEntityEntry<$RedstoneContactBlockEntity>);
}
