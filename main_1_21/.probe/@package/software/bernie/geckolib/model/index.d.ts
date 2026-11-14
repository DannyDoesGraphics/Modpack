import { $BiConsumer_ } from "@package/java/util/function";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $DataTicket } from "@package/software/bernie/geckolib/constant/dataticket";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $GeoBone, $BakedGeoModel } from "@package/software/bernie/geckolib/cache/object";
import { $GeoAnimatable } from "@package/software/bernie/geckolib/animatable";
import { $GeoRenderer } from "@package/software/bernie/geckolib/renderer";
import { $Animation, $AnimationProcessor, $AnimationState } from "@package/software/bernie/geckolib/animation";

declare module "@package/software/bernie/geckolib/model" {
    export class $DefaultedBlockGeoModel<T extends $GeoAnimatable> extends $DefaultedGeoModel<T> {
        withAltAnimations(arg0: $ResourceLocation_): $DefaultedBlockGeoModel<T>;
        constructor(arg0: $ResourceLocation_);
    }
    export class $DefaultedGeoModel<T extends $GeoAnimatable> extends $GeoModel<T> {
        withAltAnimations(arg0: $ResourceLocation_): $DefaultedGeoModel<T>;
        withAltTexture(arg0: $ResourceLocation_): $DefaultedGeoModel<T>;
        buildFormattedModelPath(arg0: $ResourceLocation_): $ResourceLocation;
        buildFormattedTexturePath(arg0: $ResourceLocation_): $ResourceLocation;
        buildFormattedAnimationPath(arg0: $ResourceLocation_): $ResourceLocation;
        withAltModel(arg0: $ResourceLocation_): $DefaultedGeoModel<T>;
        constructor(arg0: $ResourceLocation_);
    }
    export class $DefaultedItemGeoModel<T extends $GeoAnimatable> extends $DefaultedGeoModel<T> {
        withAltAnimations(arg0: $ResourceLocation_): $DefaultedItemGeoModel<T>;
        constructor(arg0: $ResourceLocation_);
    }
    export class $GeoModel<T extends $GeoAnimatable> {
        getAnimationResourceFallbacks(arg0: T): $ResourceLocation[];
        getAnimationResource(arg0: T): $ResourceLocation;
        addAdditionalStateData(arg0: T, arg1: number, arg2: $BiConsumer_<$DataTicket<T>, T>): void;
        handleAnimations(arg0: T, arg1: number, arg2: $AnimationState<T>, arg3: number): void;
        crashIfBoneMissing(): boolean;
        setCustomAnimations(arg0: T, arg1: number, arg2: $AnimationState<T>): void;
        applyMolangQueries(arg0: $AnimationState<T>, arg1: number): void;
        /**
         * @deprecated
         */
        getTextureResource(arg0: T): $ResourceLocation;
        getTextureResource(arg0: T, arg1: $GeoRenderer<T>): $ResourceLocation;
        /**
         * @deprecated
         */
        getModelResource(arg0: T): $ResourceLocation;
        getModelResource(arg0: T, arg1: $GeoRenderer<T>): $ResourceLocation;
        getAnimationProcessor(): $AnimationProcessor<T>;
        getBone(arg0: string): ($GeoBone) | undefined;
        getAnimation(arg0: T, arg1: string): $Animation;
        getBakedModel(arg0: $ResourceLocation_): $BakedGeoModel;
        getRenderType(arg0: T, arg1: $ResourceLocation_): $RenderType;
        constructor();
        get animationProcessor(): $AnimationProcessor<T>;
    }
}
