import { $Endec } from "@package/io/wispforest/endec";
import { $EntityModel, $HumanoidModel } from "@package/net/minecraft/client/model";
import { $Vec3i, $Direction } from "@package/net/minecraft/core";
import { $MultiBufferSource_, $MultiBufferSource } from "@package/net/minecraft/client/renderer";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $SlotReference } from "@package/io/wispforest/accessories/api/slot";
import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $HumanoidArm_, $LivingEntity, $EquipmentSlot_ } from "@package/net/minecraft/world/entity";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Number, $Enum } from "@package/java/lang";

declare module "@package/io/wispforest/accessories/api/client" {
    export class $Side extends $Enum<$Side> {
        static values(): $Side[];
        static valueOf(name: string): $Side;
        rotationAxis(): $Vec3i;
        static TOP: $Side;
        static LEFT: $Side;
        static BACK: $Side;
        static FRONT: $Side;
        static RIGHT: $Side;
        static ENDEC: $Endec<$Side>;
        static BOTTOM: $Side;
        direction: $Direction;
    }
    /**
     * Values that may be interpreted as {@link $Side}.
     */
    export type $Side_ = "bottom" | "top" | "back" | "front" | "left" | "right";
    export class $AccessoryRenderer {
        /**
         * @deprecated
         */
        static translateToFace(poseStack: $PoseStack, model: $HumanoidModel<$LivingEntity>, entity: $LivingEntity): void;
        static transformToFace(poseStack: $PoseStack, part: $ModelPart, side: $Side_): void;
        /**
         * @deprecated
         */
        static translateToChest(poseStack: $PoseStack, model: $HumanoidModel<$LivingEntity>, livingEntity: $LivingEntity): void;
        static transformToModelPart(poseStack: $PoseStack, part: $ModelPart, xPercent: $Number, yPercent: $Number, zPercent: $Number): void;
        static transformToModelPart(poseStack: $PoseStack, part: $ModelPart): void;
        /**
         * @deprecated
         */
        static translateToRightArm(poseStack: $PoseStack, model: $HumanoidModel<$LivingEntity>, player: $LivingEntity): void;
        /**
         * @deprecated
         */
        static translateToLeftArm(poseStack: $PoseStack, model: $HumanoidModel<$LivingEntity>, player: $LivingEntity): void;
        /**
         * @deprecated
         */
        static translateToRightLeg(poseStack: $PoseStack, model: $HumanoidModel<$LivingEntity>, player: $LivingEntity): void;
        /**
         * @deprecated
         */
        static translateToLeftLeg(poseStack: $PoseStack, model: $HumanoidModel<$LivingEntity>, player: $LivingEntity): void;
        /**
         * @deprecated
         */
        static followBodyRotations(entity: $LivingEntity, model: $HumanoidModel<$LivingEntity>): void;
    }
    export interface $AccessoryRenderer {
        shouldRenderInFirstPerson(arm: $HumanoidArm_, stack: $ItemStack_, reference: $SlotReference): boolean;
        renderOnFirstPerson<M extends $LivingEntity>(arm: $HumanoidArm_, stack: $ItemStack_, reference: $SlotReference, matrices: $PoseStack, model: $EntityModel<M>, multiBufferSource: $MultiBufferSource_, light: number): void;
        isEmpty(): boolean;
        render<M extends $LivingEntity>(arg0: $ItemStack_, arg1: $SlotReference, arg2: $PoseStack, arg3: $EntityModel<M>, arg4: $MultiBufferSource_, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        shouldRender(isRendering: boolean): boolean;
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $AccessoryRenderer}.
     */
    export type $AccessoryRenderer_ = ((arg0: $ItemStack, arg1: $SlotReference, arg2: $PoseStack, arg3: $EntityModel<any>, arg4: $MultiBufferSource, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number) => void);
    export class $ArmorRenderingExtension<T extends $LivingEntity> {
        /**
         * @deprecated
         */
        static RENDERER: $AccessoryRenderer;
    }
    export interface $ArmorRenderingExtension<T extends $LivingEntity> {
        renderEquipmentStack(stack: $ItemStack_, poseStack: $PoseStack, multiBufferSource: $MultiBufferSource_, livingEntity: T, equipmentSlot: $EquipmentSlot_, light: number, limbSwing: number, limbSwingAmount: number, partialTicks: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
    }
}
