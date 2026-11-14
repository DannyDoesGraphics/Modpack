import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $EMFModelOrRenderVariable, $EMFModelOrRenderVariable_ } from "@package/traben/entity_model_features/models/animation/math/variables";
import { $PoseStack, $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $List_, $List } from "@package/java/util";
import { $EMFModelPart } from "@package/traben/entity_model_features/models/parts";
export * as math from "@package/traben/entity_model_features/models/animation/math";

declare module "@package/traben/entity_model_features/models/animation" {
    export class $EMFAttachments {
        setAttachment(entry: $PoseStack): void;
        pose: $PoseStack$Pose;
        right: boolean;
        constructor(x: number, y: number, z: number, right: boolean);
        set attachment(value: $PoseStack);
    }
    export class $EMFAnimationHandler$AnimLineData {
        isVar: boolean;
        asmIndex: number;
        partToApplyTo: $EMFModelPart;
        isBoolean: boolean;
        expression: string;
        applier: $EMFModelOrRenderVariable;
        animKey: string;
        isVarGlobal: boolean;
        constructor(animKey: string, expression: string, partToApplyTo: $EMFModelPart, applier: $EMFModelOrRenderVariable_);
    }
    export class $EMFAnimationHandler {
        animate(pausedParts: $ModelPart[]): void;
        addAnimLineData(animLineData: $EMFAnimationHandler$AnimLineData): void;
        finishAndValidate(): boolean;
        lines(): $List<$EMFAnimationHandler$AnimLineData>;
        getLine(animKey: string): $EMFAnimationHandler$AnimLineData;
        modelName: string;
        constructor(modelName: string, animLineDataList: $List_<$EMFAnimationHandler$AnimLineData>);
    }
}
