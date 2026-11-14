import { $Level } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $DyeColor, $DyeColor_ } from "@package/net/minecraft/world/item";
import { $IHaveGoggleInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $ISpeedNotifiable } from "@package/com/railwayteam/railways/content/smokestack";
import { $BlockEntityType_, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/railwayteam/railways/content/smokestack/block/be" {
    export class $SmokeStackBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation {
        isSoul(): boolean;
        setSoul(arg0: boolean): void;
        updateHeight(): void;
        static getHeightOffset(arg0: number): number;
        setColor(arg0: $DyeColor_): void;
        getColor(): $DyeColor;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $DieselSmokeStackBlockEntity extends $SmartBlockEntity implements $ISpeedNotifiable {
        notifySpeed(arg0: number): void;
        getRpm(arg0: number): number;
        getFanRotation(arg0: number): number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
}
