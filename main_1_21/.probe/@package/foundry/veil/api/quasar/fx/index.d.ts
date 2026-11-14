import { $Function_ } from "@package/java/util/function";
import { $Codec } from "@package/com/mojang/serialization";
import { $MatrixStack } from "@package/foundry/veil/api/client/render";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $TrailSettings } from "@package/foundry/veil/api/quasar/emitters/module/render";
import { $Enum } from "@package/java/lang";
import { $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/foundry/veil/api/quasar/fx" {
    export class $Trail {
        pushPoint(arg0: $Vec3_): void;
        setMinDistance(arg0: number): void;
        setWidthFunction(arg0: $Function_<number, number>): void;
        setFrequency(arg0: number): void;
        setTexture(arg0: $ResourceLocation_): void;
        setParentRotation(arg0: boolean): void;
        setBillboard(arg0: boolean): void;
        setTilingMode(arg0: $Trail$TilingMode_): void;
        pushRotatedPoint(arg0: $Vec3_, arg1: $Vec3_): void;
        setPoints(arg0: $Vec3_[]): void;
        getLength(): number;
        setLength(arg0: number): void;
        setColor(arg0: number): void;
        render(arg0: $MatrixStack, arg1: $VertexConsumer, arg2: number): void;
        getTexture(): $ResourceLocation;
        constructor(arg0: $Vec3_[], arg1: number, arg2: $Function_<number, number>);
        constructor(arg0: number, arg1: $Function_<number, number>);
        constructor(arg0: $TrailSettings);
        set minDistance(value: number);
        set widthFunction(value: $Function_<number, number>);
        set frequency(value: number);
        set parentRotation(value: boolean);
        set billboard(value: boolean);
        set tilingMode(value: $Trail$TilingMode_);
        set points(value: $Vec3_[]);
        set color(value: number);
    }
    export class $Trail$TilingMode extends $Enum<$Trail$TilingMode> {
        static values(): $Trail$TilingMode[];
        static valueOf(arg0: string): $Trail$TilingMode;
        static CODEC: $Codec<$Trail$TilingMode>;
        static REPEAT: $Trail$TilingMode;
        static STRETCH: $Trail$TilingMode;
        static NONE: $Trail$TilingMode;
    }
    /**
     * Values that may be interpreted as {@link $Trail$TilingMode}.
     */
    export type $Trail$TilingMode_ = "none" | "stretch" | "repeat";
}
