import { $Codec } from "@package/com/mojang/serialization";
import { $Record } from "@package/java/lang";

declare module "@package/com/simibubi/create/api/data/datamaps" {
    export class $BlazeBurnerFuel extends $Record {
        burnTime(): number;
        static CODEC: $Codec<$BlazeBurnerFuel>;
        static BURN_TIME_CODEC: $Codec<$BlazeBurnerFuel>;
        constructor(burnTime: number);
    }
    /**
     * Values that may be interpreted as {@link $BlazeBurnerFuel}.
     */
    export type $BlazeBurnerFuel_ = { burnTime?: number,  } | [burnTime?: number, ];
}
