import { $List } from "@package/java/util";
import { $Record, $Class } from "@package/java/lang";

declare module "@package/guideme/extensions" {
    export class $ExtensionCollection {
        getExtensionPoints(): $List<$ExtensionPoint<never>>;
        get<T extends $Extension>(arg0: $ExtensionPoint_<T>): $List<T>;
        static builder(): $ExtensionCollection$Builder;
        static empty(): $ExtensionCollection;
        get extensionPoints(): $List<$ExtensionPoint<never>>;
    }
    export class $ExtensionPoint<T extends $Extension> extends $Record {
        extensionPointClass(): $Class<T>;
        constructor(extensionPointClass: $Class<T>);
    }
    /**
     * Values that may be interpreted as {@link $ExtensionPoint}.
     */
    export type $ExtensionPoint_<T> = { extensionPointClass?: $Class<$Extension>,  } | [extensionPointClass?: $Class<$Extension>, ];
    export class $Extension {
    }
    export interface $Extension {
        onExtensionsBuilt(arg0: $ExtensionCollection): void;
    }
    export class $ExtensionCollection$Builder {
        add<T extends $Extension>(arg0: $ExtensionPoint_<T>, arg1: T): $ExtensionCollection$Builder;
        addAll(arg0: $ExtensionCollection$Builder): $ExtensionCollection$Builder;
        addAll(arg0: $ExtensionCollection): $ExtensionCollection$Builder;
        build(): $ExtensionCollection;
        constructor();
    }
}
