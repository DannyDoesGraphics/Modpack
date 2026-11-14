import { $Level } from "@package/net/minecraft/world/level";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $IHaveGoggleInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $AbstractBogeyBlockEntity } from "@package/com/simibubi/create/content/trains/bogey";
import { $List_ } from "@package/java/util";
import { $BlockEntityType_, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/railwayteam/railways/content/custom_bogeys/blocks/base/be" {
    export class $CRBogeyBlockEntity extends $AbstractBogeyBlockEntity implements $IHaveGoggleInformation {
        addToGoggleTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        containedFluidTooltip(arg0: $List_<$Component_>, arg1: boolean, arg2: $IFluidHandler): boolean;
        getIcon(arg0: boolean): $ItemStack;
        static BOGEY_STYLE_KEY: string;
        static BOGEY_DATA_KEY: string;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
}
