import { $PointerType, $Pointer } from "@package/com/sun/jna";

declare module "@package/com/sun/jna/ptr" {
    export class $ByteByReference extends $ByReference {
        getValue(): number;
        setValue(arg0: number): void;
        constructor();
        constructor(arg0: number);
    }
    export class $ByReference extends $PointerType {
    }
    export class $IntByReference extends $ByReference {
        getValue(): number;
        setValue(arg0: number): void;
        constructor();
        constructor(arg0: number);
    }
    export class $PointerByReference extends $ByReference {
        getValue(): $Pointer;
        setValue(arg0: $Pointer): void;
        constructor();
        constructor(arg0: $Pointer);
    }
    export class $LongByReference extends $ByReference {
        getValue(): number;
        setValue(arg0: number): void;
        constructor();
        constructor(arg0: number);
    }
}
