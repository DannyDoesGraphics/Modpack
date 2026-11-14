import { $TypeInfo, $TypeInfo_ } from "@package/dev/latvian/mods/rhino/type";
import { $Map } from "@package/java/util";
import { $Object, $Record, $Class } from "@package/java/lang";

declare module "@package/dev/latvian/mods/rhino/util/wrap" {
    export class $TypeWrappers {
        registerDirect<T>(arg0: $Class<T>, arg1: $TypeWrapperValidator_, arg2: $DirectTypeWrapperFactory_<T>): void;
        registerDirect<T>(arg0: $Class<T>, arg1: $DirectTypeWrapperFactory_<T>): void;
        register<T>(arg0: $Class<T>, arg1: $TypeWrapperFactory_<T>): void;
        register<T>(arg0: $Class<T>, arg1: $TypeWrapperValidator_, arg2: $TypeWrapperFactory_<T>): void;
        hasWrapper(arg0: $Object, arg1: $TypeInfo_): boolean;
        getWrapperFactory(arg0: $Object, arg1: $TypeInfo_): $TypeWrapperFactory<never>;
        wrappers: $Map<$Class<never>, $TypeWrapper<never>>;
        constructor();
    }
    export class $DirectTypeWrapperFactory<T> {
    }
    export interface $DirectTypeWrapperFactory<T> extends $TypeWrapperFactory<T> {
        wrap(arg0: $Object): T;
        wrap(arg1: $Object, arg2: $TypeInfo_): T;
    }
    /**
     * Values that may be interpreted as {@link $DirectTypeWrapperFactory}.
     */
    export type $DirectTypeWrapperFactory_<T> = ((arg0: $Object) => T);
    export class $TypeWrapperValidator {
        static ALWAYS_VALID: $TypeWrapperValidator;
    }
    export interface $TypeWrapperValidator {
        isValid(arg0: $Object, arg1: $TypeInfo_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TypeWrapperValidator}.
     */
    export type $TypeWrapperValidator_ = ((arg0: $Object, arg1: $TypeInfo) => boolean);
    export class $TypeWrapper<T> extends $Record {
        target(): $Class<T>;
        factory(): $TypeWrapperFactory<T>;
        validator(): $TypeWrapperValidator;
        constructor(target: $Class<T>, validator: $TypeWrapperValidator_, factory: $TypeWrapperFactory_<T>);
    }
    /**
     * Values that may be interpreted as {@link $TypeWrapper}.
     */
    export type $TypeWrapper_<T> = { target?: $Class<any>, factory?: $TypeWrapperFactory_<any>, validator?: $TypeWrapperValidator_,  } | [target?: $Class<any>, factory?: $TypeWrapperFactory_<any>, validator?: $TypeWrapperValidator_, ];
    export class $TypeWrapperFactory<T> {
    }
    export interface $TypeWrapperFactory<T> {
        wrap(arg1: $Object, arg2: $TypeInfo_): T;
    }
    /**
     * Values that may be interpreted as {@link $TypeWrapperFactory}.
     */
    export type $TypeWrapperFactory_<T> = ((arg1: $Object, arg2: $TypeInfo) => T);
}
