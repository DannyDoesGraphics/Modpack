import { $MultiBufferSource_, $BlockEntityWithoutLevelRenderer, $RenderType } from "@package/net/minecraft/client/renderer";
import { $ItemDisplayContext_, $Item_, $Item, $ItemStack_, $ArmorMaterial$Layer } from "@package/net/minecraft/world/item";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $LivingEntity, $EquipmentSlot_, $HumanoidArm_ } from "@package/net/minecraft/world/entity";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $DeltaTracker } from "@package/net/minecraft/client";
import { $IClientItemExtensions$FontContext_, $IClientItemExtensions } from "@package/net/neoforged/neoforge/client/extensions/common";
import { $NonNullFunction_, $NonNullBiConsumer_, $NonNullFunction } from "@package/com/tterrag/registrate/util/nullness";
import { $HumanoidModel, $HumanoidModel$ArmPose, $Model } from "@package/net/minecraft/client/model";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $Consumer_ } from "@package/java/util/function";
import { $BakedModelWrapper } from "@package/net/neoforged/neoforge/client/model";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/com/simibubi/create/foundation/item/render" {
    export class $CustomRenderedItemModel extends $BakedModelWrapper<$BakedModel> {
        getOriginalModel(): $BakedModel;
        constructor(arg0: $BakedModel);
        get originalModel(): $BakedModel;
    }
    export class $PartialItemModelRenderer {
        renderSolidGlowing(arg0: $BakedModel, arg1: number): void;
        renderGlowing(arg0: $BakedModel, arg1: number): void;
        renderSolid(arg0: $BakedModel, arg1: number): void;
        static of(arg0: $ItemStack_, arg1: $ItemDisplayContext_, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number): $PartialItemModelRenderer;
        render(arg0: $BakedModel, arg1: $RenderType, arg2: number): void;
        render(arg0: $BakedModel, arg1: number): void;
        constructor();
    }
    export class $CustomRenderedItems {
        static register(arg0: $Item_): void;
        static forEach(arg0: $Consumer_<$Item>): void;
        constructor();
    }
    export class $CustomRenderedItemModelRenderer extends $BlockEntityWithoutLevelRenderer {
        constructor();
    }
    export class $CustomItemModels {
        register(arg0: $ResourceLocation_, arg1: $NonNullFunction_<$BakedModel, $BakedModel>): void;
        forEach(arg0: $NonNullBiConsumer_<$Item, $NonNullFunction<$BakedModel, $BakedModel>>): void;
        constructor();
    }
    export class $SimpleCustomRenderer implements $IClientItemExtensions {
        static create(arg0: $Item_, arg1: $CustomRenderedItemModelRenderer): $SimpleCustomRenderer;
        getArmPose(arg0: $LivingEntity, arg1: $InteractionHand_, arg2: $ItemStack_): $HumanoidModel$ArmPose;
        getHumanoidArmorModel(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $EquipmentSlot_, arg3: $HumanoidModel<never>): $HumanoidModel<never>;
        /**
         * @deprecated
         */
        renderHelmetOverlay(arg0: $ItemStack_, arg1: $Player, arg2: number, arg3: number, arg4: number): void;
        renderHelmetOverlay(arg0: $ItemStack_, arg1: $Player, arg2: $GuiGraphics, arg3: $DeltaTracker): void;
        applyForgeHandTransform(arg0: $PoseStack, arg1: $LocalPlayer, arg2: $HumanoidArm_, arg3: $ItemStack_, arg4: number, arg5: number, arg6: number): boolean;
        getGenericArmorModel(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $EquipmentSlot_, arg3: $HumanoidModel<never>): $Model;
        setupModelAnimations(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $EquipmentSlot_, arg3: $Model, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        shouldBobAsEntity(arg0: $ItemStack_): boolean;
        shouldSpreadAsEntity(arg0: $ItemStack_): boolean;
        getArmorLayerTintColor(arg0: $ItemStack_, arg1: $LivingEntity, arg2: $ArmorMaterial$Layer, arg3: number, arg4: number): number;
        getDefaultDyeColor(arg0: $ItemStack_): number;
        getScopeOverlayTexture(arg0: $ItemStack_): $ResourceLocation;
        getFont(arg0: $ItemStack_, arg1: $IClientItemExtensions$FontContext_): $Font;
        getCustomRenderer(): $BlockEntityWithoutLevelRenderer;
        get customRenderer(): $BlockEntityWithoutLevelRenderer;
    }
}
