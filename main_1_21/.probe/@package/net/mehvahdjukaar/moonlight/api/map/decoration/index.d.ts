import { $BlockGetter, $LevelAccessor } from "@package/net/minecraft/world/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Holder_, $HolderSet, $Holder } from "@package/net/minecraft/core";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $MapItemSavedData } from "@package/net/minecraft/world/level/saveddata/maps";
import { $RecordCodecBuilder$Mu, $RecordCodecBuilder$Instance } from "@package/com/mojang/serialization/codecs";
import { $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $Products$P7 } from "@package/com/mojang/datafixers";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/mehvahdjukaar/moonlight/api/map/decoration" {
    export class $MLMapDecoration {
        getRot(): number;
        getY(): number;
        getType(): $Holder<$MLMapDecorationType<never, never>>;
        getDisplayName(): $Component;
        getX(): number;
        static CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MLMapDecoration>;
        constructor(arg0: $Holder_<$MLMapDecorationType<never, never>>, arg1: number, arg2: number, arg3: number, arg4: ($Component_) | undefined);
        get rot(): number;
        get y(): number;
        get type(): $Holder<$MLMapDecorationType<never, never>>;
        get displayName(): $Component;
        get x(): number;
    }
    export class $MLMapMarker<D extends $MLMapDecoration> {
        getMarkerUniqueId(): string;
        preventsExtending(): boolean;
        shouldRefreshFromWorld(): boolean;
        static assertCanSerialize(arg0: $HolderLookup$Provider): void;
        static baseCodecGroup<T extends $MLMapMarker<never>>(arg0: $RecordCodecBuilder$Instance<T>): $Products$P7<$RecordCodecBuilder$Mu<T>, $Holder<$MLMapDecorationType<never, never>>, $BlockPos, number, ($Component) | undefined, (boolean) | undefined, (boolean) | undefined, boolean>;
        createDecorationFromMarker(arg0: $MapItemSavedData): D;
        getPos(): $BlockPos;
        getType(): $Holder<$MLMapDecorationType<never, never>>;
        getDisplayName(): ($Component) | undefined;
        getFlags(): number;
        hasFlag(arg0: number): boolean;
        getRotation(): number;
        shouldSave(): boolean;
        static HAS_SMALL_TEXTURE_FLAG: number;
        static CODEC: $Codec<$MLMapMarker<never>>;
        /**
         * @deprecated
         */
        static REFERENCE_CODEC: $Codec<$MLMapMarker<never>>;
        constructor(arg0: $Holder_<$MLMapDecorationType<never, never>>, arg1: $BlockPos_, arg2: number, arg3: ($Component_) | undefined, arg4: (boolean) | undefined, arg5: (boolean) | undefined, arg6: boolean);
        get markerUniqueId(): string;
        get pos(): $BlockPos;
        get type(): $Holder<$MLMapDecorationType<never, never>>;
        get displayName(): ($Component) | undefined;
        get flags(): number;
        get rotation(): number;
    }
    export interface $MLMapDecorationType<D, M> extends RegistryMarked<RegistryTypes.MoonlightMapMarkerTag, RegistryTypes.MoonlightMapMarker> {}
    export class $MLMapDecorationType<D extends $MLMapDecoration, M extends $MLMapMarker<D>> {
        getCustomFactoryID(): $ResourceLocation;
        getDefaultMapColor(): number;
        getDecorationCodec(): $StreamCodec<$RegistryFriendlyByteBuf, D>;
        getMarkerCodec(): $MapCodec<M>;
        getAssociatedStructure(): ($HolderSet<$Structure>) | undefined;
        createMarkerFromWorld(arg0: $LevelAccessor, arg1: $BlockPos_): M;
        /**
         * @deprecated
         */
        createMarkerFromWorld(arg0: $BlockGetter, arg1: $BlockPos_): M;
        static CODEC: $Codec<$Holder<$MLMapDecorationType<never, never>>>;
        static DIRECT_CODEC: $Codec<$MLMapDecorationType<never, never>>;
        static REFERENCE_CODEC: $Codec<$Holder<$MLMapDecorationType<never, never>>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MLMapDecorationType<never, never>>>;
        get customFactoryID(): $ResourceLocation;
        get defaultMapColor(): number;
        get decorationCodec(): $StreamCodec<$RegistryFriendlyByteBuf, D>;
        get markerCodec(): $MapCodec<M>;
        get associatedStructure(): ($HolderSet<$Structure>) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $MLMapDecorationType}.
     */
    export type $MLMapDecorationType_<D, M> = RegistryTypes.MoonlightMapMarker;
}
