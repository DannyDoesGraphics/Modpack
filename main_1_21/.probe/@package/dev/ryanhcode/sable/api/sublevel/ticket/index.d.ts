import { $ObjectSet } from "@package/it/unimi/dsi/fastutil/objects";
import { $Codec_, $Codec } from "@package/com/mojang/serialization";
import { $GlobalSavedSubLevelPointer, $GlobalSavedSubLevelPointer_ } from "@package/dev/ryanhcode/sable/sublevel/storage/holding";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $UUID_, $UUID } from "@package/java/util";
import { $Unit } from "@package/net/minecraft/util";

declare module "@package/dev/ryanhcode/sable/api/sublevel/ticket" {
    export class $SubLevelLoadingTicket<T> {
        getSubLevelId(): $UUID;
        getKey(): T;
        getType(): $SubLevelLoadingTicketType<T>;
        constructor(arg0: $SubLevelLoadingTicketType_<T>, arg1: $UUID_, arg2: T);
        get subLevelId(): $UUID;
        get key(): T;
        get type(): $SubLevelLoadingTicketType<T>;
    }
    export class $SubLevelLoadingTicketType<T> extends $Record {
        name(): $ResourceLocation;
        static create<T>(arg0: $ResourceLocation_, arg1: $Codec_<T>): $SubLevelLoadingTicketType<T>;
        static byName(arg0: $ResourceLocation_): $SubLevelLoadingTicketType<never>;
        codec(): $Codec<T>;
        static COMMAND_FORCED: $SubLevelLoadingTicketType<$Unit>;
        constructor(name: $ResourceLocation_, codec: $Codec_<T>);
    }
    /**
     * Values that may be interpreted as {@link $SubLevelLoadingTicketType}.
     */
    export type $SubLevelLoadingTicketType_<T> = { name?: $ResourceLocation_, codec?: $Codec_<any>,  } | [name?: $ResourceLocation_, codec?: $Codec_<any>, ];
    export class $SubLevelTicketInfo {
        tickets(): $ObjectSet<$SubLevelLoadingTicket<never>>;
        getPointer(): $GlobalSavedSubLevelPointer;
        setPointer(arg0: $GlobalSavedSubLevelPointer_): void;
        constructor();
        constructor(arg0: $GlobalSavedSubLevelPointer_, arg1: $ObjectSet<$SubLevelLoadingTicket<never>>);
    }
}
