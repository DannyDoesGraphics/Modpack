import { $NameMap } from "@package/dev/ftb/mods/ftblibrary/config";
import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag_, $Tag } from "@package/net/minecraft/nbt";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Record } from "@package/java/lang";
import { $Map_, $Map } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/dev/ftb/mods/ftbquests/quest/preset" {
    export class $VisualPresets {
        allPresets(): $Map<string, $VisualPresetRecord>;
        static makeDefaults(): $VisualPresets;
        get(name: string): ($VisualPreset) | undefined;
        nameMap(): $NameMap<string>;
        static deserialize(tag: $CompoundTag_): $VisualPresets;
        serialize(): $Tag;
        static EMPTY: $VisualPresets;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $VisualPresets>;
        constructor(presetMap: $Map_<string, $VisualPresetRecord_>);
    }
    export class $VisualPresetRecord extends $Record implements $VisualPreset {
        shapeName(): string;
        size(): number;
        static CODEC: $Codec<$VisualPresetRecord>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $VisualPresetRecord>;
        constructor(shapeName: string, size: number);
    }
    /**
     * Values that may be interpreted as {@link $VisualPresetRecord}.
     */
    export type $VisualPresetRecord_ = { shapeName?: string, size?: number,  } | [shapeName?: string, size?: number, ];
    export class $VisualPreset {
    }
    export interface $VisualPreset {
        shapeName(): string;
        size(): number;
    }
}
