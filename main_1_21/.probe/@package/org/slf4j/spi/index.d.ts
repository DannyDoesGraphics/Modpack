import { $Supplier_ } from "@package/java/util/function";
import { $Marker } from "@package/org/slf4j";
import { $Throwable, $Object } from "@package/java/lang";

declare module "@package/org/slf4j/spi" {
    export class $LoggingEventBuilder {
    }
    export interface $LoggingEventBuilder {
        log(): void;
        log(arg0: string): void;
        log(arg0: string, arg1: $Object): void;
        log(arg0: $Supplier_<string>): void;
        log(arg0: string, ...arg1: $Object[]): void;
        log(arg0: string, arg1: $Object, arg2: $Object): void;
        setCause(arg0: $Throwable): $LoggingEventBuilder;
        setMessage(arg0: $Supplier_<string>): $LoggingEventBuilder;
        setMessage(arg0: string): $LoggingEventBuilder;
        addMarker(arg0: $Marker): $LoggingEventBuilder;
        addArgument(arg0: $Supplier_<never>): $LoggingEventBuilder;
        addArgument(arg0: $Object): $LoggingEventBuilder;
        addKeyValue(arg0: string, arg1: $Object): $LoggingEventBuilder;
        addKeyValue(arg0: string, arg1: $Supplier_<$Object>): $LoggingEventBuilder;
        set cause(value: $Throwable);
    }
}
