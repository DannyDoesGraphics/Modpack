import { $MetadataSectionType } from "@package/net/minecraft/server/packs/metadata";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Enum, $Record } from "@package/java/lang";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/client/resources/metadata/gui" {
    export class $GuiSpriteScaling$Tile extends $Record implements $GuiSpriteScaling {
        type(): $GuiSpriteScaling$Type;
        width(): number;
        height(): number;
        static CODEC: $MapCodec<$GuiSpriteScaling$Tile>;
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $GuiSpriteScaling$Tile}.
     */
    export type $GuiSpriteScaling$Tile_ = { height?: number, width?: number,  } | [height?: number, width?: number, ];
    export class $GuiMetadataSection extends $Record {
        scaling(): $GuiSpriteScaling;
        static CODEC: $Codec<$GuiMetadataSection>;
        static TYPE: $MetadataSectionType<$GuiMetadataSection>;
        static DEFAULT: $GuiMetadataSection;
        constructor(arg0: $GuiSpriteScaling_);
    }
    /**
     * Values that may be interpreted as {@link $GuiMetadataSection}.
     */
    export type $GuiMetadataSection_ = { scaling?: $GuiSpriteScaling_,  } | [scaling?: $GuiSpriteScaling_, ];
    export class $GuiSpriteScaling$NineSlice extends $Record implements $GuiSpriteScaling {
        border(): $GuiSpriteScaling$NineSlice$Border;
        type(): $GuiSpriteScaling$Type;
        width(): number;
        height(): number;
        static CODEC: $MapCodec<$GuiSpriteScaling$NineSlice>;
        constructor(arg0: number, arg1: number, arg2: $GuiSpriteScaling$NineSlice$Border_);
    }
    /**
     * Values that may be interpreted as {@link $GuiSpriteScaling$NineSlice}.
     */
    export type $GuiSpriteScaling$NineSlice_ = { height?: number, width?: number, border?: $GuiSpriteScaling$NineSlice$Border_,  } | [height?: number, width?: number, border?: $GuiSpriteScaling$NineSlice$Border_, ];
    export class $GuiSpriteScaling$NineSlice$Border extends $Record {
        bottom(): number;
        top(): number;
        left(): number;
        right(): number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
    }
    /**
     * Values that may be interpreted as {@link $GuiSpriteScaling$NineSlice$Border}.
     */
    export type $GuiSpriteScaling$NineSlice$Border_ = { left?: number, top?: number, right?: number, bottom?: number,  } | [left?: number, top?: number, right?: number, bottom?: number, ];
    export class $GuiSpriteScaling$Type extends $Enum<$GuiSpriteScaling$Type> implements $StringRepresentable {
        static values(): $GuiSpriteScaling$Type[];
        static valueOf(arg0: string): $GuiSpriteScaling$Type;
        codec(): $MapCodec<$GuiSpriteScaling>;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$GuiSpriteScaling$Type>;
        static STRETCH: $GuiSpriteScaling$Type;
        static TILE: $GuiSpriteScaling$Type;
        static NINE_SLICE: $GuiSpriteScaling$Type;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $GuiSpriteScaling$Type}.
     */
    export type $GuiSpriteScaling$Type_ = "stretch" | "tile" | "nine_slice";
    export class $GuiSpriteScaling {
        static CODEC: $Codec<$GuiSpriteScaling>;
        static DEFAULT: $GuiSpriteScaling;
    }
    export interface $GuiSpriteScaling {
        type(): $GuiSpriteScaling$Type;
    }
    /**
     * Values that may be interpreted as {@link $GuiSpriteScaling}.
     */
    export type $GuiSpriteScaling_ = (() => $GuiSpriteScaling$Type_);
    export class $GuiSpriteScaling$Stretch extends $Record implements $GuiSpriteScaling {
        type(): $GuiSpriteScaling$Type;
        static CODEC: $MapCodec<$GuiSpriteScaling$Stretch>;
        constructor();
    }
    /**
     * Values that may be interpreted as {@link $GuiSpriteScaling$Stretch}.
     */
    export type $GuiSpriteScaling$Stretch_ = {  } | [];
}
