import { $InputStream, $OutputStream } from "@package/java/io";
import { $Function_, $BiFunction_, $BiConsumer_ } from "@package/java/util/function";
import { $Map_, $Map, $Map$Entry, $Collection, $Set } from "@package/java/util";
import { $Object, $Cloneable } from "@package/java/lang";

declare module "@package/java/util/jar" {
    export class $Attributes$Name {
        static EXTENSION_NAME: $Attributes$Name;
        static MULTI_RELEASE: $Attributes$Name;
        /**
         * @deprecated
         */
        static EXTENSION_INSTALLATION: $Attributes$Name;
        static IMPLEMENTATION_VERSION: $Attributes$Name;
        static IMPLEMENTATION_TITLE: $Attributes$Name;
        static SIGNATURE_VERSION: $Attributes$Name;
        static CLASS_PATH: $Attributes$Name;
        static MAIN_CLASS: $Attributes$Name;
        static SEALED: $Attributes$Name;
        /**
         * @deprecated
         */
        static IMPLEMENTATION_URL: $Attributes$Name;
        /**
         * @deprecated
         */
        static IMPLEMENTATION_VENDOR_ID: $Attributes$Name;
        static SPECIFICATION_VERSION: $Attributes$Name;
        static EXTENSION_LIST: $Attributes$Name;
        static SPECIFICATION_VENDOR: $Attributes$Name;
        static CONTENT_TYPE: $Attributes$Name;
        static SPECIFICATION_TITLE: $Attributes$Name;
        static MANIFEST_VERSION: $Attributes$Name;
        static IMPLEMENTATION_VENDOR: $Attributes$Name;
        constructor(arg0: string);
    }
    export class $Manifest implements $Cloneable {
        clone(): $Object;
        clear(): void;
        write(arg0: $OutputStream): void;
        read(arg0: $InputStream): void;
        getMainAttributes(): $Attributes;
        getEntries(): $Map<string, $Attributes>;
        getAttributes(arg0: string): $Attributes;
        constructor(arg0: $Manifest);
        constructor(arg0: $InputStream);
        constructor();
        get mainAttributes(): $Attributes;
        get entries(): $Map<string, $Attributes>;
    }
    export class $Attributes implements $Map<$Object, $Object>, $Cloneable {
        remove(arg0: $Object): $Object;
        size(): number;
        get(arg0: $Object): $Object;
        put(arg0: $Object, arg1: $Object): $Object;
        values(): $Collection<$Object>;
        clone(): $Object;
        clear(): void;
        getValue(arg0: string): string;
        getValue(arg0: $Attributes$Name): string;
        isEmpty(): boolean;
        entrySet(): $Set<$Map$Entry<$Object, $Object>>;
        putAll(arg0: $Map_<never, never>): void;
        containsKey(arg0: $Object): boolean;
        keySet(): $Set<$Object>;
        containsValue(arg0: $Object): boolean;
        putValue(arg0: string, arg1: string): string;
        remove(arg0: $Object, arg1: $Object): boolean;
        replace(arg0: $Object, arg1: $Object, arg2: $Object): boolean;
        replace(arg0: $Object, arg1: $Object): $Object;
        replaceAll(arg0: $BiFunction_<$Object, $Object, $Object>): void;
        merge(arg0: $Object, arg1: $Object, arg2: $BiFunction_<$Object, $Object, $Object>): $Object;
        putIfAbsent(arg0: $Object, arg1: $Object): $Object;
        compute(arg0: $Object, arg1: $BiFunction_<$Object, $Object, $Object>): $Object;
        forEach(arg0: $BiConsumer_<$Object, $Object>): void;
        computeIfAbsent(arg0: $Object, arg1: $Function_<$Object, $Object>): $Object;
        getOrDefault(arg0: $Object, arg1: $Object): $Object;
        computeIfPresent(arg0: $Object, arg1: $BiFunction_<$Object, $Object, $Object>): $Object;
        constructor(arg0: $Attributes);
        constructor(arg0: number);
        constructor();
        get empty(): boolean;
    }
}
