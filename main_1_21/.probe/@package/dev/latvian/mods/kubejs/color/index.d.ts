import { $Codec } from "@package/com/mojang/serialization";
import { $TextColor } from "@package/net/minecraft/network/chat";
import { $SpecialEquality } from "@package/dev/latvian/mods/rhino/util";
import { $Object } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/dev/latvian/mods/kubejs/color" {
    export class $KubeColor {
        static CODEC: $Codec<$KubeColor>;
        static OPTIONAL_STREAM_CODEC: $StreamCodec<$ByteBuf, ($KubeColor) | undefined>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $KubeColor>;
    }
    export interface $KubeColor extends $SpecialEquality {
        getRgb(): number;
        getArgb(): number;
        getFireworkRGB(): number;
        toHexString(): string;
        serialize(): string;
        createTextColor(): $TextColor;
        specialEquals(o: $Object, shallow: boolean): boolean;
        get rgb(): number;
        get argb(): number;
        get fireworkRGB(): number;
    }
    /**
     * Values that may be interpreted as {@link $KubeColor}.
     */
    export type $KubeColor_ = "" | "light_blue_dye" | "blue_dye" | "purple_dye" | "dark_red" | "lightgraydye" | "dark_aqua" | "none" | "green_dye" | "blackdye" | "dark_blue" | "red" | "pink_dye" | "aqua" | "white" | "white_dye" | "dark_gray" | "light_purple" | "brown_dye" | "black" | "darkpurple" | "none" | "light_blue_dye" | "aqua" | "lightbluedye" | "limedye" | "purple_dye" | "green_dye" | "magenta_dye" | "-" | "lime_dye" | "yellowdye" | "graydye" | "purpledye" | "dark_purple" | "orange_dye" | "darkgray" | "browndye" | "yellow" | "lime_dye" | "bluedye" | "white_dye" | "pinkdye" | "blue_dye" | "cyandye" | "gold" | "gray" | "magenta_dye" | "blue" | "light_gray_dye" | "yellow" | "darkblue" | "transparent" | "orange_dye" | "red_dye" | "dark_purple" | "gold" | "gray" | "light_purple" | "darkred" | "greendye" | "dark_red" | "reddye" | "gray_dye" | "orangedye" | "yellow_dye" | "black_dye" | "magentadye" | "white" | "green" | "light_gray_dye" | "black_dye" | "darkgreen" | "red_dye" | "dark_green" | "black" | "lightpurple" | "pink_dye" | "dark_blue" | "green" | "darkaqua" | "gray_dye" | "cyan_dye" | "red" | "brown_dye" | "cyan_dye" | "blue" | "whitedye" | "dark_aqua" | "yellow_dye" | "dark_green" | "dark_gray" | `#${string}` | number | (() => number);
}
