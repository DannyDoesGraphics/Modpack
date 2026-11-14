import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $Codec } from "@package/com/mojang/serialization";
import { $Enum, $Record } from "@package/java/lang";

declare module "@package/foundry/veil/api/client/render/texture" {
    export class $TextureFilter$CompareFunction extends $Enum<$TextureFilter$CompareFunction> {
        static values(): $TextureFilter$CompareFunction[];
        static valueOf(arg0: string): $TextureFilter$CompareFunction;
        getId(): number;
        static CODEC: $Codec<$TextureFilter$CompareFunction>;
        static EQUAL: $TextureFilter$CompareFunction;
        static NEVER: $TextureFilter$CompareFunction;
        static GEQUAL: $TextureFilter$CompareFunction;
        static NOT_EQUAL: $TextureFilter$CompareFunction;
        static GREATER: $TextureFilter$CompareFunction;
        static LESS: $TextureFilter$CompareFunction;
        static LEQUAL: $TextureFilter$CompareFunction;
        static ALWAYS: $TextureFilter$CompareFunction;
        get id(): number;
    }
    /**
     * Values that may be interpreted as {@link $TextureFilter$CompareFunction}.
     */
    export type $TextureFilter$CompareFunction_ = "never" | "always" | "less" | "lequal" | "equal" | "not_equal" | "gequal" | "greater";
    export class $TextureFilter$Wrap extends $Enum<$TextureFilter$Wrap> {
        static values(): $TextureFilter$Wrap[];
        static valueOf(arg0: string): $TextureFilter$Wrap;
        getId(): number;
        static CODEC: $Codec<$TextureFilter$Wrap>;
        static REPEAT: $TextureFilter$Wrap;
        static MIRROR_CLAMP_TO_EDGE: $TextureFilter$Wrap;
        static CLAMP_TO_EDGE: $TextureFilter$Wrap;
        static MIRRORED_REPEAT: $TextureFilter$Wrap;
        static BY_GL_ID: $Int2ObjectMap<$TextureFilter$Wrap>;
        static CLAMP_TO_BORDER: $TextureFilter$Wrap;
        get id(): number;
    }
    /**
     * Values that may be interpreted as {@link $TextureFilter$Wrap}.
     */
    export type $TextureFilter$Wrap_ = "clamp_to_edge" | "clamp_to_border" | "mirrored_repeat" | "repeat" | "mirror_clamp_to_edge";
    export class $TextureFilter extends $Record {
        applyToTextureTarget(arg0: number): void;
        applyToTexture(arg0: number): void;
        anisotropy(): number;
        compareFunction(): $TextureFilter$CompareFunction;
        wrapZ(): $TextureFilter$Wrap;
        borderType(): $TextureFilter$EdgeType;
        seamless(): boolean;
        wrapX(): $TextureFilter$Wrap;
        wrapY(): $TextureFilter$Wrap;
        borderColor(): number;
        blur(): boolean;
        minFilter(): number;
        magFilter(): number;
        mipmap(): boolean;
        static REPEAT_DEFAULT_CODEC: $Codec<$TextureFilter>;
        static REPEAT: $TextureFilter;
        static CLAMP_DEFAULT_CODEC: $Codec<$TextureFilter>;
        static CLAMP: $TextureFilter;
        constructor(blur: boolean, mipmap: boolean, anisotropy: number, compareFunction: $TextureFilter$CompareFunction_, wrapX: $TextureFilter$Wrap_, wrapY: $TextureFilter$Wrap_, wrapZ: $TextureFilter$Wrap_, borderColor: number, borderType: $TextureFilter$EdgeType_, seamless: boolean);
    }
    /**
     * Values that may be interpreted as {@link $TextureFilter}.
     */
    export type $TextureFilter_ = { compareFunction?: $TextureFilter$CompareFunction_, seamless?: boolean, borderColor?: number, anisotropy?: number, borderType?: $TextureFilter$EdgeType_, wrapZ?: $TextureFilter$Wrap_, wrapY?: $TextureFilter$Wrap_, wrapX?: $TextureFilter$Wrap_, mipmap?: boolean, blur?: boolean,  } | [compareFunction?: $TextureFilter$CompareFunction_, seamless?: boolean, borderColor?: number, anisotropy?: number, borderType?: $TextureFilter$EdgeType_, wrapZ?: $TextureFilter$Wrap_, wrapY?: $TextureFilter$Wrap_, wrapX?: $TextureFilter$Wrap_, mipmap?: boolean, blur?: boolean, ];
    export class $TextureFilter$EdgeType extends $Enum<$TextureFilter$EdgeType> {
        static values(): $TextureFilter$EdgeType[];
        static valueOf(arg0: string): $TextureFilter$EdgeType;
        static FLOAT: $TextureFilter$EdgeType;
        static CODEC: $Codec<$TextureFilter$EdgeType>;
        static UINT: $TextureFilter$EdgeType;
        static INT: $TextureFilter$EdgeType;
    }
    /**
     * Values that may be interpreted as {@link $TextureFilter$EdgeType}.
     */
    export type $TextureFilter$EdgeType_ = "float" | "int" | "uint";
}
