import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $OptionalInt } from "@package/java/util";

declare module "@package/net/minecraft/world/level/levelgen/feature/featuresize" {
    export class $FeatureSizeType<P extends $FeatureSize> {
        codec(): $MapCodec<P>;
        static THREE_LAYERS_FEATURE_SIZE: $FeatureSizeType<$ThreeLayersFeatureSize>;
        static TWO_LAYERS_FEATURE_SIZE: $FeatureSizeType<$TwoLayersFeatureSize>;
        constructor(codec: $MapCodec_<P>);
    }
    /**
     * Values that may be interpreted as {@link $FeatureSizeType}.
     */
    export type $FeatureSizeType_<P> = RegistryTypes.WorldgenFeatureSizeType;
    export class $FeatureSize {
        minClippedHeight(): $OptionalInt;
        getSizeAtHeight(height: number, midpoint: number): number;
        static CODEC: $Codec<$FeatureSize>;
        constructor(minClippedHeight: $OptionalInt);
    }
    export class $ThreeLayersFeatureSize extends $FeatureSize {
        static CODEC: $MapCodec<$ThreeLayersFeatureSize>;
        constructor(limit: number, upperLimit: number, lowerSize: number, middleSize: number, upperSize: number, minClippedHeight: $OptionalInt);
    }
    export interface $FeatureSizeType<P> extends RegistryMarked<RegistryTypes.WorldgenFeatureSizeTypeTag, RegistryTypes.WorldgenFeatureSizeType> {}
    export class $TwoLayersFeatureSize extends $FeatureSize {
        static CODEC: $MapCodec<$TwoLayersFeatureSize>;
        constructor(limit: number, lowerSize: number, upperSize: number);
        constructor(limit: number, lowerSize: number, upperSize: number, minClippedHeight: $OptionalInt);
    }
}
