import { $LevelAccessor } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Map_, $Map } from "@package/java/util";
import { $Consumer_, $Supplier_, $Supplier } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos_ } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $MapItemSavedData } from "@package/net/minecraft/world/level/saveddata/maps";
import { $Record } from "@package/java/lang";
import { $MLMapDecoration, $MLMapMarker } from "@package/net/mehvahdjukaar/moonlight/api/map/decoration";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as decoration from "@package/net/mehvahdjukaar/moonlight/api/map/decoration";

declare module "@package/net/mehvahdjukaar/moonlight/api/map" {
    export class $CustomMapData$DirtyCounter {
    }
    export interface $CustomMapData$DirtyCounter {
        clearDirty(): void;
        isDirty(): boolean;
        get dirty(): boolean;
    }
    export class $CustomMapData<C extends $CustomMapData$DirtyCounter, P> {
    }
    export interface $CustomMapData<C extends $CustomMapData$DirtyCounter, P> {
        persistOnCopyOrLock(): boolean;
        persistOnRescale(): boolean;
        createDirtyCounter(): C;
        createUpdatePatch(arg0: C): P;
        applyUpdatePatch(arg0: P): void;
        setDirty(arg0: $MapItemSavedData, arg1: $Consumer_<C>): void;
        onItemUpdate(arg0: $MapItemSavedData, arg1: $Entity): boolean;
        onItemTooltip(arg0: $MapItemSavedData, arg1: $ItemStack_): $Component;
        load(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        save(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getType(): $CustomMapData$Type<P, never>;
        get type(): $CustomMapData$Type<P, never>;
    }
    export class $ExpandedMapData {
    }
    export interface $ExpandedMapData {
        ml$setCustomDecorationsDirty(): void;
        ml$getCustomMarkers(): $Map<string, $MLMapMarker<never>>;
        ml$removeCustomMarker(arg0: string): boolean;
        ml$copy(): $MapItemSavedData;
        ml$resetCustomDecoration(): void;
        ml$toggleCustomDecoration(arg0: $LevelAccessor, arg1: $BlockPos_): boolean;
        ml$setCustomDataDirty<H extends $CustomMapData$DirtyCounter>(arg0: $CustomMapData$Type_<never, never>, arg1: $Consumer_<H>): void;
        ml$addCustomMarker<M extends $MLMapMarker<never>>(arg0: M): void;
        ml$getCustomData(): $Map<$CustomMapData$Type<never, never>, $CustomMapData<never, never>>;
        ml$getCustomDecorations(): $Map<string, $MLMapDecoration>;
        ml$getVanillaDecorationSize(): number;
    }
    export class $CustomMapData$DirtyDataPatch<P, D extends $CustomMapData<never, P>> extends $Record {
        type(): $CustomMapData$Type<P, D>;
        apply(arg0: $Map_<$CustomMapData$Type_<never, never>, $CustomMapData<never, never>>): void;
        patch(): P;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $CustomMapData$DirtyDataPatch<never, never>>;
        constructor(type: $CustomMapData$Type_<P, D>, patch: P);
    }
    /**
     * Values that may be interpreted as {@link $CustomMapData$DirtyDataPatch}.
     */
    export type $CustomMapData$DirtyDataPatch_<P, D> = { patch?: any, type?: $CustomMapData$Type_<any, $CustomMapData<never, P>>,  } | [patch?: any, type?: $CustomMapData$Type_<any, $CustomMapData<never, P>>, ];
    export class $CustomMapData$Type<P, T extends $CustomMapData<never, P>> extends $Record {
        patchCodec(): $StreamCodec<$RegistryFriendlyByteBuf, P>;
        get(arg0: $MapItemSavedData): T;
        factory(): $Supplier<T>;
        id(): $ResourceLocation;
        static CODEC: $Codec<$CustomMapData$Type<never, never>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $CustomMapData$Type<never, never>>;
        constructor(id: $ResourceLocation_, factory: $Supplier_<T>, patchCodec: $StreamCodec<$RegistryFriendlyByteBuf, P>);
    }
    /**
     * Values that may be interpreted as {@link $CustomMapData$Type}.
     */
    export type $CustomMapData$Type_<P, T> = RegistryTypes.MoonlightCustomMapDataTypes | { id?: $ResourceLocation_, factory?: $Supplier_<$CustomMapData<never, P>>, patchCodec?: $StreamCodec<$RegistryFriendlyByteBuf, any>,  } | [id?: $ResourceLocation_, factory?: $Supplier_<$CustomMapData<never, P>>, patchCodec?: $StreamCodec<$RegistryFriendlyByteBuf, any>, ];
    export interface $CustomMapData$Type<P, T> extends RegistryMarked<RegistryTypes.MoonlightCustomMapDataTypesTag, RegistryTypes.MoonlightCustomMapDataTypes> {}
}
