import { $Registry } from "@package/net/minecraft/core";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $MutableComponent, $Component_, $Style } from "@package/net/minecraft/network/chat";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/network/chat/numbers" {
    export class $BlankFormat implements $NumberFormat {
        type(): $NumberFormatType<$BlankFormat>;
        format(arg0: number): $MutableComponent;
        static INSTANCE: $BlankFormat;
        static TYPE: $NumberFormatType<$BlankFormat>;
        constructor();
    }
    export class $FixedFormat implements $NumberFormat {
        type(): $NumberFormatType<$FixedFormat>;
        format(number: number): $MutableComponent;
        static TYPE: $NumberFormatType<$FixedFormat>;
        constructor(value: $Component_);
    }
    export class $NumberFormatTypes {
        static bootstrap(regsitry: $Registry<$NumberFormatType_<never>>): $NumberFormatType<never>;
        static CODEC: $Codec<$NumberFormat>;
        static MAP_CODEC: $MapCodec<$NumberFormat>;
        static OPTIONAL_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, ($NumberFormat) | undefined>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $NumberFormat>;
        constructor();
    }
    export class $NumberFormat {
    }
    export interface $NumberFormat {
        type(): $NumberFormatType<$NumberFormat>;
        format(number: number): $MutableComponent;
    }
    export interface $NumberFormatType<T> extends RegistryMarked<RegistryTypes.NumberFormatTypeTag, RegistryTypes.NumberFormatType> {}
    export class $StyledFormat implements $NumberFormat {
        type(): $NumberFormatType<$StyledFormat>;
        format(number: number): $MutableComponent;
        static PLAYER_LIST_DEFAULT: $StyledFormat;
        static SIDEBAR_DEFAULT: $StyledFormat;
        static TYPE: $NumberFormatType<$StyledFormat>;
        static NO_STYLE: $StyledFormat;
        constructor(style: $Style);
    }
    export class $NumberFormatType<T extends $NumberFormat> {
    }
    export interface $NumberFormatType<T extends $NumberFormat> {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        mapCodec(): $MapCodec<T>;
    }
    /**
     * Values that may be interpreted as {@link $NumberFormatType}.
     */
    export type $NumberFormatType_<T> = RegistryTypes.NumberFormatType;
}
