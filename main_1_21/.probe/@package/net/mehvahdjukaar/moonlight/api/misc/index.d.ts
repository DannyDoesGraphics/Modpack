import { $Level_ } from "@package/net/minecraft/world/level";
import { $Supplier_, $Function_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $SavedData } from "@package/net/minecraft/world/level/saveddata";
import { $Enum, $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/mehvahdjukaar/moonlight/api/misc" {
    export class $WorldSavedData extends $SavedData {
        onReassigned(arg0: $Level_): void;
        getType(): $WorldSavedDataType<$WorldSavedData>;
        sync(): void;
        constructor();
        get type(): $WorldSavedDataType<$WorldSavedData>;
    }
    export class $WorldSavedDataType$Scope extends $Enum<$WorldSavedDataType$Scope> {
        static values(): $WorldSavedDataType$Scope[];
        static valueOf(arg0: string): $WorldSavedDataType$Scope;
        static SINGLE_OVERWORLD: $WorldSavedDataType$Scope;
        static PER_LEVEL: $WorldSavedDataType$Scope;
    }
    /**
     * Values that may be interpreted as {@link $WorldSavedDataType$Scope}.
     */
    export type $WorldSavedDataType$Scope_ = "single_overworld" | "per_level";
    export class $WorldSavedDataType<D extends $WorldSavedData> {
        getStreamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, D>;
        isSyncable(): boolean;
        getName(): string;
        getData(arg0: $Level_): D;
        getCodec(): $Codec<D>;
        setData(arg0: $Level_, arg1: D): void;
        static CODEC: $Codec<$WorldSavedDataType<$WorldSavedData>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $WorldSavedDataType<$WorldSavedData>>;
        constructor(arg0: $ResourceLocation_, arg1: $Function_<$ServerLevel, D>, arg2: $Supplier_<$Codec<D>>, arg3: $Supplier_<$StreamCodec<$RegistryFriendlyByteBuf, D>>);
        constructor(arg0: $ResourceLocation_, arg1: $Function_<$ServerLevel, D>, arg2: $Supplier_<$Codec<D>>, arg3: $Supplier_<$StreamCodec<$RegistryFriendlyByteBuf, D>>, arg4: $WorldSavedDataType$Scope_);
        get streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, D>;
        get syncable(): boolean;
        get name(): string;
        get codec(): $Codec<D>;
    }
    /**
     * Values that may be interpreted as {@link $WorldSavedDataType}.
     */
    export type $WorldSavedDataType_<D> = RegistryTypes.MoonlightWorldSavedDataType;
    export interface $WorldSavedDataType<D> extends RegistryMarked<RegistryTypes.MoonlightWorldSavedDataTypeTag, RegistryTypes.MoonlightWorldSavedDataType> {}
    export class $Triplet<L, M, R> extends $Record {
        static of<A, B, C>(arg0: A, arg1: B, arg2: C): $Triplet<A, B, C>;
        left(): L;
        right(): R;
        middle(): M;
        constructor(left: L, middle: M, right: R);
    }
    /**
     * Values that may be interpreted as {@link $Triplet}.
     */
    export type $Triplet_<L, M, R> = { middle?: any, right?: any, left?: any,  } | [middle?: any, right?: any, left?: any, ];
}
