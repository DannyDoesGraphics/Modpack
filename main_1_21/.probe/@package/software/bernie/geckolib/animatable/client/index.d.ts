import { $HumanoidModel } from "@package/net/minecraft/client/model";
import { $ItemStack_, $Item_ } from "@package/net/minecraft/world/item";
import { $BlockEntityWithoutLevelRenderer } from "@package/net/minecraft/client/renderer";
import { $LivingEntity, $EquipmentSlot_ } from "@package/net/minecraft/world/entity";

declare module "@package/software/bernie/geckolib/animatable/client" {
    export class $GeoRenderProvider {
        static of(arg0: $Item_): $GeoRenderProvider;
        static of(arg0: $ItemStack_): $GeoRenderProvider;
        static DEFAULT: $GeoRenderProvider;
    }
    export interface $GeoRenderProvider {
        getGeoArmorRenderer<T extends $LivingEntity>(arg0: T, arg1: $ItemStack_, arg2: $EquipmentSlot_, arg3: $HumanoidModel<T>): $HumanoidModel<never>;
        getGeoItemRenderer(): $BlockEntityWithoutLevelRenderer;
        get geoItemRenderer(): $BlockEntityWithoutLevelRenderer;
    }
}
