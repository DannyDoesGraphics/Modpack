import { $SensorType, $Sensor, $SensorType_ } from "@package/net/minecraft/world/entity/ai/sensing";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Map_, $Map } from "@package/java/util";

declare module "@package/net/caffeinemc/mods/lithium/mixin/ai/useless_sensors" {
    export class $BrainAccessor<E extends $LivingEntity> {
    }
    export interface $BrainAccessor<E extends $LivingEntity> {
        getSensors(): $Map<$SensorType<$Sensor<E>>, $Sensor<E>>;
        get sensors(): $Map<$SensorType<$Sensor<E>>, $Sensor<E>>;
    }
    /**
     * Values that may be interpreted as {@link $BrainAccessor}.
     */
    export type $BrainAccessor_<E> = (() => $Map_<$SensorType_<$Sensor<E>>, $Sensor<E>>);
    export class $SensorAccessor {
    }
    export interface $SensorAccessor {
        getLastSenseTime(): number;
        getSenseInterval(): number;
        setLastSenseTime(arg0: number): void;
        get senseInterval(): number;
    }
}
