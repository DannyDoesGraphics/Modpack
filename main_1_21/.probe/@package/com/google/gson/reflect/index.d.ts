import { $Type } from "@package/java/lang/reflect";
import { $Class } from "@package/java/lang";

declare module "@package/com/google/gson/reflect" {
    export class $TypeToken<T> {
        static get(arg0: $Type): $TypeToken<never>;
        static get<T>(arg0: $Class<T>): $TypeToken<T>;
        /**
         * @deprecated
         */
        isAssignableFrom(arg0: $TypeToken<never>): boolean;
        /**
         * @deprecated
         */
        isAssignableFrom(arg0: $Type): boolean;
        /**
         * @deprecated
         */
        isAssignableFrom(arg0: $Class<never>): boolean;
        getType(): $Type;
        getRawType(): $Class<T>;
        static getArray(arg0: $Type): $TypeToken<never>;
        static getParameterized(arg0: $Type, ...arg1: $Type[]): $TypeToken<never>;
        get type(): $Type;
        get rawType(): $Class<T>;
    }
}
