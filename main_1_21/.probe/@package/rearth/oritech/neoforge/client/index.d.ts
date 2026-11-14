import { $RenderLayerParent } from "@package/net/minecraft/client/renderer/entity";
import { $BlockEntityWithoutLevelRenderer } from "@package/net/minecraft/client/renderer";
import { $ItemStack_, $ArmorMaterial$Layer } from "@package/net/minecraft/world/item";
import { $IEventBus } from "@package/net/neoforged/bus/api";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $EntityModelSet } from "@package/net/minecraft/client/model/geom";
import { $LivingEntity, $EquipmentSlot_, $HumanoidArm_ } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ElytraLayer } from "@package/net/minecraft/client/renderer/entity/layers";
import { $DeltaTracker } from "@package/net/minecraft/client";
import { $IClientItemExtensions$FontContext_, $IClientItemExtensions } from "@package/net/neoforged/neoforge/client/extensions/common";
import { $ModContainer } from "@package/net/neoforged/fml";
import { $RenderLevelStageEvent, $RenderHighlightEvent$Block, $InputEvent$MouseButton$Pre } from "@package/net/neoforged/neoforge/client/event";
import { $EntityModel, $HumanoidModel, $HumanoidModel$ArmPose, $Model } from "@package/net/minecraft/client/model";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/rearth/oritech/neoforge/client" {
    export class $OritechElytraLayer<T extends $LivingEntity, M extends $EntityModel<T>> extends $ElytraLayer<T, M> {
        constructor(arg0: $RenderLayerParent<T, M>, arg1: $EntityModelSet);
    }
    export class $OritechClientNeoForge$CustomEvents {
        static onWorldRender(arg0: $RenderLevelStageEvent): void;
        static onOutlineRender(arg0: $RenderHighlightEvent$Block): void;
        static onMouseLaserInput(arg0: $InputEvent$MouseButton$Pre): void;
        constructor();
    }
    export class $OritechClientNeoForge$EventHandler {
    }
    export class $OritechClientNeoForge$TankItemRenderer extends $BlockEntityWithoutLevelRenderer {
    }
    export class $OritechClientNeoForge$TankItemExtensions implements $IClientItemExtensions {
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
        getCustomRenderer(): $BlockEntityWithoutLevelRenderer;
        getFont(arg0: $ItemStack_, arg1: $IClientItemExtensions$FontContext_): $Font;
        get customRenderer(): $BlockEntityWithoutLevelRenderer;
    }
    export class $OritechClientNeoForge {
        constructor(arg0: $IEventBus, arg1: $ModContainer);
    }
}
