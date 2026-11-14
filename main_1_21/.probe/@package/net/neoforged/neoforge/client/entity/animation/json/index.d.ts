import { $AnimationTarget, $AnimationTarget_ } from "@package/net/neoforged/neoforge/client/entity/animation";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $AnimationChannel$Interpolation_, $AnimationChannel$Interpolation, $Keyframe, $AnimationDefinition, $AnimationChannel, $AnimationChannel$Target_ } from "@package/net/minecraft/client/animation";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $SimpleJsonResourceReloadListener } from "@package/net/minecraft/server/packs/resources";

declare module "@package/net/neoforged/neoforge/client/entity/animation/json" {
    /**
     * Manager for custom `AnimationTarget`s and interpolation functions.
     * 
     * The built-in `AnimationTarget`s are: `minecraft:position`, `minecraft:rotation`, and
     * `minecraft:scale`.
     * 
     * The built-in interpolation functions are `minecraft:linear` and
     * `minecraft:catmullrom`.
     */
    export class $AnimationTypeManager {
        /**
         * Gets the full `AnimationTarget` from its channelTarget.
         */
        static getTargetFromChannelTarget(target: $AnimationChannel$Target_): $AnimationTarget;
        /**
         * Gets the `Codec` used to decode a `Keyframe` with the specified `AnimationTarget`.
         */
        static getKeyframeCodec(target: $AnimationTarget_): $Codec<$Keyframe>;
        /**
         * Gets the `ResourceLocation` associated with the given `interpolation`.
         */
        static getInterpolationName(interpolation: $AnimationChannel$Interpolation_): $ResourceLocation;
        /**
         * Retrieves a comma-separated list of all available `AnimationTarget`s, for use in error messages.
         */
        static getTargetList(): string;
        /**
         * Retrieves a comma-separated list of all available `AnimationTarget`s, for use in error messages.
         */
        static getInterpolationList(): string;
        /**
         * Gets the interpolation function associated with the given `name`.
         */
        static getInterpolation(name: $ResourceLocation_): $AnimationChannel$Interpolation;
        static init(): void;
        /**
         * Gets the `AnimationTarget` associated with the given `name`.
         */
        static getTarget(name: $ResourceLocation_): $AnimationTarget;
        /**
         * Gets the `ResourceLocation` associated with the given `target`.
         */
        static getTargetName(target: $AnimationTarget_): $ResourceLocation;
        static get targetList(): string;
        static get interpolationList(): string;
    }
    /**
     * Holds a single `AnimationDefinition` loaded from resource packs. Objects of this class will be automatically updated with new
     * `AnimationDefinition`s on reload.
     */
    export class $AnimationHolder {
        /**
         * Returns whether the animation has been loaded.
         */
        isBound(): boolean;
        /**
         * Gets the currently loaded animation. If the animation has not been loaded, returns `#EMPTY_ANIMATION`.
         */
        get(): $AnimationDefinition;
        /**
         * Gets the key associated with this animation.
         */
        key(): $ResourceLocation;
        /**
         * Gets the currently loaded animation. If the animation has not been loaded, returns `#EMPTY_ANIMATION`.
         */
        getOrNull(): $AnimationDefinition;
        static EMPTY_ANIMATION: $AnimationDefinition;
        get bound(): boolean;
        get orNull(): $AnimationDefinition;
    }
    /**
     * A loader for entity animations written in JSON. You can also get parsed animations from this class.
     */
    export class $AnimationLoader extends $SimpleJsonResourceReloadListener {
        /**
         * Gets a loaded `AnimationDefinition` with the specified `key`.
         */
        getAnimation(key: $ResourceLocation_): $AnimationDefinition;
        /**
         * Returns an `AnimationHolder` for an animation. If the specified animation has not been loaded, the holder
         * will be unbound, but may be bound in the future.
         */
        getAnimationHolder(key: $ResourceLocation_): $AnimationHolder;
        static INSTANCE: $AnimationLoader;
    }
    /**
     * A parser for parsing JSON-based entity animation files.
     */
    export class $AnimationParser {
        static CHANNEL_CODEC: $MapCodec<$AnimationChannel>;
        static CODEC: $Codec<$AnimationDefinition>;
    }
}
